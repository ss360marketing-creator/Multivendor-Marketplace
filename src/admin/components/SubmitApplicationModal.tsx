import { useState } from 'react'

export type ApplicationItem = {
  id: string
  store: string
  owner: string
  email: string
  phone: string
  category: string
  country: string
  website: string
  revenue: string
  products: number
  submitted: string
  status: 'pending' | 'under-review' | 'approved' | 'rejected'
  docs: { name: string; ok: boolean }[]
  notes: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
  onSave: (app: ApplicationItem) => void
}

export default function SubmitApplicationModal({ isOpen, onClose, onSave }: Props) {
  const [store, setStore] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('Electronics')
  const [country, setCountry] = useState('United States')
  const [website, setWebsite] = useState('')
  const [revenue, setRevenue] = useState('$500K–$1M/yr')
  const [products, setProducts] = useState('50')
  const [notes, setNotes] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!store.trim() || !email.trim()) return

    const newApp: ApplicationItem = {
      id: `APP-${Math.floor(1050 + Math.random() * 900)}`,
      store: store.trim(),
      owner: owner.trim() || store.trim(),
      email: email.trim(),
      phone: phone.trim() || '+1 555-0199',
      category,
      country,
      website: website.trim() || `${store.toLowerCase().replace(/\s+/g, '')}.com`,
      revenue,
      products: parseInt(products) || 25,
      submitted: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'pending',
      docs: [
        { name: 'Business Registration', ok: true },
        { name: 'Tax ID Certificate', ok: true },
        { name: 'Bank Statement', ok: true },
      ],
      notes: notes.trim() || 'Direct application filed via Admin Desk.',
    }

    onSave(newApp)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-[#E2E2EC] max-w-lg w-full shadow-2xl overflow-hidden space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8450A]/10 flex items-center justify-center font-bold text-[#E8450A] text-lg">
              📄
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#111118]">Submit Vendor Application</h2>
              <p className="text-xs text-[#6B6B82]">File a new merchant store application</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#111118] uppercase">Store Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Goods"
                value={store}
                onChange={e => setStore(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none focus:border-[#E8450A]"
              />
            </div>
            <div>
              <label className="font-semibold text-[#111118] uppercase">Owner / Contact Name</label>
              <input
                type="text"
                placeholder="Nadia Karimov"
                value={owner}
                onChange={e => setOwner(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#111118] uppercase">Email *</label>
              <input
                type="email"
                required
                placeholder="contact@store.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
              />
            </div>
            <div>
              <label className="font-semibold text-[#111118] uppercase">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 019-2831"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="font-semibold text-[#111118] uppercase">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="mt-1 w-full h-10 px-2 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none"
              >
                <option>Electronics</option>
                <option>Luxury & Fashion</option>
                <option>Home & Living</option>
                <option>Food & Grocery</option>
                <option>Beauty & Health</option>
              </select>
            </div>
            <div>
              <label className="font-semibold text-[#111118] uppercase">Country</label>
              <input
                type="text"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
              />
            </div>
            <div>
              <label className="font-semibold text-[#111118] uppercase">Est. Revenue</label>
              <select
                value={revenue}
                onChange={e => setRevenue(e.target.value)}
                className="mt-1 w-full h-10 px-2 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none"
              >
                <option>$100K–$500K/yr</option>
                <option>$500K–$1M/yr</option>
                <option>$1M–$5M/yr</option>
                <option>$5M+/yr</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-[#111118] uppercase">Notes & Pitch</label>
            <textarea
              rows={2}
              placeholder="Provide context regarding business credentials..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="mt-1 w-full p-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none focus:border-[#E8450A]"
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
              className="flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-xs hover:bg-[#C93A07]"
            >
              ✓ Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
