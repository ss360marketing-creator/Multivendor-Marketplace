import { useRef } from 'react'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/marketplace'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'

type Props = {
  title: string
  subtitle?: string
  items: typeof products
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function ProductCarouselSection({ title, subtitle, items, onNavigate, wishlist, onToggleWishlist, onAddToCart }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between max-w-[1280px] mx-auto px-6">
        <div>
          <p className="text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2">Featured</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]">{title}</h2>
          {subtitle && <p className="text-[#6B6A66] mt-2 text-sm">{subtitle}</p>}
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-container px-6 max-w-[1280px] mx-auto pb-2" style={{ scrollSnapType: 'x mandatory' }}>
        {items.map(p => (
          <div key={p.id} className="flex-shrink-0 w-[260px]" style={{ scrollSnapAlign: 'start' }}>
            <ProductCard product={p} wishlisted={wishlist.has(p.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} onNavigate={id => onNavigate({ type: 'product', id })} />
          </div>
        ))}
      </div>
    </div>
  )
}
