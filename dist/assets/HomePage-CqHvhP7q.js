import { g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog } from "./index-BM41bWnP.js";
import { t as ProductCard } from "./ProductCard-Cuskg2O9.js";
//#region src/pages/home/HeroSection.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var heroSlides = [
	{
		id: 0,
		badge: "Summer Sale 2025",
		headline: "Discover the\nFuture of Shopping",
		sub: "Thousands of verified sellers. Millions of products.\nOne seamless experience.",
		cta: "Shop Now",
		ctaSecondary: "Explore Vendors",
		image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=700&fit=crop&auto=format",
		accent: "#E8450A",
		stat1: {
			value: "2M+",
			label: "Products"
		},
		stat2: {
			value: "48K",
			label: "Sellers"
		},
		stat3: {
			value: "4.9★",
			label: "Avg Rating"
		}
	},
	{
		id: 1,
		badge: "Tech Week",
		headline: "Power Up Your\nDigital Life",
		sub: "The latest smartphones, laptops and audio\nat prices that make sense.",
		cta: "Shop Electronics",
		ctaSecondary: "Flash Deals",
		image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&h=700&fit=crop&auto=format",
		accent: "#6D28D9",
		stat1: {
			value: "50%",
			label: "Max Off"
		},
		stat2: {
			value: "12K",
			label: "Tech Products"
		},
		stat3: {
			value: "Free",
			label: "Delivery"
		}
	},
	{
		id: 2,
		badge: "Beauty Edit",
		headline: "Glow Up With\nPremium Beauty",
		sub: "From skincare essentials to luxury fragrances.\nAll verified. All authentic.",
		cta: "Shop Beauty",
		ctaSecondary: "View Brands",
		image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&h=700&fit=crop&auto=format",
		accent: "#E11D48",
		stat1: {
			value: "31K",
			label: "Beauty Items"
		},
		stat2: {
			value: "98%",
			label: "Satisfaction"
		},
		stat3: {
			value: "30d",
			label: "Returns"
		}
	}
];
function HeroSection({ onNavigate }) {
	const [current, setCurrent] = (0, import_react.useState)(0);
	const timerRef = (0, import_react.useRef)(null);
	const next = (0, import_react.useCallback)(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
	(0, import_react.useEffect)(() => {
		timerRef.current = setInterval(next, 5e3);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [next]);
	const slide = heroSlides[current];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[#0E0E0E] min-h-[580px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.image,
					alt: "",
					className: "w-full h-full object-cover opacity-40 fade-in"
				}, slide.id), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative max-w-[1280px] mx-auto px-6 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[560px] space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white fade-in",
							style: {
								background: `${slide.accent}33`,
								border: `1px solid ${slide.accent}66`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-2 h-2 rounded-full",
								style: {
									background: slide.accent,
									animation: "pulse-dot 2s infinite"
								}
							}), slide.badge]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl md:text-6xl font-bold text-white leading-tight fade-in",
							style: { whiteSpace: "pre-line" },
							children: slide.headline
						}, slide.id),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#9CA3AF] text-base md:text-lg leading-relaxed",
							style: { whiteSpace: "pre-line" },
							children: slide.sub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onNavigate({
									type: "category",
									slug: "electronics"
								}),
								className: "px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105",
								style: { background: slide.accent },
								children: slide.cta
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-6 py-3 rounded-xl font-semibold text-sm text-white border border-white/30 hover:bg-white/10 transition-colors",
								children: slide.ctaSecondary
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-8 pt-4",
							children: [
								slide.stat1,
								slide.stat2,
								slide.stat3
							].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono font-bold text-xl text-white",
									children: stat.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#6B6A66] mt-0.5",
									children: stat.label
								})]
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2",
				children: heroSlides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrent(i),
					className: `rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-[#E8450A]" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"}`
				}, i))
			})
		]
	});
}
//#endregion
//#region src/pages/home/ProductCarouselSection.tsx
function ProductCarouselSection({ title, subtitle, items, onNavigate, wishlist, onToggleWishlist, onAddToCart }) {
	const scrollRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-end justify-between max-w-[1280px] mx-auto px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2",
					children: "Featured"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#6B6A66] mt-2 text-sm",
					children: subtitle
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollRef,
			className: "flex gap-4 overflow-x-auto scroll-container px-6 max-w-[1280px] mx-auto pb-2",
			style: { scrollSnapType: "x mandatory" },
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-shrink-0 w-[260px]",
				style: { scrollSnapAlign: "start" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					wishlisted: wishlist.has(p.id),
					onToggleWishlist,
					onAddToCart,
					onNavigate: (id) => onNavigate({
						type: "product",
						id
					})
				})
			}, p.id))
		})]
	});
}
//#endregion
//#region src/pages/home/FlashSaleSection.tsx
function FlashSaleSection({ items = [], onNavigate, wishlist, onToggleWishlist, onAddToCart }) {
	const [timeLeft, setTimeLeft] = (0, import_react.useState)({
		h: 3,
		m: 47,
		s: 23
	});
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setTimeLeft((prev) => {
				let { h, m, s } = prev;
				s--;
				if (s < 0) {
					s = 59;
					m--;
				}
				if (m < 0) {
					m = 59;
					h--;
				}
				if (h < 0) return {
					h: 3,
					m: 59,
					s: 59
				};
				return {
					h,
					m,
					s
				};
			});
		}, 1e3);
		return () => clearInterval(interval);
	}, []);
	const pad = (n) => String(n).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#0E0E0E] py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#E11D48] text-2xl",
						children: "⚡"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl font-bold text-white",
						children: "Flash Sale"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#6B6A66] text-sm",
					children: "Limited stock. Unreal prices. Hurry - deals end in:"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 sm:ml-auto",
					children: [
						{
							val: pad(timeLeft.h),
							label: "HRS"
						},
						{
							val: pad(timeLeft.m),
							label: "MIN"
						},
						{
							val: pad(timeLeft.s),
							label: "SEC"
						}
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/10 rounded-xl px-4 py-3 text-center min-w-[64px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono font-bold text-2xl text-white tabular-nums",
								children: t.val
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px] text-[#6B6A66] font-semibold tracking-widest",
								children: t.label
							})]
						}), i < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xl font-bold text-[#E11D48]",
							children: ":"
						})]
					}, i))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
				children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group",
					onClick: () => onNavigate({
						type: "product",
						id: product.id
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square bg-[#F9F8F5] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.title,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-3 left-3 bg-[#E11D48] text-white text-sm font-black px-3 py-1 rounded-lg shadow-lg",
								children: [
									"-",
									product.discount,
									"%"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: (e) => {
									e.stopPropagation();
									onToggleWishlist(product.id);
								},
								className: `absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all ${wishlist.has(product.id) ? "bg-[#E11D48] text-white" : "bg-white text-[#6B6A66] hover:text-[#E11D48]"}`,
								children: "♥"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#0E0E0E] line-clamp-2 leading-snug",
								children: product.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono font-black text-xl text-[#E11D48]",
									children: ["$", product.price]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-sm text-[#9CA3AF] line-through",
									children: ["$", product.originalPrice]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: (e) => {
									e.stopPropagation();
									onAddToCart({
										id: product.id,
										title: product.title,
										price: product.price,
										originalPrice: product.originalPrice,
										image: product.image,
										vendor: product.vendor
									});
								},
								className: "w-full py-2.5 bg-[#0E0E0E] text-white rounded-xl text-sm font-semibold hover:bg-[#E8450A] transition-colors",
								children: "Add to Cart"
							})
						]
					})]
				}, product.id))
			})]
		})
	});
}
//#endregion
//#region src/pages/home/HomeSections.tsx
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white border-b border-[#E8E7E2]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1280px] mx-auto px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8E7E2]",
				children: [
					{
						icon: "🚚",
						title: "Free Delivery",
						sub: "On orders over $75"
					},
					{
						icon: "↩️",
						title: "Easy Returns",
						sub: "30-day hassle-free"
					},
					{
						icon: "🔒",
						title: "Secure Payments",
						sub: "SSL encrypted"
					},
					{
						icon: "✓",
						title: "Verified Sellers",
						sub: "100% authenticated"
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 py-4 px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: t.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#0E0E0E]",
						children: t.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#6B6A66]",
						children: t.sub
					})] })]
				}, t.title))
			})
		})
	});
}
function CategoryGrid({ onNavigate }) {
	const { categories } = useCatalog();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-[1280px] mx-auto px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-end justify-between mb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2",
				children: "Explore"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]",
				children: "Shop by Category"
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
			children: categories.slice(0, 4).map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onNavigate({
					type: "category",
					slug: cat.slug
				}),
				className: "group relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#E8E7E2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cat.image,
						alt: cat.name,
						className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-0 left-0 right-0 p-4 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-white text-base",
							children: cat.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[#9CA3AF] text-xs mt-0.5",
							children: [(cat.count / 1e3).toFixed(0), "K+ products"]
						})]
					})
				]
			}, cat.slug))
		})]
	});
}
function BrandLogos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-[#E8E7E2] bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-8",
				children: "Official Brands Available on Nexus"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between gap-4 flex-wrap",
				children: [
					"Apple",
					"Samsung",
					"Nike",
					"Adidas",
					"Sony",
					"Xiaomi"
				].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "px-6 py-3 rounded-xl border border-[#E8E7E2] hover:border-[#0E0E0E] hover:shadow-sm transition-all duration-200 group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-lg text-[#C5C4C0] group-hover:text-[#0E0E0E] transition-colors tracking-tight",
						children: name
					})
				}, name))
			})]
		})
	});
}
function TopVendors({ onNavigate }) {
	const { vendors } = useCatalog();
	const [followedIds, setFollowedIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const toggleFollow = (e, id) => {
		e.stopPropagation();
		setFollowedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#F3F2EF] py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2",
					children: "Verified Stores"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]",
					children: "Explore Top Stores"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
				children: vendors.slice(0, 4).map((vendor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-250 cursor-pointer group",
					onClick: () => onNavigate({
						type: "vendor",
						id: vendor.id
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-24 overflow-hidden bg-gradient-to-br from-[#0E0E0E] to-[#374151]",
						children: [
							vendor.cover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: vendor.cover,
								alt: "",
								className: "w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -bottom-5 left-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-xl border-2 border-white shadow-lg overflow-hidden bg-[#F3F2EF]",
									children: vendor.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: vendor.logo,
										alt: vendor.name,
										className: "w-full h-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-full flex items-center justify-center text-lg font-bold text-[#6B6A66]",
										children: vendor.name[0]
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-7 px-4 pb-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-[#0E0E0E] text-sm truncate",
									children: vendor.name
								}), vendor.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-3.5 h-3.5 text-[#E8450A] flex-shrink-0",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										fillRule: "evenodd",
										d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
										clipRule: "evenodd"
									})
								})]
							}), vendor.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#6B6A66] truncate mt-0.5",
								children: vendor.tagline
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs text-[#6B6A66]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "w-3 h-3 text-yellow-400",
											viewBox: "0 0 20 20",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-[#0E0E0E]",
											children: vendor.rating.toFixed(1)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-[#0E0E0E]",
										children: vendor.productCount
									}), " items"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										className: "text-[#0E0E0E]",
										children: [vendor.positiveFeedback, "%"]
									}), " pos."] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => {
										e.stopPropagation();
										onNavigate({
											type: "vendor",
											id: vendor.id
										});
									},
									className: "flex-1 py-2 bg-[#0E0E0E] text-white text-xs font-semibold rounded-xl hover:bg-[#E8450A] transition-colors",
									children: "Visit Store"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => toggleFollow(e, vendor.id),
									className: `py-2 px-3 text-xs font-semibold rounded-xl border transition-colors ${followedIds.has(vendor.id) ? "bg-[#0E0E0E] text-white border-[#0E0E0E]" : "border-[#E8E7E2] text-[#0E0E0E] hover:border-[#0E0E0E]"}`,
									children: followedIds.has(vendor.id) ? "Following" : "Follow"
								})]
							})
						]
					})]
				}, vendor.id))
			})]
		})
	});
}
function ReviewsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-[1280px] mx-auto px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-2",
				children: "Social Proof"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl md:text-4xl font-semibold text-[#0E0E0E]",
				children: "Real People. Real Products."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
			children: [
				"Absolutely incredible noise cancellation.",
				"The M3 chip is a genuine leap forward.",
				"My skin has completely transformed.",
				"Super comfortable for long walks."
			].map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white rounded-2xl p-5 border border-[#E8E7E2] hover:shadow-lg transition-shadow space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[#6B6A66] leading-relaxed",
					children: [
						"\"",
						text,
						"\""
					]
				})
			}, index))
		})]
	});
}
function BeforeAfterSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "max-w-[1280px] mx-auto px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-[#E8450A] uppercase tracking-widest mb-3",
					children: "Real Results"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-5xl font-semibold text-[#0E0E0E] leading-tight mb-6",
					children: [
						"See the",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-[#E8450A]",
							children: "Difference"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#6B6A66] text-base leading-relaxed mb-6",
					children: "Verified customer results from our beauty collection."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-2xl overflow-hidden aspect-[4/3] border border-[#E8E7E2] bg-[linear-gradient(135deg,#1f2937,#d1d5db)]" })]
		})
	});
}
function NewArrivals({ onNavigate: _onNavigate, wishlist: _w, onToggleWishlist: _otw, onAddToCart: _atc }) {
	const { products } = useCatalog();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#F3F2EF] py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1280px] mx-auto px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
				children: products.slice(0, 8).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold line-clamp-2",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#6B6A66] mt-1",
						children: p.vendor
					})]
				}, p.id))
			})
		})
	});
}
function HomeSections(props) {
	const { products } = useCatalog();
	const flashSaleItems = products.filter((product) => product.discount >= 20).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, { onNavigate: props.onNavigate }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryGrid, { onNavigate: props.onNavigate }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCarouselSection, {
			title: "Trending Now",
			subtitle: "Discover what shoppers are loving right now.",
			items: products.slice(0, 8),
			...props
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlashSaleSection, {
			items: flashSaleItems,
			...props
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopVendors, { onNavigate: props.onNavigate }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogos, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewArrivals, { ...props })
	] });
}
//#endregion
//#region src/pages/HomePage.tsx
function HomePage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeSections, { ...props }) });
}
//#endregion
export { HomePage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UtQ3FIdmhQN3EuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvSGVyb1NlY3Rpb24udHN4IiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvUHJvZHVjdENhcm91c2VsU2VjdGlvbi50c3giLCIuLi8uLi9zcmMvcGFnZXMvaG9tZS9GbGFzaFNhbGVTZWN0aW9uLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9ob21lL0hvbWVTZWN0aW9ucy50c3giLCIuLi8uLi9zcmMvcGFnZXMvSG9tZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuXG5jb25zdCBoZXJvU2xpZGVzID0gW1xuICB7XG4gICAgaWQ6IDAsXG4gICAgYmFkZ2U6ICdTdW1tZXIgU2FsZSAyMDI1JyxcbiAgICBoZWFkbGluZTogJ0Rpc2NvdmVyIHRoZVxcbkZ1dHVyZSBvZiBTaG9wcGluZycsXG4gICAgc3ViOiBcIlRob3VzYW5kcyBvZiB2ZXJpZmllZCBzZWxsZXJzLiBNaWxsaW9ucyBvZiBwcm9kdWN0cy5cXG5PbmUgc2VhbWxlc3MgZXhwZXJpZW5jZS5cIixcbiAgICBjdGE6ICdTaG9wIE5vdycsXG4gICAgY3RhU2Vjb25kYXJ5OiAnRXhwbG9yZSBWZW5kb3JzJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgzOTg1OTg4MzU1LTc2MzcyOGUxOTM1Yj93PTkwMCZoPTcwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsXG4gICAgYWNjZW50OiAnI0U4NDUwQScsXG4gICAgc3RhdDE6IHsgdmFsdWU6ICcyTSsnLCBsYWJlbDogJ1Byb2R1Y3RzJyB9LFxuICAgIHN0YXQyOiB7IHZhbHVlOiAnNDhLJywgbGFiZWw6ICdTZWxsZXJzJyB9LFxuICAgIHN0YXQzOiB7IHZhbHVlOiAnNC454piFJywgbGFiZWw6ICdBdmcgUmF0aW5nJyB9LFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgYmFkZ2U6ICdUZWNoIFdlZWsnLFxuICAgIGhlYWRsaW5lOiAnUG93ZXIgVXAgWW91clxcbkRpZ2l0YWwgTGlmZScsXG4gICAgc3ViOiBcIlRoZSBsYXRlc3Qgc21hcnRwaG9uZXMsIGxhcHRvcHMgYW5kIGF1ZGlvXFxuYXQgcHJpY2VzIHRoYXQgbWFrZSBzZW5zZS5cIixcbiAgICBjdGE6ICdTaG9wIEVsZWN0cm9uaWNzJyxcbiAgICBjdGFTZWNvbmRhcnk6ICdGbGFzaCBEZWFscycsXG4gICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzY0MjYzMjU1OS0wYzZkM2ZjNjJiODk/dz05MDAmaD03MDAmZml0PWNyb3AmYXV0bz1mb3JtYXQnLFxuICAgIGFjY2VudDogJyM2RDI4RDknLFxuICAgIHN0YXQxOiB7IHZhbHVlOiAnNTAlJywgbGFiZWw6ICdNYXggT2ZmJyB9LFxuICAgIHN0YXQyOiB7IHZhbHVlOiAnMTJLJywgbGFiZWw6ICdUZWNoIFByb2R1Y3RzJyB9LFxuICAgIHN0YXQzOiB7IHZhbHVlOiAnRnJlZScsIGxhYmVsOiAnRGVsaXZlcnknIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBiYWRnZTogJ0JlYXV0eSBFZGl0JyxcbiAgICBoZWFkbGluZTogJ0dsb3cgVXAgV2l0aFxcblByZW1pdW0gQmVhdXR5JyxcbiAgICBzdWI6IFwiRnJvbSBza2luY2FyZSBlc3NlbnRpYWxzIHRvIGx1eHVyeSBmcmFncmFuY2VzLlxcbkFsbCB2ZXJpZmllZC4gQWxsIGF1dGhlbnRpYy5cIixcbiAgICBjdGE6ICdTaG9wIEJlYXV0eScsXG4gICAgY3RhU2Vjb25kYXJ5OiAnVmlldyBCcmFuZHMnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTY0NjI1MDIyNzgtMjdiZmRjNDAzMzQ4P3c9OTAwJmg9NzAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0JyxcbiAgICBhY2NlbnQ6ICcjRTExRDQ4JyxcbiAgICBzdGF0MTogeyB2YWx1ZTogJzMxSycsIGxhYmVsOiAnQmVhdXR5IEl0ZW1zJyB9LFxuICAgIHN0YXQyOiB7IHZhbHVlOiAnOTglJywgbGFiZWw6ICdTYXRpc2ZhY3Rpb24nIH0sXG4gICAgc3RhdDM6IHsgdmFsdWU6ICczMGQnLCBsYWJlbDogJ1JldHVybnMnIH0sXG4gIH0sXG5dXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6ICh2OiBWaWV3KSA9PiB2b2lkIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1NlY3Rpb24oeyBvbk5hdmlnYXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHRpbWVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGw+KG51bGwpXG4gIGNvbnN0IG5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRDdXJyZW50KGMgPT4gKGMgKyAxKSAlIGhlcm9TbGlkZXMubGVuZ3RoKSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0aW1lclJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwobmV4dCwgNTAwMClcbiAgICByZXR1cm4gKCkgPT4geyBpZiAodGltZXJSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbCh0aW1lclJlZi5jdXJyZW50KSB9XG4gIH0sIFtuZXh0XSlcblxuICBjb25zdCBzbGlkZSA9IGhlcm9TbGlkZXNbY3VycmVudF1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy1bIzBFMEUwRV0gbWluLWgtWzU4MHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gICAgICAgIDxpbWcga2V5PXtzbGlkZS5pZH0gc3JjPXtzbGlkZS5pbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb3BhY2l0eS00MCBmYWRlLWluXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzBFMEUwRV0gdmlhLVsjMEUwRTBFXS84MCB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctWzEyODBweF0gbXgtYXV0byBweC02IHB5LTE2IG1kOnB5LTI0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzU2MHB4XSBzcGFjZS15LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC13aGl0ZSBmYWRlLWluXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogYCR7c2xpZGUuYWNjZW50fTMzYCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7c2xpZGUuYWNjZW50fTY2YCB9fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMiBoLTIgcm91bmRlZC1mdWxsXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogc2xpZGUuYWNjZW50LCBhbmltYXRpb246ICdwdWxzZS1kb3QgMnMgaW5maW5pdGUnIH19IC8+XG4gICAgICAgICAgICB7c2xpZGUuYmFkZ2V9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxIGtleT17c2xpZGUuaWR9IGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBsZWFkaW5nLXRpZ2h0IGZhZGUtaW5cIiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlLWxpbmUnIH19PntzbGlkZS5oZWFkbGluZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM5Q0EzQUZdIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZFwiIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUtbGluZScgfX0+e3NsaWRlLnN1Yn08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdjYXRlZ29yeScsIHNsdWc6ICdlbGVjdHJvbmljcycgfSl9IGNsYXNzTmFtZT1cInB4LTYgcHktMyByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNjYWxlLTEwNVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IHNsaWRlLmFjY2VudCB9fT57c2xpZGUuY3RhfTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC02IHB5LTMgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHRleHQtc20gdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXdoaXRlLzMwIGhvdmVyOmJnLXdoaXRlLzEwIHRyYW5zaXRpb24tY29sb3JzXCI+e3NsaWRlLmN0YVNlY29uZGFyeX08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC04IHB0LTRcIj5cbiAgICAgICAgICAgIHtbc2xpZGUuc3RhdDEsIHNsaWRlLnN0YXQyLCBzbGlkZS5zdGF0M10ubWFwKChzdGF0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC14bCB0ZXh0LXdoaXRlXCI+e3N0YXQudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkE2Nl0gbXQtMC41XCI+e3N0YXQubGFiZWx9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tOCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgIHtoZXJvU2xpZGVzLm1hcCgoXywgaSkgPT4gPGJ1dHRvbiBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnQoaSl9IGNsYXNzTmFtZT17YHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtpID09PSBjdXJyZW50ID8gJ3ctOCBoLTIuNSBiZy1bI0U4NDUwQV0nIDogJ3ctMi41IGgtMi41IGJnLXdoaXRlLzMwIGhvdmVyOmJnLXdoaXRlLzYwJ31gfSAvPil9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQnXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gJy4uLy4uL2RhdGEvbWFya2V0cGxhY2UnXG5pbXBvcnQgdHlwZSB7IFZpZXcgfSBmcm9tICcuLi8uLi9hcHAvbmF2aWdhdGlvbidcbmltcG9ydCB0eXBlIHsgQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uLy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIHN1YnRpdGxlPzogc3RyaW5nXG4gIGl0ZW1zOiB0eXBlb2YgcHJvZHVjdHNcbiAgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWRcbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Q2Fyb3VzZWxTZWN0aW9uKHsgdGl0bGUsIHN1YnRpdGxlLCBpdGVtcywgb25OYXZpZ2F0ZSwgd2lzaGxpc3QsIG9uVG9nZ2xlV2lzaGxpc3QsIG9uQWRkVG9DYXJ0IH06IFByb3BzKSB7XG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gbWF4LXctWzEyODBweF0gbXgtYXV0byBweC02XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yXCI+RmVhdHVyZWQ8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAge3N1YnRpdGxlICYmIDxwIGNsYXNzTmFtZT1cInRleHQtWyM2QjZBNjZdIG10LTIgdGV4dC1zbVwiPntzdWJ0aXRsZX08L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiByZWY9e3Njcm9sbFJlZn0gY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsLWNvbnRhaW5lciBweC02IG1heC13LVsxMjgwcHhdIG14LWF1dG8gcGItMlwiIHN0eWxlPXt7IHNjcm9sbFNuYXBUeXBlOiAneCBtYW5kYXRvcnknIH19PlxuICAgICAgICB7aXRlbXMubWFwKHAgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwLmlkfSBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctWzI2MHB4XVwiIHN0eWxlPXt7IHNjcm9sbFNuYXBBbGlnbjogJ3N0YXJ0JyB9fT5cbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwfSB3aXNobGlzdGVkPXt3aXNobGlzdC5oYXMocC5pZCl9IG9uVG9nZ2xlV2lzaGxpc3Q9e29uVG9nZ2xlV2lzaGxpc3R9IG9uQWRkVG9DYXJ0PXtvbkFkZFRvQ2FydH0gb25OYXZpZ2F0ZT17aWQgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdwcm9kdWN0JywgaWQgfSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbUlucHV0IH0gZnJvbSAnLi4vLi4vc3RhdGUvbWFya2V0cGxhY2Utc3RvcmUnXG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9kYXRhL21hcmtldHBsYWNlJ1xuXG50eXBlIFByb3BzID0ge1xuICBpdGVtcz86IFByb2R1Y3RbXVxuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICB3aXNobGlzdDogU2V0PHN0cmluZz5cbiAgb25Ub2dnbGVXaXNobGlzdDogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BZGRUb0NhcnQ6IChpdGVtOiBDYXJ0SXRlbUlucHV0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsYXNoU2FsZVNlY3Rpb24oeyBpdGVtcyA9IFtdLCBvbk5hdmlnYXRlLCB3aXNobGlzdCwgb25Ub2dnbGVXaXNobGlzdCwgb25BZGRUb0NhcnQgfTogUHJvcHMpIHtcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSh7IGg6IDMsIG06IDQ3LCBzOiAyMyB9KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZUxlZnQocHJldiA9PiB7XG4gICAgICAgIGxldCB7IGgsIG0sIHMgfSA9IHByZXZcbiAgICAgICAgcy0tXG4gICAgICAgIGlmIChzIDwgMCkgeyBzID0gNTk7IG0tLSB9XG4gICAgICAgIGlmIChtIDwgMCkgeyBtID0gNTk7IGgtLSB9XG4gICAgICAgIGlmIChoIDwgMCkgcmV0dXJuIHsgaDogMywgbTogNTksIHM6IDU5IH1cbiAgICAgICAgcmV0dXJuIHsgaCwgbSwgcyB9XG4gICAgICB9KVxuICAgIH0sIDEwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHBhZCA9IChuOiBudW1iZXIpID0+IFN0cmluZyhuKS5wYWRTdGFydCgyLCAnMCcpXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctWyMwRTBFMEVdIHB5LTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGdhcC01IG1iLThcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0xXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNFMTFENDhdIHRleHQtMnhsXCI+4pqhPC9zcGFuPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+Rmxhc2ggU2FsZTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM2QjZBNjZdIHRleHQtc21cIj5MaW1pdGVkIHN0b2NrLiBVbnJlYWwgcHJpY2VzLiBIdXJyeSAtIGRlYWxzIGVuZCBpbjo8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzbTptbC1hdXRvXCI+XG4gICAgICAgICAgICB7W3sgdmFsOiBwYWQodGltZUxlZnQuaCksIGxhYmVsOiAnSFJTJyB9LCB7IHZhbDogcGFkKHRpbWVMZWZ0Lm0pLCBsYWJlbDogJ01JTicgfSwgeyB2YWw6IHBhZCh0aW1lTGVmdC5zKSwgbGFiZWw6ICdTRUMnIH1dLm1hcCgodCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzEwIHJvdW5kZWQteGwgcHgtNCBweS0zIHRleHQtY2VudGVyIG1pbi13LVs2NHB4XVwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHRhYnVsYXItbnVtc1wiPnt0LnZhbH08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtWyM2QjZBNjZdIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXN0XCI+e3QubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtpIDwgMiAmJiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGQgdGV4dC1bI0UxMUQ0OF1cIj46PC9zcGFuPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgIHtpdGVtcy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy14bCBob3ZlcjotdHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBncm91cFwiIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAncHJvZHVjdCcsIGlkOiBwcm9kdWN0LmlkIH0pfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIGJnLVsjRjlGOEY1XSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0LnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zIGxlZnQtMyBiZy1bI0UxMUQ0OF0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYmxhY2sgcHgtMyBweS0xIHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+LXtwcm9kdWN0LmRpc2NvdW50fSU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBvblRvZ2dsZVdpc2hsaXN0KHByb2R1Y3QuaWQpIH19IGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0zIHJpZ2h0LTMgdy04IGgtOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LW1kIHRyYW5zaXRpb24tYWxsICR7d2lzaGxpc3QuaGFzKHByb2R1Y3QuaWQpID8gJ2JnLVsjRTExRDQ4XSB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZSB0ZXh0LVsjNkI2QTY2XSBob3Zlcjp0ZXh0LVsjRTExRDQ4XSd9YH0+4pmlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gbGluZS1jbGFtcC0yIGxlYWRpbmctc251Z1wiPntwcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LXhsIHRleHQtWyNFMTFENDhdXCI+JHtwcm9kdWN0LnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyM5Q0EzQUZdIGxpbmUtdGhyb3VnaFwiPiR7cHJvZHVjdC5vcmlnaW5hbFByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBvbkFkZFRvQ2FydCh7IGlkOiBwcm9kdWN0LmlkLCB0aXRsZTogcHJvZHVjdC50aXRsZSwgcHJpY2U6IHByb2R1Y3QucHJpY2UsIG9yaWdpbmFsUHJpY2U6IHByb2R1Y3Qub3JpZ2luYWxQcmljZSwgaW1hZ2U6IHByb2R1Y3QuaW1hZ2UsIHZlbmRvcjogcHJvZHVjdC52ZW5kb3IgfSkgfX0gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSBiZy1bIzBFMEUwRV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbUlucHV0IH0gZnJvbSAnLi4vLi4vc3RhdGUvbWFya2V0cGxhY2Utc3RvcmUnXG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSAnLi9IZXJvU2VjdGlvbidcbmltcG9ydCBQcm9kdWN0Q2Fyb3VzZWxTZWN0aW9uIGZyb20gJy4vUHJvZHVjdENhcm91c2VsU2VjdGlvbidcbmltcG9ydCBGbGFzaFNhbGVTZWN0aW9uIGZyb20gJy4vRmxhc2hTYWxlU2VjdGlvbidcbmltcG9ydCB7IHVzZUNhdGFsb2cgfSBmcm9tICcuLi8uLi9zdGF0ZS9jYXRhbG9nLXN0b3JlJ1xuXG50eXBlIFByb3BzID0ge1xuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICB3aXNobGlzdDogU2V0PHN0cmluZz5cbiAgb25Ub2dnbGVXaXNobGlzdDogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BZGRUb0NhcnQ6IChpdGVtOiBDYXJ0SXRlbUlucHV0KSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIFRydXN0QmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLVsjRThFN0UyXVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTI4MHB4XSBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGRpdmlkZS14IGRpdmlkZS1bI0U4RTdFMl1cIj5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgeyBpY29uOiAn8J+amicsIHRpdGxlOiAnRnJlZSBEZWxpdmVyeScsIHN1YjogJ09uIG9yZGVycyBvdmVyICQ3NScgfSxcbiAgICAgICAgICAgIHsgaWNvbjogJ+KGqe+4jycsIHRpdGxlOiAnRWFzeSBSZXR1cm5zJywgc3ViOiAnMzAtZGF5IGhhc3NsZS1mcmVlJyB9LFxuICAgICAgICAgICAgeyBpY29uOiAn8J+UkicsIHRpdGxlOiAnU2VjdXJlIFBheW1lbnRzJywgc3ViOiAnU1NMIGVuY3J5cHRlZCcgfSxcbiAgICAgICAgICAgIHsgaWNvbjogJ+KckycsIHRpdGxlOiAnVmVyaWZpZWQgU2VsbGVycycsIHN1YjogJzEwMCUgYXV0aGVudGljYXRlZCcgfSxcbiAgICAgICAgICBdLm1hcCh0ID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXt0LnRpdGxlfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweS00IHB4LTZcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57dC5pY29ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57dC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XVwiPnt0LnN1Yn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gQ2F0ZWdvcnlHcmlkKHsgb25OYXZpZ2F0ZSB9OiB7IG9uTmF2aWdhdGU6ICh2OiBWaWV3KSA9PiB2b2lkIH0pIHtcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSB1c2VDYXRhbG9nKClcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNiBweS0xNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtWyNFODQ1MEFdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMlwiPkV4cGxvcmU8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+U2hvcCBieSBDYXRlZ29yeTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAge2NhdGVnb3JpZXMuc2xpY2UoMCwgNCkubWFwKGNhdCA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2NhdC5zbHVnfSBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2NhdGVnb3J5Jywgc2x1ZzogY2F0LnNsdWcgfSl9IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBhc3BlY3QtWzMvNF0gYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gaG92ZXI6c2hhZG93LXhsIGhvdmVyOi10cmFuc2xhdGUteS0xIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2NhdC5pbWFnZX0gYWx0PXtjYXQubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjMEUwRTBFXS84MCB2aWEtdHJhbnNwYXJlbnQgdG8tdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBwLTQgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWJhc2VcIj57Y2F0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjOUNBM0FGXSB0ZXh0LXhzIG10LTAuNVwiPnsoY2F0LmNvdW50IC8gMTAwMCkudG9GaXhlZCgwKX1LKyBwcm9kdWN0czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBCcmFuZExvZ29zKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvcmRlci15IGJvcmRlci1bI0U4RTdFMl0gYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEyODBweF0gbXgtYXV0byBweC02IHB5LTEwXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHMgZm9udC1ib2xkIHRleHQtWyM5Q0EzQUZdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItOFwiPk9mZmljaWFsIEJyYW5kcyBBdmFpbGFibGUgb24gTmV4dXM8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIHtbJ0FwcGxlJywgJ1NhbXN1bmcnLCAnTmlrZScsICdBZGlkYXMnLCAnU29ueScsICdYaWFvbWknXS5tYXAobmFtZSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17bmFtZX0gY2xhc3NOYW1lPVwicHgtNiBweS0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gaG92ZXI6Ym9yZGVyLVsjMEUwRTBFXSBob3ZlcjpzaGFkb3ctc20gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGdyb3VwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtWyNDNUM0QzBdIGdyb3VwLWhvdmVyOnRleHQtWyMwRTBFMEVdIHRyYW5zaXRpb24tY29sb3JzIHRyYWNraW5nLXRpZ2h0XCI+e25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmZ1bmN0aW9uIFRvcFZlbmRvcnMoeyBvbk5hdmlnYXRlIH06IHsgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWQgfSkge1xuICBjb25zdCB7IHZlbmRvcnMgfSA9IHVzZUNhdGFsb2coKVxuICBjb25zdCBbZm9sbG93ZWRJZHMsIHNldEZvbGxvd2VkSWRzXSA9IHVzZVN0YXRlPFNldDxzdHJpbmc+PihuZXcgU2V0KCkpXG5cbiAgY29uc3QgdG9nZ2xlRm9sbG93ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIGlkOiBzdHJpbmcpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgc2V0Rm9sbG93ZWRJZHMocHJldiA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gbmV3IFNldChwcmV2KVxuICAgICAgaWYgKG5leHQuaGFzKGlkKSkgbmV4dC5kZWxldGUoaWQpXG4gICAgICBlbHNlIG5leHQuYWRkKGlkKVxuICAgICAgcmV0dXJuIG5leHRcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1bI0YzRjJFRl0gcHktMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEyODBweF0gbXgtYXV0byBweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIG1iLThcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yXCI+VmVyaWZpZWQgU3RvcmVzPC9wPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+RXhwbG9yZSBUb3AgU3RvcmVzPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgIHt2ZW5kb3JzLnNsaWNlKDAsIDQpLm1hcCh2ZW5kb3IgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3ZlbmRvci5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGhvdmVyOnNoYWRvdy14bCBob3ZlcjotdHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTI1MCBjdXJzb3ItcG9pbnRlciBncm91cFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAndmVuZG9yJywgaWQ6IHZlbmRvci5pZCB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIENvdmVyICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMjQgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMwRTBFMEVdIHRvLVsjMzc0MTUxXVwiPlxuICAgICAgICAgICAgICAgIHt2ZW5kb3IuY292ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZlbmRvci5jb3Zlcn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb3BhY2l0eS02MCBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwXCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tYmxhY2svNDAgdG8tdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgICAgIHsvKiBMb2dvIG92ZXJsYXBwaW5nIGNvdmVyIGJvdHRvbSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tNSBsZWZ0LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHNoYWRvdy1sZyBvdmVyZmxvdy1oaWRkZW4gYmctWyNGM0YyRUZdXCI+XG4gICAgICAgICAgICAgICAgICAgIHt2ZW5kb3IubG9nb1xuICAgICAgICAgICAgICAgICAgICAgID8gPGltZyBzcmM9e3ZlbmRvci5sb2dvfSBhbHQ9e3ZlbmRvci5uYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1bIzZCNkE2Nl1cIj57dmVuZG9yLm5hbWVbMF19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQm9keSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC03IHB4LTQgcGItNCBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gdGV4dC1zbSB0cnVuY2F0ZVwiPnt2ZW5kb3IubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIHt2ZW5kb3IudmVyaWZpZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1bI0U4NDUwQV0gZmxleC1zaHJpbmstMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguNjAzIDMuNzk5QTQuNDkgNC40OSAwIDAxMTIgMi4yNWMxLjM1NyAwIDIuNTczLjYgMy4zOTcgMS41NDlhNC40OSA0LjQ5IDAgMDEzLjQ5OCAxLjMwNyA0LjQ5MSA0LjQ5MSAwIDAxMS4zMDcgMy40OTdBNC40OSA0LjQ5IDAgMDEyMS43NSAxMmE0LjQ5IDQuNDkgMCAwMS0xLjU0OSAzLjM5NyA0LjQ5MSA0LjQ5MSAwIDAxLTEuMzA3IDMuNDk3IDQuNDkxIDQuNDkxIDAgMDEtMy40OTcgMS4zMDdBNC40OSA0LjQ5IDAgMDExMiAyMS43NWE0LjQ5IDQuNDkgMCAwMS0zLjM5Ny0xLjU0OSA0LjQ5MSA0LjQ5MSAwIDAxLTMuNDk3LTEuMzA3IDQuNDkxIDQuNDkxIDAgMDEtMS4zMDctMy40OTdBNC40OSA0LjQ5IDAgMDEyLjI1IDEyYzAtMS4zNTcuNi0yLjU3MyAxLjU0OS0zLjM5N2E0LjQ5IDQuNDkgMCAwMTEuMzA3LTMuNDk3IDQuNDkgNC40OSAwIDAxMy40OTctMS4zMDd6bTcuMDA3IDYuMzg3YS43NS43NSAwIDEwLTEuMjItLjg3MmwtMy4yMzYgNC41M0w5LjUzIDEyLjIyYS43NS43NSAwIDAwLTEuMDYgMS4wNmwyLjI1IDIuMjVhLjc1Ljc1IDAgMDAxLjE0LS4wOTRsMy43NS01LjI1elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHt2ZW5kb3IudGFnbGluZSAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdIHRydW5jYXRlIG10LTAuNVwiPnt2ZW5kb3IudGFnbGluZX08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXhzIHRleHQtWyM2QjZBNjZdXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC15ZWxsb3ctNDAwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTkuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuMDcgMy4yOTJhMSAxIDAgMDAuOTUuNjloMy40NjJjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTIuOCAyLjAzNGExIDEgMCAwMC0uMzY0IDEuMTE4bDEuMDcgMy4yOTJjLjMuOTIxLS43NTUgMS42ODgtMS41NCAxLjExOGwtMi44LTIuMDM0YTEgMSAwIDAwLTEuMTc1IDBsLTIuOCAyLjAzNGMtLjc4NC41Ny0xLjgzOC0uMTk3LTEuNTM5LTEuMTE4bDEuMDctMy4yOTJhMSAxIDAgMDAtLjM2NC0xLjExOEwyLjk4IDguNzJjLS43ODMtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDMuNDYxYTEgMSAwIDAwLjk1MS0uNjlsMS4wNy0zLjI5MnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtWyMwRTBFMEVdXCI+e3ZlbmRvci5yYXRpbmcudG9GaXhlZCgxKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1bIzBFMEUwRV1cIj57dmVuZG9yLnByb2R1Y3RDb3VudH08L3N0cm9uZz4gaXRlbXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtWyMwRTBFMEVdXCI+e3ZlbmRvci5wb3NpdGl2ZUZlZWRiYWNrfSU8L3N0cm9uZz4gcG9zLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgb25OYXZpZ2F0ZSh7IHR5cGU6ICd2ZW5kb3InLCBpZDogdmVuZG9yLmlkIH0pIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIGJnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIGhvdmVyOmJnLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZpc2l0IFN0b3JlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRvZ2dsZUZvbGxvdyhlLCB2ZW5kb3IuaWQpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0yIHB4LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQteGwgYm9yZGVyIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZWRJZHMuaGFzKHZlbmRvci5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlIGJvcmRlci1bIzBFMEUwRV0nXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItWyNFOEU3RTJdIHRleHQtWyMwRTBFMEVdIGhvdmVyOmJvcmRlci1bIzBFMEUwRV0nXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Zm9sbG93ZWRJZHMuaGFzKHZlbmRvci5pZCkgPyAnRm9sbG93aW5nJyA6ICdGb2xsb3cnfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cblxuZnVuY3Rpb24gUmV2aWV3c1NlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWF4LXctWzEyODBweF0gbXgtYXV0byBweC02IHB5LTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtWyNFODQ1MEFdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMlwiPlNvY2lhbCBQcm9vZjwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+UmVhbCBQZW9wbGUuIFJlYWwgUHJvZHVjdHMuPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgIHtbJ0Fic29sdXRlbHkgaW5jcmVkaWJsZSBub2lzZSBjYW5jZWxsYXRpb24uJywgJ1RoZSBNMyBjaGlwIGlzIGEgZ2VudWluZSBsZWFwIGZvcndhcmQuJywgJ015IHNraW4gaGFzIGNvbXBsZXRlbHkgdHJhbnNmb3JtZWQuJywgJ1N1cGVyIGNvbWZvcnRhYmxlIGZvciBsb25nIHdhbGtzLiddLm1hcCgodGV4dCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNSBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdIGxlYWRpbmctcmVsYXhlZFwiPlwie3RleHR9XCI8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmZ1bmN0aW9uIEJlZm9yZUFmdGVyU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYXgtdy1bMTI4MHB4XSBteC1hdXRvIHB4LTYgcHktMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtMTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0zXCI+UmVhbCBSZXN1bHRzPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSBsZWFkaW5nLXRpZ2h0IG1iLTZcIj5TZWUgdGhlPGJyIC8+PGVtIGNsYXNzTmFtZT1cIm5vdC1pdGFsaWMgdGV4dC1bI0U4NDUwQV1cIj5EaWZmZXJlbmNlPC9lbT48L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM2QjZBNjZdIHRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPlZlcmlmaWVkIGN1c3RvbWVyIHJlc3VsdHMgZnJvbSBvdXIgYmVhdXR5IGNvbGxlY3Rpb24uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gYXNwZWN0LVs0LzNdIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGJnLVtsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMxZjI5MzcsI2QxZDVkYildXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBOZXdBcnJpdmFscyh7IG9uTmF2aWdhdGU6IF9vbk5hdmlnYXRlLCB3aXNobGlzdDogX3csIG9uVG9nZ2xlV2lzaGxpc3Q6IF9vdHcsIG9uQWRkVG9DYXJ0OiBfYXRjIH06IFByb3BzKSB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZUNhdGFsb2coKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctWyNGM0YyRUZdIHB5LTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoMCwgOCkubWFwKHAgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3AuaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGxpbmUtY2xhbXAtMlwiPntwLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XSBtdC0xXCI+e3AudmVuZG9yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lU2VjdGlvbnMocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZUNhdGFsb2coKVxuICBjb25zdCBmbGFzaFNhbGVJdGVtcyA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuZGlzY291bnQgPj0gMjApLnNsaWNlKDAsIDQpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlcm9TZWN0aW9uIG9uTmF2aWdhdGU9e3Byb3BzLm9uTmF2aWdhdGV9IC8+XG4gICAgICA8VHJ1c3RCYXIgLz5cbiAgICAgIDxDYXRlZ29yeUdyaWQgb25OYXZpZ2F0ZT17cHJvcHMub25OYXZpZ2F0ZX0gLz5cbiAgICAgIDxQcm9kdWN0Q2Fyb3VzZWxTZWN0aW9uIHRpdGxlPVwiVHJlbmRpbmcgTm93XCIgc3VidGl0bGU9XCJEaXNjb3ZlciB3aGF0IHNob3BwZXJzIGFyZSBsb3ZpbmcgcmlnaHQgbm93LlwiIGl0ZW1zPXtwcm9kdWN0cy5zbGljZSgwLCA4KX0gey4uLnByb3BzfSAvPlxuICAgICAgPEZsYXNoU2FsZVNlY3Rpb24gaXRlbXM9e2ZsYXNoU2FsZUl0ZW1zfSB7Li4ucHJvcHN9IC8+XG4gICAgICA8QmVmb3JlQWZ0ZXJTZWN0aW9uIC8+XG4gICAgICA8VG9wVmVuZG9ycyBvbk5hdmlnYXRlPXtwcm9wcy5vbk5hdmlnYXRlfSAvPlxuICAgICAgPEJyYW5kTG9nb3MgLz5cbiAgICAgIDxSZXZpZXdzU2VjdGlvbiAvPlxuICAgICAgPE5ld0Fycml2YWxzIHsuLi5wcm9wc30gLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IHR5cGUgeyBWaWV3IH0gZnJvbSAnLi4vYXBwL25hdmlnYXRpb24nXG5pbXBvcnQgdHlwZSB7IENhcnRJdGVtSW5wdXQgfSBmcm9tICcuLi9zdGF0ZS9tYXJrZXRwbGFjZS1zdG9yZSdcbmltcG9ydCBIb21lU2VjdGlvbnMgZnJvbSAnLi9ob21lL0hvbWVTZWN0aW9ucydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWRcbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZShwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxIb21lU2VjdGlvbnMgey4uLnByb3BzfSAvPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUdBLElBQU0sYUFBYTtDQUNqQjtFQUNFLElBQUk7RUFDSixPQUFPO0VBQ1AsVUFBVTtFQUNWLEtBQUs7RUFDTCxLQUFLO0VBQ0wsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztHQUFFLE9BQU87R0FBTyxPQUFPO0VBQVc7RUFDekMsT0FBTztHQUFFLE9BQU87R0FBTyxPQUFPO0VBQVU7RUFDeEMsT0FBTztHQUFFLE9BQU87R0FBUSxPQUFPO0VBQWE7Q0FDOUM7Q0FDQTtFQUNFLElBQUk7RUFDSixPQUFPO0VBQ1AsVUFBVTtFQUNWLEtBQUs7RUFDTCxLQUFLO0VBQ0wsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztHQUFFLE9BQU87R0FBTyxPQUFPO0VBQVU7RUFDeEMsT0FBTztHQUFFLE9BQU87R0FBTyxP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