import type { UserRole } from '@prisma/client'

export type JwtPayload = {
  sub: string
  sid: string
}

export type AuthPermission = {
  slug: string
  resource: string
  action: string
}

export type AuthContext = {
  userId: string
  email: string
  fullName: string
  role: UserRole
  roles: string[]
  permissions: AuthPermission[]
  sessionId: string
}
