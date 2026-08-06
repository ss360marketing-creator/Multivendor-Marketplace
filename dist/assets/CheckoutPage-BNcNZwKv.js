import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/pages/checkout/CheckoutPageContent.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var SHIPPING_FEE = 9.99;
var TAX_RATE = .08;
var FREE_SHIPPING_THRESHOLD = 75;
var stepLabels = {
	1: "Address",
	2: "Shipping",
	3: "Payment",
	4: "Review"
};
function StepIndicator({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-0 mb-8",
		children: [
			1,
			2,
			3,
			4
		].map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center flex-1 last:flex-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step < current ? "bg-[#059669] text-white" : step === current ? "bg-[#E8450A] text-white shadow-lg shadow-[#E8450A]/30" : "bg-[#F3F2EF] text-[#9CA3AF]"}`,
					children: step < current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2.5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M5 13l4 4L19 7"
						})
					}) : step
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-[11px] font-medium mt-1.5 ${step === current ? "text-[#E8450A]" : step < current ? "text-[#059669]" : "text-[#9CA3AF]"}`,
					children: stepLabels[step]
				})]
			}), idx < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `flex-1 h-0.5 mx-2 mb-5 rounded-full transition-all duration-300 ${step < current ? "bg-[#059669]" : "bg-[#E8E7E2]"}` })]
		}, step))
	});
}
function SectionTitle({ number, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 mb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-8 h-8 rounded-lg bg-[#0E0E0E] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5",
			children: number
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-base font-bold text-[#0E0E0E]",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-[#6B6A66] mt-0.5",
			children: subtitle
		})] })]
	});
}
function InputField({ label, placeholder, type = "text", value, onChange, required, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#E11D48] ml-0.5",
				children: "*"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type,
				placeholder,
				value,
				onChange: (e) => onChange(e.target.value),
				className: `w-full h-11 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none focus:border-[#E8450A] focus:ring-2 focus:ring-[#E8450A]/10 transition-all placeholder:text-[#9CA3AF] ${icon ? "pl-10 pr-4" : "px-4"}`
			})]
		})]
	});
}
function CheckoutPageContent({ items, onNavigate, onClearCart }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [orderPlaced, setOrderPlaced] = (0, import_react.useState)(false);
	const [orderNumber] = (0, import_react.useState)(() => `NXS-${Math.floor(1e5 + Math.random() * 9e5)}`);
	const [placingOrder, setPlacingOrder] = (0, import_react.useState)(false);
	const [addr, setAddr] = (0, import_react.useState)({
		name: "",
		phone: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postal: "",
		country: "Pakistan"
	});
	const [shipMethod, setShipMethod] = (0, import_react.useState)("standard");
	const [payMethod, setPayMethod] = (0, import_react.useState)("card");
	const [card, setCard] = (0, import_react.useState)({
		number: "",
		name: "",
		expiry: "",
		cvv: ""
	});
	const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
	const baseship = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
	const shipCost = shipMethod === "express" ? baseship + 9.99 : shipMethod === "overnight" ? baseship + 19.99 : baseship;
	const tax = subtotal * TAX_RATE;
	const total = subtotal + shipCost + tax;
	const vendorGroups = items.reduce((acc, item) => {
		if (!acc[item.vendor]) acc[item.vendor] = [];
		acc[item.vendor].push(item);
		return acc;
	}, {});
	const handlePlaceOrder = () => {
		setPlacingOrder(true);
		setTimeout(() => {
			setPlacingOrder(false);
			setOrderPlaced(true);
			onClearCart();
		}, 1800);
	};
	if (orderPlaced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[#F9F8F5] min-h-screen flex items-center justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md w-full text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-24 h-24 rounded-full bg-[#F0FDF4] border-4 border-[#BBF7D0] flex items-center justify-center mx-auto mb-6 animate-bounce-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-12 h-12 text-[#059669]",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M5 13l4 4L19 7"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold text-[#0E0E0E] mb-2",
					children: "Order Placed! 🎉"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#6B6A66] mb-1",
					children: "Thank you for your order."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[#9CA3AF] mb-6",
					children: ["Order number: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono font-bold text-[#0E0E0E]",
						children: orderNumber
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-[#E8E7E2] p-5 mb-6 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4",
						children: "Order Tracking"
					}), [
						{
							label: "Order Placed",
							done: true,
							active: false
						},
						{
							label: "Confirmed",
							done: false,
							active: true
						},
						{
							label: "Packed",
							done: false,
							active: false
						},
						{
							label: "Shipped",
							done: false,
							active: false
						},
						{
							label: "Out for Delivery",
							done: false,
							active: false
						},
						{
							label: "Delivered",
							done: false,
							active: false
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? "bg-[#059669]" : s.active ? "bg-[#E8450A] animate-pulse" : "bg-[#F3F2EF]"}`,
								children: s.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4 text-white",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2.5,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M5 13l4 4L19 7"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2.5 h-2.5 rounded-full ${s.active ? "bg-white" : "bg-[#D1D5DB]"}` })
							}), i < 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-0.5 h-5 mt-0.5 mb-0.5 ${s.done ? "bg-[#059669]" : "bg-[#E8E7E2]"}` })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `text-sm pt-1 pb-4 ${s.done ? "font-semibold text-[#059669]" : s.active ? "font-semibold text-[#E8450A]" : "text-[#9CA3AF]"}`,
							children: [s.label, s.active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-xs font-normal",
								children: "(In progress)"
							})]
						})]
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onNavigate({ type: "home" }),
						className: "flex-1 py-3.5 rounded-xl border-2 border-[#0E0E0E] text-sm font-semibold text-[#0E0E0E] hover:bg-[#F3F2EF] transition-colors",
						children: "Continue Shopping"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onNavigate({ type: "home" }),
						className: "flex-1 py-3.5 rounded-xl bg-[#E8450A] text-white text-sm font-semibold hover:bg-[#C93A07] transition-colors",
						children: "Track Order"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onNavigate({ type: "cart" }),
							className: "hover:text-[#E8450A] transition-colors",
							children: "Cart"
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
							children: "Checkout"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-4 h-4 text-[#059669]",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-[#059669]",
						children: "Secure Checkout — SSL Encrypted"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, { current: step }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-[1fr_380px] gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
									number: 1,
									title: "Delivery Address",
									subtitle: "Where should we deliver your order?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
											label: "Full Name",
											placeholder: "Sarah Johnson",
											required: true,
											value: addr.name,
											onChange: (v) => setAddr((a) => ({
												...a,
												name: v
											}))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
											label: "Phone Number",
											placeholder: "+92 300 0000000",
											required: true,
											type: "tel",
											value: addr.phone,
											onChange: (v) => setAddr((a) => ({
												...a,
												phone: v
											}))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "sm:col-span-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
												label: "Street Address",
												placeholder: "House 12, Street 5, Block B",
												required: true,
												value: addr.line1,
												onChange: (v) => setAddr((a) => ({
													...a,
													line1: v
												}))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "sm:col-span-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
												label: "Apartment / Floor (optional)",
												placeholder: "Apt 3B, Floor 2",
												value: addr.line2,
												onChange: (v) => setAddr((a) => ({
													...a,
													line2: v
												}))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
											label: "City",
											placeholder: "Karachi",
											required: true,
											value: addr.city,
											onChange: (v) => setAddr((a) => ({
												...a,
												city: v
											}))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
											label: "State / Province",
											placeholder: "Sindh",
											value: addr.state,
											onChange: (v) => setAddr((a) => ({
												...a,
												state: v
											}))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
											label: "Postal Code",
											placeholder: "74000",
											value: addr.postal,
											onChange: (v) => setAddr((a) => ({
												...a,
												postal: v
											}))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide",
												children: ["Country ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#E11D48]",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: addr.country,
												onChange: (e) => setAddr((a) => ({
													...a,
													country: e.target.value
												})),
												className: "w-full h-11 rounded-xl border border-[#E8E7E2] bg-white px-4 text-sm text-[#0E0E0E] outline-none focus:border-[#E8450A]",
												children: [
													"Pakistan",
													"United States",
													"United Kingdom",
													"UAE",
													"India",
													"Canada",
													"Australia"
												].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStep(2),
									disabled: !addr.name || !addr.phone || !addr.line1 || !addr.city,
									className: "mt-6 w-full py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
									children: "Continue to Shipping →"
								})
							]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
									number: 2,
									title: "Shipping Method",
									subtitle: "Choose how fast you want your order."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 p-4 rounded-xl bg-[#F9F8F5] border border-[#E8E7E2] mb-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "w-4 h-4 text-[#E8450A] mt-0.5 flex-shrink-0",
											fill: "none",
											viewBox: "0 0 24 24",
											stroke: "currentColor",
											strokeWidth: 2,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#0E0E0E]",
												children: addr.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-[#6B6A66]",
												children: [
													addr.line1,
													addr.line2 ? `, ${addr.line2}` : "",
													", ",
													addr.city,
													", ",
													addr.country
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setStep(1),
											className: "text-xs text-[#E8450A] font-medium hover:underline",
											children: "Edit"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: [
										{
											key: "standard",
											label: "Standard Delivery",
											sub: "5–7 business days",
											price: subtotal >= FREE_SHIPPING_THRESHOLD ? "Free" : `$${SHIPPING_FEE.toFixed(2)}`,
											tag: ""
										},
										{
											key: "express",
											label: "Express Delivery",
											sub: "2–3 business days",
											price: `$${19.98.toFixed(2)}`,
											tag: "Popular"
										},
										{
											key: "overnight",
											label: "Overnight Delivery",
											sub: "Next business day",
											price: `$${29.979999999999997.toFixed(2)}`,
											tag: "Fastest"
										}
									].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setShipMethod(option.key),
										className: `w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${shipMethod === option.key ? "border-[#E8450A] bg-[#FFF7F5]" : "border-[#E8E7E2] bg-white hover:border-[#0E0E0E]/30"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${shipMethod === option.key ? "border-[#E8450A]" : "border-[#D1D5DB]"}`,
												children: shipMethod === option.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-[#E8450A]" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold text-[#0E0E0E]",
														children: option.label
													}), option.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E8450A] text-white uppercase tracking-wide",
														children: option.tag
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-[#6B6A66] mt-0.5",
													children: option.sub
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-bold text-sm text-[#0E0E0E] flex-shrink-0",
												children: option.price
											})
										]
									}, option.key))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3 mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setStep(1),
										className: "py-3.5 rounded-xl border-2 border-[#E8E7E2] text-sm font-semibold text-[#6B6A66] hover:border-[#0E0E0E] hover:text-[#0E0E0E] transition-colors",
										children: "← Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setStep(3),
										className: "py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-colors",
										children: "Continue to Payment →"
									})]
								})
							]
						}),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-[#E8E7E2] p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
									number: 3,
									title: "Payment Method",
									subtitle: "Choose how you'd like to pay."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-3 mb-6",
									children: [
										{
											key: "card",
											label: "Credit / Debit",
											icon: "💳"
										},
										{
											key: "cod",
											label: "Cash on Delivery",
											icon: "💵"
										},
										{
											key: "bank",
											label: "Bank Transfer",
											icon: "🏦"
										}
									].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setPayMethod(m.key),
										className: `flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${payMethod === m.key ? "border-[#E8450A] bg-[#FFF7F5]" : "border-[#E8E7E2] hover:border-[#0E0E0E]/30"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl",
											children: m.icon
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-[#0E0E0E] text-center leading-tight",
											children: m.label
										})]
									}, m.key))
								}),
								payMethod === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
												label: "Card Number",
												required: true,
												placeholder: "1234  5678  9012  3456",
												value: card.number,
												onChange: (v) => setCard((c) => ({
													...c,
													number: v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim()
												}))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
											label: "Name on Card",
											required: true,
											placeholder: "Sarah Johnson",
											value: card.name,
											onChange: (v) => setCard((c) => ({
												...c,
												name: v
											}))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
												label: "Expiry Date",
												required: true,
												placeholder: "MM / YY",
												value: card.expiry,
												onChange: (v) => setCard((c) => ({
													...c,
													expiry: v
												}))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
												label: "CVV",
												required: true,
												placeholder: "•••",
												type: "password",
												value: card.cvv,
												onChange: (v) => setCard((c) => ({
													...c,
													cvv: v.slice(0, 4)
												}))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-4 h-4 text-[#059669] flex-shrink-0",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-[#059669] font-medium",
												children: "Your payment info is secured with 256-bit SSL encryption."
											})]
										})
									]
								}),
								payMethod === "cod" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#92400E]",
											children: "Cash on Delivery selected"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#92400E]",
											children: "Pay with cash when your order is delivered. Please keep exact change ready."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#92400E]",
											children: ["COD fee: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Free" })]
										})
									]
								}),
								payMethod === "bank" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#1E40AF]",
											children: "Bank Transfer Details"
										}),
										[
											{
												label: "Bank Name",
												value: "Nexus National Bank"
											},
											{
												label: "Account Title",
												value: "Nexus Marketplace Ltd."
											},
											{
												label: "Account Number",
												value: "0123-4567-8901"
											},
											{
												label: "IBAN",
												value: "PK00NXUS0001234567890"
											}
										].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#6B6A66]",
												children: row.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-semibold text-[#0E0E0E]",
												children: row.value
											})]
										}, row.label)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#1E40AF]",
											children: "Transfer the exact amount and share the receipt via chat to confirm your order."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3 mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setStep(2),
										className: "py-3.5 rounded-xl border-2 border-[#E8E7E2] text-sm font-semibold text-[#6B6A66] hover:border-[#0E0E0E] hover:text-[#0E0E0E] transition-colors",
										children: "← Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setStep(4),
										disabled: payMethod === "card" && (!card.number || !card.name || !card.expiry || !card.cvv),
										className: "py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
										children: "Review Order →"
									})]
								})
							]
						}),
						step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-white rounded-2xl border border-[#E8E7E2] p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold text-[#0E0E0E]",
												children: "Delivery Address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setStep(1),
												className: "text-xs text-[#E8450A] font-medium hover:underline",
												children: "Edit"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#0E0E0E]",
											children: addr.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-[#6B6A66]",
											children: addr.phone
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-[#6B6A66]",
											children: [addr.line1, addr.line2 ? `, ${addr.line2}` : ""]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-[#6B6A66]",
											children: [
												addr.city,
												addr.state ? `, ${addr.state}` : "",
												" ",
												addr.postal
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-[#6B6A66]",
											children: addr.country
										})
									]
								}),
								Object.entries(vendorGroups).map(([vName, vItems]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-white rounded-2xl border border-[#E8E7E2] overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 px-5 py-3 border-b border-[#E8E7E2] bg-[#F9F8F5]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3.5 h-3.5 text-[#E8450A]",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-bold text-[#0E0E0E]",
												children: vName
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-auto text-xs text-[#059669] font-semibold",
												children: shipMethod === "overnight" ? "Tomorrow" : shipMethod === "express" ? "2–3 days" : "5–7 days"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-[#E8E7E2]",
										children: vItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 px-5 py-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-14 h-14 rounded-xl overflow-hidden bg-[#F9F8F5] flex-shrink-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: item.image,
														alt: item.title,
														className: "w-full h-full object-cover"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-[#0E0E0E] line-clamp-1",
															children: item.title
														}),
														item.variant && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-[#9CA3AF]",
															children: item.variant
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-xs text-[#6B6A66] mt-0.5",
															children: ["Qty: ", item.quantity]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono font-bold text-sm text-[#0E0E0E] flex-shrink-0",
													children: ["$", (item.price * item.quantity).toFixed(2)]
												})
											]
										}, `${item.id}-${item.variant}`))
									})]
								}, vName)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-white rounded-2xl border border-[#E8E7E2] p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-[#0E0E0E]",
											children: "Payment"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setStep(3),
											className: "text-xs text-[#E8450A] font-medium hover:underline",
											children: "Edit"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[#6B6A66]",
										children: payMethod === "card" ? `•••• •••• •••• ${card.number.replace(/\s/g, "").slice(-4) || "****"}` : payMethod === "cod" ? "Cash on Delivery" : "Bank Transfer"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setStep(3),
										className: "py-3.5 rounded-xl border-2 border-[#E8E7E2] text-sm font-semibold text-[#6B6A66] hover:border-[#0E0E0E] transition-colors",
										children: "← Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handlePlaceOrder,
										disabled: placingOrder,
										className: "py-3.5 rounded-xl bg-[#E8450A] text-white font-bold text-sm hover:bg-[#C93A07] transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-[#E8450A]/20",
										children: placingOrder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "w-4 h-4 animate-spin",
											fill: "none",
											viewBox: "0 0 24 24",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												className: "opacity-25",
												cx: "12",
												cy: "12",
												r: "10",
												stroke: "currentColor",
												strokeWidth: 4
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												className: "opacity-75",
												fill: "currentColor",
												d: "M4 12a8 8 0 018-8v8z"
											})]
										}), "Placing Order..."] }) : "🔒 Place Order"
									})]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-[#E8E7E2] p-5 sticky top-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-bold text-[#0E0E0E] mb-4",
								children: "Order Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 mb-4 max-h-52 overflow-y-auto pr-1",
								children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex-shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-lg overflow-hidden bg-[#F9F8F5]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.image,
													alt: item.title,
													className: "w-full h-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#E8450A] text-white text-[10px] font-bold flex items-center justify-center",
												children: item.quantity
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold text-[#0E0E0E] line-clamp-1",
												children: item.title
											}), item.variant && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#9CA3AF]",
												children: item.variant
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono font-bold text-xs text-[#0E0E0E] flex-shrink-0",
											children: ["$", (item.price * item.quantity).toFixed(2)]
										})
									]
								}, `${item.id}-${item.variant}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-[#E8E7E2] pt-4 space-y-2.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#6B6A66]",
											children: "Subtotal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono font-semibold text-[#0E0E0E]",
											children: ["$", subtotal.toFixed(2)]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[#6B6A66]",
											children: [
												"Shipping (",
												shipMethod,
												")"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-mono font-semibold ${shipCost === 0 ? "text-[#059669]" : "text-[#0E0E0E]"}`,
											children: shipCost === 0 ? "FREE" : `$${shipCost.toFixed(2)}`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#6B6A66]",
											children: "Est. Tax"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono font-semibold text-[#0E0E0E]",
											children: ["$", tax.toFixed(2)]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-[#E8E7E2] pt-3 flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#0E0E0E]",
											children: "Total"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono font-bold text-xl text-[#0E0E0E]",
											children: ["$", total.toFixed(2)]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-3 gap-2 text-center",
								children: [
									{
										icon: "🔒",
										label: "Secure"
									},
									{
										icon: "↩️",
										label: "30d Returns"
									},
									{
										icon: "✓",
										label: "Verified"
									}
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#F9F8F5] rounded-xl p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base",
										children: t.icon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-semibold text-[#6B6A66] mt-0.5",
										children: t.label
									})]
								}, t.label))
							})
						]
					}) })]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/CheckoutPage.tsx
function CheckoutPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutPageContent, { ...props });
}
//#endregion
export { CheckoutPage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tvdXRQYWdlLUJOY05ad0t2LmpzIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9jaGVja291dC9DaGVja291dFBhZ2VDb250ZW50LnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9DaGVja291dFBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFZpZXcgfSBmcm9tICcuLi8uLi9hcHAvbmF2aWdhdGlvbidcbmltcG9ydCB0eXBlIHsgQ2FydEl0ZW0gfSBmcm9tICcuLi8uLi9zdGF0ZS9tYXJrZXRwbGFjZS1zdG9yZSdcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbXM6IENhcnRJdGVtW11cbiAgb25OYXZpZ2F0ZTogKHY6IFZpZXcpID0+IHZvaWRcbiAgb25DbGVhckNhcnQ6ICgpID0+IHZvaWRcbn1cblxudHlwZSBTdGVwID0gMSB8IDIgfCAzIHwgNFxudHlwZSBQYXltZW50TWV0aG9kID0gJ2NhcmQnIHwgJ2NvZCcgfCAnYmFuaydcblxuY29uc3QgU0hJUFBJTkdfRkVFID0gOS45OVxuY29uc3QgVEFYX1JBVEUgPSAwLjA4XG5jb25zdCBGUkVFX1NISVBQSU5HX1RIUkVTSE9MRCA9IDc1XG5cbmNvbnN0IHN0ZXBMYWJlbHM6IFJlY29yZDxTdGVwLCBzdHJpbmc+ID0ge1xuICAxOiAnQWRkcmVzcycsXG4gIDI6ICdTaGlwcGluZycsXG4gIDM6ICdQYXltZW50JyxcbiAgNDogJ1JldmlldycsXG59XG5cbmZ1bmN0aW9uIFN0ZXBJbmRpY2F0b3IoeyBjdXJyZW50IH06IHsgY3VycmVudDogU3RlcCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMCBtYi04XCI+XG4gICAgICB7KFsxLCAyLCAzLCA0XSBhcyBTdGVwW10pLm1hcCgoc3RlcCwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzdGVwfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LTEgbGFzdDpmbGV4LW5vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctOSBoLTkgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICBzdGVwIDwgY3VycmVudCA/ICdiZy1bIzA1OTY2OV0gdGV4dC13aGl0ZScgOlxuICAgICAgICAgICAgICBzdGVwID09PSBjdXJyZW50ID8gJ2JnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctWyNFODQ1MEFdLzMwJyA6XG4gICAgICAgICAgICAgICdiZy1bI0YzRjJFRl0gdGV4dC1bIzlDQTNBRl0nXG4gICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgIHtzdGVwIDwgY3VycmVudCA/IChcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk01IDEzbDQgNEwxOSA3XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgKSA6IHN0ZXB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtWzExcHhdIGZvbnQtbWVkaXVtIG10LTEuNSAke3N0ZXAgPT09IGN1cnJlbnQgPyAndGV4dC1bI0U4NDUwQV0nIDogc3RlcCA8IGN1cnJlbnQgPyAndGV4dC1bIzA1OTY2OV0nIDogJ3RleHQtWyM5Q0EzQUZdJ31gfT5cbiAgICAgICAgICAgICAge3N0ZXBMYWJlbHNbc3RlcF19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lkeCA8IDMgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LTEgaC0wLjUgbXgtMiBtYi01IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtzdGVwIDwgY3VycmVudCA/ICdiZy1bIzA1OTY2OV0nIDogJ2JnLVsjRThFN0UyXSd9YH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFNlY3Rpb25UaXRsZSh7IG51bWJlciwgdGl0bGUsIHN1YnRpdGxlIH06IHsgbnVtYmVyOiBudW1iZXI7IHRpdGxlOiBzdHJpbmc7IHN1YnRpdGxlPzogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgbWItNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtbGcgYmctWyMwRTBFMEVdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgZmxleC1zaHJpbmstMCBtdC0wLjVcIj5cbiAgICAgICAge251bWJlcn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57dGl0bGV9PC9oMj5cbiAgICAgICAge3N1YnRpdGxlICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkE2Nl0gbXQtMC41XCI+e3N1YnRpdGxlfTwvcD59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJbnB1dEZpZWxkKHsgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlID0gJ3RleHQnLCB2YWx1ZSwgb25DaGFuZ2UsIHJlcXVpcmVkLCBpY29uIH06IHtcbiAgbGFiZWw6IHN0cmluZzsgcGxhY2Vob2xkZXI6IHN0cmluZzsgdHlwZT86IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZzsgb25DaGFuZ2U6ICh2OiBzdHJpbmcpID0+IHZvaWQ7IHJlcXVpcmVkPzogYm9vbGVhbjsgaWNvbj86IFJlYWN0LlJlYWN0Tm9kZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAge2xhYmVsfXtyZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTExRDQ4XSBtbC0wLjVcIj4qPC9zcGFuPn1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIHtpY29uICYmIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LVsjOUNBM0FGXVwiPntpY29ufTwvZGl2Pn1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGJnLXdoaXRlIHRleHQtc20gdGV4dC1bIzBFMEUwRV0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV0gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctWyNFODQ1MEFdLzEwIHRyYW5zaXRpb24tYWxsIHBsYWNlaG9sZGVyOnRleHQtWyM5Q0EzQUZdICR7aWNvbiA/ICdwbC0xMCBwci00JyA6ICdweC00J31gfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXRQYWdlQ29udGVudCh7IGl0ZW1zLCBvbk5hdmlnYXRlLCBvbkNsZWFyQ2FydCB9OiBQcm9wcykge1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZTxTdGVwPigxKVxuICBjb25zdCBbb3JkZXJQbGFjZWQsIHNldE9yZGVyUGxhY2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbb3JkZXJOdW1iZXJdID0gdXNlU3RhdGUoKCkgPT4gYE5YUy0ke01hdGguZmxvb3IoMTAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMCl9YClcbiAgY29uc3QgW3BsYWNpbmdPcmRlciwgc2V0UGxhY2luZ09yZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIFN0ZXAgMSDigJMgQWRkcmVzc1xuICBjb25zdCBbYWRkciwgc2V0QWRkcl0gPSB1c2VTdGF0ZSh7IG5hbWU6ICcnLCBwaG9uZTogJycsIGxpbmUxOiAnJywgbGluZTI6ICcnLCBjaXR5OiAnJywgc3RhdGU6ICcnLCBwb3N0YWw6ICcnLCBjb3VudHJ5OiAnUGFraXN0YW4nIH0pXG4gIC8vIFN0ZXAgMiDigJMgU2hpcHBpbmdcbiAgY29uc3QgW3NoaXBNZXRob2QsIHNldFNoaXBNZXRob2RdID0gdXNlU3RhdGU8J3N0YW5kYXJkJyB8ICdleHByZXNzJyB8ICdvdmVybmlnaHQnPignc3RhbmRhcmQnKVxuICAvLyBTdGVwIDMg4oCTIFBheW1lbnRcbiAgY29uc3QgW3BheU1ldGhvZCwgc2V0UGF5TWV0aG9kXSA9IHVzZVN0YXRlPFBheW1lbnRNZXRob2Q+KCdjYXJkJylcbiAgY29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlU3RhdGUoeyBudW1iZXI6ICcnLCBuYW1lOiAnJywgZXhwaXJ5OiAnJywgY3Z2OiAnJyB9KVxuXG4gIGNvbnN0IHN1YnRvdGFsICAgID0gaXRlbXMucmVkdWNlKChzLCBpKSA9PiBzICsgaS5wcmljZSAqIGkucXVhbnRpdHksIDApXG4gIGNvbnN0IGJhc2VzaGlwICAgID0gc3VidG90YWwgPj0gRlJFRV9TSElQUElOR19USFJFU0hPTEQgPyAwIDogU0hJUFBJTkdfRkVFXG4gIGNvbnN0IHNoaXBDb3N0ICAgID0gc2hpcE1ldGhvZCA9PT0gJ2V4cHJlc3MnID8gYmFzZXNoaXAgKyA5Ljk5IDogc2hpcE1ldGhvZCA9PT0gJ292ZXJuaWdodCcgPyBiYXNlc2hpcCArIDE5Ljk5IDogYmFzZXNoaXBcbiAgY29uc3QgdGF4ICAgICAgICAgPSBzdWJ0b3RhbCAqIFRBWF9SQVRFXG4gIGNvbnN0IHRvdGFsICAgICAgID0gc3VidG90YWwgKyBzaGlwQ29zdCArIHRheFxuXG4gIGNvbnN0IHZlbmRvckdyb3VwcyA9IGl0ZW1zLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBDYXJ0SXRlbVtdPj4oKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmICghYWNjW2l0ZW0udmVuZG9yXSkgYWNjW2l0ZW0udmVuZG9yXSA9IFtdXG4gICAgYWNjW2l0ZW0udmVuZG9yXS5wdXNoKGl0ZW0pXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcblxuICBjb25zdCBoYW5kbGVQbGFjZU9yZGVyID0gKCkgPT4ge1xuICAgIHNldFBsYWNpbmdPcmRlcih0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0UGxhY2luZ09yZGVyKGZhbHNlKVxuICAgICAgc2V0T3JkZXJQbGFjZWQodHJ1ZSlcbiAgICAgIG9uQ2xlYXJDYXJ0KClcbiAgICB9LCAxODAwKVxuICB9XG5cbiAgLy8g4pSA4pSAIE9yZGVyIFN1Y2Nlc3MgU2NyZWVuIOKUgOKUgFxuICBpZiAob3JkZXJQbGFjZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y5RjhGNV0gbWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yNCByb3VuZGVkLWZ1bGwgYmctWyNGMEZERjRdIGJvcmRlci00IGJvcmRlci1bI0JCRjdEMF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi02IGFuaW1hdGUtYm91bmNlLWluXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LVsjMDU5NjY5XVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNSAxM2w0IDRMMTkgN1wiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi0yXCI+T3JkZXIgUGxhY2VkISDwn46JPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QTY2XSBtYi0xXCI+VGhhbmsgeW91IGZvciB5b3VyIG9yZGVyLjwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM5Q0EzQUZdIG1iLTZcIj5cbiAgICAgICAgICAgIE9yZGVyIG51bWJlcjogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPntvcmRlck51bWJlcn08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgey8qIE9yZGVyIFRpbWVsaW5lICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC01IG1iLTYgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtWyM5Q0EzQUZdIG1iLTRcIj5PcmRlciBUcmFja2luZzwvcD5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdPcmRlciBQbGFjZWQnLCBkb25lOiB0cnVlLCBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdDb25maXJtZWQnLCBkb25lOiBmYWxzZSwgYWN0aXZlOiB0cnVlIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdQYWNrZWQnLCBkb25lOiBmYWxzZSwgYWN0aXZlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnU2hpcHBlZCcsIGRvbmU6IGZhbHNlLCBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdPdXQgZm9yIERlbGl2ZXJ5JywgZG9uZTogZmFsc2UsIGFjdGl2ZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0RlbGl2ZXJlZCcsIGRvbmU6IGZhbHNlLCBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgICAgICBdLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy03IGgtNyByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCAke3MuZG9uZSA/ICdiZy1bIzA1OTY2OV0nIDogcy5hY3RpdmUgPyAnYmctWyNFODQ1MEFdIGFuaW1hdGUtcHVsc2UnIDogJ2JnLVsjRjNGMkVGXSd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtzLmRvbmUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtd2hpdGVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk01IDEzbDQgNEwxOSA3XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMi41IGgtMi41IHJvdW5kZWQtZnVsbCAke3MuYWN0aXZlID8gJ2JnLXdoaXRlJyA6ICdiZy1bI0QxRDVEQl0nfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtpIDwgNSAmJiA8ZGl2IGNsYXNzTmFtZT17YHctMC41IGgtNSBtdC0wLjUgbWItMC41ICR7cy5kb25lID8gJ2JnLVsjMDU5NjY5XScgOiAnYmctWyNFOEU3RTJdJ31gfSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXNtIHB0LTEgcGItNCAke3MuZG9uZSA/ICdmb250LXNlbWlib2xkIHRleHQtWyMwNTk2NjldJyA6IHMuYWN0aXZlID8gJ2ZvbnQtc2VtaWJvbGQgdGV4dC1bI0U4NDUwQV0nIDogJ3RleHQtWyM5Q0EzQUZdJ31gfT5cbiAgICAgICAgICAgICAgICAgIHtzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAge3MuYWN0aXZlICYmIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14cyBmb250LW5vcm1hbFwiPihJbiBwcm9ncmVzcyk8L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2hvbWUnIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMy41IHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLVsjMEUwRTBFXSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gaG92ZXI6YmctWyNGM0YyRUZdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGludWUgU2hvcHBpbmdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2hvbWUnIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMy41IHJvdW5kZWQteGwgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRyYWNrIE9yZGVyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOUY4RjVdIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTI4MHB4XSBteC1hdXRvIHB4LTYgcHktOFwiPlxuXG4gICAgICAgIHsvKiBCcmVhZGNydW1iICovfVxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1bIzlDQTNBRl0gbWItNlwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdob21lJyB9KX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5Ib21lPC9idXR0b24+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOSA1bDcgNy03IDdcIiAvPjwvc3ZnPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdjYXJ0JyB9KX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5DYXJ0PC9idXR0b24+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOSA1bDcgNy03IDdcIiAvPjwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwRTBFMEVdIGZvbnQtbWVkaXVtXCI+Q2hlY2tvdXQ8L3NwYW4+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIHsvKiBTZWN1cmUgQmFkZ2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItNlwiPlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjMDU5NjY5XVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDE1djJtLTYgNGgxMmEyIDIgMCAwMDItMnYtNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMnptMTAtMTBWN2E0IDQgMCAwMC04IDB2NGg4elwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMwNTk2NjldXCI+U2VjdXJlIENoZWNrb3V0IOKAlCBTU0wgRW5jcnlwdGVkPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU3RlcCBJbmRpY2F0b3IgKi99XG4gICAgICAgIDxTdGVwSW5kaWNhdG9yIGN1cnJlbnQ9e3N0ZXB9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy1bMWZyXzM4MHB4XSBnYXAtOFwiPlxuXG4gICAgICAgICAgey8qIOKUgOKUgCBMRUZUOiBTdGVwIEZvcm1zIOKUgOKUgCAqL31cbiAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICB7Lyog4pSA4pSAIFNURVAgMTogRGVsaXZlcnkgQWRkcmVzcyDilIDilIAgKi99XG4gICAgICAgICAgICB7c3RlcCA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC02XCI+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSBudW1iZXI9ezF9IHRpdGxlPVwiRGVsaXZlcnkgQWRkcmVzc1wiIHN1YnRpdGxlPVwiV2hlcmUgc2hvdWxkIHdlIGRlbGl2ZXIgeW91ciBvcmRlcj9cIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9XCJGdWxsIE5hbWVcIiBwbGFjZWhvbGRlcj1cIlNhcmFoIEpvaG5zb25cIiByZXF1aXJlZCB2YWx1ZT17YWRkci5uYW1lfSBvbkNoYW5nZT17diA9PiBzZXRBZGRyKGEgPT4gKHsgLi4uYSwgbmFtZTogdiB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBsYWJlbD1cIlBob25lIE51bWJlclwiIHBsYWNlaG9sZGVyPVwiKzkyIDMwMCAwMDAwMDAwXCIgcmVxdWlyZWQgdHlwZT1cInRlbFwiIHZhbHVlPXthZGRyLnBob25lfSBvbkNoYW5nZT17diA9PiBzZXRBZGRyKGEgPT4gKHsgLi4uYSwgcGhvbmU6IHYgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPVwiU3RyZWV0IEFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkhvdXNlIDEyLCBTdHJlZXQgNSwgQmxvY2sgQlwiIHJlcXVpcmVkIHZhbHVlPXthZGRyLmxpbmUxfSBvbkNoYW5nZT17diA9PiBzZXRBZGRyKGEgPT4gKHsgLi4uYSwgbGluZTE6IHYgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9XCJBcGFydG1lbnQgLyBGbG9vciAob3B0aW9uYWwpXCIgcGxhY2Vob2xkZXI9XCJBcHQgM0IsIEZsb29yIDJcIiB2YWx1ZT17YWRkci5saW5lMn0gb25DaGFuZ2U9e3YgPT4gc2V0QWRkcihhID0+ICh7IC4uLmEsIGxpbmUyOiB2IH0pKX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9XCJDaXR5XCIgcGxhY2Vob2xkZXI9XCJLYXJhY2hpXCIgcmVxdWlyZWQgdmFsdWU9e2FkZHIuY2l0eX0gb25DaGFuZ2U9e3YgPT4gc2V0QWRkcihhID0+ICh7IC4uLmEsIGNpdHk6IHYgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9XCJTdGF0ZSAvIFByb3ZpbmNlXCIgcGxhY2Vob2xkZXI9XCJTaW5kaFwiIHZhbHVlPXthZGRyLnN0YXRlfSBvbkNoYW5nZT17diA9PiBzZXRBZGRyKGEgPT4gKHsgLi4uYSwgc3RhdGU6IHYgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9XCJQb3N0YWwgQ29kZVwiIHBsYWNlaG9sZGVyPVwiNzQwMDBcIiB2YWx1ZT17YWRkci5wb3N0YWx9IG9uQ2hhbmdlPXt2ID0+IHNldEFkZHIoYSA9PiAoeyAuLi5hLCBwb3N0YWw6IHYgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+Q291bnRyeSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTExRDQ4XVwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyLmNvdW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QWRkcihhID0+ICh7IC4uLmEsIGNvdW50cnk6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGJnLXdoaXRlIHB4LTQgdGV4dC1zbSB0ZXh0LVsjMEUwRTBFXSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7WydQYWtpc3RhbicsICdVbml0ZWQgU3RhdGVzJywgJ1VuaXRlZCBLaW5nZG9tJywgJ1VBRScsICdJbmRpYScsICdDYW5hZGEnLCAnQXVzdHJhbGlhJ10ubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2N9PntjfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMil9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWFkZHIubmFtZSB8fCAhYWRkci5waG9uZSB8fCAhYWRkci5saW5lMSB8fCAhYWRkci5jaXR5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiB3LWZ1bGwgcHktMy41IHJvdW5kZWQteGwgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc20gaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzIGRpc2FibGVkOm9wYWNpdHktNDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb250aW51ZSB0byBTaGlwcGluZyDihpJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyog4pSA4pSAIFNURVAgMjogU2hpcHBpbmcgTWV0aG9kIOKUgOKUgCAqL31cbiAgICAgICAgICAgIHtzdGVwID09PSAyICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTZcIj5cbiAgICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlIG51bWJlcj17Mn0gdGl0bGU9XCJTaGlwcGluZyBNZXRob2RcIiBzdWJ0aXRsZT1cIkNob29zZSBob3cgZmFzdCB5b3Ugd2FudCB5b3VyIG9yZGVyLlwiIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogRGVsaXZlcnkgYWRkcmVzcyBzdW1tYXJ5ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMyBwLTQgcm91bmRlZC14bCBiZy1bI0Y5RjhGNV0gYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gbWItNVwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyNFODQ1MEFdIG10LTAuNSBmbGV4LXNocmluay0wXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE3LjY1NyAxNi42NTdMMTMuNDE0IDIwLjlhMS45OTggMS45OTggMCAwMS0yLjgyNyAwbC00LjI0NC00LjI0M2E4IDggMCAxMTExLjMxNCAwek0xNSAxMWEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPnthZGRyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdXCI+e2FkZHIubGluZTF9e2FkZHIubGluZTIgPyBgLCAke2FkZHIubGluZTJ9YCA6ICcnfSwge2FkZHIuY2l0eX0sIHthZGRyLmNvdW50cnl9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMSl9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI0U4NDUwQV0gZm9udC1tZWRpdW0gaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnc3RhbmRhcmQnLCBsYWJlbDogJ1N0YW5kYXJkIERlbGl2ZXJ5Jywgc3ViOiAnNeKAkzcgYnVzaW5lc3MgZGF5cycsIHByaWNlOiBzdWJ0b3RhbCA+PSBGUkVFX1NISVBQSU5HX1RIUkVTSE9MRCA/ICdGcmVlJyA6IGAkJHtTSElQUElOR19GRUUudG9GaXhlZCgyKX1gLCB0YWc6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnZXhwcmVzcycsIGxhYmVsOiAnRXhwcmVzcyBEZWxpdmVyeScsIHN1YjogJzLigJMzIGJ1c2luZXNzIGRheXMnLCBwcmljZTogYCQkeyhTSElQUElOR19GRUUgKyA5Ljk5KS50b0ZpeGVkKDIpfWAsIHRhZzogJ1BvcHVsYXInIH0sXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnb3Zlcm5pZ2h0JywgbGFiZWw6ICdPdmVybmlnaHQgRGVsaXZlcnknLCBzdWI6ICdOZXh0IGJ1c2luZXNzIGRheScsIHByaWNlOiBgJCR7KFNISVBQSU5HX0ZFRSArIDE5Ljk5KS50b0ZpeGVkKDIpfWAsIHRhZzogJ0Zhc3Rlc3QnIH0sXG4gICAgICAgICAgICAgICAgICBdLm1hcChvcHRpb24gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24ua2V5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNoaXBNZXRob2Qob3B0aW9uLmtleSBhcyB0eXBlb2Ygc2hpcE1ldGhvZCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtNCByb3VuZGVkLXhsIGJvcmRlci0yIHRleHQtbGVmdCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHtzaGlwTWV0aG9kID09PSBvcHRpb24ua2V5ID8gJ2JvcmRlci1bI0U4NDUwQV0gYmctWyNGRkY3RjVdJyA6ICdib3JkZXItWyNFOEU3RTJdIGJnLXdoaXRlIGhvdmVyOmJvcmRlci1bIzBFMEUwRV0vMzAnfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctNSBoLTUgcm91bmRlZC1mdWxsIGJvcmRlci0yIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgJHtzaGlwTWV0aG9kID09PSBvcHRpb24ua2V5ID8gJ2JvcmRlci1bI0U4NDUwQV0nIDogJ2JvcmRlci1bI0QxRDVEQl0nfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3NoaXBNZXRob2QgPT09IG9wdGlvbi5rZXkgJiYgPGRpdiBjbGFzc05hbWU9XCJ3LTIuNSBoLTIuNSByb3VuZGVkLWZ1bGwgYmctWyNFODQ1MEFdXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+e29wdGlvbi5sYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24udGFnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJvbGQgcHgtMS41IHB5LTAuNSByb3VuZGVkIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e29wdGlvbi50YWd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdIG10LTAuNVwiPntvcHRpb24uc3VifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gdGV4dC1bIzBFMEUwRV0gZmxleC1zaHJpbmstMFwiPntvcHRpb24ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zIG10LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U3RlcCgxKX0gY2xhc3NOYW1lPVwicHktMy41IHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLVsjRThFN0UyXSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkE2Nl0gaG92ZXI6Ym9yZGVyLVsjMEUwRTBFXSBob3Zlcjp0ZXh0LVsjMEUwRTBFXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICDihpAgQmFja1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMyl9IGNsYXNzTmFtZT1cInB5LTMuNSByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXNtIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICBDb250aW51ZSB0byBQYXltZW50IOKGklxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIOKUgOKUgCBTVEVQIDM6IFBheW1lbnQg4pSA4pSAICovfVxuICAgICAgICAgICAge3N0ZXAgPT09IDMgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNlwiPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgbnVtYmVyPXszfSB0aXRsZT1cIlBheW1lbnQgTWV0aG9kXCIgc3VidGl0bGU9XCJDaG9vc2UgaG93IHlvdSdkIGxpa2UgdG8gcGF5LlwiIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogTWV0aG9kIFNlbGVjdG9yICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICB7KFtcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdjYXJkJywgbGFiZWw6ICdDcmVkaXQgLyBEZWJpdCcsIGljb246ICfwn5KzJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2NvZCcsIGxhYmVsOiAnQ2FzaCBvbiBEZWxpdmVyeScsIGljb246ICfwn5K1JyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2JhbmsnLCBsYWJlbDogJ0JhbmsgVHJhbnNmZXInLCBpY29uOiAn8J+PpicgfSxcbiAgICAgICAgICAgICAgICAgIF0gYXMgeyBrZXk6IFBheW1lbnRNZXRob2Q7IGxhYmVsOiBzdHJpbmc7IGljb246IHN0cmluZyB9W10pLm1hcChtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17bS5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGF5TWV0aG9kKG0ua2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBwLTQgcm91bmRlZC14bCBib3JkZXItMiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHtwYXlNZXRob2QgPT09IG0ua2V5ID8gJ2JvcmRlci1bI0U4NDUwQV0gYmctWyNGRkY3RjVdJyA6ICdib3JkZXItWyNFOEU3RTJdIGhvdmVyOmJvcmRlci1bIzBFMEUwRV0vMzAnfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPnttLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSB0ZXh0LWNlbnRlciBsZWFkaW5nLXRpZ2h0XCI+e20ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIENhcmQgRm9ybSAqL31cbiAgICAgICAgICAgICAgICB7cGF5TWV0aG9kID09PSAnY2FyZCcgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmQgTnVtYmVyXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNCAgNTY3OCAgOTAxMiAgMzQ1NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FyZC5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17diA9PiBzZXRDYXJkKGMgPT4gKHsgLi4uYywgbnVtYmVyOiB2LnJlcGxhY2UoL1xcRC9nLCAnJykuc2xpY2UoMCwgMTYpLnJlcGxhY2UoLyguezR9KS9nLCAnJDEgJykudHJpbSgpIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9XCJOYW1lIG9uIENhcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlNhcmFoIEpvaG5zb25cIiB2YWx1ZT17Y2FyZC5uYW1lfSBvbkNoYW5nZT17diA9PiBzZXRDYXJkKGMgPT4gKHsgLi4uYywgbmFtZTogdiB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPVwiRXhwaXJ5IERhdGVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIk1NIC8gWVlcIiB2YWx1ZT17Y2FyZC5leHBpcnl9IG9uQ2hhbmdlPXt2ID0+IHNldENhcmQoYyA9PiAoeyAuLi5jLCBleHBpcnk6IHYgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPVwiQ1ZWXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCLigKLigKLigKJcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17Y2FyZC5jdnZ9IG9uQ2hhbmdlPXt2ID0+IHNldENhcmQoYyA9PiAoeyAuLi5jLCBjdnY6IHYuc2xpY2UoMCwgNCkgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTMgcm91bmRlZC14bCBiZy1bI0YwRkRGNF0gYm9yZGVyIGJvcmRlci1bI0JCRjdEMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1bIzA1OTY2OV0gZmxleC1zaHJpbmstMFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiAxNXYybS02IDRoMTJhMiAyIDAgMDAyLTJ2LTZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJ6bTEwLTEwVjdhNCA0IDAgMDAtOCAwdjRoOHpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzA1OTY2OV0gZm9udC1tZWRpdW1cIj5Zb3VyIHBheW1lbnQgaW5mbyBpcyBzZWN1cmVkIHdpdGggMjU2LWJpdCBTU0wgZW5jcnlwdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHsvKiBDT0QgSW5mbyAqL31cbiAgICAgICAgICAgICAgICB7cGF5TWV0aG9kID09PSAnY29kJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLXhsIGJnLVsjRkZGN0VEXSBib3JkZXIgYm9yZGVyLVsjRkVEN0FBXSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM5MjQwMEVdXCI+Q2FzaCBvbiBEZWxpdmVyeSBzZWxlY3RlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOTI0MDBFXVwiPlBheSB3aXRoIGNhc2ggd2hlbiB5b3VyIG9yZGVyIGlzIGRlbGl2ZXJlZC4gUGxlYXNlIGtlZXAgZXhhY3QgY2hhbmdlIHJlYWR5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOTI0MDBFXVwiPkNPRCBmZWU6IDxzdHJvbmc+RnJlZTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7LyogQmFuayBUcmFuc2ZlciBJbmZvICovfVxuICAgICAgICAgICAgICAgIHtwYXlNZXRob2QgPT09ICdiYW5rJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLXhsIGJnLVsjRUZGNkZGXSBib3JkZXIgYm9yZGVyLVsjQkZEQkZFXSBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMxRTQwQUZdXCI+QmFuayBUcmFuc2ZlciBEZXRhaWxzPC9wPlxuICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdCYW5rIE5hbWUnLCB2YWx1ZTogJ05leHVzIE5hdGlvbmFsIEJhbmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0FjY291bnQgVGl0bGUnLCB2YWx1ZTogJ05leHVzIE1hcmtldHBsYWNlIEx0ZC4nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0FjY291bnQgTnVtYmVyJywgdmFsdWU6ICcwMTIzLTQ1NjctODkwMScgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSUJBTicsIHZhbHVlOiAnUEswME5YVVMwMDAxMjM0NTY3ODkwJyB9LFxuICAgICAgICAgICAgICAgICAgICBdLm1hcChyb3cgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3cubGFiZWx9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM2QjZBNjZdXCI+e3Jvdy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPntyb3cudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bIzFFNDBBRl1cIj5UcmFuc2ZlciB0aGUgZXhhY3QgYW1vdW50IGFuZCBzaGFyZSB0aGUgcmVjZWlwdCB2aWEgY2hhdCB0byBjb25maXJtIHlvdXIgb3JkZXIuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMyBtdC02XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMil9IGNsYXNzTmFtZT1cInB5LTMuNSByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci1bI0U4RTdFMl0gdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZBNjZdIGhvdmVyOmJvcmRlci1bIzBFMEUwRV0gaG92ZXI6dGV4dC1bIzBFMEUwRV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAg4oaQIEJhY2tcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGVwKDQpfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGF5TWV0aG9kID09PSAnY2FyZCcgJiYgKCFjYXJkLm51bWJlciB8fCAhY2FyZC5uYW1lIHx8ICFjYXJkLmV4cGlyeSB8fCAhY2FyZC5jdnYpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zLjUgcm91bmRlZC14bCBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1zbSBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnMgZGlzYWJsZWQ6b3BhY2l0eS00MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZXZpZXcgT3JkZXIg4oaSXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyog4pSA4pSAIFNURVAgNDogUmV2aWV3ICYgUGxhY2UgT3JkZXIg4pSA4pSAICovfVxuICAgICAgICAgICAge3N0ZXAgPT09IDQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIHsvKiBBZGRyZXNzIFN1bW1hcnkgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV1cIj5EZWxpdmVyeSBBZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMSl9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI0U4NDUwQV0gZm9udC1tZWRpdW0gaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57YWRkci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl1cIj57YWRkci5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdXCI+e2FkZHIubGluZTF9e2FkZHIubGluZTIgPyBgLCAke2FkZHIubGluZTJ9YCA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl1cIj57YWRkci5jaXR5fXthZGRyLnN0YXRlID8gYCwgJHthZGRyLnN0YXRlfWAgOiAnJ30ge2FkZHIucG9zdGFsfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl1cIj57YWRkci5jb3VudHJ5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBJdGVtcyBHcm91cGVkIGJ5IFZlbmRvciAqL31cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModmVuZG9yR3JvdXBzKS5tYXAoKFt2TmFtZSwgdkl0ZW1zXSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3ZOYW1lfSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC01IHB5LTMgYm9yZGVyLWIgYm9yZGVyLVsjRThFN0UyXSBiZy1bI0Y5RjhGNV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtWyNFODQ1MEFdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE5IDIxVjVhMiAyIDAgMDAtMi0ySDdhMiAyIDAgMDAtMiAydjE2XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPnt2TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0byB0ZXh0LXhzIHRleHQtWyMwNTk2NjldIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaGlwTWV0aG9kID09PSAnb3Zlcm5pZ2h0JyA/ICdUb21vcnJvdycgOiBzaGlwTWV0aG9kID09PSAnZXhwcmVzcycgPyAnMuKAkzMgZGF5cycgOiAnNeKAkzcgZGF5cyd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNFOEU3RTJdXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3ZJdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7aXRlbS5pZH0tJHtpdGVtLnZhcmlhbnR9YH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHgtNSBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLVsjRjlGOEY1XSBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSBsaW5lLWNsYW1wLTFcIj57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFyaWFudCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5Q0EzQUZdXCI+e2l0ZW0udmFyaWFudH08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkE2Nl0gbXQtMC41XCI+UXR5OiB7aXRlbS5xdWFudGl0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gdGV4dC1bIzBFMEUwRV0gZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIHsvKiBQYXltZW50IHN1bW1hcnkgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV1cIj5QYXltZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMyl9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI0U4NDUwQV0gZm9udC1tZWRpdW0gaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwYXlNZXRob2QgPT09ICdjYXJkJyA/IGDigKLigKLigKLigKIg4oCi4oCi4oCi4oCiIOKAouKAouKAouKAoiAke2NhcmQubnVtYmVyLnJlcGxhY2UoL1xccy9nLCAnJykuc2xpY2UoLTQpIHx8ICcqKioqJ31gIDpcbiAgICAgICAgICAgICAgICAgICAgIHBheU1ldGhvZCA9PT0gJ2NvZCcgPyAnQ2FzaCBvbiBEZWxpdmVyeScgOiAnQmFuayBUcmFuc2Zlcid9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U3RlcCgzKX0gY2xhc3NOYW1lPVwicHktMy41IHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLVsjRThFN0UyXSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkE2Nl0gaG92ZXI6Ym9yZGVyLVsjMEUwRTBFXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICDihpAgQmFja1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsYWNlT3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwbGFjaW5nT3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMuNSByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXNtIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTcwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHNoYWRvdy1sZyBzaGFkb3ctWyNFODQ1MEFdLzIwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3BsYWNpbmdPcmRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IGFuaW1hdGUtc3BpblwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxjaXJjbGUgY2xhc3NOYW1lPVwib3BhY2l0eS0yNVwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezR9IC8+PHBhdGggY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQgMTJhOCA4IDAgMDE4LTh2OHpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2luZyBPcmRlci4uLlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogJ/CflJIgUGxhY2UgT3JkZXInfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiDilIDilIAgUklHSFQ6IFN0aWNreSBPcmRlciBTdW1tYXJ5IOKUgOKUgCAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTUgc3RpY2t5IHRvcC0yNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi00XCI+T3JkZXIgU3VtbWFyeTwvaDI+XG5cbiAgICAgICAgICAgICAgey8qIEl0ZW0gbGlzdCAoY29tcGFjdCkgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1iLTQgbWF4LWgtNTIgb3ZlcmZsb3cteS1hdXRvIHByLTFcIj5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2l0ZW0uaWR9LSR7aXRlbS52YXJpYW50fWB9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGJnLVsjRjlGOEY1XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMS41IC1yaWdodC0xLjUgdy01IGgtNSByb3VuZGVkLWZ1bGwgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgdGV4dC1bMTBweF0gZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIGxpbmUtY2xhbXAtMVwiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YXJpYW50ICYmIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyM5Q0EzQUZdXCI+e2l0ZW0udmFyaWFudH08L3A+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhzIHRleHQtWyMwRTBFMEVdIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLVsjRThFN0UyXSBwdC00IHNwYWNlLXktMi41IHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjNkI2QTY2XVwiPlN1YnRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj4ke3N1YnRvdGFsLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM2QjZBNjZdXCI+U2hpcHBpbmcgKHtzaGlwTWV0aG9kfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bmb250LW1vbm8gZm9udC1zZW1pYm9sZCAke3NoaXBDb3N0ID09PSAwID8gJ3RleHQtWyMwNTk2NjldJyA6ICd0ZXh0LVsjMEUwRTBFXSd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtzaGlwQ29zdCA9PT0gMCA/ICdGUkVFJyA6IGAkJHtzaGlwQ29zdC50b0ZpeGVkKDIpfWB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzZCNkE2Nl1cIj5Fc3QuIFRheDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdXCI+JHt0YXgudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItWyNFOEU3RTJdIHB0LTMgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPlRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtWyMwRTBFMEVdXCI+JHt0b3RhbC50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFRydXN0ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7IGljb246ICfwn5SSJywgbGFiZWw6ICdTZWN1cmUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICfihqnvuI8nLCBsYWJlbDogJzMwZCBSZXR1cm5zJyB9LFxuICAgICAgICAgICAgICAgICAgeyBpY29uOiAn4pyTJywgbGFiZWw6ICdWZXJpZmllZCcgfSxcbiAgICAgICAgICAgICAgICBdLm1hcCh0ID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0LmxhYmVsfSBjbGFzc05hbWU9XCJiZy1bI0Y5RjhGNV0gcm91bmRlZC14bCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+e3QuaWNvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkE2Nl0gbXQtMC41XCI+e3QubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbSB9IGZyb20gJy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuaW1wb3J0IENoZWNrb3V0UGFnZUNvbnRlbnQgZnJvbSAnLi9jaGVja291dC9DaGVja291dFBhZ2VDb250ZW50J1xuXG50eXBlIFByb3BzID0ge1xuICBpdGVtczogQ2FydEl0ZW1bXVxuICBvbk5hdmlnYXRlOiAodjogVmlldykgPT4gdm9pZFxuICBvbkNsZWFyQ2FydDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dFBhZ2UocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiA8Q2hlY2tvdXRQYWdlQ29udGVudCB7Li4ucHJvcHN9IC8+XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFhQSxJQUFNLGVBQWU7QUFDckIsSUFBTSxXQUFXO0FBQ2pCLElBQU0sMEJBQTBCO0FBRWhDLElBQU0sYUFBbUM7Q0FDdkMsR0FBRztDQUNILEdBQUc7Q0FDSCxHQUFHO0NBQ0gsR0FBRztBQUNMO0FBRUEsU0FBUyxjQUFjLEVBQUUsV0FBOEI7Q0FDckQsT0FDRSxpQkFBQSxHQUFBLG1CQUFBLElBQUEsQ0FBQyxPQUFE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