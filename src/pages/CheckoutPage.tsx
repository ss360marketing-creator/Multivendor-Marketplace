import type { View } from '../app/navigation'
import type { CartItem } from '../state/marketplace-store'
import CheckoutPageContent from './checkout/CheckoutPageContent'

type Props = {
  items: CartItem[]
  onNavigate: (v: View) => void
  onClearCart: () => void
}

export default function CheckoutPage(props: Props) {
  return <CheckoutPageContent {...props} />
}
