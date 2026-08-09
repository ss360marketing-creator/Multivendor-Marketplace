import { useEffect, useState } from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { salesData, categoryRevenue, adminOrders, adminVendors, alerts } from '../adminData'
import type { AdminSection } from '../adminData'
import { getAdminDashboardSummary, type AdminDashboardSummary } from '@/api/marketplace'
import { useSession } from '@/state/session-store'

type Props = { onNavigate: (s: AdminSection) => void }

const fallbackKpis = [
  { label: 'Gross Sales', value: 'Rs. 284,819', change: '+18.4%', up: true, sub: 'vs last 30 days', color: '#E8450A' },
  { label: 'Net Revenue', value: 'Rs. 241,284', change: '+12.1%', up: true, sub: 'after commissions', color: '#059669' },
  { label: 'Total Orders', value: '8,429', change: '+22.8%', up: true, sub: '284 today', color: '#6366F1' },
  { label: 'New Customers', value: '1,842', change: '+9.4%', up: true, sub: '48 today', color: '#F59E0B' },
  { label: 'Active Vendors', value: '142', change: '+4.2%', up: true, sub: '3 pending review', color: '#EC4899' },
  { label: 'Products Listed', value: '28,490', change: '+6.8%', up: true, sub: '184 new this week', color: '#14B8A6' },
  { label: 'Avg Order Value', value: 'Rs. 147.20', change: '-2.1%', up: false, sub: 'vs Rs. 150.42 last month', color: '#8B5CF6' },
  { label: 'Conversion Rate', value: '3.42%', change: '+0.18%', up: true, sub: 'from 3.24% last month', color: '#E8450A' },
]

const STATUS_COLORS: Record<string, string> = {
  delivered: 'bg-[#D1FAE5] text-[#065F46]',
  shipped: 'bg-[#DBEAFE] text-[#1E40AF]',
  processing: 'bg-[#FEF3C7] text-[#92400E]',
  pending: 'bg-[#F4F4F8] text-[#5B5B72]',
  cancelled: 'bg-[#FEE2E2] text-[#991B1B]',
  refund_pending: 'bg-[#FEF3C7] text-[#92400E]',
}

const DATE_FILTERS = ['Today', '7 Days', '30 Days', '90 Days', 'This Year', 'Custom']

const CHART_COLORS = ['#E8450A', '#6366F1', '#059669', '#F59E0B', '#EC4899', '#14B8A6']

function buildKpis(summary: AdminDashboardSummary['summary']) {
  return [
    { label: 'Gross Sales', value: `Rs. ${summary.grossSales.toLocaleString()}`, change: '+0.0%', up: true, sub: 'live from backend', color: '#E8450A' },
    { label: 'Net Revenue', value: `Rs. ${summary.netSales.toLocaleString()}`, change: '+0.0%', up: true, sub: 'live from backend', color: '#059669' },
    { label: 'Total Orders', value: summary.orders.toLocaleString(), change: '+0.0%', up: true, sub: 'live from backend', color: '#6366F1' },
    { label: 'New Customers', value: summary.customers.toLocaleString(), change: '+0.0%', up: true, sub: 'live from backend', color: '#F59E0B' },
    { label: 'Active Vendors', value: summary.vendors.toLocaleString(), change: '+0.0%', up: true, sub: 'live from backend', color: '#EC4899' },
    { label: 'Products Listed', value: summary.products.toLocaleString(), change: '+0.0%', up: true, sub: 'live from backend', color: '#14B8A6' },
    { label: 'Avg Order Value', value: `Rs. ${summary.averageOrderValue.toFixed(2)}`, change: '+0.0%', up: true, sub: 'live from backend', color: '#8B5CF6' },
    { label: 'Conversion Rate', value: `${summary.conversionRate.toFixed(2)}%`, change: '+0.0%', up: true, sub: 'live from backend', color: '#E8450A' },
  ]
}

