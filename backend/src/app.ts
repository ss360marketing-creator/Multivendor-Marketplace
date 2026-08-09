import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import Fastify from 'fastify'
import { env } from './config/env.js'
import { registerRoutes } from './routes/index.js'

export function buildApp() {
  const app = Fastify({
    logger: env.nodeEnv === 'development' ? { level: 'info' } : true,
    bodyLimit: 50 * 1024 * 1024,
  })

  app.register(cors, { origin: env.corsOrigin })
  app.register(jwt, { secret: env.jwtSecret })

  app.setNotFoundHandler((_, reply) => {
    reply.code(404).send({
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: 'Route not found.',
      },
    })
  })

  app.setErrorHandler((error, _, reply) => {
    const typedError = error as {
      statusCode?: number
      code?: string
      message?: string
    }

    app.log.error(error)

    reply.code(typedError.statusCode ?? 500).send({
      success: false,
      error: {
        code: typedError.code ?? 'INTERNAL_SERVER_ERROR',
        message: typedError.message || 'Something went wrong.',
      },
    })
  })

  registerRoutes(app)

  return app
}
