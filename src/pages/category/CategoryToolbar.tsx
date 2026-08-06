type SortKey = 'popular' | 'newest' | 'price-asc' | 'price-desc' | 'rating'

type Props = {
  sortBy: SortKey
  viewMode: 'grid' | 'list'
  filterOpen: boolean
  onToggleFilterOpen: () => void
  onSortChange: (value: SortKey) => void
  onViewModeChange: (value: 'grid' | 'list') => void
  resultsCount: number
}

export default function CategoryToolbar({ sortBy, viewMode, onToggleFilterOpen, onSortChange, onViewModeChange, resultsCount }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <button onClick={onToggleFilterOpen} className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-[#E8E7E2] text-sm font-semibold hover:bg-[#F3F2EF] transition-colors">
          Filters
        </button>
        <p className="text-sm text-[#6B6A66]"><span className="font-semibold text-[#0E0E0E]">{resultsCount}</span> results</p>
      </div>
      <div className="flex items-center gap-3">
        <select value={sortBy} onChange={e => onSortChange(e.target.value as SortKey)} className="h-10 px-3 pr-8 bg-white border border-[#E8E7E2] rounded-xl text-sm font-medium text-[#0E0E0E] outline-none focus:border-[#E8450A] transition-colors appearance-none cursor-pointer">
          <option value="popular">Most Popular</option>
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
        <div className="flex rounded-xl border border-[#E8E7E2] overflow-hidden bg-white">
          <button onClick={() => onViewModeChange('grid')} className={`px-3 py-2.5 transition-colors ${viewMode === 'grid' ? 'bg-[#0E0E0E] text-white' : 'text-[#6B6A66] hover:bg-[#F3F2EF]'}`}>▦</button>
          <button onClick={() => onViewModeChange('list')} className={`px-3 py-2.5 transition-colors ${viewMode === 'list' ? 'bg-[#0E0E0E] text-white' : 'text-[#6B6A66] hover:bg-[#F3F2EF]'}`}>☰</button>
        </div>
      </div>
    </div>
  )
}
