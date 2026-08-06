import { useState } from 'react'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const transactions = [
  { id: 'TXN-84210', type: 'sale', customer: 'Sarah Mitchell', vendor: 'iZone Official', amount: 2499, commission: 249.90, net: 2249.10, method: 'Card', status: 'completed', date: 'Jul 25, 2025' },
  { id: 'TXN-84209', type: 'refund', customer: 'James Chen', vendor: 'NikeWorld', amount: -189, commission: -18.90, net: -170.10, method: 'Card', status: 'processed', date: 'Jul 25, 2025' },
  { id: 'TXN-84208', type: 'sale', customer: 'Priya Sharma', vendor: 'BeautyLab', amount: 84, commission: 12.60, net: 71.40, method: 'Wallet', status: 'completed', date: 'Jul 24, 2025' },
  { id: 'TXN-84207', type: 'payout', customer: '—', vendor: 'SoundVault', amount: -12480, commission: 0, net: -12480, method: 'Bank', status: 'completed', date: 'Jul 24, 2025' },
  { id: 'TXN-84206', type: 'sale', customer: 'Omar Abdullah', vendor: 'TechHub Pro', amount: 899, commission: 89.90, net: 809.10, method: 'Card', status: 'pending', date: 'Jul 24, 2025' },
  { id: 'TXN-84205', type: 'sale', customer: 'Emma Walsh', vendor: 'FashionHub', amount: 248, commission: 37.20, net: 210.80, method: 'COD', status: 'completed', date: 'Jul 23, 2025' },
]

const payouts = [
  { vendor: 'iZone Official', sales: '$84,200', commission: '$8,420', refunds: '$1,240', net: '$74,540', status: 'pending', due: 'Jul 31' },
  { vendor: 'TechHub Pro', sales: '$62,400', commission: '$6,240', refunds: '$840', net: '$55,320', status: 'pending', due: 'Jul 31' },
  { vendor: 'NikeWorld', sales: '$28,800', commission: '$4,320', refunds: '$240', net: '$24,240', status: 'processing', due: 'Jul 28' },
  { vendor: 'SoundVault', sales: '$18,400', commission: '$2,760', refunds: '$120', net: '$15,520', status: 'paid', due: 'Jul 24' },
  { vendor: 'BeautyLab', sales: '$12,840', commission: '$2,568', refunds: '$84', net: '$10,188', status: 'paid', due: 'Jul 22' },
]

const PAYOUT_CLS: Record<string, string> = {
  pending: 'bg-[#FEF3C7] text-[#92400E]',
  processing: 'bg-[#EEF2FF] text-[#4338CA]',
  paid: 'bg-[#D1FAE5] text-[#065F46]',
}

const TXN_TYPE: Record<string, string> = {
  sale: 'text-[#059669]',
  refund: 'text-[#E11D48]',
  payout: 'text-[#6366F1]',
}

