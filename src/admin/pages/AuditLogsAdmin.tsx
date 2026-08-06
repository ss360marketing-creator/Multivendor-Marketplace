import { useState, useMemo } from 'react'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const logs = [
  { id: 'LOG-1001', user: 'Alex Admin', role: 'Super Admin', action: 'Updated homepage hero banner', module: 'Storefront', record: 'Hero Slide #2', ip: '192.168.1.42', status: 'success', time: 'Jul 25, 2025 · 14:32' },
  { id: 'LOG-1002', user: 'Taylor Kim', role: 'Marketing Manager', action: 'Created Flash Sale "Summer Blitz"', module: 'Marketing', record: 'Flash Sale #28', ip: '10.0.0.14', status: 'success', time: 'Jul 25, 2025 · 13:18' },
  { id: 'LOG-1003', user: 'Morgan Lee', role: 'Store Manager', action: 'Changed product price', module: 'Products', record: 'SKU: APL-MBA-M3', ip: '10.0.0.22', status: 'success', time: 'Jul 25, 2025 · 11:04' },
  { id: 'LOG-1004', user: 'Sam Rivera', role: 'Finance Manager', action: 'Processed payout to SoundVault', module: 'Finance', record: 'Payout #PAY-4821', ip: '10.0.0.31', status: 'success', time: 'Jul 24, 2025 · 17:55' },
  { id: 'LOG-1005', user: 'Jamie Cruz', role: 'Admin', action: 'Approved vendor application', module: 'Vendors', record: 'Vendor: LuxGoods Ltd', ip: '192.168.1.18', status: 'success', time: 'Jul 24, 2025 · 16:42' },
  { id: 'LOG-1006', user: 'Unknown', role: '—', action: 'Failed login attempt (3rd)', module: 'Auth', record: 'user: admin@nexus.com', ip: '84.201.88.12', status: 'failed', time: 'Jul 24, 2025 · 15:01' },
  { id: 'LOG-1007', user: 'Alex Admin', role: 'Super Admin', action: 'Updated commission rule for Electronics', module: 'Finance', record: 'Commission Rule #3', ip: '192.168.1.42', status: 'success', time: 'Jul 24, 2025 · 12:28' },
  { id: 'LOG-1008', user: 'Morgan Lee', role: 'Store Manager', action: 'Bulk-published 24 products', module: 'Products', record: '24 Products', ip: '10.0.0.22', status: 'success', time: 'Jul 23, 2025 · 10:15' },
  { id: 'LOG-1009', user: 'Taylor Kim', role: 'Marketing Manager', action: 'Deleted expired coupon SUMMER10', module: 'Marketing', record: 'Coupon: SUMMER10', ip: '10.0.0.14', status: 'success', time: 'Jul 23, 2025 · 09:48' },
  { id: 'LOG-1010', user: 'Jamie Cruz', role: 'Admin', action: 'Suspended vendor HomeElite', module: 'Vendors', record: 'Vendor: HomeElite', ip: '192.168.1.18', status: 'warning', time: 'Jul 22, 2025 · 16:02' },
]

const modules = ['All Modules', 'Storefront', 'Products', 'Orders', 'Vendors', 'Marketing', 'Finance', 'Auth', 'Settings']

const STATUS_CLS: Record<string, string> = {
  success: 'bg-[#D1FAE5] text-[#065F46]',
  failed: 'bg-[#FEE2E2] text-[#991B1B]',
  warning: 'bg-[#FEF3C7] text-[#92400E]',
}

const MODULE_CLS: Record<string, string> = {
  Storefront: 'bg-[#EEF2FF] text-[#4338CA]',
  Products: 'bg-[#F0FDF4] text-[#166534]',
  Orders: 'bg-[#FFF7ED] text-[#9A3412]',
  Vendors: 'bg-[#FDF4FF] text-[#86198F]',
  Marketing: 'bg-[#FFF1F2] text-[#9F1239]',
  Finance: 'bg-[#F0F9FF] text-[#075985]',
  Auth: 'bg-[#FEF2F2] text-[#991B1B]',
  Settings: 'bg-[#F4F4F8] text-[#5B5B72]',
}

