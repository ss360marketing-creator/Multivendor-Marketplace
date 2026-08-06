import type { View } from '../app/navigation'
import type { CartItemInput } from '../state/marketplace-store'
import HomeSections from './home/HomeSections'

type Props = {
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function HomePage(props: Props) {
  return (
    <main>
      <HomeSections {...props} />
    </main>
  )
}
