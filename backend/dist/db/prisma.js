import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
const connectionString = process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/multivendor_marketplace?schema=public';
const adapter = new PrismaPg({ connectionString });
const globalForPrisma = globalThis;
export const prisma = globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error'],
    });
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}
//# sourceMappingURL=prisma.js.map