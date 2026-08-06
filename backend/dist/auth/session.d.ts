import type { FastifyInstance } from 'fastify';
import type { AuthContext, JwtPayload } from './types.js';
export declare function hashSessionId(sessionId: string): string;
export declare function buildAuthContext(userId: string, sessionId: string): Promise<AuthContext | null>;
export declare function createAuthSession(app: FastifyInstance, userId: string): Promise<{
    token: string;
    sessionId: `${string}-${string}-${string}-${string}-${string}`;
    expiresAt: Date;
    authContext: AuthContext | null;
}>;
export declare function resolveActiveAuth(payload: JwtPayload): Promise<AuthContext | null>;
