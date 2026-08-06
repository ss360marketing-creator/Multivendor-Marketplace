import { useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'
import HeroSection from './HeroSection'
import ProductCarouselSection from './ProductCarouselSection'
import FlashSaleSection from './FlashSaleSection'
import { useCatalog } from '../../state/catalog-store'

type Props = {
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

function TrustBar() {
  return (
    <div className="bg-white border-b border-[#E8E7E2]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8E7E2]">
          {[
            { icon: '🚚', title: 'Free Delivery', sub: 'On orders over $75' },
            { icon: '↩️', title: 'Easy Returns', sub: '30-day hassle-free' },
            { icon: '🔒', title: 'Secure Payments', sub: 'SSL encrypted' },
            { icon: '✓', title: 'Verified Sellers', sub: '100% authenticated' },
          ].map(t => (
            <div key={t.title} className="flex items-center gap-3 py-4 px-6">
              <span className="text-2xl">{t.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[#0E0E0E]">{t.title}</p>
                <p className="text-xs text-[#6B6A66]">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CategoryGrid({ onNavigate }: { onNavigate: (v: View) => void }) {
  const { categories } = useCatalog()

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2">Explore</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]">Shop by Category</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.slice(0, 4).map(cat => (
          <button key={cat.slug} onClick={() => onNavigate({ type: 'category', slug: cat.slug })} className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#E8E7E2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
              <p className="font-semibold text-white text-base">{cat.name}</p>
              <p className="text-[#9CA3AF] text-xs mt-0.5">{(cat.count / 1000).toFixed(0)}K+ products</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function BrandLogos() {
  return (
    <section className="border-y border-[#E8E7E2] bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <p className="text-center text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-8">Official Brands Available on Nexus</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'Xiaomi'].map(name => (
            <button key={name} className="px-6 py-3 rounded-xl border border-[#E8E7E2] hover:border-[#0E0E0E] hover:shadow-sm transition-all duration-200 group">
              <span className="font-bold text-lg text-[#C5C4C0] group-hover:text-[#0E0E0E] transition-colors tracking-tight">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function TopVendors({ onNavigate }: { onNavigate: (v: View) => void }) {
  const { vendors } = useCatalog()
  const [followedIds, setFollowedIds] = useState<Set<string>>(new Set())

  const toggleFollow = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setFollowedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className="bg-[#F3F2EF] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2">Verified Stores</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]">Explore Top Stores</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {vendors.slice(0, 4).map(vendor => (
            <div
              key={vendor.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-250 cursor-pointer group"
              onClick={() => onNavigate({ type: 'vendor', id: vendor.id })}
            >
              {/* Cover */}
              <div className="relative h-24 overflow-hidden bg-gradient-to-br from-[#0E0E0E] to-[#374151]">
                {vendor.cover && (
                  <img src={vendor.cover} alt="" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Logo overlapping cover bottom */}
                <div className="absolute -bottom-5 left-4">
                  <div className="w-12 h-12 rounded-xl border-2 border-white shadow-lg overflow-hidden bg-[#F3F2EF]">
                    {vendor.logo
                      ? <img src={vendor.logo} alt={vendor.name} className="w-full h-full object-cover" />
                      : <div className="w-full h-full flex items-center justify-center text-lg font-bold text-[#6B6A66]">{vendor.name[0]}</div>
                    }
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="pt-7 px-4 pb-4 space-y-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-[#0E0E0E] text-sm truncate">{vendor.name}</p>
                    {vendor.verified && (
                      <svg className="w-3.5 h-3.5 text-[#E8450A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  {vendor.tagline && <p className="text-xs text-[#6B6A66] truncate mt-0.5">{vendor.tagline}</p>}
                </div>

                <div className="flex items-center gap-3 text-xs text-[#6B6A66]">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <strong className="text-[#0E0E0E]">{vendor.rating.toFixed(1)}</strong>
                  </span>
                  <span><strong className="text-[#0E0E0E]">{vendor.productCount}</strong> items</span>
                  <span><strong className="text-[#0E0E0E]">{vendor.positiveFeedback}%</strong> pos.</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); onNavigate({ type: 'vendor', id: vendor.id }) }}
                    className="flex-1 py-2 bg-[#0E0E0E] text-white text-xs font-semibold rounded-xl hover:bg-[#E8450A] transition-colors"
                  >
                    Visit Store
                  </button>
                  <button
                    onClick={(e) => toggleFollow(e, vendor.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-colors ${
                      followedIds.has(vendor.id)
                        ? 'bg-[#0E0E0E] text-white border-[#0E0E0E]'
                        : 'border-[#E8E7E2] text-[#0E0E0E] hover:border-[#0E0E0E]'
                    }`}
                  >
                    {followedIds.has(vendor.id) ? 'Following' : 'Follow'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function ReviewsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2">Social Proof</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]">Real People. Real Products.</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {['Absolutely incredible noise cancellation.', 'The M3 chip is a genuine leap forward.', 'My skin has completely transformed.', 'Super comfortable for long walks.'].map((text, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 border border-[#E8E7E2] hover:shadow-lg transition-shadow space-y-4">
            <p className="text-sm text-[#6B6A66] leading-relaxed">"{text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BeforeAfterSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-3">Real Results</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#0E0E0E] leading-tight mb-6">See the<br /><em className="not-italic text-[#E8450A]">Difference</em></h2>
          <p className="text-[#6B6A66] text-base leading-relaxed mb-6">Verified customer results from our beauty collection.</p>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#E8E7E2] bg-[linear-gradient(135deg,#1f2937,#d1d5db)]" />
      </div>
    </section>
  )
}

function NewArrivals({ onNavigate: _onNavigate, wishlist: _w, onToggleWishlist: _otw, onAddToCart: _atc }: Props) {
  const { products } = useCatalog()

  return (
    <section className="bg-[#F3F2EF] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.slice(0, 8).map(p => (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] p-4">
              <p className="text-sm font-semibold line-clamp-2">{p.title}</p>
              <p className="text-xs text-[#6B6A66] mt-1">{p.vendor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomeSections(props: Props) {
  const { products } = useCatalog()
  const flashSaleItems = products.filter(product => product.discount >= 20).slice(0, 4)

  return (
    <>
      <HeroSection onNavigate={props.onNavigate} />
      <TrustBar />
      <CategoryGrid onNavigate={props.onNavigate} />
      <ProductCarouselSection title="Trending Now" subtitle="Discover what shoppers are loving right now." items={products.slice(0, 8)} {...props} />
      <FlashSaleSection items={flashSaleItems} {...props} />
      <BeforeAfterSection />
      <TopVendors onNavigate={props.onNavigate} />
      <BrandLogos />
      <ReviewsSection />
      <NewArrivals {...props} />
    </>
  )
}
