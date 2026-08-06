import type { AuthContext } from '../auth/types.js'

declare module 'fastify' {
  interface FastifyRequest {
    auth?: AuthContext
  }
}
