import { useState } from 'react'
import type { View } from '../app/navigation'

type Props = { onNavigate: (v: View) => void }

const SHOP_CATEGORIES = [
  { name: 'Mobiles', slug: 'mobiles' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Beauty', slug: 'beauty' },
  { name: 'Home & Living', slug: 'home' },
  { name: 'Gaming', slug: 'gaming' },
  { name: 'Accessories', slug: 'accessories' },
]

export default function Footer({ onNavigate }: Props) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [modalText, setModalText] = useState<{ title: string; body: string } | null>(null)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-[#0E0E0E] text-white mt-24">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <button onClick={() => onNavigate({ type: 'home' })} className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-[#E8450A] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-[#E8450A]/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Salman Marketplace</span>
            </button>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[320px]">
              Pakistan's premium multivendor marketplace connecting you with verified sellers nationwide. Shop with confidence.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold mb-3 text-white">Get exclusive PKR deals in your inbox</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 h-10 px-4 bg-white/10 border border-white/20 rounded-xl text-sm placeholder:text-[#6B6A66] text-white outline-none focus:border-[#E8450A] transition-colors"
                />
                <button type="submit" className="px-4 h-10 bg-[#E8450A] rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors flex-shrink-0">
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-[#059669] font-bold mt-2 animate-fade-in">✓ Subscribed successfully!</p>
              )}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">Shop Categories</h4>
            <ul className="space-y-3">
              {SHOP_CATEGORIES.map(cat => (
                <li key={cat.slug}>
                  <button
                    onClick={() => onNavigate({ type: 'category', slug: cat.slug })}
                    className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">Customer Support</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate({ type: 'account', tab: 'orders' })} className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors">
                  Track My Order
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'account', tab: 'orders' })} className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors">
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'cart' })} className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors">
                  My Shopping Cart
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'checkout' })} className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors">
                  Express Checkout
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'account' })} className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors">
                  Customer Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalText({ title: 'Contact Us', body: 'Support Email: support@salmanmarketplace.com | Phone: +92 (300) 123-4567 | Hours: Mon–Sat 9AM–9PM PST' })}
                  className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors"
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Vendors & Sellers */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">Sellers & Stores</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate({ type: 'search', q: 'vendor' })} className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors">
                  Browse All Vendors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'vendor', id: 'v1' })} className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors">
                  Top Verified Stores
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalText({ title: 'Sell on Salman Marketplace', body: 'Join hundreds of Pakistani vendors on Salman Marketplace! Enjoy low commission fees, instant PKR payouts via JazzCash/Easypaisa/Bank, and nation-wide logistics.' })}
                  className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors"
                >
                  Sell on Salman
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalText({ title: 'Verified Seller Guarantee', body: 'All sellers on Salman Marketplace undergo identity and product authenticity verification to ensure 100% genuine products.' })}
                  className="text-sm text-[#9CA3AF] hover:text-[#E8450A] transition-colors"
                >
                  Seller Guidelines
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🚚', title: 'Free Delivery', desc: 'On orders over Rs. 2,000' },
              { icon: '↩️', title: 'Easy Returns', desc: '7-day return policy in Pakistan' },
              { icon: '🔒', title: 'Secure PKR Payments', desc: 'COD, Card, JazzCash & Easypaisa' },
              { icon: '✓', title: 'Verified Sellers', desc: '100% authenticated products' },
            ].map(t => (
              <div key={t.title} className="flex items-center gap-3">
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.title}</p>
                  <p className="text-xs text-[#9CA3AF]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6A66]">© 2026 Salman Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setModalText({ title: 'Privacy Policy', body: 'Salman Marketplace is committed to protecting your privacy. Your personal information and transactions are encrypted with 256-bit SSL security.' })}
              className="text-xs text-[#6B6A66] hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalText({ title: 'Terms of Service', body: 'By using Salman Marketplace, you agree to our buyer protection policies, fair seller guidelines, and standard Pakistan e-commerce regulations.' })}
              className="text-xs text-[#6B6A66] hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setModalText({ title: 'Cookie Policy', body: 'We use essential cookies to maintain your shopping cart, remember your currency preferences, and provide a seamless shopping experience.' })}
              className="text-xs text-[#6B6A66] hover:text-white transition-colors"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {modalText && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181824] border border-white/10 rounded-2xl p-6 max-w-md w-full text-white space-y-4 shadow-2xl animate-scale-up">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-bold text-lg text-[#E8450A]">{modalText.title}</h3>
              <button onClick={() => setModalText(null)} className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">✕</button>
            </div>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">{modalText.body}</p>
            <button onClick={() => setModalText(null)} className="w-full py-2.5 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]">
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}
