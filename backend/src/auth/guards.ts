import type { FastifyReply, FastifyRequest, preHandlerHookHandler } from 'fastify'
import type { AuthContext, JwtPayload } from './types.js'
import { resolveActiveAuth } from './session.js'

async function authenticateRequest(request: FastifyRequest, reply: FastifyReply): Promise<AuthContext | null> {
  if (request.auth) {
    return request.auth
  }

  const payload = (await request.jwtVerify()) as JwtPayload
  const auth = await resolveActiveAuth(payload)

  if (!auth) {
    reply.code(401).send({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Your session is invalid or expired.',
      },
    })
    return null
  }

  request.auth = auth
  return auth
}

export function requireAuthentication(): preHandlerHookHandler {
  return async (request, reply) => {
    await authenticateRequest(request, reply)
  }
}

export function requireRoles(requiredRoles: string[]): preHandlerHookHandler {
  return async (request, reply) => {
    const auth = await authenticateRequest(request, reply)
    if (!auth) return

    if (!requiredRoles.some(role => auth.roles.includes(role) || auth.role === role)) {
      reply.code(403).send({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'You do not have access to this resource.',
        },
      })
    }
  }
}

export function requirePermissions(requiredPermissions: string[]): preHandlerHookHandler {
  return async (request, reply) => {
    const auth = await authenticateRequest(request, reply)
    if (!auth) return

    const permissionSlugs = new Set(auth.permissions.map(permission => permission.slug))

    if (!requiredPermissions.every(permission => permissionSlugs.has(permission))) {
      reply.code(403).send({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'You do not have the required permissions.',
        },
      })
    }
  }
}
