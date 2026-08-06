import { useState } from 'react'
import { storefrontSections } from '../adminData'
import type { AdminSection } from '../adminData'


type Props = { onNavigate: (s: AdminSection) => void }

const sectionTypeIcons: Record<string, string> = {
  'Hero Banner': '🖼️',
  'Trust Bar': '✅',
  'Category Grid': '⊞',
  'Product Carousel': '🛍️',
  'Flash Sale': '⚡',
  'Before & After': '↔️',
  'Vendor Carousel': '🏪',
  'Best Sellers': '⭐',
  'Brand Logos': '🏷️',
  'UGC Reviews': '💬',
  'Product Grid': '⊟',
  'Newsletter': '📧',
}

const libraryItems = [
  'Hero Banner', 'Announcement Bar', 'Trust Bar', 'Category Grid',
  'Product Carousel', 'Product Grid', 'Flash Sale', 'Before & After',
  'Vendor Carousel', 'Brand Logos', 'UGC Reviews', 'Testimonials',
  'Newsletter', 'App Download', 'Custom HTML',
]

const sectionTypeColors: Record<string, string> = {
  'Hero Banner': '#EEF2FF',
  'Flash Sale': '#FFF1F2',
  'Product Carousel': '#F0FDF4',
  'Category Grid': '#FFF7ED',
  'Vendor Carousel': '#F5F3FF',
  'Brand Logos': '#F0F9FF',
  'UGC Reviews': '#FDF4FF',
  'Trust Bar': '#ECFDF5',
  'Before & After': '#FFF7ED',
  'Product Grid': '#F0FDF4',
}

