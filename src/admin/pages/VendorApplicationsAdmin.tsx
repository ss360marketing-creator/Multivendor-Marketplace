import { useMemo, useState } from 'react'
import type { AdminSection } from '../adminData'
import SubmitApplicationModal, { type ApplicationItem } from '../components/SubmitApplicationModal'

type Props = { onNavigate: (s: AdminSection) => void }

const INITIAL_APPLICATIONS: ApplicationItem[] = [
  {
    id: 'APP-1041', store: 'LuxGoods Ltd', owner: 'Nadia Karimov', email: 'nadia@luxgoods.com', phone: '+971 55 123 4567',
    category: 'Luxury & Fashion', country: 'UAE', website: 'luxgoods.com', revenue: '$2M–$5M/yr', products: 480,
    submitted: 'Jul 24, 2026', status: 'pending',
    docs: [{ name: 'Trade License', ok: true }, { name: 'VAT Certificate', ok: true }, { name: 'Bank Statement', ok: false }],
    notes: 'Large fashion retailer with strong Instagram presence.'
  },
  {
    id: 'APP-1040', store: 'OrganicHarvest Co', owner: 'Preet Sandhu', email: 'preet@organicharvest.co', phone: '+1 604 888 2211',
    category: 'Food & Grocery', country: 'Canada', website: 'organicharvest.co', revenue: '$500K–$1M/yr', products: 120,
    submitted: 'Jul 23, 2026', status: 'under-review',
    docs: [{ name: 'Business Registration', ok: true }, { name: 'Food Safety Cert', ok: true }, { name: 'Insurance', ok: true }],
    notes: 'Specialty organic food supplier. All documents verified.'
  },
  {
    id: 'APP-1039', store: 'TechGear Zone', owner: 'Marcus Wolff', email: 'm.wolff@techgear.de', phone: '+49 30 5555 1234',
    category: 'Electronics', country: 'Germany', website: 'techgearzone.de', revenue: '$5M+/yr', products: 2400,
    submitted: 'Jul 22, 2026', status: 'pending',
    docs: [{ name: 'Company Registration', ok: true }, { name: 'Tax ID', ok: true }, { name: 'Warranty Policy', ok: false }],
    notes: 'Large EU electronics distributor. Missing warranty docs.'
  },
  {
    id: 'APP-1038', store: 'CraftyHome Studio', owner: 'Aiko Yamamoto', email: 'aiko@craftyhome.jp', phone: '+81 3 3333 8888',
    category: 'Home & Living', country: 'Japan', website: 'craftyhome.jp', revenue: '$100K–$500K/yr', products: 84,
    submitted: 'Jul 21, 2026', status: 'approved',
    docs: [{ name: 'Business License', ok: true }, { name: 'Product Samples', ok: true }, { name: 'Bank Details', ok: true }],
    notes: 'Artisan home goods. Approved after sample review.'
  },
  {
    id: 'APP-1037', store: 'GadgetFly', owner: 'Olu Adeyemi', email: 'olu@gadgetfly.ng', phone: '+234 802 555 7890',
    category: 'Electronics', country: 'Nigeria', website: 'gadgetfly.ng', revenue: '$250K–$500K/yr', products: 340,
    submitted: 'Jul 19, 2026', status: 'rejected',
    docs: [{ name: 'Registration', ok: false }, { name: 'Tax Cert', ok: false }, { name: 'Bank Statement', ok: true }],
    notes: 'Documents incomplete. Notified via email to resubmit.'
  },
]