export default function FinanceAdmin({ onNavigate: _ }: Props) {
  const [tab, setTab] = useState<'transactions' | 'payouts' | 'commissions'>('transactions')

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Finance</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Transactions, payouts, and commissions</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Export Report</button>
          <button className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]">Run Payouts</button>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Gross Revenue', value: '$284,819', delta: '+18.4%', color: 'text-[#059669]' },
          { label: 'Platform Commission', value: '$24,208', delta: '8.5% avg rate', color: 'text-[#6366F1]' },
          { label: 'Pending Payouts', value: '$153,940', delta: '3 vendors', color: 'text-[#D97706]' },
          { label: 'Refunds Issued', value: '$3,284', delta: '1.15% rate', color: 'text-[#E11D48]' },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl border border-[#E2E2EC] px-5 py-4">
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
            <p className={`font-mono font-black text-2xl mt-1 ${k.color}`}>{k.value}</p>
            <p className="text-xs text-[#9B9BB8] mt-1">{k.delta}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-[#E2E2EC]">
        {(['transactions', 'payouts', 'commissions'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-3 text-sm font-semibold capitalize border-b-2 transition-all -mb-px ${tab === t ? 'border-[#E8450A] text-[#E8450A]' : 'border-transparent text-[#9B9BB8] hover:text-[#6B6B82]'}`}>{t}</button>
        ))}
      </div>

      {tab === 'transactions' && (
        <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]">
            <p className="font-semibold text-[#111118]">All Transactions</p>
            <div className="flex items-center gap-2">
              <select className="h-8 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none">
                <option>All Types</option>
                <option>Sales</option>
                <option>Refunds</option>
                <option>Payouts</option>
              </select>
              <select className="h-8 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                {['Transaction ID', 'Type', 'Customer', 'Vendor', 'Amount', 'Commission', 'Net', 'Method', 'Status', 'Date'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {transactions.map(t => (
                <tr key={t.id} className="hover:bg-[#F9F9FC] transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-[#6B6B82]">{t.id}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold capitalize ${TXN_TYPE[t.type]}`}>{t.type}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#111118]">{t.customer}</td>
                  <td className="px-4 py-3 text-sm text-[#6B6B82]">{t.vendor}</td>
                  <td className="px-4 py-3">
                    <span className={`font-mono font-bold text-sm ${t.amount < 0 ? 'text-[#E11D48]' : 'text-[#111118]'}`}>{t.amount < 0 ? `-$${Math.abs(t.amount).toLocaleString()}` : `$${t.amount.toLocaleString()}`}</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-[#6B6B82]">{t.commission === 0 ? '—' : t.commission < 0 ? `-$${Math.abs(t.commission).toFixed(2)}` : `$${t.commission.toFixed(2)}`}</td>
                  <td className="px-4 py-3">
                    <span className={`font-mono font-bold text-sm ${t.net < 0 ? 'text-[#E11D48]' : 'text-[#059669]'}`}>{t.net < 0 ? `-$${Math.abs(t.net).toFixed(2)}` : `$${t.net.toFixed(2)}`}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs bg-[#F4F4F8] text-[#6B6B82] px-2 py-0.5 rounded-full">{t.method}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${t.status === 'completed' ? 'bg-[#D1FAE5] text-[#065F46]' : t.status === 'pending' ? 'bg-[#FEF3C7] text-[#92400E]' : 'bg-[#EEF2FF] text-[#4338CA]'}`}>{t.status}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#9B9BB8] whitespace-nowrap">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'payouts' && (
        <div className="space-y-4">
          {/* Summary */}
          <div className="bg-[#0F0F18] rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-[#8B8BA8] text-sm font-semibold">Next Payout Cycle</p>
              <p className="text-white font-black text-3xl font-mono mt-1">$153,940</p>
              <p className="text-[#5B5B72] text-xs mt-1">Due Jul 31, 2025 · 3 vendors pending</p>
            </div>
            <button className="px-6 py-3 bg-[#E8450A] text-white rounded-xl font-bold hover:bg-[#C93A07]">Process All Payouts</button>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                  {['Vendor', 'Gross Sales', 'Commission', 'Refunds', 'Net Payable', 'Due Date', 'Status', 'Action'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {payouts.map(p => (
                  <tr key={p.vendor} className="hover:bg-[#F9F9FC] transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-[#111118]">{p.vendor}</td>
                    <td className="px-5 py-3.5 font-mono font-semibold text-[#111118]">{p.sales}</td>
                    <td className="px-5 py-3.5 font-mono text-[#E11D48]">-{p.commission}</td>
                    <td className="px-5 py-3.5 font-mono text-[#D97706]">-{p.refunds}</td>
                    <td className="px-5 py-3.5 font-mono font-black text-[#059669]">{p.net}</td>
                    <td className="px-5 py-3.5 text-xs text-[#6B6B82]">{p.due}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${PAYOUT_CLS[p.status]}`}>{p.status}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      {p.status !== 'paid' ? (
                        <button className="text-xs font-bold text-[#E8450A] hover:underline">Pay Now</button>
                      ) : (
                        <button className="text-xs text-[#9B9BB8] hover:underline">Receipt</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'commissions' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-6">
            <h3 className="font-semibold text-[#111118] mb-4">Commission Rules</h3>
            <div className="space-y-3">
              {[
                { category: 'Electronics', rate: '10%', type: 'Percentage', vendors: 12 },
                { category: 'Fashion & Apparel', rate: '15%', type: 'Percentage', vendors: 24 },
                { category: 'Beauty & Skincare', rate: '20%', type: 'Percentage', vendors: 18 },
                { category: 'Home & Living', rate: '12%', type: 'Percentage', vendors: 9 },
                { category: 'Default (All)', rate: '8%', type: 'Fallback', vendors: '—' },
              ].map(rule => (
                <div key={rule.category} className="flex items-center justify-between py-3 border-b border-[#F4F4F8] last:border-0">
                  <div>
                    <p className="font-semibold text-[#111118] text-sm">{rule.category}</p>
                    <p className="text-xs text-[#9B9BB8]">{rule.vendors} vendors</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono font-black text-lg text-[#E8450A]">{rule.rate}</span>
                    <span className="text-xs bg-[#F4F4F8] text-[#6B6B82] px-2 py-0.5 rounded-lg">{rule.type}</span>
                    <button className="text-xs font-semibold text-[#6B6B82] hover:text-[#E8450A]">Edit</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">+ Add Rule</button>
          </div>
        </div>
      )}
    </div>
  )
}
