import { useEffect, useMemo, useRef, useState } from 'react'
import type { View } from '../app/navigation'
import { listProducts } from '@/api/marketplace'
import { useCatalog } from '@/state/catalog-store'

type Props = {
  cartCount: number
  wishlistCount?: number
  onCartOpen: () => void
  onNavigate: (v: View) => void
}

const navLinks = [
  { label: 'Mobiles', slug: 'mobiles' },
  { label: 'Electronics', slug: 'electronics' },
  { label: 'Fashion', slug: 'fashion' },
  { label: 'Beauty', slug: 'beauty' },
  { label: 'Home & Living', slug: 'home' },
  { label: 'Gaming', slug: 'gaming' },
  { label: 'Deals', slug: 'deals' },
]

const fallbackSuggestions = ['wireless headphones', 'iphone 15 pro', 'nike air max', 'macbook air m3', 'dyson hair dryer', 'samsung galaxy s24']

export default function Header({ cartCount, wishlistCount = 0, onCartOpen, onNavigate }: Props) {
  const [searchFocused, setSearchFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ id: string; title: string; vendor: string; category: string; price: number; image: string }>>([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const { categories } = useCatalog()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const query = searchQuery.trim()

    if (!searchFocused || query.length < 2) {
      setSearchResults([])
      setSearchLoading(false)
      return
    }

    let cancelled = false
    setSearchLoading(true)

    const timeout = window.setTimeout(() => {
      void (async () => {
        const response = await listProducts({ q: query, limit: 5 })

        if (cancelled) return

        if (response.success) {
          setSearchResults(
            response.data.map(product => ({
              id: product.id,
              title: product.title,
              vendor: product.vendor,
              category: product.category,
              price: product.price,
              image: product.image,
            })),
          )
        } else {
          setSearchResults([])
        }

        setSearchLoading(false)
      })()
    }, 220)

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
    }
  }, [searchFocused, searchQuery])

  const suggestions = useMemo(() => {
    if (!searchQuery) return fallbackSuggestions
    return fallbackSuggestions.filter(suggestion => suggestion.includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E7E2]">
      <div className="bg-[#0E0E0E] text-white text-xs">
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 transition-colors hover:text-[#E8450A]">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Deliver to: Karachi, Pakistan (PKR)</span>
            </button>
          </div>
          <div className="flex items-center gap-6 text-[#9CA3AF]">
            <button className="transition-colors hover:text-white">Customer Support</button>
            <button className="transition-colors hover:text-white">Track Order</button>
            <button className="font-semibold text-white transition-colors hover:text-[#E8450A]">Sell on Salman</button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex h-16 items-center gap-6">
          <button onClick={() => onNavigate({ type: 'home' })} className="group flex flex-shrink-0 items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8450A]">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="font-display text-xl font-semibold tracking-tight text-[#0E0E0E]">Nexus</span>
          </button>

          <div className="relative" onMouseEnter={() => setMegaMenuOpen(true)} onMouseLeave={() => setMegaMenuOpen(false)}>
            <button className="flex h-10 flex-shrink-0 items-center gap-2 rounded-xl bg-[#F3F2EF] px-4 text-sm font-semibold transition-colors hover:bg-[#E8E7E2]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              All Categories
              <svg className="h-3.5 w-3.5 text-[#6B6A66]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {megaMenuOpen && (
              <div className="fade-in absolute left-0 top-full mt-2 w-64 rounded-2xl border border-[#E8E7E2] bg-white py-2 shadow-2xl">
                {navLinks.map(link => (
                  <button
                    key={link.slug}
                    onClick={() => {
                      onNavigate({ type: 'category', slug: link.slug })
                      setMegaMenuOpen(false)
                    }}
                    className="flex w-full items-center justify-between px-5 py-2.5 text-left text-sm font-medium text-[#0E0E0E] transition-colors hover:bg-[#F3F2EF] hover:text-[#E8450A]"
                  >
                    {link.label}
                    <svg className="h-3.5 w-3.5 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div ref={searchRef} className="relative max-w-2xl flex-1">
            <div className={`flex h-11 items-center rounded-xl border-2 transition-colors ${searchFocused ? 'border-[#E8450A] bg-white' : 'border-[#E8E7E2] bg-[#F9F8F5]'}`}>
              <svg className="ml-3.5 h-5 w-5 flex-shrink-0 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products, brands and categories..."
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value)
                  setSearchFocused(true)
                }}
                onFocus={() => setSearchFocused(true)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    onNavigate({ type: 'search', q: searchQuery.trim() })
                    setSearchFocused(false)
                  }
                }}
                className="flex-1 bg-transparent px-3 text-sm text-[#0E0E0E] outline-none placeholder:text-[#9CA3AF]"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="mr-2 text-[#9CA3AF] hover:text-[#0E0E0E]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => {
                  if (searchQuery.trim()) {
                    onNavigate({ type: 'search', q: searchQuery.trim() })
                    setSearchFocused(false)
                  }
                }}
                className="flex-shrink-0 rounded-r-[10px] bg-[#E8450A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#C93A07]"
              >
                Search
              </button>
            </div>

            {searchFocused && (
              <div className="fade-in absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-[#E8E7E2] bg-white py-3 shadow-2xl">
                <div className="mb-2 border-b border-[#E8E7E2] px-4 pb-2">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    {searchQuery ? 'Search Results' : 'Popular Searches'}
                  </p>

                  {searchLoading ? (
                    <p className="px-2 py-2 text-sm text-[#6B6A66]">Searching catalog...</p>
                  ) : searchQuery ? (
                    <div className="space-y-1">
                      {searchResults.map(result => (
                        <button
                          key={result.id}
                          onClick={() => {
                            onNavigate({ type: 'product', id: result.id })
                            setSearchFocused(false)
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm text-[#0E0E0E] transition-colors hover:bg-[#F3F2EF]"
                        >
                          <img src={result.image} alt={result.title} className="h-10 w-10 flex-shrink-0 rounded-lg object-cover" />
                          <div className="min-w-0">
                            <p className="truncate font-medium">{result.title}</p>
                            <p className="truncate text-xs text-[#6B6A66]">
                              {result.vendor} · {result.category}
                            </p>
                          </div>
                          <span className="ml-auto font-mono text-xs font-semibold text-[#E8450A]">${result.price}</span>
                        </button>
                      ))}

                      {searchResults.length === 0 && (
                        <p className="px-2 py-2 text-sm text-[#6B6A66]">No matching products found.</p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {suggestions.slice(0, 5).map(suggestion => (
                        <button
                          key={suggestion}
                          onClick={() => setSearchQuery(suggestion)}
                          className="flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left text-sm text-[#0E0E0E] transition-colors hover:bg-[#F3F2EF]"
                        >
                          <svg className="h-4 w-4 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="px-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Top Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(0, 4).map(category => (
                      <button
                        key={category.slug}
                        onClick={() => {
                          onNavigate({ type: 'category', slug: category.slug })
                          setSearchFocused(false)
                        }}
                        className="rounded-full bg-[#F3F2EF] px-3 py-1 text-xs font-medium text-[#0E0E0E] transition-colors hover:bg-[#E8450A] hover:text-white"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-shrink-0 items-center gap-1">
            <button className="group relative flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 transition-colors hover:bg-[#F3F2EF]">
              <svg className="h-[22px] w-[22px] text-[#0E0E0E] transition-colors group-hover:text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-[10px] text-[#6B6A66]">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E11D48] text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate({ type: 'account' })}
              className="group flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 transition-colors hover:bg-[#F3F2EF]"
            >
              <svg className="h-[22px] w-[22px] text-[#0E0E0E] transition-colors group-hover:text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[10px] text-[#6B6A66]">Account</span>
            </button>

            <button
              onClick={onCartOpen}
              className="group relative ml-1 flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 transition-colors hover:bg-[#F3F2EF]"
            >
              <svg className="h-[22px] w-[22px] text-[#0E0E0E] transition-colors group-hover:text-[#E8450A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-[10px] text-[#6B6A66]">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#E8450A] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="scroll-container flex items-center gap-1 overflow-x-auto pb-3">
          {navLinks.map(link => (
            <button
              key={link.slug}
              onClick={() => onNavigate({ type: 'category', slug: link.slug })}
              className="flex-shrink-0 rounded-lg px-4 py-1.5 text-sm font-medium text-[#6B6A66] transition-colors hover:bg-[#F3F2EF] hover:text-[#0E0E0E]"
            >
              {link.label}
            </button>
          ))}
          <span className="mx-2 text-[#E8E7E2]">|</span>
          <button className="flex-shrink-0 rounded-lg px-4 py-1.5 text-sm font-semibold text-[#E8450A] transition-colors hover:bg-[#FFF7F5]">
            Flash Sale
          </button>
        </div>
      </div>
    </header>
  )
}
