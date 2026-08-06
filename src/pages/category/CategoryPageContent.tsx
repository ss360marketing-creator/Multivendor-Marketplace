import { useEffect, useMemo, useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'
import CategoryHero from './CategoryHero'
import CategoryToolbar from './CategoryToolbar'
import CategoryFilters from './CategoryFilters'
import CategoryResults from './CategoryResults'
import { useCatalog } from '../../state/catalog-store'
import { getCategoryBySlug, listProducts } from '@/api/marketplace'
import type { Category, Product } from '@/data/marketplace'

type Props = {
  slug: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

type SortKey = 'popular' | 'newest' | 'price-asc' | 'price-desc' | 'rating'

export default function CategoryPageContent({ slug, onNavigate, wishlist, onToggleWishlist, onAddToCart }: Props) {
  const { categories, products } = useCatalog()
  const [liveCategory, setLiveCategory] = useState<Category | null>(null)
  const [liveProducts, setLiveProducts] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<SortKey>('popular')
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null)
  const [minRating, setMinRating] = useState<number | null>(null)
  const [onlyFreeShipping, setOnlyFreeShipping] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    let cancelled = false

    void (async () => {
      setLoading(true)

      const [categoryResponse, productsResponse] = await Promise.all([
        getCategoryBySlug(slug),
        listProducts(slug === 'deals' ? { q: '', limit: 24 } : { category: slug, limit: 24 }),
      ])

      if (cancelled) return

      if (categoryResponse.success) {
        setLiveCategory({
          name: categoryResponse.data.name,
          slug: categoryResponse.data.slug,
          image: categoryResponse.data.image ?? categories.find(category => category.slug === slug)?.image ?? '',
          count: categoryResponse.data.count,
          color: categories.find(category => category.slug === slug)?.color ?? '#EEF2FF',
        })
      } else {
        setLiveCategory(categories.find(category => category.slug === slug) ?? null)
      }

      if (productsResponse.success) {
        setLiveProducts(productsResponse.data)
      } else {
        setLiveProducts(null)
      }

      setLoading(false)
    })()

    return () => {
      cancelled = true
    }
  }, [slug, categories])

  const category = liveCategory ?? categories.find(c => c.slug === slug)

  const catProducts = useMemo(() => {
    let list = liveProducts ?? (slug === 'deals' ? products.filter(p => p.discount > 20) : products.filter(p => p.categorySlug === slug))

    if (!list.length) list = products
    if (selectedPriceRange !== null) list = list.filter(p => p.price >= [0, 25, 75, 200, 500][selectedPriceRange] && p.price < [25, 75, 200, 500, Infinity][selectedPriceRange])
    if (minRating) list = list.filter(p => p.rating >= minRating)
    if (onlyFreeShipping) list = list.filter(p => p.freeShipping)

    switch (sortBy) {
      case 'price-asc': list = [...list].sort((a, b) => a.price - b.price); break
      case 'price-desc': list = [...list].sort((a, b) => b.price - a.price); break
      case 'rating': list = [...list].sort((a, b) => b.rating - a.rating); break
      case 'newest': list = [...list].reverse(); break
    }

    return list
  }, [slug, sortBy, selectedPriceRange, minRating, onlyFreeShipping, liveProducts, products])

  const catName = category?.name ?? slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <div className="bg-[#F9F8F5] min-h-screen">
      <CategoryHero category={category} catName={catName} count={loading ? 0 : catProducts.length} />
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <CategoryToolbar
          sortBy={sortBy}
          viewMode={viewMode}
          filterOpen={filterOpen}
          onToggleFilterOpen={() => setFilterOpen(!filterOpen)}
          onSortChange={setSortBy}
          onViewModeChange={setViewMode}
          resultsCount={catProducts.length}
        />

        <div className="flex gap-8">
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24">
              <CategoryFilters
                selectedPriceRange={selectedPriceRange}
                minRating={minRating}
                onlyFreeShipping={onlyFreeShipping}
                onSelectPriceRange={setSelectedPriceRange}
                onSelectRating={setMinRating}
                onToggleFreeShipping={() => setOnlyFreeShipping(v => !v)}
                onClear={() => { setSelectedPriceRange(null); setMinRating(null); setOnlyFreeShipping(false) }}
              />
            </div>
          </aside>

          {filterOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setFilterOpen(false)} />
              <div className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl p-6 md:hidden max-h-[80vh] overflow-y-auto fade-in">
                <CategoryFilters
                  selectedPriceRange={selectedPriceRange}
                  minRating={minRating}
                  onlyFreeShipping={onlyFreeShipping}
                  onSelectPriceRange={setSelectedPriceRange}
                  onSelectRating={setMinRating}
                  onToggleFreeShipping={() => setOnlyFreeShipping(v => !v)}
                  onClear={() => { setSelectedPriceRange(null); setMinRating(null); setOnlyFreeShipping(false) }}
                />
              </div>
            </>
          )}

          <div className="flex-1 min-w-0">
            <CategoryResults items={catProducts} wishlist={wishlist} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} onNavigate={onNavigate} viewMode={viewMode} />
          </div>
        </div>
      </div>
    </div>
  )
}
