import { g as __toESM, i as require_jsx_runtime, p as require_react } from "./index-BM41bWnP.js";
//#region src/admin/pages/SEOAdmin.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"Global SEO",
	"Product SEO",
	"Category SEO",
	"Sitemap",
	"Redirects"
];
var globalFields = {
	siteTitle: "Nexus Marketplace — Shop Premium Products Online",
	metaDescription: "Discover thousands of premium products from top vendors. Electronics, fashion, beauty, home & more. Fast shipping, easy returns.",
	ogImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=630&fit=crop&auto=format",
	robots: "index, follow",
	canonicalDomain: "https://nexusmarket.com"
};
var productSEO = [
	{
		name: "The Ordinary HA 2%+B5",
		score: 92,
		title: "OK",
		description: "OK",
		keywords: "Good",
		url: "/products/ordinary-ha-2"
	},
	{
		name: "Nike Air Max 270",
		score: 78,
		title: "OK",
		description: "Short",
		keywords: "OK",
		url: "/products/nike-air-max-270"
	},
	{
		name: "Sony WH-1000XM5",
		score: 84,
		title: "OK",
		description: "OK",
		keywords: "OK",
		url: "/products/sony-wh-1000xm5"
	},
	{
		name: "MacBook Air M3",
		score: 61,
		title: "Long",
		description: "Missing",
		keywords: "Weak",
		url: "/products/macbook-air-m3"
	}
];
var ScoreBadge = ({ score }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: `flex items-center justify-center w-10 h-10 rounded-xl font-mono font-black text-sm ${score >= 80 ? "bg-[#D1FAE5] text-[#065F46]" : score >= 60 ? "bg-[#FEF3C7] text-[#92400E]" : "bg-[#FEE2E2] text-[#991B1B]"}`,
	children: score
});
function SEOAdmin({ onNavigate: _ }) {
	const [tab, setTab] = (0, import_react.useState)("Global SEO");
	const [siteTitle, setSiteTitle] = (0, import_react.useState)(globalFields.siteTitle);
	const [metaDesc, setMetaDesc] = (0, import_react.useState)(globalFields.metaDescription);
	const [previewType, setPreviewType] = (0, import_react.useState)("google");
	const titleLen = siteTitle.length;
	const descLen = metaDesc.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "SEO Management"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: "Control how your marketplace appears in search engines"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]",
					children: "Save Changes"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 border-b border-[#E2E2EC]",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `px-4 py-3 text-sm font-semibold border-b-2 transition-all -mb-px ${tab === t ? "border-[#E8450A] text-[#E8450A]" : "border-transparent text-[#9B9BB8] hover:text-[#6B6B82]"}`,
					children: t
				}, t))
			}),
			tab === "Global SEO" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-[#111118]",
								children: "Default Meta Tags"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-[#6B6B82]",
											children: "Site Title"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `text-[11px] font-mono ${titleLen > 60 ? "text-[#E11D48]" : titleLen > 50 ? "text-[#D97706]" : "text-[#059669]"}`,
											children: [titleLen, "/60"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: siteTitle,
										onChange: (e) => setSiteTitle(e.target.value),
										className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-[#9B9BB8]",
										children: "Shown in browser tabs and search results"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "Meta Description"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `text-[11px] font-mono ${descLen > 160 ? "text-[#E11D48]" : descLen < 120 ? "text-[#D97706]" : "text-[#059669]"}`,
										children: [descLen, "/160"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: metaDesc,
									onChange: (e) => setMetaDesc(e.target.value),
									rows: 3,
									className: "w-full px-3 py-2 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A] resize-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-[#6B6B82]",
									children: "Canonical Domain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									defaultValue: globalFields.canonicalDomain,
									className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-[#6B6B82]",
									children: "Robots Directive"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "index, follow" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "noindex, follow" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "index, nofollow" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "noindex, nofollow" })
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-[#111118]",
								children: "Open Graph / Social"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-[#6B6B82]",
										children: "OG Image URL"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										defaultValue: globalFields.ogImage,
										className: "w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-[#9B9BB8]",
										children: "Recommended: 1200×630px"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg overflow-hidden border border-[#E2E2EC] h-32",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `${globalFields.ogImage}`,
									alt: "OG preview",
									className: "w-full h-full object-cover"
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111118]",
								children: "Preview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 ml-auto bg-[#F4F4F8] rounded-lg p-1",
								children: ["google", "social"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setPreviewType(p),
									className: `px-3 py-1 rounded-md text-xs font-semibold capitalize transition-all ${previewType === p ? "bg-white shadow-sm text-[#111118]" : "text-[#9B9BB8]"}`,
									children: p === "google" ? "Google" : "Social"
								}, p))
							})]
						}), previewType === "google" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border border-[#E2E2EC] rounded-xl space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#059669] font-mono",
									children: "nexusmarket.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#1A0DAB] font-semibold text-base leading-tight hover:underline cursor-pointer line-clamp-1",
									children: siteTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#4D5156] text-sm leading-relaxed line-clamp-2",
									children: metaDesc
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-[#E2E2EC] rounded-xl overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-40 bg-[#F4F4F8]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: globalFields.ogImage,
									alt: "OG",
									className: "w-full h-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-3 py-2.5 bg-[#F2F3F5]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase text-[#90949C] font-semibold tracking-wide",
										children: "NEXUSMARKET.COM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-[#1D2129] line-clamp-1 mt-0.5",
										children: siteTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#606770] line-clamp-1",
										children: metaDesc
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118] mb-3",
							children: "SEO Health Checklist"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: [
								{
									label: "Site title length",
									ok: titleLen > 0 && titleLen <= 60
								},
								{
									label: "Meta description length",
									ok: descLen >= 120 && descLen <= 160
								},
								{
									label: "Canonical URL set",
									ok: true
								},
								{
									label: "OG image configured",
									ok: true
								},
								{
									label: "Sitemap submitted",
									ok: true
								},
								{
									label: "Robots.txt valid",
									ok: true
								},
								{
									label: "HTTPS enabled",
									ok: true
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${c.ok ? "bg-[#D1FAE5]" : "bg-[#FEE2E2]"}`,
									children: c.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-3 h-3 text-[#E11D48]",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 3,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M6 18L18 6M6 6l12 12"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-sm ${c.ok ? "text-[#111118]" : "text-[#E11D48] font-semibold"}`,
									children: c.label
								})]
							}, c.label))
						})]
					})]
				})]
			}),
			tab === "Product SEO" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
						children: [
							"Product",
							"SEO Score",
							"Title",
							"Description",
							"Keywords",
							"URL Slug",
							"Actions"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: h
						}, h))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-[#F4F4F8]",
						children: productSEO.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-[#F9F9FC] transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-semibold text-[#111118]",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { score: p.score })
								}),
								[
									p.title,
									p.description,
									p.keywords
								].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-xs font-semibold px-2 py-0.5 rounded-full ${v === "OK" || v === "Good" ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#FEF3C7] text-[#92400E]"}`,
										children: v
									})
								}, i)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-mono text-xs text-[#9B9BB8]",
									children: p.url
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs font-semibold text-[#E8450A] hover:underline",
										children: "Edit SEO"
									})
								})
							]
						}, p.name))
					})]
				})
			}),
			tab === "Category SEO" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-[#111118]",
						children: "Category SEO Settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]",
						children: "Save All"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
						children: [
							"Category",
							"Score",
							"Meta Title",
							"Meta Desc",
							"URL Slug",
							"Products",
							"Actions"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: h
						}, h))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-[#F4F4F8]",
						children: [
							{
								cat: "Electronics",
								score: 88,
								title: "OK",
								desc: "OK",
								slug: "/electronics",
								products: 1284
							},
							{
								cat: "Fashion & Apparel",
								score: 72,
								title: "OK",
								desc: "Short",
								slug: "/fashion",
								products: 4820
							},
							{
								cat: "Beauty & Skincare",
								score: 94,
								title: "OK",
								desc: "OK",
								slug: "/beauty",
								products: 892
							},
							{
								cat: "Home & Living",
								score: 65,
								title: "Long",
								desc: "Missing",
								slug: "/home-living",
								products: 2140
							},
							{
								cat: "Sports & Outdoors",
								score: 81,
								title: "OK",
								desc: "OK",
								slug: "/sports",
								products: 640
							},
							{
								cat: "Books & Stationery",
								score: 58,
								title: "Missing",
								desc: "Missing",
								slug: "/books",
								products: 380
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-[#F9F9FC] transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-semibold text-[#111118]",
									children: c.cat
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-sm ${c.score >= 80 ? "bg-[#D1FAE5] text-[#065F46]" : c.score >= 60 ? "bg-[#FEF3C7] text-[#92400E]" : "bg-[#FEE2E2] text-[#991B1B]"}`,
										children: c.score
									})
								}),
								[c.title, c.desc].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-xs font-semibold px-2 py-0.5 rounded-full ${v === "OK" ? "bg-[#D1FAE5] text-[#065F46]" : v === "Missing" ? "bg-[#FEE2E2] text-[#991B1B]" : "bg-[#FEF3C7] text-[#92400E]"}`,
										children: v
									})
								}, i)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-mono text-xs text-[#9B9BB8]",
									children: c.slug
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5 font-mono text-sm text-[#6B6B82]",
									children: c.products.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs font-semibold text-[#E8450A] hover:underline",
										children: "Edit SEO"
									})
								})
							]
						}, c.cat))
					})]
				})]
			}),
			tab === "Sitemap" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-4",
					children: [
						{
							label: "Total URLs",
							value: "12,481",
							icon: "🗺️"
						},
						{
							label: "Last Generated",
							value: "Jul 25, 2025",
							icon: "🕒"
						},
						{
							label: "Submitted to Google",
							value: "Verified ✓",
							icon: "🔍"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-[#E2E2EC] px-5 py-4 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl",
							children: s.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono font-bold text-lg text-[#111118] mt-0.5",
							children: s.value
						})] })]
					}, s.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Sitemap Index"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-3 py-1.5 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]",
								children: "Regenerate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]",
								children: "Submit to Google"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: [
							{
								file: "sitemap-products.xml",
								urls: 4284,
								lastmod: "Jul 25, 2025"
							},
							{
								file: "sitemap-categories.xml",
								urls: 48,
								lastmod: "Jul 20, 2025"
							},
							{
								file: "sitemap-vendors.xml",
								urls: 312,
								lastmod: "Jul 24, 2025"
							},
							{
								file: "sitemap-pages.xml",
								urls: 18,
								lastmod: "Jul 10, 2025"
							},
							{
								file: "sitemap-blog.xml",
								urls: 84,
								lastmod: "Jul 22, 2025"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-3 border-b border-[#F4F4F8] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-8 h-8 rounded-lg bg-[#F4F4F8] flex items-center justify-center text-xs",
									children: "🗂️"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-mono font-semibold text-[#111118]",
									children: s.file
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#9B9BB8]",
									children: ["Last modified: ", s.lastmod]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-sm text-[#6B6B82]",
									children: [s.urls.toLocaleString(), " URLs"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-xs font-semibold text-[#E8450A] hover:underline",
									children: "View"
								})]
							})]
						}, s.file))
					})]
				})]
			}),
			tab === "Redirects" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "URL Redirects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]",
							children: "+ Add Redirect"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 bg-[#F9F9FC] rounded-xl p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide",
									children: "From (old URL)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "/old-product-slug",
									className: "w-full h-9 px-3 bg-white border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 text-[#9B9BB8]",
								children: "→"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide",
									children: "To (new URL)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "/new-product-slug",
									className: "w-full h-9 px-3 bg-white border border-[#E2E2EC] rounded-lg text-sm font-mono outline-none focus:border-[#E8450A] placeholder:text-[#C8C8E0]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[10px] font-bold text-[#9B9BB8] uppercase tracking-wide",
									children: "Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "h-9 px-3 bg-white border border-[#E2E2EC] rounded-lg text-sm outline-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "301 Permanent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "302 Temporary" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mt-5 px-4 py-2 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07] flex-shrink-0",
								children: "Add"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "bg-[#F9F9FC] border-b border-[#F4F4F8]",
							children: [
								"From URL",
								"To URL",
								"Type",
								"Hits",
								"Created",
								""
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: h
							}, h))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: [
								{
									from: "/products/iphone-14",
									to: "/products/iphone-15",
									type: "301",
									hits: 8421,
									date: "Jun 12, 2025"
								},
								{
									from: "/sale",
									to: "/category/flash-sale",
									type: "301",
									hits: 3284,
									date: "Jul 1, 2025"
								},
								{
									from: "/shop/beauty",
									to: "/category/beauty",
									type: "301",
									hits: 1842,
									date: "May 20, 2025"
								},
								{
									from: "/brand/apple",
									to: "/brands/apple",
									type: "301",
									hits: 924,
									date: "Apr 5, 2025"
								}
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-[#F9F9FC] transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono text-xs text-[#E11D48]",
										children: r.from
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono text-xs text-[#059669]",
										children: r.to
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold bg-[#EEF2FF] text-[#4338CA] px-2 py-0.5 rounded-full",
											children: r.type
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 font-mono text-sm text-[#111118]",
										children: r.hits.toLocaleString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-xs text-[#9B9BB8]",
										children: r.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-xs font-semibold text-[#E11D48] hover:underline",
											children: "Delete"
										})
									})
								]
							}, r.from))
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { SEOAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0VPQWRtaW4tQjIwejFhM0EuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL1NFT0FkbWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG5jb25zdCB0YWJzID0gWydHbG9iYWwgU0VPJywgJ1Byb2R1Y3QgU0VPJywgJ0NhdGVnb3J5IFNFTycsICdTaXRlbWFwJywgJ1JlZGlyZWN0cyddXG5cbmNvbnN0IGdsb2JhbEZpZWxkcyA9IHtcbiAgc2l0ZVRpdGxlOiAnTmV4dXMgTWFya2V0cGxhY2Ug4oCUIFNob3AgUHJlbWl1bSBQcm9kdWN0cyBPbmxpbmUnLFxuICBtZXRhRGVzY3JpcHRpb246ICdEaXNjb3ZlciB0aG91c2FuZHMgb2YgcHJlbWl1bSBwcm9kdWN0cyBmcm9tIHRvcCB2ZW5kb3JzLiBFbGVjdHJvbmljcywgZmFzaGlvbiwgYmVhdXR5LCBob21lICYgbW9yZS4gRmFzdCBzaGlwcGluZywgZWFzeSByZXR1cm5zLicsXG4gIG9nSW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwNzA4MjM0ODgyNC0wYTk2ZjJhNGI5ZGE/dz0xMjAwJmg9NjMwJmZpdD1jcm9wJmF1dG89Zm9ybWF0JyxcbiAgcm9ib3RzOiAnaW5kZXgsIGZvbGxvdycsXG4gIGNhbm9uaWNhbERvbWFpbjogJ2h0dHBzOi8vbmV4dXNtYXJrZXQuY29tJyxcbn1cblxuY29uc3QgcHJvZHVjdFNFTyA9IFtcbiAgeyBuYW1lOiAnVGhlIE9yZGluYXJ5IEhBIDIlK0I1Jywgc2NvcmU6IDkyLCB0aXRsZTogJ09LJywgZGVzY3JpcHRpb246ICdPSycsIGtleXdvcmRzOiAnR29vZCcsIHVybDogJy9wcm9kdWN0cy9vcmRpbmFyeS1oYS0yJyB9LFxuICB7IG5hbWU6ICdOaWtlIEFpciBNYXggMjcwJywgc2NvcmU6IDc4LCB0aXRsZTogJ09LJywgZGVzY3JpcHRpb246ICdTaG9ydCcsIGtleXdvcmRzOiAnT0snLCB1cmw6ICcvcHJvZHVjdHMvbmlrZS1haXItbWF4LTI3MCcgfSxcbiAgeyBuYW1lOiAnU29ueSBXSC0xMDAwWE01Jywgc2NvcmU6IDg0LCB0aXRsZTogJ09LJywgZGVzY3JpcHRpb246ICdPSycsIGtleXdvcmRzOiAnT0snLCB1cmw6ICcvcHJvZHVjdHMvc29ueS13aC0xMDAweG01JyB9LFxuICB7IG5hbWU6ICdNYWNCb29rIEFpciBNMycsIHNjb3JlOiA2MSwgdGl0bGU6ICdMb25nJywgZGVzY3JpcHRpb246ICdNaXNzaW5nJywga2V5d29yZHM6ICdXZWFrJywgdXJsOiAnL3Byb2R1Y3RzL21hY2Jvb2stYWlyLW0zJyB9LFxuXVxuXG5jb25zdCBTY29yZUJhZGdlID0gKHsgc2NvcmUgfTogeyBzY29yZTogbnVtYmVyIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwIGgtMTAgcm91bmRlZC14bCBmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LXNtICR7c2NvcmUgPj0gODAgPyAnYmctWyNEMUZBRTVdIHRleHQtWyMwNjVGNDZdJyA6IHNjb3JlID49IDYwID8gJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXScgOiAnYmctWyNGRUUyRTJdIHRleHQtWyM5OTFCMUJdJ31gfT57c2NvcmV9PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFT0FkbWluKHsgb25OYXZpZ2F0ZTogXyB9OiBQcm9wcykge1xuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoJ0dsb2JhbCBTRU8nKVxuICBjb25zdCBbc2l0ZVRpdGxlLCBzZXRTaXRlVGl0bGVdID0gdXNlU3RhdGUoZ2xvYmFsRmllbGRzLnNpdGVUaXRsZSlcbiAgY29uc3QgW21ldGFEZXNjLCBzZXRNZXRhRGVzY10gPSB1c2VTdGF0ZShnbG9iYWxGaWVsZHMubWV0YURlc2NyaXB0aW9uKVxuICBjb25zdCBbcHJldmlld1R5cGUsIHNldFByZXZpZXdUeXBlXSA9IHVzZVN0YXRlPCdnb29nbGUnIHwgJ3NvY2lhbCc+KCdnb29nbGUnKVxuXG4gIGNvbnN0IHRpdGxlTGVuID0gc2l0ZVRpdGxlLmxlbmd0aFxuICBjb25zdCBkZXNjTGVuID0gbWV0YURlc2MubGVuZ3RoXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTVcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5TRU8gTWFuYWdlbWVudDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QjgyXSBtdC0wLjVcIj5Db250cm9sIGhvdyB5b3VyIG1hcmtldHBsYWNlIGFwcGVhcnMgaW4gc2VhcmNoIGVuZ2luZXM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1bI0M5M0EwN11cIj5TYXZlIENoYW5nZXM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVGFicyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYm9yZGVyLWIgYm9yZGVyLVsjRTJFMkVDXVwiPlxuICAgICAgICB7dGFicy5tYXAodCA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e3R9IG9uQ2xpY2s9eygpID0+IHNldFRhYih0KX0gY2xhc3NOYW1lPXtgcHgtNCBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCBib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIC1tYi1weCAke3RhYiA9PT0gdCA/ICdib3JkZXItWyNFODQ1MEFdIHRleHQtWyNFODQ1MEFdJyA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1bIzlCOUJCOF0gaG92ZXI6dGV4dC1bIzZCNkI4Ml0nfWB9Pnt0fTwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7dGFiID09PSAnR2xvYmFsIFNFTycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICB7LyogTGVmdDogZm9ybSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5EZWZhdWx0IE1ldGEgVGFnczwvaDM+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+U2l0ZSBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LVsxMXB4XSBmb250LW1vbm8gJHt0aXRsZUxlbiA+IDYwID8gJ3RleHQtWyNFMTFENDhdJyA6IHRpdGxlTGVuID4gNTAgPyAndGV4dC1bI0Q5NzcwNl0nIDogJ3RleHQtWyMwNTk2NjldJ31gfT57dGl0bGVMZW59LzYwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2l0ZVRpdGxlfSBvbkNoYW5nZT17ZSA9PiBzZXRTaXRlVGl0bGUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyM5QjlCQjhdXCI+U2hvd24gaW4gYnJvd3NlciB0YWJzIGFuZCBzZWFyY2ggcmVzdWx0czwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+TWV0YSBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LVsxMXB4XSBmb250LW1vbm8gJHtkZXNjTGVuID4gMTYwID8gJ3RleHQtWyNFMTFENDhdJyA6IGRlc2NMZW4gPCAxMjAgPyAndGV4dC1bI0Q5NzcwNl0nIDogJ3RleHQtWyMwNTk2NjldJ31gfT57ZGVzY0xlbn0vMTYwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWV0YURlc2N9IG9uQ2hhbmdlPXtlID0+IHNldE1ldGFEZXNjKGUudGFyZ2V0LnZhbHVlKX0gcm93cz17M30gY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdIHJlc2l6ZS1ub25lXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5DYW5vbmljYWwgRG9tYWluPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtnbG9iYWxGaWVsZHMuY2Fub25pY2FsRG9tYWlufSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBweC0zIGJnLVsjRjRGNEY4XSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tb25vIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml1cIj5Sb2JvdHMgRGlyZWN0aXZlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIHB4LTMgYmctWyNGNEY0RjhdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHJvdW5kZWQtbGcgdGV4dC1zbSBvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+aW5kZXgsIGZvbGxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5ub2luZGV4LCBmb2xsb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+aW5kZXgsIG5vZm9sbG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPm5vaW5kZXgsIG5vZm9sbG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTUgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+T3BlbiBHcmFwaCAvIFNvY2lhbDwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+T0cgSW1hZ2UgVVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtnbG9iYWxGaWVsZHMub2dJbWFnZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgcHgtMyBiZy1bI0Y0RjRGOF0gYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbW9ubyBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bIzlCOUJCOF1cIj5SZWNvbW1lbmRlZDogMTIwMMOXNjMwcHg8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGgtMzJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7Z2xvYmFsRmllbGRzLm9nSW1hZ2V9YH0gYWx0PVwiT0cgcHJldmlld1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSaWdodDogcHJldmlldyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5QcmV2aWV3PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgbWwtYXV0byBiZy1bI0Y0RjRGOF0gcm91bmRlZC1sZyBwLTFcIj5cbiAgICAgICAgICAgICAgICAgIHsoWydnb29nbGUnLCAnc29jaWFsJ10gYXMgY29uc3QpLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3B9IG9uQ2xpY2s9eygpID0+IHNldFByZXZpZXdUeXBlKHApfSBjbGFzc05hbWU9e2BweC0zIHB5LTEgcm91bmRlZC1tZCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgY2FwaXRhbGl6ZSB0cmFuc2l0aW9uLWFsbCAke3ByZXZpZXdUeXBlID09PSBwID8gJ2JnLXdoaXRlIHNoYWRvdy1zbSB0ZXh0LVsjMTExMTE4XScgOiAndGV4dC1bIzlCOUJCOF0nfWB9PntwID09PSAnZ29vZ2xlJyA/ICdHb29nbGUnIDogJ1NvY2lhbCd9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAge3ByZXZpZXdUeXBlID09PSAnZ29vZ2xlJyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLXhsIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bIzA1OTY2OV0gZm9udC1tb25vXCI+bmV4dXNtYXJrZXQuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzFBMERBQl0gZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgbGVhZGluZy10aWdodCBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXIgbGluZS1jbGFtcC0xXCI+e3NpdGVUaXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNEQ1MTU2XSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCBsaW5lLWNsYW1wLTJcIj57bWV0YURlc2N9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00MCBiZy1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dsb2JhbEZpZWxkcy5vZ0ltYWdlfSBhbHQ9XCJPR1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTIuNSBiZy1bI0YyRjNGNV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdXBwZXJjYXNlIHRleHQtWyM5MDk0OUNdIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZVwiPk5FWFVTTUFSS0VULkNPTTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bIzFEMjEyOV0gbGluZS1jbGFtcC0xIG10LTAuNVwiPntzaXRlVGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2MDY3NzBdIGxpbmUtY2xhbXAtMVwiPnttZXRhRGVzY308L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU0VPIEhlYWx0aCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTVcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF0gbWItM1wiPlNFTyBIZWFsdGggQ2hlY2tsaXN0PC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIuNVwiPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU2l0ZSB0aXRsZSBsZW5ndGgnLCBvazogdGl0bGVMZW4gPiAwICYmIHRpdGxlTGVuIDw9IDYwIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTWV0YSBkZXNjcmlwdGlvbiBsZW5ndGgnLCBvazogZGVzY0xlbiA+PSAxMjAgJiYgZGVzY0xlbiA8PSAxNjAgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDYW5vbmljYWwgVVJMIHNldCcsIG9rOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnT0cgaW1hZ2UgY29uZmlndXJlZCcsIG9rOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU2l0ZW1hcCBzdWJtaXR0ZWQnLCBvazogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1JvYm90cy50eHQgdmFsaWQnLCBvazogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0hUVFBTIGVuYWJsZWQnLCBvazogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIF0ubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2MubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTUgaC01IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wICR7Yy5vayA/ICdiZy1bI0QxRkFFNV0nIDogJ2JnLVsjRkVFMkUyXSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge2Mub2sgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1bIzA1OTY2OV1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17M30+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNSAxM2w0IDRMMTkgN1wiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zIGgtMyB0ZXh0LVsjRTExRDQ4XVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXszfT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC1zbSAke2Mub2sgPyAndGV4dC1bIzExMTExOF0nIDogJ3RleHQtWyNFMTFENDhdIGZvbnQtc2VtaWJvbGQnfWB9PntjLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0YWIgPT09ICdQcm9kdWN0IFNFTycgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1bI0Y5RjlGQ10gYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICAgIHtbJ1Byb2R1Y3QnLCAnU0VPIFNjb3JlJywgJ1RpdGxlJywgJ0Rlc2NyaXB0aW9uJywgJ0tleXdvcmRzJywgJ1VSTCBTbHVnJywgJ0FjdGlvbnMnXS5tYXAoaCA9PiAoXG4gICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntofTwvdGg+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RTRU8ubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3AubmFtZX0gY2xhc3NOYW1lPVwiaG92ZXI6YmctWyNGOUY5RkNdIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntwLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPjxTY29yZUJhZGdlIHNjb3JlPXtwLnNjb3JlfSAvPjwvdGQ+XG4gICAgICAgICAgICAgICAgICB7W3AudGl0bGUsIHAuZGVzY3JpcHRpb24sIHAua2V5d29yZHNdLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpfSBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1zZW1pYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgJHt2ID09PSAnT0snIHx8IHYgPT09ICdHb29kJyA/ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nIDogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXSd9YH0+e3Z9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIHRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj57cC51cmx9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjRTg0NTBBXSBob3Zlcjp1bmRlcmxpbmVcIj5FZGl0IFNFTzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dGFiID09PSAnQ2F0ZWdvcnkgU0VPJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5DYXRlZ29yeSBTRU8gU2V0dGluZ3M8L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjQzkzQTA3XVwiPlNhdmUgQWxsPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1bI0Y5RjlGQ10gYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICAgIHtbJ0NhdGVnb3J5JywgJ1Njb3JlJywgJ01ldGEgVGl0bGUnLCAnTWV0YSBEZXNjJywgJ1VSTCBTbHVnJywgJ1Byb2R1Y3RzJywgJ0FjdGlvbnMnXS5tYXAoaCA9PiAoXG4gICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntofTwvdGg+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICB7IGNhdDogJ0VsZWN0cm9uaWNzJywgc2NvcmU6IDg4LCB0aXRsZTogJ09LJywgZGVzYzogJ09LJywgc2x1ZzogJy9lbGVjdHJvbmljcycsIHByb2R1Y3RzOiAxMjg0IH0sXG4gICAgICAgICAgICAgICAgeyBjYXQ6ICdGYXNoaW9uICYgQXBwYXJlbCcsIHNjb3JlOiA3MiwgdGl0bGU6ICdPSycsIGRlc2M6ICdTaG9ydCcsIHNsdWc6ICcvZmFzaGlvbicsIHByb2R1Y3RzOiA0ODIwIH0sXG4gICAgICAgICAgICAgICAgeyBjYXQ6ICdCZWF1dHkgJiBTa2luY2FyZScsIHNjb3JlOiA5NCwgdGl0bGU6ICdPSycsIGRlc2M6ICdPSycsIHNsdWc6ICcvYmVhdXR5JywgcHJvZHVjdHM6IDg5MiB9LFxuICAgICAgICAgICAgICAgIHsgY2F0OiAnSG9tZSAmIExpdmluZycsIHNjb3JlOiA2NSwgdGl0bGU6ICdMb25nJywgZGVzYzogJ01pc3NpbmcnLCBzbHVnOiAnL2hvbWUtbGl2aW5nJywgcHJvZHVjdHM6IDIxNDAgfSxcbiAgICAgICAgICAgICAgICB7IGNhdDogJ1Nwb3J0cyAmIE91dGRvb3JzJywgc2NvcmU6IDgxLCB0aXRsZTogJ09LJywgZGVzYzogJ09LJywgc2x1ZzogJy9zcG9ydHMnLCBwcm9kdWN0czogNjQwIH0sXG4gICAgICAgICAgICAgICAgeyBjYXQ6ICdCb29rcyAmIFN0YXRpb25lcnknLCBzY29yZTogNTgsIHRpdGxlOiAnTWlzc2luZycsIGRlc2M6ICdNaXNzaW5nJywgc2x1ZzogJy9ib29rcycsIHByb2R1Y3RzOiAzODAgfSxcbiAgICAgICAgICAgICAgXS5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17Yy5jYXR9IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57Yy5jYXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctOSBoLTkgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LW1vbm8gZm9udC1ibGFjayB0ZXh0LXNtICR7Yy5zY29yZSA+PSA4MCA/ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nIDogYy5zY29yZSA+PSA2MCA/ICdiZy1bI0ZFRjNDN10gdGV4dC1bIzkyNDAwRV0nIDogJ2JnLVsjRkVFMkUyXSB0ZXh0LVsjOTkxQjFCXSd9YH0+e2Muc2NvcmV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAge1tjLnRpdGxlLCBjLmRlc2NdLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpfSBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1zZW1pYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgJHt2ID09PSAnT0snID8gJ2JnLVsjRDFGQUU1XSB0ZXh0LVsjMDY1RjQ2XScgOiB2ID09PSAnTWlzc2luZycgPyAnYmctWyNGRUUyRTJdIHRleHQtWyM5OTFCMUJdJyA6ICdiZy1bI0ZFRjNDN10gdGV4dC1bIzkyNDAwRV0nfWB9Pnt2fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+e2Muc2x1Z308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyM2QjZCODJdXCI+e2MucHJvZHVjdHMudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyNFODQ1MEFdIGhvdmVyOnVuZGVybGluZVwiPkVkaXQgU0VPPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0YWIgPT09ICdTaXRlbWFwJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnVG90YWwgVVJMcycsIHZhbHVlOiAnMTIsNDgxJywgaWNvbjogJ/Cfl7rvuI8nIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdMYXN0IEdlbmVyYXRlZCcsIHZhbHVlOiAnSnVsIDI1LCAyMDI1JywgaWNvbjogJ/CflZInIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdTdWJtaXR0ZWQgdG8gR29vZ2xlJywgdmFsdWU6ICdWZXJpZmllZCDinJMnLCBpY29uOiAn8J+UjScgfSxcbiAgICAgICAgICAgIF0ubWFwKHMgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17cy5sYWJlbH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBweC01IHB5LTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPntzLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj57cy5sYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtbGcgdGV4dC1bIzExMTExOF0gbXQtMC41XCI+e3MudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+U2l0ZW1hcCBJbmRleDwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdXCI+UmVnZW5lcmF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0M5M0EwN11cIj5TdWJtaXQgdG8gR29vZ2xlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIHsgZmlsZTogJ3NpdGVtYXAtcHJvZHVjdHMueG1sJywgdXJsczogNDI4NCwgbGFzdG1vZDogJ0p1bCAyNSwgMjAyNScgfSxcbiAgICAgICAgICAgICAgICB7IGZpbGU6ICdzaXRlbWFwLWNhdGVnb3JpZXMueG1sJywgdXJsczogNDgsIGxhc3Rtb2Q6ICdKdWwgMjAsIDIwMjUnIH0sXG4gICAgICAgICAgICAgICAgeyBmaWxlOiAnc2l0ZW1hcC12ZW5kb3JzLnhtbCcsIHVybHM6IDMxMiwgbGFzdG1vZDogJ0p1bCAyNCwgMjAyNScgfSxcbiAgICAgICAgICAgICAgICB7IGZpbGU6ICdzaXRlbWFwLXBhZ2VzLnhtbCcsIHVybHM6IDE4LCBsYXN0bW9kOiAnSnVsIDEwLCAyMDI1JyB9LFxuICAgICAgICAgICAgICAgIHsgZmlsZTogJ3NpdGVtYXAtYmxvZy54bWwnLCB1cmxzOiA4NCwgbGFzdG1vZDogJ0p1bCAyMiwgMjAyNScgfSxcbiAgICAgICAgICAgICAgXS5tYXAocyA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3MuZmlsZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XSBsYXN0OmJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWxnIGJnLVsjRjRGNEY4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzXCI+8J+Xgu+4jzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj57cy5maWxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+TGFzdCBtb2RpZmllZDoge3MubGFzdG1vZH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyM2QjZCODJdXCI+e3MudXJscy50b0xvY2FsZVN0cmluZygpfSBVUkxzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjRTg0NTBBXSBob3Zlcjp1bmRlcmxpbmVcIj5WaWV3PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dGFiID09PSAnUmVkaXJlY3RzJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+VVJMIFJlZGlyZWN0czwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0M5M0EwN11cIj4rIEFkZCBSZWRpcmVjdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogQ3JlYXRlIGZvcm0gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJnLVsjRjlGOUZDXSByb3VuZGVkLXhsIHAtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5Gcm9tIChvbGQgVVJMKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiL29sZC1wcm9kdWN0LXNsdWdcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05IHB4LTMgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbW9ubyBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSBwbGFjZWhvbGRlcjp0ZXh0LVsjQzhDOEUwXVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1bIzlCOUJCOF1cIj7ihpI8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+VG8gKG5ldyBVUkwpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIvbmV3LXByb2R1Y3Qtc2x1Z1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLTkgcHgtMyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tb25vIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdIHBsYWNlaG9sZGVyOnRleHQtWyNDOEM4RTBdXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtWyM5QjlCQjhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+VHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJoLTkgcHgtMyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSByb3VuZGVkLWxnIHRleHQtc20gb3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjMwMSBQZXJtYW5lbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MzAyIFRlbXBvcmFyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IHB4LTQgcHktMiBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjQzkzQTA3XSBmbGV4LXNocmluay0wXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAgICB7WydGcm9tIFVSTCcsICdUbyBVUkwnLCAnVHlwZScsICdIaXRzJywgJ0NyZWF0ZWQnLCAnJ10ubWFwKGggPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntofTwvdGg+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7IGZyb206ICcvcHJvZHVjdHMvaXBob25lLTE0JywgdG86ICcvcHJvZHVjdHMvaXBob25lLTE1JywgdHlwZTogJzMwMScsIGhpdHM6IDg0MjEsIGRhdGU6ICdKdW4gMTIsIDIwMjUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGZyb206ICcvc2FsZScsIHRvOiAnL2NhdGVnb3J5L2ZsYXNoLXNhbGUnLCB0eXBlOiAnMzAxJywgaGl0czogMzI4NCwgZGF0ZTogJ0p1bCAxLCAyMDI1JyB9LFxuICAgICAgICAgICAgICAgICAgeyBmcm9tOiAnL3Nob3AvYmVhdXR5JywgdG86ICcvY2F0ZWdvcnkvYmVhdXR5JywgdHlwZTogJzMwMScsIGhpdHM6IDE4NDIsIGRhdGU6ICdNYXkgMjAsIDIwMjUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGZyb206ICcvYnJhbmQvYXBwbGUnLCB0bzogJy9icmFuZHMvYXBwbGUnLCB0eXBlOiAnMzAxJywgaGl0czogOTI0LCBkYXRlOiAnQXByIDUsIDIwMjUnIH0sXG4gICAgICAgICAgICAgICAgXS5tYXAociA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtyLmZyb219IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjRjlGOUZDXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjUgZm9udC1tb25vIHRleHQteHMgdGV4dC1bI0UxMUQ0OF1cIj57ci5mcm9tfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSBmb250LW1vbm8gdGV4dC14cyB0ZXh0LVsjMDU5NjY5XVwiPntyLnRvfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCBiZy1bI0VFRjJGRl0gdGV4dC1bIzQzMzhDQV0gcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsXCI+e3IudHlwZX08L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyMxMTExMThdXCI+e3IuaGl0cy50b0xvY2FsZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTMuNSB0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+e3IuZGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjRTExRDQ4XSBob3Zlcjp1bmRlcmxpbmVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLElBQU0sT0FBTztDQUFDO0NBQWM7Q0FBZTtDQUFnQjtDQUFXO0FBQVc7QUFFakYsSUFBTSxlQUFlO0NBQ25CLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsU0FBUztDQUNULFFBQVE7Q0FDUixpQkFBaUI7QUFDbkI7QUFFQSxJQUFNLGFBQWE7Q0FDakI7RUFBRSxNQUFNO0VBQXlCLE9BQU87RUFBSSxPQUFPO0VBQU0sYUFBYTtFQUFNLFVBQVU7RUFBUSxLQUFLO0NBQTBCO0NBQzdIO0VBQUUsTUFBTTtFQUFvQixPQUFPO0VBQUksT0FBTztFQUFNLGFBQWE7RUFBUyxVQUFVO0VBQU0sS0FBSztDQUE2QjtDQUM1SDtFQUFFLE1BQU07RUFBbUIsT0FBTztFQUFJLE9BQU87RUFBTSxhQUFhO0VBQU0sVUFBVTtFQUFNLEtBQUs7Q0FBNEI7Q0FDdkg7RUFBRSxNQUFNO0VBQWtCLE9BQU87RUFBSSxPQUFPO0VBQVEsYUFBYTtFQUFXLFVBQVU7RUFBUSxLQUFLO0NBQTJCO0FBQ2hJO0FBRUEsSUFBTSxjQUFjLEVBQUUsWUFDcEIsaUJBQUEsR0FBQSxtQkFBQSxJQUFBLENBQUMsT0FBRDtDQUFLLFdBQVcsc0ZBQXNGLFNBQVMsS0FBSyxnQ0FBZ0MsU0FBUyxLQUFLLGdDQUFnQztDQUFrQyxVQUFBO0FBQVcsQ0FBQTtBQUdqUCxTQUF3QixTQUFTLEVBQUUsWUFBWSxLQUFZO0NBQ3pELE1BQU0sQ0FBQyxLQUFLLFdBQUEsR0FBVSxhQUFBLFNBQUEsQ0FBUyxZQUFZO0NBQzNDLE1BQU0sQ0FBQyxXQUFXLGlCQUFBLEdBQWdCLGFBQUEsU0FBQSxDQUFT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