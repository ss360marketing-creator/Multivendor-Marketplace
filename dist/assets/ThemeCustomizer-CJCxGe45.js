import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/pages/ThemeCustomizer.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var presets = [
	{
		name: "Ember",
		primary: "#E8450A",
		secondary: "#0F0F18",
		accent: "#FBBF24"
	},
	{
		name: "Ocean",
		primary: "#0EA5E9",
		secondary: "#0F172A",
		accent: "#06D6A0"
	},
	{
		name: "Violet",
		primary: "#7C3AED",
		secondary: "#1E1B4B",
		accent: "#EC4899"
	},
	{
		name: "Forest",
		primary: "#059669",
		secondary: "#064E3B",
		accent: "#84CC16"
	},
	{
		name: "Rose",
		primary: "#E11D48",
		secondary: "#1C1917",
		accent: "#F97316"
	}
];
var fonts = [
	{
		name: "Plus Jakarta Sans",
		sample: "Aa",
		category: "Sans-serif"
	},
	{
		name: "Fraunces",
		sample: "Aa",
		category: "Serif"
	},
	{
		name: "Inter",
		sample: "Aa",
		category: "Sans-serif"
	},
	{
		name: "Playfair Display",
		sample: "Aa",
		category: "Serif"
	},
	{
		name: "DM Sans",
		sample: "Aa",
		category: "Sans-serif"
	}
];
var borderRadii = [
	{
		label: "Sharp",
		value: "0px"
	},
	{
		label: "Soft",
		value: "6px"
	},
	{
		label: "Round",
		value: "12px"
	},
	{
		label: "Pill",
		value: "9999px"
	}
];
function ThemeCustomizer({ onNavigate: _ }) {
	const [preset, setPreset] = (0, import_react.useState)(0);
	const [primary, setPrimary] = (0, import_react.useState)("#E8450A");
	const [secondary, setSecondary] = (0, import_react.useState)("#0F0F18");
	const [accent, setAccent] = (0, import_react.useState)("#FBBF24");
	const [bodyFont, setBodyFont] = (0, import_react.useState)("Plus Jakarta Sans");
	const [displayFont, setDisplayFont] = (0, import_react.useState)("Fraunces");
	const [radius, setRadius] = (0, import_react.useState)("12px");
	const [previewDevice, setPreviewDevice] = (0, import_react.useState)("desktop");
	const [saved, setSaved] = (0, import_react.useState)(false);
	const applyPreset = (i) => {
		const p = presets[i];
		setPreset(i);
		setPrimary(p.primary);
		setSecondary(p.secondary);
		setAccent(p.accent);
	};
	const handleSave = () => {
		setSaved(true);
		setTimeout(() => setSaved(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full",
		style: { minHeight: "100vh" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-80 flex-shrink-0 bg-white border-r border-[#E2E2EC] flex flex-col overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 border-b border-[#E2E2EC]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold text-[#111118] text-lg",
						children: "Theme Customizer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#9B9BB8] mt-0.5",
						children: "Live storefront appearance editor"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 p-5 space-y-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3",
							children: "Color Presets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-5 gap-2",
							children: presets.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => applyPreset(i),
								className: `relative group flex flex-col items-center gap-1.5 transition-all`,
								title: p.name,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-full h-10 rounded-xl transition-all ${preset === i ? "ring-2 ring-offset-2 ring-[#111118]" : "hover:scale-105"}`,
									style: { background: `linear-gradient(135deg, ${p.primary}, ${p.accent})` }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold text-[#9B9BB8]",
									children: p.name
								})]
							}, p.name))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3",
							children: "Colors"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									label: "Primary",
									value: primary,
									set: setPrimary
								},
								{
									label: "Secondary",
									value: secondary,
									set: setSecondary
								},
								{
									label: "Accent",
									value: accent,
									set: setAccent
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-[#111118]",
									children: c.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-mono text-[#9B9BB8]",
									children: c.value.toUpperCase()
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-xl border-2 border-[#E2E2EC] shadow-md cursor-pointer hover:scale-105 transition-transform",
										style: { background: c.value }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "color",
										value: c.value,
										onChange: (e) => c.set(e.target.value),
										className: "sr-only"
									})]
								})]
							}, c.label))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3",
							children: "Typography"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-[#6B6B82] mb-2",
								children: "Body Font"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: fonts.filter((f) => f.category === "Sans-serif").map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setBodyFont(f.name),
									className: `w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-all text-sm ${bodyFont === f.name ? "border-[#E8450A] bg-[#FFF7F5] text-[#E8450A]" : "border-[#E2E2EC] text-[#6B6B82] hover:border-[#C8C8E0]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.name }), bodyFont === f.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-4 h-4",
										fill: "currentColor",
										viewBox: "0 0 20 20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fillRule: "evenodd",
											d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
											clipRule: "evenodd"
										})
									})]
								}, f.name))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-[#6B6B82] mb-2",
								children: "Display Font"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: fonts.filter((f) => f.category === "Serif").map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setDisplayFont(f.name),
									className: `w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-all text-sm ${displayFont === f.name ? "border-[#E8450A] bg-[#FFF7F5] text-[#E8450A]" : "border-[#E2E2EC] text-[#6B6B82] hover:border-[#C8C8E0]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.name }), displayFont === f.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-4 h-4",
										fill: "currentColor",
										viewBox: "0 0 20 20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fillRule: "evenodd",
											d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
											clipRule: "evenodd"
										})
									})]
								}, f.name))
							})] })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-3",
							children: "Button Shape"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2",
							children: borderRadii.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setRadius(r.value),
								className: `flex flex-col items-center gap-2 py-2 transition-all ${radius === r.value ? "text-[#E8450A]" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-10 h-10 border-2 transition-all ${radius === r.value ? "border-[#E8450A] bg-[#FFF7F5]" : "border-[#E2E2EC]"}`,
									style: { borderRadius: r.value }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold",
									children: r.label
								})]
							}, r.label))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 border-t border-[#E2E2EC] flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex-1 h-10 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
						children: "Reset"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleSave,
						className: "flex-1 h-10 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07] transition-colors flex items-center justify-center gap-2",
						children: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
						}), "Saved!"] }) : "Publish Theme"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 bg-[#F4F4F8] flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border-b border-[#E2E2EC] px-5 py-3 flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 bg-[#F4F4F8] rounded-lg p-1",
						children: ["desktop", "mobile"].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPreviewDevice(d),
							className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${previewDevice === d ? "bg-white shadow-sm text-[#111118]" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
							children: [d === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "w-3.5 h-3.5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "2",
									y: "3",
									width: "20",
									height: "14",
									rx: "2"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									d: "M8 21h8M12 17v4"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "w-3.5 h-3.5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "5",
									y: "2",
									width: "14",
									height: "20",
									rx: "2"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "17",
									r: "1",
									fill: "currentColor"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "capitalize",
								children: d
							})]
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex items-center gap-2 bg-[#F4F4F8] rounded-lg px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-3.5 h-3.5 text-[#9B9BB8]",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono text-[#9B9BB8]",
							children: "yourstore.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold px-2 py-1 bg-[#FEF3C7] text-[#92400E] rounded-lg",
						children: "Preview Mode"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 flex items-start justify-center p-8 overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `bg-white shadow-2xl overflow-hidden transition-all duration-500 ${previewDevice === "desktop" ? "w-full max-w-4xl rounded-2xl" : "w-[390px] rounded-[40px]"}`,
					style: { minHeight: 580 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { background: secondary },
							className: "px-6 py-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-white text-sm",
								style: { fontFamily: displayFont },
								children: "NEXMART"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [[
									"Shop",
									"Deals",
									"Brands"
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/70",
									children: n
								}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-6 h-6 rounded-full flex items-center justify-center",
									style: { background: primary },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-3 h-3 text-white",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2.5,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
										})
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { background: `linear-gradient(135deg, ${secondary}, ${primary}33)` },
							className: "px-8 py-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold mb-2",
									style: { color: accent },
									children: "New Season"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-3xl font-black text-white leading-tight mb-4",
									style: { fontFamily: displayFont },
									children: [
										"Discover Premium",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Products"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105",
									style: {
										background: primary,
										borderRadius: radius
									},
									children: "Shop Now →"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide mb-4",
								children: "Featured Products"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid gap-4 ${previewDevice === "desktop" ? "grid-cols-3" : "grid-cols-2"}`,
								children: [
									{
										name: "Premium Headphones",
										price: "$299",
										badge: "Sale",
										img: "1505740420928-5e560c06d30e"
									},
									{
										name: "Leather Watch",
										price: "$189",
										badge: "New",
										img: "1523275335684-37898b6baf30"
									},
									{
										name: "Sunglasses",
										price: "$129",
										badge: "",
										img: "1572635196237-14b3f281503f"
									}
								].slice(0, previewDevice === "desktop" ? 3 : 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group",
									style: {
										borderRadius: radius,
										overflow: "hidden",
										border: "1px solid #E2E2EC"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden",
										style: { paddingBottom: "75%" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: `https://images.unsplash.com/photo-${p.img}?w=300&h=225&fit=crop&auto=format`,
											alt: p.name,
											className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										}), p.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-0.5",
											style: {
												background: primary,
												borderRadius: "4px"
											},
											children: p.badge
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-[#111118] truncate",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mt-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-bold text-sm",
												style: { color: primary },
												children: p.price
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "text-[10px] font-bold text-white px-2.5 py-1",
												style: {
													background: secondary,
													borderRadius: radius
												},
												children: "Add"
											})]
										})]
									})]
								}, p.name))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-6 mb-6 p-4 rounded-xl flex items-center justify-between",
							style: { background: accent + "22" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold",
								style: { color: secondary },
								children: "Flash Sale Ends Soon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono font-black text-lg",
								style: { color: primary },
								children: "02:47:18"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-xs font-bold text-white px-4 py-2",
								style: {
									background: primary,
									borderRadius: radius
								},
								children: "View Deals"
							})]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { ThemeCustomizer as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVDdXN0b21pemVyLUNKQ3hHZTQ1LmpzIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZG1pbi9wYWdlcy9UaGVtZUN1c3RvbWl6ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFkbWluU2VjdGlvbiB9IGZyb20gJy4uL2FkbWluRGF0YSdcblxudHlwZSBQcm9wcyA9IHsgb25OYXZpZ2F0ZTogKHM6IEFkbWluU2VjdGlvbikgPT4gdm9pZCB9XG5cbmNvbnN0IHByZXNldHMgPSBbXG4gIHsgbmFtZTogJ0VtYmVyJywgcHJpbWFyeTogJyNFODQ1MEEnLCBzZWNvbmRhcnk6ICcjMEYwRjE4JywgYWNjZW50OiAnI0ZCQkYyNCcgfSxcbiAgeyBuYW1lOiAnT2NlYW4nLCBwcmltYXJ5OiAnIzBFQTVFOScsIHNlY29uZGFyeTogJyMwRjE3MkEnLCBhY2NlbnQ6ICcjMDZENkEwJyB9LFxuICB7IG5hbWU6ICdWaW9sZXQnLCBwcmltYXJ5OiAnIzdDM0FFRCcsIHNlY29uZGFyeTogJyMxRTFCNEInLCBhY2NlbnQ6ICcjRUM0ODk5JyB9LFxuICB7IG5hbWU6ICdGb3Jlc3QnLCBwcmltYXJ5OiAnIzA1OTY2OScsIHNlY29uZGFyeTogJyMwNjRFM0InLCBhY2NlbnQ6ICcjODRDQzE2JyB9LFxuICB7IG5hbWU6ICdSb3NlJywgcHJpbWFyeTogJyNFMTFENDgnLCBzZWNvbmRhcnk6ICcjMUMxOTE3JywgYWNjZW50OiAnI0Y5NzMxNicgfSxcbl1cblxuY29uc3QgZm9udHMgPSBbXG4gIHsgbmFtZTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2FtcGxlOiAnQWEnLCBjYXRlZ29yeTogJ1NhbnMtc2VyaWYnIH0sXG4gIHsgbmFtZTogJ0ZyYXVuY2VzJywgc2FtcGxlOiAnQWEnLCBjYXRlZ29yeTogJ1NlcmlmJyB9LFxuICB7IG5hbWU6ICdJbnRlcicsIHNhbXBsZTogJ0FhJywgY2F0ZWdvcnk6ICdTYW5zLXNlcmlmJyB9LFxuICB7IG5hbWU6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2FtcGxlOiAnQWEnLCBjYXRlZ29yeTogJ1NlcmlmJyB9LFxuICB7IG5hbWU6ICdETSBTYW5zJywgc2FtcGxlOiAnQWEnLCBjYXRlZ29yeTogJ1NhbnMtc2VyaWYnIH0sXG5dXG5cbmNvbnN0IGJvcmRlclJhZGlpID0gW1xuICB7IGxhYmVsOiAnU2hhcnAnLCB2YWx1ZTogJzBweCcgfSxcbiAgeyBsYWJlbDogJ1NvZnQnLCB2YWx1ZTogJzZweCcgfSxcbiAgeyBsYWJlbDogJ1JvdW5kJywgdmFsdWU6ICcxMnB4JyB9LFxuICB7IGxhYmVsOiAnUGlsbCcsIHZhbHVlOiAnOTk5OXB4JyB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVtZUN1c3RvbWl6ZXIoeyBvbk5hdmlnYXRlOiBfIH06IFByb3BzKSB7XG4gIGNvbnN0IFtwcmVzZXQsIHNldFByZXNldF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbcHJpbWFyeSwgc2V0UHJpbWFyeV0gPSB1c2VTdGF0ZSgnI0U4NDUwQScpXG4gIGNvbnN0IFtzZWNvbmRhcnksIHNldFNlY29uZGFyeV0gPSB1c2VTdGF0ZSgnIzBGMEYxOCcpXG4gIGNvbnN0IFthY2NlbnQsIHNldEFjY2VudF0gPSB1c2VTdGF0ZSgnI0ZCQkYyNCcpXG4gIGNvbnN0IFtib2R5Rm9udCwgc2V0Qm9keUZvbnRdID0gdXNlU3RhdGUoJ1BsdXMgSmFrYXJ0YSBTYW5zJylcbiAgY29uc3QgW2Rpc3BsYXlGb250LCBzZXREaXNwbGF5Rm9udF0gPSB1c2VTdGF0ZSgnRnJhdW5jZXMnKVxuICBjb25zdCBbcmFkaXVzLCBzZXRSYWRpdXNdID0gdXNlU3RhdGUoJzEycHgnKVxuICBjb25zdCBbcHJldmlld0RldmljZSwgc2V0UHJldmlld0RldmljZV0gPSB1c2VTdGF0ZTwnZGVza3RvcCcgfCAnbW9iaWxlJz4oJ2Rlc2t0b3AnKVxuICBjb25zdCBbc2F2ZWQsIHNldFNhdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGFwcGx5UHJlc2V0ID0gKGk6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHAgPSBwcmVzZXRzW2ldXG4gICAgc2V0UHJlc2V0KGkpXG4gICAgc2V0UHJpbWFyeShwLnByaW1hcnkpXG4gICAgc2V0U2Vjb25kYXJ5KHAuc2Vjb25kYXJ5KVxuICAgIHNldEFjY2VudChwLmFjY2VudClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgc2V0U2F2ZWQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNhdmVkKGZhbHNlKSwgMjAwMClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbFwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIHsvKiBMZWZ0IHBhbmVsICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgwIGZsZXgtc2hyaW5rLTAgYmctd2hpdGUgYm9yZGVyLXIgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGZsZXgtY29sIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBib3JkZXItYiBib3JkZXItWyNFMkUyRUNdXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XSB0ZXh0LWxnXCI+VGhlbWUgQ3VzdG9taXplcjwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBtdC0wLjVcIj5MaXZlIHN0b3JlZnJvbnQgYXBwZWFyYW5jZSBlZGl0b3I8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNSBzcGFjZS15LTdcIj5cbiAgICAgICAgICB7LyogUHJlc2V0cyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIG1iLTNcIj5Db2xvciBQcmVzZXRzPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdhcC0yXCI+XG4gICAgICAgICAgICAgIHtwcmVzZXRzLm1hcCgocCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlQcmVzZXQoaSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBncm91cCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMS41IHRyYW5zaXRpb24tYWxsYH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwLm5hbWV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsICR7cHJlc2V0ID09PSBpID8gJ3JpbmctMiByaW5nLW9mZnNldC0yIHJpbmctWyMxMTExMThdJyA6ICdob3ZlcjpzY2FsZS0xMDUnfWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke3AucHJpbWFyeX0sICR7cC5hY2NlbnR9KWAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LXNlbWlib2xkIHRleHQtWyM5QjlCQjhdXCI+e3AubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29sb3JzICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgbWItM1wiPkNvbG9yczwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ1ByaW1hcnknLCB2YWx1ZTogcHJpbWFyeSwgc2V0OiBzZXRQcmltYXJ5IH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ1NlY29uZGFyeScsIHZhbHVlOiBzZWNvbmRhcnksIHNldDogc2V0U2Vjb25kYXJ5IH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0FjY2VudCcsIHZhbHVlOiBhY2NlbnQsIHNldDogc2V0QWNjZW50IH0sXG4gICAgICAgICAgICAgIF0ubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjLmxhYmVsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntjLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1tb25vIHRleHQtWyM5QjlCQjhdXCI+e2MudmFsdWUudG9VcHBlckNhc2UoKX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLVsjRTJFMkVDXSBzaGFkb3ctbWQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjLnZhbHVlIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2MudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gYy5zZXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNyLW9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBUeXBvZ3JhcGh5ICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgbWItM1wiPlR5cG9ncmFwaHk8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1bIzZCNkI4Ml0gbWItMlwiPkJvZHkgRm9udDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICB7Zm9udHMuZmlsdGVyKGYgPT4gZi5jYXRlZ29yeSA9PT0gJ1NhbnMtc2VyaWYnKS5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2YubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRCb2R5Rm9udChmLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBweS0yIHJvdW5kZWQtbGcgYm9yZGVyIHRyYW5zaXRpb24tYWxsIHRleHQtc20gJHtib2R5Rm9udCA9PT0gZi5uYW1lID8gJ2JvcmRlci1bI0U4NDUwQV0gYmctWyNGRkY3RjVdIHRleHQtWyNFODQ1MEFdJyA6ICdib3JkZXItWyNFMkUyRUNdIHRleHQtWyM2QjZCODJdIGhvdmVyOmJvcmRlci1bI0M4QzhFMF0nfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9keUZvbnQgPT09IGYubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTYuNzA3IDUuMjkzYTEgMSAwIDAxMCAxLjQxNGwtOCA4YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTEuNDE0LTEuNDE0TDggMTIuNTg2bDcuMjkzLTcuMjkzYTEgMSAwIDAxMS40MTQgMHpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1bIzZCNkI4Ml0gbWItMlwiPkRpc3BsYXkgRm9udDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICB7Zm9udHMuZmlsdGVyKGYgPT4gZi5jYXRlZ29yeSA9PT0gJ1NlcmlmJykubWFwKGYgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlzcGxheUZvbnQoZi5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHktMiByb3VuZGVkLWxnIGJvcmRlciB0cmFuc2l0aW9uLWFsbCB0ZXh0LXNtICR7ZGlzcGxheUZvbnQgPT09IGYubmFtZSA/ICdib3JkZXItWyNFODQ1MEFdIGJnLVsjRkZGN0Y1XSB0ZXh0LVsjRTg0NTBBXScgOiAnYm9yZGVyLVsjRTJFMkVDXSB0ZXh0LVsjNkI2QjgyXSBob3Zlcjpib3JkZXItWyNDOEM4RTBdJ31gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2YubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlGb250ID09PSBmLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE2LjcwNyA1LjI5M2ExIDEgMCAwMTAgMS40MTRsLTggOGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDExLjQxNC0xLjQxNEw4IDEyLjU4Nmw3LjI5My03LjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEJvcmRlciByYWRpdXMgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBtYi0zXCI+QnV0dG9uIFNoYXBlPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC0yXCI+XG4gICAgICAgICAgICAgIHtib3JkZXJSYWRpaS5tYXAociA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtyLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmFkaXVzKHIudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktMiB0cmFuc2l0aW9uLWFsbCAke3JhZGl1cyA9PT0gci52YWx1ZSA/ICd0ZXh0LVsjRTg0NTBBXScgOiAndGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzZCNkI4Ml0nfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwIGgtMTAgYm9yZGVyLTIgdHJhbnNpdGlvbi1hbGwgJHtyYWRpdXMgPT09IHIudmFsdWUgPyAnYm9yZGVyLVsjRTg0NTBBXSBiZy1bI0ZGRjdGNV0nIDogJ2JvcmRlci1bI0UyRTJFQ10nfWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogci52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGRcIj57ci5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGJvcmRlci10IGJvcmRlci1bI0UyRTJFQ10gZmxleCBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleC0xIGgtMTAgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICBSZXNldFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgaC0xMCBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzYXZlZCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk01IDEzbDQgNEwxOSA3XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICBTYXZlZCFcbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogJ1B1Ymxpc2ggVGhlbWUnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUHJldmlldyBwYW5lbCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLVsjRjRGNEY4XSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIHsvKiBQcmV2aWV3IHRvb2xiYXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLVsjRTJFMkVDXSBweC01IHB5LTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGJnLVsjRjRGNEY4XSByb3VuZGVkLWxnIHAtMVwiPlxuICAgICAgICAgICAgeyhbJ2Rlc2t0b3AnLCAnbW9iaWxlJ10gYXMgY29uc3QpLm1hcChkID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17ZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcmV2aWV3RGV2aWNlKGQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgcm91bmRlZC1tZCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgJHtwcmV2aWV3RGV2aWNlID09PSBkID8gJ2JnLXdoaXRlIHNoYWRvdy1zbSB0ZXh0LVsjMTExMTE4XScgOiAndGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzZCNkI4Ml0nfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZCA9PT0gJ2Rlc2t0b3AnID8gKFxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cmVjdCB4PVwiMlwiIHk9XCIzXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE0XCIgcng9XCIyXCIgLz48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBkPVwiTTggMjFoOE0xMiAxN3Y0XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT48cmVjdCB4PVwiNVwiIHk9XCIyXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjIwXCIgcng9XCIyXCIgLz48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjE3XCIgcj1cIjFcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj57ZH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctWyNGNEY0RjhdIHJvdW5kZWQtbGcgcHgtMyBweS0yXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtWyM5QjlCQjhdXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDExYzAgMy41MTctMS4wMDkgNi43OTktMi43NTMgOS41NzFtLTMuNDQtMi4wNGwuMDU0LS4wOUExMy45MTYgMTMuOTE2IDAgMDA4IDExYTQgNCAwIDExOCAwYzAgMS4wMTctLjA3IDIuMDE5LS4yMDMgM20tMi4xMTggNi44NDRBMjEuODggMjEuODggMCAwMDE1LjE3MSAxN20zLjgzOSAxLjEzMmMuNjQ1LTIuMjY2Ljk5LTQuNjU5Ljk5LTcuMTMyQTggOCAwIDAwOCA0LjA3TTMgMTUuMzY0Yy42NC0xLjMxOSAxLTIuOCAxLTQuMzY0IDAtMS40NTcuMzktMi44MjMgMS4wNy00XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtWyM5QjlCQjhdXCI+eW91cnN0b3JlLmNvbTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcHgtMiBweS0xIGJnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXSByb3VuZGVkLWxnXCI+UHJldmlldyBNb2RlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUHJldmlldyBjb250ZW50ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHAtOCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctd2hpdGUgc2hhZG93LTJ4bCBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwICR7cHJldmlld0RldmljZSA9PT0gJ2Rlc2t0b3AnID8gJ3ctZnVsbCBtYXgtdy00eGwgcm91bmRlZC0yeGwnIDogJ3ctWzM5MHB4XSByb3VuZGVkLVs0MHB4XSd9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogNTgwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIFNpbXVsYXRlZCBzdG9yZWZyb250ICovfVxuICAgICAgICAgICAgey8qIE5hdiAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogc2Vjb25kYXJ5IH19IGNsYXNzTmFtZT1cInB4LTYgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1zbVwiIHN0eWxlPXt7IGZvbnRGYW1pbHk6IGRpc3BsYXlGb250IH19Pk5FWE1BUlQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICB7WydTaG9wJywgJ0RlYWxzJywgJ0JyYW5kcyddLm1hcChuID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17bn0gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXdoaXRlLzcwXCI+e259PC9zcGFuPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBwcmltYXJ5IH19PlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtd2hpdGVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xNiAxMVY3YTQgNCAwIDAwLTggMHY0TTUgOWgxNGwxIDEySDRMNSA5elwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBIZXJvIGJhbm5lciAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7c2Vjb25kYXJ5fSwgJHtwcmltYXJ5fTMzKWAgfX0gY2xhc3NOYW1lPVwicHgtOCBweS0xMlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgbWItMlwiIHN0eWxlPXt7IGNvbG9yOiBhY2NlbnQgfX0+TmV3IFNlYXNvbjwvcD5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSBsZWFkaW5nLXRpZ2h0IG1iLTRcIiBzdHlsZT17eyBmb250RmFtaWx5OiBkaXNwbGF5Rm9udCB9fT5cbiAgICAgICAgICAgICAgICBEaXNjb3ZlciBQcmVtaXVtPGJyIC8+UHJvZHVjdHNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMi41IHRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgc2hhZG93LWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogcHJpbWFyeSwgYm9yZGVyUmFkaXVzOiByYWRpdXMgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNob3AgTm93IOKGklxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUHJvZHVjdCBjYXJkcyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBtYi00XCI+RmVhdHVyZWQgUHJvZHVjdHM8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZCBnYXAtNCAke3ByZXZpZXdEZXZpY2UgPT09ICdkZXNrdG9wJyA/ICdncmlkLWNvbHMtMycgOiAnZ3JpZC1jb2xzLTInfWB9PlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdQcmVtaXVtIEhlYWRwaG9uZXMnLCBwcmljZTogJyQyOTknLCBiYWRnZTogJ1NhbGUnLCBpbWc6ICcxNTA1NzQwNDIwOTI4LTVlNTYwYzA2ZDMwZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xlYXRoZXIgV2F0Y2gnLCBwcmljZTogJyQxODknLCBiYWRnZTogJ05ldycsIGltZzogJzE1MjMyNzUzMzU2ODQtMzc4OThiNmJhZjMwJyB9LFxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnU3VuZ2xhc3NlcycsIHByaWNlOiAnJDEyOScsIGJhZGdlOiAnJywgaW1nOiAnMTU3MjYzNTE5NjIzNy0xNGIzZjI4MTUwM2YnIH0sXG4gICAgICAgICAgICAgICAgXS5zbGljZSgwLCBwcmV2aWV3RGV2aWNlID09PSAnZGVza3RvcCcgPyAzIDogMikubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3AubmFtZX0gY2xhc3NOYW1lPVwiZ3JvdXBcIiBzdHlsZT17eyBib3JkZXJSYWRpdXM6IHJhZGl1cywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBib3JkZXI6ICcxcHggc29saWQgI0UyRTJFQycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzc1JScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLSR7cC5pbWd9P3c9MzAwJmg9MjI1JmZpdD1jcm9wJmF1dG89Zm9ybWF0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtwLmJhZGdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIGxlZnQtMiB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC0yIHB5LTAuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHByaW1hcnksIGJvcmRlclJhZGl1czogJzRweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3AuYmFkZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHRydW5jYXRlXCI+e3AubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc21cIiBzdHlsZT17eyBjb2xvcjogcHJpbWFyeSB9fT57cC5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTIuNSBweS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogc2Vjb25kYXJ5LCBib3JkZXJSYWRpdXM6IHJhZGl1cyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQWNjZW50IHNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTYgbWItNiBwLTQgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBhY2NlbnQgKyAnMjInIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkXCIgc3R5bGU9e3sgY29sb3I6IHNlY29uZGFyeSB9fT5GbGFzaCBTYWxlIEVuZHMgU29vbjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LWxnXCIgc3R5bGU9e3sgY29sb3I6IHByaW1hcnkgfX0+MDI6NDc6MTg8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZSBweC00IHB5LTJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHByaW1hcnksIGJvcmRlclJhZGl1czogcmFkaXVzIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWaWV3IERlYWxzXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLElBQU0sVUFBVTtDQUNkO0VBQUUsTUFBTTtFQUFTLFNBQVM7RUFBVyxXQUFXO0VBQVcsUUFBUTtDQUFVO0NBQzdFO0VBQUUsTUFBTTtFQUFTLFNBQVM7RUFBVyxXQUFXO0VBQVcsUUFBUTtDQUFVO0NBQzdFO0VBQUUsTUFBTTtF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