import { useState } from 'react'
import type { AdminCustomer } from '@/api/admin'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSave: (customerData: Partial<AdminCustomer>) => Promise<void>
}

export default function AddCustomerModal({ isOpen, onClose, onSave }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [segment, setSegment] = useState<'VIP' | 'Regular' | 'New' | 'At-Risk'>('New')
  const [initialSpent, setInitialSpent] = useState('0')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setSubmitting(true)
    try {
      const initials = name.trim().split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'CU'
      const payload: Partial<AdminCustomer> = {
        id: `C-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || '+1 555-0100',
        avatar: initials,
        orders: 0,
        spent: parseFloat(initialSpent) || 0,
        ltv: parseFloat(initialSpent) || 0,
        segment,
        status: 'active',
        joined: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        lastOrder: 'Never',
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
              👤
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#111118]">Add New Customer</h2>
              <p className="text-xs text-[#6B6B82]">Register a customer account manually</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="font-semibold text-[#111118] uppercase">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Eleanor Vance"
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
            />
          </div>

          <div>
            <label className="font-semibold text-[#111118] uppercase">Email Address *</label>
            <input
              type="email"
              required
              placeholder="eleanor@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#111118] uppercase">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 555-0199"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
              />
            </div>
            <div>
              <label className="font-semibold text-[#111118] uppercase">Customer Segment</label>
              <select
                value={segment}
                onChange={e => setSegment(e.target.value as typeof segment)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none"
              >
                <option value="New">New</option>
                <option value="Regular">Regular</option>
                <option value="VIP">VIP</option>
                <option value="At-Risk">At-Risk</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-[#111118] uppercase">Initial Lifetime Spend ($)</label>
            <input
              type="number"
              step="0.01"
              value={initialSpent}
              onChange={e => setInitialSpent(e.target.value)}
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
              {submitting ? 'Registering...' : '✓ Add Customer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
