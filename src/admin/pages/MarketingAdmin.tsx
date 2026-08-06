import { useState } from 'react'
import { couponData } from '../adminData'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const tabs = ['Campaigns', 'Flash Sales', 'Coupons', 'Discounts', 'Push Notifications']

const STATUS_CLS: Record<string, string> = {
  active: 'bg-[#D1FAE5] text-[#065F46]',
  expired: 'bg-[#F4F4F8] text-[#9B9BB8]',
  scheduled: 'bg-[#EEF2FF] text-[#4338CA]',
  draft: 'bg-[#FEF3C7] text-[#92400E]',
}

const campaigns = [
  { name: 'Summer Sale 2025', type: 'Percentage', discount: '25%', target: 'All Customers', products: 284, start: 'Jul 1', end: 'Jul 31', status: 'active', revenue: '$142,800', clicks: 48200 },
  { name: 'Tech Week', type: 'Category', discount: '30%', target: 'Electronics', products: 142, start: 'Jul 14', end: 'Jul 20', status: 'expired', revenue: '$84,200', clicks: 28400 },
  { name: 'Back to School', type: 'Percentage', discount: '20%', target: 'Students', products: 380, start: 'Aug 1', end: 'Sep 15', status: 'scheduled', revenue: '—', clicks: 0 },
]

const flashSales = [
  { name: 'Flash Friday', start: 'Jul 25 18:00', end: 'Jul 25 22:00', products: 12, discount: '50%', status: 'active', stock: 84 },
  { name: 'Weekend Flash', start: 'Jul 26 10:00', end: 'Jul 27 22:00', products: 24, discount: '40%', status: 'scheduled', stock: 200 },
  { name: 'Beauty Blitz', start: 'Jul 20 12:00', end: 'Jul 20 16:00', products: 8, discount: '35%', status: 'expired', stock: 0 },
]

