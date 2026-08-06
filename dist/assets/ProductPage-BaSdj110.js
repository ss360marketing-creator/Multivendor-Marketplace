import { g as __toESM, i as require_jsx_runtime, l as listProducts, p as require_react, r as useCatalog, s as getProductById } from "./index-BM41bWnP.js";
import { t as ProductCard } from "./ProductCard-Cuskg2O9.js";
//#region src/pages/product/ProductGalleryPanel.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProductGalleryPanel({ product, activeImage, allImages, onSelectImage, wishlisted, onToggleWishlist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-2xl overflow-hidden bg-white border border-[#E8E7E2] aspect-square",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: allImages[activeImage],
					alt: product.title,
					className: "w-full h-full object-cover"
				}),
				product.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-4 left-4 bg-[#E11D48] text-white text-sm font-bold px-3 py-1.5 rounded-xl shadow",
					children: [
						"-",
						product.discount,
						"% OFF"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onToggleWishlist,
					className: `absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${wishlisted ? "bg-[#E11D48] text-white" : "bg-white text-[#6B6A66] hover:text-[#E11D48]"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-5 h-5",
						viewBox: "0 0 24 24",
						fill: wishlisted ? "currentColor" : "none",
						stroke: "currentColor",
						strokeWidth: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						})
					})
				})
			]
		}), allImages.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-3 overflow-x-auto scroll-container",
			children: allImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onSelectImage(i),
				className: `flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${i === activeImage ? "border-[#E8450A]" : "border-[#E8E7E2] hover:border-[#0E0E0E]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img,
					alt: "",
					className: "w-full h-full object-cover"
				})
			}, i))
		})]
	});
}
//#endregion
//#region src/pages/product/ProductPurchasePanel.tsx
function ProductPurchasePanel({ product, vendor, selectedColor, selectedSize, qty, added, onSelectColor, onSelectSize, onIncreaseQty, onDecreaseQty, onAddToCart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-[#6B6A66]",
								children: product.vendor
							}),
							product.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-4 h-4 text-[#E8450A]",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fillRule: "evenodd",
									d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
									clipRule: "evenodd"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-[#9CA3AF]",
								children: "Verified Seller"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl md:text-3xl font-semibold text-[#0E0E0E] leading-tight",
						children: product.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-0.5",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#F59E0B]",
								children: "★"
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-[#6B6A66]",
							children: [
								product.rating.toFixed(1),
								" · ",
								product.reviewCount,
								" reviews"
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-2xl p-5 border border-[#E8E7E2] space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono font-black text-4xl text-[#0E0E0E]",
							children: ["$", product.price]
						}), product.originalPrice > product.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-lg text-[#9CA3AF] line-through mb-1",
							children: ["$", product.originalPrice]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "bg-[#E11D48] text-white text-sm font-bold px-2.5 py-1 rounded-lg mb-1",
							children: [product.discount, "% OFF"]
						})] })]
					}),
					product.installment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[#6B6A66]",
						children: [
							"or ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-[#0E0E0E]",
								children: product.installment
							}),
							" with 0% interest"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#9CA3AF]",
						children: "Inclusive of all taxes"
					})
				]
			}),
			product.colors && product.colors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold text-[#0E0E0E]",
					children: ["Color: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-[#6B6A66]",
						children: selectedColor
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onSelectColor(c),
						className: `px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all ${selectedColor === c ? "border-[#E8450A] text-[#E8450A] bg-[#FFF7F5]" : "border-[#E8E7E2] text-[#6B6A66] hover:border-[#0E0E0E]"}`,
						children: c
					}, c))
				})]
			}),
			product.sizes && product.sizes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold text-[#0E0E0E]",
					children: ["Size: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-[#6B6A66]",
						children: selectedSize
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onSelectSize(s),
						className: `px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${selectedSize === s ? "border-[#E8450A] text-[#E8450A] bg-[#FFF7F5]" : "border-[#E8E7E2] text-[#6B6A66] hover:border-[#0E0E0E]"}`,
						children: s
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#0E0E0E]",
						children: "Quantity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 bg-white border border-[#E8E7E2] rounded-xl p-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onDecreaseQty,
								className: "w-9 h-9 rounded-lg bg-[#F3F2EF] flex items-center justify-center hover:bg-[#E8E7E2] transition-colors",
								children: "-"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 text-center font-mono font-bold text-base",
								children: qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onIncreaseQty,
								className: "w-9 h-9 rounded-lg bg-[#F3F2EF] flex items-center justify-center hover:bg-[#E8E7E2] transition-colors",
								children: "+"
							})
						]
					}),
					product.stock < 20 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-[#D97706] font-medium bg-[#FFF7ED] px-3 py-1.5 rounded-lg border border-[#FED7AA]",
						children: [
							"Only ",
							product.stock,
							" left"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onAddToCart,
					className: `py-4 rounded-xl font-semibold text-sm transition-all ${added ? "bg-[#059669] text-white" : "bg-[#0E0E0E] text-white hover:bg-[#E8450A]"}`,
					children: added ? "✓ Added to Cart!" : "Add to Cart"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "py-4 rounded-xl font-semibold text-sm bg-[#E8450A] text-white hover:bg-[#C93A07] transition-colors",
					children: "Buy Now"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-[#F9F8F5] rounded-2xl p-4 space-y-3 border border-[#E8E7E2]",
				children: [
					{
						icon: "🚚",
						label: product.freeShipping ? "Free Delivery" : "Standard Delivery",
						sub: "Estimated delivery: 3–5 business days"
					},
					{
						icon: "↩️",
						label: "Easy Returns",
						sub: "30-day return policy, no questions asked"
					},
					{
						icon: "🔒",
						label: "Secure Checkout",
						sub: "SSL encrypted · Buyer Protection guaranteed"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg mt-0.5",
						children: item.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#0E0E0E]",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#6B6A66]",
						children: item.sub
					})] })]
				}, item.label))
			})
		]
	});
}
//#endregion
//#region src/pages/product/ProductTabsPanel.tsx
function ProductTabsPanel({ product, tab, onTabChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-12 bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex border-b border-[#E8E7E2]",
			children: [
				{
					key: "features",
					label: "Features"
				},
				{
					key: "shipping",
					label: "Shipping & Delivery"
				},
				{
					key: "returns",
					label: "Returns Policy"
				}
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onTabChange(t.key),
				className: `px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${tab === t.key ? "border-[#E8450A] text-[#E8450A]" : "border-transparent text-[#6B6A66] hover:text-[#0E0E0E]"}`,
				children: t.label
			}, t.key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				tab === "features" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#6B6A66] leading-relaxed",
						children: product.description
					}), product.features && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4",
						children: product.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 bg-[#F9F8F5] rounded-xl px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#059669]",
								children: "✓"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-[#0E0E0E]",
								children: f
							})]
						}, f))
					})]
				}),
				tab === "shipping" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm text-[#6B6A66] leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[#0E0E0E]",
							children: "Standard Delivery:"
						}), " 3–5 business days. Free on orders over $75."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[#0E0E0E]",
							children: "Express Delivery:"
						}), " 1–2 business days. $9.99 flat rate."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[#0E0E0E]",
							children: "Same Day:"
						}), " Available in select cities. Order before 12pm."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tracking number provided via email and SMS upon dispatch." })
					]
				}),
				tab === "returns" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm text-[#6B6A66] leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[#0E0E0E]",
							children: "30-Day Returns:"
						}), " Return any item within 30 days of delivery for a full refund."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Items must be in original condition with all packaging and accessories." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Free return shipping on all defective or incorrectly sent items." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Refunds processed within 5–7 business days to original payment method." })
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/product/ProductSellerCard.tsx
function ProductSellerCard({ vendor, onNavigate }) {
	const [followed, setFollowed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-16 bg-gradient-to-r from-[#0E0E0E] to-[#374151] relative",
			style: vendor.cover ? {
				backgroundImage: `url(${vendor.cover})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			} : {},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/70 to-transparent" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 pb-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-4 -mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-14 h-14 rounded-xl border-2 border-white shadow-md overflow-hidden bg-[#F3F2EF]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: vendor.logo,
							alt: vendor.name,
							className: "w-full h-full object-cover"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0 flex flex-col sm:flex-row gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#0E0E0E]",
									children: vendor.name
								}), vendor.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-[#E8450A] bg-[#FFF7F5] px-1.5 py-0.5 rounded-full border border-[#FECACA] uppercase tracking-wide",
									children: "✓ Verified"
								})]
							}),
							vendor.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#6B6A66] truncate",
								children: vendor.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs text-[#6B6A66] flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-[#0E0E0E]",
										children: vendor.rating
									}), " rating"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										className: "text-[#0E0E0E]",
										children: [vendor.positiveFeedback, "%"]
									}), " positive"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-[#0E0E0E]",
										children: vendor.productCount
									}), " products"] }),
									vendor.responseTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Responds ", vendor.responseTime] })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 flex-shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onNavigate({
									type: "vendor",
									id: vendor.id
								}),
								className: "px-4 py-2 bg-[#0E0E0E] text-white rounded-xl text-sm font-semibold hover:bg-[#E8450A] transition-colors",
								children: "Visit Store"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-4 py-2 border border-[#E8E7E2] text-[#0E0E0E] rounded-xl text-sm font-semibold hover:bg-[#F3F2EF] transition-colors",
								children: "Chat"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFollowed((v) => !v),
								className: `px-4 py-2 border rounded-xl text-sm font-semibold transition-colors ${followed ? "bg-[#0E0E0E] text-white border-[#0E0E0E]" : "border-[#E8E7E2] text-[#0E0E0E] hover:bg-[#F3F2EF]"}`,
								children: followed ? "Following" : "Follow"
							})
						]
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/pages/product/RelatedProductsSection.tsx
function RelatedProductsSection({ items, wishlist, onToggleWishlist, onAddToCart, onNavigate }) {
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold text-[#0E0E0E] mb-8",
			children: "You May Also Like"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product: p,
				wishlisted: wishlist.has(p.id),
				onToggleWishlist,
				onAddToCart,
				onNavigate: (id) => onNavigate({
					type: "product",
					id
				}),
				variant: "compact"
			}, p.id))
		})]
	});
}
//#endregion
//#region src/pages/product/ProductPageContent.tsx
function ProductPageContent({ productId, onNavigate, wishlist, onToggleWishlist, onAddToCart }) {
	const { products, vendors } = useCatalog();
	const [liveProduct, setLiveProduct] = (0, import_react.useState)(null);
	const [liveRelated, setLiveRelated] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [activeImage, setActiveImage] = (0, import_react.useState)(0);
	const [selectedColor, setSelectedColor] = (0, import_react.useState)("");
	const [selectedSize, setSelectedSize] = (0, import_react.useState)("");
	const [qty, setQty] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("features");
	const [added, setAdded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			setLoading(true);
			const productResponse = await getProductById(productId);
			if (cancelled) return;
			if (productResponse.success) {
				setLiveProduct(productResponse.data);
				setSelectedColor(productResponse.data.colors?.[0] ?? "");
				setSelectedSize(productResponse.data.sizes?.[0] ?? "");
				const relatedResponse = await listProducts({
					category: productResponse.data.categorySlug,
					limit: 5
				});
				if (!cancelled && relatedResponse.success) setLiveRelated(relatedResponse.data.filter((product) => product.id !== productResponse.data.id));
				else setLiveRelated(null);
			} else {
				setLiveProduct(null);
				setLiveRelated(null);
			}
			setLoading(false);
		})();
		return () => {
			cancelled = true;
		};
	}, [productId]);
	const product = liveProduct ?? products.find((p) => p.id === productId) ?? products[0];
	const vendor = vendors.find((v) => v.id === product.vendorId) ?? vendors[0];
	const related = (0, import_react.useMemo)(() => liveRelated ?? products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 5), [
		liveRelated,
		products,
		product.categorySlug,
		product.id
	]);
	const allImages = product.images?.length ? product.images : [product.image];
	const handleAddToCart = () => {
		onAddToCart({
			id: product.id,
			title: product.title,
			price: product.price,
			originalPrice: product.originalPrice,
			image: product.image,
			vendor: product.vendor,
			variant: [selectedColor, selectedSize].filter(Boolean).join(" / ") || void 0
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#F9F8F5] min-h-screen",
		children: [
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-[#E8E7E2] bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1280px] px-6 py-4 text-sm text-[#6B6A66]",
					children: "Loading live product details..."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[1280px] mx-auto px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-2 text-xs text-[#9CA3AF]",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onNavigate({
								type: "category",
								slug: product.categorySlug
							}),
							className: "hover:text-[#E8450A] transition-colors",
							children: product.category
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
							className: "text-[#0E0E0E] truncate max-w-[300px]",
							children: product.title
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGalleryPanel, {
							product,
							activeImage,
							allImages,
							onSelectImage: setActiveImage,
							wishlisted: wishlist.has(product.id),
							onToggleWishlist: () => onToggleWishlist(product.id)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPurchasePanel, {
							product,
							vendor,
							selectedColor,
							selectedSize,
							qty,
							added,
							onSelectColor: setSelectedColor,
							onSelectSize: setSelectedSize,
							onIncreaseQty: () => setQty((q) => q + 1),
							onDecreaseQty: () => setQty((q) => Math.max(1, q - 1)),
							onAddToCart: handleAddToCart
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductTabsPanel, {
						product,
						tab,
						onTabChange: setTab
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductSellerCard, {
						vendor,
						onNavigate
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedProductsSection, {
						items: related,
						wishlist,
						onToggleWishlist,
						onAddToCart,
						onNavigate
					})
				]
			})
		]
	});
}
//#endregion
//#region src/pages/ProductPage.tsx
function ProductPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPageContent, { ...props });
}
//#endregion
export { ProductPage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdFBhZ2UtQmFTZGoxMTAuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdEdhbGxlcnlQYW5lbC50c3giLCIuLi8uLi9zcmMvcGFnZXMvcHJvZHVjdC9Qcm9kdWN0UHVyY2hhc2VQYW5lbC50c3giLCIuLi8uLi9zcmMvcGFnZXMvcHJvZHVjdC9Qcm9kdWN0VGFic1BhbmVsLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9wcm9kdWN0L1Byb2R1Y3RTZWxsZXJDYXJkLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9wcm9kdWN0L1JlbGF0ZWRQcm9kdWN0c1NlY3Rpb24udHN4IiwiLi4vLi4vc3JjL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdFBhZ2VDb250ZW50LnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9Qcm9kdWN0UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vZGF0YS9tYXJrZXRwbGFjZSdcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvZHVjdDogUHJvZHVjdFxuICBhY3RpdmVJbWFnZTogbnVtYmVyXG4gIGFsbEltYWdlczogc3RyaW5nW11cbiAgb25TZWxlY3RJbWFnZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgd2lzaGxpc3RlZDogYm9vbGVhblxuICBvblRvZ2dsZVdpc2hsaXN0OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RHYWxsZXJ5UGFuZWwoeyBwcm9kdWN0LCBhY3RpdmVJbWFnZSwgYWxsSW1hZ2VzLCBvblNlbGVjdEltYWdlLCB3aXNobGlzdGVkLCBvblRvZ2dsZVdpc2hsaXN0IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGFzcGVjdC1zcXVhcmVcIj5cbiAgICAgICAgPGltZyBzcmM9e2FsbEltYWdlc1thY3RpdmVJbWFnZV19IGFsdD17cHJvZHVjdC50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICB7cHJvZHVjdC5kaXNjb3VudCA+IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTQgYmctWyNFMTFENDhdIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgcHgtMyBweS0xLjUgcm91bmRlZC14bCBzaGFkb3dcIj4te3Byb2R1Y3QuZGlzY291bnR9JSBPRkY8L2Rpdj59XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25Ub2dnbGVXaXNobGlzdH0gY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCAke3dpc2hsaXN0ZWQgPyAnYmctWyNFMTFENDhdIHRleHQtd2hpdGUnIDogJ2JnLXdoaXRlIHRleHQtWyM2QjZBNjZdIGhvdmVyOnRleHQtWyNFMTFENDhdJ31gfT5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD17d2lzaGxpc3RlZCA/ICdjdXJyZW50Q29sb3InIDogJ25vbmUnfSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7YWxsSW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgb3ZlcmZsb3cteC1hdXRvIHNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAgICB7YWxsSW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17aX0gb25DbGljaz17KCkgPT4gb25TZWxlY3RJbWFnZShpKX0gY2xhc3NOYW1lPXtgZmxleC1zaHJpbmstMCB3LTIwIGgtMjAgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTIgdHJhbnNpdGlvbi1hbGwgJHtpID09PSBhY3RpdmVJbWFnZSA/ICdib3JkZXItWyNFODQ1MEFdJyA6ICdib3JkZXItWyNFOEU3RTJdIGhvdmVyOmJvcmRlci1bIzBFMEUwRV0nfWB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgdHlwZSB7IFByb2R1Y3QsIFZlbmRvciB9IGZyb20gJy4uLy4uL2RhdGEvbWFya2V0cGxhY2UnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByb2R1Y3Q6IFByb2R1Y3RcbiAgdmVuZG9yOiBWZW5kb3JcbiAgc2VsZWN0ZWRDb2xvcjogc3RyaW5nXG4gIHNlbGVjdGVkU2l6ZTogc3RyaW5nXG4gIHF0eTogbnVtYmVyXG4gIGFkZGVkOiBib29sZWFuXG4gIG9uU2VsZWN0Q29sb3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uU2VsZWN0U2l6ZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb25JbmNyZWFzZVF0eTogKCkgPT4gdm9pZFxuICBvbkRlY3JlYXNlUXR5OiAoKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQdXJjaGFzZVBhbmVsKHtcbiAgcHJvZHVjdCxcbiAgdmVuZG9yLFxuICBzZWxlY3RlZENvbG9yLFxuICBzZWxlY3RlZFNpemUsXG4gIHF0eSxcbiAgYWRkZWQsXG4gIG9uU2VsZWN0Q29sb3IsXG4gIG9uU2VsZWN0U2l6ZSxcbiAgb25JbmNyZWFzZVF0eSxcbiAgb25EZWNyZWFzZVF0eSxcbiAgb25BZGRUb0NhcnQsXG59OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZBNjZdXCI+e3Byb2R1Y3QudmVuZG9yfTwvc3Bhbj5cbiAgICAgICAgICB7cHJvZHVjdC52ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1bI0U4NDUwQV1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguNjAzIDMuNzk5QTQuNDkgNC40OSAwIDAxMTIgMi4yNWMxLjM1NyAwIDIuNTczLjYgMy4zOTcgMS41NDlhNC40OSA0LjQ5IDAgMDEzLjQ5OCAxLjMwNyA0LjQ5MSA0LjQ5MSAwIDAxMS4zMDcgMy40OTdBNC40OSA0LjQ5IDAgMDEyMS43NSAxMmE0LjQ5IDQuNDkgMCAwMS0xLjU0OSAzLjM5NyA0LjQ5MSA0LjQ5MSAwIDAxLTEuMzA3IDMuNDk3IDQuNDkxIDQuNDkxIDAgMDEtMy40OTcgMS4zMDdBNC40OSA0LjQ5IDAgMDExMiAyMS43NWE0LjQ5IDQuNDkgMCAwMS0zLjM5Ny0xLjU0OSA0LjQ5MSA0LjQ5MSAwIDAxLTMuNDk3LTEuMzA3IDQuNDkxIDQuNDkxIDAgMDEtMS4zMDctMy40OTdBNC40OSA0LjQ5IDAgMDEyLjI1IDEyYzAtMS4zNTcuNi0yLjU3MyAxLjU0OS0zLjM5N2E0LjQ5IDQuNDkgMCAwMTEuMzA3LTMuNDk3IDQuNDkgNC40OSAwIDAxMy40OTctMS4zMDd6bTcuMDA3IDYuMzg3YS43NS43NSAwIDEwLTEuMjItLjg3MmwtMy4yMzYgNC41M0w5LjUzIDEyLjIyYS43NS43NSAwIDAwLTEuMDYgMS4wNmwyLjI1IDIuMjVhLjc1Ljc1IDAgMDAxLjE0LS4wOTRsMy43NS01LjI1elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlDQTNBRl1cIj5WZXJpZmllZCBTZWxsZXI8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gbGVhZGluZy10aWdodFwiPntwcm9kdWN0LnRpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0wLjVcIj5cbiAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKGkgPT4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXh0LVsjRjU5RTBCXVwiPuKYhTwvc3Bhbj4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl1cIj57cHJvZHVjdC5yYXRpbmcudG9GaXhlZCgxKX0gwrcge3Byb2R1Y3QucmV2aWV3Q291bnR9IHJldmlld3M8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgcC01IGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHNwYWNlLXktMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC0zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYmxhY2sgdGV4dC00eGwgdGV4dC1bIzBFMEUwRV1cIj4ke3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxuICAgICAgICAgIHtwcm9kdWN0Lm9yaWdpbmFsUHJpY2UgPiBwcm9kdWN0LnByaWNlICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LWxnIHRleHQtWyM5Q0EzQUZdIGxpbmUtdGhyb3VnaCBtYi0xXCI+JHtwcm9kdWN0Lm9yaWdpbmFsUHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1bI0UxMUQ0OF0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBweC0yLjUgcHktMSByb3VuZGVkLWxnIG1iLTFcIj57cHJvZHVjdC5kaXNjb3VudH0lIE9GRjwvc3Bhbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cHJvZHVjdC5pbnN0YWxsbWVudCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdXCI+b3IgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPntwcm9kdWN0Lmluc3RhbGxtZW50fTwvc3Bhbj4gd2l0aCAwJSBpbnRlcmVzdDwvcD59XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlDQTNBRl1cIj5JbmNsdXNpdmUgb2YgYWxsIHRheGVzPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtwcm9kdWN0LmNvbG9ycyAmJiBwcm9kdWN0LmNvbG9ycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj5Db2xvcjogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1bIzZCNkE2Nl1cIj57c2VsZWN0ZWRDb2xvcn08L3NwYW4+PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0LmNvbG9ycy5tYXAoYyA9PiA8YnV0dG9uIGtleT17Y30gb25DbGljaz17KCkgPT4gb25TZWxlY3RDb2xvcihjKX0gY2xhc3NOYW1lPXtgcHgtNCBweS0yIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LW1lZGl1bSBib3JkZXItMiB0cmFuc2l0aW9uLWFsbCAke3NlbGVjdGVkQ29sb3IgPT09IGMgPyAnYm9yZGVyLVsjRTg0NTBBXSB0ZXh0LVsjRTg0NTBBXSBiZy1bI0ZGRjdGNV0nIDogJ2JvcmRlci1bI0U4RTdFMl0gdGV4dC1bIzZCNkE2Nl0gaG92ZXI6Ym9yZGVyLVsjMEUwRTBFXSd9YH0+e2N9PC9idXR0b24+KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7cHJvZHVjdC5zaXplcyAmJiBwcm9kdWN0LnNpemVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPlNpemU6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtWyM2QjZBNjZdXCI+e3NlbGVjdGVkU2l6ZX08L3NwYW4+PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0LnNpemVzLm1hcChzID0+IDxidXR0b24ga2V5PXtzfSBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdFNpemUocyl9IGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBib3JkZXItMiB0cmFuc2l0aW9uLWFsbCAke3NlbGVjdGVkU2l6ZSA9PT0gcyA/ICdib3JkZXItWyNFODQ1MEFdIHRleHQtWyNFODQ1MEFdIGJnLVsjRkZGN0Y1XScgOiAnYm9yZGVyLVsjRThFN0UyXSB0ZXh0LVsjNkI2QTY2XSBob3Zlcjpib3JkZXItWyMwRTBFMEVdJ31gfT57c308L2J1dHRvbj4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+UXVhbnRpdHk8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcm91bmRlZC14bCBwLTFcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVjcmVhc2VRdHl9IGNsYXNzTmFtZT1cInctOSBoLTkgcm91bmRlZC1sZyBiZy1bI0YzRjJFRl0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctWyNFOEU3RTJdIHRyYW5zaXRpb24tY29sb3JzXCI+LTwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctOCB0ZXh0LWNlbnRlciBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtYmFzZVwiPntxdHl9PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25JbmNyZWFzZVF0eX0gY2xhc3NOYW1lPVwidy05IGgtOSByb3VuZGVkLWxnIGJnLVsjRjNGMkVGXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1bI0U4RTdFMl0gdHJhbnNpdGlvbi1jb2xvcnNcIj4rPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cHJvZHVjdC5zdG9jayA8IDIwICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI0Q5NzcwNl0gZm9udC1tZWRpdW0gYmctWyNGRkY3RURdIHB4LTMgcHktMS41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bI0ZFRDdBQV1cIj5Pbmx5IHtwcm9kdWN0LnN0b2NrfSBsZWZ0PC9zcGFuPn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkFkZFRvQ2FydH0gY2xhc3NOYW1lPXtgcHktNCByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbCAke2FkZGVkID8gJ2JnLVsjMDU5NjY5XSB0ZXh0LXdoaXRlJyA6ICdiZy1bIzBFMEUwRV0gdGV4dC13aGl0ZSBob3ZlcjpiZy1bI0U4NDUwQV0nfWB9PnthZGRlZCA/ICfinJMgQWRkZWQgdG8gQ2FydCEnIDogJ0FkZCB0byBDYXJ0J308L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweS00IHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWNvbG9yc1wiPkJ1eSBOb3c8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjlGOEY1XSByb3VuZGVkLTJ4bCBwLTQgc3BhY2UteS0zIGJvcmRlciBib3JkZXItWyNFOEU3RTJdXCI+XG4gICAgICAgIHtbXG4gICAgICAgICAgeyBpY29uOiAn8J+amicsIGxhYmVsOiBwcm9kdWN0LmZyZWVTaGlwcGluZyA/ICdGcmVlIERlbGl2ZXJ5JyA6ICdTdGFuZGFyZCBEZWxpdmVyeScsIHN1YjogJ0VzdGltYXRlZCBkZWxpdmVyeTogM+KAkzUgYnVzaW5lc3MgZGF5cycgfSxcbiAgICAgICAgICB7IGljb246ICfihqnvuI8nLCBsYWJlbDogJ0Vhc3kgUmV0dXJucycsIHN1YjogJzMwLWRheSByZXR1cm4gcG9saWN5LCBubyBxdWVzdGlvbnMgYXNrZWQnIH0sXG4gICAgICAgICAgeyBpY29uOiAn8J+UkicsIGxhYmVsOiAnU2VjdXJlIENoZWNrb3V0Jywgc3ViOiAnU1NMIGVuY3J5cHRlZCDCtyBCdXllciBQcm90ZWN0aW9uIGd1YXJhbnRlZWQnIH0sXG4gICAgICAgIF0ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmxhYmVsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG10LTAuNVwiPntpdGVtLmljb259PC9zcGFuPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+e2l0ZW0ubGFiZWx9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdXCI+e2l0ZW0uc3VifTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9kYXRhL21hcmtldHBsYWNlJ1xuXG50eXBlIFByb3BzID0ge1xuICBwcm9kdWN0OiBQcm9kdWN0XG4gIHRhYjogJ2ZlYXR1cmVzJyB8ICdzaGlwcGluZycgfCAncmV0dXJucydcbiAgb25UYWJDaGFuZ2U6ICh0YWI6ICdmZWF0dXJlcycgfCAnc2hpcHBpbmcnIHwgJ3JldHVybnMnKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RUYWJzUGFuZWwoeyBwcm9kdWN0LCB0YWIsIG9uVGFiQ2hhbmdlIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItWyNFOEU3RTJdXCI+XG4gICAgICAgIHtbXG4gICAgICAgICAgeyBrZXk6ICdmZWF0dXJlcycsIGxhYmVsOiAnRmVhdHVyZXMnIH0sXG4gICAgICAgICAgeyBrZXk6ICdzaGlwcGluZycsIGxhYmVsOiAnU2hpcHBpbmcgJiBEZWxpdmVyeScgfSxcbiAgICAgICAgICB7IGtleTogJ3JldHVybnMnLCBsYWJlbDogJ1JldHVybnMgUG9saWN5JyB9LFxuICAgICAgICBdLm1hcCh0ID0+IChcbiAgICAgICAgICA8YnV0dG9uIGtleT17dC5rZXl9IG9uQ2xpY2s9eygpID0+IG9uVGFiQ2hhbmdlKHQua2V5IGFzIHR5cGVvZiB0YWIpfSBjbGFzc05hbWU9e2BweC02IHB5LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1jb2xvcnMgJHt0YWIgPT09IHQua2V5ID8gJ2JvcmRlci1bI0U4NDUwQV0gdGV4dC1bI0U4NDUwQV0nIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LVsjNkI2QTY2XSBob3Zlcjp0ZXh0LVsjMEUwRTBFXSd9YH0+e3QubGFiZWx9PC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICB7dGFiID09PSAnZmVhdHVyZXMnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XSBsZWFkaW5nLXJlbGF4ZWRcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICB7cHJvZHVjdC5mZWF0dXJlcyAmJiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgZ2FwLTMgbXQtNFwiPntwcm9kdWN0LmZlYXR1cmVzLm1hcChmID0+IDxkaXYga2V5PXtmfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1bI0Y5RjhGNV0gcm91bmRlZC14bCBweC00IHB5LTNcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMDU5NjY5XVwiPuKckzwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtWyMwRTBFMEVdXCI+e2Z9PC9zcGFuPjwvZGl2Pil9PC9kaXY+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7dGFiID09PSAnc2hpcHBpbmcnICYmIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIHRleHQtc20gdGV4dC1bIzZCNkE2Nl0gbGVhZGluZy1yZWxheGVkXCI+PHA+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXVwiPlN0YW5kYXJkIERlbGl2ZXJ5Ojwvc3Ryb25nPiAz4oCTNSBidXNpbmVzcyBkYXlzLiBGcmVlIG9uIG9yZGVycyBvdmVyICQ3NS48L3A+PHA+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXVwiPkV4cHJlc3MgRGVsaXZlcnk6PC9zdHJvbmc+IDHigJMyIGJ1c2luZXNzIGRheXMuICQ5Ljk5IGZsYXQgcmF0ZS48L3A+PHA+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXVwiPlNhbWUgRGF5Ojwvc3Ryb25nPiBBdmFpbGFibGUgaW4gc2VsZWN0IGNpdGllcy4gT3JkZXIgYmVmb3JlIDEycG0uPC9wPjxwPlRyYWNraW5nIG51bWJlciBwcm92aWRlZCB2aWEgZW1haWwgYW5kIFNNUyB1cG9uIGRpc3BhdGNoLjwvcD48L2Rpdj59XG4gICAgICAgIHt0YWIgPT09ICdyZXR1cm5zJyAmJiA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyB0ZXh0LXNtIHRleHQtWyM2QjZBNjZdIGxlYWRpbmctcmVsYXhlZFwiPjxwPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1bIzBFMEUwRV1cIj4zMC1EYXkgUmV0dXJuczo8L3N0cm9uZz4gUmV0dXJuIGFueSBpdGVtIHdpdGhpbiAzMCBkYXlzIG9mIGRlbGl2ZXJ5IGZvciBhIGZ1bGwgcmVmdW5kLjwvcD48cD5JdGVtcyBtdXN0IGJlIGluIG9yaWdpbmFsIGNvbmRpdGlvbiB3aXRoIGFsbCBwYWNrYWdpbmcgYW5kIGFjY2Vzc29yaWVzLjwvcD48cD5GcmVlIHJldHVybiBzaGlwcGluZyBvbiBhbGwgZGVmZWN0aXZlIG9yIGluY29ycmVjdGx5IHNlbnQgaXRlbXMuPC9wPjxwPlJlZnVuZHMgcHJvY2Vzc2VkIHdpdGhpbiA14oCTNyBidXNpbmVzcyBkYXlzIHRvIG9yaWdpbmFsIHBheW1lbnQgbWV0aG9kLjwvcD48L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBWZW5kb3IgfSBmcm9tICcuLi8uLi9kYXRhL21hcmtldHBsYWNlJ1xuXG50eXBlIFByb3BzID0ge1xuICB2ZW5kb3I6IFZlbmRvclxuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0U2VsbGVyQ2FyZCh7IHZlbmRvciwgb25OYXZpZ2F0ZSB9OiBQcm9wcykge1xuICBjb25zdCBbZm9sbG93ZWQsIHNldEZvbGxvd2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgey8qIE1pbmkgY292ZXIgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImgtMTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMEUwRTBFXSB0by1bIzM3NDE1MV0gcmVsYXRpdmVcIlxuICAgICAgICBzdHlsZT17dmVuZG9yLmNvdmVyID8geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2ZW5kb3IuY292ZXJ9KWAsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInIH0gOiB7fX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzBFMEUwRV0vNzAgdG8tdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBwYi01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNCAtbXQtNlwiPlxuICAgICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC14bCBib3JkZXItMiBib3JkZXItd2hpdGUgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBiZy1bI0YzRjJFRl1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3ZlbmRvci5sb2dvfSBhbHQ9e3ZlbmRvci5uYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBJbmZvICsgQnV0dG9ucyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTMgcHQtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPnt2ZW5kb3IubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAge3ZlbmRvci52ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV0gYmctWyNGRkY3RjVdIHB4LTEuNSBweS0wLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItWyNGRUNBQ0FdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIOKckyBWZXJpZmllZFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7dmVuZG9yLnRhZ2xpbmUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XSB0cnVuY2F0ZVwiPnt2ZW5kb3IudGFnbGluZX08L3A+fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgdGV4dC1bIzZCNkE2Nl0gZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXVwiPnt2ZW5kb3IucmF0aW5nfTwvc3Ryb25nPiByYXRpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXVwiPnt2ZW5kb3IucG9zaXRpdmVGZWVkYmFja30lPC9zdHJvbmc+IHBvc2l0aXZlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1bIzBFMEUwRV1cIj57dmVuZG9yLnByb2R1Y3RDb3VudH08L3N0cm9uZz4gcHJvZHVjdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAge3ZlbmRvci5yZXNwb25zZVRpbWUgJiYgPHNwYW4+UmVzcG9uZHMge3ZlbmRvci5yZXNwb25zZVRpbWV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ3ZlbmRvcicsIGlkOiB2ZW5kb3IuaWQgfSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWaXNpdCBTdG9yZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gdGV4dC1bIzBFMEUwRV0gcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNGM0YyRUZdIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgQ2hhdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvbGxvd2VkKHYgPT4gIXYpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgIGZvbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlIGJvcmRlci1bIzBFMEUwRV0nXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1bI0U4RTdFMl0gdGV4dC1bIzBFMEUwRV0gaG92ZXI6YmctWyNGM0YyRUZdJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2ZvbGxvd2VkID8gJ0ZvbGxvd2luZycgOiAnRm9sbG93J31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQnXG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9kYXRhL21hcmtldHBsYWNlJ1xuaW1wb3J0IHR5cGUgeyBWaWV3IH0gZnJvbSAnLi4vLi4vYXBwL25hdmlnYXRpb24nXG5pbXBvcnQgdHlwZSB7IENhcnRJdGVtSW5wdXQgfSBmcm9tICcuLi8uLi9zdGF0ZS9tYXJrZXRwbGFjZS1zdG9yZSdcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbXM6IFByb2R1Y3RbXVxuICB3aXNobGlzdDogU2V0PHN0cmluZz5cbiAgb25Ub2dnbGVXaXNobGlzdDogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BZGRUb0NhcnQ6IChpdGVtOiBDYXJ0SXRlbUlucHV0KSA9PiB2b2lkXG4gIG9uTmF2aWdhdGU6ICh2OiBWaWV3KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGF0ZWRQcm9kdWN0c1NlY3Rpb24oeyBpdGVtcywgd2lzaGxpc3QsIG9uVG9nZ2xlV2lzaGxpc3QsIG9uQWRkVG9DYXJ0LCBvbk5hdmlnYXRlIH06IFByb3BzKSB7XG4gIGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIG1iLThcIj5Zb3UgTWF5IEFsc28gTGlrZTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTUgZ2FwLTRcIj5cbiAgICAgICAge2l0ZW1zLm1hcChwID0+IChcbiAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwLmlkfSBwcm9kdWN0PXtwfSB3aXNobGlzdGVkPXt3aXNobGlzdC5oYXMocC5pZCl9IG9uVG9nZ2xlV2lzaGxpc3Q9e29uVG9nZ2xlV2lzaGxpc3R9IG9uQWRkVG9DYXJ0PXtvbkFkZFRvQ2FydH0gb25OYXZpZ2F0ZT17aWQgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdwcm9kdWN0JywgaWQgfSl9IHZhcmlhbnQ9XCJjb21wYWN0XCIgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBWaWV3IH0gZnJvbSAnLi4vLi4vYXBwL25hdmlnYXRpb24nXG5pbXBvcnQgdHlwZSB7IENhcnRJdGVtSW5wdXQgfSBmcm9tICcuLi8uLi9zdGF0ZS9tYXJrZXRwbGFjZS1zdG9yZSdcbmltcG9ydCBQcm9kdWN0R2FsbGVyeVBhbmVsIGZyb20gJy4vUHJvZHVjdEdhbGxlcnlQYW5lbCdcbmltcG9ydCBQcm9kdWN0UHVyY2hhc2VQYW5lbCBmcm9tICcuL1Byb2R1Y3RQdXJjaGFzZVBhbmVsJ1xuaW1wb3J0IFByb2R1Y3RUYWJzUGFuZWwgZnJvbSAnLi9Qcm9kdWN0VGFic1BhbmVsJ1xuaW1wb3J0IFByb2R1Y3RTZWxsZXJDYXJkIGZyb20gJy4vUHJvZHVjdFNlbGxlckNhcmQnXG5pbXBvcnQgUmVsYXRlZFByb2R1Y3RzU2VjdGlvbiBmcm9tICcuL1JlbGF0ZWRQcm9kdWN0c1NlY3Rpb24nXG5pbXBvcnQgeyB1c2VDYXRhbG9nIH0gZnJvbSAnLi4vLi4vc3RhdGUvY2F0YWxvZy1zdG9yZSdcbmltcG9ydCB7IGdldFByb2R1Y3RCeUlkLCBsaXN0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9tYXJrZXRwbGFjZSdcbmltcG9ydCB0eXBlIHsgUHJvZHVjdCB9IGZyb20gJ0AvZGF0YS9tYXJrZXRwbGFjZSdcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvZHVjdElkOiBzdHJpbmdcbiAgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWRcbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZUNvbnRlbnQoeyBwcm9kdWN0SWQsIG9uTmF2aWdhdGUsIHdpc2hsaXN0LCBvblRvZ2dsZVdpc2hsaXN0LCBvbkFkZFRvQ2FydCB9OiBQcm9wcykge1xuICBjb25zdCB7IHByb2R1Y3RzLCB2ZW5kb3JzIH0gPSB1c2VDYXRhbG9nKClcbiAgY29uc3QgW2xpdmVQcm9kdWN0LCBzZXRMaXZlUHJvZHVjdF0gPSB1c2VTdGF0ZTxQcm9kdWN0IHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2xpdmVSZWxhdGVkLCBzZXRMaXZlUmVsYXRlZF0gPSB1c2VTdGF0ZTxQcm9kdWN0W10gfCBudWxsPihudWxsKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbYWN0aXZlSW1hZ2UsIHNldEFjdGl2ZUltYWdlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzZWxlY3RlZENvbG9yLCBzZXRTZWxlY3RlZENvbG9yXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2VsZWN0ZWRTaXplLCBzZXRTZWxlY3RlZFNpemVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGU8J2ZlYXR1cmVzJyB8ICdzaGlwcGluZycgfCAncmV0dXJucyc+KCdmZWF0dXJlcycpXG4gIGNvbnN0IFthZGRlZCwgc2V0QWRkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgICAgY29uc3QgcHJvZHVjdFJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cblxuICAgICAgaWYgKHByb2R1Y3RSZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIHNldExpdmVQcm9kdWN0KHByb2R1Y3RSZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRTZWxlY3RlZENvbG9yKHByb2R1Y3RSZXNwb25zZS5kYXRhLmNvbG9ycz8uWzBdID8/ICcnKVxuICAgICAgICBzZXRTZWxlY3RlZFNpemUocHJvZHVjdFJlc3BvbnNlLmRhdGEuc2l6ZXM/LlswXSA/PyAnJylcblxuICAgICAgICBjb25zdCByZWxhdGVkUmVzcG9uc2UgPSBhd2FpdCBsaXN0UHJvZHVjdHMoeyBjYXRlZ29yeTogcHJvZHVjdFJlc3BvbnNlLmRhdGEuY2F0ZWdvcnlTbHVnLCBsaW1pdDogNSB9KVxuICAgICAgICBpZiAoIWNhbmNlbGxlZCAmJiByZWxhdGVkUmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgIHNldExpdmVSZWxhdGVkKHJlbGF0ZWRSZXNwb25zZS5kYXRhLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RSZXNwb25zZS5kYXRhLmlkKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRMaXZlUmVsYXRlZChudWxsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMaXZlUHJvZHVjdChudWxsKVxuICAgICAgICBzZXRMaXZlUmVsYXRlZChudWxsKVxuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pKClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICB9LCBbcHJvZHVjdElkXSlcblxuICBjb25zdCBwcm9kdWN0ID0gbGl2ZVByb2R1Y3QgPz8gcHJvZHVjdHMuZmluZChwID0+IHAuaWQgPT09IHByb2R1Y3RJZCkgPz8gcHJvZHVjdHNbMF1cbiAgY29uc3QgdmVuZG9yID0gdmVuZG9ycy5maW5kKHYgPT4gdi5pZCA9PT0gcHJvZHVjdC52ZW5kb3JJZCkgPz8gdmVuZG9yc1swXVxuICBjb25zdCByZWxhdGVkID0gdXNlTWVtbyhcbiAgICAoKSA9PiBsaXZlUmVsYXRlZCA/PyBwcm9kdWN0cy5maWx0ZXIocCA9PiBwLmNhdGVnb3J5U2x1ZyA9PT0gcHJvZHVjdC5jYXRlZ29yeVNsdWcgJiYgcC5pZCAhPT0gcHJvZHVjdC5pZCkuc2xpY2UoMCwgNSksXG4gICAgW2xpdmVSZWxhdGVkLCBwcm9kdWN0cywgcHJvZHVjdC5jYXRlZ29yeVNsdWcsIHByb2R1Y3QuaWRdLFxuICApXG4gIGNvbnN0IGFsbEltYWdlcyA9IHByb2R1Y3QuaW1hZ2VzPy5sZW5ndGggPyBwcm9kdWN0LmltYWdlcyA6IFtwcm9kdWN0LmltYWdlXVxuXG4gIGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9ICgpID0+IHtcbiAgICBvbkFkZFRvQ2FydCh7XG4gICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlLFxuICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICBvcmlnaW5hbFByaWNlOiBwcm9kdWN0Lm9yaWdpbmFsUHJpY2UsXG4gICAgICBpbWFnZTogcHJvZHVjdC5pbWFnZSxcbiAgICAgIHZlbmRvcjogcHJvZHVjdC52ZW5kb3IsXG4gICAgICB2YXJpYW50OiBbc2VsZWN0ZWRDb2xvciwgc2VsZWN0ZWRTaXplXS5maWx0ZXIoQm9vbGVhbikuam9pbignIC8gJykgfHwgdW5kZWZpbmVkLFxuICAgIH0pXG4gICAgc2V0QWRkZWQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFkZGVkKGZhbHNlKSwgMjAwMClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y5RjhGNV0gbWluLWgtc2NyZWVuXCI+XG4gICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjRThFN0UyXSBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bMTI4MHB4XSBweC02IHB5LTQgdGV4dC1zbSB0ZXh0LVsjNkI2QTY2XVwiPkxvYWRpbmcgbGl2ZSBwcm9kdWN0IGRldGFpbHMuLi48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNiBweS00XCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LVsjOUNBM0FGXVwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdob21lJyB9KX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5Ib21lPC9idXR0b24+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOSA1bDcgNy03IDdcIiAvPjwvc3ZnPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdjYXRlZ29yeScsIHNsdWc6IHByb2R1Y3QuY2F0ZWdvcnlTbHVnIH0pfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiPntwcm9kdWN0LmNhdGVnb3J5fTwvYnV0dG9uPlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zIGgtM1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyLjV9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgNWw3IDctNyA3XCIgLz48L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXSB0cnVuY2F0ZSBtYXgtdy1bMzAwcHhdXCI+e3Byb2R1Y3QudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNiBwYi0xNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTEyXCI+XG4gICAgICAgICAgPFByb2R1Y3RHYWxsZXJ5UGFuZWxcbiAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICBhY3RpdmVJbWFnZT17YWN0aXZlSW1hZ2V9XG4gICAgICAgICAgICBhbGxJbWFnZXM9e2FsbEltYWdlc31cbiAgICAgICAgICAgIG9uU2VsZWN0SW1hZ2U9e3NldEFjdGl2ZUltYWdlfVxuICAgICAgICAgICAgd2lzaGxpc3RlZD17d2lzaGxpc3QuaGFzKHByb2R1Y3QuaWQpfVxuICAgICAgICAgICAgb25Ub2dnbGVXaXNobGlzdD17KCkgPT4gb25Ub2dnbGVXaXNobGlzdChwcm9kdWN0LmlkKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFByb2R1Y3RQdXJjaGFzZVBhbmVsXG4gICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgdmVuZG9yPXt2ZW5kb3J9XG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtzZWxlY3RlZENvbG9yfVxuICAgICAgICAgICAgc2VsZWN0ZWRTaXplPXtzZWxlY3RlZFNpemV9XG4gICAgICAgICAgICBxdHk9e3F0eX1cbiAgICAgICAgICAgIGFkZGVkPXthZGRlZH1cbiAgICAgICAgICAgIG9uU2VsZWN0Q29sb3I9e3NldFNlbGVjdGVkQ29sb3J9XG4gICAgICAgICAgICBvblNlbGVjdFNpemU9e3NldFNlbGVjdGVkU2l6ZX1cbiAgICAgICAgICAgIG9uSW5jcmVhc2VRdHk9eygpID0+IHNldFF0eShxID0+IHEgKyAxKX1cbiAgICAgICAgICAgIG9uRGVjcmVhc2VRdHk9eygpID0+IHNldFF0eShxID0+IE1hdGgubWF4KDEsIHEgLSAxKSl9XG4gICAgICAgICAgICBvbkFkZFRvQ2FydD17aGFuZGxlQWRkVG9DYXJ0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxQcm9kdWN0VGFic1BhbmVsIHByb2R1Y3Q9e3Byb2R1Y3R9IHRhYj17dGFifSBvblRhYkNoYW5nZT17c2V0VGFifSAvPlxuICAgICAgICA8UHJvZHVjdFNlbGxlckNhcmQgdmVuZG9yPXt2ZW5kb3J9IG9uTmF2aWdhdGU9e29uTmF2aWdhdGV9IC8+XG4gICAgICAgIDxSZWxhdGVkUHJvZHVjdHNTZWN0aW9uIGl0ZW1zPXtyZWxhdGVkfSB3aXNobGlzdD17d2lzaGxpc3R9IG9uVG9nZ2xlV2lzaGxpc3Q9e29uVG9nZ2xlV2lzaGxpc3R9IG9uQWRkVG9DYXJ0PXtvbkFkZFRvQ2FydH0gb25OYXZpZ2F0ZT17b25OYXZpZ2F0ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgdHlwZSB7IFZpZXcgfSBmcm9tICcuLi9hcHAvbmF2aWdhdGlvbidcbmltcG9ydCB0eXBlIHsgQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuaW1wb3J0IFByb2R1Y3RQYWdlQ29udGVudCBmcm9tICcuL3Byb2R1Y3QvUHJvZHVjdFBhZ2VDb250ZW50J1xuXG50eXBlIFByb3BzID0ge1xuICBwcm9kdWN0SWQ6IHN0cmluZ1xuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICB3aXNobGlzdDogU2V0PHN0cmluZz5cbiAgb25Ub2dnbGVXaXNobGlzdDogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BZGRUb0NhcnQ6IChpdGVtOiBDYXJ0SXRlbUlucHV0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKHByb3BzOiBQcm9wcykge1xuICByZXR1cm4gPFByb2R1Y3RQYWdlQ29udGVudCB7Li4ucHJvcHN9IC8+XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBV0EsU0FBd0Isb0JBQW9CLEVBQUUsU0FBUyxhQUFhLFdBQVcsZUFBZSxZQUFZLG9CQUEyQjtDQUNuSSxPQUNFLGlCQUFBLEdBQUEsbUJBQUEsS0FBQSxDQUFDLE9BQUQ7RUFBSyxXQUFVO0VBQWYsVUFBQSxDQUNFLGlCQUFBLEdBQUEsbUJBQUEsS0FBQSxDQUFDLE9BQUQ7R0FBSyxXQUFVO0dBQWYsVUFBQTtJQUNFLGlCQUFBLEdBQUEsbUJBQUEsSUFBQSxDQUFDLE9BQUQ7S0FBSyxLQUFLLFVBQVU7S0FBYyxLQUFLLFFBQVE7S0FBTyxXQUFVO0lBQThCLENBQUE7SUFDN0YsUUFBUSxXQUFXLEtBQUssaUJBQUEsR0FBQSxtQkFBQSxLQUFBLENBQUMsT0FBRDtLQUFLLFdBQVU7S0FBZixVQUFBO01BQStHO01BQUUsUUFBUTtNQUFTO0tBQVU7O0lBQ3JLLGlCQUFBLEdBQUEsbUJBQUEsSUFBQSxDQUFDLFVBQUQ7S0FBUSxTQUFTO0tBQWtCLFdBQVcsMkdBQTJHLGFBQWEsNEJBQTRCO0tBQ2hNLFVBQUEsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsT0FBRDtNQUFLLFdBQVU7TUFBVSxTQUFRO01BQVksTUFBTSxhQUFhLGlCQUFpQjtNQUFRLFFBQU87TUFBZSxhQUFhO01BQzFILFVBQUEsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsUUFBRDtPQUFNLGVBQWM7T0FBUSxnQkFBZTtPQUFRLEdBQUU7TUFBK0gsQ0FBQTtLQUNqTCxDQUFBO0lBQ0MsQ0FBQTtHQUNMO0VBQ0osQ0FBQSxHQUFB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