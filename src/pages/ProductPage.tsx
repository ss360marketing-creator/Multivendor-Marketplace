import type { View } from '../app/navigation'
import type { CartItemInput } from '../state/marketplace-store'
import ProductPageContent from './product/ProductPageContent'

type Props = {
  productId: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function ProductPage(props: Props) {
  return <ProductPageContent {...props} />
}
