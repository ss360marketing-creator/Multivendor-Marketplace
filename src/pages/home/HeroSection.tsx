import { useCallback, useEffect, useRef, useState } from 'react'
import type { View } from '../../app/navigation'

const heroSlides = [
  {
    id: 0,
    badge: 'Summer Sale 2025',
    headline: 'Discover the\nFuture of Shopping',
    sub: "Thousands of verified sellers. Millions of products.\nOne seamless experience.",
    cta: 'Shop Now',
    ctaSecondary: 'Explore Vendors',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=700&fit=crop&auto=format',
    accent: '#E8450A',
    stat1: { value: '2M+', label: 'Products' },
    stat2: { value: '48K', label: 'Sellers' },
    stat3: { value: '4.9★', label: 'Avg Rating' },
  },
  {
    id: 1,
    badge: 'Tech Week',
    headline: 'Power Up Your\nDigital Life',
    sub: "The latest smartphones, laptops and audio\nat prices that make sense.",
    cta: 'Shop Electronics',
    ctaSecondary: 'Flash Deals',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&h=700&fit=crop&auto=format',
    accent: '#6D28D9',
    stat1: { value: '50%', label: 'Max Off' },
    stat2: { value: '12K', label: 'Tech Products' },
    stat3: { value: 'Free', label: 'Delivery' },
  },
  {
    id: 2,
    badge: 'Beauty Edit',
    headline: 'Glow Up With\nPremium Beauty',
    sub: "From skincare essentials to luxury fragrances.\nAll verified. All authentic.",
    cta: 'Shop Beauty',
    ctaSecondary: 'View Brands',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&h=700&fit=crop&auto=format',
    accent: '#E11D48',
    stat1: { value: '31K', label: 'Beauty Items' },
    stat2: { value: '98%', label: 'Satisfaction' },
    stat3: { value: '30d', label: 'Returns' },
  },
]

type Props = { onNavigate: (v: View) => void }

export default function HeroSection({ onNavigate }: Props) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const next = useCallback(() => setCurrent(c => (c + 1) % heroSlides.length), [])

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [next])

  const slide = heroSlides[current]

  return (
    <section className="relative overflow-hidden bg-[#0E0E0E] min-h-[580px]">
      <div className="absolute inset-0">
        <img key={slide.id} src={slide.image} alt="" className="w-full h-full object-cover opacity-40 fade-in" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent" />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-6 py-16 md:py-24">
        <div className="max-w-[560px] space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white fade-in" style={{ background: `${slide.accent}33`, border: `1px solid ${slide.accent}66` }}>
            <span className="w-2 h-2 rounded-full" style={{ background: slide.accent, animation: 'pulse-dot 2s infinite' }} />
            {slide.badge}
          </div>
          <h1 key={slide.id} className="font-display text-5xl md:text-6xl font-bold text-white leading-tight fade-in" style={{ whiteSpace: 'pre-line' }}>{slide.headline}</h1>
          <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{slide.sub}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => onNavigate({ type: 'category', slug: 'electronics' })} className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105" style={{ background: slide.accent }}>{slide.cta}</button>
            <button className="px-6 py-3 rounded-xl font-semibold text-sm text-white border border-white/30 hover:bg-white/10 transition-colors">{slide.ctaSecondary}</button>
          </div>
          <div className="flex items-center gap-8 pt-4">
            {[slide.stat1, slide.stat2, slide.stat3].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-mono font-bold text-xl text-white">{stat.value}</p>
                <p className="text-xs text-[#6B6A66] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {heroSlides.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5 bg-[#E8450A]' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'}`} />)}
      </div>
    </section>
  )
}
