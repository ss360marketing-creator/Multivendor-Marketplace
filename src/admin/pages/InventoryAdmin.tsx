import { useState, useMemo, useEffect } from 'react'
import type { AdminSection } from '../adminData'
import { useCatalog } from '@/state/catalog-store'
import { useSession } from '@/state/session-store'
import { updateAdminProduct } from '@/api/admin'

type Props = { onNavigate: (s: AdminSection) => void }

type InventoryItem = {
  id: string
  name: string
  sku: string
  vendor: string
  category: string
  stock: number
  threshold: number
  reserved: number
  incoming: number
  warehouse: string
  status: 'out' | 'critical' | 'low' | 'ok'
}

type Warehouse = {
  id: string
  name: string
  city: string
  address: string
  capacity: string
  items: number
}

type TransferRecord = {
  id: string
  from: string
  to: string
  sku: string
  itemName: string
  quantity: number
  date: string
  status: 'Completed' | 'In Transit' | 'Pending'
}

type MovementLog = {
  id: string
  itemName: string
  sku: string
  type: 'Restock' | 'Sale Deduction' | 'Transfer' | 'Correction'
  change: string
  user: string
  date: string
}

const INITIAL_WAREHOUSES: Warehouse[] = [
  { id: 'WH-1', name: 'Main Warehouse', city: 'New York', address: '100 Logistics Way, NY 10001', capacity: '85%', items: 2841 },
  { id: 'WH-2', name: 'East Distribution', city: 'Boston', address: '45 Freight Blvd, MA 02108', capacity: '62%', items: 1248 },
  { id: 'WH-3', name: 'West Hub', city: 'Los Angeles', address: '880 Pacific Cargo Rd, CA 90001', capacity: '41%', items: 892 },
]

const INITIAL_TRANSFERS: TransferRecord[] = [
  { id: 'TR-1082', from: 'Main Warehouse', to: 'West Hub', sku: 'SNY-WH1000', itemName: 'Sony WH-1000XM5', quantity: 50, date: '2026-08-05', status: 'In Transit' },
  { id: 'TR-1079', from: 'East Distribution', to: 'Main Warehouse', sku: 'NK-AM270-9', itemName: 'Nike Air Max 270', quantity: 30, date: '2026-08-03', status: 'Completed' },
  { id: 'TR-1075', from: 'Main Warehouse', to: 'East Distribution', sku: 'APL-MBA-M3', itemName: 'MacBook Air M3 13"', quantity: 15, date: '2026-08-01', status: 'Completed' },
]

const INITIAL_MOVEMENTS: MovementLog[] = [
  { id: 'MOV-501', itemName: 'Sony WH-1000XM5', sku: 'SNY-WH1000', type: 'Restock', change: '+50 units', user: 'Admin User', date: '2026-08-05 14:32' },
  { id: 'MOV-500', itemName: 'Nike Air Max 270', sku: 'NK-AM270-9', type: 'Sale Deduction', change: '-1 unit', user: 'System (Order ORD-97812)', date: '2026-08-04 18:20' },
  { id: 'MOV-499', itemName: 'The Ordinary HA 2%', sku: 'ORD-HA-30', type: 'Correction', change: '-5 units (Damaged)', user: 'Warehouse Manager', date: '2026-08-04 11:15' },
  { id: 'MOV-498', itemName: 'MacBook Air M3 13"', sku: 'APL-MBA-M3', type: 'Transfer', change: '-15 units to WH-2', user: 'Logistics Lead', date: '2026-08-01 09:45' },
]

const STATUS_CLS: Record<string, { bg: string; label: string }> = {
  out: { bg: 'bg-[#E11D48] text-white', label: 'Out of Stock' },
  critical: { bg: 'bg-[#FEE2E2] text-[#991B1B]', label: 'Critical' },
  low: { bg: 'bg-[#FEF3C7] text-[#92400E]', label: 'Low Stock' },
  ok: { bg: 'bg-[#D1FAE5] text-[#065F46]', label: 'In Stock' },
}

