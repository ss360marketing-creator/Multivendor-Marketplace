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
  return {
    name: live.name,
    slug: live.slug,
    image: live.image || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=450&fit=crop&auto=format',
    count: live.count,
    color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
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
    image: live.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format',
    images: live.images?.length ? live.images : [live.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&auto=format'],
    category: live.category,
    categorySlug: live.categorySlug,
    freeShipping: live.freeShipping,
    badge: live.badge,
    stock: live.stock,
    installment: live.installment,
    colors: live.colors?.length ? live.colors : [],
    sizes: live.sizes?.length ? live.sizes : [],
    description: live.description || 'No description provided.',
    features: live.features?.length ? live.features : [],
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
  return {
    id: live.id,
    name: live.name,
    logo: live.logo || 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=80&h=80&fit=crop&auto=format',
    cover: live.cover || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=300&fit=crop&auto=format',
    rating: live.rating,
    productCount: live.productCount,
    positiveFeedback: live.positiveFeedback,
    followers: live.followers,
    verified: live.verified,
    responseTime: live.responseTime,
    tagline: live.tagline,
  }
}

function getSavedCustomProducts(): Product[] {
  try {
    const raw = localStorage.getItem('custom_added_products')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>(() => {
    return getSavedCustomProducts()
  })
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [orders, setOrders] = useState<CatalogOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = async () => {
    setLoading(true)
    setError(null)

    const [categoryResponse, productResponse, vendorResponse, orderResponse] = await Promise.all([
      listCategories(),
      listProducts({ limit: 50 }),
      listVendors(),
      listOrders(),
    ])

    if (categoryResponse.success && categoryResponse.data.length > 0) {
      setCategories(categoryResponse.data.map((category, index) => toCategory(category, index)))
    }

    const customSaved = getSavedCustomProducts()

    if (productResponse.success && productResponse.data.length > 0) {
      const liveProds = productResponse.data.map((product, index) => toProduct(product, index))
      // Combine live products with custom added products, avoiding duplicates by ID
      const existingIds = new Set(liveProds.map(p => p.id))
      const extraCustom = customSaved.filter(p => !existingIds.has(p.id))
      setProducts([...extraCustom, ...liveProds])
    } else {
      setProducts([...customSaved])
    }

    if (vendorResponse.success && vendorResponse.data.length > 0) {
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
    setProducts(prev => {
      const updated = [newProduct, ...prev.filter(p => p.id !== newProduct.id)]
      try {
        const custom = getSavedCustomProducts()
        const newCustom = [newProduct, ...custom.filter(p => p.id !== newProduct.id)]
        localStorage.setItem('custom_added_products', JSON.stringify(newCustom))
      } catch {
        // Fallback
      }
      return updated
    })
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
