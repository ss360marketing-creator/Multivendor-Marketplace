# Backend Scaffold

This folder contains the phase 2 API scaffold for the multivendor marketplace.

## Scripts

- `npm run dev` - run the API in watch mode
- `npm run build` - compile TypeScript to `dist`
- `npm run start` - run the compiled server
- `npm run prisma:generate` - generate the Prisma client
- `npm run prisma:format` - format the Prisma schema
- `npm run db:push` - push schema changes to the database
- `npm run db:seed` - populate the database with marketplace fixtures and auth roles

## Database

This scaffold uses Prisma with PostgreSQL. Add `DATABASE_URL` to your environment before generating or pushing the schema.

Runtime Prisma access uses the PostgreSQL adapter from `@prisma/adapter-pg`.

The initial schema includes auth and RBAC tables for roles, permissions, assignments, and sessions.

## API Shape

- `GET /health`
- `GET /api/v1/meta`
- `GET /api/v1/catalog/categories`
- `GET /api/v1/catalog/products`
- `GET /api/v1/catalog/vendors`
- `GET /api/v1/orders`
- `GET /api/v1/admin/dashboard/summary`
- `GET /api/v1/admin/storefront/sections`

The data returned by these endpoints is intentionally seeded with realistic marketplace fixtures so the frontend can be wired up quickly in later phases.
