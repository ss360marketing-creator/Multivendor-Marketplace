import type { View } from '../app/navigation'
import type { CartItem, CartItemInput } from '../state/marketplace-store'
import CartPageContent from './cart/CartPageContent'

type Props = {
  items: CartItem[]
  onNavigate: (v: View) => void
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, qty: number) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function CartPage(props: Props) {
  return <CartPageContent {...props} />
}
