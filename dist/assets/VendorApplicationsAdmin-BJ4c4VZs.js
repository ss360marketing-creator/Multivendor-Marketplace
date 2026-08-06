import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/components/SubmitApplicationModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SubmitApplicationModal({ isOpen, onClose, onSave }) {
	const [store, setStore] = (0, import_react.useState)("");
	const [owner, setOwner] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Electronics");
	const [country, setCountry] = (0, import_react.useState)("United States");
	const [website, setWebsite] = (0, import_react.useState)("");
	const [revenue, setRevenue] = (0, import_react.useState)("$500K–$1M/yr");
	const [products, setProducts] = (0, import_react.useState)("50");
	const [notes, setNotes] = (0, import_react.useState)("");
	if (!isOpen) return null;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!store.trim() || !email.trim()) return;
		onSave({
			id: `APP-${Math.floor(1050 + Math.random() * 900)}`,
			store: store.trim(),
			owner: owner.trim() || store.trim(),
			email: email.trim(),
			phone: phone.trim() || "+1 555-0199",
			category,
			country,
			website: website.trim() || `${store.toLowerCase().replace(/\s+/g, "")}.com`,
			revenue,
			products: parseInt(products) || 25,
			submitted: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			}),
			status: "pending",
			docs: [
				{
					name: "Business Registration",
					ok: true
				},
				{
					name: "Tax ID Certificate",
					ok: true
				},
				{
					name: "Bank Statement",
					ok: true
				}
			],
			notes: notes.trim() || "Direct application filed via Admin Desk."
		});
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-3xl border border-[#E2E2EC] max-w-lg w-full shadow-2xl overflow-hidden space-y-4 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-2xl bg-[#E8450A]/10 flex items-center justify-center font-bold text-[#E8450A] text-lg",
						children: "📄"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-[#111118]",
						children: "Submit Vendor Application"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#6B6B82]",
						children: "File a new merchant store application"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Store Name *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Apex Goods",
							value: store,
							onChange: (e) => setStore(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none focus:border-[#E8450A]"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Owner / Contact Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Nadia Karimov",
							value: owner,
							onChange: (e) => setOwner(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Email *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "contact@store.com",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "tel",
							placeholder: "+1 (555) 019-2831",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: category,
								onChange: (e) => setCategory(e.target.value),
								className: "mt-1 w-full h-10 px-2 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Electronics" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Luxury & Fashion" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Home & Living" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Food & Grocery" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Beauty & Health" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Country"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: country,
								onChange: (e) => setCountry(e.target.value),
								className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Est. Revenue"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: revenue,
								onChange: (e) => setRevenue(e.target.value),
								className: "mt-1 w-full h-10 px-2 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$100K–$500K/yr" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$500K–$1M/yr" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$1M–$5M/yr" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$5M+/yr" })
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-semibold text-[#111118] uppercase",
						children: "Notes & Pitch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 2,
						placeholder: "Provide context regarding business credentials...",
						value: notes,
						onChange: (e) => setNotes(e.target.value),
						className: "mt-1 w-full p-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none focus:border-[#E8450A]"
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
							className: "flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-xs hover:bg-[#C93A07]",
							children: "✓ Submit Application"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/admin/pages/VendorApplicationsAdmin.tsx
var INITIAL_APPLICATIONS = [
	{
		id: "APP-1041",
		store: "LuxGoods Ltd",
		owner: "Nadia Karimov",
		email: "nadia@luxgoods.com",
		phone: "+971 55 123 4567",
		category: "Luxury & Fashion",
		country: "UAE",
		website: "luxgoods.com",
		revenue: "$2M–$5M/yr",
		products: 480,
		submitted: "Jul 24, 2026",
		status: "pending",
		docs: [
			{
				name: "Trade License",
				ok: true
			},
			{
				name: "VAT Certificate",
				ok: true
			},
			{
				name: "Bank Statement",
				ok: false
			}
		],
		notes: "Large fashion retailer with strong Instagram presence."
	},
	{
		id: "APP-1040",
		store: "OrganicHarvest Co",
		owner: "Preet Sandhu",
		email: "preet@organicharvest.co",
		phone: "+1 604 888 2211",
		category: "Food & Grocery",
		country: "Canada",
		website: "organicharvest.co",
		revenue: "$500K–$1M/yr",
		products: 120,
		submitted: "Jul 23, 2026",
		status: "under-review",
		docs: [
			{
				name: "Business Registration",
				ok: true
			},
			{
				name: "Food Safety Cert",
				ok: true
			},
			{
				name: "Insurance",
				ok: true
			}
		],
		notes: "Specialty organic food supplier. All documents verified."
	},
	{
		id: "APP-1039",
		store: "TechGear Zone",
		owner: "Marcus Wolff",
		email: "m.wolff@techgear.de",
		phone: "+49 30 5555 1234",
		category: "Electronics",
		country: "Germany",
		website: "techgearzone.de",
		revenue: "$5M+/yr",
		products: 2400,
		submitted: "Jul 22, 2026",
		status: "pending",
		docs: [
			{
				name: "Company Registration",
				ok: true
			},
			{
				name: "Tax ID",
				ok: true
			},
			{
				name: "Warranty Policy",
				ok: false
			}
		],
		notes: "Large EU electronics distributor. Missing warranty docs."
	},
	{
		id: "APP-1038",
		store: "CraftyHome Studio",
		owner: "Aiko Yamamoto",
		email: "aiko@craftyhome.jp",
		phone: "+81 3 3333 8888",
		category: "Home & Living",
		country: "Japan",
		website: "craftyhome.jp",
		revenue: "$100K–$500K/yr",
		products: 84,
		submitted: "Jul 21, 2026",
		status: "approved",
		docs: [
			{
				name: "Business License",
				ok: true
			},
			{
				name: "Product Samples",
				ok: true
			},
			{
				name: "Bank Details",
				ok: true
			}
		],
		notes: "Artisan home goods. Approved after sample review."
	},
	{
		id: "APP-1037",
		store: "GadgetFly",
		owner: "Olu Adeyemi",
		email: "olu@gadgetfly.ng",
		phone: "+234 802 555 7890",
		category: "Electronics",
		country: "Nigeria",
		website: "gadgetfly.ng",
		revenue: "$250K–$500K/yr",
		products: 340,
		submitted: "Jul 19, 2026",
		status: "rejected",
		docs: [
			{
				name: "Registration",
				ok: false
			},
			{
				name: "Tax Cert",
				ok: false
			},
			{
				name: "Bank Statement",
				ok: true
			}
		],
		notes: "Documents incomplete. Notified via email to resubmit."
	}
];
var STATUS_META = {
	pending: {
		label: "Pending",
		cls: "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
		dot: "bg-[#D97706]"
	},
	"under-review": {
		label: "Under Review",
		cls: "bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]",
		dot: "bg-[#6366F1]"
	},
	approved: {
		label: "Approved",
		cls: "bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]",
		dot: "bg-[#059669]"
	},
	rejected: {
		label: "Rejected",
		cls: "bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]",
		dot: "bg-[#E11D48]"
	}
};
function VendorApplicationsAdmin({ onNavigate: _ }) {
	const [items, setItems] = (0, import_react.useState)(INITIAL_APPLICATIONS);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)("APP-1041");
	const [noteInput, setNoteInput] = (0, import_react.useState)("");
	const [showSubmitModal, setShowSubmitModal] = (0, import_react.useState)(false);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => items.filter((a) => {
		const matchFilter = filter === "all" || a.status === filter;
		const matchSearch = !search || a.store.toLowerCase().includes(search.toLowerCase()) || a.owner.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase());
		return matchFilter && matchSearch;
	}), [
		items,
		filter,
		search
	]);
	const counts = {
		all: items.length,
		pending: items.filter((a) => a.status === "pending").length,
		"under-review": items.filter((a) => a.status === "under-review").length,
		approved: items.filter((a) => a.status === "approved").length,
		rejected: items.filter((a) => a.status === "rejected").length
	};
	const handleUpdateStatus = (appId, nextStatus) => {
		setItems((prev) => prev.map((a) => a.id === appId ? {
			...a,
			status: nextStatus
		} : a));
		const app = items.find((a) => a.id === appId);
		setFeedback(`Application ${appId} (${app?.store}) updated to ${nextStatus.toUpperCase()}`);
		setTimeout(() => setFeedback(null), 3e3);
	};
	const handleToggleDoc = (appId, docIndex) => {
		setItems((prev) => prev.map((a) => {
			if (a.id !== appId) return a;
			const newDocs = [...a.docs];
			newDocs[docIndex] = {
				...newDocs[docIndex],
				ok: !newDocs[docIndex].ok
			};
			return {
				...a,
				docs: newDocs
			};
		}));
	};
	const handleAddNote = (appId) => {
		if (!noteInput.trim()) return;
		const timeStr = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		setItems((prev) => prev.map((a) => a.id === appId ? {
			...a,
			notes: `${a.notes} [${timeStr}: ${noteInput.trim()}]`
		} : a));
		setNoteInput("");
	};
	const handleExportCSV = () => {
		const headers = "Application ID,Store,Owner,Email,Category,Country,Status,Submitted\n";
		const rows = filtered.map((a) => `"${a.id}","${a.store}","${a.owner}","${a.email}","${a.category}","${a.country}","${a.status}","${a.submitted}"`).join("\n");
		const blob = new Blob([headers + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `vendor-applications-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-screen bg-[#F4F4F8]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 p-6 space-y-5 min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold text-[#111118]",
						children: "Vendor Applications & Onboarding"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#6B6B82] mt-0.5",
						children: "Review, verify credentials, and approve new merchant stores"
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
							onClick: () => setShowSubmitModal(true),
							className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20",
							children: "+ File Application"
						})]
					})]
				}),
				feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3 text-xs font-semibold text-[#059669]",
					children: ["✓ ", feedback]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4",
					children: [
						{
							label: "Total Applications",
							value: counts.all.toString(),
							color: "text-[#111118]"
						},
						{
							label: "Pending Review",
							value: counts.pending.toString(),
							color: "text-[#D97706]"
						},
						{
							label: "Under Review Queue",
							value: counts["under-review"].toString(),
							color: "text-[#6366F1]"
						},
						{
							label: "Approved Merchants",
							value: counts.approved.toString(),
							color: "text-[#059669]"
						}
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm",
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
					className: "flex flex-wrap items-center gap-3 bg-white border border-[#E2E2EC] rounded-2xl p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 min-w-[220px]",
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
							placeholder: "Search store name, owner, email...",
							className: "w-full h-10 pl-10 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 bg-[#F4F4F8] rounded-xl p-1",
						children: [
							"all",
							"pending",
							"under-review",
							"approved",
							"rejected"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setFilter(s),
							className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${filter === s ? "bg-white shadow-sm text-[#111118]" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
							children: [s !== "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-1.5 h-1.5 rounded-full ${STATUS_META[s]?.dot}` }), s === "all" ? `All (${counts.all})` : `${STATUS_META[s].label} (${counts[s]})`]
						}, s))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [filtered.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setSelected(selected === app.id ? null : app.id),
						className: `bg-white rounded-2xl border-2 p-5 cursor-pointer transition-all hover:shadow-md ${selected === app.id ? "border-[#E8450A] shadow-sm" : "border-[#E2E2EC]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-2xl bg-[#E8450A]/10 border border-[#E8450A]/20 flex items-center justify-center text-lg flex-shrink-0 font-bold text-[#E8450A]",
									children: app.store.slice(0, 2).toUpperCase()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-base text-[#111118]",
													children: app.store
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${STATUS_META[app.status].cls}`,
													children: STATUS_META[app.status].label
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-[#6B6B82] mt-0.5",
												children: [
													app.owner,
													" · ",
													app.email,
													" · ",
													app.phone
												]
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-right flex-shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-mono font-bold text-[#E8450A]",
													children: app.id
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-[#9B9BB8] mt-0.5",
													children: app.submitted
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 mt-3 flex-wrap text-xs text-[#6B6B82]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg",
													children: ["📁 ", app.category]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg",
													children: ["🌐 ", app.country]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg",
													children: [
														"📦 ",
														app.products,
														" products"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 font-medium bg-[#F4F4F8] px-2.5 py-1 rounded-lg",
													children: ["💰 ", app.revenue]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 mt-3 flex-wrap",
											onClick: (e) => e.stopPropagation(),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-bold text-[#9B9BB8] uppercase",
												children: "Verification Docs:"
											}), app.docs.map((doc, dIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleToggleDoc(app.id, dIdx),
												className: `inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${doc.ok ? "bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]" : "bg-[#FEE2E2] text-[#991B1B] border-[#FCA5A5]"}`,
												children: [
													doc.ok ? "✓" : "✕",
													" ",
													doc.name
												]
											}, doc.name))]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 flex-shrink-0",
									onClick: (e) => e.stopPropagation(),
									children: [
										app.status !== "approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleUpdateStatus(app.id, "approved"),
											className: "px-4 py-1.5 bg-[#D1FAE5] text-[#065F46] rounded-xl text-xs font-bold hover:bg-[#A7F3D0] transition-colors border border-[#A7F3D0]",
											children: "Approve Merchant"
										}),
										app.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleUpdateStatus(app.id, "under-review"),
											className: "px-4 py-1.5 bg-[#EEF2FF] text-[#4338CA] rounded-xl text-xs font-bold hover:bg-[#C7D2FE] transition-colors border border-[#C7D2FE]",
											children: "Put Under Review"
										}),
										app.status !== "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleUpdateStatus(app.id, "rejected"),
											className: "px-4 py-1.5 bg-[#FEE2E2] text-[#991B1B] rounded-xl text-xs font-bold hover:bg-[#FECACA] transition-colors border border-[#FCA5A5]",
											children: "Reject Application"
										})
									]
								})
							]
						}), selected === app.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 pt-5 border-t border-[#F4F4F8] space-y-4",
							onClick: (e) => e.stopPropagation(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-4",
									children: [
										{
											label: "Official Website",
											value: app.website
										},
										{
											label: "Phone",
											value: app.phone
										},
										{
											label: "Annual Revenue",
											value: app.revenue
										},
										{
											label: "Initial Inventory",
											value: `${app.products} items`
										}
									].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide",
										children: f.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-[#111118] mt-0.5 truncate",
										children: f.value
									})] }, f.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide mb-1",
									children: "Internal Notes & History"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#6B6B82] bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl px-4 py-3 font-mono",
									children: app.notes
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide mb-1",
									children: "Add Auditor Note"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: noteInput,
										onChange: (e) => setNoteInput(e.target.value),
										placeholder: "Type auditor comments or verification details...",
										className: "flex-1 h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-xs outline-none focus:border-[#E8450A]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleAddNote(app.id),
										className: "px-4 py-2 bg-[#111118] text-white rounded-xl text-xs font-bold hover:bg-[#E8450A] transition-colors",
										children: "Save Note"
									})]
								})] })
							]
						})]
					}, app.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-[#E2E2EC] py-20 flex flex-col items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-14 h-14 rounded-2xl bg-[#F4F4F8] flex items-center justify-center text-2xl",
								children: "📄"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-[#111118]",
								children: "No applications found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#9B9BB8]",
								children: "Try adjusting your search or filter options."
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitApplicationModal, {
			isOpen: showSubmitModal,
			onClose: () => setShowSubmitModal(false),
			onSave: (newApp) => {
				setItems((prev) => [newApp, ...prev]);
				setFeedback(`Filed application for ${newApp.store}`);
				setTimeout(() => setFeedback(null), 3e3);
			}
		})]
	});
}
//#endregion
export { VendorApplicationsAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVuZG9yQXBwbGljYXRpb25zQWRtaW4tQko0YzRWWnMuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvU3VibWl0QXBwbGljYXRpb25Nb2RhbC50c3giLCIuLi8uLi9zcmMvYWRtaW4vcGFnZXMvVmVuZG9yQXBwbGljYXRpb25zQWRtaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCB0eXBlIEFwcGxpY2F0aW9uSXRlbSA9IHtcbiAgaWQ6IHN0cmluZ1xuICBzdG9yZTogc3RyaW5nXG4gIG93bmVyOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwaG9uZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgY291bnRyeTogc3RyaW5nXG4gIHdlYnNpdGU6IHN0cmluZ1xuICByZXZlbnVlOiBzdHJpbmdcbiAgcHJvZHVjdHM6IG51bWJlclxuICBzdWJtaXR0ZWQ6IHN0cmluZ1xuICBzdGF0dXM6ICdwZW5kaW5nJyB8ICd1bmRlci1yZXZpZXcnIHwgJ2FwcHJvdmVkJyB8ICdyZWplY3RlZCdcbiAgZG9jczogeyBuYW1lOiBzdHJpbmc7IG9rOiBib29sZWFuIH1bXVxuICBub3Rlczogc3RyaW5nXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlzT3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG4gIG9uU2F2ZTogKGFwcDogQXBwbGljYXRpb25JdGVtKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdEFwcGxpY2F0aW9uTW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIG9uU2F2ZSB9OiBQcm9wcykge1xuICBjb25zdCBbc3RvcmUsIHNldFN0b3JlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbb3duZXIsIHNldE93bmVyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCdFbGVjdHJvbmljcycpXG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCdVbml0ZWQgU3RhdGVzJylcbiAgY29uc3QgW3dlYnNpdGUsIHNldFdlYnNpdGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZXZlbnVlLCBzZXRSZXZlbnVlXSA9IHVzZVN0YXRlKCckNTAwS+KAkyQxTS95cicpXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoJzUwJylcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZSgnJylcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGxcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFzdG9yZS50cmltKCkgfHwgIWVtYWlsLnRyaW0oKSkgcmV0dXJuXG5cbiAgICBjb25zdCBuZXdBcHA6IEFwcGxpY2F0aW9uSXRlbSA9IHtcbiAgICAgIGlkOiBgQVBQLSR7TWF0aC5mbG9vcigxMDUwICsgTWF0aC5yYW5kb20oKSAqIDkwMCl9YCxcbiAgICAgIHN0b3JlOiBzdG9yZS50cmltKCksXG4gICAgICBvd25lcjogb3duZXIudHJpbSgpIHx8IHN0b3JlLnRyaW0oKSxcbiAgICAgIGVtYWlsOiBlbWFpbC50cmltKCksXG4gICAgICBwaG9uZTogcGhvbmUudHJpbSgpIHx8ICcrMSA1NTUtMDE5OScsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGNvdW50cnksXG4gICAgICB3ZWJzaXRlOiB3ZWJzaXRlLnRyaW0oKSB8fCBgJHtzdG9yZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpfS5jb21gLFxuICAgICAgcmV2ZW51ZSxcbiAgICAgIHByb2R1Y3RzOiBwYXJzZUludChwcm9kdWN0cykgfHwgMjUsXG4gICAgICBzdWJtaXR0ZWQ6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB5ZWFyOiAnbnVtZXJpYycgfSksXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgIGRvY3M6IFtcbiAgICAgICAgeyBuYW1lOiAnQnVzaW5lc3MgUmVnaXN0cmF0aW9uJywgb2s6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAnVGF4IElEIENlcnRpZmljYXRlJywgb2s6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAnQmFuayBTdGF0ZW1lbnQnLCBvazogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICAgIG5vdGVzOiBub3Rlcy50cmltKCkgfHwgJ0RpcmVjdCBhcHBsaWNhdGlvbiBmaWxlZCB2aWEgQWRtaW4gRGVzay4nLFxuICAgIH1cblxuICAgIG9uU2F2ZShuZXdBcHApXG4gICAgb25DbG9zZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay82MCB6LTUwIGJhY2tkcm9wLWJsdXItc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBtYXgtdy1sZyB3LWZ1bGwgc2hhZG93LTJ4bCBvdmVyZmxvdy1oaWRkZW4gc3BhY2UteS00IHAtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtMnhsIGJnLVsjRTg0NTBBXS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV0gdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICDwn5OEXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPlN1Ym1pdCBWZW5kb3IgQXBwbGljYXRpb248L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+RmlsZSBhIG5ldyBtZXJjaGFudCBzdG9yZSBhcHBsaWNhdGlvbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzExMTExOF1cIj7inJU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS0zLjUgdGV4dC14c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+U3RvcmUgTmFtZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEFwZXggR29vZHNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdG9yZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdG9yZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgaC0xMCBweC0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQteHMgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPk93bmVyIC8gQ29udGFjdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFkaWEgS2FyaW1vdlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e293bmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE93bmVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTEwIHB4LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPkVtYWlsICo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb250YWN0QHN0b3JlLmNvbVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTEwIHB4LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIisxICg1NTUpIDAxOS0yODMxXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtM1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTEwIHB4LTIgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkVsZWN0cm9uaWNzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5MdXh1cnkgJiBGYXNoaW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Ib21lICYgTGl2aW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Gb29kICYgR3JvY2VyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+QmVhdXR5ICYgSGVhbHRoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5Db3VudHJ5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvdW50cnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPkVzdC4gUmV2ZW51ZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmV2ZW51ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRSZXZlbnVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTEwIHB4LTIgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiQxMDBL4oCTJDUwMEsveXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiQ1MDBL4oCTJDFNL3lyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4kMU3igJMkNU0veXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiQ1TSsveXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5Ob3RlcyAmIFBpdGNoPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb3ZpZGUgY29udGV4dCByZWdhcmRpbmcgYnVzaW5lc3MgY3JlZGVudGlhbHMuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17bm90ZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5vdGVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcC0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQteHMgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItWyNFMkUyRUNdIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhzIGhvdmVyOmJnLVsjQzkzQTA3XVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOKckyBTdWJtaXQgQXBwbGljYXRpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQWRtaW5TZWN0aW9uIH0gZnJvbSAnLi4vYWRtaW5EYXRhJ1xuaW1wb3J0IFN1Ym1pdEFwcGxpY2F0aW9uTW9kYWwsIHsgdHlwZSBBcHBsaWNhdGlvbkl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1Ym1pdEFwcGxpY2F0aW9uTW9kYWwnXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG5jb25zdCBJTklUSUFMX0FQUExJQ0FUSU9OUzogQXBwbGljYXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBpZDogJ0FQUC0xMDQxJywgc3RvcmU6ICdMdXhHb29kcyBMdGQnLCBvd25lcjogJ05hZGlhIEthcmltb3YnLCBlbWFpbDogJ25hZGlhQGx1eGdvb2RzLmNvbScsIHBob25lOiAnKzk3MSA1NSAxMjMgNDU2NycsXG4gICAgY2F0ZWdvcnk6ICdMdXh1cnkgJiBGYXNoaW9uJywgY291bnRyeTogJ1VBRScsIHdlYnNpdGU6ICdsdXhnb29kcy5jb20nLCByZXZlbnVlOiAnJDJN4oCTJDVNL3lyJywgcHJvZHVjdHM6IDQ4MCxcbiAgICBzdWJtaXR0ZWQ6ICdKdWwgMjQsIDIwMjYnLCBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICBkb2NzOiBbeyBuYW1lOiAnVHJhZGUgTGljZW5zZScsIG9rOiB0cnVlIH0sIHsgbmFtZTogJ1ZBVCBDZXJ0aWZpY2F0ZScsIG9rOiB0cnVlIH0sIHsgbmFtZTogJ0JhbmsgU3RhdGVtZW50Jywgb2s6IGZhbHNlIH1dLFxuICAgIG5vdGVzOiAnTGFyZ2UgZmFzaGlvbiByZXRhaWxlciB3aXRoIHN0cm9uZyBJbnN0YWdyYW0gcHJlc2VuY2UuJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdBUFAtMTA0MCcsIHN0b3JlOiAnT3JnYW5pY0hhcnZlc3QgQ28nLCBvd25lcjogJ1ByZWV0IFNhbmRodScsIGVtYWlsOiAncHJlZXRAb3JnYW5pY2hhcnZlc3QuY28nLCBwaG9uZTogJysxIDYwNCA4ODggMjIxMScsXG4gICAgY2F0ZWdvcnk6ICdGb29kICYgR3JvY2VyeScsIGNvdW50cnk6ICdDYW5hZGEnLCB3ZWJzaXRlOiAnb3JnYW5pY2hhcnZlc3QuY28nLCByZXZlbnVlOiAnJDUwMEvigJMkMU0veXInLCBwcm9kdWN0czogMTIwLFxuICAgIHN1Ym1pdHRlZDogJ0p1bCAyMywgMjAyNicsIHN0YXR1czogJ3VuZGVyLXJldmlldycsXG4gICAgZG9jczogW3sgbmFtZTogJ0J1c2luZXNzIFJlZ2lzdHJhdGlvbicsIG9rOiB0cnVlIH0sIHsgbmFtZTogJ0Zvb2QgU2FmZXR5IENlcnQnLCBvazogdHJ1ZSB9LCB7IG5hbWU6ICdJbnN1cmFuY2UnLCBvazogdHJ1ZSB9XSxcbiAgICBub3RlczogJ1NwZWNpYWx0eSBvcmdhbmljIGZvb2Qgc3VwcGxpZXIuIEFsbCBkb2N1bWVudHMgdmVyaWZpZWQuJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdBUFAtMTAzOScsIHN0b3JlOiAnVGVjaEdlYXIgWm9uZScsIG93bmVyOiAnTWFyY3VzIFdvbGZmJywgZW1haWw6ICdtLndvbGZmQHRlY2hnZWFyLmRlJywgcGhvbmU6ICcrNDkgMzAgNTU1NSAxMjM0JyxcbiAgICBjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJywgY291bnRyeTogJ0dlcm1hbnknLCB3ZWJzaXRlOiAndGVjaGdlYXJ6b25lLmRlJywgcmV2ZW51ZTogJyQ1TSsveXInLCBwcm9kdWN0czogMjQwMCxcbiAgICBzdWJtaXR0ZWQ6ICdKdWwgMjIsIDIwMjYnLCBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICBkb2NzOiBbeyBuYW1lOiAnQ29tcGFueSBSZWdpc3RyYXRpb24nLCBvazogdHJ1ZSB9LCB7IG5hbWU6ICdUYXggSUQnLCBvazogdHJ1ZSB9LCB7IG5hbWU6ICdXYXJyYW50eSBQb2xpY3knLCBvazogZmFsc2UgfV0sXG4gICAgbm90ZXM6ICdMYXJnZSBFVSBlbGVjdHJvbmljcyBkaXN0cmlidXRvci4gTWlzc2luZyB3YXJyYW50eSBkb2NzLidcbiAgfSxcbiAge1xuICAgIGlkOiAnQVBQLTEwMzgnLCBzdG9yZTogJ0NyYWZ0eUhvbWUgU3R1ZGlvJywgb3duZXI6ICdBaWtvIFlhbWFtb3RvJywgZW1haWw6ICdhaWtvQGNyYWZ0eWhvbWUuanAnLCBwaG9uZTogJys4MSAzIDMzMzMgODg4OCcsXG4gICAgY2F0ZWdvcnk6ICdIb21lICYgTGl2aW5nJywgY291bnRyeTogJ0phcGFuJywgd2Vic2l0ZTogJ2NyYWZ0eWhvbWUuanAnLCByZXZlbnVlOiAnJDEwMEvigJMkNTAwSy95cicsIHByb2R1Y3RzOiA4NCxcbiAgICBzdWJtaXR0ZWQ6ICdKdWwgMjEsIDIwMjYnLCBzdGF0dXM6ICdhcHByb3ZlZCcsXG4gICAgZG9jczogW3sgbmFtZTogJ0J1c2luZXNzIExpY2Vuc2UnLCBvazogdHJ1ZSB9LCB7IG5hbWU6ICdQcm9kdWN0IFNhbXBsZXMnLCBvazogdHJ1ZSB9LCB7IG5hbWU6ICdCYW5rIERldGFpbHMnLCBvazogdHJ1ZSB9XSxcbiAgICBub3RlczogJ0FydGlzYW4gaG9tZSBnb29kcy4gQXBwcm92ZWQgYWZ0ZXIgc2FtcGxlIHJldmlldy4nXG4gIH0sXG4gIHtcbiAgICBpZDogJ0FQUC0xMDM3Jywgc3RvcmU6ICdHYWRnZXRGbHknLCBvd25lcjogJ09sdSBBZGV5ZW1pJywgZW1haWw6ICdvbHVAZ2FkZ2V0Zmx5Lm5nJywgcGhvbmU6ICcrMjM0IDgwMiA1NTUgNzg5MCcsXG4gICAgY2F0ZWdvcnk6ICdFbGVjdHJvbmljcycsIGNvdW50cnk6ICdOaWdlcmlhJywgd2Vic2l0ZTogJ2dhZGdldGZseS5uZycsIHJldmVudWU6ICckMjUwS+KAkyQ1MDBLL3lyJywgcHJvZHVjdHM6IDM0MCxcbiAgICBzdWJtaXR0ZWQ6ICdKdWwgMTksIDIwMjYnLCBzdGF0dXM6ICdyZWplY3RlZCcsXG4gICAgZG9jczogW3sgbmFtZTogJ1JlZ2lzdHJhdGlvbicsIG9rOiBmYWxzZSB9LCB7IG5hbWU6ICdUYXggQ2VydCcsIG9rOiBmYWxzZSB9LCB7IG5hbWU6ICdCYW5rIFN0YXRlbWVudCcsIG9rOiB0cnVlIH1dLFxuICAgIG5vdGVzOiAnRG9jdW1lbnRzIGluY29tcGxldGUuIE5vdGlmaWVkIHZpYSBlbWFpbCB0byByZXN1Ym1pdC4nXG4gIH0sXG5dXG5cbmNvbnN0IFNUQVRVU19NRVRBOiBSZWNvcmQ8QXBwbGljYXRpb25JdGVtWydzdGF0dXMnXSwgeyBsYWJlbDogc3RyaW5nOyBjbHM6IHN0cmluZzsgZG90OiBzdHJpbmcgfT4gPSB7XG4gIHBlbmRpbmc6ICAgICAgeyBsYWJlbDogJ1BlbmRpbmcnLCAgICAgIGNsczogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXSBib3JkZXIgYm9yZGVyLVsjRkRFNjhBXScsIGRvdDogJ2JnLVsjRDk3NzA2XScgfSxcbiAgJ3VuZGVyLXJldmlldyc6IHsgbGFiZWw6ICdVbmRlciBSZXZpZXcnLCBjbHM6ICdiZy1bI0VFRjJGRl0gdGV4dC1bIzQzMzhDQV0gYm9yZGVyIGJvcmRlci1bI0M3RDJGRV0nLCBkb3Q6ICdiZy1bIzYzNjZGMV0nIH0sXG4gIGFwcHJvdmVkOiAgICAgeyBsYWJlbDogJ0FwcHJvdmVkJywgICAgIGNsczogJ2JnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XSBib3JkZXIgYm9yZGVyLVsjQTdGM0QwXScsIGRvdDogJ2JnLVsjMDU5NjY5XScgfSxcbiAgcmVqZWN0ZWQ6ICAgICB7IGxhYmVsOiAnUmVqZWN0ZWQnLCAgICAgY2xzOiAnYmctWyNGRUUyRTJdIHRleHQtWyM5OTFCMUJdIGJvcmRlciBib3JkZXItWyNGQ0E1QTVdJywgZG90OiAnYmctWyNFMTFENDhdJyB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZW5kb3JBcHBsaWNhdGlvbnNBZG1pbih7IG9uTmF2aWdhdGU6IF8gfTogUHJvcHMpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxBcHBsaWNhdGlvbkl0ZW1bXT4oSU5JVElBTF9BUFBMSUNBVElPTlMpXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTwnYWxsJyB8IEFwcGxpY2F0aW9uSXRlbVsnc3RhdHVzJ10+KCdhbGwnKVxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oJ0FQUC0xMDQxJylcbiAgY29uc3QgW25vdGVJbnB1dCwgc2V0Tm90ZUlucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2hvd1N1Ym1pdE1vZGFsLCBzZXRTaG93U3VibWl0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmZWVkYmFjaywgc2V0RmVlZGJhY2tdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oKCkgPT4gaXRlbXMuZmlsdGVyKGEgPT4ge1xuICAgIGNvbnN0IG1hdGNoRmlsdGVyID0gZmlsdGVyID09PSAnYWxsJyB8fCBhLnN0YXR1cyA9PT0gZmlsdGVyXG4gICAgY29uc3QgbWF0Y2hTZWFyY2ggPSAhc2VhcmNoIHx8IGEuc3RvcmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHwgYS5vd25lci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fCBhLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgcmV0dXJuIG1hdGNoRmlsdGVyICYmIG1hdGNoU2VhcmNoXG4gIH0pLCBbaXRlbXMsIGZpbHRlciwgc2VhcmNoXSlcblxuICBjb25zdCBjb3VudHMgPSB7XG4gICAgYWxsOiBpdGVtcy5sZW5ndGgsXG4gICAgcGVuZGluZzogaXRlbXMuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdwZW5kaW5nJykubGVuZ3RoLFxuICAgICd1bmRlci1yZXZpZXcnOiBpdGVtcy5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ3VuZGVyLXJldmlldycpLmxlbmd0aCxcbiAgICBhcHByb3ZlZDogaXRlbXMuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdhcHByb3ZlZCcpLmxlbmd0aCxcbiAgICByZWplY3RlZDogaXRlbXMuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdyZWplY3RlZCcpLmxlbmd0aCxcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVN0YXR1cyA9IChhcHBJZDogc3RyaW5nLCBuZXh0U3RhdHVzOiBBcHBsaWNhdGlvbkl0ZW1bJ3N0YXR1cyddKSA9PiB7XG4gICAgc2V0SXRlbXMocHJldiA9PiBwcmV2Lm1hcChhID0+IGEuaWQgPT09IGFwcElkID8geyAuLi5hLCBzdGF0dXM6IG5leHRTdGF0dXMgfSA6IGEpKVxuICAgIGNvbnN0IGFwcCA9IGl0ZW1zLmZpbmQoYSA9PiBhLmlkID09PSBhcHBJZClcbiAgICBzZXRGZWVkYmFjayhgQXBwbGljYXRpb24gJHthcHBJZH0gKCR7YXBwPy5zdG9yZX0pIHVwZGF0ZWQgdG8gJHtuZXh0U3RhdHVzLnRvVXBwZXJDYXNlKCl9YClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZlZWRiYWNrKG51bGwpLCAzMDAwKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlRG9jID0gKGFwcElkOiBzdHJpbmcsIGRvY0luZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRJdGVtcyhwcmV2ID0+IHByZXYubWFwKGEgPT4ge1xuICAgICAgaWYgKGEuaWQgIT09IGFwcElkKSByZXR1cm4gYVxuICAgICAgY29uc3QgbmV3RG9jcyA9IFsuLi5hLmRvY3NdXG4gICAgICBuZXdEb2NzW2RvY0luZGV4XSA9IHsgLi4ubmV3RG9jc1tkb2NJbmRleF0sIG9rOiAhbmV3RG9jc1tkb2NJbmRleF0ub2sgfVxuICAgICAgcmV0dXJuIHsgLi4uYSwgZG9jczogbmV3RG9jcyB9XG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGROb3RlID0gKGFwcElkOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIW5vdGVJbnB1dC50cmltKCkpIHJldHVyblxuICAgIGNvbnN0IHRpbWVTdHIgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pXG4gICAgc2V0SXRlbXMocHJldiA9PiBwcmV2Lm1hcChhID0+IGEuaWQgPT09IGFwcElkID8geyAuLi5hLCBub3RlczogYCR7YS5ub3Rlc30gWyR7dGltZVN0cn06ICR7bm90ZUlucHV0LnRyaW0oKX1dYCB9IDogYSkpXG4gICAgc2V0Tm90ZUlucHV0KCcnKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXhwb3J0Q1NWID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSAnQXBwbGljYXRpb24gSUQsU3RvcmUsT3duZXIsRW1haWwsQ2F0ZWdvcnksQ291bnRyeSxTdGF0dXMsU3VibWl0dGVkXFxuJ1xuICAgIGNvbnN0IHJvd3MgPSBmaWx0ZXJlZC5tYXAoYSA9PiBgXCIke2EuaWR9XCIsXCIke2Euc3RvcmV9XCIsXCIke2Eub3duZXJ9XCIsXCIke2EuZW1haWx9XCIsXCIke2EuY2F0ZWdvcnl9XCIsXCIke2EuY291bnRyeX1cIixcIiR7YS5zdGF0dXN9XCIsXCIke2Euc3VibWl0dGVkfVwiYCkuam9pbignXFxuJylcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2hlYWRlcnMgKyByb3dzXSwgeyB0eXBlOiAndGV4dC9jc3YnIH0pXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBhLmhyZWYgPSB1cmxcbiAgICBhLmRvd25sb2FkID0gYHZlbmRvci1hcHBsaWNhdGlvbnMtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApfS5jc3ZgXG4gICAgYS5jbGljaygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgbWluLWgtc2NyZWVuIGJnLVsjRjRGNEY4XVwiPlxuICAgICAgey8qIE1haW4gTGlzdCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNiBzcGFjZS15LTUgbWluLXctMFwiPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+VmVuZG9yIEFwcGxpY2F0aW9ucyAmIE9uYm9hcmRpbmc8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QjgyXSBtdC0wLjVcIj5SZXZpZXcsIHZlcmlmeSBjcmVkZW50aWFscywgYW5kIGFwcHJvdmUgbmV3IG1lcmNoYW50IHN0b3JlczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBvcnRDU1Z9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0Y0RjRGOF0gdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgMTB2Nm0wIDBsLTMtM20zIDNsMy0zbTIgOEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgRXhwb3J0IENTVlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTdWJtaXRNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3ctc20gc2hhZG93LVsjRTg0NTBBXS8yMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICsgRmlsZSBBcHBsaWNhdGlvblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtmZWVkYmFjayAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YwRkRGNF0gYm9yZGVyIGJvcmRlci1bI0JCRjdEMF0gcm91bmRlZC14bCBweC00IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMwNTk2NjldXCI+XG4gICAgICAgICAgICDinJMge2ZlZWRiYWNrfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBLUElzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgeyBsYWJlbDogJ1RvdGFsIEFwcGxpY2F0aW9ucycsIHZhbHVlOiBjb3VudHMuYWxsLnRvU3RyaW5nKCksIGNvbG9yOiAndGV4dC1bIzExMTExOF0nIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnUGVuZGluZyBSZXZpZXcnLCB2YWx1ZTogY291bnRzLnBlbmRpbmcudG9TdHJpbmcoKSwgY29sb3I6ICd0ZXh0LVsjRDk3NzA2XScgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdVbmRlciBSZXZpZXcgUXVldWUnLCB2YWx1ZTogY291bnRzWyd1bmRlci1yZXZpZXcnXS50b1N0cmluZygpLCBjb2xvcjogJ3RleHQtWyM2MzY2RjFdJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0FwcHJvdmVkIE1lcmNoYW50cycsIHZhbHVlOiBjb3VudHMuYXBwcm92ZWQudG9TdHJpbmcoKSwgY29sb3I6ICd0ZXh0LVsjMDU5NjY5XScgfSxcbiAgICAgICAgICBdLm1hcChrID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtrLmxhYmVsfSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntrLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZm9udC1tb25vIGZvbnQtYmxhY2sgdGV4dC0yeGwgbXQtMSAke2suY29sb3J9YH0+e2sudmFsdWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBGaWx0ZXJzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLTJ4bCBwLTQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LTEgbWluLXctWzIyMHB4XVwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMuNSB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00IGgtNCB0ZXh0LVsjOUI5QkI4XVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHN0b3JlIG5hbWUsIG93bmVyLCBlbWFpbC4uLlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHBsLTEwIHByLTQgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQteGwgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSBwbGFjZWhvbGRlcjp0ZXh0LVsjOUI5QkI4XVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctWyNGNEY0RjhdIHJvdW5kZWQteGwgcC0xXCI+XG4gICAgICAgICAgICB7KFsnYWxsJywgJ3BlbmRpbmcnLCAndW5kZXItcmV2aWV3JywgJ2FwcHJvdmVkJywgJ3JlamVjdGVkJ10gYXMgY29uc3QpLm1hcChzID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17c31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIocyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCBjYXBpdGFsaXplIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXIgPT09IHMgPyAnYmctd2hpdGUgc2hhZG93LXNtIHRleHQtWyMxMTExMThdJyA6ICd0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjNkI2QjgyXSdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzICE9PSAnYWxsJyAmJiA8c3BhbiBjbGFzc05hbWU9e2B3LTEuNSBoLTEuNSByb3VuZGVkLWZ1bGwgJHtTVEFUVVNfTUVUQVtzIGFzIEFwcGxpY2F0aW9uSXRlbVsnc3RhdHVzJ11dPy5kb3R9YH0gLz59XG4gICAgICAgICAgICAgICAge3MgPT09ICdhbGwnID8gYEFsbCAoJHtjb3VudHMuYWxsfSlgIDogYCR7U1RBVFVTX01FVEFbcyBhcyBBcHBsaWNhdGlvbkl0ZW1bJ3N0YXR1cyddXS5sYWJlbH0gKCR7Y291bnRzW3NdfSlgfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQXBwbGljYXRpb25zIExpc3QgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAge2ZpbHRlcmVkLm1hcChhcHAgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2FwcC5pZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoc2VsZWN0ZWQgPT09IGFwcC5pZCA/IG51bGwgOiBhcHAuaWQpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXItMiBwLTUgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LW1kICR7c2VsZWN0ZWQgPT09IGFwcC5pZCA/ICdib3JkZXItWyNFODQ1MEFdIHNoYWRvdy1zbScgOiAnYm9yZGVyLVsjRTJFMkVDXSd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgey8qIFN0b3JlIEljb24gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC0yeGwgYmctWyNFODQ1MEFdLzEwIGJvcmRlciBib3JkZXItWyNFODQ1MEFdLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtbGcgZmxleC1zaHJpbmstMCBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV1cIj5cbiAgICAgICAgICAgICAgICAgIHthcHAuc3RvcmUuc2xpY2UoMCwgMikudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBNYWluIERldGFpbHMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzExMTExOF1cIj57YXBwLnN0b3JlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IHB4LTIuNSBweS0wLjUgcm91bmRlZC1mdWxsIHRleHQtWzExcHhdIGZvbnQtYm9sZCAke1NUQVRVU19NRVRBW2FwcC5zdGF0dXNdLmNsc31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1NUQVRVU19NRVRBW2FwcC5zdGF0dXNdLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml0gbXQtMC41XCI+e2FwcC5vd25lcn0gwrcge2FwcC5lbWFpbH0gwrcge2FwcC5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjRTg0NTBBXVwiPnthcHAuaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF0gbXQtMC41XCI+e2FwcC5zdWJtaXR0ZWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogTWV0YWRhdGEgQ2hpcHMgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG10LTMgZmxleC13cmFwIHRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtbWVkaXVtIGJnLVsjRjRGNEY4XSBweC0yLjUgcHktMSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAg8J+TgSB7YXBwLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1lZGl1bSBiZy1bI0Y0RjRGOF0gcHgtMi41IHB5LTEgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIPCfjJAge2FwcC5jb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1lZGl1bSBiZy1bI0Y0RjRGOF0gcHgtMi41IHB5LTEgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIPCfk6Yge2FwcC5wcm9kdWN0c30gcHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgZm9udC1tZWRpdW0gYmctWyNGNEY0RjhdIHB4LTIuNSBweS0xIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICDwn5KwIHthcHAucmV2ZW51ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBEb2N1bWVudCBWZXJpZmljYXRpb24gQ2hlY2tib3hlcyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbXQtMyBmbGV4LXdyYXBcIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlXCI+VmVyaWZpY2F0aW9uIERvY3M6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7YXBwLmRvY3MubWFwKChkb2MsIGRJZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RvYy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlRG9jKGFwcC5pZCwgZElkeCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCBweC0yLjUgcHktMSByb3VuZGVkLWxnIGJvcmRlciB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2Mub2sgPyAnYmctWyNEMUZBRTVdIHRleHQtWyMwNjVGNDZdIGJvcmRlci1bI0E3RjNEMF0nIDogJ2JnLVsjRkVFMkUyXSB0ZXh0LVsjOTkxQjFCXSBib3JkZXItWyNGQ0E1QTVdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RvYy5vayA/ICfinJMnIDogJ+KclSd9IHtkb2MubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBXb3JrZmxvdyBBY3Rpb25zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBmbGV4LXNocmluay0wXCIgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgIHthcHAuc3RhdHVzICE9PSAnYXBwcm92ZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZVN0YXR1cyhhcHAuaWQsICdhcHByb3ZlZCcpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMS41IGJnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjQTdGM0QwXSB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgYm9yZGVyLVsjQTdGM0QwXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBcHByb3ZlIE1lcmNoYW50XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHthcHAuc3RhdHVzID09PSAncGVuZGluZycgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXBkYXRlU3RhdHVzKGFwcC5pZCwgJ3VuZGVyLXJldmlldycpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMS41IGJnLVsjRUVGMkZGXSB0ZXh0LVsjNDMzOENBXSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjQzdEMkZFXSB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgYm9yZGVyLVsjQzdEMkZFXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQdXQgVW5kZXIgUmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHthcHAuc3RhdHVzICE9PSAncmVqZWN0ZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZVN0YXR1cyhhcHAuaWQsICdyZWplY3RlZCcpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMS41IGJnLVsjRkVFMkUyXSB0ZXh0LVsjOTkxQjFCXSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjRkVDQUNBXSB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgYm9yZGVyLVsjRkNBNUE1XVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBSZWplY3QgQXBwbGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogRXhwYW5kZWQgRGV0YWlsIFBhbmVsICovfVxuICAgICAgICAgICAgICB7c2VsZWN0ZWQgPT09IGFwcC5pZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHB0LTUgYm9yZGVyLXQgYm9yZGVyLVsjRjRGNEY4XSBzcGFjZS15LTRcIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00IGJnLVsjRjlGOUZDXSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLTJ4bCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnT2ZmaWNpYWwgV2Vic2l0ZScsIHZhbHVlOiBhcHAud2Vic2l0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdQaG9uZScsIHZhbHVlOiBhcHAucGhvbmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQW5udWFsIFJldmVudWUnLCB2YWx1ZTogYXBwLnJldmVudWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSW5pdGlhbCBJbnZlbnRvcnknLCB2YWx1ZTogYCR7YXBwLnByb2R1Y3RzfSBpdGVtc2AgfSxcbiAgICAgICAgICAgICAgICAgICAgXS5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2YubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e2YubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bIzExMTExOF0gbXQtMC41IHRydW5jYXRlXCI+e2YudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgbWItMVwiPkludGVybmFsIE5vdGVzICYgSGlzdG9yeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXSBiZy1bI0Y5RjlGQ10gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCBweC00IHB5LTMgZm9udC1tb25vXCI+e2FwcC5ub3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIG1iLTFcIj5BZGQgQXVkaXRvciBOb3RlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROb3RlSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGF1ZGl0b3IgY29tbWVudHMgb3IgdmVyaWZpY2F0aW9uIGRldGFpbHMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGgtMTAgcHgtMyBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCB0ZXh0LXhzIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZE5vdGUoYXBwLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bIzExMTExOF0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBOb3RlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIHtmaWx0ZXJlZC5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBweS0yMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLTJ4bCBiZy1bI0Y0RjRGOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICDwn5OEXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5ObyBhcHBsaWNhdGlvbnMgZm91bmQ8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzlCOUJCOF1cIj5UcnkgYWRqdXN0aW5nIHlvdXIgc2VhcmNoIG9yIGZpbHRlciBvcHRpb25zLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdWJtaXQgQXBwbGljYXRpb24gTW9kYWwgKi99XG4gICAgICA8U3VibWl0QXBwbGljYXRpb25Nb2RhbFxuICAgICAgICBpc09wZW49e3Nob3dTdWJtaXRNb2RhbH1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1N1Ym1pdE1vZGFsKGZhbHNlKX1cbiAgICAgICAgb25TYXZlPXtuZXdBcHAgPT4ge1xuICAgICAgICAgIHNldEl0ZW1zKHByZXYgPT4gW25ld0FwcCwgLi4ucHJldl0pXG4gICAgICAgICAgc2V0RmVlZGJhY2soYEZpbGVkIGFwcGxpY2F0aW9uIGZvciAke25ld0FwcC5zdG9yZX1gKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RmVlZGJhY2sobnVsbCksIDMwMDApXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUF5QkEsU0FBd0IsdUJBQXVCLEVBQUUsUUFBUSxTQUFTLFVBQWlCO0NBQ2pGLE1BQU0sQ0FBQyxPQUFPLGFBQUEsR0FBWSxhQUFBLFNBQUEsQ0FBUyxFQUFFO0NBQ3JDLE1BQU0sQ0FBQyxPQUFPLGFBQUEs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