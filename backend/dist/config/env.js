function parseCorsOrigin(value) {
    if (!value || value === '*') {
        return '*';
    }
    const origins = value
        .split(',')
        .map(origin => origin.trim())
        .filter(Boolean);
    return origins.length <= 1 ? origins[0] ?? '*' : origins;
}
export const env = {
    port: Number(process.env.PORT ?? 8787),
    host: process.env.HOST ?? '0.0.0.0',
    corsOrigin: parseCorsOrigin(process.env.CORS_ORIGIN),
    nodeEnv: process.env.NODE_ENV ?? 'development',
    jwtSecret: process.env.JWT_SECRET ?? 'dev-only-super-secret-change-me',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
};
//# sourceMappingURL=env.js.map