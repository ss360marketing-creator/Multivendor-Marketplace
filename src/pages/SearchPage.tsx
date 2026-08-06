import type { View } from '../app/navigation'
import type { CartItemInput } from '../state/marketplace-store'
import SearchPageContent from './search/SearchPageContent'

type Props = {
  q: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function SearchPage(props: Props) {
  return <SearchPageContent {...props} />
}
