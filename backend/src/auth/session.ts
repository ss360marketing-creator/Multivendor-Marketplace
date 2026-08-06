import crypto from 'node:crypto'
import type { FastifyInstance } from 'fastify'
import { prisma } from '../db/index.js'
import type { AuthContext, AuthPermission, JwtPayload } from './types.js'

export function hashSessionId(sessionId: string) {
  return crypto.createHash('sha256').update(sessionId).digest('hex')
}

export async function buildAuthContext(userId: string, sessionId: string): Promise<AuthContext | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      roleAssignments: {
        include: {
          role: {
            include: {
              permissions: {
                include: {
                  permission: true,
                },
              },
            },
          },
        },
      },
    },
  })

  if (!user) {
    return null
  }

  const roles = new Set<string>([user.role])
  const permissions = new Map<string, AuthPermission>()

  for (const assignment of user.roleAssignments) {
    roles.add(assignment.role.slug)
    for (const rolePermission of assignment.role.permissions) {
      permissions.set(rolePermission.permission.slug, {
        slug: rolePermission.permission.slug,
        resource: rolePermission.permission.resource,
        action: rolePermission.permission.action,
      })
    }
  }

  if (user.role === 'SUPER_ADMIN') {
    const allPermissions = await prisma.permission.findMany()

    for (const permission of allPermissions) {
      permissions.set(permission.slug, {
        slug: permission.slug,
        resource: permission.resource,
        action: permission.action,
      })
    }
  }

  return {
    userId: user.id,
    email: user.email,
    fullName: user.fullName,
    role: user.role,
    roles: [...roles],
    permissions: [...permissions.values()],
    sessionId,
  }
}

export async function createAuthSession(app: FastifyInstance, userId: string) {
  const sessionId = crypto.randomUUID()
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
  const token = app.jwt.sign({ sub: userId, sid: sessionId } satisfies JwtPayload)

  await prisma.session.create({
    data: {
      userId,
      tokenHash: hashSessionId(sessionId),
      ipAddress: null,
      userAgent: null,
      expiresAt,
    },
  })

  const authContext = await buildAuthContext(userId, sessionId)

  return {
    token,
    sessionId,
    expiresAt,
    authContext,
  }
}

export async function resolveActiveAuth(payload: JwtPayload) {
  const session = await prisma.session.findUnique({
    where: {
      tokenHash: hashSessionId(payload.sid),
    },
  })

  if (!session || session.revokedAt || session.expiresAt < new Date()) {
    return null
  }

  return buildAuthContext(payload.sub, payload.sid)
}
