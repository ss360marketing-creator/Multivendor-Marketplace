import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { listCategories, listOrders, listProducts, listVendors } from '@/api/marketplace'
import {
  categories as fallbackCategories,
  products as fallbackProducts,
  vendors as fallbackVendors,
  type Category,
  type Product,
  type Vendor,
} from '@/data/marketplace'

type CatalogOrder = {
  id: string
  customer: string
  vendor: string
  product: string
  amount: number
  status: string
  payment: string
  date: string
  items: number
}

type CatalogContextValue = {
  categories: Category[]
  products: Product[]
  vendors: Vendor[]
  orders: CatalogOrder[]
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
  addProduct: (product: Product) => void
}

const CatalogContext = createContext<CatalogContextValue | null>(null)

const CATEGORY_COLORS = ['#EEF2FF', '#F0FDF4', '#FFF7ED', '#FDF4FF', '#FFF1F2', '#F0F9FF', '#F5F3FF', '#FEFCE8']

function toCategory(live: { id: string; name: string; slug: string; image: string | null; count: number }, index: number): Category {
  const fallback = fallbackCategories.find(category => category.slug === live.slug)

  return {
    name: live.name,
    slug: live.slug,
    image: live.image || fallback?.image || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=450&fit=crop&auto=format',
    count: live.count,
    color: fallback?.color || CATEGORY_COLORS[index % CATEGORY_COLORS.length],
  }
}

function toProduct(
  live: {
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
    badge?: Product['badge']
    stock: number
    installment?: string
    colors?: string[]
    sizes?: string[]
    description?: string
    features?: string[]
  },
  index: number,
): Product {
  const fallback = fallbackProducts[index % fallbackProducts.length]

  return {
    id: live.id,
    title: live.title,
    vendor: live.vendor,
    vendorId: live.vendorId,
    verified: live.verified,
    rating: live.rating,
    reviewCount: live.reviewCount,
    price: live.price,
    originalPrice: live.originalPrice,
    discount: live.discount,
    image: live.image || fallback.image,
    images: live.images?.length ? live.images : fallback.images,
    category: live.category,
    categorySlug: live.categorySlug,
    freeShipping: live.freeShipping,
    badge: live.badge,
    stock: live.stock,
    installment: live.installment || fallback.installment,
    colors: live.colors?.length ? live.colors : fallback.colors,
    sizes: live.sizes?.length ? live.sizes : fallback.sizes,
    description: live.description || fallback.description,
    features: live.features?.length ? live.features : fallback.features,
  }
}

function toVendor(
  live: {
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
  },
  index: number,
): Vendor {
  const fallback = fallbackVendors[index % fallbackVendors.length]

  return {
    id: live.id,
    name: live.name,
    logo: live.logo || fallback.logo,
    cover: live.cover || fallback.cover,
    rating: live.rating,
    productCount: live.productCount,
    positiveFeedback: live.positiveFeedback,
    followers: live.followers,
    verified: live.verified,
    responseTime: live.responseTime || fallback.responseTime,
    tagline: live.tagline || fallback.tagline,
  }
}

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState(fallbackCategories)
  const [products, setProducts] = useState(fallbackProducts)
  const [vendors, setVendors] = useState(fallbackVendors)
  const [orders, setOrders] = useState<CatalogOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = async () => {
    setLoading(true)
    setError(null)

    const [categoryResponse, productResponse, vendorResponse, orderResponse] = await Promise.all([
      listCategories(),
      listProducts({ limit: 24 }),
      listVendors(),
      listOrders(),
    ])

    if (categoryResponse.success) {
      setCategories(categoryResponse.data.map((category, index) => toCategory(category, index)))
    }

    if (productResponse.success) {
      setProducts(productResponse.data.map((product, index) => toProduct(product, index)))
    }

    if (vendorResponse.success) {
      setVendors(vendorResponse.data.map((vendor, index) => toVendor(vendor, index)))
    }

    if (orderResponse.success) {
      setOrders(orderResponse.data)
    }

    const firstError =
      [categoryResponse, productResponse, vendorResponse, orderResponse].find(result => !result.success) ??
      null

    if (firstError && !firstError.success) {
      setError(firstError.error.message)
    }

    setLoading(false)
  }

  useEffect(() => {
    void refresh()
  }, [])

  const addProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev])
  }

  const value = useMemo<CatalogContextValue>(
    () => ({
      categories,
      products,
      vendors,
      orders,
      loading,
      error,
      refresh,
      addProduct,
    }),
    [categories, products, vendors, orders, loading, error],
  )

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
}

export function useCatalog() {
  const context = useContext(CatalogContext)

  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider')
  }

  return context
}
