import { useEffect, useMemo, useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'
import ProductGalleryPanel from './ProductGalleryPanel'
import ProductPurchasePanel from './ProductPurchasePanel'
import ProductTabsPanel from './ProductTabsPanel'
import ProductSellerCard from './ProductSellerCard'
import RelatedProductsSection from './RelatedProductsSection'
import { useCatalog } from '../../state/catalog-store'
import { getProductById, listProducts } from '@/api/marketplace'
import type { Product } from '@/data/marketplace'

type Props = {
  productId: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function ProductPageContent({ productId, onNavigate, wishlist, onToggleWishlist, onAddToCart }: Props) {
  const { products, vendors } = useCatalog()
  const [liveProduct, setLiveProduct] = useState<Product | null>(null)
  const [liveRelated, setLiveRelated] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState<'features' | 'shipping' | 'returns'>('features')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    let cancelled = false

    void (async () => {
      setLoading(true)

      const productResponse = await getProductById(productId)

      if (cancelled) return

      if (productResponse.success) {
        setLiveProduct(productResponse.data)
        setSelectedColor(productResponse.data.colors?.[0] ?? '')
        setSelectedSize(productResponse.data.sizes?.[0] ?? '')

        const relatedResponse = await listProducts({ category: productResponse.data.categorySlug, limit: 5 })
        if (!cancelled && relatedResponse.success) {
          setLiveRelated(relatedResponse.data.filter(product => product.id !== productResponse.data.id))
        } else {
          setLiveRelated(null)
        }
      } else {
        setLiveProduct(null)
        setLiveRelated(null)
      }

      setLoading(false)
    })()

    return () => {
      cancelled = true
    }
  }, [productId])

  const product = liveProduct ?? products.find(p => p.id === productId) ?? products[0]
  const vendor = vendors.find(v => v.id === product.vendorId) ?? vendors[0]
  const related = useMemo(
    () => liveRelated ?? products.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 5),
    [liveRelated, products, product.categorySlug, product.id],
  )
  const allImages = product.images?.length ? product.images : [product.image]

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      vendor: product.vendor,
      variant: [selectedColor, selectedSize].filter(Boolean).join(' / ') || undefined,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-[#F9F8F5] min-h-screen">
      {loading && (
        <div className="border-b border-[#E8E7E2] bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-4 text-sm text-[#6B6A66]">Loading live product details...</div>
        </div>
      )}

      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#9CA3AF]">
          <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-[#E8450A] transition-colors">Home</button>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          <button onClick={() => onNavigate({ type: 'category', slug: product.categorySlug })} className="hover:text-[#E8450A] transition-colors">{product.category}</button>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          <span className="text-[#0E0E0E] truncate max-w-[300px]">{product.title}</span>
        </nav>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <ProductGalleryPanel
            product={product}
            activeImage={activeImage}
            allImages={allImages}
            onSelectImage={setActiveImage}
            wishlisted={wishlist.has(product.id)}
            onToggleWishlist={() => onToggleWishlist(product.id)}
          />

          <ProductPurchasePanel
            product={product}
            vendor={vendor}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            qty={qty}
            added={added}
            onSelectColor={setSelectedColor}
            onSelectSize={setSelectedSize}
            onIncreaseQty={() => setQty(q => q + 1)}
            onDecreaseQty={() => setQty(q => Math.max(1, q - 1))}
            onAddToCart={handleAddToCart}
          />
        </div>

        <ProductTabsPanel product={product} tab={tab} onTabChange={setTab} />
        <ProductSellerCard vendor={vendor} onNavigate={onNavigate} />
        <RelatedProductsSection items={related} wishlist={wishlist} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} onNavigate={onNavigate} />
      </div>
    </div>
  )
}
