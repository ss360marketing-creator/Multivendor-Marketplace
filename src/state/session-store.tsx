import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { getMe, login, logout, registerUser, type AuthPermissions, type AuthUser } from '@/api/marketplace'

type SessionState = {
  token: string | null
  user: AuthUser | null
  permissions: AuthPermissions
  status: 'loading' | 'anonymous' | 'authenticated'
  signIn: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>
  signUp: (payload: { email: string; password: string; fullName: string; phone?: string }) => Promise<{ ok: boolean; message?: string }>
  signOut: () => Promise<void>
  refresh: () => Promise<void>
}

const SessionContext = createContext<SessionState | null>(null)

const STORAGE_KEY = 'multivendor-session-token'

const MOCK_ADMIN_USER: AuthUser = {
  id: 'usr_admin',
  email: 'admin@marketplace.local',
  fullName: 'Super Admin',
  role: 'admin',
  roles: ['admin', 'super_admin'],
}

const MOCK_PERMISSIONS: AuthPermissions = [
  { slug: 'admin:access', resource: 'admin', action: 'access' },
  { slug: 'products:manage', resource: 'products', action: 'manage' },
  { slug: 'orders:manage', resource: 'orders', action: 'manage' },
  { slug: 'vendors:manage', resource: 'vendors', action: 'manage' },
  { slug: 'users:manage', resource: 'users', action: 'manage' },
  { slug: 'analytics:view', resource: 'analytics', action: 'view' },
]

export function SessionProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<AuthUser | null>(null)
  const [permissions, setPermissions] = useState<AuthPermissions>([])
  const [status, setStatus] = useState<'loading' | 'anonymous' | 'authenticated'>('loading')

  const hydrate = async (sessionToken: string | null) => {
    if (!sessionToken) {
      setToken(null)
      setUser(null)
      setPermissions([])
      setStatus('anonymous')
      return
    }

    setStatus('loading')
    try {
      const response = await getMe(sessionToken)

      if (!response.success) {
        localStorage.removeItem(STORAGE_KEY)
        setToken(null)
        setUser(null)
        setPermissions([])
        setStatus('anonymous')
        return
      }

      setToken(sessionToken)
      setUser(response.data.user)
      setPermissions(response.data.permissions)
      setStatus('authenticated')
    } catch {
      localStorage.removeItem(STORAGE_KEY)
      setToken(null)
      setUser(null)
      setPermissions([])
      setStatus('anonymous')
    }
  }

  useEffect(() => {
    void hydrate(localStorage.getItem(STORAGE_KEY))
  }, [])

  const value = useMemo<SessionState>(
    () => ({
      token,
      user,
      permissions,
      status,
      signIn: async (email, password) => {
        try {
          const response = await login(email, password)

          if (response.success) {
            localStorage.setItem(STORAGE_KEY, response.data.accessToken)
            setToken(response.data.accessToken)
            setUser(response.data.user)
            setPermissions(response.data.permissions)
            setStatus('authenticated')
            return { ok: true }
          } else {
            return { ok: false, message: response.error?.message || 'Invalid email or password.' }
          }
        } catch {
          return { ok: false, message: 'Server is currently starting up. Please retry in a few seconds.' }
        }
      },
      signUp: async (payload) => {
        try {
          const response = await registerUser(payload)
          if (response.success) {
            localStorage.setItem(STORAGE_KEY, response.data.accessToken)
            setToken(response.data.accessToken)
            setUser(response.data.user)
            setPermissions(response.data.permissions)
            setStatus('authenticated')
            return { ok: true }
          }
        } catch {
          // Fallback if offline
        }
        return { ok: false, message: 'Registration failed. Email may already exist.' }
      },
      signOut: async () => {
        if (token && token !== 'demo-admin-token') {
          try { await logout(token) } catch { /* ignore */ }
        }
        localStorage.removeItem(STORAGE_KEY)
        setToken(null)
        setUser(null)
        setPermissions([])
        setStatus('anonymous')
      },
      refresh: async () => {
        await hydrate(localStorage.getItem(STORAGE_KEY))
      },
    }),
    [permissions, status, token, user],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession() {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider')
  }

  return context
}
