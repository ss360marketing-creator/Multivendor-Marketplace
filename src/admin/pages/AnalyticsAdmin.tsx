import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { salesData } from '../adminData'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const funnelData = [
  { name: 'Product Views', value: 48200, fill: '#6366F1' },
  { name: 'Add to Cart', value: 12840, fill: '#8B5CF6' },
  { name: 'Checkout', value: 6420, fill: '#A78BFA' },
  { name: 'Purchase', value: 4284, fill: '#E8450A' },
]

const customerData = [
  { month: 'Jan', new: 420, returning: 240 },
  { month: 'Feb', new: 580, returning: 310 },
  { month: 'Mar', new: 640, returning: 390 },
  { month: 'Apr', new: 520, returning: 420 },
  { month: 'May', new: 780, returning: 480 },
  { month: 'Jun', new: 840, returning: 520 },
]

const topProducts = [
  { name: 'The Ordinary HA 2%', views: 48200, cart: 12840, purchases: 8421, rate: 17.5 },
  { name: 'Nike Air Max 270', views: 38400, cart: 9820, purchases: 5621, rate: 14.6 },
  { name: 'Sony WH-1000XM5', views: 22800, cart: 5480, purchases: 1842, rate: 8.1 },
  { name: 'Dyson Supersonic', views: 18400, cart: 4120, purchases: 1284, rate: 7.0 },
  { name: 'MacBook Air M3', views: 14200, cart: 2840, purchases: 892, rate: 6.3 },
]

