import { useEffect, useState } from 'react'
import type { View } from '../../app/navigation'
import type { CartItemInput } from '../../state/marketplace-store'
import type { Product } from '../../data/marketplace'

type Props = {
  items?: Product[]
  onNavigate: (v: View) => void
  wishlist: Set<string>
  onToggleWishlist: (id: string) => void
  onAddToCart: (item: CartItemInput) => void
}

export default function FlashSaleSection({ items = [], onNavigate, wishlist, onToggleWishlist, onAddToCart }: Props) {
  const [timeLeft, setTimeLeft] = useState({ h: 3, m: 47, s: 23 })
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) return { h: 3, m: 59, s: 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    <section className="bg-[#0E0E0E] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#E11D48] text-2xl">⚡</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Flash Sale</h2>
            </div>
            <p className="text-[#6B6A66] text-sm">Limited stock. Unreal prices. Hurry - deals end in:</p>
          </div>
          <div className="flex items-center gap-2 sm:ml-auto">
            {[{ val: pad(timeLeft.h), label: 'HRS' }, { val: pad(timeLeft.m), label: 'MIN' }, { val: pad(timeLeft.s), label: 'SEC' }].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-white/10 rounded-xl px-4 py-3 text-center min-w-[64px]">
                  <p className="font-mono font-bold text-2xl text-white tabular-nums">{t.val}</p>
                  <p className="text-[9px] text-[#6B6A66] font-semibold tracking-widest">{t.label}</p>
                </div>
                {i < 2 && <span className="font-mono text-xl font-bold text-[#E11D48]">:</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group" onClick={() => onNavigate({ type: 'product', id: product.id })}>
              <div className="relative aspect-square bg-[#F9F8F5] overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#E11D48] text-white text-sm font-black px-3 py-1 rounded-lg shadow-lg">-{product.discount}%</div>
                <button onClick={e => { e.stopPropagation(); onToggleWishlist(product.id) }} className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all ${wishlist.has(product.id) ? 'bg-[#E11D48] text-white' : 'bg-white text-[#6B6A66] hover:text-[#E11D48]'}`}>♥</button>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm font-semibold text-[#0E0E0E] line-clamp-2 leading-snug">{product.title}</p>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-xl text-[#E11D48]">${product.price}</span>
                  <span className="font-mono text-sm text-[#9CA3AF] line-through">${product.originalPrice}</span>
                </div>
                <button onClick={e => { e.stopPropagation(); onAddToCart({ id: product.id, title: product.title, price: product.price, originalPrice: product.originalPrice, image: product.image, vendor: product.vendor }) }} className="w-full py-2.5 bg-[#0E0E0E] text-white rounded-xl text-sm font-semibold hover:bg-[#E8450A] transition-colors">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
