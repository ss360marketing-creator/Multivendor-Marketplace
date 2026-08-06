import type { Product } from '../../data/marketplace'

type Props = {
  product: Product
  tab: 'features' | 'shipping' | 'returns'
  onTabChange: (tab: 'features' | 'shipping' | 'returns') => void
}

export default function ProductTabsPanel({ product, tab, onTabChange }: Props) {
  return (
    <div className="mt-12 bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden">
      <div className="flex border-b border-[#E8E7E2]">
        {[
          { key: 'features', label: 'Features' },
          { key: 'shipping', label: 'Shipping & Delivery' },
          { key: 'returns', label: 'Returns Policy' },
        ].map(t => (
          <button key={t.key} onClick={() => onTabChange(t.key as typeof tab)} className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${tab === t.key ? 'border-[#E8450A] text-[#E8450A]' : 'border-transparent text-[#6B6A66] hover:text-[#0E0E0E]'}`}>{t.label}</button>
        ))}
      </div>
      <div className="p-6">
        {tab === 'features' && (
          <div className="space-y-4">
            <p className="text-sm text-[#6B6A66] leading-relaxed">{product.description}</p>
            {product.features && <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">{product.features.map(f => <div key={f} className="flex items-center gap-2 bg-[#F9F8F5] rounded-xl px-4 py-3"><span className="text-[#059669]">✓</span><span className="text-sm font-medium text-[#0E0E0E]">{f}</span></div>)}</div>}
          </div>
        )}
        {tab === 'shipping' && <div className="space-y-3 text-sm text-[#6B6A66] leading-relaxed"><p><strong className="text-[#0E0E0E]">Standard Delivery:</strong> 3–5 business days. Free on orders over $75.</p><p><strong className="text-[#0E0E0E]">Express Delivery:</strong> 1–2 business days. $9.99 flat rate.</p><p><strong className="text-[#0E0E0E]">Same Day:</strong> Available in select cities. Order before 12pm.</p><p>Tracking number provided via email and SMS upon dispatch.</p></div>}
        {tab === 'returns' && <div className="space-y-3 text-sm text-[#6B6A66] leading-relaxed"><p><strong className="text-[#0E0E0E]">30-Day Returns:</strong> Return any item within 30 days of delivery for a full refund.</p><p>Items must be in original condition with all packaging and accessories.</p><p>Free return shipping on all defective or incorrectly sent items.</p><p>Refunds processed within 5–7 business days to original payment method.</p></div>}
      </div>
    </div>
  )
}
