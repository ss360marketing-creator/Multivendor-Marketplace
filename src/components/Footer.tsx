import type { View } from '../app/navigation'

type Props = { onNavigate: (v: View) => void }

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-[#0E0E0E] text-white mt-24">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <button onClick={() => onNavigate({ type: 'home' })} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E8450A] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="font-display text-xl font-semibold">Nexus</span>
            </button>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[300px]">
              The premium multivendor marketplace connecting you with verified sellers worldwide. Shop with confidence.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold mb-3">Get exclusive deals in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 h-10 px-4 bg-white/10 border border-white/20 rounded-xl text-sm placeholder:text-[#6B6A66] text-white outline-none focus:border-[#E8450A] transition-colors"
                />
                <button className="px-4 h-10 bg-[#E8450A] rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white">Shop</h4>
            <ul className="space-y-3">
              {['Mobiles', 'Electronics', 'Fashion', 'Beauty', 'Home & Living', 'Gaming', 'Accessories'].map(cat => (
                <li key={cat}>
                  <button className="text-sm text-[#9CA3AF] hover:text-white transition-colors">{cat}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white">Sellers</h4>
            <ul className="space-y-3">
              {['Sell on Nexus', 'Seller Dashboard', 'Seller Guidelines', 'Verified Seller Program', 'Promotions', 'Payouts', 'Seller Support'].map(item => (
                <li key={item}>
                  <button className="text-sm text-[#9CA3AF] hover:text-white transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Track My Order', 'Returns & Refunds', 'Payment Options', 'Buyer Protection', 'Contact Us', 'About Nexus'].map(item => (
                <li key={item}>
                  <button className="text-sm text-[#9CA3AF] hover:text-white transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🚚', title: 'Free Delivery', desc: 'On orders over $75' },
              { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
              { icon: '🔒', title: 'Secure Payments', desc: 'SSL encrypted checkout' },
              { icon: '✓', title: 'Verified Sellers', desc: '100% authenticated' },
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
          <p className="text-xs text-[#6B6A66]">© 2025 Salman Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button className="text-xs text-[#6B6A66] hover:text-white transition-colors">Privacy Policy</button>
            <button className="text-xs text-[#6B6A66] hover:text-white transition-colors">Terms of Service</button>
            <button className="text-xs text-[#6B6A66] hover:text-white transition-colors">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
