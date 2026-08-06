import type { preHandlerHookHandler } from 'fastify';
export declare function requireAuthentication(): preHandlerHookHandler;
export declare function requireRoles(requiredRoles: string[]): preHandlerHookHandler;
export declare function requirePermissions(requiredPermissions: string[]): preHandlerHookHandler;
