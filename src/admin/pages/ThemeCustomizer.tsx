import { useState } from 'react'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const presets = [
  { name: 'Ember', primary: '#E8450A', secondary: '#0F0F18', accent: '#FBBF24' },
  { name: 'Ocean', primary: '#0EA5E9', secondary: '#0F172A', accent: '#06D6A0' },
  { name: 'Violet', primary: '#7C3AED', secondary: '#1E1B4B', accent: '#EC4899' },
  { name: 'Forest', primary: '#059669', secondary: '#064E3B', accent: '#84CC16' },
  { name: 'Rose', primary: '#E11D48', secondary: '#1C1917', accent: '#F97316' },
]

const fonts = [
  { name: 'Plus Jakarta Sans', sample: 'Aa', category: 'Sans-serif' },
  { name: 'Fraunces', sample: 'Aa', category: 'Serif' },
  { name: 'Inter', sample: 'Aa', category: 'Sans-serif' },
  { name: 'Playfair Display', sample: 'Aa', category: 'Serif' },
  { name: 'DM Sans', sample: 'Aa', category: 'Sans-serif' },
]

const borderRadii = [
  { label: 'Sharp', value: '0px' },
  { label: 'Soft', value: '6px' },
  { label: 'Round', value: '12px' },
  { label: 'Pill', value: '9999px' },
]

