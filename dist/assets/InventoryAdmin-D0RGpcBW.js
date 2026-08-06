import { g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog, t as useSession } from "./index-BM41bWnP.js";
import { m as updateAdminProduct } from "./admin-jnfUkW2D.js";
//#region src/admin/pages/InventoryAdmin.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var INITIAL_WAREHOUSES = [
	{
		id: "WH-1",
		name: "Main Warehouse",
		city: "New York",
		address: "100 Logistics Way, NY 10001",
		capacity: "85%",
		items: 2841
	},
	{
		id: "WH-2",
		name: "East Distribution",
		city: "Boston",
		address: "45 Freight Blvd, MA 02108",
		capacity: "62%",
		items: 1248
	},
	{
		id: "WH-3",
		name: "West Hub",
		city: "Los Angeles",
		address: "880 Pacific Cargo Rd, CA 90001",
		capacity: "41%",
		items: 892
	}
];
var INITIAL_TRANSFERS = [
	{
		id: "TR-1082",
		from: "Main Warehouse",
		to: "West Hub",
		sku: "SNY-WH1000",
		itemName: "Sony WH-1000XM5",
		quantity: 50,
		date: "2026-08-05",
		status: "In Transit"
	},
	{
		id: "TR-1079",
		from: "East Distribution",
		to: "Main Warehouse",
		sku: "NK-AM270-9",
		itemName: "Nike Air Max 270",
		quantity: 30,
		date: "2026-08-03",
		status: "Completed"
	},
	{
		id: "TR-1075",
		from: "Main Warehouse",
		to: "East Distribution",
		sku: "APL-MBA-M3",
		itemName: "MacBook Air M3 13\"",
		quantity: 15,
		date: "2026-08-01",
		status: "Completed"
	}
];
var INITIAL_MOVEMENTS = [
	{
		id: "MOV-501",
		itemName: "Sony WH-1000XM5",
		sku: "SNY-WH1000",
		type: "Restock",
		change: "+50 units",
		user: "Admin User",
		date: "2026-08-05 14:32"
	},
	{
		id: "MOV-500",
		itemName: "Nike Air Max 270",
		sku: "NK-AM270-9",
		type: "Sale Deduction",
		change: "-1 unit",
		user: "System (Order ORD-97812)",
		date: "2026-08-04 18:20"
	},
	{
		id: "MOV-499",
		itemName: "The Ordinary HA 2%",
		sku: "ORD-HA-30",
		type: "Correction",
		change: "-5 units (Damaged)",
		user: "Warehouse Manager",
		date: "2026-08-04 11:15"
	},
	{
		id: "MOV-498",
		itemName: "MacBook Air M3 13\"",
		sku: "APL-MBA-M3",
		type: "Transfer",
		change: "-15 units to WH-2",
		user: "Logistics Lead",
		date: "2026-08-01 09:45"
	}
];
var STATUS_CLS = {
	out: {
		bg: "bg-[#E11D48] text-white",
		label: "Out of Stock"
	},
	critical: {
		bg: "bg-[#FEE2E2] text-[#991B1B]",
		label: "Critical"
	},
	low: {
		bg: "bg-[#FEF3C7] text-[#92400E]",
		label: "Low Stock"
	},
	ok: {
		bg: "bg-[#D1FAE5] text-[#065F46]",
		label: "In Stock"
	}
};
function InventoryAdmin({ onNavigate: _ }) {
	const { products } = useCatalog();
	const session = useSession();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [tab, setTab] = (0, import_react.useState)("stock");
	const [warehousesList, setWarehousesList] = (0, import_react.useState)(INITIAL_WAREHOUSES);
	const [transfersList, setTransfersList] = (0, import_react.useState)(INITIAL_TRANSFERS);
	const [movementsList, setMovementsList] = (0, import_react.useState)(INITIAL_MOVEMENTS);
	const [localOverrides, setLocalOverrides] = (0, import_react.useState)({});
	const [restockItem, setRestockItem] = (0, import_react.useState)(null);
	const [restockQty, setRestockQty] = (0, import_react.useState)("50");
	const [restockThreshold, setRestockThreshold] = (0, import_react.useState)("10");
	const [restockWh, setRestockWh] = (0, import_react.useState)("WH-1");
	const [showTransferModal, setShowTransferModal] = (0, import_react.useState)(false);
	const [transferForm, setTransferForm] = (0, import_react.useState)({
		from: "WH-1",
		to: "WH-2",
		sku: "",
		qty: "10"
	});
	const [showAddWhModal, setShowAddWhModal] = (0, import_react.useState)(false);
	const [whForm, setWhForm] = (0, import_react.useState)({
		name: "",
		city: "",
		address: ""
	});
	const [showPOModal, setShowPOModal] = (0, import_react.useState)(false);
	const [poForm, setPoForm] = (0, import_react.useState)({
		supplier: "SoundVault",
		sku: "",
		qty: "100",
		expectedDate: "2026-08-20"
	});
	const inventoryItems = (0, import_react.useMemo)(() => {
		return products.map((p, idx) => {
			const override = localOverrides[p.id];
			const currentStock = override?.stock ?? p.stock;
			const threshold = override?.threshold ?? (p.stock < 10 ? 15 : 10);
			const incoming = override?.incoming ?? (p.stock === 0 ? 30 : idx % 3 === 0 ? 50 : 0);
			const wh = override?.warehouse ?? (idx % 3 === 0 ? "WH-1" : idx % 3 === 1 ? "WH-2" : "WH-3");
			let status = "ok";
			if (currentStock === 0) status = "out";
			else if (currentStock <= 3) status = "critical";
			else if (currentStock <= threshold) status = "low";
			return {
				id: p.id,
				name: p.title,
				sku: `SKU-${p.id.slice(0, 6).toUpperCase()}`,
				vendor: p.vendor,
				category: p.category,
				stock: currentStock,
				threshold,
				reserved: Math.min(currentStock, Math.floor(currentStock * .15)),
				incoming,
				warehouse: wh,
				status
			};
		});
	}, [products, localOverrides]);
	const filtered = (0, import_react.useMemo)(() => inventoryItems.filter((item) => {
		const matchStatus = filter === "all" || item.status === filter;
		const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.sku.toLowerCase().includes(search.toLowerCase());
		return matchStatus && matchSearch;
	}), [
		inventoryItems,
		filter,
		search
	]);
	const counts = (0, import_react.useMemo)(() => ({
		out: inventoryItems.filter((i) => i.status === "out").length,
		critical: inventoryItems.filter((i) => i.status === "critical").length,
		low: inventoryItems.filter((i) => i.status === "low").length,
		ok: inventoryItems.filter((i) => i.status === "ok").length,
		totalStock: inventoryItems.reduce((s, i) => s + i.stock, 0),
		incomingTotal: inventoryItems.reduce((s, i) => s + i.incoming, 0)
	}), [inventoryItems]);
	const handleRestockSubmit = async (e) => {
		e.preventDefault();
		if (!restockItem) return;
		const addQty = parseInt(restockQty) || 0;
		const newStock = restockItem.stock + addQty;
		const newThreshold = parseInt(restockThreshold) || restockItem.threshold;
		setLocalOverrides((prev) => ({
			...prev,
			[restockItem.id]: {
				stock: newStock,
				threshold: newThreshold,
				incoming: Math.max(0, restockItem.incoming - addQty),
				warehouse: restockWh
			}
		}));
		setMovementsList((prev) => [{
			id: `MOV-${Date.now().toString().slice(-3)}`,
			itemName: restockItem.name,
			sku: restockItem.sku,
			type: "Restock",
			change: `+${addQty} units`,
			user: "Admin User",
			date: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16)
		}, ...prev]);
		if (session.token) try {
			await updateAdminProduct(session.token, restockItem.id, {
				stockQuantity: newStock,
				lowStockLimit: newThreshold
			});
		} catch {}
		setRestockItem(null);
	};
	const handleTransferSubmit = (e) => {
		e.preventDefault();
		if (!transferForm.sku || !transferForm.qty) return;
		const targetItem = inventoryItems.find((i) => i.sku.toLowerCase() === transferForm.sku.toLowerCase() || i.name.toLowerCase().includes(transferForm.sku.toLowerCase()));
		const itemName = targetItem ? targetItem.name : transferForm.sku;
		const newRecord = {
			id: `TR-${Math.floor(1e3 + Math.random() * 9e3)}`,
			from: warehousesList.find((w) => w.id === transferForm.from)?.name || transferForm.from,
			to: warehousesList.find((w) => w.id === transferForm.to)?.name || transferForm.to,
			sku: transferForm.sku.toUpperCase(),
			itemName,
			quantity: parseInt(transferForm.qty) || 10,
			date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			status: "In Transit"
		};
		setTransfersList((prev) => [newRecord, ...prev]);
		setShowTransferModal(false);
		setTransferForm({
			from: "WH-1",
			to: "WH-2",
			sku: "",
			qty: "10"
		});
	};
	const handleAddWhSubmit = (e) => {
		e.preventDefault();
		if (!whForm.name || !whForm.city) return;
		const newWh = {
			id: `WH-${warehousesList.length + 1}`,
			name: whForm.name,
			city: whForm.city,
			address: whForm.address || `${whForm.city} Logistics Center`,
			capacity: "15%",
			items: 0
		};
		setWarehousesList((prev) => [...prev, newWh]);
		setShowAddWhModal(false);
		setWhForm({
			name: "",
			city: "",
			address: ""
		});
	};
	const handlePOSubmit = (e) => {
		e.preventDefault();
		setShowPOModal(false);
		alert(`Purchase Order for ${poForm.qty} units from ${poForm.supplier} created successfully!`);
	};
	const handleExportCSV = () => {
		const headers = "ID,Name,SKU,Vendor,Category,In Stock,Reserved,Incoming,Warehouse,Status\n";
		const rows = inventoryItems.map((i) => `"${i.id}","${i.name}","${i.sku}","${i.vendor}","${i.category}",${i.stock},${i.reserved},${i.incoming},"${i.warehouse}","${i.status}"`).join("\n");
		const blob = new Blob([headers + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `inventory-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Inventory & Stock Control"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Real-time stock levels, multi-warehouse transfers, and PO tracking"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleExportCSV,
							className: "px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowTransferModal(true),
							className: "px-4 py-2 bg-[#111118] text-white rounded-xl text-sm font-semibold hover:bg-[#E8450A] transition-colors",
							children: "+ Stock Transfer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowPOModal(true),
							className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20",
							children: "+ Purchase Order"
						})
					]
				})]
			}),
			(counts.out > 0 || counts.critical > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[#FEF2F2] border border-[#FCA5A5] rounded-2xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-xl bg-[#E11D48]/10 flex items-center justify-center flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-5 h-5 text-[#E11D48]",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-bold text-[#991B1B]",
						children: [
							counts.out,
							" items Out of Stock · ",
							counts.critical,
							" Critical items needing immediate restock"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#B91C1C] mt-0.5",
						children: "Automated re-order recommendations generated based on 30-day velocity."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setShowPOModal(true),
					className: "px-4 py-2 bg-[#E11D48] text-white text-xs font-bold rounded-xl hover:bg-[#BE123C] transition-colors flex-shrink-0",
					children: "Generate Bulk PO →"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						label: "Total Catalog Units",
						value: counts.totalStock.toLocaleString(),
						color: "text-[#111118]",
						sub: `${inventoryItems.length} active SKUs`
					},
					{
						label: "Out of Stock SKUs",
						value: counts.out.toString(),
						color: "text-[#E11D48]",
						sub: "Requires PO restock"
					},
					{
						label: "Low / Critical Stock",
						value: (counts.critical + counts.low).toString(),
						color: "text-[#D97706]",
						sub: "Below threshold limit"
					},
					{
						label: "Incoming Inventory",
						value: counts.incomingTotal.toLocaleString(),
						color: "text-[#059669]",
						sub: "Expected in 14 days"
					}
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: k.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `font-mono font-black text-2xl mt-1.5 ${k.color}`,
							children: k.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#6B6B82] mt-1",
							children: k.sub
						})
					]
				}, k.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2 border-b border-[#E2E2EC] text-sm font-semibold",
				children: [
					{
						key: "stock",
						label: "Stock Levels & Alerts"
					},
					{
						key: "warehouses",
						label: `Warehouses (${warehousesList.length})`
					},
					{
						key: "transfers",
						label: `Stock Transfers (${transfersList.length})`
					},
					{
						key: "movements",
						label: "Audit Movements Log"
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t.key),
					className: `px-4 py-3 border-b-2 transition-all -mb-px ${tab === t.key ? "border-[#E8450A] text-[#E8450A] font-bold" : "border-transparent text-[#9B9BB8] hover:text-[#111118]"}`,
					children: t.label
				}, t.key))
			}),
			tab === "stock" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#E2E2EC]",
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
							placeholder: "Search SKU or product title...",
							className: "w-full h-10 pl-10 pr-4 bg-[#F4F4F8] border border-[#E2E2EC] rounded-xl text-sm outline-none focus:border-[#E8450A] placeholder:text-[#9B9BB8]"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 bg-[#F4F4F8] rounded-xl p-1",
						children: [
							{
								key: "all",
								label: "All SKUs"
							},
							{
								key: "out",
								label: `Out (${counts.out})`
							},
							{
								key: "critical",
								label: `Critical (${counts.critical})`
							},
							{
								key: "low",
								label: `Low (${counts.low})`
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(f.key),
							className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filter === f.key ? "bg-white shadow-sm text-[#111118]" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
							children: f.label
						}, f.key))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3.5",
										children: "Product Item"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3.5",
										children: "SKU Code"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3.5",
										children: "Vendor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3.5",
										children: "In Stock"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3.5",
										children: "Reserved"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3.5",
										children: "Incoming"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3.5",
										children: "Warehouse"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3.5",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-right px-5 py-3.5",
										children: "Action"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-[#F4F4F8]",
								children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-[#F9F9FC] transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-5 py-3.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-[#111118] leading-snug line-clamp-1",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-[#9B9BB8] mt-0.5",
												children: item.category
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5 font-mono text-xs text-[#6B6B82]",
											children: item.sku
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5 text-xs text-[#6B6B82]",
											children: item.vendor
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `font-mono font-black text-sm ${item.stock === 0 ? "text-[#E11D48]" : item.stock <= item.threshold ? "text-[#D97706]" : "text-[#111118]"}`,
												children: [item.stock, " units"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-24 h-1.5 bg-[#F4F4F8] rounded-full mt-1 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `h-full rounded-full ${item.stock === 0 ? "bg-[#E11D48]" : item.stock <= item.threshold ? "bg-[#D97706]" : "bg-[#059669]"}`,
													style: { width: `${Math.min(100, item.stock / Math.max(30, item.threshold * 2.5) * 100)}%` }
												})
											})] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5 font-mono text-sm text-[#6B6B82]",
											children: item.reserved
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `font-mono text-sm font-semibold ${item.incoming > 0 ? "text-[#059669]" : "text-[#9B9BB8]"}`,
												children: item.incoming > 0 ? `+${item.incoming}` : "—"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs bg-[#F4F4F8] border border-[#E2E2EC] text-[#6B6B82] px-2.5 py-1 rounded-lg font-semibold",
												children: item.warehouse
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${STATUS_CLS[item.status].bg}`,
												children: STATUS_CLS[item.status].label
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setRestockItem(item);
													setRestockQty("50");
													setRestockThreshold(item.threshold.toString());
													setRestockWh(item.warehouse);
												},
												className: "px-3 py-1.5 bg-[#E8450A] text-white text-xs font-bold rounded-xl hover:bg-[#C93A07] transition-colors",
												children: "Restock"
											})
										})
									]
								}, item.id))
							})]
						})
					})
				})]
			}),
			tab === "warehouses" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-5",
				children: [warehousesList.map((wh) => {
					const pct = parseInt(wh.capacity);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-[#E2E2EC] p-6 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-bold px-2 py-0.5 bg-[#F4F4F8] text-[#6B6B82] rounded-md",
										children: wh.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-base text-[#111118]",
										children: wh.name
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#9B9BB8] mt-1",
									children: ["📍 ", wh.address]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs bg-[#D1FAE5] text-[#065F46] px-2.5 py-0.5 rounded-full font-bold",
									children: "Active"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs mb-1.5 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#6B6B82]",
									children: "Storage Capacity Used"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono font-bold text-[#111118]",
									children: wh.capacity
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-3 bg-[#F4F4F8] rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full rounded-full transition-all duration-500 ${pct > 80 ? "bg-[#E11D48]" : pct > 60 ? "bg-[#D97706]" : "bg-[#059669]"}`,
									style: { width: wh.capacity }
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl p-3 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono font-black text-xl text-[#111118]",
										children: wh.items.toLocaleString()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-semibold text-[#9B9BB8] uppercase mt-0.5",
										children: "Total Items"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#F9F9FC] border border-[#E2E2EC] rounded-xl p-3 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono font-black text-xl text-[#D97706]",
										children: Math.floor(wh.items * .04)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-semibold text-[#9B9BB8] uppercase mt-0.5",
										children: "Low Stock Alert"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setTab("transfers");
									setTransferForm((tf) => ({
										...tf,
										from: wh.id
									}));
								},
								className: "w-full py-2.5 border border-[#E2E2EC] rounded-xl text-xs font-semibold text-[#111118] hover:bg-[#F4F4F8] transition-colors",
								children: "Initiate Stock Transfer"
							})
						]
					}, wh.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowAddWhModal(true),
					className: "bg-white rounded-2xl border-2 border-dashed border-[#E2E2EC] p-6 flex flex-col items-center justify-center gap-3 hover:border-[#E8450A] text-[#9B9BB8] hover:text-[#E8450A] transition-all group min-h-[260px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 h-14 rounded-2xl bg-[#F4F4F8] group-hover:bg-[#FFF7F5] flex items-center justify-center transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-7 h-7",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-[#111118]",
							children: "Add Warehouse Facility"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] text-center max-w-[200px]",
							children: "Register a new fulfillment center or regional hub."
						})
					]
				})]
			}),
			tab === "transfers" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-[#111118]",
						children: "Stock Transfers Between Facilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowTransferModal(true),
						className: "px-4 py-2 bg-[#E8450A] text-white text-xs font-bold rounded-xl hover:bg-[#C93A07] transition-colors",
						children: "+ Create Transfer Order"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-5 py-3.5",
									children: "Transfer ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Item Name & SKU"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Source Facility"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Destination"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Qty"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Status"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: transfersList.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-[#F9F9FC]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono font-bold text-xs text-[#111118]",
										children: t.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-[#111118]",
											children: t.itemName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs text-[#9B9BB8]",
											children: t.sku
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 text-xs text-[#6B6B82]",
										children: t.from
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 text-xs font-semibold text-[#111118]",
										children: t.to
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3.5 font-mono font-bold text-sm text-[#E8450A]",
										children: [t.quantity, " units"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 text-xs text-[#6B6B82]",
										children: t.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold ${t.status === "Completed" ? "bg-[#D1FAE5] text-[#065F46]" : t.status === "In Transit" ? "bg-[#EEF2FF] text-[#4338CA]" : "bg-[#FEF3C7] text-[#92400E]"}`,
											children: t.status
										})
									})
								]
							}, t.id))
						})]
					})
				})]
			}),
			tab === "movements" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-bold text-[#111118]",
					children: "Recent Stock Audit Log"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-2xl border border-[#E2E2EC] overflow-hidden shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-[#F9F9FC] border-b border-[#F4F4F8] text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-5 py-3.5",
									children: "Log ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Item & SKU"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Stock Adjustment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "User / Trigger"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left px-4 py-3.5",
									children: "Timestamp"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: movementsList.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-[#F9F9FC]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono font-bold text-xs text-[#9B9BB8]",
										children: m.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-[#111118]",
											children: m.itemName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs text-[#9B9BB8]",
											children: m.sku
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold bg-[#F4F4F8] text-[#111118] px-2.5 py-1 rounded-lg",
											children: m.type
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 font-mono font-bold text-sm text-[#0E0E0E]",
										children: m.change
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 text-xs text-[#6B6B82]",
										children: m.user
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 text-xs text-[#9B9BB8]",
										children: m.date
									})
								]
							}, m.id))
						})]
					})
				})]
			}),
			restockItem && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg text-[#111118]",
								children: "Restock SKU Item"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setRestockItem(null),
								className: "text-[#9B9BB8] hover:text-[#111118]",
								children: "✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-sm text-[#111118] line-clamp-1",
								children: restockItem.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-[#9B9BB8] mt-0.5",
								children: [
									restockItem.sku,
									" · Current: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-[#E8450A]",
										children: [restockItem.stock, " units"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleRestockSubmit,
							className: "space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#111118] uppercase",
									children: "Add Units Quantity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									required: true,
									min: "1",
									value: restockQty,
									onChange: (e) => setRestockQty(e.target.value),
									className: "w-full h-11 px-4 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] font-mono font-bold text-base text-[#111118] outline-none focus:border-[#E8450A]"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#111118] uppercase",
									children: "Low-Stock Alert Threshold"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: restockThreshold,
									onChange: (e) => setRestockThreshold(e.target.value),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#111118] uppercase",
									children: "Assigned Warehouse"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: restockWh,
									onChange: (e) => setRestockWh(e.target.value),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]",
									children: warehousesList.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: w.id,
										children: [
											w.name,
											" (",
											w.city,
											")"
										]
									}, w.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-3 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setRestockItem(null),
										className: "flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07]",
										children: "Confirm Restock"
									})]
								})
							]
						})
					]
				})
			}),
			showTransferModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-lg text-[#111118]",
							children: "Stock Transfer Request"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowTransferModal(false),
							className: "text-[#9B9BB8] hover:text-[#111118]",
							children: "✕"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleTransferSubmit,
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#111118] uppercase",
									children: "Source Facility"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: transferForm.from,
									onChange: (e) => setTransferForm((tf) => ({
										...tf,
										from: e.target.value
									})),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none",
									children: warehousesList.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: w.id,
										children: w.name
									}, w.id))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#111118] uppercase",
									children: "Destination"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: transferForm.to,
									onChange: (e) => setTransferForm((tf) => ({
										...tf,
										to: e.target.value
									})),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none",
									children: warehousesList.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: w.id,
										children: w.name
									}, w.id))
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Target Product SKU or Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								placeholder: "e.g. SNY-WH1000 or Sony WH-1000XM5",
								value: transferForm.sku,
								onChange: (e) => setTransferForm((tf) => ({
									...tf,
									sku: e.target.value
								})),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Units Quantity to Transfer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								required: true,
								min: "1",
								value: transferForm.qty,
								onChange: (e) => setTransferForm((tf) => ({
									...tf,
									qty: e.target.value
								})),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono font-bold text-[#111118] outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowTransferModal(false),
									className: "flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "flex-1 py-3 rounded-xl bg-[#111118] text-white font-bold text-sm hover:bg-[#E8450A]",
									children: "Submit Transfer"
								})]
							})
						]
					})]
				})
			}),
			showAddWhModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-lg text-[#111118]",
							children: "Add Warehouse Facility"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowAddWhModal(false),
							className: "text-[#9B9BB8] hover:text-[#111118]",
							children: "✕"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAddWhSubmit,
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Facility Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								placeholder: "e.g. South Logistics Hub",
								value: whForm.name,
								onChange: (e) => setWhForm((w) => ({
									...w,
									name: e.target.value
								})),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "City / Region"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								placeholder: "e.g. Miami, FL",
								value: whForm.city,
								onChange: (e) => setWhForm((w) => ({
									...w,
									city: e.target.value
								})),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Street Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "500 Cargo Rd, FL 33101",
								value: whForm.address,
								onChange: (e) => setWhForm((w) => ({
									...w,
									address: e.target.value
								})),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowAddWhModal(false),
									className: "flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-sm",
									children: "Save Warehouse"
								})]
							})
						]
					})]
				})
			}),
			showPOModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-3xl border border-[#E2E2EC] p-6 max-w-md w-full shadow-2xl space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-lg text-[#111118]",
							children: "Create Purchase Order"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowPOModal(false),
							className: "text-[#9B9BB8] hover:text-[#111118]",
							children: "✕"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handlePOSubmit,
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Supplier Vendor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: poForm.supplier,
								onChange: (e) => setPoForm((p) => ({
									...p,
									supplier: e.target.value
								})),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none",
								children: [
									"SoundVault",
									"TechArmor",
									"SneakerHead",
									"GlowUp Beauty",
									"HomeCraft",
									"iZone Official"
								].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: v,
									children: v
								}, v))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#111118] uppercase",
								children: "Target Product SKU"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. SNY-WH1000",
								value: poForm.sku,
								onChange: (e) => setPoForm((p) => ({
									...p,
									sku: e.target.value
								})),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#111118] uppercase",
									children: "Order Qty"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: poForm.qty,
									onChange: (e) => setPoForm((p) => ({
										...p,
										qty: e.target.value
									})),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono font-bold outline-none"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#111118] uppercase",
									children: "Expected Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: poForm.expectedDate,
									onChange: (e) => setPoForm((p) => ({
										...p,
										expectedDate: e.target.value
									})),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPOModal(false),
									className: "flex-1 py-3 rounded-xl border border-[#E2E2EC] font-semibold text-[#6B6B82]",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "flex-1 py-3 rounded-xl bg-[#E8450A] text-white font-bold text-sm",
									children: "Issue Purchase Order"
								})]
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { InventoryAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52ZW50b3J5QWRtaW4tRDBSR3BjQlcuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL0ludmVudG9yeUFkbWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluU2VjdGlvbiB9IGZyb20gJy4uL2FkbWluRGF0YSdcbmltcG9ydCB7IHVzZUNhdGFsb2cgfSBmcm9tICdAL3N0YXRlL2NhdGFsb2ctc3RvcmUnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnQC9zdGF0ZS9zZXNzaW9uLXN0b3JlJ1xuaW1wb3J0IHsgdXBkYXRlQWRtaW5Qcm9kdWN0IH0gZnJvbSAnQC9hcGkvYWRtaW4nXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG50eXBlIEludmVudG9yeUl0ZW0gPSB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHNrdTogc3RyaW5nXG4gIHZlbmRvcjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3RvY2s6IG51bWJlclxuICB0aHJlc2hvbGQ6IG51bWJlclxuICByZXNlcnZlZDogbnVtYmVyXG4gIGluY29taW5nOiBudW1iZXJcbiAgd2FyZWhvdXNlOiBzdHJpbmdcbiAgc3RhdHVzOiAnb3V0JyB8ICdjcml0aWNhbCcgfCAnbG93JyB8ICdvaydcbn1cblxudHlwZSBXYXJlaG91c2UgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGNpdHk6IHN0cmluZ1xuICBhZGRyZXNzOiBzdHJpbmdcbiAgY2FwYWNpdHk6IHN0cmluZ1xuICBpdGVtczogbnVtYmVyXG59XG5cbnR5cGUgVHJhbnNmZXJSZWNvcmQgPSB7XG4gIGlkOiBzdHJpbmdcbiAgZnJvbTogc3RyaW5nXG4gIHRvOiBzdHJpbmdcbiAgc2t1OiBzdHJpbmdcbiAgaXRlbU5hbWU6IHN0cmluZ1xuICBxdWFudGl0eTogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICBzdGF0dXM6ICdDb21wbGV0ZWQnIHwgJ0luIFRyYW5zaXQnIHwgJ1BlbmRpbmcnXG59XG5cbnR5cGUgTW92ZW1lbnRMb2cgPSB7XG4gIGlkOiBzdHJpbmdcbiAgaXRlbU5hbWU6IHN0cmluZ1xuICBza3U6IHN0cmluZ1xuICB0eXBlOiAnUmVzdG9jaycgfCAnU2FsZSBEZWR1Y3Rpb24nIHwgJ1RyYW5zZmVyJyB8ICdDb3JyZWN0aW9uJ1xuICBjaGFuZ2U6IHN0cmluZ1xuICB1c2VyOiBzdHJpbmdcbiAgZGF0ZTogc3RyaW5nXG59XG5cbmNvbnN0IElOSVRJQUxfV0FSRUhPVVNFUzogV2FyZWhvdXNlW10gPSBbXG4gIHsgaWQ6ICdXSC0xJywgbmFtZTogJ01haW4gV2FyZWhvdXNlJywgY2l0eTogJ05ldyBZb3JrJywgYWRkcmVzczogJzEwMCBMb2dpc3RpY3MgV2F5LCBOWSAxMDAwMScsIGNhcGFjaXR5OiAnODUlJywgaXRlbXM6IDI4NDEgfSxcbiAgeyBpZDogJ1dILTInLCBuYW1lOiAnRWFzdCBEaXN0cmlidXRpb24nLCBjaXR5OiAnQm9zdG9uJywgYWRkcmVzczogJzQ1IEZyZWlnaHQgQmx2ZCwgTUEgMDIxMDgnLCBjYXBhY2l0eTogJzYyJScsIGl0ZW1zOiAxMjQ4IH0sXG4gIHsgaWQ6ICdXSC0zJywgbmFtZTogJ1dlc3QgSHViJywgY2l0eTogJ0xvcyBBbmdlbGVzJywgYWRkcmVzczogJzg4MCBQYWNpZmljIENhcmdvIFJkLCBDQSA5MDAwMScsIGNhcGFjaXR5OiAnNDElJywgaXRlbXM6IDg5MiB9LFxuXVxuXG5jb25zdCBJTklUSUFMX1RSQU5TRkVSUzogVHJhbnNmZXJSZWNvcmRbXSA9IFtcbiAgeyBpZDogJ1RSLTEwODInLCBmcm9tOiAnTWFpbiBXYXJlaG91c2UnLCB0bzogJ1dlc3QgSHViJywgc2t1OiAnU05ZLVdIMTAwMCcsIGl0ZW1OYW1lOiAnU29ueSBXSC0xMDAwWE01JywgcXVhbnRpdHk6IDUwLCBkYXRlOiAnMjAyNi0wOC0wNScsIHN0YXR1czogJ0luIFRyYW5zaXQnIH0sXG4gIHsgaWQ6ICdUUi0xMDc5JywgZnJvbTogJ0Vhc3QgRGlzdHJpYnV0aW9uJywgdG86ICdNYWluIFdhcmVob3VzZScsIHNrdTogJ05LLUFNMjcwLTknLCBpdGVtTmFtZTogJ05pa2UgQWlyIE1heCAyNzAnLCBxdWFudGl0eTogMzAsIGRhdGU6ICcyMDI2LTA4LTAzJywgc3RhdHVzOiAnQ29tcGxldGVkJyB9LFxuICB7IGlkOiAnVFItMTA3NScsIGZyb206ICdNYWluIFdhcmVob3VzZScsIHRvOiAnRWFzdCBEaXN0cmlidXRpb24nLCBza3U6ICdBUEwtTUJBLU0zJywgaXRlbU5hbWU6ICdNYWNCb29rIEFpciBNMyAxM1wiJywgcXVhbnRpdHk6IDE1LCBkYXRlOiAnMjAyNi0wOC0wMScsIHN0YXR1czogJ0NvbXBsZXRlZCcgfSxcbl1cblxuY29uc3QgSU5JVElBTF9NT1ZFTUVOVFM6IE1vdmVtZW50TG9nW10gPSBbXG4gIHsgaWQ6ICdNT1YtNTAxJywgaXRlbU5hbWU6ICdTb255IFdILTEwMDBYTTUnLCBza3U6ICdTTlktV0gxMDAwJywgdHlwZTogJ1Jlc3RvY2snLCBjaGFuZ2U6ICcrNTAgdW5pdHMnLCB1c2VyOiAnQWRtaW4gVXNlcicsIGRhdGU6ICcyMDI2LTA4LTA1IDE0OjMyJyB9LFxuICB7IGlkOiAnTU9WLTUwMCcsIGl0ZW1OYW1lOiAnTmlrZSBBaXIgTWF4IDI3MCcsIHNrdTogJ05LLUFNMjcwLTknLCB0eXBlOiAnU2FsZSBEZWR1Y3Rpb24nLCBjaGFuZ2U6ICctMSB1bml0JywgdXNlcjogJ1N5c3RlbSAoT3JkZXIgT1JELTk3ODEyKScsIGRhdGU6ICcyMDI2LTA4LTA0IDE4OjIwJyB9LFxuICB7IGlkOiAnTU9WLTQ5OScsIGl0ZW1OYW1lOiAnVGhlIE9yZGluYXJ5IEhBIDIlJywgc2t1OiAnT1JELUhBLTMwJywgdHlwZTogJ0NvcnJlY3Rpb24nLCBjaGFuZ2U6ICctNSB1bml0cyAoRGFtYWdlZCknLCB1c2VyOiAnV2FyZWhvdXNlIE1hbmFnZXInLCBkYXRlOiAnMjAyNi0wOC0wNCAxMToxNScgfSxcbiAgeyBpZDogJ01PVi00OTgnLCBpdGVtTmFtZTogJ01hY0Jvb2sgQWlyIE0zIDEzXCInLCBza3U6ICdBUEwtTUJBLU0zJywgdHlwZTogJ1RyYW5zZmVyJywgY2hhbmdlOiAnLTE1IHVuaXRzIHRvIFdILTInLCB1c2VyOiAnTG9naXN0aWNzIExlYWQnLCBkYXRlOiAnMjAyNi0wOC0wMSAwOTo0NScgfSxcbl1cblxuY29uc3QgU1RBVFVTX0NMUzogUmVjb3JkPHN0cmluZywgeyBiZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+ID0ge1xuICBvdXQ6IHsgYmc6ICdiZy1bI0UxMUQ0OF0gdGV4dC13aGl0ZScsIGxhYmVsOiAnT3V0IG9mIFN0b2NrJyB9LFxuICBjcml0aWNhbDogeyBiZzogJ2JnLVsjRkVFMkUyXSB0ZXh0LVsjOTkxQjFCXScsIGxhYmVsOiAnQ3JpdGljYWwnIH0sXG4gIGxvdzogeyBiZzogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXScsIGxhYmVsOiAnTG93IFN0b2NrJyB9LFxuICBvazogeyBiZzogJ2JnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XScsIGxhYmVsOiAnSW4gU3RvY2snIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludmVudG9yeUFkbWluKHsgb25OYXZpZ2F0ZTogXyB9OiBQcm9wcykge1xuICBjb25zdCB7IHByb2R1Y3RzIH0gPSB1c2VDYXRhbG9nKClcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKVxuXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnYWxsJylcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGU8J3N0b2NrJyB8ICd3YXJlaG91c2VzJyB8ICd0cmFuc2ZlcnMnIHwgJ21vdmVtZW50cyc+KCdzdG9jaycpXG5cbiAgY29uc3QgW3dhcmVob3VzZXNMaXN0LCBzZXRXYXJlaG91c2VzTGlzdF0gPSB1c2VTdGF0ZTxXYXJlaG91c2VbXT4oSU5JVElBTF9XQVJFSE9VU0VTKVxuICBjb25zdCBbdHJhbnNmZXJzTGlzdCwgc2V0VHJhbnNmZXJzTGlzdF0gPSB1c2VTdGF0ZTxUcmFuc2ZlclJlY29yZFtdPihJTklUSUFMX1RSQU5TRkVSUylcbiAgY29uc3QgW21vdmVtZW50c0xpc3QsIHNldE1vdmVtZW50c0xpc3RdID0gdXNlU3RhdGU8TW92ZW1lbnRMb2dbXT4oSU5JVElBTF9NT1ZFTUVOVFMpXG5cbiAgLy8gTG9jYWwgb3ZlcnJpZGVzIGZvciBzdG9jay90aHJlc2hvbGRcbiAgY29uc3QgW2xvY2FsT3ZlcnJpZGVzLCBzZXRMb2NhbE92ZXJyaWRlc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCB7IHN0b2NrOiBudW1iZXI7IHRocmVzaG9sZDogbnVtYmVyOyBpbmNvbWluZzogbnVtYmVyOyB3YXJlaG91c2U6IHN0cmluZyB9Pj4oe30pXG5cbiAgLy8gTW9kYWxzXG4gIGNvbnN0IFtyZXN0b2NrSXRlbSwgc2V0UmVzdG9ja0l0ZW1dID0gdXNlU3RhdGU8SW52ZW50b3J5SXRlbSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtyZXN0b2NrUXR5LCBzZXRSZXN0b2NrUXR5XSA9IHVzZVN0YXRlKCc1MCcpXG4gIGNvbnN0IFtyZXN0b2NrVGhyZXNob2xkLCBzZXRSZXN0b2NrVGhyZXNob2xkXSA9IHVzZVN0YXRlKCcxMCcpXG4gIGNvbnN0IFtyZXN0b2NrV2gsIHNldFJlc3RvY2tXaF0gPSB1c2VTdGF0ZSgnV0gtMScpXG5cbiAgY29uc3QgW3Nob3dUcmFuc2Zlck1vZGFsLCBzZXRTaG93VHJhbnNmZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RyYW5zZmVyRm9ybSwgc2V0VHJhbnNmZXJGb3JtXSA9IHVzZVN0YXRlKHsgZnJvbTogJ1dILTEnLCB0bzogJ1dILTInLCBza3U6ICcnLCBxdHk6ICcxMCcgfSlcblxuICBjb25zdCBbc2hvd0FkZFdoTW9kYWwsIHNldFNob3dBZGRXaE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbd2hGb3JtLCBzZXRXaEZvcm1dID0gdXNlU3RhdGUoeyBuYW1lOiAnJywgY2l0eTogJycsIGFkZHJlc3M6ICcnIH0pXG5cbiAgY29uc3QgW3Nob3dQT01vZGFsLCBzZXRTaG93UE9Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3BvRm9ybSwgc2V0UG9Gb3JtXSA9IHVzZVN0YXRlKHsgc3VwcGxpZXI6ICdTb3VuZFZhdWx0Jywgc2t1OiAnJywgcXR5OiAnMTAwJywgZXhwZWN0ZWREYXRlOiAnMjAyNi0wOC0yMCcgfSlcblxuICAvLyBDb21wdXRlIG1lcmdlZCBpbnZlbnRvcnkgaXRlbXMgZnJvbSBwcm9kdWN0cyBjYXRhbG9nXG4gIGNvbnN0IGludmVudG9yeUl0ZW1zID0gdXNlTWVtbzxJbnZlbnRvcnlJdGVtW10+KCgpID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdHMubWFwKChwLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IG92ZXJyaWRlID0gbG9jYWxPdmVycmlkZXNbcC5pZF1cbiAgICAgIGNvbnN0IGN1cnJlbnRTdG9jayA9IG92ZXJyaWRlPy5zdG9jayA/PyBwLnN0b2NrXG4gICAgICBjb25zdCB0aHJlc2hvbGQgPSBvdmVycmlkZT8udGhyZXNob2xkID8/IChwLnN0b2NrIDwgMTAgPyAxNSA6IDEwKVxuICAgICAgY29uc3QgaW5jb21pbmcgPSBvdmVycmlkZT8uaW5jb21pbmcgPz8gKHAuc3RvY2sgPT09IDAgPyAzMCA6IGlkeCAlIDMgPT09IDAgPyA1MCA6IDApXG4gICAgICBjb25zdCB3aCA9IG92ZXJyaWRlPy53YXJlaG91c2UgPz8gKGlkeCAlIDMgPT09IDAgPyAnV0gtMScgOiBpZHggJSAzID09PSAxID8gJ1dILTInIDogJ1dILTMnKVxuXG4gICAgICBsZXQgc3RhdHVzOiBJbnZlbnRvcnlJdGVtWydzdGF0dXMnXSA9ICdvaydcbiAgICAgIGlmIChjdXJyZW50U3RvY2sgPT09IDApIHN0YXR1cyA9ICdvdXQnXG4gICAgICBlbHNlIGlmIChjdXJyZW50U3RvY2sgPD0gMykgc3RhdHVzID0gJ2NyaXRpY2FsJ1xuICAgICAgZWxzZSBpZiAoY3VycmVudFN0b2NrIDw9IHRocmVzaG9sZCkgc3RhdHVzID0gJ2xvdydcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHAuaWQsXG4gICAgICAgIG5hbWU6IHAudGl0bGUsXG4gICAgICAgIHNrdTogYFNLVS0ke3AuaWQuc2xpY2UoMCwgNikudG9VcHBlckNhc2UoKX1gLFxuICAgICAgICB2ZW5kb3I6IHAudmVuZG9yLFxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeSxcbiAgICAgICAgc3RvY2s6IGN1cnJlbnRTdG9jayxcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICByZXNlcnZlZDogTWF0aC5taW4oY3VycmVudFN0b2NrLCBNYXRoLmZsb29yKGN1cnJlbnRTdG9jayAqIDAuMTUpKSxcbiAgICAgICAgaW5jb21pbmcsXG4gICAgICAgIHdhcmVob3VzZTogd2gsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbcHJvZHVjdHMsIGxvY2FsT3ZlcnJpZGVzXSlcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oKCkgPT4gaW52ZW50b3J5SXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgIGNvbnN0IG1hdGNoU3RhdHVzID0gZmlsdGVyID09PSAnYWxsJyB8fCBpdGVtLnN0YXR1cyA9PT0gZmlsdGVyXG4gICAgY29uc3QgbWF0Y2hTZWFyY2ggPSAhc2VhcmNoIHx8IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fCBpdGVtLnNrdS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgIHJldHVybiBtYXRjaFN0YXR1cyAmJiBtYXRjaFNlYXJjaFxuICB9KSwgW2ludmVudG9yeUl0ZW1zLCBmaWx0ZXIsIHNlYXJjaF0pXG5cbiAgY29uc3QgY291bnRzID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIG91dDogaW52ZW50b3J5SXRlbXMuZmlsdGVyKGkgPT4gaS5zdGF0dXMgPT09ICdvdXQnKS5sZW5ndGgsXG4gICAgY3JpdGljYWw6IGludmVudG9yeUl0ZW1zLmZpbHRlcihpID0+IGkuc3RhdHVzID09PSAnY3JpdGljYWwnKS5sZW5ndGgsXG4gICAgbG93OiBpbnZlbnRvcnlJdGVtcy5maWx0ZXIoaSA9PiBpLnN0YXR1cyA9PT0gJ2xvdycpLmxlbmd0aCxcbiAgICBvazogaW52ZW50b3J5SXRlbXMuZmlsdGVyKGkgPT4gaS5zdGF0dXMgPT09ICdvaycpLmxlbmd0aCxcbiAgICB0b3RhbFN0b2NrOiBpbnZlbnRvcnlJdGVtcy5yZWR1Y2UoKHMsIGkpID0+IHMgKyBpLnN0b2NrLCAwKSxcbiAgICBpbmNvbWluZ1RvdGFsOiBpbnZlbnRvcnlJdGVtcy5yZWR1Y2UoKHMsIGkpID0+IHMgKyBpLmluY29taW5nLCAwKSxcbiAgfSksIFtpbnZlbnRvcnlJdGVtc10pXG5cbiAgY29uc3QgaGFuZGxlUmVzdG9ja1N1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXJlc3RvY2tJdGVtKSByZXR1cm5cblxuICAgIGNvbnN0IGFkZFF0eSA9IHBhcnNlSW50KHJlc3RvY2tRdHkpIHx8IDBcbiAgICBjb25zdCBuZXdTdG9jayA9IHJlc3RvY2tJdGVtLnN0b2NrICsgYWRkUXR5XG4gICAgY29uc3QgbmV3VGhyZXNob2xkID0gcGFyc2VJbnQocmVzdG9ja1RocmVzaG9sZCkgfHwgcmVzdG9ja0l0ZW0udGhyZXNob2xkXG5cbiAgICAvLyBVcGRhdGUgbG9jYWwgb3ZlcnJpZGVcbiAgICBzZXRMb2NhbE92ZXJyaWRlcyhwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW3Jlc3RvY2tJdGVtLmlkXToge1xuICAgICAgICBzdG9jazogbmV3U3RvY2ssXG4gICAgICAgIHRocmVzaG9sZDogbmV3VGhyZXNob2xkLFxuICAgICAgICBpbmNvbWluZzogTWF0aC5tYXgoMCwgcmVzdG9ja0l0ZW0uaW5jb21pbmcgLSBhZGRRdHkpLFxuICAgICAgICB3YXJlaG91c2U6IHJlc3RvY2tXaCxcbiAgICAgIH0sXG4gICAgfSkpXG5cbiAgICAvLyBBZGQgdG8gbW92ZW1lbnQgbG9nXG4gICAgc2V0TW92ZW1lbnRzTGlzdChwcmV2ID0+IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBNT1YtJHtEYXRlLm5vdygpLnRvU3RyaW5nKCkuc2xpY2UoLTMpfWAsXG4gICAgICAgIGl0ZW1OYW1lOiByZXN0b2NrSXRlbS5uYW1lLFxuICAgICAgICBza3U6IHJlc3RvY2tJdGVtLnNrdSxcbiAgICAgICAgdHlwZTogJ1Jlc3RvY2snLFxuICAgICAgICBjaGFuZ2U6IGArJHthZGRRdHl9IHVuaXRzYCxcbiAgICAgICAgdXNlcjogJ0FkbWluIFVzZXInLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgnVCcsICcgJykuc2xpY2UoMCwgMTYpLFxuICAgICAgfSxcbiAgICAgIC4uLnByZXYsXG4gICAgXSlcblxuICAgIC8vIFVwZGF0ZSBiYWNrZW5kIEFQSSBpZiBzZXNzaW9uIHRva2VuIGlzIGFjdGl2ZVxuICAgIGlmIChzZXNzaW9uLnRva2VuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB1cGRhdGVBZG1pblByb2R1Y3Qoc2Vzc2lvbi50b2tlbiwgcmVzdG9ja0l0ZW0uaWQsIHtcbiAgICAgICAgICBzdG9ja1F1YW50aXR5OiBuZXdTdG9jayxcbiAgICAgICAgICBsb3dTdG9ja0xpbWl0OiBuZXdUaHJlc2hvbGQsXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gRmFsbGJhY2sgZm9yIGRldiBtb2RlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0UmVzdG9ja0l0ZW0obnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVRyYW5zZmVyU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghdHJhbnNmZXJGb3JtLnNrdSB8fCAhdHJhbnNmZXJGb3JtLnF0eSkgcmV0dXJuXG5cbiAgICBjb25zdCB0YXJnZXRJdGVtID0gaW52ZW50b3J5SXRlbXMuZmluZChpID0+IGkuc2t1LnRvTG93ZXJDYXNlKCkgPT09IHRyYW5zZmVyRm9ybS5za3UudG9Mb3dlckNhc2UoKSB8fCBpLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0cmFuc2ZlckZvcm0uc2t1LnRvTG93ZXJDYXNlKCkpKVxuICAgIGNvbnN0IGl0ZW1OYW1lID0gdGFyZ2V0SXRlbSA/IHRhcmdldEl0ZW0ubmFtZSA6IHRyYW5zZmVyRm9ybS5za3VcblxuICAgIGNvbnN0IG5ld1JlY29yZDogVHJhbnNmZXJSZWNvcmQgPSB7XG4gICAgICBpZDogYFRSLSR7TWF0aC5mbG9vcigxMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDApfWAsXG4gICAgICBmcm9tOiB3YXJlaG91c2VzTGlzdC5maW5kKHcgPT4gdy5pZCA9PT0gdHJhbnNmZXJGb3JtLmZyb20pPy5uYW1lIHx8IHRyYW5zZmVyRm9ybS5mcm9tLFxuICAgICAgdG86IHdhcmVob3VzZXNMaXN0LmZpbmQodyA9PiB3LmlkID09PSB0cmFuc2ZlckZvcm0udG8pPy5uYW1lIHx8IHRyYW5zZmVyRm9ybS50byxcbiAgICAgIHNrdTogdHJhbnNmZXJGb3JtLnNrdS50b1VwcGVyQ2FzZSgpLFxuICAgICAgaXRlbU5hbWUsXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQodHJhbnNmZXJGb3JtLnF0eSkgfHwgMTAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgc3RhdHVzOiAnSW4gVHJhbnNpdCcsXG4gICAgfVxuXG4gICAgc2V0VHJhbnNmZXJzTGlzdChwcmV2ID0+IFtuZXdSZWNvcmQsIC4uLnByZXZdKVxuICAgIHNldFNob3dUcmFuc2Zlck1vZGFsKGZhbHNlKVxuICAgIHNldFRyYW5zZmVyRm9ybSh7IGZyb206ICdXSC0xJywgdG86ICdXSC0yJywgc2t1OiAnJywgcXR5OiAnMTAnIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRXaFN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXdoRm9ybS5uYW1lIHx8ICF3aEZvcm0uY2l0eSkgcmV0dXJuXG5cbiAgICBjb25zdCBuZXdXaDogV2FyZWhvdXNlID0ge1xuICAgICAgaWQ6IGBXSC0ke3dhcmVob3VzZXNMaXN0Lmxlbmd0aCArIDF9YCxcbiAgICAgIG5hbWU6IHdoRm9ybS5uYW1lLFxuICAgICAgY2l0eTogd2hGb3JtLmNpdHksXG4gICAgICBhZGRyZXNzOiB3aEZvcm0uYWRkcmVzcyB8fCBgJHt3aEZvcm0uY2l0eX0gTG9naXN0aWNzIENlbnRlcmAsXG4gICAgICBjYXBhY2l0eTogJzE1JScsXG4gICAgICBpdGVtczogMCxcbiAgICB9XG5cbiAgICBzZXRXYXJlaG91c2VzTGlzdChwcmV2ID0+IFsuLi5wcmV2LCBuZXdXaF0pXG4gICAgc2V0U2hvd0FkZFdoTW9kYWwoZmFsc2UpXG4gICAgc2V0V2hGb3JtKHsgbmFtZTogJycsIGNpdHk6ICcnLCBhZGRyZXNzOiAnJyB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUE9TdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U2hvd1BPTW9kYWwoZmFsc2UpXG4gICAgYWxlcnQoYFB1cmNoYXNlIE9yZGVyIGZvciAke3BvRm9ybS5xdHl9IHVuaXRzIGZyb20gJHtwb0Zvcm0uc3VwcGxpZXJ9IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IWApXG4gIH1cblxuICBjb25zdCBoYW5kbGVFeHBvcnRDU1YgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9ICdJRCxOYW1lLFNLVSxWZW5kb3IsQ2F0ZWdvcnksSW4gU3RvY2ssUmVzZXJ2ZWQsSW5jb21pbmcsV2FyZWhvdXNlLFN0YXR1c1xcbidcbiAgICBjb25zdCByb3dzID0gaW52ZW50b3J5SXRlbXMubWFwKGkgPT4gYFwiJHtpLmlkfVwiLFwiJHtpLm5hbWV9XCIsXCIke2kuc2t1fVwiLFwiJHtpLnZlbmRvcn1cIixcIiR7aS5jYXRlZ29yeX1cIiwke2kuc3RvY2t9LCR7aS5yZXNlcnZlZH0sJHtpLmluY29taW5nfSxcIiR7aS53YXJlaG91c2V9XCIsXCIke2kuc3RhdHVzfVwiYCkuam9pbignXFxuJylcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2hlYWRlcnMgKyByb3dzXSwgeyB0eXBlOiAndGV4dC9jc3YnIH0pXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBhLmhyZWYgPSB1cmxcbiAgICBhLmRvd25sb2FkID0gYGludmVudG9yeS1yZXBvcnQtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApfS5jc3ZgXG4gICAgYS5jbGljaygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNVwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPkludmVudG9yeSAmIFN0b2NrIENvbnRyb2w8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkI4Ml0gbXQtMC41XCI+UmVhbC10aW1lIHN0b2NrIGxldmVscywgbXVsdGktd2FyZWhvdXNlIHRyYW5zZmVycywgYW5kIFBPIHRyYWNraW5nPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBvcnRDU1Z9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgMTB2Nm0wIDBsLTMtM20zIDNsMy0zbTIgOEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIEV4cG9ydCBDU1ZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VHJhbnNmZXJNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bIzExMTExOF0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICsgU3RvY2sgVHJhbnNmZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UE9Nb2RhbCh0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtIHNoYWRvdy1bI0U4NDUwQV0vMjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICsgUHVyY2hhc2UgT3JkZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEFsZXJ0IEJhbm5lciAqL31cbiAgICAgIHsoY291bnRzLm91dCA+IDAgfHwgY291bnRzLmNyaXRpY2FsID4gMCkgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRkVGMkYyXSBib3JkZXIgYm9yZGVyLVsjRkNBNUE1XSByb3VuZGVkLTJ4bCBweC01IHB5LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgYmctWyNFMTFENDhdLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtWyNFMTFENDhdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDl2Mm0wIDRoLjAxbS02LjkzOCA0aDEzLjg1NmMxLjU0IDAgMi41MDItMS42NjcgMS43MzItM0wxMy43MzIgNGMtLjc3LTEuMzMzLTIuNjk0LTEuMzMzLTMuNDY0IDBMMy4zNCAxNmMtLjc3IDEuMzMzLjE5MiAzIDEuNzMyIDN6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bIzk5MUIxQl1cIj5cbiAgICAgICAgICAgICAgICB7Y291bnRzLm91dH0gaXRlbXMgT3V0IG9mIFN0b2NrIMK3IHtjb3VudHMuY3JpdGljYWx9IENyaXRpY2FsIGl0ZW1zIG5lZWRpbmcgaW1tZWRpYXRlIHJlc3RvY2tcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNCOTFDMUNdIG10LTAuNVwiPkF1dG9tYXRlZCByZS1vcmRlciByZWNvbW1lbmRhdGlvbnMgZ2VuZXJhdGVkIGJhc2VkIG9uIDMwLWRheSB2ZWxvY2l0eS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UE9Nb2RhbCh0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bI0UxMUQ0OF0gdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCByb3VuZGVkLXhsIGhvdmVyOmJnLVsjQkUxMjNDXSB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4LXNocmluay0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBHZW5lcmF0ZSBCdWxrIFBPIOKGklxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBLUEkgQ2FyZHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAge1tcbiAgICAgICAgICB7IGxhYmVsOiAnVG90YWwgQ2F0YWxvZyBVbml0cycsIHZhbHVlOiBjb3VudHMudG90YWxTdG9jay50b0xvY2FsZVN0cmluZygpLCBjb2xvcjogJ3RleHQtWyMxMTExMThdJywgc3ViOiBgJHtpbnZlbnRvcnlJdGVtcy5sZW5ndGh9IGFjdGl2ZSBTS1VzYCB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdPdXQgb2YgU3RvY2sgU0tVcycsIHZhbHVlOiBjb3VudHMub3V0LnRvU3RyaW5nKCksIGNvbG9yOiAndGV4dC1bI0UxMUQ0OF0nLCBzdWI6ICdSZXF1aXJlcyBQTyByZXN0b2NrJyB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdMb3cgLyBDcml0aWNhbCBTdG9jaycsIHZhbHVlOiAoY291bnRzLmNyaXRpY2FsICsgY291bnRzLmxvdykudG9TdHJpbmcoKSwgY29sb3I6ICd0ZXh0LVsjRDk3NzA2XScsIHN1YjogJ0JlbG93IHRocmVzaG9sZCBsaW1pdCcgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnSW5jb21pbmcgSW52ZW50b3J5JywgdmFsdWU6IGNvdW50cy5pbmNvbWluZ1RvdGFsLnRvTG9jYWxlU3RyaW5nKCksIGNvbG9yOiAndGV4dC1bIzA1OTY2OV0nLCBzdWI6ICdFeHBlY3RlZCBpbiAxNCBkYXlzJyB9LFxuICAgICAgICBdLm1hcChrID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ay5sYWJlbH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e2subGFiZWx9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZm9udC1tb25vIGZvbnQtYmxhY2sgdGV4dC0yeGwgbXQtMS41ICR7ay5jb2xvcn1gfT57ay52YWx1ZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdIG10LTFcIj57ay5zdWJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTmF2aWdhdGlvbiBUYWJzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItWyNFMkUyRUNdIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICB7W1xuICAgICAgICAgIHsga2V5OiAnc3RvY2snLCBsYWJlbDogJ1N0b2NrIExldmVscyAmIEFsZXJ0cycgfSxcbiAgICAgICAgICB7IGtleTogJ3dhcmVob3VzZXMnLCBsYWJlbDogYFdhcmVob3VzZXMgKCR7d2FyZWhvdXNlc0xpc3QubGVuZ3RofSlgIH0sXG4gICAgICAgICAgeyBrZXk6ICd0cmFuc2ZlcnMnLCBsYWJlbDogYFN0b2NrIFRyYW5zZmVycyAoJHt0cmFuc2ZlcnNMaXN0Lmxlbmd0aH0pYCB9LFxuICAgICAgICAgIHsga2V5OiAnbW92ZW1lbnRzJywgbGFiZWw6ICdBdWRpdCBNb3ZlbWVudHMgTG9nJyB9LFxuICAgICAgICBdLm1hcCh0ID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3Qua2V5fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKHQua2V5IGFzIHR5cGVvZiB0YWIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0zIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1hbGwgLW1iLXB4ICR7XG4gICAgICAgICAgICAgIHRhYiA9PT0gdC5rZXkgPyAnYm9yZGVyLVsjRTg0NTBBXSB0ZXh0LVsjRTg0NTBBXSBmb250LWJvbGQnIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjMTExMTE4XSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0LmxhYmVsfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyog4pSA4pSAIFRBQiAxOiBTVE9DSyBMRVZFTFMg4pSA4pSAICovfVxuICAgICAge3RhYiA9PT0gJ3N0b2NrJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgey8qIEZpbHRlcnMgQmFyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyBiZy13aGl0ZSBwLTQgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ11cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIG1pbi13LVsyMjBweF1cIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMuNSB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00IGgtNCB0ZXh0LVsjOUI5QkI4XVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggU0tVIG9yIHByb2R1Y3QgdGl0bGUuLi5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHBsLTEwIHByLTQgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQteGwgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSBwbGFjZWhvbGRlcjp0ZXh0LVsjOUI5QkI4XVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBiZy1bI0Y0RjRGOF0gcm91bmRlZC14bCBwLTFcIj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICB7IGtleTogJ2FsbCcsIGxhYmVsOiAnQWxsIFNLVXMnIH0sXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdvdXQnLCBsYWJlbDogYE91dCAoJHtjb3VudHMub3V0fSlgIH0sXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdjcml0aWNhbCcsIGxhYmVsOiBgQ3JpdGljYWwgKCR7Y291bnRzLmNyaXRpY2FsfSlgIH0sXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdsb3cnLCBsYWJlbDogYExvdyAoJHtjb3VudHMubG93fSlgIH0sXG4gICAgICAgICAgICAgIF0ubWFwKGYgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17Zi5rZXl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoZi5rZXkpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyID09PSBmLmtleSA/ICdiZy13aGl0ZSBzaGFkb3ctc20gdGV4dC1bIzExMTExOF0nIDogJ3RleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyM2QjZCODJdJ1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2YubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3RvY2sgVGFibGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctWyNGOUY5RkNdIGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF0gdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zLjVcIj5Qcm9kdWN0IEl0ZW08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTQgcHktMy41XCI+U0tVIENvZGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTQgcHktMy41XCI+VmVuZG9yPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPkluIFN0b2NrPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPlJlc2VydmVkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPkluY29taW5nPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPldhcmVob3VzZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNCBweS0zLjVcIj5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1yaWdodCBweC01IHB5LTMuNVwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSBsZWFkaW5nLXNudWcgbGluZS1jbGFtcC0xXCI+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG10LTAuNVwiPntpdGVtLmNhdGVnb3J5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSBmb250LW1vbm8gdGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPntpdGVtLnNrdX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e2l0ZW0udmVuZG9yfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LXNtICR7aXRlbS5zdG9jayA9PT0gMCA/ICd0ZXh0LVsjRTExRDQ4XScgOiBpdGVtLnN0b2NrIDw9IGl0ZW0udGhyZXNob2xkID8gJ3RleHQtWyNEOTc3MDZdJyA6ICd0ZXh0LVsjMTExMTE4XSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3RvY2t9IHVuaXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMS41IGJnLVsjRjRGNEY4XSByb3VuZGVkLWZ1bGwgbXQtMSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLWZ1bGwgcm91bmRlZC1mdWxsICR7aXRlbS5zdG9jayA9PT0gMCA/ICdiZy1bI0UxMUQ0OF0nIDogaXRlbS5zdG9jayA8PSBpdGVtLnRocmVzaG9sZCA/ICdiZy1bI0Q5NzcwNl0nIDogJ2JnLVsjMDU5NjY5XSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtNYXRoLm1pbigxMDAsIChpdGVtLnN0b2NrIC8gTWF0aC5tYXgoMzAsIGl0ZW0udGhyZXNob2xkICogMi41KSkgKiAxMDApfSVgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSBmb250LW1vbm8gdGV4dC1zbSB0ZXh0LVsjNkI2QjgyXVwiPntpdGVtLnJlc2VydmVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bmb250LW1vbm8gdGV4dC1zbSBmb250LXNlbWlib2xkICR7aXRlbS5pbmNvbWluZyA+IDAgPyAndGV4dC1bIzA1OTY2OV0nIDogJ3RleHQtWyM5QjlCQjhdJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW5jb21pbmcgPiAwID8gYCske2l0ZW0uaW5jb21pbmd9YCA6ICfigJQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSB0ZXh0LVsjNkI2QjgyXSBweC0yLjUgcHktMSByb3VuZGVkLWxnIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ud2FyZWhvdXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMXB4XSBmb250LWJvbGQgJHtTVEFUVVNfQ0xTW2l0ZW0uc3RhdHVzXS5iZ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1NUQVRVU19DTFNbaXRlbS5zdGF0dXNdLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3RvY2tJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdG9ja1F0eSgnNTAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3RvY2tUaHJlc2hvbGQoaXRlbS50aHJlc2hvbGQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN0b2NrV2goaXRlbS53YXJlaG91c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMS41IGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIHJvdW5kZWQteGwgaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzdG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7Lyog4pSA4pSAIFRBQiAyOiBXQVJFSE9VU0VTIOKUgOKUgCAqL31cbiAgICAgIHt0YWIgPT09ICd3YXJlaG91c2VzJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNVwiPlxuICAgICAgICAgIHt3YXJlaG91c2VzTGlzdC5tYXAod2ggPT4ge1xuICAgICAgICAgICAgY29uc3QgcGN0ID0gcGFyc2VJbnQod2guY2FwYWNpdHkpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17d2guaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNiBzcGFjZS15LTQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIGZvbnQtYm9sZCBweC0yIHB5LTAuNSBiZy1bI0Y0RjRGOF0gdGV4dC1bIzZCNkI4Ml0gcm91bmRlZC1tZFwiPnt3aC5pZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmFzZSB0ZXh0LVsjMTExMTE4XVwiPnt3aC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF0gbXQtMVwiPvCfk40ge3doLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XSBweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCBmb250LWJvbGRcIj5BY3RpdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xLjUgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzZCNkI4Ml1cIj5TdG9yYWdlIENhcGFjaXR5IFVzZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj57d2guY2FwYWNpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMyBiZy1bI0Y0RjRGOF0gcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtZnVsbCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwICR7cGN0ID4gODAgPyAnYmctWyNFMTFENDhdJyA6IHBjdCA+IDYwID8gJ2JnLVsjRDk3NzA2XScgOiAnYmctWyMwNTk2NjldJ31gfSBzdHlsZT17eyB3aWR0aDogd2guY2FwYWNpdHkgfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOUY5RkNdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQteGwgcC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQteGwgdGV4dC1bIzExMTExOF1cIj57d2guaXRlbXMudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIG10LTAuNVwiPlRvdGFsIEl0ZW1zPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLXhsIHAtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LXhsIHRleHQtWyNEOTc3MDZdXCI+e01hdGguZmxvb3Iod2guaXRlbXMgKiAwLjA0KX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIG10LTAuNVwiPkxvdyBTdG9jayBBbGVydDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRUYWIoJ3RyYW5zZmVycycpOyBzZXRUcmFuc2ZlckZvcm0odGYgPT4gKHsgLi4udGYsIGZyb206IHdoLmlkIH0pKSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSBob3ZlcjpiZy1bI0Y0RjRGOF0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEluaXRpYXRlIFN0b2NrIFRyYW5zZmVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZFdoTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1bI0UyRTJFQ10gcC02IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zIGhvdmVyOmJvcmRlci1bI0U4NDUwQV0gdGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bI0U4NDUwQV0gdHJhbnNpdGlvbi1hbGwgZ3JvdXAgbWluLWgtWzI2MHB4XVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC0yeGwgYmctWyNGNEY0RjhdIGdyb3VwLWhvdmVyOmJnLVsjRkZGN0Y1XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNyBoLTdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgNHYxNm04LThINFwiIC8+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+QWRkIFdhcmVob3VzZSBGYWNpbGl0eTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF0gdGV4dC1jZW50ZXIgbWF4LXctWzIwMHB4XVwiPlJlZ2lzdGVyIGEgbmV3IGZ1bGZpbGxtZW50IGNlbnRlciBvciByZWdpb25hbCBodWIuPC9wPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiDilIDilIAgVEFCIDM6IFRSQU5TRkVSUyDilIDilIAgKi99XG4gICAgICB7dGFiID09PSAndHJhbnNmZXJzJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+U3RvY2sgVHJhbnNmZXJzIEJldHdlZW4gRmFjaWxpdGllczwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dUcmFuc2Zlck1vZGFsKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcm91bmRlZC14bCBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICArIENyZWF0ZSBUcmFuc2ZlciBPcmRlclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC01IHB5LTMuNVwiPlRyYW5zZmVyIElEPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNCBweS0zLjVcIj5JdGVtIE5hbWUgJiBTS1U8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPlNvdXJjZSBGYWNpbGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTQgcHktMy41XCI+RGVzdGluYXRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPlF0eTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTQgcHktMy41XCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTQgcHktMy41XCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICAgIHt0cmFuc2ZlcnNMaXN0Lm1hcCh0ID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3QuaWR9IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhzIHRleHQtWyMxMTExMThdXCI+e3QuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPnt0Lml0ZW1OYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPnt0LnNrdX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e3QuZnJvbX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e3QudG99PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41IGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LVsjRTg0NTBBXVwiPnt0LnF1YW50aXR5fSB1bml0czwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e3QuZGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMXB4XSBmb250LWJvbGQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc3RhdHVzID09PSAnQ29tcGxldGVkJyA/ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc3RhdHVzID09PSAnSW4gVHJhbnNpdCcgPyAnYmctWyNFRUYyRkZdIHRleHQtWyM0MzM4Q0FdJyA6ICdiZy1bI0ZFRjNDN10gdGV4dC1bIzkyNDAwRV0nXG4gICAgICAgICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Quc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiDilIDilIAgVEFCIDQ6IEFVRElUIE1PVkVNRU5UUyBMT0cg4pSA4pSAICovfVxuICAgICAge3RhYiA9PT0gJ21vdmVtZW50cycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+UmVjZW50IFN0b2NrIEF1ZGl0IExvZzwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1bI0Y5RjlGQ10gYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zLjVcIj5Mb2cgSUQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPkl0ZW0gJiBTS1U8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPlR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPlN0b2NrIEFkanVzdG1lbnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweC00IHB5LTMuNVwiPlVzZXIgLyBUcmlnZ2VyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNCBweS0zLjVcIj5UaW1lc3RhbXA8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge21vdmVtZW50c0xpc3QubWFwKG0gPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bS5pZH0gY2xhc3NOYW1lPVwiaG92ZXI6YmctWyNGOUY5RkNdXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSBmb250LW1vbm8gZm9udC1ib2xkIHRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57bS5pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e20uaXRlbU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+e20uc2t1fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIGJnLVsjRjRGNEY4XSB0ZXh0LVsjMTExMTE4XSBweC0yLjUgcHktMSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bS50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41IGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LVsjMEUwRTBFXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttLmNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41IHRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj57bS51c2VyfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+e20uZGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIOKUgOKUgCBNT0RBTCAxOiBSRVNUT0NLIElURU0gTU9EQUwg4pSA4pSAICovfVxuICAgICAge3Jlc3RvY2tJdGVtICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzYwIHotNTAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNiBtYXgtdy1tZCB3LWZ1bGwgc2hhZG93LTJ4bCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LVsjMTExMTE4XVwiPlJlc3RvY2sgU0tVIEl0ZW08L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFJlc3RvY2tJdGVtKG51bGwpfSBjbGFzc05hbWU9XCJ0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjMTExMTE4XVwiPuKclTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOUY5RkNdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtMnhsIHAtNFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBsaW5lLWNsYW1wLTFcIj57cmVzdG9ja0l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG10LTAuNVwiPntyZXN0b2NrSXRlbS5za3V9IMK3IEN1cnJlbnQ6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjRTg0NTBBXVwiPntyZXN0b2NrSXRlbS5zdG9ja30gdW5pdHM8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZXN0b2NrU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPkFkZCBVbml0cyBRdWFudGl0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXN0b2NrUXR5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UmVzdG9ja1F0eShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMSBweC00IG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+TG93LVN0b2NrIEFsZXJ0IFRocmVzaG9sZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXN0b2NrVGhyZXNob2xkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UmVzdG9ja1RocmVzaG9sZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5Bc3NpZ25lZCBXYXJlaG91c2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXN0b2NrV2h9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRSZXN0b2NrV2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt3YXJlaG91c2VzTGlzdC5tYXAodyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt3LmlkfSB2YWx1ZT17dy5pZH0+e3cubmFtZX0gKHt3LmNpdHl9KTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSZXN0b2NrSXRlbShudWxsKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXNtIGhvdmVyOmJnLVsjQzkzQTA3XVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29uZmlybSBSZXN0b2NrXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiDilIDilIAgTU9EQUwgMjogU1RPQ0sgVFJBTlNGRVIgTU9EQUwg4pSA4pSAICovfVxuICAgICAge3Nob3dUcmFuc2Zlck1vZGFsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzYwIHotNTAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNiBtYXgtdy1tZCB3LWZ1bGwgc2hhZG93LTJ4bCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LVsjMTExMTE4XVwiPlN0b2NrIFRyYW5zZmVyIFJlcXVlc3Q8L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dUcmFuc2Zlck1vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzExMTExOF1cIj7inJU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlVHJhbnNmZXJTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktMyB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5Tb3VyY2UgRmFjaWxpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJhbnNmZXJGb3JtLmZyb219XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRyYW5zZmVyRm9ybSh0ZiA9PiAoeyAuLi50ZiwgZnJvbTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7d2FyZWhvdXNlc0xpc3QubWFwKHcgPT4gPG9wdGlvbiBrZXk9e3cuaWR9IHZhbHVlPXt3LmlkfT57dy5uYW1lfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+RGVzdGluYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJhbnNmZXJGb3JtLnRvfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUcmFuc2ZlckZvcm0odGYgPT4gKHsgLi4udGYsIHRvOiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgbXQtMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt3YXJlaG91c2VzTGlzdC5tYXAodyA9PiA8b3B0aW9uIGtleT17dy5pZH0gdmFsdWU9e3cuaWR9Pnt3Lm5hbWV9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPlRhcmdldCBQcm9kdWN0IFNLVSBvciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gU05ZLVdIMTAwMCBvciBTb255IFdILTEwMDBYTTVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RyYW5zZmVyRm9ybS5za3V9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUcmFuc2ZlckZvcm0odGYgPT4gKHsgLi4udGYsIHNrdTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZVwiPlVuaXRzIFF1YW50aXR5IHRvIFRyYW5zZmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RyYW5zZmVyRm9ybS5xdHl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUcmFuc2ZlckZvcm0odGYgPT4gKHsgLi4udGYsIHF0eTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VHJhbnNmZXJNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTMgcm91bmRlZC14bCBiZy1bIzExMTExOF0gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1zbSBob3ZlcjpiZy1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdCBUcmFuc2ZlclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7Lyog4pSA4pSAIE1PREFMIDM6IEFERCBXQVJFSE9VU0UgTU9EQUwg4pSA4pSAICovfVxuICAgICAge3Nob3dBZGRXaE1vZGFsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzYwIHotNTAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNiBtYXgtdy1tZCB3LWZ1bGwgc2hhZG93LTJ4bCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LVsjMTExMTE4XVwiPkFkZCBXYXJlaG91c2UgRmFjaWxpdHk8L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGRXaE1vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzExMTExOF1cIj7inJU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkV2hTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktMyB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+RmFjaWxpdHkgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIFNvdXRoIExvZ2lzdGljcyBIdWJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3doRm9ybS5uYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0V2hGb3JtKHcgPT4gKHsgLi4udywgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5DaXR5IC8gUmVnaW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gTWlhbWksIEZMXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aEZvcm0uY2l0eX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFdoRm9ybSh3ID0+ICh7IC4uLncsIGNpdHk6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgbXQtMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+U3RyZWV0IEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI1MDAgQ2FyZ28gUmQsIEZMIDMzMTAxXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aEZvcm0uYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFdoRm9ybSh3ID0+ICh7IC4uLncsIGFkZHJlc3M6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgbXQtMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGRXaE1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlIFdhcmVob3VzZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7Lyog4pSA4pSAIE1PREFMIDQ6IFBVUkNIQVNFIE9SREVSIE1PREFMIOKUgOKUgCAqL31cbiAgICAgIHtzaG93UE9Nb2RhbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay82MCB6LTUwIGJhY2tkcm9wLWJsdXItc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTYgbWF4LXctbWQgdy1mdWxsIHNoYWRvdy0yeGwgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgdGV4dC1bIzExMTExOF1cIj5DcmVhdGUgUHVyY2hhc2UgT3JkZXI8L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dQT01vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzExMTExOF1cIj7inJU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUE9TdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktMyB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+U3VwcGxpZXIgVmVuZG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cG9Gb3JtLnN1cHBsaWVyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UG9Gb3JtKHAgPT4gKHsgLi4ucCwgc3VwcGxpZXI6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgbXQtMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1snU291bmRWYXVsdCcsICdUZWNoQXJtb3InLCAnU25lYWtlckhlYWQnLCAnR2xvd1VwIEJlYXV0eScsICdIb21lQ3JhZnQnLCAnaVpvbmUgT2ZmaWNpYWwnXS5tYXAodiA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt2fSB2YWx1ZT17dn0+e3Z9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+VGFyZ2V0IFByb2R1Y3QgU0tVPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBTTlktV0gxMDAwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb0Zvcm0uc2t1fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UG9Gb3JtKHAgPT4gKHsgLi4ucCwgc2t1OiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlXCI+T3JkZXIgUXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BvRm9ybS5xdHl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBvRm9ybShwID0+ICh7IC4uLnAsIHF0eTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSBmb250LW1vbm8gZm9udC1ib2xkIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj5FeHBlY3RlZCBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb0Zvcm0uZXhwZWN0ZWREYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQb0Zvcm0ocCA9PiAoeyAuLi5wLCBleHBlY3RlZERhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQteHMgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UE9Nb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTMgcm91bmRlZC14bCBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgSXNzdWUgUHVyY2hhc2UgT3JkZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQW9EQSxJQUFNLHFCQUFrQztDQUN0QztFQUFFLElBQUk7RUFBUSxNQUFNO0VBQWtCLE1BQU07RUFBWSxTQUFTO0VBQStCLFVBQVU7RUFBTyxPQUFPO0NBQUs7Q0FDN0g7RUFBRSxJQUFJO0VBQVEsTUFBTTtFQUFxQixNQUFNO0VBQVUsU0FBUztFQUE2QixVQUFVO0VBQU8sT0FBTztDQUFLO0NBQzVIO0VBQUUsSUFBSTtFQUFRLE1BQU07RUFBWSxNQUFNO0VBQWUsU0FBUztFQUFrQyxVQUFVO0VBQU8sT0FBTztDQUFJO0FBQzlIO0FBRUEsSUFBTSxvQkFBc0M7Q0FDMUM7RUFBRSxJQUFJO0VBQVcsTUFBTTtFQUFrQixJQUFJO0VBQVksS0FBSztFQUFjLFVBQVU7RUFBbUIsVUFBVTtFQUFJLE1BQU07RUFBYyxRQUFRO0NBQWE7Q0FDaEs7RUFBRSxJQUFJO0VBQVcsTUFBTTtFQUFxQixJQUFJO0VBQWtCLEtBQUs7RUFBYyxVQUFVO0VBQW9CLFVBQVU7RUFBSSxNQUFN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