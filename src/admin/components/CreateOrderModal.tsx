import { useState } from 'react'
import type { AdminOrder } from '@/api/admin'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSave: (orderData: Partial<AdminOrder>) => Promise<void>
}

const VENDORS = ['SoundVault', 'TechArmor', 'SneakerHead', 'GlowUp Beauty', 'HomeCraft', 'iZone Official']

export default function CreateOrderModal({ isOpen, onClose, onSave }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const [customerName, setCustomerName] = useState('Sarah Johnson')
  const [customerEmail, setCustomerEmail] = useState('sarah@example.com')
  const [customerPhone, setCustomerPhone] = useState('+1 (555) 234-5678')
  const [vendorName, setVendorName] = useState('SoundVault')
  const [productTitle, setProductTitle] = useState('Sony WH-1000XM5 Wireless Headphones')
  const [itemsCount, setItemsCount] = useState('1')
  const [amount, setAmount] = useState('349.99')
  const [paymentMethod, setPaymentMethod] = useState('Stripe')
  const [status, setStatus] = useState('processing')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!customerName.trim() || !productTitle.trim()) return

    setSubmitting(true)
    try {
      const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`
      const payload: Partial<AdminOrder> = {
        id: orderId,
        customer: customerName.trim(),
        vendor: vendorName,
        product: productTitle.trim(),
        amount: parseFloat(amount) || 99.99,
        payment: paymentMethod,
        status: status.toLowerCase(),
        date: new Date().toISOString().slice(0, 10),
        items: parseInt(itemsCount) || 1,
        customerDetails: {
          fullName: customerName.trim(),
          email: customerEmail.trim(),
          phone: customerPhone.trim(),
        },
      }

      await onSave(payload)
      onClose()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-[#E2E2EC] max-w-lg w-full shadow-2xl overflow-hidden space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8450A]/10 flex items-center justify-center font-bold text-[#E8450A] text-lg">
              🛒
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#111118]">Create Manual Order</h2>
              <p className="text-xs text-[#6B6B82]">Place an order on behalf of a customer</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Customer Info */}
          <div className="space-y-3">
            <p className="font-bold text-[#111118] uppercase tracking-wide text-[11px]">1. Customer Details</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-[#6B6B82]">Full Name *</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none focus:border-[#E8450A]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#6B6B82]">Email Address</label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
                />
              </div>
            </div>
          </div>

          {/* Product & Vendor */}
          <div className="space-y-3 pt-2 border-t border-[#E2E2EC]">
            <p className="font-bold text-[#111118] uppercase tracking-wide text-[11px]">2. Order Items & Vendor</p>
            <div>
              <label className="font-semibold text-[#6B6B82]">Product Name *</label>
              <input
                type="text"
                required
                value={productTitle}
                onChange={e => setProductTitle(e.target.value)}
                className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none focus:border-[#E8450A]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-[#6B6B82]">Vendor / Merchant</label>
                <select
                  value={vendorName}
                  onChange={e => setVendorName(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
                >
                  {VENDORS.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="font-semibold text-[#6B6B82]">Total Amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] font-mono font-bold text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* Payment & Status */}
          <div className="space-y-3 pt-2 border-t border-[#E2E2EC]">
            <p className="font-bold text-[#111118] uppercase tracking-wide text-[11px]">3. Payment & Workflow</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-[#6B6B82]">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
                >
                  <option value="Stripe">Stripe Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="COD">Cash on Delivery</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-[#6B6B82]">Initial Status</label>
                <select
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="pt-4 border-t border-[#E2E2EC] flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-xs hover:bg-[#C93A07]"
            >
              {submitting ? 'Creating...' : '✓ Create Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
