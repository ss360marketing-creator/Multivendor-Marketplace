type Props = {
  selectedPriceRange: number | null
  minRating: number | null
  onlyFreeShipping: boolean
  onSelectPriceRange: (value: number | null) => void
  onSelectRating: (value: number | null) => void
  onToggleFreeShipping: () => void
  onClear: () => void
}

const priceRanges = [
  { label: 'Under $25', min: 0, max: 25 },
  { label: '$25 – $75', min: 25, max: 75 },
  { label: '$75 – $200', min: 75, max: 200 },
  { label: '$200 – $500', min: 200, max: 500 },
  { label: 'Over $500', min: 500, max: Infinity },
]

export default function CategoryFilters({ selectedPriceRange, minRating, onlyFreeShipping, onSelectPriceRange, onSelectRating, onToggleFreeShipping, onClear }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-bold text-[#0E0E0E] mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((r, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all ${selectedPriceRange === i ? 'bg-[#E8450A] border-[#E8450A]' : 'border-[#E8E7E2] group-hover:border-[#0E0E0E]'}`} onClick={() => onSelectPriceRange(selectedPriceRange === i ? null : i)} />
              <span className="text-sm text-[#6B6A66] group-hover:text-[#0E0E0E] transition-colors">{r.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#0E0E0E] mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[4.5, 4, 3.5, 3].map(r => (
            <label key={r} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all ${minRating === r ? 'bg-[#E8450A] border-[#E8450A]' : 'border-[#E8E7E2] group-hover:border-[#0E0E0E]'}`} onClick={() => onSelectRating(minRating === r ? null : r)} />
              <span className="text-xs text-[#6B6A66]">{r}+</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#0E0E0E] mb-3">Delivery</h4>
        <button onClick={onToggleFreeShipping} className={`w-10 h-6 rounded-full transition-all relative ${onlyFreeShipping ? 'bg-[#E8450A]' : 'bg-[#E8E7E2]'}`}>
          <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${onlyFreeShipping ? 'left-5' : 'left-1'}`} />
        </button>
      </div>
      {(selectedPriceRange !== null || minRating || onlyFreeShipping) && (
        <button onClick={onClear} className="text-sm font-semibold text-[#E8450A] hover:text-[#C93A07] transition-colors">
          Clear all filters
        </button>
      )}
    </div>
  )
}
