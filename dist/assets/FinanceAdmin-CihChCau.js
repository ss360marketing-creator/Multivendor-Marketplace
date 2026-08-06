import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/pages/FinanceAdmin.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var transactions = [
	{
		id: "TXN-84210",
		type: "sale",
		customer: "Sarah Mitchell",
		vendor: "iZone Official",
		amount: 2499,
		commission: 249.9,
		net: 2249.1,
		method: "Card",
		status: "completed",
		date: "Jul 25, 2025"
	},
	{
		id: "TXN-84209",
		type: "refund",
		customer: "James Chen",
		vendor: "NikeWorld",
		amount: -189,
		commission: -18.9,
		net: -170.1,
		method: "Card",
		status: "processed",
		date: "Jul 25, 2025"
	},
	{
		id: "TXN-84208",
		type: "sale",
		customer: "Priya Sharma",
		vendor: "BeautyLab",
		amount: 84,
		commission: 12.6,
		net: 71.4,
		method: "Wallet",
		status: "completed",
		date: "Jul 24, 2025"
	},
	{
		id: "TXN-84207",
		type: "payout",
		customer: "—",
		vendor: "SoundVault",
		amount: -12480,
		commission: 0,
		net: -12480,
		method: "Bank",
		status: "completed",
		date: "Jul 24, 2025"
	},
	{
		id: "TXN-84206",
		type: "sale",
		customer: "Omar Abdullah",
		vendor: "TechHub Pro",
		amount: 899,
		commission: 89.9,
		net: 809.1,
		method: "Card",
		status: "pending",
		date: "Jul 24, 2025"
	},
	{
		id: "TXN-84205",
		type: "sale",
		customer: "Emma Walsh",
		vendor: "FashionHub",
		amount: 248,
		commission: 37.2,
		net: 210.8,
		method: "COD",
		status: "completed",
		date: "Jul 23, 2025"
	}
];
var payouts = [
	{
		vendor: "iZone Official",
		sales: "$84,200",
		commission: "$8,420",
		refunds: "$1,240",
		net: "$74,540",
		status: "pending",
		due: "Jul 31"
	},
	{
		vendor: "TechHub Pro",
		sales: "$62,400",
		commission: "$6,240",
		refunds: "$840",
		net: "$55,320",
		status: "pending",
		due: "Jul 31"
	},
	{
		vendor: "NikeWorld",
		sales: "$28,800",
		commission: "$4,320",
		refunds: "$240",
		net: "$24,240",
		status: "processing",
		due: "Jul 28"
	},
	{
		vendor: "SoundVault",
		sales: "$18,400",
		commission: "$2,760",
		refunds: "$120",
		net: "$15,520",
		status: "paid",
		due: "Jul 24"
	},
	{
		vendor: "BeautyLab",
		sales: "$12,840",
		commission: "$2,568",
		refunds: "$84",
		net: "$10,188",
		status: "paid",
		due: "Jul 22"
	}
];
var PAYOUT_CLS = {
	pending: "bg-[#FEF3C7] text-[#92400E]",
	processing: "bg-[#EEF2FF] text-[#4338CA]",
	paid: "bg-[#D1FAE5] text-[#065F46]"
};
var TXN_TYPE = {
	sale: "text-[#059669]",
	refund: "text-[#E11D48]",
	payout: "text-[#6366F1]"
};
function FinanceAdmin({ onNavigate: _ }) {
	const [tab, setTab] = (0, import_react.useState)("transactions");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Finance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Transactions, payouts, and commissions"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
						children: "Export Report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]",
						children: "Run Payouts"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-4",
				children: [
					{
						label: "Gross Revenue",
						value: "$284,819",
						delta: "+18.4%",
						color: "text-[#059669]"
					},
					{
						label: "Platform Commission",
						value: "$24,208",
						delta: "8.5% avg rate",
						color: "text-[#6366F1]"
					},
					{
						label: "Pending Payouts",
						value: "$153,940",
						delta: "3 vendors",
						color: "text-[#D97706]"
					},
					{
						label: "Refunds Issued",
						value: "$3,284",
						delta: "1.15% rate",
						color: "text-[#E11D48]"
					}
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: k.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `font-mono font-black text-2xl mt-1 ${k.color}`,
							children: k.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mt-1",
							children: k.delta
						})
					]
				}, k.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 border-b border-[#E2E2EC]",
				children: [
					"transactions",
					"payouts",
					"commissions"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `px-4 py-3 text-sm font-semibold capitalize border-b-2 transition-all -mb-px ${tab === t ? "border-[#E8450A] text-[#E8450A]" : "border-transparent text-[#9B9BB8] hover:text-[#6B6B82]"}`,
					children: t
				}, t))
			}),
			tab === "transactions" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-[#111118]",
						children: "All Transactions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "h-8 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All Types" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sales" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Refunds" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Payouts" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "h-8 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Last 7 Days" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Last 30 Days" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
						children: [
							"Transaction ID",
							"Type",
							"Customer",
							"Vendor",
							"Amount",
							"Commission",
							"Net",
							"Method",
							"Status",
							"Date"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide whitespace-nowrap",
							children: h
						}, h))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-[#F4F4F8]",
						children: transactions.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-[#F9F9FC] transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-xs text-[#6B6B82]",
									children: t.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-xs font-bold capitalize ${TXN_TYPE[t.type]}`,
										children: t.type
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-sm text-[#111118]",
									children: t.customer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-sm text-[#6B6B82]",
									children: t.vendor
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono font-bold text-sm ${t.amount < 0 ? "text-[#E11D48]" : "text-[#111118]"}`,
										children: t.amount < 0 ? `-$${Math.abs(t.amount).toLocaleString()}` : `$${t.amount.toLocaleString()}`
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-xs text-[#6B6B82]",
									children: t.commission === 0 ? "—" : t.commission < 0 ? `-$${Math.abs(t.commission).toFixed(2)}` : `$${t.commission.toFixed(2)}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono font-bold text-sm ${t.net < 0 ? "text-[#E11D48]" : "text-[#059669]"}`,
										children: t.net < 0 ? `-$${Math.abs(t.net).toFixed(2)}` : `$${t.net.toFixed(2)}`
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs bg-[#F4F4F8] text-[#6B6B82] px-2 py-0.5 rounded-full",
										children: t.method
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${t.status === "completed" ? "bg-[#D1FAE5] text-[#065F46]" : t.status === "pending" ? "bg-[#FEF3C7] text-[#92400E]" : "bg-[#EEF2FF] text-[#4338CA]"}`,
										children: t.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-xs text-[#9B9BB8] whitespace-nowrap",
									children: t.date
								})
							]
						}, t.id))
					})]
				})]
			}),
			tab === "payouts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#0F0F18] rounded-xl p-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#8B8BA8] text-sm font-semibold",
							children: "Next Payout Cycle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white font-black text-3xl font-mono mt-1",
							children: "$153,940"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#5B5B72] text-xs mt-1",
							children: "Due Jul 31, 2025 · 3 vendors pending"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-6 py-3 bg-[#E8450A] text-white rounded-xl font-bold hover:bg-[#C93A07]",
						children: "Process All Payouts"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
							children: [
								"Vendor",
								"Gross Sales",
								"Commission",
								"Refunds",
								"Net Payable",
								"Due Date",
								"Status",
								"Action"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: payouts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-[#F9F9FC] transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-semibold text-[#111118]",
										children: p.vendor
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono font-semibold text-[#111118]",
										children: p.sales
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-5 py-3.5 font-mono text-[#E11D48]",
										children: ["-", p.commission]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-5 py-3.5 font-mono text-[#D97706]",
										children: ["-", p.refunds]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono font-black text-[#059669]",
										children: p.net
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-xs text-[#6B6B82]",
										children: p.due
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${PAYOUT_CLS[p.status]}`,
											children: p.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: p.status !== "paid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-xs font-bold text-[#E8450A] hover:underline",
											children: "Pay Now"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-xs text-[#9B9BB8] hover:underline",
											children: "Receipt"
										})
									})
								]
							}, p.vendor))
						})]
					})
				})]
			}),
			tab === "commissions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118] mb-4",
							children: "Commission Rules"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									category: "Electronics",
									rate: "10%",
									type: "Percentage",
									vendors: 12
								},
								{
									category: "Fashion & Apparel",
									rate: "15%",
									type: "Percentage",
									vendors: 24
								},
								{
									category: "Beauty & Skincare",
									rate: "20%",
									type: "Percentage",
									vendors: 18
								},
								{
									category: "Home & Living",
									rate: "12%",
									type: "Percentage",
									vendors: 9
								},
								{
									category: "Default (All)",
									rate: "8%",
									type: "Fallback",
									vendors: "—"
								}
							].map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between py-3 border-b border-[#F4F4F8] last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-[#111118] text-sm",
									children: rule.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#9B9BB8]",
									children: [rule.vendors, " vendors"]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-black text-lg text-[#E8450A]",
											children: rule.rate
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs bg-[#F4F4F8] text-[#6B6B82] px-2 py-0.5 rounded-lg",
											children: rule.type
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-xs font-semibold text-[#6B6B82] hover:text-[#E8450A]",
											children: "Edit"
										})
									]
								})]
							}, rule.category))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-4 px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
							children: "+ Add Rule"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { FinanceAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluYW5jZUFkbWluLUNpaENoQ2F1LmpzIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZG1pbi9wYWdlcy9GaW5hbmNlQWRtaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluU2VjdGlvbiB9IGZyb20gJy4uL2FkbWluRGF0YSdcblxudHlwZSBQcm9wcyA9IHsgb25OYXZpZ2F0ZTogKHM6IEFkbWluU2VjdGlvbikgPT4gdm9pZCB9XG5cbmNvbnN0IHRyYW5zYWN0aW9ucyA9IFtcbiAgeyBpZDogJ1RYTi04NDIxMCcsIHR5cGU6ICdzYWxlJywgY3VzdG9tZXI6ICdTYXJhaCBNaXRjaGVsbCcsIHZlbmRvcjogJ2lab25lIE9mZmljaWFsJywgYW1vdW50OiAyNDk5LCBjb21taXNzaW9uOiAyNDkuOTAsIG5ldDogMjI0OS4xMCwgbWV0aG9kOiAnQ2FyZCcsIHN0YXR1czogJ2NvbXBsZXRlZCcsIGRhdGU6ICdKdWwgMjUsIDIwMjUnIH0sXG4gIHsgaWQ6ICdUWE4tODQyMDknLCB0eXBlOiAncmVmdW5kJywgY3VzdG9tZXI6ICdKYW1lcyBDaGVuJywgdmVuZG9yOiAnTmlrZVdvcmxkJywgYW1vdW50OiAtMTg5LCBjb21taXNzaW9uOiAtMTguOTAsIG5ldDogLTE3MC4xMCwgbWV0aG9kOiAnQ2FyZCcsIHN0YXR1czogJ3Byb2Nlc3NlZCcsIGRhdGU6ICdKdWwgMjUsIDIwMjUnIH0sXG4gIHsgaWQ6ICdUWE4tODQyMDgnLCB0eXBlOiAnc2FsZScsIGN1c3RvbWVyOiAnUHJpeWEgU2hhcm1hJywgdmVuZG9yOiAnQmVhdXR5TGFiJywgYW1vdW50OiA4NCwgY29tbWlzc2lvbjogMTIuNjAsIG5ldDogNzEuNDAsIG1ldGhvZDogJ1dhbGxldCcsIHN0YXR1czogJ2NvbXBsZXRlZCcsIGRhdGU6ICdKdWwgMjQsIDIwMjUnIH0sXG4gIHsgaWQ6ICdUWE4tODQyMDcnLCB0eXBlOiAncGF5b3V0JywgY3VzdG9tZXI6ICfigJQnLCB2ZW5kb3I6ICdTb3VuZFZhdWx0JywgYW1vdW50OiAtMTI0ODAsIGNvbW1pc3Npb246IDAsIG5ldDogLTEyNDgwLCBtZXRob2Q6ICdCYW5rJywgc3RhdHVzOiAnY29tcGxldGVkJywgZGF0ZTogJ0p1bCAyNCwgMjAyNScgfSxcbiAgeyBpZDogJ1RYTi04NDIwNicsIHR5cGU6ICdzYWxlJywgY3VzdG9tZXI6ICdPbWFyIEFiZHVsbGFoJywgdmVuZG9yOiAnVGVjaEh1YiBQcm8nLCBhbW91bnQ6IDg5OSwgY29tbWlzc2lvbjogODkuOTAsIG5ldDogODA5LjEwLCBtZXRob2Q6ICdDYXJkJywgc3RhdHVzOiAncGVuZGluZycsIGRhdGU6ICdKdWwgMjQsIDIwMjUnIH0sXG4gIHsgaWQ6ICdUWE4tODQyMDUnLCB0eXBlOiAnc2FsZScsIGN1c3RvbWVyOiAnRW1tYSBXYWxzaCcsIHZlbmRvcjogJ0Zhc2hpb25IdWInLCBhbW91bnQ6IDI0OCwgY29tbWlzc2lvbjogMzcuMjAsIG5ldDogMjEwLjgwLCBtZXRob2Q6ICdDT0QnLCBzdGF0dXM6ICdjb21wbGV0ZWQnLCBkYXRlOiAnSnVsIDIzLCAyMDI1JyB9LFxuXVxuXG5jb25zdCBwYXlvdXRzID0gW1xuICB7IHZlbmRvcjogJ2lab25lIE9mZmljaWFsJywgc2FsZXM6ICckODQsMjAwJywgY29tbWlzc2lvbjogJyQ4LDQyMCcsIHJlZnVuZHM6ICckMSwyNDAnLCBuZXQ6ICckNzQsNTQwJywgc3RhdHVzOiAncGVuZGluZycsIGR1ZTogJ0p1bCAzMScgfSxcbiAgeyB2ZW5kb3I6ICdUZWNoSHViIFBybycsIHNhbGVzOiAnJDYyLDQwMCcsIGNvbW1pc3Npb246ICckNiwyNDAnLCByZWZ1bmRzOiAnJDg0MCcsIG5ldDogJyQ1NSwzMjAnLCBzdGF0dXM6ICdwZW5kaW5nJywgZHVlOiAnSnVsIDMxJyB9LFxuICB7IHZlbmRvcjogJ05pa2VXb3JsZCcsIHNhbGVzOiAnJDI4LDgwMCcsIGNvbW1pc3Npb246ICckNCwzMjAnLCByZWZ1bmRzOiAnJDI0MCcsIG5ldDogJyQyNCwyNDAnLCBzdGF0dXM6ICdwcm9jZXNzaW5nJywgZHVlOiAnSnVsIDI4JyB9LFxuICB7IHZlbmRvcjogJ1NvdW5kVmF1bHQnLCBzYWxlczogJyQxOCw0MDAnLCBjb21taXNzaW9uOiAnJDIsNzYwJywgcmVmdW5kczogJyQxMjAnLCBuZXQ6ICckMTUsNTIwJywgc3RhdHVzOiAncGFpZCcsIGR1ZTogJ0p1bCAyNCcgfSxcbiAgeyB2ZW5kb3I6ICdCZWF1dHlMYWInLCBzYWxlczogJyQxMiw4NDAnLCBjb21taXNzaW9uOiAnJDIsNTY4JywgcmVmdW5kczogJyQ4NCcsIG5ldDogJyQxMCwxODgnLCBzdGF0dXM6ICdwYWlkJywgZHVlOiAnSnVsIDIyJyB9LFxuXVxuXG5jb25zdCBQQVlPVVRfQ0xTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBwZW5kaW5nOiAnYmctWyNGRUYzQzddIHRleHQtWyM5MjQwMEVdJyxcbiAgcHJvY2Vzc2luZzogJ2JnLVsjRUVGMkZGXSB0ZXh0LVsjNDMzOENBXScsXG4gIHBhaWQ6ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nLFxufVxuXG5jb25zdCBUWE5fVFlQRTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgc2FsZTogJ3RleHQtWyMwNTk2NjldJyxcbiAgcmVmdW5kOiAndGV4dC1bI0UxMUQ0OF0nLFxuICBwYXlvdXQ6ICd0ZXh0LVsjNjM2NkYxXScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbmFuY2VBZG1pbih7IG9uTmF2aWdhdGU6IF8gfTogUHJvcHMpIHtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlPCd0cmFuc2FjdGlvbnMnIHwgJ3BheW91dHMnIHwgJ2NvbW1pc3Npb25zJz4oJ3RyYW5zYWN0aW9ucycpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTVcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5GaW5hbmNlPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZCODJdIG10LTAuNVwiPlRyYW5zYWN0aW9ucywgcGF5b3V0cywgYW5kIGNvbW1pc3Npb25zPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XVwiPkV4cG9ydCBSZXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0M5M0EwN11cIj5SdW4gUGF5b3V0czwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogS1BJICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgIHtbXG4gICAgICAgICAgeyBsYWJlbDogJ0dyb3NzIFJldmVudWUnLCB2YWx1ZTogJyQyODQsODE5JywgZGVsdGE6ICcrMTguNCUnLCBjb2xvcjogJ3RleHQtWyMwNTk2NjldJyB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdQbGF0Zm9ybSBDb21taXNzaW9uJywgdmFsdWU6ICckMjQsMjA4JywgZGVsdGE6ICc4LjUlIGF2ZyByYXRlJywgY29sb3I6ICd0ZXh0LVsjNjM2NkYxXScgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnUGVuZGluZyBQYXlvdXRzJywgdmFsdWU6ICckMTUzLDk0MCcsIGRlbHRhOiAnMyB2ZW5kb3JzJywgY29sb3I6ICd0ZXh0LVsjRDk3NzA2XScgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnUmVmdW5kcyBJc3N1ZWQnLCB2YWx1ZTogJyQzLDI4NCcsIGRlbHRhOiAnMS4xNSUgcmF0ZScsIGNvbG9yOiAndGV4dC1bI0UxMUQ0OF0nIH0sXG4gICAgICAgIF0ubWFwKGsgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtrLmxhYmVsfSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHB4LTUgcHktNFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e2subGFiZWx9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZm9udC1tb25vIGZvbnQtYmxhY2sgdGV4dC0yeGwgbXQtMSAke2suY29sb3J9YH0+e2sudmFsdWV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBtdC0xXCI+e2suZGVsdGF9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVGFicyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYm9yZGVyLWIgYm9yZGVyLVsjRTJFMkVDXVwiPlxuICAgICAgICB7KFsndHJhbnNhY3Rpb25zJywgJ3BheW91dHMnLCAnY29tbWlzc2lvbnMnXSBhcyBjb25zdCkubWFwKHQgPT4gKFxuICAgICAgICAgIDxidXR0b24ga2V5PXt0fSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIodCl9IGNsYXNzTmFtZT17YHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgY2FwaXRhbGl6ZSBib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIC1tYi1weCAke3RhYiA9PT0gdCA/ICdib3JkZXItWyNFODQ1MEFdIHRleHQtWyNFODQ1MEFdJyA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzZCNkI4Ml0nfWB9Pnt0fTwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7dGFiID09PSAndHJhbnNhY3Rpb25zJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPkFsbCBUcmFuc2FjdGlvbnM8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiaC04IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC14cyBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkFsbCBUeXBlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+U2FsZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlJlZnVuZHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlBheW91dHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiaC04IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC14cyBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkxhc3QgNyBEYXlzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5MYXN0IDMwIERheXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge1snVHJhbnNhY3Rpb24gSUQnLCAnVHlwZScsICdDdXN0b21lcicsICdWZW5kb3InLCAnQW1vdW50JywgJ0NvbW1pc3Npb24nLCAnTmV0JywgJ01ldGhvZCcsICdTdGF0dXMnLCAnRGF0ZSddLm1hcChoID0+IChcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHdoaXRlc3BhY2Utbm93cmFwXCI+e2h9PC90aD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zLm1hcCh0ID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXt0LmlkfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1bI0Y5RjlGQ10gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgZm9udC1tb25vIHRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj57dC5pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXhzIGZvbnQtYm9sZCBjYXBpdGFsaXplICR7VFhOX1RZUEVbdC50eXBlXX1gfT57dC50eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtc20gdGV4dC1bIzExMTExOF1cIj57dC5jdXN0b21lcn08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LXNtIHRleHQtWyM2QjZCODJdXCI+e3QudmVuZG9yfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1zbSAke3QuYW1vdW50IDwgMCA/ICd0ZXh0LVsjRTExRDQ4XScgOiAndGV4dC1bIzExMTExOF0nfWB9Pnt0LmFtb3VudCA8IDAgPyBgLSQke01hdGguYWJzKHQuYW1vdW50KS50b0xvY2FsZVN0cmluZygpfWAgOiBgJCR7dC5hbW91bnQudG9Mb2NhbGVTdHJpbmcoKX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zIGZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e3QuY29tbWlzc2lvbiA9PT0gMCA/ICfigJQnIDogdC5jb21taXNzaW9uIDwgMCA/IGAtJCR7TWF0aC5hYnModC5jb21taXNzaW9uKS50b0ZpeGVkKDIpfWAgOiBgJCR7dC5jb21taXNzaW9uLnRvRml4ZWQoMil9YH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gJHt0Lm5ldCA8IDAgPyAndGV4dC1bI0UxMUQ0OF0nIDogJ3RleHQtWyMwNTk2NjldJ31gfT57dC5uZXQgPCAwID8gYC0kJHtNYXRoLmFicyh0Lm5ldCkudG9GaXhlZCgyKX1gIDogYCQke3QubmV0LnRvRml4ZWQoMil9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLVsjRjRGNEY4XSB0ZXh0LVsjNkI2QjgyXSBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGxcIj57dC5tZXRob2R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgJHt0LnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnYmctWyNEMUZBRTVdIHRleHQtWyMwNjVGNDZdJyA6IHQuc3RhdHVzID09PSAncGVuZGluZycgPyAnYmctWyNGRUYzQzddIHRleHQtWyM5MjQwMEVdJyA6ICdiZy1bI0VFRjJGRl0gdGV4dC1bIzQzMzhDQV0nfWB9Pnt0LnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIHdoaXRlc3BhY2Utbm93cmFwXCI+e3QuZGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0YWIgPT09ICdwYXlvdXRzJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgey8qIFN1bW1hcnkgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzBGMEYxOF0gcm91bmRlZC14bCBwLTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjOEI4QkE4XSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5OZXh0IFBheW91dCBDeWNsZTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQtM3hsIGZvbnQtbW9ubyBtdC0xXCI+JDE1Myw5NDA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM1QjVCNzJdIHRleHQteHMgbXQtMVwiPkR1ZSBKdWwgMzEsIDIwMjUgwrcgMyB2ZW5kb3JzIHBlbmRpbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgZm9udC1ib2xkIGhvdmVyOmJnLVsjQzkzQTA3XVwiPlByb2Nlc3MgQWxsIFBheW91dHM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAgICB7WydWZW5kb3InLCAnR3Jvc3MgU2FsZXMnLCAnQ29tbWlzc2lvbicsICdSZWZ1bmRzJywgJ05ldCBQYXlhYmxlJywgJ0R1ZSBEYXRlJywgJ1N0YXR1cycsICdBY3Rpb24nXS5tYXAoaCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC01IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e2h9PC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge3BheW91dHMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17cC52ZW5kb3J9IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntwLnZlbmRvcn08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57cC5zYWxlc308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIHRleHQtWyNFMTFENDhdXCI+LXtwLmNvbW1pc3Npb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtbW9ubyB0ZXh0LVsjRDk3NzA2XVwiPi17cC5yZWZ1bmRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSBmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LVsjMDU5NjY5XVwiPntwLm5ldH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgdGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPntwLmR1ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCAke1BBWU9VVF9DTFNbcC5zdGF0dXNdfWB9PntwLnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwLnN0YXR1cyAhPT0gJ3BhaWQnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LVsjRTg0NTBBXSBob3Zlcjp1bmRlcmxpbmVcIj5QYXkgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp1bmRlcmxpbmVcIj5SZWNlaXB0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0YWIgPT09ICdjb21taXNzaW9ucycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTZcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIG1iLTRcIj5Db21taXNzaW9uIFJ1bGVzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgeyBjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJywgcmF0ZTogJzEwJScsIHR5cGU6ICdQZXJjZW50YWdlJywgdmVuZG9yczogMTIgfSxcbiAgICAgICAgICAgICAgICB7IGNhdGVnb3J5OiAnRmFzaGlvbiAmIEFwcGFyZWwnLCByYXRlOiAnMTUlJywgdHlwZTogJ1BlcmNlbnRhZ2UnLCB2ZW5kb3JzOiAyNCB9LFxuICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnk6ICdCZWF1dHkgJiBTa2luY2FyZScsIHJhdGU6ICcyMCUnLCB0eXBlOiAnUGVyY2VudGFnZScsIHZlbmRvcnM6IDE4IH0sXG4gICAgICAgICAgICAgICAgeyBjYXRlZ29yeTogJ0hvbWUgJiBMaXZpbmcnLCByYXRlOiAnMTIlJywgdHlwZTogJ1BlcmNlbnRhZ2UnLCB2ZW5kb3JzOiA5IH0sXG4gICAgICAgICAgICAgICAgeyBjYXRlZ29yeTogJ0RlZmF1bHQgKEFsbCknLCByYXRlOiAnOCUnLCB0eXBlOiAnRmFsbGJhY2snLCB2ZW5kb3JzOiAn4oCUJyB9LFxuICAgICAgICAgICAgICBdLm1hcChydWxlID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cnVsZS5jYXRlZ29yeX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XSBsYXN0OmJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHRleHQtc21cIj57cnVsZS5jYXRlZ29yeX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57cnVsZS52ZW5kb3JzfSB2ZW5kb3JzPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtbGcgdGV4dC1bI0U4NDUwQV1cIj57cnVsZS5yYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBiZy1bI0Y0RjRGOF0gdGV4dC1bIzZCNkI4Ml0gcHgtMiBweS0wLjUgcm91bmRlZC1sZ1wiPntydWxlLnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3Zlcjp0ZXh0LVsjRTg0NTBBXVwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC00IHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0Y0RjRGOF1cIj4rIEFkZCBSdWxlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBS0EsSUFBTSxlQUFlO0NBQ25CO0VBQUUsSUFBSTtFQUFhLE1BQU07RUFBUSxVQUFVO0VBQWtCLFFBQVE7RUFBa0IsUUFBUTtFQUFNLFlBQVk7RUFBUSxLQUFLO0VBQVMsUUFBUTtFQUFRLFFBQVE7RUFBYSxNQUFNO0NBQWU7Q0FDak07RUFBRSxJQUFJO0VBQWEsTUFBTTtFQUFVLFVBQVU7RUFBYyxRQUFRO0VBQWEsUUFBUTtFQUFNLFlBQVk7RUFBUSxLQUFLO0VBQVMsUUFBUTtFQUFRLFFBQVE7RUFBYSxNQUFNO0NBQWU7Q0FDMUw7RUFBRSxJQUFJO0VBQWEsTUFBTTtFQUFRLFVBQVU7RUFBZ0IsUUFBUTtFQUFhLFFBQVE7RUFBSSxZQUFZO0VBQU8sS0FBSztFQUFPLFFBQVE7RUFBVSxRQUFRO0VBQWEsTUFBTTtDQUFlO0NBQ3ZMO0VBQUUsSUFBSTtFQUFhLE1BQU07RUFBVSxVQUFVO0VBQUssUUFBUTtFQUFjLFFBQVE7RUFBUSxZQUFZO0VBQUcsS0FBSztFQUFRLFFBQVE7RUFBUSxRQUFRO0VBQWEsTUFBTTtDQUFlO0NB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