import { useState } from 'react'
import type { AdminOrder } from '@/api/admin'

type Props = {
  order: AdminOrder | null
  onClose: () => void
  onUpdateStatus: (order: AdminOrder, nextStatus: string) => Promise<void>
  onUpdateTracking: (orderId: string, trackingNum: string) => void
}

const STATUS_STEPS = ['pending', 'processing', 'shipped', 'delivered']

export default function OrderDetailsModal({ order, onClose, onUpdateStatus, onUpdateTracking }: Props) {
  const [trackingNum, setTrackingNum] = useState(order?.trackingNumber ?? '')
  const [carrier, setCarrier] = useState('FedEx Express')
  const [updating, setUpdating] = useState(false)
  const [trackingSaved, setTrackingSaved] = useState(false)
  const [showInvoice, setShowInvoice] = useState(false)

  if (!order) return null

  const currentStepIdx = STATUS_STEPS.indexOf(order.status.toLowerCase())

  const handleSaveTracking = () => {
    onUpdateTracking(order.id, trackingNum)
    setTrackingSaved(true)
    setTimeout(() => setTrackingSaved(false), 3000)
  }

  const handleAdvance = async (nextStatus: string) => {
    setUpdating(true)
    await onUpdateStatus(order, nextStatus)
    setUpdating(false)
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-[#E2E2EC] w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="px-6 py-4 bg-[#F9F9FC] border-b border-[#E2E2EC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8450A]/10 border border-[#E8450A]/20 flex items-center justify-center font-bold text-sm text-[#E8450A]">
              📦
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-[#111118]">Order Details</h2>
                <span className="font-mono text-sm font-bold text-[#E8450A]">{order.id}</span>
              </div>
              <p className="text-xs text-[#6B6B82]">Placed on {order.date} · {order.items} item(s)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInvoice(v => !v)}
              className="px-3 py-1.5 rounded-xl border border-[#E2E2EC] text-xs font-semibold text-[#111118] hover:bg-[#F4F4F8] transition-colors flex items-center gap-1.5"
            >
              📄 {showInvoice ? 'Close Invoice' : 'Print Invoice'}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#F4F4F8] hover:bg-[#E2E2EC] flex items-center justify-center text-[#6B6B82]"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Printable Invoice View */}
          {showInvoice ? (
            <div className="p-6 rounded-2xl bg-white border border-[#E2E2EC] space-y-6 shadow-sm">
              <div className="flex justify-between items-start border-b border-[#E2E2EC] pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#111118]">NEXUS MARKETPLACE</h3>
                  <p className="text-xs text-[#6B6B82]">Official Order Invoice & Receipt</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-sm text-[#E8450A]">{order.id}</p>
                  <p className="text-xs text-[#6B6B82]">Date: {order.date}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-bold text-[#111118] uppercase tracking-wide text-[10px] mb-1">Customer / Billed To:</p>
                  <p className="font-semibold text-[#111118]">{order.customer}</p>
                  <p className="text-[#6B6B82]">{order.customerDetails?.email ?? 'customer@example.com'}</p>
                  <p className="text-[#6B6B82]">{order.customerDetails?.phone ?? '+1 (555) 019-2831'}</p>
                  <p className="text-[#6B6B82] mt-1">123 Logistics Ave, Suite 400, New York, NY 10001</p>
                </div>
                <div>
                  <p className="font-bold text-[#111118] uppercase tracking-wide text-[10px] mb-1">Vendor / Seller:</p>
                  <p className="font-semibold text-[#111118]">{order.vendor}</p>
                  <p className="text-[#6B6B82]">Payment: {order.payment}</p>
                  <p className="text-[#059669] font-bold mt-1">Status: {order.status.toUpperCase()}</p>
                </div>
              </div>

              <table className="w-full text-xs border-t border-[#E2E2EC] pt-2">
                <thead>
                  <tr className="border-b border-[#E2E2EC] text-[#9B9BB8] text-left">
                    <th className="py-2">Item Description</th>
                    <th className="py-2 text-center">Qty</th>
                    <th className="py-2 text-right">Price</th>
                    <th className="py-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F4F8]">
                  {order.lineItems?.length ? (
                    order.lineItems.map((li, idx) => (
                      <tr key={idx}>
                        <td className="py-2 font-medium text-[#111118]">{li.product.title}</td>
                        <td className="py-2 text-center font-mono">{li.quantity}</td>
                        <td className="py-2 text-right font-mono">${li.unitPrice.toFixed(2)}</td>
                        <td className="py-2 text-right font-mono font-bold">${(li.quantity * li.unitPrice).toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-2 font-medium text-[#111118]">{order.product}</td>
                      <td className="py-2 text-center font-mono">{order.items}</td>
                      <td className="py-2 text-right font-mono">${(order.amount / order.items).toFixed(2)}</td>
                      <td className="py-2 text-right font-mono font-bold">${order.amount.toFixed(2)}</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="border-t border-[#E2E2EC] pt-4 flex justify-between items-end text-xs">
                <p className="text-[#9B9BB8]">Thank you for shopping on Nexus Marketplace.</p>
                <div className="text-right space-y-1">
                  <p className="text-[#6B6B82]">Subtotal: ${(order.amount * 0.9).toFixed(2)}</p>
                  <p className="text-[#6B6B82]">Est. Tax & Shipping: ${(order.amount * 0.1).toFixed(2)}</p>
                  <p className="font-mono font-bold text-base text-[#111118]">Total: ${order.amount.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Order Status Stepper */}
              <div className="bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9B9BB8] mb-4">Order Lifecycle Progress</p>
                <div className="flex items-center justify-between">
                  {STATUS_STEPS.map((stepKey, idx) => {
                    const isDone = currentStepIdx >= idx || order.status.toLowerCase() === 'delivered'
                    const isCurrent = currentStepIdx === idx
                    return (
                      <div key={stepKey} className="flex-1 flex flex-col items-center relative">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                          isDone ? 'bg-[#059669] text-white' : isCurrent ? 'bg-[#E8450A] text-white ring-4 ring-[#E8450A]/20' : 'bg-[#E2E2EC] text-[#9B9BB8]'
                        }`}>
                          {isDone ? '✓' : idx + 1}
                        </div>
                        <span className={`text-[11px] font-semibold mt-2 capitalize ${isCurrent ? 'text-[#E8450A]' : isDone ? 'text-[#059669]' : 'text-[#9B9BB8]'}`}>
                          {stepKey}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Quick Status Advance Actions */}
                <div className="mt-5 pt-4 border-t border-[#E2E2EC] flex items-center justify-between">
                  <span className="text-xs text-[#6B6B82]">Current Status: <strong className="text-[#111118] uppercase">{order.status}</strong></span>
                  <div className="flex gap-2">
                    {order.status.toLowerCase() !== 'delivered' && order.status.toLowerCase() !== 'cancelled' && (
                      <button
                        onClick={() => handleAdvance(order.status.toLowerCase() === 'pending' ? 'PROCESSING' : order.status.toLowerCase() === 'processing' ? 'SHIPPED' : 'DELIVERED')}
                        disabled={updating}
                        className="px-4 py-1.5 bg-[#E8450A] text-white text-xs font-bold rounded-xl hover:bg-[#C93A07] transition-colors disabled:opacity-50"
                      >
                        {updating ? 'Updating...' : `Advance to ${order.status.toLowerCase() === 'pending' ? 'Processing' : order.status.toLowerCase() === 'processing' ? 'Shipped' : 'Delivered'} →`}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Customer & Shipping Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9B9BB8]">Customer Details</p>
                  <p className="font-bold text-sm text-[#111118]">{order.customer}</p>
                  <p className="text-xs text-[#6B6B82]">📧 {order.customerDetails?.email ?? 'customer@example.com'}</p>
                  <p className="text-xs text-[#6B6B82]">📞 {order.customerDetails?.phone ?? '+1 (555) 234-5678'}</p>
                </div>

                <div className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9B9BB8]">Vendor / Seller</p>
                  <p className="font-bold text-sm text-[#111118]">{order.vendor}</p>
                  <p className="text-xs text-[#059669] font-semibold">✓ Verified Marketplace Merchant</p>
                  <p className="text-xs text-[#6B6B82]">Payment: <span className="font-bold text-[#111118]">{order.payment}</span></p>
                </div>
              </div>

              {/* Items List */}
              <div className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9B9BB8]">Itemized Purchased Products</p>
                <div className="p-3 rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#E2E2EC] flex items-center justify-center text-xl">📦</div>
                    <div>
                      <p className="text-sm font-bold text-[#111118]">{order.product}</p>
                      <p className="text-xs text-[#6B6B82]">Qty: {order.items} · Sold by {order.vendor}</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-base text-[#111118]">${order.amount.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipment Tracking Section */}
              <div className="bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9B9BB8]">Fulfillment & Tracking</p>
                {trackingSaved && (
                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-2 text-xs text-[#059669] font-bold">
                    ✓ Tracking info saved!
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#6B6B82]">Carrier</label>
                    <select
                      value={carrier}
                      onChange={e => setCarrier(e.target.value)}
                      className="mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold"
                    >
                      <option>FedEx Express</option>
                      <option>DHL Worldwide</option>
                      <option>UPS Ground</option>
                      <option>USPS Priority</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#6B6B82]">Tracking Number</label>
                    <div className="mt-1 flex gap-2">
                      <input
                        type="text"
                        placeholder="TRK-881920394"
                        value={trackingNum}
                        onChange={e => setTrackingNum(e.target.value)}
                        className="flex-1 h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-mono font-bold outline-none"
                      />
                      <button
                        onClick={handleSaveTracking}
                        className="px-3 h-10 rounded-xl bg-[#111118] text-white text-xs font-bold hover:bg-[#E8450A] transition-colors"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F9F9FC] border-t border-[#E2E2EC] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-[#E2E2EC] text-xs font-semibold text-[#6B6B82] hover:bg-[#E2E2EC]"
          >
            Close
          </button>
          <span className="text-xs text-[#9B9BB8]">Order ID: {order.id}</span>
        </div>
      </div>
    </div>
  )
}
