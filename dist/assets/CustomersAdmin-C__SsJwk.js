import { g as __toESM, i as require_jsx_runtime, p as require_react, t as useSession } from "./index-BM41bWnP.js";
import { c as listAdminCustomers, f as updateAdminCustomer, t as createAdminCustomer } from "./admin-jnfUkW2D.js";
//#region src/admin/components/AddCustomerModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AddCustomerModal({ isOpen, onClose, onSave }) {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [segment, setSegment] = (0, import_react.useState)("New");
	const [initialSpent, setInitialSpent] = (0, import_react.useState)("0");
	if (!isOpen) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim() || !email.trim()) return;
		setSubmitting(true);
		try {
			const initials = name.trim().split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() || "CU";
			await onSave({
				id: `C-${Math.floor(1e3 + Math.random() * 9e3)}`,
				name: name.trim(),
				email: email.trim(),
				phone: phone.trim() || "+1 555-0100",
				avatar: initials,
				orders: 0,
				spent: parseFloat(initialSpent) || 0,
				ltv: parseFloat(initialSpent) || 0,
				segment,
				status: "active",
				joined: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
					month: "short",
					year: "numeric"
				}),
				lastOrder: "Never"
			});
			onClose();
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-3xl border border-[#E2E2EC] max-w-md w-full shadow-2xl overflow-hidden space-y-4 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-2xl bg-[#E8450A]/10 flex items-center justify-center font-bold text-[#E8450A] text-lg",
						children: "👤"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-[#111118]",
						children: "Add New Customer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#6B6B82]",
						children: "Register a customer account manually"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "text-[#9B9BB8] hover:text-[#111118]",
					children: "✕"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-3.5 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-semibold text-[#111118] uppercase",
						children: "Full Name *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						required: true,
						placeholder: "e.g. Eleanor Vance",
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "mt-1 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-semibold text-[#111118] uppercase",
						children: "Email Address *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						placeholder: "eleanor@example.com",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "mt-1 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "tel",
							placeholder: "+1 555-0199",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Customer Segment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: segment,
							onChange: (e) => setSegment(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "New",
									children: "New"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Regular",
									children: "Regular"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "VIP",
									children: "VIP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "At-Risk",
									children: "At-Risk"
								})
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-semibold text-[#111118] uppercase",
						children: "Initial Lifetime Spend ($)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						step: "0.01",
						value: initialSpent,
						onChange: (e) => setInitialSpent(e.target.value),
						className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] font-mono font-bold text-sm outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t border-[#E2E2EC] flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: submitting,
							className: "flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-xs hover:bg-[#C93A07]",
							children: submitting ? "Registering..." : "✓ Add Customer"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/admin/pages/CustomersAdmin.tsx
var SEGMENT_CLS = {
	VIP: "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
	Regular: "bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]",
	New: "bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]",
	"At-Risk": "bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]"
};
var avatarColors = [
	"#E8450A",
	"#6366F1",
	"#059669",
	"#D97706",
	"#EC4899",
	"#0EA5E9",
	"#8B5CF6",
	"#14B8A6"
];
var INITIAL_CUSTOMERS = [
	{
		id: "C-1001",
		name: "Sarah Mitchell",
		email: "sarah.m@email.com",
		avatar: "SM",
		phone: "+1 555-0191",
		orders: 24,
		spent: 4280,
		ltv: 5840,
		segment: "VIP",
		status: "active",
		joined: "Jan 2024",
		lastOrder: "2 days ago"
	},
	{
		id: "C-1002",
		name: "James Chen",
		email: "j.chen@email.com",
		avatar: "JC",
		phone: "+1 555-0142",
		orders: 8,
		spent: 1820,
		ltv: 2100,
		segment: "Regular",
		status: "active",
		joined: "Mar 2024",
		lastOrder: "1 week ago"
	},
	{
		id: "C-1003",
		name: "Priya Sharma",
		email: "priya.s@email.com",
		avatar: "PS",
		phone: "+1 555-0187",
		orders: 41,
		spent: 9640,
		ltv: 12400,
		segment: "VIP",
		status: "active",
		joined: "Oct 2023",
		lastOrder: "Yesterday"
	},
	{
		id: "C-1004",
		name: "Omar Abdullah",
		email: "omar.a@email.com",
		avatar: "OA",
		phone: "+1 555-0123",
		orders: 2,
		spent: 189,
		ltv: 189,
		segment: "New",
		status: "active",
		joined: "Jul 2025",
		lastOrder: "3 weeks ago"
	},
	{
		id: "C-1005",
		name: "Emma Walsh",
		email: "e.walsh@email.com",
		avatar: "EW",
		phone: "+1 555-0156",
		orders: 15,
		spent: 3210,
		ltv: 4100,
		segment: "Regular",
		status: "inactive",
		joined: "Jun 2024",
		lastOrder: "2 months ago"
	},
	{
		id: "C-1006",
		name: "Takeshi Mori",
		email: "takeshi@email.com",
		avatar: "TM",
		phone: "+1 555-0199",
		orders: 62,
		spent: 14820,
		ltv: 18200,
		segment: "VIP",
		status: "active",
		joined: "Aug 2023",
		lastOrder: "Today"
	},
	{
		id: "C-1007",
		name: "Luna Rodriguez",
		email: "luna.r@email.com",
		avatar: "LR",
		phone: "+1 555-0174",
		orders: 5,
		spent: 640,
		ltv: 750,
		segment: "Regular",
		status: "active",
		joined: "Apr 2025",
		lastOrder: "4 days ago"
	},
	{
		id: "C-1008",
		name: "David Park",
		email: "d.park@email.com",
		avatar: "DP",
		phone: "+1 555-0133",
		orders: 0,
		spent: 0,
		ltv: 0,
		segment: "New",
		status: "inactive",
		joined: "Jul 2025",
		lastOrder: "Never"
	}
];
function CustomersAdmin({ onNavigate: _ }) {
	const session = useSession();
	const [search, setSearch] = (0, import_react.useState)("");
	const [segment, setSegment] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("spent");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [items, setItems] = (0, import_react.useState)(INITIAL_CUSTOMERS);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [showAddModal, setShowAddModal] = (0, import_react.useState)(false);
	const [actionSuccess, setActionSuccess] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!session.token) return;
		let cancelled = false;
		(async () => {
			setLoading(true);
			const response = await listAdminCustomers(session.token, {
				q: search || void 0,
				segment: segment === "all" ? void 0 : segment,
				limit: 100
			});
			if (!cancelled && response.success && response.data.length > 0) setItems(response.data);
			setLoading(false);
		})();
		return () => {
			cancelled = true;
		};
	}, [
		session.token,
		search,
		segment
	]);
	const filtered = (0, import_react.useMemo)(() => {
		return items.filter((c) => {
			const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search);
			const matchSegment = segment === "all" || c.segment === segment;
			return matchSearch && matchSegment;
		}).sort((a, b) => {
			if (sortBy === "spent") return b.spent - a.spent;
			if (sortBy === "orders") return b.orders - a.orders;
			if (sortBy === "ltv") return b.ltv - a.ltv;
			return 0;
		});
	}, [
		items,
		search,
		segment,
		sortBy
	]);
	const selectedCustomer = items.find((c) => c.id === selected);
	const kpiStats = (0, import_react.useMemo)(() => {
		const totalSpent = items.reduce((s, c) => s + c.spent, 0);
		const avgLtv = items.length > 0 ? totalSpent / items.length : 0;
		const vipCount = items.filter((c) => c.segment === "VIP").length;
		return {
			count: items.length,
			totalSpent,
			avgLtv,
			vipCount
		};
	}, [items]);
	const handleAddCustomer = async (customerData) => {
		const newCustomer = {
			id: customerData.id ?? `C-${Math.floor(1e3 + Math.random() * 9e3)}`,
			name: customerData.name ?? "New Customer",
			email: customerData.email ?? "customer@example.com",
			avatar: customerData.avatar ?? "NC",
			phone: customerData.phone ?? "+1 555-0100",
			orders: customerData.orders ?? 0,
			spent: customerData.spent ?? 0,
			ltv: customerData.ltv ?? 0,
			segment: customerData.segment ?? "New",
			status: customerData.status ?? "active",
			joined: customerData.joined ?? "Aug 2026",
			lastOrder: customerData.lastOrder ?? "Never"
		};
		if (session.token) try {
			await createAdminCustomer(session.token, {
				name: newCustomer.name,
				email: newCustomer.email,
				phone: newCustomer.phone,
				segment: newCustomer.segment
			});
		} catch {}
		setItems((prev) => [newCustomer, ...prev]);
		setActionSuccess(`Added customer ${newCustomer.name}`);
		setTimeout(() => setActionSuccess(null), 3e3);
	};
	const handleToggleStatus = async (customer) => {
		const nextStatus = customer.status === "active" ? "suspended" : "active";
		if (session.token) try {
			await updateAdminCustomer(session.token, customer.id, { status: nextStatus });
		} catch {}
		setItems((prev) => prev.map((c) => c.id === customer.id ? {
			...c,
			status: nextStatus
		} : c));
		setActionSuccess(`Updated ${customer.name} status to ${nextStatus}`);
		setTimeout(() => setActionSuccess(null), 3e3);
	};
	const handleExportCSV = () => {
		const headers = "ID,Name,Email,Phone,Orders,Spent ($),LTV ($),Segment,Status,Joined,Last Order\n";
		const rows = filtered.map((c) => `"${c.id}","${c.name}","${c.email}","${c.phone}",${c.orders},${c.spent},${c.ltv},"${c.segment}","${c.status}","${c.joined}","${c.lastOrder}"`).join("\n");
		const blob = new Blob([headers + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `customers-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-screen bg-[#F4F4F8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 p-6 space-y-5 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold text-[#111118]",
							children: "Customer Accounts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-[#6B6B82] mt-0.5",
							children: [kpiStats.count, " registered customer accounts"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleExportCSV,
								className: "px-4 py-2 border border-[#E2E2EC] bg-white rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									})
								}), "Export CSV"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setShowAddModal(true),
								className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20",
								children: "+ Add Customer"
							})]
						})]
					}),
					actionSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3 text-xs font-semibold text-[#059669]",
						children: ["✓ ", actionSuccess]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-4",
						children: [
							{
								label: "Total Customers",
								value: kpiStats.count.toString(),
								delta: "+12% MoM",
								color: "text-[#111118]"
							},
							{
								label: "VIP Customers",
								value: kpiStats.vipCount.toString(),
								delta: `${Math.round(kpiStats.vipCount / (kpiStats.count || 1) * 100)}% of total`,
								color: "text-[#D97706]"
							},
							{
								label: "Avg Lifetime Value (LTV)",
								value: `$${kpiStats.avgLtv.toFixed(2)}`,
								delta: "+8.6% MoM",
								color: "text-[#E8450A]"
							},
							{
								label: "Active Status Rate",
								value: "94.2%",
								delta: "-0.4% churn",
								color: "text-[#059669]"
							}
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm",
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
									className: "text-xs font-semibold text-[#059669] mt-1",
									children: k.delta
								})
							]
						}, k.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-[#E2E2EC] p-4 flex items-center gap-3 flex-wrap shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1 min-w-[200px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9BB8]",
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
									placeholder: "Search by customer name, email, phone...",
									className: "w-full h-10 pl-10 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 bg-[#F4F4F8] rounded-xl p-1",
								children: [
									"all",
									"VIP",
									"Regular",
									"New",
									"At-Risk"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSegment(s),
									className: `px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${segment === s ? "bg-white shadow-sm text-[#111118]" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
									children: s
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: sortBy,
								onChange: (e) => setSortBy(e.target.value),
								className: "h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm text-[#111118] outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "spent",
										children: "Sort: Total Spent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "orders",
										children: "Sort: Orders Count"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ltv",
										children: "Sort: LTV Value"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "Customer Name & Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "Segment"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "Orders"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "Total Spent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "LTV"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "Last Order"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-right px-5 py-3.5",
										children: "Action"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-[#F4F4F8]",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 8,
									className: "px-5 py-12 text-center text-sm text-[#6B6B82]",
									children: "Loading customer accounts..."
								}) }) : filtered.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									onClick: () => setSelected(selected === c.id ? null : c.id),
									className: `hover:bg-[#F9F9FC] cursor-pointer transition-colors ${selected === c.id ? "bg-[#FFF7F5]" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm",
													style: { background: avatarColors[i % avatarColors.length] },
													children: c.avatar
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-[#111118]",
													children: c.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-[#9B9BB8]",
													children: c.email
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${SEGMENT_CLS[c.segment] ?? "bg-[#F4F4F8] text-[#6B6B82]"}`,
												children: c.segment
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5 font-mono font-semibold text-[#111118]",
											children: c.orders
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-5 py-3.5 font-mono font-bold text-[#111118]",
											children: ["$", c.spent.toLocaleString()]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-5 py-3.5 font-mono font-bold text-[#E8450A]",
											children: ["$", c.ltv.toLocaleString()]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5 text-xs text-[#6B6B82]",
											children: c.lastOrder
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${c.status === "active" ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#FEE2E2] text-[#991B1B]"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-1.5 h-1.5 rounded-full ${c.status === "active" ? "bg-[#059669]" : "bg-[#E11D48]"}` }), c.status]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5 text-right",
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSelected(c.id),
												className: "px-3 py-1 bg-[#111118] text-white text-xs font-semibold rounded-lg hover:bg-[#E8450A] transition-colors",
												children: "View Profile"
											})
										})
									]
								}, c.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between px-5 py-3 border-t border-[#F4F4F8] text-xs text-[#9B9BB8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Showing ",
								filtered.length,
								" of ",
								items.length,
								" customers"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#111118]",
									children: "Page 1 of 1"
								})
							})]
						})]
					})
				]
			}),
			selectedCustomer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-84 bg-white border-l border-[#E2E2EC] flex flex-col flex-shrink-0 overflow-y-auto shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 py-4 border-b border-[#E2E2EC] bg-[#F9F9FC]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-sm text-[#111118]",
						children: "Customer Inspector"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelected(null),
						className: "w-7 h-7 rounded-lg hover:bg-[#E2E2EC] flex items-center justify-center text-[#9B9BB8]",
						children: "✕"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md",
								style: { background: avatarColors[items.indexOf(selectedCustomer) % avatarColors.length] },
								children: selectedCustomer.avatar
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-base text-[#111118]",
									children: selectedCustomer.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#9B9BB8]",
									children: selectedCustomer.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex mt-1.5 px-3 py-0.5 rounded-full text-xs font-bold ${SEGMENT_CLS[selectedCustomer.segment]}`,
									children: [
										"👑 ",
										selectedCustomer.segment,
										" Customer"
									]
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								{
									label: "Orders",
									value: selectedCustomer.orders
								},
								{
									label: "Spent",
									value: `$${selectedCustomer.spent.toLocaleString()}`
								},
								{
									label: "LTV",
									value: `$${selectedCustomer.ltv.toLocaleString()}`
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono font-black text-sm text-[#111118]",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-semibold text-[#9B9BB8] uppercase mt-0.5",
									children: s.label
								})]
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5 text-xs bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-4",
							children: [
								{
									label: "Phone",
									value: selectedCustomer.phone
								},
								{
									label: "Customer ID",
									value: selectedCustomer.id
								},
								{
									label: "Member Since",
									value: selectedCustomer.joined
								},
								{
									label: "Last Order",
									value: selectedCustomer.lastOrder
								},
								{
									label: "Account Status",
									value: selectedCustomer.status.toUpperCase()
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#9B9BB8]",
									children: f.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#111118] font-mono font-medium",
									children: f.value
								})]
							}, f.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => alert(`Email composition opened for ${selectedCustomer.email}`),
								className: "w-full py-2.5 bg-[#111118] text-white rounded-xl text-xs font-bold hover:bg-[#E8450A] transition-colors",
								children: "✉️ Send Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => void handleToggleStatus(selectedCustomer),
								className: `w-full py-2.5 rounded-xl text-xs font-bold border transition-colors ${selectedCustomer.status === "active" ? "border-[#FEE2E2] text-[#E11D48] hover:bg-[#FEE2E2]" : "border-[#BBF7D0] text-[#059669] hover:bg-[#F0FDF4]"}`,
								children: selectedCustomer.status === "active" ? "🚫 Suspend Account" : "✓ Activate Account"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t border-[#E2E2EC]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-wider text-[#9B9BB8] mb-3",
								children: "Recent Purchase Activity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2 text-xs",
								children: [{
									id: "ORD-98214",
									date: "2 days ago",
									amount: "$369.98",
									items: "Sony WH-1000XM5"
								}, {
									id: "ORD-96501",
									date: "1 week ago",
									amount: "$89.00",
									items: "Ceramic Tea Set"
								}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono font-bold text-[#111118]",
										children: o.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-[#9B9BB8]",
										children: [
											o.items,
											" · ",
											o.date
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-[#E8450A]",
										children: o.amount
									})]
								}, o.id))
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddCustomerModal, {
				isOpen: showAddModal,
				onClose: () => setShowAddModal(false),
				onSave: handleAddCustomer
			})
		]
	});
}
//#endregion
export { CustomersAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJzQWRtaW4tQ19fU3NKd2suanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvQWRkQ3VzdG9tZXJNb2RhbC50c3giLCIuLi8uLi9zcmMvYWRtaW4vcGFnZXMvQ3VzdG9tZXJzQWRtaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluQ3VzdG9tZXIgfSBmcm9tICdAL2FwaS9hZG1pbidcblxudHlwZSBQcm9wcyA9IHtcbiAgaXNPcGVuOiBib29sZWFuXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgb25TYXZlOiAoY3VzdG9tZXJEYXRhOiBQYXJ0aWFsPEFkbWluQ3VzdG9tZXI+KSA9PiBQcm9taXNlPHZvaWQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEN1c3RvbWVyTW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIG9uU2F2ZSB9OiBQcm9wcykge1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZWdtZW50LCBzZXRTZWdtZW50XSA9IHVzZVN0YXRlPCdWSVAnIHwgJ1JlZ3VsYXInIHwgJ05ldycgfCAnQXQtUmlzayc+KCdOZXcnKVxuICBjb25zdCBbaW5pdGlhbFNwZW50LCBzZXRJbml0aWFsU3BlbnRdID0gdXNlU3RhdGUoJzAnKVxuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIW5hbWUudHJpbSgpIHx8ICFlbWFpbC50cmltKCkpIHJldHVyblxuXG4gICAgc2V0U3VibWl0dGluZyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbml0aWFscyA9IG5hbWUudHJpbSgpLnNwbGl0KCcgJykubWFwKG4gPT4gblswXSkuam9pbignJykuc3Vic3RyaW5nKDAsIDIpLnRvVXBwZXJDYXNlKCkgfHwgJ0NVJ1xuICAgICAgY29uc3QgcGF5bG9hZDogUGFydGlhbDxBZG1pbkN1c3RvbWVyPiA9IHtcbiAgICAgICAgaWQ6IGBDLSR7TWF0aC5mbG9vcigxMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDApfWAsXG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLFxuICAgICAgICBwaG9uZTogcGhvbmUudHJpbSgpIHx8ICcrMSA1NTUtMDEwMCcsXG4gICAgICAgIGF2YXRhcjogaW5pdGlhbHMsXG4gICAgICAgIG9yZGVyczogMCxcbiAgICAgICAgc3BlbnQ6IHBhcnNlRmxvYXQoaW5pdGlhbFNwZW50KSB8fCAwLFxuICAgICAgICBsdHY6IHBhcnNlRmxvYXQoaW5pdGlhbFNwZW50KSB8fCAwLFxuICAgICAgICBzZWdtZW50LFxuICAgICAgICBzdGF0dXM6ICdhY3RpdmUnLFxuICAgICAgICBqb2luZWQ6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgbW9udGg6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KSxcbiAgICAgICAgbGFzdE9yZGVyOiAnTmV2ZXInLFxuICAgICAgfVxuXG4gICAgICBhd2FpdCBvblNhdmUocGF5bG9hZClcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzYwIHotNTAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG1heC13LW1kIHctZnVsbCBzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlbiBzcGFjZS15LTQgcC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC0yeGwgYmctWyNFODQ1MEFdLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LVsjRTg0NTBBXSB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgIPCfkaRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+QWRkIE5ldyBDdXN0b21lcjwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj5SZWdpc3RlciBhIGN1c3RvbWVyIGFjY291bnQgbWFudWFsbHk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInRleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyMxMTExMThdXCI+4pyVPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktMy41IHRleHQteHNcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+RnVsbCBOYW1lICo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEVsZWFub3IgVmFuY2VcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTEgcHgtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+RW1haWwgQWRkcmVzcyAqPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVsZWFub3JAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgaC0xMSBweC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrMSA1NTUtMDE5OVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTEwIHB4LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5DdXN0b21lciBTZWdtZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWdtZW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlZ21lbnQoZS50YXJnZXQudmFsdWUgYXMgdHlwZW9mIHNlZ21lbnQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOZXdcIj5OZXc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUmVndWxhclwiPlJlZ3VsYXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVklQXCI+VklQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF0LVJpc2tcIj5BdC1SaXNrPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+SW5pdGlhbCBMaWZldGltZSBTcGVuZCAoJCk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbml0aWFsU3BlbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEluaXRpYWxTcGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0zIHJvdW5kZWQteGwgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteHMgaG92ZXI6YmctWyNDOTNBMDddXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N1Ym1pdHRpbmcgPyAnUmVnaXN0ZXJpbmcuLi4nIDogJ+KckyBBZGQgQ3VzdG9tZXInfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluU2VjdGlvbiB9IGZyb20gJy4uL2FkbWluRGF0YSdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICdAL3N0YXRlL3Nlc3Npb24tc3RvcmUnXG5pbXBvcnQgQWRkQ3VzdG9tZXJNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0FkZEN1c3RvbWVyTW9kYWwnXG5pbXBvcnQge1xuICBjcmVhdGVBZG1pbkN1c3RvbWVyLFxuICBkZWxldGVBZG1pbkN1c3RvbWVyLFxuICBsaXN0QWRtaW5DdXN0b21lcnMsXG4gIHVwZGF0ZUFkbWluQ3VzdG9tZXIsXG4gIHR5cGUgQWRtaW5DdXN0b21lcixcbn0gZnJvbSAnQC9hcGkvYWRtaW4nXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG5jb25zdCBTRUdNRU5UX0NMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgVklQOiAnYmctWyNGRUYzQzddIHRleHQtWyM5MjQwMEVdIGJvcmRlciBib3JkZXItWyNGREU2OEFdJyxcbiAgUmVndWxhcjogJ2JnLVsjRUVGMkZGXSB0ZXh0LVsjNDMzOENBXSBib3JkZXIgYm9yZGVyLVsjQzdEMkZFXScsXG4gIE5ldzogJ2JnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XSBib3JkZXIgYm9yZGVyLVsjQTdGM0QwXScsXG4gICdBdC1SaXNrJzogJ2JnLVsjRkVFMkUyXSB0ZXh0LVsjOTkxQjFCXSBib3JkZXIgYm9yZGVyLVsjRkNBNUE1XScsXG59XG5cbmNvbnN0IGF2YXRhckNvbG9ycyA9IFsnI0U4NDUwQScsICcjNjM2NkYxJywgJyMwNTk2NjknLCAnI0Q5NzcwNicsICcjRUM0ODk5JywgJyMwRUE1RTknLCAnIzhCNUNGNicsICcjMTRCOEE2J11cblxuY29uc3QgSU5JVElBTF9DVVNUT01FUlM6IEFkbWluQ3VzdG9tZXJbXSA9IFtcbiAgeyBpZDogJ0MtMTAwMScsIG5hbWU6ICdTYXJhaCBNaXRjaGVsbCcsIGVtYWlsOiAnc2FyYWgubUBlbWFpbC5jb20nLCBhdmF0YXI6ICdTTScsIHBob25lOiAnKzEgNTU1LTAxOTEnLCBvcmRlcnM6IDI0LCBzcGVudDogNDI4MCwgbHR2OiA1ODQwLCBzZWdtZW50OiAnVklQJywgc3RhdHVzOiAnYWN0aXZlJywgam9pbmVkOiAnSmFuIDIwMjQnLCBsYXN0T3JkZXI6ICcyIGRheXMgYWdvJyB9LFxuICB7IGlkOiAnQy0xMDAyJywgbmFtZTogJ0phbWVzIENoZW4nLCBlbWFpbDogJ2ouY2hlbkBlbWFpbC5jb20nLCBhdmF0YXI6ICdKQycsIHBob25lOiAnKzEgNTU1LTAxNDInLCBvcmRlcnM6IDgsIHNwZW50OiAxODIwLCBsdHY6IDIxMDAsIHNlZ21lbnQ6ICdSZWd1bGFyJywgc3RhdHVzOiAnYWN0aXZlJywgam9pbmVkOiAnTWFyIDIwMjQnLCBsYXN0T3JkZXI6ICcxIHdlZWsgYWdvJyB9LFxuICB7IGlkOiAnQy0xMDAzJywgbmFtZTogJ1ByaXlhIFNoYXJtYScsIGVtYWlsOiAncHJpeWEuc0BlbWFpbC5jb20nLCBhdmF0YXI6ICdQUycsIHBob25lOiAnKzEgNTU1LTAxODcnLCBvcmRlcnM6IDQxLCBzcGVudDogOTY0MCwgbHR2OiAxMjQwMCwgc2VnbWVudDogJ1ZJUCcsIHN0YXR1czogJ2FjdGl2ZScsIGpvaW5lZDogJ09jdCAyMDIzJywgbGFzdE9yZGVyOiAnWWVzdGVyZGF5JyB9LFxuICB7IGlkOiAnQy0xMDA0JywgbmFtZTogJ09tYXIgQWJkdWxsYWgnLCBlbWFpbDogJ29tYXIuYUBlbWFpbC5jb20nLCBhdmF0YXI6ICdPQScsIHBob25lOiAnKzEgNTU1LTAxMjMnLCBvcmRlcnM6IDIsIHNwZW50OiAxODksIGx0djogMTg5LCBzZWdtZW50OiAnTmV3Jywgc3RhdHVzOiAnYWN0aXZlJywgam9pbmVkOiAnSnVsIDIwMjUnLCBsYXN0T3JkZXI6ICczIHdlZWtzIGFnbycgfSxcbiAgeyBpZDogJ0MtMTAwNScsIG5hbWU6ICdFbW1hIFdhbHNoJywgZW1haWw6ICdlLndhbHNoQGVtYWlsLmNvbScsIGF2YXRhcjogJ0VXJywgcGhvbmU6ICcrMSA1NTUtMDE1NicsIG9yZGVyczogMTUsIHNwZW50OiAzMjEwLCBsdHY6IDQxMDAsIHNlZ21lbnQ6ICdSZWd1bGFyJywgc3RhdHVzOiAnaW5hY3RpdmUnLCBqb2luZWQ6ICdKdW4gMjAyNCcsIGxhc3RPcmRlcjogJzIgbW9udGhzIGFnbycgfSxcbiAgeyBpZDogJ0MtMTAwNicsIG5hbWU6ICdUYWtlc2hpIE1vcmknLCBlbWFpbDogJ3Rha2VzaGlAZW1haWwuY29tJywgYXZhdGFyOiAnVE0nLCBwaG9uZTogJysxIDU1NS0wMTk5Jywgb3JkZXJzOiA2Miwgc3BlbnQ6IDE0ODIwLCBsdHY6IDE4MjAwLCBzZWdtZW50OiAnVklQJywgc3RhdHVzOiAnYWN0aXZlJywgam9pbmVkOiAnQXVnIDIwMjMnLCBsYXN0T3JkZXI6ICdUb2RheScgfSxcbiAgeyBpZDogJ0MtMTAwNycsIG5hbWU6ICdMdW5hIFJvZHJpZ3VleicsIGVtYWlsOiAnbHVuYS5yQGVtYWlsLmNvbScsIGF2YXRhcjogJ0xSJywgcGhvbmU6ICcrMSA1NTUtMDE3NCcsIG9yZGVyczogNSwgc3BlbnQ6IDY0MCwgbHR2OiA3NTAsIHNlZ21lbnQ6ICdSZWd1bGFyJywgc3RhdHVzOiAnYWN0aXZlJywgam9pbmVkOiAnQXByIDIwMjUnLCBsYXN0T3JkZXI6ICc0IGRheXMgYWdvJyB9LFxuICB7IGlkOiAnQy0xMDA4JywgbmFtZTogJ0RhdmlkIFBhcmsnLCBlbWFpbDogJ2QucGFya0BlbWFpbC5jb20nLCBhdmF0YXI6ICdEUCcsIHBob25lOiAnKzEgNTU1LTAxMzMnLCBvcmRlcnM6IDAsIHNwZW50OiAwLCBsdHY6IDAsIHNlZ21lbnQ6ICdOZXcnLCBzdGF0dXM6ICdpbmFjdGl2ZScsIGpvaW5lZDogJ0p1bCAyMDI1JywgbGFzdE9yZGVyOiAnTmV2ZXInIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyc0FkbWluKHsgb25OYXZpZ2F0ZTogXyB9OiBQcm9wcykge1xuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpXG5cbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2VnbWVudCwgc2V0U2VnbWVudF0gPSB1c2VTdGF0ZSgnYWxsJylcbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKCdzcGVudCcpXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxBZG1pbkN1c3RvbWVyW10+KElOSVRJQUxfQ1VTVE9NRVJTKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3dBZGRNb2RhbCwgc2V0U2hvd0FkZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIEVkaXQgLyBBY3Rpb24gZmVlZGJhY2tcbiAgY29uc3QgW2FjdGlvblN1Y2Nlc3MsIHNldEFjdGlvblN1Y2Nlc3NdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2Vzc2lvbi50b2tlbikgcmV0dXJuXG5cbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpc3RBZG1pbkN1c3RvbWVycyhzZXNzaW9uLnRva2VuISwgeyBxOiBzZWFyY2ggfHwgdW5kZWZpbmVkLCBzZWdtZW50OiBzZWdtZW50ID09PSAnYWxsJyA/IHVuZGVmaW5lZCA6IHNlZ21lbnQsIGxpbWl0OiAxMDAgfSlcbiAgICAgIGlmICghY2FuY2VsbGVkICYmIHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldEl0ZW1zKHJlc3BvbnNlLmRhdGEpXG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pKClcblxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxuICB9LCBbc2Vzc2lvbi50b2tlbiwgc2VhcmNoLCBzZWdtZW50XSlcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBpdGVtc1xuICAgICAgLmZpbHRlcihjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hTZWFyY2ggPSAhc2VhcmNoIHx8IGMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fCBjLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8IGMucGhvbmUuaW5jbHVkZXMoc2VhcmNoKVxuICAgICAgICBjb25zdCBtYXRjaFNlZ21lbnQgPSBzZWdtZW50ID09PSAnYWxsJyB8fCBjLnNlZ21lbnQgPT09IHNlZ21lbnRcbiAgICAgICAgcmV0dXJuIG1hdGNoU2VhcmNoICYmIG1hdGNoU2VnbWVudFxuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChzb3J0QnkgPT09ICdzcGVudCcpIHJldHVybiBiLnNwZW50IC0gYS5zcGVudFxuICAgICAgICBpZiAoc29ydEJ5ID09PSAnb3JkZXJzJykgcmV0dXJuIGIub3JkZXJzIC0gYS5vcmRlcnNcbiAgICAgICAgaWYgKHNvcnRCeSA9PT0gJ2x0dicpIHJldHVybiBiLmx0diAtIGEubHR2XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9KVxuICB9LCBbaXRlbXMsIHNlYXJjaCwgc2VnbWVudCwgc29ydEJ5XSlcblxuICBjb25zdCBzZWxlY3RlZEN1c3RvbWVyID0gaXRlbXMuZmluZChjID0+IGMuaWQgPT09IHNlbGVjdGVkKVxuXG4gIGNvbnN0IGtwaVN0YXRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdG90YWxTcGVudCA9IGl0ZW1zLnJlZHVjZSgocywgYykgPT4gcyArIGMuc3BlbnQsIDApXG4gICAgY29uc3QgYXZnTHR2ID0gaXRlbXMubGVuZ3RoID4gMCA/IHRvdGFsU3BlbnQgLyBpdGVtcy5sZW5ndGggOiAwXG4gICAgY29uc3QgdmlwQ291bnQgPSBpdGVtcy5maWx0ZXIoYyA9PiBjLnNlZ21lbnQgPT09ICdWSVAnKS5sZW5ndGhcbiAgICByZXR1cm4geyBjb3VudDogaXRlbXMubGVuZ3RoLCB0b3RhbFNwZW50LCBhdmdMdHYsIHZpcENvdW50IH1cbiAgfSwgW2l0ZW1zXSlcblxuICBjb25zdCBoYW5kbGVBZGRDdXN0b21lciA9IGFzeW5jIChjdXN0b21lckRhdGE6IFBhcnRpYWw8QWRtaW5DdXN0b21lcj4pID0+IHtcbiAgICBjb25zdCBuZXdDdXN0b21lcjogQWRtaW5DdXN0b21lciA9IHtcbiAgICAgIGlkOiBjdXN0b21lckRhdGEuaWQgPz8gYEMtJHtNYXRoLmZsb29yKDEwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMCl9YCxcbiAgICAgIG5hbWU6IGN1c3RvbWVyRGF0YS5uYW1lID8/ICdOZXcgQ3VzdG9tZXInLFxuICAgICAgZW1haWw6IGN1c3RvbWVyRGF0YS5lbWFpbCA/PyAnY3VzdG9tZXJAZXhhbXBsZS5jb20nLFxuICAgICAgYXZhdGFyOiBjdXN0b21lckRhdGEuYXZhdGFyID8/ICdOQycsXG4gICAgICBwaG9uZTogY3VzdG9tZXJEYXRhLnBob25lID8/ICcrMSA1NTUtMDEwMCcsXG4gICAgICBvcmRlcnM6IGN1c3RvbWVyRGF0YS5vcmRlcnMgPz8gMCxcbiAgICAgIHNwZW50OiBjdXN0b21lckRhdGEuc3BlbnQgPz8gMCxcbiAgICAgIGx0djogY3VzdG9tZXJEYXRhLmx0diA/PyAwLFxuICAgICAgc2VnbWVudDogY3VzdG9tZXJEYXRhLnNlZ21lbnQgPz8gJ05ldycsXG4gICAgICBzdGF0dXM6IGN1c3RvbWVyRGF0YS5zdGF0dXMgPz8gJ2FjdGl2ZScsXG4gICAgICBqb2luZWQ6IGN1c3RvbWVyRGF0YS5qb2luZWQgPz8gJ0F1ZyAyMDI2JyxcbiAgICAgIGxhc3RPcmRlcjogY3VzdG9tZXJEYXRhLmxhc3RPcmRlciA/PyAnTmV2ZXInLFxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLnRva2VuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjcmVhdGVBZG1pbkN1c3RvbWVyKHNlc3Npb24udG9rZW4sIHtcbiAgICAgICAgICBuYW1lOiBuZXdDdXN0b21lci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiBuZXdDdXN0b21lci5lbWFpbCxcbiAgICAgICAgICBwaG9uZTogbmV3Q3VzdG9tZXIucGhvbmUsXG4gICAgICAgICAgc2VnbWVudDogbmV3Q3VzdG9tZXIuc2VnbWVudCxcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggeyAvKiBkZXYgZmFsbGJhY2sgKi8gfVxuICAgIH1cblxuICAgIHNldEl0ZW1zKHByZXYgPT4gW25ld0N1c3RvbWVyLCAuLi5wcmV2XSlcbiAgICBzZXRBY3Rpb25TdWNjZXNzKGBBZGRlZCBjdXN0b21lciAke25ld0N1c3RvbWVyLm5hbWV9YClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFjdGlvblN1Y2Nlc3MobnVsbCksIDMwMDApXG4gIH1cblxuICBjb25zdCBoYW5kbGVUb2dnbGVTdGF0dXMgPSBhc3luYyAoY3VzdG9tZXI6IEFkbWluQ3VzdG9tZXIpID0+IHtcbiAgICBjb25zdCBuZXh0U3RhdHVzID0gY3VzdG9tZXIuc3RhdHVzID09PSAnYWN0aXZlJyA/ICdzdXNwZW5kZWQnIDogJ2FjdGl2ZSdcbiAgICBpZiAoc2Vzc2lvbi50b2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlQWRtaW5DdXN0b21lcihzZXNzaW9uLnRva2VuLCBjdXN0b21lci5pZCwgeyBzdGF0dXM6IG5leHRTdGF0dXMgfSlcbiAgICAgIH0gY2F0Y2ggeyAvKiBmYWxsYmFjayAqLyB9XG4gICAgfVxuXG4gICAgc2V0SXRlbXMocHJldiA9PiBwcmV2Lm1hcChjID0+IGMuaWQgPT09IGN1c3RvbWVyLmlkID8geyAuLi5jLCBzdGF0dXM6IG5leHRTdGF0dXMgYXMgQWRtaW5DdXN0b21lclsnc3RhdHVzJ10gfSA6IGMpKVxuICAgIHNldEFjdGlvblN1Y2Nlc3MoYFVwZGF0ZWQgJHtjdXN0b21lci5uYW1lfSBzdGF0dXMgdG8gJHtuZXh0U3RhdHVzfWApXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBY3Rpb25TdWNjZXNzKG51bGwpLCAzMDAwKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXhwb3J0Q1NWID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSAnSUQsTmFtZSxFbWFpbCxQaG9uZSxPcmRlcnMsU3BlbnQgKCQpLExUViAoJCksU2VnbWVudCxTdGF0dXMsSm9pbmVkLExhc3QgT3JkZXJcXG4nXG4gICAgY29uc3Qgcm93cyA9IGZpbHRlcmVkLm1hcChjID0+IGBcIiR7Yy5pZH1cIixcIiR7Yy5uYW1lfVwiLFwiJHtjLmVtYWlsfVwiLFwiJHtjLnBob25lfVwiLCR7Yy5vcmRlcnN9LCR7Yy5zcGVudH0sJHtjLmx0dn0sXCIke2Muc2VnbWVudH1cIixcIiR7Yy5zdGF0dXN9XCIsXCIke2Muam9pbmVkfVwiLFwiJHtjLmxhc3RPcmRlcn1cImApLmpvaW4oJ1xcbicpXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtoZWFkZXJzICsgcm93c10sIHsgdHlwZTogJ3RleHQvY3N2JyB9KVxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgYS5ocmVmID0gdXJsXG4gICAgYS5kb3dubG9hZCA9IGBjdXN0b21lcnMtcmVwb3J0LSR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKX0uY3N2YFxuICAgIGEuY2xpY2soKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIG1pbi1oLXNjcmVlbiBiZy1bI0Y0RjRGOF1cIj5cbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTYgc3BhY2UteS01IG1pbi13LTBcIj5cblxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+Q3VzdG9tZXIgQWNjb3VudHM8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QjgyXSBtdC0wLjVcIj57a3BpU3RhdHMuY291bnR9IHJlZ2lzdGVyZWQgY3VzdG9tZXIgYWNjb3VudHM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXhwb3J0Q1NWfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctd2hpdGUgcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDEwdjZtMCAwbC0zLTNtMyAzbDMtM20yIDhIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgIEV4cG9ydCBDU1ZcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtIHNoYWRvdy1bI0U4NDUwQV0vMjBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICArIEFkZCBDdXN0b21lclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthY3Rpb25TdWNjZXNzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjBGREY0XSBib3JkZXIgYm9yZGVyLVsjQkJGN0QwXSByb3VuZGVkLXhsIHB4LTQgcHktMyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzA1OTY2OV1cIj5cbiAgICAgICAgICAgIOKckyB7YWN0aW9uU3VjY2Vzc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogS1BJIENhcmRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgeyBsYWJlbDogJ1RvdGFsIEN1c3RvbWVycycsIHZhbHVlOiBrcGlTdGF0cy5jb3VudC50b1N0cmluZygpLCBkZWx0YTogJysxMiUgTW9NJywgY29sb3I6ICd0ZXh0LVsjMTExMTE4XScgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdWSVAgQ3VzdG9tZXJzJywgdmFsdWU6IGtwaVN0YXRzLnZpcENvdW50LnRvU3RyaW5nKCksIGRlbHRhOiBgJHtNYXRoLnJvdW5kKChrcGlTdGF0cy52aXBDb3VudCAvIChrcGlTdGF0cy5jb3VudCB8fCAxKSkgKiAxMDApfSUgb2YgdG90YWxgLCBjb2xvcjogJ3RleHQtWyNEOTc3MDZdJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0F2ZyBMaWZldGltZSBWYWx1ZSAoTFRWKScsIHZhbHVlOiBgJCR7a3BpU3RhdHMuYXZnTHR2LnRvRml4ZWQoMil9YCwgZGVsdGE6ICcrOC42JSBNb00nLCBjb2xvcjogJ3RleHQtWyNFODQ1MEFdJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0FjdGl2ZSBTdGF0dXMgUmF0ZScsIHZhbHVlOiAnOTQuMiUnLCBkZWx0YTogJy0wLjQlIGNodXJuJywgY29sb3I6ICd0ZXh0LVsjMDU5NjY5XScgfSxcbiAgICAgICAgICBdLm1hcChrID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtrLmxhYmVsfSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntrLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZm9udC1tb25vIGZvbnQtYmxhY2sgdGV4dC0yeGwgbXQtMSAke2suY29sb3J9YH0+e2sudmFsdWV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzA1OTY2OV0gbXQtMVwiPntrLmRlbHRhfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRmlsdGVycyBCYXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC00IGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGZsZXgtd3JhcCBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSBtaW4tdy1bMjAwcHhdXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMy41IHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtWyM5QjlCQjhdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiIC8+PC9zdmc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgY3VzdG9tZXIgbmFtZSwgZW1haWwsIHBob25lLi4uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcGwtMTAgcHItNCBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdIHBsYWNlaG9sZGVyOnRleHQtWyM5QjlCQjhdXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGJnLVsjRjRGNEY4XSByb3VuZGVkLXhsIHAtMVwiPlxuICAgICAgICAgICAge1snYWxsJywgJ1ZJUCcsICdSZWd1bGFyJywgJ05ldycsICdBdC1SaXNrJ10ubWFwKHMgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtzfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlZ21lbnQocyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgY2FwaXRhbGl6ZSB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgc2VnbWVudCA9PT0gcyA/ICdiZy13aGl0ZSBzaGFkb3ctc20gdGV4dC1bIzExMTExOF0nIDogJ3RleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyM2QjZCODJdJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17c29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U29ydEJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgcHgtMyBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNwZW50XCI+U29ydDogVG90YWwgU3BlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmRlcnNcIj5Tb3J0OiBPcmRlcnMgQ291bnQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsdHZcIj5Tb3J0OiBMVFYgVmFsdWU8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFRhYmxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zLjVcIj5DdXN0b21lciBOYW1lICYgRW1haWw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zLjVcIj5TZWdtZW50PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTUgcHktMy41XCI+T3JkZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTUgcHktMy41XCI+VG90YWwgU3BlbnQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zLjVcIj5MVFY8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zLjVcIj5MYXN0IE9yZGVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTUgcHktMy41XCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1yaWdodCBweC01IHB5LTMuNVwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezh9IGNsYXNzTmFtZT1cInB4LTUgcHktMTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LVsjNkI2QjgyXVwiPlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGN1c3RvbWVyIGFjY291bnRzLi4uXG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkgOiBmaWx0ZXJlZC5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgIGtleT17Yy5pZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKHNlbGVjdGVkID09PSBjLmlkID8gbnVsbCA6IGMuaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6YmctWyNGOUY5RkNdIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tY29sb3JzICR7c2VsZWN0ZWQgPT09IGMuaWQgPyAnYmctWyNGRkY3RjVdJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOSBoLTkgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgZmxleC1zaHJpbmstMCBzaGFkb3ctc21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBhdmF0YXJDb2xvcnNbaSAlIGF2YXRhckNvbG9ycy5sZW5ndGhdIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2MuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj57Yy5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57Yy5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMXB4XSBmb250LWJvbGQgJHtTRUdNRU5UX0NMU1tjLnNlZ21lbnRdID8/ICdiZy1bI0Y0RjRGOF0gdGV4dC1bIzZCNkI4Ml0nfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjLnNlZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57Yy5vcmRlcnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+JHtjLnNwZW50LnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtWyNFODQ1MEFdXCI+JHtjLmx0di50b0xvY2FsZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgdGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPntjLmxhc3RPcmRlcn08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTIuNSBweS0wLjUgcm91bmRlZC1mdWxsIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgJHtjLnN0YXR1cyA9PT0gJ2FjdGl2ZScgPyAnYmctWyNEMUZBRTVdIHRleHQtWyMwNjVGNDZdJyA6ICdiZy1bI0ZFRTJFMl0gdGV4dC1bIzk5MUIxQl0nfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHctMS41IGgtMS41IHJvdW5kZWQtZnVsbCAke2Muc3RhdHVzID09PSAnYWN0aXZlJyA/ICdiZy1bIzA1OTY2OV0nIDogJ2JnLVsjRTExRDQ4XSd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7Yy5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgdGV4dC1yaWdodFwiIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChjLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgYmctWyMxMTExMThdIHRleHQtd2hpdGUgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgaG92ZXI6YmctWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTMgYm9yZGVyLXQgYm9yZGVyLVsjRjRGNEY4XSB0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+XG4gICAgICAgICAgICA8cD5TaG93aW5nIHtmaWx0ZXJlZC5sZW5ndGh9IG9mIHtpdGVtcy5sZW5ndGh9IGN1c3RvbWVyczwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPlBhZ2UgMSBvZiAxPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiDilIDilIAgQ1VTVE9NRVIgUFJPRklMRSBTSURFIERSQVdFUiDilIDilIAgKi99XG4gICAgICB7c2VsZWN0ZWRDdXN0b21lciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04NCBiZy13aGl0ZSBib3JkZXItbCBib3JkZXItWyNFMkUyRUNdIGZsZXggZmxleC1jb2wgZmxleC1zaHJpbmstMCBvdmVyZmxvdy15LWF1dG8gc2hhZG93LXhsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNSBweS00IGJvcmRlci1iIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB0ZXh0LVsjMTExMTE4XVwiPkN1c3RvbWVyIEluc3BlY3RvcjwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQobnVsbCl9IGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBob3ZlcjpiZy1bI0UyRTJFQ10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzlCOUJCOF1cIj5cbiAgICAgICAgICAgICAg4pyVXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHNwYWNlLXktNVwiPlxuICAgICAgICAgICAgey8qIEhlYWRlciAvIEF2YXRhciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtYm9sZCBzaGFkb3ctbWRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGF2YXRhckNvbG9yc1tpdGVtcy5pbmRleE9mKHNlbGVjdGVkQ3VzdG9tZXIpICUgYXZhdGFyQ29sb3JzLmxlbmd0aF0gfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZEN1c3RvbWVyLmF2YXRhcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmFzZSB0ZXh0LVsjMTExMTE4XVwiPntzZWxlY3RlZEN1c3RvbWVyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57c2VsZWN0ZWRDdXN0b21lci5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggbXQtMS41IHB4LTMgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZCAke1NFR01FTlRfQ0xTW3NlbGVjdGVkQ3VzdG9tZXIuc2VnbWVudF19YH0+XG4gICAgICAgICAgICAgICAgICDwn5GRIHtzZWxlY3RlZEN1c3RvbWVyLnNlZ21lbnR9IEN1c3RvbWVyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTWV0cmljcyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMlwiPlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdPcmRlcnMnLCB2YWx1ZTogc2VsZWN0ZWRDdXN0b21lci5vcmRlcnMgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU3BlbnQnLCB2YWx1ZTogYCQke3NlbGVjdGVkQ3VzdG9tZXIuc3BlbnQudG9Mb2NhbGVTdHJpbmcoKX1gIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0xUVicsIHZhbHVlOiBgJCR7c2VsZWN0ZWRDdXN0b21lci5sdHYudG9Mb2NhbGVTdHJpbmcoKX1gIH0sXG4gICAgICAgICAgICAgIF0ubWFwKHMgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzLmxhYmVsfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1bI0Y5RjlGQ10gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LXNtIHRleHQtWyMxMTExMThdXCI+e3MudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgbXQtMC41XCI+e3MubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRmllbGRzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIuNSB0ZXh0LXhzIGJnLVsjRjlGOUZDXSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLTJ4bCBwLTRcIj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUGhvbmUnLCB2YWx1ZTogc2VsZWN0ZWRDdXN0b21lci5waG9uZSB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDdXN0b21lciBJRCcsIHZhbHVlOiBzZWxlY3RlZEN1c3RvbWVyLmlkIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ01lbWJlciBTaW5jZScsIHZhbHVlOiBzZWxlY3RlZEN1c3RvbWVyLmpvaW5lZCB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdMYXN0IE9yZGVyJywgdmFsdWU6IHNlbGVjdGVkQ3VzdG9tZXIubGFzdE9yZGVyIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0FjY291bnQgU3RhdHVzJywgdmFsdWU6IHNlbGVjdGVkQ3VzdG9tZXIuc3RhdHVzLnRvVXBwZXJDYXNlKCkgfSxcbiAgICAgICAgICAgICAgXS5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2YubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XVwiPntmLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMxMTExMThdIGZvbnQtbW9ubyBmb250LW1lZGl1bVwiPntmLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEFjdGlvbnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoYEVtYWlsIGNvbXBvc2l0aW9uIG9wZW5lZCBmb3IgJHtzZWxlY3RlZEN1c3RvbWVyLmVtYWlsfWApfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yLjUgYmctWyMxMTExMThdIHRleHQtd2hpdGUgcm91bmRlZC14bCB0ZXh0LXhzIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4pyJ77iPIFNlbmQgRW1haWxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIGhhbmRsZVRvZ2dsZVN0YXR1cyhzZWxlY3RlZEN1c3RvbWVyKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHktMi41IHJvdW5kZWQteGwgdGV4dC14cyBmb250LWJvbGQgYm9yZGVyIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEN1c3RvbWVyLnN0YXR1cyA9PT0gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLVsjRkVFMkUyXSB0ZXh0LVsjRTExRDQ4XSBob3ZlcjpiZy1bI0ZFRTJFMl0nXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1bI0JCRjdEMF0gdGV4dC1bIzA1OTY2OV0gaG92ZXI6YmctWyNGMEZERjRdJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ3VzdG9tZXIuc3RhdHVzID09PSAnYWN0aXZlJyA/ICfwn5qrIFN1c3BlbmQgQWNjb3VudCcgOiAn4pyTIEFjdGl2YXRlIEFjY291bnQnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUmVjZW50IFB1cmNoYXNlcyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBib3JkZXItdCBib3JkZXItWyNFMkUyRUNdXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LVsjOUI5QkI4XSBtYi0zXCI+UmVjZW50IFB1cmNoYXNlIEFjdGl2aXR5PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgIHsgaWQ6ICdPUkQtOTgyMTQnLCBkYXRlOiAnMiBkYXlzIGFnbycsIGFtb3VudDogJyQzNjkuOTgnLCBpdGVtczogJ1NvbnkgV0gtMTAwMFhNNScgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWQ6ICdPUkQtOTY1MDEnLCBkYXRlOiAnMSB3ZWVrIGFnbycsIGFtb3VudDogJyQ4OS4wMCcsIGl0ZW1zOiAnQ2VyYW1pYyBUZWEgU2V0JyB9LFxuICAgICAgICAgICAgICAgIF0ubWFwKG8gPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e28uaWR9IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLVsjRjlGOUZDXSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+e28uaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyM5QjlCQjhdXCI+e28uaXRlbXN9IMK3IHtvLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjRTg0NTBBXVwiPntvLmFtb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogQWRkIEN1c3RvbWVyIE1vZGFsICovfVxuICAgICAgPEFkZEN1c3RvbWVyTW9kYWxcbiAgICAgICAgaXNPcGVuPXtzaG93QWRkTW9kYWx9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dBZGRNb2RhbChmYWxzZSl9XG4gICAgICAgIG9uU2F2ZT17aGFuZGxlQWRkQ3VzdG9tZXJ9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsU0FBd0IsaUJBQWlCLEVBQUUsUUFBUSxTQUFTLFVBQWlCO0NBQzNFLE1BQU0sQ0FBQyxZQUFZLGtCQUFBLEdBQWlCLGFBQUEsU0FBQSxDQUFTLEtBQUs7Q0FDbEQsTUFBTSxDQUFDLE1BQU0sWUFBQSxHQUFXLGFBQUEsU0FBQSxDQUFTLEVBQUU7Q0FDbkMsTUFBTSxDQUFDLE9BQU8sYUFBQSxHQUFZLGFBQUEsU0FBQSxDQUFTLEVBQUU7Q0FDckMsTUFBTSxDQUFDLE9BQU8sYUFBQSxHQUFZLGFBQUEsU0FBQSxDQUFTLEVBQUU7Q0FDckMsTUFBTSxDQUFDLFNBQVMsZUFBQSxHQUFjLGFBQUEsU0FBQSxDQUFnRCxLQUFLO0NBQ25GLE1BQU0sQ0FBQyxjQUFjLG9CQUFBLEdBQW1CLGFBQUEsU0FBQSxDQUFTLEdBQUc7Q0FFcEQsSUFBSSxDQUFDLFFBQVEsT0FBTztDQUVwQixNQUFNLGVBQWUsT0FBTyxNQUF1QjtFQUNqRCxFQUFFLGVBQWU7RUFDakIsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUc7RUFFbkMsY0FBYyxJQUFJO0VBQ2xCLElBQUk7R0FDRixNQUFNLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUksTUFBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENB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