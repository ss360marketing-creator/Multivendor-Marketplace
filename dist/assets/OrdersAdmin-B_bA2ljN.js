import { g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog, t as useSession } from "./index-BM41bWnP.js";
import { a as deleteAdminOrder, l as listAdminOrders, n as createAdminOrder, p as updateAdminOrder } from "./admin-jnfUkW2D.js";
//#region src/admin/components/OrderDetailsModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var STATUS_STEPS = [
	"pending",
	"processing",
	"shipped",
	"delivered"
];
function OrderDetailsModal({ order, onClose, onUpdateStatus, onUpdateTracking }) {
	const [trackingNum, setTrackingNum] = (0, import_react.useState)(order?.trackingNumber ?? "");
	const [carrier, setCarrier] = (0, import_react.useState)("FedEx Express");
	const [updating, setUpdating] = (0, import_react.useState)(false);
	const [trackingSaved, setTrackingSaved] = (0, import_react.useState)(false);
	const [showInvoice, setShowInvoice] = (0, import_react.useState)(false);
	if (!order) return null;
	const currentStepIdx = STATUS_STEPS.indexOf(order.status.toLowerCase());
	const handleSaveTracking = () => {
		onUpdateTracking(order.id, trackingNum);
		setTrackingSaved(true);
		setTimeout(() => setTrackingSaved(false), 3e3);
	};
	const handleAdvance = async (nextStatus) => {
		setUpdating(true);
		await onUpdateStatus(order, nextStatus);
		setUpdating(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-3xl border border-[#E2E2EC] w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-4 bg-[#F9F9FC] border-b border-[#E2E2EC] flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-2xl bg-[#E8450A]/10 border border-[#E8450A]/20 flex items-center justify-center font-bold text-sm text-[#E8450A]",
							children: "📦"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold text-[#111118]",
								children: "Order Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm font-bold text-[#E8450A]",
								children: order.id
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-[#6B6B82]",
							children: [
								"Placed on ",
								order.date,
								" · ",
								order.items,
								" item(s)"
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowInvoice((v) => !v),
							className: "px-3 py-1.5 rounded-xl border border-[#E2E2EC] text-xs font-semibold text-[#111118] hover:bg-[#F4F4F8] transition-colors flex items-center gap-1.5",
							children: ["📄 ", showInvoice ? "Close Invoice" : "Print Invoice"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "w-8 h-8 rounded-full bg-[#F4F4F8] hover:bg-[#E2E2EC] flex items-center justify-center text-[#6B6B82]",
							children: "✕"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-6",
					children: showInvoice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 rounded-2xl bg-white border border-[#E2E2EC] space-y-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start border-b border-[#E2E2EC] pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-[#111118]",
									children: "NEXUS MARKETPLACE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#6B6B82]",
									children: "Official Order Invoice & Receipt"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono font-bold text-sm text-[#E8450A]",
										children: order.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#6B6B82]",
										children: ["Date: ", order.date]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-[#111118] uppercase tracking-wide text-[10px] mb-1",
										children: "Customer / Billed To:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-[#111118]",
										children: order.customer
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[#6B6B82]",
										children: order.customerDetails?.email ?? "customer@example.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[#6B6B82]",
										children: order.customerDetails?.phone ?? "+1 (555) 019-2831"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[#6B6B82] mt-1",
										children: "123 Logistics Ave, Suite 400, New York, NY 10001"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-[#111118] uppercase tracking-wide text-[10px] mb-1",
										children: "Vendor / Seller:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-[#111118]",
										children: order.vendor
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[#6B6B82]",
										children: ["Payment: ", order.payment]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[#059669] font-bold mt-1",
										children: ["Status: ", order.status.toUpperCase()]
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-xs border-t border-[#E2E2EC] pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-[#E2E2EC] text-[#9B9BB8] text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2",
											children: "Item Description"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-center",
											children: "Qty"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-right",
											children: "Price"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-right",
											children: "Total"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-[#F4F4F8]",
									children: order.lineItems?.length ? order.lineItems.map((li, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 font-medium text-[#111118]",
											children: li.product.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-center font-mono",
											children: li.quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-2 text-right font-mono",
											children: ["$", li.unitPrice.toFixed(2)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-2 text-right font-mono font-bold",
											children: ["$", (li.quantity * li.unitPrice).toFixed(2)]
										})
									] }, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 font-medium text-[#111118]",
											children: order.product
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-center font-mono",
											children: order.items
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-2 text-right font-mono",
											children: ["$", (order.amount / order.items).toFixed(2)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-2 text-right font-mono font-bold",
											children: ["$", order.amount.toFixed(2)]
										})
									] })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-[#E2E2EC] pt-4 flex justify-between items-end text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#9B9BB8]",
									children: "Thank you for shopping on Nexus Marketplace."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[#6B6B82]",
											children: ["Subtotal: $", (order.amount * .9).toFixed(2)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[#6B6B82]",
											children: ["Est. Tax & Shipping: $", (order.amount * .1).toFixed(2)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono font-bold text-base text-[#111118]",
											children: ["Total: $", order.amount.toFixed(2)]
										})
									]
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#F9F9FC] border border-[#E2E2EC] rounded-2xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-wider text-[#9B9BB8] mb-4",
									children: "Order Lifecycle Progress"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between",
									children: STATUS_STEPS.map((stepKey, idx) => {
										const isDone = currentStepIdx >= idx || order.status.toLowerCase() === "delivered";
										const isCurrent = currentStepIdx === idx;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 flex flex-col items-center relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${isDone ? "bg-[#059669] text-white" : isCurrent ? "bg-[#E8450A] text-white ring-4 ring-[#E8450A]/20" : "bg-[#E2E2EC] text-[#9B9BB8]"}`,
												children: isDone ? "✓" : idx + 1
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[11px] font-semibold mt-2 capitalize ${isCurrent ? "text-[#E8450A]" : isDone ? "text-[#059669]" : "text-[#9B9BB8]"}`,
												children: stepKey
											})]
										}, stepKey);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 pt-4 border-t border-[#E2E2EC] flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-[#6B6B82]",
										children: ["Current Status: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-[#111118] uppercase",
											children: order.status
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-2",
										children: order.status.toLowerCase() !== "delivered" && order.status.toLowerCase() !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleAdvance(order.status.toLowerCase() === "pending" ? "PROCESSING" : order.status.toLowerCase() === "processing" ? "SHIPPED" : "DELIVERED"),
											disabled: updating,
											className: "px-4 py-1.5 bg-[#E8450A] text-white text-xs font-bold rounded-xl hover:bg-[#C93A07] transition-colors disabled:opacity-50",
											children: updating ? "Updating..." : `Advance to ${order.status.toLowerCase() === "pending" ? "Processing" : order.status.toLowerCase() === "processing" ? "Shipped" : "Delivered"} →`
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wider text-[#9B9BB8]",
										children: "Customer Details"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-sm text-[#111118]",
										children: order.customer
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#6B6B82]",
										children: ["📧 ", order.customerDetails?.email ?? "customer@example.com"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#6B6B82]",
										children: ["📞 ", order.customerDetails?.phone ?? "+1 (555) 234-5678"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wider text-[#9B9BB8]",
										children: "Vendor / Seller"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-sm text-[#111118]",
										children: order.vendor
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#059669] font-semibold",
										children: "✓ Verified Marketplace Merchant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#6B6B82]",
										children: ["Payment: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#111118]",
											children: order.payment
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-wider text-[#9B9BB8]",
								children: "Itemized Purchased Products"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-lg bg-[#E2E2EC] flex items-center justify-center text-xl",
										children: "📦"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-[#111118]",
										children: order.product
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#6B6B82]",
										children: [
											"Qty: ",
											order.items,
											" · Sold by ",
											order.vendor
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono font-bold text-base text-[#111118]",
									children: ["$", order.amount.toFixed(2)]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-wider text-[#9B9BB8]",
									children: "Fulfillment & Tracking"
								}),
								trackingSaved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-2 text-xs text-[#059669] font-bold",
									children: "✓ Tracking info saved!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[11px] font-semibold uppercase text-[#6B6B82]",
										children: "Carrier"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: carrier,
										onChange: (e) => setCarrier(e.target.value),
										className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "FedEx Express" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "DHL Worldwide" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "UPS Ground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "USPS Priority" })
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[11px] font-semibold uppercase text-[#6B6B82]",
										children: "Tracking Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "TRK-881920394",
											value: trackingNum,
											onChange: (e) => setTrackingNum(e.target.value),
											className: "flex-1 h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-mono font-bold outline-none"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleSaveTracking,
											className: "px-3 h-10 rounded-xl bg-[#111118] text-white text-xs font-bold hover:bg-[#E8450A] transition-colors",
											children: "Save"
										})]
									})] })]
								})
							]
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-4 bg-[#F9F9FC] border-t border-[#E2E2EC] flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "px-5 py-2.5 rounded-xl border border-[#E2E2EC] text-xs font-semibold text-[#6B6B82] hover:bg-[#E2E2EC]",
						children: "Close"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-[#9B9BB8]",
						children: ["Order ID: ", order.id]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/admin/components/CreateOrderModal.tsx
var VENDORS = [
	"SoundVault",
	"TechArmor",
	"SneakerHead",
	"GlowUp Beauty",
	"HomeCraft",
	"iZone Official"
];
function CreateOrderModal({ isOpen, onClose, onSave }) {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [customerName, setCustomerName] = (0, import_react.useState)("Sarah Johnson");
	const [customerEmail, setCustomerEmail] = (0, import_react.useState)("sarah@example.com");
	const [customerPhone, setCustomerPhone] = (0, import_react.useState)("+1 (555) 234-5678");
	const [vendorName, setVendorName] = (0, import_react.useState)("SoundVault");
	const [productTitle, setProductTitle] = (0, import_react.useState)("Sony WH-1000XM5 Wireless Headphones");
	const [itemsCount, setItemsCount] = (0, import_react.useState)("1");
	const [amount, setAmount] = (0, import_react.useState)("349.99");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("Stripe");
	const [status, setStatus] = (0, import_react.useState)("processing");
	if (!isOpen) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!customerName.trim() || !productTitle.trim()) return;
		setSubmitting(true);
		try {
			await onSave({
				id: `ORD-${Math.floor(1e4 + Math.random() * 9e4)}`,
				customer: customerName.trim(),
				vendor: vendorName,
				product: productTitle.trim(),
				amount: parseFloat(amount) || 99.99,
				payment: paymentMethod,
				status: status.toLowerCase(),
				date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				items: parseInt(itemsCount) || 1,
				customerDetails: {
					fullName: customerName.trim(),
					email: customerEmail.trim(),
					phone: customerPhone.trim()
				}
			});
			onClose();
		} finally {
			setSubmitting(false);
		}
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
						children: "🛒"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-[#111118]",
						children: "Create Manual Order"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#6B6B82]",
						children: "Place an order on behalf of a customer"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "text-[#9B9BB8] hover:text-[#111118]",
					children: "✕"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-[#111118] uppercase tracking-wide text-[11px]",
							children: "1. Customer Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#6B6B82]",
								children: "Full Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: customerName,
								onChange: (e) => setCustomerName(e.target.value),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none focus:border-[#E8450A]"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#6B6B82]",
								children: "Email Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: customerEmail,
								onChange: (e) => setCustomerEmail(e.target.value),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none"
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 pt-2 border-t border-[#E2E2EC]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-[#111118] uppercase tracking-wide text-[11px]",
								children: "2. Order Items & Vendor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#6B6B82]",
								children: "Product Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: productTitle,
								onChange: (e) => setProductTitle(e.target.value),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none focus:border-[#E8450A]"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#6B6B82]",
									children: "Vendor / Merchant"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: vendorName,
									onChange: (e) => setVendorName(e.target.value),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none",
									children: VENDORS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: v,
										children: v
									}, v))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-semibold text-[#6B6B82]",
									children: "Total Amount ($)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.01",
									required: true,
									value: amount,
									onChange: (e) => setAmount(e.target.value),
									className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] font-mono font-bold text-sm outline-none"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 pt-2 border-t border-[#E2E2EC]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-[#111118] uppercase tracking-wide text-[11px]",
							children: "3. Payment & Workflow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#6B6B82]",
								children: "Payment Method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: paymentMethod,
								onChange: (e) => setPaymentMethod(e.target.value),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Stripe",
										children: "Stripe Card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "PayPal",
										children: "PayPal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "COD",
										children: "Cash on Delivery"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Bank Transfer",
										children: "Bank Transfer"
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-semibold text-[#6B6B82]",
								children: "Initial Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: status,
								onChange: (e) => setStatus(e.target.value),
								className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-xs font-semibold outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "pending",
										children: "Pending"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "processing",
										children: "Processing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "shipped",
										children: "Shipped"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "delivered",
										children: "Delivered"
									})
								]
							})] })]
						})]
					}),
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
							children: submitting ? "Creating..." : "✓ Create Order"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/admin/pages/OrdersAdmin.tsx
var STATUS = {
	delivered: {
		label: "Delivered",
		cls: "bg-[#D1FAE5] text-[#065F46]"
	},
	shipped: {
		label: "Shipped",
		cls: "bg-[#DBEAFE] text-[#1E40AF]"
	},
	processing: {
		label: "Processing",
		cls: "bg-[#FEF3C7] text-[#92400E]"
	},
	pending: {
		label: "Pending",
		cls: "bg-[#F4F4F8] text-[#5B5B72]"
	},
	cancelled: {
		label: "Cancelled",
		cls: "bg-[#FEE2E2] text-[#991B1B]"
	},
	refund_pending: {
		label: "Refund Pending",
		cls: "bg-[#FEF3C7] text-[#92400E]"
	}
};
var PAYMENT = {
	Stripe: "bg-[#EEF2FF] text-[#4338CA]",
	PayPal: "bg-[#ECFDF5] text-[#065F46]",
	COD: "bg-[#F4F4F8] text-[#5B5B72]",
	"Bank Transfer": "bg-[#EFF6FF] text-[#1E40AF]"
};
function OrdersAdmin({ onNavigate: _ }) {
	const session = useSession();
	const { orders: catalogOrders } = useCatalog();
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [paymentFilter, setPaymentFilter] = (0, import_react.useState)("all");
	const [expandedOrder, setExpandedOrder] = (0, import_react.useState)(null);
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [inspectOrder, setInspectOrder] = (0, import_react.useState)(null);
	const [showCreateModal, setShowCreateModal] = (0, import_react.useState)(false);
	const [trackingMap, setTrackingMap] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			setLoading(true);
			if (session.token) {
				const response = await listAdminOrders(session.token, {
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
				if (catalogOrders.length > 0) {
					const mapped = catalogOrders.map((o) => ({
						id: o.id,
						customer: o.customer,
						vendor: o.vendor,
						product: o.product,
						amount: o.amount,
						status: o.status.toLowerCase(),
						payment: o.payment,
						date: o.date,
						items: o.items
					}));
					setItems(mapped);
				} else setItems([
					{
						id: "ORD-98214",
						customer: "Sarah Johnson",
						vendor: "SoundVault",
						product: "Sony WH-1000XM5 Wireless Headphones",
						amount: 369.98,
						status: "delivered",
						payment: "Stripe",
						date: "2026-08-02",
						items: 2
					},
					{
						id: "ORD-97812",
						customer: "James Wilson",
						vendor: "SneakerHead",
						product: "Nike Air Max 270 Sneakers",
						amount: 129.5,
						status: "shipped",
						payment: "COD",
						date: "2026-07-28",
						items: 1,
						trackingNumber: "TRK-992018"
					},
					{
						id: "ORD-96501",
						customer: "Priya Sharma",
						vendor: "HomeCraft",
						product: "Minimalist Ceramic Tea Set",
						amount: 89,
						status: "processing",
						payment: "Bank Transfer",
						date: "2026-07-14",
						items: 1
					},
					{
						id: "ORD-95400",
						customer: "Ahmed Raza",
						vendor: "iZone Official",
						product: "MacBook Air M3 13\"",
						amount: 1099,
						status: "pending",
						payment: "PayPal",
						date: "2026-07-10",
						items: 1
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
		catalogOrders
	]);
	const filtered = (0, import_react.useMemo)(() => {
		return items.filter((order) => {
			const matchSearch = !search || order.id.toLowerCase().includes(search.toLowerCase()) || order.customer.toLowerCase().includes(search.toLowerCase()) || order.vendor.toLowerCase().includes(search.toLowerCase()) || order.product.toLowerCase().includes(search.toLowerCase());
			const matchStatus = statusFilter === "all" || order.status === statusFilter;
			const matchPayment = paymentFilter === "all" || order.payment === paymentFilter;
			return matchSearch && matchStatus && matchPayment;
		});
	}, [
		items,
		search,
		statusFilter,
		paymentFilter
	]);
	const kpis = (0, import_react.useMemo)(() => {
		return {
			totalRev: items.reduce((s, o) => o.status !== "cancelled" ? s + o.amount : s, 0),
			processing: items.filter((o) => o.status === "processing" || o.status === "pending").length,
			shipped: items.filter((o) => o.status === "shipped").length,
			delivered: items.filter((o) => o.status === "delivered").length,
			count: items.length
		};
	}, [items]);
	const orderCounts = Object.entries(STATUS).map(([key, s]) => ({
		key,
		label: s.label,
		count: items.filter((order) => order.status === key).length
	}));
	const handleAdvanceStatus = async (order, nextStatusOverride) => {
		setBusyId(order.id);
		const nextStatus = nextStatusOverride ?? (order.status === "pending" ? "PROCESSING" : order.status === "processing" ? "SHIPPED" : order.status === "shipped" ? "DELIVERED" : "PROCESSING");
		if (session.token) try {
			await updateAdminOrder(session.token, order.id, { status: nextStatus });
		} catch {}
		setItems((prev) => prev.map((o) => o.id === order.id ? {
			...o,
			status: nextStatus.toLowerCase()
		} : o));
		setBusyId(null);
	};
	const handleCancel = async (order) => {
		setBusyId(order.id);
		if (session.token) try {
			await deleteAdminOrder(session.token, order.id);
		} catch {}
		setItems((prev) => prev.map((o) => o.id === order.id ? {
			...o,
			status: "cancelled"
		} : o));
		setBusyId(null);
	};
	const handleCreateOrder = async (orderData) => {
		const newOrder = {
			id: orderData.id ?? `ORD-${Date.now().toString().slice(-5)}`,
			customer: orderData.customer ?? "Walk-in Customer",
			vendor: orderData.vendor ?? "Marketplace",
			product: orderData.product ?? "Standard Order",
			amount: orderData.amount ?? 99.99,
			status: orderData.status ?? "processing",
			payment: orderData.payment ?? "Stripe",
			date: orderData.date ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			items: orderData.items ?? 1,
			customerDetails: orderData.customerDetails
		};
		if (session.token) try {
			await createAdminOrder(session.token, {
				customerName: newOrder.customer,
				customerEmail: newOrder.customerDetails?.email ?? "",
				vendorName: newOrder.vendor,
				productTitle: newOrder.product,
				amount: newOrder.amount,
				paymentMethod: newOrder.payment,
				status: newOrder.status,
				itemsCount: newOrder.items
			});
		} catch {}
		setItems((prev) => [newOrder, ...prev]);
	};
	const handleExportCSV = () => {
		const headers = "Order ID,Customer,Vendor,Product,Amount,Payment Method,Status,Date\n";
		const rows = filtered.map((o) => `"${o.id}","${o.customer}","${o.vendor}","${o.product}",${o.amount},"${o.payment}","${o.status}","${o.date}"`).join("\n");
		const blob = new Blob([headers + rows], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `orders-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Orders & Fulfillment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-0.5 text-sm text-[#6B6B82]",
					children: [kpis.count, " total orders processed"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleExportCSV,
						className: "rounded-xl border border-[#E2E2EC] px-4 py-2 text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors flex items-center gap-2",
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowCreateModal(true),
						className: "rounded-xl bg-[#E8450A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#C93A07] transition-colors shadow-sm shadow-[#E8450A]/20 flex items-center gap-2",
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
						}), "+ Create Order"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						label: "Total Gross Volume",
						value: `$${kpis.totalRev.toLocaleString(void 0, { minimumFractionDigits: 2 })}`,
						color: "text-[#111118]"
					},
					{
						label: "Processing Queue",
						value: kpis.processing.toString(),
						color: "text-[#D97706]"
					},
					{
						label: "Shipped / In Transit",
						value: kpis.shipped.toString(),
						color: "text-[#1E40AF]"
					},
					{
						label: "Delivered Successfully",
						value: kpis.delivered.toString(),
						color: "text-[#059669]"
					}
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-[#E2E2EC] p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
						children: k.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `font-mono font-black text-2xl mt-1.5 ${k.color}`,
						children: k.value
					})]
				}, k.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 overflow-x-auto pb-1 scroll-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setStatusFilter("all"),
					className: `flex-shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${statusFilter === "all" ? "border-[#0F0F18] bg-[#0F0F18] text-white" : "border-[#E2E2EC] bg-white text-[#6B6B82] hover:border-[#9B9BB8]"}`,
					children: ["All Orders", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `ml-2 rounded-full px-2 py-0.5 text-xs font-bold ${statusFilter === "all" ? "bg-white/20 text-white" : "bg-[#F4F4F8] text-[#6B6B82]"}`,
						children: items.length
					})]
				}), orderCounts.filter((c) => c.count > 0).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setStatusFilter(c.key),
					className: `flex-shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${statusFilter === c.key ? "border-[#0F0F18] bg-[#0F0F18] text-white" : "border-[#E2E2EC] bg-white text-[#6B6B82] hover:border-[#9B9BB8]"}`,
					children: [c.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `ml-2 rounded-full px-1.5 py-0.5 text-xs font-bold ${statusFilter === c.key ? "bg-white/20 text-white" : "bg-[#F4F4F8] text-[#6B6B82]"}`,
						children: c.count
					})]
				}, c.key))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 rounded-2xl border border-[#E2E2EC] bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
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
						placeholder: "Search order ID, customer, vendor, product...",
						value: search,
						onChange: (e) => setSearch(e.target.value),
						className: "h-10 w-full rounded-xl border border-[#E2E2EC] bg-[#F4F4F8] pl-10 pr-4 text-sm outline-none placeholder:text-[#9B9BB8] focus:border-[#E8450A]"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: paymentFilter,
					onChange: (e) => setPaymentFilter(e.target.value),
					className: "h-10 rounded-xl border border-[#E2E2EC] bg-[#F4F4F8] px-3 text-sm text-[#111118] outline-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All Payments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Stripe",
							children: "Stripe Card"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "PayPal",
							children: "PayPal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "COD",
							children: "Cash on Delivery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Bank Transfer",
							children: "Bank Transfer"
						})
					]
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-2xl border border-[#E2E2EC] bg-white shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-[#F4F4F8] bg-[#F9F9FC] text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "w-10 px-4 py-3.5 text-center",
									children: "#"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-left",
									children: "Order ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-left",
									children: "Customer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-left",
									children: "Vendor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-left",
									children: "Purchased Items"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-left",
									children: "Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-left",
									children: "Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-left",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3.5 text-right",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 9,
								className: "px-5 py-12 text-center text-sm text-[#6B6B82]",
								children: "Loading orders..."
							}) }) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 9,
								className: "px-5 py-12 text-center text-sm text-[#6B6B82]",
								children: "No orders match your filter criteria."
							}) }) : filtered.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: `cursor-pointer transition-colors hover:bg-[#F9F9FC] ${expandedOrder === order.id ? "bg-[#FFF7F5]" : ""}`,
								onClick: () => setExpandedOrder(expandedOrder === order.id ? null : order.id),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 text-center text-xs text-[#9B9BB8]",
										onClick: (e) => e.stopPropagation(),
										children: expandedOrder === order.id ? "▼" : "▶"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs font-bold text-[#E8450A]",
											children: order.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[11px] text-[#9B9BB8]",
											children: order.date
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-xs font-bold text-white",
												children: order.customer.charAt(0)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "max-w-[120px] truncate text-xs font-medium text-[#111118]",
												children: order.customer
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#6B6B82] font-semibold",
											children: order.vendor
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-[160px] truncate text-xs font-medium text-[#111118]",
											children: order.product
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-[#9B9BB8]",
											children: [
												order.items,
												" item",
												order.items > 1 ? "s" : ""
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono font-bold text-[#111118]",
											children: ["$", order.amount.toFixed(2)]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${PAYMENT[order.payment] ?? "bg-[#F4F4F8] text-[#6B6B82]"}`,
											children: order.payment
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${STATUS[order.status]?.cls ?? "bg-[#F4F4F8] text-[#6B6B82]"}`,
											children: STATUS[order.status]?.label ?? order.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3.5 text-right",
										onClick: (e) => e.stopPropagation(),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setInspectOrder(order),
													className: "px-2.5 py-1 rounded-lg border border-[#E2E2EC] bg-white text-xs font-semibold text-[#111118] hover:bg-[#F4F4F8] transition-colors",
													title: "Inspect Order & Invoice",
													children: "View Details"
												}),
												order.status !== "delivered" && order.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: busyId === order.id,
													onClick: () => void handleAdvanceStatus(order),
													className: "rounded-lg bg-[#DBEAFE] px-2.5 py-1 text-xs font-semibold text-[#1E40AF] hover:bg-[#BFDBFE] transition-colors",
													children: "Advance"
												}),
												order.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: busyId === order.id,
													onClick: () => void handleCancel(order),
													className: "rounded-lg bg-[#FEE2E2] px-2.5 py-1 text-xs font-semibold text-[#E11D48] hover:bg-[#FECACA] transition-colors",
													children: "Cancel"
												})
											]
										})
									})
								]
							}), expandedOrder === order.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "bg-[#FFF7F5]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 9,
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]",
												children: "Order Status Lifecycle"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-1.5",
												children: [
													{
														label: "Order Placed",
														done: true
													},
													{
														label: "Confirmed",
														done: [
															"processing",
															"shipped",
															"delivered"
														].includes(order.status)
													},
													{
														label: "Packed",
														done: ["shipped", "delivered"].includes(order.status)
													},
													{
														label: "Shipped",
														done: ["shipped", "delivered"].includes(order.status)
													},
													{
														label: "Delivered",
														done: order.status === "delivered"
													}
												].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white ${step.done ? "bg-[#059669]" : "bg-[#E2E2EC]"}`,
														children: step.done ? "✓" : ""
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: step.done ? "font-semibold text-[#111118]" : "text-[#9B9BB8]",
														children: step.label
													})]
												}, i))
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]",
													children: "Customer Info"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-[#111118]",
													children: order.customer
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[#6B6B82]",
													children: order.customerDetails?.email ?? "customer@example.com"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[#6B6B82] mt-0.5",
													children: order.customerDetails?.phone ?? "+1 (555) 234-5678"
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]",
													children: "Fulfillment & Tracking"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-[#111118]",
													children: order.product
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[#6B6B82] mt-0.5",
													children: ["Tracking: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono font-bold text-[#E8450A]",
														children: trackingMap[order.id] || order.trackingNumber || "Pending Assignment"
													})]
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-2 font-bold uppercase tracking-wide text-[#9B9BB8]",
												children: "Actions"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-1.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setInspectOrder(order),
													className: "w-full rounded-xl bg-[#111118] text-white py-2 text-xs font-bold hover:bg-[#E8450A] transition-colors",
													children: "Full Inspector & Invoice"
												})
											})] })
										]
									})
								})
							})] }, order.id))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-[#F4F4F8] px-5 py-3 text-xs text-[#9B9BB8]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Showing ",
						filtered.length,
						" of ",
						items.length,
						" total orders"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-[#111118]",
							children: "Page 1 of 1"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderDetailsModal, {
				order: inspectOrder,
				onClose: () => setInspectOrder(null),
				onUpdateStatus: async (ord, nextSt) => {
					await handleAdvanceStatus(ord, nextSt);
					setInspectOrder((prev) => prev ? {
						...prev,
						status: nextSt.toLowerCase()
					} : null);
				},
				onUpdateTracking: (orderId, trk) => {
					setTrackingMap((prev) => ({
						...prev,
						[orderId]: trk
					}));
					setItems((prev) => prev.map((o) => o.id === orderId ? {
						...o,
						trackingNumber: trk
					} : o));
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateOrderModal, {
				isOpen: showCreateModal,
				onClose: () => setShowCreateModal(false),
				onSave: handleCreateOrder
			})
		]
	});
}
//#endregion
export { OrdersAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJzQWRtaW4tQl9iQTJsak4uanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvT3JkZXJEZXRhaWxzTW9kYWwudHN4IiwiLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvQ3JlYXRlT3JkZXJNb2RhbC50c3giLCIuLi8uLi9zcmMvYWRtaW4vcGFnZXMvT3JkZXJzQWRtaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluT3JkZXIgfSBmcm9tICdAL2FwaS9hZG1pbidcblxudHlwZSBQcm9wcyA9IHtcbiAgb3JkZXI6IEFkbWluT3JkZXIgfCBudWxsXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgb25VcGRhdGVTdGF0dXM6IChvcmRlcjogQWRtaW5PcmRlciwgbmV4dFN0YXR1czogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+XG4gIG9uVXBkYXRlVHJhY2tpbmc6IChvcmRlcklkOiBzdHJpbmcsIHRyYWNraW5nTnVtOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuY29uc3QgU1RBVFVTX1NURVBTID0gWydwZW5kaW5nJywgJ3Byb2Nlc3NpbmcnLCAnc2hpcHBlZCcsICdkZWxpdmVyZWQnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlckRldGFpbHNNb2RhbCh7IG9yZGVyLCBvbkNsb3NlLCBvblVwZGF0ZVN0YXR1cywgb25VcGRhdGVUcmFja2luZyB9OiBQcm9wcykge1xuICBjb25zdCBbdHJhY2tpbmdOdW0sIHNldFRyYWNraW5nTnVtXSA9IHVzZVN0YXRlKG9yZGVyPy50cmFja2luZ051bWJlciA/PyAnJylcbiAgY29uc3QgW2NhcnJpZXIsIHNldENhcnJpZXJdID0gdXNlU3RhdGUoJ0ZlZEV4IEV4cHJlc3MnKVxuICBjb25zdCBbdXBkYXRpbmcsIHNldFVwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdHJhY2tpbmdTYXZlZCwgc2V0VHJhY2tpbmdTYXZlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3dJbnZvaWNlLCBzZXRTaG93SW52b2ljZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBpZiAoIW9yZGVyKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGN1cnJlbnRTdGVwSWR4ID0gU1RBVFVTX1NURVBTLmluZGV4T2Yob3JkZXIuc3RhdHVzLnRvTG93ZXJDYXNlKCkpXG5cbiAgY29uc3QgaGFuZGxlU2F2ZVRyYWNraW5nID0gKCkgPT4ge1xuICAgIG9uVXBkYXRlVHJhY2tpbmcob3JkZXIuaWQsIHRyYWNraW5nTnVtKVxuICAgIHNldFRyYWNraW5nU2F2ZWQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFRyYWNraW5nU2F2ZWQoZmFsc2UpLCAzMDAwKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQWR2YW5jZSA9IGFzeW5jIChuZXh0U3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICBzZXRVcGRhdGluZyh0cnVlKVxuICAgIGF3YWl0IG9uVXBkYXRlU3RhdHVzKG9yZGVyLCBuZXh0U3RhdHVzKVxuICAgIHNldFVwZGF0aW5nKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svNjAgei01MCBiYWNrZHJvcC1ibHVyLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gdy1mdWxsIG1heC13LTN4bCBzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIG1heC1oLVs5MHZoXVwiPlxuXG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtMnhsIGJnLVsjRTg0NTBBXS8xMCBib3JkZXIgYm9yZGVyLVsjRTg0NTBBXS8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LVsjRTg0NTBBXVwiPlxuICAgICAgICAgICAgICDwn5OmXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5PcmRlciBEZXRhaWxzPC9oMj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1zbSBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV1cIj57b3JkZXIuaWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPlBsYWNlZCBvbiB7b3JkZXIuZGF0ZX0gwrcge29yZGVyLml0ZW1zfSBpdGVtKHMpPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW52b2ljZSh2ID0+ICF2KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gaG92ZXI6YmctWyNGNEY0RjhdIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDwn5OEIHtzaG93SW52b2ljZSA/ICdDbG9zZSBJbnZvaWNlJyA6ICdQcmludCBJbnZvaWNlJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1bI0Y0RjRGOF0gaG92ZXI6YmctWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyM2QjZCODJdXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg4pyVXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vZGFsIEJvZHkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBwLTYgc3BhY2UteS02XCI+XG5cbiAgICAgICAgICB7LyogUHJpbnRhYmxlIEludm9pY2UgVmlldyAqL31cbiAgICAgICAgICB7c2hvd0ludm9pY2UgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBzcGFjZS15LTYgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgYm9yZGVyLWIgYm9yZGVyLVsjRTJFMkVDXSBwYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC14bCBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5ORVhVUyBNQVJLRVRQTEFDRTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+T2ZmaWNpYWwgT3JkZXIgSW52b2ljZSAmIFJlY2VpcHQ8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gdGV4dC1bI0U4NDUwQV1cIj57b3JkZXIuaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPkRhdGU6IHtvcmRlci5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00IHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWzEwcHhdIG1iLTFcIj5DdXN0b21lciAvIEJpbGxlZCBUbzo8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e29yZGVyLmN1c3RvbWVyfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM2QjZCODJdXCI+e29yZGVyLmN1c3RvbWVyRGV0YWlscz8uZW1haWwgPz8gJ2N1c3RvbWVyQGV4YW1wbGUuY29tJ308L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QjgyXVwiPntvcmRlci5jdXN0b21lckRldGFpbHM/LnBob25lID8/ICcrMSAoNTU1KSAwMTktMjgzMSd9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzZCNkI4Ml0gbXQtMVwiPjEyMyBMb2dpc3RpY3MgQXZlLCBTdWl0ZSA0MDAsIE5ldyBZb3JrLCBOWSAxMDAwMTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWzEwcHhdIG1iLTFcIj5WZW5kb3IgLyBTZWxsZXI6PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntvcmRlci52ZW5kb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzZCNkI4Ml1cIj5QYXltZW50OiB7b3JkZXIucGF5bWVudH08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjMDU5NjY5XSBmb250LWJvbGQgbXQtMVwiPlN0YXR1czoge29yZGVyLnN0YXR1cy50b1VwcGVyQ2FzZSgpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhzIGJvcmRlci10IGJvcmRlci1bI0UyRTJFQ10gcHQtMlwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItWyNFMkUyRUNdIHRleHQtWyM5QjlCQjhdIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMlwiPkl0ZW0gRGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlclwiPlF0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yIHRleHQtcmlnaHRcIj5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yIHRleHQtcmlnaHRcIj5Ub3RhbDwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgICAgIHtvcmRlci5saW5lSXRlbXM/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIubGluZUl0ZW1zLm1hcCgobGksIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiBmb250LW1lZGl1bSB0ZXh0LVsjMTExMTE4XVwiPntsaS5wcm9kdWN0LnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlciBmb250LW1vbm9cIj57bGkucXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIHRleHQtcmlnaHQgZm9udC1tb25vXCI+JHtsaS51bml0UHJpY2UudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1yaWdodCBmb250LW1vbm8gZm9udC1ib2xkXCI+JHsobGkucXVhbnRpdHkgKiBsaS51bml0UHJpY2UpLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIGZvbnQtbWVkaXVtIHRleHQtWyMxMTExMThdXCI+e29yZGVyLnByb2R1Y3R9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlciBmb250LW1vbm9cIj57b3JkZXIuaXRlbXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiB0ZXh0LXJpZ2h0IGZvbnQtbW9ub1wiPiR7KG9yZGVyLmFtb3VudCAvIG9yZGVyLml0ZW1zKS50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1yaWdodCBmb250LW1vbm8gZm9udC1ib2xkXCI+JHtvcmRlci5hbW91bnQudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLVsjRTJFMkVDXSBwdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF1cIj5UaGFuayB5b3UgZm9yIHNob3BwaW5nIG9uIE5leHVzIE1hcmtldHBsYWNlLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QjgyXVwiPlN1YnRvdGFsOiAkeyhvcmRlci5hbW91bnQgKiAwLjkpLnRvRml4ZWQoMil9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzZCNkI4Ml1cIj5Fc3QuIFRheCAmIFNoaXBwaW5nOiAkeyhvcmRlci5hbW91bnQgKiAwLjEpLnRvRml4ZWQoMil9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzExMTExOF1cIj5Ub3RhbDogJHtvcmRlci5hbW91bnQudG9GaXhlZCgyKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHsvKiBPcmRlciBTdGF0dXMgU3RlcHBlciAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y5RjlGQ10gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC0yeGwgcC01XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtWyM5QjlCQjhdIG1iLTRcIj5PcmRlciBMaWZlY3ljbGUgUHJvZ3Jlc3M8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIHtTVEFUVVNfU1RFUFMubWFwKChzdGVwS2V5LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNEb25lID0gY3VycmVudFN0ZXBJZHggPj0gaWR4IHx8IG9yZGVyLnN0YXR1cy50b0xvd2VyQ2FzZSgpID09PSAnZGVsaXZlcmVkJ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0N1cnJlbnQgPSBjdXJyZW50U3RlcElkeCA9PT0gaWR4XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3N0ZXBLZXl9IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTggaC04IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC14cyB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RvbmUgPyAnYmctWyMwNTk2NjldIHRleHQtd2hpdGUnIDogaXNDdXJyZW50ID8gJ2JnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJpbmctNCByaW5nLVsjRTg0NTBBXS8yMCcgOiAnYmctWyNFMkUyRUNdIHRleHQtWyM5QjlCQjhdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEb25lID8gJ+KckycgOiBpZHggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIG10LTIgY2FwaXRhbGl6ZSAke2lzQ3VycmVudCA/ICd0ZXh0LVsjRTg0NTBBXScgOiBpc0RvbmUgPyAndGV4dC1bIzA1OTY2OV0nIDogJ3RleHQtWyM5QjlCQjhdJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXBLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFF1aWNrIFN0YXR1cyBBZHZhbmNlIEFjdGlvbnMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHB0LTQgYm9yZGVyLXQgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj5DdXJyZW50IFN0YXR1czogPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2VcIj57b3JkZXIuc3RhdHVzfTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7b3JkZXIuc3RhdHVzLnRvTG93ZXJDYXNlKCkgIT09ICdkZWxpdmVyZWQnICYmIG9yZGVyLnN0YXR1cy50b0xvd2VyQ2FzZSgpICE9PSAnY2FuY2VsbGVkJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWR2YW5jZShvcmRlci5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PT0gJ3BlbmRpbmcnID8gJ1BST0NFU1NJTkcnIDogb3JkZXIuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT09ICdwcm9jZXNzaW5nJyA/ICdTSElQUEVEJyA6ICdERUxJVkVSRUQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1cGRhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMS41IGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIHJvdW5kZWQteGwgaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGluZyA/ICdVcGRhdGluZy4uLicgOiBgQWR2YW5jZSB0byAke29yZGVyLnN0YXR1cy50b0xvd2VyQ2FzZSgpID09PSAncGVuZGluZycgPyAnUHJvY2Vzc2luZycgOiBvcmRlci5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PT0gJ3Byb2Nlc3NpbmcnID8gJ1NoaXBwZWQnIDogJ0RlbGl2ZXJlZCd9IOKGkmB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIEN1c3RvbWVyICYgU2hpcHBpbmcgSW5mbyBHcmlkICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzaGFkb3ctc20gc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1bIzlCOUJCOF1cIj5DdXN0b21lciBEZXRhaWxzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gdGV4dC1bIzExMTExOF1cIj57b3JkZXIuY3VzdG9tZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPvCfk6cge29yZGVyLmN1c3RvbWVyRGV0YWlscz8uZW1haWwgPz8gJ2N1c3RvbWVyQGV4YW1wbGUuY29tJ308L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+8J+TniB7b3JkZXIuY3VzdG9tZXJEZXRhaWxzPy5waG9uZSA/PyAnKzEgKDU1NSkgMjM0LTU2NzgnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNoYWRvdy1zbSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LVsjOUI5QkI4XVwiPlZlbmRvciAvIFNlbGxlcjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtWyMxMTExMThdXCI+e29yZGVyLnZlbmRvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyMwNTk2NjldIGZvbnQtc2VtaWJvbGRcIj7inJMgVmVyaWZpZWQgTWFya2V0cGxhY2UgTWVyY2hhbnQ8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+UGF5bWVudDogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWyMxMTExMThdXCI+e29yZGVyLnBheW1lbnR9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIEl0ZW1zIExpc3QgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNoYWRvdy1zbSBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1bIzlCOUJCOF1cIj5JdGVtaXplZCBQdXJjaGFzZWQgUHJvZHVjdHM8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC14bCBiZy1bI0Y5RjlGQ10gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtbGcgYmctWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteGxcIj7wn5OmPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj57b3JkZXIucHJvZHVjdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPlF0eToge29yZGVyLml0ZW1zfSDCtyBTb2xkIGJ5IHtvcmRlci52ZW5kb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzExMTExOF1cIj4ke29yZGVyLmFtb3VudC50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFNoaXBtZW50IFRyYWNraW5nIFNlY3Rpb24gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNoYWRvdy1zbSBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1bIzlCOUJCOF1cIj5GdWxmaWxsbWVudCAmIFRyYWNraW5nPC9wPlxuICAgICAgICAgICAgICAgIHt0cmFja2luZ1NhdmVkICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGMEZERjRdIGJvcmRlciBib3JkZXItWyNCQkY3RDBdIHJvdW5kZWQteGwgcHgtNCBweS0yIHRleHQteHMgdGV4dC1bIzA1OTY2OV0gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIOKckyBUcmFja2luZyBpbmZvIHNhdmVkIVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0ZXh0LVsjNkI2QjgyXVwiPkNhcnJpZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcnJpZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2FycmllcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgaC0xMCBweC0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQteHMgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkZlZEV4IEV4cHJlc3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRITCBXb3JsZHdpZGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlVQUyBHcm91bmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlVTUFMgUHJpb3JpdHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0ZXh0LVsjNkI2QjgyXVwiPlRyYWNraW5nIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRSSy04ODE5MjAzOTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RyYWNraW5nTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VHJhY2tpbmdOdW0oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgaC0xMCByb3VuZGVkLXhsIGJnLVsjMTExMTE4XSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGJnLVsjRjlGOUZDXSBib3JkZXItdCBib3JkZXItWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIuNSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0UyRTJFQ11cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPk9yZGVyIElEOiB7b3JkZXIuaWR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBZG1pbk9yZGVyIH0gZnJvbSAnQC9hcGkvYWRtaW4nXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlzT3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG4gIG9uU2F2ZTogKG9yZGVyRGF0YTogUGFydGlhbDxBZG1pbk9yZGVyPikgPT4gUHJvbWlzZTx2b2lkPlxufVxuXG5jb25zdCBWRU5ET1JTID0gWydTb3VuZFZhdWx0JywgJ1RlY2hBcm1vcicsICdTbmVha2VySGVhZCcsICdHbG93VXAgQmVhdXR5JywgJ0hvbWVDcmFmdCcsICdpWm9uZSBPZmZpY2lhbCddXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZU9yZGVyTW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIG9uU2F2ZSB9OiBQcm9wcykge1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Q3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKCdTYXJhaCBKb2huc29uJylcbiAgY29uc3QgW2N1c3RvbWVyRW1haWwsIHNldEN1c3RvbWVyRW1haWxdID0gdXNlU3RhdGUoJ3NhcmFoQGV4YW1wbGUuY29tJylcbiAgY29uc3QgW2N1c3RvbWVyUGhvbmUsIHNldEN1c3RvbWVyUGhvbmVdID0gdXNlU3RhdGUoJysxICg1NTUpIDIzNC01Njc4JylcbiAgY29uc3QgW3ZlbmRvck5hbWUsIHNldFZlbmRvck5hbWVdID0gdXNlU3RhdGUoJ1NvdW5kVmF1bHQnKVxuICBjb25zdCBbcHJvZHVjdFRpdGxlLCBzZXRQcm9kdWN0VGl0bGVdID0gdXNlU3RhdGUoJ1NvbnkgV0gtMTAwMFhNNSBXaXJlbGVzcyBIZWFkcGhvbmVzJylcbiAgY29uc3QgW2l0ZW1zQ291bnQsIHNldEl0ZW1zQ291bnRdID0gdXNlU3RhdGUoJzEnKVxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJzM0OS45OScpXG4gIGNvbnN0IFtwYXltZW50TWV0aG9kLCBzZXRQYXltZW50TWV0aG9kXSA9IHVzZVN0YXRlKCdTdHJpcGUnKVxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ3Byb2Nlc3NpbmcnKVxuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIWN1c3RvbWVyTmFtZS50cmltKCkgfHwgIXByb2R1Y3RUaXRsZS50cmltKCkpIHJldHVyblxuXG4gICAgc2V0U3VibWl0dGluZyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcmRlcklkID0gYE9SRC0ke01hdGguZmxvb3IoMTAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDApfWBcbiAgICAgIGNvbnN0IHBheWxvYWQ6IFBhcnRpYWw8QWRtaW5PcmRlcj4gPSB7XG4gICAgICAgIGlkOiBvcmRlcklkLFxuICAgICAgICBjdXN0b21lcjogY3VzdG9tZXJOYW1lLnRyaW0oKSxcbiAgICAgICAgdmVuZG9yOiB2ZW5kb3JOYW1lLFxuICAgICAgICBwcm9kdWN0OiBwcm9kdWN0VGl0bGUudHJpbSgpLFxuICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQoYW1vdW50KSB8fCA5OS45OSxcbiAgICAgICAgcGF5bWVudDogcGF5bWVudE1ldGhvZCxcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgICAgaXRlbXM6IHBhcnNlSW50KGl0ZW1zQ291bnQpIHx8IDEsXG4gICAgICAgIGN1c3RvbWVyRGV0YWlsczoge1xuICAgICAgICAgIGZ1bGxOYW1lOiBjdXN0b21lck5hbWUudHJpbSgpLFxuICAgICAgICAgIGVtYWlsOiBjdXN0b21lckVtYWlsLnRyaW0oKSxcbiAgICAgICAgICBwaG9uZTogY3VzdG9tZXJQaG9uZS50cmltKCksXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IG9uU2F2ZShwYXlsb2FkKVxuICAgICAgb25DbG9zZSgpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svNjAgei01MCBiYWNrZHJvcC1ibHVyLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gbWF4LXctbGcgdy1mdWxsIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIHNwYWNlLXktNCBwLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLTJ4bCBiZy1bI0U4NDUwQV0vMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtWyNFODQ1MEFdIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAg8J+bklxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5DcmVhdGUgTWFudWFsIE9yZGVyPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPlBsYWNlIGFuIG9yZGVyIG9uIGJlaGFsZiBvZiBhIGN1c3RvbWVyPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJ0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjMTExMTE4XVwiPuKclTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTQgdGV4dC14c1wiPlxuICAgICAgICAgIHsvKiBDdXN0b21lciBJbmZvICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzExMTExOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bMTFweF1cIj4xLiBDdXN0b21lciBEZXRhaWxzPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5GdWxsIE5hbWUgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyTmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEN1c3RvbWVyTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckVtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q3VzdG9tZXJFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUHJvZHVjdCAmIFZlbmRvciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBwdC0yIGJvcmRlci10IGJvcmRlci1bI0UyRTJFQ11cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsxMXB4XVwiPjIuIE9yZGVyIEl0ZW1zICYgVmVuZG9yPC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5Qcm9kdWN0IE5hbWUgKjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UHJvZHVjdFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC14cyBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5WZW5kb3IgLyBNZXJjaGFudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZlbmRvck5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWZW5kb3JOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgbXQtMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1ZFTkRPUlMubWFwKHYgPT4gPG9wdGlvbiBrZXk9e3Z9IHZhbHVlPXt2fT57dn08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPlRvdGFsIEFtb3VudCAoJCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXNtIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBQYXltZW50ICYgU3RhdHVzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIHB0LTIgYm9yZGVyLXQgYm9yZGVyLVsjRTJFMkVDXVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWyMxMTExMThdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWzExcHhdXCI+My4gUGF5bWVudCAmIFdvcmtmbG93PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5QYXltZW50IE1ldGhvZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXltZW50TWV0aG9kKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgbXQtMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0cmlwZVwiPlN0cmlwZSBDYXJkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGF5UGFsXCI+UGF5UGFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09EXCI+Q2FzaCBvbiBEZWxpdmVyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJhbmsgVHJhbnNmZXJcIj5CYW5rIFRyYW5zZmVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+SW5pdGlhbCBTdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQteHMgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByb2Nlc3NpbmdcIj5Qcm9jZXNzaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hpcHBlZFwiPlNoaXBwZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxpdmVyZWRcIj5EZWxpdmVyZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDb250cm9scyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0zIHJvdW5kZWQteGwgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteHMgaG92ZXI6YmctWyNDOTNBMDddXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N1Ym1pdHRpbmcgPyAnQ3JlYXRpbmcuLi4nIDogJ+KckyBDcmVhdGUgT3JkZXInfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnQC9zdGF0ZS9zZXNzaW9uLXN0b3JlJ1xuaW1wb3J0IHsgdXNlQ2F0YWxvZyB9IGZyb20gJ0Avc3RhdGUvY2F0YWxvZy1zdG9yZSdcbmltcG9ydCBPcmRlckRldGFpbHNNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL09yZGVyRGV0YWlsc01vZGFsJ1xuaW1wb3J0IENyZWF0ZU9yZGVyTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVPcmRlck1vZGFsJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQWRtaW5PcmRlcixcbiAgZGVsZXRlQWRtaW5PcmRlcixcbiAgbGlzdEFkbWluT3JkZXJzLFxuICB1cGRhdGVBZG1pbk9yZGVyLFxuICB0eXBlIEFkbWluT3JkZXIsXG59IGZyb20gJ0AvYXBpL2FkbWluJ1xuXG50eXBlIFByb3BzID0geyBvbk5hdmlnYXRlOiAoczogQWRtaW5TZWN0aW9uKSA9PiB2b2lkIH1cblxuY29uc3QgU1RBVFVTOiBSZWNvcmQ8c3RyaW5nLCB7IGxhYmVsOiBzdHJpbmc7IGNsczogc3RyaW5nIH0+ID0ge1xuICBkZWxpdmVyZWQ6IHsgbGFiZWw6ICdEZWxpdmVyZWQnLCBjbHM6ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nIH0sXG4gIHNoaXBwZWQ6IHsgbGFiZWw6ICdTaGlwcGVkJywgY2xzOiAnYmctWyNEQkVBRkVdIHRleHQtWyMxRTQwQUZdJyB9LFxuICBwcm9jZXNzaW5nOiB7IGxhYmVsOiAnUHJvY2Vzc2luZycsIGNsczogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXScgfSxcbiAgcGVuZGluZzogeyBsYWJlbDogJ1BlbmRpbmcnLCBjbHM6ICdiZy1bI0Y0RjRGOF0gdGV4dC1bIzVCNUI3Ml0nIH0sXG4gIGNhbmNlbGxlZDogeyBsYWJlbDogJ0NhbmNlbGxlZCcsIGNsczogJ2JnLVsjRkVFMkUyXSB0ZXh0LVsjOTkxQjFCXScgfSxcbiAgcmVmdW5kX3BlbmRpbmc6IHsgbGFiZWw6ICdSZWZ1bmQgUGVuZGluZycsIGNsczogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXScgfSxcbn1cblxuY29uc3QgUEFZTUVOVDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgU3RyaXBlOiAnYmctWyNFRUYyRkZdIHRleHQtWyM0MzM4Q0FdJyxcbiAgUGF5UGFsOiAnYmctWyNFQ0ZERjVdIHRleHQtWyMwNjVGNDZdJyxcbiAgQ09EOiAnYmctWyNGNEY0RjhdIHRleHQtWyM1QjVCNzJdJyxcbiAgJ0JhbmsgVHJhbnNmZXInOiAnYmctWyNFRkY2RkZdIHRleHQtWyMxRTQwQUZdJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJzQWRtaW4oeyBvbk5hdmlnYXRlOiBfIH06IFByb3BzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcbiAgY29uc3QgeyBvcmRlcnM6IGNhdGFsb2dPcmRlcnMgfSA9IHVzZUNhdGFsb2coKVxuXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IHVzZVN0YXRlKCdhbGwnKVxuICBjb25zdCBbcGF5bWVudEZpbHRlciwgc2V0UGF5bWVudEZpbHRlcl0gPSB1c2VTdGF0ZSgnYWxsJylcbiAgY29uc3QgW2V4cGFuZGVkT3JkZXIsIHNldEV4cGFuZGVkT3JkZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxBZG1pbk9yZGVyW10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtidXN5SWQsIHNldEJ1c3lJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIC8vIE1vZGFsc1xuICBjb25zdCBbaW5zcGVjdE9yZGVyLCBzZXRJbnNwZWN0T3JkZXJdID0gdXNlU3RhdGU8QWRtaW5PcmRlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtzaG93Q3JlYXRlTW9kYWwsIHNldFNob3dDcmVhdGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBUcmFja2luZyBudW1iZXJzIG1hcFxuICBjb25zdCBbdHJhY2tpbmdNYXAsIHNldFRyYWNraW5nTWFwXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KHt9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBpZiAoc2Vzc2lvbi50b2tlbikge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpc3RBZG1pbk9yZGVycyhzZXNzaW9uLnRva2VuLCB7IHE6IHNlYXJjaCB8fCB1bmRlZmluZWQsIHN0YXR1czogc3RhdHVzRmlsdGVyID09PSAnYWxsJyA/IHVuZGVmaW5lZCA6IHN0YXR1c0ZpbHRlciwgbGltaXQ6IDEwMCB9KVxuICAgICAgICBpZiAoIWNhbmNlbGxlZCAmJiByZXNwb25zZS5zdWNjZXNzICYmIHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldEl0ZW1zKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZhbGxiYWNrIGZyb20gY2F0YWxvZyBvcmRlcnMgb3IgbW9jayBsaXN0XG4gICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICBpZiAoY2F0YWxvZ09yZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgbWFwcGVkOiBBZG1pbk9yZGVyW10gPSBjYXRhbG9nT3JkZXJzLm1hcChvID0+ICh7XG4gICAgICAgICAgICBpZDogby5pZCxcbiAgICAgICAgICAgIGN1c3RvbWVyOiBvLmN1c3RvbWVyLFxuICAgICAgICAgICAgdmVuZG9yOiBvLnZlbmRvcixcbiAgICAgICAgICAgIHByb2R1Y3Q6IG8ucHJvZHVjdCxcbiAgICAgICAgICAgIGFtb3VudDogby5hbW91bnQsXG4gICAgICAgICAgICBzdGF0dXM6IG8uc3RhdHVzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBwYXltZW50OiBvLnBheW1lbnQsXG4gICAgICAgICAgICBkYXRlOiBvLmRhdGUsXG4gICAgICAgICAgICBpdGVtczogby5pdGVtcyxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICBzZXRJdGVtcyhtYXBwZWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0SXRlbXMoW1xuICAgICAgICAgICAgeyBpZDogJ09SRC05ODIxNCcsIGN1c3RvbWVyOiAnU2FyYWggSm9obnNvbicsIHZlbmRvcjogJ1NvdW5kVmF1bHQnLCBwcm9kdWN0OiAnU29ueSBXSC0xMDAwWE01IFdpcmVsZXNzIEhlYWRwaG9uZXMnLCBhbW91bnQ6IDM2OS45OCwgc3RhdHVzOiAnZGVsaXZlcmVkJywgcGF5bWVudDogJ1N0cmlwZScsIGRhdGU6ICcyMDI2LTA4LTAyJywgaXRlbXM6IDIgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdPUkQtOTc4MTInLCBjdXN0b21lcjogJ0phbWVzIFdpbHNvbicsIHZlbmRvcjogJ1NuZWFrZXJIZWFkJywgcHJvZHVjdDogJ05pa2UgQWlyIE1heCAyNzAgU25lYWtlcnMnLCBhbW91bnQ6IDEyOS41MCwgc3RhdHVzOiAnc2hpcHBlZCcsIHBheW1lbnQ6ICdDT0QnLCBkYXRlOiAnMjAyNi0wNy0yOCcsIGl0ZW1zOiAxLCB0cmFja2luZ051bWJlcjogJ1RSSy05OTIwMTgnIH0sXG4gICAgICAgICAgICB7IGlkOiAnT1JELTk2NTAxJywgY3VzdG9tZXI6ICdQcml5YSBTaGFybWEnLCB2ZW5kb3I6ICdIb21lQ3JhZnQnLCBwcm9kdWN0OiAnTWluaW1hbGlzdCBDZXJhbWljIFRlYSBTZXQnLCBhbW91bnQ6IDg5LjAwLCBzdGF0dXM6ICdwcm9jZXNzaW5nJywgcGF5bWVudDogJ0JhbmsgVHJhbnNmZXInLCBkYXRlOiAnMjAyNi0wNy0xNCcsIGl0ZW1zOiAxIH0sXG4gICAgICAgICAgICB7IGlkOiAnT1JELTk1NDAwJywgY3VzdG9tZXI6ICdBaG1lZCBSYXphJywgdmVuZG9yOiAnaVpvbmUgT2ZmaWNpYWwnLCBwcm9kdWN0OiAnTWFjQm9vayBBaXIgTTMgMTNcIicsIGFtb3VudDogMTA5OS4wMCwgc3RhdHVzOiAncGVuZGluZycsIHBheW1lbnQ6ICdQYXlQYWwnLCBkYXRlOiAnMjAyNi0wNy0xMCcsIGl0ZW1zOiAxIH0sXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH0pKClcblxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxuICB9LCBbc2Vzc2lvbi50b2tlbiwgc2VhcmNoLCBzdGF0dXNGaWx0ZXIsIGNhdGFsb2dPcmRlcnNdKVxuXG4gIGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihvcmRlciA9PiB7XG4gICAgICBjb25zdCBtYXRjaFNlYXJjaCA9XG4gICAgICAgICFzZWFyY2ggfHxcbiAgICAgICAgb3JkZXIuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgb3JkZXIuY3VzdG9tZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgb3JkZXIudmVuZG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgIG9yZGVyLnByb2R1Y3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgIGNvbnN0IG1hdGNoU3RhdHVzID0gc3RhdHVzRmlsdGVyID09PSAnYWxsJyB8fCBvcmRlci5zdGF0dXMgPT09IHN0YXR1c0ZpbHRlclxuICAgICAgY29uc3QgbWF0Y2hQYXltZW50ID0gcGF5bWVudEZpbHRlciA9PT0gJ2FsbCcgfHwgb3JkZXIucGF5bWVudCA9PT0gcGF5bWVudEZpbHRlclxuICAgICAgcmV0dXJuIG1hdGNoU2VhcmNoICYmIG1hdGNoU3RhdHVzICYmIG1hdGNoUGF5bWVudFxuICAgIH0pXG4gIH0sIFtpdGVtcywgc2VhcmNoLCBzdGF0dXNGaWx0ZXIsIHBheW1lbnRGaWx0ZXJdKVxuXG4gIC8vIEtQSSBjYWxjdWxhdGlvbnNcbiAgY29uc3Qga3BpcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsUmV2ID0gaXRlbXMucmVkdWNlKChzLCBvKSA9PiBvLnN0YXR1cyAhPT0gJ2NhbmNlbGxlZCcgPyBzICsgby5hbW91bnQgOiBzLCAwKVxuICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBpdGVtcy5maWx0ZXIobyA9PiBvLnN0YXR1cyA9PT0gJ3Byb2Nlc3NpbmcnIHx8IG8uc3RhdHVzID09PSAncGVuZGluZycpLmxlbmd0aFxuICAgIGNvbnN0IHNoaXBwZWQgPSBpdGVtcy5maWx0ZXIobyA9PiBvLnN0YXR1cyA9PT0gJ3NoaXBwZWQnKS5sZW5ndGhcbiAgICBjb25zdCBkZWxpdmVyZWQgPSBpdGVtcy5maWx0ZXIobyA9PiBvLnN0YXR1cyA9PT0gJ2RlbGl2ZXJlZCcpLmxlbmd0aFxuICAgIHJldHVybiB7IHRvdGFsUmV2LCBwcm9jZXNzaW5nLCBzaGlwcGVkLCBkZWxpdmVyZWQsIGNvdW50OiBpdGVtcy5sZW5ndGggfVxuICB9LCBbaXRlbXNdKVxuXG4gIGNvbnN0IG9yZGVyQ291bnRzID0gT2JqZWN0LmVudHJpZXMoU1RBVFVTKS5tYXAoKFtrZXksIHNdKSA9PiAoe1xuICAgIGtleSxcbiAgICBsYWJlbDogcy5sYWJlbCxcbiAgICBjb3VudDogaXRlbXMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLnN0YXR1cyA9PT0ga2V5KS5sZW5ndGgsXG4gIH0pKVxuXG4gIGNvbnN0IHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZXNzaW9uLnRva2VuKSByZXR1cm5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpc3RBZG1pbk9yZGVycyhzZXNzaW9uLnRva2VuLCB7IHE6IHNlYXJjaCB8fCB1bmRlZmluZWQsIHN0YXR1czogc3RhdHVzRmlsdGVyID09PSAnYWxsJyA/IHVuZGVmaW5lZCA6IHN0YXR1c0ZpbHRlciwgbGltaXQ6IDEwMCB9KVxuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICBzZXRJdGVtcyhyZXNwb25zZS5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkdmFuY2VTdGF0dXMgPSBhc3luYyAob3JkZXI6IEFkbWluT3JkZXIsIG5leHRTdGF0dXNPdmVycmlkZT86IHN0cmluZykgPT4ge1xuICAgIHNldEJ1c3lJZChvcmRlci5pZClcblxuICAgIGNvbnN0IG5leHRTdGF0dXMgPSBuZXh0U3RhdHVzT3ZlcnJpZGUgPz8gKFxuICAgICAgb3JkZXIuc3RhdHVzID09PSAncGVuZGluZydcbiAgICAgICAgPyAnUFJPQ0VTU0lORydcbiAgICAgICAgOiBvcmRlci5zdGF0dXMgPT09ICdwcm9jZXNzaW5nJ1xuICAgICAgICAgID8gJ1NISVBQRUQnXG4gICAgICAgICAgOiBvcmRlci5zdGF0dXMgPT09ICdzaGlwcGVkJ1xuICAgICAgICAgICAgPyAnREVMSVZFUkVEJ1xuICAgICAgICAgICAgOiAnUFJPQ0VTU0lORydcbiAgICApXG5cbiAgICBpZiAoc2Vzc2lvbi50b2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlQWRtaW5PcmRlcihzZXNzaW9uLnRva2VuLCBvcmRlci5pZCwgeyBzdGF0dXM6IG5leHRTdGF0dXMgYXMgdW5rbm93biBhcyAnUEVORElORycgfSlcbiAgICAgIH0gY2F0Y2ggeyAvKiBkZXYgZmFsbGJhY2sgKi8gfVxuICAgIH1cblxuICAgIHNldEl0ZW1zKHByZXYgPT4gcHJldi5tYXAobyA9PiBvLmlkID09PSBvcmRlci5pZCA/IHsgLi4ubywgc3RhdHVzOiBuZXh0U3RhdHVzLnRvTG93ZXJDYXNlKCkgfSA6IG8pKVxuICAgIHNldEJ1c3lJZChudWxsKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gYXN5bmMgKG9yZGVyOiBBZG1pbk9yZGVyKSA9PiB7XG4gICAgc2V0QnVzeUlkKG9yZGVyLmlkKVxuICAgIGlmIChzZXNzaW9uLnRva2VuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVBZG1pbk9yZGVyKHNlc3Npb24udG9rZW4sIG9yZGVyLmlkKVxuICAgICAgfSBjYXRjaCB7IC8qIGRldiBmYWxsYmFjayAqLyB9XG4gICAgfVxuICAgIHNldEl0ZW1zKHByZXYgPT4gcHJldi5tYXAobyA9PiBvLmlkID09PSBvcmRlci5pZCA/IHsgLi4ubywgc3RhdHVzOiAnY2FuY2VsbGVkJyB9IDogbykpXG4gICAgc2V0QnVzeUlkKG51bGwpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDcmVhdGVPcmRlciA9IGFzeW5jIChvcmRlckRhdGE6IFBhcnRpYWw8QWRtaW5PcmRlcj4pID0+IHtcbiAgICBjb25zdCBuZXdPcmRlcjogQWRtaW5PcmRlciA9IHtcbiAgICAgIGlkOiBvcmRlckRhdGEuaWQgPz8gYE9SRC0ke0RhdGUubm93KCkudG9TdHJpbmcoKS5zbGljZSgtNSl9YCxcbiAgICAgIGN1c3RvbWVyOiBvcmRlckRhdGEuY3VzdG9tZXIgPz8gJ1dhbGstaW4gQ3VzdG9tZXInLFxuICAgICAgdmVuZG9yOiBvcmRlckRhdGEudmVuZG9yID8/ICdNYXJrZXRwbGFjZScsXG4gICAgICBwcm9kdWN0OiBvcmRlckRhdGEucHJvZHVjdCA/PyAnU3RhbmRhcmQgT3JkZXInLFxuICAgICAgYW1vdW50OiBvcmRlckRhdGEuYW1vdW50ID8/IDk5Ljk5LFxuICAgICAgc3RhdHVzOiBvcmRlckRhdGEuc3RhdHVzID8/ICdwcm9jZXNzaW5nJyxcbiAgICAgIHBheW1lbnQ6IG9yZGVyRGF0YS5wYXltZW50ID8/ICdTdHJpcGUnLFxuICAgICAgZGF0ZTogb3JkZXJEYXRhLmRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIGl0ZW1zOiBvcmRlckRhdGEuaXRlbXMgPz8gMSxcbiAgICAgIGN1c3RvbWVyRGV0YWlsczogb3JkZXJEYXRhLmN1c3RvbWVyRGV0YWlscyxcbiAgICB9XG5cbiAgICBpZiAoc2Vzc2lvbi50b2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY3JlYXRlQWRtaW5PcmRlcihzZXNzaW9uLnRva2VuLCB7XG4gICAgICAgICAgY3VzdG9tZXJOYW1lOiBuZXdPcmRlci5jdXN0b21lcixcbiAgICAgICAgICBjdXN0b21lckVtYWlsOiBuZXdPcmRlci5jdXN0b21lckRldGFpbHM/LmVtYWlsID8/ICcnLFxuICAgICAgICAgIHZlbmRvck5hbWU6IG5ld09yZGVyLnZlbmRvcixcbiAgICAgICAgICBwcm9kdWN0VGl0bGU6IG5ld09yZGVyLnByb2R1Y3QsXG4gICAgICAgICAgYW1vdW50OiBuZXdPcmRlci5hbW91bnQsXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogbmV3T3JkZXIucGF5bWVudCxcbiAgICAgICAgICBzdGF0dXM6IG5ld09yZGVyLnN0YXR1cyxcbiAgICAgICAgICBpdGVtc0NvdW50OiBuZXdPcmRlci5pdGVtcyxcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggeyAvKiBmYWxsYmFjayAqLyB9XG4gICAgfVxuXG4gICAgc2V0SXRlbXMocHJldiA9PiBbbmV3T3JkZXIsIC4uLnByZXZdKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXhwb3J0Q1NWID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSAnT3JkZXIgSUQsQ3VzdG9tZXIsVmVuZG9yLFByb2R1Y3QsQW1vdW50LFBheW1lbnQgTWV0aG9kLFN0YXR1cyxEYXRlXFxuJ1xuICAgIGNvbnN0IHJvd3MgPSBmaWx0ZXJlZC5tYXAobyA9PiBgXCIke28uaWR9XCIsXCIke28uY3VzdG9tZXJ9XCIsXCIke28udmVuZG9yfVwiLFwiJHtvLnByb2R1Y3R9XCIsJHtvLmFtb3VudH0sXCIke28ucGF5bWVudH1cIixcIiR7by5zdGF0dXN9XCIsXCIke28uZGF0ZX1cImApLmpvaW4oJ1xcbicpXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtoZWFkZXJzICsgcm93c10sIHsgdHlwZTogJ3RleHQvY3N2JyB9KVxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgYS5ocmVmID0gdXJsXG4gICAgYS5kb3dubG9hZCA9IGBvcmRlcnMtcmVwb3J0LSR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKX0uY3N2YFxuICAgIGEuY2xpY2soKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSBwLTZcIj5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPk9yZGVycyAmIEZ1bGZpbGxtZW50PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wLjUgdGV4dC1zbSB0ZXh0LVsjNkI2QjgyXVwiPntrcGlzLmNvdW50fSB0b3RhbCBvcmRlcnMgcHJvY2Vzc2VkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBvcnRDU1Z9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgMTB2Nm0wIDBsLTMtM20zIDNsMy0zbTIgOEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIEV4cG9ydCBDU1ZcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q3JlYXRlTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy1zbSBzaGFkb3ctWyNFODQ1MEFdLzIwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiA0djE2bTgtOEg0XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICsgQ3JlYXRlIE9yZGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBLUEkgQ2FyZHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAge1tcbiAgICAgICAgICB7IGxhYmVsOiAnVG90YWwgR3Jvc3MgVm9sdW1lJywgdmFsdWU6IGAkJHtrcGlzLnRvdGFsUmV2LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9YCwgY29sb3I6ICd0ZXh0LVsjMTExMTE4XScgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnUHJvY2Vzc2luZyBRdWV1ZScsIHZhbHVlOiBrcGlzLnByb2Nlc3NpbmcudG9TdHJpbmcoKSwgY29sb3I6ICd0ZXh0LVsjRDk3NzA2XScgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnU2hpcHBlZCAvIEluIFRyYW5zaXQnLCB2YWx1ZToga3Bpcy5zaGlwcGVkLnRvU3RyaW5nKCksIGNvbG9yOiAndGV4dC1bIzFFNDBBRl0nIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0RlbGl2ZXJlZCBTdWNjZXNzZnVsbHknLCB2YWx1ZToga3Bpcy5kZWxpdmVyZWQudG9TdHJpbmcoKSwgY29sb3I6ICd0ZXh0LVsjMDU5NjY5XScgfSxcbiAgICAgICAgXS5tYXAoayA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2subGFiZWx9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntrLmxhYmVsfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtMnhsIG10LTEuNSAke2suY29sb3J9YH0+e2sudmFsdWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU3RhdHVzIENoaXBzIFNlbGVjdG9yICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBvdmVyZmxvdy14LWF1dG8gcGItMSBzY3JvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXNGaWx0ZXIoJ2FsbCcpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtc2hyaW5rLTAgcm91bmRlZC14bCBib3JkZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCAke3N0YXR1c0ZpbHRlciA9PT0gJ2FsbCcgPyAnYm9yZGVyLVsjMEYwRjE4XSBiZy1bIzBGMEYxOF0gdGV4dC13aGl0ZScgOiAnYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSB0ZXh0LVsjNkI2QjgyXSBob3Zlcjpib3JkZXItWyM5QjlCQjhdJ31gfVxuICAgICAgICA+XG4gICAgICAgICAgQWxsIE9yZGVyc1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1sLTIgcm91bmRlZC1mdWxsIHB4LTIgcHktMC41IHRleHQteHMgZm9udC1ib2xkICR7c3RhdHVzRmlsdGVyID09PSAnYWxsJyA/ICdiZy13aGl0ZS8yMCB0ZXh0LXdoaXRlJyA6ICdiZy1bI0Y0RjRGOF0gdGV4dC1bIzZCNkI4Ml0nfWB9PlxuICAgICAgICAgICAge2l0ZW1zLmxlbmd0aH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7b3JkZXJDb3VudHMuZmlsdGVyKGMgPT4gYy5jb3VudCA+IDApLm1hcChjID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2Mua2V5fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdHVzRmlsdGVyKGMua2V5KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtc2hyaW5rLTAgcm91bmRlZC14bCBib3JkZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCAke3N0YXR1c0ZpbHRlciA9PT0gYy5rZXkgPyAnYm9yZGVyLVsjMEYwRjE4XSBiZy1bIzBGMEYxOF0gdGV4dC13aGl0ZScgOiAnYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSB0ZXh0LVsjNkI2QjgyXSBob3Zlcjpib3JkZXItWyM5QjlCQjhdJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjLmxhYmVsfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbWwtMiByb3VuZGVkLWZ1bGwgcHgtMS41IHB5LTAuNSB0ZXh0LXhzIGZvbnQtYm9sZCAke3N0YXR1c0ZpbHRlciA9PT0gYy5rZXkgPyAnYmctd2hpdGUvMjAgdGV4dC13aGl0ZScgOiAnYmctWyNGNEY0RjhdIHRleHQtWyM2QjZCODJdJ31gfT5cbiAgICAgICAgICAgICAge2MuY291bnR9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTZWFyY2ggJiBGaWx0ZXIgQ29udHJvbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBwLTQgc2hhZG93LXNtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIG1pbi13LVsyMDBweF1cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMy41IHRvcC0xLzIgaC00IHctNCAtdHJhbnNsYXRlLXktMS8yIHRleHQtWyM5QjlCQjhdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9yZGVyIElELCBjdXN0b21lciwgdmVuZG9yLCBwcm9kdWN0Li4uXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y0RjRGOF0gcGwtMTAgcHItNCB0ZXh0LXNtIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LVsjOUI5QkI4XSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHZhbHVlPXtwYXltZW50RmlsdGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBheW1lbnRGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y0RjRGOF0gcHgtMyB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsIFBheW1lbnRzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0cmlwZVwiPlN0cmlwZSBDYXJkPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBheVBhbFwiPlBheVBhbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT0RcIj5DYXNoIG9uIERlbGl2ZXJ5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJhbmsgVHJhbnNmZXJcIj5CYW5rIFRyYW5zZmVyPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRkVDQUNBXSBiZy1bI0ZFRjJGMl0gcHgtNCBweS0zIHRleHQtc20gdGV4dC1bIzk5MUIxQl1cIj57ZXJyb3J9PC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogVGFibGUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBzaGFkb3ctc21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF0gYmctWyNGOUY5RkNdIHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjOUI5QkI4XVwiPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3LTEwIHB4LTQgcHktMy41IHRleHQtY2VudGVyXCI+IzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMy41IHRleHQtbGVmdFwiPk9yZGVyIElEPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zLjUgdGV4dC1sZWZ0XCI+Q3VzdG9tZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LWxlZnRcIj5WZW5kb3I8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LWxlZnRcIj5QdXJjaGFzZWQgSXRlbXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LWxlZnRcIj5BbW91bnQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LWxlZnRcIj5QYXltZW50PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zLjUgdGV4dC1sZWZ0XCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zLjUgdGV4dC1yaWdodFwiPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs5fSBjbGFzc05hbWU9XCJweC01IHB5LTEyIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1bIzZCNkI4Ml1cIj5cbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBvcmRlcnMuLi5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSA6IGZpbHRlcmVkLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17OX0gY2xhc3NOYW1lPVwicHgtNSBweS0xMiB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtWyM2QjZCODJdXCI+XG4gICAgICAgICAgICAgICAgICAgIE5vIG9yZGVycyBtYXRjaCB5b3VyIGZpbHRlciBjcml0ZXJpYS5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSA6IGZpbHRlcmVkLm1hcChvcmRlciA9PiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17b3JkZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLVsjRjlGOUZDXSAke2V4cGFuZGVkT3JkZXIgPT09IG9yZGVyLmlkID8gJ2JnLVsjRkZGN0Y1XScgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZE9yZGVyKGV4cGFuZGVkT3JkZXIgPT09IG9yZGVyLmlkID8gbnVsbCA6IG9yZGVyLmlkKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41IHRleHQtY2VudGVyIHRleHQteHMgdGV4dC1bIzlCOUJCOF1cIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtleHBhbmRlZE9yZGVyID09PSBvcmRlci5pZCA/ICfilrwnIDogJ+KWtid9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV1cIj57b3JkZXIuaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMC41IHRleHQtWzExcHhdIHRleHQtWyM5QjlCQjhdXCI+e29yZGVyLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC03IHctNyBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzYzNjZGMV0gdG8tWyM4QjVDRjZdIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLmN1c3RvbWVyLmNoYXJBdCgwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXctWzEyMHB4XSB0cnVuY2F0ZSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtWyMxMTExMThdXCI+e29yZGVyLmN1c3RvbWVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXSBmb250LXNlbWlib2xkXCI+e29yZGVyLnZlbmRvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LVsxNjBweF0gdHJ1bmNhdGUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LVsjMTExMTE4XVwiPntvcmRlci5wcm9kdWN0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XVwiPntvcmRlci5pdGVtc30gaXRlbXtvcmRlci5pdGVtcyA+IDEgPyAncycgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj4ke29yZGVyLmFtb3VudC50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIHB4LTIuNSBweS0wLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCAke1BBWU1FTlRbb3JkZXIucGF5bWVudF0gPz8gJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjNkI2QjgyXSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIucGF5bWVudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IHJvdW5kZWQtZnVsbCBweC0yLjUgcHktMC41IHRleHQtWzExcHhdIGZvbnQtYm9sZCAke1NUQVRVU1tvcmRlci5zdGF0dXNdPy5jbHMgPz8gJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjNkI2QjgyXSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7U1RBVFVTW29yZGVyLnN0YXR1c10/LmxhYmVsID8/IG9yZGVyLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMuNSB0ZXh0LXJpZ2h0XCIgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW5zcGVjdE9yZGVyKG9yZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMi41IHB5LTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gaG92ZXI6YmctWyNGNEY0RjhdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJJbnNwZWN0IE9yZGVyICYgSW52b2ljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIuc3RhdHVzICE9PSAnZGVsaXZlcmVkJyAmJiBvcmRlci5zdGF0dXMgIT09ICdjYW5jZWxsZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5SWQgPT09IG9yZGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgaGFuZGxlQWR2YW5jZVN0YXR1cyhvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1bI0RCRUFGRV0gcHgtMi41IHB5LTEgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMxRTQwQUZdIGhvdmVyOmJnLVsjQkZEQkZFXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5zdGF0dXMgIT09ICdjYW5jZWxsZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5SWQgPT09IG9yZGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgaGFuZGxlQ2FuY2VsKG9yZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLVsjRkVFMkUyXSBweC0yLjUgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0UxMUQ0OF0gaG92ZXI6YmctWyNGRUNBQ0FdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICB7LyogSW5saW5lIEV4cGFuZGVkIFF1aWNrIFZpZXcgKi99XG4gICAgICAgICAgICAgICAgICB7ZXhwYW5kZWRPcmRlciA9PT0gb3JkZXIuaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctWyNGRkY3RjVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezl9IGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy00IGdhcC00IHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjOUI5QkI4XVwiPk9yZGVyIFN0YXR1cyBMaWZlY3ljbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ09yZGVyIFBsYWNlZCcsIGRvbmU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0NvbmZpcm1lZCcsIGRvbmU6IFsncHJvY2Vzc2luZycsICdzaGlwcGVkJywgJ2RlbGl2ZXJlZCddLmluY2x1ZGVzKG9yZGVyLnN0YXR1cykgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1BhY2tlZCcsIGRvbmU6IFsnc2hpcHBlZCcsICdkZWxpdmVyZWQnXS5pbmNsdWRlcyhvcmRlci5zdGF0dXMpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTaGlwcGVkJywgZG9uZTogWydzaGlwcGVkJywgJ2RlbGl2ZXJlZCddLmluY2x1ZGVzKG9yZGVyLnN0YXR1cykgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RlbGl2ZXJlZCcsIGRvbmU6IG9yZGVyLnN0YXR1cyA9PT0gJ2RlbGl2ZXJlZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0ubWFwKChzdGVwLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBoLTQgdy00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC1bMTBweF0gdGV4dC13aGl0ZSAke3N0ZXAuZG9uZSA/ICdiZy1bIzA1OTY2OV0nIDogJ2JnLVsjRTJFMkVDXSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5kb25lID8gJ+KckycgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0ZXAuZG9uZSA/ICdmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdJyA6ICd0ZXh0LVsjOUI5QkI4XSd9PntzdGVwLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzlCOUJCOF1cIj5DdXN0b21lciBJbmZvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57b3JkZXIuY3VzdG9tZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM2QjZCODJdXCI+e29yZGVyLmN1c3RvbWVyRGV0YWlscz8uZW1haWwgPz8gJ2N1c3RvbWVyQGV4YW1wbGUuY29tJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzZCNkI4Ml0gbXQtMC41XCI+e29yZGVyLmN1c3RvbWVyRGV0YWlscz8ucGhvbmUgPz8gJysxICg1NTUpIDIzNC01Njc4J308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyM5QjlCQjhdXCI+RnVsZmlsbG1lbnQgJiBUcmFja2luZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e29yZGVyLnByb2R1Y3R9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM2QjZCODJdIG10LTAuNVwiPlRyYWNraW5nOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtWyNFODQ1MEFdXCI+e3RyYWNraW5nTWFwW29yZGVyLmlkXSB8fCBvcmRlci50cmFja2luZ051bWJlciB8fCAnUGVuZGluZyBBc3NpZ25tZW50J308L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjOUI5QkI4XVwiPkFjdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbnNwZWN0T3JkZXIob3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBiZy1bIzExMTExOF0gdGV4dC13aGl0ZSBweS0yIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgSW5zcGVjdG9yICYgSW52b2ljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBGb290ZXIgaW5mbyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLVsjRjRGNEY4XSBweC01IHB5LTMgdGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPlxuICAgICAgICAgIDxwPlNob3dpbmcge2ZpbHRlcmVkLmxlbmd0aH0gb2Yge2l0ZW1zLmxlbmd0aH0gdG90YWwgb3JkZXJzPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5QYWdlIDEgb2YgMTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE9yZGVyIERldGFpbHMgJiBJbnZvaWNlIEluc3BlY3RvciBNb2RhbCAqL31cbiAgICAgIDxPcmRlckRldGFpbHNNb2RhbFxuICAgICAgICBvcmRlcj17aW5zcGVjdE9yZGVyfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJbnNwZWN0T3JkZXIobnVsbCl9XG4gICAgICAgIG9uVXBkYXRlU3RhdHVzPXthc3luYyAob3JkLCBuZXh0U3QpID0+IHtcbiAgICAgICAgICBhd2FpdCBoYW5kbGVBZHZhbmNlU3RhdHVzKG9yZCwgbmV4dFN0KVxuICAgICAgICAgIHNldEluc3BlY3RPcmRlcihwcmV2ID0+IHByZXYgPyB7IC4uLnByZXYsIHN0YXR1czogbmV4dFN0LnRvTG93ZXJDYXNlKCkgfSA6IG51bGwpXG4gICAgICAgIH19XG4gICAgICAgIG9uVXBkYXRlVHJhY2tpbmc9eyhvcmRlcklkLCB0cmspID0+IHtcbiAgICAgICAgICBzZXRUcmFja2luZ01hcChwcmV2ID0+ICh7IC4uLnByZXYsIFtvcmRlcklkXTogdHJrIH0pKVxuICAgICAgICAgIHNldEl0ZW1zKHByZXYgPT4gcHJldi5tYXAobyA9PiBvLmlkID09PSBvcmRlcklkID8geyAuLi5vLCB0cmFja2luZ051bWJlcjogdHJrIH0gOiBvKSlcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBNYW51YWwgT3JkZXIgQ3JlYXRpb24gTW9kYWwgKi99XG4gICAgICA8Q3JlYXRlT3JkZXJNb2RhbFxuICAgICAgICBpc09wZW49e3Nob3dDcmVhdGVNb2RhbH1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0NyZWF0ZU1vZGFsKGZhbHNlKX1cbiAgICAgICAg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