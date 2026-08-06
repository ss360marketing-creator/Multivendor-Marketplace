import { c as getVendorById, g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog, u as listVendorProducts } from "./index-BM41bWnP.js";
import { t as ProductCard } from "./ProductCard-Cuskg2O9.js";
//#region src/pages/vendor/VendorPageContent.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		key: "products",
		label: "All Products"
	},
	{
		key: "featured",
		label: "Featured"
	},
	{
		key: "deals",
		label: "Deals"
	},
	{
		key: "reviews",
		label: "Reviews"
	},
	{
		key: "about",
		label: "About"
	}
];
var staticReviews = [
	{
		author: "Sarah M.",
		rating: 5,
		text: "Absolutely love this store! Fast shipping and products exactly as described.",
		date: "2 days ago",
		verified: true
	},
	{
		author: "James K.",
		rating: 5,
		text: "Best seller on the platform. Packaging was immaculate and delivery was super quick.",
		date: "1 week ago",
		verified: true
	},
	{
		author: "Priya L.",
		rating: 4,
		text: "Great quality products overall. Customer service was very responsive.",
		date: "2 weeks ago",
		verified: true
	},
	{
		author: "Ahmed R.",
		rating: 5,
		text: "Third time ordering from here. Never disappointed. Highly recommended!",
		date: "3 weeks ago",
		verified: false
	}
];
function Stars({ rating, size = "sm" }) {
	const cls = size === "lg" ? "w-5 h-5" : size === "md" ? "w-4 h-4" : "w-3.5 h-3.5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-0.5",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: `${cls} ${i <= Math.round(rating) ? "text-yellow-400" : "text-[#E8E7E2]"}`,
			viewBox: "0 0 20 20",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
		}, i))
	});
}
function SkeletonCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl overflow-hidden border border-[#E8E7E2] animate-pulse",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square bg-[#F3F2EF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-[#F3F2EF] rounded w-2/3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-[#F3F2EF] rounded" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 bg-[#F3F2EF] rounded w-1/3 mt-2" })
			]
		})]
	});
}
function VendorPageContent({ vendorId, onNavigate, wishlist, onToggleWishlist, onAddToCart }) {
	const { vendors: fallbackVendors, products: fallbackProducts } = useCatalog();
	const [liveVendor, setLiveVendor] = (0, import_react.useState)(null);
	const [liveProducts, setLiveProducts] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [activeTab, setActiveTab] = (0, import_react.useState)("products");
	const [followed, setFollowed] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		setLoading(true);
		(async () => {
			const [vendorResponse, productsResponse] = await Promise.all([getVendorById(vendorId), listVendorProducts(vendorId)]);
			if (cancelled) return;
			if (vendorResponse.success) {
				const fallback = fallbackVendors[0];
				setLiveVendor({
					id: vendorResponse.data.id,
					name: vendorResponse.data.name,
					logo: vendorResponse.data.logo || fallback.logo,
					cover: vendorResponse.data.cover || fallback.cover,
					rating: vendorResponse.data.rating,
					productCount: vendorResponse.data.productCount,
					positiveFeedback: vendorResponse.data.positiveFeedback,
					followers: vendorResponse.data.followers,
					verified: vendorResponse.data.verified,
					responseTime: vendorResponse.data.responseTime || fallback.responseTime,
					tagline: vendorResponse.data.tagline || fallback.tagline
				});
			}
			if (productsResponse.success && productsResponse.data.length > 0) setLiveProducts(productsResponse.data);
			else setLiveProducts(fallbackProducts.slice(0, 16));
			setLoading(false);
		})();
		return () => {
			cancelled = true;
		};
	}, [
		vendorId,
		fallbackVendors,
		fallbackProducts
	]);
	const vendor = liveVendor ?? fallbackVendors.find((v) => v.id === vendorId) ?? fallbackVendors[0];
	const allProducts = liveProducts ?? fallbackProducts.slice(0, 16);
	const displayProducts = (0, import_react.useMemo)(() => {
		let list = [...allProducts];
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			list = list.filter((p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
		}
		if (activeTab === "featured") list = list.filter((p) => p.badge === "bestseller" || p.badge === "new");
		if (activeTab === "deals") list = list.filter((p) => p.discount > 0).sort((a, b) => b.discount - a.discount);
		return list;
	}, [
		allProducts,
		activeTab,
		searchQuery
	]);
	const coverImage = vendor.cover || "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&h=400&fit=crop&auto=format";
	const logoImage = vendor.logo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&auto=format";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#F9F8F5] min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-52 md:h-72 bg-[#0E0E0E] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: coverImage,
						alt: `${vendor.name} store cover`,
						className: "w-full h-full object-cover opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-4 left-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-2 text-xs text-white/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate({ type: "home" }),
									className: "hover:text-white transition-colors",
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
									className: "text-white",
									children: vendor.name
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border-b border-[#E8E7E2]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[1280px] mx-auto px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-10 pb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-20 h-20 md:w-24 md:h-24 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-[#F3F2EF]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logoImage,
										alt: vendor.name,
										className: "w-full h-full object-cover"
									})
								}), vendor.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#E8450A] flex items-center justify-center shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-3.5 h-3.5 text-white",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fillRule: "evenodd",
											d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
											clipRule: "evenodd"
										})
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "font-display text-2xl font-bold text-[#0E0E0E]",
											children: vendor.name
										}), vendor.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 py-0.5 rounded-full bg-[#FFF7F5] border border-[#E8450A]/30 text-[10px] font-bold uppercase tracking-widest text-[#E8450A]",
											children: "Verified"
										})]
									}),
									vendor.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[#6B6A66] mt-0.5 truncate",
										children: vendor.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 mt-2 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
														rating: vendor.rating,
														size: "sm"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-semibold text-[#0E0E0E]",
														children: vendor.rating.toFixed(1)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-[#6B6A66]",
														children: "rating"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#E8E7E2]",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm text-[#6B6A66]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#0E0E0E]",
													children: vendor.productCount.toLocaleString()
												}), " products"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#E8E7E2]",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm text-[#6B6A66]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-[#0E0E0E]",
													children: [vendor.positiveFeedback, "%"]
												}), " positive"]
											}),
											vendor.responseTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#E8E7E2]",
												children: "·"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm text-[#6B6A66]",
												children: ["Responds in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#0E0E0E]",
													children: vendor.responseTime
												})]
											})] })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pt-2 sm:pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setFollowed((v) => !v),
									className: `flex items-center gap-2 h-10 px-5 rounded-xl text-sm font-semibold border transition-all duration-200 ${followed ? "bg-[#0E0E0E] text-white border-[#0E0E0E]" : "border-[#E8E7E2] text-[#0E0E0E] hover:border-[#0E0E0E]"}`,
									children: followed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-4 h-4",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" })
									}), "Following"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										})
									}), "Follow"] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex items-center gap-2 h-10 px-5 rounded-xl text-sm font-semibold border border-[#E8E7E2] text-[#0E0E0E] hover:border-[#0E0E0E] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
										})
									}), "Chat"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 -mb-px overflow-x-auto scroll-container",
						children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab(tab.key),
							className: `flex-shrink-0 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.key ? "border-[#E8450A] text-[#E8450A]" : "border-transparent text-[#6B6A66] hover:text-[#0E0E0E]"}`,
							children: tab.label
						}, tab.key))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8",
						children: [
							{
								label: "Total Products",
								value: vendor.productCount.toLocaleString(),
								icon: "📦"
							},
							{
								label: "Positive Feedback",
								value: `${vendor.positiveFeedback}%`,
								icon: "⭐"
							},
							{
								label: "Followers",
								value: vendor.followers > 1e3 ? `${(vendor.followers / 1e3).toFixed(1)}K` : vendor.followers.toString(),
								icon: "👥"
							},
							{
								label: "Response Time",
								value: vendor.responseTime || "< 1 hr",
								icon: "⚡"
							}
						].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: stat.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-lg text-[#0E0E0E] leading-none",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#6B6A66] mt-0.5",
								children: stat.label
							})] })]
						}, stat.label))
					}),
					(activeTab === "products" || activeTab === "featured" || activeTab === "deals") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 max-w-sm flex h-10 items-center rounded-xl border border-[#E8E7E2] bg-white px-3 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-4 h-4 text-[#9CA3AF] flex-shrink-0",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: `Search in ${vendor.name}...`,
								className: "flex-1 text-sm text-[#0E0E0E] outline-none placeholder:text-[#9CA3AF] bg-transparent"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-[#6B6A66]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-[#0E0E0E]",
								children: displayProducts.length
							}), " products"]
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
						children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
					}) : displayProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[#6B6A66]",
							children: [
								"No products found",
								searchQuery ? ` for "${searchQuery}"` : "",
								"."
							]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
						children: displayProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product,
							wishlisted: wishlist.has(product.id),
							onToggleWishlist,
							onAddToCart,
							onNavigate: (id) => onNavigate({
								type: "product",
								id
							})
						}, product.id))
					})] }),
					activeTab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-6 flex items-center gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-5xl font-bold text-[#0E0E0E]",
										children: vendor.rating.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
										rating: vendor.rating,
										size: "md"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#6B6A66] mt-1",
										children: "Overall Rating"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 space-y-2",
								children: [
									5,
									4,
									3,
									2,
									1
								].map((star) => {
									const pct = star === 5 ? 72 : star === 4 ? 18 : star === 3 ? 7 : star === 2 ? 2 : 1;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-[#6B6A66] w-6 text-right",
												children: [star, "★"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex-1 h-2 rounded-full bg-[#F3F2EF] overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full rounded-full bg-yellow-400",
													style: { width: `${pct}%` }
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-[#6B6A66] w-8",
												children: [pct, "%"]
											})
										]
									}, star);
								})
							})]
						}), staticReviews.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 rounded-full bg-gradient-to-br from-[#E8450A] to-[#6D28D9] flex items-center justify-center text-white font-bold text-sm",
										children: review.author[0]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-[#0E0E0E]",
										children: review.author
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
											rating: review.rating,
											size: "sm"
										}), review.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-semibold text-[#059669] bg-[#F0FDF4] px-1.5 py-0.5 rounded",
											children: "Verified"
										})]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#9CA3AF]",
									children: review.date
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-[#0E0E0E] leading-relaxed",
								children: [
									"“",
									review.text,
									"”"
								]
							})]
						}, i))]
					}),
					activeTab === "about" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white rounded-2xl border border-[#E8E7E2] p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl font-bold text-[#0E0E0E] mb-4",
									children: ["About ", vendor.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-[#6B6A66] leading-relaxed",
									children: [
										vendor.tagline || `${vendor.name} is a verified seller on Nexus Marketplace, offering a curated selection of premium products.`,
										" ",
										"We are committed to delivering exceptional quality and customer satisfaction. Every product is carefully inspected before dispatch to ensure you receive exactly what you ordered."
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white rounded-2xl border border-[#E8E7E2] p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-[#0E0E0E] mb-4",
									children: "Store Policies"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: [
										{
											icon: "🚚",
											title: "Shipping",
											desc: "Most orders shipped within 24 hours. Free shipping on orders over $75."
										},
										{
											icon: "↩️",
											title: "Returns",
											desc: "30-day hassle-free return policy. No questions asked."
										},
										{
											icon: "🔒",
											title: "Secure Payments",
											desc: "All payments are SSL encrypted and processed securely."
										},
										{
											icon: "✓",
											title: "Authenticity",
											desc: "100% genuine products. Verified and quality-checked before dispatch."
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl mt-0.5",
											children: item.icon
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#0E0E0E]",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#6B6A66] mt-0.5",
											children: item.desc
										})] })]
									}, item.title))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white rounded-2xl border border-[#E8E7E2] p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-[#0E0E0E] mb-3",
									children: "Contact"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-[#0E0E0E] text-white text-sm font-semibold hover:bg-[#E8450A] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
										})
									}), "Send Message"]
								})]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/pages/VendorPage.tsx
function VendorPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorPageContent, { ...props });
}
//#endregion
export { VendorPage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVuZG9yUGFnZS1CZWxxcVdrMS5qcyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvdmVuZG9yL1ZlbmRvclBhZ2VDb250ZW50LnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9WZW5kb3JQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFZpZXcgfSBmcm9tICcuLi8uLi9hcHAvbmF2aWdhdGlvbidcbmltcG9ydCB0eXBlIHsgQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uLy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuaW1wb3J0IHR5cGUgeyBQcm9kdWN0LCBWZW5kb3IgfSBmcm9tICcuLi8uLi9kYXRhL21hcmtldHBsYWNlJ1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQnXG5pbXBvcnQgeyBnZXRWZW5kb3JCeUlkLCBsaXN0VmVuZG9yUHJvZHVjdHMgfSBmcm9tICdAL2FwaS9tYXJrZXRwbGFjZSdcbmltcG9ydCB7IHVzZUNhdGFsb2cgfSBmcm9tICdAL3N0YXRlL2NhdGFsb2ctc3RvcmUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZlbmRvcklkOiBzdHJpbmdcbiAgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWRcbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxufVxuXG50eXBlIFRhYiA9ICdwcm9kdWN0cycgfCAnZmVhdHVyZWQnIHwgJ2RlYWxzJyB8ICdyZXZpZXdzJyB8ICdhYm91dCdcblxuY29uc3QgdGFiczogeyBrZXk6IFRhYjsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gIHsga2V5OiAncHJvZHVjdHMnLCBsYWJlbDogJ0FsbCBQcm9kdWN0cycgfSxcbiAgeyBrZXk6ICdmZWF0dXJlZCcsIGxhYmVsOiAnRmVhdHVyZWQnIH0sXG4gIHsga2V5OiAnZGVhbHMnLCBsYWJlbDogJ0RlYWxzJyB9LFxuICB7IGtleTogJ3Jldmlld3MnLCBsYWJlbDogJ1Jldmlld3MnIH0sXG4gIHsga2V5OiAnYWJvdXQnLCBsYWJlbDogJ0Fib3V0JyB9LFxuXVxuXG5jb25zdCBzdGF0aWNSZXZpZXdzID0gW1xuICB7IGF1dGhvcjogJ1NhcmFoIE0uJywgcmF0aW5nOiA1LCB0ZXh0OiAnQWJzb2x1dGVseSBsb3ZlIHRoaXMgc3RvcmUhIEZhc3Qgc2hpcHBpbmcgYW5kIHByb2R1Y3RzIGV4YWN0bHkgYXMgZGVzY3JpYmVkLicsIGRhdGU6ICcyIGRheXMgYWdvJywgdmVyaWZpZWQ6IHRydWUgfSxcbiAgeyBhdXRob3I6ICdKYW1lcyBLLicsIHJhdGluZzogNSwgdGV4dDogJ0Jlc3Qgc2VsbGVyIG9uIHRoZSBwbGF0Zm9ybS4gUGFja2FnaW5nIHdhcyBpbW1hY3VsYXRlIGFuZCBkZWxpdmVyeSB3YXMgc3VwZXIgcXVpY2suJywgZGF0ZTogJzEgd2VlayBhZ28nLCB2ZXJpZmllZDogdHJ1ZSB9LFxuICB7IGF1dGhvcjogJ1ByaXlhIEwuJywgcmF0aW5nOiA0LCB0ZXh0OiAnR3JlYXQgcXVhbGl0eSBwcm9kdWN0cyBvdmVyYWxsLiBDdXN0b21lciBzZXJ2aWNlIHdhcyB2ZXJ5IHJlc3BvbnNpdmUuJywgZGF0ZTogJzIgd2Vla3MgYWdvJywgdmVyaWZpZWQ6IHRydWUgfSxcbiAgeyBhdXRob3I6ICdBaG1lZCBSLicsIHJhdGluZzogNSwgdGV4dDogJ1RoaXJkIHRpbWUgb3JkZXJpbmcgZnJvbSBoZXJlLiBOZXZlciBkaXNhcHBvaW50ZWQuIEhpZ2hseSByZWNvbW1lbmRlZCEnLCBkYXRlOiAnMyB3ZWVrcyBhZ28nLCB2ZXJpZmllZDogZmFsc2UgfSxcbl1cblxuZnVuY3Rpb24gU3RhcnMoeyByYXRpbmcsIHNpemUgPSAnc20nIH06IHsgcmF0aW5nOiBudW1iZXI7IHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfSkge1xuICBjb25zdCBjbHMgPSBzaXplID09PSAnbGcnID8gJ3ctNSBoLTUnIDogc2l6ZSA9PT0gJ21kJyA/ICd3LTQgaC00JyA6ICd3LTMuNSBoLTMuNSdcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0wLjVcIj5cbiAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKGkgPT4gKFxuICAgICAgICA8c3ZnIGtleT17aX0gY2xhc3NOYW1lPXtgJHtjbHN9ICR7aSA8PSBNYXRoLnJvdW5kKHJhdGluZykgPyAndGV4dC15ZWxsb3ctNDAwJyA6ICd0ZXh0LVsjRThFN0UyXSd9YH0gdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTkuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuMDcgMy4yOTJhMSAxIDAgMDAuOTUuNjloMy40NjJjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTIuOCAyLjAzNGExIDEgMCAwMC0uMzY0IDEuMTE4bDEuMDcgMy4yOTJjLjMuOTIxLS43NTUgMS42ODgtMS41NCAxLjExOGwtMi44LTIuMDM0YTEgMSAwIDAwLTEuMTc1IDBsLTIuOCAyLjAzNGMtLjc4NC41Ny0xLjgzOC0uMTk3LTEuNTM5LTEuMTE4bDEuMDctMy4yOTJhMSAxIDAgMDAtLjM2NC0xLjExOEwyLjk4IDguNzJjLS43ODMtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDMuNDYxYTEgMSAwIDAwLjk1MS0uNjlsMS4wNy0zLjI5MnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFNrZWxldG9uQ2FyZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBhbmltYXRlLXB1bHNlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgYmctWyNGM0YyRUZdXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNwYWNlLXktMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMyBiZy1bI0YzRjJFRl0gcm91bmRlZCB3LTIvM1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLVsjRjNGMkVGXSByb3VuZGVkXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTUgYmctWyNGM0YyRUZdIHJvdW5kZWQgdy0xLzMgbXQtMlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZW5kb3JQYWdlQ29udGVudCh7IHZlbmRvcklkLCBvbk5hdmlnYXRlLCB3aXNobGlzdCwgb25Ub2dnbGVXaXNobGlzdCwgb25BZGRUb0NhcnQgfTogUHJvcHMpIHtcbiAgY29uc3QgeyB2ZW5kb3JzOiBmYWxsYmFja1ZlbmRvcnMsIHByb2R1Y3RzOiBmYWxsYmFja1Byb2R1Y3RzIH0gPSB1c2VDYXRhbG9nKClcbiAgY29uc3QgW2xpdmVWZW5kb3IsIHNldExpdmVWZW5kb3JdID0gdXNlU3RhdGU8VmVuZG9yIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2xpdmVQcm9kdWN0cywgc2V0TGl2ZVByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxUYWI+KCdwcm9kdWN0cycpXG4gIGNvbnN0IFtmb2xsb3dlZCwgc2V0Rm9sbG93ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBbdmVuZG9yUmVzcG9uc2UsIHByb2R1Y3RzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRWZW5kb3JCeUlkKHZlbmRvcklkKSxcbiAgICAgICAgbGlzdFZlbmRvclByb2R1Y3RzKHZlbmRvcklkKSxcbiAgICAgIF0pXG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuXG4gICAgICBpZiAodmVuZG9yUmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBjb25zdCBmYWxsYmFjayA9IGZhbGxiYWNrVmVuZG9yc1swXVxuICAgICAgICBzZXRMaXZlVmVuZG9yKHtcbiAgICAgICAgICBpZDogdmVuZG9yUmVzcG9uc2UuZGF0YS5pZCxcbiAgICAgICAgICBuYW1lOiB2ZW5kb3JSZXNwb25zZS5kYXRhLm5hbWUsXG4gICAgICAgICAgbG9nbzogdmVuZG9yUmVzcG9uc2UuZGF0YS5sb2dvIHx8IGZhbGxiYWNrLmxvZ28sXG4gICAgICAgICAgY292ZXI6IHZlbmRvclJlc3BvbnNlLmRhdGEuY292ZXIgfHwgZmFsbGJhY2suY292ZXIsXG4gICAgICAgICAgcmF0aW5nOiB2ZW5kb3JSZXNwb25zZS5kYXRhLnJhdGluZyxcbiAgICAgICAgICBwcm9kdWN0Q291bnQ6IHZlbmRvclJlc3BvbnNlLmRhdGEucHJvZHVjdENvdW50LFxuICAgICAgICAgIHBvc2l0aXZlRmVlZGJhY2s6IHZlbmRvclJlc3BvbnNlLmRhdGEucG9zaXRpdmVGZWVkYmFjayxcbiAgICAgICAgICBmb2xsb3dlcnM6IHZlbmRvclJlc3BvbnNlLmRhdGEuZm9sbG93ZXJzLFxuICAgICAgICAgIHZlcmlmaWVkOiB2ZW5kb3JSZXNwb25zZS5kYXRhLnZlcmlmaWVkLFxuICAgICAgICAgIHJlc3BvbnNlVGltZTogdmVuZG9yUmVzcG9uc2UuZGF0YS5yZXNwb25zZVRpbWUgfHwgZmFsbGJhY2sucmVzcG9uc2VUaW1lLFxuICAgICAgICAgIHRhZ2xpbmU6IHZlbmRvclJlc3BvbnNlLmRhdGEudGFnbGluZSB8fCBmYWxsYmFjay50YWdsaW5lLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvZHVjdHNSZXNwb25zZS5zdWNjZXNzICYmIHByb2R1Y3RzUmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldExpdmVQcm9kdWN0cyhwcm9kdWN0c1Jlc3BvbnNlLmRhdGEgYXMgdW5rbm93biBhcyBQcm9kdWN0W10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgZmFsbGJhY2sgcHJvZHVjdHMgZmlsdGVyZWQgbG9vc2VseVxuICAgICAgICBzZXRMaXZlUHJvZHVjdHMoZmFsbGJhY2tQcm9kdWN0cy5zbGljZSgwLCAxNikpXG4gICAgICB9XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSkoKVxuXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XG4gIH0sIFt2ZW5kb3JJZCwgZmFsbGJhY2tWZW5kb3JzLCBmYWxsYmFja1Byb2R1Y3RzXSlcblxuICBjb25zdCB2ZW5kb3I6IFZlbmRvciA9IGxpdmVWZW5kb3IgPz8gZmFsbGJhY2tWZW5kb3JzLmZpbmQodiA9PiB2LmlkID09PSB2ZW5kb3JJZCkgPz8gZmFsbGJhY2tWZW5kb3JzWzBdXG4gIGNvbnN0IGFsbFByb2R1Y3RzID0gbGl2ZVByb2R1Y3RzID8/IGZhbGxiYWNrUHJvZHVjdHMuc2xpY2UoMCwgMTYpXG5cbiAgY29uc3QgZGlzcGxheVByb2R1Y3RzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBbLi4uYWxsUHJvZHVjdHNdXG4gICAgaWYgKHNlYXJjaFF1ZXJ5LnRyaW0oKSkge1xuICAgICAgY29uc3QgcSA9IHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKClcbiAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcihwID0+IHAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fCBwLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkpXG4gICAgfVxuICAgIGlmIChhY3RpdmVUYWIgPT09ICdmZWF0dXJlZCcpIGxpc3QgPSBsaXN0LmZpbHRlcihwID0+IHAuYmFkZ2UgPT09ICdiZXN0c2VsbGVyJyB8fCBwLmJhZGdlID09PSAnbmV3JylcbiAgICBpZiAoYWN0aXZlVGFiID09PSAnZGVhbHMnKSBsaXN0ID0gbGlzdC5maWx0ZXIocCA9PiBwLmRpc2NvdW50ID4gMCkuc29ydCgoYSwgYikgPT4gYi5kaXNjb3VudCAtIGEuZGlzY291bnQpXG4gICAgcmV0dXJuIGxpc3RcbiAgfSwgW2FsbFByb2R1Y3RzLCBhY3RpdmVUYWIsIHNlYXJjaFF1ZXJ5XSlcblxuICBjb25zdCBjb3ZlckltYWdlID0gdmVuZG9yLmNvdmVyIHx8XG4gICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA3MDgyMzQ4ODI0LTBhOTZmMmE0YjlkYT93PTE0MDAmaD00MDAmZml0PWNyb3AmYXV0bz1mb3JtYXQnXG4gIGNvbnN0IGxvZ29JbWFnZSA9IHZlbmRvci5sb2dvIHx8XG4gICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM1NzEzODc1MDAyLWQxZDBjZjM3N2ZkZT93PTIwMCZoPTIwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCdcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOUY4RjVdIG1pbi1oLXNjcmVlblwiPlxuXG4gICAgICB7Lyog4pSA4pSA4pSAIFN0b3JlIENvdmVyIEJhbm5lciDilIDilIDilIAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNTIgbWQ6aC03MiBiZy1bIzBFMEUwRV0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2NvdmVySW1hZ2V9XG4gICAgICAgICAgYWx0PXtgJHt2ZW5kb3IubmFtZX0gc3RvcmUgY292ZXJgfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIG9wYWNpdHktNzBcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjMEUwRTBFXS84MCB2aWEtdHJhbnNwYXJlbnQgdG8tdHJhbnNwYXJlbnRcIiAvPlxuXG4gICAgICAgIHsvKiBCcmVhZGNydW1iIG92ZXJsYWlkIG9uIGNvdmVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGxlZnQtNlwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXdoaXRlLzcwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAnaG9tZScgfSl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5Ib21lPC9idXR0b24+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTNcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk05IDVsNyA3LTcgN1wiIC8+PC9zdmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3ZlbmRvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIOKUgOKUgOKUgCBTdG9yZSBIZWFkZXIgQ2FyZCDilIDilIDilIAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1bI0U4RTdFMl1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTI4MHB4XSBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtZW5kIGdhcC00IC1tdC0xMCBwYi01XCI+XG4gICAgICAgICAgICB7LyogTG9nbyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMCBtZDp3LTI0IG1kOmgtMjQgcm91bmRlZC0yeGwgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIHNoYWRvdy14bCBvdmVyZmxvdy1oaWRkZW4gYmctWyNGM0YyRUZdXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29JbWFnZX0gYWx0PXt2ZW5kb3IubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3ZlbmRvci52ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTEgLXJpZ2h0LTEgdy02IGgtNiByb3VuZGVkLWZ1bGwgYmctWyNFODQ1MEFdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXdoaXRlXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk04LjYwMyAzLjc5OUE0LjQ5IDQuNDkgMCAwMTEyIDIuMjVjMS4zNTcgMCAyLjU3My42IDMuMzk3IDEuNTQ5YTQuNDkgNC40OSAwIDAxMy40OTggMS4zMDcgNC40OTEgNC40OTEgMCAwMTEuMzA3IDMuNDk3QTQuNDkgNC40OSAwIDAxMjEuNzUgMTJhNC40OSA0LjQ5IDAgMDEtMS41NDkgMy4zOTcgNC40OTEgNC40OTEgMCAwMS0xLjMwNyAzLjQ5NyA0LjQ5MSA0LjQ5MSAwIDAxLTMuNDk3IDEuMzA3QTQuNDkgNC40OSAwIDAxMTIgMjEuNzVhNC40OSA0LjQ5IDAgMDEtMy4zOTctMS41NDkgNC40OTEgNC40OTEgMCAwMS0zLjQ5Ny0xLjMwNyA0LjQ5MSA0LjQ5MSAwIDAxLTEuMzA3LTMuNDk3QTQuNDkgNC40OSAwIDAxMi4yNSAxMmMwLTEuMzU3LjYtMi41NzMgMS41NDktMy4zOTdhNC40OSA0LjQ5IDAgMDExLjMwNy0zLjQ5NyA0LjQ5IDQuNDkgMCAwMTMuNDk3LTEuMzA3em03LjAwNyA2LjM4N2EuNzUuNzUgMCAxMC0xLjIyLS44NzJsLTMuMjM2IDQuNTNMOS41MyAxMi4yMmEuNzUuNzUgMCAwMC0xLjA2IDEuMDZsMi4yNSAyLjI1YS43NS43NSAwIDAwMS4xNC0uMDk0bDMuNzUtNS4yNXpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEluZm8gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wIHB0LTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPnt2ZW5kb3IubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIHt2ZW5kb3IudmVyaWZpZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGJnLVsjRkZGN0Y1XSBib3JkZXIgYm9yZGVyLVsjRTg0NTBBXS8zMCB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVsjRTg0NTBBXVwiPlxuICAgICAgICAgICAgICAgICAgICBWZXJpZmllZFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7dmVuZG9yLnRhZ2xpbmUgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl0gbXQtMC41IHRydW5jYXRlXCI+e3ZlbmRvci50YWdsaW5lfTwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtdC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPFN0YXJzIHJhdGluZz17dmVuZG9yLnJhdGluZ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPnt2ZW5kb3IucmF0aW5nLnRvRml4ZWQoMSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XVwiPnJhdGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRThFN0UyXVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl1cIj48c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+e3ZlbmRvci5wcm9kdWN0Q291bnQudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+IHByb2R1Y3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNFOEU3RTJdXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XVwiPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57dmVuZG9yLnBvc2l0aXZlRmVlZGJhY2t9JTwvc3Bhbj4gcG9zaXRpdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAge3ZlbmRvci5yZXNwb25zZVRpbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0U4RTdFMl1cIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XVwiPlJlc3BvbmRzIGluIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57dmVuZG9yLnJlc3BvbnNlVGltZX08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEFjdGlvbiBCdXR0b25zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwdC0yIHNtOnBiLTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvbGxvd2VkKHYgPT4gIXYpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGgtMTAgcHgtNSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwICR7XG4gICAgICAgICAgICAgICAgICBmb2xsb3dlZFxuICAgICAgICAgICAgICAgICAgICA/ICdiZy1bIzBFMEUwRV0gdGV4dC13aGl0ZSBib3JkZXItWyMwRTBFMEVdJ1xuICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItWyNFOEU3RTJdIHRleHQtWyMwRTBFMEVdIGhvdmVyOmJvcmRlci1bIzBFMEUwRV0nXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Zm9sbG93ZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTEuNjQ1IDIwLjkxbC0uMDA3LS4wMDMtLjAyMi0uMDEyYTE1LjI0NyAxNS4yNDcgMCAwMS0uMzgzLS4yMTggMjUuMTggMjUuMTggMCAwMS00LjI0NC0zLjE3QzQuNjg4IDE1LjM2IDIuMjUgMTIuMTc0IDIuMjUgOC4yNSAyLjI1IDUuMzIyIDQuNzE0IDMgNy42ODggM0E1LjUgNS41IDAgMDExMiA1LjA1MiA1LjUgNS41IDAgMDExNi4zMTMgM2MyLjk3MyAwIDUuNDM3IDIuMzIyIDUuNDM3IDUuMjUgMCAzLjkyNS0yLjQzOCA3LjExMS00LjczOSA5LjI1NmEyNS4xNzUgMjUuMTc1IDAgMDEtNC4yNDQgMy4xNyAxNS4yNDcgMTUuMjQ3IDAgMDEtLjM4My4yMTlsLS4wMjIuMDEyLS4wMDcuMDA0LS4wMDMuMDAxYS43NTIuNzUyIDAgMDEtLjcwNCAwbC0uMDAzLS4wMDF6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgRm9sbG93aW5nXG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDQuMzU0YTQgNCAwIDExMCA1LjI5Mk0xNSAyMUgzdi0xYTYgNiAwIDAxMTIgMHYxem0wIDBoNnYtMWE2IDYgMCAwMC05LTUuMTk3TTEzIDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIEZvbGxvd1xuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaC0xMCBweC01IHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHRleHQtWyMwRTBFMEVdIGhvdmVyOmJvcmRlci1bIzBFMEUwRV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk04IDEyaC4wMU0xMiAxMmguMDFNMTYgMTJoLjAxTTIxIDEyYzAgNC40MTgtNC4wMyA4LTkgOGE5Ljg2MyA5Ljg2MyAwIDAxLTQuMjU1LS45NDlMMyAyMGwxLjM5NS0zLjcyQzMuNTEyIDE1LjA0MiAzIDEzLjU3NCAzIDEyYzAtNC40MTggNC4wMy04IDktOHM5IDMuNTgyIDkgOHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIENoYXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiDilIDilIDilIAgU3RvcmUgVGFicyDilIDilIDilIAgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSAtbWItcHggb3ZlcmZsb3cteC1hdXRvIHNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHt0YWJzLm1hcCh0YWIgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXt0YWIua2V5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0YWIua2V5KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LXNocmluay0wIHB4LTUgcHktMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gdGFiLmtleVxuICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItWyNFODQ1MEFdIHRleHQtWyNFODQ1MEFdJ1xuICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1bIzZCNkE2Nl0gaG92ZXI6dGV4dC1bIzBFMEUwRV0nXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyog4pSA4pSA4pSAIENvbnRlbnQgQXJlYSDilIDilIDilIAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNiBweS04XCI+XG5cbiAgICAgICAgey8qIOKUgOKUgCBTdG9yZSBTdGF0cyBRdWljayBSb3cg4pSA4pSAICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTQgZ2FwLTQgbWItOFwiPlxuICAgICAgICAgIHtbXG4gICAgICAgICAgICB7IGxhYmVsOiAnVG90YWwgUHJvZHVjdHMnLCB2YWx1ZTogdmVuZG9yLnByb2R1Y3RDb3VudC50b0xvY2FsZVN0cmluZygpLCBpY29uOiAn8J+TpicgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdQb3NpdGl2ZSBGZWVkYmFjaycsIHZhbHVlOiBgJHt2ZW5kb3IucG9zaXRpdmVGZWVkYmFja30lYCwgaWNvbjogJ+KtkCcgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdGb2xsb3dlcnMnLCB2YWx1ZTogdmVuZG9yLmZvbGxvd2VycyA+IDEwMDAgPyBgJHsodmVuZG9yLmZvbGxvd2VycyAvIDEwMDApLnRvRml4ZWQoMSl9S2AgOiB2ZW5kb3IuZm9sbG93ZXJzLnRvU3RyaW5nKCksIGljb246ICfwn5GlJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ1Jlc3BvbnNlIFRpbWUnLCB2YWx1ZTogdmVuZG9yLnJlc3BvbnNlVGltZSB8fCAnPCAxIGhyJywgaWNvbjogJ+KaoScgfSxcbiAgICAgICAgICBdLm1hcChzdGF0ID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtzdGF0LmxhYmVsfSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57c3RhdC5pY29ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LVsjMEUwRTBFXSBsZWFkaW5nLW5vbmVcIj57c3RhdC52YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XSBtdC0wLjVcIj57c3RhdC5sYWJlbH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDilIDilIAgUHJvZHVjdHMgLyBGZWF0dXJlZCAvIERlYWxzIFRhYiDilIDilIAgKi99XG4gICAgICAgIHsoYWN0aXZlVGFiID09PSAncHJvZHVjdHMnIHx8IGFjdGl2ZVRhYiA9PT0gJ2ZlYXR1cmVkJyB8fCBhY3RpdmVUYWIgPT09ICdkZWFscycpICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgey8qIFNlYXJjaCB3aXRoaW4gc3RvcmUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1iLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWF4LXctc20gZmxleCBoLTEwIGl0ZW1zLWNlbnRlciByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGJnLXdoaXRlIHB4LTMgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1bIzlDQTNBRl0gZmxleC1zaHJpbmstMFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCBpbiAke3ZlbmRvci5uYW1lfS4uLmB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1zbSB0ZXh0LVsjMEUwRTBFXSBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXI6dGV4dC1bIzlDQTNBRl0gYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPntkaXNwbGF5UHJvZHVjdHMubGVuZ3RofTwvc3Bhbj4gcHJvZHVjdHNcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogOCB9KS5tYXAoKF8sIGkpID0+IDxTa2VsZXRvbkNhcmQga2V5PXtpfSAvPil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IGRpc3BsYXlQcm9kdWN0cy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QTY2XVwiPk5vIHByb2R1Y3RzIGZvdW5ke3NlYXJjaFF1ZXJ5ID8gYCBmb3IgXCIke3NlYXJjaFF1ZXJ5fVwiYCA6ICcnfS48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICAgICAgICB3aXNobGlzdGVkPXt3aXNobGlzdC5oYXMocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlV2lzaGxpc3Q9e29uVG9nZ2xlV2lzaGxpc3R9XG4gICAgICAgICAgICAgICAgICAgIG9uQWRkVG9DYXJ0PXtvbkFkZFRvQ2FydH1cbiAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aWQgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdwcm9kdWN0JywgaWQgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIOKUgOKUgCBSZXZpZXdzIFRhYiDilIDilIAgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdyZXZpZXdzJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgc3BhY2UteS00XCI+XG4gICAgICAgICAgICB7LyogT3ZlcmFsbCBSYXRpbmcgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPnt2ZW5kb3IucmF0aW5nLnRvRml4ZWQoMSl9PC9wPlxuICAgICAgICAgICAgICAgIDxTdGFycyByYXRpbmc9e3ZlbmRvci5yYXRpbmd9IHNpemU9XCJtZFwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XSBtdC0xXCI+T3ZlcmFsbCBSYXRpbmc8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7WzUsIDQsIDMsIDIsIDFdLm1hcChzdGFyID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBjdCA9IHN0YXIgPT09IDUgPyA3MiA6IHN0YXIgPT09IDQgPyAxOCA6IHN0YXIgPT09IDMgPyA3IDogc3RhciA9PT0gMiA/IDIgOiAxXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3Rhcn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdIHctNiB0ZXh0LXJpZ2h0XCI+e3N0YXJ94piFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGgtMiByb3VuZGVkLWZ1bGwgYmctWyNGM0YyRUZdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcm91bmRlZC1mdWxsIGJnLXllbGxvdy00MDBcIiBzdHlsZT17eyB3aWR0aDogYCR7cGN0fSVgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XSB3LThcIj57cGN0fSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c3RhdGljUmV2aWV3cy5tYXAoKHJldmlldywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05IGgtOSByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bI0U4NDUwQV0gdG8tWyM2RDI4RDldIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmV2aWV3LmF1dGhvclswXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+e3Jldmlldy5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFycyByYXRpbmc9e3Jldmlldy5yYXRpbmd9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmV2aWV3LnZlcmlmaWVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMDU5NjY5XSBiZy1bI0YwRkRGNF0gcHgtMS41IHB5LTAuNSByb3VuZGVkXCI+VmVyaWZpZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUNBM0FGXVwiPntyZXZpZXcuZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjMEUwRTBFXSBsZWFkaW5nLXJlbGF4ZWRcIj4mbGRxdW87e3Jldmlldy50ZXh0fSZyZHF1bzs8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIOKUgOKUgCBBYm91dCBUYWIg4pSA4pSAICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnYWJvdXQnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC14bCBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV0gbWItNFwiPkFib3V0IHt2ZW5kb3IubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIHt2ZW5kb3IudGFnbGluZSB8fCBgJHt2ZW5kb3IubmFtZX0gaXMgYSB2ZXJpZmllZCBzZWxsZXIgb24gTmV4dXMgTWFya2V0cGxhY2UsIG9mZmVyaW5nIGEgY3VyYXRlZCBzZWxlY3Rpb24gb2YgcHJlbWl1bSBwcm9kdWN0cy5gfVxuICAgICAgICAgICAgICAgIHsnICd9V2UgYXJlIGNvbW1pdHRlZCB0byBkZWxpdmVyaW5nIGV4Y2VwdGlvbmFsIHF1YWxpdHkgYW5kIGN1c3RvbWVyIHNhdGlzZmFjdGlvbi4gRXZlcnkgcHJvZHVjdCBpcyBjYXJlZnVsbHkgaW5zcGVjdGVkIGJlZm9yZSBkaXNwYXRjaCB0byBlbnN1cmUgeW91IHJlY2VpdmUgZXhhY3RseSB3aGF0IHlvdSBvcmRlcmVkLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTZcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gbWItNFwiPlN0b3JlIFBvbGljaWVzPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgeyBpY29uOiAn8J+amicsIHRpdGxlOiAnU2hpcHBpbmcnLCBkZXNjOiAnTW9zdCBvcmRlcnMgc2hpcHBlZCB3aXRoaW4gMjQgaG91cnMuIEZyZWUgc2hpcHBpbmcgb24gb3JkZXJzIG92ZXIgJDc1LicgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ+KGqe+4jycsIHRpdGxlOiAnUmV0dXJucycsIGRlc2M6ICczMC1kYXkgaGFzc2xlLWZyZWUgcmV0dXJuIHBvbGljeS4gTm8gcXVlc3Rpb25zIGFza2VkLicgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ/CflJInLCB0aXRsZTogJ1NlY3VyZSBQYXltZW50cycsIGRlc2M6ICdBbGwgcGF5bWVudHMgYXJlIFNTTCBlbmNyeXB0ZWQgYW5kIHByb2Nlc3NlZCBzZWN1cmVseS4nIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICfinJMnLCAgdGl0bGU6ICdBdXRoZW50aWNpdHknLCBkZXNjOiAnMTAwJSBnZW51aW5lIHByb2R1Y3RzLiBWZXJpZmllZCBhbmQgcXVhbGl0eS1jaGVja2VkIGJlZm9yZSBkaXNwYXRjaC4nIH0sXG4gICAgICAgICAgICAgICAgXS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTAuNVwiPntpdGVtLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdIG10LTAuNVwiPntpdGVtLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi0zXCI+Q29udGFjdDwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIGgtMTEgcm91bmRlZC14bCBiZy1bIzBFMEUwRV0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxuICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOCAxMmguMDFNMTIgMTJoLjAxTTE2IDEyaC4wMU0yMSAxMmMwIDQuNDE4LTQuMDMgOC05IDhhOS44NjMgOS44NjMgMCAwMS00LjI1NS0uOTQ5TDMgMjBsMS4zOTUtMy43MkMzLjUxMiAxNS4wNDIgMyAxMy41NzQgMyAxMmMwLTQuNDE4IDQuMDMtOCA5LThzOSAzLjU4MiA5IDh6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgdHlwZSB7IFZpZXcgfSBmcm9tICcuLi9hcHAvbmF2aWdhdGlvbidcbmltcG9ydCB0eXBlIHsgQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuaW1wb3J0IFZlbmRvclBhZ2VDb250ZW50IGZyb20gJy4vdmVuZG9yL1ZlbmRvclBhZ2VDb250ZW50J1xuXG50eXBlIFByb3BzID0ge1xuICB2ZW5kb3JJZDogc3RyaW5nXG4gIG9uTmF2aWdhdGU6ICh2OiBWaWV3KSA9PiB2b2lkXG4gIHdpc2hsaXN0OiBTZXQ8c3RyaW5nPlxuICBvblRvZ2dsZVdpc2hsaXN0OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICBvbkFkZFRvQ2FydDogKGl0ZW06IENhcnRJdGVtSW5wdXQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVuZG9yUGFnZShwcm9w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