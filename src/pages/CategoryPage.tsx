import type { View } from '../app/navigation'
import type { CartItemInput } from '../state/marketplace-store'
import CategoryPageContent from './category/CategoryPageContent'

type Props = {
  slug: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function CategoryPage(props: Props) {
  return <CategoryPageContent {...props} />
}