export default function InventoryAdmin({ onNavigate: _ }: Props) {
  const { products } = useCatalog()
  const session = useSession()

  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState<'stock' | 'warehouses' | 'transfers' | 'movements'>('stock')

  const [warehousesList, setWarehousesList] = useState<Warehouse[]>(INITIAL_WAREHOUSES)
  const [transfersList, setTransfersList] = useState<TransferRecord[]>(INITIAL_TRANSFERS)
  const [movementsList, setMovementsList] = useState<MovementLog[]>(INITIAL_MOVEMENTS)

  // Local overrides for stock/threshold
  const [localOverrides, setLocalOverrides] = useState<Record<string, { stock: number; threshold: number; incoming: number; warehouse: string }>>({})

  // Modals
  const [restockItem, setRestockItem] = useState<InventoryItem | null>(null)
  const [restockQty, setRestockQty] = useState('50')
  const [restockThreshold, setRestockThreshold] = useState('10')
  const [restockWh, setRestockWh] = useState('WH-1')

  const [showTransferModal, setShowTransferModal] = useState(false)
  const [transferForm, setTransferForm] = useState({ from: 'WH-1', to: 'WH-2', sku: '', qty: '10' })

  const [showAddWhModal, setShowAddWhModal] = useState(false)
  const [whForm, setWhForm] = useState({ name: '', city: '', address: '' })

  const [showPOModal, setShowPOModal] = useState(false)
  const [poForm, setPoForm] = useState({ supplier: 'SoundVault', sku: '', qty: '100', expectedDate: '2026-08-20' })

  // Compute merged inventory items from products catalog
  const inventoryItems = useMemo<InventoryItem[]>(() => {
    return products.map((p, idx) => {
      const override = localOverrides[p.id]
      const currentStock = override?.stock ?? p.stock
      const threshold = override?.threshold ?? (p.stock < 10 ? 15 : 10)
      const incoming = override?.incoming ?? (p.stock === 0 ? 30 : idx % 3 === 0 ? 50 : 0)
      const wh = override?.warehouse ?? (idx % 3 === 0 ? 'WH-1' : idx % 3 === 1 ? 'WH-2' : 'WH-3')

      let status: InventoryItem['status'] = 'ok'
      if (currentStock === 0) status = 'out'
      else if (currentStock <= 3) status = 'critical'
      else if (currentStock <= threshold) status = 'low'

      return {
        id: p.id,
        name: p.title,
        sku: `SKU-${p.id.slice(0, 6).toUpperCase()}`,
        vendor: p.vendor,
        category: p.category,
        stock: currentStock,
        threshold,
        reserved: Math.min(currentStock, Math.floor(currentStock * 0.15)),
        incoming,
        warehouse: wh,
        status,
      }
    })
  }, [products, localOverrides])

  const filtered = useMemo(() => inventoryItems.filter(item => {
    const matchStatus = filter === 'all' || item.status === filter
    const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.sku.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  }), [inventoryItems, filter, search])

  const counts = useMemo(() => ({
    out: inventoryItems.filter(i => i.status === 'out').length,
    critical: inventoryItems.filter(i => i.status === 'critical').length,
    low: inventoryItems.filter(i => i.status === 'low').length,
    ok: inventoryItems.filter(i => i.status === 'ok').length,
    totalStock: inventoryItems.reduce((s, i) => s + i.stock, 0),
    incomingTotal: inventoryItems.reduce((s, i) => s + i.incoming, 0),
  }), [inventoryItems])

  const handleRestockSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!restockItem) return

    const addQty = parseInt(restockQty) || 0
    const newStock = restockItem.stock + addQty
    const newThreshold = parseInt(restockThreshold) || restockItem.threshold

    // Update local override
    setLocalOverrides(prev => ({
      ...prev,
      [restockItem.id]: {
        stock: newStock,
        threshold: newThreshold,
        incoming: Math.max(0, restockItem.incoming - addQty),
        warehouse: restockWh,
      },
    }))

    // Add to movement log
    setMovementsList(prev => [
      {
        id: `MOV-${Date.now().toString().slice(-3)}`,
        itemName: restockItem.name,
        sku: restockItem.sku,
        type: 'Restock',
        change: `+${addQty} units`,
        user: 'Admin User',
        date: new Date().toISOString().replace('T', ' ').slice(0, 16),
      },
      ...prev,
    ])

    // Update backend API if session token is active
    if (session.token) {
      try {
        await updateAdminProduct(session.token, restockItem.id, {
          stockQuantity: newStock,
          lowStockLimit: newThreshold,
        })
      } catch {
        // Fallback for dev mode
      }
    }

    setRestockItem(null)
  }

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!transferForm.sku || !transferForm.qty) return

    const targetItem = inventoryItems.find(i => i.sku.toLowerCase() === transferForm.sku.toLowerCase() || i.name.toLowerCase().includes(transferForm.sku.toLowerCase()))
    const itemName = targetItem ? targetItem.name : transferForm.sku

    const newRecord: TransferRecord = {
      id: `TR-${Math.floor(1000 + Math.random() * 9000)}`,
      from: warehousesList.find(w => w.id === transferForm.from)?.name || transferForm.from,
      to: warehousesList.find(w => w.id === transferForm.to)?.name || transferForm.to,
      sku: transferForm.sku.toUpperCase(),
      itemName,
      quantity: parseInt(transferForm.qty) || 10,
      date: new Date().toISOString().slice(0, 10),
      status: 'In Transit',
    }

    setTransfersList(prev => [newRecord, ...prev])
    setShowTransferModal(false)
    setTransferForm({ from: 'WH-1', to: 'WH-2', sku: '', qty: '10' })
  }

  const handleAddWhSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!whForm.name || !whForm.city) return

    const newWh: Warehouse = {
      id: `WH-${warehousesList.length + 1}`,
      name: whForm.name,
      city: whForm.city,
      address: whForm.address || `${whForm.city} Logistics Center`,
      capacity: '15%',
      items: 0,
    }

    setWarehousesList(prev => [...prev, newWh])
    setShowAddWhModal(false)
    setWhForm({ name: '', city: '', address: '' })
  }

  const handlePOSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPOModal(false)
    alert(`Purchase Order for ${poForm.qty} units from ${poForm.supplier} created successfully!`)
  }

  const handleExportCSV = () => {
    const headers = 'ID,Name,SKU,Vendor,Category,In Stock,Reserved,Incoming,Warehouse,Status\n'
    const rows = inventoryItems.map(i => `"${i.id}","${i.name}","${i.sku}","${i.vendor}","${i.category}",${i.stock},${i.reserved},${i.incoming},"${i.warehouse}","${i.status}"`).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `inventory-report-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Inventory & Stock Control</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Real-time stock levels, multi-warehouse transfers, and PO tracking</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Export CSV
          </button>
          <button
            onClick={() => setShowTransferModal(true)}
            className="px-4 py-2 bg-[#111118] text-white rounded-xl text-sm font-semibold hover:bg-[#E8450A] transition-colors"
          >
            + Stock Transfer
          </button>
          <button
            onClick={() => setShowPOModal(true)}
            className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20"
          >
            + Purchase Order
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      {(counts.out > 0 || counts.critical > 0) && (
        <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-2xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[#991B1B]">
                {counts.out} items Out of Stock · {counts.critical} Critical items needing immediate restock
              </p>
              <p className="text-xs text-[#B91C1C] mt-0.5">Automated re-order recommendations generated based on 30-day velocity.</p>
            </div>
          </div>
          <button
            onClick={() => setShowPOModal(true)}
            className="px-4 py-2 bg-[#E11D48] text-white text-xs font-bold rounded-xl hover:bg-[#BE123C] transition-colors flex-shrink-0"
          >
            Generate Bulk PO →
          </button>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Catalog Units', value: counts.totalStock.toLocaleString(), color: 'text-[#111118]', sub: `${inventoryItems.length} active SKUs` },
          { label: 'Out of Stock SKUs', value: counts.out.toString(), color: 'text-[#E11D48]', sub: 'Requires PO restock' },
          { label: 'Low / Critical Stock', value: (counts.critical + counts.low).toString(), color: 'text-[#D97706]', sub: 'Below threshold limit' },
          { label: 'Incoming Inventory', value: counts.incomingTotal.toLocaleString(), color: 'text-[#059669]', sub: 'Expected in 14 days' },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm">
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{k.label}</p>
            <p className={`font-mono font-black text-2xl mt-1.5 ${k.color}`}>{k.value}</p>
            <p className="text-xs text-[#6B6B82] mt-1">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E2E2EC] text-sm font-semibold">
        {[
          { key: 'stock', label: 'Stock Levels & Alerts' },
          { key: 'warehouses', label: `Warehouses (${warehousesList.length})` },
          { key: 'transfers', label: `Stock Transfers (${transfersList.length})` },
          { key: 'movements', label: 'Audit Movements Log' },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as typeof tab)}
            className={`px-4 py-3 border-b-2 transition-all -mb-px ${
              tab === t.key ? 'border-[#E8450A] text-[#E8450A] font-bold' : 'border-transparent text-[#9B9BB8] hover:text-[#111118]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── TAB 1: STOCK LEVELS ── */}
      {tab === 'stock' && (
        <div className="space-y-4">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#E2E2EC]">
            <div className="relative flex-1 min-w-[220px]">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search SKU or product title..."
                className="w-full h-10 pl-10 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]"
              />
            </div>

            <div className="flex items-center gap-1 bg-[#F4F4F8] rounded-xl p-1">
              {[
                { key: 'all', label: 'All SKUs' },
                { key: 'out', label: `Out (${counts.out})` },
                { key: 'critical', label: `Critical (${counts.critical})` },
                { key: 'low', label: `Low (${counts.low})` },
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filter === f.key ? 'bg-white shadow-sm text-[#111118]' : 'text-[#9B9BB8] hover:text-[#6B6B82]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Table */}
          <div className="bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">
                    <th className="text-left px-5 py-3.5">Product Item</th>
                    <th className="text-left px-4 py-3.5">SKU Code</th>
                    <th className="text-left px-4 py-3.5">Vendor</th>
                    <th className="text-left px-4 py-3.5">In Stock</th>
                    <th className="text-left px-4 py-3.5">Reserved</th>
                    <th className="text-left px-4 py-3.5">Incoming</th>
                    <th className="text-left px-4 py-3.5">Warehouse</th>
                    <th className="text-left px-4 py-3.5">Status</th>
                    <th className="text-right px-5 py-3.5">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F4F8]">
                  {filtered.map(item => (
                    <tr key={item.id} className="hover:bg-[#F9F9FC] transition-colors">
                      <td className="px-5 py-3.5">
                        <p className="font-semibold text-[#111118] leading-snug line-clamp-1">{item.name}</p>
                        <p className="text-xs text-[#9B9BB8] mt-0.5">{item.category}</p>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-xs text-[#6B6B82]">{item.sku}</td>
                      <td className="px-4 py-3.5 text-xs text-[#6B6B82]">{item.vendor}</td>
                      <td className="px-4 py-3.5">
                        <div>
                          <span className={`font-mono font-black text-sm ${item.stock === 0 ? 'text-[#E11D48]' : item.stock <= item.threshold ? 'text-[#D97706]' : 'text-[#111118]'}`}>
                            {item.stock} units
                          </span>
                          <div className="w-24 h-1.5 bg-[#F4F4F8] rounded-full mt-1 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${item.stock === 0 ? 'bg-[#E11D48]' : item.stock <= item.threshold ? 'bg-[#D97706]' : 'bg-[#059669]'}`}
                              style={{ width: `${Math.min(100, (item.stock / Math.max(30, item.threshold * 2.5)) * 100)}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-sm text-[#6B6B82]">{item.reserved}</td>
                      <td className="px-4 py-3.5">
                        <span className={`font-mono text-sm font-semibold ${item.incoming > 0 ? 'text-[#059669]' : 'text-[#9B9BB8]'}`}>
                          {item.incoming > 0 ? `+${item.incoming}` : '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="text-xs bg-[#F4F4F8] border border-[#E2E2EC] text-[#6B6B82] px-2.5 py-1 rounded-lg font-semibold">
                          {item.warehouse}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${STATUS_CLS[item.status].bg}`}>
                          {STATUS_CLS[item.status].label}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <button
                          onClick={() => {
                            setRestockItem(item)
                            setRestockQty('50')
                            setRestockThreshold(item.threshold.toString())
                            setRestockWh(item.warehouse)
                          }}
                          className="px-3 py-1.5 bg-[#E8450A] text-white text-xs font-bold rounded-xl hover:bg-[#C93A07] transition-colors"
                        >
                          Restock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: WAREHOUSES ── */}
      {tab === 'warehouses' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {warehousesList.map(wh => {
            const pct = parseInt(wh.capacity)
            return (
              <div key={wh.id} className="bg-white rounded-2xl border border-[#E2E2EC] p-6 space-y-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#F4F4F8] text-[#6B6B82] rounded-md">{wh.id}</span>
                      <p className="font-bold text-base text-[#111118]">{wh.name}</p>
                    </div>
                    <p className="text-xs text-[#9B9BB8] mt-1">📍 {wh.address}</p>
                  </div>
                  <span className="text-xs bg-[#D1FAE5] text-[#065F46] px-2.5 py-0.5 rounded-full font-bold">Active</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                    <span className="text-[#6B6B82]">Storage Capacity Used</span>
                    <span className="font-mono font-bold text-[#111118]">{wh.capacity}</span>
                  </div>
                  <div className="h-3 bg-[#F4F4F8] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${pct > 80 ? 'bg-[#E11D48]' : pct > 60 ? 'bg-[#D97706]' : 'bg-[#059669]'}`} style={{ width: wh.capacity }} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl p-3 text-center">
                    <p className="font-mono font-black text-xl text-[#111118]">{wh.items.toLocaleString()}</p>
                    <p className="text-[10px] font-semibold text-[#9B9BB8] uppercase mt-0.5">Total Items</p>
                  </div>
                  <div className="bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl p-3 text-center">
                    <p className="font-mono font-black text-xl text-[#D97706]">{Math.floor(wh.items * 0.04)}</p>
                    <p className="text-[10px] font-semibold text-[#9B9BB8] uppercase mt-0.5">Low Stock Alert</p>
                  </div>
                </div>

                <button
                  onClick={() => { setTab('transfers'); setTransferForm(tf => ({ ...tf, from: wh.id })) }}
                  className="w-full py-2.5 border border-[#E2E2EC] rounded-xl text-xs font-semibold text-[#111118] hover:bg-[#F4F4F8] transition-colors"
                >
                  Initiate Stock Transfer
                </button>
              </div>
            )
          })}

          <button
            onClick={() => setShowAddWhModal(true)}
            className="bg-white rounded-2xl border-2 border-dashed border-[#E2E2EC] p-6 flex flex-col items-center justify-center gap-3 hover:border-[#E8450A] text-[#9B9BB8] hover:text-[#E8450A] transition-all group min-h-[260px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#F4F4F8] group-hover:bg-[#FFF7F5] flex items-center justify-center transition-colors">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
            <p className="text-sm font-bold text-[#111118]">Add Warehouse Facility</p>
            <p className="text-xs text-[#9B9BB8] text-center max-w-[200px]">Register a new fulfillment center or regional hub.</p>
          </button>
        </div>
      )}

      {/* ── TAB 3: TRANSFERS ── */}
      {tab === 'transfers' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#111118]">Stock Transfers Between Facilities</h2>
            <button
              onClick={() => setShowTransferModal(true)}
              className="px-4 py-2 bg-[#E8450A] text-white text-xs font-bold rounded-xl hover:bg-[#C93A07] transition-colors"
            >
              + Create Transfer Order
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">
                  <th className="text-left px-5 py-3.5">Transfer ID</th>
                  <th className="text-left px-4 py-3.5">Item Name & SKU</th>
                  <th className="text-left px-4 py-3.5">Source Facility</th>
                  <th className="text-left px-4 py-3.5">Destination</th>
                  <th className="text-left px-4 py-3.5">Qty</th>
                  <th className="text-left px-4 py-3.5">Date</th>
                  <th className="text-left px-4 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {transfersList.map(t => (
                  <tr key={t.id} className="hover:bg-[#F9F9FC]">
                    <td className="px-5 py-3.5 font-mono font-bold text-xs text-[#111118]">{t.id}</td>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-[#111118]">{t.itemName}</p>
                      <p className="font-mono text-xs text-[#9B9BB8]">{t.sku}</p>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#6B6B82]">{t.from}</td>
                    <td className="px-4 py-3.5 text-xs font-semibold text-[#111118]">{t.to}</td>
                    <td className="px-4 py-3.5 font-mono font-bold text-sm text-[#E8450A]">{t.quantity} units</td>
                    <td className="px-4 py-3.5 text-xs text-[#6B6B82]">{t.date}</td>
                    <td className="px-4 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        t.status === 'Completed' ? 'bg-[#D1FAE5] text-[#065F46]' :
                        t.status === 'In Transit' ? 'bg-[#EEF2FF] text-[#4338CA]' : 'bg-[#FEF3C7] text-[#92400E]'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── TAB 4: AUDIT MOVEMENTS LOG ── */}
      {tab === 'movements' && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[#111118]">Recent Stock Audit Log</h2>
          <div className="bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">
                  <th className="text-left px-5 py-3.5">Log ID</th>
                  <th className="text-left px-4 py-3.5">Item & SKU</th>
                  <th className="text-left px-4 py-3.5">Type</th>
                  <th className="text-left px-4 py-3.5">Stock Adjustment</th>
                  <th className="text-left px-4 py-3.5">User / Trigger</th>
                  <th className="text-left px-4 py-3.5">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {movementsList.map(m => (
                  <tr key={m.id} className="hover:bg-[#F9F9FC]">
                    <td className="px-5 py-3.5 font-mono font-bold text-xs text-[#9B9BB8]">{m.id}</td>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-[#111118]">{m.itemName}</p>
                      <p className="font-mono text-xs text-[#9B9BB8]">{m.sku}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-xs font-semibold bg-[#F4F4F8] text-[#111118] px-2.5 py-1 rounded-lg">
                        {m.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-mono font-bold text-sm text-[#0E0E0E]">
                      {m.change}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#6B6B82]">{m.user}</td>
                    <td className="px-4 py-3.5 text-xs text-[#9B9BB8]">{m.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── MODAL 1: RESTOCK ITEM MODAL ── */}
      {restockItem && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-[#111118]">Restock SKU Item</h3>
              <button onClick={() => setRestockItem(null)} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
            </div>

            <div className="bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-4">
              <p className="font-bold text-sm text-[#111118] line-clamp-1">{restockItem.name}</p>
              <p className="font-mono text-xs text-[#9B9BB8] mt-0.5">{restockItem.sku} · Current: <span className="font-bold text-[#E8450A]">{restockItem.stock} units</span></p>
            </div>

            <form onSubmit={handleRestockSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-[#111118] uppercase">Add Units Quantity</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={restockQty}
                  onChange={e => setRestockQty(e.target.value)}
                  className="w-full h-11 px-4 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] font-mono font-bold text-base text-[#111118] outline-none focus:border-[#E8450A]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#111118] uppercase">Low-Stock Alert Threshold</label>
                <input
                  type="number"
                  value={restockThreshold}
                  onChange={e => setRestockThreshold(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#111118] uppercase">Assigned Warehouse</label>
                <select
                  value={restockWh}
                  onChange={e => setRestockWh(e.target.value)}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                >
                  {warehousesList.map(w => (
                    <option key={w.id} value={w.id}>{w.name} ({w.city})</option>
                  ))}
                </select>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setRestockItem(null)}
                  className="flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07]"
                >
                  Confirm Restock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL 2: STOCK TRANSFER MODAL ── */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-[#111118]">Stock Transfer Request</h3>
              <button onClick={() => setShowTransferModal(false)} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
            </div>

            <form onSubmit={handleTransferSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-[#111118] uppercase">Source Facility</label>
                  <select
                    value={transferForm.from}
                    onChange={e => setTransferForm(tf => ({ ...tf, from: e.target.value }))}
                    className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none"
                  >
                    {warehousesList.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-[#111118] uppercase">Destination</label>
                  <select
                    value={transferForm.to}
                    onChange={e => setTransferForm(tf => ({ ...tf, to: e.target.value }))}
                    className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none"
                  >
                    {warehousesList.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#111118] uppercase">Target Product SKU or Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SNY-WH1000 or Sony WH-1000XM5"
                  value={transferForm.sku}
                  onChange={e => setTransferForm(tf => ({ ...tf, sku: e.target.value }))}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-[#111118] uppercase">Units Quantity to Transfer</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={transferForm.qty}
                  onChange={e => setTransferForm(tf => ({ ...tf, qty: e.target.value }))}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono font-bold text-[#111118] outline-none"
                />
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowTransferModal(false)}
                  className="flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#111118] text-white font-bold text-sm hover:bg-[#E8450A]"
                >
                  Submit Transfer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL 3: ADD WAREHOUSE MODAL ── */}
      {showAddWhModal && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-[#111118]">Add Warehouse Facility</h3>
              <button onClick={() => setShowAddWhModal(false)} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
            </div>

            <form onSubmit={handleAddWhSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-[#111118] uppercase">Facility Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. South Logistics Hub"
                  value={whForm.name}
                  onChange={e => setWhForm(w => ({ ...w, name: e.target.value }))}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm outline-none"
                />
              </div>
              <div>
                <label className="font-semibold text-[#111118] uppercase">City / Region</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Miami, FL"
                  value={whForm.city}
                  onChange={e => setWhForm(w => ({ ...w, city: e.target.value }))}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm outline-none"
                />
              </div>
              <div>
                <label className="font-semibold text-[#111118] uppercase">Street Address</label>
                <input
                  type="text"
                  placeholder="500 Cargo Rd, FL 33101"
                  value={whForm.address}
                  onChange={e => setWhForm(w => ({ ...w, address: e.target.value }))}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm outline-none"
                />
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddWhModal(false)}
                  className="flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-sm"
                >
                  Save Warehouse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL 4: PURCHASE ORDER MODAL ── */}
      {showPOModal && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-[#111118]">Create Purchase Order</h3>
              <button onClick={() => setShowPOModal(false)} className="text-[#9B9BB8] hover:text-[#111118]">✕</button>
            </div>

            <form onSubmit={handlePOSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-[#111118] uppercase">Supplier Vendor</label>
                <select
                  value={poForm.supplier}
                  onChange={e => setPoForm(p => ({ ...p, supplier: e.target.value }))}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none"
                >
                  {['SoundVault', 'TechArmor', 'SneakerHead', 'GlowUp Beauty', 'HomeCraft', 'iZone Official'].map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-semibold text-[#111118] uppercase">Target Product SKU</label>
                <input
                  type="text"
                  placeholder="e.g. SNY-WH1000"
                  value={poForm.sku}
                  onChange={e => setPoForm(p => ({ ...p, sku: e.target.value }))}
                  className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-[#111118] uppercase">Order Qty</label>
                  <input
                    type="number"
                    value={poForm.qty}
                    onChange={e => setPoForm(p => ({ ...p, qty: e.target.value }))}
                    className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono font-bold outline-none"
                  />
                </div>
                <div>
                  <label className="font-semibold text-[#111118] uppercase">Expected Date</label>
                  <input
                    type="date"
                    value={poForm.expectedDate}
                    onChange={e => setPoForm(p => ({ ...p, expectedDate: e.target.value }))}
                    className="w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowPOModal(false)}
                  className="flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-sm"
                >
                  Issue Purchase Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
