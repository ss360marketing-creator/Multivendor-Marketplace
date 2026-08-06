import { useState } from 'react'
import type { AdminVendor } from '@/api/admin'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSave: (vendorData: Partial<AdminVendor>) => Promise<void>
}

export default function InviteVendorModal({ isOpen, onClose, onSave }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const [storeName, setStoreName] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [tagline, setTagline] = useState('Premium Verified Merchant')
  const [commissionRate, setCommissionRate] = useState('10')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!storeName.trim() || !email.trim()) return

    setSubmitting(true)
    try {
      const slug = storeName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      const payload: Partial<AdminVendor> = {
        id: `v_${Date.now()}`,
        name: storeName.trim(),
        slug,
        email: email.trim(),
        owner: ownerName.trim() || storeName.trim(),
        logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop&auto=format',
        cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=400&fit=crop&auto=format',
        status: 'active',
        verified: true,
        rating: 5.0,
        productCount: 0,
        positiveFeedback: 100,
        followers: 0,
        responseTime: '1 hour',
        tagline: tagline.trim(),
        commissionRate: parseFloat(commissionRate) || 10,
      }

      await onSave(payload)
      onClose()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-[#E2E2EC] max-w-md w-full shadow-2xl overflow-hidden space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8450A]/10 flex items-center justify-center font-bold text-[#E8450A] text-lg">
              🏬
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#111118]">Invite / Add Vendor Store</h2>
              <p className="text-xs text-[#6B6B82]">Onboard a new merchant to Sell on Nexus</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="font-semibold text-[#111118] uppercase">Store / Merchant Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Tech Store"
              value={storeName}
              onChange={e => setStoreName(e.target.value)}
              className="mt-1 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#111118] uppercase">Store Owner Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={ownerName}
                onChange={e => setOwnerName(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
              />
            </div>
            <div>
              <label className="font-semibold text-[#111118] uppercase">Business Email *</label>
              <input
                type="email"
                required
                placeholder="store@domain.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-[#111118] uppercase">Store Tagline / Bio</label>
            <input
              type="text"
              placeholder="Premium Electronics & Accessories Store"
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
            />
          </div>

          <div>
            <label className="font-semibold text-[#111118] uppercase">Marketplace Commission Rate (%)</label>
            <input
              type="number"
              step="0.5"
              value={commissionRate}
              onChange={e => setCommissionRate(e.target.value)}
              className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] font-mono font-bold text-sm outline-none"
            />
          </div>

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
              {submitting ? 'Creating...' : '✓ Add Merchant'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
