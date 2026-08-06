import { useState } from 'react'
import type { View } from '../../app/navigation'
import type { Vendor } from '../../data/marketplace'

type Props = {
  vendor: Vendor
  onNavigate: (v: View) => void
}

export default function ProductSellerCard({ vendor, onNavigate }: Props) {
  const [followed, setFollowed] = useState(false)

  return (
    <div className="mt-8 bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden">
      {/* Mini cover */}
      <div
        className="h-16 bg-gradient-to-r from-[#0E0E0E] to-[#374151] relative"
        style={vendor.cover ? { backgroundImage: `url(${vendor.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/70 to-transparent" />
      </div>

      <div className="px-6 pb-5">
        <div className="flex flex-col sm:flex-row gap-4 -mt-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl border-2 border-white shadow-md overflow-hidden bg-[#F3F2EF]">
              <img src={vendor.logo} alt={vendor.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Info + Buttons */}
          <div className="flex-1 min-w-0 flex flex-col sm:flex-row gap-3 pt-2">
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-[#0E0E0E]">{vendor.name}</span>
                {vendor.verified && (
                  <span className="text-[10px] font-bold text-[#E8450A] bg-[#FFF7F5] px-1.5 py-0.5 rounded-full border border-[#FECACA] uppercase tracking-wide">
                    ✓ Verified
                  </span>
                )}
              </div>
              {vendor.tagline && <p className="text-xs text-[#6B6A66] truncate">{vendor.tagline}</p>}
              <div className="flex items-center gap-3 text-xs text-[#6B6A66] flex-wrap">
                <span><strong className="text-[#0E0E0E]">{vendor.rating}</strong> rating</span>
                <span><strong className="text-[#0E0E0E]">{vendor.positiveFeedback}%</strong> positive</span>
                <span><strong className="text-[#0E0E0E]">{vendor.productCount}</strong> products</span>
                {vendor.responseTime && <span>Responds {vendor.responseTime}</span>}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => onNavigate({ type: 'vendor', id: vendor.id })}
                className="px-4 py-2 bg-[#0E0E0E] text-white rounded-xl text-sm font-semibold hover:bg-[#E8450A] transition-colors"
              >
                Visit Store
              </button>
              <button className="px-4 py-2 border border-[#E8E7E2] text-[#0E0E0E] rounded-xl text-sm font-semibold hover:bg-[#F3F2EF] transition-colors">
                Chat
              </button>
              <button
                onClick={() => setFollowed(v => !v)}
                className={`px-4 py-2 border rounded-xl text-sm font-semibold transition-colors ${
                  followed
                    ? 'bg-[#0E0E0E] text-white border-[#0E0E0E]'
                    : 'border-[#E8E7E2] text-[#0E0E0E] hover:bg-[#F3F2EF]'
                }`}
              >
                {followed ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
