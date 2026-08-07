import type { CartItem } from '../state/marketplace-store'
import type { View } from '../app/navigation'

type Props = {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, qty: number) => void
  onNavigate: (v: View) => void
}

const FREE_SHIPPING_THRESHOLD = 75

export default function CartDrawer({ open, onClose, items, onRemove, onUpdateQuantity, onNavigate }: Props) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  const vendorGroups = items.reduce<Record<string, CartItem[]>>((acc, item) => {
    if (!acc[item.vendor]) acc[item.vendor] = []
    acc[item.vendor].push(item)
    return acc
  }, {})

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E7E2]">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-[#0E0E0E]">Your Cart</h2>
            {items.length > 0 && (
              <span className="w-6 h-6 bg-[#E8450A] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-[#F3F2EF] flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-[#6B6A66]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="w-20 h-20 bg-[#F3F2EF] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold text-[#0E0E0E]">Your cart is empty</p>
              <p className="text-sm text-[#6B6A66] mt-1">Discover thousands of products from top vendors.</p>
            </div>
            <button
              onClick={() => { onNavigate({ type: 'home' }); onClose() }}
              className="px-6 py-2.5 bg-[#E8450A] text-white rounded-xl font-semibold text-sm hover:bg-[#C93A07] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="px-6 py-4 bg-[#F9F8F5] border-b border-[#E8E7E2]">
              {remaining === 0 ? (
                <p className="text-sm font-semibold text-[#059669] flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You unlocked FREE delivery!
                </p>
              ) : (
                <p className="text-sm text-[#6B6A66]">
                  Add <span className="font-bold text-[#0E0E0E]">${remaining.toFixed(0)}</span> more to unlock{' '}
                  <span className="font-semibold text-[#059669]">FREE delivery</span>
                </p>
              )}
              <div className="rating-bar mt-2">
                <div className="rating-bar-fill" style={{ width: `${shippingProgress}%`, background: remaining === 0 ? '#059669' : '#E8450A' }} />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {Object.entries(vendorGroups).map(([vendor, groupItems]) => (
                <div key={vendor}>
                  <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {vendor}
                  </p>
                  <div className="space-y-3">
                    {groupItems.map(item => (
                      <div key={item.id} className="flex gap-3 bg-[#F9F8F5] rounded-xl p-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <p className="text-sm font-medium text-[#0E0E0E] line-clamp-2 leading-snug">{item.title}</p>
                          {item.variant && <p className="text-xs text-[#9CA3AF]">{item.variant}</p>}
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-sm">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 rounded-lg bg-white border border-[#E8E7E2] flex items-center justify-center hover:bg-[#F3F2EF] transition-colors"
                              >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                              </button>
                              <span className="text-sm font-semibold w-6 text-center tabular-nums">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 rounded-lg bg-white border border-[#E8E7E2] flex items-center justify-center hover:bg-[#F3F2EF] transition-colors"
                              >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                              </button>
                              <button
                                onClick={() => onRemove(item.id)}
                                className="ml-1 text-[#9CA3AF] hover:text-[#E11D48] transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8E7E2] px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B6A66]">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-mono font-bold text-lg">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { onNavigate({ type: 'cart' }); onClose() }}
                  className="py-3 rounded-xl border-2 border-[#0E0E0E] text-sm font-semibold text-[#0E0E0E] hover:bg-[#F3F2EF] transition-colors"
                >
                  View Cart
                </button>
                <button
                  onClick={() => { onNavigate({ type: 'checkout' }); onClose() }}
                  className="py-3 rounded-xl bg-[#E8450A] text-white text-sm font-semibold hover:bg-[#C93A07] transition-colors"
                >
                  Checkout →
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 text-[#9CA3AF]">
                <svg className="w-8 h-5" viewBox="0 0 50 32" fill="currentColor"><rect width="50" height="32" rx="4" fill="#E8E7E2"/><text x="25" y="22" textAnchor="middle" fontSize="11" fill="#6B6A66" fontWeight="600">VISA</text></svg>
                <svg className="w-8 h-5" viewBox="0 0 50 32" fill="currentColor"><rect width="50" height="32" rx="4" fill="#E8E7E2"/><text x="25" y="22" textAnchor="middle" fontSize="8" fill="#6B6A66" fontWeight="600">MC</text></svg>
                <svg className="w-8 h-5" viewBox="0 0 50 32" fill="currentColor"><rect width="50" height="32" rx="4" fill="#E8E7E2"/><text x="25" y="22" textAnchor="middle" fontSize="8" fill="#6B6A66" fontWeight="600">AMEX</text></svg>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
