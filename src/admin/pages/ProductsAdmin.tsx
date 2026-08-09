import { useEffect, useMemo, useState } from 'react'
import type { AdminSection } from '../adminData'
import { useSession } from '@/state/session-store'
import { useCatalog } from '@/state/catalog-store'
import AddProductModal from '../components/AddProductModal'
import {
  createAdminProduct,
  deleteAdminProduct,
  listAdminProducts,
  updateAdminProduct,
  type AdminProduct,
} from '@/api/admin'
import type { Product } from '@/data/marketplace'

type Props = { onNavigate: (s: AdminSection) => void }

const STATUS_BADGE: Record<string, string> = {
  published: 'bg-[#D1FAE5] text-[#065F46]',
  draft: 'bg-[#F4F4F8] text-[#5B5B72]',
  scheduled: 'bg-[#EEF2FF] text-[#4338CA]',
  archived: 'bg-[#F4F4F8] text-[#9B9BB8]',
}

function formatSku(product: AdminProduct) {
  return `SKU-${product.id.slice(0, 8).toUpperCase()}`
}

export default function ProductsAdmin({ onNavigate: _ }: Props) {
  const session = useSession()
  const { addProduct: addToCatalogStore } = useCatalog()
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('sales')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<AdminProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  useEffect(() => {
    if (!session.token) return

    let cancelled = false

    void (async () => {
      setLoading(true)
      const response = await listAdminProducts(session.token!, { q: search || undefined, status: statusFilter === 'all' ? undefined : statusFilter, limit: 100 })

      if (cancelled) return

      if (response.success) {
        setItems(response.data)
        setError(null)
      } else {
        setItems([])
        setError(response.error.message)
      }

      setLoading(false)
    })()

    return () => {
      cancelled = true
    }
  }, [session.token, search, statusFilter])

  const filtered = useMemo(() => {
    return items.filter(product => {
      const matchSearch =
        !search ||
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.vendor.toLowerCase().includes(search.toLowerCase()) ||
        formatSku(product).toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'all' || product.status === statusFilter
      return matchSearch && matchStatus
    })
  }, [items, search, statusFilter])

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === 'sales') return b.reviewCount - a.reviewCount
      if (sortBy === 'price') return b.price - a.price
      if (sortBy === 'stock') return a.stock - b.stock
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })
  }, [filtered, sortBy])

  const toggleSelect = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const allSelected = sorted.length > 0 && sorted.every(p => selected.has(p.id))
  const toggleAll = () => {
    if (allSelected) setSelected(new Set())
    else setSelected(new Set(sorted.map(p => p.id)))
  }

  const refresh = async () => {
    if (!session.token) return
    const response = await listAdminProducts(session.token, { q: search || undefined, status: statusFilter === 'all' ? undefined : statusFilter, limit: 100 })
    if (response.success) {
      setItems(response.data)
    }
  }

  const handleToggleStatus = async (product: AdminProduct) => {
    if (!session.token) return
    setBusyId(product.id)
    const nextStatus = product.status === 'published' ? 'DRAFT' : 'PUBLISHED'
    const response = await updateAdminProduct(session.token, product.id, { status: nextStatus })
    if (response.success) {
      await refresh()
    } else {
      setError(response.error.message)
    }
    setBusyId(null)
  }

  const handleFeatureToggle = async (product: AdminProduct) => {
    if (!session.token) return
    setBusyId(product.id)
    const response = await updateAdminProduct(session.token, product.id, { featured: product.badge !== 'bestseller' })
    if (response.success) {
      await refresh()
    } else {
      setError(response.error.message)
    }
    setBusyId(null)
  }

  const handleDelete = async (product: AdminProduct) => {
    if (!session.token) return
    setBusyId(product.id)
    const response = await deleteAdminProduct(session.token, product.id)
    if (response.success) {
      await refresh()
    } else {
      setError(response.error.message)
    }
    setBusyId(null)
  }

  const handleCreateProduct = async (productData: Partial<AdminProduct> & Partial<Product>) => {
    const newId = `prod_${Date.now()}`
    const fullProduct: AdminProduct = {
      id: newId,
      title: productData.title ?? 'Untitled Product',
      vendor: productData.vendor ?? 'Marketplace',
      vendorId: productData.vendorId ?? 'v1',
      verified: true,
      rating: 5.0,
      reviewCount: 0,
      price: productData.price ?? 0,
      originalPrice: productData.originalPrice ?? productData.price ?? 0,
      discount: productData.discount ?? 0,
      image: productData.image ?? '',
      images: productData.images ?? [productData.image ?? ''],
      category: productData.category ?? 'Electronics',
      categorySlug: productData.categorySlug ?? 'electronics',
      freeShipping: productData.freeShipping ?? false,
      badge: productData.badge,
      stock: productData.stock ?? 10,
      installment: productData.installment,
      description: productData.description,
      status: productData.status ?? 'published',
    }

    if (session.token) {
      try {
        const res = await createAdminProduct(session.token, {
          title: fullProduct.title,
          vendorId: fullProduct.vendorId,
          vendor: fullProduct.vendor,
          category: fullProduct.category,
          price: fullProduct.price,
          originalPrice: fullProduct.originalPrice,
          discount: fullProduct.discount,
          stock: fullProduct.stock,
          description: fullProduct.description,
          image: fullProduct.image,
          images: fullProduct.images,
          freeShipping: fullProduct.freeShipping,
          badge: fullProduct.badge,
          installment: fullProduct.installment,
          status: fullProduct.status.toUpperCase(),
        })

        if (res.success && res.data) {
          fullProduct.id = res.data.id
        }
      } catch {
        // Fallback for dev mode
      }
    }

    setItems(prev => [fullProduct, ...prev])

    // Update global storefront catalog so new product is visible live on frontend!
    addToCatalogStore({
      id: fullProduct.id,
      title: fullProduct.title,
      vendor: fullProduct.vendor,
      vendorId: fullProduct.vendorId,
      verified: true,
      rating: 5.0,
      reviewCount: 0,
      price: fullProduct.price,
      originalPrice: fullProduct.originalPrice,
      discount: fullProduct.discount,
      image: fullProduct.image,
      images: fullProduct.images,
      category: fullProduct.category,
      categorySlug: fullProduct.categorySlug,
      freeShipping: fullProduct.freeShipping,
      badge: fullProduct.badge,
      stock: fullProduct.stock,
      installment: fullProduct.installment,
      colors: productData.colors,
      sizes: productData.sizes,
      description: fullProduct.description,
      features: productData.features,
    })
  }

  return (
    <div className="space-y-5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Products</h1>
          <p className="mt-0.5 text-sm text-[#6B6B82]">Manage your marketplace catalog</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-xl border border-[#E2E2EC] px-4 py-2 text-sm font-semibold text-[#6B6B82] transition-colors hover:bg-[#F4F4F8]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Import
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 rounded-xl bg-[#E8450A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#C93A07] shadow-sm shadow-[#E8450A]/20"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add Product
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-[#E2E2EC] bg-white p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[200px] flex-1">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search products, title, vendor..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="h-9 w-full rounded-lg border border-[#E2E2EC] bg-[#F4F4F8] pl-9 pr-4 text-sm text-[#111118] outline-none transition-colors placeholder:text-[#9B9BB8] focus:border-[#E8450A]"
            />
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-[#F4F4F8] p-1">
            {['all', 'published', 'draft', 'archived'].map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`rounded-md px-3 py-1 text-xs font-semibold capitalize transition-all ${statusFilter === s ? 'bg-white text-[#111118] shadow-sm' : 'text-[#9B9BB8] hover:text-[#6B6B82]'}`}
              >
                {s}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="h-9 rounded-lg border border-[#E2E2EC] bg-[#F4F4F8] px-3 pr-8 text-sm text-[#111118] outline-none"
          >
            <option value="sales">Sort: Top Reviews</option>
            <option value="price">Sort: Price</option>
            <option value="stock">Sort: Low Stock</option>
            <option value="rating">Sort: Rating</option>
          </select>
        </div>

        {error && (
          <div className="mt-3 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]">
            {error}
          </div>
        )}

        {selected.size > 0 && (
          <div className="mt-3 flex items-center gap-3 border-t border-[#F4F4F8] pt-3">
            <span className="text-sm font-semibold text-[#111118]">{selected.size} selected</span>
            <button
              onClick={async () => {
                if (!session.token) return
                for (const id of selected) {
                  await deleteAdminProduct(session.token, id)
                }
                setSelected(new Set())
                await refresh()
              }}
              className="rounded-lg bg-[#FEE2E2] px-3 py-1 text-xs font-semibold text-[#991B1B]"
            >
              Delete Selected
            </button>
            <button onClick={() => setSelected(new Set())} className="ml-auto text-xs text-[#9B9BB8] hover:text-[#6B6B82]">
              Clear
            </button>
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-[#E2E2EC] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F4F4F8] bg-[#F9F9FC]">
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} className="rounded border-[#E2E2EC] accent-[#E8450A]" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">Product</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">Category</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">Price</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">Stock</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">Reviews</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-5 py-12 text-center text-sm text-[#6B6B82]">
                    Loading products from backend...
                  </td>
                </tr>
              ) : sorted.map(product => (
                <tr key={product.id} className={`transition-colors hover:bg-[#F9F9FC] ${selected.has(product.id) ? 'bg-[#FFF7F5]' : ''}`}>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(product.id)}
                      onChange={() => toggleSelect(product.id)}
                      className="rounded border-[#E2E2EC] accent-[#E8450A]"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#F4F4F8] text-lg">
                        📦
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-[#111118]">{product.title}</p>
                        <div className="mt-0.5 flex items-center gap-2">
                          <span className="font-mono text-[11px] text-[#9B9BB8]">{formatSku(product)}</span>
                          <span className="text-[11px] text-[#9B9BB8]">· {product.vendor}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-lg bg-[#F4F4F8] px-2 py-1 text-xs font-medium text-[#6B6B82]">{product.category}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono font-bold text-[#111118]">${product.price.toLocaleString()}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-mono font-semibold ${product.stock === 0 ? 'text-[#E11D48]' : product.stock < 10 ? 'text-[#D97706]' : 'text-[#111118]'}`}>
                      {product.stock === 0 ? 'Out of Stock' : product.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-[#111118]">{product.reviewCount.toLocaleString()}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATUS_BADGE[product.status] ?? STATUS_BADGE.draft}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        disabled={busyId === product.id}
                        onClick={() => void handleToggleStatus(product)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-[#9B9BB8] transition-colors hover:bg-[#F4F4F8] hover:text-[#111118] disabled:cursor-not-allowed disabled:opacity-60"
                        title={product.status === 'published' ? 'Move to draft' : 'Publish'}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        disabled={busyId === product.id}
                        onClick={() => void handleFeatureToggle(product)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-[#9B9BB8] transition-colors hover:bg-[#F4F4F8] hover:text-[#111118] disabled:cursor-not-allowed disabled:opacity-60"
                        title="Toggle featured"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                      <button
                        disabled={busyId === product.id}
                        onClick={() => void handleDelete(product)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-[#9B9BB8] transition-colors hover:bg-[#FEE2E2] hover:text-[#E11D48] disabled:cursor-not-allowed disabled:opacity-60"
                        title="Delete product"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-[#F4F4F8] px-5 py-3">
          <p className="text-xs text-[#9B9BB8]">Showing {sorted.length} of {items.length} products</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, '...', 48].map((p, i) => (
              <button
                key={i}
                onClick={() => typeof p === 'number' && setPage(p)}
                className={`h-8 w-8 rounded-lg text-xs font-semibold transition-colors ${page === p ? 'bg-[#E8450A] text-white' : 'text-[#6B6B82] hover:bg-[#F4F4F8]'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AddProductModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleCreateProduct}
      />
    </div>
  )
}
