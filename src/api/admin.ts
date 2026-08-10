import { apiRequest } from './client'

export type AdminCategory = {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  icon: string | null
  parentId: string | null
  status: string
  sortOrder: number
  featured: boolean
  count: number
  childCount: number
}

export type AdminProduct = {
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
  description?: string
  status: string
  variants?: Array<{
    id: string
    name: string
    sku: string
    price: number | null
    stockQty: number
    attributes: unknown
    isDefault: boolean
  }>
}

export type AdminVendor = {
  id: string
  name: string
  slug: string
  email: string
  owner: string
  logo: string
  cover: string
  status: string
  verified: boolean
  rating: number
  productCount: number
  positiveFeedback: number
  followers: number
  responseTime: string
  tagline: string
  commissionRate: number
}

export type AdminOrder = {
  id: string
  customer: string
  vendor: string
  product: string
  amount: number
  status: string
  payment: string
  date: string
  items: number
  customerDetails?: {
    fullName: string
    email: string
    phone: string | null
  }
  trackingNumber?: string | null
  paymentStatus?: string | null
  lineItems?: Array<{
    product: { title: string; slug: string }
    quantity: number
    unitPrice: number
  }>
  payments?: unknown[]
  shipments?: unknown[]
}

export type AdminUpdatableStatus = 'DRAFT' | 'SCHEDULED' | 'PUBLISHED' | 'ARCHIVED'

export function listAdminProducts(token: string, query?: { q?: string; status?: string; vendorId?: string; categoryId?: string; limit?: number }) {
  const params = new URLSearchParams()
  if (query?.q) params.set('q', query.q)
  if (query?.status) params.set('status', query.status)
  if (query?.vendorId) params.set('vendorId', query.vendorId)
  if (query?.categoryId) params.set('categoryId', query.categoryId)
  if (query?.limit) params.set('limit', String(query.limit))

  return apiRequest<AdminProduct[]>(`/api/v1/admin/products${params.toString() ? `?${params.toString()}` : ''}`, { token })
}

export function updateAdminProduct(token: string, id: string, body: Partial<{
  title: string
  slug: string
  sku: string
  description: string
  status: AdminUpdatableStatus
  price: number
  salePrice: number | null
  costPrice: number | null
  discountPct: number
  stockQuantity: number
  lowStockLimit: number
  rating: number
  reviewCount: number
  freeShipping: boolean
  featured: boolean
  vendorId: string
  categoryId: string
}>) {
  return apiRequest<AdminProduct>(`/api/v1/admin/products/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    token,
    body,
  })
}

export function createAdminProduct(token: string, body: {
  title: string
  vendorId?: string
  vendor?: string
  categoryId?: string
  category?: string
  price: number
  originalPrice?: number
  discount?: number
  stock: number
  description?: string
  image?: string
  images?: string[]
  freeShipping?: boolean
  badge?: 'bestseller' | 'flash' | 'new' | 'sponsored'
  installment?: string
  colors?: string[]
  sizes?: string[]
  features?: string[]
  status?: string
  variants?: Array<{
    name: string
    sku: string
    price?: number | null
    stockQty?: number
    attributes?: Record<string, unknown>
    isDefault?: boolean
  }>
}) {
  return apiRequest<AdminProduct>('/api/v1/admin/products', {
    method: 'POST',
    token,
    body,
  })
}

export function deleteAdminProduct(token: string, id: string) {
  return apiRequest<{ deleted: boolean }>(`/api/v1/admin/products/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    token,
  })
}

export function listAdminVendors(token: string, query?: { q?: string; status?: string; limit?: number }) {
  const params = new URLSearchParams()
  if (query?.q) params.set('q', query.q)
  if (query?.status) params.set('status', query.status)
  if (query?.limit) params.set('limit', String(query.limit))

  return apiRequest<AdminVendor[]>(`/api/v1/admin/vendors${params.toString() ? `?${params.toString()}` : ''}`, { token })
}

export function updateAdminVendor(token: string, id: string, body: Partial<{
  email: string
  fullName: string
  storeName: string
  slug: string
  logoUrl: string | null
  coverUrl: string | null
  status: 'REVIEW' | 'ACTIVE' | 'SUSPENDED' | 'BANNED'
  verified: boolean
  rating: number
  positiveScore: number
  responseTime: string | null
  tagline: string | null
  commissionRate: number
}>) {
  return apiRequest<AdminVendor>(`/api/v1/admin/vendors/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    token,
    body,
  })
}

export function createAdminVendor(token: string, body: {
  storeName: string
  email: string
  fullName: string
  tagline?: string
  commissionRate?: number
}) {
  return apiRequest<AdminVendor>('/api/v1/admin/vendors', {
    method: 'POST',
    token,
    body,
  })
}

export function deleteAdminVendor(token: string, id: string) {
  return apiRequest<{ suspended: boolean }>(`/api/v1/admin/vendors/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    token,
  })
}

