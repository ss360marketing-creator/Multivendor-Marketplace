import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
import { a as couponData } from "./adminData-rxTk4z3f.js";
//#region src/admin/pages/MarketingAdmin.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"Campaigns",
	"Flash Sales",
	"Coupons",
	"Discounts",
	"Push Notifications"
];
var STATUS_CLS = {
	active: "bg-[#D1FAE5] text-[#065F46]",
	expired: "bg-[#F4F4F8] text-[#9B9BB8]",
	scheduled: "bg-[#EEF2FF] text-[#4338CA]",
	draft: "bg-[#FEF3C7] text-[#92400E]"
};
var campaigns = [
	{
		name: "Summer Sale 2025",
		type: "Percentage",
		discount: "25%",
		target: "All Customers",
		products: 284,
		start: "Jul 1",
		end: "Jul 31",
		status: "active",
		revenue: "$142,800",
		clicks: 48200
	},
	{
		name: "Tech Week",
		type: "Category",
		discount: "30%",
		target: "Electronics",
		products: 142,
		start: "Jul 14",
		end: "Jul 20",
		status: "expired",
		revenue: "$84,200",
		clicks: 28400
	},
	{
		name: "Back to School",
		type: "Percentage",
		discount: "20%",
		target: "Students",
		products: 380,
		start: "Aug 1",
		end: "Sep 15",
		status: "scheduled",
		revenue: "—",
		clicks: 0
	}
];
var flashSales = [
	{
		name: "Flash Friday",
		start: "Jul 25 18:00",
		end: "Jul 25 22:00",
		products: 12,
		discount: "50%",
		status: "active",
		stock: 84
	},
	{
		name: "Weekend Flash",
		start: "Jul 26 10:00",
		end: "Jul 27 22:00",
		products: 24,
		discount: "40%",
		status: "scheduled",
		stock: 200
	},
	{
		name: "Beauty Blitz",
		start: "Jul 20 12:00",
		end: "Jul 20 16:00",
		products: 8,
		discount: "35%",
		status: "expired",
		stock: 0
	}
];
function MarketingAdmin({ onNavigate: _ }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("Campaigns");
	const [showNewCoupon, setShowNewCoupon] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Marketing Center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Campaigns, promotions, and growth tools"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex items-center gap-2 px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2.5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M12 4v16m8-8H4"
						})
					}), "Create Campaign"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-4",
				children: [
					{
						label: "Active Campaigns",
						value: "3",
						color: "text-[#059669]"
					},
					{
						label: "Coupons Issued",
						value: "13,842",
						color: "text-[#6366F1]"
					},
					{
						label: "Revenue from Promos",
						value: "$84,200",
						color: "text-[#E8450A]"
					},
					{
						label: "Avg Discount",
						value: "24.8%",
						color: "text-[#D97706]"
					}
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
						children: k.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `font-mono font-black text-2xl mt-1 ${k.color}`,
						children: k.value
					})]
				}, k.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 border-b border-[#E2E2EC] overflow-x-auto scroll-container",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(t),
					className: `flex-shrink-0 px-4 py-3 text-sm font-semibold border-b-2 transition-all -mb-px ${activeTab === t ? "border-[#E8450A] text-[#E8450A]" : "border-transparent text-[#9B9BB8] hover:text-[#6B6B82]"}`,
					children: t
				}, t))
			}),
			activeTab === "Campaigns" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
						children: [
							"Campaign",
							"Type",
							"Discount",
							"Products",
							"Duration",
							"Status",
							"Revenue",
							"Actions"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: h
						}, h))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-[#F4F4F8]",
						children: campaigns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-[#F9F9FC] transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-[#111118]",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#9B9BB8]",
										children: c.target
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs bg-[#EEF2FF] text-[#4338CA] px-2 py-0.5 rounded-full font-semibold",
										children: c.type
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-[#E11D48] text-sm",
										children: c.discount
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[#111118]",
										children: c.products
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#111118]",
										children: [
											c.start,
											" – ",
											c.end
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_CLS[c.status]}`,
										children: c.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono font-semibold text-[#111118]",
										children: c.revenue
									}), c.clicks > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-[#9B9BB8]",
										children: [c.clicks.toLocaleString(), " clicks"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3.5 h-3.5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
												})
											})
										}), c.status !== "expired" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#E11D48]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3.5 h-3.5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
												})
											})
										})]
									})
								})
							]
						}, c.name))
					})]
				})
			}),
			activeTab === "Flash Sales" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4",
					children: [flashSales.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `bg-white rounded-xl border-2 p-5 space-y-4 ${f.status === "active" ? "border-[#E11D48]" : "border-[#E2E2EC]"}`,
						children: [
							f.status === "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-[#E11D48] uppercase tracking-wide",
									children: "Live Now"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-[#111118]",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-[#9B9BB8] mt-0.5",
								children: [
									f.start,
									" → ",
									f.end
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono font-black text-lg text-[#E11D48]",
											children: f.discount
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-[#9B9BB8]",
											children: "Discount"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono font-black text-lg text-[#111118]",
											children: f.products
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-[#9B9BB8]",
											children: "Products"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono font-black text-lg text-[#111118]",
											children: f.stock
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-[#9B9BB8]",
											children: "Stock"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "flex-1 py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
									children: "Edit"
								}), f.status === "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "flex-1 py-2 bg-[#FEE2E2] text-[#E11D48] rounded-lg text-xs font-semibold hover:bg-[#FECACA]",
									children: "End Sale"
								})]
							})
						]
					}, f.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "bg-white rounded-xl border-2 border-dashed border-[#E2E2EC] p-5 flex flex-col items-center justify-center gap-3 hover:border-[#E8450A] hover:text-[#E8450A] transition-all text-[#9B9BB8] group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-xl bg-[#F4F4F8] group-hover:bg-[#FFF7F5] flex items-center justify-center transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-6 h-6",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M12 4v16m8-8H4"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Create Flash Sale"
						})]
					})]
				})
			}),
			activeTab === "Coupons" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowNewCoupon(!showNewCoupon),
							className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]",
							children: "+ New Coupon"
						})
					}),
					showNewCoupon && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border-2 border-[#E8450A] p-6 fade-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-[#111118] mb-4",
								children: "Create New Coupon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-[#6B6B82]",
											children: "Coupon Code"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											placeholder: "e.g. SAVE20",
											className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] font-mono uppercase"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-[#6B6B82]",
											children: "Type"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Percentage" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Fixed Amount" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Free Shipping" })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-[#6B6B82]",
											children: "Value (%)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											placeholder: "20",
											className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-[#6B6B82]",
											children: "Expiry"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-[#6B6B82]",
											children: "Min Order ($)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											placeholder: "50",
											className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-[#6B6B82]",
											children: "Usage Limit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											placeholder: "1000",
											className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-5 py-2 bg-[#E8450A] text-white rounded-lg text-sm font-semibold",
									children: "Create Coupon"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setShowNewCoupon(false),
									className: "px-5 py-2 border border-[#E2E2EC] text-[#6B6B82] rounded-lg text-sm font-semibold",
									children: "Cancel"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
								children: [
									"Code",
									"Type",
									"Value",
									"Used",
									"Limit",
									"Expires",
									"Status",
									"Actions"
								].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
									children: h
								}, h))
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-[#F4F4F8]",
								children: couponData.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-[#F9F9FC] transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-bold text-[#E8450A] bg-[#FFF7F5] px-2.5 py-1 rounded-lg text-xs",
												children: c.code
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#6B6B82]",
												children: c.type
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-bold text-[#E11D48]",
												children: c.type === "Percentage" ? `${c.value}%` : c.type === "Fixed Amount" ? `$${c.value}` : "Free"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-sm text-[#111118]",
												children: c.used.toLocaleString()
											}), c.limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-20 h-1 bg-[#F4F4F8] rounded-full mt-1 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full bg-[#E8450A] rounded-full",
													style: { width: `${Math.min(100, c.used / c.limit * 100)}%` }
												})
											})] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-xs text-[#6B6B82]",
												children: c.limit ? c.limit.toLocaleString() : "∞"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#6B6B82]",
												children: c.expires
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_CLS[c.status]}`,
												children: c.status
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														className: "w-3.5 h-3.5",
														fill: "none",
														viewBox: "0 0 24 24",
														stroke: "currentColor",
														strokeWidth: 2,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
														})
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "w-7 h-7 rounded-lg hover:bg-[#FEE2E2] flex items-center justify-center text-[#9B9BB8] hover:text-[#E11D48]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														className: "w-3.5 h-3.5",
														fill: "none",
														viewBox: "0 0 24 24",
														stroke: "currentColor",
														strokeWidth: 2,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
														})
													})
												})]
											})
										})
									]
								}, c.code))
							})]
						})
					})
				]
			}),
			activeTab === "Discounts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Automatic Discounts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mt-0.5",
							children: "Rules applied automatically at checkout — no code required"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]",
							children: "+ New Rule"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
							children: [
								"Rule Name",
								"Trigger",
								"Discount",
								"Applies To",
								"Usage",
								"Status",
								""
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: [
								{
									name: "Buy 2 Get 10% Off",
									trigger: "Min qty: 2",
									discount: "10%",
									applies: "All Products",
									usage: 1284,
									status: "active"
								},
								{
									name: "Spend $200 Save $20",
									trigger: "Min spend: $200",
									discount: "$20 off",
									applies: "All Products",
									usage: 842,
									status: "active"
								},
								{
									name: "New User 15% Off",
									trigger: "First order",
									discount: "15%",
									applies: "All Products",
									usage: 3241,
									status: "active"
								},
								{
									name: "Bundle: Electronics",
									trigger: "3+ electronics",
									discount: "12%",
									applies: "Electronics",
									usage: 284,
									status: "paused"
								},
								{
									name: "Free Shipping $75+",
									trigger: "Min spend: $75",
									discount: "Free Shipping",
									applies: "All",
									usage: 8421,
									status: "active"
								}
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-[#F9F9FC] transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-semibold text-[#111118]",
										children: r.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-xs text-[#6B6B82]",
										children: r.trigger
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono font-bold text-[#E11D48]",
										children: r.discount
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-xs text-[#6B6B82]",
										children: r.applies
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono text-sm text-[#111118]",
										children: r.usage.toLocaleString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${r.status === "active" ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#F4F4F8] text-[#9B9BB8]"}`,
											children: r.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "w-7 h-7 rounded-lg hover:bg-[#FEE2E2] flex items-center justify-center text-[#9B9BB8] hover:text-[#E11D48]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													})
												})
											})]
										})
									})
								]
							}, r.name))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Volume / Tiered Pricing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mt-0.5",
							children: "Discounts that scale with quantity purchased"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
							children: "+ Add Tier"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-3",
						children: [
							{
								tier: "Tier 1",
								qty: "2–4 items",
								discount: "5%",
								orders: 2841
							},
							{
								tier: "Tier 2",
								qty: "5–9 items",
								discount: "10%",
								orders: 1284
							},
							{
								tier: "Tier 3",
								qty: "10–24 items",
								discount: "18%",
								orders: 482
							},
							{
								tier: "Tier 4",
								qty: "25+ items",
								discount: "25%",
								orders: 124
							}
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#F9F9FC] rounded-xl p-4 border border-[#F4F4F8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-[#9B9BB8] uppercase tracking-wide",
									children: t.tier
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono font-black text-xl text-[#E11D48] mt-1",
									children: t.discount
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#6B6B82] mt-1",
									children: t.qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#9B9BB8] mt-2",
									children: [t.orders.toLocaleString(), " orders"]
								})
							]
						}, t.tier))
					})]
				})]
			}),
			activeTab === "Push Notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-4",
					children: [
						{
							label: "Subscribers",
							value: "84,200",
							delta: "+1,284 this week"
						},
						{
							label: "Avg Open Rate",
							value: "18.4%",
							delta: "Industry avg: 12%"
						},
						{
							label: "Notifications Sent",
							value: "248K",
							delta: "Last 30 days"
						},
						{
							label: "Conversion Rate",
							value: "4.2%",
							delta: "+0.8% MoM"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono font-black text-2xl text-[#111118] mt-1",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#059669] mt-1",
								children: s.delta
							})
						]
					}, s.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-[#111118]",
								children: "Compose Notification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-[#6B6B82]",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "🔥 Flash Sale starts NOW!",
									className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-[#6B6B82]",
									children: "Body"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 3,
									placeholder: "Up to 50% off electronics for the next 4 hours only. Don't miss out!",
									className: "w-full px-3 py-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] resize-none placeholder:text-[#C8C8E0]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Target Segment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All Subscribers" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "VIP Customers" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Inactive 30 Days" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cart Abandoned" })
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Schedule"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Send Now" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Schedule for Later" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Optimal Send Time" })
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-[#6B6B82]",
									children: "CTA Link"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "/category/electronics",
									className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "flex-1 py-2.5 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
									children: "Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "flex-1 py-2.5 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]",
									children: "Send Notification"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 py-4 border-b border-[#F4F4F8]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-[#111118]",
								children: "Recent Campaigns"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y divide-[#F4F4F8]",
							children: [
								{
									title: "🔥 Flash Friday Sale",
									sent: "84,200",
									opened: "18.2%",
									clicked: "5.4%",
									time: "Jul 25 · 6:00 PM"
								},
								{
									title: "🎁 Exclusive: VIP Early Access",
									sent: "12,400",
									opened: "24.8%",
									clicked: "9.2%",
									time: "Jul 22 · 10:00 AM"
								},
								{
									title: "📦 Your order shipped!",
									sent: "3,241",
									opened: "48.4%",
									clicked: "22.1%",
									time: "Jul 20 · Auto"
								},
								{
									title: "💸 You left items in your cart",
									sent: "8,420",
									opened: "28.4%",
									clicked: "12.8%",
									time: "Jul 18 · Auto"
								}
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-[#111118]",
										children: n.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-[#9B9BB8] ml-3 flex-shrink-0",
										children: n.time
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-[#6B6B82]",
											children: ["Sent: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-semibold text-[#111118]",
												children: n.sent
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-[#6B6B82]",
											children: ["Open: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-semibold text-[#059669]",
												children: n.opened
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-[#6B6B82]",
											children: ["Click: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-semibold text-[#E8450A]",
												children: n.clicked
											})]
										})
									]
								})]
							}, n.title))
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { MarketingAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFya2V0aW5nQWRtaW4tQnRra1VnV1IuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL01hcmtldGluZ0FkbWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY291cG9uRGF0YSB9IGZyb20gJy4uL2FkbWluRGF0YSdcbmltcG9ydCB0eXBlIHsgQWRtaW5TZWN0aW9uIH0gZnJvbSAnLi4vYWRtaW5EYXRhJ1xuXG50eXBlIFByb3BzID0geyBvbk5hdmlnYXRlOiAoczogQWRtaW5TZWN0aW9uKSA9PiB2b2lkIH1cblxuY29uc3QgdGFicyA9IFsnQ2FtcGFpZ25zJywgJ0ZsYXNoIFNhbGVzJywgJ0NvdXBvbnMnLCAnRGlzY291bnRzJywgJ1B1c2ggTm90aWZpY2F0aW9ucyddXG5cbmNvbnN0IFNUQVRVU19DTFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGFjdGl2ZTogJ2JnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XScsXG4gIGV4cGlyZWQ6ICdiZy1bI0Y0RjRGOF0gdGV4dC1bIzlCOUJCOF0nLFxuICBzY2hlZHVsZWQ6ICdiZy1bI0VFRjJGRl0gdGV4dC1bIzQzMzhDQV0nLFxuICBkcmFmdDogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXScsXG59XG5cbmNvbnN0IGNhbXBhaWducyA9IFtcbiAgeyBuYW1lOiAnU3VtbWVyIFNhbGUgMjAyNScsIHR5cGU6ICdQZXJjZW50YWdlJywgZGlzY291bnQ6ICcyNSUnLCB0YXJnZXQ6ICdBbGwgQ3VzdG9tZXJzJywgcHJvZHVjdHM6IDI4NCwgc3RhcnQ6ICdKdWwgMScsIGVuZDogJ0p1bCAzMScsIHN0YXR1czogJ2FjdGl2ZScsIHJldmVudWU6ICckMTQyLDgwMCcsIGNsaWNrczogNDgyMDAgfSxcbiAgeyBuYW1lOiAnVGVjaCBXZWVrJywgdHlwZTogJ0NhdGVnb3J5JywgZGlzY291bnQ6ICczMCUnLCB0YXJnZXQ6ICdFbGVjdHJvbmljcycsIHByb2R1Y3RzOiAxNDIsIHN0YXJ0OiAnSnVsIDE0JywgZW5kOiAnSnVsIDIwJywgc3RhdHVzOiAnZXhwaXJlZCcsIHJldmVudWU6ICckODQsMjAwJywgY2xpY2tzOiAyODQwMCB9LFxuICB7IG5hbWU6ICdCYWNrIHRvIFNjaG9vbCcsIHR5cGU6ICdQZXJjZW50YWdlJywgZGlzY291bnQ6ICcyMCUnLCB0YXJnZXQ6ICdTdHVkZW50cycsIHByb2R1Y3RzOiAzODAsIHN0YXJ0OiAnQXVnIDEnLCBlbmQ6ICdTZXAgMTUnLCBzdGF0dXM6ICdzY2hlZHVsZWQnLCByZXZlbnVlOiAn4oCUJywgY2xpY2tzOiAwIH0sXG5dXG5cbmNvbnN0IGZsYXNoU2FsZXMgPSBbXG4gIHsgbmFtZTogJ0ZsYXNoIEZyaWRheScsIHN0YXJ0OiAnSnVsIDI1IDE4OjAwJywgZW5kOiAnSnVsIDI1IDIyOjAwJywgcHJvZHVjdHM6IDEyLCBkaXNjb3VudDogJzUwJScsIHN0YXR1czogJ2FjdGl2ZScsIHN0b2NrOiA4NCB9LFxuICB7IG5hbWU6ICdXZWVrZW5kIEZsYXNoJywgc3RhcnQ6ICdKdWwgMjYgMTA6MDAnLCBlbmQ6ICdKdWwgMjcgMjI6MDAnLCBwcm9kdWN0czogMjQsIGRpc2NvdW50OiAnNDAlJywgc3RhdHVzOiAnc2NoZWR1bGVkJywgc3RvY2s6IDIwMCB9LFxuICB7IG5hbWU6ICdCZWF1dHkgQmxpdHonLCBzdGFydDogJ0p1bCAyMCAxMjowMCcsIGVuZDogJ0p1bCAyMCAxNjowMCcsIHByb2R1Y3RzOiA4LCBkaXNjb3VudDogJzM1JScsIHN0YXR1czogJ2V4cGlyZWQnLCBzdG9jazogMCB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRpbmdBZG1pbih7IG9uTmF2aWdhdGU6IF8gfTogUHJvcHMpIHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdDYW1wYWlnbnMnKVxuICBjb25zdCBbc2hvd05ld0NvdXBvbiwgc2V0U2hvd05ld0NvdXBvbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNVwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPk1hcmtldGluZyBDZW50ZXI8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkI4Ml0gbXQtMC41XCI+Q2FtcGFpZ25zLCBwcm9tb3Rpb25zLCBhbmQgZ3Jvd3RoIHRvb2xzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNDOTNBMDddXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgNHYxNm04LThINFwiIC8+PC9zdmc+XG4gICAgICAgICAgQ3JlYXRlIENhbXBhaWduXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBLUElzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgIHtbXG4gICAgICAgICAgeyBsYWJlbDogJ0FjdGl2ZSBDYW1wYWlnbnMnLCB2YWx1ZTogJzMnLCBjb2xvcjogJ3RleHQtWyMwNTk2NjldJyB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdDb3Vwb25zIElzc3VlZCcsIHZhbHVlOiAnMTMsODQyJywgY29sb3I6ICd0ZXh0LVsjNjM2NkYxXScgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnUmV2ZW51ZSBmcm9tIFByb21vcycsIHZhbHVlOiAnJDg0LDIwMCcsIGNvbG9yOiAndGV4dC1bI0U4NDUwQV0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0F2ZyBEaXNjb3VudCcsIHZhbHVlOiAnMjQuOCUnLCBjb2xvcjogJ3RleHQtWyNEOTc3MDZdJyB9LFxuICAgICAgICBdLm1hcChrID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ay5sYWJlbH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBweC01IHB5LTRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntrLmxhYmVsfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtMnhsIG10LTEgJHtrLmNvbG9yfWB9PntrLnZhbHVlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFRhYnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGJvcmRlci1iIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3cteC1hdXRvIHNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAge3RhYnMubWFwKHQgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17dH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtc2hyaW5rLTAgcHgtNCBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCBib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIC1tYi1weCAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09IHQgPyAnYm9yZGVyLVsjRTg0NTBBXSB0ZXh0LVsjRTg0NTBBXScgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyM2QjZCODJdJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDYW1wYWlnbnMgdGFiICovfVxuICAgICAge2FjdGl2ZVRhYiA9PT0gJ0NhbXBhaWducycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1bI0Y5RjlGQ10gYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICAgIHtbJ0NhbXBhaWduJywgJ1R5cGUnLCAnRGlzY291bnQnLCAnUHJvZHVjdHMnLCAnRHVyYXRpb24nLCAnU3RhdHVzJywgJ1JldmVudWUnLCAnQWN0aW9ucyddLm1hcChoID0+IChcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC01IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e2h9PC90aD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICB7Y2FtcGFpZ25zLm1hcChjID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtjLm5hbWV9IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e2MubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57Yy50YXJnZXR9PC9wPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBiZy1bI0VFRjJGRl0gdGV4dC1bIzQzMzhDQV0gcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGRcIj57Yy50eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1bI0UxMUQ0OF0gdGV4dC1zbVwiPntjLmRpc2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsjMTExMTE4XVwiPntjLnByb2R1Y3RzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzExMTExOF1cIj57Yy5zdGFydH0g4oCTIHtjLmVuZH08L3A+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCAke1NUQVRVU19DTFNbYy5zdGF0dXNdfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57Yy5yZXZlbnVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAge2MuY2xpY2tzID4gMCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XVwiPntjLmNsaWNrcy50b0xvY2FsZVN0cmluZygpfSBjbGlja3M8L3A+fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWxnIGhvdmVyOmJnLVsjRjRGNEY4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjMTExMTE4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMSA1SDZhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDExYTIgMiAwIDAwMi0ydi01bS0xLjQxNC05LjQxNGEyIDIgMCAxMTIuODI4IDIuODI4TDExLjgyOCAxNUg5di0yLjgyOGw4LjU4Ni04LjU4NnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtjLnN0YXR1cyAhPT0gJ2V4cGlyZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWxnIGhvdmVyOmJnLVsjRjRGNEY4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjRTExRDQ4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE4LjM2NCAxOC4zNjRBOSA5IDAgMDA1LjYzNiA1LjYzNm0xMi43MjggMTIuNzI4QTkgOSAwIDAxNS42MzYgNS42MzZtMTIuNzI4IDEyLjcyOEw1LjYzNiA1LjYzNlwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIEZsYXNoIFNhbGVzIHRhYiAqL31cbiAgICAgIHthY3RpdmVUYWIgPT09ICdGbGFzaCBTYWxlcycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAge2ZsYXNoU2FsZXMubWFwKGYgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Zi5uYW1lfSBjbGFzc05hbWU9e2BiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlci0yIHAtNSBzcGFjZS15LTQgJHtmLnN0YXR1cyA9PT0gJ2FjdGl2ZScgPyAnYm9yZGVyLVsjRTExRDQ4XScgOiAnYm9yZGVyLVsjRTJFMkVDXSd9YH0+XG4gICAgICAgICAgICAgICAge2Yuc3RhdHVzID09PSAnYWN0aXZlJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctWyNFMTFENDhdIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LVsjRTExRDQ4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPkxpdmUgTm93PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntmLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF0gbXQtMC41XCI+e2Yuc3RhcnR9IOKGkiB7Zi5lbmR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LWxnIHRleHQtWyNFMTFENDhdXCI+e2YuZGlzY291bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjOUI5QkI4XVwiPkRpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtbGcgdGV4dC1bIzExMTExOF1cIj57Zi5wcm9kdWN0c308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyM5QjlCQjhdXCI+UHJvZHVjdHM8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYmxhY2sgdGV4dC1sZyB0ZXh0LVsjMTExMTE4XVwiPntmLnN0b2NrfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1bIzlCOUJCOF1cIj5TdG9jazwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0Y0RjRGOF1cIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICB7Zi5zdGF0dXMgPT09ICdhY3RpdmUnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiBiZy1bI0ZFRTJFMl0gdGV4dC1bI0UxMUQ0OF0gcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNGRUNBQ0FdXCI+RW5kIFNhbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHsvKiBOZXcgZmxhc2ggc2FsZSBjYXJkICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLVsjRTJFMkVDXSBwLTUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTMgaG92ZXI6Ym9yZGVyLVsjRTg0NTBBXSBob3Zlcjp0ZXh0LVsjRTg0NTBBXSB0cmFuc2l0aW9uLWFsbCB0ZXh0LVsjOUI5QkI4XSBncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLVsjRjRGNEY4XSBncm91cC1ob3ZlcjpiZy1bI0ZGRjdGNV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgNHYxNm04LThINFwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5DcmVhdGUgRmxhc2ggU2FsZTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBDb3Vwb25zIHRhYiAqL31cbiAgICAgIHthY3RpdmVUYWIgPT09ICdDb3Vwb25zJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXdDb3Vwb24oIXNob3dOZXdDb3Vwb24pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNDOTNBMDddXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKyBOZXcgQ291cG9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtzaG93TmV3Q291cG9uICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXItMiBib3JkZXItWyNFODQ1MEFdIHAtNiBmYWRlLWluXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIG1iLTRcIj5DcmVhdGUgTmV3IENvdXBvbjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5Db3Vwb24gQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJlLmcuIFNBVkUyMFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLTkgcHgtMyBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdIGZvbnQtbW9ubyB1cHBlcmNhc2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5UeXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UGVyY2VudGFnZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkZpeGVkIEFtb3VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkZyZWUgU2hpcHBpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5WYWx1ZSAoJSk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIjIwXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5FeHBpcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+TWluIE9yZGVyICgkKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiNTBcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPlVzYWdlIExpbWl0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCIxMDAwXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTUgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLWxnIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPkNyZWF0ZSBDb3Vwb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXdDb3Vwb24oZmFsc2UpfSBjbGFzc05hbWU9XCJweC01IHB5LTIgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gdGV4dC1bIzZCNkI4Ml0gcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctWyNGOUY5RkNdIGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgICAgIHtbJ0NvZGUnLCAnVHlwZScsICdWYWx1ZScsICdVc2VkJywgJ0xpbWl0JywgJ0V4cGlyZXMnLCAnU3RhdHVzJywgJ0FjdGlvbnMnXS5tYXAoaCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC01IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e2h9PC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge2NvdXBvbkRhdGEubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17Yy5jb2RlfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1bI0Y5RjlGQ10gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjRTg0NTBBXSBiZy1bI0ZGRjdGNV0gcHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzXCI+e2MuY29kZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj57Yy50eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjRTExRDQ4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2MudHlwZSA9PT0gJ1BlcmNlbnRhZ2UnID8gYCR7Yy52YWx1ZX0lYCA6IGMudHlwZSA9PT0gJ0ZpeGVkIEFtb3VudCcgPyBgJCR7Yy52YWx1ZX1gIDogJ0ZyZWUnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyMxMTExMThdXCI+e2MudXNlZC50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjLmxpbWl0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMSBiZy1bI0Y0RjRGOF0gcm91bmRlZC1mdWxsIG10LTEgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgYmctWyNFODQ1MEFdIHJvdW5kZWQtZnVsbFwiIHN0eWxlPXt7IHdpZHRoOiBgJHtNYXRoLm1pbigxMDAsIChjLnVzZWQgLyBjLmxpbWl0KSAqIDEwMCl9JWAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPntjLmxpbWl0ID8gYy5saW1pdC50b0xvY2FsZVN0cmluZygpIDogJ+KInid9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e2MuZXhwaXJlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkICR7U1RBVFVTX0NMU1tjLnN0YXR1c119YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Yy5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBob3ZlcjpiZy1bI0Y0RjRGOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzExMTExOF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMSA1SDZhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDExYTIgMiAwIDAwMi0ydi01bS0xLjQxNC05LjQxNGEyIDIgMCAxMTIuODI4IDIuODI4TDExLjgyOCAxNUg5di0yLjgyOGw4LjU4Ni04LjU4NnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBob3ZlcjpiZy1bI0ZFRTJFMl0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bI0UxMUQ0OF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xOSA3bC0uODY3IDEyLjE0MkEyIDIgMCAwMTE2LjEzOCAyMUg3Ljg2MmEyIDIgMCAwMS0xLjk5NS0xLjg1OEw1IDdtNSA0djZtNC02djZtMS0xMFY0YTEgMSAwIDAwLTEtMWgtNGExIDEgMCAwMC0xIDF2M000IDdoMTZcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7YWN0aXZlVGFiID09PSAnRGlzY291bnRzJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XG4gICAgICAgICAgey8qIEF1dG8tZGlzY291bnQgcnVsZXMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNSBweS00IGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPkF1dG9tYXRpYyBEaXNjb3VudHM8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF0gbXQtMC41XCI+UnVsZXMgYXBwbGllZCBhdXRvbWF0aWNhbGx5IGF0IGNoZWNrb3V0IOKAlCBubyBjb2RlIHJlcXVpcmVkPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjQzkzQTA3XVwiPisgTmV3IFJ1bGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctWyNGOUY5RkNdIGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgICAgIHtbJ1J1bGUgTmFtZScsICdUcmlnZ2VyJywgJ0Rpc2NvdW50JywgJ0FwcGxpZXMgVG8nLCAnVXNhZ2UnLCAnU3RhdHVzJywgJyddLm1hcChoID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aH0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTUgcHktMyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj57aH08L3RoPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQnV5IDIgR2V0IDEwJSBPZmYnLCB0cmlnZ2VyOiAnTWluIHF0eTogMicsIGRpc2NvdW50OiAnMTAlJywgYXBwbGllczogJ0FsbCBQcm9kdWN0cycsIHVzYWdlOiAxMjg0LCBzdGF0dXM6ICdhY3RpdmUnIH0sXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdTcGVuZCAkMjAwIFNhdmUgJDIwJywgdHJpZ2dlcjogJ01pbiBzcGVuZDogJDIwMCcsIGRpc2NvdW50OiAnJDIwIG9mZicsIGFwcGxpZXM6ICdBbGwgUHJvZHVjdHMnLCB1c2FnZTogODQyLCBzdGF0dXM6ICdhY3RpdmUnIH0sXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdOZXcgVXNlciAxNSUgT2ZmJywgdHJpZ2dlcjogJ0ZpcnN0IG9yZGVyJywgZGlzY291bnQ6ICcxNSUnLCBhcHBsaWVzOiAnQWxsIFByb2R1Y3RzJywgdXNhZ2U6IDMyNDEsIHN0YXR1czogJ2FjdGl2ZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0J1bmRsZTogRWxlY3Ryb25pY3MnLCB0cmlnZ2VyOiAnMysgZWxlY3Ryb25pY3MnLCBkaXNjb3VudDogJzEyJScsIGFwcGxpZXM6ICdFbGVjdHJvbmljcycsIHVzYWdlOiAyODQsIHN0YXR1czogJ3BhdXNlZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0ZyZWUgU2hpcHBpbmcgJDc1KycsIHRyaWdnZXI6ICdNaW4gc3BlbmQ6ICQ3NScsIGRpc2NvdW50OiAnRnJlZSBTaGlwcGluZycsIGFwcGxpZXM6ICdBbGwnLCB1c2FnZTogODQyMSwgc3RhdHVzOiAnYWN0aXZlJyB9LFxuICAgICAgICAgICAgICAgIF0ubWFwKHIgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17ci5uYW1lfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1bI0Y5RjlGQ10gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57ci5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSB0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e3IudHJpZ2dlcn08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjRTExRDQ4XVwiPntyLmRpc2NvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSB0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e3IuYXBwbGllc308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIHRleHQtc20gdGV4dC1bIzExMTExOF1cIj57ci51c2FnZS50b0xvY2FsZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkICR7ci5zdGF0dXMgPT09ICdhY3RpdmUnID8gJ2JnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XScgOiAnYmctWyNGNEY0RjhdIHRleHQtWyM5QjlCQjhdJ31gfT57ci5zdGF0dXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBob3ZlcjpiZy1bI0Y0RjRGOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzExMTExOF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMSA1SDZhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDExYTIgMiAwIDAwMi0ydi01bS0xLjQxNC05LjQxNGEyIDIgMCAxMTIuODI4IDIuODI4TDExLjgyOCAxNUg5di0yLjgyOGw4LjU4Ni04LjU4NnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBob3ZlcjpiZy1bI0ZFRTJFMl0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bI0UxMUQ0OF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xOSA3bC0uODY3IDEyLjE0MkEyIDIgMCAwMTE2LjEzOCAyMUg3Ljg2MmEyIDIgMCAwMS0xLjk5NS0xLjg1OEw1IDdtNSA0djZtNC02djZtMS0xMFY0YTEgMSAwIDAwLTEtMWgtNGExIDEgMCAwMC0xIDF2M000IDdoMTZcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBWb2x1bWUgcHJpY2luZyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5Wb2x1bWUgLyBUaWVyZWQgUHJpY2luZzwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBtdC0wLjVcIj5EaXNjb3VudHMgdGhhdCBzY2FsZSB3aXRoIHF1YW50aXR5IHB1cmNoYXNlZDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdXCI+KyBBZGQgVGllcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICB7IHRpZXI6ICdUaWVyIDEnLCBxdHk6ICcy4oCTNCBpdGVtcycsIGRpc2NvdW50OiAnNSUnLCBvcmRlcnM6IDI4NDEgfSxcbiAgICAgICAgICAgICAgICB7IHRpZXI6ICdUaWVyIDInLCBxdHk6ICc14oCTOSBpdGVtcycsIGRpc2NvdW50OiAnMTAlJywgb3JkZXJzOiAxMjg0IH0sXG4gICAgICAgICAgICAgICAgeyB0aWVyOiAnVGllciAzJywgcXR5OiAnMTDigJMyNCBpdGVtcycsIGRpc2NvdW50OiAnMTglJywgb3JkZXJzOiA0ODIgfSxcbiAgICAgICAgICAgICAgICB7IHRpZXI6ICdUaWVyIDQnLCBxdHk6ICcyNSsgaXRlbXMnLCBkaXNjb3VudDogJzI1JScsIG9yZGVyczogMTI0IH0sXG4gICAgICAgICAgICAgIF0ubWFwKHQgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0LnRpZXJ9IGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSByb3VuZGVkLXhsIHAtNCBib3JkZXIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj57dC50aWVyfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQteGwgdGV4dC1bI0UxMUQ0OF0gbXQtMVwiPnt0LmRpc2NvdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml0gbXQtMVwiPnt0LnF0eX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG10LTJcIj57dC5vcmRlcnMudG9Mb2NhbGVTdHJpbmcoKX0gb3JkZXJzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHthY3RpdmVUYWIgPT09ICdQdXNoIE5vdGlmaWNhdGlvbnMnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgICAgICB7LyogU3RhdHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnU3Vic2NyaWJlcnMnLCB2YWx1ZTogJzg0LDIwMCcsIGRlbHRhOiAnKzEsMjg0IHRoaXMgd2VlaycgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0F2ZyBPcGVuIFJhdGUnLCB2YWx1ZTogJzE4LjQlJywgZGVsdGE6ICdJbmR1c3RyeSBhdmc6IDEyJScgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ05vdGlmaWNhdGlvbnMgU2VudCcsIHZhbHVlOiAnMjQ4SycsIGRlbHRhOiAnTGFzdCAzMCBkYXlzJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnQ29udmVyc2lvbiBSYXRlJywgdmFsdWU6ICc0LjIlJywgZGVsdGE6ICcrMC44JSBNb00nIH0sXG4gICAgICAgICAgICBdLm1hcChzID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3MubGFiZWx9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcHgtNSBweS00XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e3MubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtMnhsIHRleHQtWyMxMTExMThdIG10LTFcIj57cy52YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjMDU5NjY5XSBtdC0xXCI+e3MuZGVsdGF9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENvbXBvc2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPkNvbXBvc2UgTm90aWZpY2F0aW9uPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwi8J+UpSBGbGFzaCBTYWxlIHN0YXJ0cyBOT1chXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV0gcGxhY2Vob2xkZXI6dGV4dC1bI0M4QzhFMF1cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5Cb2R5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJVcCB0byA1MCUgb2ZmIGVsZWN0cm9uaWNzIGZvciB0aGUgbmV4dCA0IGhvdXJzIG9ubHkuIERvbid0IG1pc3Mgb3V0IVwiIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSByZXNpemUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LVsjQzhDOEUwXVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+VGFyZ2V0IFNlZ21lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbGwgU3Vic2NyaWJlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5WSVAgQ3VzdG9tZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW5hY3RpdmUgMzAgRGF5czwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNhcnQgQWJhbmRvbmVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+U2NoZWR1bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZW5kIE5vdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNjaGVkdWxlIGZvciBMYXRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk9wdGltYWwgU2VuZCBUaW1lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+Q1RBIExpbms8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIi9jYXRlZ29yeS9lbGVjdHJvbmljc1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLTkgcHgtMyBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbW9ubyBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSBwbGFjZWhvbGRlcjp0ZXh0LVsjQzhDOEUwXVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yLjUgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdXCI+UHJldmlldzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0M5M0EwN11cIj5TZW5kIE5vdGlmaWNhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUmVjZW50IG5vdGlmaWNhdGlvbnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS00IGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPlJlY2VudCBDYW1wYWlnbnM8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICfwn5SlIEZsYXNoIEZyaWRheSBTYWxlJywgc2VudDogJzg0LDIwMCcsIG9wZW5lZDogJzE4LjIlJywgY2xpY2tlZDogJzUuNCUnLCB0aW1lOiAnSnVsIDI1IMK3IDY6MDAgUE0nIH0sXG4gICAgICAgICAgICAgICAgICB7IHRpdGxlOiAn8J+OgSBFeGNsdXNpdmU6IFZJUCBFYXJseSBBY2Nlc3MnLCBzZW50OiAnMTIsNDAwJywgb3BlbmVkOiAnMjQuOCUnLCBjbGlja2VkOiAnOS4yJScsIHRpbWU6ICdKdWwgMjIgwrcgMTA6MDAgQU0nIH0sXG4gICAgICAgICAgICAgICAgICB7IHRpdGxlOiAn8J+TpiBZb3VyIG9yZGVyIHNoaXBwZWQhJywgc2VudDogJzMsMjQxJywgb3BlbmVkOiAnNDguNCUnLCBjbGlja2VkOiAnMjIuMSUnLCB0aW1lOiAnSnVsIDIwIMK3IEF1dG8nIH0sXG4gICAgICAgICAgICAgICAgICB7IHRpdGxlOiAn8J+SuCBZb3UgbGVmdCBpdGVtcyBpbiB5b3VyIGNhcnQnLCBzZW50OiAnOCw0MjAnLCBvcGVuZWQ6ICcyOC40JScsIGNsaWNrZWQ6ICcxMi44JScsIHRpbWU6ICdKdWwgMTggwrcgQXV0bycgfSxcbiAgICAgICAgICAgICAgICBdLm1hcChuID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtuLnRpdGxlfSBjbGFzc05hbWU9XCJweC01IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e24udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyM5QjlCQjhdIG1sLTMgZmxleC1zaHJpbmstMFwiPntuLnRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj5TZW50OiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntuLnNlbnR9PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+T3BlbjogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzA1OTY2OV1cIj57bi5vcGVuZWR9PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+Q2xpY2s6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQtWyNFODQ1MEFdXCI+e24uY2xpY2tlZH08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxJQUFNLE9BQU87Q0FBQztDQUFhO0NBQWU7Q0FBVztDQUFhO0FBQW9CO0FBRXRGLElBQU0sYUFBcUM7Q0FDekMsUUFBUTtDQUNSLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsT0FBTztBQUNUO0FBRUEsSUFBTSxZQUFZO0NBQ2hCO0VBQUUsTUFBTTtFQUFvQixNQUFNO0VBQWMsVUFBVTtFQUFPLFFBQVE7RUFBaUIsVUFBVTtFQUFLLE9BQU87RUFBUyxLQUFLO0VBQVUsUUFBUTtFQUFVLFNBQVM7RUFBWSxRQUFRO0NBQU07Q0FDN0w7RUFBRSxNQUFNO0VBQWEsTUFBTTtFQUFZLFVBQVU7RUFBTyxRQUFRO0VBQWUsVUFBVTtFQUFLLE9BQU87RUFBVSxLQUFLO0VBQVUsUUFBUTtFQUFXLFNBQVM7RUFBVyxRQUFRO0NBQU07Q0FDbkw7RUFBRSxNQUFNO0VBQWtCLE1BQU07RUFBYyxVQUFVO0VBQU8sUUFBUTtFQUFZLFVBQVU7RUFBSyxPQUFPO0VBQVMsS0FBSztFQUFVLFFBQVE7RUFBYSxTQUFTO0VBQUssUUFBUTtDQUFFO0FBQ2hMO0FBRUEsSUFBTSxhQUFhO0NBQ2pCO0VBQUUsTUFBTTtFQUFnQixPQUFPO0VBQWdCLEtBQUs7RUFBZ0IsVUFBVTtFQUFJLFVBQVU7RUFBTyxRQUFRO0VBQVUsT0FBTztDQUFHO0NBQy9IO0VBQUUsTUFBTTtFQUFp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