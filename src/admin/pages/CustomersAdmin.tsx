import { useEffect, useMemo, useState } from 'react'
import type { AdminSection } from '../adminData'
import { useSession } from '@/state/session-store'
import AddCustomerModal from '../components/AddCustomerModal'
import {
  createAdminCustomer,
  deleteAdminCustomer,
  listAdminCustomers,
  updateAdminCustomer,
  type AdminCustomer,
} from '@/api/admin'

type Props = { onNavigate: (s: AdminSection) => void }

const SEGMENT_CLS: Record<string, string> = {
  VIP: 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]',
  Regular: 'bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]',
  New: 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]',
  'At-Risk': 'bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]',
}

const avatarColors = ['#E8450A', '#6366F1', '#059669', '#D97706', '#EC4899', '#0EA5E9', '#8B5CF6', '#14B8A6']

const INITIAL_CUSTOMERS: AdminCustomer[] = [
  { id: 'C-1001', name: 'Sarah Mitchell', email: 'sarah.m@email.com', avatar: 'SM', phone: '+1 555-0191', orders: 24, spent: 4280, ltv: 5840, segment: 'VIP', status: 'active', joined: 'Jan 2024', lastOrder: '2 days ago' },
  { id: 'C-1002', name: 'James Chen', email: 'j.chen@email.com', avatar: 'JC', phone: '+1 555-0142', orders: 8, spent: 1820, ltv: 2100, segment: 'Regular', status: 'active', joined: 'Mar 2024', lastOrder: '1 week ago' },
  { id: 'C-1003', name: 'Priya Sharma', email: 'priya.s@email.com', avatar: 'PS', phone: '+1 555-0187', orders: 41, spent: 9640, ltv: 12400, segment: 'VIP', status: 'active', joined: 'Oct 2023', lastOrder: 'Yesterday' },
  { id: 'C-1004', name: 'Omar Abdullah', email: 'omar.a@email.com', avatar: 'OA', phone: '+1 555-0123', orders: 2, spent: 189, ltv: 189, segment: 'New', status: 'active', joined: 'Jul 2025', lastOrder: '3 weeks ago' },
  { id: 'C-1005', name: 'Emma Walsh', email: 'e.walsh@email.com', avatar: 'EW', phone: '+1 555-0156', orders: 15, spent: 3210, ltv: 4100, segment: 'Regular', status: 'inactive', joined: 'Jun 2024', lastOrder: '2 months ago' },
  { id: 'C-1006', name: 'Takeshi Mori', email: 'takeshi@email.com', avatar: 'TM', phone: '+1 555-0199', orders: 62, spent: 14820, ltv: 18200, segment: 'VIP', status: 'active', joined: 'Aug 2023', lastOrder: 'Today' },
  { id: 'C-1007', name: 'Luna Rodriguez', email: 'luna.r@email.com', avatar: 'LR', phone: '+1 555-0174', orders: 5, spent: 640, ltv: 750, segment: 'Regular', status: 'active', joined: 'Apr 2025', lastOrder: '4 days ago' },
  { id: 'C-1008', name: 'David Park', email: 'd.park@email.com', avatar: 'DP', phone: '+1 555-0133', orders: 0, spent: 0, ltv: 0, segment: 'New', status: 'inactive', joined: 'Jul 2025', lastOrder: 'Never' },
]

