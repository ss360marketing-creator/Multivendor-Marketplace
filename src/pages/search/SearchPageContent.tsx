import { useEffect, useMemo, useRef, useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'
import type { Product } from '../../data/marketplace'
import ProductCard from '../../components/ProductCard'
import { listProducts } from '@/api/marketplace'
import { useCatalog } from '@/state/catalog-store'

type Props = {
  q: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

type SortKey = 'relevant' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

const popularSearches = [
  'wireless headphones',
  'iphone 15 pro',
  'nike air max',
  'macbook air',
  'dyson hair dryer',
  'samsung galaxy',
  'gaming mouse',
  'skincare set',
]

const relatedCategories = [
  { label: 'Electronics', slug: 'electronics' },
  { label: 'Mobiles', slug: 'mobiles' },
  { label: 'Fashion', slug: 'fashion' },
  { label: 'Beauty', slug: 'beauty' },
  { label: 'Home & Living', slug: 'home' },
  { label: 'Gaming', slug: 'gaming' },
]

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] animate-pulse">
      <div className="aspect-square bg-[#F3F2EF]" />
      <div className="p-4 space-y-2">
        <div className="h-3 bg-[#F3F2EF] rounded w-2/3" />
        <div className="h-4 bg-[#F3F2EF] rounded" />
        <div className="h-3 bg-[#F3F2EF] rounded w-1/2" />
        <div className="h-5 bg-[#F3F2EF] rounded w-1/3 mt-2" />
      </div>
    </div>
  )
}

