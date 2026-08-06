import { Fragment, useEffect, useMemo, useState } from 'react'
import type { AdminSection } from '../adminData'
import { useSession } from '@/state/session-store'
import { useCatalog } from '@/state/catalog-store'
import OrderDetailsModal from '../components/OrderDetailsModal'
import CreateOrderModal from '../components/CreateOrderModal'
import {
  createAdminOrder,
  deleteAdminOrder,
  listAdminOrders,
  updateAdminOrder,
  type AdminOrder,
} from '@/api/admin'

type Props = { onNavigate: (s: AdminSection) => void }

const STATUS: Record<string, { label: string; cls: string }> = {
  delivered: { label: 'Delivered', cls: 'bg-[#D1FAE5] text-[#065F46]' },
  shipped: { label: 'Shipped', cls: 'bg-[#DBEAFE] text-[#1E40AF]' },
  processing: { label: 'Processing', cls: 'bg-[#FEF3C7] text-[#92400E]' },
  pending: { label: 'Pending', cls: 'bg-[#F4F4F8] text-[#5B5B72]' },
  cancelled: { label: 'Cancelled', cls: 'bg-[#FEE2E2] text-[#991B1B]' },
  refund_pending: { label: 'Refund Pending', cls: 'bg-[#FEF3C7] text-[#92400E]' },
}

const PAYMENT: Record<string, string> = {
  Stripe: 'bg-[#EEF2FF] text-[#4338CA]',
  PayPal: 'bg-[#ECFDF5] text-[#065F46]',
  COD: 'bg-[#F4F4F8] text-[#5B5B72]',
  'Bank Transfer': 'bg-[#EFF6FF] text-[#1E40AF]',
}

