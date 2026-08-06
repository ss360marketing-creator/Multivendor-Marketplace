import type { View } from '../app/navigation'
import type { CartItemInput } from '../state/marketplace-store'
import VendorPageContent from './vendor/VendorPageContent'

type Props = {
  vendorId: string
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function VendorPage(props: Props) {
  return <VendorPageContent {...props} />
}
