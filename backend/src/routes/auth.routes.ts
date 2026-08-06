import type { FastifyInstance } from 'fastify'
import { prisma } from '../db/index.js'
import { hashPassword, verifyPassword } from '../auth/password.js'
import { createAuthSession, hashSessionId } from '../auth/session.js'
import { requireAuthentication } from '../auth/guards.js'

type RegisterBody = {
  email?: string
  password?: string
  fullName?: string
  phone?: string
}

type LoginBody = {
  email?: string
  password?: string
}

function serializeAuth(auth: NonNullable<Awaited<ReturnType<typeof createAuthSession>>['authContext']>) {
  return {
    user: {
      id: auth.userId,
      email: auth.email,
      fullName: auth.fullName,
      role: auth.role,
      roles: auth.roles,
    },
    permissions: auth.permissions,
  }
}

export async function registerAuthRoutes(app: FastifyInstance) {
  app.post('/auth/register', async (request, reply) => {
    const body = request.body as RegisterBody
    const email = body.email?.trim().toLowerCase()
    const password = body.password?.trim()
    const fullName = body.fullName?.trim()
    const phone = body.phone?.trim() || null

    if (!email || !password || !fullName) {
      return reply.code(400).send({
        success: false,
        error: {
          code: 'INVALID_PAYLOAD',
          message: 'Email, password, and full name are required.',
        },
      })
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return reply.code(409).send({
        success: false,
        error: {
          code: 'EMAIL_EXISTS',
          message: 'An account with this email already exists.',
        },
      })
    }

    const customerRole = await prisma.role.findUnique({ where: { slug: 'customer' } })
    if (!customerRole) {
      return reply.code(500).send({
        success: false,
        error: {
          code: 'ROLE_MISSING',
          message: 'Customer role is missing from the database.',
        },
      })
    }

    const passwordHash = await hashPassword(password)

    const user = await prisma.$transaction(async tx => {
      const created = await tx.user.create({
        data: {
          email,
          passwordHash,
          fullName,
          phone,
          role: 'CUSTOMER',
          status: 'ACTIVE',
          customerProfile: {
            create: {
              loyaltyPoints: 0,
              lifetimeValue: 0,
            },
          },
        },
      })

      await tx.userRoleAssignment.create({
        data: {
          userId: created.id,
          roleId: customerRole.id,
          assignedBy: null,
        },
      })

      return created
    })

    const authSession = await createAuthSession(app, user.id)

    return reply.code(201).send({
      success: true,
      data: {
        accessToken: authSession.token,
        expiresAt: authSession.expiresAt,
        sessionId: authSession.sessionId,
        ...serializeAuth(authSession.authContext!),
      },
    })
  })

  app.post('/auth/login', async (request, reply) => {
    const body = request.body as LoginBody
    const email = body.email?.trim().toLowerCase()
    const password = body.password?.trim()

    if (!email || !password) {
      return reply.code(400).send({
        success: false,
        error: {
          code: 'INVALID_PAYLOAD',
          message: 'Email and password are required.',
        },
      })
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user?.passwordHash) {
      return reply.code(401).send({
        success: false,
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password.',
        },
      })
    }

    const valid = await verifyPassword(password, user.passwordHash)
    if (!valid) {
      return reply.code(401).send({
        success: false,
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password.',
        },
      })
    }

    const authSession = await createAuthSession(app, user.id)

    return reply.send({
      success: true,
      data: {
        accessToken: authSession.token,
        expiresAt: authSession.expiresAt,
        sessionId: authSession.sessionId,
        ...serializeAuth(authSession.authContext!),
      },
    })
  })

  app.get('/auth/me', { preHandler: requireAuthentication() }, async request => {
    return {
      success: true,
      data: {
        user: {
          id: request.auth!.userId,
          email: request.auth!.email,
          fullName: request.auth!.fullName,
          role: request.auth!.role,
          roles: request.auth!.roles,
        },
        permissions: request.auth!.permissions,
      },
    }
  })

  app.post('/auth/logout', { preHandler: requireAuthentication() }, async request => {
    await prisma.session.updateMany({
      where: {
        tokenHash: hashSessionId(request.auth!.sessionId),
      },
      data: {
        revokedAt: new Date(),
      },
    })

    return {
      success: true,
      data: {
        loggedOut: true,
      },
    }
  })
}
