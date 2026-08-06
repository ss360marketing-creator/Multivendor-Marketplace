import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
import { s as storefrontSections } from "./adminData-rxTk4z3f.js";
//#region src/admin/pages/StorefrontBuilder.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var sectionTypeIcons = {
	"Hero Banner": "🖼️",
	"Trust Bar": "✅",
	"Category Grid": "⊞",
	"Product Carousel": "🛍️",
	"Flash Sale": "⚡",
	"Before & After": "↔️",
	"Vendor Carousel": "🏪",
	"Best Sellers": "⭐",
	"Brand Logos": "🏷️",
	"UGC Reviews": "💬",
	"Product Grid": "⊟",
	"Newsletter": "📧"
};
var libraryItems = [
	"Hero Banner",
	"Announcement Bar",
	"Trust Bar",
	"Category Grid",
	"Product Carousel",
	"Product Grid",
	"Flash Sale",
	"Before & After",
	"Vendor Carousel",
	"Brand Logos",
	"UGC Reviews",
	"Testimonials",
	"Newsletter",
	"App Download",
	"Custom HTML"
];
var sectionTypeColors = {
	"Hero Banner": "#EEF2FF",
	"Flash Sale": "#FFF1F2",
	"Product Carousel": "#F0FDF4",
	"Category Grid": "#FFF7ED",
	"Vendor Carousel": "#F5F3FF",
	"Brand Logos": "#F0F9FF",
	"UGC Reviews": "#FDF4FF",
	"Trust Bar": "#ECFDF5",
	"Before & After": "#FFF7ED",
	"Product Grid": "#F0FDF4"
};
function StorefrontBuilder({ onNavigate: _ }) {
	const [sections, setSections] = (0, import_react.useState)(storefrontSections);
	const [selected, setSelected] = (0, import_react.useState)("s1");
	const [dragOver, setDragOver] = (0, import_react.useState)(null);
	const [_dragItem, setDragItem] = (0, import_react.useState)(null);
	const [previewMode, setPreviewMode] = (0, import_react.useState)("desktop");
	const [_saved, setSaved] = (0, import_react.useState)(false);
	const [published, setPublished] = (0, import_react.useState)(false);
	const selectedSection = sections.find((s) => s.id === selected);
	const toggleVisible = (id) => {
		setSections((prev) => prev.map((s) => s.id === id ? {
			...s,
			visible: !s.visible
		} : s));
	};
	const removeSection = (id) => {
		setSections((prev) => prev.filter((s) => s.id !== id));
		if (selected === id) setSelected(null);
	};
	const duplicateSection = (id) => {
		const s = sections.find((sec) => sec.id === id);
		if (!s) return;
		const newId = `s_${Date.now()}`;
		setSections((prev) => {
			const idx = prev.findIndex((sec) => sec.id === id);
			const arr = [...prev];
			arr.splice(idx + 1, 0, {
				...s,
				id: newId,
				label: s.label + " (copy)"
			});
			return arr;
		});
	};
	const moveSection = (id, dir) => {
		setSections((prev) => {
			const idx = prev.findIndex((s) => s.id === id);
			if (dir === "up" && idx === 0) return prev;
			if (dir === "down" && idx === prev.length - 1) return prev;
			const arr = [...prev];
			const other = dir === "up" ? idx - 1 : idx + 1;
			[arr[idx], arr[other]] = [arr[other], arr[idx]];
			return arr;
		});
	};
	const addSection = (type) => {
		const newId = `s_${Date.now()}`;
		setSections((prev) => [...prev, {
			id: newId,
			type,
			label: type,
			visible: true,
			scheduled: false,
			order: prev.length + 1
		}]);
		setSelected(newId);
	};
	const handlePublish = () => {
		setPublished(true);
		setSaved(true);
		setTimeout(() => {
			setPublished(false);
			setSaved(false);
		}, 3e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-56 flex-shrink-0 bg-white border-r border-[#E2E2EC] flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 py-4 border-b border-[#F4F4F8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold text-[#9B9BB8] uppercase tracking-widest",
						children: "Section Library"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-3 space-y-1",
					children: libraryItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => addSection(item),
						className: "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[#F4F4F8] text-left transition-colors group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base leading-none",
								children: sectionTypeIcons[item] ?? "📦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-[#111118] flex-1",
								children: item
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-3.5 h-3.5 text-[#C8C8E0] opacity-0 group-hover:opacity-100 transition-opacity",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M12 4v16m8-8H4"
								})
							})
						]
					}, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col min-w-0 bg-[#F4F4F8]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 py-3 bg-white border-b border-[#E2E2EC]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111118]",
							children: "Homepage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs bg-[#D1FAE5] text-[#065F46] px-2 py-0.5 rounded-full font-semibold",
							children: "Live"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex rounded-lg border border-[#E2E2EC] overflow-hidden",
								children: ["desktop", "mobile"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPreviewMode(m),
									className: `px-3 py-1.5 transition-colors flex items-center gap-1.5 text-xs font-semibold ${previewMode === m ? "bg-[#0F0F18] text-white" : "text-[#6B6B82] hover:bg-[#F4F4F8]"}`,
									children: [m === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-3.5 h-3.5",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										})
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-3.5 h-3.5",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
										})
									}), m.charAt(0).toUpperCase() + m.slice(1)]
								}, m))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8] transition-colors",
								children: "Save Draft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handlePublish,
								className: `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${published ? "bg-[#059669] text-white" : "bg-[#E8450A] text-white hover:bg-[#C93A07]"}`,
								children: published ? "✓ Published!" : "Publish"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `mx-auto space-y-2 ${previewMode === "mobile" ? "max-w-[390px]" : "max-w-4xl"}`,
						children: [sections.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setSelected(s.id),
							onDragOver: (e) => {
								e.preventDefault();
								setDragOver(s.id);
							},
							onDrop: () => {
								setDragOver(null);
								setDragItem(null);
							},
							className: `relative rounded-xl border-2 cursor-pointer transition-all select-none ${selected === s.id ? "border-[#E8450A] shadow-lg shadow-[#E8450A]/10" : dragOver === s.id ? "border-[#6366F1] border-dashed" : "border-[#E2E2EC] hover:border-[#9B9BB8]"} ${!s.visible ? "opacity-50" : ""}`,
							style: { background: sectionTypeColors[s.type] ?? "#FFFFFF" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										draggable: true,
										onDragStart: () => setDragItem(s.id),
										className: "text-[#C8C8E0] cursor-grab active:cursor-grabbing",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "w-4 h-4",
											fill: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 6a2 2 0 100-4 2 2 0 000 4zM16 6a2 2 0 100-4 2 2 0 000 4zM8 14a2 2 0 100-4 2 2 0 000 4zM16 14a2 2 0 100-4 2 2 0 000 4zM8 22a2 2 0 100-4 2 2 0 000 4zM16 22a2 2 0 100-4 2 2 0 000 4z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg",
										children: sectionTypeIcons[s.type] ?? "📦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111118] truncate",
												children: s.label
											}), s.scheduled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] bg-[#EEF2FF] text-[#6366F1] px-1.5 py-0.5 rounded-full font-semibold",
												children: "Scheduled"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#9B9BB8]",
											children: [
												s.type,
												" · Position ",
												idx + 1
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										onClick: (e) => e.stopPropagation(),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => moveSection(s.id, "up"),
												disabled: idx === 0,
												className: "w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors disabled:opacity-30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5 text-[#6B6B82]",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2.5,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M5 15l7-7 7 7"
													})
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => moveSection(s.id, "down"),
												disabled: idx === sections.length - 1,
												className: "w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors disabled:opacity-30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5 text-[#6B6B82]",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2.5,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M19 9l-7 7-7-7"
													})
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => toggleVisible(s.id),
												className: `w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-black/5 ${s.visible ? "text-[#6B6B82]" : "text-[#C8C8E0]"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: s.visible ? "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" : "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
													})
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => duplicateSection(s.id),
												className: "w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors text-[#6B6B82]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
													})
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => removeSection(s.id),
												className: "w-7 h-7 rounded-lg hover:bg-[#FEE2E2] flex items-center justify-center transition-colors text-[#9B9BB8] hover:text-[#E11D48]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "w-3.5 h-3.5",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													})
												})
											})
										]
									})
								]
							}), selected === s.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-4 mb-3 h-16 rounded-lg bg-white/60 border border-white/80 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#9B9BB8] font-medium",
									children: [s.type, " preview"]
								})
							})]
						}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-16 rounded-xl border-2 border-dashed border-[#E2E2EC] flex items-center justify-center text-xs text-[#C8C8E0] font-medium hover:border-[#9B9BB8] hover:text-[#9B9BB8] transition-colors cursor-pointer",
							children: "+ Drop section here or pick from library"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-72 flex-shrink-0 bg-white border-l border-[#E2E2EC] flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-4 border-b border-[#F4F4F8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold text-[#9B9BB8] uppercase tracking-widest",
						children: "Properties"
					})
				}), selectedSection ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-5 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: sectionTypeIcons[selectedSection.type] ?? "📦"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-sm text-[#111118]",
								children: selectedSection.type
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-[#9B9BB8]",
								children: ["Position ", sections.findIndex((s) => s.id === selected) + 1]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: "Section Label"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: selectedSection.label,
								className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A] transition-colors"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: "Visible on Storefront"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleVisible(selectedSection.id),
								className: `w-10 h-6 rounded-full transition-all relative ${selectedSection.visible ? "bg-[#E8450A]" : "bg-[#E2E2EC]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${selectedSection.visible ? "left-5" : "left-1"}` })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-[#6B6B82]",
								children: "Schedule"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[10px] text-[#9B9BB8] mb-1 block",
									children: "Start Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									className: "w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs text-[#111118] outline-none focus:border-[#E8450A]"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[10px] text-[#9B9BB8] mb-1 block",
									children: "End Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									className: "w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs text-[#111118] outline-none focus:border-[#E8450A]"
								})] })]
							})]
						}),
						selectedSection.type === "Product Carousel" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-[#9B9BB8] uppercase tracking-widest pt-2 border-t border-[#F4F4F8]",
									children: "Product Source"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Source Type"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Best Sellers" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "New Arrivals" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Highest Rated" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Manual Selection" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "By Category" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Products to Show"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										defaultValue: 10,
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]"
									})]
								}),
								[
									"Show Rating",
									"Show Vendor",
									"Show Discount",
									"Carousel Enabled",
									"Show Wishlist"
								].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs text-[#6B6B82]",
										children: opt
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "w-9 h-5 rounded-full bg-[#E8450A] relative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0.5 left-4 w-4 h-4 rounded-full bg-white shadow" })
									})]
								}, opt))
							]
						}),
						selectedSection.type === "Hero Banner" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-[#9B9BB8] uppercase tracking-widest pt-2 border-t border-[#F4F4F8]",
									children: "Carousel Settings"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs text-[#6B6B82]",
										children: "Auto Play"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "w-9 h-5 rounded-full bg-[#E8450A] relative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0.5 left-4 w-4 h-4 rounded-full bg-white shadow" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Slide Duration (ms)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										defaultValue: 5e3,
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Transition"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Fade" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Slide" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Zoom" })
										]
									})]
								})
							]
						}),
						selectedSection.type === "Flash Sale" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-[#9B9BB8] uppercase tracking-widest pt-2 border-t border-[#F4F4F8]",
									children: "Flash Sale Config"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Sale Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										defaultValue: "Summer Flash Sale",
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm text-[#111118] outline-none focus:border-[#E8450A]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] text-[#9B9BB8] mb-1 block",
										children: "Start"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "datetime-local",
										className: "w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-[11px] text-[#111118] outline-none"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] text-[#9B9BB8] mb-1 block",
										children: "End"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "datetime-local",
										className: "w-full h-8 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-[11px] text-[#111118] outline-none"
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t border-[#F4F4F8] space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full py-2 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07] transition-colors",
								children: "Save Changes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full py-2 border border-[#E2E2EC] text-[#6B6B82] rounded-lg text-xs font-semibold hover:bg-[#F4F4F8] transition-colors",
								children: "Preview Section"
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col items-center justify-center gap-3 p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-xl bg-[#F4F4F8] flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-6 h-6 text-[#C8C8E0]",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 1.5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#9B9BB8]",
						children: "Select a section to edit its properties"
					})]
				})]
			})
		]
	});
}
//#endregion
export { StorefrontBuilder as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmVmcm9udEJ1aWxkZXItS1pIUjZjVm0uanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL1N0b3JlZnJvbnRCdWlsZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc3RvcmVmcm9udFNlY3Rpb25zIH0gZnJvbSAnLi4vYWRtaW5EYXRhJ1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5cblxudHlwZSBQcm9wcyA9IHsgb25OYXZpZ2F0ZTogKHM6IEFkbWluU2VjdGlvbikgPT4gdm9pZCB9XG5cbmNvbnN0IHNlY3Rpb25UeXBlSWNvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICdIZXJvIEJhbm5lcic6ICfwn5a877iPJyxcbiAgJ1RydXN0IEJhcic6ICfinIUnLFxuICAnQ2F0ZWdvcnkgR3JpZCc6ICfiip4nLFxuICAnUHJvZHVjdCBDYXJvdXNlbCc6ICfwn5uN77iPJyxcbiAgJ0ZsYXNoIFNhbGUnOiAn4pqhJyxcbiAgJ0JlZm9yZSAmIEFmdGVyJzogJ+KGlO+4jycsXG4gICdWZW5kb3IgQ2Fyb3VzZWwnOiAn8J+PqicsXG4gICdCZXN0IFNlbGxlcnMnOiAn4q2QJyxcbiAgJ0JyYW5kIExvZ29zJzogJ/Cfj7fvuI8nLFxuICAnVUdDIFJldmlld3MnOiAn8J+SrCcsXG4gICdQcm9kdWN0IEdyaWQnOiAn4oqfJyxcbiAgJ05ld3NsZXR0ZXInOiAn8J+TpycsXG59XG5cbmNvbnN0IGxpYnJhcnlJdGVtcyA9IFtcbiAgJ0hlcm8gQmFubmVyJywgJ0Fubm91bmNlbWVudCBCYXInLCAnVHJ1c3QgQmFyJywgJ0NhdGVnb3J5IEdyaWQnLFxuICAnUHJvZHVjdCBDYXJvdXNlbCcsICdQcm9kdWN0IEdyaWQnLCAnRmxhc2ggU2FsZScsICdCZWZvcmUgJiBBZnRlcicsXG4gICdWZW5kb3IgQ2Fyb3VzZWwnLCAnQnJhbmQgTG9nb3MnLCAnVUdDIFJldmlld3MnLCAnVGVzdGltb25pYWxzJyxcbiAgJ05ld3NsZXR0ZXInLCAnQXBwIERvd25sb2FkJywgJ0N1c3RvbSBIVE1MJyxcbl1cblxuY29uc3Qgc2VjdGlvblR5cGVDb2xvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICdIZXJvIEJhbm5lcic6ICcjRUVGMkZGJyxcbiAgJ0ZsYXNoIFNhbGUnOiAnI0ZGRjFGMicsXG4gICdQcm9kdWN0IENhcm91c2VsJzogJyNGMEZERjQnLFxuICAnQ2F0ZWdvcnkgR3JpZCc6ICcjRkZGN0VEJyxcbiAgJ1ZlbmRvciBDYXJvdXNlbCc6ICcjRjVGM0ZGJyxcbiAgJ0JyYW5kIExvZ29zJzogJyNGMEY5RkYnLFxuICAnVUdDIFJldmlld3MnOiAnI0ZERjRGRicsXG4gICdUcnVzdCBCYXInOiAnI0VDRkRGNScsXG4gICdCZWZvcmUgJiBBZnRlcic6ICcjRkZGN0VEJyxcbiAgJ1Byb2R1Y3QgR3JpZCc6ICcjRjBGREY0Jyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcmVmcm9udEJ1aWxkZXIoeyBvbk5hdmlnYXRlOiBfIH06IFByb3BzKSB7XG4gIGNvbnN0IFtzZWN0aW9ucywgc2V0U2VjdGlvbnNdID0gdXNlU3RhdGUoc3RvcmVmcm9udFNlY3Rpb25zKVxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KCdzMScpXG4gIGNvbnN0IFtkcmFnT3Zlciwgc2V0RHJhZ092ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW19kcmFnSXRlbSwgc2V0RHJhZ0l0ZW1dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3ByZXZpZXdNb2RlLCBzZXRQcmV2aWV3TW9kZV0gPSB1c2VTdGF0ZTwnZGVza3RvcCcgfCAnbW9iaWxlJz4oJ2Rlc2t0b3AnKVxuICBjb25zdCBbX3NhdmVkLCBzZXRTYXZlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3B1Ymxpc2hlZCwgc2V0UHVibGlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNlbGVjdGVkU2VjdGlvbiA9IHNlY3Rpb25zLmZpbmQocyA9PiBzLmlkID09PSBzZWxlY3RlZClcblxuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWN0aW9ucyhwcmV2ID0+IHByZXYubWFwKHMgPT4gcy5pZCA9PT0gaWQgPyB7IC4uLnMsIHZpc2libGU6ICFzLnZpc2libGUgfSA6IHMpKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlU2VjdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VjdGlvbnMocHJldiA9PiBwcmV2LmZpbHRlcihzID0+IHMuaWQgIT09IGlkKSlcbiAgICBpZiAoc2VsZWN0ZWQgPT09IGlkKSBzZXRTZWxlY3RlZChudWxsKVxuICB9XG5cbiAgY29uc3QgZHVwbGljYXRlU2VjdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcyA9IHNlY3Rpb25zLmZpbmQoc2VjID0+IHNlYy5pZCA9PT0gaWQpXG4gICAgaWYgKCFzKSByZXR1cm5cbiAgICBjb25zdCBuZXdJZCA9IGBzXyR7RGF0ZS5ub3coKX1gXG4gICAgc2V0U2VjdGlvbnMocHJldiA9PiB7XG4gICAgICBjb25zdCBpZHggPSBwcmV2LmZpbmRJbmRleChzZWMgPT4gc2VjLmlkID09PSBpZClcbiAgICAgIGNvbnN0IGFyciA9IFsuLi5wcmV2XVxuICAgICAgYXJyLnNwbGljZShpZHggKyAxLCAwLCB7IC4uLnMsIGlkOiBuZXdJZCwgbGFiZWw6IHMubGFiZWwgKyAnIChjb3B5KScgfSlcbiAgICAgIHJldHVybiBhcnJcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgbW92ZVNlY3Rpb24gPSAoaWQ6IHN0cmluZywgZGlyOiAndXAnIHwgJ2Rvd24nKSA9PiB7XG4gICAgc2V0U2VjdGlvbnMocHJldiA9PiB7XG4gICAgICBjb25zdCBpZHggPSBwcmV2LmZpbmRJbmRleChzID0+IHMuaWQgPT09IGlkKVxuICAgICAgaWYgKGRpciA9PT0gJ3VwJyAmJiBpZHggPT09IDApIHJldHVybiBwcmV2XG4gICAgICBpZiAoZGlyID09PSAnZG93bicgJiYgaWR4ID09PSBwcmV2Lmxlbmd0aCAtIDEpIHJldHVybiBwcmV2XG4gICAgICBjb25zdCBhcnIgPSBbLi4ucHJldl1cbiAgICAgIGNvbnN0IG90aGVyID0gZGlyID09PSAndXAnID8gaWR4IC0gMSA6IGlkeCArIDFcbiAgICAgIDtbYXJyW2lkeF0sIGFycltvdGhlcl1dID0gW2FycltvdGhlcl0sIGFycltpZHhdXVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhZGRTZWN0aW9uID0gKHR5cGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld0lkID0gYHNfJHtEYXRlLm5vdygpfWBcbiAgICBzZXRTZWN0aW9ucyhwcmV2ID0+IFsuLi5wcmV2LCB7IGlkOiBuZXdJZCwgdHlwZSwgbGFiZWw6IHR5cGUsIHZpc2libGU6IHRydWUsIHNjaGVkdWxlZDogZmFsc2UsIG9yZGVyOiBwcmV2Lmxlbmd0aCArIDEgfV0pXG4gICAgc2V0U2VsZWN0ZWQobmV3SWQpXG4gIH1cblxuICBjb25zdCBoYW5kbGVQdWJsaXNoID0gKCkgPT4ge1xuICAgIHNldFB1Ymxpc2hlZCh0cnVlKVxuICAgIHNldFNhdmVkKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFB1Ymxpc2hlZChmYWxzZSk7IHNldFNhdmVkKGZhbHNlKSB9LCAzMDAwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuXG4gICAgICB7LyogTEVGVDogU2VjdGlvbiBMaWJyYXJ5ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTU2IGZsZXgtc2hyaW5rLTAgYmctd2hpdGUgYm9yZGVyLXIgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS00IGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+U2VjdGlvbiBMaWJyYXJ5PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtMyBzcGFjZS15LTFcIj5cbiAgICAgICAgICB7bGlicmFyeUl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRTZWN0aW9uKGl0ZW0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSBweC0zIHB5LTIuNSByb3VuZGVkLWxnIGhvdmVyOmJnLVsjRjRGNEY4XSB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1jb2xvcnMgZ3JvdXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy1ub25lXCI+e3NlY3Rpb25UeXBlSWNvbnNbaXRlbV0gPz8gJ/Cfk6YnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LVsjMTExMTE4XSBmbGV4LTFcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1bI0M4QzhFMF0gb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyLjV9PlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDR2MTZtOC04SDRcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ0VOVEVSOiBDYW52YXMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYmctWyNGNEY0RjhdXCI+XG4gICAgICAgIHsvKiBDYW52YXMgdG9vbGJhciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNSBweS0zIGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1bI0UyRTJFQ11cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5Ib21lcGFnZTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgYmctWyNEMUZBRTVdIHRleHQtWyMwNjVGNDZdIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkXCI+TGl2ZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIHsvKiBQcmV2aWV3IG1vZGUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgeyhbJ2Rlc2t0b3AnLCAnbW9iaWxlJ10gYXMgY29uc3QpLm1hcChtID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e219XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcmV2aWV3TW9kZShtKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkICR7cHJldmlld01vZGUgPT09IG0gPyAnYmctWyMwRjBGMThdIHRleHQtd2hpdGUnIDogJ3RleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XSd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bSA9PT0gJ2Rlc2t0b3AnID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkuNzUgMTdMOSAyMGwtMSAxaDhsLTEtMS0uNzUtM00zIDEzaDE4TTUgMTdoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJ6XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgMThoLjAxTTggMjFoOGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg4YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHttLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbS5zbGljZSgxKX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0Y0RjRGOF0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgU2F2ZSBEcmFmdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVB1Ymxpc2h9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMS41IHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsICR7cHVibGlzaGVkID8gJ2JnLVsjMDU5NjY5XSB0ZXh0LXdoaXRlJyA6ICdiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSBob3ZlcjpiZy1bI0M5M0EwN10nfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwdWJsaXNoZWQgPyAn4pyTIFB1Ymxpc2hlZCEnIDogJ1B1Ymxpc2gnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTZWN0aW9ucyBsaXN0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BteC1hdXRvIHNwYWNlLXktMiAke3ByZXZpZXdNb2RlID09PSAnbW9iaWxlJyA/ICdtYXgtdy1bMzkwcHhdJyA6ICdtYXgtdy00eGwnfWB9PlxuICAgICAgICAgICAge3NlY3Rpb25zLm1hcCgocywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3MuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQocy5pZCl9XG4gICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17ZSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgc2V0RHJhZ092ZXIocy5pZCkgfX1cbiAgICAgICAgICAgICAgICBvbkRyb3A9eygpID0+IHsgc2V0RHJhZ092ZXIobnVsbCk7IHNldERyYWdJdGVtKG51bGwpIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcm91bmRlZC14bCBib3JkZXItMiBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBzZWxlY3Qtbm9uZSAke1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPT09IHMuaWRcbiAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLVsjRTg0NTBBXSBzaGFkb3ctbGcgc2hhZG93LVsjRTg0NTBBXS8xMCdcbiAgICAgICAgICAgICAgICAgICAgOiBkcmFnT3ZlciA9PT0gcy5pZFxuICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItWyM2MzY2RjFdIGJvcmRlci1kYXNoZWQnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1bI0UyRTJFQ10gaG92ZXI6Ym9yZGVyLVsjOUI5QkI4XSdcbiAgICAgICAgICAgICAgICB9ICR7IXMudmlzaWJsZSA/ICdvcGFjaXR5LTUwJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogc2VjdGlvblR5cGVDb2xvcnNbcy50eXBlXSA/PyAnI0ZGRkZGRicgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICB7LyogRHJhZyBoYW5kbGUgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0RHJhZ0l0ZW0ocy5pZCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyNDOEM4RTBdIGN1cnNvci1ncmFiIGFjdGl2ZTpjdXJzb3ItZ3JhYmJpbmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCA2YTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0ek0xNiA2YTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0ek04IDE0YTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0ek0xNiAxNGEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHpNOCAyMmEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHpNMTYgMjJhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntzZWN0aW9uVHlwZUljb25zW3MudHlwZV0gPz8gJ/Cfk6YnfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHRydW5jYXRlXCI+e3MubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIHtzLnNjaGVkdWxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBiZy1bI0VFRjJGRl0gdGV4dC1bIzYzNjZGMV0gcHgtMS41IHB5LTAuNSByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZFwiPlNjaGVkdWxlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPntzLnR5cGV9IMK3IFBvc2l0aW9uIHtpZHggKyAxfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogQWN0aW9ucyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW92ZVNlY3Rpb24ocy5pZCwgJ3VwJyl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lkeCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03IHJvdW5kZWQtbGcgaG92ZXI6YmctYmxhY2svNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWNvbG9ycyBkaXNhYmxlZDpvcGFjaXR5LTMwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1bIzZCNkI4Ml1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTUgMTVsNy03IDcgN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW92ZVNlY3Rpb24ocy5pZCwgJ2Rvd24nKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aWR4ID09PSBzZWN0aW9ucy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBob3ZlcjpiZy1ibGFjay81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tY29sb3JzIGRpc2FibGVkOm9wYWNpdHktMzBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LVsjNkI2QjgyXVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTkgOWwtNyA3LTctN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVmlzaWJsZShzLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTcgaC03IHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctYmxhY2svNSAke3MudmlzaWJsZSA/ICd0ZXh0LVsjNkI2QjgyXScgOiAndGV4dC1bI0M4QzhFMF0nfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9e3MudmlzaWJsZSA/IFwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHogTTIuNDU4IDEyQzMuNzMyIDcuOTQzIDcuNTIzIDUgMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQyIDctMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3LTQuNDc3IDAtOC4yNjgtMi45NDMtOS41NDItN3pcIiA6IFwiTTEzLjg3NSAxOC44MjVBMTAuMDUgMTAuMDUgMCAwMTEyIDE5Yy00LjQ3OCAwLTguMjY4LTIuOTQzLTkuNTQzLTdhOS45NyA5Ljk3IDAgMDExLjU2My0zLjAyOW01Ljg1OC45MDhhMyAzIDAgMTE0LjI0MyA0LjI0M005Ljg3OCA5Ljg3OGw0LjI0MiA0LjI0Mk05Ljg4IDkuODhsLTMuMjktMy4yOW03LjUzMiA3LjUzMmwzLjI5IDMuMjlNMyAzbDMuNTkgMy41OW0wIDBBOS45NTMgOS45NTMgMCAwMTEyIDVjNC40NzggMCA4LjI2OCAyLjk0MyA5LjU0MyA3YTEwLjAyNSAxMC4wMjUgMCAwMS00LjEzMiA1LjQxMW0wIDBMMjEgMjFcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkdXBsaWNhdGVTZWN0aW9uKHMuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBob3ZlcjpiZy1ibGFjay81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tY29sb3JzIHRleHQtWyM2QjZCODJdXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk04IDE2SDZhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnYybS02IDEyaDhhMiAyIDAgMDAyLTJ2LThhMiAyIDAgMDAtMi0yaC04YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyelwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlU2VjdGlvbihzLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03IHJvdW5kZWQtbGcgaG92ZXI6YmctWyNGRUUyRTJdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tY29sb3JzIHRleHQtWyM5QjlCQjhdIGhvdmVyOnRleHQtWyNFMTFENDhdXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xOSA3bC0uODY3IDEyLjE0MkEyIDIgMCAwMTE2LjEzOCAyMUg3Ljg2MmEyIDIgMCAwMS0xLjk5NS0xLjg1OEw1IDdtNSA0djZtNC02djZtMS0xMFY0YTEgMSAwIDAwLTEtMWgtNGExIDEgMCAwMC0xIDF2M000IDdoMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFNlY3Rpb24gcHJldmlldyBzdHJpcCAqL31cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPT09IHMuaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1iLTMgaC0xNiByb3VuZGVkLWxnIGJnLXdoaXRlLzYwIGJvcmRlciBib3JkZXItd2hpdGUvODAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBmb250LW1lZGl1bVwiPntzLnR5cGV9IHByZXZpZXc8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICB7LyogRHJvcCB6b25lICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHMgdGV4dC1bI0M4QzhFMF0gZm9udC1tZWRpdW0gaG92ZXI6Ym9yZGVyLVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjOUI5QkI4XSB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICArIERyb3Agc2VjdGlvbiBoZXJlIG9yIHBpY2sgZnJvbSBsaWJyYXJ5XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFJJR0hUOiBQcm9wZXJ0aWVzIHBhbmVsICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIGZsZXgtc2hyaW5rLTAgYmctd2hpdGUgYm9yZGVyLWwgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS00IGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+UHJvcGVydGllczwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3NlbGVjdGVkU2VjdGlvbiA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC01IHNwYWNlLXktNVwiPlxuICAgICAgICAgICAgey8qIFNlY3Rpb24gaGVhZGVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntzZWN0aW9uVHlwZUljb25zW3NlbGVjdGVkU2VjdGlvbi50eXBlXSA/PyAn8J+Tpid9PC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0ZXh0LVsjMTExMTE4XVwiPntzZWxlY3RlZFNlY3Rpb24udHlwZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XVwiPlBvc2l0aW9uIHtzZWN0aW9ucy5maW5kSW5kZXgocyA9PiBzLmlkID09PSBzZWxlY3RlZCkgKyAxfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIExhYmVsICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+U2VjdGlvbiBMYWJlbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VsZWN0ZWRTZWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTkgcHgtMyBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogVmlzaWJpbGl0eSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5WaXNpYmxlIG9uIFN0b3JlZnJvbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVmlzaWJsZShzZWxlY3RlZFNlY3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAgaC02IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCByZWxhdGl2ZSAke3NlbGVjdGVkU2VjdGlvbi52aXNpYmxlID8gJ2JnLVsjRTg0NTBBXScgOiAnYmctWyNFMkUyRUNdJ31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTEgdy00IGgtNCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IHRyYW5zaXRpb24tYWxsICR7c2VsZWN0ZWRTZWN0aW9uLnZpc2libGUgPyAnbGVmdC01JyA6ICdsZWZ0LTEnfWB9IC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTY2hlZHVsZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPlNjaGVkdWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjOUI5QkI4XSBtYi0xIGJsb2NrXCI+U3RhcnQgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC04IHB4LTIgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC14cyB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjOUI5QkI4XSBtYi0xIGJsb2NrXCI+RW5kIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtOCBweC0yIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQteHMgdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU2VjdGlvbi1zcGVjaWZpYyBjb25maWcgKi99XG4gICAgICAgICAgICB7c2VsZWN0ZWRTZWN0aW9uLnR5cGUgPT09ICdQcm9kdWN0IENhcm91c2VsJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBwdC0yIGJvcmRlci10IGJvcmRlci1bI0Y0RjRGOF1cIj5Qcm9kdWN0IFNvdXJjZTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+U291cmNlIFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkJlc3QgU2VsbGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5ldyBBcnJpdmFsczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkhpZ2hlc3QgUmF0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NYW51YWwgU2VsZWN0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QnkgQ2F0ZWdvcnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5Qcm9kdWN0cyB0byBTaG93PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZGVmYXVsdFZhbHVlPXsxMH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtbJ1Nob3cgUmF0aW5nJywgJ1Nob3cgVmVuZG9yJywgJ1Nob3cgRGlzY291bnQnLCAnQ2Fyb3VzZWwgRW5hYmxlZCcsICdTaG93IFdpc2hsaXN0J10ubWFwKG9wdCA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17b3B0fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj57b3B0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy05IGgtNSByb3VuZGVkLWZ1bGwgYmctWyNFODQ1MEFdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAuNSBsZWZ0LTQgdy00IGgtNCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2VsZWN0ZWRTZWN0aW9uLnR5cGUgPT09ICdIZXJvIEJhbm5lcicgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgcHQtMiBib3JkZXItdCBib3JkZXItWyNGNEY0RjhdXCI+Q2Fyb3VzZWwgU2V0dGluZ3M8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+QXV0byBQbGF5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy05IGgtNSByb3VuZGVkLWZ1bGwgYmctWyNFODQ1MEFdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wLjUgbGVmdC00IHctNCBoLTQgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvd1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+U2xpZGUgRHVyYXRpb24gKG1zKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGRlZmF1bHRWYWx1ZT17NTAwMH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5UcmFuc2l0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RmFkZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNsaWRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Wm9vbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3NlbGVjdGVkU2VjdGlvbi50eXBlID09PSAnRmxhc2ggU2FsZScgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgcHQtMiBib3JkZXItdCBib3JkZXItWyNGNEY0RjhdXCI+Rmxhc2ggU2FsZSBDb25maWc8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPlNhbGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPVwiU3VtbWVyIEZsYXNoIFNhbGVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1bIzlCOUJCOF0gbWItMSBibG9ja1wiPlN0YXJ0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLTggcHgtMiBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LVsxMXB4XSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1bIzlCOUJCOF0gbWItMSBibG9ja1wiPkVuZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC04IHB4LTIgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1bMTFweF0gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBib3JkZXItdCBib3JkZXItWyNGNEY0RjhdIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjQzkzQTA3XSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSB0ZXh0LVsjNkI2QjgyXSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0Y0RjRGOF0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICBQcmV2aWV3IFNlY3Rpb25cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBwLTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctWyNGNEY0RjhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LVsjQzhDOEUwXVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsxLjV9PlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE1IDE1bC0yIDVMOSA5bDExIDQtNSAyem0wIDBsNSA1XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj5TZWxlY3QgYSBzZWN0aW9uIHRvIGVkaXQgaXRzIHByb3BlcnRpZXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQU9BLElBQU0sbUJBQTJDO0NBQy9DLGVBQWU7Q0FDZixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNoQjtBQUVBLElBQU0sZUFBZTtDQUNuQjtDQUFlO0NBQW9CO0NBQWE7Q0FDaEQ7Q0FBb0I7Q0FBZ0I7Q0FBYztDQUNsRDtDQUFtQjtDQUFlO0NBQWU7Q0FDakQ7Q0FBYztDQUFnQjtBQUNoQztBQUVBLElBQU0sb0JBQTRDO0NBQ2hELGVBQWU7Q0FDZixjQUFj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