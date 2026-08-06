import { useState } from 'react'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

type Slide = {
  id: string
  title: string
  subtitle: string
  cta: string
  ctaLink: string
  bgColor: string
  textAlign: 'left' | 'center' | 'right'
  enabled: boolean
  scheduled?: string
  img: string
}

const initialSlides: Slide[] = [
  { id: 's1', title: 'Summer Collection 2025', subtitle: 'Up to 50% off on premium fashion brands', cta: 'Shop Now', ctaLink: '/category/fashion', bgColor: '#0F0F18', textAlign: 'left', enabled: true, img: '1607082348824-0a96f2a4b9da' },
  { id: 's2', title: 'Tech Week Deals', subtitle: 'The latest electronics at unbeatable prices', cta: 'Explore Deals', ctaLink: '/category/electronics', bgColor: '#1E3A5F', textAlign: 'center', enabled: true, img: '1496181133206-80ce9b88a853' },
  { id: 's3', title: 'Beauty Essentials', subtitle: 'Discover your perfect skincare routine', cta: 'Discover More', ctaLink: '/category/beauty', bgColor: '#2D1B3D', textAlign: 'left', enabled: false, scheduled: 'Aug 1, 2025', img: '1522335789203-aabd1fc54bc9' },
]

const carouselSettings = {
  autoplay: true,
  duration: 5,
  transition: 'Slide',
  showDots: true,
  showArrows: true,
}

