export type CategoryRecord = {
  id: string
  name: string
  slug: string
  image: string
  count: number
  status: 'active' | 'hidden'
  featured: boolean
}

export type ProductRecord = {
  id: string
  title: string
  vendor: string
  vendorId: string
  category: string
  categorySlug: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  reviewCount: number
  stock: number
  image: string
  status: 'draft' | 'published' | 'scheduled' | 'archived'
  featured: boolean
  freeShipping: boolean
  updatedAt: string
}

export type VendorRecord = {
  id: string
  name: string
  owner: string
  email: string
  status: 'active' | 'review' | 'suspended' | 'pending'
  verified: boolean
  rating: number
  products: number
  sales: number
  revenue: number
  commission: number
  pendingPayout: number
  responseTime: string
  followers: number
  tagline: string
}

export type OrderRecord = {
  id: string
  customer: string
  vendor: string
  product: string
  amount: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refund_pending'
  payment: 'Stripe' | 'PayPal' | 'COD'
  date: string
  items: number
}

export type DashboardAlert = {
  type: 'warning' | 'error' | 'info'
  message: string
  time: string
  action: string
}

export type StorefrontSection = {
  id: string
  type: string
  label: string
  visible: boolean
  scheduled: boolean
  order: number
}

export const categories: CategoryRecord[] = [
  {
    id: 'cat-mobiles',
    name: 'Mobiles',
    slug: 'mobiles',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=450&fit=crop&auto=format',
    count: 12840,
    status: 'active',
    featured: true,
  },
  {
    id: 'cat-electronics',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=450&fit=crop&auto=format',
    count: 28490,
    status: 'active',
    featured: true,
  },
  {
    id: 'cat-laptops',
    name: 'Laptops',
    slug: 'laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=450&fit=crop&auto=format',
    count: 4820,
    status: 'active',
    featured: true,
  },
  {
    id: 'cat-fashion',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=450&fit=crop&auto=format',
    count: 89640,
    status: 'active',
    featured: true,
  },
  {
    id: 'cat-beauty',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=450&fit=crop&auto=format',
    count: 31750,
    status: 'active',
    featured: true,
  },
]

export const products: ProductRecord[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    vendor: 'SoundVault',
    vendorId: 'v1',
    category: 'Electronics',
    categorySlug: 'electronics',
    price: 279,
    originalPrice: 399,
    discount: 30,
    rating: 4.8,
    reviewCount: 3842,
    stock: 127,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format',
    status: 'published',
    featured: true,
    freeShipping: true,
    updatedAt: '2026-08-01T08:30:00.000Z',
  },
  {
    id: '2',
    title: 'Apple iPhone 15 Pro - 256GB Natural Titanium',
    vendor: 'iZone Official',
    vendorId: 'v2',
    category: 'Mobiles',
    categorySlug: 'mobiles',
    price: 999,
    originalPrice: 1099,
    discount: 9,
    rating: 4.9,
    reviewCount: 7294,
    stock: 48,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=600&fit=crop&auto=format',
    status: 'published',
    featured: true,
    freeShipping: true,
    updatedAt: '2026-08-01T09:10:00.000Z',
  },
  {
    id: '3',
    title: 'MacBook Air M3 - 13-inch, 16GB RAM, 512GB SSD',
    vendor: 'TechHub Pro',
    vendorId: 'v3',
    category: 'Laptops',
    categorySlug: 'laptops',
    price: 1299,
    originalPrice: 1499,
    discount: 13,
    rating: 4.9,
    reviewCount: 2841,
    stock: 32,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop&auto=format',
    status: 'published',
    featured: false,
    freeShipping: true,
    updatedAt: '2026-08-01T10:05:00.000Z',
  },
  {
    id: '4',
    title: "Nike Air Max 270 - Men's Running Shoes",
    vendor: 'NikeWorld',
    vendorId: 'v4',
    category: 'Fashion',
    categorySlug: 'fashion',
    price: 89,
    originalPrice: 150,
    discount: 41,
    rating: 4.7,
    reviewCount: 5621,
    stock: 84,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&auto=format',
    status: 'published',
    featured: true,
    freeShipping: true,
    updatedAt: '2026-07-31T14:20:00.000Z',
  },
]