export default function AuditLogsAdmin({ onNavigate: _ }: Props) {
  const [search, setSearch] = useState('')
  const [module, setModule] = useState('All Modules')
  const [status, setStatus] = useState('all')

  const filtered = useMemo(() => logs.filter(l => {
    const matchSearch = !search || l.action.toLowerCase().includes(search.toLowerCase()) || l.user.toLowerCase().includes(search.toLowerCase())
    const matchModule = module === 'All Modules' || l.module === module
    const matchStatus = status === 'all' || l.status === status
    return matchSearch && matchModule && matchStatus
  }), [search, module, status])

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Audit Logs</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Full activity trail for compliance and security</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Export CSV</button>
          <button className="px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Set Retention</button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Events Today', value: '284', color: 'text-[#111118]' },
          { label: 'Failed Attempts', value: '3', color: 'text-[#E11D48]' },
          { label: 'Active Sessions', value: '7', color: 'text-[#059669]' },
          { label: 'Log Retention', value: '90 days', color: 'text-[#6366F1]' },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl border border-[#E2E2EC] px-5 py-4">
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
            <p className={`font-mono font-black text-2xl mt-1 ${k.color}`}>{k.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-[#E2E2EC] p-4 flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search actions, users..." className="w-full h-9 pl-9 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]" />
        </div>
        <select value={module} onChange={e => setModule(e.target.value)} className="h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none">
          {modules.map(m => <option key={m}>{m}</option>)}
        </select>
        <div className="flex items-center gap-1 bg-[#F4F4F8] rounded-lg p-1">
          {[{ key: 'all', label: 'All' }, { key: 'success', label: 'Success' }, { key: 'failed', label: 'Failed' }, { key: 'warning', label: 'Warning' }].map(s => (
            <button key={s.key} onClick={() => setStatus(s.key)} className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${status === s.key ? 'bg-white shadow-sm text-[#111118]' : 'text-[#9B9BB8] hover:text-[#6B6B82]'}`}>{s.label}</button>
          ))}
        </div>
      </div>

      {/* Logs */}
      <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
        <div className="divide-y divide-[#F4F4F8]">
          {filtered.map(log => (
            <div key={log.id} className="flex items-start gap-4 px-5 py-4 hover:bg-[#F9F9FC] transition-colors">
              {/* Status dot */}
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${log.status === 'success' ? 'bg-[#059669]' : log.status === 'failed' ? 'bg-[#E11D48]' : 'bg-[#D97706]'}`} />

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-[#111118]">{log.action}</p>
                  <span className={`inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full ${MODULE_CLS[log.module] ?? 'bg-[#F4F4F8] text-[#6B6B82]'}`}>{log.module}</span>
                  <span className={`inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full ${STATUS_CLS[log.status]}`}>{log.status}</span>
                </div>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-xs text-[#9B9BB8]">by <span className="font-semibold text-[#6B6B82]">{log.user}</span> ({log.role})</span>
                  <span className="text-[#E2E2EC]">·</span>
                  <span className="text-xs text-[#9B9BB8]">Record: <span className="font-mono text-[#6B6B82]">{log.record}</span></span>
                  <span className="text-[#E2E2EC]">·</span>
                  <span className="text-xs font-mono text-[#9B9BB8]">IP: {log.ip}</span>
                </div>
              </div>

              {/* Time */}
              <p className="text-xs text-[#9B9BB8] flex-shrink-0 mt-0.5">{log.time}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-t border-[#F4F4F8]">
          <p className="text-xs text-[#9B9BB8]">Showing {filtered.length} of 8,492 events</p>
          <button className="text-xs font-semibold text-[#E8450A] hover:underline">Load more</button>
        </div>
      </div>
    </div>
  )
}
