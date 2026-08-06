import { useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItem } from '../../state/marketplace-store'

type Props = {
  items: CartItem[]
  onNavigate: (v: View) => void
  onClearCart: () => void
}

type Step = 1 | 2 | 3 | 4
type PaymentMethod = 'card' | 'cod' | 'bank'

const SHIPPING_FEE = 9.99
const TAX_RATE = 0.08
const FREE_SHIPPING_THRESHOLD = 75

const stepLabels: Record<Step, string> = {
  1: 'Address',
  2: 'Shipping',
  3: 'Payment',
  4: 'Review',
}

function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="flex items-center gap-0 mb-8">
      {([1, 2, 3, 4] as Step[]).map((step, idx) => (
        <div key={step} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              step < current ? 'bg-[#059669] text-white' :
              step === current ? 'bg-[#E8450A] text-white shadow-lg shadow-[#E8450A]/30' :
              'bg-[#F3F2EF] text-[#9CA3AF]'
            }`}>
              {step < current ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              ) : step}
            </div>
            <span className={`text-[11px] font-medium mt-1.5 ${step === current ? 'text-[#E8450A]' : step < current ? 'text-[#059669]' : 'text-[#9CA3AF]'}`}>
              {stepLabels[step]}
            </span>
          </div>
          {idx < 3 && (
            <div className={`flex-1 h-0.5 mx-2 mb-5 rounded-full transition-all duration-300 ${step < current ? 'bg-[#059669]' : 'bg-[#E8E7E2]'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

function SectionTitle({ number, title, subtitle }: { number: number; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div className="w-8 h-8 rounded-lg bg-[#0E0E0E] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
        {number}
      </div>
      <div>
        <h2 className="text-base font-bold text-[#0E0E0E]">{title}</h2>
        {subtitle && <p className="text-xs text-[#6B6A66] mt-0.5">{subtitle}</p>}
      </div>
    </div>
  )
}

function InputField({ label, placeholder, type = 'text', value, onChange, required, icon }: {
  label: string; placeholder: string; type?: string;
  value: string; onChange: (v: string) => void; required?: boolean; icon?: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide">
        {label}{required && <span className="text-[#E11D48] ml-0.5">*</span>}
      </label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">{icon}</div>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`w-full h-11 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none focus:border-[#E8450A] focus:ring-2 focus:ring-[#E8450A]/10 transition-all placeholder:text-[#9CA3AF] ${icon ? 'pl-10 pr-4' : 'px-4'}`}
        />
      </div>
    </div>
  )
}

export default function CheckoutPageContent({ items, onNavigate, onClearCart }: Props) {
  const [step, setStep] = useState<Step>(1)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber] = useState(() => `NXS-${Math.floor(100000 + Math.random() * 900000)}`)
  const [placingOrder, setPlacingOrder] = useState(false)

  // Step 1 – Address
  const [addr, setAddr] = useState({ name: '', phone: '', line1: '', line2: '', city: '', state: '', postal: '', country: 'Pakistan' })
  // Step 2 – Shipping
  const [shipMethod, setShipMethod] = useState<'standard' | 'express' | 'overnight'>('standard')
  // Step 3 – Payment
  const [payMethod, setPayMethod] = useState<PaymentMethod>('card')
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' })

  const subtotal    = items.reduce((s, i) => s + i.price * i.quantity, 0)
  const baseship    = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
  const shipCost    = shipMethod === 'express' ? baseship + 9.99 : shipMethod === 'overnight' ? baseship + 19.99 : baseship
  const tax         = subtotal * TAX_RATE
  const total       = subtotal + shipCost + tax

  const vendorGroups = items.reduce<Record<string, CartItem[]>>((acc, item) => {
    if (!acc[item.vendor]) acc[item.vendor] = []
    acc[item.vendor].push(item)
    return acc
  }, {})

  const handlePlaceOrder = () => {
    setPlacingOrder(true)
    setTimeout(() => {
      setPlacingOrder(false)
      setOrderPlaced(true)
      onClearCart()
    }, 1800)
  }

  // ── Order Success Screen ──
  if (orderPlaced) {
    return (
      <div className="bg-[#F9F8F5] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 rounded-full bg-[#F0FDF4] border-4 border-[#BBF7D0] flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <svg className="w-12 h-12 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-bold text-[#0E0E0E] mb-2">Order Placed! 🎉</h1>
          <p className="text-[#6B6A66] mb-1">Thank you for your order.</p>
          <p className="text-sm text-[#9CA3AF] mb-6">
            Order number: <span className="font-mono font-bold text-[#0E0E0E]">{orderNumber}</span>
          </p>

          {/* Order Timeline */}
          <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5 mb-6 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">Order Tracking</p>
            {[
              { label: 'Order Placed', done: true, active: false },
              { label: 'Confirmed', done: false, active: true },
              { label: 'Packed', done: false, active: false },
              { label: 'Shipped', done: false, active: false },
              { label: 'Out for Delivery', done: false, active: false },
              { label: 'Delivered', done: false, active: false },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? 'bg-[#059669]' : s.active ? 'bg-[#E8450A] animate-pulse' : 'bg-[#F3F2EF]'}`}>
                    {s.done ? (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <div className={`w-2.5 h-2.5 rounded-full ${s.active ? 'bg-white' : 'bg-[#D1D5DB]'}`} />
                    )}
                  </div>
                  {i < 5 && <div className={`w-0.5 h-5 mt-0.5 mb-0.5 ${s.done ? 'bg-[#059669]' : 'bg-[#E8E7E2]'}`} />}
                </div>
                <p className={`text-sm pt-1 pb-4 ${s.done ? 'font-semibold text-[#059669]' : s.active ? 'font-semibold text-[#E8450A]' : 'text-[#9CA3AF]'}`}>
                  {s.label}
                  {s.active && <span className="ml-2 text-xs font-normal">(In progress)</span>}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="flex-1 py-3.5 rounded-xl border-2 border-[#0E0E0E] text-sm font-semibold text-[#0E0E0E] hover:bg-[#F3F2EF] transition-colors"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="flex-1 py-3.5 rounded-xl bg-[#E8450A] text-white text-sm font-semibold hover:bg-[#C93A07] transition-colors"
            >
              Track Order
            </button>
          </div>
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
          <button onClick={() => onNavigate({ type: 'cart' })} className="hover:text-[#E8450A] transition-colors">Cart</button>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          <span className="text-[#0E0E0E] font-medium">Checkout</span>
        </nav>

        {/* Secure Badge */}
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-4 h-4 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-xs font-semibold text-[#059669]">Secure Checkout — SSL Encrypted</span>
        </div>

        {/* Step Indicator */}
        <StepIndicator current={step} />

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* ── LEFT: Step Forms ── */}
          <div>

            {/* ── STEP 1: Delivery Address ── */}
            {step === 1 && (
              <div className="bg-white rounded-2xl border border-[#E8E7E2] p-6">
                <SectionTitle number={1} title="Delivery Address" subtitle="Where should we deliver your order?" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Full Name" placeholder="Sarah Johnson" required value={addr.name} onChange={v => setAddr(a => ({ ...a, name: v }))} />
                  <InputField label="Phone Number" placeholder="+92 300 0000000" required type="tel" value={addr.phone} onChange={v => setAddr(a => ({ ...a, phone: v }))} />
                  <div className="sm:col-span-2">
                    <InputField label="Street Address" placeholder="House 12, Street 5, Block B" required value={addr.line1} onChange={v => setAddr(a => ({ ...a, line1: v }))} />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label="Apartment / Floor (optional)" placeholder="Apt 3B, Floor 2" value={addr.line2} onChange={v => setAddr(a => ({ ...a, line2: v }))} />
                  </div>
                  <InputField label="City" placeholder="Karachi" required value={addr.city} onChange={v => setAddr(a => ({ ...a, city: v }))} />
                  <InputField label="State / Province" placeholder="Sindh" value={addr.state} onChange={v => setAddr(a => ({ ...a, state: v }))} />
                  <InputField label="Postal Code" placeholder="74000" value={addr.postal} onChange={v => setAddr(a => ({ ...a, postal: v }))} />
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide">Country <span className="text-[#E11D48]">*</span></label>
                    <select
                      value={addr.country}
                      onChange={e => setAddr(a => ({ ...a, country: e.target.value }))}
                      className="w-full h-11 rounded-xl border border-[#E8E7E2] bg-white px-4 text-sm text-[#0E0E0E] outline-none focus:border-[#E8450A]"
                    >
                      {['Pakistan', 'United States', 'United Kingdom', 'UAE', 'India', 'Canada', 'Australia'].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!addr.name || !addr.phone || !addr.line1 || !addr.city}
                  className="mt-6 w-full py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue to Shipping →
                </button>
              </div>
            )}

            {/* ── STEP 2: Shipping Method ── */}
            {step === 2 && (
              <div className="bg-white rounded-2xl border border-[#E8E7E2] p-6">
                <SectionTitle number={2} title="Shipping Method" subtitle="Choose how fast you want your order." />

                {/* Delivery address summary */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F9F8F5] border border-[#E8E7E2] mb-5">
                  <svg className="w-4 h-4 text-[#E8450A] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#0E0E0E]">{addr.name}</p>
                    <p className="text-xs text-[#6B6A66]">{addr.line1}{addr.line2 ? `, ${addr.line2}` : ''}, {addr.city}, {addr.country}</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-xs text-[#E8450A] font-medium hover:underline">Edit</button>
                </div>

                <div className="space-y-3">
                  {[
                    { key: 'standard', label: 'Standard Delivery', sub: '5–7 business days', price: subtotal >= FREE_SHIPPING_THRESHOLD ? 'Free' : `$${SHIPPING_FEE.toFixed(2)}`, tag: '' },
                    { key: 'express', label: 'Express Delivery', sub: '2–3 business days', price: `$${(SHIPPING_FEE + 9.99).toFixed(2)}`, tag: 'Popular' },
                    { key: 'overnight', label: 'Overnight Delivery', sub: 'Next business day', price: `$${(SHIPPING_FEE + 19.99).toFixed(2)}`, tag: 'Fastest' },
                  ].map(option => (
                    <button
                      key={option.key}
                      onClick={() => setShipMethod(option.key as typeof shipMethod)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${shipMethod === option.key ? 'border-[#E8450A] bg-[#FFF7F5]' : 'border-[#E8E7E2] bg-white hover:border-[#0E0E0E]/30'}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${shipMethod === option.key ? 'border-[#E8450A]' : 'border-[#D1D5DB]'}`}>
                        {shipMethod === option.key && <div className="w-2.5 h-2.5 rounded-full bg-[#E8450A]" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-[#0E0E0E]">{option.label}</p>
                          {option.tag && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E8450A] text-white uppercase tracking-wide">{option.tag}</span>
                          )}
                        </div>
                        <p className="text-xs text-[#6B6A66] mt-0.5">{option.sub}</p>
                      </div>
                      <span className="font-mono font-bold text-sm text-[#0E0E0E] flex-shrink-0">{option.price}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="py-3.5 rounded-xl border-2 border-[#E8E7E2] text-sm font-semibold text-[#6B6A66] hover:border-[#0E0E0E] hover:text-[#0E0E0E] transition-colors">
                    ← Back
                  </button>
                  <button onClick={() => setStep(3)} className="py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-colors">
                    Continue to Payment →
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: Payment ── */}
            {step === 3 && (
              <div className="bg-white rounded-2xl border border-[#E8E7E2] p-6">
                <SectionTitle number={3} title="Payment Method" subtitle="Choose how you'd like to pay." />

                {/* Method Selector */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {([
                    { key: 'card', label: 'Credit / Debit', icon: '💳' },
                    { key: 'cod', label: 'Cash on Delivery', icon: '💵' },
                    { key: 'bank', label: 'Bank Transfer', icon: '🏦' },
                  ] as { key: PaymentMethod; label: string; icon: string }[]).map(m => (
                    <button
                      key={m.key}
                      onClick={() => setPayMethod(m.key)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${payMethod === m.key ? 'border-[#E8450A] bg-[#FFF7F5]' : 'border-[#E8E7E2] hover:border-[#0E0E0E]/30'}`}
                    >
                      <span className="text-2xl">{m.icon}</span>
                      <span className="text-xs font-semibold text-[#0E0E0E] text-center leading-tight">{m.label}</span>
                    </button>
                  ))}
                </div>

                {/* Card Form */}
                {payMethod === 'card' && (
                  <div className="space-y-4">
                    <div className="relative">
                      <InputField
                        label="Card Number" required
                        placeholder="1234  5678  9012  3456"
                        value={card.number}
                        onChange={v => setCard(c => ({ ...c, number: v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim() }))}
                      />
                    </div>
                    <InputField label="Name on Card" required placeholder="Sarah Johnson" value={card.name} onChange={v => setCard(c => ({ ...c, name: v }))} />
                    <div className="grid grid-cols-2 gap-4">
                      <InputField label="Expiry Date" required placeholder="MM / YY" value={card.expiry} onChange={v => setCard(c => ({ ...c, expiry: v }))} />
                      <InputField label="CVV" required placeholder="•••" type="password" value={card.cvv} onChange={v => setCard(c => ({ ...c, cvv: v.slice(0, 4) }))} />
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]">
                      <svg className="w-4 h-4 text-[#059669] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      <p className="text-xs text-[#059669] font-medium">Your payment info is secured with 256-bit SSL encryption.</p>
                    </div>
                  </div>
                )}

                {/* COD Info */}
                {payMethod === 'cod' && (
                  <div className="p-5 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] space-y-2">
                    <p className="text-sm font-semibold text-[#92400E]">Cash on Delivery selected</p>
                    <p className="text-xs text-[#92400E]">Pay with cash when your order is delivered. Please keep exact change ready.</p>
                    <p className="text-xs text-[#92400E]">COD fee: <strong>Free</strong></p>
                  </div>
                )}

                {/* Bank Transfer Info */}
                {payMethod === 'bank' && (
                  <div className="p-5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-3">
                    <p className="text-sm font-semibold text-[#1E40AF]">Bank Transfer Details</p>
                    {[
                      { label: 'Bank Name', value: 'Nexus National Bank' },
                      { label: 'Account Title', value: 'Nexus Marketplace Ltd.' },
                      { label: 'Account Number', value: '0123-4567-8901' },
                      { label: 'IBAN', value: 'PK00NXUS0001234567890' },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between text-xs">
                        <span className="text-[#6B6A66]">{row.label}</span>
                        <span className="font-mono font-semibold text-[#0E0E0E]">{row.value}</span>
                      </div>
                    ))}
                    <p className="text-[11px] text-[#1E40AF]">Transfer the exact amount and share the receipt via chat to confirm your order.</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button onClick={() => setStep(2)} className="py-3.5 rounded-xl border-2 border-[#E8E7E2] text-sm font-semibold text-[#6B6A66] hover:border-[#0E0E0E] hover:text-[#0E0E0E] transition-colors">
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    disabled={payMethod === 'card' && (!card.number || !card.name || !card.expiry || !card.cvv)}
                    className="py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Review Order →
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 4: Review & Place Order ── */}
            {step === 4 && (
              <div className="space-y-4">
                {/* Address Summary */}
                <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-[#0E0E0E]">Delivery Address</p>
                    <button onClick={() => setStep(1)} className="text-xs text-[#E8450A] font-medium hover:underline">Edit</button>
                  </div>
                  <p className="text-sm font-semibold text-[#0E0E0E]">{addr.name}</p>
                  <p className="text-sm text-[#6B6A66]">{addr.phone}</p>
                  <p className="text-sm text-[#6B6A66]">{addr.line1}{addr.line2 ? `, ${addr.line2}` : ''}</p>
                  <p className="text-sm text-[#6B6A66]">{addr.city}{addr.state ? `, ${addr.state}` : ''} {addr.postal}</p>
                  <p className="text-sm text-[#6B6A66]">{addr.country}</p>
                </div>

                {/* Items Grouped by Vendor */}
                {Object.entries(vendorGroups).map(([vName, vItems]) => (
                  <div key={vName} className="bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden">
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E8E7E2] bg-[#F9F8F5]">
                      <svg className="w-3.5 h-3.5 text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" /></svg>
                      <p className="text-xs font-bold text-[#0E0E0E]">{vName}</p>
                      <span className="ml-auto text-xs text-[#059669] font-semibold">
                        {shipMethod === 'overnight' ? 'Tomorrow' : shipMethod === 'express' ? '2–3 days' : '5–7 days'}
                      </span>
                    </div>
                    <div className="divide-y divide-[#E8E7E2]">
                      {vItems.map(item => (
                        <div key={`${item.id}-${item.variant}`} className="flex items-center gap-4 px-5 py-4">
                          <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#F9F8F5] flex-shrink-0">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-[#0E0E0E] line-clamp-1">{item.title}</p>
                            {item.variant && <p className="text-xs text-[#9CA3AF]">{item.variant}</p>}
                            <p className="text-xs text-[#6B6A66] mt-0.5">Qty: {item.quantity}</p>
                          </div>
                          <span className="font-mono font-bold text-sm text-[#0E0E0E] flex-shrink-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Payment summary */}
                <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-[#0E0E0E]">Payment</p>
                    <button onClick={() => setStep(3)} className="text-xs text-[#E8450A] font-medium hover:underline">Edit</button>
                  </div>
                  <p className="text-sm text-[#6B6A66]">
                    {payMethod === 'card' ? `•••• •••• •••• ${card.number.replace(/\s/g, '').slice(-4) || '****'}` :
                     payMethod === 'cod' ? 'Cash on Delivery' : 'Bank Transfer'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setStep(3)} className="py-3.5 rounded-xl border-2 border-[#E8E7E2] text-sm font-semibold text-[#6B6A66] hover:border-[#0E0E0E] transition-colors">
                    ← Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={placingOrder}
                    className="py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-[#E8450A]/20"
                  >
                    {placingOrder ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                        Placing Order...
                      </>
                    ) : '🔒 Place Order'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Sticky Order Summary ── */}
          <div>
            <div className="bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24">
              <h2 className="text-base font-bold text-[#0E0E0E] mb-4">Order Summary</h2>

              {/* Item list (compact) */}
              <div className="space-y-3 mb-4 max-h-52 overflow-y-auto pr-1">
                {items.map(item => (
                  <div key={`${item.id}-${item.variant}`} className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F9F8F5]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#E8450A] text-white text-[10px] font-bold flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#0E0E0E] line-clamp-1">{item.title}</p>
                      {item.variant && <p className="text-[11px] text-[#9CA3AF]">{item.variant}</p>}
                    </div>
                    <span className="font-mono font-bold text-xs text-[#0E0E0E] flex-shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E8E7E2] pt-4 space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B6A66]">Subtotal</span>
                  <span className="font-mono font-semibold text-[#0E0E0E]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6A66]">Shipping ({shipMethod})</span>
                  <span className={`font-mono font-semibold ${shipCost === 0 ? 'text-[#059669]' : 'text-[#0E0E0E]'}`}>
                    {shipCost === 0 ? 'FREE' : `$${shipCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6A66]">Est. Tax</span>
                  <span className="font-mono font-semibold text-[#0E0E0E]">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-[#E8E7E2] pt-3 flex justify-between">
                  <span className="font-bold text-[#0E0E0E]">Total</span>
                  <span className="font-mono font-bold text-xl text-[#0E0E0E]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Trust */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  { icon: '🔒', label: 'Secure' },
                  { icon: '↩️', label: '30d Returns' },
                  { icon: '✓', label: 'Verified' },
                ].map(t => (
                  <div key={t.label} className="bg-[#F9F8F5] rounded-xl p-2">
                    <p className="text-base">{t.icon}</p>
                    <p className="text-[10px] font-semibold text-[#6B6A66] mt-0.5">{t.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