export default function StorefrontBuilder({ onNavigate: _ }: Props) {
  const [sections, setSections] = useState(storefrontSections)
  const [selected, setSelected] = useState<string | null>('s1')
  const [dragOver, setDragOver] = useState<string | null>(null)
  const [_dragItem, setDragItem] = useState<string | null>(null)
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [_saved, setSaved] = useState(false)
  const [published, setPublished] = useState(false)

  const selectedSection = sections.find(s => s.id === selected)

  const toggleVisible = (id: string) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, visible: !s.visible } : s))
  }

  const removeSection = (id: string) => {
    setSections(prev => prev.filter(s => s.id !== id))
    if (selected === id) setSelected(null)
  }

  const duplicateSection = (id: string) => {
    const s = sections.find(sec => sec.id === id)
    if (!s) return
    const newId = `s_${Date.now()}`
    setSections(prev => {
      const idx = prev.findIndex(sec => sec.id === id)
      const arr = [...prev]
      arr.splice(idx + 1, 0, { ...s, id: newId, label: s.label + ' (copy)' })
      return arr
    })
  }

  const moveSection = (id: string, dir: 'up' | 'down') => {
    setSections(prev => {
      const idx = prev.findIndex(s => s.id === id)
      if (dir === 'up' && idx === 0) return prev
      if (dir === 'down' && idx === prev.length - 1) return prev
      const arr = [...prev]
      const other = dir === 'up' ? idx - 1 : idx + 1
      ;[arr[idx], arr[other]] = [arr[other], arr[idx]]
      return arr
    })
  }

  const addSection = (type: string) => {
    const newId = `s_${Date.now()}`
    setSections(prev => [...prev, { id: newId, type, label: type, visible: true, scheduled: false, order: prev.length + 1 }])
    setSelected(newId)
  }

  const handlePublish = () => {
    setPublished(true)
    setSaved(true)
    setTimeout(() => { setPublished(false); setSaved(false) }, 3000)
  }

  return (
    <div className="flex h-full overflow-hidden">

      {/* LEFT: Section Library */}
      <div className="w-56 flex-shrink-0 bg-white border-r border-[#E2E2EC] flex flex-col">
        <div className="px-4 py-4 border-b border-[#F4F4F8]">
          <p className="text-xs font-bold text-[#9B9BB8] uppercase tracking-widest">Section Library</p>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {libraryItems.map(item => (
            <button
              key={item}
              onClick={() => addSection(item)}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[#F4F4F8] text-left transition-colors group"
            >
              <span className="text-base leading-none">{sectionTypeIcons[item] ?? '📦'}</span>
              <span className="text-xs font-medium text-[#111118] flex-1">{item}</span>
              <svg className="w-3.5 h-3.5 text-[#C8C8E0] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* CENTER: Canvas */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F4F4F8]">
        {/* Canvas toolbar */}
        <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-[#E2E2EC]">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-[#111118]">Homepage</p>
            <span className="text-xs bg-[#D1FAE5] text-[#065F46] px-2 py-0.5 rounded-full font-semibold">Live</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Preview mode */}
            <div className="flex rounded-lg border border-[#E2E2EC] overflow-hidden">
              {(['desktop', 'mobile'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setPreviewMode(m)}
                  className={`px-3 py-1.5 transition-colors flex items-center gap-1.5 text-xs font-semibold ${previewMode === m ? 'bg-[#0F0F18] text-white' : 'text-[#6B6B82] hover:bg-[#F4F4F8]'}`}
                >
                  {m === 'desktop' ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  )}
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>

            <button className="px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors">
              Save Draft
            </button>
            <button
              onClick={handlePublish}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${published ? 'bg-[#059669] text-white' : 'bg-[#E8450A] text-white hover:bg-[#C93A07]'}`}
            >
              {published ? '✓ Published!' : 'Publish'}
            </button>
          </div>
        </div>

        {/* Sections list */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className={`mx-auto space-y-2 ${previewMode === 'mobile' ? 'max-w-[390px]' : 'max-w-4xl'}`}>
            {sections.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setSelected(s.id)}
                onDragOver={e => { e.preventDefault(); setDragOver(s.id) }}
                onDrop={() => { setDragOver(null); setDragItem(null) }}
                className={`relative rounded-xl border-2 cursor-pointer transition-all select-none ${
                  selected === s.id
                    ? 'border-[#E8450A] shadow-lg shadow-[#E8450A]/10'
                    : dragOver === s.id
                    ? 'border-[#6366F1] border-dashed'
                    : 'border-[#E2E2EC] hover:border-[#9B9BB8]'
                } ${!s.visible ? 'opacity-50' : ''}`}
                style={{ background: sectionTypeColors[s.type] ?? '#FFFFFF' }}
              >
                <div className="flex items-center gap-3 px-4 py-3">
                  {/* Drag handle */}
                  <div
                    draggable
                    onDragStart={() => setDragItem(s.id)}
                    className="text-[#C8C8E0] cursor-grab active:cursor-grabbing"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 6a2 2 0 100-4 2 2 0 000 4zM16 6a2 2 0 100-4 2 2 0 000 4zM8 14a2 2 0 100-4 2 2 0 000 4zM16 14a2 2 0 100-4 2 2 0 000 4zM8 22a2 2 0 100-4 2 2 0 000 4zM16 22a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>

                  <span className="text-lg">{sectionTypeIcons[s.type] ?? '📦'}</span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-[#111118] truncate">{s.label}</p>
                      {s.scheduled && (
                        <span className="text-[10px] bg-[#EEF2FF] text-[#6366F1] px-1.5 py-0.5 rounded-full font-semibold">Scheduled</span>
                      )}
                    </div>
                    <p className="text-xs text-[#9B9BB8]">{s.type} · Position {idx + 1}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => moveSection(s.id, 'up')}
                      disabled={idx === 0}
                      className="w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors disabled:opacity-30"
                    >
                      <svg className="w-3.5 h-3.5 text-[#6B6B82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => moveSection(s.id, 'down')}
                      disabled={idx === sections.length - 1}
                      className="w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors disabled:opacity-30"
                    >
                      <svg className="w-3.5 h-3.5 text-[#6B6B82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => toggleVisible(s.id)}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-black/5 ${s.visible ? 'text-[#6B6B82]' : 'text-[#C8C8E0]'}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.visible ? "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" : "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"} />
                      </svg>
                    </button>
                    <button
                      onClick={() => duplicateSection(s.id)}
                      className="w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors text-[#6B6B82]"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => removeSection(s.id)}
                      className="w-7 h-7 rounded-lg hover:bg-[#FEE2E2] flex items-center justify-center transition-colors text-[#9B9BB8] hover:text-[#E11D48]"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Section preview strip */}
                {selected === s.id && (
                  <div className="mx-4 mb-3 h-16 rounded-lg bg-white/60 border border-white/80 flex items-center justify-center">
                    <p className="text-xs text-[#9B9BB8] font-medium">{s.type} preview</p>
                  </div>
                )}
              </div>
            ))}

            {/* Drop zone */}
            <div className="h-16 rounded-xl border-2 border-dashed border-[#E2E2EC] flex items-center justify-center text-xs text-[#C8C8E0] font-medium hover:border-[#9B9BB8] hover:text-[#9B9BB8] transition-colors cursor-pointer">
              + Drop section here or pick from library
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Properties panel */}
      <div className="w-72 flex-shrink-0 bg-white border-l border-[#E2E2EC] flex flex-col">
        <div className="px-5 py-4 border-b border-[#F4F4F8]">
          <p className="text-xs font-bold text-[#9B9BB8] uppercase tracking-widest">Properties</p>
        </div>

        {selectedSection ? (
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* Section header */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">{sectionTypeIcons[selectedSection.type] ?? '📦'}</span>
              <div>
                <p className="font-semibold text-sm text-[#111118]">{selectedSection.type}</p>
                <p className="text-xs text-[#9B9BB8]">Position {sections.findIndex(s => s.id === selected) + 1}</p>
              </div>
            </div>

            {/* Label */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#6B6B82]">Section Label</label>
              <input
                defaultValue={selectedSection.label}
                className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A] transition-colors"
              />
            </div>

            {/* Visibility */}
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-[#6B6B82]">Visible on Storefront</label>
              <button
                onClick={() => toggleVisible(selectedSection.id)}
                className={`w-10 h-6 rounded-full transition-all relative ${selectedSection.visible ? 'bg-[#E8450A]' : 'bg-[#E2E2EC]'}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${selectedSection.visible ? 'left-5' : 'left-1'}`} />
              </button>
            </div>

            {/* Schedule */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#6B6B82]">Schedule</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-[#9B9BB8] mb-1 block">Start Date</label>
                  <input type="date" className="w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs text-[#111118] outline-none focus:border-[#E8450A]" />
                </div>
                <div>
                  <label className="text-[10px] text-[#9B9BB8] mb-1 block">End Date</label>
                  <input type="date" className="w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs text-[#111118] outline-none focus:border-[#E8450A]" />
                </div>
              </div>
            </div>

            {/* Section-specific config */}
            {selectedSection.type === 'Product Carousel' && (
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#9B9BB8] uppercase tracking-widest pt-2 border-t border-[#F4F4F8]">Product Source</p>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Source Type</label>
                  <select className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]">
                    <option>Best Sellers</option>
                    <option>New Arrivals</option>
                    <option>Highest Rated</option>
                    <option>Manual Selection</option>
                    <option>By Category</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Products to Show</label>
                  <input type="number" defaultValue={10} className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]" />
                </div>
                {['Show Rating', 'Show Vendor', 'Show Discount', 'Carousel Enabled', 'Show Wishlist'].map(opt => (
                  <div key={opt} className="flex items-center justify-between">
                    <label className="text-xs text-[#6B6B82]">{opt}</label>
                    <button className="w-9 h-5 rounded-full bg-[#E8450A] relative">
                      <span className="absolute top-0.5 left-4 w-4 h-4 rounded-full bg-white shadow" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {selectedSection.type === 'Hero Banner' && (
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#9B9BB8] uppercase tracking-widest pt-2 border-t border-[#F4F4F8]">Carousel Settings</p>
                <div className="flex items-center justify-between">
                  <label className="text-xs text-[#6B6B82]">Auto Play</label>
                  <button className="w-9 h-5 rounded-full bg-[#E8450A] relative">
                    <span className="absolute top-0.5 left-4 w-4 h-4 rounded-full bg-white shadow" />
                  </button>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Slide Duration (ms)</label>
                  <input type="number" defaultValue={5000} className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Transition</label>
                  <select className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none">
                    <option>Fade</option>
                    <option>Slide</option>
                    <option>Zoom</option>
                  </select>
                </div>
              </div>
            )}

            {selectedSection.type === 'Flash Sale' && (
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#9B9BB8] uppercase tracking-widest pt-2 border-t border-[#F4F4F8]">Flash Sale Config</p>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B6B82]">Sale Name</label>
                  <input defaultValue="Summer Flash Sale" className="w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-[#9B9BB8] mb-1 block">Start</label>
                    <input type="datetime-local" className="w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-[11px] text-[#111118] outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#9B9BB8] mb-1 block">End</label>
                    <input type="datetime-local" className="w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-[11px] text-[#111118] outline-none" />
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-[#F4F4F8] space-y-2">
              <button className="w-full py-2 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07] transition-colors">
                Save Changes
              </button>
              <button className="w-full py-2 border border-[#E2E2EC] text-[#6B6B82] rounded-lg text-xs font-semibold hover:bg-[#F4F4F8] transition-colors">
                Preview Section
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#F4F4F8] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#C8C8E0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
              </svg>
            </div>
            <p className="text-xs text-[#9B9BB8]">Select a section to edit its properties</p>
          </div>
        )}
      </div>
    </div>
  )
}