export default function ThemeCustomizer({ onNavigate: _ }: Props) {
  const [preset, setPreset] = useState(0)
  const [primary, setPrimary] = useState('#E8450A')
  const [secondary, setSecondary] = useState('#0F0F18')
  const [accent, setAccent] = useState('#FBBF24')
  const [bodyFont, setBodyFont] = useState('Plus Jakarta Sans')
  const [displayFont, setDisplayFont] = useState('Fraunces')
  const [radius, setRadius] = useState('12px')
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [saved, setSaved] = useState(false)

  const applyPreset = (i: number) => {
    const p = presets[i]
    setPreset(i)
    setPrimary(p.primary)
    setSecondary(p.secondary)
    setAccent(p.accent)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex h-full" style={{ minHeight: '100vh' }}>
      {/* Left panel */}
      <div className="w-80 flex-shrink-0 bg-white border-r border-[#E2E2EC] flex flex-col overflow-y-auto">
        <div className="p-5 border-b border-[#E2E2EC]">
          <h2 className="font-bold text-[#111118] text-lg">Theme Customizer</h2>
          <p className="text-xs text-[#9B9BB8] mt-0.5">Live storefront appearance editor</p>
        </div>

        <div className="flex-1 p-5 space-y-7">
          {/* Presets */}
          <div>
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3">Color Presets</p>
            <div className="grid grid-cols-5 gap-2">
              {presets.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(i)}
                  className={`relative group flex flex-col items-center gap-1.5 transition-all`}
                  title={p.name}
                >
                  <div
                    className={`w-full h-10 rounded-xl transition-all ${preset === i ? 'ring-2 ring-offset-2 ring-[#111118]' : 'hover:scale-105'}`}
                    style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.accent})` }}
                  />
                  <span className="text-[10px] font-semibold text-[#9B9BB8]">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3">Colors</p>
            <div className="space-y-3">
              {[
                { label: 'Primary', value: primary, set: setPrimary },
                { label: 'Secondary', value: secondary, set: setSecondary },
                { label: 'Accent', value: accent, set: setAccent },
              ].map(c => (
                <div key={c.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#111118]">{c.label}</p>
                    <p className="text-[11px] font-mono text-[#9B9BB8]">{c.value.toUpperCase()}</p>
                  </div>
                  <label className="cursor-pointer">
                    <div
                      className="w-10 h-10 rounded-xl border-2 border-[#E2E2EC] shadow-md cursor-pointer hover:scale-105 transition-transform"
                      style={{ background: c.value }}
                    />
                    <input
                      type="color"
                      value={c.value}
                      onChange={e => c.set(e.target.value)}
                      className="sr-only"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3">Typography</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-[#6B6B82] mb-2">Body Font</p>
                <div className="space-y-1.5">
                  {fonts.filter(f => f.category === 'Sans-serif').map(f => (
                    <button
                      key={f.name}
                      onClick={() => setBodyFont(f.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-all text-sm ${bodyFont === f.name ? 'border-[#E8450A] bg-[#FFF7F5] text-[#E8450A]' : 'border-[#E2E2EC] text-[#6B6B82] hover:border-[#C8C8E0]'}`}
                    >
                      <span>{f.name}</span>
                      {bodyFont === f.name && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B82] mb-2">Display Font</p>
                <div className="space-y-1.5">
                  {fonts.filter(f => f.category === 'Serif').map(f => (
                    <button
                      key={f.name}
                      onClick={() => setDisplayFont(f.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-all text-sm ${displayFont === f.name ? 'border-[#E8450A] bg-[#FFF7F5] text-[#E8450A]' : 'border-[#E2E2EC] text-[#6B6B82] hover:border-[#C8C8E0]'}`}
                    >
                      <span>{f.name}</span>
                      {displayFont === f.name && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Border radius */}
          <div>
            <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3">Button Shape</p>
            <div className="grid grid-cols-4 gap-2">
              {borderRadii.map(r => (
                <button
                  key={r.label}
                  onClick={() => setRadius(r.value)}
                  className={`flex flex-col items-center gap-2 py-2 transition-all ${radius === r.value ? 'text-[#E8450A]' : 'text-[#9B9BB8] hover:text-[#6B6B82]'}`}
                >
                  <div
                    className={`w-10 h-10 border-2 transition-all ${radius === r.value ? 'border-[#E8450A] bg-[#FFF7F5]' : 'border-[#E2E2EC]'}`}
                    style={{ borderRadius: r.value }}
                  />
                  <span className="text-[10px] font-semibold">{r.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-[#E2E2EC] flex gap-2">
          <button className="flex-1 h-10 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">
            Reset
          </button>
          <button
            onClick={handleSave}
            className="flex-1 h-10 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors flex items-center justify-center gap-2"
          >
            {saved ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Saved!
              </>
            ) : 'Publish Theme'}
          </button>
        </div>
      </div>

      {/* Preview panel */}
      <div className="flex-1 bg-[#F4F4F8] flex flex-col">
        {/* Preview toolbar */}
        <div className="bg-white border-b border-[#E2E2EC] px-5 py-3 flex items-center gap-4">
          <div className="flex items-center gap-1 bg-[#F4F4F8] rounded-lg p-1">
            {(['desktop', 'mobile'] as const).map(d => (
              <button
                key={d}
                onClick={() => setPreviewDevice(d)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${previewDevice === d ? 'bg-white shadow-sm text-[#111118]' : 'text-[#9B9BB8] hover:text-[#6B6B82]'}`}
              >
                {d === 'desktop' ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2" /><path strokeLinecap="round" d="M8 21h8M12 17v4" /></svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" fill="currentColor" /></svg>
                )}
                <span className="capitalize">{d}</span>
              </button>
            ))}
          </div>
          <div className="flex-1 flex items-center gap-2 bg-[#F4F4F8] rounded-lg px-3 py-2">
            <svg className="w-3.5 h-3.5 text-[#9B9BB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
            <span className="text-xs font-mono text-[#9B9BB8]">yourstore.com</span>
          </div>
          <span className="text-xs font-semibold px-2 py-1 bg-[#FEF3C7] text-[#92400E] rounded-lg">Preview Mode</span>
        </div>

        {/* Preview content */}
        <div className="flex-1 flex items-start justify-center p-8 overflow-auto">
          <div
            className={`bg-white shadow-2xl overflow-hidden transition-all duration-500 ${previewDevice === 'desktop' ? 'w-full max-w-4xl rounded-2xl' : 'w-[390px] rounded-[40px]'}`}
            style={{ minHeight: 580 }}
          >
            {/* Simulated storefront */}
            {/* Nav */}
            <div style={{ background: secondary }} className="px-6 py-3 flex items-center justify-between">
              <span className="font-bold text-white text-sm" style={{ fontFamily: displayFont }}>NEXMART</span>
              <div className="flex items-center gap-4">
                {['Shop', 'Deals', 'Brands'].map(n => (
                  <span key={n} className="text-xs text-white/70">{n}</span>
                ))}
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: primary }}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
              </div>
            </div>

            {/* Hero banner */}
            <div style={{ background: `linear-gradient(135deg, ${secondary}, ${primary}33)` }} className="px-8 py-12">
              <p className="text-xs font-semibold mb-2" style={{ color: accent }}>New Season</p>
              <h2 className="text-3xl font-black text-white leading-tight mb-4" style={{ fontFamily: displayFont }}>
                Discover Premium<br />Products
              </h2>
              <button
                className="px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
                style={{ background: primary, borderRadius: radius }}
              >
                Shop Now →
              </button>
            </div>

            {/* Product cards */}
            <div className="p-6">
              <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-4">Featured Products</p>
              <div className={`grid gap-4 ${previewDevice === 'desktop' ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {[
                  { name: 'Premium Headphones', price: '$299', badge: 'Sale', img: '1505740420928-5e560c06d30e' },
                  { name: 'Leather Watch', price: '$189', badge: 'New', img: '1523275335684-37898b6baf30' },
                  { name: 'Sunglasses', price: '$129', badge: '', img: '1572635196237-14b3f281503f' },
                ].slice(0, previewDevice === 'desktop' ? 3 : 2).map(p => (
                  <div key={p.name} className="group" style={{ borderRadius: radius, overflow: 'hidden', border: '1px solid #E2E2EC' }}>
                    <div className="relative overflow-hidden" style={{ paddingBottom: '75%' }}>
                      <img
                        src={`https://images.unsplash.com/photo-${p.img}?w=300&h=225&fit=crop&auto=format`}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {p.badge && (
                        <span
                          className="absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-0.5"
                          style={{ background: primary, borderRadius: '4px' }}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold text-[#111118] truncate">{p.name}</p>
                      <div className="flex items-center justify-between mt-1.5">
                        <span className="font-mono font-bold text-sm" style={{ color: primary }}>{p.price}</span>
                        <button
                          className="text-[10px] font-bold text-white px-2.5 py-1"
                          style={{ background: secondary, borderRadius: radius }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent section */}
            <div className="mx-6 mb-6 p-4 rounded-xl flex items-center justify-between" style={{ background: accent + '22' }}>
              <div>
                <p className="text-xs font-bold" style={{ color: secondary }}>Flash Sale Ends Soon</p>
                <p className="font-mono font-black text-lg" style={{ color: primary }}>02:47:18</p>
              </div>
              <button
                className="text-xs font-bold text-white px-4 py-2"
                style={{ background: primary, borderRadius: radius }}
              >
                View Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