export default function AdminDashboard({ onNavigate }: Props) {
  const session = useSession()
  const [dateFilter, setDateFilter] = useState('30 Days')
  const [chartTab, setChartTab] = useState<'revenue' | 'orders'>('revenue')
  const [liveData, setLiveData] = useState<AdminDashboardSummary | null>(null)
  const [liveError, setLiveError] = useState<string | null>(null)

  useEffect(() => {
    if (session.status !== 'authenticated' || !session.token) {
      setLiveData(null)
      setLiveError(null)
      return
    }

    let cancelled = false

    void (async () => {
      const response = await getAdminDashboardSummary(session.token!)

      if (cancelled) return

      if (!response.success) {
        setLiveError(response.error.message)
        setLiveData(null)
        return
      }

      setLiveError(null)
      setLiveData(response.data)
    })()

    return () => {
      cancelled = true
    }
  }, [session.status, session.token])

  const dashboard = liveData
  const displayKpis = dashboard ? buildKpis(dashboard.summary) : fallbackKpis
  const displayAlerts = dashboard?.alerts ?? alerts
  const displaySales = dashboard?.sales ?? salesData
  const displayCategoryRevenue = dashboard?.categoryRevenue ?? categoryRevenue
  const displayOrders = dashboard?.recentOrders ?? adminOrders
  const displayPendingVendors =
    dashboard?.pendingVendors ??
    adminVendors.filter(v => v.status === 'pending' || v.status === 'review')
  const displayLowStockProducts =
    dashboard?.lowStockProducts ??
    [
      { id: 'sny-wh5', title: 'Sony WH-1000XM5', stock: 3, vendorId: 'v1' },
      { id: 'tod-ha2b5', title: 'The Ordinary HA 2%', stock: 9, vendorId: 'v5' },
      { id: 'apl-mba-m3', title: 'MacBook Air M3', stock: 32, vendorId: 'v3' },
    ]

  return (
    <div className="p-6 space-y-6">

      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Dashboard</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">
            {session.user ? `Welcome back, ${session.user.fullName}. Here is what is happening.` : "Welcome back. Here's what's happening."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {DATE_FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setDateFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                dateFilter === f ? 'bg-[#E8450A] text-white' : 'bg-white border border-[#E2E2EC] text-[#6B6B82] hover:border-[#111118]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts */}
      {displayAlerts.length > 0 && (
        <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-[#F4F4F8]">
            <div className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
            <p className="text-sm font-semibold text-[#111118]">Action Required</p>
            <span className="text-xs bg-[#FEE2E2] text-[#991B1B] px-2 py-0.5 rounded-full font-bold">{displayAlerts.length}</span>
          </div>
          <div className="flex overflow-x-auto scroll-container">
            {displayAlerts.map((a, i) => (
              <div key={i} className={`flex-shrink-0 flex items-start gap-3 px-5 py-3 border-r border-[#F4F4F8] min-w-[260px] ${i === 0 ? '' : ''}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${a.type === 'error' ? 'bg-[#E11D48]' : a.type === 'warning' ? 'bg-[#D97706]' : 'bg-[#3B82F6]'}`} />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#111118]">{a.message}</p>
                  <button className="text-xs text-[#E8450A] font-semibold mt-0.5 hover:text-[#C93A07]">{a.action}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayKpis.map(k => (
          <div key={k.label} className="bg-white rounded-xl border border-[#E2E2EC] p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${k.up ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#FEE2E2] text-[#991B1B]'}`}>
                {k.up ? '↑' : '↓'} {k.change}
              </span>
            </div>
            <p className="font-mono font-black text-2xl text-[#111118] mt-2 tracking-tight">{k.value}</p>
            <p className="text-xs text-[#9B9BB8] mt-1">{k.sub}</p>
            {/* Sparkline */}
            <div className="mt-3 h-8">
              <svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none">
                <polyline
                  points="0,28 10,22 20,24 30,18 40,20 50,14 60,16 70,10 80,12 90,8 100,6"
                  fill="none"
                  stroke={k.color}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="0,32 0,28 10,22 20,24 30,18 40,20 50,14 60,16 70,10 80,12 90,8 100,6 100,32"
                  fill={k.color}
                  fillOpacity="0.08"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Main chart + category breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E2E2EC] p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-semibold text-[#111118]">Sales Overview</h3>
              <p className="text-xs text-[#9B9BB8] mt-0.5">12-week trend</p>
            </div>
            <div className="flex rounded-lg border border-[#E2E2EC] overflow-hidden">
              {(['revenue', 'orders'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setChartTab(t)}
                  className={`px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${chartTab === t ? 'bg-[#0F0F18] text-white' : 'text-[#6B6B82] hover:bg-[#F4F4F8]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={displaySales} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E8450A" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="#E8450A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F4F4F8" vertical={false} />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false}
                tickFormatter={v => chartTab === 'revenue' ? `Rs. ${(v/1000).toFixed(0)}k` : String(v)} />
              <Tooltip
                contentStyle={{ background: '#fff', border: '1px solid #E2E2EC', borderRadius: '10px', fontSize: 12 }}
                labelStyle={{ color: '#111118', fontWeight: 600 }}
                formatter={(v: unknown) => { const n = Number(v); return chartTab === 'revenue' ? [`Rs. ${n.toLocaleString()}`, 'Revenue'] : [n.toLocaleString(), 'Orders'] }}
              />
              <Area
                type="monotone"
                dataKey={chartTab === 'revenue' ? 'revenue' : 'orders'}
                stroke="#E8450A"
                strokeWidth={2.5}
                fill="url(#areaGradient)"
                dot={false}
                activeDot={{ r: 5, fill: '#E8450A', strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category breakdown */}
        <div className="bg-white rounded-xl border border-[#E2E2EC] p-5">
          <h3 className="font-semibold text-[#111118] mb-1">Revenue by Category</h3>
          <p className="text-xs text-[#9B9BB8] mb-4">Last 30 days</p>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={displayCategoryRevenue} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={40}>
                {displayCategoryRevenue.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: '#fff', border: '1px solid #E2E2EC', borderRadius: '8px', fontSize: 12 }}
                formatter={(v: unknown) => [`Rs. ${(Number(v)/1000).toFixed(0)}k`, '']}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {displayCategoryRevenue.map((c, i) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} />
                  <span className="text-xs text-[#6B6B82]">{c.name}</span>
                </div>
                <span className="text-xs font-mono font-semibold text-[#111118]">Rs. {(c.value / 1000).toFixed(0)}k</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row: Recent orders + Vendor approvals + Low stock */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]">
            <h3 className="font-semibold text-[#111118]">Recent Orders</h3>
            <button onClick={() => onNavigate('orders')} className="text-xs font-semibold text-[#E8450A] hover:text-[#C93A07]">View all →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC]">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">Order</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">Customer</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">Amount</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {displayOrders.slice(0, 6).map(o => (
                  <tr key={o.id} className="hover:bg-[#F9F9FC] transition-colors cursor-pointer">
                    <td className="px-5 py-3">
                      <p className="font-mono text-xs font-semibold text-[#111118]">{o.id}</p>
                      <p className="text-[11px] text-[#9B9BB8] mt-0.5">{o.date}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-xs text-[#111118]">{o.customer}</p>
                      <p className="text-[11px] text-[#9B9BB8]">{o.vendor}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono font-bold text-sm text-[#111118]">Rs. {o.amount.toLocaleString()}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_COLORS[o.status]}`}>
                        {o.status.replace('_', ' ')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column: Vendor approvals + Stock alerts */}
        <div className="space-y-4">
          {/* Pending vendor approvals */}
          <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F4F4F8]">
              <h3 className="font-semibold text-sm text-[#111118]">Pending Vendors</h3>
              <button onClick={() => onNavigate('vendors-applications')} className="text-xs font-semibold text-[#E8450A]">Review →</button>
            </div>
            <div className="divide-y divide-[#F4F4F8]">
              {displayPendingVendors.map(v => (
                <div key={v.id} className="px-4 py-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#111118] truncate">{v.name}</p>
                    <p className="text-xs text-[#9B9BB8]">{v.owner} · {v.joined}</p>
                  </div>
                  <div className="flex gap-1.5">
                    <button className="w-7 h-7 rounded-lg bg-[#D1FAE5] text-[#059669] flex items-center justify-center hover:bg-[#A7F3D0] transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button className="w-7 h-7 rounded-lg bg-[#FEE2E2] text-[#E11D48] flex items-center justify-center hover:bg-[#FECACA] transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Low stock */}
          <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F4F4F8]">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm text-[#111118]">Low Stock</h3>
                <span className="text-xs bg-[#FEF3C7] text-[#92400E] px-1.5 py-0.5 rounded-full font-bold">5</span>
              </div>
              <button onClick={() => onNavigate('inventory')} className="text-xs font-semibold text-[#E8450A]">Manage →</button>
            </div>
            <div className="divide-y divide-[#F4F4F8]">
              {displayLowStockProducts.map(p => (
                <div key={p.id} className="px-4 py-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#111118] truncate">{p.title}</p>
                    <p className="text-[11px] text-[#9B9BB8] font-mono">{p.vendorId}</p>
                  </div>
                  <span className={`font-mono font-bold text-sm px-2 py-0.5 rounded-lg ${p.stock < 10 ? 'bg-[#FEE2E2] text-[#E11D48]' : 'bg-[#FEF3C7] text-[#D97706]'}`}>
                    {p.stock}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pending payouts */}
          <div className="bg-[#0F0F18] rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-[#5B5B72] uppercase tracking-widest">Pending Payouts</p>
            <p className="font-mono font-black text-3xl text-white">$241,800</p>
            <p className="text-xs text-[#5B5B72]">
              {dashboard ? `across ${displayPendingVendors.length} vendors · Live from backend` : 'across 28 vendors · Next batch Jul 28'}
            </p>
            <button onClick={() => onNavigate('finance')} className="w-full py-2 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07] transition-colors">
              Process Payouts
            </button>
          </div>
        </div>
      </div>

      {/* Orders by status bar chart */}
      <div className="bg-white rounded-xl border border-[#E2E2EC] p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-semibold text-[#111118]">Orders by Volume</h3>
            <p className="text-xs text-[#9B9BB8] mt-0.5">Weekly order count breakdown</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={displaySales.slice(-8)} margin={{ top: 0, right: 10, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F4F4F8" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#9B9BB8' }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#fff', border: '1px solid #E2E2EC', borderRadius: '10px', fontSize: 12 }}
              cursor={{ fill: '#F4F4F8' }}
            />
            <Bar dataKey="orders" fill="#E8450A" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
