import { g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog } from "./index-BM41bWnP.js";
import { t as ProductCard } from "./ProductCard-Cuskg2O9.js";
//#region src/pages/cart/CartPageContent.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var FREE_SHIPPING_THRESHOLD = 75;
var SHIPPING_FEE = 9.99;
var TAX_RATE = .08;
function TrashIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "w-4 h-4",
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
		})
	});
}
function CartPageContent({ items, onNavigate, onRemove, onUpdateQuantity, wishlist, onToggleWishlist, onAddToCart }) {
	const { products } = useCatalog();
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [couponApplied, setCouponApplied] = (0, import_react.useState)(false);
	const [couponError, setCouponError] = (0, import_react.useState)("");
	const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
	const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : items.length > 0 ? SHIPPING_FEE : 0;
	const discount = couponApplied ? subtotal * .1 : 0;
	const tax = (subtotal - discount) * TAX_RATE;
	const total = subtotal - discount + shipping + tax;
	const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
	const freeShipPct = Math.min(100, subtotal / FREE_SHIPPING_THRESHOLD * 100);
	const vendorGroups = (0, import_react.useMemo)(() => items.reduce((acc, item) => {
		if (!acc[item.vendor]) acc[item.vendor] = [];
		acc[item.vendor].push(item);
		return acc;
	}, {}), [items]);
	const recommended = (0, import_react.useMemo)(() => products.filter((p) => !items.some((i) => i.id === p.id)).slice(0, 4), [products, items]);
	const handleApplyCoupon = () => {
		if (coupon.trim().toUpperCase() === "NEXUS10") {
			setCouponApplied(true);
			setCouponError("");
		} else {
			setCouponError("Invalid coupon code. Try NEXUS10.");
			setCouponApplied(false);
		}
	};
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[#F9F8F5] min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-2 text-xs text-[#9CA3AF] mb-8",
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
							className: "text-[#0E0E0E] font-medium",
							children: "Cart"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-24 h-24 mx-auto mb-6 rounded-3xl bg-[#F3F2EF] flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-12 h-12 text-[#9CA3AF]",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 1.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl font-bold text-[#0E0E0E] mb-2",
							children: "Your cart is empty"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#6B6A66] mb-8",
							children: "Looks like you haven't added anything yet. Explore thousands of products!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onNavigate({ type: "home" }),
							className: "px-8 py-3.5 bg-[#E8450A] text-white rounded-xl font-semibold hover:bg-[#C93A07] transition-colors",
							children: "Continue Shopping"
						})
					]
				}),
				recommended.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5",
						children: "Recommended For You"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
						children: recommended.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
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
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[#F9F8F5] min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-2 text-xs text-[#9CA3AF] mb-6",
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
							className: "text-[#0E0E0E] font-medium",
							children: "Cart"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[#9CA3AF] ml-1",
							children: [
								"(",
								items.reduce((s, i) => s + i.quantity, 0),
								" items)"
							]
						})
					]
				}),
				remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-[#E8E7E2] px-5 py-4 mb-6 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-[#0E0E0E]",
							children: [
								"Add ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-[#E8450A]",
									children: ["$", remaining.toFixed(2)]
								}),
								" more to unlock",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-[#059669]",
									children: "FREE Delivery"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 rounded-full bg-[#F3F2EF] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-[#E8450A] transition-all duration-500",
								style: { width: `${freeShipPct}%` }
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-shrink-0 w-10 h-10 rounded-xl bg-[#FFF7F5] flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-5 h-5 text-[#E8450A]",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8M10 12h4"
							})
						})
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-3 mb-6 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-5 h-5 text-[#059669] flex-shrink-0",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2.5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M5 13l4 4L19 7"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#059669]",
						children: "🎉 You unlocked FREE delivery on this order!"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-[1fr_380px] gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							Object.entries(vendorGroups).map(([vendorName, groupItems]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 px-5 py-4 border-b border-[#E8E7E2] bg-[#F9F8F5]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-lg bg-[#E8450A]/10 flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-4 h-4 text-[#E8450A]",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#0E0E0E]",
												children: vendorName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-[#6B6A66]",
												children: [groupItems.reduce((s, i) => s + i.quantity, 0), " items · Est. delivery in 2–4 days"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-[#059669] bg-[#F0FDF4] px-2.5 py-1 rounded-full border border-[#BBF7D0]",
											children: "✓ Verified"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-[#E8E7E2]",
									children: groupItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4 p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => onNavigate({
												type: "product",
												id: item.id
											}),
											className: "flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-[#F9F8F5] border border-[#E8E7E2] hover:opacity-90 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: item.image,
												alt: item.title,
												className: "w-full h-full object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => onNavigate({
														type: "product",
														id: item.id
													}),
													className: "text-sm font-semibold text-[#0E0E0E] line-clamp-2 leading-snug hover:text-[#E8450A] transition-colors text-left",
													children: item.title
												}),
												item.variant && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-[#9CA3AF] mt-0.5",
													children: item.variant
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 mt-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-semibold text-[#059669] bg-[#F0FDF4] px-1.5 py-0.5 rounded",
														children: "In Stock"
													}), item.originalPrice > item.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs text-[#9CA3AF] line-through font-mono",
														children: ["$", item.originalPrice.toFixed(2)]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between mt-3 flex-wrap gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center rounded-xl border border-[#E8E7E2] overflow-hidden",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => onUpdateQuantity(item.id, item.quantity - 1),
																className: "w-9 h-9 flex items-center justify-center hover:bg-[#F3F2EF] transition-colors text-[#0E0E0E]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
																	className: "w-3.5 h-3.5",
																	fill: "none",
																	viewBox: "0 0 24 24",
																	stroke: "currentColor",
																	strokeWidth: 2.5,
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																		strokeLinecap: "round",
																		strokeLinejoin: "round",
																		d: "M20 12H4"
																	})
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "w-10 text-center text-sm font-semibold text-[#0E0E0E] tabular-nums",
																children: item.quantity
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => onUpdateQuantity(item.id, item.quantity + 1),
																className: "w-9 h-9 flex items-center justify-center hover:bg-[#F3F2EF] transition-colors text-[#0E0E0E]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
																	className: "w-3.5 h-3.5",
																	fill: "none",
																	viewBox: "0 0 24 24",
																	stroke: "currentColor",
																	strokeWidth: 2.5,
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																		strokeLinecap: "round",
																		strokeLinejoin: "round",
																		d: "M12 4v16m8-8H4"
																	})
																})
															})
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-mono font-bold text-base text-[#0E0E0E]",
															children: ["$", (item.price * item.quantity).toFixed(2)]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => onRemove(item.id),
															className: "text-[#9CA3AF] hover:text-[#E11D48] transition-colors",
															title: "Remove",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashIcon, {})
														})]
													})]
												})
											]
										})]
									}, `${item.id}-${item.variant}`))
								})]
							}, vendorName)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onNavigate({ type: "home" }),
								className: "flex items-center gap-2 text-sm font-medium text-[#6B6A66] hover:text-[#E8450A] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M15 19l-7-7 7-7"
									})
								}), "Continue Shopping"]
							}),
							recommended.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4",
									children: "You May Also Like"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
									children: recommended.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
										product: p,
										variant: "compact",
										wishlisted: wishlist.has(p.id),
										onToggleWishlist,
										onAddToCart,
										onNavigate: (id) => onNavigate({
											type: "product",
											id
										})
									}, p.id))
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-[#0E0E0E] mb-3",
									children: "Promo Code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: coupon,
										onChange: (e) => {
											setCoupon(e.target.value.toUpperCase());
											setCouponError("");
											setCouponApplied(false);
										},
										placeholder: "Enter code (try NEXUS10)",
										className: "flex-1 h-10 px-3 rounded-xl border border-[#E8E7E2] text-sm text-[#0E0E0E] outline-none focus:border-[#E8450A] placeholder:text-[#9CA3AF]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleApplyCoupon,
										className: "px-4 h-10 rounded-xl bg-[#0E0E0E] text-white text-sm font-semibold hover:bg-[#E8450A] transition-colors",
										children: "Apply"
									})]
								}),
								couponApplied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#059669] font-semibold mt-2 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-3.5 h-3.5",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2.5,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M5 13l4 4L19 7"
										})
									}), "NEXUS10 applied — 10% off!"]
								}),
								couponError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#E11D48] mt-2",
									children: couponError
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-base font-bold text-[#0E0E0E] mb-5",
									children: "Order Summary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[#6B6A66]",
												children: [
													"Subtotal (",
													items.reduce((s, i) => s + i.quantity, 0),
													" items)"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-semibold text-[#0E0E0E]",
												children: ["$", subtotal.toFixed(2)]
											})]
										}),
										couponApplied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[#059669]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
													})
												}), "Promo NEXUS10"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-semibold",
												children: ["-$", discount.toFixed(2)]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#6B6A66]",
												children: "Shipping"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `font-mono font-semibold ${shipping === 0 ? "text-[#059669]" : "text-[#0E0E0E]"}`,
												children: shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#6B6A66]",
												children: "Est. Tax (8%)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-semibold text-[#0E0E0E]",
												children: ["$", tax.toFixed(2)]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-[#E8E7E2] mt-4 pt-4 flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#0E0E0E]",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono font-bold text-xl text-[#0E0E0E]",
										children: ["$", total.toFixed(2)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate({ type: "checkout" }),
									className: "mt-5 w-full py-4 rounded-xl bg-[#E8450A] text-white font-bold text-base hover:bg-[#C93A07] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-[#E8450A]/20",
									children: "Proceed to Checkout →"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex items-center justify-center gap-4",
									children: [
										"SSL",
										"VISA",
										"MC",
										"AMEX"
									].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-2.5 py-1 rounded-lg border border-[#E8E7E2] text-[10px] font-bold text-[#6B6A66]",
										children: b
									}, b))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-xs text-[#9CA3AF] mt-3",
									children: "🔒 Secure checkout · 30-day returns"
								})
							]
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/CartPage.tsx
function CartPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartPageContent, { ...props });
}
//#endregion
export { CartPage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FydFBhZ2UtaDM1LXd2aFAuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhZ2VzL2NhcnQvQ2FydFBhZ2VDb250ZW50LnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9DYXJ0UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbSwgQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uLy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuaW1wb3J0IHsgdXNlQ2F0YWxvZyB9IGZyb20gJ0Avc3RhdGUvY2F0YWxvZy1zdG9yZSdcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJ1xuXG50eXBlIFByb3BzID0ge1xuICBpdGVtczogQ2FydEl0ZW1bXVxuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICBvblJlbW92ZTogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25VcGRhdGVRdWFudGl0eTogKGlkOiBzdHJpbmcsIHF0eTogbnVtYmVyKSA9PiB2b2lkXG4gIHdpc2hsaXN0OiBTZXQ8c3RyaW5nPlxuICBvblRvZ2dsZVdpc2hsaXN0OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICBvbkFkZFRvQ2FydDogKGl0ZW06IENhcnRJdGVtSW5wdXQpID0+IHZvaWRcbn1cblxuY29uc3QgRlJFRV9TSElQUElOR19USFJFU0hPTEQgPSA3NVxuY29uc3QgU0hJUFBJTkdfRkVFID0gOS45OVxuY29uc3QgVEFYX1JBVEUgPSAwLjA4XG5cbmZ1bmN0aW9uIFRyYXNoSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xOSA3bC0uODY3IDEyLjE0MkEyIDIgMCAwMTE2LjEzOCAyMUg3Ljg2MmEyIDIgMCAwMS0xLjk5NS0xLjg1OEw1IDdtNSA0djZtNC02djZtMS0xMFY0YTEgMSAwIDAwLTEtMWgtNGExIDEgMCAwMC0xIDF2M000IDdoMTZcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRQYWdlQ29udGVudCh7IGl0ZW1zLCBvbk5hdmlnYXRlLCBvblJlbW92ZSwgb25VcGRhdGVRdWFudGl0eSwgd2lzaGxpc3QsIG9uVG9nZ2xlV2lzaGxpc3QsIG9uQWRkVG9DYXJ0IH06IFByb3BzKSB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZUNhdGFsb2coKVxuICBjb25zdCBbY291cG9uLCBzZXRDb3Vwb25dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb3Vwb25BcHBsaWVkLCBzZXRDb3Vwb25BcHBsaWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY291cG9uRXJyb3IsIHNldENvdXBvbkVycm9yXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHN1YnRvdGFsICAgPSBpdGVtcy5yZWR1Y2UoKHMsIGkpID0+IHMgKyBpLnByaWNlICogaS5xdWFudGl0eSwgMClcbiAgY29uc3Qgc2hpcHBpbmcgICA9IHN1YnRvdGFsID49IEZSRUVfU0hJUFBJTkdfVEhSRVNIT0xEID8gMCA6IGl0ZW1zLmxlbmd0aCA+IDAgPyBTSElQUElOR19GRUUgOiAwXG4gIGNvbnN0IGRpc2NvdW50ICAgPSBjb3Vwb25BcHBsaWVkID8gc3VidG90YWwgKiAwLjEgOiAwXG4gIGNvbnN0IHRheCAgICAgICAgPSAoc3VidG90YWwgLSBkaXNjb3VudCkgKiBUQVhfUkFURVxuICBjb25zdCB0b3RhbCAgICAgID0gc3VidG90YWwgLSBkaXNjb3VudCArIHNoaXBwaW5nICsgdGF4XG4gIGNvbnN0IHJlbWFpbmluZyAgPSBNYXRoLm1heCgwLCBGUkVFX1NISVBQSU5HX1RIUkVTSE9MRCAtIHN1YnRvdGFsKVxuICBjb25zdCBmcmVlU2hpcFBjdCA9IE1hdGgubWluKDEwMCwgKHN1YnRvdGFsIC8gRlJFRV9TSElQUElOR19USFJFU0hPTEQpICogMTAwKVxuXG4gIGNvbnN0IHZlbmRvckdyb3VwcyA9IHVzZU1lbW8oKCkgPT5cbiAgICBpdGVtcy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgQ2FydEl0ZW1bXT4+KChhY2MsIGl0ZW0pID0+IHtcbiAgICAgIGlmICghYWNjW2l0ZW0udmVuZG9yXSkgYWNjW2l0ZW0udmVuZG9yXSA9IFtdXG4gICAgICBhY2NbaXRlbS52ZW5kb3JdLnB1c2goaXRlbSlcbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCB7fSksXG4gIFtpdGVtc10pXG5cbiAgY29uc3QgcmVjb21tZW5kZWQgPSB1c2VNZW1vKCgpID0+XG4gICAgcHJvZHVjdHMuZmlsdGVyKHAgPT4gIWl0ZW1zLnNvbWUoaSA9PiBpLmlkID09PSBwLmlkKSkuc2xpY2UoMCwgNCksXG4gIFtwcm9kdWN0cywgaXRlbXNdKVxuXG4gIGNvbnN0IGhhbmRsZUFwcGx5Q291cG9uID0gKCkgPT4ge1xuICAgIGlmIChjb3Vwb24udHJpbSgpLnRvVXBwZXJDYXNlKCkgPT09ICdORVhVUzEwJykge1xuICAgICAgc2V0Q291cG9uQXBwbGllZCh0cnVlKVxuICAgICAgc2V0Q291cG9uRXJyb3IoJycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENvdXBvbkVycm9yKCdJbnZhbGlkIGNvdXBvbiBjb2RlLiBUcnkgTkVYVVMxMC4nKVxuICAgICAgc2V0Q291cG9uQXBwbGllZChmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvLyDilIDilIAgRW1wdHkgQ2FydCBTdGF0ZSDilIDilIBcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjlGOEY1XSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTI4MHB4XSBteC1hdXRvIHB4LTYgcHktOFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LVsjOUNBM0FGXSBtYi04XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAnaG9tZScgfSl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCI+SG9tZTwvYnV0dG9uPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOSA1bDcgNy03IDdcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBFMEUwRV0gZm9udC1tZWRpdW1cIj5DYXJ0PC9zcGFuPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IG14LWF1dG8gbWItNiByb3VuZGVkLTN4bCBiZy1bI0YzRjJFRl0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgdGV4dC1bIzlDQTNBRl1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17MS41fT5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0zIDNoMmwuNCAyTTcgMTNoMTBsNC04SDUuNE03IDEzTDUuNCA1TTcgMTNsLTIuMjkzIDIuMjkzYy0uNjMuNjMtLjE4NCAxLjcwNy43MDcgMS43MDdIMTdtMCAwYTIgMiAwIDEwMCA0IDIgMiAwIDAwMC00em0tOCAyYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV0gbWItMlwiPllvdXIgY2FydCBpcyBlbXB0eTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QTY2XSBtYi04XCI+TG9va3MgbGlrZSB5b3UgaGF2ZW4mYXBvczt0IGFkZGVkIGFueXRoaW5nIHlldC4gRXhwbG9yZSB0aG91c2FuZHMgb2YgcHJvZHVjdHMhPC9wPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2hvbWUnIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTMuNSBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGludWUgU2hvcHBpbmdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZWNvbW1lbmRlZC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVsjOUNBM0FGXSBtYi01XCI+UmVjb21tZW5kZWQgRm9yIFlvdTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICAgICAge3JlY29tbWVuZGVkLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3AuaWR9IHByb2R1Y3Q9e3B9XG4gICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0ZWQ9e3dpc2hsaXN0LmhhcyhwLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVXaXNobGlzdD17b25Ub2dnbGVXaXNobGlzdH1cbiAgICAgICAgICAgICAgICAgICAgb25BZGRUb0NhcnQ9e29uQWRkVG9DYXJ0fVxuICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtpZCA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ3Byb2R1Y3QnLCBpZCB9KX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbXBhY3RcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y5RjhGNV0gbWluLWgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNiBweS04XCI+XG5cbiAgICAgICAgey8qIEJyZWFkY3J1bWIgKi99XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LVsjOUNBM0FGXSBtYi02XCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2hvbWUnIH0pfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiPkhvbWU8L2J1dHRvbj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTNcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk05IDVsNyA3LTcgN1wiIC8+PC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBFMEUwRV0gZm9udC1tZWRpdW1cIj5DYXJ0PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM5Q0EzQUZdIG1sLTFcIj4oe2l0ZW1zLnJlZHVjZSgocywgaSkgPT4gcyArIGkucXVhbnRpdHksIDApfSBpdGVtcyk8L3NwYW4+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIHsvKiBGcmVlIFNoaXBwaW5nIFByb2dyZXNzIEJhbm5lciAqL31cbiAgICAgICAge3JlbWFpbmluZyA+IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBweC01IHB5LTQgbWItNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjMEUwRTBFXVwiPlxuICAgICAgICAgICAgICAgIEFkZCA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bI0U4NDUwQV1cIj4ke3JlbWFpbmluZy50b0ZpeGVkKDIpfTwvc3Bhbj4gbW9yZSB0byB1bmxvY2t7JyAnfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjMDU5NjY5XVwiPkZSRUUgRGVsaXZlcnk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGgtMiByb3VuZGVkLWZ1bGwgYmctWyNGM0YyRUZdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHJvdW5kZWQtZnVsbCBiZy1bI0U4NDUwQV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCIgc3R5bGU9e3sgd2lkdGg6IGAke2ZyZWVTaGlwUGN0fSVgIH19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0xMCBoLTEwIHJvdW5kZWQteGwgYmctWyNGRkY3RjVdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LVsjRTg0NTBBXVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk01IDhoMTRNNSA4YTIgMiAwIDExMC00aDE0YTIgMiAwIDExMCA0TTUgOGwxLjUgOWgxMUwxOSA4TTEwIDEyaDRcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGMEZERjRdIGJvcmRlciBib3JkZXItWyNCQkY3RDBdIHJvdW5kZWQtMnhsIHB4LTUgcHktMyBtYi02IGZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1bIzA1OTY2OV0gZmxleC1zaHJpbmstMFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyLjV9PlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk01IDEzbDQgNEwxOSA3XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwNTk2NjldXCI+8J+OiSBZb3UgdW5sb2NrZWQgRlJFRSBkZWxpdmVyeSBvbiB0aGlzIG9yZGVyITwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLVsxZnJfMzgwcHhdIGdhcC04XCI+XG5cbiAgICAgICAgICB7Lyog4pSA4pSAIExFRlQ6IENhcnQgSXRlbXMg4pSA4pSAICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModmVuZG9yR3JvdXBzKS5tYXAoKFt2ZW5kb3JOYW1lLCBncm91cEl0ZW1zXSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17dmVuZG9yTmFtZX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgey8qIFZlbmRvciBIZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLVsjRThFN0UyXSBiZy1bI0Y5RjhGNV1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWxnIGJnLVsjRTg0NTBBXS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1bI0U4NDUwQV1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTkgMjFWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTZtMTQgMGgybS0yIDBoLTVtLTkgMEgzbTIgMGg1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPnt2ZW5kb3JOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtncm91cEl0ZW1zLnJlZHVjZSgocywgaSkgPT4gcyArIGkucXVhbnRpdHksIDApfSBpdGVtcyDCtyBFc3QuIGRlbGl2ZXJ5IGluIDLigJM0IGRheXNcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzA1OTY2OV0gYmctWyNGMEZERjRdIHB4LTIuNSBweS0xIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLVsjQkJGN0QwXVwiPlxuICAgICAgICAgICAgICAgICAgICDinJMgVmVyaWZpZWRcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBDYXJ0IEl0ZW1zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRThFN0UyXVwiPlxuICAgICAgICAgICAgICAgICAge2dyb3VwSXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7aXRlbS5pZH0tJHtpdGVtLnZhcmlhbnR9YH0gY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdwcm9kdWN0JywgaWQ6IGl0ZW0uaWQgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctMjQgaC0yNCByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1bI0Y5RjhGNV0gYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLW9wYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZXRhaWxzICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdwcm9kdWN0JywgaWQ6IGl0ZW0uaWQgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSBsaW5lLWNsYW1wLTIgbGVhZGluZy1zbnVnIGhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YXJpYW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUNBM0FGXSBtdC0wLjVcIj57aXRlbS52YXJpYW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG10LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzA1OTY2OV0gYmctWyNGMEZERjRdIHB4LTEuNSBweS0wLjUgcm91bmRlZFwiPkluIFN0b2NrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5vcmlnaW5hbFByaWNlID4gaXRlbS5wcmljZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUNBM0FGXSBsaW5lLXRocm91Z2ggZm9udC1tb25vXCI+JHtpdGVtLm9yaWdpbmFsUHJpY2UudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMyBmbGV4LXdyYXAgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFF0eSBDb250cm9scyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlUXVhbnRpdHkoaXRlbS5pZCwgaXRlbS5xdWFudGl0eSAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy05IGgtOSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1bI0YzRjJFRl0gdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1bIzBFMEUwRV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0yMCAxMkg0XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEwIHRleHQtY2VudGVyIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSB0YWJ1bGFyLW51bXNcIj57aXRlbS5xdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25VcGRhdGVRdWFudGl0eShpdGVtLmlkLCBpdGVtLnF1YW50aXR5ICsgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTkgaC05IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLVsjRjNGMkVGXSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LVsjMEUwRTBFXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyLjV9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDR2MTZtOC04SDRcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTGluZSBUb3RhbCArIFJlbW92ZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1iYXNlIHRleHQtWyMwRTBFMEVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SZW1vdmUoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjOUNBM0FGXSBob3Zlcjp0ZXh0LVsjRTExRDQ4XSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICB7LyogQ29udGludWUgU2hvcHBpbmcgKi99XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAnaG9tZScgfSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1bIzZCNkE2Nl0gaG92ZXI6dGV4dC1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTUgMTlsLTctNyA3LTdcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICBDb250aW51ZSBTaG9wcGluZ1xuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIHsvKiBSZWNvbW1lbmRlZCAqL31cbiAgICAgICAgICAgIHtyZWNvbW1lbmRlZC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVsjOUNBM0FGXSBtYi00XCI+WW91IE1heSBBbHNvIExpa2U8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICB7cmVjb21tZW5kZWQubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3AuaWR9IHByb2R1Y3Q9e3B9IHZhcmlhbnQ9XCJjb21wYWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aXNobGlzdGVkPXt3aXNobGlzdC5oYXMocC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVXaXNobGlzdD17b25Ub2dnbGVXaXNobGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZFRvQ2FydD17b25BZGRUb0NhcnR9XG4gICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17aWQgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdwcm9kdWN0JywgaWQgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIOKUgOKUgCBSSUdIVDogT3JkZXIgU3VtbWFyeSDilIDilIAgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIHsvKiBDb3Vwb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gbWItM1wiPlByb21vIENvZGU8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdXBvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgc2V0Q291cG9uKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpOyBzZXRDb3Vwb25FcnJvcignJyk7IHNldENvdXBvbkFwcGxpZWQoZmFsc2UpIH19XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGNvZGUgKHRyeSBORVhVUzEwKVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgaC0xMCBweC0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gdGV4dC1zbSB0ZXh0LVsjMEUwRTBFXSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSBwbGFjZWhvbGRlcjp0ZXh0LVsjOUNBM0FGXVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBcHBseUNvdXBvbn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgaC0xMCByb3VuZGVkLXhsIGJnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFwcGx5XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7Y291cG9uQXBwbGllZCAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjMDU5NjY5XSBmb250LXNlbWlib2xkIG10LTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk01IDEzbDQgNEwxOSA3XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgIE5FWFVTMTAgYXBwbGllZCDigJQgMTAlIG9mZiFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtjb3Vwb25FcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNFMTFENDhdIG10LTJcIj57Y291cG9uRXJyb3J9PC9wPn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU3VtbWFyeSBDYXJkICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTUgc3RpY2t5IHRvcC0yNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi01XCI+T3JkZXIgU3VtbWFyeTwvaDI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM2QjZBNjZdXCI+U3VidG90YWwgKHtpdGVtcy5yZWR1Y2UoKHMsIGkpID0+IHMgKyBpLnF1YW50aXR5LCAwKX0gaXRlbXMpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj4ke3N1YnRvdGFsLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb3Vwb25BcHBsaWVkICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bIzA1OTY2OV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTcgN2guMDFNNyAzaDVjLjUxMiAwIDEuMDI0LjE5NSAxLjQxNC41ODZsNyA3YTIgMiAwIDAxMCAyLjgyOGwtNyA3YTIgMiAwIDAxLTIuODI4IDBsLTctN0EyIDIgMCAwMTMgMTJWN2E0IDQgMCAwMTQtNHpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIFByb21vIE5FWFVTMTBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1zZW1pYm9sZFwiPi0ke2Rpc2NvdW50LnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QTY2XVwiPlNoaXBwaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgJHtzaGlwcGluZyA9PT0gMCA/ICd0ZXh0LVsjMDU5NjY5XScgOiAndGV4dC1bIzBFMEUwRV0nfWB9PlxuICAgICAgICAgICAgICAgICAgICB7c2hpcHBpbmcgPT09IDAgPyAnRlJFRScgOiBgJCR7c2hpcHBpbmcudG9GaXhlZCgyKX1gfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM2QjZBNjZdXCI+RXN0LiBUYXggKDglKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+JHt0YXgudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLVsjRThFN0UyXSBtdC00IHB0LTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzBFMEUwRV1cIj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQteGwgdGV4dC1bIzBFMEUwRV1cIj4ke3RvdGFsLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdjaGVja291dCcgfSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNSB3LWZ1bGwgcHktNCByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWJhc2UgaG92ZXI6YmctWyNDOTNBMDddIGFjdGl2ZTpzY2FsZS1bMC45OF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwIHNoYWRvdy1sZyBzaGFkb3ctWyNFODQ1MEFdLzIwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFByb2NlZWQgdG8gQ2hlY2tvdXQg4oaSXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIHsvKiBUcnVzdCBiYWRnZXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIHtbJ1NTTCcsICdWSVNBJywgJ01DJywgJ0FNRVgnXS5tYXAoYiA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Yn0gY2xhc3NOYW1lPVwicHgtMi41IHB5LTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1bIzZCNkE2Nl1cIj57Yn08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHMgdGV4dC1bIzlDQTNBRl0gbXQtM1wiPlxuICAgICAgICAgICAgICAgIPCflJIgU2VjdXJlIGNoZWNrb3V0IMK3IDMwLWRheSByZXR1cm5zXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgdHlwZSB7IFZpZXcgfSBmcm9tICcuLi9hcHAvbmF2aWdhdGlvbidcbmltcG9ydCB0eXBlIHsgQ2FydEl0ZW0sIENhcnRJdGVtSW5wdXQgfSBmcm9tICcuLi9zdGF0ZS9tYXJrZXRwbGFjZS1zdG9yZSdcbmltcG9ydCBDYXJ0UGFnZUNvbnRlbnQgZnJvbSAnLi9jYXJ0L0NhcnRQYWdlQ29udGVudCdcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbXM6IENhcnRJdGVtW11cbiAgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWRcbiAgb25SZW1vdmU6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uVXBkYXRlUXVhbnRpdHk6IChpZDogc3RyaW5nLCBxdHk6IG51bWJlcikgPT4gdm9pZFxuICB3aXNobGlzdDogU2V0PHN0cmluZz5cbiAgb25Ub2dnbGVXaXNobGlzdDogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BZGRUb0NhcnQ6IChpdGVtOiBDYXJ0SXRlbUlucHV0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRQYWdlKHByb3BzOiBQcm9wcykge1xuICByZXR1cm4gPENhcnRQYWdlQ29udGVudCB7Li4ucHJvcHN9IC8+XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBZ0JBLElBQU0sMEJBQTBCO0FBQ2hDLElBQU0sZUFBZTtBQUNyQixJQUFNLFdBQVc7QUFFakIsU0FBUyxZQUFZO0NBQ25CLE9BQ0UsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsT0FBRDtFQUFLLFdBQVU7RUFBVSxNQUFLO0VBQU8sU0FBUTtFQUFZLFFBQU87RUFBZSxhQUFhO0VBQzFGLFVBQUEsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsUUFBRDtHQUFNLGVBQWM7R0FBUSxnQkFBZTtHQUFRLEdBQUU7RUFBZ0ksQ0FBQTtDQUNsTCxDQUFBO0FBRVQ7QUFFQSxTQUF3QixnQkFB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