import { useEffect, useMemo, useState } from 'react'
import type { AdminSection } from '../adminData'
import { useSession } from '@/state/session-store'
import { useCatalog } from '@/state/catalog-store'
import InviteVendorModal from '../components/InviteVendorModal'
import {
  createAdminVendor,
  deleteAdminVendor,
  listAdminVendors,
  updateAdminVendor,
  type AdminVendor,
} from '@/api/admin'

type Props = { onNavigate: (s: AdminSection) => void }

const STATUS: Record<string, { label: string; cls: string }> = {
  active: { label: 'Active', cls: 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]' },
  review: { label: 'Under Review', cls: 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]' },
  pending: { label: 'Pending', cls: 'bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]' },
  suspended: { label: 'Suspended', cls: 'bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]' },
}

export default function VendorsAdmin({ onNavigate }: Props) {
  const session = useSession()
  const { vendors: catalogVendors } = useCatalog()

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [viewVendor, setViewVendor] = useState<string | null>(null)
  const [items, setItems] = useState<AdminVendor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    void (async () => {
      setLoading(true)
      if (session.token) {
        const response = await listAdminVendors(session.token, { q: search || undefined, status: statusFilter === 'all' ? undefined : statusFilter, limit: 100 })
        if (!cancelled && response.success && response.data.length > 0) {
          setItems(response.data)
          setError(null)
          setLoading(false)
          return
        }
      }

      // Fallback from catalog vendors or mock list
      if (!cancelled) {
        if (catalogVendors.length > 0) {
          const mapped: AdminVendor[] = catalogVendors.map(v => ({
            id: v.id,
            name: v.name,
            slug: v.id,
            email: `${v.name.toLowerCase().replace(/\s+/g, '')}@merchant.nexus`,
            owner: `${v.name} Owner`,
            logo: v.logo,
            cover: v.cover,
            status: 'active',
            verified: v.verified,
            rating: v.rating,
            productCount: v.productCount,
            positiveFeedback: v.positiveFeedback,
            followers: v.followers,
            responseTime: v.responseTime,
            tagline: v.tagline,
            commissionRate: 10,
          }))
          setItems(mapped)
        } else {
          setItems([
            { id: 'v1', name: 'SoundVault', slug: 'soundvault', email: 'soundvault@nexus.market', owner: 'Alex Mercer', logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format', cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop&auto=format', status: 'active', verified: true, rating: 4.9, productCount: 48, positiveFeedback: 99, followers: 1420, responseTime: '1 hr', tagline: 'Premium Audio & Sound Systems', commissionRate: 10 },
            { id: 'v2', name: 'TechArmor', slug: 'techarmor', email: 'techarmor@nexus.market', owner: 'David Vance', logo: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop&auto=format', cover: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&h=400&fit=crop&auto=format', status: 'active', verified: true, rating: 4.8, productCount: 32, positiveFeedback: 97, followers: 890, responseTime: '2 hrs', tagline: 'Rugged Protection Devices', commissionRate: 8.5 },
            { id: 'v3', name: 'SneakerHead', slug: 'sneakerhead', email: 'sneakers@nexus.market', owner: 'Marcus Sterling', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&auto=format', cover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=400&fit=crop&auto=format', status: 'review', verified: false, rating: 4.7, productCount: 19, positiveFeedback: 94, followers: 650, responseTime: '3 hrs', tagline: 'Exclusive Footwear Drops', commissionRate: 12 },
          ])
        }
        setError(null)
        setLoading(false)
      }
    })()

    return () => { cancelled = true }
  }, [session.token, search, statusFilter, catalogVendors])

  const filtered = useMemo(() => {
    return items.filter(vendor => {
      const matchSearch =
        !search ||
        vendor.name.toLowerCase().includes(search.toLowerCase()) ||
        vendor.email.toLowerCase().includes(search.toLowerCase()) ||
        vendor.owner.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'all' || vendor.status === statusFilter
      return matchSearch && matchStatus
    })
  }, [items, search, statusFilter])

  const selectedVendor = items.find(v => v.id === viewVendor)

  const handleApprove = async (vendor: AdminVendor) => {
    setBusyId(vendor.id)
    if (session.token) {
      try {
        await updateAdminVendor(session.token, vendor.id, { status: 'ACTIVE', verified: true })
      } catch { /* dev fallback */ }
    }
    setItems(prev => prev.map(v => v.id === vendor.id ? { ...v, status: 'active', verified: true } : v))
    setFeedback(`Approved merchant store ${vendor.name}!`)
    setTimeout(() => setFeedback(null), 3000)
    setBusyId(null)
  }

  const handleSuspend = async (vendor: AdminVendor) => {
    setBusyId(vendor.id)
    if (session.token) {
      try {
        await deleteAdminVendor(session.token, vendor.id)
      } catch { /* dev fallback */ }
    }
    setItems(prev => prev.map(v => v.id === vendor.id ? { ...v, status: 'suspended', verified: false } : v))
    setFeedback(`Suspended merchant store ${vendor.name}`)
    setTimeout(() => setFeedback(null), 3000)
    setBusyId(null)
  }

  const handleAddVendor = async (vendorData: Partial<AdminVendor>) => {
    const newVendor: AdminVendor = {
      id: vendorData.id ?? `v_${Date.now()}`,
      name: vendorData.name ?? 'New Merchant',
      slug: vendorData.slug ?? 'new-merchant',
      email: vendorData.email ?? 'merchant@nexus.market',
      owner: vendorData.owner ?? 'Store Owner',
      logo: vendorData.logo ?? '',
      cover: vendorData.cover ?? '',
      status: vendorData.status ?? 'active',
      verified: vendorData.verified ?? true,
      rating: vendorData.rating ?? 5.0,
      productCount: vendorData.productCount ?? 0,
      positiveFeedback: vendorData.positiveFeedback ?? 100,
      followers: vendorData.followers ?? 0,
      responseTime: vendorData.responseTime ?? '1 hr',
      tagline: vendorData.tagline ?? 'Verified Merchant',
      commissionRate: vendorData.commissionRate ?? 10,
    }

    if (session.token) {
      try {
        await createAdminVendor(session.token, {
          storeName: newVendor.name,
          email: newVendor.email,
          fullName: newVendor.owner,
          tagline: newVendor.tagline,
          commissionRate: newVendor.commissionRate,
        })
      } catch { /* fallback */ }
    }

    setItems(prev => [newVendor, ...prev])
    setFeedback(`Merchant ${newVendor.name} added successfully!`)
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleExportCSV = () => {
    const headers = 'Vendor ID,Store Name,Owner,Email,Status,Verified,Rating,Products,Commission (%)\n'
    const rows = filtered.map(v => `"${v.id}","${v.name}","${v.owner}","${v.email}","${v.status}",${v.verified},${v.rating},${v.productCount},${v.commissionRate}`).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `vendors-report-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  return (
    <div className="space-y-5 p-6 min-h-screen bg-[#F4F4F8]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Vendors & Merchants</h1>
          <p className="mt-0.5 text-sm text-[#6B6B82]">{items.length} registered merchant stores</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExportCSV}
            className="rounded-xl border border-[#E2E2EC] bg-white px-4 py-2 text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Export CSV
          </button>
          <button
            onClick={() => onNavigate('vendors-applications')}
            className="rounded-xl border border-[#E8450A] text-[#E8450A] bg-[#FFF7F5] px-4 py-2 text-sm font-bold hover:bg-[#E8450A] hover:text-white transition-colors flex items-center gap-1.5"
          >
            📄 Review Applications ({items.filter(v => v.status === 'review' || v.status === 'pending').length})
          </button>
          <button
            onClick={() => setShowInviteModal(true)}
            className="rounded-xl bg-[#E8450A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20"
          >
            + Invite Vendor
          </button>
        </div>
      </div>

      {feedback && (
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3 text-xs font-semibold text-[#059669]">
          ✓ {feedback}
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Merchants', value: items.filter(v => v.status === 'active').length.toString(), cls: 'text-[#059669]' },
          { label: 'Pending Applications', value: items.filter(v => v.status === 'pending' || v.status === 'review').length.toString(), cls: 'text-[#D97706]' },
          { label: 'Verified Stores', value: items.filter(v => v.verified).length.toString(), cls: 'text-[#E8450A]' },
          { label: 'Suspended Stores', value: items.filter(v => v.status === 'suspended').length.toString(), cls: 'text-[#E11D48]' },
        ].map(k => (
          <div key={k.label} className="rounded-2xl border border-[#E2E2EC] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">{k.label}</p>
            <p className={`mt-1.5 font-mono text-2xl font-black ${k.cls}`}>{k.value}</p>
          </div>
        ))}
      </div>

      {/* Filter Control Bar */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#E2E2EC] bg-white p-4 shadow-sm">
        <div className="relative min-w-[200px] flex-1">
          <svg className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search vendor name, email, owner..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="h-10 w-full rounded-xl border border-[#E2E2EC] bg-[#F4F4F8] pl-10 pr-4 text-sm outline-none placeholder:text-[#9B9BB8] focus:border-[#E8450A]"
          />
        </div>
        <div className="flex items-center gap-1 rounded-xl bg-[#F4F4F8] p-1">
          {['all', 'active', 'review', 'pending', 'suspended'].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-all ${statusFilter === s ? 'bg-white text-[#111118] shadow-sm' : 'text-[#9B9BB8] hover:text-[#6B6B82]'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]">{error}</div>
      )}

      {/* Table & Inspector Side Panel */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1 overflow-hidden rounded-2xl border border-[#E2E2EC] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#F4F4F8] bg-[#F9F9FC] text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]">
                  <th className="px-5 py-3.5 text-left">Vendor Merchant</th>
                  <th className="px-4 py-3.5 text-left">Status</th>
                  <th className="px-4 py-3.5 text-left">Rating</th>
                  <th className="px-4 py-3.5 text-left">Products</th>
                  <th className="px-4 py-3.5 text-left">Commission</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-sm text-[#6B6B82]">
                      Loading vendors...
                    </td>
                  </tr>
                ) : filtered.map(vendor => (
                  <tr
                    key={vendor.id}
                    className={`cursor-pointer transition-colors hover:bg-[#F9F9FC] ${viewVendor === vendor.id ? 'bg-[#FFF7F5]' : ''}`}
                    onClick={() => setViewVendor(viewVendor === vendor.id ? null : vendor.id)}
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#E8450A] text-sm font-bold text-white shadow-sm">
                          {vendor.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="truncate font-bold text-[#111118]">{vendor.name}</p>
                            {vendor.verified && (
                              <span className="text-xs text-[#059669] font-bold">✓ Verified</span>
                            )}
                          </div>
                          <p className="truncate text-xs text-[#9B9BB8]">{vendor.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${STATUS[vendor.status]?.cls ?? 'bg-[#F4F4F8] text-[#6B6B82]'}`}>
                        {STATUS[vendor.status]?.label ?? vendor.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <span className="text-[#F59E0B]">★</span>
                        <span className="font-mono text-sm font-bold text-[#111118]">{vendor.rating}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-mono font-semibold text-[#111118]">{vendor.productCount} items</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-mono text-xs font-bold text-[#E8450A] bg-[#FFF7F5] border border-[#FECACA] px-2 py-0.5 rounded-md">
                        {vendor.commissionRate}%
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right" onClick={e => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        {vendor.status === 'pending' || vendor.status === 'review' ? (
                          <button
                            disabled={busyId === vendor.id}
                            onClick={() => void handleApprove(vendor)}
                            className="rounded-lg bg-[#D1FAE5] px-2.5 py-1 text-xs font-bold text-[#059669] hover:bg-[#A7F3D0]"
                          >
                            Approve Store
                          </button>
                        ) : vendor.status === 'suspended' ? (
                          <button
                            disabled={busyId === vendor.id}
                            onClick={() => void handleApprove(vendor)}
                            className="rounded-lg bg-[#D1FAE5] px-2.5 py-1 text-xs font-bold text-[#059669] hover:bg-[#A7F3D0]"
                          >
                            Reactivate
                          </button>
                        ) : (
                          <button
                            disabled={busyId === vendor.id}
                            onClick={() => void handleSuspend(vendor)}
                            className="rounded-lg bg-[#FEE2E2] px-2.5 py-1 text-xs font-bold text-[#E11D48] hover:bg-[#FECACA]"
                          >
                            Suspend
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Vendor Inspector Drawer */}
        {selectedVendor && (
          <div className="w-full lg:w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-[#E2E2EC] bg-white shadow-xl">
            <div className="relative h-24 bg-gradient-to-br from-[#0F0F18] to-[#1E1E30] p-4 flex justify-between items-start">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Store Inspector</span>
              <button
                onClick={() => setViewVendor(null)}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>
            <div className="px-5 pb-5">
              <div className="bg-[#E8450A] -mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white text-xl font-black text-white shadow-md">
                {selectedVendor.name.charAt(0)}
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-base text-[#111118]">{selectedVendor.name}</h3>
                  {selectedVendor.verified && (
                    <span className="text-xs font-bold text-[#059669]">✓</span>
                  )}
                </div>
                <p className="text-xs text-[#9B9BB8]">{selectedVendor.email}</p>
                <p className="mt-0.5 text-xs text-[#6B6B82]">Owner: <span className="font-semibold text-[#111118]">{selectedVendor.owner}</span></p>
                <p className="mt-1 text-xs text-[#9B9BB8] italic">{selectedVendor.tagline}</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3">
                  <p className="text-[10px] font-semibold uppercase text-[#9B9BB8]">Products</p>
                  <p className="font-mono font-bold text-sm text-[#111118] mt-0.5">{selectedVendor.productCount}</p>
                </div>
                <div className="rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3">
                  <p className="text-[10px] font-semibold uppercase text-[#9B9BB8]">Commission</p>
                  <p className="font-mono font-bold text-sm text-[#E8450A] mt-0.5">{selectedVendor.commissionRate}%</p>
                </div>
                <div className="rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3">
                  <p className="text-[10px] font-semibold uppercase text-[#9B9BB8]">Rating</p>
                  <p className="font-mono font-bold text-sm text-[#111118] mt-0.5">★ {selectedVendor.rating}</p>
                </div>
                <div className="rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3">
                  <p className="text-[10px] font-semibold uppercase text-[#9B9BB8]">Response</p>
                  <p className="font-mono font-bold text-sm text-[#059669] mt-0.5">{selectedVendor.responseTime}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <button
                  onClick={() => window.open(`/vendor/${selectedVendor.id}`, '_blank')}
                  className="w-full rounded-xl bg-[#111118] py-2.5 text-xs font-bold text-white hover:bg-[#E8450A] transition-colors"
                >
                  View Storefront Live ↗
                </button>
                {selectedVendor.status !== 'suspended' ? (
                  <button
                    disabled={busyId === selectedVendor.id}
                    onClick={() => void handleSuspend(selectedVendor)}
                    className="w-full rounded-xl border border-[#FEE2E2] py-2.5 text-xs font-bold text-[#E11D48] hover:bg-[#FEE2E2] transition-colors"
                  >
                    Suspend Merchant
                  </button>
                ) : (
                  <button
                    disabled={busyId === selectedVendor.id}
                    onClick={() => void handleApprove(selectedVendor)}
                    className="w-full rounded-xl border border-[#BBF7D0] py-2.5 text-xs font-bold text-[#059669] hover:bg-[#F0FDF4] transition-colors"
                  >
                    Reactivate Merchant
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Invite Modal */}
      <InviteVendorModal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        onSave={handleAddVendor}
      />
    </div>
  )
}