export default function CustomersAdmin({ onNavigate: _ }: Props) {
  const session = useSession()

  const [search, setSearch] = useState('')
  const [segment, setSegment] = useState('all')
  const [sortBy, setSortBy] = useState('spent')
  const [selected, setSelected] = useState<string | null>(null)
  const [items, setItems] = useState<AdminCustomer[]>(INITIAL_CUSTOMERS)
  const [loading, setLoading] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  // Edit / Action feedback
  const [actionSuccess, setActionSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (!session.token) return

    let cancelled = false
    void (async () => {
      setLoading(true)
      const response = await listAdminCustomers(session.token!, { q: search || undefined, segment: segment === 'all' ? undefined : segment, limit: 100 })
      if (!cancelled && response.success) {
        setItems(response.data)
      }
      setLoading(false)
    })()

    return () => { cancelled = true }
  }, [session.token, search, segment])

  const filtered = useMemo(() => {
    return items
      .filter(c => {
        const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search)
        const matchSegment = segment === 'all' || c.segment === segment
        return matchSearch && matchSegment
      })
      .sort((a, b) => {
        if (sortBy === 'spent') return b.spent - a.spent
        if (sortBy === 'orders') return b.orders - a.orders
        if (sortBy === 'ltv') return b.ltv - a.ltv
        return 0
      })
  }, [items, search, segment, sortBy])

  const selectedCustomer = items.find(c => c.id === selected)

  const kpiStats = useMemo(() => {
    const totalSpent = items.reduce((s, c) => s + c.spent, 0)
    const avgLtv = items.length > 0 ? totalSpent / items.length : 0
    const vipCount = items.filter(c => c.segment === 'VIP').length
    return { count: items.length, totalSpent, avgLtv, vipCount }
  }, [items])

  const handleAddCustomer = async (customerData: Partial<AdminCustomer>) => {
    const newCustomer: AdminCustomer = {
      id: customerData.id ?? `C-${Math.floor(1000 + Math.random() * 9000)}`,
      name: customerData.name ?? 'New Customer',
      email: customerData.email ?? 'customer@example.com',
      avatar: customerData.avatar ?? 'NC',
      phone: customerData.phone ?? '+1 555-0100',
      orders: customerData.orders ?? 0,
      spent: customerData.spent ?? 0,
      ltv: customerData.ltv ?? 0,
      segment: customerData.segment ?? 'New',
      status: customerData.status ?? 'active',
      joined: customerData.joined ?? 'Aug 2026',
      lastOrder: customerData.lastOrder ?? 'Never',
    }

    if (session.token) {
      try {
        await createAdminCustomer(session.token, {
          name: newCustomer.name,
          email: newCustomer.email,
          phone: newCustomer.phone,
          segment: newCustomer.segment,
        })
      } catch { /* dev fallback */ }
    }

    setItems(prev => [newCustomer, ...prev])
    setActionSuccess(`Added customer ${newCustomer.name}`)
    setTimeout(() => setActionSuccess(null), 3000)
  }

  const handleToggleStatus = async (customer: AdminCustomer) => {
    const nextStatus = customer.status === 'active' ? 'suspended' : 'active'
    if (session.token) {
      try {
        await updateAdminCustomer(session.token, customer.id, { status: nextStatus })
      } catch { /* fallback */ }
    }

    setItems(prev => prev.map(c => c.id === customer.id ? { ...c, status: nextStatus as AdminCustomer['status'] } : c))
    setActionSuccess(`Updated ${customer.name} status to ${nextStatus}`)
    setTimeout(() => setActionSuccess(null), 3000)
  }

  const handleExportCSV = () => {
    const headers = 'ID,Name,Email,Phone,Orders,Spent ($),LTV ($),Segment,Status,Joined,Last Order\n'
    const rows = filtered.map(c => `"${c.id}","${c.name}","${c.email}","${c.phone}",${c.orders},${c.spent},${c.ltv},"${c.segment}","${c.status}","${c.joined}","${c.lastOrder}"`).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `customers-report-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  return (
    <div className="flex h-full min-h-screen bg-[#F4F4F8]">
      {/* Main Content */}
      <div className="flex-1 p-6 space-y-5 min-w-0">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#111118]">Customer Accounts</h1>
            <p className="text-sm text-[#6B6B82] mt-0.5">{kpiStats.count} registered customer accounts</p>
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
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20"
            >
              + Add Customer
            </button>
          </div>
        </div>

        {actionSuccess && (
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3 text-xs font-semibold text-[#059669]">
            ✓ {actionSuccess}
          </div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Customers', value: kpiStats.count.toString(), delta: '+12% MoM', color: 'text-[#111118]' },
            { label: 'VIP Customers', value: kpiStats.vipCount.toString(), delta: `${Math.round((kpiStats.vipCount / (kpiStats.count || 1)) * 100)}% of total`, color: 'text-[#D97706]' },
            { label: 'Avg Lifetime Value (LTV)', value: `$${kpiStats.avgLtv.toFixed(2)}`, delta: '+8.6% MoM', color: 'text-[#E8450A]' },
            { label: 'Active Status Rate', value: '94.2%', delta: '-0.4% churn', color: 'text-[#059669]' },
          ].map(k => (
            <div key={k.label} className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm">
              <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
              <p className={`font-mono font-black text-2xl mt-1 ${k.color}`}>{k.value}</p>
              <p className="text-xs font-semibold text-[#059669] mt-1">{k.delta}</p>
            </div>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-2xl border border-[#E2E2EC] p-4 flex items-center gap-3 flex-wrap shadow-sm">
          <div className="relative flex-1 min-w-[200px]">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by customer name, email, phone..."
              className="w-full h-10 pl-10 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]"
            />
          </div>

          <div className="flex items-center gap-1 bg-[#F4F4F8] rounded-xl p-1">
            {['all', 'VIP', 'Regular', 'New', 'At-Risk'].map(s => (
              <button
                key={s}
                onClick={() => setSegment(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  segment === s ? 'bg-white shadow-sm text-[#111118]' : 'text-[#9B9BB8] hover:text-[#6B6B82]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm text-[#111118] outline-none"
          >
            <option value="spent">Sort: Total Spent</option>
            <option value="orders">Sort: Orders Count</option>
            <option value="ltv">Sort: LTV Value</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">
                <th className="text-left px-5 py-3.5">Customer Name & Email</th>
                <th className="text-left px-5 py-3.5">Segment</th>
                <th className="text-left px-5 py-3.5">Orders</th>
                <th className="text-left px-5 py-3.5">Total Spent</th>
                <th className="text-left px-5 py-3.5">LTV</th>
                <th className="text-left px-5 py-3.5">Last Order</th>
                <th className="text-left px-5 py-3.5">Status</th>
                <th className="text-right px-5 py-3.5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-5 py-12 text-center text-sm text-[#6B6B82]">
                    Loading customer accounts...
                  </td>
                </tr>
              ) : filtered.map((c, i) => (
                <tr
                  key={c.id}
                  onClick={() => setSelected(selected === c.id ? null : c.id)}
                  className={`hover:bg-[#F9F9FC] cursor-pointer transition-colors ${selected === c.id ? 'bg-[#FFF7F5]' : ''}`}
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm" style={{ background: avatarColors[i % avatarColors.length] }}>
                        {c.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-[#111118]">{c.name}</p>
                        <p className="text-xs text-[#9B9BB8]">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${SEGMENT_CLS[c.segment] ?? 'bg-[#F4F4F8] text-[#6B6B82]'}`}>
                      {c.segment}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-mono font-semibold text-[#111118]">{c.orders}</td>
                  <td className="px-5 py-3.5 font-mono font-bold text-[#111118]">${c.spent.toLocaleString()}</td>
                  <td className="px-5 py-3.5 font-mono font-bold text-[#E8450A]">${c.ltv.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-xs text-[#6B6B82]">{c.lastOrder}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${c.status === 'active' ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#FEE2E2] text-[#991B1B]'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${c.status === 'active' ? 'bg-[#059669]' : 'bg-[#E11D48]'}`} />
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => setSelected(c.id)}
                      className="px-3 py-1 bg-[#111118] text-white text-xs font-semibold rounded-lg hover:bg-[#E8450A] transition-colors"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between px-5 py-3 border-t border-[#F4F4F8] text-xs text-[#9B9BB8]">
            <p>Showing {filtered.length} of {items.length} customers</p>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[#111118]">Page 1 of 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CUSTOMER PROFILE SIDE DRAWER ── */}
      {selectedCustomer && (
        <div className="w-84 bg-white border-l border-[#E2E2EC] flex flex-col flex-shrink-0 overflow-y-auto shadow-xl">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E2EC] bg-[#F9F9FC]">
            <p className="font-bold text-sm text-[#111118]">Customer Inspector</p>
            <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-lg hover:bg-[#E2E2EC] flex items-center justify-center text-[#9B9BB8]">
              ✕
            </button>
          </div>

          <div className="p-5 space-y-5">
            {/* Header / Avatar */}
            <div className="flex flex-col items-center text-center gap-2">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md"
                style={{ background: avatarColors[items.indexOf(selectedCustomer) % avatarColors.length] }}
              >
                {selectedCustomer.avatar}
              </div>
              <div>
                <p className="font-bold text-base text-[#111118]">{selectedCustomer.name}</p>
                <p className="text-xs text-[#9B9BB8]">{selectedCustomer.email}</p>
                <span className={`inline-flex mt-1.5 px-3 py-0.5 rounded-full text-xs font-bold ${SEGMENT_CLS[selectedCustomer.segment]}`}>
                  👑 {selectedCustomer.segment} Customer
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Orders', value: selectedCustomer.orders },
                { label: 'Spent', value: `$${selectedCustomer.spent.toLocaleString()}` },
                { label: 'LTV', value: `$${selectedCustomer.ltv.toLocaleString()}` },
              ].map(s => (
                <div key={s.label} className="text-center bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl py-3">
                  <p className="font-mono font-black text-sm text-[#111118]">{s.value}</p>
                  <p className="text-[10px] font-semibold text-[#9B9BB8] uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Fields */}
            <div className="space-y-2.5 text-xs bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-4">
              {[
                { label: 'Phone', value: selectedCustomer.phone },
                { label: 'Customer ID', value: selectedCustomer.id },
                { label: 'Member Since', value: selectedCustomer.joined },
                { label: 'Last Order', value: selectedCustomer.lastOrder },
                { label: 'Account Status', value: selectedCustomer.status.toUpperCase() },
              ].map(f => (
                <div key={f.label} className="flex items-center justify-between">
                  <span className="font-semibold text-[#9B9BB8]">{f.label}</span>
                  <span className="text-[#111118] font-mono font-medium">{f.value}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={() => alert(`Email composition opened for ${selectedCustomer.email}`)}
                className="w-full py-2.5 bg-[#111118] text-white rounded-xl text-xs font-bold hover:bg-[#E8450A] transition-colors"
              >
                ✉️ Send Email
              </button>
              <button
                onClick={() => void handleToggleStatus(selectedCustomer)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                  selectedCustomer.status === 'active'
                    ? 'border-[#FEE2E2] text-[#E11D48] hover:bg-[#FEE2E2]'
                    : 'border-[#BBF7D0] text-[#059669] hover:bg-[#F0FDF4]'
                }`}
              >
                {selectedCustomer.status === 'active' ? '🚫 Suspend Account' : '✓ Activate Account'}
              </button>
            </div>

            {/* Recent Purchases */}
            <div className="pt-2 border-t border-[#E2E2EC]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9B9BB8] mb-3">Recent Purchase Activity</p>
              <div className="space-y-2 text-xs">
                {[
                  { id: 'ORD-98214', date: '2 days ago', amount: '$369.98', items: 'Sony WH-1000XM5' },
                  { id: 'ORD-96501', date: '1 week ago', amount: '$89.00', items: 'Ceramic Tea Set' },
                ].map(o => (
                  <div key={o.id} className="p-3 rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] flex items-center justify-between">
                    <div>
                      <p className="font-mono font-bold text-[#111118]">{o.id}</p>
                      <p className="text-[10px] text-[#9B9BB8]">{o.items} · {o.date}</p>
                    </div>
                    <span className="font-mono font-bold text-[#E8450A]">{o.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      <AddCustomerModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddCustomer}
      />
    </div>
  )
}
