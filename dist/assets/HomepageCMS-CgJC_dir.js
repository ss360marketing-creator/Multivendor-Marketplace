import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/pages/HomepageCMS.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var initialSlides = [
	{
		id: "s1",
		title: "Summer Collection 2025",
		subtitle: "Up to 50% off on premium fashion brands",
		cta: "Shop Now",
		ctaLink: "/category/fashion",
		bgColor: "#0F0F18",
		textAlign: "left",
		enabled: true,
		img: "1607082348824-0a96f2a4b9da"
	},
	{
		id: "s2",
		title: "Tech Week Deals",
		subtitle: "The latest electronics at unbeatable prices",
		cta: "Explore Deals",
		ctaLink: "/category/electronics",
		bgColor: "#1E3A5F",
		textAlign: "center",
		enabled: true,
		img: "1496181133206-80ce9b88a853"
	},
	{
		id: "s3",
		title: "Beauty Essentials",
		subtitle: "Discover your perfect skincare routine",
		cta: "Discover More",
		ctaLink: "/category/beauty",
		bgColor: "#2D1B3D",
		textAlign: "left",
		enabled: false,
		scheduled: "Aug 1, 2025",
		img: "1522335789203-aabd1fc54bc9"
	}
];
var carouselSettings = {
	autoplay: true,
	duration: 5,
	transition: "Slide",
	showDots: true,
	showArrows: true
};
function HomepageCMS({ onNavigate: _ }) {
	const [slides, setSlides] = (0, import_react.useState)(initialSlides);
	const [selected, setSelected] = (0, import_react.useState)("s1");
	const [previewDevice, setPreviewDevice] = (0, import_react.useState)("desktop");
	const [carousel, setCarousel] = (0, import_react.useState)(carouselSettings);
	const selectedSlide = slides.find((s) => s.id === selected);
	const updateSlide = (id, updates) => {
		setSlides((prev) => prev.map((s) => s.id === id ? {
			...s,
			...updates
		} : s));
	};
	const toggleSlide = (id) => {
		setSlides((prev) => prev.map((s) => s.id === id ? {
			...s,
			enabled: !s.enabled
		} : s));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full",
		style: { minHeight: "100vh" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-72 flex-shrink-0 bg-white border-r border-[#E2E2EC] flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-4 border-b border-[#E2E2EC] flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold text-[#111118]",
						children: "Hero Banners"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#9B9BB8] mt-0.5",
						children: "Manage homepage carousel slides"
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-2",
					children: [slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setSelected(slide.id),
						className: `rounded-xl border-2 overflow-hidden cursor-pointer transition-all ${selected === slide.id ? "border-[#E8450A]" : "border-[#E2E2EC] hover:border-[#C8C8E0]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-24 overflow-hidden",
							style: { background: slide.bgColor },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `https://images.unsplash.com/photo-${slide.img}?w=400&h=200&fit=crop&auto=format`,
									alt: "",
									className: "absolute inset-0 w-full h-full object-cover opacity-50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `absolute inset-0 flex flex-col justify-center px-4 ${slide.textAlign === "center" ? "items-center text-center" : "items-start"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white font-bold text-xs leading-tight line-clamp-1",
										children: slide.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/70 text-[10px] mt-0.5 line-clamp-1",
										children: slide.subtitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-2 right-2 flex gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded font-semibold",
											children: ["#", i + 1]
										}),
										!slide.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] bg-[#D97706] text-white px-1.5 py-0.5 rounded font-semibold",
											children: "Hidden"
										}),
										slide.scheduled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] bg-[#6366F1] text-white px-1.5 py-0.5 rounded font-semibold",
											children: "Scheduled"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 py-2 flex items-center justify-between bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-[#111118] truncate flex-1",
								children: slide.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: (e) => {
									e.stopPropagation();
									toggleSlide(slide.id);
								},
								className: `ml-2 w-8 h-4 rounded-full flex-shrink-0 transition-all relative ${slide.enabled ? "bg-[#E8450A]" : "bg-[#D1D5DB]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-all ${slide.enabled ? "left-4" : "left-0.5"}` })
							})]
						})]
					}, slide.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "w-full py-3 border-2 border-dashed border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#9B9BB8] hover:border-[#E8450A] hover:text-[#E8450A] transition-all flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "w-4 h-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M12 4v16m8-8H4"
							})
						}), "Add Slide"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-[#E2E2EC] p-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold text-[#9B9BB8] uppercase tracking-wide",
						children: "Carousel Settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [
							[
								{
									label: "Auto Play",
									key: "autoplay",
									type: "toggle"
								},
								{
									label: "Show Dots",
									key: "showDots",
									type: "toggle"
								},
								{
									label: "Show Arrows",
									key: "showArrows",
									type: "toggle"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#6B6B82]",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setCarousel((prev) => ({
										...prev,
										[s.key]: !prev[s.key]
									})),
									className: `relative w-8 h-5 rounded-full transition-all ${carousel[s.key] ? "bg-[#E8450A]" : "bg-[#D1D5DB]"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${carousel[s.key] ? "left-3.5" : "left-0.5"}` })
								})]
							}, s.label)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#6B6B82]",
									children: "Duration (sec)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: carousel.duration,
									onChange: (e) => setCarousel((prev) => ({
										...prev,
										duration: parseInt(e.target.value)
									})),
									className: "h-7 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none",
									children: [
										3,
										4,
										5,
										6,
										8,
										10
									].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: d,
										children: [d, "s"]
									}, d))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#6B6B82]",
									children: "Transition"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: carousel.transition,
									onChange: (e) => setCarousel((prev) => ({
										...prev,
										transition: e.target.value
									})),
									className: "h-7 px-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-xs outline-none",
									children: [
										"Slide",
										"Fade",
										"Zoom"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
								})]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border-b border-[#E2E2EC] px-5 py-3 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 bg-[#F4F4F8] rounded-lg p-1",
					children: ["desktop", "mobile"].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setPreviewDevice(d),
						className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${previewDevice === d ? "bg-white shadow-sm text-[#111118]" : "text-[#9B9BB8]"}`,
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
						children: "Save Draft"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07]",
						children: "Publish Changes"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 bg-[#F4F4F8] p-6 flex items-start justify-center overflow-auto",
					children: selectedSlide && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `shadow-2xl overflow-hidden rounded-2xl transition-all duration-500 ${previewDevice === "desktop" ? "w-full max-w-3xl" : "w-[390px]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden",
							style: {
								paddingBottom: previewDevice === "desktop" ? "40%" : "60%",
								background: selectedSlide.bgColor
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `https://images.unsplash.com/photo-${selectedSlide.img}?w=1200&h=600&fit=crop&auto=format`,
									alt: "",
									className: "absolute inset-0 w-full h-full object-cover opacity-50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `absolute inset-0 flex flex-col justify-center px-8 md:px-12 ${selectedSlide.textAlign === "center" ? "items-center text-center" : selectedSlide.textAlign === "right" ? "items-end text-right" : "items-start"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-white font-black text-2xl md:text-4xl leading-tight",
											children: selectedSlide.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 text-sm md:text-base mt-2 max-w-xs",
											children: selectedSlide.subtitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "mt-5 px-6 py-2.5 bg-[#E8450A] text-white font-bold text-sm rounded-xl hover:bg-[#C93A07] transition-colors",
											children: selectedSlide.cta
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-0 right-0 flex justify-center gap-2",
									children: slides.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full transition-all ${s.id === selected ? "w-6 bg-white" : "w-1.5 bg-white/40"}` }, s.id))
								})
							]
						})
					})
				}), selectedSlide && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-72 bg-white border-l border-[#E2E2EC] flex-shrink-0 overflow-y-auto p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-[#111118] text-sm",
							children: "Edit Slide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Title"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: selectedSlide.title,
										onChange: (e) => updateSlide(selectedSlide.id, { title: e.target.value }),
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Subtitle"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: selectedSlide.subtitle,
										onChange: (e) => updateSlide(selectedSlide.id, { subtitle: e.target.value }),
										rows: 2,
										className: "w-full px-3 py-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] resize-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "CTA Button Text"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: selectedSlide.cta,
										onChange: (e) => updateSlide(selectedSlide.id, { cta: e.target.value }),
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "CTA Link"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: selectedSlide.ctaLink,
										onChange: (e) => updateSlide(selectedSlide.id, { ctaLink: e.target.value }),
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Text Alignment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-1",
										children: [
											"left",
											"center",
											"right"
										].map((align) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => updateSlide(selectedSlide.id, { textAlign: align }),
											className: `flex-1 h-9 rounded-lg border text-xs font-semibold capitalize transition-all ${selectedSlide.textAlign === align ? "border-[#E8450A] bg-[#FFF7F5] text-[#E8450A]" : "border-[#E2E2EC] text-[#9B9BB8] hover:border-[#C8C8E0]"}`,
											children: align
										}, align))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Background Color"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "color",
											value: selectedSlide.bgColor,
											onChange: (e) => updateSlide(selectedSlide.id, { bgColor: e.target.value }),
											className: "w-10 h-10 rounded-lg border border-[#E2E2EC] cursor-pointer"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-[#6B6B82]",
											children: selectedSlide.bgColor.toUpperCase()
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Schedule (optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										className: "w-full h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 pt-2 border-t border-[#E2E2EC]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex-1 py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
								children: "Duplicate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex-1 py-2 border border-[#FEE2E2] text-[#E11D48] rounded-lg text-xs font-semibold hover:bg-[#FEE2E2]",
								children: "Delete"
							})]
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { HomepageCMS as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZXBhZ2VDTVMtQ2dKQ19kaXIuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL0hvbWVwYWdlQ01TLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG50eXBlIFNsaWRlID0ge1xuICBpZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgc3VidGl0bGU6IHN0cmluZ1xuICBjdGE6IHN0cmluZ1xuICBjdGFMaW5rOiBzdHJpbmdcbiAgYmdDb2xvcjogc3RyaW5nXG4gIHRleHRBbGlnbjogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnXG4gIGVuYWJsZWQ6IGJvb2xlYW5cbiAgc2NoZWR1bGVkPzogc3RyaW5nXG4gIGltZzogc3RyaW5nXG59XG5cbmNvbnN0IGluaXRpYWxTbGlkZXM6IFNsaWRlW10gPSBbXG4gIHsgaWQ6ICdzMScsIHRpdGxlOiAnU3VtbWVyIENvbGxlY3Rpb24gMjAyNScsIHN1YnRpdGxlOiAnVXAgdG8gNTAlIG9mZiBvbiBwcmVtaXVtIGZhc2hpb24gYnJhbmRzJywgY3RhOiAnU2hvcCBOb3cnLCBjdGFMaW5rOiAnL2NhdGVnb3J5L2Zhc2hpb24nLCBiZ0NvbG9yOiAnIzBGMEYxOCcsIHRleHRBbGlnbjogJ2xlZnQnLCBlbmFibGVkOiB0cnVlLCBpbWc6ICcxNjA3MDgyMzQ4ODI0LTBhOTZmMmE0YjlkYScgfSxcbiAgeyBpZDogJ3MyJywgdGl0bGU6ICdUZWNoIFdlZWsgRGVhbHMnLCBzdWJ0aXRsZTogJ1RoZSBsYXRlc3QgZWxlY3Ryb25pY3MgYXQgdW5iZWF0YWJsZSBwcmljZXMnLCBjdGE6ICdFeHBsb3JlIERlYWxzJywgY3RhTGluazogJy9jYXRlZ29yeS9lbGVjdHJvbmljcycsIGJnQ29sb3I6ICcjMUUzQTVGJywgdGV4dEFsaWduOiAnY2VudGVyJywgZW5hYmxlZDogdHJ1ZSwgaW1nOiAnMTQ5NjE4MTEzMzIwNi04MGNlOWI4OGE4NTMnIH0sXG4gIHsgaWQ6ICdzMycsIHRpdGxlOiAnQmVhdXR5IEVzc2VudGlhbHMnLCBzdWJ0aXRsZTogJ0Rpc2NvdmVyIHlvdXIgcGVyZmVjdCBza2luY2FyZSByb3V0aW5lJywgY3RhOiAnRGlzY292ZXIgTW9yZScsIGN0YUxpbms6ICcvY2F0ZWdvcnkvYmVhdXR5JywgYmdDb2xvcjogJyMyRDFCM0QnLCB0ZXh0QWxpZ246ICdsZWZ0JywgZW5hYmxlZDogZmFsc2UsIHNjaGVkdWxlZDogJ0F1ZyAxLCAyMDI1JywgaW1nOiAnMTUyMjMzNTc4OTIwMy1hYWJkMWZjNTRiYzknIH0sXG5dXG5cbmNvbnN0IGNhcm91c2VsU2V0dGluZ3MgPSB7XG4gIGF1dG9wbGF5OiB0cnVlLFxuICBkdXJhdGlvbjogNSxcbiAgdHJhbnNpdGlvbjogJ1NsaWRlJyxcbiAgc2hvd0RvdHM6IHRydWUsXG4gIHNob3dBcnJvd3M6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlQ01TKHsgb25OYXZpZ2F0ZTogXyB9OiBQcm9wcykge1xuICBjb25zdCBbc2xpZGVzLCBzZXRTbGlkZXNdID0gdXNlU3RhdGU8U2xpZGVbXT4oaW5pdGlhbFNsaWRlcylcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPignczEnKVxuICBjb25zdCBbcHJldmlld0RldmljZSwgc2V0UHJldmlld0RldmljZV0gPSB1c2VTdGF0ZTwnZGVza3RvcCcgfCAnbW9iaWxlJz4oJ2Rlc2t0b3AnKVxuICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IHVzZVN0YXRlKGNhcm91c2VsU2V0dGluZ3MpXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gc2VsZWN0ZWQpXG5cbiAgY29uc3QgdXBkYXRlU2xpZGUgPSAoaWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxTbGlkZT4pID0+IHtcbiAgICBzZXRTbGlkZXMocHJldiA9PiBwcmV2Lm1hcChzID0+IHMuaWQgPT09IGlkID8geyAuLi5zLCAuLi51cGRhdGVzIH0gOiBzKSlcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVNsaWRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTbGlkZXMocHJldiA9PiBwcmV2Lm1hcChzID0+IHMuaWQgPT09IGlkID8geyAuLi5zLCBlbmFibGVkOiAhcy5lbmFibGVkIH0gOiBzKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbFwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIHsvKiBTbGlkZSBsaXN0IHBhbmVsICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIGZsZXgtc2hyaW5rLTAgYmctd2hpdGUgYm9yZGVyLXIgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS00IGJvcmRlci1iIGJvcmRlci1bI0UyRTJFQ10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5IZXJvIEJhbm5lcnM8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBtdC0wLjVcIj5NYW5hZ2UgaG9tZXBhZ2UgY2Fyb3VzZWwgc2xpZGVzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC00IHNwYWNlLXktMlwiPlxuICAgICAgICAgIHtzbGlkZXMubWFwKChzbGlkZSwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3NsaWRlLmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChzbGlkZS5pZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQteGwgYm9yZGVyLTIgb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsICR7c2VsZWN0ZWQgPT09IHNsaWRlLmlkID8gJ2JvcmRlci1bI0U4NDUwQV0nIDogJ2JvcmRlci1bI0UyRTJFQ10gaG92ZXI6Ym9yZGVyLVsjQzhDOEUwXSd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIE1pbmkgcHJldmlldyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTI0IG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IHNsaWRlLmJnQ29sb3IgfX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tJHtzbGlkZS5pbWd9P3c9NDAwJmg9MjAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0YH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvcGFjaXR5LTUwXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC00ICR7c2xpZGUudGV4dEFsaWduID09PSAnY2VudGVyJyA/ICdpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXInIDogJ2l0ZW1zLXN0YXJ0J31gfT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteHMgbGVhZGluZy10aWdodCBsaW5lLWNsYW1wLTFcIj57c2xpZGUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83MCB0ZXh0LVsxMHB4XSBtdC0wLjUgbGluZS1jbGFtcC0xXCI+e3NsaWRlLnN1YnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgZmxleCBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gYmctYmxhY2svNTAgdGV4dC13aGl0ZSBweC0xLjUgcHktMC41IHJvdW5kZWQgZm9udC1zZW1pYm9sZFwiPiN7aSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFzbGlkZS5lbmFibGVkICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJnLVsjRDk3NzA2XSB0ZXh0LXdoaXRlIHB4LTEuNSBweS0wLjUgcm91bmRlZCBmb250LXNlbWlib2xkXCI+SGlkZGVuPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgIHtzbGlkZS5zY2hlZHVsZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gYmctWyM2MzY2RjFdIHRleHQtd2hpdGUgcHgtMS41IHB5LTAuNSByb3VuZGVkIGZvbnQtc2VtaWJvbGRcIj5TY2hlZHVsZWQ8L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIFNsaWRlIGluZm8gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB0cnVuY2F0ZSBmbGV4LTFcIj57c2xpZGUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHRvZ2dsZVNsaWRlKHNsaWRlLmlkKSB9fSBjbGFzc05hbWU9e2BtbC0yIHctOCBoLTQgcm91bmRlZC1mdWxsIGZsZXgtc2hyaW5rLTAgdHJhbnNpdGlvbi1hbGwgcmVsYXRpdmUgJHtzbGlkZS5lbmFibGVkID8gJ2JnLVsjRTg0NTBBXScgOiAnYmctWyNEMUQ1REJdJ31gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAuNSB3LTMgaC0zIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3cgdHJhbnNpdGlvbi1hbGwgJHtzbGlkZS5lbmFibGVkID8gJ2xlZnQtNCcgOiAnbGVmdC0wLjUnfWB9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSBob3Zlcjpib3JkZXItWyNFODQ1MEFdIGhvdmVyOnRleHQtWyNFODQ1MEFdIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgNHYxNm04LThINFwiIC8+PC9zdmc+XG4gICAgICAgICAgICBBZGQgU2xpZGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENhcm91c2VsIHNldHRpbmdzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1bI0UyRTJFQ10gcC00IHNwYWNlLXktM1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+Q2Fyb3VzZWwgU2V0dGluZ3M8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIuNVwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0F1dG8gUGxheScsIGtleTogJ2F1dG9wbGF5JyBhcyBjb25zdCwgdHlwZTogJ3RvZ2dsZScgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1Nob3cgRG90cycsIGtleTogJ3Nob3dEb3RzJyBhcyBjb25zdCwgdHlwZTogJ3RvZ2dsZScgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1Nob3cgQXJyb3dzJywga2V5OiAnc2hvd0Fycm93cycgYXMgY29uc3QsIHR5cGU6ICd0b2dnbGUnIH0sXG4gICAgICAgICAgICBdLm1hcChzID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3MubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj57cy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDYXJvdXNlbChwcmV2ID0+ICh7IC4uLnByZXYsIFtzLmtleV06ICFwcmV2W3Mua2V5XSB9KSl9IGNsYXNzTmFtZT17YHJlbGF0aXZlIHctOCBoLTUgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsICR7Y2Fyb3VzZWxbcy5rZXldID8gJ2JnLVsjRTg0NTBBXScgOiAnYmctWyNEMUQ1REJdJ31gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAuNSB3LTQgaC00IGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3cgdHJhbnNpdGlvbi1hbGwgJHtjYXJvdXNlbFtzLmtleV0gPyAnbGVmdC0zLjUnIDogJ2xlZnQtMC41J31gfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPkR1cmF0aW9uIChzZWMpPC9zcGFuPlxuICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtjYXJvdXNlbC5kdXJhdGlvbn0gb25DaGFuZ2U9e2UgPT4gc2V0Q2Fyb3VzZWwocHJldiA9PiAoeyAuLi5wcmV2LCBkdXJhdGlvbjogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIH0pKX0gY2xhc3NOYW1lPVwiaC03IHB4LTIgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC14cyBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICB7WzMsIDQsIDUsIDYsIDgsIDEwXS5tYXAoZCA9PiA8b3B0aW9uIGtleT17ZH0gdmFsdWU9e2R9PntkfXM8L29wdGlvbj4pfVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXVwiPlRyYW5zaXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Nhcm91c2VsLnRyYW5zaXRpb259IG9uQ2hhbmdlPXtlID0+IHNldENhcm91c2VsKHByZXYgPT4gKHsgLi4ucHJldiwgdHJhbnNpdGlvbjogZS50YXJnZXQudmFsdWUgfSkpfSBjbGFzc05hbWU9XCJoLTcgcHgtMiBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgIHtbJ1NsaWRlJywgJ0ZhZGUnLCAnWm9vbSddLm1hcCh0ID0+IDxvcHRpb24ga2V5PXt0fT57dH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUHJldmlldyArIGVkaXRvciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgbWluLXctMFwiPlxuICAgICAgICB7LyogVG9vbGJhciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBib3JkZXItWyNFMkUyRUNdIHB4LTUgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctWyNGNEY0RjhdIHJvdW5kZWQtbGcgcC0xXCI+XG4gICAgICAgICAgICB7KFsnZGVza3RvcCcsICdtb2JpbGUnXSBhcyBjb25zdCkubWFwKGQgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uIGtleT17ZH0gb25DbGljaz17KCkgPT4gc2V0UHJldmlld0RldmljZShkKX0gY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSByb3VuZGVkLW1kIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCAke3ByZXZpZXdEZXZpY2UgPT09IGQgPyAnYmctd2hpdGUgc2hhZG93LXNtIHRleHQtWyMxMTExMThdJyA6ICd0ZXh0LVsjOUI5QkI4XSd9YH0+XG4gICAgICAgICAgICAgICAge2QgPT09ICdkZXNrdG9wJyA/IChcbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHJlY3QgeD1cIjJcIiB5PVwiM1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxNFwiIHJ4PVwiMlwiIC8+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgZD1cIk04IDIxaDhNMTIgMTd2NFwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHJlY3QgeD1cIjVcIiB5PVwiMlwiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiMlwiIC8+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxN1wiIHI9XCIxXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXBpdGFsaXplXCI+e2R9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0Y0RjRGOF1cIj5TYXZlIERyYWZ0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTMgcHktMS41IGJnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjQzkzQTA3XVwiPlB1Ymxpc2ggQ2hhbmdlczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XG4gICAgICAgICAgey8qIFByZXZpZXcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctWyNGNEY0RjhdIHAtNiBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZFNsaWRlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgJHtwcmV2aWV3RGV2aWNlID09PSAnZGVza3RvcCcgPyAndy1mdWxsIG1heC13LTN4bCcgOiAndy1bMzkwcHhdJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IHByZXZpZXdEZXZpY2UgPT09ICdkZXNrdG9wJyA/ICc0MCUnIDogJzYwJScsIGJhY2tncm91bmQ6IHNlbGVjdGVkU2xpZGUuYmdDb2xvciB9fT5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLSR7c2VsZWN0ZWRTbGlkZS5pbWd9P3c9MTIwMCZoPTYwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdGB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtOCBtZDpweC0xMiAke3NlbGVjdGVkU2xpZGUudGV4dEFsaWduID09PSAnY2VudGVyJyA/ICdpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXInIDogc2VsZWN0ZWRTbGlkZS50ZXh0QWxpZ24gPT09ICdyaWdodCcgPyAnaXRlbXMtZW5kIHRleHQtcmlnaHQnIDogJ2l0ZW1zLXN0YXJ0J31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ibGFjayB0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBsZWFkaW5nLXRpZ2h0XCI+e3NlbGVjdGVkU2xpZGUudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS84MCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBtdC0yIG1heC13LXhzXCI+e3NlbGVjdGVkU2xpZGUuc3VidGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTUgcHgtNiBweS0yLjUgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc20gcm91bmRlZC14bCBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnNcIj57c2VsZWN0ZWRTbGlkZS5jdGF9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBEb3RzIGluZGljYXRvciAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC0wIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c2xpZGVzLm1hcChzID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cy5pZH0gY2xhc3NOYW1lPXtgaC0xLjUgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsICR7cy5pZCA9PT0gc2VsZWN0ZWQgPyAndy02IGJnLXdoaXRlJyA6ICd3LTEuNSBiZy13aGl0ZS80MCd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEVkaXRvciBwYW5lbCAqL31cbiAgICAgICAgICB7c2VsZWN0ZWRTbGlkZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNzIgYmctd2hpdGUgYm9yZGVyLWwgYm9yZGVyLVsjRTJFMkVDXSBmbGV4LXNocmluay0wIG92ZXJmbG93LXktYXV0byBwLTUgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gdGV4dC1zbVwiPkVkaXQgU2xpZGU8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtzZWxlY3RlZFNsaWRlLnRpdGxlfSBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTbGlkZShzZWxlY3RlZFNsaWRlLmlkLCB7IHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5TdWJ0aXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3NlbGVjdGVkU2xpZGUuc3VidGl0bGV9IG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVNsaWRlKHNlbGVjdGVkU2xpZGUuaWQsIHsgc3VidGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pfSByb3dzPXsyfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV0gcmVzaXplLW5vbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5DVEEgQnV0dG9uIFRleHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtzZWxlY3RlZFNsaWRlLmN0YX0gb25DaGFuZ2U9e2UgPT4gdXBkYXRlU2xpZGUoc2VsZWN0ZWRTbGlkZS5pZCwgeyBjdGE6IGUudGFyZ2V0LnZhbHVlIH0pfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPkNUQSBMaW5rPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2VsZWN0ZWRTbGlkZS5jdGFMaW5rfSBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTbGlkZShzZWxlY3RlZFNsaWRlLmlkLCB7IGN0YUxpbms6IGUudGFyZ2V0LnZhbHVlIH0pfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBmb250LW1vbm8gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5UZXh0IEFsaWdubWVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgeyhbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10gYXMgY29uc3QpLm1hcChhbGlnbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2FsaWdufSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTbGlkZShzZWxlY3RlZFNsaWRlLmlkLCB7IHRleHRBbGlnbjogYWxpZ24gfSl9IGNsYXNzTmFtZT17YGZsZXgtMSBoLTkgcm91bmRlZC1sZyBib3JkZXIgdGV4dC14cyBmb250LXNlbWlib2xkIGNhcGl0YWxpemUgdHJhbnNpdGlvbi1hbGwgJHtzZWxlY3RlZFNsaWRlLnRleHRBbGlnbiA9PT0gYWxpZ24gPyAnYm9yZGVyLVsjRTg0NTBBXSBiZy1bI0ZGRjdGNV0gdGV4dC1bI0U4NDUwQV0nIDogJ2JvcmRlci1bI0UyRTJFQ10gdGV4dC1bIzlCOUJCOF0gaG92ZXI6Ym9yZGVyLVsjQzhDOEUwXSd9YH0+e2FsaWdufTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5CYWNrZ3JvdW5kIENvbG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXtzZWxlY3RlZFNsaWRlLmJnQ29sb3J9IG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVNsaWRlKHNlbGVjdGVkU2xpZGUuaWQsIHsgYmdDb2xvcjogZS50YXJnZXQudmFsdWUgfSl9IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGN1cnNvci1wb2ludGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj57c2VsZWN0ZWRTbGlkZS5iZ0NvbG9yLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXVwiPlNjaGVkdWxlIChvcHRpb25hbCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgcHQtMiBib3JkZXItdCBib3JkZXItWyNFMkUyRUNdXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjNkI2QjgyXSBob3ZlcjpiZy1bI0Y0RjRGOF1cIj5EdXBsaWNhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIGJvcmRlciBib3JkZXItWyNGRUUyRTJdIHRleHQtWyNFMTFENDhdIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIGhvdmVyOmJnLVsjRkVFMkUyXVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQWtCQSxJQUFNLGdCQUF5QjtDQUM3QjtFQUFFLElBQUk7RUFBTSxPQUFPO0VBQTBCLFVBQVU7RUFBMkMsS0FBSztFQUFZLFNBQVM7RUFBcUIsU0FBUztFQUFXLFdBQVc7RUFBUSxTQUFTO0VBQU0sS0FBSztDQUE2QjtDQUN6TztFQUFFLElBQUk7RUFBTSxPQUFPO0VBQW1CLFVBQVU7RUFBK0MsS0FBSztFQUFpQixTQUFTO0VBQXlCLFNBQVM7RUFBVyxXQUFXO0VBQVUsU0FBUztFQUFNLEtBQUs7Q0FBNkI7Q0FDalA7RUFBRSxJQUFJO0VBQU0sT0FBTztFQUFxQixVQUFVO0VBQTBDLEtBQUs7RUFBaUIsU0FBUztFQUFvQixTQUFTO0VBQVcsV0FBVztFQUFRLFNBQVM7RUFBTyxXQUFXO0VBQWUsS0FBSztDQUE2QjtBQUNwUTtBQUVBLElBQU0sbUJBQW1CO0NBQ3ZCLFVBQVU7Q0FDVixVQUFVO0NBQ1YsWUFBWTtDQUNaLFVBQVU7Q0FDVixZQUFZO0FBQ2Q7QUFFQSxTQUF3QixZQUFZLEVBQUUsWUFBWSxLQUFZO0NBQzVELE1BQU0sQ0FBQyxRQUFRLGNBQUEsR0FBYSxhQUFBLFNBQUEsQ0FBa0IsYUFBYTtDQUMzRCxNQUFNLENBQUMsVUFBVSxnQkFBQSxHQUFlLGFBQUEsU0FBQSxDQUF3QixJQUFJO0NBQzVELE1BQU0sQ0FBQyxlQUFlLHFCQUFBLEdBQW9CLGFB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