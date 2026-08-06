import { env } from '../config/env.js';
export async function registerHealthRoutes(app) {
    app.get('/health', async () => {
        return {
            success: true,
            data: {
                status: 'ok',
                service: 'multivendor-marketplace-api',
                environment: env.nodeEnv,
                timestamp: new Date().toISOString(),
            },
        };
    });
}
//# sourceMappingURL=health.routes.js.map