export default function OrdersAdmin({ onNavigate: _ }: Props) {
  const session = useSession()
  const { orders: catalogOrders } = useCatalog()

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [paymentFilter, setPaymentFilter] = useState('all')
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  const [items, setItems] = useState<AdminOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)

  // Modals
  const [inspectOrder, setInspectOrder] = useState<AdminOrder | null>(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  // Tracking numbers map
  const [trackingMap, setTrackingMap] = useState<Record<string, string>>({})

  useEffect(() => {
    let cancelled = false

    void (async () => {
      setLoading(true)
      if (session.token) {
        const response = await listAdminOrders(session.token, { q: search || undefined, status: statusFilter === 'all' ? undefined : statusFilter, limit: 100 })
        if (!cancelled && response.success && response.data.length > 0) {
          setItems(response.data)
          setError(null)
          setLoading(false)
          return
        }
      }

      // Fallback from catalog orders or mock list
      if (!cancelled) {
        if (catalogOrders.length > 0) {
          const mapped: AdminOrder[] = catalogOrders.map(o => ({
            id: o.id,
            customer: o.customer,
            vendor: o.vendor,
            product: o.product,
            amount: o.amount,
            status: o.status.toLowerCase(),
            payment: o.payment,
            date: o.date,
            items: o.items,
          }))
          setItems(mapped)
        } else {
          setItems([
            { id: 'ORD-98214', customer: 'Sarah Johnson', vendor: 'SoundVault', product: 'Sony WH-1000XM5 Wireless Headphones', amount: 369.98, status: 'delivered', payment: 'Stripe', date: '2026-08-02', items: 2 },
            { id: 'ORD-97812', customer: 'James Wilson', vendor: 'SneakerHead', product: 'Nike Air Max 270 Sneakers', amount: 129.50, status: 'shipped', payment: 'COD', date: '2026-07-28', items: 1, trackingNumber: 'TRK-992018' },
            { id: 'ORD-96501', customer: 'Priya Sharma', vendor: 'HomeCraft', product: 'Minimalist Ceramic Tea Set', amount: 89.00, status: 'processing', payment: 'Bank Transfer', date: '2026-07-14', items: 1 },
            { id: 'ORD-95400', customer: 'Ahmed Raza', vendor: 'iZone Official', product: 'MacBook Air M3 13"', amount: 1099.00, status: 'pending', payment: 'PayPal', date: '2026-07-10', items: 1 },
          ])
        }
        setError(null)
        setLoading(false)
      }
    })()

    return () => { cancelled = true }
  }, [session.token, search, statusFilter, catalogOrders])

  const filtered = useMemo(() => {
    return items.filter(order => {
      const matchSearch =
        !search ||
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.vendor.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'all' || order.status === statusFilter
      const matchPayment = paymentFilter === 'all' || order.payment === paymentFilter
      return matchSearch && matchStatus && matchPayment
    })
  }, [items, search, statusFilter, paymentFilter])

  // KPI calculations
  const kpis = useMemo(() => {
    const totalRev = items.reduce((s, o) => o.status !== 'cancelled' ? s + o.amount : s, 0)
    const processing = items.filter(o => o.status === 'processing' || o.status === 'pending').length
    const shipped = items.filter(o => o.status === 'shipped').length
    const delivered = items.filter(o => o.status === 'delivered').length
    return { totalRev, processing, shipped, delivered, count: items.length }
  }, [items])

  const orderCounts = Object.entries(STATUS).map(([key, s]) => ({
    key,
    label: s.label,
    count: items.filter(order => order.status === key).length,
  }))

  const refresh = async () => {
    if (!session.token) return
    const response = await listAdminOrders(session.token, { q: search || undefined, status: statusFilter === 'all' ? undefined : statusFilter, limit: 100 })
    if (response.success) {
      setItems(response.data)
    }
  }

  const handleAdvanceStatus = async (order: AdminOrder, nextStatusOverride?: string) => {
    setBusyId(order.id)

    const nextStatus = nextStatusOverride ?? (
      order.status === 'pending'
        ? 'PROCESSING'
        : order.status === 'processing'
          ? 'SHIPPED'
          : order.status === 'shipped'
            ? 'DELIVERED'
            : 'PROCESSING'
    )

    if (session.token) {
      try {
        await updateAdminOrder(session.token, order.id, { status: nextStatus as unknown as 'PENDING' })
      } catch { /* dev fallback */ }
    }

    setItems(prev => prev.map(o => o.id === order.id ? { ...o, status: nextStatus.toLowerCase() } : o))
    setBusyId(null)
  }

  const handleCancel = async (order: AdminOrder) => {
    setBusyId(order.id)
    if (session.token) {
      try {
        await deleteAdminOrder(session.token, order.id)
      } catch { /* dev fallback */ }
    }
    setItems(prev => prev.map(o => o.id === order.id ? { ...o, status: 'cancelled' } : o))
    setBusyId(null)
  }

  const handleCreateOrder = async (orderData: Partial<AdminOrder>) => {
    const newOrder: AdminOrder = {
      id: orderData.id ?? `ORD-${Date.now().toString().slice(-5)}`,
      customer: orderData.customer ?? 'Walk-in Customer',
      vendor: orderData.vendor ?? 'Marketplace',
      product: orderData.product ?? 'Standard Order',
      amount: orderData.amount ?? 99.99,
      status: orderData.status ?? 'processing',
      payment: orderData.payment ?? 'Stripe',
      date: orderData.date ?? new Date().toISOString().slice(0, 10),
      items: orderData.items ?? 1,
      customerDetails: orderData.customerDetails,
    }

    if (session.token) {
      try {
        await createAdminOrder(session.token, {
          customerName: newOrder.customer,
          customerEmail: newOrder.customerDetails?.email ?? '',
          vendorName: newOrder.vendor,
          productTitle: newOrder.product,
          amount: newOrder.amount,
          paymentMethod: newOrder.payment,
          status: newOrder.status,
          itemsCount: newOrder.items,
        })
      } catch { /* fallback */ }
    }

    setItems(prev => [newOrder, ...prev])
  }

  const handleExportCSV = () => {
    const headers = 'Order ID,Customer,Vendor,Product,Amount,Payment Method,Status,Date\n'
    const rows = filtered.map(o => `"${o.id}","${o.customer}","${o.vendor}","${o.product}",${o.amount},"${o.payment}","${o.status}","${o.date}"`).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `orders-report-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  return (
    <div className="space-y-5 p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Orders & Fulfillment</h1>
          <p className="mt-0.5 text-sm text-[#6B6B82]">{kpis.count} total orders processed</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExportCSV}
            className="rounded-xl border border-[#E2E2EC] px-4 py-2 text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Export CSV
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="rounded-xl bg-[#E8450A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            + Create Order
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Gross Volume', value: `$${kpis.totalRev.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, color: 'text-[#111118]' },
          { label: 'Processing Queue', value: kpis.processing.toString(), color: 'text-[#D97706]' },
          { label: 'Shipped / In Transit', value: kpis.shipped.toString(), color: 'text-[#1E40AF]' },
          { label: 'Delivered Successfully', value: kpis.delivered.toString(), color: 'text-[#059669]' },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm">
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
            <p className={`font-mono font-black text-2xl mt-1.5 ${k.color}`}>{k.value}</p>
          </div>
        ))}
      </div>

      {/* Status Chips Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scroll-container">
        <button
          onClick={() => setStatusFilter('all')}
          className={`flex-shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${statusFilter === 'all' ? 'border-[#0F0F18] bg-[#0F0F18] text-white' : 'border-[#E2E2EC] bg-white text-[#6B6B82] hover:border-[#9B9BB8]'}`}
        >
          All Orders
          <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-bold ${statusFilter === 'all' ? 'bg-white/20 text-white' : 'bg-[#F4F4F8] text-[#6B6B82]'}`}>
            {items.length}
          </span>
        </button>
        {orderCounts.filter(c => c.count > 0).map(c => (
          <button
            key={c.key}
            onClick={() => setStatusFilter(c.key)}
            className={`flex-shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${statusFilter === c.key ? 'border-[#0F0F18] bg-[#0F0F18] text-white' : 'border-[#E2E2EC] bg-white text-[#6B6B82] hover:border-[#9B9BB8]'}`}
          >
            {c.label}
            <span className={`ml-2 rounded-full px-1.5 py-0.5 text-xs font-bold ${statusFilter === c.key ? 'bg-white/20 text-white' : 'bg-[#F4F4F8] text-[#6B6B82]'}`}>
              {c.count}
            </span>
          </button>
        ))}
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#E2E2EC] bg-white p-4 shadow-sm">
        <div className="relative flex-1 min-w-[200px]">
          <svg className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search order ID, customer, vendor, product..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="h-10 w-full rounded-xl border border-[#E2E2EC] bg-[#F4F4F8] pl-10 pr-4 text-sm outline-none placeholder:text-[#9B9BB8] focus:border-[#E8450A]"
          />
        </div>
        <select
          value={paymentFilter}
          onChange={e => setPaymentFilter(e.target.value)}
          className="h-10 rounded-xl border border-[#E2E2EC] bg-[#F4F4F8] px-3 text-sm text-[#111118] outline-none"
        >
          <option value="all">All Payments</option>
          <option value="Stripe">Stripe Card</option>
          <option value="PayPal">PayPal</option>
          <option value="COD">Cash on Delivery</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
      </div>

      {error && (
        <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]">{error}</div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-[#E2E2EC] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F4F4F8] bg-[#F9F9FC] text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">
                <th className="w-10 px-4 py-3.5 text-center">#</th>
                <th className="px-4 py-3.5 text-left">Order ID</th>
                <th className="px-4 py-3.5 text-left">Customer</th>
                <th className="px-4 py-3.5 text-left">Vendor</th>
                <th className="px-4 py-3.5 text-left">Purchased Items</th>
                <th className="px-4 py-3.5 text-left">Amount</th>
                <th className="px-4 py-3.5 text-left">Payment</th>
                <th className="px-4 py-3.5 text-left">Status</th>
                <th className="px-4 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {loading ? (
                <tr>
                  <td colSpan={9} className="px-5 py-12 text-center text-sm text-[#6B6B82]">
                    Loading orders...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-5 py-12 text-center text-sm text-[#6B6B82]">
                    No orders match your filter criteria.
                  </td>
                </tr>
              ) : filtered.map(order => (
                <Fragment key={order.id}>
                  <tr
                    className={`cursor-pointer transition-colors hover:bg-[#F9F9FC] ${expandedOrder === order.id ? 'bg-[#FFF7F5]' : ''}`}
                    onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                  >
                    <td className="px-4 py-3.5 text-center text-xs text-[#9B9BB8]" onClick={e => e.stopPropagation()}>
                      {expandedOrder === order.id ? '▼' : '▶'}
                    </td>
                    <td className="px-4 py-3.5">
                      <div>
                        <p className="font-mono text-xs font-bold text-[#E8450A]">{order.id}</p>
                        <p className="mt-0.5 text-[11px] text-[#9B9BB8]">{order.date}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-xs font-bold text-white">
                          {order.customer.charAt(0)}
                        </div>
                        <p className="max-w-[120px] truncate text-xs font-medium text-[#111118]">{order.customer}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="text-xs text-[#6B6B82] font-semibold">{order.vendor}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="max-w-[160px] truncate text-xs font-medium text-[#111118]">{order.product}</p>
                      <p className="text-[11px] text-[#9B9BB8]">{order.items} item{order.items > 1 ? 's' : ''}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-mono font-bold text-[#111118]">${order.amount.toFixed(2)}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${PAYMENT[order.payment] ?? 'bg-[#F4F4F8] text-[#6B6B82]'}`}>
                        {order.payment}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${STATUS[order.status]?.cls ?? 'bg-[#F4F4F8] text-[#6B6B82]'}`}>
                        {STATUS[order.status]?.label ?? order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right" onClick={e => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setInspectOrder(order)}
                          className="px-2.5 py-1 rounded-lg border border-[#E2E2EC] bg-white text-xs font-semibold text-[#111118] hover:bg-[#F4F4F8] transition-colors"
                          title="Inspect Order & Invoice"
                        >
                          View Details
                        </button>
                        {order.status !== 'delivered' && order.status !== 'cancelled' && (
                          <button
                            disabled={busyId === order.id}
                            onClick={() => void handleAdvanceStatus(order)}
                            className="rounded-lg bg-[#DBEAFE] px-2.5 py-1 text-xs font-semibold text-[#1E40AF] hover:bg-[#BFDBFE] transition-colors"
                          >
                            Advance
                          </button>
                        )}
                        {order.status !== 'cancelled' && (
                          <button
                            disabled={busyId === order.id}
                            onClick={() => void handleCancel(order)}
                            className="rounded-lg bg-[#FEE2E2] px-2.5 py-1 text-xs font-semibold text-[#E11D48] hover:bg-[#FECACA] transition-colors"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>

                  {/* Inline Expanded Quick View */}
                  {expandedOrder === order.id && (
                    <tr className="bg-[#FFF7F5]">
                      <td colSpan={9} className="px-6 py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                          <div>
                            <p className="mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]">Order Status Lifecycle</p>
                            <div className="space-y-1.5">
                              {[
                                { label: 'Order Placed', done: true },
                                { label: 'Confirmed', done: ['processing', 'shipped', 'delivered'].includes(order.status) },
                                { label: 'Packed', done: ['shipped', 'delivered'].includes(order.status) },
                                { label: 'Shipped', done: ['shipped', 'delivered'].includes(order.status) },
                                { label: 'Delivered', done: order.status === 'delivered' },
                              ].map((step, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <div className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white ${step.done ? 'bg-[#059669]' : 'bg-[#E2E2EC]'}`}>
                                    {step.done ? '✓' : ''}
                                  </div>
                                  <p className={step.done ? 'font-semibold text-[#111118]' : 'text-[#9B9BB8]'}>{step.label}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]">Customer Info</p>
                            <p className="font-semibold text-[#111118]">{order.customer}</p>
                            <p className="text-[#6B6B82]">{order.customerDetails?.email ?? 'customer@example.com'}</p>
                            <p className="text-[#6B6B82] mt-0.5">{order.customerDetails?.phone ?? '+1 (555) 234-5678'}</p>
                          </div>
                          <div>
                            <p className="mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]">Fulfillment & Tracking</p>
                            <p className="font-semibold text-[#111118]">{order.product}</p>
                            <p className="text-[#6B6B82] mt-0.5">Tracking: <span className="font-mono font-bold text-[#E8450A]">{trackingMap[order.id] || order.trackingNumber || 'Pending Assignment'}</span></p>
                          </div>
                          <div>
                            <p className="mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]">Actions</p>
                            <div className="space-y-1.5">
                              <button
                                onClick={() => setInspectOrder(order)}
                                className="w-full rounded-xl bg-[#111118] text-white py-2 text-xs font-bold hover:bg-[#E8450A] transition-colors"
                              >
                                Full Inspector & Invoice
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-[#F4F4F8] px-5 py-3 text-xs text-[#9B9BB8]">
          <p>Showing {filtered.length} of {items.length} total orders</p>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[#111118]">Page 1 of 1</span>
          </div>
        </div>
      </div>

      {/* Order Details & Invoice Inspector Modal */}
      <OrderDetailsModal
        order={inspectOrder}
        onClose={() => setInspectOrder(null)}
        onUpdateStatus={async (ord, nextSt) => {
          await handleAdvanceStatus(ord, nextSt)
          setInspectOrder(prev => prev ? { ...prev, status: nextSt.toLowerCase() } : null)
        }}
        onUpdateTracking={(orderId, trk) => {
          setTrackingMap(prev => ({ ...prev, [orderId]: trk }))
          setItems(prev => prev.map(o => o.id === orderId ? { ...o, trackingNumber: trk } : o))
        }}
      />

      {/* Manual Order Creation Modal */}
      <CreateOrderModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleCreateOrder}
      />
    </div>
  )
}
