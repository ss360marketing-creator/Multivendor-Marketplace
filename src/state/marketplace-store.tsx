import { createContext, type ReactNode, useContext, useMemo, useReducer } from 'react'

export type CartItem = {
  id: string
  title: string
  price: number
  originalPrice: number
  image: string
  vendor: string
  quantity: number
  variant?: string
}

export type CartItemInput = Omit<CartItem, 'quantity'>

export type AccountUser = {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  joined: string
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum'
  points: number
  addresses: Address[]
}

export type Address = {
  id: string
  label: string
  name: string
  phone: string
  line1: string
  line2?: string
  city: string
  state: string
  postal: string
  country: string
  isDefault: boolean
}

type MarketplaceState = {
  cartItems: CartItem[]
  cartOpen: boolean
  wishlistIds: string[]
  user: AccountUser | null
  isLoggedIn: boolean
}

type MarketplaceContextValue = MarketplaceState & {
  wishlist: Set<string>
  cartCount: number
  openCart: () => void
  closeCart: () => void
  addToCart: (item: CartItemInput) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, qty: number) => void
  toggleWishlist: (id: string) => void
  clearCart: () => void
  login: (user: AccountUser) => void
  logout: () => void
  updateProfile: (patch: Partial<AccountUser>) => void
  addAddress: (addr: Omit<Address, 'id'>) => void
  updateAddress: (id: string, patch: Partial<Address>) => void
  removeAddress: (id: string) => void
}

type MarketplaceAction =
  | { type: 'cart/open' }
  | { type: 'cart/close' }
  | { type: 'cart/add'; item: CartItemInput }
  | { type: 'cart/remove'; id: string }
  | { type: 'cart/update-quantity'; id: string; qty: number }
  | { type: 'cart/clear' }
  | { type: 'wishlist/toggle'; id: string }
  | { type: 'auth/login'; user: AccountUser }
  | { type: 'auth/logout' }
  | { type: 'auth/update-profile'; patch: Partial<AccountUser> }
  | { type: 'auth/add-address'; addr: Omit<Address, 'id'> }
  | { type: 'auth/update-address'; id: string; patch: Partial<Address> }
  | { type: 'auth/remove-address'; id: string }

const MarketplaceContext = createContext<MarketplaceContextValue | null>(null)

const MOCK_USER: AccountUser = {
  id: 'usr_001',
  name: 'Sarah Johnson',
  email: 'sarah@example.com',
  phone: '+1 (555) 234-5678',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
  joined: '2023-01-15',
  tier: 'Gold',
  points: 2480,
  addresses: [
    {
      id: 'addr_1', label: 'Home', name: 'Sarah Johnson', phone: '+1 (555) 234-5678',
      line1: '123 Maple Street', city: 'New York', state: 'NY', postal: '10001', country: 'United States', isDefault: true,
    },
    {
      id: 'addr_2', label: 'Work', name: 'Sarah Johnson', phone: '+1 (555) 234-5678',
      line1: '456 Business Ave, Suite 200', city: 'New York', state: 'NY', postal: '10002', country: 'United States', isDefault: false,
    },
  ],
}

const initialState: MarketplaceState = {
  cartItems: [],
  cartOpen: false,
  wishlistIds: [],
  user: MOCK_USER,
  isLoggedIn: true,
}

function reducer(state: MarketplaceState, action: MarketplaceAction): MarketplaceState {
  switch (action.type) {
    case 'cart/open':
      return { ...state, cartOpen: true }
    case 'cart/close':
      return { ...state, cartOpen: false }
    case 'cart/add': {
      const existing = state.cartItems.find(item => item.id === action.item.id && item.variant === action.item.variant)
      const cartItems = existing
        ? state.cartItems.map(item =>
            item.id === action.item.id && item.variant === action.item.variant
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.cartItems, { ...action.item, quantity: 1 }]

      return { ...state, cartItems, cartOpen: true }
    }
    case 'cart/remove':
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.id) }
    case 'cart/update-quantity':
      return {
        ...state,
        cartItems:
          action.qty <= 0
            ? state.cartItems.filter(item => item.id !== action.id)
            : state.cartItems.map(item => (item.id === action.id ? { ...item, quantity: action.qty } : item)),
      }
    case 'cart/clear':
      return { ...state, cartItems: [], cartOpen: false }
    case 'wishlist/toggle':
      return {
        ...state,
        wishlistIds: state.wishlistIds.includes(action.id)
          ? state.wishlistIds.filter(id => id !== action.id)
          : [...state.wishlistIds, action.id],
      }
    case 'auth/login':
      return { ...state, user: action.user, isLoggedIn: true }
    case 'auth/logout':
      return { ...state, user: null, isLoggedIn: false }
    case 'auth/update-profile':
      return state.user ? { ...state, user: { ...state.user, ...action.patch } } : state
    case 'auth/add-address': {
      if (!state.user) return state
      const newAddr: Address = { ...action.addr, id: `addr_${Date.now()}` }
      return { ...state, user: { ...state.user, addresses: [...state.user.addresses, newAddr] } }
    }
    case 'auth/update-address': {
      if (!state.user) return state
      return {
        ...state,
        user: {
          ...state.user,
          addresses: state.user.addresses.map(a => a.id === action.id ? { ...a, ...action.patch } : a),
        },
      }
    }
    case 'auth/remove-address': {
      if (!state.user) return state
      return { ...state, user: { ...state.user, addresses: state.user.addresses.filter(a => a.id !== action.id) } }
    }
    default:
      return state
  }
}

export function MarketplaceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo<MarketplaceContextValue>(() => {
    const wishlist = new Set(state.wishlistIds)

    return {
      ...state,
      wishlist,
      cartCount: state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
      openCart: () => dispatch({ type: 'cart/open' }),
      closeCart: () => dispatch({ type: 'cart/close' }),
      addToCart: item => dispatch({ type: 'cart/add', item }),
      removeFromCart: id => dispatch({ type: 'cart/remove', id }),
      updateQuantity: (id, qty) => dispatch({ type: 'cart/update-quantity', id, qty }),
      toggleWishlist: id => dispatch({ type: 'wishlist/toggle', id }),
      clearCart: () => dispatch({ type: 'cart/clear' }),
      login: user => dispatch({ type: 'auth/login', user }),
      logout: () => dispatch({ type: 'auth/logout' }),
      updateProfile: patch => dispatch({ type: 'auth/update-profile', patch }),
      addAddress: addr => dispatch({ type: 'auth/add-address', addr }),
      updateAddress: (id, patch) => dispatch({ type: 'auth/update-address', id, patch }),
      removeAddress: id => dispatch({ type: 'auth/remove-address', id }),
    }
  }, [state])

  return <MarketplaceContext.Provider value={value}>{children}</MarketplaceContext.Provider>
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext)

  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider')
  }

  return context
}
