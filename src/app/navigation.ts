export type View =
  | { type: 'home' }
  | { type: 'product'; id: string }
  | { type: 'category'; slug: string }
  | { type: 'search'; q: string }
  | { type: 'vendor'; id: string }
  | { type: 'cart' }
  | { type: 'checkout' }
  | { type: 'account'; tab?: string }
  | { type: 'admin' }

export function createHomeView(): View {
  return { type: 'home' }
}

export function createProductView(id: string): View {
  return { type: 'product', id }
}

export function createCategoryView(slug: string): View {
  return { type: 'category', slug }
}

export function createSearchView(q: string): View {
  return { type: 'search', q }
}

export function createVendorView(id: string): View {
  return { type: 'vendor', id }
}

export function createCartView(): View {
  return { type: 'cart' }
}

export function createCheckoutView(): View {
  return { type: 'checkout' }
}

export function createAccountView(tab?: string): View {
  return { type: 'account', tab }
}

export function createAdminView(): View {
  return { type: 'admin' }
}

export function parseViewFromPathname(pathname: string): View {
  const segments = pathname.split('/').filter(Boolean)

  if (segments[0] === 'admin') return createAdminView()
  if (segments[0] === 'product' && segments[1]) return createProductView(decodeURIComponent(segments[1]))
  if (segments[0] === 'category' && segments[1]) return createCategoryView(decodeURIComponent(segments[1]))
  if (segments[0] === 'vendor' && segments[1]) return createVendorView(decodeURIComponent(segments[1]))
  if (segments[0] === 'cart') return createCartView()
  if (segments[0] === 'checkout') return createCheckoutView()
  if (segments[0] === 'account') return createAccountView(segments[1])
  if (segments[0] === 'search') {
    const params = new URLSearchParams(window.location.search)
    return createSearchView(params.get('q') ?? '')
  }

  return createHomeView()
}

export function viewToPath(view: View): string {
  switch (view.type) {
    case 'home':
      return '/'
    case 'product':
      return `/product/${encodeURIComponent(view.id)}`
    case 'category':
      return `/category/${encodeURIComponent(view.slug)}`
    case 'search':
      return `/search?q=${encodeURIComponent(view.q)}`
    case 'vendor':
      return `/vendor/${encodeURIComponent(view.id)}`
    case 'cart':
      return '/cart'
    case 'checkout':
      return '/checkout'
    case 'account':
      return view.tab ? `/account/${view.tab}` : '/account'
    case 'admin':
      return '/admin'
  }
}

export function viewToLabel(view: View): string {
  switch (view.type) {
    case 'home':
      return 'Home'
    case 'product':
      return 'Product'
    case 'category':
      return 'Category'
    case 'search':
      return 'Search'
    case 'vendor':
      return 'Vendor'
    case 'cart':
      return 'Cart'
    case 'checkout':
      return 'Checkout'
    case 'account':
      return 'Account'
    case 'admin':
      return 'Admin'
  }
}