export default function AnalyticsAdmin({ onNavigate: _ }: Props) {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Analytics</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Platform performance overview</p>
        </div>
        <div className="flex items-center gap-2">
          {['7 Days', '30 Days', '90 Days', 'This Year'].map((f, i) => (
            <button key={f} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${i === 1 ? 'bg-[#E8450A] text-white' : 'border border-[#E2E2EC] text-[#6B6B82] hover:bg-[#F4F4F8]'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Top metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: '$284,819', delta: '+18.4%', up: true },
          { label: 'Conversion Rate', value: '8.9%', delta: '+1.2%', up: true },
          { label: 'Avg Order Value', value: '$147.20', delta: '-2.1%', up: false },
          { label: 'Customer LTV', value: '$324.80', delta: '+8.6%', up: true },
        ].map(m => (
          <div key={m.label} className="bg-white rounded-xl border border-[#E2E2EC] p-5">
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{m.label}</p>
            <p className="font-mono font-black text-2xl text-[#111118] mt-2">{m.value}</p>
            <span className={`inline-flex items-center text-xs font-bold mt-1 ${m.up ? 'text-[#059669]' : 'text-[#E11D48]'}`}>
              {m.up ? '↑' : '↓'} {m.delta} vs last period
            </span>
          </div>
        ))}
      </div>

      {/* Revenue chart + Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E2E2EC] p-5">
          <h3 className="font-semibold text-[#111118] mb-1">Revenue Trend</h3>
          <p className="text-xs text-[#9B9BB8] mb-5">12-week rolling revenue</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={salesData} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E8450A" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#E8450A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F4F4F8" vertical={false} />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #E2E2EC', borderRadius: '10px', fontSize: 12 }} formatter={(v: unknown) => [`$${Number(v).toLocaleString()}`, 'Revenue']} />
              <Area type="monotone" dataKey="revenue" stroke="#E8450A" strokeWidth={2.5} fill="url(#grad1)" dot={false} activeDot={{ r: 5, fill: '#E8450A', strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Funnel */}
        <div className="bg-white rounded-xl border border-[#E2E2EC] p-5">
          <h3 className="font-semibold text-[#111118] mb-1">Conversion Funnel</h3>
          <p className="text-xs text-[#9B9BB8] mb-4">Product view → Purchase</p>
          <div className="space-y-2.5">
            {funnelData.map((step, i) => {
              const pct = Math.round((step.value / funnelData[0].value) * 100)
              return (
                <div key={step.name}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#6B6B82] font-medium">{step.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#111118]">{step.value.toLocaleString()}</span>
                      <span className="text-[#9B9BB8]">{pct}%</span>
                    </div>
                  </div>
                  <div className="h-6 bg-[#F4F4F8] rounded-lg overflow-hidden">
                    <div
                      className="h-full rounded-lg flex items-center justify-end pr-2 transition-all duration-700"
                      style={{ width: `${pct}%`, background: step.fill }}
                    >
                      {pct > 20 && <span className="text-[10px] font-bold text-white">{pct}%</span>}
                    </div>
                  </div>
                  {i < funnelData.length - 1 && (
                    <p className="text-[10px] text-[#E11D48] font-semibold mt-0.5 text-right">
                      {100 - Math.round((funnelData[i + 1].value / step.value) * 100)}% drop
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Customer chart + Top products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customers */}
        <div className="bg-white rounded-xl border border-[#E2E2EC] p-5">
          <h3 className="font-semibold text-[#111118] mb-1">Customer Acquisition</h3>
          <p className="text-xs text-[#9B9BB8] mb-4">New vs returning customers</p>
          <div className="flex items-center gap-4 mb-4">
            {[
              { label: 'New', color: '#E8450A' },
              { label: 'Returning', color: '#6366F1' },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm" style={{ background: l.color }} />
                <span className="text-xs text-[#6B6B82]">{l.label}</span>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={customerData} margin={{ top: 0, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F4F4F8" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #E2E2EC', borderRadius: '10px', fontSize: 12 }} />
              <Bar dataKey="new" stackId="a" fill="#E8450A" radius={[0, 0, 0, 0]} />
              <Bar dataKey="returning" stackId="a" fill="#6366F1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top products */}
        <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <div className="px-5 py-4 border-b border-[#F4F4F8]">
            <h3 className="font-semibold text-[#111118]">Top Products by Conversion</h3>
            <p className="text-xs text-[#9B9BB8] mt-0.5">Last 30 days</p>
          </div>
          <div className="divide-y divide-[#F4F4F8]">
            {topProducts.map((p, i) => (
              <div key={p.name} className="px-5 py-3.5 flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#F4F4F8] flex items-center justify-center text-xs font-bold text-[#9B9BB8] flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111118] truncate">{p.name}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-[11px] text-[#9B9BB8]">{p.views.toLocaleString()} views</span>
                    <span className="text-[11px] text-[#9B9BB8]">{p.purchases.toLocaleString()} sales</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-mono font-bold text-sm text-[#E8450A]">{p.rate}%</p>
                  <p className="text-[10px] text-[#9B9BB8]">conv. rate</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vendor analytics */}
      <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#F4F4F8]">
          <h3 className="font-semibold text-[#111118]">Vendor Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                {['Vendor', 'Revenue', 'Orders', 'AOV', 'Rating', 'Growth'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {[
                { name: 'iZone Official', revenue: '$2.14M', orders: 3241, aov: '$660', rating: 4.9, growth: '+24%', up: true },
                { name: 'TechHub Pro', revenue: '$1.82M', orders: 2108, aov: '$863', rating: 4.7, growth: '+18%', up: true },
                { name: 'NikeWorld', revenue: '$498K', orders: 5621, aov: '$89', rating: 4.8, growth: '+32%', up: true },
                { name: 'SoundVault', revenue: '$412K', orders: 1842, aov: '$224', rating: 4.8, growth: '+12%', up: true },
                { name: 'HomeElite', revenue: '$184K', orders: 849, aov: '$217', rating: 4.7, growth: '-4%', up: false },
              ].map(v => (
                <tr key={v.name} className="hover:bg-[#F9F9FC] transition-colors">
                  <td className="px-5 py-3.5 font-semibold text-[#111118]">{v.name}</td>
                  <td className="px-5 py-3.5 font-mono font-bold text-[#111118]">{v.revenue}</td>
                  <td className="px-5 py-3.5 font-mono text-[#111118]">{v.orders.toLocaleString()}</td>
                  <td className="px-5 py-3.5 font-mono text-[#111118]">{v.aov}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <span className="font-mono font-semibold text-sm text-[#111118]">{v.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`font-mono font-bold text-sm ${v.up ? 'text-[#059669]' : 'text-[#E11D48]'}`}>{v.growth}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
