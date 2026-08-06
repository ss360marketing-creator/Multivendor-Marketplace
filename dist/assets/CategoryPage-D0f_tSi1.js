import { g as __toESM, i as require_jsx_runtime, l as listProducts, o as getCategoryBySlug, p as require_react, r as useCatalog } from "./index-BM41bWnP.js";
import { t as ProductCard } from "./ProductCard-Cuskg2O9.js";
//#region src/pages/category/CategoryHero.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function CategoryHero({ category, catName, count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-48 overflow-hidden",
		children: [
			category?.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: category.image,
				alt: catName,
				className: "w-full h-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/80 to-[#0E0E0E]/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col justify-center max-w-[1280px] mx-auto px-6 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-2 text-xs text-white/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Home" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "›" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: catName
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl md:text-4xl font-bold text-white",
						children: catName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-white/70",
						children: [count, " products available"]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/pages/category/CategoryToolbar.tsx
function CategoryToolbar({ sortBy, viewMode, onToggleFilterOpen, onSortChange, onViewModeChange, resultsCount }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onToggleFilterOpen,
				className: "md:hidden flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-[#E8E7E2] text-sm font-semibold hover:bg-[#F3F2EF] transition-colors",
				children: "Filters"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-[#6B6A66]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-[#0E0E0E]",
					children: resultsCount
				}), " results"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: sortBy,
				onChange: (e) => onSortChange(e.target.value),
				className: "h-10 px-3 pr-8 bg-white border border-[#E8E7E2] rounded-xl text-sm font-medium text-[#0E0E0E] outline-none focus:border-[#E8450A] transition-colors appearance-none cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "popular",
						children: "Most Popular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "newest",
						children: "Newest First"
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
						value: "rating",
						children: "Highest Rated"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex rounded-xl border border-[#E8E7E2] overflow-hidden bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onViewModeChange("grid"),
					className: `px-3 py-2.5 transition-colors ${viewMode === "grid" ? "bg-[#0E0E0E] text-white" : "text-[#6B6A66] hover:bg-[#F3F2EF]"}`,
					children: "▦"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onViewModeChange("list"),
					className: `px-3 py-2.5 transition-colors ${viewMode === "list" ? "bg-[#0E0E0E] text-white" : "text-[#6B6A66] hover:bg-[#F3F2EF]"}`,
					children: "☰"
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/category/CategoryFilters.tsx
var priceRanges = [
	{
		label: "Under $25",
		min: 0,
		max: 25
	},
	{
		label: "$25 – $75",
		min: 25,
		max: 75
	},
	{
		label: "$75 – $200",
		min: 75,
		max: 200
	},
	{
		label: "$200 – $500",
		min: 200,
		max: 500
	},
	{
		label: "Over $500",
		min: 500,
		max: Infinity
	}
];
function CategoryFilters({ selectedPriceRange, minRating, onlyFreeShipping, onSelectPriceRange, onSelectRating, onToggleFreeShipping, onClear }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-sm font-bold text-[#0E0E0E] mb-3",
				children: "Price Range"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: priceRanges.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 cursor-pointer group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `w-4 h-4 rounded flex items-center justify-center border-2 transition-all ${selectedPriceRange === i ? "bg-[#E8450A] border-[#E8450A]" : "border-[#E8E7E2] group-hover:border-[#0E0E0E]"}`,
						onClick: () => onSelectPriceRange(selectedPriceRange === i ? null : i)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-[#6B6A66] group-hover:text-[#0E0E0E] transition-colors",
						children: r.label
					})]
				}, i))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-sm font-bold text-[#0E0E0E] mb-3",
				children: "Minimum Rating"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: [
					4.5,
					4,
					3.5,
					3
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 cursor-pointer group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `w-4 h-4 rounded flex items-center justify-center border-2 transition-all ${minRating === r ? "bg-[#E8450A] border-[#E8450A]" : "border-[#E8E7E2] group-hover:border-[#0E0E0E]"}`,
						onClick: () => onSelectRating(minRating === r ? null : r)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-[#6B6A66]",
						children: [r, "+"]
					})]
				}, r))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-sm font-bold text-[#0E0E0E] mb-3",
				children: "Delivery"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onToggleFreeShipping,
				className: `w-10 h-6 rounded-full transition-all relative ${onlyFreeShipping ? "bg-[#E8450A]" : "bg-[#E8E7E2]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${onlyFreeShipping ? "left-5" : "left-1"}` })
			})] }),
			(selectedPriceRange !== null || minRating || onlyFreeShipping) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClear,
				className: "text-sm font-semibold text-[#E8450A] hover:text-[#C93A07] transition-colors",
				children: "Clear all filters"
			})
		]
	});
}
//#endregion
//#region src/pages/category/CategoryResults.tsx
function CategoryResults({ items, wishlist, onToggleWishlist, onAddToCart, onNavigate, viewMode }) {
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col items-center justify-center py-24 gap-4 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold text-[#0E0E0E]",
			children: "No products found"
		})
	});
	if (viewMode === "grid") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
		children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
			product: p,
			wishlisted: wishlist.has(p.id),
			onToggleWishlist,
			onAddToCart,
			onNavigate: (id) => onNavigate({
				type: "product",
				id
			})
		}, p.id))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
			product: p,
			wishlisted: wishlist.has(p.id),
			onToggleWishlist,
			onAddToCart,
			onNavigate: (id) => onNavigate({
				type: "product",
				id
			}),
			variant: "horizontal"
		}, p.id))
	});
}
//#endregion
//#region src/pages/category/CategoryPageContent.tsx
function CategoryPageContent({ slug, onNavigate, wishlist, onToggleWishlist, onAddToCart }) {
	const { categories, products } = useCatalog();
	const [liveCategory, setLiveCategory] = (0, import_react.useState)(null);
	const [liveProducts, setLiveProducts] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [sortBy, setSortBy] = (0, import_react.useState)("popular");
	const [selectedPriceRange, setSelectedPriceRange] = (0, import_react.useState)(null);
	const [minRating, setMinRating] = (0, import_react.useState)(null);
	const [onlyFreeShipping, setOnlyFreeShipping] = (0, import_react.useState)(false);
	const [filterOpen, setFilterOpen] = (0, import_react.useState)(false);
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			setLoading(true);
			const [categoryResponse, productsResponse] = await Promise.all([getCategoryBySlug(slug), listProducts(slug === "deals" ? {
				q: "",
				limit: 24
			} : {
				category: slug,
				limit: 24
			})]);
			if (cancelled) return;
			if (categoryResponse.success) setLiveCategory({
				name: categoryResponse.data.name,
				slug: categoryResponse.data.slug,
				image: categoryResponse.data.image ?? categories.find((category) => category.slug === slug)?.image ?? "",
				count: categoryResponse.data.count,
				color: categories.find((category) => category.slug === slug)?.color ?? "#EEF2FF"
			});
			else setLiveCategory(categories.find((category) => category.slug === slug) ?? null);
			if (productsResponse.success) setLiveProducts(productsResponse.data);
			else setLiveProducts(null);
			setLoading(false);
		})();
		return () => {
			cancelled = true;
		};
	}, [slug, categories]);
	const category = liveCategory ?? categories.find((c) => c.slug === slug);
	const catProducts = (0, import_react.useMemo)(() => {
		let list = liveProducts ?? (slug === "deals" ? products.filter((p) => p.discount > 20) : products.filter((p) => p.categorySlug === slug));
		if (!list.length) list = products;
		if (selectedPriceRange !== null) list = list.filter((p) => p.price >= [
			0,
			25,
			75,
			200,
			500
		][selectedPriceRange] && p.price < [
			25,
			75,
			200,
			500,
			Infinity
		][selectedPriceRange]);
		if (minRating) list = list.filter((p) => p.rating >= minRating);
		if (onlyFreeShipping) list = list.filter((p) => p.freeShipping);
		switch (sortBy) {
			case "price-asc":
				list = [...list].sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				list = [...list].sort((a, b) => b.price - a.price);
				break;
			case "rating":
				list = [...list].sort((a, b) => b.rating - a.rating);
				break;
			case "newest": list = [...list].reverse();
		}
		return list;
	}, [
		slug,
		sortBy,
		selectedPriceRange,
		minRating,
		onlyFreeShipping,
		liveProducts,
		products
	]);
	const catName = category?.name ?? slug.charAt(0).toUpperCase() + slug.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#F9F8F5] min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryHero, {
			category,
			catName,
			count: loading ? 0 : catProducts.length
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryToolbar, {
				sortBy,
				viewMode,
				filterOpen,
				onToggleFilterOpen: () => setFilterOpen(!filterOpen),
				onSortChange: setSortBy,
				onViewModeChange: setViewMode,
				resultsCount: catProducts.length
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "hidden md:block w-56 flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryFilters, {
								selectedPriceRange,
								minRating,
								onlyFreeShipping,
								onSelectPriceRange: setSelectedPriceRange,
								onSelectRating: setMinRating,
								onToggleFreeShipping: () => setOnlyFreeShipping((v) => !v),
								onClear: () => {
									setSelectedPriceRange(null);
									setMinRating(null);
									setOnlyFreeShipping(false);
								}
							})
						})
					}),
					filterOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fixed inset-0 bg-black/40 z-40 md:hidden",
						onClick: () => setFilterOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl p-6 md:hidden max-h-[80vh] overflow-y-auto fade-in",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryFilters, {
							selectedPriceRange,
							minRating,
							onlyFreeShipping,
							onSelectPriceRange: setSelectedPriceRange,
							onSelectRating: setMinRating,
							onToggleFreeShipping: () => setOnlyFreeShipping((v) => !v),
							onClear: () => {
								setSelectedPriceRange(null);
								setMinRating(null);
								setOnlyFreeShipping(false);
							}
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryResults, {
							items: catProducts,
							wishlist,
							onToggleWishlist,
							onAddToCart,
							onNavigate,
							viewMode
						})
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/pages/CategoryPage.tsx
function CategoryPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPageContent, { ...props });
}
//#endregion
export { CategoryPage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlQYWdlLUQwZl90U2kxLmpzIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9jYXRlZ29yeS9DYXRlZ29yeUhlcm8udHN4IiwiLi4vLi4vc3JjL3BhZ2VzL2NhdGVnb3J5L0NhdGVnb3J5VG9vbGJhci50c3giLCIuLi8uLi9zcmMvcGFnZXMvY2F0ZWdvcnkvQ2F0ZWdvcnlGaWx0ZXJzLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9jYXRlZ29yeS9DYXRlZ29yeVJlc3VsdHMudHN4IiwiLi4vLi4vc3JjL3BhZ2VzL2NhdGVnb3J5L0NhdGVnb3J5UGFnZUNvbnRlbnQudHN4IiwiLi4vLi4vc3JjL3BhZ2VzL0NhdGVnb3J5UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2RhdGEvbWFya2V0cGxhY2UnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNhdGVnb3J5PzogQ2F0ZWdvcnlcbiAgY2F0TmFtZTogc3RyaW5nXG4gIGNvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlIZXJvKHsgY2F0ZWdvcnksIGNhdE5hbWUsIGNvdW50IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQ4IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAge2NhdGVnb3J5Py5pbWFnZSAmJiA8aW1nIHNyYz17Y2F0ZWdvcnkuaW1hZ2V9IGFsdD17Y2F0TmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tWyMwRTBFMEVdLzgwIHRvLVsjMEUwRTBFXS80MFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtYXgtdy1bMTI4MHB4XSBteC1hdXRvIHB4LTYgZ2FwLTJcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIHRleHQtd2hpdGUvNjBcIj5cbiAgICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuKAujwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2NhdE5hbWV9PC9zcGFuPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntjYXROYW1lfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZS83MFwiPntjb3VudH0gcHJvZHVjdHMgYXZhaWxhYmxlPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsInR5cGUgU29ydEtleSA9ICdwb3B1bGFyJyB8ICduZXdlc3QnIHwgJ3ByaWNlLWFzYycgfCAncHJpY2UtZGVzYycgfCAncmF0aW5nJ1xuXG50eXBlIFByb3BzID0ge1xuICBzb3J0Qnk6IFNvcnRLZXlcbiAgdmlld01vZGU6ICdncmlkJyB8ICdsaXN0J1xuICBmaWx0ZXJPcGVuOiBib29sZWFuXG4gIG9uVG9nZ2xlRmlsdGVyT3BlbjogKCkgPT4gdm9pZFxuICBvblNvcnRDaGFuZ2U6ICh2YWx1ZTogU29ydEtleSkgPT4gdm9pZFxuICBvblZpZXdNb2RlQ2hhbmdlOiAodmFsdWU6ICdncmlkJyB8ICdsaXN0JykgPT4gdm9pZFxuICByZXN1bHRzQ291bnQ6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeVRvb2xiYXIoeyBzb3J0QnksIHZpZXdNb2RlLCBvblRvZ2dsZUZpbHRlck9wZW4sIG9uU29ydENoYW5nZSwgb25WaWV3TW9kZUNoYW5nZSwgcmVzdWx0c0NvdW50IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgbWItNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uVG9nZ2xlRmlsdGVyT3Blbn0gY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMi41IGJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gdGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjRjNGMkVGXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIEZpbHRlcnNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl1cIj48c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+e3Jlc3VsdHNDb3VudH08L3NwYW4+IHJlc3VsdHM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c29ydEJ5fSBvbkNoYW5nZT17ZSA9PiBvblNvcnRDaGFuZ2UoZS50YXJnZXQudmFsdWUgYXMgU29ydEtleSl9IGNsYXNzTmFtZT1cImgtMTAgcHgtMyBwci04IGJnLXdoaXRlIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LVsjMEUwRTBFXSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9ycyBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9wdWxhclwiPk1vc3QgUG9wdWxhcjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXdlc3RcIj5OZXdlc3QgRmlyc3Q8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2UtYXNjXCI+UHJpY2U6IExvdyB0byBIaWdoPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlLWRlc2NcIj5QcmljZTogSGlnaCB0byBMb3c8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmF0aW5nXCI+SGlnaGVzdCBSYXRlZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblZpZXdNb2RlQ2hhbmdlKCdncmlkJyl9IGNsYXNzTmFtZT17YHB4LTMgcHktMi41IHRyYW5zaXRpb24tY29sb3JzICR7dmlld01vZGUgPT09ICdncmlkJyA/ICdiZy1bIzBFMEUwRV0gdGV4dC13aGl0ZScgOiAndGV4dC1bIzZCNkE2Nl0gaG92ZXI6YmctWyNGM0YyRUZdJ31gfT7ilqY8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVmlld01vZGVDaGFuZ2UoJ2xpc3QnKX0gY2xhc3NOYW1lPXtgcHgtMyBweS0yLjUgdHJhbnNpdGlvbi1jb2xvcnMgJHt2aWV3TW9kZSA9PT0gJ2xpc3QnID8gJ2JnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlJyA6ICd0ZXh0LVsjNkI2QTY2XSBob3ZlcjpiZy1bI0YzRjJFRl0nfWB9PuKYsDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJ0eXBlIFByb3BzID0ge1xuICBzZWxlY3RlZFByaWNlUmFuZ2U6IG51bWJlciB8IG51bGxcbiAgbWluUmF0aW5nOiBudW1iZXIgfCBudWxsXG4gIG9ubHlGcmVlU2hpcHBpbmc6IGJvb2xlYW5cbiAgb25TZWxlY3RQcmljZVJhbmdlOiAodmFsdWU6IG51bWJlciB8IG51bGwpID0+IHZvaWRcbiAgb25TZWxlY3RSYXRpbmc6ICh2YWx1ZTogbnVtYmVyIHwgbnVsbCkgPT4gdm9pZFxuICBvblRvZ2dsZUZyZWVTaGlwcGluZzogKCkgPT4gdm9pZFxuICBvbkNsZWFyOiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IHByaWNlUmFuZ2VzID0gW1xuICB7IGxhYmVsOiAnVW5kZXIgJDI1JywgbWluOiAwLCBtYXg6IDI1IH0sXG4gIHsgbGFiZWw6ICckMjUg4oCTICQ3NScsIG1pbjogMjUsIG1heDogNzUgfSxcbiAgeyBsYWJlbDogJyQ3NSDigJMgJDIwMCcsIG1pbjogNzUsIG1heDogMjAwIH0sXG4gIHsgbGFiZWw6ICckMjAwIOKAkyAkNTAwJywgbWluOiAyMDAsIG1heDogNTAwIH0sXG4gIHsgbGFiZWw6ICdPdmVyICQ1MDAnLCBtaW46IDUwMCwgbWF4OiBJbmZpbml0eSB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUZpbHRlcnMoeyBzZWxlY3RlZFByaWNlUmFuZ2UsIG1pblJhdGluZywgb25seUZyZWVTaGlwcGluZywgb25TZWxlY3RQcmljZVJhbmdlLCBvblNlbGVjdFJhdGluZywgb25Ub2dnbGVGcmVlU2hpcHBpbmcsIG9uQ2xlYXIgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtWyMwRTBFMEVdIG1iLTNcIj5QcmljZSBSYW5nZTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAge3ByaWNlUmFuZ2VzLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgY3Vyc29yLXBvaW50ZXIgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTQgaC00IHJvdW5kZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLTIgdHJhbnNpdGlvbi1hbGwgJHtzZWxlY3RlZFByaWNlUmFuZ2UgPT09IGkgPyAnYmctWyNFODQ1MEFdIGJvcmRlci1bI0U4NDUwQV0nIDogJ2JvcmRlci1bI0U4RTdFMl0gZ3JvdXAtaG92ZXI6Ym9yZGVyLVsjMEUwRTBFXSd9YH0gb25DbGljaz17KCkgPT4gb25TZWxlY3RQcmljZVJhbmdlKHNlbGVjdGVkUHJpY2VSYW5nZSA9PT0gaSA/IG51bGwgOiBpKX0gLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XSBncm91cC1ob3Zlcjp0ZXh0LVsjMEUwRTBFXSB0cmFuc2l0aW9uLWNvbG9yc1wiPntyLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV0gbWItM1wiPk1pbmltdW0gUmF0aW5nPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICB7WzQuNSwgNCwgMy41LCAzXS5tYXAociA9PiAoXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtyfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBjdXJzb3ItcG9pbnRlciBncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctNCBoLTQgcm91bmRlZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItMiB0cmFuc2l0aW9uLWFsbCAke21pblJhdGluZyA9PT0gciA/ICdiZy1bI0U4NDUwQV0gYm9yZGVyLVsjRTg0NTBBXScgOiAnYm9yZGVyLVsjRThFN0UyXSBncm91cC1ob3Zlcjpib3JkZXItWyMwRTBFMEVdJ31gfSBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdFJhdGluZyhtaW5SYXRpbmcgPT09IHIgPyBudWxsIDogcil9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkE2Nl1cIj57cn0rPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi0zXCI+RGVsaXZlcnk8L2g0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uVG9nZ2xlRnJlZVNoaXBwaW5nfSBjbGFzc05hbWU9e2B3LTEwIGgtNiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgcmVsYXRpdmUgJHtvbmx5RnJlZVNoaXBwaW5nID8gJ2JnLVsjRTg0NTBBXScgOiAnYmctWyNFOEU3RTJdJ31gfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMSB3LTQgaC00IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgdHJhbnNpdGlvbi1hbGwgJHtvbmx5RnJlZVNoaXBwaW5nID8gJ2xlZnQtNScgOiAnbGVmdC0xJ31gfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyhzZWxlY3RlZFByaWNlUmFuZ2UgIT09IG51bGwgfHwgbWluUmF0aW5nIHx8IG9ubHlGcmVlU2hpcHBpbmcpICYmIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsZWFyfSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0U4NDUwQV0gaG92ZXI6dGV4dC1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICBDbGVhciBhbGwgZmlsdGVyc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJ1xuaW1wb3J0IHR5cGUgeyBWaWV3IH0gZnJvbSAnLi4vLi4vYXBwL25hdmlnYXRpb24nXG5pbXBvcnQgdHlwZSB7IENhcnRJdGVtSW5wdXQgfSBmcm9tICcuLi8uLi9zdGF0ZS9tYXJrZXRwbGFjZS1zdG9yZSdcbmltcG9ydCB0eXBlIHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL2RhdGEvbWFya2V0cGxhY2UnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGl0ZW1zOiBQcm9kdWN0W11cbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICB2aWV3TW9kZTogJ2dyaWQnIHwgJ2xpc3QnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5UmVzdWx0cyh7IGl0ZW1zLCB3aXNobGlzdCwgb25Ub2dnbGVXaXNobGlzdCwgb25BZGRUb0NhcnQsIG9uTmF2aWdhdGUsIHZpZXdNb2RlIH06IFByb3BzKSB7XG4gIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMjQgZ2FwLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPk5vIHByb2R1Y3RzIGZvdW5kPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaWYgKHZpZXdNb2RlID09PSAnZ3JpZCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgIHtpdGVtcy5tYXAocCA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cC5pZH0gcHJvZHVjdD17cH0gd2lzaGxpc3RlZD17d2lzaGxpc3QuaGFzKHAuaWQpfSBvblRvZ2dsZVdpc2hsaXN0PXtvblRvZ2dsZVdpc2hsaXN0fSBvbkFkZFRvQ2FydD17b25BZGRUb0NhcnR9IG9uTmF2aWdhdGU9e2lkID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAncHJvZHVjdCcsIGlkIH0pfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgIHtpdGVtcy5tYXAocCA9PiAoXG4gICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3AuaWR9IHByb2R1Y3Q9e3B9IHdpc2hsaXN0ZWQ9e3dpc2hsaXN0LmhhcyhwLmlkKX0gb25Ub2dnbGVXaXNobGlzdD17b25Ub2dnbGVXaXNobGlzdH0gb25BZGRUb0NhcnQ9e29uQWRkVG9DYXJ0fSBvbk5hdmlnYXRlPXtpZCA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ3Byb2R1Y3QnLCBpZCB9KX0gdmFyaWFudD1cImhvcml6b250YWxcIiAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbUlucHV0IH0gZnJvbSAnLi4vLi4vc3RhdGUvbWFya2V0cGxhY2Utc3RvcmUnXG5pbXBvcnQgQ2F0ZWdvcnlIZXJvIGZyb20gJy4vQ2F0ZWdvcnlIZXJvJ1xuaW1wb3J0IENhdGVnb3J5VG9vbGJhciBmcm9tICcuL0NhdGVnb3J5VG9vbGJhcidcbmltcG9ydCBDYXRlZ29yeUZpbHRlcnMgZnJvbSAnLi9DYXRlZ29yeUZpbHRlcnMnXG5pbXBvcnQgQ2F0ZWdvcnlSZXN1bHRzIGZyb20gJy4vQ2F0ZWdvcnlSZXN1bHRzJ1xuaW1wb3J0IHsgdXNlQ2F0YWxvZyB9IGZyb20gJy4uLy4uL3N0YXRlL2NhdGFsb2ctc3RvcmUnXG5pbXBvcnQgeyBnZXRDYXRlZ29yeUJ5U2x1ZywgbGlzdFByb2R1Y3RzIH0gZnJvbSAnQC9hcGkvbWFya2V0cGxhY2UnXG5pbXBvcnQgdHlwZSB7IENhdGVnb3J5LCBQcm9kdWN0IH0gZnJvbSAnQC9kYXRhL21hcmtldHBsYWNlJ1xuXG50eXBlIFByb3BzID0ge1xuICBzbHVnOiBzdHJpbmdcbiAgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWRcbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxufVxuXG50eXBlIFNvcnRLZXkgPSAncG9wdWxhcicgfCAnbmV3ZXN0JyB8ICdwcmljZS1hc2MnIHwgJ3ByaWNlLWRlc2MnIHwgJ3JhdGluZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlQ29udGVudCh7IHNsdWcsIG9uTmF2aWdhdGUsIHdpc2hsaXN0LCBvblRvZ2dsZVdpc2hsaXN0LCBvbkFkZFRvQ2FydCB9OiBQcm9wcykge1xuICBjb25zdCB7IGNhdGVnb3JpZXMsIHByb2R1Y3RzIH0gPSB1c2VDYXRhbG9nKClcbiAgY29uc3QgW2xpdmVDYXRlZ29yeSwgc2V0TGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlPENhdGVnb3J5IHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2xpdmVQcm9kdWN0cywgc2V0TGl2ZVByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZTxTb3J0S2V5PigncG9wdWxhcicpXG4gIGNvbnN0IFtzZWxlY3RlZFByaWNlUmFuZ2UsIHNldFNlbGVjdGVkUHJpY2VSYW5nZV0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKVxuICBjb25zdCBbbWluUmF0aW5nLCBzZXRNaW5SYXRpbmddID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW29ubHlGcmVlU2hpcHBpbmcsIHNldE9ubHlGcmVlU2hpcHBpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmaWx0ZXJPcGVuLCBzZXRGaWx0ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdmlld01vZGUsIHNldFZpZXdNb2RlXSA9IHVzZVN0YXRlPCdncmlkJyB8ICdsaXN0Jz4oJ2dyaWQnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICAgIGNvbnN0IFtjYXRlZ29yeVJlc3BvbnNlLCBwcm9kdWN0c1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0Q2F0ZWdvcnlCeVNsdWcoc2x1ZyksXG4gICAgICAgIGxpc3RQcm9kdWN0cyhzbHVnID09PSAnZGVhbHMnID8geyBxOiAnJywgbGltaXQ6IDI0IH0gOiB7IGNhdGVnb3J5OiBzbHVnLCBsaW1pdDogMjQgfSksXG4gICAgICBdKVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cblxuICAgICAgaWYgKGNhdGVnb3J5UmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBzZXRMaXZlQ2F0ZWdvcnkoe1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5UmVzcG9uc2UuZGF0YS5uYW1lLFxuICAgICAgICAgIHNsdWc6IGNhdGVnb3J5UmVzcG9uc2UuZGF0YS5zbHVnLFxuICAgICAgICAgIGltYWdlOiBjYXRlZ29yeVJlc3BvbnNlLmRhdGEuaW1hZ2UgPz8gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT09IHNsdWcpPy5pbWFnZSA/PyAnJyxcbiAgICAgICAgICBjb3VudDogY2F0ZWdvcnlSZXNwb25zZS5kYXRhLmNvdW50LFxuICAgICAgICAgIGNvbG9yOiBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PT0gc2x1Zyk/LmNvbG9yID8/ICcjRUVGMkZGJyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExpdmVDYXRlZ29yeShjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PT0gc2x1ZykgPz8gbnVsbClcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2R1Y3RzUmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBzZXRMaXZlUHJvZHVjdHMocHJvZHVjdHNSZXNwb25zZS5kYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TGl2ZVByb2R1Y3RzKG51bGwpXG4gICAgICB9XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSkoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtzbHVnLCBjYXRlZ29yaWVzXSlcblxuICBjb25zdCBjYXRlZ29yeSA9IGxpdmVDYXRlZ29yeSA/PyBjYXRlZ29yaWVzLmZpbmQoYyA9PiBjLnNsdWcgPT09IHNsdWcpXG5cbiAgY29uc3QgY2F0UHJvZHVjdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgbGlzdCA9IGxpdmVQcm9kdWN0cyA/PyAoc2x1ZyA9PT0gJ2RlYWxzJyA/IHByb2R1Y3RzLmZpbHRlcihwID0+IHAuZGlzY291bnQgPiAyMCkgOiBwcm9kdWN0cy5maWx0ZXIocCA9PiBwLmNhdGVnb3J5U2x1ZyA9PT0gc2x1ZykpXG5cbiAgICBpZiAoIWxpc3QubGVuZ3RoKSBsaXN0ID0gcHJvZHVjdHNcbiAgICBpZiAoc2VsZWN0ZWRQcmljZVJhbmdlICE9PSBudWxsKSBsaXN0ID0gbGlzdC5maWx0ZXIocCA9PiBwLnByaWNlID49IFswLCAyNSwgNzUsIDIwMCwgNTAwXVtzZWxlY3RlZFByaWNlUmFuZ2VdICYmIHAucHJpY2UgPCBbMjUsIDc1LCAyMDAsIDUwMCwgSW5maW5pdHldW3NlbGVjdGVkUHJpY2VSYW5nZV0pXG4gICAgaWYgKG1pblJhdGluZykgbGlzdCA9IGxpc3QuZmlsdGVyKHAgPT4gcC5yYXRpbmcgPj0gbWluUmF0aW5nKVxuICAgIGlmIChvbmx5RnJlZVNoaXBwaW5nKSBsaXN0ID0gbGlzdC5maWx0ZXIocCA9PiBwLmZyZWVTaGlwcGluZylcblxuICAgIHN3aXRjaCAoc29ydEJ5KSB7XG4gICAgICBjYXNlICdwcmljZS1hc2MnOiBsaXN0ID0gWy4uLmxpc3RdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTsgYnJlYWtcbiAgICAgIGNhc2UgJ3ByaWNlLWRlc2MnOiBsaXN0ID0gWy4uLmxpc3RdLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTsgYnJlYWtcbiAgICAgIGNhc2UgJ3JhdGluZyc6IGxpc3QgPSBbLi4ubGlzdF0uc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7IGJyZWFrXG4gICAgICBjYXNlICduZXdlc3QnOiBsaXN0ID0gWy4uLmxpc3RdLnJldmVyc2UoKTsgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFxuICB9LCBbc2x1Zywgc29ydEJ5LCBzZWxlY3RlZFByaWNlUmFuZ2UsIG1pblJhdGluZywgb25seUZyZWVTaGlwcGluZywgbGl2ZVByb2R1Y3RzLCBwcm9kdWN0c10pXG5cbiAgY29uc3QgY2F0TmFtZSA9IGNhdGVnb3J5Py5uYW1lID8/IHNsdWcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzbHVnLnNsaWNlKDEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjlGOEY1XSBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxDYXRlZ29yeUhlcm8gY2F0ZWdvcnk9e2NhdGVnb3J5fSBjYXROYW1lPXtjYXROYW1lfSBjb3VudD17bG9hZGluZyA/IDAgOiBjYXRQcm9kdWN0cy5sZW5ndGh9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNiBweS04XCI+XG4gICAgICAgIDxDYXRlZ29yeVRvb2xiYXJcbiAgICAgICAgICBzb3J0Qnk9e3NvcnRCeX1cbiAgICAgICAgICB2aWV3TW9kZT17dmlld01vZGV9XG4gICAgICAgICAgZmlsdGVyT3Blbj17ZmlsdGVyT3Blbn1cbiAgICAgICAgICBvblRvZ2dsZUZpbHRlck9wZW49eygpID0+IHNldEZpbHRlck9wZW4oIWZpbHRlck9wZW4pfVxuICAgICAgICAgIG9uU29ydENoYW5nZT17c2V0U29ydEJ5fVxuICAgICAgICAgIG9uVmlld01vZGVDaGFuZ2U9e3NldFZpZXdNb2RlfVxuICAgICAgICAgIHJlc3VsdHNDb3VudD17Y2F0UHJvZHVjdHMubGVuZ3RofVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtOFwiPlxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgdy01NiBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNSBzdGlja3kgdG9wLTI0XCI+XG4gICAgICAgICAgICAgIDxDYXRlZ29yeUZpbHRlcnNcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByaWNlUmFuZ2U9e3NlbGVjdGVkUHJpY2VSYW5nZX1cbiAgICAgICAgICAgICAgICBtaW5SYXRpbmc9e21pblJhdGluZ31cbiAgICAgICAgICAgICAgICBvbmx5RnJlZVNoaXBwaW5nPXtvbmx5RnJlZVNoaXBwaW5nfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0UHJpY2VSYW5nZT17c2V0U2VsZWN0ZWRQcmljZVJhbmdlfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0UmF0aW5nPXtzZXRNaW5SYXRpbmd9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVGcmVlU2hpcHBpbmc9eygpID0+IHNldE9ubHlGcmVlU2hpcHBpbmcodiA9PiAhdil9XG4gICAgICAgICAgICAgICAgb25DbGVhcj17KCkgPT4geyBzZXRTZWxlY3RlZFByaWNlUmFuZ2UobnVsbCk7IHNldE1pblJhdGluZyhudWxsKTsgc2V0T25seUZyZWVTaGlwcGluZyhmYWxzZSkgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICB7ZmlsdGVyT3BlbiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svNDAgei00MCBtZDpoaWRkZW5cIiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXJPcGVuKGZhbHNlKX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBiZy13aGl0ZSB6LTUwIHJvdW5kZWQtdC0yeGwgcC02IG1kOmhpZGRlbiBtYXgtaC1bODB2aF0gb3ZlcmZsb3cteS1hdXRvIGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlGaWx0ZXJzXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFByaWNlUmFuZ2U9e3NlbGVjdGVkUHJpY2VSYW5nZX1cbiAgICAgICAgICAgICAgICAgIG1pblJhdGluZz17bWluUmF0aW5nfVxuICAgICAgICAgICAgICAgICAgb25seUZyZWVTaGlwcGluZz17b25seUZyZWVTaGlwcGluZ31cbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0UHJpY2VSYW5nZT17c2V0U2VsZWN0ZWRQcmljZVJhbmdlfVxuICAgICAgICAgICAgICAgICAgb25TZWxlY3RSYXRpbmc9e3NldE1pblJhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlRnJlZVNoaXBwaW5nPXsoKSA9PiBzZXRPbmx5RnJlZVNoaXBwaW5nKHYgPT4gIXYpfVxuICAgICAgICAgICAgICAgICAgb25DbGVhcj17KCkgPT4geyBzZXRTZWxlY3RlZFByaWNlUmFuZ2UobnVsbCk7IHNldE1pblJhdGluZyhudWxsKTsgc2V0T25seUZyZWVTaGlwcGluZyhmYWxzZSkgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICA8Q2F0ZWdvcnlSZXN1bHRzIGl0ZW1zPXtjYXRQcm9kdWN0c30gd2lzaGxpc3Q9e3dpc2hsaXN0fSBvblRvZ2dsZVdpc2hsaXN0PXtvblRvZ2dsZVdpc2hsaXN0fSBvbkFkZFRvQ2FydD17b25BZGRUb0NhcnR9IG9uTmF2aWdhdGU9e29uTmF2aWdhdGV9IHZpZXdNb2RlPXt2aWV3TW9kZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHR5cGUgeyBWaWV3IH0gZnJvbSAnLi4vYXBwL25hdmlnYXRpb24nXG5pbXBvcnQgdHlwZSB7IENhcnRJdGVtSW5wdXQgfSBmcm9tICcuLi9zdGF0ZS9tYXJrZXRwbGFjZS1zdG9yZSdcbmltcG9ydCBDYXRlZ29yeVBhZ2VDb250ZW50IGZyb20gJy4vY2F0ZWdvcnkvQ2F0ZWdvcnlQYWdlQ29udGVudCdcblxudHlwZSBQcm9wcyA9IHtcbiAgc2x1Zzogc3RyaW5nXG4gIG9uTmF2aWdhdGU6ICh2OiBWaWV3KSA9PiB2b2lkXG4gIHdpc2hsaXN0OiBTZXQ8c3RyaW5nPlxuICBvblRvZ2dsZVdpc2hsaXN0OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICBvbkFkZFRvQ2FydDogKGl0ZW06IENhcnRJdGVtSW5wdXQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlKHByb3BzOiBQcm9wcykge1xuICByZXR1cm4gPENhdGVnb3J5UGFnZUNvbnRlbnQgey4uLnByb3BzfSAvPlxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQVFBLFNBQXdCLGFBQWEsRUFBRSxVQUFVLFNBQVMsU0FBZ0I7Q0FDeEUsT0FDRSxpQkFBQSxHQUFBLG1CQUFBLEtBQUEsQ0FBQyxPQUFEO0VBQUssV0FBVTtFQUFmLFVBQUE7R0FDRyxVQUFVLFNBQVMsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsT0FBRDtJQUFLLEtBQUssU0FBUztJQUFPLEtBQUs7SUFBUyxXQUFVO0dBQThCLENBQUE7R0FDcEcsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsT0FBRCxFQUFLLFdBQVUsc0VBQXVFLENBQUE7R0FDdEYsaUJBQUEsR0FBQSxtQkFBQSxLQUFBLENBQUMsT0FBRDtJQUFLLFdBQVU7SUFBZixVQUFBO0tBQ0UsaUJBQUEsR0FBQSxtQkFBQSxLQUFBLENBQUMsT0FBRDtNQUFLLFdBQVU7TUFBZixVQUFBO09BQ0UsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsUUFBRCxFQUFBLFVBQU0sT0FBVSxDQUFBO09BQ2hCLGlCQUFBLEdBQUEsbUJBQUEsSUFBQSxDQUFDLFFBQUQsRUFBQSxVQUFNLElBQU8sQ0FBQTtPQUNiLGlCQUFBLEdBQUEs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