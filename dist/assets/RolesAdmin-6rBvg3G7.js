import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/pages/RolesAdmin.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var roles = [
	{
		name: "Super Admin",
		color: "#E8450A",
		members: 1,
		desc: "Full platform access",
		locked: true
	},
	{
		name: "Admin",
		color: "#6366F1",
		members: 2,
		desc: "All features except billing",
		locked: false
	},
	{
		name: "Store Manager",
		color: "#059669",
		members: 3,
		desc: "Products, orders, vendors",
		locked: false
	},
	{
		name: "Catalog Manager",
		color: "#0EA5E9",
		members: 4,
		desc: "Products & categories only",
		locked: false
	},
	{
		name: "Order Manager",
		color: "#D97706",
		members: 2,
		desc: "Orders & refunds",
		locked: false
	},
	{
		name: "Marketing Manager",
		color: "#EC4899",
		members: 3,
		desc: "Campaigns & promotions",
		locked: false
	},
	{
		name: "Finance Manager",
		color: "#8B5CF6",
		members: 1,
		desc: "Finance & payouts",
		locked: false
	},
	{
		name: "Support Agent",
		color: "#14B8A6",
		members: 8,
		desc: "Read-only + customer comms",
		locked: false
	}
];
var modules = [
	"Dashboard",
	"Products",
	"Orders",
	"Customers",
	"Vendors",
	"Marketing",
	"Analytics",
	"Finance",
	"Settings",
	"SEO",
	"Content"
];
var perms = [
	"View",
	"Create",
	"Edit",
	"Delete",
	"Approve",
	"Publish",
	"Export"
];
var defaultMatrix = {
	"Super Admin": Object.fromEntries(modules.map((m) => [m, perms.map(() => true)])),
	"Admin": Object.fromEntries(modules.map((m) => [m, perms.map((_, i) => i !== 3 && i !== 8)])),
	"Store Manager": Object.fromEntries(modules.map((m) => [m, perms.map((_, i) => i <= 4)])),
	"Catalog Manager": Object.fromEntries(modules.map((m) => [m, m === "Products" ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
	"Order Manager": Object.fromEntries(modules.map((m) => [m, m === "Orders" ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
	"Marketing Manager": Object.fromEntries(modules.map((m) => [m, m === "Marketing" ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
	"Finance Manager": Object.fromEntries(modules.map((m) => [m, m === "Finance" ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
	"Support Agent": Object.fromEntries(modules.map((m) => [m, perms.map((_, i) => i === 0)]))
};
var members = [
	{
		name: "Alex Admin",
		email: "alex@nexus.com",
		role: "Super Admin",
		avatar: "AA",
		lastActive: "2 min ago"
	},
	{
		name: "Jamie Cruz",
		email: "jamie@nexus.com",
		role: "Admin",
		avatar: "JC",
		lastActive: "1 hr ago"
	},
	{
		name: "Morgan Lee",
		email: "morgan@nexus.com",
		role: "Store Manager",
		avatar: "ML",
		lastActive: "Yesterday"
	},
	{
		name: "Taylor Kim",
		email: "taylor@nexus.com",
		role: "Marketing Manager",
		avatar: "TK",
		lastActive: "3 days ago"
	},
	{
		name: "Sam Rivera",
		email: "sam@nexus.com",
		role: "Finance Manager",
		avatar: "SR",
		lastActive: "Today"
	}
];
function RolesAdmin({ onNavigate: _ }) {
	const [tab, setTab] = (0, import_react.useState)("roles");
	const [selectedRole, setSelectedRole] = (0, import_react.useState)("Store Manager");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Roles & Permissions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Control access levels across the admin panel"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
						children: "Invite Member"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]",
						children: "+ Create Role"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 border-b border-[#E2E2EC]",
				children: [
					"roles",
					"members",
					"matrix"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `px-4 py-3 text-sm font-semibold capitalize border-b-2 transition-all -mb-px ${tab === t ? "border-[#E8450A] text-[#E8450A]" : "border-transparent text-[#9B9BB8] hover:text-[#6B6B82]"}`,
					children: t === "matrix" ? "Permission Matrix" : t.charAt(0).toUpperCase() + t.slice(1)
				}, t))
			}),
			tab === "roles" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 xl:grid-cols-4 gap-4",
				children: [roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3 hover:shadow-md transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm",
								style: { background: role.color },
								children: role.name.slice(0, 2)
							}), role.locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs bg-[#F4F4F8] text-[#9B9BB8] px-2 py-0.5 rounded-full flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-3 h-3",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									})
								}), "Locked"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-3.5 h-3.5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-[#111118]",
							children: role.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mt-0.5",
							children: role.desc
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-1 border-t border-[#F4F4F8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-[#6B6B82]",
								children: [
									role.members,
									" member",
									role.members !== 1 ? "s" : ""
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setSelectedRole(role.name);
									setTab("matrix");
								},
								className: "text-xs font-semibold text-[#E8450A] hover:underline",
								children: "Permissions →"
							})]
						})
					]
				}, role.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "bg-white rounded-xl border-2 border-dashed border-[#E2E2EC] p-5 flex flex-col items-center justify-center gap-3 hover:border-[#E8450A] text-[#9B9BB8] hover:text-[#E8450A] transition-all group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-xl bg-[#F4F4F8] group-hover:bg-[#FFF7F5] flex items-center justify-center transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-5 h-5",
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Custom Role"
					})]
				})]
			}),
			tab === "members" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
						children: [
							"Member",
							"Role",
							"Last Active",
							"Actions"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: h
						}, h))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-[#F4F4F8]",
						children: members.map((m) => {
							const role = roles.find((r) => r.name === m.role);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-[#F9F9FC] transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0",
												style: { background: role?.color ?? "#9B9BB8" },
												children: m.avatar
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-[#111118]",
												children: m.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-[#9B9BB8]",
												children: m.email
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 text-xs font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-2 h-2 rounded-full flex-shrink-0",
												style: { background: role?.color ?? "#9B9BB8" }
											}), m.role]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-xs text-[#9B9BB8]",
										children: m.lastActive
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "text-xs font-semibold text-[#6B6B82] hover:text-[#E8450A]",
													children: "Edit Role"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#E2E2EC]",
													children: "·"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "text-xs font-semibold text-[#E11D48]",
													children: "Remove"
												})
											]
										})
									})
								]
							}, m.email);
						})
					})]
				})
			}),
			tab === "matrix" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#6B6B82]",
						children: "Viewing permissions for:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedRole(r.name),
							className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedRole === r.name ? "text-white" : "bg-[#F4F4F8] text-[#9B9BB8] hover:text-[#6B6B82]"}`,
							style: selectedRole === r.name ? { background: r.color } : {},
							children: r.name
						}, r.name))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] overflow-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide w-40",
								children: "Module"
							}), perms.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-center px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: p
							}, p))]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: modules.map((mod) => {
								const matrix = defaultMatrix[selectedRole]?.[mod] ?? perms.map(() => false);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-[#F9F9FC] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3 font-semibold text-[#111118]",
										children: mod
									}), matrix.map((allowed, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `w-5 h-5 rounded-full mx-auto flex items-center justify-center ${allowed ? "bg-[#D1FAE5]" : "bg-[#F4F4F8]"}`,
											children: allowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3 h-3 text-[#059669]",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 3,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M5 13l4 4L19 7"
												})
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-0.5 bg-[#D1D5DB] rounded-full" })
										})
									}, i))]
								}, mod);
							})
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { RolesAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZXNBZG1pbi02ckJ2ZzNHNy5qcyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRtaW4vcGFnZXMvUm9sZXNBZG1pbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQWRtaW5TZWN0aW9uIH0gZnJvbSAnLi4vYWRtaW5EYXRhJ1xuXG50eXBlIFByb3BzID0geyBvbk5hdmlnYXRlOiAoczogQWRtaW5TZWN0aW9uKSA9PiB2b2lkIH1cblxuY29uc3Qgcm9sZXMgPSBbXG4gIHsgbmFtZTogJ1N1cGVyIEFkbWluJywgY29sb3I6ICcjRTg0NTBBJywgbWVtYmVyczogMSwgZGVzYzogJ0Z1bGwgcGxhdGZvcm0gYWNjZXNzJywgbG9ja2VkOiB0cnVlIH0sXG4gIHsgbmFtZTogJ0FkbWluJywgY29sb3I6ICcjNjM2NkYxJywgbWVtYmVyczogMiwgZGVzYzogJ0FsbCBmZWF0dXJlcyBleGNlcHQgYmlsbGluZycsIGxvY2tlZDogZmFsc2UgfSxcbiAgeyBuYW1lOiAnU3RvcmUgTWFuYWdlcicsIGNvbG9yOiAnIzA1OTY2OScsIG1lbWJlcnM6IDMsIGRlc2M6ICdQcm9kdWN0cywgb3JkZXJzLCB2ZW5kb3JzJywgbG9ja2VkOiBmYWxzZSB9LFxuICB7IG5hbWU6ICdDYXRhbG9nIE1hbmFnZXInLCBjb2xvcjogJyMwRUE1RTknLCBtZW1iZXJzOiA0LCBkZXNjOiAnUHJvZHVjdHMgJiBjYXRlZ29yaWVzIG9ubHknLCBsb2NrZWQ6IGZhbHNlIH0sXG4gIHsgbmFtZTogJ09yZGVyIE1hbmFnZXInLCBjb2xvcjogJyNEOTc3MDYnLCBtZW1iZXJzOiAyLCBkZXNjOiAnT3JkZXJzICYgcmVmdW5kcycsIGxvY2tlZDogZmFsc2UgfSxcbiAgeyBuYW1lOiAnTWFya2V0aW5nIE1hbmFnZXInLCBjb2xvcjogJyNFQzQ4OTknLCBtZW1iZXJzOiAzLCBkZXNjOiAnQ2FtcGFpZ25zICYgcHJvbW90aW9ucycsIGxvY2tlZDogZmFsc2UgfSxcbiAgeyBuYW1lOiAnRmluYW5jZSBNYW5hZ2VyJywgY29sb3I6ICcjOEI1Q0Y2JywgbWVtYmVyczogMSwgZGVzYzogJ0ZpbmFuY2UgJiBwYXlvdXRzJywgbG9ja2VkOiBmYWxzZSB9LFxuICB7IG5hbWU6ICdTdXBwb3J0IEFnZW50JywgY29sb3I6ICcjMTRCOEE2JywgbWVtYmVyczogOCwgZGVzYzogJ1JlYWQtb25seSArIGN1c3RvbWVyIGNvbW1zJywgbG9ja2VkOiBmYWxzZSB9LFxuXVxuXG5jb25zdCBtb2R1bGVzID0gW1xuICAnRGFzaGJvYXJkJywgJ1Byb2R1Y3RzJywgJ09yZGVycycsICdDdXN0b21lcnMnLCAnVmVuZG9ycycsXG4gICdNYXJrZXRpbmcnLCAnQW5hbHl0aWNzJywgJ0ZpbmFuY2UnLCAnU2V0dGluZ3MnLCAnU0VPJywgJ0NvbnRlbnQnLFxuXVxuXG5jb25zdCBwZXJtcyA9IFsnVmlldycsICdDcmVhdGUnLCAnRWRpdCcsICdEZWxldGUnLCAnQXBwcm92ZScsICdQdWJsaXNoJywgJ0V4cG9ydCddXG5cbi8vIERlZmF1bHQgcGVybWlzc2lvbiBtYXRyaXhcbmNvbnN0IGRlZmF1bHRNYXRyaXg6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGJvb2xlYW5bXT4+ID0ge1xuICAnU3VwZXIgQWRtaW4nOiBPYmplY3QuZnJvbUVudHJpZXMobW9kdWxlcy5tYXAobSA9PiBbbSwgcGVybXMubWFwKCgpID0+IHRydWUpXSkpLFxuICAnQWRtaW4nOiBPYmplY3QuZnJvbUVudHJpZXMobW9kdWxlcy5tYXAobSA9PiBbbSwgcGVybXMubWFwKChfLCBpKSA9PiBpICE9PSAzICYmIGkgIT09IDgpXSkpLFxuICAnU3RvcmUgTWFuYWdlcic6IE9iamVjdC5mcm9tRW50cmllcyhtb2R1bGVzLm1hcChtID0+IFttLCBwZXJtcy5tYXAoKF8sIGkpID0+IGkgPD0gNCldKSksXG4gICdDYXRhbG9nIE1hbmFnZXInOiBPYmplY3QuZnJvbUVudHJpZXMobW9kdWxlcy5tYXAobSA9PiBbbSwgbSA9PT0gJ1Byb2R1Y3RzJyA/IHBlcm1zLm1hcCgoKSA9PiB0cnVlKSA6IHBlcm1zLm1hcCgoXywgaSkgPT4gaSA9PT0gMCldKSksXG4gICdPcmRlciBNYW5hZ2VyJzogT2JqZWN0LmZyb21FbnRyaWVzKG1vZHVsZXMubWFwKG0gPT4gW20sIG0gPT09ICdPcmRlcnMnID8gcGVybXMubWFwKCgpID0+IHRydWUpIDogcGVybXMubWFwKChfLCBpKSA9PiBpID09PSAwKV0pKSxcbiAgJ01hcmtldGluZyBNYW5hZ2VyJzogT2JqZWN0LmZyb21FbnRyaWVzKG1vZHVsZXMubWFwKG0gPT4gW20sIG0gPT09ICdNYXJrZXRpbmcnID8gcGVybXMubWFwKCgpID0+IHRydWUpIDogcGVybXMubWFwKChfLCBpKSA9PiBpID09PSAwKV0pKSxcbiAgJ0ZpbmFuY2UgTWFuYWdlcic6IE9iamVjdC5mcm9tRW50cmllcyhtb2R1bGVzLm1hcChtID0+IFttLCBtID09PSAnRmluYW5jZScgPyBwZXJtcy5tYXAoKCkgPT4gdHJ1ZSkgOiBwZXJtcy5tYXAoKF8sIGkpID0+IGkgPT09IDApXSkpLFxuICAnU3VwcG9ydCBBZ2VudCc6IE9iamVjdC5mcm9tRW50cmllcyhtb2R1bGVzLm1hcChtID0+IFttLCBwZXJtcy5tYXAoKF8sIGkpID0+IGkgPT09IDApXSkpLFxufVxuXG5jb25zdCBtZW1iZXJzID0gW1xuICB7IG5hbWU6ICdBbGV4IEFkbWluJywgZW1haWw6ICdhbGV4QG5leHVzLmNvbScsIHJvbGU6ICdTdXBlciBBZG1pbicsIGF2YXRhcjogJ0FBJywgbGFzdEFjdGl2ZTogJzIgbWluIGFnbycgfSxcbiAgeyBuYW1lOiAnSmFtaWUgQ3J1eicsIGVtYWlsOiAnamFtaWVAbmV4dXMuY29tJywgcm9sZTogJ0FkbWluJywgYXZhdGFyOiAnSkMnLCBsYXN0QWN0aXZlOiAnMSBociBhZ28nIH0sXG4gIHsgbmFtZTogJ01vcmdhbiBMZWUnLCBlbWFpbDogJ21vcmdhbkBuZXh1cy5jb20nLCByb2xlOiAnU3RvcmUgTWFuYWdlcicsIGF2YXRhcjogJ01MJywgbGFzdEFjdGl2ZTogJ1llc3RlcmRheScgfSxcbiAgeyBuYW1lOiAnVGF5bG9yIEtpbScsIGVtYWlsOiAndGF5bG9yQG5leHVzLmNvbScsIHJvbGU6ICdNYXJrZXRpbmcgTWFuYWdlcicsIGF2YXRhcjogJ1RLJywgbGFzdEFjdGl2ZTogJzMgZGF5cyBhZ28nIH0sXG4gIHsgbmFtZTogJ1NhbSBSaXZlcmEnLCBlbWFpbDogJ3NhbUBuZXh1cy5jb20nLCByb2xlOiAnRmluYW5jZSBNYW5hZ2VyJywgYXZhdGFyOiAnU1InLCBsYXN0QWN0aXZlOiAnVG9kYXknIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvbGVzQWRtaW4oeyBvbk5hdmlnYXRlOiBfIH06IFByb3BzKSB7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZTwncm9sZXMnIHwgJ21lbWJlcnMnIHwgJ21hdHJpeCc+KCdyb2xlcycpXG4gIGNvbnN0IFtzZWxlY3RlZFJvbGUsIHNldFNlbGVjdGVkUm9sZV0gPSB1c2VTdGF0ZSgnU3RvcmUgTWFuYWdlcicpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTVcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5Sb2xlcyAmIFBlcm1pc3Npb25zPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM2QjZCODJdIG10LTAuNVwiPkNvbnRyb2wgYWNjZXNzIGxldmVscyBhY3Jvc3MgdGhlIGFkbWluIHBhbmVsPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XVwiPkludml0ZSBNZW1iZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0M5M0EwN11cIj4rIENyZWF0ZSBSb2xlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBUYWJzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBib3JkZXItYiBib3JkZXItWyNFMkUyRUNdXCI+XG4gICAgICAgIHsoWydyb2xlcycsICdtZW1iZXJzJywgJ21hdHJpeCddIGFzIGNvbnN0KS5tYXAodCA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e3R9IG9uQ2xpY2s9eygpID0+IHNldFRhYih0KX0gY2xhc3NOYW1lPXtgcHgtNCBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCBjYXBpdGFsaXplIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1hbGwgLW1iLXB4ICR7dGFiID09PSB0ID8gJ2JvcmRlci1bI0U4NDUwQV0gdGV4dC1bI0U4NDUwQV0nIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjNkI2QjgyXSd9YH0+e3QgPT09ICdtYXRyaXgnID8gJ1Blcm1pc3Npb24gTWF0cml4JyA6IHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0LnNsaWNlKDEpfTwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7dGFiID09PSAncm9sZXMnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHhsOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAge3JvbGVzLm1hcChyb2xlID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb2xlLm5hbWV9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IHNwYWNlLXktMyBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbi1zaGFkb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1zbVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IHJvbGUuY29sb3IgfX0+XG4gICAgICAgICAgICAgICAgICB7cm9sZS5uYW1lLnNsaWNlKDAsIDIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtyb2xlLmxvY2tlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgYmctWyNGNEY0RjhdIHRleHQtWyM5QjlCQjhdIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTNcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgMTV2Mm0tNiA0aDEyYTIgMiAwIDAwMi0ydi02YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyem0xMC0xMFY3YTQgNCAwIDAwLTggMHY0aDh6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgTG9ja2VkXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWxnIGhvdmVyOmJnLVsjRjRGNEY4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjMTExMTE4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTExIDVINmEyIDIgMCAwMC0yIDJ2MTFhMiAyIDAgMDAyIDJoMTFhMiAyIDAgMDAyLTJ2LTVtLTEuNDE0LTkuNDE0YTIgMiAwIDExMi44MjggMi44MjhMMTEuODI4IDE1SDl2LTIuODI4bDguNTg2LTguNTg2elwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj57cm9sZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG10LTAuNVwiPntyb2xlLmRlc2N9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtMSBib3JkZXItdCBib3JkZXItWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPntyb2xlLm1lbWJlcnN9IG1lbWJlcntyb2xlLm1lbWJlcnMgIT09IDEgPyAncycgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkUm9sZShyb2xlLm5hbWUpOyBzZXRUYWIoJ21hdHJpeCcpIH19IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjRTg0NTBBXSBob3Zlcjp1bmRlcmxpbmVcIj5QZXJtaXNzaW9ucyDihpI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItWyNFMkUyRUNdIHAtNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBob3Zlcjpib3JkZXItWyNFODQ1MEFdIHRleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tYWxsIGdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJnLVsjRjRGNEY4XSBncm91cC1ob3ZlcjpiZy1bI0ZGRjdGNV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDR2MTZtOC04SDRcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5DdXN0b20gUm9sZTwvcD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dGFiID09PSAnbWVtYmVycycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1bI0Y5RjlGQ10gYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICAgIHtbJ01lbWJlcicsICdSb2xlJywgJ0xhc3QgQWN0aXZlJywgJ0FjdGlvbnMnXS5tYXAoaCA9PiAoXG4gICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntofTwvdGg+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAge21lbWJlcnMubWFwKG0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGUgPSByb2xlcy5maW5kKHIgPT4gci5uYW1lID09PSBtLnJvbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e20uZW1haWx9IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOSBoLTkgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgZmxleC1zaHJpbmstMFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IHJvbGU/LmNvbG9yID8/ICcjOUI5QkI4JyB9fT57bS5hdmF0YXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e20ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57bS5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBmbGV4LXNocmluay0wXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogcm9sZT8uY29sb3IgPz8gJyM5QjlCQjgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bS5yb2xlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IHRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57bS5sYXN0QWN0aXZlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOnRleHQtWyNFODQ1MEFdXCI+RWRpdCBSb2xlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTJFMkVDXVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0UxMUQ0OF1cIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dGFiID09PSAnbWF0cml4JyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgey8qIFJvbGUgc2VsZWN0b3IgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+Vmlld2luZyBwZXJtaXNzaW9ucyBmb3I6PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICB7cm9sZXMubWFwKHIgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtyLm5hbWV9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUm9sZShyLm5hbWUpfSBjbGFzc05hbWU9e2BweC0zIHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCAke3NlbGVjdGVkUm9sZSA9PT0gci5uYW1lID8gJ3RleHQtd2hpdGUnIDogJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjNkI2QjgyXSd9YH0gc3R5bGU9e3NlbGVjdGVkUm9sZSA9PT0gci5uYW1lID8geyBiYWNrZ3JvdW5kOiByLmNvbG9yIH0gOiB7fX0+e3IubmFtZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBNYXRyaXggdGFibGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTUgcHktMyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdy00MFwiPk1vZHVsZTwvdGg+XG4gICAgICAgICAgICAgICAgICB7cGVybXMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtwfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC00IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+e3B9PC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge21vZHVsZXMubWFwKG1vZCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBkZWZhdWx0TWF0cml4W3NlbGVjdGVkUm9sZV0/Llttb2RdID8/IHBlcm1zLm1hcCgoKSA9PiBmYWxzZSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e21vZH0gY2xhc3NOYW1lPVwiaG92ZXI6YmctWyNGOUY5RkNdIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMyBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e21vZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIHttYXRyaXgubWFwKChhbGxvd2VkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpfSBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTUgaC01IHJvdW5kZWQtZnVsbCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICR7YWxsb3dlZCA/ICdiZy1bI0QxRkFFNV0nIDogJ2JnLVsjRjRGNEY4XSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FsbG93ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1bIzA1OTY2OV1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17M30+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNSAxM2w0IDRMMTkgN1wiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLjUgaC0wLjUgYmctWyNEMUQ1REJdIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxJQUFNLFFBQVE7Q0FDWjtFQUFFLE1BQU07RUFBZSxPQUFPO0VBQVcsU0FBUztFQUFHLE1BQU07RUFBd0IsUUFBUTtDQUFLO0NBQ2hHO0VBQUUsTUFBTTtFQUFTLE9BQU87RUFBVyxTQUFTO0VBQUcsTUFBTTtFQUErQixRQUFRO0NBQU07Q0FDbEc7RUFBRSxNQUFNO0VBQWlCLE9BQU87RUFBVyxTQUFTO0VBQUcsTUFBTTtFQUE2QixRQUFRO0NBQU07Q0FDeEc7RUFBRSxNQUFNO0VBQW1CLE9BQU87RUFBVyxTQUFTO0VBQUcsTUFBTTtFQUE4QixRQUFRO0NBQU07Q0FDM0c7RUFBRSxNQUFNO0VBQWlCLE9BQU87RUFBVyxTQUFTO0VBQUcsTUFBTTtFQUFvQixRQUFRO0NBQU07Q0FDL0Y7RUFBRSxNQUFNO0VBQXFCLE9BQU87RUFBVyxTQUFTO0VBQUcsTUFBTTtFQUEwQixRQUFRO0NBQU07Q0FDekc7RUFBRSxNQUFNO0VBQW1CLE9BQU87RUFBVyxTQUFTO0VBQUcsTUFBTTtFQUFxQixRQUFRO0NBQU07Q0FDbEc7RUFBRSxNQUFNO0VBQWlCLE9BQU87RUFBVyxTQUFTO0VBQUcsTUFBTTtFQUE4QixRQUFRO0NBQU07QUFDM0c7QUFFQSxJQUFNLFVBQVU7Q0FDZDtDQUFhO0NBQVk7Q0FBVTtDQUFhO0NBQ2hEO0NBQWE7Q0FBYTtDQUFXO0NBQVk7Q0FBTztBQUMxRDtBQUVBLElBQU0sUUFBUTtDQUFDO0NBQVE7Q0FBVTtDQUFRO0NBQVU7Q0FBVztDQUFXO0FBQVE7QUFHakYsSUFBTSxnQkFBMkQ7Q0FDL0QsZUFBZSxPQUFPLFlBQVksUUFBUSxLQUFJLE1BQUssQ0FBQyxHQUFHLE1BQU0sVUFBVSxJQUFJLENBQUMsQ0FB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