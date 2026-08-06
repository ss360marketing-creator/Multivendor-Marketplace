import ProductCard from '../../components/ProductCard'
import type { Product } from '../../data/marketplace'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'

type Props = {
  items: Product[]
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
  onNavigate: (v: View) => void
}

export default function RelatedProductsSection({ items, wishlist, onToggleWishlist, onAddToCart, onNavigate }: Props) {
  if (!items.length) return null

  return (
    <div className="mt-16">
      <h2 className="font-display text-3xl font-semibold text-[#0E0E0E] mb-8">You May Also Like</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items.map(p => (
          <ProductCard key={p.id} product={p} wishlisted={wishlist.has(p.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} onNavigate={id => onNavigate({ type: 'product', id })} variant="compact" />
        ))}
      </div>
    </div>
  )
}
