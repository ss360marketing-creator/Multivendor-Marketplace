import { Suspense, lazy, useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { createHomeView, parseViewFromPathname, type View, viewToPath } from './app/navigation'
import { useMarketplace } from './state/marketplace-store'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const VendorPage = lazy(() => import('./pages/VendorPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const AccountPage = lazy(() => import('./pages/AccountPage'))
const AdminShell = lazy(() => import('./admin/AdminShell'))

function RouteLoading({ label }: { label: string }) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6">
      <div className="rounded-2xl border border-[#E8E7E2] bg-white px-5 py-4 shadow-sm">
        <p className="text-sm font-semibold text-[#0E0E0E]">{label}</p>
        <p className="mt-1 text-xs text-[#6B6A66]">Loading content...</p>
      </div>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState<View>(() =>
    typeof window === 'undefined' ? createHomeView() : parseViewFromPathname(window.location.pathname),
  )
  const {
    cartItems,
    cartOpen,
    wishlist,
    cartCount,
    user,
    isLoggedIn,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    clearCart,
    login,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    removeAddress,
  } = useMarketplace()

  useEffect(() => {
    const handlePopState = () => {
      setView(parseViewFromPathname(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (nextView: View) => {
    const nextPath = viewToPath(nextView)

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }

    setView(nextView)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (view.type === 'admin') {
    return (
      <Suspense fallback={<RouteLoading label="Loading admin panel" />}>
        <AdminShell onExitAdmin={() => navigate(createHomeView())} />
      </Suspense>
    )
  }

  return (
    <div className="min-h-screen bg-[#F9F8F5]">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.size}
        onCartOpen={openCart}
        onNavigate={navigate}
      />

      <CartDrawer
        open={cartOpen}
        onClose={closeCart}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onNavigate={navigate}
      />

      <Suspense fallback={<RouteLoading label="Loading page" />}>
        {view.type === 'home' && (
          <HomePage
            onNavigate={navigate}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}
        {view.type === 'product' && (
          <ProductPage
            productId={view.id}
            onNavigate={navigate}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}
        {view.type === 'category' && (
          <CategoryPage
            slug={view.slug}
            onNavigate={navigate}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}
        {view.type === 'search' && (
          <SearchPage
            q={view.q}
            onNavigate={navigate}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}
        {view.type === 'vendor' && (
          <VendorPage
            vendorId={view.id}
            onNavigate={navigate}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}
        {view.type === 'cart' && (
          <CartPage
            items={cartItems}
            onNavigate={navigate}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}
        {view.type === 'checkout' && (
          <CheckoutPage
            items={cartItems}
            onNavigate={navigate}
            onClearCart={clearCart}
          />
        )}
        {view.type === 'account' && (
          <AccountPage
            tab={view.tab}
            user={user}
            isLoggedIn={isLoggedIn}
            wishlist={wishlist}
            onNavigate={navigate}
            onLogin={login}
            onLogout={logout}
            onUpdateProfile={updateProfile}
            onAddAddress={addAddress}
            onUpdateAddress={updateAddress}
            onRemoveAddress={removeAddress}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
        )}
      </Suspense>

      <Footer onNavigate={navigate} />
    </div>
  )
}
