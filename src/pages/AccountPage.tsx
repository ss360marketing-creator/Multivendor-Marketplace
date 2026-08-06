import type { View } from '../app/navigation'
import type { AccountUser, Address, CartItemInput } from '../state/marketplace-store'
import AccountPageContent from './account/AccountPageContent'

type Props = {
  tab?: string
  user: AccountUser | null
  isLoggedIn: boolean
  wishlist: Set<string>
  onNavigate: (v: View) => void
  onLogin: (user: AccountUser) => void
  onLogout: () => void
  onUpdateProfile: (patch: Partial<AccountUser>) => void
  onAddAddress: (addr: Omit<Address, 'id'>) => void
  onUpdateAddress: (id: string, patch: Partial<Address>) => void
  onRemoveAddress: (id: string) => void
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function AccountPage(props: Props) {
  return <AccountPageContent {...props} />
}
