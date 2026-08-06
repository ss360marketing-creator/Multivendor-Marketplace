import type { Category } from '../../data/marketplace'

type Props = {
  category?: Category
  catName: string
  count: number
}

export default function CategoryHero({ category, catName, count }: Props) {
  return (
    <div className="relative h-48 overflow-hidden">
      {category?.image && <img src={category.image} alt={catName} className="w-full h-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/80 to-[#0E0E0E]/40" />
      <div className="absolute inset-0 flex flex-col justify-center max-w-[1280px] mx-auto px-6 gap-2">
        <nav className="flex items-center gap-2 text-xs text-white/60">
          <span>Home</span>
          <span>›</span>
          <span className="text-white">{catName}</span>
        </nav>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white">{catName}</h1>
        <p className="text-sm text-white/70">{count} products available</p>
      </div>
    </div>
  )
}
