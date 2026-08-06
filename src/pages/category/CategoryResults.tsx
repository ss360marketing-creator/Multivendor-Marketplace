import ProductCard from '../../components/ProductCard'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'
import type { Product } from '../../data/marketplace'

type Props = {
  items: Product[]
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
  onNavigate: (v: View) => void
  viewMode: 'grid' | 'list'
}

export default function CategoryResults({ items, wishlist, onToggleWishlist, onAddToCart, onNavigate, viewMode }: Props) {
  if (!items.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
        <p className="font-semibold text-[#0E0E0E]">No products found</p>
      </div>
    )
  }

  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map(p => (
          <ProductCard key={p.id} product={p} wishlisted={wishlist.has(p.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} onNavigate={id => onNavigate({ type: 'product', id })} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {items.map(p => (
        <ProductCard key={p.id} product={p} wishlisted={wishlist.has(p.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} onNavigate={id => onNavigate({ type: 'product', id })} variant="horizontal" />
      ))}
    </div>
  )
}
