import type { Product, Vendor } from '../../data/marketplace'

type Props = {
  product: Product
  vendor: Vendor
  selectedColor: string
  selectedSize: string
  qty: number
  added: boolean
  onSelectColor: (value: string) => void
  onSelectSize: (value: string) => void
  onIncreaseQty: () => void
  onDecreaseQty: () => void
  onAddToCart: () => void
}

export default function ProductPurchasePanel({
  product,
  vendor,
  selectedColor,
  selectedSize,
  qty,
  added,
  onSelectColor,
  onSelectSize,
  onIncreaseQty,
  onDecreaseQty,
  onAddToCart,
}: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#6B6A66]">{product.vendor}</span>
          {product.verified && (
            <svg className="w-4 h-4 text-[#E8450A]" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          )}
          <span className="text-xs text-[#9CA3AF]">Verified Seller</span>
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-[#0E0E0E] leading-tight">{product.title}</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-[#F59E0B]">★</span>)}
          </div>
          <span className="text-sm text-[#6B6A66]">{product.rating.toFixed(1)} · {product.reviewCount} reviews</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-[#E8E7E2] space-y-2">
        <div className="flex items-end gap-3">
          <span className="font-mono font-black text-4xl text-[#0E0E0E]">Rs. {product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="font-mono text-lg text-[#9CA3AF] line-through mb-1">Rs. {product.originalPrice.toLocaleString()}</span>
              <span className="bg-[#E11D48] text-white text-sm font-bold px-2.5 py-1 rounded-lg mb-1">{product.discount}% OFF</span>
            </>
          )}
        </div>
        {product.installment && <p className="text-sm text-[#6B6A66]">or <span className="font-semibold text-[#0E0E0E]">{product.installment}</span> with 0% interest</p>}
        <p className="text-xs text-[#9CA3AF]">Inclusive of all taxes</p>
      </div>

      {product.colors && product.colors.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#0E0E0E]">Color: <span className="font-normal text-[#6B6A66]">{selectedColor}</span></p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map(c => <button key={c} onClick={() => onSelectColor(c)} className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all ${selectedColor === c ? 'border-[#E8450A] text-[#E8450A] bg-[#FFF7F5]' : 'border-[#E8E7E2] text-[#6B6A66] hover:border-[#0E0E0E]'}`}>{c}</button>)}
          </div>
        </div>
      )}

      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#0E0E0E]">Size: <span className="font-normal text-[#6B6A66]">{selectedSize}</span></p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map(s => <button key={s} onClick={() => onSelectSize(s)} className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${selectedSize === s ? 'border-[#E8450A] text-[#E8450A] bg-[#FFF7F5]' : 'border-[#E8E7E2] text-[#6B6A66] hover:border-[#0E0E0E]'}`}>{s}</button>)}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <p className="text-sm font-semibold text-[#0E0E0E]">Quantity</p>
        <div className="flex items-center gap-2 bg-white border border-[#E8E7E2] rounded-xl p-1">
          <button onClick={onDecreaseQty} className="w-9 h-9 rounded-lg bg-[#F3F2EF] flex items-center justify-center hover:bg-[#E8E7E2] transition-colors">-</button>
          <span className="w-8 text-center font-mono font-bold text-base">{qty}</span>
          <button onClick={onIncreaseQty} className="w-9 h-9 rounded-lg bg-[#F3F2EF] flex items-center justify-center hover:bg-[#E8E7E2] transition-colors">+</button>
        </div>
        {product.stock < 20 && <span className="text-xs text-[#D97706] font-medium bg-[#FFF7ED] px-3 py-1.5 rounded-lg border border-[#FED7AA]">Only {product.stock} left</span>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button onClick={onAddToCart} className={`py-4 rounded-xl font-semibold text-sm transition-all ${added ? 'bg-[#059669] text-white' : 'bg-[#0E0E0E] text-white hover:bg-[#E8450A]'}`}>{added ? '✓ Added to Cart!' : 'Add to Cart'}</button>
        <button className="py-4 rounded-xl font-semibold text-sm bg-[#E8450A] text-white hover:bg-[#C93A07] transition-colors">Buy Now</button>
      </div>

      <div className="bg-[#F9F8F5] rounded-2xl p-4 space-y-3 border border-[#E8E7E2]">
        {[
          { icon: '🚚', label: product.freeShipping ? 'Free Delivery' : 'Standard Delivery', sub: 'Estimated delivery: 3–5 business days' },
          { icon: '↩️', label: 'Easy Returns', sub: '30-day return policy, no questions asked' },
          { icon: '🔒', label: 'Secure Checkout', sub: 'SSL encrypted · Buyer Protection guaranteed' },
        ].map(item => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="text-lg mt-0.5">{item.icon}</span>
            <div>
              <p className="text-sm font-semibold text-[#0E0E0E]">{item.label}</p>
              <p className="text-xs text-[#6B6A66]">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