const STATUS_META: Record<ApplicationItem['status'], { label: string; cls: string; dot: string }> = {
  pending:      { label: 'Pending',      cls: 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]', dot: 'bg-[#D97706]' },
  'under-review': { label: 'Under Review', cls: 'bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]', dot: 'bg-[#6366F1]' },
  approved:     { label: 'Approved',     cls: 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]', dot: 'bg-[#059669]' },
  rejected:     { label: 'Rejected',     cls: 'bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]', dot: 'bg-[#E11D48]' },
}

export default function VendorApplicationsAdmin({ onNavigate: _ }: Props) {
  const [items, setItems] = useState<ApplicationItem[]>(INITIAL_APPLICATIONS)
  const [filter, setFilter] = useState<'all' | ApplicationItem['status']>('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string | null>('APP-1041')
  const [noteInput, setNoteInput] = useState('')
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  const filtered = useMemo(() => items.filter(a => {
    const matchFilter = filter === 'all' || a.status === filter
    const matchSearch = !search || a.store.toLowerCase().includes(search.toLowerCase()) || a.owner.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  }), [items, filter, search])

  const counts = {
    all: items.length,
    pending: items.filter(a => a.status === 'pending').length,
    'under-review': items.filter(a => a.status === 'under-review').length,
    approved: items.filter(a => a.status === 'approved').length,
    rejected: items.filter(a => a.status === 'rejected').length,
  }

  const handleUpdateStatus = (appId: string, nextStatus: ApplicationItem['status']) => {
    setItems(prev => prev.map(a => a.id === appId ? { ...a, status: nextStatus } : a))
    const app = items.find(a => a.id === appId)
    setFeedback(`Application ${appId} (${app?.store}) updated to ${nextStatus.toUpperCase()}`)
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleToggleDoc = (appId: string, docIndex: number) => {
    setItems(prev => prev.map(a => {
      if (a.id !== appId) return a
      const newDocs = [...a.docs]
      newDocs[docIndex] = { ...newDocs[docIndex], ok: !newDocs[docIndex].ok }
      return { ...a, docs: newDocs }
    }))
  }

  const handleAddNote = (appId: string) => {
    if (!noteInput.trim()) return
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setItems(prev => prev.map(a => a.id === appId ? { ...a, notes: `${a.notes} [${timeStr}: ${noteInput.trim()}]` } : a))
    setNoteInput('')
  }

  const handleExportCSV = () => {
    const headers = 'Application ID,Store,Owner,Email,Category,Country,Status,Submitted\n'
    const rows = filtered.map(a => `"${a.id}","${a.store}","${a.owner}","${a.email}","${a.category}","${a.country}","${a.status}","${a.submitted}"`).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `vendor-applications-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  return (
    <div className="flex h-full min-h-screen bg-[#F4F4F8]">
      {/* Main List */}
      <div className="flex-1 p-6 space-y-5 min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#111118]">Vendor Applications & Onboarding</h1>
            <p className="text-sm text-[#6B6B82] mt-0.5">Review, verify credentials, and approve new merchant stores</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 border border-[#E2E2EC] bg-white rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Export CSV
            </button>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20"
            >
              + File Application
            </button>
          </div>
        </div>

        {feedback && (
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3 text-xs font-semibold text-[#059669]">
            ✓ {feedback}
          </div>
        )}

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Applications', value: counts.all.toString(), color: 'text-[#111118]' },
            { label: 'Pending Review', value: counts.pending.toString(), color: 'text-[#D97706]' },
            { label: 'Under Review Queue', value: counts['under-review'].toString(), color: 'text-[#6366F1]' },
            { label: 'Approved Merchants', value: counts.approved.toString(), color: 'text-[#059669]' },
          ].map(k => (
            <div key={k.label} className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm">
              <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
              <p className={`font-mono font-black text-2xl mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 bg-white border border-[#E2E2EC] rounded-2xl p-4 shadow-sm">
          <div className="relative flex-1 min-w-[220px]">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search store name, owner, email..."
              className="w-full h-10 pl-10 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]"
            />
          </div>
          <div className="flex items-center gap-1 bg-[#F4F4F8] rounded-xl p-1">
            {(['all', 'pending', 'under-review', 'approved', 'rejected'] as const).map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  filter === s ? 'bg-white shadow-sm text-[#111118]' : 'text-[#9B9BB8] hover:text-[#6B6B82]'
                }`}
              >
                {s !== 'all' && <span className={`w-1.5 h-1.5 rounded-full ${STATUS_META[s as ApplicationItem['status']]?.dot}`} />}
                {s === 'all' ? `All (${counts.all})` : `${STATUS_META[s as ApplicationItem['status']].label} (${counts[s]})`}
              </button>
            ))}
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-3">
          {filtered.map(app => (
            <div
              key={app.id}
              onClick={() => setSelected(selected === app.id ? null : app.id)}
              className={`bg-white rounded-2xl border-2 p-5 cursor-pointer transition-all hover:shadow-md ${selected === app.id ? 'border-[#E8450A] shadow-sm' : 'border-[#E2E2EC]'}`}
            >
              <div className="flex items-start gap-4">
                {/* Store Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#E8450A]/10 border border-[#E8450A]/20 flex items-center justify-center text-lg flex-shrink-0 font-bold text-[#E8450A]">
                  {app.store.slice(0, 2).toUpperCase()}
                </div>

                {/* Main Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-base text-[#111118]">{app.store}</p>
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${STATUS_META[app.status].cls}`}>
                          {STATUS_META[app.status].label}
                        </span>
                      </div>
                      <p className="text-xs text-[#6B6B82] mt-0.5">{app.owner} · {app.email} · {app.phone}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-mono font-bold text-[#E8450A]">{app.id}</p>
                      <p className="text-xs text-[#9B9BB8] mt-0.5">{app.submitted}</p>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex items-center gap-4 mt-3 flex-wrap text-xs text-[#6B6B82]">
                    <span className="inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg">
                      📁 {app.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg">
                      🌐 {app.country}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg">
                      📦 {app.products} products
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg">
                      💰 {app.revenue}
                    </span>
                  </div>

                  {/* Document Verification Checkboxes */}
                  <div className="flex items-center gap-2 mt-3 flex-wrap" onClick={e => e.stopPropagation()}>
                    <span className="text-[11px] font-bold text-[#9B9BB8] uppercase">Verification Docs:</span>
                    {app.docs.map((doc, dIdx) => (
                      <button
                        key={doc.name}
                        onClick={() => handleToggleDoc(app.id, dIdx)}
                        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                          doc.ok ? 'bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]' : 'bg-[#FEE2E2] text-[#991B1B] border-[#FCA5A5]'
                        }`}
                      >
                        {doc.ok ? '✓' : '✕'} {doc.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Workflow Actions */}
                <div className="flex flex-col gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
                  {app.status !== 'approved' && (
                    <button
                      onClick={() => handleUpdateStatus(app.id, 'approved')}
                      className="px-4 py-1.5 bg-[#D1FAE5] text-[#065F46] rounded-xl text-xs font-bold hover:bg-[#A7F3D0] transition-colors border border-[#A7F3D0]"
                    >
                      Approve Merchant
                    </button>
                  )}
                  {app.status === 'pending' && (
                    <button
                      onClick={() => handleUpdateStatus(app.id, 'under-review')}
                      className="px-4 py-1.5 bg-[#EEF2FF] text-[#4338CA] rounded-xl text-xs font-bold hover:bg-[#C7D2FE] transition-colors border border-[#C7D2FE]"
                    >
                      Put Under Review
                    </button>
                  )}
                  {app.status !== 'rejected' && (
                    <button
                      onClick={() => handleUpdateStatus(app.id, 'rejected')}
                      className="px-4 py-1.5 bg-[#FEE2E2] text-[#991B1B] rounded-xl text-xs font-bold hover:bg-[#FECACA] transition-colors border border-[#FCA5A5]"
                    >
                      Reject Application
                    </button>
                  )}
                </div>
              </div>

              {/* Expanded Detail Panel */}
              {selected === app.id && (
                <div className="mt-5 pt-5 border-t border-[#F4F4F8] space-y-4" onClick={e => e.stopPropagation()}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-4">
                    {[
                      { label: 'Official Website', value: app.website },
                      { label: 'Phone', value: app.phone },
                      { label: 'Annual Revenue', value: app.revenue },
                      { label: 'Initial Inventory', value: `${app.products} items` },
                    ].map(f => (
                      <div key={f.label}>
                        <p className="text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide">{f.label}</p>
                        <p className="text-xs font-bold text-[#111118] mt-0.5 truncate">{f.value}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide mb-1">Internal Notes & History</p>
                    <p className="text-xs text-[#6B6B82] bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl px-4 py-3 font-mono">{app.notes}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide mb-1">Add Auditor Note</p>
                    <div className="flex gap-2">
                      <input
                        value={noteInput}
                        onChange={e => setNoteInput(e.target.value)}
                        placeholder="Type auditor comments or verification details..."
                        className="flex-1 h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-xs outline-none focus:border-[#E8450A]"
                      />
                      <button
                        onClick={() => handleAddNote(app.id)}
                        className="px-4 py-2 bg-[#111118] text-white rounded-xl text-xs font-bold hover:bg-[#E8450A] transition-colors"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#E2E2EC] py-20 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F4F4F8] flex items-center justify-center text-2xl">
                📄
              </div>
              <p className="font-bold text-[#111118]">No applications found</p>
              <p className="text-sm text-[#9B9BB8]">Try adjusting your search or filter options.</p>
            </div>
          )}
        </div>
      </div>

      {/* Submit Application Modal */}
      <SubmitApplicationModal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onSave={newApp => {
          setItems(prev => [newApp, ...prev])
          setFeedback(`Filed application for ${newApp.store}`)
          setTimeout(() => setFeedback(null), 3000)
        }}
      />
    </div>
  )
}
