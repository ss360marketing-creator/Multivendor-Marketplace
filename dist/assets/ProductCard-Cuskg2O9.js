import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/components/ProductCard.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Stars({ rating, count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-0.5",
			children: [
				1,
				2,
				3,
				4,
				5
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: `w-3.5 h-3.5 ${i <= Math.round(rating) ? "star-filled" : "star-empty"}`,
				viewBox: "0 0 20 20",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[11px] text-[#6B6A66] tabular-nums",
			children: [rating.toFixed(1), count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ml-0.5",
				children: [
					"(",
					count >= 1e3 ? `${(count / 1e3).toFixed(1)}k` : count,
					")"
				]
			})]
		})]
	});
}
function ProductCard({ product, wishlisted = false, onToggleWishlist, onAddToCart, onNavigate, variant = "standard" }) {
	const [hovered, setHovered] = (0, import_react.useState)(false);
	const [addedToCart, setAddedToCart] = (0, import_react.useState)(false);
	const handleAddToCart = (e) => {
		e.stopPropagation();
		onAddToCart?.({
			id: product.id,
			title: product.title,
			price: product.price,
			originalPrice: product.originalPrice,
			image: product.image,
			vendor: product.vendor,
			variant: void 0
		});
		setAddedToCart(true);
		setTimeout(() => setAddedToCart(false), 1800);
	};
	const handleWishlist = (e) => {
		e.stopPropagation();
		onToggleWishlist?.(product.id);
	};
	const badgeColors = {
		bestseller: "bg-[#0E0E0E] text-white",
		flash: "bg-[#E11D48] text-white",
		new: "bg-[#059669] text-white",
		sponsored: "bg-[#6B6A66] text-white"
	};
	if (variant === "horizontal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4 bg-white rounded-2xl p-4 cursor-pointer border border-[#E8E7E2] hover:shadow-lg transition-all duration-200",
		onClick: () => onNavigate?.(product.id),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#F9F8F5]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.title,
				className: "w-full h-full object-cover"
			}), product.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute top-1.5 left-1.5 bg-[#E11D48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md",
				children: [
					"-",
					product.discount,
					"%"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-w-0 flex flex-col gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[#6B6A66] truncate",
					children: product.vendor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold leading-snug line-clamp-2 text-[#0E0E0E]",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
					rating: product.rating,
					count: product.reviewCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mt-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono font-bold text-base text-[#0E0E0E]",
						children: ["$", product.price]
					}), product.originalPrice > product.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs text-[#6B6A66] line-through",
						children: ["$", product.originalPrice]
					})]
				})
			]
		})]
	});
	if (variant === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl overflow-hidden cursor-pointer border border-[#E8E7E2] hover:shadow-lg transition-all duration-200 group",
		onClick: () => onNavigate?.(product.id),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square bg-[#F9F8F5] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.title,
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			}), product.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute top-2 left-2 bg-[#E11D48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md",
				children: [
					"-",
					product.discount,
					"%"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3 space-y-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[#6B6A66] truncate",
					children: product.vendor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold line-clamp-2 leading-snug",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono font-bold text-sm",
						children: ["$", product.price]
					}), product.originalPrice > product.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs text-[#6B6A66] line-through",
						children: ["$", product.originalPrice]
					})]
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl overflow-hidden cursor-pointer border border-[#E8E7E2] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-250 group flex flex-col",
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		onClick: () => onNavigate?.(product.id),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden bg-[#F9F8F5]",
			style: { paddingBottom: "100%" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.title,
					className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-106",
					style: { transform: hovered ? "scale(1.06)" : "scale(1)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-col gap-1.5",
					children: [product.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "bg-[#E11D48] text-white text-[11px] font-bold px-2 py-0.5 rounded-lg shadow-sm",
						children: [
							"-",
							product.discount,
							"%"
						]
					}), product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-[10px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wide shadow-sm ${badgeColors[product.badge]}`,
						children: product.badge === "bestseller" ? "Best Seller" : product.badge === "flash" ? "Flash" : product.badge === "new" ? "New" : "Ad"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleWishlist,
					className: `absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${wishlisted ? "bg-[#E11D48] text-white" : "bg-white text-[#6B6A66] hover:bg-[#FFF1F2] hover:text-[#E11D48]"} ${hovered || wishlisted ? "opacity-100" : "opacity-0"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-4 h-4",
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
				}),
				product.stock < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-3 left-3 bg-[#FFF7ED] text-[#D97706] text-[11px] font-semibold px-2 py-0.5 rounded-lg border border-[#FED7AA]",
					children: [
						"Only ",
						product.stock,
						" left"
					]
				}),
				hovered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleAddToCart,
					className: `absolute bottom-3 right-3 left-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg ${addedToCart ? "bg-[#059669] text-white" : "bg-[#0E0E0E] text-white hover:bg-[#E8450A]"} ${product.stock < 10 ? "left-[88px]" : "left-3"}`,
					children: addedToCart ? "✓ Added!" : "Add to Cart"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 flex flex-col gap-2 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-[#6B6A66] font-medium truncate",
						children: product.vendor
					}), product.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-3.5 h-3.5 text-[#E8450A] flex-shrink-0",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							fillRule: "evenodd",
							d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
							clipRule: "evenodd"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-[#0E0E0E] line-clamp-2 leading-snug",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
					rating: product.rating,
					count: product.reviewCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto pt-1 space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono font-bold text-[17px] text-[#0E0E0E]",
								children: ["$", product.price]
							}), product.originalPrice > product.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-sm text-[#6B6A66] line-through",
								children: ["$", product.originalPrice]
							})]
						}),
						product.installment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-[#6B6A66]",
							children: [
								"or ",
								product.installment,
								" interest-free"
							]
						}),
						product.freeShipping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 text-[#059669] text-[11px] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-3.5 h-3.5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8M10 12h4"
								})
							}), "Free delivery"]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdENhcmQtQ3Vza2cyTzkuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi9kYXRhL21hcmtldHBsYWNlJ1xuXG50eXBlIENhcnRJbnB1dCA9IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHByaWNlOiBudW1iZXJcbiAgb3JpZ2luYWxQcmljZTogbnVtYmVyXG4gIGltYWdlOiBzdHJpbmdcbiAgdmVuZG9yOiBzdHJpbmdcbiAgdmFyaWFudD86IHN0cmluZ1xufVxuXG50eXBlIFByb3BzID0ge1xuICBwcm9kdWN0OiBQcm9kdWN0XG4gIHdpc2hsaXN0ZWQ/OiBib29sZWFuXG4gIG9uVG9nZ2xlV2lzaGxpc3Q/OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICBvbkFkZFRvQ2FydD86IChpdGVtOiBDYXJ0SW5wdXQpID0+IHZvaWRcbiAgb25OYXZpZ2F0ZT86IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIHZhcmlhbnQ/OiAnc3RhbmRhcmQnIHwgJ2NvbXBhY3QnIHwgJ2hvcml6b250YWwnXG59XG5cbmZ1bmN0aW9uIFN0YXJzKHsgcmF0aW5nLCBjb3VudCB9OiB7IHJhdGluZzogbnVtYmVyOyBjb3VudD86IG51bWJlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0wLjVcIj5cbiAgICAgICAge1sxLCAyLCAzLCA0LCA1XS5tYXAoaSA9PiAoXG4gICAgICAgICAgPHN2ZyBrZXk9e2l9IGNsYXNzTmFtZT17YHctMy41IGgtMy41ICR7aSA8PSBNYXRoLnJvdW5kKHJhdGluZykgPyAnc3Rhci1maWxsZWQnIDogJ3N0YXItZW1wdHknfWB9IHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuMDcgMy4yOTJhMSAxIDAgMDAuOTUuNjloMy40NjJjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTIuOCAyLjAzNGExIDEgMCAwMC0uMzY0IDEuMTE4bDEuMDcgMy4yOTJjLjMuOTIxLS43NTUgMS42ODgtMS41NCAxLjExOGwtMi44LTIuMDM0YTEgMSAwIDAwLTEuMTc1IDBsLTIuOCAyLjAzNGMtLjc4NC41Ny0xLjgzOC0uMTk3LTEuNTM5LTEuMTE4bDEuMDctMy4yOTJhMSAxIDAgMDAtLjM2NC0xLjExOEwyLjk4IDguNzJjLS43ODMtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDMuNDYxYTEgMSAwIDAwLjk1MS0uNjlsMS4wNy0zLjI5MnpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bIzZCNkE2Nl0gdGFidWxhci1udW1zXCI+XG4gICAgICAgIHtyYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAge2NvdW50ICE9PSB1bmRlZmluZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwibWwtMC41XCI+KHtjb3VudCA+PSAxMDAwID8gYCR7KGNvdW50IC8gMTAwMCkudG9GaXhlZCgxKX1rYCA6IGNvdW50fSk8L3NwYW4+fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdCwgd2lzaGxpc3RlZCA9IGZhbHNlLCBvblRvZ2dsZVdpc2hsaXN0LCBvbkFkZFRvQ2FydCwgb25OYXZpZ2F0ZSwgdmFyaWFudCA9ICdzdGFuZGFyZCcgfTogUHJvcHMpIHtcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFthZGRlZFRvQ2FydCwgc2V0QWRkZWRUb0NhcnRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb25BZGRUb0NhcnQ/Lih7IGlkOiBwcm9kdWN0LmlkLCB0aXRsZTogcHJvZHVjdC50aXRsZSwgcHJpY2U6IHByb2R1Y3QucHJpY2UsIG9yaWdpbmFsUHJpY2U6IHByb2R1Y3Qub3JpZ2luYWxQcmljZSwgaW1hZ2U6IHByb2R1Y3QuaW1hZ2UsIHZlbmRvcjogcHJvZHVjdC52ZW5kb3IsIHZhcmlhbnQ6IHVuZGVmaW5lZCB9KVxuICAgIHNldEFkZGVkVG9DYXJ0KHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBZGRlZFRvQ2FydChmYWxzZSksIDE4MDApXG4gIH1cblxuICBjb25zdCBoYW5kbGVXaXNobGlzdCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9uVG9nZ2xlV2lzaGxpc3Q/Lihwcm9kdWN0LmlkKVxuICB9XG5cbiAgY29uc3QgYmFkZ2VDb2xvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgYmVzdHNlbGxlcjogJ2JnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlJyxcbiAgICBmbGFzaDogJ2JnLVsjRTExRDQ4XSB0ZXh0LXdoaXRlJyxcbiAgICBuZXc6ICdiZy1bIzA1OTY2OV0gdGV4dC13aGl0ZScsXG4gICAgc3BvbnNvcmVkOiAnYmctWyM2QjZBNjZdIHRleHQtd2hpdGUnLFxuICB9XG5cbiAgaWYgKHZhcmlhbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgYmctd2hpdGUgcm91bmRlZC0yeGwgcC00IGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlPy4ocHJvZHVjdC5pZCl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yNCBoLTI0IGZsZXgtc2hyaW5rLTAgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctWyNGOUY4RjVdXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgIHtwcm9kdWN0LmRpc2NvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS41IGxlZnQtMS41IGJnLVsjRTExRDQ4XSB0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCBweC0xLjUgcHktMC41IHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgLXtwcm9kdWN0LmRpc2NvdW50fSVcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMCBmbGV4IGZsZXgtY29sIGdhcC0xXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XSB0cnVuY2F0ZVwiPntwcm9kdWN0LnZlbmRvcn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctc251ZyBsaW5lLWNsYW1wLTIgdGV4dC1bIzBFMEUwRV1cIj57cHJvZHVjdC50aXRsZX08L3A+XG4gICAgICAgICAgPFN0YXJzIHJhdGluZz17cHJvZHVjdC5yYXRpbmd9IGNvdW50PXtwcm9kdWN0LnJldmlld0NvdW50fSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbXQtYXV0b1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzBFMEUwRV1cIj4ke3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAge3Byb2R1Y3Qub3JpZ2luYWxQcmljZSA+IHByb2R1Y3QucHJpY2UgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyB0ZXh0LVsjNkI2QTY2XSBsaW5lLXRocm91Z2hcIj4ke3Byb2R1Y3Qub3JpZ2luYWxQcmljZX08L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGlmICh2YXJpYW50ID09PSAnY29tcGFjdCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBncm91cFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGU/Lihwcm9kdWN0LmlkKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIGJnLVsjRjlGOEY1XSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0LnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwXCIgLz5cbiAgICAgICAgICB7cHJvZHVjdC5kaXNjb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGVmdC0yIGJnLVsjRTExRDQ4XSB0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCBweC0xLjUgcHktMC41IHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgLXtwcm9kdWN0LmRpc2NvdW50fSVcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgc3BhY2UteS0xLjVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdIHRydW5jYXRlXCI+e3Byb2R1Y3QudmVuZG9yfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGluZS1jbGFtcC0yIGxlYWRpbmctc251Z1wiPntwcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc21cIj4ke3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAge3Byb2R1Y3Qub3JpZ2luYWxQcmljZSA+IHByb2R1Y3QucHJpY2UgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyB0ZXh0LVsjNkI2QTY2XSBsaW5lLXRocm91Z2hcIj4ke3Byb2R1Y3Qub3JpZ2luYWxQcmljZX08L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGhvdmVyOnNoYWRvdy14bCBob3ZlcjotdHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTI1MCBncm91cCBmbGV4IGZsZXgtY29sXCJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlPy4ocHJvZHVjdC5pZCl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gYmctWyNGOUY4RjVdXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzEwMCUnIH19PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDZcIlxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogaG92ZXJlZCA/ICdzY2FsZSgxLjA2KScgOiAnc2NhbGUoMSknIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIEJhZGdlcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyBsZWZ0LTMgZmxleCBmbGV4LWNvbCBnYXAtMS41XCI+XG4gICAgICAgICAge3Byb2R1Y3QuZGlzY291bnQgPiAwICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLVsjRTExRDQ4XSB0ZXh0LXdoaXRlIHRleHQtWzExcHhdIGZvbnQtYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWxnIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAte3Byb2R1Y3QuZGlzY291bnR9JVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Byb2R1Y3QuYmFkZ2UgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC1bMTBweF0gZm9udC1ib2xkIHB4LTIgcHktMC41IHJvdW5kZWQtbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgc2hhZG93LXNtICR7YmFkZ2VDb2xvcnNbcHJvZHVjdC5iYWRnZV19YH0+XG4gICAgICAgICAgICAgIHtwcm9kdWN0LmJhZGdlID09PSAnYmVzdHNlbGxlcicgPyAnQmVzdCBTZWxsZXInIDogcHJvZHVjdC5iYWRnZSA9PT0gJ2ZsYXNoJyA/ICdGbGFzaCcgOiBwcm9kdWN0LmJhZGdlID09PSAnbmV3JyA/ICdOZXcnIDogJ0FkJ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogV2lzaGxpc3QgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVXaXNobGlzdH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMyByaWdodC0zIHctOCBoLTggcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHt3aXNobGlzdGVkID8gJ2JnLVsjRTExRDQ4XSB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZSB0ZXh0LVsjNkI2QTY2XSBob3ZlcjpiZy1bI0ZGRjFGMl0gaG92ZXI6dGV4dC1bI0UxMUQ0OF0nfSAke2hvdmVyZWQgfHwgd2lzaGxpc3RlZCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ31gfVxuICAgICAgICA+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9e3dpc2hsaXN0ZWQgPyAnY3VycmVudENvbG9yJyA6ICdub25lJ30gc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNC4zMTggNi4zMThhNC41IDQuNSAwIDAwMCA2LjM2NEwxMiAyMC4zNjRsNy42ODItNy42ODJhNC41IDQuNSAwIDAwLTYuMzY0LTYuMzY0TDEyIDcuNjM2bC0xLjMxOC0xLjMxOGE0LjUgNC41IDAgMDAtNi4zNjQgMHpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7LyogU3RvY2sgaW5kaWNhdG9yICovfVxuICAgICAgICB7cHJvZHVjdC5zdG9jayA8IDEwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0zIGxlZnQtMyBiZy1bI0ZGRjdFRF0gdGV4dC1bI0Q5NzcwNl0gdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyNGRUQ3QUFdXCI+XG4gICAgICAgICAgICBPbmx5IHtwcm9kdWN0LnN0b2NrfSBsZWZ0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEFkZCB0byBjYXJ0IG92ZXJsYXkgKi99XG4gICAgICAgIHtob3ZlcmVkICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUb0NhcnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBib3R0b20tMyByaWdodC0zIGxlZnQtMyBweS0yIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBzaGFkb3ctbGcgJHtcbiAgICAgICAgICAgICAgYWRkZWRUb0NhcnRcbiAgICAgICAgICAgICAgICA/ICdiZy1bIzA1OTY2OV0gdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICA6ICdiZy1bIzBFMEUwRV0gdGV4dC13aGl0ZSBob3ZlcjpiZy1bI0U4NDUwQV0nXG4gICAgICAgICAgICB9ICR7cHJvZHVjdC5zdG9jayA8IDEwID8gJ2xlZnQtWzg4cHhdJyA6ICdsZWZ0LTMnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FkZGVkVG9DYXJ0ID8gJ+KckyBBZGRlZCEnIDogJ0FkZCB0byBDYXJ0J31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sIGdhcC0yIGZsZXgtMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdIGZvbnQtbWVkaXVtIHRydW5jYXRlXCI+e3Byb2R1Y3QudmVuZG9yfTwvc3Bhbj5cbiAgICAgICAgICB7cHJvZHVjdC52ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtWyNFODQ1MEFdIGZsZXgtc2hyaW5rLTBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguNjAzIDMuNzk5QTQuNDkgNC40OSAwIDAxMTIgMi4yNWMxLjM1NyAwIDIuNTczLjYgMy4zOTcgMS41NDlhNC40OSA0LjQ5IDAgMDEzLjQ5OCAxLjMwNyA0LjQ5MSA0LjQ5MSAwIDAxMS4zMDcgMy40OTdBNC40OSA0LjQ5IDAgMDEyMS43NSAxMmE0LjQ5IDQuNDkgMCAwMS0xLjU0OSAzLjM5NyA0LjQ5MSA0LjQ5MSAwIDAxLTEuMzA3IDMuNDk3IDQuNDkxIDQuNDkxIDAgMDEtMy40OTcgMS4zMDdBNC40OSA0LjQ5IDAgMDExMiAyMS43NWE0LjQ5IDQuNDkgMCAwMS0zLjM5Ny0xLjU0OSA0LjQ5MSA0LjQ5MSAwIDAxLTMuNDk3LTEuMzA3IDQuNDkxIDQuNDkxIDAgMDEtMS4zMDctMy40OTdBNC40OSA0LjQ5IDAgMDEyLjI1IDEyYzAtMS4zNTcuNi0yLjU3MyAxLjU0OS0zLjM5N2E0LjQ5IDQuNDkgMCAwMTEuMzA3LTMuNDk3IDQuNDkgNC40OSAwIDAxMy40OTctMS4zMDd6bTcuMDA3IDYuMzg3YS43NS43NSAwIDEwLTEuMjItLjg3MmwtMy4yMzYgNC41M0w5LjUzIDEyLjIyYS43NS43NSAwIDAwLTEuMDYgMS4wNmwyLjI1IDIuMjVhLjc1Ljc1IDAgMDAxLjE0LS4wOTRsMy43NS01LjI1elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIGxpbmUtY2xhbXAtMiBsZWFkaW5nLXNudWdcIj57cHJvZHVjdC50aXRsZX08L2gzPlxuXG4gICAgICAgIDxTdGFycyByYXRpbmc9e3Byb2R1Y3QucmF0aW5nfSBjb3VudD17cHJvZHVjdC5yZXZpZXdDb3VudH0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gcHQtMSBzcGFjZS15LTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsxN3B4XSB0ZXh0LVsjMEUwRTBFXVwiPiR7cHJvZHVjdC5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICB7cHJvZHVjdC5vcmlnaW5hbFByaWNlID4gcHJvZHVjdC5wcmljZSAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyM2QjZBNjZdIGxpbmUtdGhyb3VnaFwiPiR7cHJvZHVjdC5vcmlnaW5hbFByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Byb2R1Y3QuaW5zdGFsbG1lbnQgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bIzZCNkE2Nl1cIj5vciB7cHJvZHVjdC5pbnN0YWxsbWVudH0gaW50ZXJlc3QtZnJlZTwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwcm9kdWN0LmZyZWVTaGlwcGluZyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtWyMwNTk2NjldIHRleHQtWzExcHhdIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNSA4aDE0TTUgOGEyIDIgMCAxMTAtNGgxNGEyIDIgMCAxMTAgNE01IDhsMS41IDloMTFMMTkgOE0xMCAxMmg0XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIEZyZWUgZGVsaXZlcnlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAg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