export const vendors: VendorRecord[] = [
  {
    id: 'v1',
    name: 'SoundVault',
    owner: 'David Chen',
    email: 'david@soundvault.com',
    status: 'active',
    verified: true,
    rating: 4.8,
    products: 284,
    sales: 1842,
    revenue: 412000,
    commission: 8,
    pendingPayout: 24800,
    responseTime: '< 1 hour',
    followers: 18400,
    tagline: 'Premium audio for every lifestyle',
  },
  {
    id: 'v2',
    name: 'iZone Official',
    owner: 'Aisha Malik',
    email: 'aisha@izone.pk',
    status: 'active',
    verified: true,
    rating: 4.9,
    products: 142,
    sales: 3241,
    revenue: 2140000,
    commission: 5,
    pendingPayout: 89400,
    responseTime: '< 30 min',
    followers: 84200,
    tagline: 'Your authorised Apple destination',
  },
  {
    id: 'v3',
    name: 'TechHub Pro',
    owner: 'Raj Sharma',
    email: 'raj@techhubpro.co',
    status: 'active',
    verified: true,
    rating: 4.7,
    products: 421,
    sales: 2108,
    revenue: 1820000,
    commission: 6,
    pendingPayout: 41200,
    responseTime: '< 2 hours',
    followers: 37600,
    tagline: 'Laptops and computing, expertly sourced',
  },
]

export const orders: OrderRecord[] = [
  {
    id: '#NX-29481',
    customer: 'Sarah Mitchell',
    vendor: 'SoundVault',
    product: 'Sony WH-1000XM5',
    amount: 279,
    status: 'delivered',
    payment: 'Stripe',
    date: 'Jul 24, 2026',
    items: 1,
  },
  {
    id: '#NX-29480',
    customer: 'Omar Abdullah',
    vendor: 'iZone Official',
    product: 'iPhone 15 Pro 256GB',
    amount: 999,
    status: 'shipped',
    payment: 'Stripe',
    date: 'Jul 24, 2026',
    items: 1,
  },
  {
    id: '#NX-29479',
    customer: 'Priya Kapoor',
    vendor: 'BeautyVault',
    product: 'The Ordinary Serum x 3',
    amount: 33,
    status: 'processing',
    payment: 'PayPal',
    date: 'Jul 23, 2026',
    items: 3,
  },
  {
    id: '#NX-29478',
    customer: 'James Larson',
    vendor: 'TechHub Pro',
    product: 'MacBook Air M3',
    amount: 1299,
    status: 'processing',
    payment: 'Stripe',
    date: 'Jul 23, 2026',
    items: 1,
  },
]

export const dashboardSummary = {
  grossSales: 284500,
  netSales: 231900,
  orders: 1284,
  customers: 8420,
  vendors: 214,
  products: 8421,
  conversionRate: 3.8,
  averageOrderValue: 184.9,
}

export const salesData = [
  { date: 'Jan 1', revenue: 42000, orders: 284 },
  { date: 'Jan 8', revenue: 58000, orders: 341 },
  { date: 'Jan 15', revenue: 51000, orders: 298 },
  { date: 'Jan 22', revenue: 67000, orders: 412 },
  { date: 'Jan 29', revenue: 74000, orders: 438 },
]

export const categoryRevenue = [
  { name: 'Mobiles', value: 284000 },
  { name: 'Electronics', value: 198000 },
  { name: 'Fashion', value: 142000 },
  { name: 'Beauty', value: 98000 },
  { name: 'Laptops', value: 87000 },
]

export const alerts: DashboardAlert[] = [
  { type: 'warning', message: '5 products below minimum stock threshold', time: '2 min ago', action: 'View Low Stock' },
  { type: 'error', message: '2 payment failures in the last hour', time: '18 min ago', action: 'View Failures' },
  { type: 'info', message: '3 new vendor applications pending review', time: '1 hr ago', action: 'Review Now' },
]

export const storefrontSections: StorefrontSection[] = [
  { id: 's1', type: 'Hero Banner', label: 'Summer 2026 Campaign', visible: true, scheduled: false, order: 1 },
  { id: 's2', type: 'Category Grid', label: 'Shop by Category', visible: true, scheduled: false, order: 2 },
  { id: 's3', type: 'Product Carousel', label: 'Trending Now', visible: true, scheduled: false, order: 3 },
  { id: 's4', type: 'Flash Sale', label: 'Flash Sale', visible: true, scheduled: true, order: 4 },
]
