import { i as require_jsx_runtime } from "./index-BM41bWnP.js";
import { P as Tooltip, d as XAxis, f as Bar, ht as ResponsiveContainer, m as CartesianGrid, n as BarChart, p as Area, t as AreaChart, u as YAxis } from "./AreaChart-Cv4X_IYY.js";
import { o as salesData } from "./adminData-rxTk4z3f.js";
//#region src/admin/pages/AnalyticsAdmin.tsx
var import_jsx_runtime = require_jsx_runtime();
var funnelData = [
	{
		name: "Product Views",
		value: 48200,
		fill: "#6366F1"
	},
	{
		name: "Add to Cart",
		value: 12840,
		fill: "#8B5CF6"
	},
	{
		name: "Checkout",
		value: 6420,
		fill: "#A78BFA"
	},
	{
		name: "Purchase",
		value: 4284,
		fill: "#E8450A"
	}
];
var customerData = [
	{
		month: "Jan",
		new: 420,
		returning: 240
	},
	{
		month: "Feb",
		new: 580,
		returning: 310
	},
	{
		month: "Mar",
		new: 640,
		returning: 390
	},
	{
		month: "Apr",
		new: 520,
		returning: 420
	},
	{
		month: "May",
		new: 780,
		returning: 480
	},
	{
		month: "Jun",
		new: 840,
		returning: 520
	}
];
var topProducts = [
	{
		name: "The Ordinary HA 2%",
		views: 48200,
		cart: 12840,
		purchases: 8421,
		rate: 17.5
	},
	{
		name: "Nike Air Max 270",
		views: 38400,
		cart: 9820,
		purchases: 5621,
		rate: 14.6
	},
	{
		name: "Sony WH-1000XM5",
		views: 22800,
		cart: 5480,
		purchases: 1842,
		rate: 8.1
	},
	{
		name: "Dyson Supersonic",
		views: 18400,
		cart: 4120,
		purchases: 1284,
		rate: 7
	},
	{
		name: "MacBook Air M3",
		views: 14200,
		cart: 2840,
		purchases: 892,
		rate: 6.3
	}
];
function AnalyticsAdmin({ onNavigate: _ }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Analytics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Platform performance overview"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: [
						"7 Days",
						"30 Days",
						"90 Days",
						"This Year"
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `px-3 py-1.5 rounded-lg text-xs font-semibold ${i === 1 ? "bg-[#E8450A] text-white" : "border border-[#E2E2EC] text-[#6B6B82] hover:bg-[#F4F4F8]"}`,
						children: f
					}, f))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						label: "Total Revenue",
						value: "$284,819",
						delta: "+18.4%",
						up: true
					},
					{
						label: "Conversion Rate",
						value: "8.9%",
						delta: "+1.2%",
						up: true
					},
					{
						label: "Avg Order Value",
						value: "$147.20",
						delta: "-2.1%",
						up: false
					},
					{
						label: "Customer LTV",
						value: "$324.80",
						delta: "+8.6%",
						up: true
					}
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: m.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono font-black text-2xl text-[#111118] mt-2",
							children: m.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `inline-flex items-center text-xs font-bold mt-1 ${m.up ? "text-[#059669]" : "text-[#E11D48]"}`,
							children: [
								m.up ? "↑" : "↓",
								" ",
								m.delta,
								" vs last period"
							]
						})
					]
				}, m.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 bg-white rounded-xl border border-[#E2E2EC] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118] mb-1",
							children: "Revenue Trend"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mb-5",
							children: "12-week rolling revenue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: 220,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: salesData,
								margin: {
									top: 5,
									right: 10,
									bottom: 0,
									left: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "grad1",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#E8450A",
											stopOpacity: .2
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#E8450A",
											stopOpacity: 0
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#F4F4F8",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "date",
										tick: {
											fontSize: 11,
											fill: "#9B9BB8"
										},
										axisLine: false,
										tickLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: {
											fontSize: 11,
											fill: "#9B9BB8"
										},
										axisLine: false,
										tickLine: false,
										tickFormatter: (v) => `$${(v / 1e3).toFixed(0)}k`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "#fff",
											border: "1px solid #E2E2EC",
											borderRadius: "10px",
											fontSize: 12
										},
										formatter: (v) => [`$${Number(v).toLocaleString()}`, "Revenue"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "revenue",
										stroke: "#E8450A",
										strokeWidth: 2.5,
										fill: "url(#grad1)",
										dot: false,
										activeDot: {
											r: 5,
											fill: "#E8450A",
											strokeWidth: 0
										}
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118] mb-1",
							children: "Conversion Funnel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mb-4",
							children: "Product view → Purchase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: funnelData.map((step, i) => {
								const pct = Math.round(step.value / funnelData[0].value * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#6B6B82] font-medium",
											children: step.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-bold text-[#111118]",
												children: step.value.toLocaleString()
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[#9B9BB8]",
												children: [pct, "%"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-6 bg-[#F4F4F8] rounded-lg overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full rounded-lg flex items-center justify-end pr-2 transition-all duration-700",
											style: {
												width: `${pct}%`,
												background: step.fill
											},
											children: pct > 20 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-bold text-white",
												children: [pct, "%"]
											})
										})
									}),
									i < funnelData.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-[#E11D48] font-semibold mt-0.5 text-right",
										children: [100 - Math.round(funnelData[i + 1].value / step.value * 100), "% drop"]
									})
								] }, step.name);
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118] mb-1",
							children: "Customer Acquisition"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mb-4",
							children: "New vs returning customers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-4 mb-4",
							children: [{
								label: "New",
								color: "#E8450A"
							}, {
								label: "Returning",
								color: "#6366F1"
							}].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-3 h-3 rounded-sm",
									style: { background: l.color }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#6B6B82]",
									children: l.label
								})]
							}, l.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: 180,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: customerData,
								margin: {
									top: 0,
									right: 10,
									bottom: 0,
									left: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#F4F4F8",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tick: {
											fontSize: 11,
											fill: "#9B9BB8"
										},
										axisLine: false,
										tickLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: {
											fontSize: 11,
											fill: "#9B9BB8"
										},
										axisLine: false,
										tickLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "#fff",
										border: "1px solid #E2E2EC",
										borderRadius: "10px",
										fontSize: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "new",
										stackId: "a",
										fill: "#E8450A",
										radius: [
											0,
											0,
											0,
											0
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "returning",
										stackId: "a",
										fill: "#6366F1",
										radius: [
											4,
											4,
											0,
											0
										]
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-4 border-b border-[#F4F4F8]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Top Products by Conversion"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mt-0.5",
							children: "Last 30 days"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-[#F4F4F8]",
						children: topProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-5 py-3.5 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 h-6 rounded-lg bg-[#F4F4F8] flex items-center justify-center text-xs font-bold text-[#9B9BB8] flex-shrink-0",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-[#111118] truncate",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mt-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] text-[#9B9BB8]",
											children: [p.views.toLocaleString(), " views"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] text-[#9B9BB8]",
											children: [p.purchases.toLocaleString(), " sales"]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right flex-shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono font-bold text-sm text-[#E8450A]",
										children: [p.rate, "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-[#9B9BB8]",
										children: "conv. rate"
									})]
								})
							]
						}, p.name))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-4 border-b border-[#F4F4F8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-[#111118]",
						children: "Vendor Performance"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
							children: [
								"Vendor",
								"Revenue",
								"Orders",
								"AOV",
								"Rating",
								"Growth"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: [
								{
									name: "iZone Official",
									revenue: "$2.14M",
									orders: 3241,
									aov: "$660",
									rating: 4.9,
									growth: "+24%",
									up: true
								},
								{
									name: "TechHub Pro",
									revenue: "$1.82M",
									orders: 2108,
									aov: "$863",
									rating: 4.7,
									growth: "+18%",
									up: true
								},
								{
									name: "NikeWorld",
									revenue: "$498K",
									orders: 5621,
									aov: "$89",
									rating: 4.8,
									growth: "+32%",
									up: true
								},
								{
									name: "SoundVault",
									revenue: "$412K",
									orders: 1842,
									aov: "$224",
									rating: 4.8,
									growth: "+12%",
									up: true
								},
								{
									name: "HomeElite",
									revenue: "$184K",
									orders: 849,
									aov: "$217",
									rating: 4.7,
									growth: "-4%",
									up: false
								}
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-[#F9F9FC] transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-semibold text-[#111118]",
										children: v.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono font-bold text-[#111118]",
										children: v.revenue
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono text-[#111118]",
										children: v.orders.toLocaleString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono text-[#111118]",
										children: v.aov
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3.5 h-3.5 text-[#F59E0B]",
												viewBox: "0 0 20 20",
												fill: "currentColor",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-semibold text-sm text-[#111118]",
												children: v.rating
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-mono font-bold text-sm ${v.up ? "text-[#059669]" : "text-[#E11D48]"}`,
											children: v.growth
										})
									})
								]
							}, v.name))
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { AnalyticsAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5hbHl0aWNzQWRtaW4tWjI3Umw1VFYuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL0FuYWx5dGljc0FkbWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmVhQ2hhcnQsIEFyZWEsIEJhckNoYXJ0LCBCYXIsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJ1xuaW1wb3J0IHsgc2FsZXNEYXRhIH0gZnJvbSAnLi4vYWRtaW5EYXRhJ1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG5jb25zdCBmdW5uZWxEYXRhID0gW1xuICB7IG5hbWU6ICdQcm9kdWN0IFZpZXdzJywgdmFsdWU6IDQ4MjAwLCBmaWxsOiAnIzYzNjZGMScgfSxcbiAgeyBuYW1lOiAnQWRkIHRvIENhcnQnLCB2YWx1ZTogMTI4NDAsIGZpbGw6ICcjOEI1Q0Y2JyB9LFxuICB7IG5hbWU6ICdDaGVja291dCcsIHZhbHVlOiA2NDIwLCBmaWxsOiAnI0E3OEJGQScgfSxcbiAgeyBuYW1lOiAnUHVyY2hhc2UnLCB2YWx1ZTogNDI4NCwgZmlsbDogJyNFODQ1MEEnIH0sXG5dXG5cbmNvbnN0IGN1c3RvbWVyRGF0YSA9IFtcbiAgeyBtb250aDogJ0phbicsIG5ldzogNDIwLCByZXR1cm5pbmc6IDI0MCB9LFxuICB7IG1vbnRoOiAnRmViJywgbmV3OiA1ODAsIHJldHVybmluZzogMzEwIH0sXG4gIHsgbW9udGg6ICdNYXInLCBuZXc6IDY0MCwgcmV0dXJuaW5nOiAzOTAgfSxcbiAgeyBtb250aDogJ0FwcicsIG5ldzogNTIwLCByZXR1cm5pbmc6IDQyMCB9LFxuICB7IG1vbnRoOiAnTWF5JywgbmV3OiA3ODAsIHJldHVybmluZzogNDgwIH0sXG4gIHsgbW9udGg6ICdKdW4nLCBuZXc6IDg0MCwgcmV0dXJuaW5nOiA1MjAgfSxcbl1cblxuY29uc3QgdG9wUHJvZHVjdHMgPSBbXG4gIHsgbmFtZTogJ1RoZSBPcmRpbmFyeSBIQSAyJScsIHZpZXdzOiA0ODIwMCwgY2FydDogMTI4NDAsIHB1cmNoYXNlczogODQyMSwgcmF0ZTogMTcuNSB9LFxuICB7IG5hbWU6ICdOaWtlIEFpciBNYXggMjcwJywgdmlld3M6IDM4NDAwLCBjYXJ0OiA5ODIwLCBwdXJjaGFzZXM6IDU2MjEsIHJhdGU6IDE0LjYgfSxcbiAgeyBuYW1lOiAnU29ueSBXSC0xMDAwWE01Jywgdmlld3M6IDIyODAwLCBjYXJ0OiA1NDgwLCBwdXJjaGFzZXM6IDE4NDIsIHJhdGU6IDguMSB9LFxuICB7IG5hbWU6ICdEeXNvbiBTdXBlcnNvbmljJywgdmlld3M6IDE4NDAwLCBjYXJ0OiA0MTIwLCBwdXJjaGFzZXM6IDEyODQsIHJhdGU6IDcuMCB9LFxuICB7IG5hbWU6ICdNYWNCb29rIEFpciBNMycsIHZpZXdzOiAxNDIwMCwgY2FydDogMjg0MCwgcHVyY2hhc2VzOiA4OTIsIHJhdGU6IDYuMyB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3NBZG1pbih7IG9uTmF2aWdhdGU6IF8gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTZcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5BbmFseXRpY3M8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkI4Ml0gbXQtMC41XCI+UGxhdGZvcm0gcGVyZm9ybWFuY2Ugb3ZlcnZpZXc8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAge1snNyBEYXlzJywgJzMwIERheXMnLCAnOTAgRGF5cycsICdUaGlzIFllYXInXS5tYXAoKGYsIGkpID0+IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtmfSBjbGFzc05hbWU9e2BweC0zIHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCAke2kgPT09IDEgPyAnYmctWyNFODQ1MEFdIHRleHQtd2hpdGUnIDogJ2JvcmRlciBib3JkZXItWyNFMkUyRUNdIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XSd9YH0+XG4gICAgICAgICAgICAgIHtmfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBUb3AgbWV0cmljcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICB7W1xuICAgICAgICAgIHsgbGFiZWw6ICdUb3RhbCBSZXZlbnVlJywgdmFsdWU6ICckMjg0LDgxOScsIGRlbHRhOiAnKzE4LjQlJywgdXA6IHRydWUgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnQ29udmVyc2lvbiBSYXRlJywgdmFsdWU6ICc4LjklJywgZGVsdGE6ICcrMS4yJScsIHVwOiB0cnVlIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0F2ZyBPcmRlciBWYWx1ZScsIHZhbHVlOiAnJDE0Ny4yMCcsIGRlbHRhOiAnLTIuMSUnLCB1cDogZmFsc2UgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnQ3VzdG9tZXIgTFRWJywgdmFsdWU6ICckMzI0LjgwJywgZGVsdGE6ICcrOC42JScsIHVwOiB0cnVlIH0sXG4gICAgICAgIF0ubWFwKG0gPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXttLmxhYmVsfSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e20ubGFiZWx9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYmxhY2sgdGV4dC0yeGwgdGV4dC1bIzExMTExOF0gbXQtMlwiPnttLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIGZvbnQtYm9sZCBtdC0xICR7bS51cCA/ICd0ZXh0LVsjMDU5NjY5XScgOiAndGV4dC1bI0UxMUQ0OF0nfWB9PlxuICAgICAgICAgICAgICB7bS51cCA/ICfihpEnIDogJ+KGkyd9IHttLmRlbHRhfSB2cyBsYXN0IHBlcmlvZFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmV2ZW51ZSBjaGFydCArIEZ1bm5lbCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTIgYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTVcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSBtYi0xXCI+UmV2ZW51ZSBUcmVuZDwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBtYi01XCI+MTItd2VlayByb2xsaW5nIHJldmVudWU8L3A+XG4gICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsyMjB9PlxuICAgICAgICAgICAgPEFyZWFDaGFydCBkYXRhPXtzYWxlc0RhdGF9IG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAxMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH19PlxuICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkMVwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjRTg0NTBBXCIgc3RvcE9wYWNpdHk9ezAuMn0gLz5cbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjRTg0NTBBXCIgc3RvcE9wYWNpdHk9ezB9IC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjRjRGNEY4XCIgdmVydGljYWw9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cImRhdGVcIiB0aWNrPXt7IGZvbnRTaXplOiAxMSwgZmlsbDogJyM5QjlCQjgnIH19IGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICA8WUF4aXMgdGljaz17eyBmb250U2l6ZTogMTEsIGZpbGw6ICcjOUI5QkI4JyB9fSBheGlzTGluZT17ZmFsc2V9IHRpY2tMaW5lPXtmYWxzZX0gdGlja0Zvcm1hdHRlcj17diA9PiBgJCR7KHYgLyAxMDAwKS50b0ZpeGVkKDApfWtgfSAvPlxuICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnLCBib3JkZXI6ICcxcHggc29saWQgI0UyRTJFQycsIGJvcmRlclJhZGl1czogJzEwcHgnLCBmb250U2l6ZTogMTIgfX0gZm9ybWF0dGVyPXsodjogdW5rbm93bikgPT4gW2AkJHtOdW1iZXIodikudG9Mb2NhbGVTdHJpbmcoKX1gLCAnUmV2ZW51ZSddfSAvPlxuICAgICAgICAgICAgICA8QXJlYSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicmV2ZW51ZVwiIHN0cm9rZT1cIiNFODQ1MEFcIiBzdHJva2VXaWR0aD17Mi41fSBmaWxsPVwidXJsKCNncmFkMSlcIiBkb3Q9e2ZhbHNlfSBhY3RpdmVEb3Q9e3sgcjogNSwgZmlsbDogJyNFODQ1MEEnLCBzdHJva2VXaWR0aDogMCB9fSAvPlxuICAgICAgICAgICAgPC9BcmVhQ2hhcnQ+XG4gICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRnVubmVsICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gbWItMVwiPkNvbnZlcnNpb24gRnVubmVsPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG1iLTRcIj5Qcm9kdWN0IHZpZXcg4oaSIFB1cmNoYXNlPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yLjVcIj5cbiAgICAgICAgICAgIHtmdW5uZWxEYXRhLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwY3QgPSBNYXRoLnJvdW5kKChzdGVwLnZhbHVlIC8gZnVubmVsRGF0YVswXS52YWx1ZSkgKiAxMDApXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3N0ZXAubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzZCNkI4Ml0gZm9udC1tZWRpdW1cIj57c3RlcC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj57c3RlcC52YWx1ZS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOUI5QkI4XVwiPntwY3R9JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02IGJnLVsjRjRGNEY4XSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgcHItMiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwY3R9JWAsIGJhY2tncm91bmQ6IHN0ZXAuZmlsbCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3BjdCA+IDIwICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e3BjdH0lPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtpIDwgZnVubmVsRGF0YS5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1bI0UxMUQ0OF0gZm9udC1zZW1pYm9sZCBtdC0wLjUgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsxMDAgLSBNYXRoLnJvdW5kKChmdW5uZWxEYXRhW2kgKyAxXS52YWx1ZSAvIHN0ZXAudmFsdWUpICogMTAwKX0lIGRyb3BcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDdXN0b21lciBjaGFydCArIFRvcCBwcm9kdWN0cyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICB7LyogQ3VzdG9tZXJzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gbWItMVwiPkN1c3RvbWVyIEFjcXVpc2l0aW9uPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG1iLTRcIj5OZXcgdnMgcmV0dXJuaW5nIGN1c3RvbWVyczwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG1iLTRcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdOZXcnLCBjb2xvcjogJyNFODQ1MEEnIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdSZXR1cm5pbmcnLCBjb2xvcjogJyM2MzY2RjEnIH0sXG4gICAgICAgICAgICBdLm1hcChsID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2wubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMyBoLTMgcm91bmRlZC1zbVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGwuY29sb3IgfX0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e2wubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MTgwfT5cbiAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtjdXN0b21lckRhdGF9IG1hcmdpbj17eyB0b3A6IDAsIHJpZ2h0OiAxMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH19PlxuICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjRjRGNEY4XCIgdmVydGljYWw9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm1vbnRoXCIgdGljaz17eyBmb250U2l6ZTogMTEsIGZpbGw6ICcjOUI5QkI4JyB9fSBheGlzTGluZT17ZmFsc2V9IHRpY2tMaW5lPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgPFlBeGlzIHRpY2s9e3sgZm9udFNpemU6IDExLCBmaWxsOiAnIzlCOUJCOCcgfX0gYXhpc0xpbmU9e2ZhbHNlfSB0aWNrTGluZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZicsIGJvcmRlcjogJzFweCBzb2xpZCAjRTJFMkVDJywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIGZvbnRTaXplOiAxMiB9fSAvPlxuICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJuZXdcIiBzdGFja0lkPVwiYVwiIGZpbGw9XCIjRTg0NTBBXCIgcmFkaXVzPXtbMCwgMCwgMCwgMF19IC8+XG4gICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cInJldHVybmluZ1wiIHN0YWNrSWQ9XCJhXCIgZmlsbD1cIiM2MzY2RjFcIiByYWRpdXM9e1s0LCA0LCAwLCAwXX0gLz5cbiAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVG9wIHByb2R1Y3RzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5Ub3AgUHJvZHVjdHMgYnkgQ29udmVyc2lvbjwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG10LTAuNVwiPkxhc3QgMzAgZGF5czwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgIHt0b3BQcm9kdWN0cy5tYXAoKHAsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3AubmFtZX0gY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTYgaC02IHJvdW5kZWQtbGcgYmctWyNGNEY0RjhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHMgZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHRydW5jYXRlXCI+e3AubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XVwiPntwLnZpZXdzLnRvTG9jYWxlU3RyaW5nKCl9IHZpZXdzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XVwiPntwLnB1cmNoYXNlcy50b0xvY2FsZVN0cmluZygpfSBzYWxlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gdGV4dC1bI0U4NDUwQV1cIj57cC5yYXRlfSU8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjOUI5QkI4XVwiPmNvbnYuIHJhdGU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBWZW5kb3IgYW5hbHl0aWNzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktNCBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5WZW5kb3IgUGVyZm9ybWFuY2U8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge1snVmVuZG9yJywgJ1JldmVudWUnLCAnT3JkZXJzJywgJ0FPVicsICdSYXRpbmcnLCAnR3Jvd3RoJ10ubWFwKGggPT4gKFxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17aH0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTUgcHktMyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj57aH08L3RoPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnaVpvbmUgT2ZmaWNpYWwnLCByZXZlbnVlOiAnJDIuMTRNJywgb3JkZXJzOiAzMjQxLCBhb3Y6ICckNjYwJywgcmF0aW5nOiA0LjksIGdyb3d0aDogJysyNCUnLCB1cDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1RlY2hIdWIgUHJvJywgcmV2ZW51ZTogJyQxLjgyTScsIG9yZGVyczogMjEwOCwgYW92OiAnJDg2MycsIHJhdGluZzogNC43LCBncm93dGg6ICcrMTglJywgdXA6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOaWtlV29ybGQnLCByZXZlbnVlOiAnJDQ5OEsnLCBvcmRlcnM6IDU2MjEsIGFvdjogJyQ4OScsIHJhdGluZzogNC44LCBncm93dGg6ICcrMzIlJywgdXA6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdTb3VuZFZhdWx0JywgcmV2ZW51ZTogJyQ0MTJLJywgb3JkZXJzOiAxODQyLCBhb3Y6ICckMjI0JywgcmF0aW5nOiA0LjgsIGdyb3d0aDogJysxMiUnLCB1cDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0hvbWVFbGl0ZScsIHJldmVudWU6ICckMTg0SycsIG9yZGVyczogODQ5LCBhb3Y6ICckMjE3JywgcmF0aW5nOiA0LjcsIGdyb3d0aDogJy00JScsIHVwOiBmYWxzZSB9LFxuICAgICAgICAgICAgICBdLm1hcCh2ID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXt2Lm5hbWV9IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57di5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPnt2LnJldmVudWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSBmb250LW1vbm8gdGV4dC1bIzExMTExOF1cIj57di5vcmRlcnMudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtbW9ubyB0ZXh0LVsjMTExMTE4XVwiPnt2LmFvdn08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtWyNGNTlFMEJdXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTkuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuMDcgMy4yOTJhMSAxIDAgMDAuOTUuNjloMy40NjJjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTIuOCAyLjAzNGExIDEgMCAwMC0uMzY0IDEuMTE4bDEuMDcgMy4yOTJjLjMuOTIxLS43NTUgMS42ODgtMS41NCAxLjExOGwtMi44LTIuMDM0YTEgMSAwIDAwLTEuMTc1IDBsLTIuOCAyLjAzNGMtLjc4NC41Ny0xLjgzOC0uMTk3LTEuNTM5LTEuMTE4bDEuMDctMy4yOTJhMSAxIDAgMDAtLjM2NC0xLjExOEwyLjk4IDguNzJjLS43ODMtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDMuNDYxYTEgMSAwIDAwLjk1MS0uNjlsMS4wNy0zLjI5MnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQtc20gdGV4dC1bIzExMTExOF1cIj57di5yYXRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXNtICR7di51cCA/ICd0ZXh0LVsjMDU5NjY5XScgOiAndGV4dC1bI0UxMUQ0OF0nfWB9Pnt2Lmdyb3d0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsSUFBTSxhQUFhO0NBQ2pCO0VBQUUsTUFBTTtFQUFpQixPQUFPO0VBQU8sTUFBTTtDQUFVO0NBQ3ZEO0VBQUUsTUFBTTtFQUFlLE9BQU87RUFBTyxNQUFNO0NBQVU7Q0FDckQ7RUFBRSxNQUFNO0VBQVksT0FBTztFQUFNLE1BQU07Q0FBVTtDQUNqRDtFQUFFLE1BQU07RUFBWSxPQUFPO0VBQU0sTUFBTTtDQUFVO0FBQ25EO0FBRUEsSUFBTSxlQUFlO0NBQ25CO0VBQUUsT0FBTztFQUFPLEtBQUs7RUFBSyxXQUFXO0NBQUk7Q0FDekM7RUFBRSxPQUFPO0VBQU8sS0FBSztFQUFLLFdB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