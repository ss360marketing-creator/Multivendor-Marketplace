import { useState } from 'react'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const tabs = ['Global SEO', 'Product SEO', 'Category SEO', 'Sitemap', 'Redirects']

const globalFields = {
  siteTitle: 'Nexus Marketplace — Shop Premium Products Online',
  metaDescription: 'Discover thousands of premium products from top vendors. Electronics, fashion, beauty, home & more. Fast shipping, easy returns.',
  ogImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=630&fit=crop&auto=format',
  robots: 'index, follow',
  canonicalDomain: 'https://nexusmarket.com',
}

const productSEO = [
  { name: 'The Ordinary HA 2%+B5', score: 92, title: 'OK', description: 'OK', keywords: 'Good', url: '/products/ordinary-ha-2' },
  { name: 'Nike Air Max 270', score: 78, title: 'OK', description: 'Short', keywords: 'OK', url: '/products/nike-air-max-270' },
  { name: 'Sony WH-1000XM5', score: 84, title: 'OK', description: 'OK', keywords: 'OK', url: '/products/sony-wh-1000xm5' },
  { name: 'MacBook Air M3', score: 61, title: 'Long', description: 'Missing', keywords: 'Weak', url: '/products/macbook-air-m3' },
]

const ScoreBadge = ({ score }: { score: number }) => (
  <div className={`flex items-center justify-center w-10 h-10 rounded-xl font-mono font-black text-sm ${score >= 80 ? 'bg-[#D1FAE5] text-[#065F46]' : score >= 60 ? 'bg-[#FEF3C7] text-[#92400E]' : 'bg-[#FEE2E2] text-[#991B1B]'}`}>{score}</div>
)

