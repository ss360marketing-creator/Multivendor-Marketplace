import { useState } from 'react'
import type { View } from '../../app/navigation'
import type { AccountUser, Address, CartItemInput } from '../../state/marketplace-store'
import { useCatalog } from '@/state/catalog-store'
import ProductCard from '../../components/ProductCard'

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

type AccountTab = 'overview' | 'orders' | 'wishlist' | 'addresses' | 'security'

const mockOrders = [
  {
    id: 'ORD-98214',
    date: '2026-08-02',
    total: 369.98,
    status: 'Delivered',
    paymentMethod: 'Credit Card (••4242)',
    items: [
      { id: '1', title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', price: 349.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format', vendor: 'SoundVault', qty: 1 },
      { id: '10', title: 'Matte Leather Phone Case', price: 19.99, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop&auto=format', vendor: 'TechArmor', qty: 1 },
    ],
  },
  {
    id: 'ORD-97812',
    date: '2026-07-28',
    total: 129.50,
    status: 'In Transit',
    paymentMethod: 'Cash on Delivery',
    items: [
      { id: '3', title: 'Nike Air Max 270 Sneakers', price: 129.50, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&auto=format', vendor: 'SneakerHead', qty: 1 },
    ],
  },
  {
    id: 'ORD-96501',
    date: '2026-07-14',
    total: 89.00,
    status: 'Delivered',
    paymentMethod: 'Bank Transfer',
    items: [
      { id: '5', title: 'Minimalist Ceramic Tea Set', price: 89.00, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=200&h=200&fit=crop&auto=format', vendor: 'HomeCraft', qty: 1 },
    ],
  },
]

export default function AccountPageContent({
  tab = 'overview',
  user,
  isLoggedIn,
  wishlist,
  onNavigate,
  onLogout,
  onUpdateProfile,
  onAddAddress,
  onRemoveAddress,
  onToggleWishlist,
  onAddToCart,
}: Props) {
  const activeTab: AccountTab = (['overview', 'orders', 'wishlist', 'addresses', 'security'].includes(tab) ? tab : 'overview') as AccountTab

  const { products } = useCatalog()

  // Address Modal State
  const [showAddrModal, setShowAddrModal] = useState(false)
  const [newAddr, setNewAddr] = useState<Omit<Address, 'id'>>({
    label: 'Home',
    name: user?.name || '',
    phone: user?.phone || '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal: '',
    country: 'United States',
    isDefault: false,
  })

  // Profile Edit State
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  })
  const [profileSaved, setProfileSaved] = useState(false)

  // Security Form State
  const [securitySaved, setSecuritySaved] = useState(false)
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' })

  const wishlistedProducts = products.filter(p => wishlist.has(p.id))

  const handleSaveProfile = () => {
    onUpdateProfile(profileForm)
    setIsEditingProfile(false)
    setProfileSaved(true)
    setTimeout(() => setProfileSaved(false), 3000)
  }

  const handleAddAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAddr.line1 || !newAddr.city) return
    onAddAddress(newAddr)
    setShowAddrModal(false)
    setNewAddr({
      label: 'Home',
      name: user?.name || '',
      phone: user?.phone || '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal: '',
      country: 'United States',
      isDefault: false,
    })
  }

  if (!isLoggedIn || !user) {
    return (
      <div className="bg-[#F9F8F5] min-h-screen py-16 px-6 flex items-center justify-center">
        <div className="bg-white rounded-3xl border border-[#E8E7E2] p-8 max-w-md w-full text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#FFF7F5] border border-[#FECACA] flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="font-display text-2xl font-bold text-[#0E0E0E] mb-2">Welcome Back</h1>
          <p className="text-sm text-[#6B6A66] mb-6">Please log in to access your account dashboard, orders, and saved wishlist.</p>
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="w-full py-3.5 bg-[#E8450A] text-white font-bold rounded-xl hover:bg-[#C93A07] transition-colors"
          >
            Go to Homepage
          </button>
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
          <span className="text-[#0E0E0E] font-medium">Account</span>
        </nav>

        {/* Top Profile Header Card */}
        <div className="bg-white rounded-3xl border border-[#E8E7E2] p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="flex items-center gap-5 text-center sm:text-left">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E8450A] shadow-md flex-shrink-0"
              />
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <h1 className="font-display text-2xl font-bold text-[#0E0E0E]">{user.name}</h1>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A] uppercase tracking-wide">
                    👑 {user.tier} Member
                  </span>
                </div>
                <p className="text-sm text-[#6B6A66] mt-0.5">{user.email} · {user.phone}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Member since {user.joined}</p>
              </div>
            </div>

            {/* Loyalty Points Badge */}
            <div className="bg-[#FFF7F5] border border-[#FECACA] rounded-2xl p-4 flex items-center gap-4 text-center sm:text-right min-w-[200px] justify-between">
              <div>
                <p className="text-xs font-semibold text-[#6B6A66] uppercase tracking-wide">Rewards Points</p>
                <p className="font-mono text-2xl font-bold text-[#E8450A]">{user.points.toLocaleString()} pts</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#E8450A] text-white flex items-center justify-center font-bold text-lg">
                🎁
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">

          {/* ── Left Navigation Sidebar ── */}
          <aside className="bg-white rounded-3xl border border-[#E8E7E2] p-4 h-fit sticky top-24 shadow-sm space-y-1">
            {[
              { key: 'overview', label: 'Overview & Profile', icon: '👤' },
              { key: 'orders', label: 'Order History', icon: '📦', count: mockOrders.length },
              { key: 'wishlist', label: 'My Wishlist', icon: '❤️', count: wishlist.size },
              { key: 'addresses', label: 'Saved Addresses', icon: '📍', count: user.addresses.length },
              { key: 'security', label: 'Security & Settings', icon: '⚙️' },
            ].map(item => (
              <button
                key={item.key}
                onClick={() => onNavigate({ type: 'account', tab: item.key })}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  activeTab === item.key
                    ? 'bg-[#E8450A] text-white shadow-md shadow-[#E8450A]/20'
                    : 'text-[#6B6A66] hover:bg-[#F3F2EF] hover:text-[#0E0E0E]'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </span>
                {item.count !== undefined && item.count > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${activeTab === item.key ? 'bg-white/20 text-white' : 'bg-[#F3F2EF] text-[#0E0E0E]'}`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 border-t border-[#E8E7E2] mt-4 space-y-1">
              <button
                onClick={() => onNavigate({ type: 'admin' })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-[#6366F1] bg-[#EEF2FF] hover:bg-[#E0E7FF] transition-colors"
              >
                <span className="text-base">⚡</span>
                Admin Portal
              </button>
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-[#E11D48] hover:bg-[#FFF1F2] transition-colors"
              >
                <span className="text-base">🚪</span>
                Log Out
              </button>
            </div>
          </aside>

          {/* ── Main Tab Content Area ── */}
          <main className="space-y-6">

            {/* ── 1. OVERVIEW & PROFILE TAB ── */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {profileSaved && (
                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-3 text-sm font-semibold text-[#059669] flex items-center gap-2">
                    ✓ Profile updated successfully!
                  </div>
                )}

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm">
                    <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Total Orders</p>
                    <p className="font-mono text-2xl font-bold text-[#0E0E0E] mt-1">14</p>
                    <p className="text-xs text-[#059669] font-medium mt-1">3 orders this month</p>
                  </div>
                  <div className="bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm">
                    <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Saved Items</p>
                    <p className="font-mono text-2xl font-bold text-[#0E0E0E] mt-1">{wishlist.size}</p>
                    <p className="text-xs text-[#6B6A66] font-medium mt-1">Ready for checkout</p>
                  </div>
                  <div className="bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm">
                    <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Total Spent</p>
                    <p className="font-mono text-2xl font-bold text-[#0E0E0E] mt-1">$1,248.50</p>
                    <p className="text-xs text-[#E8450A] font-medium mt-1">Gold level perks active</p>
                  </div>
                </div>

                {/* Personal Information Form */}
                <div className="bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-[#0E0E0E]">Personal Information</h2>
                      <p className="text-xs text-[#6B6A66]">Manage your profile details and contact information.</p>
                    </div>
                    <button
                      onClick={() => {
                        if (isEditingProfile) handleSaveProfile()
                        else setIsEditingProfile(true)
                      }}
                      className="px-4 py-2 rounded-xl text-sm font-semibold border border-[#E8E7E2] text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors"
                    >
                      {isEditingProfile ? 'Save Changes' : 'Edit Profile'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide">Full Name</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={profileForm.name}
                        onChange={e => setProfileForm(f => ({ ...f, name: e.target.value }))}
                        className="mt-1 w-full h-11 px-4 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none disabled:bg-[#F9F8F5] focus:border-[#E8450A]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        disabled={!isEditingProfile}
                        value={profileForm.email}
                        onChange={e => setProfileForm(f => ({ ...f, email: e.target.value }))}
                        className="mt-1 w-full h-11 px-4 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none disabled:bg-[#F9F8F5] focus:border-[#E8450A]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        disabled={!isEditingProfile}
                        value={profileForm.phone}
                        onChange={e => setProfileForm(f => ({ ...f, phone: e.target.value }))}
                        className="mt-1 w-full h-11 px-4 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none disabled:bg-[#F9F8F5] focus:border-[#E8450A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Recent Orders Preview */}
                <div className="bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-[#0E0E0E]">Recent Orders</h2>
                    <button
                      onClick={() => onNavigate({ type: 'account', tab: 'orders' })}
                      className="text-xs font-semibold text-[#E8450A] hover:underline"
                    >
                      View All Orders →
                    </button>
                  </div>

                  <div className="divide-y divide-[#E8E7E2]">
                    {mockOrders.slice(0, 2).map(order => (
                      <div key={order.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-sm text-[#0E0E0E]">{order.id}</span>
                            <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${order.status === 'Delivered' ? 'bg-[#F0FDF4] text-[#059669]' : 'bg-[#FFF7ED] text-[#D97706]'}`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="text-xs text-[#6B6A66] mt-1">{order.date} · {order.items.length} item(s)</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono font-bold text-base text-[#0E0E0E]">${order.total.toFixed(2)}</span>
                          <button
                            onClick={() => onNavigate({ type: 'account', tab: 'orders' })}
                            className="px-3 py-1.5 rounded-xl border border-[#E8E7E2] text-xs font-semibold text-[#0E0E0E] hover:bg-[#F3F2EF]"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── 2. ORDERS TAB ── */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0E0E0E]">Order History</h2>
                  <p className="text-sm text-[#6B6A66]">Track, manage, and view receipts for your orders.</p>
                </div>

                <div className="space-y-4">
                  {mockOrders.map(order => (
                    <div key={order.id} className="bg-white rounded-3xl border border-[#E8E7E2] overflow-hidden shadow-sm">
                      {/* Order Header */}
                      <div className="bg-[#F9F8F5] px-6 py-4 border-b border-[#E8E7E2] flex flex-wrap items-center justify-between gap-4 text-xs">
                        <div className="flex items-center gap-6">
                          <div>
                            <span className="text-[#9CA3AF] uppercase font-bold tracking-wider block">Order Placed</span>
                            <span className="font-semibold text-[#0E0E0E] mt-0.5 block">{order.date}</span>
                          </div>
                          <div>
                            <span className="text-[#9CA3AF] uppercase font-bold tracking-wider block">Total</span>
                            <span className="font-mono font-bold text-[#0E0E0E] mt-0.5 block">${order.total.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-[#9CA3AF] uppercase font-bold tracking-wider block">Payment</span>
                            <span className="font-semibold text-[#0E0E0E] mt-0.5 block">{order.paymentMethod}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-sm text-[#0E0E0E]">{order.id}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-[#F0FDF4] text-[#059669] border border-[#BBF7D0]' : 'bg-[#FFF7ED] text-[#D97706] border border-[#FED7AA]'}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="p-6 divide-y divide-[#E8E7E2]">
                        {order.items.map(item => (
                          <div key={item.id} className="py-3 first:pt-0 last:pb-0 flex items-center gap-4">
                            <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl object-cover bg-[#F9F8F5] border border-[#E8E7E2]" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-[#0E0E0E] truncate">{item.title}</p>
                              <p className="text-xs text-[#6B6A66]">Sold by <span className="font-medium text-[#0E0E0E]">{item.vendor}</span></p>
                              <p className="text-xs font-mono font-semibold text-[#0E0E0E] mt-1">${item.price} × {item.qty}</p>
                            </div>
                            <button
                              onClick={() => onAddToCart({ id: item.id, title: item.title, price: item.price, originalPrice: item.price, image: item.image, vendor: item.vendor })}
                              className="px-4 py-2 bg-[#0E0E0E] text-white text-xs font-semibold rounded-xl hover:bg-[#E8450A] transition-colors"
                            >
                              Buy Again
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── 3. WISHLIST TAB ── */}
            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0E0E0E]">My Saved Wishlist</h2>
                  <p className="text-sm text-[#6B6A66]">Products you saved for later.</p>
                </div>

                {wishlistedProducts.length === 0 ? (
                  <div className="bg-white rounded-3xl border border-[#E8E7E2] p-12 text-center shadow-sm">
                    <div className="w-16 h-16 bg-[#FFF1F2] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">❤️</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0E0E0E] mb-1">Your wishlist is empty</h3>
                    <p className="text-sm text-[#6B6A66] mb-6">Explore products and tap the heart icon to save items here.</p>
                    <button
                      onClick={() => onNavigate({ type: 'home' })}
                      className="px-6 py-3 bg-[#E8450A] text-white font-bold text-sm rounded-xl hover:bg-[#C93A07] transition-colors"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {wishlistedProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        wishlisted={true}
                        onToggleWishlist={onToggleWishlist}
                        onAddToCart={onAddToCart}
                        onNavigate={id => onNavigate({ type: 'product', id })}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── 4. SAVED ADDRESSES TAB ── */}
            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#0E0E0E]">Saved Addresses</h2>
                    <p className="text-sm text-[#6B6A66]">Manage delivery locations for quick checkout.</p>
                  </div>
                  <button
                    onClick={() => setShowAddrModal(true)}
                    className="px-4 py-2 bg-[#E8450A] text-white text-sm font-bold rounded-xl hover:bg-[#C93A07] transition-colors flex items-center gap-1.5"
                  >
                    <span>+</span> Add Address
                  </button>
                </div>

                {/* Address Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {user.addresses.map(addr => (
                    <div key={addr.id} className="bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm relative flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-bold text-sm text-[#0E0E0E] flex items-center gap-2">
                            📍 {addr.label}
                          </span>
                          {addr.isDefault && (
                            <span className="text-[10px] font-bold bg-[#F0FDF4] text-[#059669] px-2 py-0.5 rounded-full border border-[#BBF7D0]">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-[#0E0E0E]">{addr.name}</p>
                        <p className="text-xs text-[#6B6A66] mt-1">{addr.phone}</p>
                        <p className="text-xs text-[#6B6A66] mt-1">{addr.line1}{addr.line2 ? `, ${addr.line2}` : ''}</p>
                        <p className="text-xs text-[#6B6A66]">{addr.city}, {addr.state} {addr.postal}</p>
                        <p className="text-xs text-[#6B6A66]">{addr.country}</p>
                      </div>

                      <div className="pt-4 border-t border-[#E8E7E2] mt-4 flex items-center justify-between text-xs font-semibold">
                        <button
                          onClick={() => onRemoveAddress(addr.id)}
                          className="text-[#E11D48] hover:underline"
                        >
                          Remove
                        </button>
                        {!addr.isDefault && (
                          <button className="text-[#E8450A] hover:underline">
                            Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Address Modal */}
                {showAddrModal && (
                  <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl border border-[#E8E7E2] p-6 max-w-md w-full shadow-2xl space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-[#0E0E0E]">Add New Address</h3>
                        <button onClick={() => setShowAddrModal(false)} className="text-[#9CA3AF] hover:text-[#0E0E0E]">✕</button>
                      </div>

                      <form onSubmit={handleAddAddressSubmit} className="space-y-3 text-xs">
                        <div>
                          <label className="font-semibold text-[#0E0E0E] uppercase">Label</label>
                          <input
                            type="text"
                            placeholder="Home / Work / Cottage"
                            value={newAddr.label}
                            onChange={e => setNewAddr(a => ({ ...a, label: e.target.value }))}
                            className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#0E0E0E] uppercase">Street Address</label>
                          <input
                            type="text"
                            required
                            placeholder="123 Main St"
                            value={newAddr.line1}
                            onChange={e => setNewAddr(a => ({ ...a, line1: e.target.value }))}
                            className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="font-semibold text-[#0E0E0E] uppercase">City</label>
                            <input
                              type="text"
                              required
                              placeholder="New York"
                              value={newAddr.city}
                              onChange={e => setNewAddr(a => ({ ...a, city: e.target.value }))}
                              className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
                            />
                          </div>
                          <div>
                            <label className="font-semibold text-[#0E0E0E] uppercase">Postal Code</label>
                            <input
                              type="text"
                              placeholder="10001"
                              value={newAddr.postal}
                              onChange={e => setNewAddr(a => ({ ...a, postal: e.target.value }))}
                              className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
                            />
                          </div>
                        </div>

                        <div className="pt-3 flex gap-2">
                          <button
                            type="button"
                            onClick={() => setShowAddrModal(false)}
                            className="flex-1 py-2.5 rounded-xl border border-[#E8E7E2] font-semibold text-[#0E0E0E]"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="flex-1 py-2.5 rounded-xl bg-[#E8450A] text-white font-bold"
                          >
                            Save Address
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── 5. SECURITY & SETTINGS TAB ── */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0E0E0E]">Security & Preferences</h2>
                  <p className="text-sm text-[#6B6A66]">Manage account credentials and notification preferences.</p>
                </div>

                {securitySaved && (
                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-3 text-sm font-semibold text-[#059669]">
                    ✓ Settings saved!
                  </div>
                )}

                {/* Change Password */}
                <div className="bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm space-y-4">
                  <h3 className="font-bold text-base text-[#0E0E0E]">Change Password</h3>
                  <div className="space-y-3 max-w-md">
                    <div>
                      <label className="text-xs font-semibold text-[#0E0E0E] uppercase">Current Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={passwords.current}
                        onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))}
                        className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E8E7E2] text-sm outline-none focus:border-[#E8450A]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#0E0E0E] uppercase">New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={passwords.next}
                        onChange={e => setPasswords(p => ({ ...p, next: e.target.value }))}
                        className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E8E7E2] text-sm outline-none focus:border-[#E8450A]"
                      />
                    </div>
                    <button
                      onClick={() => { setSecuritySaved(true); setTimeout(() => setSecuritySaved(false), 3000) }}
                      className="px-5 py-2.5 bg-[#0E0E0E] text-white font-bold text-xs rounded-xl hover:bg-[#E8450A] transition-colors"
                    >
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm space-y-4">
                  <h3 className="font-bold text-base text-[#0E0E0E]">Email & SMS Notifications</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: 'Order status updates & shipping tracking', defaultOn: true },
                      { label: 'Promotional deals & discount coupons', defaultOn: true },
                      { label: 'Wishlist price drop alerts', defaultOn: true },
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked={item.defaultOn} className="w-4 h-4 accent-[#E8450A]" />
                        <span className="text-[#0E0E0E]">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  )
}
