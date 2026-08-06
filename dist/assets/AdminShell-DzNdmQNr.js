const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-D46YPep5.js","assets/index-BM41bWnP.js","assets/index-BS0o29iu.css","assets/AreaChart-Cv4X_IYY.js","assets/adminData-rxTk4z3f.js","assets/StorefrontBuilder-KZHR6cVm.js","assets/HomepageCMS-CgJC_dir.js","assets/ProductsAdmin-CexHYnYK.js","assets/admin-jnfUkW2D.js","assets/VendorsAdmin-C2a1mxzy.js","assets/OrdersAdmin-B_bA2ljN.js","assets/CustomersAdmin-C__SsJwk.js","assets/InventoryAdmin-D0RGpcBW.js","assets/AnalyticsAdmin-Z27Rl5TV.js","assets/MarketingAdmin-BtkkUgWR.js","assets/FinanceAdmin-CihChCau.js","assets/SEOAdmin-B20z1a3A.js","assets/ThemeCustomizer-CJCxGe45.js","assets/SettingsAdmin-Bjrj-ifY.js","assets/RolesAdmin-6rBvg3G7.js","assets/AuditLogsAdmin-BoxAdB0v.js","assets/VendorApplicationsAdmin-BJ4c4VZs.js"])))=>i.map(i=>d[i]);
import { g as __toESM, i as require_jsx_runtime, n as __vitePreload, p as require_react, t as useSession } from "./index-BM41bWnP.js";
//#region src/admin/AdminSidebar.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdminSidebar({ navGroups, collapsed, expandedGroups, currentSection, onToggleCollapse, onToggleGroup, onSelectSection, onExitAdmin }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `flex flex-col bg-[#0F0F18] transition-all duration-300 flex-shrink-0 ${collapsed ? "w-14" : "w-60"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center h-14 border-b border-white/8 px-3.5 flex-shrink-0 ${collapsed ? "justify-center" : "gap-3"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-7 h-7 rounded-lg bg-[#E8450A] flex items-center justify-center flex-shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white text-sm font-bold",
						children: "N"
					})
				}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white font-bold text-sm leading-none",
						children: "Nexus"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[#5B5B72] text-[10px] mt-0.5",
						children: "Admin Panel"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onToggleCollapse,
					className: "text-[#5B5B72] hover:text-white transition-colors flex-shrink-0",
					children: "‹"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto py-2 px-2 space-y-0.5 scrollbar-none",
				children: navGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1",
					children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onToggleGroup(group.label),
						className: "w-full flex items-center justify-between px-2 py-1.5 text-[10px] font-bold text-[#4B4B62] uppercase tracking-widest hover:text-[#9B9BB8] transition-colors",
						children: [group.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `transition-transform ${expandedGroups.has(group.label) ? "rotate-180" : ""}`,
							children: "⌄"
						})]
					}), (collapsed || expandedGroups.has(group.label)) && group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onSelectSection(item.section),
						title: collapsed ? item.label : void 0,
						className: `w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all text-[13px] ${currentSection === item.section ? "bg-[#E8450A]/15 text-[#E8450A]" : "text-[#8B8BA8] hover:bg-white/5 hover:text-white"} ${collapsed ? "justify-center" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-shrink-0",
								children: item.icon
							}),
							!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium truncate flex-1 text-left",
								children: item.label
							}),
							!collapsed && currentSection === item.section && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto w-1.5 h-1.5 rounded-full bg-[#E8450A] flex-shrink-0" })
						]
					}, item.section))]
				}, group.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/8 p-2.5 space-y-2 flex-shrink-0",
				children: !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onExitAdmin,
					className: "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/8 text-[#C8C8E0] hover:bg-white/12 hover:text-white transition-all text-xs font-medium",
					children: "View Storefront"
				})
			})
		]
	});
}
//#endregion
//#region src/admin/AdminTopBar.tsx
function AdminTopBar({ label, userName, notifOpen, onToggleNotif, onPreviewStore, onQuickAdd, onSignOut }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "h-14 bg-white border-b border-[#E2E2EC] flex items-center gap-4 px-5 flex-shrink-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#9B9BB8] text-xs",
						children: "Admin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-[#111118] text-sm",
						children: label
					}),
					userName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-[#9B9BB8]",
						children: ["• ", userName]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 max-w-sm mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 h-8 px-3 bg-[#F4F4F8] rounded-lg border border-[#E2E2EC] text-sm text-[#9B9BB8] cursor-pointer hover:border-[#E8450A] transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs",
						children: "Search anything..."
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 ml-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onPreviewStore,
						className: "hidden md:flex items-center gap-1.5 h-8 px-3 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors",
						children: "Preview Store"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onToggleNotif,
							className: "relative w-8 h-8 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center transition-colors",
							children: "🔔"
						}), notifOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-[#E2E2EC] z-50 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-4 py-3 border-b border-[#E2E2EC]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-sm text-[#111118]",
									children: "Alerts"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-xs text-[#E8450A] font-semibold",
									children: "Mark all read"
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onQuickAdd,
						className: "flex items-center gap-1.5 h-8 px-3 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07] transition-colors",
						children: "Quick Add"
					}),
					onSignOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onSignOut,
						className: "hidden md:flex items-center gap-1.5 h-8 px-3 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors",
						children: "Sign Out"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/admin/AdminShellContent.tsx
var Icon = ({ d, size = 16 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	width: size,
	height: size,
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	strokeWidth: 1.7,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d })
});
var AdminDashboard = (0, import_react.lazy)(() => __vitePreload(() => import("./AdminDashboard-D46YPep5.js"), __vite__mapDeps([0,1,2,3,4])));
var StorefrontBuilder = (0, import_react.lazy)(() => __vitePreload(() => import("./StorefrontBuilder-KZHR6cVm.js"), __vite__mapDeps([5,1,2,4])));
var HomepageCMS = (0, import_react.lazy)(() => __vitePreload(() => import("./HomepageCMS-CgJC_dir.js"), __vite__mapDeps([6,1,2])));
var ProductsAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./ProductsAdmin-CexHYnYK.js"), __vite__mapDeps([7,1,2,8])));
var VendorsAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./VendorsAdmin-C2a1mxzy.js"), __vite__mapDeps([9,1,2,8])));
var OrdersAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./OrdersAdmin-B_bA2ljN.js"), __vite__mapDeps([10,1,2,8])));
var CustomersAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./CustomersAdmin-C__SsJwk.js"), __vite__mapDeps([11,1,2,8])));
var InventoryAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./InventoryAdmin-D0RGpcBW.js"), __vite__mapDeps([12,1,2,8])));
var AnalyticsAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./AnalyticsAdmin-Z27Rl5TV.js"), __vite__mapDeps([13,1,2,3,4])));
var MarketingAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./MarketingAdmin-BtkkUgWR.js"), __vite__mapDeps([14,1,2,4])));
var FinanceAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./FinanceAdmin-CihChCau.js"), __vite__mapDeps([15,1,2])));
var SEOAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./SEOAdmin-B20z1a3A.js"), __vite__mapDeps([16,1,2])));
var ThemeCustomizer = (0, import_react.lazy)(() => __vitePreload(() => import("./ThemeCustomizer-CJCxGe45.js"), __vite__mapDeps([17,1,2])));
var SettingsAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./SettingsAdmin-Bjrj-ifY.js"), __vite__mapDeps([18,1,2])));
var RolesAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./RolesAdmin-6rBvg3G7.js"), __vite__mapDeps([19,1,2])));
var AuditLogsAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./AuditLogsAdmin-BoxAdB0v.js"), __vite__mapDeps([20,1,2])));
var VendorApplicationsAdmin = (0, import_react.lazy)(() => __vitePreload(() => import("./VendorApplicationsAdmin-BJ4c4VZs.js"), __vite__mapDeps([21,1,2])));
var navGroups = [
	{
		label: "Overview",
		items: [{
			section: "dashboard",
			label: "Dashboard",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" })
		}]
	},
	{
		label: "Storefront",
		items: [
			{
				section: "storefront-builder",
				label: "Homepage Builder",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" })
			},
			{
				section: "homepage-cms",
				label: "Hero Banners",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" })
			},
			{
				section: "theme-customizer",
				label: "Theme Customizer",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" })
			}
		]
	},
	{
		label: "Catalog",
		items: [{
			section: "products",
			label: "Products",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" })
		}, {
			section: "inventory",
			label: "Inventory",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8M10 12h4" })
		}]
	},
	{
		label: "Sales",
		items: [{
			section: "orders",
			label: "All Orders",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" })
		}, {
			section: "customers",
			label: "Customers",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" })
		}]
	},
	{
		label: "Vendors",
		items: [{
			section: "vendors",
			label: "All Vendors",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" })
		}, {
			section: "vendors-applications",
			label: "Applications",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })
		}]
	},
	{
		label: "Marketing",
		items: [{
			section: "marketing",
			label: "Campaigns & Promos",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" })
		}, {
			section: "seo",
			label: "SEO",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })
		}]
	},
	{
		label: "Analytics",
		items: [{
			section: "analytics",
			label: "Analytics",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" })
		}]
	},
	{
		label: "Finance",
		items: [{
			section: "finance",
			label: "Finance",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
		}]
	},
	{
		label: "Platform",
		items: [
			{
				section: "settings",
				label: "Settings",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
			},
			{
				section: "roles",
				label: "Roles & Permissions",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" })
			},
			{
				section: "audit-logs",
				label: "Audit Logs",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" })
			}
		]
	}
];
var sectionPages = {
	dashboard: AdminDashboard,
	"storefront-builder": StorefrontBuilder,
	"homepage-cms": HomepageCMS,
	products: ProductsAdmin,
	vendors: VendorsAdmin,
	orders: OrdersAdmin,
	customers: CustomersAdmin,
	inventory: InventoryAdmin,
	analytics: AnalyticsAdmin,
	marketing: MarketingAdmin,
	finance: FinanceAdmin,
	seo: SEOAdmin,
	"theme-customizer": ThemeCustomizer,
	settings: SettingsAdmin,
	roles: RolesAdmin,
	"audit-logs": AuditLogsAdmin,
	"vendors-applications": VendorApplicationsAdmin
};
function Placeholder({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex flex-col items-center justify-center gap-4 p-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-2xl bg-[#F4F4F8] flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#9B9BB8]",
					children: "⌂"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-[#111118]",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-[#6B6B82] mt-1",
				children: "This section is ready for content."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs bg-[#EEF2FF] text-[#6366F1] px-3 py-1.5 rounded-full font-semibold",
				children: "Coming Soon"
			})
		]
	});
}
function AdminShellContent({ onExitAdmin }) {
	const session = useSession();
	const [section, setSection] = (0, import_react.useState)("dashboard");
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [expandedGroups, setExpandedGroups] = (0, import_react.useState)(/* @__PURE__ */ new Set([
		"Overview",
		"Storefront",
		"Catalog",
		"Sales",
		"Vendors",
		"Marketing"
	]));
	const [notifOpen, setNotifOpen] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("admin@marketplace.local");
	const [password, setPassword] = (0, import_react.useState)("seeded-password");
	const [loginError, setLoginError] = (0, import_react.useState)(null);
	const [loggingIn, setLoggingIn] = (0, import_react.useState)(false);
	const currentLabel = navGroups.flatMap((g) => g.items).find((i) => i.section === section)?.label ?? "Dashboard";
	const PageComponent = sectionPages[section];
	if (session.status === "loading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#F4F4F8] flex items-center justify-center px-6",
		style: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-[#E2E2EC] bg-white px-6 py-5 shadow-[0_20px_80px_rgba(15,15,24,0.08)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-[#111118]",
				children: "Restoring your admin session..."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-[#6B6B82]",
				children: "Checking auth and permissions."
			})]
		})
	});
	if (session.status !== "authenticated") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#F4F4F8] flex items-center justify-center px-6",
		style: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-3xl border border-[#E2E2EC] bg-white p-8 shadow-[0_20px_80px_rgba(15,15,24,0.08)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.28em] text-[#9B9BB8]",
					children: "Admin Access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl font-black text-[#111118]",
					children: "Sign in to the marketplace admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[#6B6B82]",
					children: "Use the seeded development account to load live dashboard data and RBAC-protected CRUD routes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-4",
					onSubmit: async (event) => {
						event.preventDefault();
						setLoggingIn(true);
						setLoginError(null);
						const result = await session.signIn(email, password);
						if (!result.ok) setLoginError(result.message ?? "Unable to sign in.");
						setLoggingIn(false);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold uppercase tracking-wide text-[#6B6B82]",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: email,
								onChange: (event) => setEmail(event.target.value),
								className: "w-full h-11 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] px-4 text-sm outline-none transition-colors focus:border-[#E8450A]",
								placeholder: "admin@marketplace.local",
								type: "email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold uppercase tracking-wide text-[#6B6B82]",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: password,
								onChange: (event) => setPassword(event.target.value),
								className: "w-full h-11 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] px-4 text-sm outline-none transition-colors focus:border-[#E8450A]",
								placeholder: "seeded-password",
								type: "password"
							})]
						}),
						loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]",
							children: loginError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loggingIn,
								className: "w-full rounded-xl bg-[#E8450A] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C93A07] disabled:cursor-not-allowed disabled:opacity-70",
								children: loggingIn ? "Signing in..." : "Sign In"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: async () => {
									setLoggingIn(true);
									await session.signIn("admin@marketplace.local", "seeded-password");
									setLoggingIn(false);
								},
								className: "w-full rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] px-4 py-3 text-sm font-semibold text-[#111118] transition-colors hover:bg-[#EEF2FF] hover:text-[#6366F1]",
								children: "⚡ Instant Demo Login (No Backend Needed)"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl bg-[#0F0F18] p-4 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.28em] text-[#8A8AA3]",
							children: "Dev account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-sm",
							children: "admin@marketplace.local"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm",
							children: "seeded-password"
						})
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen bg-[#F4F4F8] overflow-hidden",
		style: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {
			navGroups,
			collapsed,
			expandedGroups,
			currentSection: section,
			onToggleCollapse: () => setCollapsed((v) => !v),
			onToggleGroup: (label) => {
				setExpandedGroups((prev) => {
					const next = new Set(prev);
					if (next.has(label)) next.delete(label);
					else next.add(label);
					return next;
				});
			},
			onSelectSection: setSection,
			onExitAdmin: () => onExitAdmin({ type: "home" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTopBar, {
				label: currentLabel,
				userName: session.user?.fullName,
				notifOpen,
				onToggleNotif: () => setNotifOpen((v) => !v),
				onPreviewStore: () => onExitAdmin({ type: "home" }),
				onQuickAdd: () => {},
				onSignOut: () => {
					session.signOut();
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, { title: `Loading ${currentLabel}` }),
					children: PageComponent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageComponent, { onNavigate: setSection }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, { title: currentLabel })
				})
			})]
		})]
	});
}
//#endregion
//#region src/admin/AdminShell.tsx
function AdminShell(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShellContent, { ...props });
}
//#endregion
export { AdminShell as default };


//# sourceMappingURL=data:application/json;base64,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QUFDO0lBQ3pDLHNCQUFzQixZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7SUFDbEQsa0JBQWtCLENBQUM7SUFDbkIsaUJBQWlCO0tBQ2YsUUFBYSxRQUFRO0lBQ3ZCO0dBQ0QsSUFDRCw0Q0FBQyxRQUFEO0lBQU0sV0FBVTtJQUNkLHNEQUFDLHVCQUFEO0tBQVUsVUFBVSw0Q0FBQyxhQUFELEVBQWEsT0FBTyxXQUFXLGVBQWlCO0tBQ2pFLDBCQUFnQiw0Q0FBQyxlQUFELEVBQWUsWUFBWSxXQUFhLEtBQUksNENBQUMsYUFBRCxFQUFhLE9BQU8sYUFBZTtJQUN4RjtHQUNOLEVBQ0g7RUFDRjs7QUFFVDs7O0FDNU9BLFNBQXdCLFdBQVcsT0FBYztDQUMvQyxPQUFPLDRDQUFDLG1CQUFELEVBQW1CLEdBQUksTUFBUTtBQUN4QyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL0FkbWluU2lkZWJhci50c3giLCIuLi8uLi9zcmMvYWRtaW4vQWRtaW5Ub3BCYXIudHN4IiwiLi4vLi4vc3JjL2FkbWluL0FkbWluU2hlbGxDb250ZW50LnRzeCIsIi4uLy4uL3NyYy9hZG1pbi9BZG1pblNoZWxsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFkbWluU2VjdGlvbiB9IGZyb20gJy4vYWRtaW5EYXRhJ1xuXG50eXBlIE5hdkl0ZW0gPSB7XG4gIHNlY3Rpb246IEFkbWluU2VjdGlvblxuICBsYWJlbDogc3RyaW5nXG4gIGljb246IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG50eXBlIE5hdkdyb3VwID0ge1xuICBsYWJlbDogc3RyaW5nXG4gIGl0ZW1zOiBOYXZJdGVtW11cbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgbmF2R3JvdXBzOiBOYXZHcm91cFtdXG4gIGNvbGxhcHNlZDogYm9vbGVhblxuICBleHBhbmRlZEdyb3VwczogU2V0PHN0cmluZz5cbiAgY3VycmVudFNlY3Rpb246IEFkbWluU2VjdGlvblxuICBvblRvZ2dsZUNvbGxhcHNlOiAoKSA9PiB2b2lkXG4gIG9uVG9nZ2xlR3JvdXA6IChsYWJlbDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uU2VsZWN0U2VjdGlvbjogKHNlY3Rpb246IEFkbWluU2VjdGlvbikgPT4gdm9pZFxuICBvbkV4aXRBZG1pbjogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pblNpZGViYXIoe1xuICBuYXZHcm91cHMsXG4gIGNvbGxhcHNlZCxcbiAgZXhwYW5kZWRHcm91cHMsXG4gIGN1cnJlbnRTZWN0aW9uLFxuICBvblRvZ2dsZUNvbGxhcHNlLFxuICBvblRvZ2dsZUdyb3VwLFxuICBvblNlbGVjdFNlY3Rpb24sXG4gIG9uRXhpdEFkbWluLFxufTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBiZy1bIzBGMEYxOF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGZsZXgtc2hyaW5rLTAgJHtjb2xsYXBzZWQgPyAndy0xNCcgOiAndy02MCd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGgtMTQgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzggcHgtMy41IGZsZXgtc2hyaW5rLTAgJHtjb2xsYXBzZWQgPyAnanVzdGlmeS1jZW50ZXInIDogJ2dhcC0zJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcgaC03IHJvdW5kZWQtbGcgYmctWyNFODQ1MEFdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkXCI+Tjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshY29sbGFwc2VkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXgtMVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXNtIGxlYWRpbmctbm9uZVwiPk5leHVzPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNUI1QjcyXSB0ZXh0LVsxMHB4XSBtdC0wLjVcIj5BZG1pbiBQYW5lbDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblRvZ2dsZUNvbGxhcHNlfSBjbGFzc05hbWU9XCJ0ZXh0LVsjNUI1QjcyXSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGZsZXgtc2hyaW5rLTBcIj7igLk8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHB5LTIgcHgtMiBzcGFjZS15LTAuNSBzY3JvbGxiYXItbm9uZVwiPlxuICAgICAgICB7bmF2R3JvdXBzLm1hcChncm91cCA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2dyb3VwLmxhYmVsfSBjbGFzc05hbWU9XCJtYi0xXCI+XG4gICAgICAgICAgICB7IWNvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25Ub2dnbGVHcm91cChncm91cC5sYWJlbCl9IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMiBweS0xLjUgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtWyM0QjRCNjJdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC1bIzlCOUJCOF0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICB7Z3JvdXAubGFiZWx9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtleHBhbmRlZEdyb3Vwcy5oYXMoZ3JvdXAubGFiZWwpID8gJ3JvdGF0ZS0xODAnIDogJyd9YH0+4oyEPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7KGNvbGxhcHNlZCB8fCBleHBhbmRlZEdyb3Vwcy5oYXMoZ3JvdXAubGFiZWwpKSAmJiBncm91cC5pdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uc2VjdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdFNlY3Rpb24oaXRlbS5zZWN0aW9uKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17Y29sbGFwc2VkID8gaXRlbS5sYWJlbCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSBweC0yLjUgcHktMiByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIHRleHQtWzEzcHhdICR7Y3VycmVudFNlY3Rpb24gPT09IGl0ZW0uc2VjdGlvbiA/ICdiZy1bI0U4NDUwQV0vMTUgdGV4dC1bI0U4NDUwQV0nIDogJ3RleHQtWyM4QjhCQThdIGhvdmVyOmJnLXdoaXRlLzUgaG92ZXI6dGV4dC13aGl0ZSd9ICR7Y29sbGFwc2VkID8gJ2p1c3RpZnktY2VudGVyJyA6ICcnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+e2l0ZW0uaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgeyFjb2xsYXBzZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdHJ1bmNhdGUgZmxleC0xIHRleHQtbGVmdFwiPntpdGVtLmxhYmVsfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgeyFjb2xsYXBzZWQgJiYgY3VycmVudFNlY3Rpb24gPT09IGl0ZW0uc2VjdGlvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJtbC1hdXRvIHctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1bI0U4NDUwQV0gZmxleC1zaHJpbmstMFwiIC8+fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItd2hpdGUvOCBwLTIuNSBzcGFjZS15LTIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICB7IWNvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkV4aXRBZG1pbn0gY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjUgcHgtMyBweS0yIHJvdW5kZWQtbGcgYmctd2hpdGUvOCB0ZXh0LVsjQzhDOEUwXSBob3ZlcjpiZy13aGl0ZS8xMiBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIFZpZXcgU3RvcmVmcm9udFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuIiwidHlwZSBQcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICB1c2VyTmFtZT86IHN0cmluZ1xuICBub3RpZk9wZW46IGJvb2xlYW5cbiAgb25Ub2dnbGVOb3RpZjogKCkgPT4gdm9pZFxuICBvblByZXZpZXdTdG9yZTogKCkgPT4gdm9pZFxuICBvblF1aWNrQWRkOiAoKSA9PiB2b2lkXG4gIG9uU2lnbk91dD86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5Ub3BCYXIoe1xuICBsYWJlbCxcbiAgdXNlck5hbWUsXG4gIG5vdGlmT3BlbixcbiAgb25Ub2dnbGVOb3RpZixcbiAgb25QcmV2aWV3U3RvcmUsXG4gIG9uUXVpY2tBZGQsXG4gIG9uU2lnbk91dCxcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoLTE0IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1bI0UyRTJFQ10gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHgtNSBmbGV4LXNocmluay0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc21cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF0gdGV4dC14c1wiPkFkbWluPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHRleHQtc21cIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICB7dXNlck5hbWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPuKAoiB7dXNlck5hbWV9PC9zcGFuPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWF4LXctc20gbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGgtOCBweC0zIGJnLVsjRjRGNEY4XSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHRleHQtc20gdGV4dC1bIzlCOUJCOF0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHNcIj5TZWFyY2ggYW55dGhpbmcuLi48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1sLWF1dG9cIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblByZXZpZXdTdG9yZX0gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgaC04IHB4LTMgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6Ym9yZGVyLVsjRTg0NTBBXSBob3Zlcjp0ZXh0LVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIFByZXZpZXcgU3RvcmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uVG9nZ2xlTm90aWZ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctOCBoLTggcm91bmRlZC1sZyBob3ZlcjpiZy1bI0Y0RjRGOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnNcIj7wn5SUPC9idXR0b24+XG4gICAgICAgICAge25vdGlmT3BlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1mdWxsIHJpZ2h0LTAgbXQtMiB3LTgwIGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LTJ4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSB6LTUwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTMgYm9yZGVyLWIgYm9yZGVyLVsjRTJFMkVDXVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0ZXh0LVsjMTExMTE4XVwiPkFsZXJ0czwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI0U4NDUwQV0gZm9udC1zZW1pYm9sZFwiPk1hcmsgYWxsIHJlYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblF1aWNrQWRkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGgtOCBweC0zIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIFF1aWNrIEFkZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge29uU2lnbk91dCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblNpZ25PdXR9IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGgtOCBweC0zIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJvcmRlci1bI0U4NDUwQV0gaG92ZXI6dGV4dC1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgIFNpZ24gT3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgU3VzcGVuc2UsIGxhenksIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluU2VjdGlvbiB9IGZyb20gJy4vYWRtaW5EYXRhJ1xuaW1wb3J0IHR5cGUgeyBWaWV3IH0gZnJvbSAnLi4vYXBwL25hdmlnYXRpb24nXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnQC9zdGF0ZS9zZXNzaW9uLXN0b3JlJ1xuaW1wb3J0IEFkbWluU2lkZWJhciBmcm9tICcuL0FkbWluU2lkZWJhcidcbmltcG9ydCBBZG1pblRvcEJhciBmcm9tICcuL0FkbWluVG9wQmFyJ1xuXG50eXBlIFByb3BzID0ge1xuICBvbkV4aXRBZG1pbjogKHY6IFZpZXcpID0+IHZvaWRcbn1cblxudHlwZSBOYXZJdGVtID0ge1xuICBzZWN0aW9uOiBBZG1pblNlY3Rpb25cbiAgbGFiZWw6IHN0cmluZ1xuICBpY29uOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxudHlwZSBOYXZHcm91cCA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICBpdGVtczogTmF2SXRlbVtdXG59XG5cbmNvbnN0IEljb24gPSAoeyBkLCBzaXplID0gMTYgfTogeyBkOiBzdHJpbmc7IHNpemU/OiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsxLjd9IHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPXtkfSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgQWRtaW5EYXNoYm9hcmQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9BZG1pbkRhc2hib2FyZCcpKVxuY29uc3QgU3RvcmVmcm9udEJ1aWxkZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9TdG9yZWZyb250QnVpbGRlcicpKVxuY29uc3QgSG9tZXBhZ2VDTVMgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9Ib21lcGFnZUNNUycpKVxuY29uc3QgUHJvZHVjdHNBZG1pbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL1Byb2R1Y3RzQWRtaW4nKSlcbmNvbnN0IFZlbmRvcnNBZG1pbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL1ZlbmRvcnNBZG1pbicpKVxuY29uc3QgT3JkZXJzQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9PcmRlcnNBZG1pbicpKVxuY29uc3QgQ3VzdG9tZXJzQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9DdXN0b21lcnNBZG1pbicpKVxuY29uc3QgSW52ZW50b3J5QWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9JbnZlbnRvcnlBZG1pbicpKVxuY29uc3QgQW5hbHl0aWNzQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9BbmFseXRpY3NBZG1pbicpKVxuY29uc3QgTWFya2V0aW5nQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9NYXJrZXRpbmdBZG1pbicpKVxuY29uc3QgRmluYW5jZUFkbWluID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vcGFnZXMvRmluYW5jZUFkbWluJykpXG5jb25zdCBTRU9BZG1pbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL1NFT0FkbWluJykpXG5jb25zdCBUaGVtZUN1c3RvbWl6ZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9UaGVtZUN1c3RvbWl6ZXInKSlcbmNvbnN0IFNldHRpbmdzQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9TZXR0aW5nc0FkbWluJykpXG5jb25zdCBSb2xlc0FkbWluID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vcGFnZXMvUm9sZXNBZG1pbicpKVxuY29uc3QgQXVkaXRMb2dzQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9BdWRpdExvZ3NBZG1pbicpKVxuY29uc3QgVmVuZG9yQXBwbGljYXRpb25zQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9wYWdlcy9WZW5kb3JBcHBsaWNhdGlvbnNBZG1pbicpKVxuXG5jb25zdCBuYXZHcm91cHM6IE5hdkdyb3VwW10gPSBbXG4gIHsgbGFiZWw6ICdPdmVydmlldycsIGl0ZW1zOiBbeyBzZWN0aW9uOiAnZGFzaGJvYXJkJywgbGFiZWw6ICdEYXNoYm9hcmQnLCBpY29uOiA8SWNvbiBkPVwiTTMgMTJsMi0ybTAgMGw3LTcgNyA3TTUgMTB2MTBhMSAxIDAgMDAxIDFoM20xMC0xMWwyIDJtLTItMnYxMGExIDEgMCAwMS0xIDFoLTNtLTYgMGExIDEgMCAwMDEtMXYtNGExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjRhMSAxIDAgMDAxIDFtLTYgMGg2XCIgLz4gfV0gfSxcbiAgeyBsYWJlbDogJ1N0b3JlZnJvbnQnLCBpdGVtczogW3sgc2VjdGlvbjogJ3N0b3JlZnJvbnQtYnVpbGRlcicsIGxhYmVsOiAnSG9tZXBhZ2UgQnVpbGRlcicsIGljb246IDxJY29uIGQ9XCJNNCA1YTEgMSAwIDAxMS0xaDE0YTEgMSAwIDAxMSAxdjJhMSAxIDAgMDEtMSAxSDVhMSAxIDAgMDEtMS0xVjV6TTQgMTNhMSAxIDAgMDExLTFoNmExIDEgMCAwMTEgMXY2YTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMXYtNnpNMTYgMTNhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY2YTEgMSAwIDAxLTEgMWgtMmExIDEgMCAwMS0xLTF2LTZ6XCIgLz4gfSwgeyBzZWN0aW9uOiAnaG9tZXBhZ2UtY21zJywgbGFiZWw6ICdIZXJvIEJhbm5lcnMnLCBpY29uOiA8SWNvbiBkPVwiTTQgMTZsNC41ODYtNC41ODZhMiAyIDAgMDEyLjgyOCAwTDE2IDE2bS0yLTJsMS41ODYtMS41ODZhMiAyIDAgMDEyLjgyOCAwTDIwIDE0bS02LTZoLjAxTTYgMjBoMTJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCIgLz4gfSwgeyBzZWN0aW9uOiAndGhlbWUtY3VzdG9taXplcicsIGxhYmVsOiAnVGhlbWUgQ3VzdG9taXplcicsIGljb246IDxJY29uIGQ9XCJNNyAyMWE0IDQgMCAwMS00LTRWNWEyIDIgMCAwMTItMmg0YTIgMiAwIDAxMiAydjEyYTQgNCAwIDAxLTQgNHptMCAwaDEyYTIgMiAwIDAwMi0ydi00YTIgMiAwIDAwLTItMmgtMi4zNDNNMTEgNy4zNDNsMS42NTctMS42NTdhMiAyIDAgMDEyLjgyOCAwbDIuODI5IDIuODI5YTIgMiAwIDAxMCAyLjgyOGwtOC40ODYgOC40ODVNNyAxN2guMDFcIiAvPiB9XSB9LFxuICB7IGxhYmVsOiAnQ2F0YWxvZycsIGl0ZW1zOiBbeyBzZWN0aW9uOiAncHJvZHVjdHMnLCBsYWJlbDogJ1Byb2R1Y3RzJywgaWNvbjogPEljb24gZD1cIk0yMCA3bC04LTQtOCA0bTE2IDBsLTggNG04LTR2MTBsLTggNG0wLTEwTDQgN204IDR2MTBNNCA3djEwbDggNFwiIC8+IH0sIHsgc2VjdGlvbjogJ2ludmVudG9yeScsIGxhYmVsOiAnSW52ZW50b3J5JywgaWNvbjogPEljb24gZD1cIk01IDhoMTRNNSA4YTIgMiAwIDExMC00aDE0YTIgMiAwIDExMCA0TTUgOGwxLjUgOWgxMUwxOSA4TTEwIDEyaDRcIiAvPiB9XSB9LFxuICB7IGxhYmVsOiAnU2FsZXMnLCBpdGVtczogW3sgc2VjdGlvbjogJ29yZGVycycsIGxhYmVsOiAnQWxsIE9yZGVycycsIGljb246IDxJY29uIGQ9XCJNOSA1SDdhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0yaC0yTTkgNWEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yTTkgNWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAybS0zIDdoM20tMyA0aDNtLTYtNGguMDFNOSAxNmguMDFcIiAvPiB9LCB7IHNlY3Rpb246ICdjdXN0b21lcnMnLCBsYWJlbDogJ0N1c3RvbWVycycsIGljb246IDxJY29uIGQ9XCJNMTcgMjBoNXYtMmEzIDMgMCAwMC01LjM1Ni0xLjg1N00xNyAyMEg3bTEwIDB2LTJjMC0uNjU2LS4xMjYtMS4yODMtLjM1Ni0xLjg1N003IDIwSDJ2LTJhMyAzIDAgMDE1LjM1Ni0xLjg1N003IDIwdi0yYzAtLjY1Ni4xMjYtMS4yODMuMzU2LTEuODU3bTAgMGE1LjAwMiA1LjAwMiAwIDAxOS4yODggME0xNSA3YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIiAvPiB9XSB9LFxuICB7IGxhYmVsOiAnVmVuZG9ycycsIGl0ZW1zOiBbeyBzZWN0aW9uOiAndmVuZG9ycycsIGxhYmVsOiAnQWxsIFZlbmRvcnMnLCBpY29uOiA8SWNvbiBkPVwiTTE5IDIxVjVhMiAyIDAgMDAtMi0ySDdhMiAyIDAgMDAtMiAydjE2bTE0IDBoMm0tMiAwaC01bS05IDBIM20yIDBoNU05IDdoMW0tMSA0aDFtNC00aDFtLTEgNGgxbS0yIDEwdi01YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NW0tNCAwaDRcIiAvPiB9LCB7IHNlY3Rpb246ICd2ZW5kb3JzLWFwcGxpY2F0aW9ucycsIGxhYmVsOiAnQXBwbGljYXRpb25zJywgaWNvbjogPEljb24gZD1cIk05IDEyaDZtLTYgNGg2bTIgNUg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCIgLz4gfV0gfSxcbiAgeyBsYWJlbDogJ01hcmtldGluZycsIGl0ZW1zOiBbeyBzZWN0aW9uOiAnbWFya2V0aW5nJywgbGFiZWw6ICdDYW1wYWlnbnMgJiBQcm9tb3MnLCBpY29uOiA8SWNvbiBkPVwiTTExIDUuODgyVjE5LjI0YTEuNzYgMS43NiAwIDAxLTMuNDE3LjU5MmwtMi4xNDctNi4xNU0xOCAxM2EzIDMgMCAxMDAtNk01LjQzNiAxMy42ODNBNC4wMDEgNC4wMDEgMCAwMTcgNmgxLjgzMmM0LjEgMCA3LjYyNS0xLjIzNCA5LjE2OC0zdjE0Yy0xLjU0My0xLjc2Ni01LjA2Ny0zLTkuMTY4LTNIN2EzLjk4OCAzLjk4OCAwIDAxLTEuNTY0LS4zMTd6XCIgLz4gfSwgeyBzZWN0aW9uOiAnc2VvJywgbGFiZWw6ICdTRU8nLCBpY29uOiA8SWNvbiBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiIC8+IH1dIH0sXG4gIHsgbGFiZWw6ICdBbmFseXRpY3MnLCBpdGVtczogW3sgc2VjdGlvbjogJ2FuYWx5dGljcycsIGxhYmVsOiAnQW5hbHl0aWNzJywgaWNvbjogPEljb24gZD1cIk05IDE5di02YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJ6bTAgMFY5YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MTBtLTYgMGEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0ybTAgMFY1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MTRhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMnpcIiAvPiB9XSB9LFxuICB7IGxhYmVsOiAnRmluYW5jZScsIGl0ZW1zOiBbeyBzZWN0aW9uOiAnZmluYW5jZScsIGxhYmVsOiAnRmluYW5jZScsIGljb246IDxJY29uIGQ9XCJNMTIgOGMtMS42NTcgMC0zIC44OTUtMyAyczEuMzQzIDIgMyAyIDMgLjg5NSAzIDItMS4zNDMgMi0zIDJtMC04YzEuMTEgMCAyLjA4LjQwMiAyLjU5OSAxTTEyIDhWN20wIDF2OG0wIDB2MW0wLTFjLTEuMTEgMC0yLjA4LS40MDItMi41OTktMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIiAvPiB9XSB9LFxuICB7IGxhYmVsOiAnUGxhdGZvcm0nLCBpdGVtczogW3sgc2VjdGlvbjogJ3NldHRpbmdzJywgbGFiZWw6ICdTZXR0aW5ncycsIGljb246IDxJY29uIGQ9XCJNMTAuMzI1IDQuMzE3Yy40MjYtMS43NTYgMi45MjQtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAyLjU3MyAxLjA2NmMxLjU0My0uOTQgMy4zMS44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAxLjA2NSAyLjU3MmMxLjc1Ni40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjYgMi41NzNjLjk0IDEuNTQzLS44MjYgMy4zMS0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1Ni0yLjkyNCAxLjc1Ni0zLjM1IDBhMS43MjQgMS43MjQgMCAwMC0yLjU3My0xLjA2NmMtMS41NDMuOTQtMy4zMS0uODI2LTIuMzctMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTEuMDY1LTIuNTcyYy0xLjc1Ni0uNDI2LTEuNzU2LTIuOTI0IDAtMy4zNWExLjcyNCAxLjcyNCAwIDAwMS4wNjYtMi41NzNjLS45NC0xLjU0My44MjYtMy4zMSAyLjM3LTIuMzcuOTk2LjYwOCAyLjI5Ni4wNyAyLjU3Mi0xLjA2NXogTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIiAvPiB9LCB7IHNlY3Rpb246ICdyb2xlcycsIGxhYmVsOiAnUm9sZXMgJiBQZXJtaXNzaW9ucycsIGljb246IDxJY29uIGQ9XCJNMTUgN2EyIDIgMCAwMTIgMm00IDBhNiA2IDAgMDEtNy43NDMgNS43NDNMMTEgMTdIOXYySDd2Mkg0YTEgMSAwIDAxLTEtMXYtMi41ODZhMSAxIDAgMDEuMjkzLS43MDdsNS45NjQtNS45NjRBNiA2IDAgMTEyMSA5elwiIC8+IH0sIHsgc2VjdGlvbjogJ2F1ZGl0LWxvZ3MnLCBsYWJlbDogJ0F1ZGl0IExvZ3MnLCBpY29uOiA8SWNvbiBkPVwiTTkgNUg3YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMk05IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMlwiIC8+IH1dIH0sXG5dXG5cbmNvbnN0IHNlY3Rpb25QYWdlczogUGFydGlhbDxSZWNvcmQ8QWRtaW5TZWN0aW9uLCBSZWFjdC5GQzx7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfT4+PiA9IHtcbiAgZGFzaGJvYXJkOiBBZG1pbkRhc2hib2FyZCxcbiAgJ3N0b3JlZnJvbnQtYnVpbGRlcic6IFN0b3JlZnJvbnRCdWlsZGVyLFxuICAnaG9tZXBhZ2UtY21zJzogSG9tZXBhZ2VDTVMsXG4gIHByb2R1Y3RzOiBQcm9kdWN0c0FkbWluLFxuICB2ZW5kb3JzOiBWZW5kb3JzQWRtaW4sXG4gIG9yZGVyczogT3JkZXJzQWRtaW4sXG4gIGN1c3RvbWVyczogQ3VzdG9tZXJzQWRtaW4sXG4gIGludmVudG9yeTogSW52ZW50b3J5QWRtaW4sXG4gIGFuYWx5dGljczogQW5hbHl0aWNzQWRtaW4sXG4gIG1hcmtldGluZzogTWFya2V0aW5nQWRtaW4sXG4gIGZpbmFuY2U6IEZpbmFuY2VBZG1pbixcbiAgc2VvOiBTRU9BZG1pbixcbiAgJ3RoZW1lLWN1c3RvbWl6ZXInOiBUaGVtZUN1c3RvbWl6ZXIsXG4gIHNldHRpbmdzOiBTZXR0aW5nc0FkbWluLFxuICByb2xlczogUm9sZXNBZG1pbixcbiAgJ2F1ZGl0LWxvZ3MnOiBBdWRpdExvZ3NBZG1pbixcbiAgJ3ZlbmRvcnMtYXBwbGljYXRpb25zJzogVmVuZG9yQXBwbGljYXRpb25zQWRtaW4sXG59XG5cbmZ1bmN0aW9uIFBsYWNlaG9sZGVyKHsgdGl0bGUgfTogeyB0aXRsZTogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBwLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLTJ4bCBiZy1bI0Y0RjRGOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzlCOUJCOF1cIj7ijII8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57dGl0bGV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZCODJdIG10LTFcIj5UaGlzIHNlY3Rpb24gaXMgcmVhZHkgZm9yIGNvbnRlbnQuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLVsjRUVGMkZGXSB0ZXh0LVsjNjM2NkYxXSBweC0zIHB5LTEuNSByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZFwiPkNvbWluZyBTb29uPC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluU2hlbGxDb250ZW50KHsgb25FeGl0QWRtaW4gfTogUHJvcHMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKVxuICBjb25zdCBbc2VjdGlvbiwgc2V0U2VjdGlvbl0gPSB1c2VTdGF0ZTxBZG1pblNlY3Rpb24+KCdkYXNoYm9hcmQnKVxuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtleHBhbmRlZEdyb3Vwcywgc2V0RXhwYW5kZWRHcm91cHNdID0gdXNlU3RhdGU8U2V0PHN0cmluZz4+KG5ldyBTZXQoWydPdmVydmlldycsICdTdG9yZWZyb250JywgJ0NhdGFsb2cnLCAnU2FsZXMnLCAnVmVuZG9ycycsICdNYXJrZXRpbmcnXSkpXG4gIGNvbnN0IFtub3RpZk9wZW4sIHNldE5vdGlmT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnYWRtaW5AbWFya2V0cGxhY2UubG9jYWwnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCdzZWVkZWQtcGFzc3dvcmQnKVxuICBjb25zdCBbbG9naW5FcnJvciwgc2V0TG9naW5FcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbbG9nZ2luZ0luLCBzZXRMb2dnaW5nSW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgY3VycmVudExhYmVsID0gbmF2R3JvdXBzLmZsYXRNYXAoZyA9PiBnLml0ZW1zKS5maW5kKGkgPT4gaS5zZWN0aW9uID09PSBzZWN0aW9uKT8ubGFiZWwgPz8gJ0Rhc2hib2FyZCdcbiAgY29uc3QgUGFnZUNvbXBvbmVudCA9IHNlY3Rpb25QYWdlc1tzZWN0aW9uXVxuXG4gIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLVsjRjRGNEY4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02XCIgc3R5bGU9e3sgZm9udEZhbWlseTogXCInUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmXCIgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctd2hpdGUgcHgtNiBweS01IHNoYWRvdy1bMF8yMHB4XzgwcHhfcmdiYSgxNSwxNSwyNCwwLjA4KV1cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5SZXN0b3JpbmcgeW91ciBhZG1pbiBzZXNzaW9uLi4uPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPkNoZWNraW5nIGF1dGggYW5kIHBlcm1pc3Npb25zLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBpZiAoc2Vzc2lvbi5zdGF0dXMgIT09ICdhdXRoZW50aWNhdGVkJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1bI0Y0RjRGOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNlwiIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBwLTggc2hhZG93LVswXzIwcHhfODBweF9yZ2JhKDE1LDE1LDI0LDAuMDgpXVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yOGVtXSB0ZXh0LVsjOUI5QkI4XVwiPkFkbWluIEFjY2VzczwvcD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtWyMxMTExMThdXCI+U2lnbiBpbiB0byB0aGUgbWFya2V0cGxhY2UgYWRtaW48L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LVsjNkI2QjgyXVwiPlxuICAgICAgICAgICAgVXNlIHRoZSBzZWVkZWQgZGV2ZWxvcG1lbnQgYWNjb3VudCB0byBsb2FkIGxpdmUgZGFzaGJvYXJkIGRhdGEgYW5kIFJCQUMtcHJvdGVjdGVkIENSVUQgcm91dGVzLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IHNwYWNlLXktNFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHNldExvZ2dpbmdJbih0cnVlKVxuICAgICAgICAgICAgICBzZXRMb2dpbkVycm9yKG51bGwpXG5cbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2Vzc2lvbi5zaWduSW4oZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgICAgICAgICAgIHNldExvZ2luRXJyb3IocmVzdWx0Lm1lc3NhZ2UgPz8gJ1VuYWJsZSB0byBzaWduIGluLicpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZXRMb2dnaW5nSW4oZmFsc2UpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzZCNkI4Ml1cIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSBweC00IHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRtaW5AbWFya2V0cGxhY2UubG9jYWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjNkI2QjgyXVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTExIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHB4LTQgdGV4dC1zbSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWVkZWQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2xvZ2luRXJyb3IgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0ZFQ0FDQV0gYmctWyNGRUYyRjJdIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtWyM5OTFCMUJdXCI+XG4gICAgICAgICAgICAgICAge2xvZ2luRXJyb3J9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2dnaW5nSW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYmctWyNFODQ1MEFdIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1bI0M5M0EwN10gZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNzBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvZ2dpbmdJbiA/ICdTaWduaW5nIGluLi4uJyA6ICdTaWduIEluJ31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRMb2dnaW5nSW4odHJ1ZSlcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHNlc3Npb24uc2lnbkluKCdhZG1pbkBtYXJrZXRwbGFjZS5sb2NhbCcsICdzZWVkZWQtcGFzc3dvcmQnKVxuICAgICAgICAgICAgICAgICAgc2V0TG9nZ2luZ0luKGZhbHNlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctWyNFRUYyRkZdIGhvdmVyOnRleHQtWyM2MzY2RjFdXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOKaoSBJbnN0YW50IERlbW8gTG9naW4gKE5vIEJhY2tlbmQgTmVlZGVkKVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiByb3VuZGVkLTJ4bCBiZy1bIzBGMEYxOF0gcC00IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yOGVtXSB0ZXh0LVsjOEE4QUEzXVwiPkRldiBhY2NvdW50PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBmb250LW1vbm8gdGV4dC1zbVwiPmFkbWluQG1hcmtldHBsYWNlLmxvY2FsPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc21cIj5zZWVkZWQtcGFzc3dvcmQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gYmctWyNGNEY0RjhdIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgPEFkbWluU2lkZWJhclxuICAgICAgICBuYXZHcm91cHM9e25hdkdyb3Vwc31cbiAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgIGV4cGFuZGVkR3JvdXBzPXtleHBhbmRlZEdyb3Vwc31cbiAgICAgICAgY3VycmVudFNlY3Rpb249e3NlY3Rpb259XG4gICAgICAgIG9uVG9nZ2xlQ29sbGFwc2U9eygpID0+IHNldENvbGxhcHNlZCh2ID0+ICF2KX1cbiAgICAgICAgb25Ub2dnbGVHcm91cD17bGFiZWwgPT4ge1xuICAgICAgICAgIHNldEV4cGFuZGVkR3JvdXBzKHByZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldilcbiAgICAgICAgICAgIGlmIChuZXh0LmhhcyhsYWJlbCkpIG5leHQuZGVsZXRlKGxhYmVsKVxuICAgICAgICAgICAgZWxzZSBuZXh0LmFkZChsYWJlbClcbiAgICAgICAgICAgIHJldHVybiBuZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25TZWxlY3RTZWN0aW9uPXtzZXRTZWN0aW9ufVxuICAgICAgICBvbkV4aXRBZG1pbj17KCkgPT4gb25FeGl0QWRtaW4oeyB0eXBlOiAnaG9tZScgfSl9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIG1pbi13LTBcIj5cbiAgICAgICAgPEFkbWluVG9wQmFyXG4gICAgICAgICAgbGFiZWw9e2N1cnJlbnRMYWJlbH1cbiAgICAgICAgICB1c2VyTmFtZT17c2Vzc2lvbi51c2VyPy5mdWxsTmFtZX1cbiAgICAgICAgICBub3RpZk9wZW49e25vdGlmT3Blbn1cbiAgICAgICAgICBvblRvZ2dsZU5vdGlmPXsoKSA9PiBzZXROb3RpZk9wZW4odiA9PiAhdil9XG4gICAgICAgICAgb25QcmV2aWV3U3RvcmU9eygpID0+IG9uRXhpdEFkbWluKHsgdHlwZTogJ2hvbWUnIH0pfVxuICAgICAgICAgIG9uUXVpY2tBZGQ9eygpID0+IHt9fVxuICAgICAgICAgIG9uU2lnbk91dD17KCkgPT4ge1xuICAgICAgICAgICAgdm9pZCBzZXNzaW9uLnNpZ25PdXQoKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxQbGFjZWhvbGRlciB0aXRsZT17YExvYWRpbmcgJHtjdXJyZW50TGFiZWx9YH0gLz59PlxuICAgICAgICAgICAge1BhZ2VDb21wb25lbnQgPyA8UGFnZUNvbXBvbmVudCBvbk5hdmlnYXRlPXtzZXRTZWN0aW9ufSAvPiA6IDxQbGFjZWhvbGRlciB0aXRsZT17Y3VycmVudExhYmVsfSAvPn1cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHR5cGUgeyBWaWV3IH0gZnJvbSAnLi4vYXBwL25hdmlnYXRpb24nXG5pbXBvcnQgQWRtaW5TaGVsbENvbnRlbnQgZnJvbSAnLi9BZG1pblNoZWxsQ29udGVudCdcblxudHlwZSBQcm9wcyA9IHtcbiAgb25FeGl0QWRtaW46ICh2OiBWaWV3KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluU2hlbGwocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiA8QWRtaW5TaGVsbENvbnRlbnQgey4uLnByb3BzfSAvPlxufVxuIl0sImZpbGUiOiJBZG1pblNoZWxsLUR6TmRtUU5yLmpzIn0=