export default function HomepageCMS({ onNavigate: _ }: Props) {
  const [slides, setSlides] = useState<Slide[]>(initialSlides)
  const [selected, setSelected] = useState<string | null>('s1')
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [carousel, setCarousel] = useState(carouselSettings)

  const selectedSlide = slides.find(s => s.id === selected)

  const updateSlide = (id: string, updates: Partial<Slide>) => {
    setSlides(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s))
  }

  const toggleSlide = (id: string) => {
    setSlides(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s))
  }

  return (
    <div className="flex h-full" style={{ minHeight: '100vh' }}>
      {/* Slide list panel */}
      <div className="w-72 flex-shrink-0 bg-white border-r border-[#E2E2EC] flex flex-col">
        <div className="px-5 py-4 border-b border-[#E2E2EC] flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[#111118]">Hero Banners</h2>
            <p className="text-xs text-[#9B9BB8] mt-0.5">Manage homepage carousel slides</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              onClick={() => setSelected(slide.id)}
              className={`rounded-xl border-2 overflow-hidden cursor-pointer transition-all ${selected === slide.id ? 'border-[#E8450A]' : 'border-[#E2E2EC] hover:border-[#C8C8E0]'}`}
            >
              {/* Mini preview */}
              <div className="relative h-24 overflow-hidden" style={{ background: slide.bgColor }}>
                <img src={`https://images.unsplash.com/photo-${slide.img}?w=400&h=200&fit=crop&auto=format`} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className={`absolute inset-0 flex flex-col justify-center px-4 ${slide.textAlign === 'center' ? 'items-center text-center' : 'items-start'}`}>
                  <p className="text-white font-bold text-xs leading-tight line-clamp-1">{slide.title}</p>
                  <p className="text-white/70 text-[10px] mt-0.5 line-clamp-1">{slide.subtitle}</p>
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                  <span className="text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded font-semibold">#{i + 1}</span>
                  {!slide.enabled && <span className="text-[10px] bg-[#D97706] text-white px-1.5 py-0.5 rounded font-semibold">Hidden</span>}
                  {slide.scheduled && <span className="text-[10px] bg-[#6366F1] text-white px-1.5 py-0.5 rounded font-semibold">Scheduled</span>}
                </div>
              </div>
              {/* Slide info */}
              <div className="px-3 py-2 flex items-center justify-between bg-white">
                <p className="text-xs font-semibold text-[#111118] truncate flex-1">{slide.title}</p>
                <button onClick={e => { e.stopPropagation(); toggleSlide(slide.id) }} className={`ml-2 w-8 h-4 rounded-full flex-shrink-0 transition-all relative ${slide.enabled ? 'bg-[#E8450A]' : 'bg-[#D1D5DB]'}`}>
                  <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-all ${slide.enabled ? 'left-4' : 'left-0.5'}`} />
                </button>
              </div>
            </div>
          ))}

          <button className="w-full py-3 border-2 border-dashed border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#9B9BB8] hover:border-[#E8450A] hover:text-[#E8450A] transition-all flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add Slide
          </button>
        </div>

        {/* Carousel settings */}
        <div className="border-t border-[#E2E2EC] p-4 space-y-3">
          <p className="text-xs font-bold text-[#9B9BB8] uppercase tracking-wide">Carousel Settings</p>
          <div className="space-y-2.5">
            {[
              { label: 'Auto Play', key: 'autoplay' as const, type: 'toggle' },
              { label: 'Show Dots', key: 'showDots' as const, type: 'toggle' },
              { label: 'Show Arrows', key: 'showArrows' as const, type: 'toggle' },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between">
                <span className="text-xs text-[#6B6B82]">{s.label}</span>
                <button onClick={() => setCarousel(prev => ({ ...prev, [s.key]: !prev[s.key] }))} className={`relative w-8 h-5 rounded-full transition-all ${carousel[s.key] ? 'bg-[#E8450A]' : 'bg-[#D1D5DB]'}`}>
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${carousel[s.key] ? 'left-3.5' : 'left-0.5'}`} />
                </button>
              </div>
            ))}
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B6B82]">Duration (sec)</span>
              <select value={carousel.duration} onChange={e => setCarousel(prev => ({ ...prev, duration: parseInt(e.target.value) }))} className="h-7 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none">
                {[3, 4, 5, 6, 8, 10].map(d => <option key={d} value={d}>{d}s</option>)}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B6B82]">Transition</span>
              <select value={carousel.transition} onChange={e => setCarousel(prev => ({ ...prev, transition: e.target.value }))} className="h-7 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none">
                {['Slide', 'Fade', 'Zoom'].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Preview + editor */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="bg-white border-b border-[#E2E2EC] px-5 py-3 flex items-center gap-4">
          <div className="flex items-center gap-1 bg-[#F4F4F8] rounded-lg p-1">
            {(['desktop', 'mobile'] as const).map(d => (
              <button key={d} onClick={() => setPreviewDevice(d)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${previewDevice === d ? 'bg-white shadow-sm text-[#111118]' : 'text-[#9B9BB8]'}`}>
                {d === 'desktop' ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2" /><path strokeLinecap="round" d="M8 21h8M12 17v4" /></svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" fill="currentColor" /></svg>
                )}
                <span className="capitalize">{d}</span>
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Save Draft</button>
            <button className="px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07]">Publish Changes</button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Preview */}
          <div className="flex-1 bg-[#F4F4F8] p-6 flex items-start justify-center overflow-auto">
            {selectedSlide && (
              <div className={`shadow-2xl overflow-hidden rounded-2xl transition-all duration-500 ${previewDevice === 'desktop' ? 'w-full max-w-3xl' : 'w-[390px]'}`}>
                <div className="relative overflow-hidden" style={{ paddingBottom: previewDevice === 'desktop' ? '40%' : '60%', background: selectedSlide.bgColor }}>
                  <img
                    src={`https://images.unsplash.com/photo-${selectedSlide.img}?w=1200&h=600&fit=crop&auto=format`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className={`absolute inset-0 flex flex-col justify-center px-8 md:px-12 ${selectedSlide.textAlign === 'center' ? 'items-center text-center' : selectedSlide.textAlign === 'right' ? 'items-end text-right' : 'items-start'}`}>
                    <h2 className="text-white font-black text-2xl md:text-4xl leading-tight">{selectedSlide.title}</h2>
                    <p className="text-white/80 text-sm md:text-base mt-2 max-w-xs">{selectedSlide.subtitle}</p>
                    <button className="mt-5 px-6 py-2.5 bg-[#E8450A] text-white font-bold text-sm rounded-xl hover:bg-[#C93A07] transition-colors">{selectedSlide.cta}</button>
                  </div>
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {slides.map(s => (
                      <div key={s.id} className={`h-1.5 rounded-full transition-all ${s.id === selected ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Editor panel */}
          {selectedSlide && (
            <div className="w-72 bg-white border-l border-[#E2E2EC] flex-shrink-0 overflow-y-auto p-5 space-y-4">
              <p className="font-semibold text-[#111118] text-sm">Edit Slide</p>

              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Title</label>
                  <input value={selectedSlide.title} onChange={e => updateSlide(selectedSlide.id, { title: e.target.value })} className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Subtitle</label>
                  <textarea value={selectedSlide.subtitle} onChange={e => updateSlide(selectedSlide.id, { subtitle: e.target.value })} rows={2} className="w-full px-3 py-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] resize-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">CTA Button Text</label>
                  <input value={selectedSlide.cta} onChange={e => updateSlide(selectedSlide.id, { cta: e.target.value })} className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">CTA Link</label>
                  <input value={selectedSlide.ctaLink} onChange={e => updateSlide(selectedSlide.id, { ctaLink: e.target.value })} className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Text Alignment</label>
                  <div className="flex gap-1">
                    {(['left', 'center', 'right'] as const).map(align => (
                      <button key={align} onClick={() => updateSlide(selectedSlide.id, { textAlign: align })} className={`flex-1 h-9 rounded-lg border text-xs font-semibold capitalize transition-all ${selectedSlide.textAlign === align ? 'border-[#E8450A] bg-[#FFF7F5] text-[#E8450A]' : 'border-[#E2E2EC] text-[#9B9BB8] hover:border-[#C8C8E0]'}`}>{align}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Background Color</label>
                  <div className="flex items-center gap-2">
                    <input type="color" value={selectedSlide.bgColor} onChange={e => updateSlide(selectedSlide.id, { bgColor: e.target.value })} className="w-10 h-10 rounded-lg border border-[#E2E2EC] cursor-pointer" />
                    <span className="font-mono text-xs text-[#6B6B82]">{selectedSlide.bgColor.toUpperCase()}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Schedule (optional)</label>
                  <input type="date" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t border-[#E2E2EC]">
                <button className="flex-1 py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Duplicate</button>
                <button className="flex-1 py-2 border border-[#FEE2E2] text-[#E11D48] rounded-lg text-xs font-semibold hover:bg-[#FEE2E2]">Delete</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
