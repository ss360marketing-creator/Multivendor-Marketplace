import { g as __toESM, i as require_jsx_runtime, l as listProducts, p as require_react, r as useCatalog } from "./index-BM41bWnP.js";
import { t as ProductCard } from "./ProductCard-Cuskg2O9.js";
//#region src/pages/search/SearchPageContent.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var popularSearches = [
	"wireless headphones",
	"iphone 15 pro",
	"nike air max",
	"macbook air",
	"dyson hair dryer",
	"samsung galaxy",
	"gaming mouse",
	"skincare set"
];
var relatedCategories = [
	{
		label: "Electronics",
		slug: "electronics"
	},
	{
		label: "Mobiles",
		slug: "mobiles"
	},
	{
		label: "Fashion",
		slug: "fashion"
	},
	{
		label: "Beauty",
		slug: "beauty"
	},
	{
		label: "Home & Living",
		slug: "home"
	},
	{
		label: "Gaming",
		slug: "gaming"
	}
];
function SkeletonCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] animate-pulse",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square bg-[#F3F2EF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-[#F3F2EF] rounded w-2/3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-[#F3F2EF] rounded" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-[#F3F2EF] rounded w-1/2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 bg-[#F3F2EF] rounded w-1/3 mt-2" })
			]
		})]
	});
}
function SearchPageContent({ q, onNavigate, wishlist, onToggleWishlist, onAddToCart }) {
	const { products: fallbackProducts, categories } = useCatalog();
	const [liveResults, setLiveResults] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [sortBy, setSortBy] = (0, import_react.useState)("relevant");
	const [minRating, setMinRating] = (0, import_react.useState)(null);
	const [onlyFreeShipping, setOnlyFreeShipping] = (0, import_react.useState)(false);
	const [selectedPriceRange, setSelectedPriceRange] = (0, import_react.useState)(null);
	const [searchInput, setSearchInput] = (0, import_react.useState)(q);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setSearchInput(q);
		if (!q.trim()) {
			setLiveResults(null);
			return;
		}
		let cancelled = false;
		setLoading(true);
		(async () => {
			const response = await listProducts({
				q: q.trim(),
				limit: 48
			});
			if (cancelled) return;
			if (response.success) setLiveResults(response.data);
			else setLiveResults([]);
			setLoading(false);
		})();
		return () => {
			cancelled = true;
		};
	}, [q]);
	const priceRanges = [
		"Under $25",
		"$25 – $75",
		"$75 – $200",
		"$200 – $500",
		"Over $500"
	];
	const priceLow = [
		0,
		25,
		75,
		200,
		500
	];
	const priceHigh = [
		25,
		75,
		200,
		500,
		Infinity
	];
	const baseResults = (0, import_react.useMemo)(() => {
		if (liveResults !== null) return liveResults;
		if (!q.trim()) return fallbackProducts.slice(0, 24);
		const lower = q.toLowerCase();
		return fallbackProducts.filter((p) => p.title.toLowerCase().includes(lower) || p.vendor.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower));
	}, [
		q,
		liveResults,
		fallbackProducts
	]);
	const filteredResults = (0, import_react.useMemo)(() => {
		let list = [...baseResults];
		if (selectedPriceRange !== null) list = list.filter((p) => p.price >= priceLow[selectedPriceRange] && p.price < priceHigh[selectedPriceRange]);
		if (minRating) list = list.filter((p) => p.rating >= minRating);
		if (onlyFreeShipping) list = list.filter((p) => p.freeShipping);
		switch (sortBy) {
			case "price-asc":
				list.sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				list.sort((a, b) => b.price - a.price);
				break;
			case "rating":
				list.sort((a, b) => b.rating - a.rating);
				break;
			case "newest": list.reverse();
		}
		return list;
	}, [
		baseResults,
		sortBy,
		minRating,
		onlyFreeShipping,
		selectedPriceRange
	]);
	const handleSearchSubmit = () => {
		if (searchInput.trim() && searchInput.trim() !== q) onNavigate({
			type: "search",
			q: searchInput.trim()
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#F9F8F5] min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-white border-b border-[#E8E7E2]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-2 text-xs text-[#9CA3AF] mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onNavigate({ type: "home" }),
								className: "hover:text-[#E8450A] transition-colors",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-3 h-3",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M9 5l7 7-7 7"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#0E0E0E]",
								children: "Search"
							}),
							q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-3 h-3",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M9 5l7 7-7 7"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[#0E0E0E] font-medium truncate max-w-[200px]",
								children: [
									"“",
									q,
									"”"
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 flex h-12 items-center rounded-xl border-2 border-[#E8450A] bg-white shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "ml-4 h-5 w-5 flex-shrink-0 text-[#9CA3AF]",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: inputRef,
									type: "text",
									value: searchInput,
									onChange: (e) => setSearchInput(e.target.value),
									onKeyDown: (e) => e.key === "Enter" && handleSearchSubmit(),
									placeholder: "Search products, brands and categories...",
									className: "flex-1 bg-transparent px-3 text-sm text-[#0E0E0E] outline-none placeholder:text-[#9CA3AF]"
								}),
								searchInput && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearchInput(""),
									className: "mr-2 text-[#9CA3AF] hover:text-[#0E0E0E]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2.5,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M6 18L18 6M6 6l12 12"
										})
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSearchSubmit,
							className: "h-12 px-6 rounded-xl bg-[#E8450A] text-white font-semibold text-sm hover:bg-[#C93A07] transition-colors",
							children: "Search"
						})]
					}),
					q && !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-[#6B6A66]",
								children: filteredResults.length === 0 ? "No results found" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-[#0E0E0E]",
										children: filteredResults.length.toLocaleString()
									}),
									" results for ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-[#0E0E0E]",
										children: [
											"“",
											q,
											"”"
										]
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#E8E7E2]",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: relatedCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate({
										type: "category",
										slug: cat.slug
									}),
									className: "px-3 py-1 rounded-full bg-[#F3F2EF] text-xs font-medium text-[#0E0E0E] hover:bg-[#E8450A] hover:text-white transition-colors",
									children: cat.label
								}, cat.slug))
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 py-8",
			children: [!q.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FFF7F5] flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-10 h-10 text-[#E8450A]",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 1.5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-semibold text-[#0E0E0E] mb-2",
						children: "What are you looking for?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[#6B6A66] text-sm mb-8",
						children: "Search millions of products across thousands of verified sellers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4",
						children: "Popular Searches"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-3",
						children: popularSearches.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onNavigate({
								type: "search",
								q: term
							}),
							className: "px-5 py-2.5 rounded-xl border border-[#E8E7E2] bg-white text-sm font-medium text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors",
							children: term
						}, term))
					})] })
				]
			}), q.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden md:block w-56 flex-shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-sm text-[#0E0E0E]",
									children: "Filters"
								}), (minRating || onlyFreeShipping || selectedPriceRange !== null) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setMinRating(null);
										setOnlyFreeShipping(false);
										setSelectedPriceRange(null);
									},
									className: "text-xs text-[#E8450A] font-medium hover:underline",
									children: "Clear all"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3",
								children: "Price Range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: priceRanges.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelectedPriceRange(selectedPriceRange === i ? null : i),
									className: `w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedPriceRange === i ? "bg-[#FFF7F5] text-[#E8450A] font-semibold border border-[#E8450A]/30" : "text-[#0E0E0E] hover:bg-[#F3F2EF]"}`,
									children: label
								}, i))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3",
								children: "Min. Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: [
									4,
									3,
									2
								].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setMinRating(minRating === r ? null : r),
									className: `w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${minRating === r ? "bg-[#FFF7F5] text-[#E8450A] font-semibold border border-[#E8450A]/30" : "text-[#0E0E0E] hover:bg-[#F3F2EF]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-yellow-400",
										children: "★".repeat(r)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r, "+ Stars"] })]
								}, r))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOnlyFreeShipping((v) => !v),
								className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${onlyFreeShipping ? "bg-[#F0FDF4] text-[#059669] font-semibold border border-[#059669]/30" : "text-[#0E0E0E] hover:bg-[#F3F2EF]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4 flex-shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8"
									})
								}), "Free Shipping Only"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3",
								children: "Browse by Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1",
								children: categories.slice(0, 6).map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate({
										type: "category",
										slug: cat.slug
									}),
									className: "w-full text-left px-3 py-2 rounded-lg text-sm text-[#0E0E0E] hover:bg-[#F3F2EF] hover:text-[#E8450A] transition-colors",
									children: cat.name
								}, cat.slug))
							})] })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-6 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#6B6A66]",
								children: loading ? "Searching..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#0E0E0E]",
									children: filteredResults.length
								}), " results"] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#9CA3AF] font-medium",
									children: "Sort by:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: sortBy,
									onChange: (e) => setSortBy(e.target.value),
									className: "text-sm border border-[#E8E7E2] rounded-xl px-3 py-2 bg-white text-[#0E0E0E] outline-none focus:border-[#E8450A] cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "relevant",
											children: "Most Relevant"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "rating",
											children: "Top Rated"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "price-asc",
											children: "Price: Low to High"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "price-desc",
											children: "Price: High to Low"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "newest",
											children: "Newest"
										})
									]
								})]
							})]
						}),
						loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
							children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
						}),
						!loading && filteredResults.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center py-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#F3F2EF] flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-8 h-8 text-[#9CA3AF]",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 1.5,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl font-semibold text-[#0E0E0E] mb-2",
									children: [
										"No results for “",
										q,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#6B6A66] text-sm mb-6",
									children: "Try different keywords or browse categories below."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap justify-center gap-3",
									children: popularSearches.slice(0, 6).map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => onNavigate({
											type: "search",
											q: term
										}),
										className: "px-4 py-2 rounded-xl border border-[#E8E7E2] bg-white text-sm font-medium text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors",
										children: term
									}, term))
								})
							]
						}),
						!loading && filteredResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
							children: filteredResults.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
								product,
								wishlisted: wishlist.has(product.id),
								onToggleWishlist,
								onAddToCart,
								onNavigate: (id) => onNavigate({
									type: "product",
									id
								})
							}, product.id))
						}),
						!loading && filteredResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 pt-8 border-t border-[#E8E7E2]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4",
								children: "Related Searches"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: popularSearches.filter((t) => t !== q).map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate({
										type: "search",
										q: term
									}),
									className: "px-4 py-2 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors",
									children: term
								}, term))
							})]
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/SearchPage.tsx
function SearchPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPageContent, { ...props });
}
//#endregion
export { SearchPage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFnZS1ybTlSZWRoZS5qcyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvc2VhcmNoL1NlYXJjaFBhZ2VDb250ZW50LnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9TZWFyY2hQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbUlucHV0IH0gZnJvbSAnLi4vLi4vc3RhdGUvbWFya2V0cGxhY2Utc3RvcmUnXG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9kYXRhL21hcmtldHBsYWNlJ1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQnXG5pbXBvcnQgeyBsaXN0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9tYXJrZXRwbGFjZSdcbmltcG9ydCB7IHVzZUNhdGFsb2cgfSBmcm9tICdAL3N0YXRlL2NhdGFsb2ctc3RvcmUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHE6IHN0cmluZ1xuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICB3aXNobGlzdDogU2V0PHN0cmluZz5cbiAgb25Ub2dnbGVXaXNobGlzdDogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BZGRUb0NhcnQ6IChpdGVtOiBDYXJ0SXRlbUlucHV0KSA9PiB2b2lkXG59XG5cbnR5cGUgU29ydEtleSA9ICdyZWxldmFudCcgfCAncHJpY2UtYXNjJyB8ICdwcmljZS1kZXNjJyB8ICdyYXRpbmcnIHwgJ25ld2VzdCdcblxuY29uc3QgcG9wdWxhclNlYXJjaGVzID0gW1xuICAnd2lyZWxlc3MgaGVhZHBob25lcycsXG4gICdpcGhvbmUgMTUgcHJvJyxcbiAgJ25pa2UgYWlyIG1heCcsXG4gICdtYWNib29rIGFpcicsXG4gICdkeXNvbiBoYWlyIGRyeWVyJyxcbiAgJ3NhbXN1bmcgZ2FsYXh5JyxcbiAgJ2dhbWluZyBtb3VzZScsXG4gICdza2luY2FyZSBzZXQnLFxuXVxuXG5jb25zdCByZWxhdGVkQ2F0ZWdvcmllcyA9IFtcbiAgeyBsYWJlbDogJ0VsZWN0cm9uaWNzJywgc2x1ZzogJ2VsZWN0cm9uaWNzJyB9LFxuICB7IGxhYmVsOiAnTW9iaWxlcycsIHNsdWc6ICdtb2JpbGVzJyB9LFxuICB7IGxhYmVsOiAnRmFzaGlvbicsIHNsdWc6ICdmYXNoaW9uJyB9LFxuICB7IGxhYmVsOiAnQmVhdXR5Jywgc2x1ZzogJ2JlYXV0eScgfSxcbiAgeyBsYWJlbDogJ0hvbWUgJiBMaXZpbmcnLCBzbHVnOiAnaG9tZScgfSxcbiAgeyBsYWJlbDogJ0dhbWluZycsIHNsdWc6ICdnYW1pbmcnIH0sXG5dXG5cbmZ1bmN0aW9uIFNrZWxldG9uQ2FyZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBhbmltYXRlLXB1bHNlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgYmctWyNGM0YyRUZdXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNwYWNlLXktMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMyBiZy1bI0YzRjJFRl0gcm91bmRlZCB3LTIvM1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLVsjRjNGMkVGXSByb3VuZGVkXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTMgYmctWyNGM0YyRUZdIHJvdW5kZWQgdy0xLzJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNSBiZy1bI0YzRjJFRl0gcm91bmRlZCB3LTEvMyBtdC0yXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFBhZ2VDb250ZW50KHsgcSwgb25OYXZpZ2F0ZSwgd2lzaGxpc3QsIG9uVG9nZ2xlV2lzaGxpc3QsIG9uQWRkVG9DYXJ0IH06IFByb3BzKSB7XG4gIGNvbnN0IHsgcHJvZHVjdHM6IGZhbGxiYWNrUHJvZHVjdHMsIGNhdGVnb3JpZXMgfSA9IHVzZUNhdGFsb2coKVxuICBjb25zdCBbbGl2ZVJlc3VsdHMsIHNldExpdmVSZXN1bHRzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGU8U29ydEtleT4oJ3JlbGV2YW50JylcbiAgY29uc3QgW21pblJhdGluZywgc2V0TWluUmF0aW5nXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtvbmx5RnJlZVNoaXBwaW5nLCBzZXRPbmx5RnJlZVNoaXBwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2VsZWN0ZWRQcmljZVJhbmdlLCBzZXRTZWxlY3RlZFByaWNlUmFuZ2VdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShxKVxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuXG4gIC8vIEZldGNoIGxpdmUgcmVzdWx0cyB3aGVuZXZlciBxIGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWFyY2hJbnB1dChxKVxuICAgIGlmICghcS50cmltKCkpIHtcbiAgICAgIHNldExpdmVSZXN1bHRzKG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaXN0UHJvZHVjdHMoeyBxOiBxLnRyaW0oKSwgbGltaXQ6IDQ4IH0pXG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIHNldExpdmVSZXN1bHRzKHJlc3BvbnNlLmRhdGEgYXMgdW5rbm93biBhcyBQcm9kdWN0W10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMaXZlUmVzdWx0cyhbXSlcbiAgICAgIH1cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSkoKVxuXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XG4gIH0sIFtxXSlcblxuICBjb25zdCBwcmljZVJhbmdlcyA9IFsnVW5kZXIgJDI1JywgJyQyNSDigJMgJDc1JywgJyQ3NSDigJMgJDIwMCcsICckMjAwIOKAkyAkNTAwJywgJ092ZXIgJDUwMCddXG4gIGNvbnN0IHByaWNlTG93ICA9IFswLCAyNSwgNzUsIDIwMCwgNTAwXVxuICBjb25zdCBwcmljZUhpZ2ggPSBbMjUsIDc1LCAyMDAsIDUwMCwgSW5maW5pdHldXG5cbiAgY29uc3QgYmFzZVJlc3VsdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAobGl2ZVJlc3VsdHMgIT09IG51bGwpIHJldHVybiBsaXZlUmVzdWx0c1xuICAgIGlmICghcS50cmltKCkpIHJldHVybiBmYWxsYmFja1Byb2R1Y3RzLnNsaWNlKDAsIDI0KVxuICAgIGNvbnN0IGxvd2VyID0gcS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIGZhbGxiYWNrUHJvZHVjdHMuZmlsdGVyKHAgPT5cbiAgICAgIHAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlcikgfHxcbiAgICAgIHAudmVuZG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXIpIHx8XG4gICAgICBwLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXIpLFxuICAgIClcbiAgfSwgW3EsIGxpdmVSZXN1bHRzLCBmYWxsYmFja1Byb2R1Y3RzXSlcblxuICBjb25zdCBmaWx0ZXJlZFJlc3VsdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgbGlzdCA9IFsuLi5iYXNlUmVzdWx0c11cbiAgICBpZiAoc2VsZWN0ZWRQcmljZVJhbmdlICE9PSBudWxsKSB7XG4gICAgICBsaXN0ID0gbGlzdC5maWx0ZXIocCA9PiBwLnByaWNlID49IHByaWNlTG93W3NlbGVjdGVkUHJpY2VSYW5nZV0gJiYgcC5wcmljZSA8IHByaWNlSGlnaFtzZWxlY3RlZFByaWNlUmFuZ2VdKVxuICAgIH1cbiAgICBpZiAobWluUmF0aW5nKSBsaXN0ID0gbGlzdC5maWx0ZXIocCA9PiBwLnJhdGluZyA+PSBtaW5SYXRpbmcpXG4gICAgaWYgKG9ubHlGcmVlU2hpcHBpbmcpIGxpc3QgPSBsaXN0LmZpbHRlcihwID0+IHAuZnJlZVNoaXBwaW5nKVxuICAgIHN3aXRjaCAoc29ydEJ5KSB7XG4gICAgICBjYXNlICdwcmljZS1hc2MnOiAgbGlzdC5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7IGJyZWFrXG4gICAgICBjYXNlICdwcmljZS1kZXNjJzogbGlzdC5zb3J0KChhLCBiKSA9PiBiLnByaWNlIC0gYS5wcmljZSk7IGJyZWFrXG4gICAgICBjYXNlICdyYXRpbmcnOiAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiBiLnJhdGluZyAtIGEucmF0aW5nKTsgYnJlYWtcbiAgICAgIGNhc2UgJ25ld2VzdCc6ICAgICBsaXN0LnJldmVyc2UoKTsgYnJlYWtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RcbiAgfSwgW2Jhc2VSZXN1bHRzLCBzb3J0QnksIG1pblJhdGluZywgb25seUZyZWVTaGlwcGluZywgc2VsZWN0ZWRQcmljZVJhbmdlXSlcblxuICBjb25zdCBoYW5kbGVTZWFyY2hTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaElucHV0LnRyaW0oKSAmJiBzZWFyY2hJbnB1dC50cmltKCkgIT09IHEpIHtcbiAgICAgIG9uTmF2aWdhdGUoeyB0eXBlOiAnc2VhcmNoJywgcTogc2VhcmNoSW5wdXQudHJpbSgpIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjlGOEY1XSBtaW4taC1zY3JlZW5cIj5cblxuICAgICAgey8qIOKUgOKUgOKUgCBTZWFyY2ggSGVybyBCYXIg4pSA4pSA4pSAICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBib3JkZXItWyNFOEU3RTJdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEyODBweF0gbXgtYXV0byBweC02IHB5LTZcIj5cbiAgICAgICAgICB7LyogQnJlYWRjcnVtYiAqL31cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1bIzlDQTNBRl0gbWItNFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2hvbWUnIH0pfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiPkhvbWU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zIGgtM1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyLjV9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgNWw3IDctNyA3XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwRTBFMEVdXCI+U2VhcmNoPC9zcGFuPlxuICAgICAgICAgICAge3EgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zIGgtM1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyLjV9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgNWw3IDctNyA3XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXSBmb250LW1lZGl1bSB0cnVuY2F0ZSBtYXgtdy1bMjAwcHhdXCI+JmxkcXVvO3txfSZyZHF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgIHsvKiBJbmxpbmUgU2VhcmNoIEJhciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1heC13LTJ4bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBoLTEyIGl0ZW1zLWNlbnRlciByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci1bI0U4NDUwQV0gYmctd2hpdGUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibWwtNCBoLTUgdy01IGZsZXgtc2hyaW5rLTAgdGV4dC1bIzlDQTNBRl1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IGUua2V5ID09PSAnRW50ZXInICYmIGhhbmRsZVNlYXJjaFN1Ym1pdCgpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHByb2R1Y3RzLCBicmFuZHMgYW5kIGNhdGVnb3JpZXMuLi5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy10cmFuc3BhcmVudCBweC0zIHRleHQtc20gdGV4dC1bIzBFMEUwRV0gb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyOnRleHQtWyM5Q0EzQUZdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3NlYXJjaElucHV0ICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaElucHV0KCcnKX0gY2xhc3NOYW1lPVwibXItMiB0ZXh0LVsjOUNBM0FGXSBob3Zlcjp0ZXh0LVsjMEUwRTBFXVwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoLTQgdy00XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoU3VibWl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHB4LTYgcm91bmRlZC14bCBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtc20gaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSZXN1bHQgY291bnQgKyBjYXRlZ29yaWVzIGNoaXBzICovfVxuICAgICAgICAgIHtxICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XVwiPlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFJlc3VsdHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICA/ICdObyByZXN1bHRzIGZvdW5kJ1xuICAgICAgICAgICAgICAgICAgOiA8PjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57ZmlsdGVyZWRSZXN1bHRzLmxlbmd0aC50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj4gcmVzdWx0cyBmb3IgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPiZsZHF1bzt7cX0mcmRxdW87PC9zcGFuPjwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRThFN0UyXVwiPnw8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAge3JlbGF0ZWRDYXRlZ29yaWVzLm1hcChjYXQgPT4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NhdC5zbHVnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2NhdGVnb3J5Jywgc2x1ZzogY2F0LnNsdWcgfSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYmctWyNGM0YyRUZdIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1bIzBFMEUwRV0gaG92ZXI6YmctWyNFODQ1MEFdIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2F0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTI4MHB4XSBteC1hdXRvIHB4LTYgcHktOFwiPlxuICAgICAgICB7Lyog4pSA4pSA4pSAIEVtcHR5IC8gTm8gUXVlcnkgU3RhdGUg4pSA4pSA4pSAICovfVxuICAgICAgICB7IXEudHJpbSgpICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTE2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMCBteC1hdXRvIG1iLTYgcm91bmRlZC0yeGwgYmctWyNGRkY3RjVdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRleHQtWyNFODQ1MEFdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezEuNX0+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi0yXCI+V2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yPzwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QTY2XSB0ZXh0LXNtIG1iLThcIj5TZWFyY2ggbWlsbGlvbnMgb2YgcHJvZHVjdHMgYWNyb3NzIHRob3VzYW5kcyBvZiB2ZXJpZmllZCBzZWxsZXJzLjwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bIzlDQTNBRl0gbWItNFwiPlBvcHVsYXIgU2VhcmNoZXM8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICB7cG9wdWxhclNlYXJjaGVzLm1hcCh0ZXJtID0+IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXt0ZXJtfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ3NlYXJjaCcsIHE6IHRlcm0gfSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gYmctd2hpdGUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LVsjMEUwRTBFXSBob3Zlcjpib3JkZXItWyNFODQ1MEFdIGhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Rlcm19XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7Lyog4pSA4pSA4pSAIFJlc3VsdHMgTGF5b3V0IOKUgOKUgOKUgCAqL31cbiAgICAgICAge3EudHJpbSgpICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLThcIj5cbiAgICAgICAgICAgIHsvKiDilIDilIAgRmlsdGVyIFNpZGViYXIg4pSA4pSAICovfVxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayB3LTU2IGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTUgc3RpY2t5IHRvcC0yNCBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtIHRleHQtWyMwRTBFMEVdXCI+RmlsdGVyczwvcD5cbiAgICAgICAgICAgICAgICAgIHsobWluUmF0aW5nIHx8IG9ubHlGcmVlU2hpcHBpbmcgfHwgc2VsZWN0ZWRQcmljZVJhbmdlICE9PSBudWxsKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldE1pblJhdGluZyhudWxsKTsgc2V0T25seUZyZWVTaGlwcGluZyhmYWxzZSk7IHNldFNlbGVjdGVkUHJpY2VSYW5nZShudWxsKSB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI0U4NDUwQV0gZm9udC1tZWRpdW0gaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENsZWFyIGFsbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUHJpY2UgKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bIzlDQTNBRl0gbWItM1wiPlByaWNlIFJhbmdlPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJpY2VSYW5nZXMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUHJpY2VSYW5nZShzZWxlY3RlZFByaWNlUmFuZ2UgPT09IGkgPyBudWxsIDogaSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgdGV4dC1sZWZ0IHB4LTMgcHktMiByb3VuZGVkLWxnIHRleHQtc20gdHJhbnNpdGlvbi1jb2xvcnMgJHtzZWxlY3RlZFByaWNlUmFuZ2UgPT09IGkgPyAnYmctWyNGRkY3RjVdIHRleHQtWyNFODQ1MEFdIGZvbnQtc2VtaWJvbGQgYm9yZGVyIGJvcmRlci1bI0U4NDUwQV0vMzAnIDogJ3RleHQtWyMwRTBFMEVdIGhvdmVyOmJnLVsjRjNGMkVGXSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUmF0aW5nICovfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtWyM5Q0EzQUZdIG1iLTNcIj5NaW4uIFJhdGluZzwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAge1s0LCAzLCAyXS5tYXAociA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWluUmF0aW5nKG1pblJhdGluZyA9PT0gciA/IG51bGwgOiByKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTIgcm91bmRlZC1sZyB0ZXh0LXNtIHRyYW5zaXRpb24tY29sb3JzICR7bWluUmF0aW5nID09PSByID8gJ2JnLVsjRkZGN0Y1XSB0ZXh0LVsjRTg0NTBBXSBmb250LXNlbWlib2xkIGJvcmRlciBib3JkZXItWyNFODQ1MEFdLzMwJyA6ICd0ZXh0LVsjMEUwRTBFXSBob3ZlcjpiZy1bI0YzRjJFRl0nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwXCI+eyfimIUnLnJlcGVhdChyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cn0rIFN0YXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEZyZWUgU2hpcHBpbmcgKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T25seUZyZWVTaGlwcGluZyh2ID0+ICF2KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMi41IHJvdW5kZWQtbGcgdGV4dC1zbSB0cmFuc2l0aW9uLWNvbG9ycyAke29ubHlGcmVlU2hpcHBpbmcgPyAnYmctWyNGMEZERjRdIHRleHQtWyMwNTk2NjldIGZvbnQtc2VtaWJvbGQgYm9yZGVyIGJvcmRlci1bIzA1OTY2OV0vMzAnIDogJ3RleHQtWyMwRTBFMEVdIGhvdmVyOmJnLVsjRjNGMkVGXSd9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IGZsZXgtc2hyaW5rLTBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNSA4aDE0TTUgOGEyIDIgMCAxMTAtNGgxNGEyIDIgMCAxMTAgNE01IDhsMS41IDloMTFMMTkgOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICBGcmVlIFNoaXBwaW5nIE9ubHlcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIENhdGVnb3JpZXMgKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bIzlDQTNBRl0gbWItM1wiPkJyb3dzZSBieSBDYXRlZ29yeTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLnNsaWNlKDAsIDYpLm1hcChjYXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0LnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2NhdGVnb3J5Jywgc2x1ZzogY2F0LnNsdWcgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IHB4LTMgcHktMiByb3VuZGVkLWxnIHRleHQtc20gdGV4dC1bIzBFMEUwRV0gaG92ZXI6YmctWyNGM0YyRUZdIGhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgey8qIOKUgOKUgCBSZXN1bHRzIEFyZWEg4pSA4pSAICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICB7LyogU29ydCBUb29sYmFyICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XVwiPlxuICAgICAgICAgICAgICAgICAge2xvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyAnU2VhcmNoaW5nLi4uJ1xuICAgICAgICAgICAgICAgICAgICA6IDw+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPntmaWx0ZXJlZFJlc3VsdHMubGVuZ3RofTwvc3Bhbj4gcmVzdWx0czwvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5Q0EzQUZdIGZvbnQtbWVkaXVtXCI+U29ydCBieTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb3J0Qnl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNvcnRCeShlLnRhcmdldC52YWx1ZSBhcyBTb3J0S2V5KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSByb3VuZGVkLXhsIHB4LTMgcHktMiBiZy13aGl0ZSB0ZXh0LVsjMEUwRTBFXSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWxldmFudFwiPk1vc3QgUmVsZXZhbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdGluZ1wiPlRvcCBSYXRlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2UtYXNjXCI+UHJpY2U6IExvdyB0byBIaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZS1kZXNjXCI+UHJpY2U6IEhpZ2ggdG8gTG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXdlc3RcIj5OZXdlc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogTG9hZGluZyBTa2VsZXRvbnMgKi99XG4gICAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9KS5tYXAoKF8sIGkpID0+IDxTa2VsZXRvbkNhcmQga2V5PXtpfSAvPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIE5vIFJlc3VsdHMgKi99XG4gICAgICAgICAgICAgIHshbG9hZGluZyAmJiBmaWx0ZXJlZFJlc3VsdHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBteC1hdXRvIG1iLTUgcm91bmRlZC0yeGwgYmctWyNGM0YyRUZdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LVsjOUNBM0FGXVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi0yXCI+Tm8gcmVzdWx0cyBmb3IgJmxkcXVvO3txfSZyZHF1bzs8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzZCNkE2Nl0gdGV4dC1zbSBtYi02XCI+VHJ5IGRpZmZlcmVudCBrZXl3b3JkcyBvciBicm93c2UgY2F0ZWdvcmllcyBiZWxvdy48L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwb3B1bGFyU2VhcmNoZXMuc2xpY2UoMCwgNikubWFwKHRlcm0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAnc2VhcmNoJywgcTogdGVybSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGJnLXdoaXRlIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1bIzBFMEUwRV0gaG92ZXI6Ym9yZGVyLVsjRTg0NTBBXSBob3Zlcjp0ZXh0LVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Rlcm19XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIFByb2R1Y3QgR3JpZCAqL31cbiAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIGZpbHRlcmVkUmVzdWx0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFJlc3VsdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgICAgICAgICB3aXNobGlzdGVkPXt3aXNobGlzdC5oYXMocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVXaXNobGlzdD17b25Ub2dnbGVXaXNobGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZFRvQ2FydD17b25BZGRUb0NhcnR9XG4gICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aWQgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdwcm9kdWN0JywgaWQgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogUG9wdWxhciBTZWFyY2hlcyAoc2hvd24gd2hlbiBubyBmaWx0ZXJzIHJlZHVjZSByZXN1bHRzKSAqL31cbiAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIGZpbHRlcmVkUmVzdWx0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIHB0LTggYm9yZGVyLXQgYm9yZGVyLVsjRThFN0UyXVwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVsjOUNBM0FGXSBtYi00XCI+UmVsYXRlZCBTZWFyY2hlczwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3BvcHVsYXJTZWFyY2hlcy5maWx0ZXIodCA9PiB0ICE9PSBxKS5tYXAodGVybSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0ZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdzZWFyY2gnLCBxOiB0ZXJtIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gYmctd2hpdGUgdGV4dC1zbSB0ZXh0LVsjMEUwRTBFXSBob3Zlcjpib3JkZXItWyNFODQ1MEFdIGhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGVybX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbUlucHV0IH0gZnJvbSAnLi4vc3RhdGUvbWFya2V0cGxhY2Utc3RvcmUnXG5pbXBvcnQgU2VhcmNoUGFnZUNvbnRlbnQgZnJvbSAnLi9zZWFyY2gvU2VhcmNoUGFnZUNvbnRlbnQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHE6IHN0cmluZ1xuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICB3aXNobGlzdDogU2V0PHN0cmluZz5cbiAgb25Ub2dnbGVXaXNobGlzdDogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BZGRUb0NhcnQ6IChpdGVtOiBDYXJ0SXRlbUlucHV0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFBhZ2UocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiA8U2VhcmNoUGFnZUNvbnRlbnQgey4uLnByb3BzfSAvPlxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQWtCQSxJQUFNLGtCQUFrQjtDQUN0QjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0Y7QUFFQSxJQUFNLG9CQUFvQjtDQUN4QjtFQUFFLE9BQU87RUFBZSxNQUFNO0NBQWM7Q0FDNUM7RUFBRSxPQUFPO0VBQVcsTUFBTTtDQUFVO0NBQ3BDO0VBQUUsT0FBTztFQUFXLE1BQU07Q0FBVTtDQUNwQztFQUFFLE9BQU87RUFBVSxNQUFNO0NBQVM7Q0FDbEM7RUFBRSxPQUFPO0VBQWlCLE1BQU07Q0FBTztDQUN2QztFQUFFLE9BQU87RUFBVSxNQUFNO0NBQVM7QUFDcEM7QUFFQSxTQUFTLGVBQWU7Q0FDdEIsT0FDRSxpQkFBQSxHQUFBLG1CQUFBLEtBQUEsQ0FBQyxPQUFEO0VBQUssV0FBVTtFQUFmLFVBQUEsQ0FDRSxpQkFBQSxHQUFBLG1CQUFBLElBQUEsQ0FBQyxPQUFELEVBQUssV0FBVSw2QkFBOEIsQ0FBQSxHQUM3QyxpQkFBQSxHQUFBLG1CQUFBLEtBQUEsQ0FBQyxPQUFEO0dBQUssV0FBVTtHQUFmLFVBQUE7SUFDRSxpQkFBQSxHQUFBLG1CQUFBLElBQUEsQ0FBQyxPQUFELEVBQUssV0FBVSxpQ0FBa0MsQ0FBQTtJQUNqRCxpQkFBQSxH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