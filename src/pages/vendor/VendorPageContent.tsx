import { useEffect, useMemo, useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'
import type { Product, Vendor } from '../../data/marketplace'
import ProductCard from '../../components/ProductCard'
import { getVendorById, listVendorProducts } from '@/api/marketplace'
import { useCatalog } from '@/state/catalog-store'

type Props = {
  vendorId: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

type Tab = 'products' | 'featured' | 'deals' | 'reviews' | 'about'

const tabs: { key: Tab; label: string }[] = [
  { key: 'products', label: 'All Products' },
  { key: 'featured', label: 'Featured' },
  { key: 'deals', label: 'Deals' },
  { key: 'reviews', label: 'Reviews' },
  { key: 'about', label: 'About' },
]

const staticReviews = [
  { author: 'Sarah M.', rating: 5, text: 'Absolutely love this store! Fast shipping and products exactly as described.', date: '2 days ago', verified: true },
  { author: 'James K.', rating: 5, text: 'Best seller on the platform. Packaging was immaculate and delivery was super quick.', date: '1 week ago', verified: true },
  { author: 'Priya L.', rating: 4, text: 'Great quality products overall. Customer service was very responsive.', date: '2 weeks ago', verified: true },
  { author: 'Ahmed R.', rating: 5, text: 'Third time ordering from here. Never disappointed. Highly recommended!', date: '3 weeks ago', verified: false },
]

function Stars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const cls = size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`${cls} ${i <= Math.round(rating) ? 'text-yellow-400' : 'text-[#E8E7E2]'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] animate-pulse">
      <div className="aspect-square bg-[#F3F2EF]" />
      <div className="p-4 space-y-2">
        <div className="h-3 bg-[#F3F2EF] rounded w-2/3" />
        <div className="h-4 bg-[#F3F2EF] rounded" />
        <div className="h-5 bg-[#F3F2EF] rounded w-1/3 mt-2" />
      </div>
    </div>
  )
}

export default function VendorPageContent({ vendorId, onNavigate, wishlist, onToggleWishlist, onAddToCart }: Props) {
  const { vendors: fallbackVendors, products: fallbackProducts } = useCatalog()
  const [liveVendor, setLiveVendor] = useState<Vendor | null>(null)
  const [liveProducts, setLiveProducts] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<Tab>('products')
  const [followed, setFollowed] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    void (async () => {
      const [vendorResponse, productsResponse] = await Promise.all([
        getVendorById(vendorId),
        listVendorProducts(vendorId),
      ])

      if (cancelled) return

      if (vendorResponse.success) {
        const fallback = fallbackVendors[0]
        setLiveVendor({
          id: vendorResponse.data.id,
          name: vendorResponse.data.name,
          logo: vendorResponse.data.logo || fallback.logo,
          cover: vendorResponse.data.cover || fallback.cover,
          rating: vendorResponse.data.rating,
          productCount: vendorResponse.data.productCount,
          positiveFeedback: vendorResponse.data.positiveFeedback,
          followers: vendorResponse.data.followers,
          verified: vendorResponse.data.verified,
          responseTime: vendorResponse.data.responseTime || fallback.responseTime,
          tagline: vendorResponse.data.tagline || fallback.tagline,
        })
      }

      if (productsResponse.success && productsResponse.data.length > 0) {
        setLiveProducts(productsResponse.data as unknown as Product[])
      } else {
        // use fallback products filtered loosely
        setLiveProducts(fallbackProducts.slice(0, 16))
      }

      setLoading(false)
    })()

    return () => { cancelled = true }
  }, [vendorId, fallbackVendors, fallbackProducts])

  const vendor: Vendor = liveVendor ?? fallbackVendors.find(v => v.id === vendorId) ?? fallbackVendors[0]
  const allProducts = liveProducts ?? fallbackProducts.slice(0, 16)

  const displayProducts = useMemo(() => {
    let list = [...allProducts]
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    }
    if (activeTab === 'featured') list = list.filter(p => p.badge === 'bestseller' || p.badge === 'new')
    if (activeTab === 'deals') list = list.filter(p => p.discount > 0).sort((a, b) => b.discount - a.discount)
    return list
  }, [allProducts, activeTab, searchQuery])

  const coverImage = vendor.cover ||
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&h=400&fit=crop&auto=format'
  const logoImage = vendor.logo ||
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&auto=format'

  return (
    <div className="bg-[#F9F8F5] min-h-screen">

      {/* ─── Store Cover Banner ─── */}
      <div className="relative h-52 md:h-72 bg-[#0E0E0E] overflow-hidden">
        <img
          src={coverImage}
          alt={`${vendor.name} store cover`}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" />

        {/* Breadcrumb overlaid on cover */}
        <div className="absolute top-4 left-6">
          <nav className="flex items-center gap-2 text-xs text-white/70">
            <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-white transition-colors">Home</button>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">{vendor.name}</span>
          </nav>
        </div>
      </div>

      {/* ─── Store Header Card ─── */}
      <div className="bg-white border-b border-[#E8E7E2]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-10 pb-5">
            {/* Logo */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-[#F3F2EF]">
                <img src={logoImage} alt={vendor.name} className="w-full h-full object-cover" />
              </div>
              {vendor.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#E8450A] flex items-center justify-center shadow-md">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 pt-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-display text-2xl font-bold text-[#0E0E0E]">{vendor.name}</h1>
                {vendor.verified && (
                  <span className="px-2 py-0.5 rounded-full bg-[#FFF7F5] border border-[#E8450A]/30 text-[10px] font-bold uppercase tracking-widest text-[#E8450A]">
                    Verified
                  </span>
                )}
              </div>
              {vendor.tagline && (
                <p className="text-sm text-[#6B6A66] mt-0.5 truncate">{vendor.tagline}</p>
              )}
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Stars rating={vendor.rating} size="sm" />
                  <span className="text-sm font-semibold text-[#0E0E0E]">{vendor.rating.toFixed(1)}</span>
                  <span className="text-xs text-[#6B6A66]">rating</span>
                </div>
                <span className="text-[#E8E7E2]">·</span>
                <span className="text-sm text-[#6B6A66]"><span className="font-semibold text-[#0E0E0E]">{vendor.productCount.toLocaleString()}</span> products</span>
                <span className="text-[#E8E7E2]">·</span>
                <span className="text-sm text-[#6B6A66]"><span className="font-semibold text-[#0E0E0E]">{vendor.positiveFeedback}%</span> positive</span>
                {vendor.responseTime && (
                  <>
                    <span className="text-[#E8E7E2]">·</span>
                    <span className="text-sm text-[#6B6A66]">Responds in <span className="font-semibold text-[#0E0E0E]">{vendor.responseTime}</span></span>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2 sm:pb-2">
              <button
                onClick={() => setFollowed(v => !v)}
                className={`flex items-center gap-2 h-10 px-5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  followed
                    ? 'bg-[#0E0E0E] text-white border-[#0E0E0E]'
                    : 'border-[#E8E7E2] text-[#0E0E0E] hover:border-[#0E0E0E]'
                }`}
              >
                {followed ? (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg>
                    Following
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    Follow
                  </>
                )}
              </button>
              <button className="flex items-center gap-2 h-10 px-5 rounded-xl text-sm font-semibold border border-[#E8E7E2] text-[#0E0E0E] hover:border-[#0E0E0E] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat
              </button>
            </div>
          </div>

          {/* ─── Store Tabs ─── */}
          <div className="flex items-center gap-1 -mb-px overflow-x-auto scroll-container">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-shrink-0 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-[#E8450A] text-[#E8450A]'
                    : 'border-transparent text-[#6B6A66] hover:text-[#0E0E0E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Content Area ─── */}
      <div className="max-w-[1280px] mx-auto px-6 py-8">

        {/* ── Store Stats Quick Row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Products', value: vendor.productCount.toLocaleString(), icon: '📦' },
            { label: 'Positive Feedback', value: `${vendor.positiveFeedback}%`, icon: '⭐' },
            { label: 'Followers', value: vendor.followers > 1000 ? `${(vendor.followers / 1000).toFixed(1)}K` : vendor.followers.toString(), icon: '👥' },
            { label: 'Response Time', value: vendor.responseTime || '< 1 hr', icon: '⚡' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl border border-[#E8E7E2] p-4 flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="font-bold text-lg text-[#0E0E0E] leading-none">{stat.value}</p>
                <p className="text-xs text-[#6B6A66] mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Products / Featured / Deals Tab ── */}
        {(activeTab === 'products' || activeTab === 'featured' || activeTab === 'deals') && (
          <>
            {/* Search within store */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 max-w-sm flex h-10 items-center rounded-xl border border-[#E8E7E2] bg-white px-3 gap-2">
                <svg className="w-4 h-4 text-[#9CA3AF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={`Search in ${vendor.name}...`}
                  className="flex-1 text-sm text-[#0E0E0E] outline-none placeholder:text-[#9CA3AF] bg-transparent"
                />
              </div>
              <span className="text-sm text-[#6B6A66]">
                <span className="font-semibold text-[#0E0E0E]">{displayProducts.length}</span> products
              </span>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : displayProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#6B6A66]">No products found{searchQuery ? ` for "${searchQuery}"` : ''}.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    wishlisted={wishlist.has(product.id)}
                    onToggleWishlist={onToggleWishlist}
                    onAddToCart={onAddToCart}
                    onNavigate={id => onNavigate({ type: 'product', id })}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* ── Reviews Tab ── */}
        {activeTab === 'reviews' && (
          <div className="max-w-2xl space-y-4">
            {/* Overall Rating */}
            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-6 flex items-center gap-8">
              <div className="text-center">
                <p className="font-display text-5xl font-bold text-[#0E0E0E]">{vendor.rating.toFixed(1)}</p>
                <Stars rating={vendor.rating} size="md" />
                <p className="text-xs text-[#6B6A66] mt-1">Overall Rating</p>
              </div>
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map(star => {
                  const pct = star === 5 ? 72 : star === 4 ? 18 : star === 3 ? 7 : star === 2 ? 2 : 1
                  return (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-xs text-[#6B6A66] w-6 text-right">{star}★</span>
                      <div className="flex-1 h-2 rounded-full bg-[#F3F2EF] overflow-hidden">
                        <div className="h-full rounded-full bg-yellow-400" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-[#6B6A66] w-8">{pct}%</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {staticReviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E8E7E2] p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E8450A] to-[#6D28D9] flex items-center justify-center text-white font-bold text-sm">
                      {review.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0E0E0E]">{review.author}</p>
                      <div className="flex items-center gap-2">
                        <Stars rating={review.rating} size="sm" />
                        {review.verified && (
                          <span className="text-[10px] font-semibold text-[#059669] bg-[#F0FDF4] px-1.5 py-0.5 rounded">Verified</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#9CA3AF]">{review.date}</span>
                </div>
                <p className="text-sm text-[#0E0E0E] leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* ── About Tab ── */}
        {activeTab === 'about' && (
          <div className="max-w-2xl space-y-6">
            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-6">
              <h2 className="font-display text-xl font-bold text-[#0E0E0E] mb-4">About {vendor.name}</h2>
              <p className="text-sm text-[#6B6A66] leading-relaxed">
                {vendor.tagline || `${vendor.name} is a verified seller on Nexus Marketplace, offering a curated selection of premium products.`}
                {' '}We are committed to delivering exceptional quality and customer satisfaction. Every product is carefully inspected before dispatch to ensure you receive exactly what you ordered.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-6">
              <h3 className="font-semibold text-[#0E0E0E] mb-4">Store Policies</h3>
              <div className="space-y-3">
                {[
                  { icon: '🚚', title: 'Shipping', desc: 'Most orders shipped within 24 hours. Free shipping on orders over $75.' },
                  { icon: '↩️', title: 'Returns', desc: '30-day hassle-free return policy. No questions asked.' },
                  { icon: '🔒', title: 'Secure Payments', desc: 'All payments are SSL encrypted and processed securely.' },
                  { icon: '✓',  title: 'Authenticity', desc: '100% genuine products. Verified and quality-checked before dispatch.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#0E0E0E]">{item.title}</p>
                      <p className="text-xs text-[#6B6A66] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-6">
              <h3 className="font-semibold text-[#0E0E0E] mb-3">Contact</h3>
              <button className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-[#0E0E0E] text-white text-sm font-semibold hover:bg-[#E8450A] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Send Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
