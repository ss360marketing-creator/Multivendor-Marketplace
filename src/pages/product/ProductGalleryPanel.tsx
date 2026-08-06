import type { Product } from '../../data/marketplace'

type Props = {
  product: Product
  activeImage: number
  allImages: string[]
  onSelectImage: (index: number) => void
  wishlisted: boolean
  onToggleWishlist: () => void
}

export default function ProductGalleryPanel({ product, activeImage, allImages, onSelectImage, wishlisted, onToggleWishlist }: Props) {
  return (
    <div className="space-y-3">
      <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E7E2] aspect-square">
        <img src={allImages[activeImage]} alt={product.title} className="w-full h-full object-cover" />
        {product.discount > 0 && <div className="absolute top-4 left-4 bg-[#E11D48] text-white text-sm font-bold px-3 py-1.5 rounded-xl shadow">-{product.discount}% OFF</div>}
        <button onClick={onToggleWishlist} className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${wishlisted ? 'bg-[#E11D48] text-white' : 'bg-white text-[#6B6A66] hover:text-[#E11D48]'}`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto scroll-container">
          {allImages.map((img, i) => (
            <button key={i} onClick={() => onSelectImage(i)} className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${i === activeImage ? 'border-[#E8450A]' : 'border-[#E8E7E2] hover:border-[#0E0E0E]'}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
