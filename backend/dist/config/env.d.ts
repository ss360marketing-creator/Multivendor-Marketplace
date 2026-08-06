export type AppEnv = {
    port: number;
    host: string;
    corsOrigin: string | string[];
    nodeEnv: string;
    jwtSecret: string;
    jwtExpiresIn: string;
};
export declare const env: AppEnv;
