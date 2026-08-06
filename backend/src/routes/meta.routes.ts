import type { FastifyInstance } from 'fastify'
import { env } from '../config/env.js'

export async function registerMetaRoutes(app: FastifyInstance) {
  app.get('/meta', async () => {
    return {
      success: true,
      data: {
        service: 'multivendor-marketplace-api',
        version: '0.1.0',
        environment: env.nodeEnv,
        modules: ['health', 'catalog', 'orders', 'admin'],
        endpoints: [
          '/health',
          '/api/v1/meta',
          '/api/v1/catalog/categories',
          '/api/v1/catalog/products',
          '/api/v1/catalog/vendors',
          '/api/v1/orders',
          '/api/v1/admin/dashboard/summary',
        ],
      },
    }
  })
}
