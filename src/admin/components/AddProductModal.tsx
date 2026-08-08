import { useState } from 'react'
import type { Product } from '@/data/marketplace'
import type { AdminProduct } from '@/api/admin'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSave: (productData: Partial<AdminProduct> & Partial<Product>) => Promise<void>
}

const PRESET_IMAGES = [
  { label: 'Headphones', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&auto=format' },
  { label: 'Smartphone', url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop&auto=format' },
  { label: 'Laptop', url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop&auto=format' },
  { label: 'Sneakers', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&auto=format' },
  { label: 'Smart Watch', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&auto=format' },
  { label: 'Tea Set', url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=800&fit=crop&auto=format' },
]

const CATEGORIES = [
  { name: 'Mobiles', slug: 'mobiles' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Laptops', slug: 'laptops' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Beauty', slug: 'beauty' },
  { name: 'Home & Living', slug: 'home' },
  { name: 'Gaming', slug: 'gaming' },
  { name: 'Accessories', slug: 'accessories' },
]

const VENDORS = [
  { id: 'v1', name: 'SoundVault' },
  { id: 'v2', name: 'TechArmor' },
  { id: 'v3', name: 'SneakerHead' },
  { id: 'v4', name: 'GlowUp Beauty' },
  { id: 'v5', name: 'HomeCraft' },
  { id: 'v6', name: 'PixelGear' },
]

export default function AddProductModal({ isOpen, onClose, onSave }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState<'basic' | 'pricing' | 'media' | 'variants' | 'publish'>('basic')

  // Form State
  const [title, setTitle] = useState('')
  const [vendorName, setVendorName] = useState('SoundVault')
  const [categoryName, setCategoryName] = useState('Electronics')
  const [badge, setBadge] = useState<'bestseller' | 'flash' | 'new' | 'sponsored' | ''>('new')
  const [description, setDescription] = useState('')

  const [price, setPrice] = useState('149.99')
  const [originalPrice, setOriginalPrice] = useState('199.99')
  const [stock, setStock] = useState('45')
  const [installment, setInstallment] = useState('$12.50/mo for 12 mos')
  const [freeShipping, setFreeShipping] = useState(true)

  const [primaryImage, setPrimaryImage] = useState(PRESET_IMAGES[0].url)
  const [galleryImages, setGalleryImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop&auto=format',
  ])
  const [newGalleryUrl, setNewGalleryUrl] = useState('')

  const [colorsText, setColorsText] = useState('Space Gray, Silver, Midnight Blue')
  const [sizesText, setSizesText] = useState('Standard, Pro')
  const [features, setFeatures] = useState<string[]>([
    'Premium High-Fidelity Audio output with Deep Bass',
    'Ergonomic all-day comfort design with soft earcups',
    'Long-lasting rechargeable battery with Quick Charge support',
  ])
  const [newFeatureText, setNewFeatureText] = useState('')

  const [status, setStatus] = useState<'PUBLISHED' | 'DRAFT'>('PUBLISHED')

  if (!isOpen) return null

  // Calculate discount % automatically
  const numPrice = parseFloat(price) || 0
  const numOrigPrice = parseFloat(originalPrice) || numPrice
  const calcDiscount = numOrigPrice > numPrice ? Math.round(((numOrigPrice - numPrice) / numOrigPrice) * 100) : 0

  const handleAddFeature = () => {
    if (newFeatureText.trim()) {
      setFeatures(prev => [...prev, newFeatureText.trim()])
      setNewFeatureText('')
    }
  }

  const handleRemoveFeature = (idx: number) => {
    setFeatures(prev => prev.filter((_, i) => i !== idx))
  }

  const handleAddGalleryImage = () => {
    if (newGalleryUrl.trim()) {
      setGalleryImages(prev => [...prev, newGalleryUrl.trim()])
      setNewGalleryUrl('')
    }
  }

  const handleRemoveGalleryImage = (idx: number) => {
    setGalleryImages(prev => prev.filter((_, i) => i !== idx))
  }

  const handlePrimaryFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setPrimaryImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGalleryFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setGalleryImages(prev => [...prev, event.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      setActiveTab('basic')
      return
    }

    setSubmitting(true)
    try {
      const selectedCategory = CATEGORIES.find(c => c.name === categoryName) ?? CATEGORIES[1]
      const selectedVendor = VENDORS.find(v => v.name === vendorName) ?? VENDORS[0]

      const colorsArr = colorsText.split(',').map(c => c.trim()).filter(Boolean)
      const sizesArr = sizesText.split(',').map(s => s.trim()).filter(Boolean)
      const allImages = [primaryImage, ...galleryImages].filter(Boolean)

      const payload = {
        title: title.trim(),
        vendor: selectedVendor.name,
        vendorId: selectedVendor.id,
        verified: true,
        rating: 4.8,
        reviewCount: 1,
        price: numPrice,
        originalPrice: numOrigPrice,
        discount: calcDiscount,
        image: primaryImage,
        images: allImages,
        category: selectedCategory.name,
        categorySlug: selectedCategory.slug,
        freeShipping,
        badge: badge || undefined,
        stock: parseInt(stock) || 10,
        installment: installment.trim() || undefined,
        description: description.trim() || 'No description provided.',
        features,
        colors: colorsArr,
        sizes: sizesArr,
        status: status.toLowerCase(),
      }

      await onSave(payload)
      onClose()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-[#E2E2EC] w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#F9F9FC] border-b border-[#E2E2EC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8450A]/10 border border-[#E8450A]/20 flex items-center justify-center text-lg">
              ✨
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#111118]">Add New Product</h2>
              <p className="text-xs text-[#6B6B82]">Create a new catalog item matching the storefront specifications</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F4F4F8] hover:bg-[#E2E2EC] flex items-center justify-center text-[#6B6B82] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="px-6 border-b border-[#E2E2EC] bg-white flex items-center gap-2 overflow-x-auto scroll-container text-xs font-semibold text-[#6B6B82]">
          {[
            { key: 'basic', label: '1. Basic Info' },
            { key: 'pricing', label: '2. Pricing & Stock' },
            { key: 'media', label: '3. Images & Gallery' },
            { key: 'variants', label: '4. Colors & Features' },
            { key: 'publish', label: '5. Publishing' },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as typeof activeTab)}
              className={`py-3 px-3 border-b-2 transition-colors flex-shrink-0 ${
                activeTab === t.key
                  ? 'border-[#E8450A] text-[#E8450A] font-bold'
                  : 'border-transparent hover:text-[#111118]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* ── TAB 1: BASIC INFO ── */}
          {activeTab === 'basic' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">
                  Product Title <span className="text-[#E11D48]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sony WH-1000XM5 Wireless Headphones"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Vendor / Seller</label>
                  <select
                    value={vendorName}
                    onChange={e => setVendorName(e.target.value)}
                    className="mt-1.5 w-full h-11 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                  >
                    {VENDORS.map(v => (
                      <option key={v.id} value={v.name}>{v.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Category</label>
                  <select
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                    className="mt-1.5 w-full h-11 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.slug} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Promotional Badge</label>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {[
                    { key: '', label: 'None' },
                    { key: 'new', label: '🆕 New Arrival' },
                    { key: 'bestseller', label: '🔥 Best Seller' },
                    { key: 'flash', label: '⚡ Flash Sale' },
                    { key: 'sponsored', label: '⭐ Sponsored' },
                  ].map(b => (
                    <button
                      type="button"
                      key={b.key}
                      onClick={() => setBadge(b.key as typeof badge)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        badge === b.key
                          ? 'bg-[#E8450A] text-white border-[#E8450A]'
                          : 'bg-[#F9F9FC] border-[#E2E2EC] text-[#6B6B82] hover:border-[#111118]'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Product Description</label>
                <textarea
                  rows={4}
                  placeholder="Enter rich detailed product description, specifications, and overview..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="mt-1.5 w-full p-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A] transition-colors"
                />
              </div>
            </div>
          )}

          {/* ── TAB 2: PRICING & INVENTORY ── */}
          {activeTab === 'pricing' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">
                    Selling Price ($) <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="149.99"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono font-bold text-[#111118] outline-none focus:border-[#E8450A]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Original Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="199.99"
                    value={originalPrice}
                    onChange={e => setOriginalPrice(e.target.value)}
                    className="mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono text-[#6B6B82] outline-none focus:border-[#E8450A]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Calculated Discount</label>
                  <div className="mt-1.5 h-11 px-4 rounded-xl bg-[#FFF1F2] border border-[#FECACA] flex items-center font-bold text-sm text-[#E11D48]">
                    {calcDiscount > 0 ? `-${calcDiscount}% Off` : 'No Discount'}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Stock Quantity</label>
                  <input
                    type="number"
                    placeholder="50"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                    className="mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono text-[#111118] outline-none focus:border-[#E8450A]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Installment Terms</label>
                  <input
                    type="text"
                    placeholder="or $12.50/mo for 12 mos"
                    value={installment}
                    onChange={e => setInstallment(e.target.value)}
                    className="mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={freeShipping}
                    onChange={e => setFreeShipping(e.target.checked)}
                    className="w-5 h-5 accent-[#059669]"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#065F46]">Free Shipping Offered</p>
                    <p className="text-xs text-[#047857]">Buyers see a &ldquo;Free Delivery&rdquo; badge on product cards & page.</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* ── TAB 3: MEDIA & GALLERY ── */}
          {activeTab === 'media' && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Primary Cover Image</label>
                <p className="text-xs text-[#9B9BB8] mb-2">Upload a cover image file from your computer or enter an image URL</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={primaryImage}
                    onChange={e => setPrimaryImage(e.target.value)}
                    className="flex-1 h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                  />
                  <label className="cursor-pointer px-4 h-11 bg-[#E8450A] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#C93A07] transition-all flex-shrink-0 shadow-sm">
                    <input type="file" accept="image/*" onChange={handlePrimaryFileUpload} className="hidden" />
                    📁 Upload Primary File
                  </label>
                </div>
              </div>

              {/* Presets */}
              <div>
                <p className="text-xs font-semibold text-[#6B6B82] mb-2">Or Pick a High-Res Preset:</p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {PRESET_IMAGES.map(p => (
                    <button
                      type="button"
                      key={p.label}
                      onClick={() => setPrimaryImage(p.url)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all group ${
                        primaryImage === p.url ? 'border-[#E8450A] ring-2 ring-[#E8450A]/30' : 'border-[#E2E2EC]'
                      }`}
                    >
                      <img src={p.url} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] font-bold text-center py-0.5 truncate">
                        {p.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cover Preview */}
              {primaryImage && (
                <div className="p-4 rounded-2xl bg-[#F9F9FC] border border-[#E2E2EC] flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border border-[#E2E2EC] flex-shrink-0 shadow-sm">
                    <img src={primaryImage} alt="Cover preview" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#059669] flex items-center gap-1">
                      <span>✓</span> Primary Cover Image Set
                    </p>
                    <p className="text-xs text-[#6B6B82] mt-0.5">This image will be displayed on product cards, catalog search, and main banner.</p>
                  </div>
                </div>
              )}

              {/* Additional Gallery Images */}
              <div className="pt-4 border-t border-[#E2E2EC] space-y-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Gallery Images (Multiple Upload)</label>
                  <p className="text-xs text-[#9B9BB8] mt-0.5">Upload multiple product shots or paste image URLs to populate the gallery slider</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    placeholder="Paste image URL here..."
                    value={newGalleryUrl}
                    onChange={e => setNewGalleryUrl(e.target.value)}
                    className="flex-1 h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                  />
                  <button
                    type="button"
                    onClick={handleAddGalleryImage}
                    className="px-4 h-10 rounded-xl bg-[#111118] text-white text-xs font-bold hover:bg-[#E8450A] transition-colors"
                  >
                    + Add URL
                  </button>
                  <label className="cursor-pointer px-4 h-10 bg-[#059669] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#047857] transition-all flex-shrink-0">
                    <input type="file" accept="image/*" multiple onChange={handleGalleryFilesUpload} className="hidden" />
                    📁 Upload Multiple Files
                  </label>
                </div>

                {galleryImages.length > 0 ? (
                  <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {galleryImages.map((imgUrl, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-[#E2E2EC] group shadow-sm">
                        <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(idx)}
                          className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold flex items-center justify-center shadow-md transition-transform hover:scale-110"
                          title="Remove image"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl border-2 border-dashed border-[#E2E2EC] text-center bg-[#F9F9FC]">
                    <p className="text-xs text-[#9B9BB8]">No gallery images added yet. Upload files or add URLs above.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── TAB 4: VARIANTS & FEATURES ── */}
          {activeTab === 'variants' && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Color Variants (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="Space Gray, Silver, Midnight Blue"
                  value={colorsText}
                  onChange={e => setColorsText(e.target.value)}
                  className="mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Size / Storage Specs (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="128GB, 256GB, 512GB OR Small, Medium, Large"
                  value={sizesText}
                  onChange={e => setSizesText(e.target.value)}
                  className="mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                />
              </div>

              {/* Key Features List */}
              <div className="pt-3 border-t border-[#E2E2EC]">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Key Features (Displayed on Product Page)</label>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Active Noise Cancellation with dual chips"
                    value={newFeatureText}
                    onChange={e => setNewFeatureText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                    className="flex-1 h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
                  />
                  <button
                    type="button"
                    onClick={handleAddFeature}
                    className="px-4 h-10 rounded-xl bg-[#111118] text-white text-xs font-bold hover:bg-[#E8450A] transition-colors"
                  >
                    + Add Feature
                  </button>
                </div>

                <div className="mt-3 space-y-2">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] text-xs">
                      <span className="text-[#111118] font-medium">✓ {feat}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(idx)}
                        className="text-red-500 hover:underline font-semibold ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 5: PUBLISHING ── */}
          {activeTab === 'publish' && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#111118]">Publishing Status</label>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setStatus('PUBLISHED')}
                    className={`p-5 rounded-2xl border-2 text-left transition-all ${
                      status === 'PUBLISHED'
                        ? 'border-[#059669] bg-[#F0FDF4]'
                        : 'border-[#E2E2EC] bg-[#F9F9FC] hover:border-[#111118]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-[#065F46]">🚀 Published</span>
                      {status === 'PUBLISHED' && <span className="text-xs text-[#059669] font-bold">Active</span>}
                    </div>
                    <p className="text-xs text-[#047857]">Product will immediately be live on the storefront and search results.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus('DRAFT')}
                    className={`p-5 rounded-2xl border-2 text-left transition-all ${
                      status === 'DRAFT'
                        ? 'border-[#6B6B82] bg-[#F4F4F8]'
                        : 'border-[#E2E2EC] bg-[#F9F9FC] hover:border-[#111118]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-[#111118]">📝 Draft</span>
                      {status === 'DRAFT' && <span className="text-xs text-[#6B6B82] font-bold">Saved Draft</span>}
                    </div>
                    <p className="text-xs text-[#6B6B82]">Saved in admin catalog only. Will not appear on the storefront yet.</p>
                  </button>
                </div>
              </div>

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-[#FFF7F5] border border-[#FECACA] space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#E8450A]">Product Preview Summary</p>
                <div className="flex items-center gap-4 pt-1">
                  <img src={primaryImage} alt="" className="w-14 h-14 rounded-xl object-cover bg-white border border-[#E2E2EC]" />
                  <div>
                    <p className="text-sm font-bold text-[#111118]">{title || 'Untitled Product'}</p>
                    <p className="text-xs text-[#6B6B82]">{vendorName} · {categoryName}</p>
                    <p className="text-xs font-mono font-bold text-[#E8450A] mt-0.5">${numPrice.toFixed(2)} {calcDiscount > 0 && `(-${calcDiscount}%)`}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[#F9F9FC] border-t border-[#E2E2EC] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-[#E2E2EC] text-sm font-semibold text-[#6B6B82] hover:bg-[#E2E2EC] transition-colors"
          >
            Cancel
          </button>

          <div className="flex items-center gap-3">
            {activeTab !== 'publish' ? (
              <button
                type="button"
                onClick={() => {
                  const tabsArr: typeof activeTab[] = ['basic', 'pricing', 'media', 'variants', 'publish']
                  const nextIdx = tabsArr.indexOf(activeTab) + 1
                  if (nextIdx < tabsArr.length) setActiveTab(tabsArr[nextIdx])
                }}
                className="px-5 py-2.5 rounded-xl bg-[#111118] text-white text-sm font-bold hover:bg-[#E8450A] transition-colors"
              >
                Next Step →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || !title.trim()}
                className="px-6 py-2.5 rounded-xl bg-[#E8450A] text-white text-sm font-bold hover:bg-[#C93A07] transition-colors shadow-lg shadow-[#E8450A]/20 disabled:opacity-50"
              >
                {submitting ? 'Creating Product...' : '✓ Create Product'}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
