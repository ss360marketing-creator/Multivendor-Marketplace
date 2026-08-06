import { g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog, t as useSession } from "./index-BM41bWnP.js";
import { d as listAdminVendors, h as updateAdminVendor, i as createAdminVendor, s as deleteAdminVendor } from "./admin-jnfUkW2D.js";
//#region src/admin/components/InviteVendorModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function InviteVendorModal({ isOpen, onClose, onSave }) {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [storeName, setStoreName] = (0, import_react.useState)("");
	const [ownerName, setOwnerName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [tagline, setTagline] = (0, import_react.useState)("Premium Verified Merchant");
	const [commissionRate, setCommissionRate] = (0, import_react.useState)("10");
	if (!isOpen) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!storeName.trim() || !email.trim()) return;
		setSubmitting(true);
		try {
			const slug = storeName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
			await onSave({
				id: `v_${Date.now()}`,
				name: storeName.trim(),
				slug,
				email: email.trim(),
				owner: ownerName.trim() || storeName.trim(),
				logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop&auto=format",
				cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=400&fit=crop&auto=format",
				status: "active",
				verified: true,
				rating: 5,
				productCount: 0,
				positiveFeedback: 100,
				followers: 0,
				responseTime: "1 hour",
				tagline: tagline.trim(),
				commissionRate: parseFloat(commissionRate) || 10
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
						children: "🏬"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-[#111118]",
						children: "Invite / Add Vendor Store"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#6B6B82]",
						children: "Onboard a new merchant to Sell on Nexus"
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
						children: "Store / Merchant Name *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						required: true,
						placeholder: "e.g. Apex Tech Store",
						value: storeName,
						onChange: (e) => setStoreName(e.target.value),
						className: "mt-1 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Store Owner Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "John Doe",
							value: ownerName,
							onChange: (e) => setOwnerName(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-semibold text-[#111118] uppercase",
							children: "Business Email *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "store@domain.com",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-semibold text-[#111118] uppercase",
						children: "Store Tagline / Bio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Premium Electronics & Accessories Store",
						value: tagline,
						onChange: (e) => setTagline(e.target.value),
						className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-semibold text-[#111118] uppercase",
						children: "Marketplace Commission Rate (%)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						step: "0.5",
						value: commissionRate,
						onChange: (e) => setCommissionRate(e.target.value),
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
							children: submitting ? "Creating..." : "✓ Add Merchant"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/admin/pages/VendorsAdmin.tsx
var STATUS = {
	active: {
		label: "Active",
		cls: "bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]"
	},
	review: {
		label: "Under Review",
		cls: "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]"
	},
	pending: {
		label: "Pending",
		cls: "bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]"
	},
	suspended: {
		label: "Suspended",
		cls: "bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]"
	}
};
function VendorsAdmin({ onNavigate }) {
	const session = useSession();
	const { vendors: catalogVendors } = useCatalog();
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [viewVendor, setViewVendor] = (0, import_react.useState)(null);
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [showInviteModal, setShowInviteModal] = (0, import_react.useState)(false);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			setLoading(true);
			if (session.token) {
				const response = await listAdminVendors(session.token, {
					q: search || void 0,
					status: statusFilter === "all" ? void 0 : statusFilter,
					limit: 100
				});
				if (!cancelled && response.success && response.data.length > 0) {
					setItems(response.data);
					setError(null);
					setLoading(false);
					return;
				}
			}
			if (!cancelled) {
				if (catalogVendors.length > 0) {
					const mapped = catalogVendors.map((v) => ({
						id: v.id,
						name: v.name,
						slug: v.id,
						email: `${v.name.toLowerCase().replace(/\s+/g, "")}@merchant.nexus`,
						owner: `${v.name} Owner`,
						logo: v.logo,
						cover: v.cover,
						status: "active",
						verified: v.verified,
						rating: v.rating,
						productCount: v.productCount,
						positiveFeedback: v.positiveFeedback,
						followers: v.followers,
						responseTime: v.responseTime,
						tagline: v.tagline,
						commissionRate: 10
					}));
					setItems(mapped);
				} else setItems([
					{
						id: "v1",
						name: "SoundVault",
						slug: "soundvault",
						email: "soundvault@nexus.market",
						owner: "Alex Mercer",
						logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format",
						cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop&auto=format",
						status: "active",
						verified: true,
						rating: 4.9,
						productCount: 48,
						positiveFeedback: 99,
						followers: 1420,
						responseTime: "1 hr",
						tagline: "Premium Audio & Sound Systems",
						commissionRate: 10
					},
					{
						id: "v2",
						name: "TechArmor",
						slug: "techarmor",
						email: "techarmor@nexus.market",
						owner: "David Vance",
						logo: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop&auto=format",
						cover: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&h=400&fit=crop&auto=format",
						status: "active",
						verified: true,
						rating: 4.8,
						productCount: 32,
						positiveFeedback: 97,
						followers: 890,
						responseTime: "2 hrs",
						tagline: "Rugged Protection Devices",
						commissionRate: 8.5
					},
					{
						id: "v3",
						name: "SneakerHead",
						slug: "sneakerhead",
						email: "sneakers@nexus.market",
						owner: "Marcus Sterling",
						logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&auto=format",
						cover: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=400&fit=crop&auto=format",
						status: "review",
						verified: false,
						rating: 4.7,
						productCount: 19,
						positiveFeedback: 94,
						followers: 650,
						responseTime: "3 hrs",
						tagline: "Exclusive Footwear Drops",
						commissionRate: 12
					}
				]);
				setError(null);
				setLoading(false);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [
		session.token,
		search,
		statusFilter,
		catalogVendors
	]);
	const filtered = (0, import_react.useMemo)(() => {
		return items.filter((vendor) => {
			const matchSearch = !search || vendor.name.toLowerCase().includes(search.toLowerCase()) || vendor.email.toLowerCase().includes(search.toLowerCase()) || vendor.owner.toLowerCase().includes(search.toLowerCase());
			const matchStatus = statusFilter === "all" || vendor.status === statusFilter;
			return matchSearch && matchStatus;
		});
	}, [
		items,
		search,
		statusFilter
	]);
	const selectedVendor = items.find((v) => v.id === viewVendor);
	const handleApprove = async (vendor) => {
		setBusyId(vendor.id);
		if (session.token) try {
			await updateAdminVendor(session.token, vendor.id, {
				status: "ACTIVE",
				verified: true
			});
		} catch {}
		setItems((prev) => prev.map((v) => v.id === vendor.id ? {
			...v,
			status: "active",
			verified: true
		} : v));
		setFeedback(`Approved merchant store ${vendor.name}!`);
		setTimeout(() => setFeedback(null), 3e3);
		setBusyId(null);
	};
	const handleSuspend = async (vendor) => {
		setBusyId(vendor.id);
		if (session.token) try {
			await deleteAdminVendor(session.token, vendor.id);
		} catch {}
		setItems((prev) => prev.map((v) => v.id === vendor.id ? {
			...v,
			status: "suspended",
			verified: false
		} : v));
		setFeedback(`Suspended merchant store ${vendor.name}`);
		setTimeout(() => setFeedback(null), 3e3);
		setBusyId(null);
	};
	const handleAddVendor = async (vendorData) => {
		const newVendor = {
			id: vendorData.id ?? `v_${Date.now()}`,
			name: vendorData.name ?? "New Merchant",
			slug: vendorData.slug ?? "new-merchant",
			email: vendorData.email ?? "merchant@nexus.market",
			owner: vendorData.owner ?? "Store Owner",
			logo: vendorData.logo ?? "",
			cover: vendorData.cover ?? "",
			status: vendorData.status ?? "active",
			verified: vendorData.verified ?? true,
			rating: vendorData.rating ?? 5,
			productCount: vendorData.productCount ?? 0,
			positiveFeedback: vendorData.positiveFeedback ?? 100,
			followers: vendorData.followers ?? 0,
			responseTime: vendorData.responseTime ?? "1 hr",
			tagline: vendorData.tagline ?? "Verified Merchant",
			commissionRate: vendorData.commissionRate ?? 10
		};
		if (session.token) try {
			await createAdminVendor(session.token, {
				storeName: newVendor.name,
				email: newVendor.email,
				fullName: newVendor.owner,
				tagline: newVendor.tagline,
				commissionRate: newVendor.commissionRate
			});
		} catch {}
		setItems((prev) => [newVendor, ...prev]);
		setFeedback(`Merchant ${newVendor.name} added successfully!`);
		setTimeout(() => setFeedback(null), 3e3);
	};
	const handleExportCSV = () => {
		const headers = "Vendor ID,Store Name,Owner,Email,Status,Verified,Rating,Products,Commission (%)\n";
		const rows = filtered.map((v) => `"${v.id}","${v.name}","${v.owner}","${v.email}","${v.status}",${v.verified},${v.rating},${v.productCount},${v.commissionRate}`).join("\n");
		const blob = new Blob([headers + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `vendors-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 p-6 min-h-screen bg-[#F4F4F8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Vendors & Merchants"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-0.5 text-sm text-[#6B6B82]",
					children: [items.length, " registered merchant stores"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleExportCSV,
							className: "rounded-xl border border-[#E2E2EC] bg-white px-4 py-2 text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onNavigate("vendors-applications"),
							className: "rounded-xl border border-[#E8450A] text-[#E8450A] bg-[#FFF7F5] px-4 py-2 text-sm font-bold hover:bg-[#E8450A] hover:text-white transition-colors flex items-center gap-1.5",
							children: [
								"📄 Review Applications (",
								items.filter((v) => v.status === "review" || v.status === "pending").length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowInviteModal(true),
							className: "rounded-xl bg-[#E8450A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20",
							children: "+ Invite Vendor"
						})
					]
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
						label: "Active Merchants",
						value: items.filter((v) => v.status === "active").length.toString(),
						cls: "text-[#059669]"
					},
					{
						label: "Pending Applications",
						value: items.filter((v) => v.status === "pending" || v.status === "review").length.toString(),
						cls: "text-[#D97706]"
					},
					{
						label: "Verified Stores",
						value: items.filter((v) => v.verified).length.toString(),
						cls: "text-[#E8450A]"
					},
					{
						label: "Suspended Stores",
						value: items.filter((v) => v.status === "suspended").length.toString(),
						cls: "text-[#E11D48]"
					}
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-[#E2E2EC] bg-white p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
						children: k.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-1.5 font-mono text-2xl font-black ${k.cls}`,
						children: k.value
					})]
				}, k.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 rounded-2xl border border-[#E2E2EC] bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-[200px] flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B9BB8]",
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
						placeholder: "Search vendor name, email, owner...",
						value: search,
						onChange: (e) => setSearch(e.target.value),
						className: "h-10 w-full rounded-xl border border-[#E2E2EC] bg-[#F4F4F8] pl-10 pr-4 text-sm outline-none placeholder:text-[#9B9BB8] focus:border-[#E8450A]"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 rounded-xl bg-[#F4F4F8] p-1",
					children: [
						"all",
						"active",
						"review",
						"pending",
						"suspended"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setStatusFilter(s),
						className: `rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-all ${statusFilter === s ? "bg-white text-[#111118] shadow-sm" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
						children: s
					}, s))
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-hidden rounded-2xl border border-[#E2E2EC] bg-white shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-[#F4F4F8] bg-[#F9F9FC] text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3.5 text-left",
										children: "Vendor Merchant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3.5 text-left",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3.5 text-left",
										children: "Rating"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3.5 text-left",
										children: "Products"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3.5 text-left",
										children: "Commission"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3.5 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-[#F4F4F8]",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 6,
									className: "px-5 py-12 text-center text-sm text-[#6B6B82]",
									children: "Loading vendors..."
								}) }) : filtered.map((vendor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: `cursor-pointer transition-colors hover:bg-[#F9F9FC] ${viewVendor === vendor.id ? "bg-[#FFF7F5]" : ""}`,
									onClick: () => setViewVendor(viewVendor === vendor.id ? null : vendor.id),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#E8450A] text-sm font-bold text-white shadow-sm",
													children: vendor.name.charAt(0)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "truncate font-bold text-[#111118]",
															children: vendor.name
														}), vendor.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs text-[#059669] font-bold",
															children: "✓ Verified"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate text-xs text-[#9B9BB8]",
														children: vendor.email
													})]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${STATUS[vendor.status]?.cls ?? "bg-[#F4F4F8] text-[#6B6B82]"}`,
												children: STATUS[vendor.status]?.label ?? vendor.status
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#F59E0B]",
													children: "★"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-sm font-bold text-[#111118]",
													children: vendor.rating
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-semibold text-[#111118]",
												children: [vendor.productCount, " items"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-xs font-bold text-[#E8450A] bg-[#FFF7F5] border border-[#FECACA] px-2 py-0.5 rounded-md",
												children: [vendor.commissionRate, "%"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5 text-right",
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-end gap-1.5",
												children: vendor.status === "pending" || vendor.status === "review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: busyId === vendor.id,
													onClick: () => void handleApprove(vendor),
													className: "rounded-lg bg-[#D1FAE5] px-2.5 py-1 text-xs font-bold text-[#059669] hover:bg-[#A7F3D0]",
													children: "Approve Store"
												}) : vendor.status === "suspended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: busyId === vendor.id,
													onClick: () => void handleApprove(vendor),
													className: "rounded-lg bg-[#D1FAE5] px-2.5 py-1 text-xs font-bold text-[#059669] hover:bg-[#A7F3D0]",
													children: "Reactivate"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: busyId === vendor.id,
													onClick: () => void handleSuspend(vendor),
													className: "rounded-lg bg-[#FEE2E2] px-2.5 py-1 text-xs font-bold text-[#E11D48] hover:bg-[#FECACA]",
													children: "Suspend"
												})
											})
										})
									]
								}, vendor.id))
							})]
						})
					})
				}), selectedVendor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full lg:w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-[#E2E2EC] bg-white shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-24 bg-gradient-to-br from-[#0F0F18] to-[#1E1E30] p-4 flex justify-between items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-white uppercase tracking-wider",
							children: "Store Inspector"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setViewVendor(null),
							className: "w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-xs",
							children: "✕"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 pb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-[#E8450A] -mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white text-xl font-black text-white shadow-md",
								children: selectedVendor.name.charAt(0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-base text-[#111118]",
											children: selectedVendor.name
										}), selectedVendor.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#059669]",
											children: "✓"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#9B9BB8]",
										children: selectedVendor.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 text-xs text-[#6B6B82]",
										children: ["Owner: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-[#111118]",
											children: selectedVendor.owner
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-[#9B9BB8] italic",
										children: selectedVendor.tagline
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-2 gap-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase text-[#9B9BB8]",
											children: "Products"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono font-bold text-sm text-[#111118] mt-0.5",
											children: selectedVendor.productCount
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase text-[#9B9BB8]",
											children: "Commission"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono font-bold text-sm text-[#E8450A] mt-0.5",
											children: [selectedVendor.commissionRate, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase text-[#9B9BB8]",
											children: "Rating"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono font-bold text-sm text-[#111118] mt-0.5",
											children: ["★ ", selectedVendor.rating]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase text-[#9B9BB8]",
											children: "Response"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono font-bold text-sm text-[#059669] mt-0.5",
											children: selectedVendor.responseTime
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => window.open(`/vendor/${selectedVendor.id}`, "_blank"),
									className: "w-full rounded-xl bg-[#111118] py-2.5 text-xs font-bold text-white hover:bg-[#E8450A] transition-colors",
									children: "View Storefront Live ↗"
								}), selectedVendor.status !== "suspended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: busyId === selectedVendor.id,
									onClick: () => void handleSuspend(selectedVendor),
									className: "w-full rounded-xl border border-[#FEE2E2] py-2.5 text-xs font-bold text-[#E11D48] hover:bg-[#FEE2E2] transition-colors",
									children: "Suspend Merchant"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: busyId === selectedVendor.id,
									onClick: () => void handleApprove(selectedVendor),
									className: "w-full rounded-xl border border-[#BBF7D0] py-2.5 text-xs font-bold text-[#059669] hover:bg-[#F0FDF4] transition-colors",
									children: "Reactivate Merchant"
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InviteVendorModal, {
				isOpen: showInviteModal,
				onClose: () => setShowInviteModal(false),
				onSave: handleAddVendor
			})
		]
	});
}
//#endregion
export { VendorsAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVuZG9yc0FkbWluLUMyYTFteHp5LmpzIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL0ludml0ZVZlbmRvck1vZGFsLnRzeCIsIi4uLy4uL3NyYy9hZG1pbi9wYWdlcy9WZW5kb3JzQWRtaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluVmVuZG9yIH0gZnJvbSAnQC9hcGkvYWRtaW4nXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlzT3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG4gIG9uU2F2ZTogKHZlbmRvckRhdGE6IFBhcnRpYWw8QWRtaW5WZW5kb3I+KSA9PiBQcm9taXNlPHZvaWQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludml0ZVZlbmRvck1vZGFsKHsgaXNPcGVuLCBvbkNsb3NlLCBvblNhdmUgfTogUHJvcHMpIHtcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdG9yZU5hbWUsIHNldFN0b3JlTmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW293bmVyTmFtZSwgc2V0T3duZXJOYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdGFnbGluZSwgc2V0VGFnbGluZV0gPSB1c2VTdGF0ZSgnUHJlbWl1bSBWZXJpZmllZCBNZXJjaGFudCcpXG4gIGNvbnN0IFtjb21taXNzaW9uUmF0ZSwgc2V0Q29tbWlzc2lvblJhdGVdID0gdXNlU3RhdGUoJzEwJylcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGxcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFzdG9yZU5hbWUudHJpbSgpIHx8ICFlbWFpbC50cmltKCkpIHJldHVyblxuXG4gICAgc2V0U3VibWl0dGluZyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzbHVnID0gc3RvcmVOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldKy9nLCAnLScpLnJlcGxhY2UoLyheLXwtJCkvZywgJycpXG4gICAgICBjb25zdCBwYXlsb2FkOiBQYXJ0aWFsPEFkbWluVmVuZG9yPiA9IHtcbiAgICAgICAgaWQ6IGB2XyR7RGF0ZS5ub3coKX1gLFxuICAgICAgICBuYW1lOiBzdG9yZU5hbWUudHJpbSgpLFxuICAgICAgICBzbHVnLFxuICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLFxuICAgICAgICBvd25lcjogb3duZXJOYW1lLnRyaW0oKSB8fCBzdG9yZU5hbWUudHJpbSgpLFxuICAgICAgICBsb2dvOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTgwMDUxODIzODQtYTgzYThiZDU3ZmJlP3c9MjAwJmg9MjAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0JyxcbiAgICAgICAgY292ZXI6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxODAwNTE4MjM4NC1hODNhOGJkNTdmYmU/dz0xMjAwJmg9NDAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0JyxcbiAgICAgICAgc3RhdHVzOiAnYWN0aXZlJyxcbiAgICAgICAgdmVyaWZpZWQ6IHRydWUsXG4gICAgICAgIHJhdGluZzogNS4wLFxuICAgICAgICBwcm9kdWN0Q291bnQ6IDAsXG4gICAgICAgIHBvc2l0aXZlRmVlZGJhY2s6IDEwMCxcbiAgICAgICAgZm9sbG93ZXJzOiAwLFxuICAgICAgICByZXNwb25zZVRpbWU6ICcxIGhvdXInLFxuICAgICAgICB0YWdsaW5lOiB0YWdsaW5lLnRyaW0oKSxcbiAgICAgICAgY29tbWlzc2lvblJhdGU6IHBhcnNlRmxvYXQoY29tbWlzc2lvblJhdGUpIHx8IDEwLFxuICAgICAgfVxuXG4gICAgICBhd2FpdCBvblNhdmUocGF5bG9hZClcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzYwIHotNTAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG1heC13LW1kIHctZnVsbCBzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlbiBzcGFjZS15LTQgcC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC0yeGwgYmctWyNFODQ1MEFdLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LVsjRTg0NTBBXSB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgIPCfj6xcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+SW52aXRlIC8gQWRkIFZlbmRvciBTdG9yZTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj5PbmJvYXJkIGEgbmV3IG1lcmNoYW50IHRvIFNlbGwgb24gTmV4dXM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInRleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyMxMTExMThdXCI+4pyVPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktMy41IHRleHQteHNcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+U3RvcmUgLyBNZXJjaGFudCBOYW1lICo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEFwZXggVGVjaCBTdG9yZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yZU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN0b3JlTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTEgcHgtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPlN0b3JlIE93bmVyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e293bmVyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRPd25lck5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPkJ1c2luZXNzIEVtYWlsICo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdG9yZUBkb21haW4uY29tXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5TdG9yZSBUYWdsaW5lIC8gQmlvPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJlbWl1bSBFbGVjdHJvbmljcyAmIEFjY2Vzc29yaWVzIFN0b3JlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RhZ2xpbmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRhZ2xpbmUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTEwIHB4LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5NYXJrZXRwbGFjZSBDb21taXNzaW9uIFJhdGUgKCUpPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgc3RlcD1cIjAuNVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21taXNzaW9uUmF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29tbWlzc2lvblJhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTEwIHB4LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXNtIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGJvcmRlci10IGJvcmRlci1bI0UyRTJFQ10gZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhzIGhvdmVyOmJnLVsjQzkzQTA3XVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdWJtaXR0aW5nID8gJ0NyZWF0aW5nLi4uJyA6ICfinJMgQWRkIE1lcmNoYW50J31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnQC9zdGF0ZS9zZXNzaW9uLXN0b3JlJ1xuaW1wb3J0IHsgdXNlQ2F0YWxvZyB9IGZyb20gJ0Avc3RhdGUvY2F0YWxvZy1zdG9yZSdcbmltcG9ydCBJbnZpdGVWZW5kb3JNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0ludml0ZVZlbmRvck1vZGFsJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQWRtaW5WZW5kb3IsXG4gIGRlbGV0ZUFkbWluVmVuZG9yLFxuICBsaXN0QWRtaW5WZW5kb3JzLFxuICB1cGRhdGVBZG1pblZlbmRvcixcbiAgdHlwZSBBZG1pblZlbmRvcixcbn0gZnJvbSAnQC9hcGkvYWRtaW4nXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG5jb25zdCBTVEFUVVM6IFJlY29yZDxzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgY2xzOiBzdHJpbmcgfT4gPSB7XG4gIGFjdGl2ZTogeyBsYWJlbDogJ0FjdGl2ZScsIGNsczogJ2JnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XSBib3JkZXIgYm9yZGVyLVsjQTdGM0QwXScgfSxcbiAgcmV2aWV3OiB7IGxhYmVsOiAnVW5kZXIgUmV2aWV3JywgY2xzOiAnYmctWyNGRUYzQzddIHRleHQtWyM5MjQwMEVdIGJvcmRlciBib3JkZXItWyNGREU2OEFdJyB9LFxuICBwZW5kaW5nOiB7IGxhYmVsOiAnUGVuZGluZycsIGNsczogJ2JnLVsjRUVGMkZGXSB0ZXh0LVsjNDMzOENBXSBib3JkZXIgYm9yZGVyLVsjQzdEMkZFXScgfSxcbiAgc3VzcGVuZGVkOiB7IGxhYmVsOiAnU3VzcGVuZGVkJywgY2xzOiAnYmctWyNGRUUyRTJdIHRleHQtWyM5OTFCMUJdIGJvcmRlciBib3JkZXItWyNGQ0E1QTVdJyB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZW5kb3JzQWRtaW4oeyBvbk5hdmlnYXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcbiAgY29uc3QgeyB2ZW5kb3JzOiBjYXRhbG9nVmVuZG9ycyB9ID0gdXNlQ2F0YWxvZygpXG5cbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc3RhdHVzRmlsdGVyLCBzZXRTdGF0dXNGaWx0ZXJdID0gdXNlU3RhdGUoJ2FsbCcpXG4gIGNvbnN0IFt2aWV3VmVuZG9yLCBzZXRWaWV3VmVuZG9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8QWRtaW5WZW5kb3JbXT4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2J1c3lJZCwgc2V0QnVzeUlkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtzaG93SW52aXRlTW9kYWwsIHNldFNob3dJbnZpdGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2ZlZWRiYWNrLCBzZXRGZWVkYmFja10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgaWYgKHNlc3Npb24udG9rZW4pIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaXN0QWRtaW5WZW5kb3JzKHNlc3Npb24udG9rZW4sIHsgcTogc2VhcmNoIHx8IHVuZGVmaW5lZCwgc3RhdHVzOiBzdGF0dXNGaWx0ZXIgPT09ICdhbGwnID8gdW5kZWZpbmVkIDogc3RhdHVzRmlsdGVyLCBsaW1pdDogMTAwIH0pXG4gICAgICAgIGlmICghY2FuY2VsbGVkICYmIHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0SXRlbXMocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRmFsbGJhY2sgZnJvbSBjYXRhbG9nIHZlbmRvcnMgb3IgbW9jayBsaXN0XG4gICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICBpZiAoY2F0YWxvZ1ZlbmRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZDogQWRtaW5WZW5kb3JbXSA9IGNhdGFsb2dWZW5kb3JzLm1hcCh2ID0+ICh7XG4gICAgICAgICAgICBpZDogdi5pZCxcbiAgICAgICAgICAgIG5hbWU6IHYubmFtZSxcbiAgICAgICAgICAgIHNsdWc6IHYuaWQsXG4gICAgICAgICAgICBlbWFpbDogYCR7di5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJyl9QG1lcmNoYW50Lm5leHVzYCxcbiAgICAgICAgICAgIG93bmVyOiBgJHt2Lm5hbWV9IE93bmVyYCxcbiAgICAgICAgICAgIGxvZ286IHYubG9nbyxcbiAgICAgICAgICAgIGNvdmVyOiB2LmNvdmVyLFxuICAgICAgICAgICAgc3RhdHVzOiAnYWN0aXZlJyxcbiAgICAgICAgICAgIHZlcmlmaWVkOiB2LnZlcmlmaWVkLFxuICAgICAgICAgICAgcmF0aW5nOiB2LnJhdGluZyxcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudDogdi5wcm9kdWN0Q291bnQsXG4gICAgICAgICAgICBwb3NpdGl2ZUZlZWRiYWNrOiB2LnBvc2l0aXZlRmVlZGJhY2ssXG4gICAgICAgICAgICBmb2xsb3dlcnM6IHYuZm9sbG93ZXJzLFxuICAgICAgICAgICAgcmVzcG9uc2VUaW1lOiB2LnJlc3BvbnNlVGltZSxcbiAgICAgICAgICAgIHRhZ2xpbmU6IHYudGFnbGluZSxcbiAgICAgICAgICAgIGNvbW1pc3Npb25SYXRlOiAxMCxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICBzZXRJdGVtcyhtYXBwZWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0SXRlbXMoW1xuICAgICAgICAgICAgeyBpZDogJ3YxJywgbmFtZTogJ1NvdW5kVmF1bHQnLCBzbHVnOiAnc291bmR2YXVsdCcsIGVtYWlsOiAnc291bmR2YXVsdEBuZXh1cy5tYXJrZXQnLCBvd25lcjogJ0FsZXggTWVyY2VyJywgbG9nbzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA1NzQwNDIwOTI4LTVlNTYwYzA2ZDMwZT93PTIwMCZoPTIwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsIGNvdmVyOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDU3NDA0MjA5MjgtNWU1NjBjMDZkMzBlP3c9MTIwMCZoPTQwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsIHN0YXR1czogJ2FjdGl2ZScsIHZlcmlmaWVkOiB0cnVlLCByYXRpbmc6IDQuOSwgcHJvZHVjdENvdW50OiA0OCwgcG9zaXRpdmVGZWVkYmFjazogOTksIGZvbGxvd2VyczogMTQyMCwgcmVzcG9uc2VUaW1lOiAnMSBocicsIHRhZ2xpbmU6ICdQcmVtaXVtIEF1ZGlvICYgU291bmQgU3lzdGVtcycsIGNvbW1pc3Npb25SYXRlOiAxMCB9LFxuICAgICAgICAgICAgeyBpZDogJ3YyJywgbmFtZTogJ1RlY2hBcm1vcicsIHNsdWc6ICd0ZWNoYXJtb3InLCBlbWFpbDogJ3RlY2hhcm1vckBuZXh1cy5tYXJrZXQnLCBvd25lcjogJ0RhdmlkIFZhbmNlJywgbG9nbzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjAxNzg0NTUxNDQ2LTIwYzllMDdjZGJkYj93PTIwMCZoPTIwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsIGNvdmVyOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MDE3ODQ1NTE0NDYtMjBjOWUwN2NkYmRiP3c9MTIwMCZoPTQwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsIHN0YXR1czogJ2FjdGl2ZScsIHZlcmlmaWVkOiB0cnVlLCByYXRpbmc6IDQuOCwgcHJvZHVjdENvdW50OiAzMiwgcG9zaXRpdmVGZWVkYmFjazogOTcsIGZvbGxvd2VyczogODkwLCByZXNwb25zZVRpbWU6ICcyIGhycycsIHRhZ2xpbmU6ICdSdWdnZWQgUHJvdGVjdGlvbiBEZXZpY2VzJywgY29tbWlzc2lvblJhdGU6IDguNSB9LFxuICAgICAgICAgICAgeyBpZDogJ3YzJywgbmFtZTogJ1NuZWFrZXJIZWFkJywgc2x1ZzogJ3NuZWFrZXJoZWFkJywgZW1haWw6ICdzbmVha2Vyc0BuZXh1cy5tYXJrZXQnLCBvd25lcjogJ01hcmN1cyBTdGVybGluZycsIGxvZ286ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MjI5MTAyNi03ZWVjMjY0YzI3ZmY/dz0yMDAmaD0yMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQnLCBjb3ZlcjogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyMjkxMDI2LTdlZWMyNjRjMjdmZj93PTEyMDAmaD00MDAmZml0PWNyb3AmYXV0bz1mb3JtYXQnLCBzdGF0dXM6ICdyZXZpZXcnLCB2ZXJpZmllZDogZmFsc2UsIHJhdGluZzogNC43LCBwcm9kdWN0Q291bnQ6IDE5LCBwb3NpdGl2ZUZlZWRiYWNrOiA5NCwgZm9sbG93ZXJzOiA2NTAsIHJlc3BvbnNlVGltZTogJzMgaHJzJywgdGFnbGluZTogJ0V4Y2x1c2l2ZSBGb290d2VhciBEcm9wcycsIGNvbW1pc3Npb25SYXRlOiAxMiB9LFxuICAgICAgICAgIF0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9KSgpXG5cbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cbiAgfSwgW3Nlc3Npb24udG9rZW4sIHNlYXJjaCwgc3RhdHVzRmlsdGVyLCBjYXRhbG9nVmVuZG9yc10pXG5cbiAgY29uc3QgZmlsdGVyZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKHZlbmRvciA9PiB7XG4gICAgICBjb25zdCBtYXRjaFNlYXJjaCA9XG4gICAgICAgICFzZWFyY2ggfHxcbiAgICAgICAgdmVuZG9yLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgdmVuZG9yLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgIHZlbmRvci5vd25lci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICAgY29uc3QgbWF0Y2hTdGF0dXMgPSBzdGF0dXNGaWx0ZXIgPT09ICdhbGwnIHx8IHZlbmRvci5zdGF0dXMgPT09IHN0YXR1c0ZpbHRlclxuICAgICAgcmV0dXJuIG1hdGNoU2VhcmNoICYmIG1hdGNoU3RhdHVzXG4gICAgfSlcbiAgfSwgW2l0ZW1zLCBzZWFyY2gsIHN0YXR1c0ZpbHRlcl0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRWZW5kb3IgPSBpdGVtcy5maW5kKHYgPT4gdi5pZCA9PT0gdmlld1ZlbmRvcilcblxuICBjb25zdCBoYW5kbGVBcHByb3ZlID0gYXN5bmMgKHZlbmRvcjogQWRtaW5WZW5kb3IpID0+IHtcbiAgICBzZXRCdXN5SWQodmVuZG9yLmlkKVxuICAgIGlmIChzZXNzaW9uLnRva2VuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB1cGRhdGVBZG1pblZlbmRvcihzZXNzaW9uLnRva2VuLCB2ZW5kb3IuaWQsIHsgc3RhdHVzOiAnQUNUSVZFJywgdmVyaWZpZWQ6IHRydWUgfSlcbiAgICAgIH0gY2F0Y2ggeyAvKiBkZXYgZmFsbGJhY2sgKi8gfVxuICAgIH1cbiAgICBzZXRJdGVtcyhwcmV2ID0+IHByZXYubWFwKHYgPT4gdi5pZCA9PT0gdmVuZG9yLmlkID8geyAuLi52LCBzdGF0dXM6ICdhY3RpdmUnLCB2ZXJpZmllZDogdHJ1ZSB9IDogdikpXG4gICAgc2V0RmVlZGJhY2soYEFwcHJvdmVkIG1lcmNoYW50IHN0b3JlICR7dmVuZG9yLm5hbWV9IWApXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRGZWVkYmFjayhudWxsKSwgMzAwMClcbiAgICBzZXRCdXN5SWQobnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1c3BlbmQgPSBhc3luYyAodmVuZG9yOiBBZG1pblZlbmRvcikgPT4ge1xuICAgIHNldEJ1c3lJZCh2ZW5kb3IuaWQpXG4gICAgaWYgKHNlc3Npb24udG9rZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUFkbWluVmVuZG9yKHNlc3Npb24udG9rZW4sIHZlbmRvci5pZClcbiAgICAgIH0gY2F0Y2ggeyAvKiBkZXYgZmFsbGJhY2sgKi8gfVxuICAgIH1cbiAgICBzZXRJdGVtcyhwcmV2ID0+IHByZXYubWFwKHYgPT4gdi5pZCA9PT0gdmVuZG9yLmlkID8geyAuLi52LCBzdGF0dXM6ICdzdXNwZW5kZWQnLCB2ZXJpZmllZDogZmFsc2UgfSA6IHYpKVxuICAgIHNldEZlZWRiYWNrKGBTdXNwZW5kZWQgbWVyY2hhbnQgc3RvcmUgJHt2ZW5kb3IubmFtZX1gKVxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RmVlZGJhY2sobnVsbCksIDMwMDApXG4gICAgc2V0QnVzeUlkKG51bGwpXG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRWZW5kb3IgPSBhc3luYyAodmVuZG9yRGF0YTogUGFydGlhbDxBZG1pblZlbmRvcj4pID0+IHtcbiAgICBjb25zdCBuZXdWZW5kb3I6IEFkbWluVmVuZG9yID0ge1xuICAgICAgaWQ6IHZlbmRvckRhdGEuaWQgPz8gYHZfJHtEYXRlLm5vdygpfWAsXG4gICAgICBuYW1lOiB2ZW5kb3JEYXRhLm5hbWUgPz8gJ05ldyBNZXJjaGFudCcsXG4gICAgICBzbHVnOiB2ZW5kb3JEYXRhLnNsdWcgPz8gJ25ldy1tZXJjaGFudCcsXG4gICAgICBlbWFpbDogdmVuZG9yRGF0YS5lbWFpbCA/PyAnbWVyY2hhbnRAbmV4dXMubWFya2V0JyxcbiAgICAgIG93bmVyOiB2ZW5kb3JEYXRhLm93bmVyID8/ICdTdG9yZSBPd25lcicsXG4gICAgICBsb2dvOiB2ZW5kb3JEYXRhLmxvZ28gPz8gJycsXG4gICAgICBjb3ZlcjogdmVuZG9yRGF0YS5jb3ZlciA/PyAnJyxcbiAgICAgIHN0YXR1czogdmVuZG9yRGF0YS5zdGF0dXMgPz8gJ2FjdGl2ZScsXG4gICAgICB2ZXJpZmllZDogdmVuZG9yRGF0YS52ZXJpZmllZCA/PyB0cnVlLFxuICAgICAgcmF0aW5nOiB2ZW5kb3JEYXRhLnJhdGluZyA/PyA1LjAsXG4gICAgICBwcm9kdWN0Q291bnQ6IHZlbmRvckRhdGEucHJvZHVjdENvdW50ID8/IDAsXG4gICAgICBwb3NpdGl2ZUZlZWRiYWNrOiB2ZW5kb3JEYXRhLnBvc2l0aXZlRmVlZGJhY2sgPz8gMTAwLFxuICAgICAgZm9sbG93ZXJzOiB2ZW5kb3JEYXRhLmZvbGxvd2VycyA/PyAwLFxuICAgICAgcmVzcG9uc2VUaW1lOiB2ZW5kb3JEYXRhLnJlc3BvbnNlVGltZSA/PyAnMSBocicsXG4gICAgICB0YWdsaW5lOiB2ZW5kb3JEYXRhLnRhZ2xpbmUgPz8gJ1ZlcmlmaWVkIE1lcmNoYW50JyxcbiAgICAgIGNvbW1pc3Npb25SYXRlOiB2ZW5kb3JEYXRhLmNvbW1pc3Npb25SYXRlID8/IDEwLFxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLnRva2VuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjcmVhdGVBZG1pblZlbmRvcihzZXNzaW9uLnRva2VuLCB7XG4gICAgICAgICAgc3RvcmVOYW1lOiBuZXdWZW5kb3IubmFtZSxcbiAgICAgICAgICBlbWFpbDogbmV3VmVuZG9yLmVtYWlsLFxuICAgICAgICAgIGZ1bGxOYW1lOiBuZXdWZW5kb3Iub3duZXIsXG4gICAgICAgICAgdGFnbGluZTogbmV3VmVuZG9yLnRhZ2xpbmUsXG4gICAgICAgICAgY29tbWlzc2lvblJhdGU6IG5ld1ZlbmRvci5jb21taXNzaW9uUmF0ZSxcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggeyAvKiBmYWxsYmFjayAqLyB9XG4gICAgfVxuXG4gICAgc2V0SXRlbXMocHJldiA9PiBbbmV3VmVuZG9yLCAuLi5wcmV2XSlcbiAgICBzZXRGZWVkYmFjayhgTWVyY2hhbnQgJHtuZXdWZW5kb3IubmFtZX0gYWRkZWQgc3VjY2Vzc2Z1bGx5IWApXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRGZWVkYmFjayhudWxsKSwgMzAwMClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUV4cG9ydENTViA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gJ1ZlbmRvciBJRCxTdG9yZSBOYW1lLE93bmVyLEVtYWlsLFN0YXR1cyxWZXJpZmllZCxSYXRpbmcsUHJvZHVjdHMsQ29tbWlzc2lvbiAoJSlcXG4nXG4gICAgY29uc3Qgcm93cyA9IGZpbHRlcmVkLm1hcCh2ID0+IGBcIiR7di5pZH1cIixcIiR7di5uYW1lfVwiLFwiJHt2Lm93bmVyfVwiLFwiJHt2LmVtYWlsfVwiLFwiJHt2LnN0YXR1c31cIiwke3YudmVyaWZpZWR9LCR7di5yYXRpbmd9LCR7di5wcm9kdWN0Q291bnR9LCR7di5jb21taXNzaW9uUmF0ZX1gKS5qb2luKCdcXG4nKVxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbaGVhZGVycyArIHJvd3NdLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSlcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGEuaHJlZiA9IHVybFxuICAgIGEuZG93bmxvYWQgPSBgdmVuZG9ycy1yZXBvcnQtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApfS5jc3ZgXG4gICAgYS5jbGljaygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01IHAtNiBtaW4taC1zY3JlZW4gYmctWyNGNEY0RjhdXCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+VmVuZG9ycyAmIE1lcmNoYW50czwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMC41IHRleHQtc20gdGV4dC1bIzZCNkI4Ml1cIj57aXRlbXMubGVuZ3RofSByZWdpc3RlcmVkIG1lcmNoYW50IHN0b3JlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZmxleC13cmFwXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXhwb3J0Q1NWfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XSB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDEwdjZtMCAwbC0zLTNtMyAzbDMtM20yIDhIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwiIC8+PC9zdmc+XG4gICAgICAgICAgICBFeHBvcnQgQ1NWXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSgndmVuZG9ycy1hcHBsaWNhdGlvbnMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4NDUwQV0gdGV4dC1bI0U4NDUwQV0gYmctWyNGRkY3RjVdIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0U4NDUwQV0gaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDwn5OEIFJldmlldyBBcHBsaWNhdGlvbnMgKHtpdGVtcy5maWx0ZXIodiA9PiB2LnN0YXR1cyA9PT0gJ3JldmlldycgfHwgdi5zdGF0dXMgPT09ICdwZW5kaW5nJykubGVuZ3RofSlcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW52aXRlTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy1zbSBzaGFkb3ctWyNFODQ1MEFdLzIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICArIEludml0ZSBWZW5kb3JcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2ZlZWRiYWNrICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YwRkRGNF0gYm9yZGVyIGJvcmRlci1bI0JCRjdEMF0gcm91bmRlZC14bCBweC00IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMwNTk2NjldXCI+XG4gICAgICAgICAg4pyTIHtmZWVkYmFja31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogS1BJIENhcmRzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgIHtbXG4gICAgICAgICAgeyBsYWJlbDogJ0FjdGl2ZSBNZXJjaGFudHMnLCB2YWx1ZTogaXRlbXMuZmlsdGVyKHYgPT4gdi5zdGF0dXMgPT09ICdhY3RpdmUnKS5sZW5ndGgudG9TdHJpbmcoKSwgY2xzOiAndGV4dC1bIzA1OTY2OV0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1BlbmRpbmcgQXBwbGljYXRpb25zJywgdmFsdWU6IGl0ZW1zLmZpbHRlcih2ID0+IHYuc3RhdHVzID09PSAncGVuZGluZycgfHwgdi5zdGF0dXMgPT09ICdyZXZpZXcnKS5sZW5ndGgudG9TdHJpbmcoKSwgY2xzOiAndGV4dC1bI0Q5NzcwNl0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1ZlcmlmaWVkIFN0b3JlcycsIHZhbHVlOiBpdGVtcy5maWx0ZXIodiA9PiB2LnZlcmlmaWVkKS5sZW5ndGgudG9TdHJpbmcoKSwgY2xzOiAndGV4dC1bI0U4NDUwQV0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1N1c3BlbmRlZCBTdG9yZXMnLCB2YWx1ZTogaXRlbXMuZmlsdGVyKHYgPT4gdi5zdGF0dXMgPT09ICdzdXNwZW5kZWQnKS5sZW5ndGgudG9TdHJpbmcoKSwgY2xzOiAndGV4dC1bI0UxMUQ0OF0nIH0sXG4gICAgICAgIF0ubWFwKGsgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtrLmxhYmVsfSBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBwLTUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzlCOUJCOF1cIj57ay5sYWJlbH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtdC0xLjUgZm9udC1tb25vIHRleHQtMnhsIGZvbnQtYmxhY2sgJHtrLmNsc31gfT57ay52YWx1ZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBGaWx0ZXIgQ29udHJvbCBCYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBwLTQgc2hhZG93LXNtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLXctWzIwMHB4XSBmbGV4LTFcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMy41IHRvcC0xLzIgaC00IHctNCAtdHJhbnNsYXRlLXktMS8yIHRleHQtWyM5QjlCQjhdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHZlbmRvciBuYW1lLCBlbWFpbCwgb3duZXIuLi5cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjRGNEY4XSBwbC0xMCBwci00IHRleHQtc20gb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyOnRleHQtWyM5QjlCQjhdIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHJvdW5kZWQteGwgYmctWyNGNEY0RjhdIHAtMVwiPlxuICAgICAgICAgIHtbJ2FsbCcsICdhY3RpdmUnLCAncmV2aWV3JywgJ3BlbmRpbmcnLCAnc3VzcGVuZGVkJ10ubWFwKHMgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3N9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXR1c0ZpbHRlcihzKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZyBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgY2FwaXRhbGl6ZSB0cmFuc2l0aW9uLWFsbCAke3N0YXR1c0ZpbHRlciA9PT0gcyA/ICdiZy13aGl0ZSB0ZXh0LVsjMTExMTE4XSBzaGFkb3ctc20nIDogJ3RleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyM2QjZCODJdJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0ZFQ0FDQV0gYmctWyNGRUYyRjJdIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtWyM5OTFCMUJdXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFRhYmxlICYgSW5zcGVjdG9yIFNpZGUgUGFuZWwgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLXdoaXRlIHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItWyNGNEY0RjhdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzlCOUJCOF1cIj5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSB0ZXh0LWxlZnRcIj5WZW5kb3IgTWVyY2hhbnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMy41IHRleHQtbGVmdFwiPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zLjUgdGV4dC1sZWZ0XCI+UmF0aW5nPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LWxlZnRcIj5Qcm9kdWN0czwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zLjUgdGV4dC1sZWZ0XCI+Q29tbWlzc2lvbjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zLjUgdGV4dC1yaWdodFwiPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fSBjbGFzc05hbWU9XCJweC01IHB5LTEyIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1bIzZCNkI4Ml1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIHZlbmRvcnMuLi5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSA6IGZpbHRlcmVkLm1hcCh2ZW5kb3IgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dmVuZG9yLmlkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1bI0Y5RjlGQ10gJHt2aWV3VmVuZG9yID09PSB2ZW5kb3IuaWQgPyAnYmctWyNGRkY3RjVdJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpZXdWZW5kb3Iodmlld1ZlbmRvciA9PT0gdmVuZG9yLmlkID8gbnVsbCA6IHZlbmRvci5pZCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTEwIHctMTAgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC14bCBiZy1bI0U4NDUwQV0gdGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbmRvci5uYW1lLmNoYXJBdCgwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPnt2ZW5kb3IubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbmRvci52ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyMwNTk2NjldIGZvbnQtYm9sZFwiPuKckyBWZXJpZmllZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgdGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPnt2ZW5kb3IuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IHJvdW5kZWQtZnVsbCBweC0yLjUgcHktMC41IHRleHQtWzExcHhdIGZvbnQtYm9sZCAke1NUQVRVU1t2ZW5kb3Iuc3RhdHVzXT8uY2xzID8/ICdiZy1bI0Y0RjRGOF0gdGV4dC1bIzZCNkI4Ml0nfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1NUQVRVU1t2ZW5kb3Iuc3RhdHVzXT8ubGFiZWwgPz8gdmVuZG9yLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGNTlFMEJdXCI+4piFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+e3ZlbmRvci5yYXRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPnt2ZW5kb3IucHJvZHVjdENvdW50fSBpdGVtczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHMgZm9udC1ib2xkIHRleHQtWyNFODQ1MEFdIGJnLVsjRkZGN0Y1XSBib3JkZXIgYm9yZGVyLVsjRkVDQUNBXSBweC0yIHB5LTAuNSByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVuZG9yLmNvbW1pc3Npb25SYXRlfSVcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LXJpZ2h0XCIgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW5kb3Iuc3RhdHVzID09PSAncGVuZGluZycgfHwgdmVuZG9yLnN0YXR1cyA9PT0gJ3JldmlldycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeUlkID09PSB2ZW5kb3IuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBoYW5kbGVBcHByb3ZlKHZlbmRvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1bI0QxRkFFNV0gcHgtMi41IHB5LTEgdGV4dC14cyBmb250LWJvbGQgdGV4dC1bIzA1OTY2OV0gaG92ZXI6YmctWyNBN0YzRDBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcHJvdmUgU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogdmVuZG9yLnN0YXR1cyA9PT0gJ3N1c3BlbmRlZCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeUlkID09PSB2ZW5kb3IuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBoYW5kbGVBcHByb3ZlKHZlbmRvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1bI0QxRkFFNV0gcHgtMi41IHB5LTEgdGV4dC14cyBmb250LWJvbGQgdGV4dC1bIzA1OTY2OV0gaG92ZXI6YmctWyNBN0YzRDBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0aXZhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2J1c3lJZCA9PT0gdmVuZG9yLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgaGFuZGxlU3VzcGVuZCh2ZW5kb3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctWyNGRUUyRTJdIHB4LTIuNSBweS0xIHRleHQteHMgZm9udC1ib2xkIHRleHQtWyNFMTFENDhdIGhvdmVyOmJnLVsjRkVDQUNBXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdXNwZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVmVuZG9yIEluc3BlY3RvciBEcmF3ZXIgKi99XG4gICAgICAgIHtzZWxlY3RlZFZlbmRvciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy04MCBmbGV4LXNocmluay0wIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0yNCBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMEYwRjE4XSB0by1bIzFFMUUzMF0gcC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGUgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+U3RvcmUgSW5zcGVjdG9yPC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Vmlld1ZlbmRvcihudWxsKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03IHJvdW5kZWQtZnVsbCBiZy13aGl0ZS8yMCBob3ZlcjpiZy13aGl0ZS8zMCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4pyVXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcGItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRTg0NTBBXSAtbXQtOCBmbGV4IGgtMTQgdy0xNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC0yeGwgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIHRleHQteGwgZm9udC1ibGFjayB0ZXh0LXdoaXRlIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFZlbmRvci5uYW1lLmNoYXJBdCgwKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzExMTExOF1cIj57c2VsZWN0ZWRWZW5kb3IubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkVmVuZG9yLnZlcmlmaWVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bIzA1OTY2OV1cIj7inJM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57c2VsZWN0ZWRWZW5kb3IuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTAuNSB0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+T3duZXI6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57c2VsZWN0ZWRWZW5kb3Iub3duZXJ9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1bIzlCOUJCOF0gaXRhbGljXCI+e3NlbGVjdGVkVmVuZG9yLnRhZ2xpbmV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLVsjRjlGOUZDXSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtWyM5QjlCQjhdXCI+UHJvZHVjdHM8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gdGV4dC1bIzExMTExOF0gbXQtMC41XCI+e3NlbGVjdGVkVmVuZG9yLnByb2R1Y3RDb3VudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLVsjRjlGOUZDXSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtWyM5QjlCQjhdXCI+Q29tbWlzc2lvbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LVsjRTg0NTBBXSBtdC0wLjVcIj57c2VsZWN0ZWRWZW5kb3IuY29tbWlzc2lvblJhdGV9JTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYmctWyNGOUY5RkNdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdGV4dC1bIzlCOUJCOF1cIj5SYXRpbmc8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gdGV4dC1bIzExMTExOF0gbXQtMC41XCI+4piFIHtzZWxlY3RlZFZlbmRvci5yYXRpbmd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBiZy1bI0Y5RjlGQ10gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0ZXh0LVsjOUI5QkI4XVwiPlJlc3BvbnNlPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtWyMwNTk2NjldIG10LTAuNVwiPntzZWxlY3RlZFZlbmRvci5yZXNwb25zZVRpbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYC92ZW5kb3IvJHtzZWxlY3RlZFZlbmRvci5pZH1gLCAnX2JsYW5rJyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBiZy1bIzExMTExOF0gcHktMi41IHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBWaWV3IFN0b3JlZnJvbnQgTGl2ZSDihpdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRWZW5kb3Iuc3RhdHVzICE9PSAnc3VzcGVuZGVkJyA/IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2J1c3lJZCA9PT0gc2VsZWN0ZWRWZW5kb3IuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgaGFuZGxlU3VzcGVuZChzZWxlY3RlZFZlbmRvcil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNGRUUyRTJdIHB5LTIuNSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LVsjRTExRDQ4XSBob3ZlcjpiZy1bI0ZFRTJFMl0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTdXNwZW5kIE1lcmNoYW50XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeUlkID09PSBzZWxlY3RlZFZlbmRvci5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBoYW5kbGVBcHByb3ZlKHNlbGVjdGVkVmVuZG9yKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0JCRjdEMF0gcHktMi41IHRleHQteHMgZm9udC1ib2xkIHRleHQtWyMwNTk2NjldIGhvdmVyOmJnLVsjRjBGREY0XSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0aXZhdGUgTWVyY2hhbnRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEludml0ZSBNb2RhbCAqL31cbiAgICAgIDxJbnZpdGVWZW5kb3JNb2RhbFxuICAgICAgICBpc09wZW49e3Nob3dJbnZpdGVNb2RhbH1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0ludml0ZU1vZGFsKGZhbHNlKX1cbiAgICAgICAgb25TYXZlPXtoYW5kbGVBZGRWZW5kb3J9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsU0FBd0Isa0JBQWtCLEVBQUUsUUFBUSxTQUFTLFVBQWlCO0NBQzVFLE1BQU0sQ0FBQyxZQUFZLGtCQUFBLEdBQWlCLGFBQUEsU0FBQSxDQUFTLEtBQUs7Q0FDbEQsTUFBTSxDQUFDLFdBQVcsaUJBQUEsR0FB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