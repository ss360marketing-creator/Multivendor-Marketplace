import { useMemo, useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItem, CartItemInput } from '../../state/marketplace-store'
import { useCatalog } from '@/state/catalog-store'
import ProductCard from '../../components/ProductCard'

type Props = {
  items: CartItem[]
  onNavigate: (v: View) => void
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, qty: number) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

const FREE_SHIPPING_THRESHOLD = 75
const SHIPPING_FEE = 9.99
const TAX_RATE = 0.08

function TrashIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  )
}

export default function CartPageContent({ items, onNavigate, onRemove, onUpdateQuantity, wishlist, onToggleWishlist, onAddToCart }: Props) {
  const { products } = useCatalog()
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')

  const subtotal   = items.reduce((s, i) => s + i.price * i.quantity, 0)
  const shipping   = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : items.length > 0 ? SHIPPING_FEE : 0
  const discount   = couponApplied ? subtotal * 0.1 : 0
  const tax        = (subtotal - discount) * TAX_RATE
  const total      = subtotal - discount + shipping + tax
  const remaining  = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const freeShipPct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  const vendorGroups = useMemo(() =>
    items.reduce<Record<string, CartItem[]>>((acc, item) => {
      if (!acc[item.vendor]) acc[item.vendor] = []
      acc[item.vendor].push(item)
      return acc
    }, {}),
  [items])

  const recommended = useMemo(() =>
    products.filter(p => !items.some(i => i.id === p.id)).slice(0, 4),
  [products, items])

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'NEXUS10') {
      setCouponApplied(true)
      setCouponError('')
    } else {
      setCouponError('Invalid coupon code. Try NEXUS10.')
      setCouponApplied(false)
    }
  }

  // ── Empty Cart State ──
  if (items.length === 0) {
    return (
      <div className="bg-[#F9F8F5] min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <nav className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-8">
            <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-[#E8450A] transition-colors">Home</button>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#0E0E0E] font-medium">Cart</span>
          </nav>
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-[#F3F2EF] flex items-center justify-center">
              <svg className="w-12 h-12 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="font-display text-2xl font-bold text-[#0E0E0E] mb-2">Your cart is empty</h1>
            <p className="text-[#6B6A66] mb-8">Looks like you haven&apos;t added anything yet. Explore thousands of products!</p>
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="px-8 py-3.5 bg-[#E8450A] text-white rounded-xl font-semibold hover:bg-[#C93A07] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
          {recommended.length > 0 && (
            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">Recommended For You</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {recommended.map(p => (
                  <ProductCard
                    key={p.id} product={p}
                    wishlisted={wishlist.has(p.id)}
                    onToggleWishlist={onToggleWishlist}
                    onAddToCart={onAddToCart}
                    onNavigate={id => onNavigate({ type: 'product', id })}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#F9F8F5] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-6">
          <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-[#E8450A] transition-colors">Home</button>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          <span className="text-[#0E0E0E] font-medium">Cart</span>
          <span className="text-[#9CA3AF] ml-1">({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
        </nav>

        {/* Free Shipping Progress Banner */}
        {remaining > 0 ? (
          <div className="bg-white rounded-2xl border border-[#E8E7E2] px-5 py-4 mb-6 flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-[#0E0E0E]">
                Add <span className="font-bold text-[#E8450A]">${remaining.toFixed(2)}</span> more to unlock{' '}
                <span className="font-bold text-[#059669]">FREE Delivery</span>
              </p>
              <div className="mt-2 h-2 rounded-full bg-[#F3F2EF] overflow-hidden">
                <div className="h-full rounded-full bg-[#E8450A] transition-all duration-500" style={{ width: `${freeShipPct}%` }} />
              </div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FFF7F5] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8M10 12h4" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-3 mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-[#059669] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm font-semibold text-[#059669]">🎉 You unlocked FREE delivery on this order!</p>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* ── LEFT: Cart Items ── */}
          <div className="space-y-6">
            {Object.entries(vendorGroups).map(([vendorName, groupItems]) => (
              <div key={vendorName} className="bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden">
                {/* Vendor Header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E8E7E2] bg-[#F9F8F5]">
                  <div className="w-8 h-8 rounded-lg bg-[#E8450A]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#0E0E0E]">{vendorName}</p>
                    <p className="text-xs text-[#6B6A66]">
                      {groupItems.reduce((s, i) => s + i.quantity, 0)} items · Est. delivery in 2–4 days
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#059669] bg-[#F0FDF4] px-2.5 py-1 rounded-full border border-[#BBF7D0]">
                    ✓ Verified
                  </span>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-[#E8E7E2]">
                  {groupItems.map(item => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 p-5">
                      {/* Image */}
                      <button
                        onClick={() => onNavigate({ type: 'product', id: item.id })}
                        className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-[#F9F8F5] border border-[#E8E7E2] hover:opacity-90 transition-opacity"
                      >
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </button>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => onNavigate({ type: 'product', id: item.id })}
                          className="text-sm font-semibold text-[#0E0E0E] line-clamp-2 leading-snug hover:text-[#E8450A] transition-colors text-left"
                        >
                          {item.title}
                        </button>
                        {item.variant && (
                          <p className="text-xs text-[#9CA3AF] mt-0.5">{item.variant}</p>
                        )}
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-xs font-semibold text-[#059669] bg-[#F0FDF4] px-1.5 py-0.5 rounded">In Stock</span>
                          {item.originalPrice > item.price && (
                            <span className="text-xs text-[#9CA3AF] line-through font-mono">${item.originalPrice.toFixed(2)}</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                          {/* Qty Controls */}
                          <div className="flex items-center rounded-xl border border-[#E8E7E2] overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-9 h-9 flex items-center justify-center hover:bg-[#F3F2EF] transition-colors text-[#0E0E0E]"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                            </button>
                            <span className="w-10 text-center text-sm font-semibold text-[#0E0E0E] tabular-nums">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-9 h-9 flex items-center justify-center hover:bg-[#F3F2EF] transition-colors text-[#0E0E0E]"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                            </button>
                          </div>

                          {/* Line Total + Remove */}
                          <div className="flex items-center gap-4">
                            <span className="font-mono font-bold text-base text-[#0E0E0E]">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => onRemove(item.id)}
                              className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors"
                              title="Remove"
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="flex items-center gap-2 text-sm font-medium text-[#6B6A66] hover:text-[#E8450A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Continue Shopping
            </button>

            {/* Recommended */}
            {recommended.length > 0 && (
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">You May Also Like</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {recommended.map(p => (
                    <ProductCard
                      key={p.id} product={p} variant="compact"
                      wishlisted={wishlist.has(p.id)}
                      onToggleWishlist={onToggleWishlist}
                      onAddToCart={onAddToCart}
                      onNavigate={id => onNavigate({ type: 'product', id })}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Order Summary ── */}
          <div className="space-y-4">
            {/* Coupon */}
            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5">
              <p className="text-sm font-semibold text-[#0E0E0E] mb-3">Promo Code</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={e => { setCoupon(e.target.value.toUpperCase()); setCouponError(''); setCouponApplied(false) }}
                  placeholder="Enter code (try NEXUS10)"
                  className="flex-1 h-10 px-3 rounded-xl border border-[#E8E7E2] text-sm text-[#0E0E0E] outline-none focus:border-[#E8450A] placeholder:text-[#9CA3AF]"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-4 h-10 rounded-xl bg-[#0E0E0E] text-white text-sm font-semibold hover:bg-[#E8450A] transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <p className="text-xs text-[#059669] font-semibold mt-2 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  NEXUS10 applied — 10% off!
                </p>
              )}
              {couponError && <p className="text-xs text-[#E11D48] mt-2">{couponError}</p>}
            </div>

            {/* Summary Card */}
            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24">
              <h2 className="text-base font-bold text-[#0E0E0E] mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B6A66]">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-mono font-semibold text-[#0E0E0E]">${subtotal.toFixed(2)}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-[#059669]">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>
                      Promo NEXUS10
                    </span>
                    <span className="font-mono font-semibold">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#6B6A66]">Shipping</span>
                  <span className={`font-mono font-semibold ${shipping === 0 ? 'text-[#059669]' : 'text-[#0E0E0E]'}`}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6A66]">Est. Tax (8%)</span>
                  <span className="font-mono font-semibold text-[#0E0E0E]">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-[#E8E7E2] mt-4 pt-4 flex justify-between">
                <span className="font-bold text-[#0E0E0E]">Total</span>
                <span className="font-mono font-bold text-xl text-[#0E0E0E]">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => onNavigate({ type: 'checkout' })}
                className="mt-5 w-full py-4 rounded-xl bg-[#E8450A] text-white font-bold text-base hover:bg-[#C93A07] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-[#E8450A]/20"
              >
                Proceed to Checkout →
              </button>

              {/* Trust badges */}
              <div className="mt-4 flex items-center justify-center gap-4">
                {['SSL', 'VISA', 'MC', 'AMEX'].map(b => (
                  <div key={b} className="px-2.5 py-1 rounded-lg border border-[#E8E7E2] text-[10px] font-bold text-[#6B6A66]">{b}</div>
                ))}
              </div>
              <p className="text-center text-xs text-[#9CA3AF] mt-3">
                🔒 Secure checkout · 30-day returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