export default function SearchPageContent({ q, onNavigate, wishlist, onToggleWishlist, onAddToCart }: Props) {
  const { products: fallbackProducts, categories } = useCatalog()
  const [liveResults, setLiveResults] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [sortBy, setSortBy] = useState<SortKey>('relevant')
  const [minRating, setMinRating] = useState<number | null>(null)
  const [onlyFreeShipping, setOnlyFreeShipping] = useState(false)
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null)
  const [searchInput, setSearchInput] = useState(q)
  const inputRef = useRef<HTMLInputElement>(null)

  // Fetch live results whenever q changes
  useEffect(() => {
    setSearchInput(q)
    if (!q.trim()) {
      setLiveResults(null)
      return
    }
    let cancelled = false
    setLoading(true)

    void (async () => {
      const response = await listProducts({ q: q.trim(), limit: 48 })
      if (cancelled) return
      if (response.success) {
        setLiveResults(response.data as unknown as Product[])
      } else {
        setLiveResults([])
      }
      setLoading(false)
    })()

    return () => { cancelled = true }
  }, [q])

  const priceRanges = ['Under $25', '$25 – $75', '$75 – $200', '$200 – $500', 'Over $500']
  const priceLow  = [0, 25, 75, 200, 500]
  const priceHigh = [25, 75, 200, 500, Infinity]

  const baseResults = useMemo(() => {
    if (liveResults !== null) return liveResults
    if (!q.trim()) return fallbackProducts.slice(0, 24)
    const lower = q.toLowerCase()
    return fallbackProducts.filter(p =>
      p.title.toLowerCase().includes(lower) ||
      p.vendor.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower),
    )
  }, [q, liveResults, fallbackProducts])

  const filteredResults = useMemo(() => {
    let list = [...baseResults]
    if (selectedPriceRange !== null) {
      list = list.filter(p => p.price >= priceLow[selectedPriceRange] && p.price < priceHigh[selectedPriceRange])
    }
    if (minRating) list = list.filter(p => p.rating >= minRating)
    if (onlyFreeShipping) list = list.filter(p => p.freeShipping)
    switch (sortBy) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break
      case 'newest':     list.reverse(); break
    }
    return list
  }, [baseResults, sortBy, minRating, onlyFreeShipping, selectedPriceRange])

  const handleSearchSubmit = () => {
    if (searchInput.trim() && searchInput.trim() !== q) {
      onNavigate({ type: 'search', q: searchInput.trim() })
    }
  }

  return (
    <div className="bg-[#F9F8F5] min-h-screen">

      {/* ─── Search Hero Bar ─── */}
      <div className="bg-white border-b border-[#E8E7E2]">
        <div className="max-w-[1280px] mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-4">
            <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-[#E8450A] transition-colors">Home</button>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#0E0E0E]">Search</span>
            {q && (
              <>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <span className="text-[#0E0E0E] font-medium truncate max-w-[200px]">&ldquo;{q}&rdquo;</span>
              </>
            )}
          </nav>

          {/* Inline Search Bar */}
          <div className="flex items-center gap-3 max-w-2xl">
            <div className="flex-1 flex h-12 items-center rounded-xl border-2 border-[#E8450A] bg-white shadow-sm">
              <svg className="ml-4 h-5 w-5 flex-shrink-0 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearchSubmit()}
                placeholder="Search products, brands and categories..."
                className="flex-1 bg-transparent px-3 text-sm text-[#0E0E0E] outline-none placeholder:text-[#9CA3AF]"
              />
              {searchInput && (
                <button onClick={() => setSearchInput('')} className="mr-2 text-[#9CA3AF] hover:text-[#0E0E0E]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>
            <button
              onClick={handleSearchSubmit}
              className="h-12 px-6 rounded-xl bg-[#E8450A] text-white font-semibold text-sm hover:bg-[#C93A07] transition-colors"
            >
              Search
            </button>
          </div>

          {/* Result count + categories chips */}
          {q && !loading && (
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="text-sm text-[#6B6A66]">
                {filteredResults.length === 0
                  ? 'No results found'
                  : <><span className="font-semibold text-[#0E0E0E]">{filteredResults.length.toLocaleString()}</span> results for <span className="font-semibold text-[#0E0E0E]">&ldquo;{q}&rdquo;</span></>
                }
              </span>
              <span className="text-[#E8E7E2]">|</span>
              <div className="flex items-center gap-2 flex-wrap">
                {relatedCategories.map(cat => (
                  <button
                    key={cat.slug}
                    onClick={() => onNavigate({ type: 'category', slug: cat.slug })}
                    className="px-3 py-1 rounded-full bg-[#F3F2EF] text-xs font-medium text-[#0E0E0E] hover:bg-[#E8450A] hover:text-white transition-colors"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        {/* ─── Empty / No Query State ─── */}
        {!q.trim() && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FFF7F5] flex items-center justify-center">
              <svg className="w-10 h-10 text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h1 className="font-display text-2xl font-semibold text-[#0E0E0E] mb-2">What are you looking for?</h1>
            <p className="text-[#6B6A66] text-sm mb-8">Search millions of products across thousands of verified sellers.</p>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularSearches.map(term => (
                  <button
                    key={term}
                    onClick={() => onNavigate({ type: 'search', q: term })}
                    className="px-5 py-2.5 rounded-xl border border-[#E8E7E2] bg-white text-sm font-medium text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Results Layout ─── */}
        {q.trim() && (
          <div className="flex gap-8">
            {/* ── Filter Sidebar ── */}
            <aside className="hidden md:block w-56 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm text-[#0E0E0E]">Filters</p>
                  {(minRating || onlyFreeShipping || selectedPriceRange !== null) && (
                    <button
                      onClick={() => { setMinRating(null); setOnlyFreeShipping(false); setSelectedPriceRange(null) }}
                      className="text-xs text-[#E8450A] font-medium hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Price */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">Price Range</p>
                  <div className="space-y-1.5">
                    {priceRanges.map((label, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedPriceRange === i ? 'bg-[#FFF7F5] text-[#E8450A] font-semibold border border-[#E8450A]/30' : 'text-[#0E0E0E] hover:bg-[#F3F2EF]'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">Min. Rating</p>
                  <div className="space-y-1.5">
                    {[4, 3, 2].map(r => (
                      <button
                        key={r}
                        onClick={() => setMinRating(minRating === r ? null : r)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${minRating === r ? 'bg-[#FFF7F5] text-[#E8450A] font-semibold border border-[#E8450A]/30' : 'text-[#0E0E0E] hover:bg-[#F3F2EF]'}`}
                      >
                        <span className="text-yellow-400">{'★'.repeat(r)}</span>
                        <span>{r}+ Stars</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Free Shipping */}
                <div>
                  <button
                    onClick={() => setOnlyFreeShipping(v => !v)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${onlyFreeShipping ? 'bg-[#F0FDF4] text-[#059669] font-semibold border border-[#059669]/30' : 'text-[#0E0E0E] hover:bg-[#F3F2EF]'}`}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8" />
                    </svg>
                    Free Shipping Only
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">Browse by Category</p>
                  <div className="space-y-1">
                    {categories.slice(0, 6).map(cat => (
                      <button
                        key={cat.slug}
                        onClick={() => onNavigate({ type: 'category', slug: cat.slug })}
                        className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#0E0E0E] hover:bg-[#F3F2EF] hover:text-[#E8450A] transition-colors"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* ── Results Area ── */}
            <div className="flex-1 min-w-0">
              {/* Sort Toolbar */}
              <div className="flex items-center justify-between mb-6 gap-4">
                <p className="text-sm text-[#6B6A66]">
                  {loading
                    ? 'Searching...'
                    : <><span className="font-semibold text-[#0E0E0E]">{filteredResults.length}</span> results</>
                  }
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9CA3AF] font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as SortKey)}
                    className="text-sm border border-[#E8E7E2] rounded-xl px-3 py-2 bg-white text-[#0E0E0E] outline-none focus:border-[#E8450A] cursor-pointer"
                  >
                    <option value="relevant">Most Relevant</option>
                    <option value="rating">Top Rated</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>

              {/* Loading Skeletons */}
              {loading && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
                </div>
              )}

              {/* No Results */}
              {!loading && filteredResults.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#F3F2EF] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-[#0E0E0E] mb-2">No results for &ldquo;{q}&rdquo;</h2>
                  <p className="text-[#6B6A66] text-sm mb-6">Try different keywords or browse categories below.</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {popularSearches.slice(0, 6).map(term => (
                      <button
                        key={term}
                        onClick={() => onNavigate({ type: 'search', q: term })}
                        className="px-4 py-2 rounded-xl border border-[#E8E7E2] bg-white text-sm font-medium text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Grid */}
              {!loading && filteredResults.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredResults.map(product => (
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

              {/* Popular Searches (shown when no filters reduce results) */}
              {!loading && filteredResults.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#E8E7E2]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">Related Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.filter(t => t !== q).map(term => (
                      <button
                        key={term}
                        onClick={() => onNavigate({ type: 'search', q: term })}
                        className="px-4 py-2 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
