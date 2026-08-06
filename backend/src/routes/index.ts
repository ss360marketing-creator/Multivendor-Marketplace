import type { FastifyInstance } from 'fastify'
import { registerAdminCrudRoutes } from './admin-crud.routes.js'
import { registerAdminRoutes } from './admin.routes.js'
import { registerAuthRoutes } from './auth.routes.js'
import { registerCatalogRoutes } from './catalog.routes.js'
import { registerHealthRoutes } from './health.routes.js'
import { registerMetaRoutes } from './meta.routes.js'
import { registerOrdersRoutes } from './orders.routes.js'

export function registerRoutes(app: FastifyInstance) {
  app.register(registerHealthRoutes)
  app.register(registerMetaRoutes, { prefix: '/api/v1' })
  app.register(registerAuthRoutes, { prefix: '/api/v1' })
  app.register(registerCatalogRoutes, { prefix: '/api/v1' })
  app.register(registerOrdersRoutes, { prefix: '/api/v1' })
  app.register(registerAdminRoutes, { prefix: '/api/v1' })
  app.register(registerAdminCrudRoutes, { prefix: '/api/v1' })
}
