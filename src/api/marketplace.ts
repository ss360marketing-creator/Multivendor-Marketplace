import { apiRequest } from './client'

export type AuthUser = {
  id: string
  email: string
  fullName: string
  role: string
  roles: string[]
}

export type AuthPermissions = Array<{
  slug: string
  resource: string
  action: string
}>

export type AuthSessionResponse = {
  accessToken: string
  expiresAt: string
  sessionId: string
  user: AuthUser
  permissions: AuthPermissions
}

export type AdminDashboardSummary = {
  summary: {
    grossSales: number
    netSales: number
    orders: number
    customers: number
    vendors: number
    products: number
    conversionRate: number
    averageOrderValue: number
  }
  alerts: Array<{
    type: 'warning' | 'error' | 'info'
    message: string
    time: string
    action: string
  }>
  sales: Array<{ date: string; revenue: number; orders: number }>
  categoryRevenue: Array<{ name: string; value: number }>
  topProducts: Array<{
    id: string
    name: string
    vendor: string
    category: string
    price: number
    stock: number
    status: string
    sales: number
    rating: number
  }>
  topVendors: Array<{
    id: string
    name: string
    rating: number
    verified: boolean
  }>
  lowStockProducts: Array<{
    id: string
    title: string
    stock: number
    vendorId: string
  }>
  pendingVendors: Array<{
    id: string
    name: string
    verified: boolean
    rating: number
  }>
  recentOrders: Array<{
    id: string
    customer: string
    vendor: string
    product: string
    amount: number
    status: string
    payment: string
    date: string
    items: number
  }>
}

export function login(email: string, password?: string) {
  return apiRequest<AuthSessionResponse>('/api/v1/auth/login', {
    method: 'POST',
    body: { email, password },
  })
}

export function registerUser(payload: { email: string; password: string; fullName: string; phone?: string }) {
  return apiRequest<AuthSessionResponse>('/api/v1/auth/register', {
    method: 'POST',
    body: payload,
  })
}

export async function getMe(token: string) {
  return apiRequest<{ user: AuthUser; permissions: AuthPermissions }>('/api/v1/auth/me', {
    token,
  })
}

export async function logout(token: string) {
  return apiRequest<{ loggedOut: boolean }>('/api/v1/auth/logout', {
    method: 'POST',
    token,
  })
}

export async function getAdminDashboardSummary(token: string) {
  return apiRequest<AdminDashboardSummary>('/api/v1/admin/dashboard/summary', {
    token,
  })
}

export async function listCategories() {
  return apiRequest<{ id: string; name: string; slug: string; image: string | null; icon: string | null; status: string; featured: boolean; parentId: string | null; count: number; childCount: number }[]>(
    '/api/v1/catalog/categories',
  )
}

export async function getCategoryBySlug(slug: string) {
  return apiRequest<{ id: string; name: string; slug: string; image: string | null; icon: string | null; status: string; featured: boolean; parentId: string | null; count: number; childCount: number }>(
    `/api/v1/catalog/categories/${encodeURIComponent(slug)}`,
  )
}

export async function listProducts(query?: { q?: string; category?: string; limit?: number }) {
  const params = new URLSearchParams()
  if (query?.q) params.set('q', query.q)
  if (query?.category) params.set('category', query.category)
  if (query?.limit) params.set('limit', String(query.limit))

  return apiRequest<Array<{
    id: string
    title: string
    vendor: string
    vendorId: string
    verified: boolean
    rating: number
    reviewCount: number
    price: number
    originalPrice: number
    discount: number
    image: string
    images?: string[]
    category: string
    categorySlug: string
    freeShipping: boolean
    badge?: 'bestseller' | 'flash' | 'new' | 'sponsored'
    stock: number
    installment?: string
    colors?: string[]
    sizes?: string[]
    description?: string
    features?: string[]
  }>>(`/api/v1/catalog/products${params.toString() ? `?${params.toString()}` : ''}`)
}

export async function getProductById(id: string) {
  return apiRequest<{
    id: string
    title: string
    vendor: string
    vendorId: string
    verified: boolean
    rating: number
    reviewCount: number
    price: number
    originalPrice: number
    discount: number
    image: string
    images?: string[]
    category: string
    categorySlug: string
    freeShipping: boolean
    badge?: 'bestseller' | 'flash' | 'new' | 'sponsored'
    stock: number
    installment?: string
    colors?: string[]
    sizes?: string[]
    description?: string
    features?: string[]
  }>(`/api/v1/catalog/products/${encodeURIComponent(id)}`)
}

export async function listVendors() {
  return apiRequest<Array<{
    id: string
    name: string
    logo: string
    cover: string
    rating: number
    productCount: number
    positiveFeedback: number
    followers: number
    verified: boolean
    responseTime: string
    tagline: string
  }>>('/api/v1/catalog/vendors')
}

export async function listOrders() {
  return apiRequest<Array<{
    id: string
    customer: string
    vendor: string
    product: string
    amount: number
    status: string
    payment: string
    date: string
    items: number
  }>>('/api/v1/orders')
}

export async function getVendorById(id: string) {
  return apiRequest<{
    id: string
    name: string
    logo: string
    cover: string
    rating: number
    productCount: number
    positiveFeedback: number
    followers: number
    verified: boolean
    responseTime: string
    tagline: string
  }>(`/api/v1/catalog/vendors/${encodeURIComponent(id)}`)
}

export async function listVendorProducts(vendorId: string) {
  return apiRequest<Array<{
    id: string
    title: string
    vendor: string
    vendorId: string
    verified: boolean
    rating: number
    reviewCount: number
    price: number
    originalPrice: number
    discount: number
    image: string
    images?: string[]
    category: string
    categorySlug: string
    freeShipping: boolean
    badge?: 'bestseller' | 'flash' | 'new' | 'sponsored'
    stock: number
    installment?: string
  }>>(`/api/v1/catalog/products?vendorId=${encodeURIComponent(vendorId)}&limit=24`)
}