export default function MarketingAdmin({ onNavigate: _ }: Props) {
  const [activeTab, setActiveTab] = useState('Campaigns')
  const [showNewCoupon, setShowNewCoupon] = useState(false)

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Marketing Center</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Campaigns, promotions, and growth tools</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          Create Campaign
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Active Campaigns', value: '3', color: 'text-[#059669]' },
          { label: 'Coupons Issued', value: '13,842', color: 'text-[#6366F1]' },
          { label: 'Revenue from Promos', value: '$84,200', color: 'text-[#E8450A]' },
          { label: 'Avg Discount', value: '24.8%', color: 'text-[#D97706]' },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl border border-[#E2E2EC] px-5 py-4">
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
            <p className={`font-mono font-black text-2xl mt-1 ${k.color}`}>{k.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-[#E2E2EC] overflow-x-auto scroll-container">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-semibold border-b-2 transition-all -mb-px ${
              activeTab === t ? 'border-[#E8450A] text-[#E8450A]' : 'border-transparent text-[#9B9BB8] hover:text-[#6B6B82]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Campaigns tab */}
      {activeTab === 'Campaigns' && (
        <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                {['Campaign', 'Type', 'Discount', 'Products', 'Duration', 'Status', 'Revenue', 'Actions'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {campaigns.map(c => (
                <tr key={c.name} className="hover:bg-[#F9F9FC] transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-[#111118]">{c.name}</p>
                    <p className="text-xs text-[#9B9BB8]">{c.target}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs bg-[#EEF2FF] text-[#4338CA] px-2 py-0.5 rounded-full font-semibold">{c.type}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-mono font-bold text-[#E11D48] text-sm">{c.discount}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-mono text-[#111118]">{c.products}</span>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-xs text-[#111118]">{c.start} – {c.end}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_CLS[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-mono font-semibold text-[#111118]">{c.revenue}</p>
                    {c.clicks > 0 && <p className="text-[11px] text-[#9B9BB8]">{c.clicks.toLocaleString()} clicks</p>}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </button>
                      {c.status !== 'expired' && (
                        <button className="w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#E11D48]">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Flash Sales tab */}
      {activeTab === 'Flash Sales' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {flashSales.map(f => (
              <div key={f.name} className={`bg-white rounded-xl border-2 p-5 space-y-4 ${f.status === 'active' ? 'border-[#E11D48]' : 'border-[#E2E2EC]'}`}>
                {f.status === 'active' && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
                    <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wide">Live Now</span>
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-[#111118]">{f.name}</h3>
                  <p className="text-xs text-[#9B9BB8] mt-0.5">{f.start} → {f.end}</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <p className="font-mono font-black text-lg text-[#E11D48]">{f.discount}</p>
                    <p className="text-[10px] text-[#9B9BB8]">Discount</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono font-black text-lg text-[#111118]">{f.products}</p>
                    <p className="text-[10px] text-[#9B9BB8]">Products</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono font-black text-lg text-[#111118]">{f.stock}</p>
                    <p className="text-[10px] text-[#9B9BB8]">Stock</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Edit</button>
                  {f.status === 'active' && (
                    <button className="flex-1 py-2 bg-[#FEE2E2] text-[#E11D48] rounded-lg text-xs font-semibold hover:bg-[#FECACA]">End Sale</button>
                  )}
                </div>
              </div>
            ))}

            {/* New flash sale card */}
            <button className="bg-white rounded-xl border-2 border-dashed border-[#E2E2EC] p-5 flex flex-col items-center justify-center gap-3 hover:border-[#E8450A] hover:text-[#E8450A] transition-all text-[#9B9BB8] group">
              <div className="w-12 h-12 rounded-xl bg-[#F4F4F8] group-hover:bg-[#FFF7F5] flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              </div>
              <p className="text-sm font-semibold">Create Flash Sale</p>
            </button>
          </div>
        </div>
      )}

      {/* Coupons tab */}
      {activeTab === 'Coupons' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => setShowNewCoupon(!showNewCoupon)}
              className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]"
            >
              + New Coupon
            </button>
          </div>

          {showNewCoupon && (
            <div className="bg-white rounded-xl border-2 border-[#E8450A] p-6 fade-in">
              <h3 className="font-semibold text-[#111118] mb-4">Create New Coupon</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Coupon Code</label>
                  <input placeholder="e.g. SAVE20" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] font-mono uppercase" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Type</label>
                  <select className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none">
                    <option>Percentage</option>
                    <option>Fixed Amount</option>
                    <option>Free Shipping</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Value (%)</label>
                  <input type="number" placeholder="20" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Expiry</label>
                  <input type="date" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Min Order ($)</label>
                  <input type="number" placeholder="50" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Usage Limit</label>
                  <input type="number" placeholder="1000" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="px-5 py-2 bg-[#E8450A] text-white rounded-lg text-sm font-semibold">Create Coupon</button>
                <button onClick={() => setShowNewCoupon(false)} className="px-5 py-2 border border-[#E2E2EC] text-[#6B6B82] rounded-lg text-sm font-semibold">Cancel</button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                  {['Code', 'Type', 'Value', 'Used', 'Limit', 'Expires', 'Status', 'Actions'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {couponData.map(c => (
                  <tr key={c.code} className="hover:bg-[#F9F9FC] transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="font-mono font-bold text-[#E8450A] bg-[#FFF7F5] px-2.5 py-1 rounded-lg text-xs">{c.code}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs text-[#6B6B82]">{c.type}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="font-mono font-bold text-[#E11D48]">
                        {c.type === 'Percentage' ? `${c.value}%` : c.type === 'Fixed Amount' ? `$${c.value}` : 'Free'}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div>
                        <p className="font-mono text-sm text-[#111118]">{c.used.toLocaleString()}</p>
                        {c.limit && (
                          <div className="w-20 h-1 bg-[#F4F4F8] rounded-full mt-1 overflow-hidden">
                            <div className="h-full bg-[#E8450A] rounded-full" style={{ width: `${Math.min(100, (c.used / c.limit) * 100)}%` }} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="font-mono text-xs text-[#6B6B82]">{c.limit ? c.limit.toLocaleString() : '∞'}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs text-[#6B6B82]">{c.expires}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_CLS[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1">
                        <button className="w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </button>
                        <button className="w-7 h-7 rounded-lg hover:bg-[#FEE2E2] flex items-center justify-center text-[#9B9BB8] hover:text-[#E11D48]">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'Discounts' && (
        <div className="space-y-5">
          {/* Auto-discount rules */}
          <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]">
              <div>
                <h3 className="font-semibold text-[#111118]">Automatic Discounts</h3>
                <p className="text-xs text-[#9B9BB8] mt-0.5">Rules applied automatically at checkout — no code required</p>
              </div>
              <button className="px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]">+ New Rule</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                  {['Rule Name', 'Trigger', 'Discount', 'Applies To', 'Usage', 'Status', ''].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {[
                  { name: 'Buy 2 Get 10% Off', trigger: 'Min qty: 2', discount: '10%', applies: 'All Products', usage: 1284, status: 'active' },
                  { name: 'Spend $200 Save $20', trigger: 'Min spend: $200', discount: '$20 off', applies: 'All Products', usage: 842, status: 'active' },
                  { name: 'New User 15% Off', trigger: 'First order', discount: '15%', applies: 'All Products', usage: 3241, status: 'active' },
                  { name: 'Bundle: Electronics', trigger: '3+ electronics', discount: '12%', applies: 'Electronics', usage: 284, status: 'paused' },
                  { name: 'Free Shipping $75+', trigger: 'Min spend: $75', discount: 'Free Shipping', applies: 'All', usage: 8421, status: 'active' },
                ].map(r => (
                  <tr key={r.name} className="hover:bg-[#F9F9FC] transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-[#111118]">{r.name}</td>
                    <td className="px-5 py-3.5 text-xs text-[#6B6B82]">{r.trigger}</td>
                    <td className="px-5 py-3.5 font-mono font-bold text-[#E11D48]">{r.discount}</td>
                    <td className="px-5 py-3.5 text-xs text-[#6B6B82]">{r.applies}</td>
                    <td className="px-5 py-3.5 font-mono text-sm text-[#111118]">{r.usage.toLocaleString()}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${r.status === 'active' ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#F4F4F8] text-[#9B9BB8]'}`}>{r.status}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1">
                        <button className="w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </button>
                        <button className="w-7 h-7 rounded-lg hover:bg-[#FEE2E2] flex items-center justify-center text-[#9B9BB8] hover:text-[#E11D48]">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Volume pricing */}
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-[#111118]">Volume / Tiered Pricing</h3>
                <p className="text-xs text-[#9B9BB8] mt-0.5">Discounts that scale with quantity purchased</p>
              </div>
              <button className="px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">+ Add Tier</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { tier: 'Tier 1', qty: '2–4 items', discount: '5%', orders: 2841 },
                { tier: 'Tier 2', qty: '5–9 items', discount: '10%', orders: 1284 },
                { tier: 'Tier 3', qty: '10–24 items', discount: '18%', orders: 482 },
                { tier: 'Tier 4', qty: '25+ items', discount: '25%', orders: 124 },
              ].map(t => (
                <div key={t.tier} className="bg-[#F9F9FC] rounded-xl p-4 border border-[#F4F4F8]">
                  <p className="text-xs font-bold text-[#9B9BB8] uppercase tracking-wide">{t.tier}</p>
                  <p className="font-mono font-black text-xl text-[#E11D48] mt-1">{t.discount}</p>
                  <p className="text-xs text-[#6B6B82] mt-1">{t.qty}</p>
                  <p className="text-xs text-[#9B9BB8] mt-2">{t.orders.toLocaleString()} orders</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Push Notifications' && (
        <div className="space-y-5">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Subscribers', value: '84,200', delta: '+1,284 this week' },
              { label: 'Avg Open Rate', value: '18.4%', delta: 'Industry avg: 12%' },
              { label: 'Notifications Sent', value: '248K', delta: 'Last 30 days' },
              { label: 'Conversion Rate', value: '4.2%', delta: '+0.8% MoM' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-xl border border-[#E2E2EC] px-5 py-4">
                <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{s.label}</p>
                <p className="font-mono font-black text-2xl text-[#111118] mt-1">{s.value}</p>
                <p className="text-xs text-[#059669] mt-1">{s.delta}</p>
              </div>
            ))}
          </div>

          {/* Compose */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
              <h3 className="font-semibold text-[#111118]">Compose Notification</h3>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">Title</label>
                <input placeholder="🔥 Flash Sale starts NOW!" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">Body</label>
                <textarea rows={3} placeholder="Up to 50% off electronics for the next 4 hours only. Don't miss out!" className="w-full px-3 py-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] resize-none placeholder:text-[#C8C8E0]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Target Segment</label>
                  <select className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none">
                    <option>All Subscribers</option>
                    <option>VIP Customers</option>
                    <option>Inactive 30 Days</option>
                    <option>Cart Abandoned</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Schedule</label>
                  <select className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none">
                    <option>Send Now</option>
                    <option>Schedule for Later</option>
                    <option>Optimal Send Time</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">CTA Link</label>
                <input placeholder="/category/electronics" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]" />
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Preview</button>
                <button className="flex-1 py-2.5 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]">Send Notification</button>
              </div>
            </div>

            {/* Recent notifications */}
            <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#F4F4F8]">
                <h3 className="font-semibold text-[#111118]">Recent Campaigns</h3>
              </div>
              <div className="divide-y divide-[#F4F4F8]">
                {[
                  { title: '🔥 Flash Friday Sale', sent: '84,200', opened: '18.2%', clicked: '5.4%', time: 'Jul 25 · 6:00 PM' },
                  { title: '🎁 Exclusive: VIP Early Access', sent: '12,400', opened: '24.8%', clicked: '9.2%', time: 'Jul 22 · 10:00 AM' },
                  { title: '📦 Your order shipped!', sent: '3,241', opened: '48.4%', clicked: '22.1%', time: 'Jul 20 · Auto' },
                  { title: '💸 You left items in your cart', sent: '8,420', opened: '28.4%', clicked: '12.8%', time: 'Jul 18 · Auto' },
                ].map(n => (
                  <div key={n.title} className="px-5 py-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-semibold text-[#111118]">{n.title}</p>
                      <span className="text-[11px] text-[#9B9BB8] ml-3 flex-shrink-0">{n.time}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-[#6B6B82]">Sent: <span className="font-mono font-semibold text-[#111118]">{n.sent}</span></span>
                      <span className="text-xs text-[#6B6B82]">Open: <span className="font-mono font-semibold text-[#059669]">{n.opened}</span></span>
                      <span className="text-xs text-[#6B6B82]">Click: <span className="font-mono font-semibold text-[#E8450A]">{n.clicked}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