export function listAdminOrders(token: string, query?: { q?: string; status?: string; paymentStatus?: string; limit?: number }) {
  const params = new URLSearchParams()
  if (query?.q) params.set('q', query.q)
  if (query?.status) params.set('status', query.status)
  if (query?.paymentStatus) params.set('paymentStatus', query.paymentStatus)
  if (query?.limit) params.set('limit', String(query.limit))

  return apiRequest<AdminOrder[]>(`/api/v1/admin/orders${params.toString() ? `?${params.toString()}` : ''}`, { token })
}

export function updateAdminOrder(token: string, id: string, body: Partial<{
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'REFUND_PENDING' | 'REFUNDED'
  paymentStatus: 'PENDING' | 'AUTHORIZED' | 'PAID' | 'FAILED' | 'REFUNDED' | 'PARTIALLY_REFUNDED'
  paymentMethod: 'CARD' | 'BANK_TRANSFER' | 'CASH_ON_DELIVERY' | 'WALLET' | 'INSTALLMENT'
  subtotal: number
  shippingFee: number
  discountAmount: number
  taxAmount: number
  totalAmount: number
  currency: string
  notes: string | null
  trackingNumber: string | null
}>) {
  return apiRequest<AdminOrder>(`/api/v1/admin/orders/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    token,
    body,
  })
}

export function deleteAdminOrder(token: string, id: string) {
  return apiRequest<{ cancelled: boolean }>(`/api/v1/admin/orders/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    token,
  })
}

export function createAdminOrder(token: string, body: {
  customerName: string
  customerEmail: string
  vendorName: string
  productTitle: string
  amount: number
  paymentMethod: string
  status: string
  itemsCount?: number
  address?: string
}) {
  return apiRequest<AdminOrder>('/api/v1/admin/orders', {
    method: 'POST',
    token,
    body,
  })
}

export type AdminCustomer = {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  orders: number
  spent: number
  ltv: number
  segment: 'VIP' | 'Regular' | 'New' | 'At-Risk'
  status: 'active' | 'inactive' | 'suspended'
  joined: string
  lastOrder: string
  addresses?: Array<{ label: string; line1: string; city: string; country: string }>
}

export function listAdminCustomers(token: string, query?: { q?: string; segment?: string; limit?: number }) {
  const params = new URLSearchParams()
  if (query?.q) params.set('q', query.q)
  if (query?.segment) params.set('segment', query.segment)
  if (query?.limit) params.set('limit', String(query.limit))

  return apiRequest<AdminCustomer[]>(`/api/v1/admin/customers${params.toString() ? `?${params.toString()}` : ''}`, { token })
}

export function createAdminCustomer(token: string, body: {
  name: string
  email: string
  phone: string
  segment?: string
}) {
  return apiRequest<AdminCustomer>('/api/v1/admin/customers', {
    method: 'POST',
    token,
    body,
  })
}

export function updateAdminCustomer(token: string, id: string, body: Partial<{
  name: string
  email: string
  phone: string
  segment: string
  status: string
}>) {
  return apiRequest<AdminCustomer>(`/api/v1/admin/customers/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    token,
    body,
  })
}

export function deleteAdminCustomer(token: string, id: string) {
  return apiRequest<{ suspended: boolean }>(`/api/v1/admin/customers/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    token,
  })
}

export function updateAdminProfile(token: string | null, body: { fullName?: string; email?: string }) {
  return apiRequest<{ user: { id: string; email: string; fullName: string; role: string } }>('/api/v1/auth/profile', {
    method: 'PATCH',
    token,
    body,
  })
}

export function updateAdminPassword(token: string | null, body: { currentPassword?: string; newPassword?: string }) {
  return apiRequest<{ message: string }>('/api/v1/auth/password', {
    method: 'PATCH',
    token,
    body,
  })
}

export async function uploadAdminImage(fileOrBase64: string | File): Promise<{ success: boolean; url: string }> {
  const formData = new FormData()
  formData.append('file', fileOrBase64)
  formData.append('upload_preset', 'Marketplace')

  const res = await fetch('https://api.cloudinary.com/v1_1/cj0hpbl2/image/upload', {
    method: 'POST',
    body: formData,
  })

  const data = (await res.json()) as { secure_url?: string; error?: { message: string } }

  if (data.secure_url) {
    return { success: true, url: data.secure_url }
  }

  throw new Error(data.error?.message || 'Cloudinary upload failed')
}
