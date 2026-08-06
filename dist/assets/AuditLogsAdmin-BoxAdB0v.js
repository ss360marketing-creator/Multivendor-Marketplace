import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/pages/AuditLogsAdmin.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var logs = [
	{
		id: "LOG-1001",
		user: "Alex Admin",
		role: "Super Admin",
		action: "Updated homepage hero banner",
		module: "Storefront",
		record: "Hero Slide #2",
		ip: "192.168.1.42",
		status: "success",
		time: "Jul 25, 2025 · 14:32"
	},
	{
		id: "LOG-1002",
		user: "Taylor Kim",
		role: "Marketing Manager",
		action: "Created Flash Sale \"Summer Blitz\"",
		module: "Marketing",
		record: "Flash Sale #28",
		ip: "10.0.0.14",
		status: "success",
		time: "Jul 25, 2025 · 13:18"
	},
	{
		id: "LOG-1003",
		user: "Morgan Lee",
		role: "Store Manager",
		action: "Changed product price",
		module: "Products",
		record: "SKU: APL-MBA-M3",
		ip: "10.0.0.22",
		status: "success",
		time: "Jul 25, 2025 · 11:04"
	},
	{
		id: "LOG-1004",
		user: "Sam Rivera",
		role: "Finance Manager",
		action: "Processed payout to SoundVault",
		module: "Finance",
		record: "Payout #PAY-4821",
		ip: "10.0.0.31",
		status: "success",
		time: "Jul 24, 2025 · 17:55"
	},
	{
		id: "LOG-1005",
		user: "Jamie Cruz",
		role: "Admin",
		action: "Approved vendor application",
		module: "Vendors",
		record: "Vendor: LuxGoods Ltd",
		ip: "192.168.1.18",
		status: "success",
		time: "Jul 24, 2025 · 16:42"
	},
	{
		id: "LOG-1006",
		user: "Unknown",
		role: "—",
		action: "Failed login attempt (3rd)",
		module: "Auth",
		record: "user: admin@nexus.com",
		ip: "84.201.88.12",
		status: "failed",
		time: "Jul 24, 2025 · 15:01"
	},
	{
		id: "LOG-1007",
		user: "Alex Admin",
		role: "Super Admin",
		action: "Updated commission rule for Electronics",
		module: "Finance",
		record: "Commission Rule #3",
		ip: "192.168.1.42",
		status: "success",
		time: "Jul 24, 2025 · 12:28"
	},
	{
		id: "LOG-1008",
		user: "Morgan Lee",
		role: "Store Manager",
		action: "Bulk-published 24 products",
		module: "Products",
		record: "24 Products",
		ip: "10.0.0.22",
		status: "success",
		time: "Jul 23, 2025 · 10:15"
	},
	{
		id: "LOG-1009",
		user: "Taylor Kim",
		role: "Marketing Manager",
		action: "Deleted expired coupon SUMMER10",
		module: "Marketing",
		record: "Coupon: SUMMER10",
		ip: "10.0.0.14",
		status: "success",
		time: "Jul 23, 2025 · 09:48"
	},
	{
		id: "LOG-1010",
		user: "Jamie Cruz",
		role: "Admin",
		action: "Suspended vendor HomeElite",
		module: "Vendors",
		record: "Vendor: HomeElite",
		ip: "192.168.1.18",
		status: "warning",
		time: "Jul 22, 2025 · 16:02"
	}
];
var modules = [
	"All Modules",
	"Storefront",
	"Products",
	"Orders",
	"Vendors",
	"Marketing",
	"Finance",
	"Auth",
	"Settings"
];
var STATUS_CLS = {
	success: "bg-[#D1FAE5] text-[#065F46]",
	failed: "bg-[#FEE2E2] text-[#991B1B]",
	warning: "bg-[#FEF3C7] text-[#92400E]"
};
var MODULE_CLS = {
	Storefront: "bg-[#EEF2FF] text-[#4338CA]",
	Products: "bg-[#F0FDF4] text-[#166534]",
	Orders: "bg-[#FFF7ED] text-[#9A3412]",
	Vendors: "bg-[#FDF4FF] text-[#86198F]",
	Marketing: "bg-[#FFF1F2] text-[#9F1239]",
	Finance: "bg-[#F0F9FF] text-[#075985]",
	Auth: "bg-[#FEF2F2] text-[#991B1B]",
	Settings: "bg-[#F4F4F8] text-[#5B5B72]"
};
function AuditLogsAdmin({ onNavigate: _ }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [module, setModule] = (0, import_react.useState)("All Modules");
	const [status, setStatus] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => logs.filter((l) => {
		const matchSearch = !search || l.action.toLowerCase().includes(search.toLowerCase()) || l.user.toLowerCase().includes(search.toLowerCase());
		const matchModule = module === "All Modules" || l.module === module;
		const matchStatus = status === "all" || l.status === status;
		return matchSearch && matchModule && matchStatus;
	}), [
		search,
		module,
		status
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Audit Logs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Full activity trail for compliance and security"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
						children: "Export CSV"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
						children: "Set Retention"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-4",
				children: [
					{
						label: "Events Today",
						value: "284",
						color: "text-[#111118]"
					},
					{
						label: "Failed Attempts",
						value: "3",
						color: "text-[#E11D48]"
					},
					{
						label: "Active Sessions",
						value: "7",
						color: "text-[#059669]"
					},
					{
						label: "Log Retention",
						value: "90 days",
						color: "text-[#6366F1]"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] p-4 flex items-center gap-3 flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 min-w-[200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9BB8]",
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
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: "Search actions, users...",
							className: "w-full h-9 pl-9 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: module,
						onChange: (e) => setModule(e.target.value),
						className: "h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none",
						children: modules.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 bg-[#F4F4F8] rounded-lg p-1",
						children: [
							{
								key: "all",
								label: "All"
							},
							{
								key: "success",
								label: "Success"
							},
							{
								key: "failed",
								label: "Failed"
							},
							{
								key: "warning",
								label: "Warning"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStatus(s.key),
							className: `px-3 py-1 rounded-md text-xs font-semibold transition-all ${status === s.key ? "bg-white shadow-sm text-[#111118]" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
							children: s.label
						}, s.key))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-[#F4F4F8]",
					children: filtered.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 px-5 py-4 hover:bg-[#F9F9FC] transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2 h-2 rounded-full mt-2 flex-shrink-0 ${log.status === "success" ? "bg-[#059669]" : log.status === "failed" ? "bg-[#E11D48]" : "bg-[#D97706]"}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111118]",
											children: log.action
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full ${MODULE_CLS[log.module] ?? "bg-[#F4F4F8] text-[#6B6B82]"}`,
											children: log.module
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full ${STATUS_CLS[log.status]}`,
											children: log.status
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mt-1 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-[#9B9BB8]",
											children: [
												"by ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6B6B82]",
													children: log.user
												}),
												" (",
												log.role,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#E2E2EC]",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-[#9B9BB8]",
											children: ["Record: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[#6B6B82]",
												children: log.record
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#E2E2EC]",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-mono text-[#9B9BB8]",
											children: ["IP: ", log.ip]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#9B9BB8] flex-shrink-0 mt-0.5",
								children: log.time
							})
						]
					}, log.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 py-3 border-t border-[#F4F4F8]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-[#9B9BB8]",
						children: [
							"Showing ",
							filtered.length,
							" of 8,492 events"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs font-semibold text-[#E8450A] hover:underline",
						children: "Load more"
					})]
				})]
			})
		]
	});
}
//#endregion
export { AuditLogsAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dzQWRtaW4tQm94QWRCMHYuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL0F1ZGl0TG9nc0FkbWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG5jb25zdCBsb2dzID0gW1xuICB7IGlkOiAnTE9HLTEwMDEnLCB1c2VyOiAnQWxleCBBZG1pbicsIHJvbGU6ICdTdXBlciBBZG1pbicsIGFjdGlvbjogJ1VwZGF0ZWQgaG9tZXBhZ2UgaGVybyBiYW5uZXInLCBtb2R1bGU6ICdTdG9yZWZyb250JywgcmVjb3JkOiAnSGVybyBTbGlkZSAjMicsIGlwOiAnMTkyLjE2OC4xLjQyJywgc3RhdHVzOiAnc3VjY2VzcycsIHRpbWU6ICdKdWwgMjUsIDIwMjUgwrcgMTQ6MzInIH0sXG4gIHsgaWQ6ICdMT0ctMTAwMicsIHVzZXI6ICdUYXlsb3IgS2ltJywgcm9sZTogJ01hcmtldGluZyBNYW5hZ2VyJywgYWN0aW9uOiAnQ3JlYXRlZCBGbGFzaCBTYWxlIFwiU3VtbWVyIEJsaXR6XCInLCBtb2R1bGU6ICdNYXJrZXRpbmcnLCByZWNvcmQ6ICdGbGFzaCBTYWxlICMyOCcsIGlwOiAnMTAuMC4wLjE0Jywgc3RhdHVzOiAnc3VjY2VzcycsIHRpbWU6ICdKdWwgMjUsIDIwMjUgwrcgMTM6MTgnIH0sXG4gIHsgaWQ6ICdMT0ctMTAwMycsIHVzZXI6ICdNb3JnYW4gTGVlJywgcm9sZTogJ1N0b3JlIE1hbmFnZXInLCBhY3Rpb246ICdDaGFuZ2VkIHByb2R1Y3QgcHJpY2UnLCBtb2R1bGU6ICdQcm9kdWN0cycsIHJlY29yZDogJ1NLVTogQVBMLU1CQS1NMycsIGlwOiAnMTAuMC4wLjIyJywgc3RhdHVzOiAnc3VjY2VzcycsIHRpbWU6ICdKdWwgMjUsIDIwMjUgwrcgMTE6MDQnIH0sXG4gIHsgaWQ6ICdMT0ctMTAwNCcsIHVzZXI6ICdTYW0gUml2ZXJhJywgcm9sZTogJ0ZpbmFuY2UgTWFuYWdlcicsIGFjdGlvbjogJ1Byb2Nlc3NlZCBwYXlvdXQgdG8gU291bmRWYXVsdCcsIG1vZHVsZTogJ0ZpbmFuY2UnLCByZWNvcmQ6ICdQYXlvdXQgI1BBWS00ODIxJywgaXA6ICcxMC4wLjAuMzEnLCBzdGF0dXM6ICdzdWNjZXNzJywgdGltZTogJ0p1bCAyNCwgMjAyNSDCtyAxNzo1NScgfSxcbiAgeyBpZDogJ0xPRy0xMDA1JywgdXNlcjogJ0phbWllIENydXonLCByb2xlOiAnQWRtaW4nLCBhY3Rpb246ICdBcHByb3ZlZCB2ZW5kb3IgYXBwbGljYXRpb24nLCBtb2R1bGU6ICdWZW5kb3JzJywgcmVjb3JkOiAnVmVuZG9yOiBMdXhHb29kcyBMdGQnLCBpcDogJzE5Mi4xNjguMS4xOCcsIHN0YXR1czogJ3N1Y2Nlc3MnLCB0aW1lOiAnSnVsIDI0LCAyMDI1IMK3IDE2OjQyJyB9LFxuICB7IGlkOiAnTE9HLTEwMDYnLCB1c2VyOiAnVW5rbm93bicsIHJvbGU6ICfigJQnLCBhY3Rpb246ICdGYWlsZWQgbG9naW4gYXR0ZW1wdCAoM3JkKScsIG1vZHVsZTogJ0F1dGgnLCByZWNvcmQ6ICd1c2VyOiBhZG1pbkBuZXh1cy5jb20nLCBpcDogJzg0LjIwMS44OC4xMicsIHN0YXR1czogJ2ZhaWxlZCcsIHRpbWU6ICdKdWwgMjQsIDIwMjUgwrcgMTU6MDEnIH0sXG4gIHsgaWQ6ICdMT0ctMTAwNycsIHVzZXI6ICdBbGV4IEFkbWluJywgcm9sZTogJ1N1cGVyIEFkbWluJywgYWN0aW9uOiAnVXBkYXRlZCBjb21taXNzaW9uIHJ1bGUgZm9yIEVsZWN0cm9uaWNzJywgbW9kdWxlOiAnRmluYW5jZScsIHJlY29yZDogJ0NvbW1pc3Npb24gUnVsZSAjMycsIGlwOiAnMTkyLjE2OC4xLjQyJywgc3RhdHVzOiAnc3VjY2VzcycsIHRpbWU6ICdKdWwgMjQsIDIwMjUgwrcgMTI6MjgnIH0sXG4gIHsgaWQ6ICdMT0ctMTAwOCcsIHVzZXI6ICdNb3JnYW4gTGVlJywgcm9sZTogJ1N0b3JlIE1hbmFnZXInLCBhY3Rpb246ICdCdWxrLXB1Ymxpc2hlZCAyNCBwcm9kdWN0cycsIG1vZHVsZTogJ1Byb2R1Y3RzJywgcmVjb3JkOiAnMjQgUHJvZHVjdHMnLCBpcDogJzEwLjAuMC4yMicsIHN0YXR1czogJ3N1Y2Nlc3MnLCB0aW1lOiAnSnVsIDIzLCAyMDI1IMK3IDEwOjE1JyB9LFxuICB7IGlkOiAnTE9HLTEwMDknLCB1c2VyOiAnVGF5bG9yIEtpbScsIHJvbGU6ICdNYXJrZXRpbmcgTWFuYWdlcicsIGFjdGlvbjogJ0RlbGV0ZWQgZXhwaXJlZCBjb3Vwb24gU1VNTUVSMTAnLCBtb2R1bGU6ICdNYXJrZXRpbmcnLCByZWNvcmQ6ICdDb3Vwb246IFNVTU1FUjEwJywgaXA6ICcxMC4wLjAuMTQnLCBzdGF0dXM6ICdzdWNjZXNzJywgdGltZTogJ0p1bCAyMywgMjAyNSDCtyAwOTo0OCcgfSxcbiAgeyBpZDogJ0xPRy0xMDEwJywgdXNlcjogJ0phbWllIENydXonLCByb2xlOiAnQWRtaW4nLCBhY3Rpb246ICdTdXNwZW5kZWQgdmVuZG9yIEhvbWVFbGl0ZScsIG1vZHVsZTogJ1ZlbmRvcnMnLCByZWNvcmQ6ICdWZW5kb3I6IEhvbWVFbGl0ZScsIGlwOiAnMTkyLjE2OC4xLjE4Jywgc3RhdHVzOiAnd2FybmluZycsIHRpbWU6ICdKdWwgMjIsIDIwMjUgwrcgMTY6MDInIH0sXG5dXG5cbmNvbnN0IG1vZHVsZXMgPSBbJ0FsbCBNb2R1bGVzJywgJ1N0b3JlZnJvbnQnLCAnUHJvZHVjdHMnLCAnT3JkZXJzJywgJ1ZlbmRvcnMnLCAnTWFya2V0aW5nJywgJ0ZpbmFuY2UnLCAnQXV0aCcsICdTZXR0aW5ncyddXG5cbmNvbnN0IFNUQVRVU19DTFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHN1Y2Nlc3M6ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nLFxuICBmYWlsZWQ6ICdiZy1bI0ZFRTJFMl0gdGV4dC1bIzk5MUIxQl0nLFxuICB3YXJuaW5nOiAnYmctWyNGRUYzQzddIHRleHQtWyM5MjQwMEVdJyxcbn1cblxuY29uc3QgTU9EVUxFX0NMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgU3RvcmVmcm9udDogJ2JnLVsjRUVGMkZGXSB0ZXh0LVsjNDMzOENBXScsXG4gIFByb2R1Y3RzOiAnYmctWyNGMEZERjRdIHRleHQtWyMxNjY1MzRdJyxcbiAgT3JkZXJzOiAnYmctWyNGRkY3RURdIHRleHQtWyM5QTM0MTJdJyxcbiAgVmVuZG9yczogJ2JnLVsjRkRGNEZGXSB0ZXh0LVsjODYxOThGXScsXG4gIE1hcmtldGluZzogJ2JnLVsjRkZGMUYyXSB0ZXh0LVsjOUYxMjM5XScsXG4gIEZpbmFuY2U6ICdiZy1bI0YwRjlGRl0gdGV4dC1bIzA3NTk4NV0nLFxuICBBdXRoOiAnYmctWyNGRUYyRjJdIHRleHQtWyM5OTFCMUJdJyxcbiAgU2V0dGluZ3M6ICdiZy1bI0Y0RjRGOF0gdGV4dC1bIzVCNUI3Ml0nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpdExvZ3NBZG1pbih7IG9uTmF2aWdhdGU6IF8gfTogUHJvcHMpIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbW9kdWxlLCBzZXRNb2R1bGVdID0gdXNlU3RhdGUoJ0FsbCBNb2R1bGVzJylcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdhbGwnKVxuXG4gIGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbygoKSA9PiBsb2dzLmZpbHRlcihsID0+IHtcbiAgICBjb25zdCBtYXRjaFNlYXJjaCA9ICFzZWFyY2ggfHwgbC5hY3Rpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHwgbC51c2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgY29uc3QgbWF0Y2hNb2R1bGUgPSBtb2R1bGUgPT09ICdBbGwgTW9kdWxlcycgfHwgbC5tb2R1bGUgPT09IG1vZHVsZVxuICAgIGNvbnN0IG1hdGNoU3RhdHVzID0gc3RhdHVzID09PSAnYWxsJyB8fCBsLnN0YXR1cyA9PT0gc3RhdHVzXG4gICAgcmV0dXJuIG1hdGNoU2VhcmNoICYmIG1hdGNoTW9kdWxlICYmIG1hdGNoU3RhdHVzXG4gIH0pLCBbc2VhcmNoLCBtb2R1bGUsIHN0YXR1c10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTVcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5BdWRpdCBMb2dzPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZCODJdIG10LTAuNVwiPkZ1bGwgYWN0aXZpdHkgdHJhaWwgZm9yIGNvbXBsaWFuY2UgYW5kIHNlY3VyaXR5PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XVwiPkV4cG9ydCBDU1Y8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0Y0RjRGOF1cIj5TZXQgUmV0ZW50aW9uPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdGF0cyBzdHJpcCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICB7W1xuICAgICAgICAgIHsgbGFiZWw6ICdFdmVudHMgVG9kYXknLCB2YWx1ZTogJzI4NCcsIGNvbG9yOiAndGV4dC1bIzExMTExOF0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0ZhaWxlZCBBdHRlbXB0cycsIHZhbHVlOiAnMycsIGNvbG9yOiAndGV4dC1bI0UxMUQ0OF0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0FjdGl2ZSBTZXNzaW9ucycsIHZhbHVlOiAnNycsIGNvbG9yOiAndGV4dC1bIzA1OTY2OV0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0xvZyBSZXRlbnRpb24nLCB2YWx1ZTogJzkwIGRheXMnLCBjb2xvcjogJ3RleHQtWyM2MzY2RjFdJyB9LFxuICAgICAgICBdLm1hcChrID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ay5sYWJlbH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBweC01IHB5LTRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntrLmxhYmVsfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtMnhsIG10LTEgJHtrLmNvbG9yfWB9PntrLnZhbHVlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZpbHRlcnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC00IGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGZsZXgtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSBtaW4tdy1bMjAwcHhdXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1bIzlCOUJCOF1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz48L3N2Zz5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWN0aW9ucywgdXNlcnMuLi5cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHBsLTkgcHItNCBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdIHBsYWNlaG9sZGVyOnRleHQtWyM5QjlCQjhdXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e21vZHVsZX0gb25DaGFuZ2U9e2UgPT4gc2V0TW9kdWxlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICB7bW9kdWxlcy5tYXAobSA9PiA8b3B0aW9uIGtleT17bX0+e219PC9vcHRpb24+KX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctWyNGNEY0RjhdIHJvdW5kZWQtbGcgcC0xXCI+XG4gICAgICAgICAge1t7IGtleTogJ2FsbCcsIGxhYmVsOiAnQWxsJyB9LCB7IGtleTogJ3N1Y2Nlc3MnLCBsYWJlbDogJ1N1Y2Nlc3MnIH0sIHsga2V5OiAnZmFpbGVkJywgbGFiZWw6ICdGYWlsZWQnIH0sIHsga2V5OiAnd2FybmluZycsIGxhYmVsOiAnV2FybmluZycgfV0ubWFwKHMgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Mua2V5fSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMocy5rZXkpfSBjbGFzc05hbWU9e2BweC0zIHB5LTEgcm91bmRlZC1tZCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgJHtzdGF0dXMgPT09IHMua2V5ID8gJ2JnLXdoaXRlIHNoYWRvdy1zbSB0ZXh0LVsjMTExMTE4XScgOiAndGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzZCNkI4Ml0nfWB9PntzLmxhYmVsfTwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTG9ncyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAge2ZpbHRlcmVkLm1hcChsb2cgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2xvZy5pZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNCBweC01IHB5LTQgaG92ZXI6YmctWyNGOUY5RkNdIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgIHsvKiBTdGF0dXMgZG90ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMiBoLTIgcm91bmRlZC1mdWxsIG10LTIgZmxleC1zaHJpbmstMCAke2xvZy5zdGF0dXMgPT09ICdzdWNjZXNzJyA/ICdiZy1bIzA1OTY2OV0nIDogbG9nLnN0YXR1cyA9PT0gJ2ZhaWxlZCcgPyAnYmctWyNFMTFENDhdJyA6ICdiZy1bI0Q5NzcwNl0nfWB9IC8+XG5cbiAgICAgICAgICAgICAgey8qIE1haW4gY29udGVudCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57bG9nLmFjdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCAke01PRFVMRV9DTFNbbG9nLm1vZHVsZV0gPz8gJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjNkI2QjgyXSd9YH0+e2xvZy5tb2R1bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgJHtTVEFUVVNfQ0xTW2xvZy5zdGF0dXNdfWB9Pntsb2cuc3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG10LTEgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+YnkgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPntsb2cudXNlcn08L3NwYW4+ICh7bG9nLnJvbGV9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNFMkUyRUNdXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+UmVjb3JkOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bIzZCNkI4Ml1cIj57bG9nLnJlY29yZH08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0UyRTJFQ11cIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtWyM5QjlCQjhdXCI+SVA6IHtsb2cuaXB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogVGltZSAqL31cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBmbGV4LXNocmluay0wIG10LTAuNVwiPntsb2cudGltZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNSBweS0zIGJvcmRlci10IGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+U2hvd2luZyB7ZmlsdGVyZWQubGVuZ3RofSBvZiA4LDQ5MiBldmVudHM8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0U4NDUwQV0gaG92ZXI6dW5kZXJsaW5lXCI+TG9hZCBtb3JlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLElBQU0sT0FBTztDQUNYO0VBQUUsSUFBSTtFQUFZLE1BQU07RUFBYyxNQUFNO0VBQWUsUUFBUTtFQUFnQyxRQUFRO0VBQWMsUUFBUTtFQUFpQixJQUFJO0VBQWdCLFFBQVE7RUFBVyxNQUFNO0NBQXVCO0NBQ3ROO0VBQUUsSUFBSTtFQUFZLE1BQU07RUFBYyxNQUFNO0VBQXFCLFFBQVE7RUFBcUMsUUFBUTtFQUFhLFFBQVE7RUFBa0IsSUFBSTtFQUFhLFFBQVE7RUFBVyxNQUFNO0NBQXVCO0NBQzlOO0VBQUUsSUFBSTtFQUFZLE1BQU07RUFBYyxNQUFNO0VBQWlCLFFBQVE7RUFBeUIsUUFBUTtFQUFZLFFBQVE7RUFBbUIsSUFBSTtFQUFhLFFBQVE7RUFBVyxNQUFNO0NBQXVCO0NBQzlNO0VBQUUsSUFBSTtFQUFZLE1BQU07RUFBYyxNQUFNO0VBQW1CLFFBQVE7RUFBa0MsUUFBUTtFQUFXLFFBQVE7RUFBb0IsSUFBSTtFQUFhLFFBQVE7RUFBVyxNQUFNO0NBQXVCO0NBQ3pOO0VBQUUsSUFBSTtFQUFZLE1BQU07RUFBYyxNQUFNO0VBQVMsUUFBUTtFQUErQixRQUFRO0VBQVcsUUFBUTtFQUF3QixJQUFJO0VBQWdCLFFBQVE7RUFBVyxNQUFNO0NBQXVCO0NBQ25OO0VBQUUsSUFBSTtFQUFZLE1BQU07RUFBVyxNQUFNO0VBQUssUUFBUTtFQUE4QixRQUFRO0VBQVEsUUFBUTtFQUF5QixJQUFJO0VBQWdCLFFBQVE7RUFBVSxNQUFNO0NBQXVCO0NBQ3hNO0VBQUUs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