export default function SEOAdmin({ onNavigate: _ }: Props) {
  const [tab, setTab] = useState('Global SEO')
  const [siteTitle, setSiteTitle] = useState(globalFields.siteTitle)
  const [metaDesc, setMetaDesc] = useState(globalFields.metaDescription)
  const [previewType, setPreviewType] = useState<'google' | 'social'>('google')

  const titleLen = siteTitle.length
  const descLen = metaDesc.length

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">SEO Management</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Control how your marketplace appears in search engines</p>
        </div>
        <button className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]">Save Changes</button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-[#E2E2EC]">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-3 text-sm font-semibold border-b-2 transition-all -mb-px ${tab === t ? 'border-[#E8450A] text-[#E8450A]' : 'border-transparent text-[#9B9BB8] hover:text-[#6B6B82]'}`}>{t}</button>
        ))}
      </div>

      {tab === 'Global SEO' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: form */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
              <h3 className="font-semibold text-[#111118]">Default Meta Tags</h3>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#6B6B82]">Site Title</label>
                  <span className={`text-[11px] font-mono ${titleLen > 60 ? 'text-[#E11D48]' : titleLen > 50 ? 'text-[#D97706]' : 'text-[#059669]'}`}>{titleLen}/60</span>
                </div>
                <input value={siteTitle} onChange={e => setSiteTitle(e.target.value)} className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
                <p className="text-[11px] text-[#9B9BB8]">Shown in browser tabs and search results</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#6B6B82]">Meta Description</label>
                  <span className={`text-[11px] font-mono ${descLen > 160 ? 'text-[#E11D48]' : descLen < 120 ? 'text-[#D97706]' : 'text-[#059669]'}`}>{descLen}/160</span>
                </div>
                <textarea value={metaDesc} onChange={e => setMetaDesc(e.target.value)} rows={3} className="w-full px-3 py-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] resize-none" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">Canonical Domain</label>
                <input defaultValue={globalFields.canonicalDomain} className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A]" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">Robots Directive</label>
                <select className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none">
                  <option>index, follow</option>
                  <option>noindex, follow</option>
                  <option>index, nofollow</option>
                  <option>noindex, nofollow</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
              <h3 className="font-semibold text-[#111118]">Open Graph / Social</h3>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">OG Image URL</label>
                <input defaultValue={globalFields.ogImage} className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A]" />
                <p className="text-[11px] text-[#9B9BB8]">Recommended: 1200×630px</p>
              </div>
              <div className="rounded-lg overflow-hidden border border-[#E2E2EC] h-32">
                <img src={`${globalFields.ogImage}`} alt="OG preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: preview */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-[#E2E2EC] p-5">
              <div className="flex items-center gap-2 mb-4">
                <p className="text-sm font-semibold text-[#111118]">Preview</p>
                <div className="flex items-center gap-1 ml-auto bg-[#F4F4F8] rounded-lg p-1">
                  {(['google', 'social'] as const).map(p => (
                    <button key={p} onClick={() => setPreviewType(p)} className={`px-3 py-1 rounded-md text-xs font-semibold capitalize transition-all ${previewType === p ? 'bg-white shadow-sm text-[#111118]' : 'text-[#9B9BB8]'}`}>{p === 'google' ? 'Google' : 'Social'}</button>
                  ))}
                </div>
              </div>

              {previewType === 'google' ? (
                <div className="p-4 border border-[#E2E2EC] rounded-xl space-y-1">
                  <p className="text-[11px] text-[#059669] font-mono">nexusmarket.com</p>
                  <p className="text-[#1A0DAB] font-semibold text-base leading-tight hover:underline cursor-pointer line-clamp-1">{siteTitle}</p>
                  <p className="text-[#4D5156] text-sm leading-relaxed line-clamp-2">{metaDesc}</p>
                </div>
              ) : (
                <div className="border border-[#E2E2EC] rounded-xl overflow-hidden">
                  <div className="h-40 bg-[#F4F4F8]">
                    <img src={globalFields.ogImage} alt="OG" className="w-full h-full object-cover" />
                  </div>
                  <div className="px-3 py-2.5 bg-[#F2F3F5]">
                    <p className="text-[10px] uppercase text-[#90949C] font-semibold tracking-wide">NEXUSMARKET.COM</p>
                    <p className="text-sm font-bold text-[#1D2129] line-clamp-1 mt-0.5">{siteTitle}</p>
                    <p className="text-xs text-[#606770] line-clamp-1">{metaDesc}</p>
                  </div>
                </div>
              )}
            </div>

            {/* SEO Health */}
            <div className="bg-white rounded-xl border border-[#E2E2EC] p-5">
              <h3 className="font-semibold text-[#111118] mb-3">SEO Health Checklist</h3>
              <div className="space-y-2.5">
                {[
                  { label: 'Site title length', ok: titleLen > 0 && titleLen <= 60 },
                  { label: 'Meta description length', ok: descLen >= 120 && descLen <= 160 },
                  { label: 'Canonical URL set', ok: true },
                  { label: 'OG image configured', ok: true },
                  { label: 'Sitemap submitted', ok: true },
                  { label: 'Robots.txt valid', ok: true },
                  { label: 'HTTPS enabled', ok: true },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${c.ok ? 'bg-[#D1FAE5]' : 'bg-[#FEE2E2]'}`}>
                      {c.ok ? (
                        <svg className="w-3 h-3 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-3 h-3 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </div>
                    <span className={`text-sm ${c.ok ? 'text-[#111118]' : 'text-[#E11D48] font-semibold'}`}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'Product SEO' && (
        <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                {['Product', 'SEO Score', 'Title', 'Description', 'Keywords', 'URL Slug', 'Actions'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {productSEO.map(p => (
                <tr key={p.name} className="hover:bg-[#F9F9FC] transition-colors">
                  <td className="px-5 py-3.5 font-semibold text-[#111118]">{p.name}</td>
                  <td className="px-5 py-3.5"><ScoreBadge score={p.score} /></td>
                  {[p.title, p.description, p.keywords].map((v, i) => (
                    <td key={i} className="px-5 py-3.5">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${v === 'OK' || v === 'Good' ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#FEF3C7] text-[#92400E]'}`}>{v}</span>
                    </td>
                  ))}
                  <td className="px-5 py-3.5 font-mono text-xs text-[#9B9BB8]">{p.url}</td>
                  <td className="px-5 py-3.5">
                    <button className="text-xs font-semibold text-[#E8450A] hover:underline">Edit SEO</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Category SEO' && (
        <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]">
            <h3 className="font-semibold text-[#111118]">Category SEO Settings</h3>
            <button className="px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]">Save All</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                {['Category', 'Score', 'Meta Title', 'Meta Desc', 'URL Slug', 'Products', 'Actions'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {[
                { cat: 'Electronics', score: 88, title: 'OK', desc: 'OK', slug: '/electronics', products: 1284 },
                { cat: 'Fashion & Apparel', score: 72, title: 'OK', desc: 'Short', slug: '/fashion', products: 4820 },
                { cat: 'Beauty & Skincare', score: 94, title: 'OK', desc: 'OK', slug: '/beauty', products: 892 },
                { cat: 'Home & Living', score: 65, title: 'Long', desc: 'Missing', slug: '/home-living', products: 2140 },
                { cat: 'Sports & Outdoors', score: 81, title: 'OK', desc: 'OK', slug: '/sports', products: 640 },
                { cat: 'Books & Stationery', score: 58, title: 'Missing', desc: 'Missing', slug: '/books', products: 380 },
              ].map(c => (
                <tr key={c.cat} className="hover:bg-[#F9F9FC] transition-colors">
                  <td className="px-5 py-3.5 font-semibold text-[#111118]">{c.cat}</td>
                  <td className="px-5 py-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-sm ${c.score >= 80 ? 'bg-[#D1FAE5] text-[#065F46]' : c.score >= 60 ? 'bg-[#FEF3C7] text-[#92400E]' : 'bg-[#FEE2E2] text-[#991B1B]'}`}>{c.score}</div>
                  </td>
                  {[c.title, c.desc].map((v, i) => (
                    <td key={i} className="px-5 py-3.5">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${v === 'OK' ? 'bg-[#D1FAE5] text-[#065F46]' : v === 'Missing' ? 'bg-[#FEE2E2] text-[#991B1B]' : 'bg-[#FEF3C7] text-[#92400E]'}`}>{v}</span>
                    </td>
                  ))}
                  <td className="px-5 py-3.5 font-mono text-xs text-[#9B9BB8]">{c.slug}</td>
                  <td className="px-5 py-3.5 font-mono text-sm text-[#6B6B82]">{c.products.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <button className="text-xs font-semibold text-[#E8450A] hover:underline">Edit SEO</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Sitemap' && (
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Total URLs', value: '12,481', icon: '🗺️' },
              { label: 'Last Generated', value: 'Jul 25, 2025', icon: '🕒' },
              { label: 'Submitted to Google', value: 'Verified ✓', icon: '🔍' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-xl border border-[#E2E2EC] px-5 py-4 flex items-center gap-4">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{s.label}</p>
                  <p className="font-mono font-bold text-lg text-[#111118] mt-0.5">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#111118]">Sitemap Index</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Regenerate</button>
                <button className="px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]">Submit to Google</button>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { file: 'sitemap-products.xml', urls: 4284, lastmod: 'Jul 25, 2025' },
                { file: 'sitemap-categories.xml', urls: 48, lastmod: 'Jul 20, 2025' },
                { file: 'sitemap-vendors.xml', urls: 312, lastmod: 'Jul 24, 2025' },
                { file: 'sitemap-pages.xml', urls: 18, lastmod: 'Jul 10, 2025' },
                { file: 'sitemap-blog.xml', urls: 84, lastmod: 'Jul 22, 2025' },
              ].map(s => (
                <div key={s.file} className="flex items-center justify-between py-3 border-b border-[#F4F4F8] last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F4F4F8] flex items-center justify-center text-xs">🗂️</div>
                    <div>
                      <p className="text-sm font-mono font-semibold text-[#111118]">{s.file}</p>
                      <p className="text-xs text-[#9B9BB8]">Last modified: {s.lastmod}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-[#6B6B82]">{s.urls.toLocaleString()} URLs</span>
                    <button className="text-xs font-semibold text-[#E8450A] hover:underline">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'Redirects' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#111118]">URL Redirects</h3>
              <button className="px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]">+ Add Redirect</button>
            </div>
            {/* Create form */}
            <div className="flex items-center gap-3 bg-[#F9F9FC] rounded-xl p-3">
              <div className="flex-1 space-y-1.5">
                <label className="text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide">From (old URL)</label>
                <input placeholder="/old-product-slug" className="w-full h-9 px-3 bg-white border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]" />
              </div>
              <div className="mt-5 text-[#9B9BB8]">→</div>
              <div className="flex-1 space-y-1.5">
                <label className="text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide">To (new URL)</label>
                <input placeholder="/new-product-slug" className="w-full h-9 px-3 bg-white border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide">Type</label>
                <select className="h-9 px-3 bg-white border border-[#E2E2EC] rounded-lg text-sm outline-none">
                  <option>301 Permanent</option>
                  <option>302 Temporary</option>
                </select>
              </div>
              <button className="mt-5 px-4 py-2 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07] flex-shrink-0">Add</button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                  {['From URL', 'To URL', 'Type', 'Hits', 'Created', ''].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {[
                  { from: '/products/iphone-14', to: '/products/iphone-15', type: '301', hits: 8421, date: 'Jun 12, 2025' },
                  { from: '/sale', to: '/category/flash-sale', type: '301', hits: 3284, date: 'Jul 1, 2025' },
                  { from: '/shop/beauty', to: '/category/beauty', type: '301', hits: 1842, date: 'May 20, 2025' },
                  { from: '/brand/apple', to: '/brands/apple', type: '301', hits: 924, date: 'Apr 5, 2025' },
                ].map(r => (
                  <tr key={r.from} className="hover:bg-[#F9F9FC] transition-colors">
                    <td className="px-5 py-3.5 font-mono text-xs text-[#E11D48]">{r.from}</td>
                    <td className="px-5 py-3.5 font-mono text-xs text-[#059669]">{r.to}</td>
                    <td className="px-5 py-3.5"><span className="text-xs font-semibold bg-[#EEF2FF] text-[#4338CA] px-2 py-0.5 rounded-full">{r.type}</span></td>
                    <td className="px-5 py-3.5 font-mono text-sm text-[#111118]">{r.hits.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-xs text-[#9B9BB8]">{r.date}</td>
                    <td className="px-5 py-3.5">
                      <button className="text-xs font-semibold text-[#E11D48] hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
