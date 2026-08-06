import { g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog } from "./index-BM41bWnP.js";
import { t as ProductCard } from "./ProductCard-Cuskg2O9.js";
//#region src/pages/account/AccountPageContent.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var mockOrders = [
	{
		id: "ORD-98214",
		date: "2026-08-02",
		total: 369.98,
		status: "Delivered",
		paymentMethod: "Credit Card (••4242)",
		items: [{
			id: "1",
			title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
			price: 349.99,
			image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format",
			vendor: "SoundVault",
			qty: 1
		}, {
			id: "10",
			title: "Matte Leather Phone Case",
			price: 19.99,
			image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop&auto=format",
			vendor: "TechArmor",
			qty: 1
		}]
	},
	{
		id: "ORD-97812",
		date: "2026-07-28",
		total: 129.5,
		status: "In Transit",
		paymentMethod: "Cash on Delivery",
		items: [{
			id: "3",
			title: "Nike Air Max 270 Sneakers",
			price: 129.5,
			image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&auto=format",
			vendor: "SneakerHead",
			qty: 1
		}]
	},
	{
		id: "ORD-96501",
		date: "2026-07-14",
		total: 89,
		status: "Delivered",
		paymentMethod: "Bank Transfer",
		items: [{
			id: "5",
			title: "Minimalist Ceramic Tea Set",
			price: 89,
			image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=200&h=200&fit=crop&auto=format",
			vendor: "HomeCraft",
			qty: 1
		}]
	}
];
function AccountPageContent({ tab = "overview", user, isLoggedIn, wishlist, onNavigate, onLogout, onUpdateProfile, onAddAddress, onRemoveAddress, onToggleWishlist, onAddToCart }) {
	const activeTab = [
		"overview",
		"orders",
		"wishlist",
		"addresses",
		"security"
	].includes(tab) ? tab : "overview";
	const { products } = useCatalog();
	const [showAddrModal, setShowAddrModal] = (0, import_react.useState)(false);
	const [newAddr, setNewAddr] = (0, import_react.useState)({
		label: "Home",
		name: user?.name || "",
		phone: user?.phone || "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postal: "",
		country: "United States",
		isDefault: false
	});
	const [isEditingProfile, setIsEditingProfile] = (0, import_react.useState)(false);
	const [profileForm, setProfileForm] = (0, import_react.useState)({
		name: user?.name || "",
		email: user?.email || "",
		phone: user?.phone || ""
	});
	const [profileSaved, setProfileSaved] = (0, import_react.useState)(false);
	const [securitySaved, setSecuritySaved] = (0, import_react.useState)(false);
	const [passwords, setPasswords] = (0, import_react.useState)({
		current: "",
		next: "",
		confirm: ""
	});
	const wishlistedProducts = products.filter((p) => wishlist.has(p.id));
	const handleSaveProfile = () => {
		onUpdateProfile(profileForm);
		setIsEditingProfile(false);
		setProfileSaved(true);
		setTimeout(() => setProfileSaved(false), 3e3);
	};
	const handleAddAddressSubmit = (e) => {
		e.preventDefault();
		if (!newAddr.line1 || !newAddr.city) return;
		onAddAddress(newAddr);
		setShowAddrModal(false);
		setNewAddr({
			label: "Home",
			name: user?.name || "",
			phone: user?.phone || "",
			line1: "",
			line2: "",
			city: "",
			state: "",
			postal: "",
			country: "United States",
			isDefault: false
		});
	};
	if (!isLoggedIn || !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[#F9F8F5] min-h-screen py-16 px-6 flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-3xl border border-[#E8E7E2] p-8 max-w-md w-full text-center shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-16 h-16 rounded-2xl bg-[#FFF7F5] border border-[#FECACA] flex items-center justify-center mx-auto mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-8 h-8 text-[#E8450A]",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold text-[#0E0E0E] mb-2",
					children: "Welcome Back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6A66] mb-6",
					children: "Please log in to access your account dashboard, orders, and saved wishlist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onNavigate({ type: "home" }),
					className: "w-full py-3.5 bg-[#E8450A] text-white font-bold rounded-xl hover:bg-[#C93A07] transition-colors",
					children: "Go to Homepage"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#0E0E0E] font-medium",
							children: "Account"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-3xl border border-[#E8E7E2] p-6 mb-8 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-5 text-center sm:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: user.avatar,
								alt: user.name,
								className: "w-20 h-20 rounded-2xl object-cover border-2 border-[#E8450A] shadow-md flex-shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center sm:justify-start gap-2 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "font-display text-2xl font-bold text-[#0E0E0E]",
										children: user.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "px-3 py-0.5 rounded-full text-xs font-bold bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A] uppercase tracking-wide",
										children: [
											"👑 ",
											user.tier,
											" Member"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-[#6B6A66] mt-0.5",
									children: [
										user.email,
										" · ",
										user.phone
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#9CA3AF] mt-1",
									children: ["Member since ", user.joined]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#FFF7F5] border border-[#FECACA] rounded-2xl p-4 flex items-center gap-4 text-center sm:text-right min-w-[200px] justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-[#6B6A66] uppercase tracking-wide",
								children: "Rewards Points"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-2xl font-bold text-[#E8450A]",
								children: [user.points.toLocaleString(), " pts"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-xl bg-[#E8450A] text-white flex items-center justify-center font-bold text-lg",
								children: "🎁"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-[260px_1fr] gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "bg-white rounded-3xl border border-[#E8E7E2] p-4 h-fit sticky top-24 shadow-sm space-y-1",
						children: [[
							{
								key: "overview",
								label: "Overview & Profile",
								icon: "👤"
							},
							{
								key: "orders",
								label: "Order History",
								icon: "📦",
								count: mockOrders.length
							},
							{
								key: "wishlist",
								label: "My Wishlist",
								icon: "❤️",
								count: wishlist.size
							},
							{
								key: "addresses",
								label: "Saved Addresses",
								icon: "📍",
								count: user.addresses.length
							},
							{
								key: "security",
								label: "Security & Settings",
								icon: "⚙️"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onNavigate({
								type: "account",
								tab: item.key
							}),
							className: `w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${activeTab === item.key ? "bg-[#E8450A] text-white shadow-md shadow-[#E8450A]/20" : "text-[#6B6A66] hover:bg-[#F3F2EF] hover:text-[#0E0E0E]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base",
									children: item.icon
								}), item.label]
							}), item.count !== void 0 && item.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs px-2 py-0.5 rounded-full font-bold ${activeTab === item.key ? "bg-white/20 text-white" : "bg-[#F3F2EF] text-[#0E0E0E]"}`,
								children: item.count
							})]
						}, item.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t border-[#E8E7E2] mt-4 space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onNavigate({ type: "admin" }),
								className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-[#6366F1] bg-[#EEF2FF] hover:bg-[#E0E7FF] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base",
									children: "⚡"
								}), "Admin Portal"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: onLogout,
								className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-[#E11D48] hover:bg-[#FFF1F2] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base",
									children: "🚪"
								}), "Log Out"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "space-y-6",
						children: [
							activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									profileSaved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-3 text-sm font-semibold text-[#059669] flex items-center gap-2",
										children: "✓ Profile updated successfully!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide",
														children: "Total Orders"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-mono text-2xl font-bold text-[#0E0E0E] mt-1",
														children: "14"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#059669] font-medium mt-1",
														children: "3 orders this month"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide",
														children: "Saved Items"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-mono text-2xl font-bold text-[#0E0E0E] mt-1",
														children: wishlist.size
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#6B6A66] font-medium mt-1",
														children: "Ready for checkout"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide",
														children: "Total Spent"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-mono text-2xl font-bold text-[#0E0E0E] mt-1",
														children: "$1,248.50"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#E8450A] font-medium mt-1",
														children: "Gold level perks active"
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-bold text-[#0E0E0E]",
												children: "Personal Information"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-[#6B6A66]",
												children: "Manage your profile details and contact information."
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													if (isEditingProfile) handleSaveProfile();
													else setIsEditingProfile(true);
												},
												className: "px-4 py-2 rounded-xl text-sm font-semibold border border-[#E8E7E2] text-[#0E0E0E] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors",
												children: isEditingProfile ? "Save Changes" : "Edit Profile"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide",
													children: "Full Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													disabled: !isEditingProfile,
													value: profileForm.name,
													onChange: (e) => setProfileForm((f) => ({
														...f,
														name: e.target.value
													})),
													className: "mt-1 w-full h-11 px-4 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none disabled:bg-[#F9F8F5] focus:border-[#E8450A]"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide",
													children: "Email Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													disabled: !isEditingProfile,
													value: profileForm.email,
													onChange: (e) => setProfileForm((f) => ({
														...f,
														email: e.target.value
													})),
													className: "mt-1 w-full h-11 px-4 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none disabled:bg-[#F9F8F5] focus:border-[#E8450A]"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-[#0E0E0E] uppercase tracking-wide",
													children: "Phone Number"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "tel",
													disabled: !isEditingProfile,
													value: profileForm.phone,
													onChange: (e) => setProfileForm((f) => ({
														...f,
														phone: e.target.value
													})),
													className: "mt-1 w-full h-11 px-4 rounded-xl border border-[#E8E7E2] bg-white text-sm text-[#0E0E0E] outline-none disabled:bg-[#F9F8F5] focus:border-[#E8450A]"
												})] })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-bold text-[#0E0E0E]",
												children: "Recent Orders"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => onNavigate({
													type: "account",
													tab: "orders"
												}),
												className: "text-xs font-semibold text-[#E8450A] hover:underline",
												children: "View All Orders →"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "divide-y divide-[#E8E7E2]",
											children: mockOrders.slice(0, 2).map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono font-bold text-sm text-[#0E0E0E]",
														children: order.id
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-xs px-2.5 py-0.5 rounded-full font-semibold ${order.status === "Delivered" ? "bg-[#F0FDF4] text-[#059669]" : "bg-[#FFF7ED] text-[#D97706]"}`,
														children: order.status
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-[#6B6A66] mt-1",
													children: [
														order.date,
														" · ",
														order.items.length,
														" item(s)"
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono font-bold text-base text-[#0E0E0E]",
														children: ["$", order.total.toFixed(2)]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => onNavigate({
															type: "account",
															tab: "orders"
														}),
														className: "px-3 py-1.5 rounded-xl border border-[#E8E7E2] text-xs font-semibold text-[#0E0E0E] hover:bg-[#F3F2EF]",
														children: "Details"
													})]
												})]
											}, order.id))
										})]
									})
								]
							}),
							activeTab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold text-[#0E0E0E]",
									children: "Order History"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-[#6B6A66]",
									children: "Track, manage, and view receipts for your orders."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: mockOrders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white rounded-3xl border border-[#E8E7E2] overflow-hidden shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-[#F9F8F5] px-6 py-4 border-b border-[#E8E7E2] flex flex-wrap items-center justify-between gap-4 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[#9CA3AF] uppercase font-bold tracking-wider block",
														children: "Order Placed"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#0E0E0E] mt-0.5 block",
														children: order.date
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[#9CA3AF] uppercase font-bold tracking-wider block",
														children: "Total"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono font-bold text-[#0E0E0E] mt-0.5 block",
														children: ["$", order.total.toFixed(2)]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[#9CA3AF] uppercase font-bold tracking-wider block",
														children: "Payment"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#0E0E0E] mt-0.5 block",
														children: order.paymentMethod
													})] })
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono font-bold text-sm text-[#0E0E0E]",
													children: order.id
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `px-3 py-1 rounded-full text-xs font-bold ${order.status === "Delivered" ? "bg-[#F0FDF4] text-[#059669] border border-[#BBF7D0]" : "bg-[#FFF7ED] text-[#D97706] border border-[#FED7AA]"}`,
													children: order.status
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-6 divide-y divide-[#E8E7E2]",
											children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "py-3 first:pt-0 last:pb-0 flex items-center gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: item.image,
														alt: item.title,
														className: "w-16 h-16 rounded-xl object-cover bg-[#F9F8F5] border border-[#E8E7E2]"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 min-w-0",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#0E0E0E] truncate",
																children: item.title
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-xs text-[#6B6A66]",
																children: ["Sold by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-medium text-[#0E0E0E]",
																	children: item.vendor
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-xs font-mono font-semibold text-[#0E0E0E] mt-1",
																children: [
																	"$",
																	item.price,
																	" × ",
																	item.qty
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => onAddToCart({
															id: item.id,
															title: item.title,
															price: item.price,
															originalPrice: item.price,
															image: item.image,
															vendor: item.vendor
														}),
														className: "px-4 py-2 bg-[#0E0E0E] text-white text-xs font-semibold rounded-xl hover:bg-[#E8450A] transition-colors",
														children: "Buy Again"
													})
												]
											}, item.id))
										})]
									}, order.id))
								})]
							}),
							activeTab === "wishlist" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold text-[#0E0E0E]",
									children: "My Saved Wishlist"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-[#6B6A66]",
									children: "Products you saved for later."
								})] }), wishlistedProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-white rounded-3xl border border-[#E8E7E2] p-12 text-center shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-16 h-16 bg-[#FFF1F2] rounded-full flex items-center justify-center mx-auto mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-3xl",
												children: "❤️"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg font-bold text-[#0E0E0E] mb-1",
											children: "Your wishlist is empty"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-[#6B6A66] mb-6",
											children: "Explore products and tap the heart icon to save items here."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => onNavigate({ type: "home" }),
											className: "px-6 py-3 bg-[#E8450A] text-white font-bold text-sm rounded-xl hover:bg-[#C93A07] transition-colors",
											children: "Browse Products"
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
									children: wishlistedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
										product,
										wishlisted: true,
										onToggleWishlist,
										onAddToCart,
										onNavigate: (id) => onNavigate({
											type: "product",
											id
										})
									}, product.id))
								})]
							}),
							activeTab === "addresses" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-bold text-[#0E0E0E]",
											children: "Saved Addresses"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-[#6B6A66]",
											children: "Manage delivery locations for quick checkout."
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setShowAddrModal(true),
											className: "px-4 py-2 bg-[#E8450A] text-white text-sm font-bold rounded-xl hover:bg-[#C93A07] transition-colors flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" }), " Add Address"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: user.addresses.map((addr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-white rounded-3xl border border-[#E8E7E2] p-5 shadow-sm relative flex flex-col justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between mb-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-bold text-sm text-[#0E0E0E] flex items-center gap-2",
														children: ["📍 ", addr.label]
													}), addr.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold bg-[#F0FDF4] text-[#059669] px-2 py-0.5 rounded-full border border-[#BBF7D0]",
														children: "Default"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold text-[#0E0E0E]",
													children: addr.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-[#6B6A66] mt-1",
													children: addr.phone
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-[#6B6A66] mt-1",
													children: [addr.line1, addr.line2 ? `, ${addr.line2}` : ""]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-[#6B6A66]",
													children: [
														addr.city,
														", ",
														addr.state,
														" ",
														addr.postal
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-[#6B6A66]",
													children: addr.country
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-4 border-t border-[#E8E7E2] mt-4 flex items-center justify-between text-xs font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => onRemoveAddress(addr.id),
													className: "text-[#E11D48] hover:underline",
													children: "Remove"
												}), !addr.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "text-[#E8450A] hover:underline",
													children: "Set as Default"
												})]
											})]
										}, addr.id))
									}),
									showAddrModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "fixed inset-0 bg-black/40 z-50 backdrop-blur-sm flex items-center justify-center p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-white rounded-3xl border border-[#E8E7E2] p-6 max-w-md w-full shadow-2xl space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-bold text-lg text-[#0E0E0E]",
													children: "Add New Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setShowAddrModal(false),
													className: "text-[#9CA3AF] hover:text-[#0E0E0E]",
													children: "✕"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
												onSubmit: handleAddAddressSubmit,
												className: "space-y-3 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#0E0E0E] uppercase",
														children: "Label"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														placeholder: "Home / Work / Cottage",
														value: newAddr.label,
														onChange: (e) => setNewAddr((a) => ({
															...a,
															label: e.target.value
														})),
														className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#0E0E0E] uppercase",
														children: "Street Address"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														required: true,
														placeholder: "123 Main St",
														value: newAddr.line1,
														onChange: (e) => setNewAddr((a) => ({
															...a,
															line1: e.target.value
														})),
														className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-2 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#0E0E0E] uppercase",
															children: "City"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															required: true,
															placeholder: "New York",
															value: newAddr.city,
															onChange: (e) => setNewAddr((a) => ({
																...a,
																city: e.target.value
															})),
															className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#0E0E0E] uppercase",
															children: "Postal Code"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															placeholder: "10001",
															value: newAddr.postal,
															onChange: (e) => setNewAddr((a) => ({
																...a,
																postal: e.target.value
															})),
															className: "w-full h-10 px-3 mt-1 rounded-xl border border-[#E8E7E2] outline-none focus:border-[#E8450A]"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "pt-3 flex gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setShowAddrModal(false),
															className: "flex-1 py-2.5 rounded-xl border border-[#E8E7E2] font-semibold text-[#0E0E0E]",
															children: "Cancel"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "submit",
															className: "flex-1 py-2.5 rounded-xl bg-[#E8450A] text-white font-bold",
															children: "Save Address"
														})]
													})
												]
											})]
										})
									})
								]
							}),
							activeTab === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-bold text-[#0E0E0E]",
										children: "Security & Preferences"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[#6B6A66]",
										children: "Manage account credentials and notification preferences."
									})] }),
									securitySaved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-3 text-sm font-semibold text-[#059669]",
										children: "✓ Settings saved!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-base text-[#0E0E0E]",
											children: "Change Password"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3 max-w-md",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-[#0E0E0E] uppercase",
													children: "Current Password"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "password",
													placeholder: "••••••••",
													value: passwords.current,
													onChange: (e) => setPasswords((p) => ({
														...p,
														current: e.target.value
													})),
													className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E8E7E2] text-sm outline-none focus:border-[#E8450A]"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-[#0E0E0E] uppercase",
													children: "New Password"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "password",
													placeholder: "••••••••",
													value: passwords.next,
													onChange: (e) => setPasswords((p) => ({
														...p,
														next: e.target.value
													})),
													className: "mt-1 w-full h-10 px-3 rounded-xl border border-[#E8E7E2] text-sm outline-none focus:border-[#E8450A]"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => {
														setSecuritySaved(true);
														setTimeout(() => setSecuritySaved(false), 3e3);
													},
													className: "px-5 py-2.5 bg-[#0E0E0E] text-white font-bold text-xs rounded-xl hover:bg-[#E8450A] transition-colors",
													children: "Update Password"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white rounded-3xl border border-[#E8E7E2] p-6 shadow-sm space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-base text-[#0E0E0E]",
											children: "Email & SMS Notifications"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-3 text-sm",
											children: [
												{
													label: "Order status updates & shipping tracking",
													defaultOn: true
												},
												{
													label: "Promotional deals & discount coupons",
													defaultOn: true
												},
												{
													label: "Wishlist price drop alerts",
													defaultOn: true
												}
											].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-3 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													defaultChecked: item.defaultOn,
													className: "w-4 h-4 accent-[#E8450A]"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#0E0E0E]",
													children: item.label
												})]
											}, idx))
										})]
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/AccountPage.tsx
function AccountPage(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPageContent, { ...props });
}
//#endregion
export { AccountPage as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFBhZ2Utcy00WklzdjkuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhZ2VzL2FjY291bnQvQWNjb3VudFBhZ2VDb250ZW50LnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9BY2NvdW50UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uLy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBBY2NvdW50VXNlciwgQWRkcmVzcywgQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uLy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuaW1wb3J0IHsgdXNlQ2F0YWxvZyB9IGZyb20gJ0Avc3RhdGUvY2F0YWxvZy1zdG9yZSdcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJ1xuXG50eXBlIFByb3BzID0ge1xuICB0YWI/OiBzdHJpbmdcbiAgdXNlcjogQWNjb3VudFVzZXIgfCBudWxsXG4gIGlzTG9nZ2VkSW46IGJvb2xlYW5cbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uTmF2aWdhdGU6ICh2OiBWaWV3KSA9PiB2b2lkXG4gIG9uTG9naW46ICh1c2VyOiBBY2NvdW50VXNlcikgPT4gdm9pZFxuICBvbkxvZ291dDogKCkgPT4gdm9pZFxuICBvblVwZGF0ZVByb2ZpbGU6IChwYXRjaDogUGFydGlhbDxBY2NvdW50VXNlcj4pID0+IHZvaWRcbiAgb25BZGRBZGRyZXNzOiAoYWRkcjogT21pdDxBZGRyZXNzLCAnaWQnPikgPT4gdm9pZFxuICBvblVwZGF0ZUFkZHJlc3M6IChpZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxBZGRyZXNzPikgPT4gdm9pZFxuICBvblJlbW92ZUFkZHJlc3M6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxufVxuXG50eXBlIEFjY291bnRUYWIgPSAnb3ZlcnZpZXcnIHwgJ29yZGVycycgfCAnd2lzaGxpc3QnIHwgJ2FkZHJlc3NlcycgfCAnc2VjdXJpdHknXG5cbmNvbnN0IG1vY2tPcmRlcnMgPSBbXG4gIHtcbiAgICBpZDogJ09SRC05ODIxNCcsXG4gICAgZGF0ZTogJzIwMjYtMDgtMDInLFxuICAgIHRvdGFsOiAzNjkuOTgsXG4gICAgc3RhdHVzOiAnRGVsaXZlcmVkJyxcbiAgICBwYXltZW50TWV0aG9kOiAnQ3JlZGl0IENhcmQgKOKAouKAojQyNDIpJyxcbiAgICBpdGVtczogW1xuICAgICAgeyBpZDogJzEnLCB0aXRsZTogJ1NvbnkgV0gtMTAwMFhNNSBXaXJlbGVzcyBOb2lzZSBDYW5jZWxsaW5nIEhlYWRwaG9uZXMnLCBwcmljZTogMzQ5Ljk5LCBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA1NzQwNDIwOTI4LTVlNTYwYzA2ZDMwZT93PTIwMCZoPTIwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsIHZlbmRvcjogJ1NvdW5kVmF1bHQnLCBxdHk6IDEgfSxcbiAgICAgIHsgaWQ6ICcxMCcsIHRpdGxlOiAnTWF0dGUgTGVhdGhlciBQaG9uZSBDYXNlJywgcHJpY2U6IDE5Ljk5LCBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjAxNzg0NTUxNDQ2LTIwYzllMDdjZGJkYj93PTIwMCZoPTIwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsIHZlbmRvcjogJ1RlY2hBcm1vcicsIHF0eTogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ09SRC05NzgxMicsXG4gICAgZGF0ZTogJzIwMjYtMDctMjgnLFxuICAgIHRvdGFsOiAxMjkuNTAsXG4gICAgc3RhdHVzOiAnSW4gVHJhbnNpdCcsXG4gICAgcGF5bWVudE1ldGhvZDogJ0Nhc2ggb24gRGVsaXZlcnknLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGlkOiAnMycsIHRpdGxlOiAnTmlrZSBBaXIgTWF4IDI3MCBTbmVha2VycycsIHByaWNlOiAxMjkuNTAsIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDIyOTEwMjYtN2VlYzI2NGMyN2ZmP3c9MjAwJmg9MjAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0JywgdmVuZG9yOiAnU25lYWtlckhlYWQnLCBxdHk6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6ICdPUkQtOTY1MDEnLFxuICAgIGRhdGU6ICcyMDI2LTA3LTE0JyxcbiAgICB0b3RhbDogODkuMDAsXG4gICAgc3RhdHVzOiAnRGVsaXZlcmVkJyxcbiAgICBwYXltZW50TWV0aG9kOiAnQmFuayBUcmFuc2ZlcicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgaWQ6ICc1JywgdGl0bGU6ICdNaW5pbWFsaXN0IENlcmFtaWMgVGVhIFNldCcsIHByaWNlOiA4OS4wMCwgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3ODc0OTU1NjU2OC1iYzJjNDBlNjhiNjE/dz0yMDAmaD0yMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQnLCB2ZW5kb3I6ICdIb21lQ3JhZnQnLCBxdHk6IDEgfSxcbiAgICBdLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50UGFnZUNvbnRlbnQoe1xuICB0YWIgPSAnb3ZlcnZpZXcnLFxuICB1c2VyLFxuICBpc0xvZ2dlZEluLFxuICB3aXNobGlzdCxcbiAgb25OYXZpZ2F0ZSxcbiAgb25Mb2dvdXQsXG4gIG9uVXBkYXRlUHJvZmlsZSxcbiAgb25BZGRBZGRyZXNzLFxuICBvblJlbW92ZUFkZHJlc3MsXG4gIG9uVG9nZ2xlV2lzaGxpc3QsXG4gIG9uQWRkVG9DYXJ0LFxufTogUHJvcHMpIHtcbiAgY29uc3QgYWN0aXZlVGFiOiBBY2NvdW50VGFiID0gKFsnb3ZlcnZpZXcnLCAnb3JkZXJzJywgJ3dpc2hsaXN0JywgJ2FkZHJlc3NlcycsICdzZWN1cml0eSddLmluY2x1ZGVzKHRhYikgPyB0YWIgOiAnb3ZlcnZpZXcnKSBhcyBBY2NvdW50VGFiXG5cbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdXNlQ2F0YWxvZygpXG5cbiAgLy8gQWRkcmVzcyBNb2RhbCBTdGF0ZVxuICBjb25zdCBbc2hvd0FkZHJNb2RhbCwgc2V0U2hvd0FkZHJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW25ld0FkZHIsIHNldE5ld0FkZHJdID0gdXNlU3RhdGU8T21pdDxBZGRyZXNzLCAnaWQnPj4oe1xuICAgIGxhYmVsOiAnSG9tZScsXG4gICAgbmFtZTogdXNlcj8ubmFtZSB8fCAnJyxcbiAgICBwaG9uZTogdXNlcj8ucGhvbmUgfHwgJycsXG4gICAgbGluZTE6ICcnLFxuICAgIGxpbmUyOiAnJyxcbiAgICBjaXR5OiAnJyxcbiAgICBzdGF0ZTogJycsXG4gICAgcG9zdGFsOiAnJyxcbiAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXG4gICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgfSlcblxuICAvLyBQcm9maWxlIEVkaXQgU3RhdGVcbiAgY29uc3QgW2lzRWRpdGluZ1Byb2ZpbGUsIHNldElzRWRpdGluZ1Byb2ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwcm9maWxlRm9ybSwgc2V0UHJvZmlsZUZvcm1dID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IHVzZXI/Lm5hbWUgfHwgJycsXG4gICAgZW1haWw6IHVzZXI/LmVtYWlsIHx8ICcnLFxuICAgIHBob25lOiB1c2VyPy5waG9uZSB8fCAnJyxcbiAgfSlcbiAgY29uc3QgW3Byb2ZpbGVTYXZlZCwgc2V0UHJvZmlsZVNhdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIFNlY3VyaXR5IEZvcm0gU3RhdGVcbiAgY29uc3QgW3NlY3VyaXR5U2F2ZWQsIHNldFNlY3VyaXR5U2F2ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwYXNzd29yZHMsIHNldFBhc3N3b3Jkc10gPSB1c2VTdGF0ZSh7IGN1cnJlbnQ6ICcnLCBuZXh0OiAnJywgY29uZmlybTogJycgfSlcblxuICBjb25zdCB3aXNobGlzdGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIocCA9PiB3aXNobGlzdC5oYXMocC5pZCkpXG5cbiAgY29uc3QgaGFuZGxlU2F2ZVByb2ZpbGUgPSAoKSA9PiB7XG4gICAgb25VcGRhdGVQcm9maWxlKHByb2ZpbGVGb3JtKVxuICAgIHNldElzRWRpdGluZ1Byb2ZpbGUoZmFsc2UpXG4gICAgc2V0UHJvZmlsZVNhdmVkKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRQcm9maWxlU2F2ZWQoZmFsc2UpLCAzMDAwKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkQWRkcmVzc1N1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIW5ld0FkZHIubGluZTEgfHwgIW5ld0FkZHIuY2l0eSkgcmV0dXJuXG4gICAgb25BZGRBZGRyZXNzKG5ld0FkZHIpXG4gICAgc2V0U2hvd0FkZHJNb2RhbChmYWxzZSlcbiAgICBzZXROZXdBZGRyKHtcbiAgICAgIGxhYmVsOiAnSG9tZScsXG4gICAgICBuYW1lOiB1c2VyPy5uYW1lIHx8ICcnLFxuICAgICAgcGhvbmU6IHVzZXI/LnBob25lIHx8ICcnLFxuICAgICAgbGluZTE6ICcnLFxuICAgICAgbGluZTI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICBwb3N0YWw6ICcnLFxuICAgICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgICB9KVxuICB9XG5cbiAgaWYgKCFpc0xvZ2dlZEluIHx8ICF1c2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOUY4RjVdIG1pbi1oLXNjcmVlbiBweS0xNiBweC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC04IG1heC13LW1kIHctZnVsbCB0ZXh0LWNlbnRlciBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLTJ4bCBiZy1bI0ZGRjdGNV0gYm9yZGVyIGJvcmRlci1bI0ZFQ0FDQV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00XCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1bI0U4NDUwQV1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03elwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi0yXCI+V2VsY29tZSBCYWNrPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdIG1iLTZcIj5QbGVhc2UgbG9nIGluIHRvIGFjY2VzcyB5b3VyIGFjY291bnQgZGFzaGJvYXJkLCBvcmRlcnMsIGFuZCBzYXZlZCB3aXNobGlzdC48L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdob21lJyB9KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zLjUgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQteGwgaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBHbyB0byBIb21lcGFnZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y5RjhGNV0gbWluLWgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgtNiBweS04XCI+XG5cbiAgICAgICAgey8qIEJyZWFkY3J1bWIgKi99XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LVsjOUNBM0FGXSBtYi02XCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2hvbWUnIH0pfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiPkhvbWU8L2J1dHRvbj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTNcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk05IDVsNyA3LTcgN1wiIC8+PC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBFMEUwRV0gZm9udC1tZWRpdW1cIj5BY2NvdW50PC9zcGFuPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICB7LyogVG9wIFByb2ZpbGUgSGVhZGVyIENhcmQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC02IG1iLTggc2hhZG93LXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBzbTppdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyfVxuICAgICAgICAgICAgICAgIGFsdD17dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLTJ4bCBvYmplY3QtY292ZXIgYm9yZGVyLTIgYm9yZGVyLVsjRTg0NTBBXSBzaGFkb3ctbWQgZmxleC1zaHJpbmstMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTpqdXN0aWZ5LXN0YXJ0IGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57dXNlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0zIHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LWJvbGQgYmctWyNGRUYzQzddIHRleHQtWyNEOTc3MDZdIGJvcmRlciBib3JkZXItWyNGREU2OEFdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIPCfkZEge3VzZXIudGllcn0gTWVtYmVyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XSBtdC0wLjVcIj57dXNlci5lbWFpbH0gwrcge3VzZXIucGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlDQTNBRl0gbXQtMVwiPk1lbWJlciBzaW5jZSB7dXNlci5qb2luZWR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTG95YWx0eSBQb2ludHMgQmFkZ2UgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRkZGN0Y1XSBib3JkZXIgYm9yZGVyLVsjRkVDQUNBXSByb3VuZGVkLTJ4bCBwLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC1jZW50ZXIgc206dGV4dC1yaWdodCBtaW4tdy1bMjAwcHhdIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QTY2XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlJld2FyZHMgUG9pbnRzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV1cIj57dXNlci5wb2ludHMudG9Mb2NhbGVTdHJpbmcoKX0gcHRzPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIPCfjoFcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIERhc2hib2FyZCBHcmlkIExheW91dCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy1bMjYwcHhfMWZyXSBnYXAtOFwiPlxuXG4gICAgICAgICAgey8qIOKUgOKUgCBMZWZ0IE5hdmlnYXRpb24gU2lkZWJhciDilIDilIAgKi99XG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNCBoLWZpdCBzdGlja3kgdG9wLTI0IHNoYWRvdy1zbSBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsga2V5OiAnb3ZlcnZpZXcnLCBsYWJlbDogJ092ZXJ2aWV3ICYgUHJvZmlsZScsIGljb246ICfwn5GkJyB9LFxuICAgICAgICAgICAgICB7IGtleTogJ29yZGVycycsIGxhYmVsOiAnT3JkZXIgSGlzdG9yeScsIGljb246ICfwn5OmJywgY291bnQ6IG1vY2tPcmRlcnMubGVuZ3RoIH0sXG4gICAgICAgICAgICAgIHsga2V5OiAnd2lzaGxpc3QnLCBsYWJlbDogJ015IFdpc2hsaXN0JywgaWNvbjogJ+KdpO+4jycsIGNvdW50OiB3aXNobGlzdC5zaXplIH0sXG4gICAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc2VzJywgbGFiZWw6ICdTYXZlZCBBZGRyZXNzZXMnLCBpY29uOiAn8J+TjScsIGNvdW50OiB1c2VyLmFkZHJlc3Nlcy5sZW5ndGggfSxcbiAgICAgICAgICAgICAgeyBrZXk6ICdzZWN1cml0eScsIGxhYmVsOiAnU2VjdXJpdHkgJiBTZXR0aW5ncycsIGljb246ICfimpnvuI8nIH0sXG4gICAgICAgICAgICBdLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdhY2NvdW50JywgdGFiOiBpdGVtLmtleSB9KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktMyByb3VuZGVkLTJ4bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gaXRlbS5rZXlcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1bI0U4NDUwQV0vMjAnXG4gICAgICAgICAgICAgICAgICAgIDogJ3RleHQtWyM2QjZBNjZdIGhvdmVyOmJnLVsjRjNGMkVGXSBob3Zlcjp0ZXh0LVsjMEUwRTBFXSdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj57aXRlbS5pY29ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7aXRlbS5jb3VudCAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQteHMgcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCAke2FjdGl2ZVRhYiA9PT0gaXRlbS5rZXkgPyAnYmctd2hpdGUvMjAgdGV4dC13aGl0ZScgOiAnYmctWyNGM0YyRUZdIHRleHQtWyMwRTBFMEVdJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY291bnR9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGJvcmRlci10IGJvcmRlci1bI0U4RTdFMl0gbXQtNCBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAnYWRtaW4nIH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC00IHB5LTMgcm91bmRlZC0yeGwgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2MzY2RjFdIGJnLVsjRUVGMkZGXSBob3ZlcjpiZy1bI0UwRTdGRl0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+4pqhPC9zcGFuPlxuICAgICAgICAgICAgICAgIEFkbWluIFBvcnRhbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC00IHB5LTMgcm91bmRlZC0yeGwgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyNFMTFENDhdIGhvdmVyOmJnLVsjRkZGMUYyXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj7wn5qqPC9zcGFuPlxuICAgICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FzaWRlPlxuXG4gICAgICAgICAgey8qIOKUgOKUgCBNYWluIFRhYiBDb250ZW50IEFyZWEg4pSA4pSAICovfVxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuXG4gICAgICAgICAgICB7Lyog4pSA4pSAIDEuIE9WRVJWSUVXICYgUFJPRklMRSBUQUIg4pSA4pSAICovfVxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ292ZXJ2aWV3JyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAge3Byb2ZpbGVTYXZlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjBGREY0XSBib3JkZXIgYm9yZGVyLVsjQkJGN0QwXSByb3VuZGVkLTJ4bCBweC01IHB5LTMgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwNTk2NjldIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIOKckyBQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHsvKiBRdWljayBTdGF0cyBHcmlkICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUNBM0FGXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlRvdGFsIE9yZGVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtdC0xXCI+MTQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzA1OTY2OV0gZm9udC1tZWRpdW0gbXQtMVwiPjMgb3JkZXJzIHRoaXMgbW9udGg8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC01IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlDQTNBRl0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5TYXZlZCBJdGVtczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtdC0xXCI+e3dpc2hsaXN0LnNpemV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdIGZvbnQtbWVkaXVtIG10LTFcIj5SZWFkeSBmb3IgY2hlY2tvdXQ8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC01IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlDQTNBRl0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5Ub3RhbCBTcGVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtdC0xXCI+JDEsMjQ4LjUwPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNFODQ1MEFdIGZvbnQtbWVkaXVtIG10LTFcIj5Hb2xkIGxldmVsIHBlcmtzIGFjdGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFBlcnNvbmFsIEluZm9ybWF0aW9uIEZvcm0gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTYgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtWyMwRTBFMEVdXCI+UGVyc29uYWwgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkE2Nl1cIj5NYW5hZ2UgeW91ciBwcm9maWxlIGRldGFpbHMgYW5kIGNvbnRhY3QgaW5mb3JtYXRpb24uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VkaXRpbmdQcm9maWxlKSBoYW5kbGVTYXZlUHJvZmlsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHNldElzRWRpdGluZ1Byb2ZpbGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSB0ZXh0LVsjMEUwRTBFXSBob3Zlcjpib3JkZXItWyNFODQ1MEFdIGhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc0VkaXRpbmdQcm9maWxlID8gJ1NhdmUgQ2hhbmdlcycgOiAnRWRpdCBQcm9maWxlJ31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPkZ1bGwgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ1Byb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZmlsZUZvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByb2ZpbGVGb3JtKGYgPT4gKHsgLi4uZiwgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgaC0xMSBweC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gYmctd2hpdGUgdGV4dC1zbSB0ZXh0LVsjMEUwRTBFXSBvdXRsaW5lLW5vbmUgZGlzYWJsZWQ6YmctWyNGOUY4RjVdIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRWRpdGluZ1Byb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZmlsZUZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcm9maWxlRm9ybShmID0+ICh7IC4uLmYsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHctZnVsbCBoLTExIHB4LTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBiZy13aGl0ZSB0ZXh0LXNtIHRleHQtWyMwRTBFMEVdIG91dGxpbmUtbm9uZSBkaXNhYmxlZDpiZy1bI0Y5RjhGNV0gZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNFZGl0aW5nUHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9maWxlRm9ybS5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByb2ZpbGVGb3JtKGYgPT4gKHsgLi4uZiwgcGhvbmU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTEgcHgtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIGJnLXdoaXRlIHRleHQtc20gdGV4dC1bIzBFMEUwRV0gb3V0bGluZS1ub25lIGRpc2FibGVkOmJnLVsjRjlGOEY1XSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFJlY2VudCBPcmRlcnMgUHJldmlldyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNiBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtWyMwRTBFMEVdXCI+UmVjZW50IE9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKHsgdHlwZTogJ2FjY291bnQnLCB0YWI6ICdvcmRlcnMnIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjRTg0NTBBXSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBBbGwgT3JkZXJzIOKGklxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0U4RTdFMl1cIj5cbiAgICAgICAgICAgICAgICAgICAge21vY2tPcmRlcnMuc2xpY2UoMCwgMikubWFwKG9yZGVyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17b3JkZXIuaWR9IGNsYXNzTmFtZT1cInB5LTQgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtWyMwRTBFMEVdXCI+e29yZGVyLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXhzIHB4LTIuNSBweS0wLjUgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgJHtvcmRlci5zdGF0dXMgPT09ICdEZWxpdmVyZWQnID8gJ2JnLVsjRjBGREY0XSB0ZXh0LVsjMDU5NjY5XScgOiAnYmctWyNGRkY3RURdIHRleHQtWyNEOTc3MDZdJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XSBtdC0xXCI+e29yZGVyLmRhdGV9IMK3IHtvcmRlci5pdGVtcy5sZW5ndGh9IGl0ZW0ocyk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzBFMEUwRV1cIj4ke29yZGVyLnRvdGFsLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdhY2NvdW50JywgdGFiOiAnb3JkZXJzJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSBob3ZlcjpiZy1bI0YzRjJFRl1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiDilIDilIAgMi4gT1JERVJTIFRBQiDilIDilIAgKi99XG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnb3JkZXJzJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPk9yZGVyIEhpc3Rvcnk8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XVwiPlRyYWNrLCBtYW5hZ2UsIGFuZCB2aWV3IHJlY2VpcHRzIGZvciB5b3VyIG9yZGVycy48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAge21vY2tPcmRlcnMubWFwKG9yZGVyID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29yZGVyLmlkfSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIE9yZGVyIEhlYWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjlGOEY1XSBweC02IHB5LTQgYm9yZGVyLWIgYm9yZGVyLVsjRThFN0UyXSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOUNBM0FGXSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIGJsb2NrXCI+T3JkZXIgUGxhY2VkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gbXQtMC41IGJsb2NrXCI+e29yZGVyLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOUNBM0FGXSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIGJsb2NrXCI+VG90YWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtdC0wLjUgYmxvY2tcIj4ke29yZGVyLnRvdGFsLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOUNBM0FGXSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIGJsb2NrXCI+UGF5bWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIG10LTAuNSBibG9ja1wiPntvcmRlci5wYXltZW50TWV0aG9kfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtWyMwRTBFMEVdXCI+e29yZGVyLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZCAke29yZGVyLnN0YXR1cyA9PT0gJ0RlbGl2ZXJlZCcgPyAnYmctWyNGMEZERjRdIHRleHQtWyMwNTk2NjldIGJvcmRlciBib3JkZXItWyNCQkY3RDBdJyA6ICdiZy1bI0ZGRjdFRF0gdGV4dC1bI0Q5NzcwNl0gYm9yZGVyIGJvcmRlci1bI0ZFRDdBQV0nfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEl0ZW1zICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGRpdmlkZS15IGRpdmlkZS1bI0U4RTdFMl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJweS0zIGZpcnN0OnB0LTAgbGFzdDpwYi0wIGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQteGwgb2JqZWN0LWNvdmVyIGJnLVsjRjlGOEY1XSBib3JkZXIgYm9yZGVyLVsjRThFN0UyXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIHRydW5jYXRlXCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XVwiPlNvbGQgYnkgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1bIzBFMEUwRV1cIj57aXRlbS52ZW5kb3J9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gbXQtMVwiPiR7aXRlbS5wcmljZX0gw5cge2l0ZW0ucXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydCh7IGlkOiBpdGVtLmlkLCB0aXRsZTogaXRlbS50aXRsZSwgcHJpY2U6IGl0ZW0ucHJpY2UsIG9yaWdpbmFsUHJpY2U6IGl0ZW0ucHJpY2UsIGltYWdlOiBpdGVtLmltYWdlLCB2ZW5kb3I6IGl0ZW0udmVuZG9yIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIGhvdmVyOmJnLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IEFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIOKUgOKUgCAzLiBXSVNITElTVCBUQUIg4pSA4pSAICovfVxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3dpc2hsaXN0JyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPk15IFNhdmVkIFdpc2hsaXN0PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl1cIj5Qcm9kdWN0cyB5b3Ugc2F2ZWQgZm9yIGxhdGVyLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHt3aXNobGlzdGVkUHJvZHVjdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTEyIHRleHQtY2VudGVyIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy1bI0ZGRjFGMl0gcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+4p2k77iPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXSBtYi0xXCI+WW91ciB3aXNobGlzdCBpcyBlbXB0eTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bIzZCNkE2Nl0gbWItNlwiPkV4cGxvcmUgcHJvZHVjdHMgYW5kIHRhcCB0aGUgaGVhcnQgaWNvbiB0byBzYXZlIGl0ZW1zIGhlcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSh7IHR5cGU6ICdob21lJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc20gcm91bmRlZC14bCBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQnJvd3NlIFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNobGlzdGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVXaXNobGlzdD17b25Ub2dnbGVXaXNobGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkVG9DYXJ0PXtvbkFkZFRvQ2FydH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9e2lkID0+IG9uTmF2aWdhdGUoeyB0eXBlOiAncHJvZHVjdCcsIGlkIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyog4pSA4pSAIDQuIFNBVkVEIEFERFJFU1NFUyBUQUIg4pSA4pSAICovfVxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2FkZHJlc3NlcycgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1bIzBFMEUwRV1cIj5TYXZlZCBBZGRyZXNzZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZBNjZdXCI+TWFuYWdlIGRlbGl2ZXJ5IGxvY2F0aW9ucyBmb3IgcXVpY2sgY2hlY2tvdXQuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGRyTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCByb3VuZGVkLXhsIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kzwvc3Bhbj4gQWRkIEFkZHJlc3NcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEFkZHJlc3MgQ2FyZHMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICB7dXNlci5hZGRyZXNzZXMubWFwKGFkZHIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YWRkci5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gcC01IHNoYWRvdy1zbSByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtWyMwRTBFMEVdIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+TjSB7YWRkci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRkci5pc0RlZmF1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCBiZy1bI0YwRkRGNF0gdGV4dC1bIzA1OTY2OV0gcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItWyNCQkY3RDBdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV1cIj57YWRkci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkE2Nl0gbXQtMVwiPnthZGRyLnBob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkE2Nl0gbXQtMVwiPnthZGRyLmxpbmUxfXthZGRyLmxpbmUyID8gYCwgJHthZGRyLmxpbmUyfWAgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZBNjZdXCI+e2FkZHIuY2l0eX0sIHthZGRyLnN0YXRlfSB7YWRkci5wb3N0YWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QTY2XVwiPnthZGRyLmNvdW50cnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGJvcmRlci10IGJvcmRlci1bI0U4RTdFMl0gbXQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlQWRkcmVzcyhhZGRyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bI0UxMUQ0OF0gaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshYWRkci5pc0RlZmF1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtWyNFODQ1MEFdIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldCBhcyBEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBBZGQgQWRkcmVzcyBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICB7c2hvd0FkZHJNb2RhbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svNDAgei01MCBiYWNrZHJvcC1ibHVyLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNiBtYXgtdy1tZCB3LWZ1bGwgc2hhZG93LTJ4bCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtWyMwRTBFMEVdXCI+QWRkIE5ldyBBZGRyZXNzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZHJNb2RhbChmYWxzZSl9IGNsYXNzTmFtZT1cInRleHQtWyM5Q0EzQUZdIGhvdmVyOnRleHQtWyMwRTBFMEVdXCI+4pyVPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkQWRkcmVzc1N1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS0zIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIHVwcGVyY2FzZVwiPkxhYmVsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG9tZSAvIFdvcmsgLyBDb3R0YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3QWRkci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROZXdBZGRyKGEgPT4gKHsgLi4uYSwgbGFiZWw6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIG10LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIHVwcGVyY2FzZVwiPlN0cmVldCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMjMgTWFpbiBTdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0FkZHIubGluZTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3QWRkcihhID0+ICh7IC4uLmEsIGxpbmUxOiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSB1cHBlcmNhc2VcIj5DaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5ldyBZb3JrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdBZGRyLmNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROZXdBZGRyKGEgPT4gKHsgLi4uYSwgY2l0eTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMwRTBFMEVdIHVwcGVyY2FzZVwiPlBvc3RhbCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwMDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0FkZHIucG9zdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3QWRkcihhID0+ICh7IC4uLmEsIHBvc3RhbDogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBtdC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkck1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMi41IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMi41IHJvdW5kZWQteGwgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiDilIDilIAgNS4gU0VDVVJJVFkgJiBTRVRUSU5HUyBUQUIg4pSA4pSAICovfVxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3NlY3VyaXR5JyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjMEUwRTBFXVwiPlNlY3VyaXR5ICYgUHJlZmVyZW5jZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QTY2XVwiPk1hbmFnZSBhY2NvdW50IGNyZWRlbnRpYWxzIGFuZCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3NlY3VyaXR5U2F2ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YwRkRGNF0gYm9yZGVyIGJvcmRlci1bI0JCRjdEMF0gcm91bmRlZC0yeGwgcHgtNSBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMDU5NjY5XVwiPlxuICAgICAgICAgICAgICAgICAgICDinJMgU2V0dGluZ3Mgc2F2ZWQhXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgey8qIENoYW5nZSBQYXNzd29yZCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHAtNiBzaGFkb3ctc20gc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmFzZSB0ZXh0LVsjMEUwRTBFXVwiPkNoYW5nZSBQYXNzd29yZDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBtYXgtdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzBFMEUwRV0gdXBwZXJjYXNlXCI+Q3VycmVudCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3Jkcy5jdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmRzKHAgPT4gKHsgLi4ucCwgY3VycmVudDogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgaC0xMCBweC0zIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0U4RTdFMl0gdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMEUwRTBFXSB1cHBlcmNhc2VcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZHMubmV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkcyhwID0+ICh7IC4uLnAsIG5leHQ6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFOEU3RTJdIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTZWN1cml0eVNhdmVkKHRydWUpOyBzZXRUaW1lb3V0KCgpID0+IHNldFNlY3VyaXR5U2F2ZWQoZmFsc2UpLCAzMDAwKSB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IGJnLVsjMEUwRTBFXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhzIHJvdW5kZWQteGwgaG92ZXI6YmctWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIE5vdGlmaWNhdGlvbnMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRThFN0UyXSBwLTYgc2hhZG93LXNtIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC1bIzBFMEUwRV1cIj5FbWFpbCAmIFNNUyBOb3RpZmljYXRpb25zPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnT3JkZXIgc3RhdHVzIHVwZGF0ZXMgJiBzaGlwcGluZyB0cmFja2luZycsIGRlZmF1bHRPbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdQcm9tb3Rpb25hbCBkZWFscyAmIGRpc2NvdW50IGNvdXBvbnMnLCBkZWZhdWx0T246IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnV2lzaGxpc3QgcHJpY2UgZHJvcCBhbGVydHMnLCBkZWZhdWx0T246IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgXS5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZD17aXRlbS5kZWZhdWx0T259IGNsYXNzTmFtZT1cInctNCBoLTQgYWNjZW50LVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEUwRTBFXVwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB0eXBlIHsgVmlldyB9IGZyb20gJy4uL2FwcC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHR5cGUgeyBBY2NvdW50VXNlciwgQWRkcmVzcywgQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uL3N0YXRlL21hcmtldHBsYWNlLXN0b3JlJ1xuaW1wb3J0IEFjY291bnRQYWdlQ29udGVudCBmcm9tICcuL2FjY291bnQvQWNjb3VudFBhZ2VDb250ZW50J1xuXG50eXBlIFByb3BzID0ge1xuICB0YWI/OiBzdHJpbmdcbiAgdXNlcjogQWNjb3VudFVzZXIgfCBudWxsXG4gIGlzTG9nZ2VkSW46IGJvb2xlYW5cbiAgd2lzaGxpc3Q6IFNldDxzdHJpbmc+XG4gIG9uTmF2aWdhdGU6ICh2OiBWaWV3KSA9PiB2b2lkXG4gIG9uTG9naW46ICh1c2VyOiBBY2NvdW50VXNlcikgPT4gdm9pZFxuICBvbkxvZ291dDogKCkgPT4gdm9pZFxuICBvblVwZGF0ZVByb2ZpbGU6IChwYXRjaDogUGFydGlhbDxBY2NvdW50VXNlcj4pID0+IHZvaWRcbiAgb25BZGRBZGRyZXNzOiAoYWRkcjogT21pdDxBZGRyZXNzLCAnaWQnPikgPT4gdm9pZFxuICBvblVwZGF0ZUFkZHJlc3M6IChpZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxBZGRyZXNzPikgPT4gdm9pZFxuICBvblJlbW92ZUFkZHJlc3M6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uVG9nZ2xlV2lzaGxpc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW1JbnB1dCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50UGFnZShwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIDxBY2NvdW50UGFnZUNvbnRlbnQgey4uLnByb3BzfSAvPlxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQXdCQSxJQUFNLGFBQWE7Q0FDakI7RUFDRSxJQUFJO0VBQ0osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZTtFQUNmLE9BQU8sQ0FDTDtHQUFFLElBQUk7R0FBSyxPQUFPO0dBQXdELE9BQU87R0FBUSxPQUFPO0dBQWlHLFFBQVE7R0FBYyxLQUFLO0VBQUUsR0FDOU47R0FBRSxJQUFJO0dBQU0sT0FBTztHQUE0QixPQUFPO0dBQU8sT0FBTztHQUFpRyxRQUFRO0dBQWEsS0FBSztFQUFFLENBQ25NO0NBQ0Y7Q0FDQTtFQUNFLElBQUk7RUFDSixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixlQUFlO0VBQ2YsT0FBTyxDQUNMO0dBQUUsSUFBSTtHQUFLLE9BQU87R0FBNkIs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