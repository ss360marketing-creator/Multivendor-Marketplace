import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/pages/SettingsAdmin.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var settingsTabs = [
	"General",
	"Payments",
	"Shipping",
	"Notifications",
	"Security",
	"Integrations",
	"API"
];
var paymentMethods = [
	{
		id: "card",
		name: "Credit / Debit Card",
		icon: "💳",
		provider: "Stripe",
		enabled: true,
		testMode: false,
		fee: "2.9% + $0.30"
	},
	{
		id: "wallet",
		name: "Digital Wallets",
		icon: "📱",
		provider: "Stripe",
		enabled: true,
		testMode: false,
		fee: "2.9% + $0.30"
	},
	{
		id: "cod",
		name: "Cash on Delivery",
		icon: "💵",
		provider: "Native",
		enabled: true,
		testMode: false,
		fee: "Fixed $2.00"
	},
	{
		id: "bank",
		name: "Bank Transfer",
		icon: "🏦",
		provider: "Plaid",
		enabled: false,
		testMode: true,
		fee: "1.5%"
	},
	{
		id: "installment",
		name: "Buy Now Pay Later",
		icon: "📆",
		provider: "Affirm",
		enabled: false,
		testMode: true,
		fee: "6% + $0.30"
	}
];
var Toggle = ({ on, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	onClick: () => onChange(!on),
	className: `relative w-10 h-6 rounded-full transition-all flex-shrink-0 ${on ? "bg-[#E8450A]" : "bg-[#D1D5DB]"}`,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${on ? "left-5" : "left-1"}` })
});
function SettingsAdmin({ onNavigate: _ }) {
	const [tab, setTab] = (0, import_react.useState)("General");
	const [payments, setPayments] = (0, import_react.useState)(paymentMethods);
	const togglePayment = (id) => {
		setPayments((prev) => prev.map((p) => p.id === id ? {
			...p,
			enabled: !p.enabled
		} : p));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Platform configuration and preferences"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]",
					children: "Save Changes"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 border-b border-[#E2E2EC] overflow-x-auto",
				children: settingsTabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `flex-shrink-0 px-4 py-3 text-sm font-semibold border-b-2 transition-all -mb-px ${tab === t ? "border-[#E8450A] text-[#E8450A]" : "border-transparent text-[#9B9BB8] hover:text-[#6B6B82]"}`,
					children: t
				}, t))
			}),
			tab === "General" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Store Information"
						}), [
							{
								label: "Store Name",
								value: "Nexus Marketplace"
							},
							{
								label: "Store URL",
								value: "https://nexusmarket.com"
							},
							{
								label: "Support Email",
								value: "support@nexusmarket.com"
							},
							{
								label: "Phone",
								value: "+1 (800) 555-0100"
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: f.value,
								className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
							})]
						}, f.label))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Regional Settings"
						}), [
							{
								label: "Currency",
								type: "select",
								options: [
									"USD - US Dollar",
									"EUR - Euro",
									"GBP - British Pound",
									"AED - UAE Dirham"
								]
							},
							{
								label: "Timezone",
								type: "select",
								options: [
									"(UTC-5) Eastern Time",
									"(UTC+0) UTC",
									"(UTC+4) Dubai",
									"(UTC+8) Singapore"
								]
							},
							{
								label: "Language",
								type: "select",
								options: [
									"English (US)",
									"Arabic",
									"French",
									"Spanish"
								]
							},
							{
								label: "Date Format",
								type: "select",
								options: [
									"MM/DD/YYYY",
									"DD/MM/YYYY",
									"YYYY-MM-DD"
								]
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none",
								children: f.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
							})]
						}, f.label))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Store Features"
						}), [
							{
								label: "Enable Guest Checkout",
								desc: "Allow purchases without account creation",
								on: true
							},
							{
								label: "Enable Wishlist",
								desc: "Let customers save items for later",
								on: true
							},
							{
								label: "Enable Product Reviews",
								desc: "Allow verified purchase reviews",
								on: true
							},
							{
								label: "Enable Compare Products",
								desc: "Side-by-side product comparison",
								on: false
							},
							{
								label: "Maintenance Mode",
								desc: "Temporarily take the store offline",
								on: false
							}
						].map((f) => {
							const [on, setOn] = (0, import_react.useState)(f.on);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-[#111118]",
									children: f.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#9B9BB8]",
									children: f.desc
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									on,
									onChange: setOn
								})]
							}, f.label);
						})]
					})
				]
			}),
			tab === "Payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#FEF3C7] border border-[#FCD34D] rounded-xl px-5 py-3 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-4 h-4 text-[#D97706]",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#92400E]",
						children: "Never expose live API keys in plain text. Use environment variables or a secrets manager."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
					children: payments.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `bg-white rounded-xl border-2 p-5 space-y-4 transition-all ${method.enabled ? "border-[#E8450A]/20" : "border-[#E2E2EC]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: method.icon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-[#111118] text-sm",
										children: method.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#9B9BB8]",
										children: method.provider
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									on: method.enabled,
									onChange: () => togglePayment(method.id)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#9B9BB8]",
										children: "Processing fee"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-semibold text-[#111118]",
										children: method.fee
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#9B9BB8]",
										children: "Mode"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-semibold ${method.testMode ? "text-[#D97706]" : "text-[#059669]"}`,
										children: method.testMode ? "Test" : "Live"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
								children: "Configure"
							})
						]
					}, method.id))
				})]
			}),
			tab === "Security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-[#111118]",
						children: "Security Settings"
					}), [
						{
							label: "Two-Factor Authentication",
							desc: "Require 2FA for all admin accounts",
							on: true
						},
						{
							label: "Login Rate Limiting",
							desc: "Block IPs after 5 failed attempts",
							on: true
						},
						{
							label: "Session Timeout",
							desc: "Auto-logout after 30 minutes of inactivity",
							on: true
						},
						{
							label: "IP Allowlist",
							desc: "Restrict admin access to specific IPs",
							on: false
						},
						{
							label: "Audit Logging",
							desc: "Log all admin actions for compliance",
							on: true
						}
					].map((f) => {
						const [on, setOn] = (0, import_react.useState)(f.on);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111118]",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#9B9BB8]",
								children: f.desc
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on,
								onChange: setOn
							})]
						}, f.label);
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Change Admin Password"
						}),
						[
							"Current Password",
							"New Password",
							"Confirm Password"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: f
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								placeholder: "••••••••",
								className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
							})]
						}, f)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-full py-2.5 bg-[#E8450A] text-white rounded-xl text-sm font-semibold",
							children: "Update Password"
						})
					]
				})]
			}),
			tab === "Shipping" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Shipping Zones"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]",
							children: "+ Add Zone"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							{
								zone: "Domestic (US)",
								methods: [
									"Standard (3–5 days)",
									"Express (1–2 days)",
									"Overnight"
								],
								countries: "United States",
								active: true
							},
							{
								zone: "Europe",
								methods: ["Standard (7–14 days)", "Express (3–5 days)"],
								countries: "EU + UK",
								active: true
							},
							{
								zone: "Middle East",
								methods: ["Standard (10–14 days)"],
								countries: "UAE, KSA, Qatar +8",
								active: true
							},
							{
								zone: "Rest of World",
								methods: ["Standard (14–21 days)"],
								countries: "180+ countries",
								active: false
							}
						].map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between py-3 border-b border-[#F4F4F8] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-[#111118] text-sm",
										children: z.zone
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[11px] font-semibold px-2 py-0.5 rounded-full ${z.active ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#F4F4F8] text-[#9B9BB8]"}`,
										children: z.active ? "Active" : "Inactive"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#9B9BB8] mt-0.5",
									children: z.countries
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1 mt-2",
									children: z.methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] bg-[#EEF2FF] text-[#4338CA] px-2 py-0.5 rounded-full",
										children: m
									}, m))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-xs font-semibold text-[#E8450A] hover:underline flex-shrink-0 ml-4",
								children: "Edit"
							})]
						}, z.zone))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-[#111118]",
						children: "Free Shipping Rules"
					}), [
						{
							label: "Enable free shipping threshold",
							desc: "Automatically waive shipping for eligible orders",
							on: true
						},
						{
							label: "Free shipping minimum",
							desc: "Orders over $75 qualify for free standard shipping",
							on: true
						},
						{
							label: "Free shipping for VIP customers",
							desc: "All VIP segment orders ship free regardless of total",
							on: false
						},
						{
							label: "Apply free shipping to all vendors",
							desc: "Platform absorbs shipping cost across all vendors",
							on: false
						}
					].map((f) => {
						const [on, setOn] = (0, import_react.useState)(f.on);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111118]",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#9B9BB8]",
								children: f.desc
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on,
								onChange: setOn
							})]
						}, f.label);
					})]
				})]
			}),
			tab === "Notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Email Notifications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8]",
							children: "Configure which system events trigger admin emails"
						}),
						[
							{
								label: "New order placed",
								on: true
							},
							{
								label: "New vendor application",
								on: true
							},
							{
								label: "Low stock alert",
								on: true
							},
							{
								label: "Payment failure",
								on: true
							},
							{
								label: "New customer registered",
								on: false
							},
							{
								label: "Vendor payout processed",
								on: true
							},
							{
								label: "Customer review submitted",
								on: false
							},
							{
								label: "Dispute raised",
								on: true
							}
						].map((n) => {
							const [on, setOn] = (0, import_react.useState)(n.on);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-[#111118]",
									children: n.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									on,
									onChange: setOn
								})]
							}, n.label);
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Notification Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: "Admin notification email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: "alerts@nexusmarket.com",
								className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: "Finance notification email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: "finance@nexusmarket.com",
								className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold",
							children: "Save"
						})
					]
				})]
			}),
			tab === "Integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 xl:grid-cols-3 gap-4",
				children: [
					{
						name: "Stripe",
						category: "Payments",
						icon: "💳",
						status: "connected",
						desc: "Payment processing and payouts"
					},
					{
						name: "Shippo",
						category: "Shipping",
						icon: "📦",
						status: "connected",
						desc: "Multi-carrier shipping labels"
					},
					{
						name: "Mailchimp",
						category: "Email",
						icon: "📧",
						status: "disconnected",
						desc: "Email campaigns and automation"
					},
					{
						name: "Google Analytics",
						category: "Analytics",
						icon: "📊",
						status: "connected",
						desc: "Web analytics and conversion tracking"
					},
					{
						name: "Facebook Pixel",
						category: "Ads",
						icon: "📣",
						status: "connected",
						desc: "Ad retargeting and conversion events"
					},
					{
						name: "Zendesk",
						category: "Support",
						icon: "🎧",
						status: "disconnected",
						desc: "Customer support ticketing"
					},
					{
						name: "Twilio",
						category: "SMS",
						icon: "💬",
						status: "disconnected",
						desc: "SMS notifications and OTP"
					},
					{
						name: "Cloudinary",
						category: "Media",
						icon: "🖼️",
						status: "connected",
						desc: "Image optimization and CDN"
					},
					{
						name: "Intercom",
						category: "Chat",
						icon: "💁",
						status: "disconnected",
						desc: "Live chat and customer messaging"
					}
				].map((int) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `bg-white rounded-xl border-2 p-5 space-y-3 ${int.status === "connected" ? "border-[#D1FAE5]" : "border-[#E2E2EC]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl",
									children: int.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-[#111118] text-sm",
									children: int.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#9B9BB8]",
									children: int.category
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[11px] font-semibold px-2 py-0.5 rounded-full ${int.status === "connected" ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#F4F4F8] text-[#9B9BB8]"}`,
								children: int.status === "connected" ? "● Connected" : "○ Not connected"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#6B6B82]",
							children: int.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `w-full py-2 rounded-lg text-xs font-semibold ${int.status === "connected" ? "border border-[#E2E2EC] text-[#6B6B82] hover:bg-[#F4F4F8]" : "bg-[#E8450A] text-white hover:bg-[#C93A07]"}`,
							children: int.status === "connected" ? "Configure" : "Connect"
						})
					]
				}, int.name))
			}),
			tab === "API" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#FEF3C7] border border-[#FCD34D] rounded-xl px-5 py-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-4 h-4 text-[#D97706] flex-shrink-0",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#92400E]",
							children: "Keep API keys secret. Never share or expose them in client-side code."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-[#111118]",
								children: "API Keys"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: [
									{
										label: "Public Key",
										value: "pk_live_nx_••••••••••••••••••••••••",
										env: "Production"
									},
									{
										label: "Secret Key",
										value: "sk_live_nx_••••••••••••••••••••••••",
										env: "Production"
									},
									{
										label: "Webhook Secret",
										value: "whsec_nx_••••••••••••••••••••••••",
										env: "Production"
									}
								].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-semibold text-[#6B6B82] mb-1",
											children: [
												k.label,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-normal text-[#9B9BB8]",
													children: [
														"(",
														k.env,
														")"
													]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-sm text-[#6B6B82] flex-1",
												children: k.value
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "text-xs font-semibold text-[#E8450A] hover:underline flex-shrink-0",
												children: "Reveal"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "mt-5 px-3 py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
										children: "Rotate"
									})]
								}, k.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold",
								children: "Generate New Key"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-[#111118]",
								children: "Webhooks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [{
									url: "https://yourapp.com/webhooks/nexus",
									events: "order.created, order.shipped",
									active: true
								}, {
									url: "https://analytics.yourapp.com/events",
									events: "All events",
									active: false
								}].map((wh) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between py-2.5 border-b border-[#F4F4F8] last:border-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-mono text-[#111118]",
										children: wh.url
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-[#9B9BB8] mt-0.5",
										children: ["Events: ", wh.events]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[11px] font-semibold px-2 py-0.5 rounded-full ${wh.active ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#F4F4F8] text-[#9B9BB8]"}`,
											children: wh.active ? "Active" : "Inactive"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-xs text-[#E8450A] font-semibold hover:underline",
											children: "Edit"
										})]
									})]
								}, wh.url))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
								children: "+ Add Webhook"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { SettingsAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NBZG1pbi1CanJqLWlmWS5qcyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRtaW4vcGFnZXMvU2V0dGluZ3NBZG1pbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQWRtaW5TZWN0aW9uIH0gZnJvbSAnLi4vYWRtaW5EYXRhJ1xuXG50eXBlIFByb3BzID0geyBvbk5hdmlnYXRlOiAoczogQWRtaW5TZWN0aW9uKSA9PiB2b2lkIH1cblxuY29uc3Qgc2V0dGluZ3NUYWJzID0gWydHZW5lcmFsJywgJ1BheW1lbnRzJywgJ1NoaXBwaW5nJywgJ05vdGlmaWNhdGlvbnMnLCAnU2VjdXJpdHknLCAnSW50ZWdyYXRpb25zJywgJ0FQSSddXG5cbmNvbnN0IHBheW1lbnRNZXRob2RzID0gW1xuICB7IGlkOiAnY2FyZCcsIG5hbWU6ICdDcmVkaXQgLyBEZWJpdCBDYXJkJywgaWNvbjogJ/CfkrMnLCBwcm92aWRlcjogJ1N0cmlwZScsIGVuYWJsZWQ6IHRydWUsIHRlc3RNb2RlOiBmYWxzZSwgZmVlOiAnMi45JSArICQwLjMwJyB9LFxuICB7IGlkOiAnd2FsbGV0JywgbmFtZTogJ0RpZ2l0YWwgV2FsbGV0cycsIGljb246ICfwn5OxJywgcHJvdmlkZXI6ICdTdHJpcGUnLCBlbmFibGVkOiB0cnVlLCB0ZXN0TW9kZTogZmFsc2UsIGZlZTogJzIuOSUgKyAkMC4zMCcgfSxcbiAgeyBpZDogJ2NvZCcsIG5hbWU6ICdDYXNoIG9uIERlbGl2ZXJ5JywgaWNvbjogJ/CfkrUnLCBwcm92aWRlcjogJ05hdGl2ZScsIGVuYWJsZWQ6IHRydWUsIHRlc3RNb2RlOiBmYWxzZSwgZmVlOiAnRml4ZWQgJDIuMDAnIH0sXG4gIHsgaWQ6ICdiYW5rJywgbmFtZTogJ0JhbmsgVHJhbnNmZXInLCBpY29uOiAn8J+PpicsIHByb3ZpZGVyOiAnUGxhaWQnLCBlbmFibGVkOiBmYWxzZSwgdGVzdE1vZGU6IHRydWUsIGZlZTogJzEuNSUnIH0sXG4gIHsgaWQ6ICdpbnN0YWxsbWVudCcsIG5hbWU6ICdCdXkgTm93IFBheSBMYXRlcicsIGljb246ICfwn5OGJywgcHJvdmlkZXI6ICdBZmZpcm0nLCBlbmFibGVkOiBmYWxzZSwgdGVzdE1vZGU6IHRydWUsIGZlZTogJzYlICsgJDAuMzAnIH0sXG5dXG5cbmNvbnN0IFRvZ2dsZSA9ICh7IG9uLCBvbkNoYW5nZSB9OiB7IG9uOiBib29sZWFuOyBvbkNoYW5nZTogKHY6IGJvb2xlYW4pID0+IHZvaWQgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoIW9uKX1cbiAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSB3LTEwIGgtNiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZmxleC1zaHJpbmstMCAke29uID8gJ2JnLVsjRTg0NTBBXScgOiAnYmctWyNEMUQ1REJdJ31gfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMSB3LTQgaC00IGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3cgdHJhbnNpdGlvbi1hbGwgJHtvbiA/ICdsZWZ0LTUnIDogJ2xlZnQtMSd9YH0gLz5cbiAgPC9idXR0b24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzQWRtaW4oeyBvbk5hdmlnYXRlOiBfIH06IFByb3BzKSB7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgnR2VuZXJhbCcpXG4gIGNvbnN0IFtwYXltZW50cywgc2V0UGF5bWVudHNdID0gdXNlU3RhdGUocGF5bWVudE1ldGhvZHMpXG5cbiAgY29uc3QgdG9nZ2xlUGF5bWVudCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0UGF5bWVudHMocHJldiA9PiBwcmV2Lm1hcChwID0+IHAuaWQgPT09IGlkID8geyAuLi5wLCBlbmFibGVkOiAhcC5lbmFibGVkIH0gOiBwKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5TZXR0aW5nczwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QjgyXSBtdC0wLjVcIj5QbGF0Zm9ybSBjb25maWd1cmF0aW9uIGFuZCBwcmVmZXJlbmNlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjQzkzQTA3XVwiPlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBUYWJzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBib3JkZXItYiBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICB7c2V0dGluZ3NUYWJzLm1hcCh0ID0+IChcbiAgICAgICAgICA8YnV0dG9uIGtleT17dH0gb25DbGljaz17KCkgPT4gc2V0VGFiKHQpfSBjbGFzc05hbWU9e2BmbGV4LXNocmluay0wIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWItMiB0cmFuc2l0aW9uLWFsbCAtbWItcHggJHt0YWIgPT09IHQgPyAnYm9yZGVyLVsjRTg0NTBBXSB0ZXh0LVsjRTg0NTBBXScgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyM2QjZCODJdJ31gfT57dH08L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge3RhYiA9PT0gJ0dlbmVyYWwnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+U3RvcmUgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1N0b3JlIE5hbWUnLCB2YWx1ZTogJ05leHVzIE1hcmtldHBsYWNlJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnU3RvcmUgVVJMJywgdmFsdWU6ICdodHRwczovL25leHVzbWFya2V0LmNvbScgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1N1cHBvcnQgRW1haWwnLCB2YWx1ZTogJ3N1cHBvcnRAbmV4dXNtYXJrZXQuY29tJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnUGhvbmUnLCB2YWx1ZTogJysxICg4MDApIDU1NS0wMTAwJyB9LFxuICAgICAgICAgICAgXS5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtmLmxhYmVsfSBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj57Zi5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e2YudmFsdWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+UmVnaW9uYWwgU2V0dGluZ3M8L2gzPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0N1cnJlbmN5JywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVVNEIC0gVVMgRG9sbGFyJywgJ0VVUiAtIEV1cm8nLCAnR0JQIC0gQnJpdGlzaCBQb3VuZCcsICdBRUQgLSBVQUUgRGlyaGFtJ10gfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1RpbWV6b25lJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnKFVUQy01KSBFYXN0ZXJuIFRpbWUnLCAnKFVUQyswKSBVVEMnLCAnKFVUQys0KSBEdWJhaScsICcoVVRDKzgpIFNpbmdhcG9yZSddIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdMYW5ndWFnZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ0VuZ2xpc2ggKFVTKScsICdBcmFiaWMnLCAnRnJlbmNoJywgJ1NwYW5pc2gnXSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnRGF0ZSBGb3JtYXQnLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydNTS9ERC9ZWVlZJywgJ0REL01NL1lZWVknLCAnWVlZWS1NTS1ERCddIH0sXG4gICAgICAgICAgICBdLm1hcChmID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2YubGFiZWx9IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPntmLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICB7Zi5vcHRpb25zLm1hcChvID0+IDxvcHRpb24ga2V5PXtvfT57b308L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTUgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPlN0b3JlIEZlYXR1cmVzPC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdFbmFibGUgR3Vlc3QgQ2hlY2tvdXQnLCBkZXNjOiAnQWxsb3cgcHVyY2hhc2VzIHdpdGhvdXQgYWNjb3VudCBjcmVhdGlvbicsIG9uOiB0cnVlIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdFbmFibGUgV2lzaGxpc3QnLCBkZXNjOiAnTGV0IGN1c3RvbWVycyBzYXZlIGl0ZW1zIGZvciBsYXRlcicsIG9uOiB0cnVlIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdFbmFibGUgUHJvZHVjdCBSZXZpZXdzJywgZGVzYzogJ0FsbG93IHZlcmlmaWVkIHB1cmNoYXNlIHJldmlld3MnLCBvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnRW5hYmxlIENvbXBhcmUgUHJvZHVjdHMnLCBkZXNjOiAnU2lkZS1ieS1zaWRlIHByb2R1Y3QgY29tcGFyaXNvbicsIG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnTWFpbnRlbmFuY2UgTW9kZScsIGRlc2M6ICdUZW1wb3JhcmlseSB0YWtlIHRoZSBzdG9yZSBvZmZsaW5lJywgb246IGZhbHNlIH0sXG4gICAgICAgICAgICBdLm1hcChmID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgW29uLCBzZXRPbl0gPSB1c2VTdGF0ZShmLm9uKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmLmxhYmVsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMiBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdIGxhc3Q6Ym9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntmLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPntmLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8VG9nZ2xlIG9uPXtvbn0gb25DaGFuZ2U9e3NldE9ufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dGFiID09PSAnUGF5bWVudHMnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRkVGM0M3XSBib3JkZXIgYm9yZGVyLVsjRkNEMzREXSByb3VuZGVkLXhsIHB4LTUgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyNEOTc3MDZdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEzIDE2aC0xdi00aC0xbTEtNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzkyNDAwRV1cIj5OZXZlciBleHBvc2UgbGl2ZSBBUEkga2V5cyBpbiBwbGFpbiB0ZXh0LiBVc2UgZW52aXJvbm1lbnQgdmFyaWFibGVzIG9yIGEgc2VjcmV0cyBtYW5hZ2VyLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtwYXltZW50cy5tYXAobWV0aG9kID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e21ldGhvZC5pZH0gY2xhc3NOYW1lPXtgYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXItMiBwLTUgc3BhY2UteS00IHRyYW5zaXRpb24tYWxsICR7bWV0aG9kLmVuYWJsZWQgPyAnYm9yZGVyLVsjRTg0NTBBXS8yMCcgOiAnYm9yZGVyLVsjRTJFMkVDXSd9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e21ldGhvZC5pY29ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzExMTExOF0gdGV4dC1zbVwiPnttZXRob2QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPnttZXRob2QucHJvdmlkZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZSBvbj17bWV0aG9kLmVuYWJsZWR9IG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVQYXltZW50KG1ldGhvZC5pZCl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF1cIj5Qcm9jZXNzaW5nIGZlZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57bWV0aG9kLmZlZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF1cIj5Nb2RlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bmb250LXNlbWlib2xkICR7bWV0aG9kLnRlc3RNb2RlID8gJ3RleHQtWyNEOTc3MDZdJyA6ICd0ZXh0LVsjMDU5NjY5XSd9YH0+e21ldGhvZC50ZXN0TW9kZSA/ICdUZXN0JyA6ICdMaXZlJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XVwiPkNvbmZpZ3VyZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0YWIgPT09ICdTZWN1cml0eScgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5TZWN1cml0eSBTZXR0aW5nczwvaDM+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnVHdvLUZhY3RvciBBdXRoZW50aWNhdGlvbicsIGRlc2M6ICdSZXF1aXJlIDJGQSBmb3IgYWxsIGFkbWluIGFjY291bnRzJywgb246IHRydWUgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0xvZ2luIFJhdGUgTGltaXRpbmcnLCBkZXNjOiAnQmxvY2sgSVBzIGFmdGVyIDUgZmFpbGVkIGF0dGVtcHRzJywgb246IHRydWUgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1Nlc3Npb24gVGltZW91dCcsIGRlc2M6ICdBdXRvLWxvZ291dCBhZnRlciAzMCBtaW51dGVzIG9mIGluYWN0aXZpdHknLCBvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnSVAgQWxsb3dsaXN0JywgZGVzYzogJ1Jlc3RyaWN0IGFkbWluIGFjY2VzcyB0byBzcGVjaWZpYyBJUHMnLCBvbjogZmFsc2UgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0F1ZGl0IExvZ2dpbmcnLCBkZXNjOiAnTG9nIGFsbCBhZG1pbiBhY3Rpb25zIGZvciBjb21wbGlhbmNlJywgb246IHRydWUgfSxcbiAgICAgICAgICAgIF0ubWFwKGYgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBbb24sIHNldE9uXSA9IHVzZVN0YXRlKGYub24pXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2YubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yIGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF0gbGFzdDpib3JkZXItMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57Zi5sYWJlbH08L3A+PHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPntmLmRlc2N9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZSBvbj17b259IG9uQ2hhbmdlPXtzZXRPbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+Q2hhbmdlIEFkbWluIFBhc3N3b3JkPC9oMz5cbiAgICAgICAgICAgIHtbJ0N1cnJlbnQgUGFzc3dvcmQnLCAnTmV3IFBhc3N3b3JkJywgJ0NvbmZpcm0gUGFzc3dvcmQnXS5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtmfSBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj57Zn08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBweS0yLjUgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5VcGRhdGUgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dGFiID09PSAnU2hpcHBpbmcnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5TaGlwcGluZyBab25lczwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0M5M0EwN11cIj4rIEFkZCBab25lPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgeyB6b25lOiAnRG9tZXN0aWMgKFVTKScsIG1ldGhvZHM6IFsnU3RhbmRhcmQgKDPigJM1IGRheXMpJywgJ0V4cHJlc3MgKDHigJMyIGRheXMpJywgJ092ZXJuaWdodCddLCBjb3VudHJpZXM6ICdVbml0ZWQgU3RhdGVzJywgYWN0aXZlOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB6b25lOiAnRXVyb3BlJywgbWV0aG9kczogWydTdGFuZGFyZCAoN+KAkzE0IGRheXMpJywgJ0V4cHJlc3MgKDPigJM1IGRheXMpJ10sIGNvdW50cmllczogJ0VVICsgVUsnLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHpvbmU6ICdNaWRkbGUgRWFzdCcsIG1ldGhvZHM6IFsnU3RhbmRhcmQgKDEw4oCTMTQgZGF5cyknXSwgY291bnRyaWVzOiAnVUFFLCBLU0EsIFFhdGFyICs4JywgYWN0aXZlOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB6b25lOiAnUmVzdCBvZiBXb3JsZCcsIG1ldGhvZHM6IFsnU3RhbmRhcmQgKDE04oCTMjEgZGF5cyknXSwgY291bnRyaWVzOiAnMTgwKyBjb3VudHJpZXMnLCBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIF0ubWFwKHogPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt6LnpvbmV9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XSBsYXN0OmJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB0ZXh0LXNtXCI+e3ouem9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgJHt6LmFjdGl2ZSA/ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nIDogJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjOUI5QkI4XSd9YH0+e3ouYWN0aXZlID8gJ0FjdGl2ZScgOiAnSW5hY3RpdmUnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF0gbXQtMC41XCI+e3ouY291bnRyaWVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3oubWV0aG9kcy5tYXAobSA9PiA8c3BhbiBrZXk9e219IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGJnLVsjRUVGMkZGXSB0ZXh0LVsjNDMzOENBXSBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGxcIj57bX08L3NwYW4+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyNFODQ1MEFdIGhvdmVyOnVuZGVybGluZSBmbGV4LXNocmluay0wIG1sLTRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5GcmVlIFNoaXBwaW5nIFJ1bGVzPC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdFbmFibGUgZnJlZSBzaGlwcGluZyB0aHJlc2hvbGQnLCBkZXNjOiAnQXV0b21hdGljYWxseSB3YWl2ZSBzaGlwcGluZyBmb3IgZWxpZ2libGUgb3JkZXJzJywgb246IHRydWUgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0ZyZWUgc2hpcHBpbmcgbWluaW11bScsIGRlc2M6ICdPcmRlcnMgb3ZlciAkNzUgcXVhbGlmeSBmb3IgZnJlZSBzdGFuZGFyZCBzaGlwcGluZycsIG9uOiB0cnVlIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdGcmVlIHNoaXBwaW5nIGZvciBWSVAgY3VzdG9tZXJzJywgZGVzYzogJ0FsbCBWSVAgc2VnbWVudCBvcmRlcnMgc2hpcCBmcmVlIHJlZ2FyZGxlc3Mgb2YgdG90YWwnLCBvbjogZmFsc2UgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0FwcGx5IGZyZWUgc2hpcHBpbmcgdG8gYWxsIHZlbmRvcnMnLCBkZXNjOiAnUGxhdGZvcm0gYWJzb3JicyBzaGlwcGluZyBjb3N0IGFjcm9zcyBhbGwgdmVuZG9ycycsIG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgXS5tYXAoZiA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IFtvbiwgc2V0T25dID0gdXNlU3RhdGUoZi5vbilcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Zi5sYWJlbH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XSBsYXN0OmJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57Zi5sYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57Zi5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZSBvbj17b259IG9uQ2hhbmdlPXtzZXRPbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3RhYiA9PT0gJ05vdGlmaWNhdGlvbnMnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5FbWFpbCBOb3RpZmljYXRpb25zPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj5Db25maWd1cmUgd2hpY2ggc3lzdGVtIGV2ZW50cyB0cmlnZ2VyIGFkbWluIGVtYWlsczwvcD5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdOZXcgb3JkZXIgcGxhY2VkJywgb246IHRydWUgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ05ldyB2ZW5kb3IgYXBwbGljYXRpb24nLCBvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnTG93IHN0b2NrIGFsZXJ0Jywgb246IHRydWUgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1BheW1lbnQgZmFpbHVyZScsIG9uOiB0cnVlIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdOZXcgY3VzdG9tZXIgcmVnaXN0ZXJlZCcsIG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnVmVuZG9yIHBheW91dCBwcm9jZXNzZWQnLCBvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnQ3VzdG9tZXIgcmV2aWV3IHN1Ym1pdHRlZCcsIG9uOiBmYWxzZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnRGlzcHV0ZSByYWlzZWQnLCBvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgXS5tYXAobiA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IFtvbiwgc2V0T25dID0gdXNlU3RhdGUobi5vbilcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bi5sYWJlbH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XSBsYXN0OmJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyMxMTExMThdXCI+e24ubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZSBvbj17b259IG9uQ2hhbmdlPXtzZXRPbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5Ob3RpZmljYXRpb24gRW1haWw8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+QWRtaW4gbm90aWZpY2F0aW9uIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT1cImFsZXJ0c0BuZXh1c21hcmtldC5jb21cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5GaW5hbmNlIG5vdGlmaWNhdGlvbiBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9XCJmaW5hbmNlQG5leHVzbWFya2V0LmNvbVwiIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0YWIgPT09ICdJbnRlZ3JhdGlvbnMnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIHsgbmFtZTogJ1N0cmlwZScsIGNhdGVnb3J5OiAnUGF5bWVudHMnLCBpY29uOiAn8J+SsycsIHN0YXR1czogJ2Nvbm5lY3RlZCcsIGRlc2M6ICdQYXltZW50IHByb2Nlc3NpbmcgYW5kIHBheW91dHMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdTaGlwcG8nLCBjYXRlZ29yeTogJ1NoaXBwaW5nJywgaWNvbjogJ/Cfk6YnLCBzdGF0dXM6ICdjb25uZWN0ZWQnLCBkZXNjOiAnTXVsdGktY2FycmllciBzaGlwcGluZyBsYWJlbHMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdNYWlsY2hpbXAnLCBjYXRlZ29yeTogJ0VtYWlsJywgaWNvbjogJ/Cfk6cnLCBzdGF0dXM6ICdkaXNjb25uZWN0ZWQnLCBkZXNjOiAnRW1haWwgY2FtcGFpZ25zIGFuZCBhdXRvbWF0aW9uJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnR29vZ2xlIEFuYWx5dGljcycsIGNhdGVnb3J5OiAnQW5hbHl0aWNzJywgaWNvbjogJ/Cfk4onLCBzdGF0dXM6ICdjb25uZWN0ZWQnLCBkZXNjOiAnV2ViIGFuYWx5dGljcyBhbmQgY29udmVyc2lvbiB0cmFja2luZycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0ZhY2Vib29rIFBpeGVsJywgY2F0ZWdvcnk6ICdBZHMnLCBpY29uOiAn8J+ToycsIHN0YXR1czogJ2Nvbm5lY3RlZCcsIGRlc2M6ICdBZCByZXRhcmdldGluZyBhbmQgY29udmVyc2lvbiBldmVudHMnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdaZW5kZXNrJywgY2F0ZWdvcnk6ICdTdXBwb3J0JywgaWNvbjogJ/CfjqcnLCBzdGF0dXM6ICdkaXNjb25uZWN0ZWQnLCBkZXNjOiAnQ3VzdG9tZXIgc3VwcG9ydCB0aWNrZXRpbmcnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUd2lsaW8nLCBjYXRlZ29yeTogJ1NNUycsIGljb246ICfwn5KsJywgc3RhdHVzOiAnZGlzY29ubmVjdGVkJywgZGVzYzogJ1NNUyBub3RpZmljYXRpb25zIGFuZCBPVFAnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdDbG91ZGluYXJ5JywgY2F0ZWdvcnk6ICdNZWRpYScsIGljb246ICfwn5a877iPJywgc3RhdHVzOiAnY29ubmVjdGVkJywgZGVzYzogJ0ltYWdlIG9wdGltaXphdGlvbiBhbmQgQ0ROJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnSW50ZXJjb20nLCBjYXRlZ29yeTogJ0NoYXQnLCBpY29uOiAn8J+SgScsIHN0YXR1czogJ2Rpc2Nvbm5lY3RlZCcsIGRlc2M6ICdMaXZlIGNoYXQgYW5kIGN1c3RvbWVyIG1lc3NhZ2luZycgfSxcbiAgICAgICAgICBdLm1hcChpbnQgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2ludC5uYW1lfSBjbGFzc05hbWU9e2BiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlci0yIHAtNSBzcGFjZS15LTMgJHtpbnQuc3RhdHVzID09PSAnY29ubmVjdGVkJyA/ICdib3JkZXItWyNEMUZBRTVdJyA6ICdib3JkZXItWyNFMkUyRUNdJ31gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e2ludC5pY29ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XSB0ZXh0LXNtXCI+e2ludC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPntpbnQuY2F0ZWdvcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgJHtpbnQuc3RhdHVzID09PSAnY29ubmVjdGVkJyA/ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nIDogJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjOUI5QkI4XSd9YH0+XG4gICAgICAgICAgICAgICAgICB7aW50LnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcgPyAn4pePIENvbm5lY3RlZCcgOiAn4peLIE5vdCBjb25uZWN0ZWQnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj57aW50LmRlc2N9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHctZnVsbCBweS0yIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkICR7aW50LnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcgPyAnYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdJyA6ICdiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSBob3ZlcjpiZy1bI0M5M0EwN10nfWB9PlxuICAgICAgICAgICAgICAgIHtpbnQuc3RhdHVzID09PSAnY29ubmVjdGVkJyA/ICdDb25maWd1cmUnIDogJ0Nvbm5lY3QnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0YWIgPT09ICdBUEknICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRkVGM0M3XSBib3JkZXIgYm9yZGVyLVsjRkNEMzREXSByb3VuZGVkLXhsIHB4LTUgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyNEOTc3MDZdIGZsZXgtc2hyaW5rLTBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgOXYybTAgNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzkyNDAwRV1cIj5LZWVwIEFQSSBrZXlzIHNlY3JldC4gTmV2ZXIgc2hhcmUgb3IgZXhwb3NlIHRoZW0gaW4gY2xpZW50LXNpZGUgY29kZS48L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5BUEkgS2V5czwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdQdWJsaWMgS2V5JywgdmFsdWU6ICdwa19saXZlX254X+KAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAoicsIGVudjogJ1Byb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ1NlY3JldCBLZXknLCB2YWx1ZTogJ3NrX2xpdmVfbnhf4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiJywgZW52OiAnUHJvZHVjdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnV2ViaG9vayBTZWNyZXQnLCB2YWx1ZTogJ3doc2VjX254X+KAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAoicsIGVudjogJ1Byb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICAgIF0ubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrLmxhYmVsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIG1iLTFcIj57ay5sYWJlbH0gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1bIzlCOUJCOF1cIj4oe2suZW52fSk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gdGV4dC1bIzZCNkI4Ml0gZmxleC0xXCI+e2sudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyNFODQ1MEFdIGhvdmVyOnVuZGVybGluZSBmbGV4LXNocmluay0wXCI+UmV2ZWFsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTUgcHgtMyBweS0yIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XVwiPlJvdGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5HZW5lcmF0ZSBOZXcgS2V5PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5XZWJob29rczwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIHsgdXJsOiAnaHR0cHM6Ly95b3VyYXBwLmNvbS93ZWJob29rcy9uZXh1cycsIGV2ZW50czogJ29yZGVyLmNyZWF0ZWQsIG9yZGVyLnNoaXBwZWQnLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHVybDogJ2h0dHBzOi8vYW5hbHl0aWNzLnlvdXJhcHAuY29tL2V2ZW50cycsIGV2ZW50czogJ0FsbCBldmVudHMnLCBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIF0ubWFwKHdoID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17d2gudXJsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMi41IGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF0gbGFzdDpib3JkZXItMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1vbm8gdGV4dC1bIzExMTExOF1cIj57d2gudXJsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bIzlCOUJCOF0gbXQtMC41XCI+RXZlbnRzOiB7d2guZXZlbnRzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCAke3doLmFjdGl2ZSA/ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nIDogJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjOUI5QkI4XSd9YH0+e3doLmFjdGl2ZSA/ICdBY3RpdmUnIDogJ0luYWN0aXZlJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjRTg0NTBBXSBmb250LXNlbWlib2xkIGhvdmVyOnVuZGVybGluZVwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdXCI+KyBBZGQgV2ViaG9vazwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLElBQU0sZUFBZTtDQUFDO0NBQVc7Q0FBWTtDQUFZO0NBQWlCO0NBQVk7Q0FBZ0I7QUFBSztBQUUzRyxJQUFNLGlCQUFpQjtDQUNyQjtFQUFFLElBQUk7RUFBUSxNQUFNO0VBQXVCLE1BQU07RUFBTSxVQUFVO0VBQVUsU0FBUztFQUFNLFVBQVU7RUFBTyxLQUFLO0NBQWU7Q0FDL0g7RUFBRSxJQUFJO0VBQVUsTUFBTTtFQUFtQixNQUFNO0VBQU0sVUFBVTtFQUFV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