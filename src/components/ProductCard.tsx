import { useState } from 'react'
import type { Product } from '../data/marketplace'

type CartInput = {
  id: string
  title: string
  price: number
  originalPrice: number
  image: string
  vendor: string
  variant?: string
}

type Props = {
  product: Product
  wishlisted?: boolean
  onToggleWishlist?: (id: string) => void
  onAddToCart?: (item: CartInput) => void
  onNavigate?: (id: string) => void
  variant?: 'standard' | 'compact' | 'horizontal'
}

function Stars({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'star-filled' : 'star-empty'}`} viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-[11px] text-[#6B6A66] tabular-nums">
        {rating.toFixed(1)}
        {count !== undefined && <span className="ml-0.5">({count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count})</span>}
      </span>
    </div>
  )
}

export default function ProductCard({ product, wishlisted = false, onToggleWishlist, onAddToCart, onNavigate, variant = 'standard' }: Props) {
  const [hovered, setHovered] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    onAddToCart?.({ id: product.id, title: product.title, price: product.price, originalPrice: product.originalPrice, image: product.image, vendor: product.vendor, variant: undefined })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 1800)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleWishlist?.(product.id)
  }

  const badgeColors: Record<string, string> = {
    bestseller: 'bg-[#0E0E0E] text-white',
    flash: 'bg-[#E11D48] text-white',
    new: 'bg-[#059669] text-white',
    sponsored: 'bg-[#6B6A66] text-white',
  }

  if (variant === 'horizontal') {
    return (
      <div
        className="flex gap-4 bg-white rounded-2xl p-4 cursor-pointer border border-[#E8E7E2] hover:shadow-lg transition-all duration-200"
        onClick={() => onNavigate?.(product.id)}
      >
        <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#F9F8F5]">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          {product.discount > 0 && (
            <span className="absolute top-1.5 left-1.5 bg-[#E11D48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
              -{product.discount}%
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <p className="text-xs text-[#6B6A66] truncate">{product.vendor}</p>
          <p className="text-sm font-semibold leading-snug line-clamp-2 text-[#0E0E0E]">{product.title}</p>
          <Stars rating={product.rating} count={product.reviewCount} />
          <div className="flex items-center gap-2 mt-auto">
            <span className="font-mono font-bold text-base text-[#0E0E0E]">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="font-mono text-xs text-[#6B6A66] line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div
        className="bg-white rounded-2xl overflow-hidden cursor-pointer border border-[#E8E7E2] hover:shadow-lg transition-all duration-200 group"
        onClick={() => onNavigate?.(product.id)}
      >
        <div className="relative aspect-square bg-[#F9F8F5] overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          {product.discount > 0 && (
            <span className="absolute top-2 left-2 bg-[#E11D48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
              -{product.discount}%
            </span>
          )}
        </div>
        <div className="p-3 space-y-1.5">
          <p className="text-xs text-[#6B6A66] truncate">{product.vendor}</p>
          <p className="text-sm font-semibold line-clamp-2 leading-snug">{product.title}</p>
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-sm">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="font-mono text-xs text-[#6B6A66] line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden cursor-pointer border border-[#E8E7E2] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-250 group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate?.(product.id)}
    >
      <div className="relative overflow-hidden bg-[#F9F8F5]" style={{ paddingBottom: '100%' }}>
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.discount > 0 && (
            <span className="bg-[#E11D48] text-white text-[11px] font-bold px-2 py-0.5 rounded-lg shadow-sm">
              -{product.discount}%
            </span>
          )}
          {product.badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wide shadow-sm ${badgeColors[product.badge]}`}>
              {product.badge === 'bestseller' ? 'Best Seller' : product.badge === 'flash' ? 'Flash' : product.badge === 'new' ? 'New' : 'Ad'}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${wishlisted ? 'bg-[#E11D48] text-white' : 'bg-white text-[#6B6A66] hover:bg-[#FFF1F2] hover:text-[#E11D48]'} ${hovered || wishlisted ? 'opacity-100' : 'opacity-0'}`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Stock indicator */}
        {product.stock < 10 && (
          <div className="absolute bottom-3 left-3 bg-[#FFF7ED] text-[#D97706] text-[11px] font-semibold px-2 py-0.5 rounded-lg border border-[#FED7AA]">
            Only {product.stock} left
          </div>
        )}

        {/* Add to cart overlay */}
        {hovered && (
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-3 right-3 left-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg ${
              addedToCart
                ? 'bg-[#059669] text-white'
                : 'bg-[#0E0E0E] text-white hover:bg-[#E8450A]'
            } ${product.stock < 10 ? 'left-[88px]' : 'left-3'}`}
          >
            {addedToCart ? '✓ Added!' : 'Add to Cart'}
          </button>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-[#6B6A66] font-medium truncate">{product.vendor}</span>
          {product.verified && (
            <svg className="w-3.5 h-3.5 text-[#E8450A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        <h3 className="text-sm font-semibold text-[#0E0E0E] line-clamp-2 leading-snug">{product.title}</h3>

        <Stars rating={product.rating} count={product.reviewCount} />

        <div className="mt-auto pt-1 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono font-bold text-[17px] text-[#0E0E0E]">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="font-mono text-sm text-[#6B6A66] line-through">${product.originalPrice}</span>
            )}
          </div>
          {product.installment && (
            <p className="text-[11px] text-[#6B6A66]">or {product.installment} interest-free</p>
          )}
          {product.freeShipping && (
            <div className="flex items-center gap-1 text-[#059669] text-[11px] font-medium">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8M10 12h4" />
              </svg>
              Free delivery
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
