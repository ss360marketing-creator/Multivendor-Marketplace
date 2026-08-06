import { g as __toESM, i as require_jsx_runtime, p as require_react, r as useCatalog, t as useSession } from "./index-BM41bWnP.js";
import { m as updateAdminProduct, o as deleteAdminProduct, r as createAdminProduct, u as listAdminProducts } from "./admin-jnfUkW2D.js";
//#region src/admin/components/AddProductModal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PRESET_IMAGES = [
	{
		label: "Headphones",
		url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&auto=format"
	},
	{
		label: "Smartphone",
		url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop&auto=format"
	},
	{
		label: "Laptop",
		url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop&auto=format"
	},
	{
		label: "Sneakers",
		url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&auto=format"
	},
	{
		label: "Smart Watch",
		url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&auto=format"
	},
	{
		label: "Tea Set",
		url: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=800&fit=crop&auto=format"
	}
];
var CATEGORIES = [
	{
		name: "Mobiles",
		slug: "mobiles"
	},
	{
		name: "Electronics",
		slug: "electronics"
	},
	{
		name: "Laptops",
		slug: "laptops"
	},
	{
		name: "Fashion",
		slug: "fashion"
	},
	{
		name: "Beauty",
		slug: "beauty"
	},
	{
		name: "Home & Living",
		slug: "home"
	},
	{
		name: "Gaming",
		slug: "gaming"
	},
	{
		name: "Accessories",
		slug: "accessories"
	}
];
var VENDORS = [
	{
		id: "v1",
		name: "SoundVault"
	},
	{
		id: "v2",
		name: "TechArmor"
	},
	{
		id: "v3",
		name: "SneakerHead"
	},
	{
		id: "v4",
		name: "GlowUp Beauty"
	},
	{
		id: "v5",
		name: "HomeCraft"
	},
	{
		id: "v6",
		name: "PixelGear"
	}
];
function AddProductModal({ isOpen, onClose, onSave }) {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("basic");
	const [title, setTitle] = (0, import_react.useState)("");
	const [vendorName, setVendorName] = (0, import_react.useState)("SoundVault");
	const [categoryName, setCategoryName] = (0, import_react.useState)("Electronics");
	const [badge, setBadge] = (0, import_react.useState)("new");
	const [description, setDescription] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("149.99");
	const [originalPrice, setOriginalPrice] = (0, import_react.useState)("199.99");
	const [stock, setStock] = (0, import_react.useState)("45");
	const [installment, setInstallment] = (0, import_react.useState)("$12.50/mo for 12 mos");
	const [freeShipping, setFreeShipping] = (0, import_react.useState)(true);
	const [primaryImage, setPrimaryImage] = (0, import_react.useState)(PRESET_IMAGES[0].url);
	const [galleryImages, setGalleryImages] = (0, import_react.useState)(["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop&auto=format", "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop&auto=format"]);
	const [newGalleryUrl, setNewGalleryUrl] = (0, import_react.useState)("");
	const [colorsText, setColorsText] = (0, import_react.useState)("Space Gray, Silver, Midnight Blue");
	const [sizesText, setSizesText] = (0, import_react.useState)("Standard, Pro");
	const [features, setFeatures] = (0, import_react.useState)([
		"Premium High-Fidelity Audio output with Deep Bass",
		"Ergonomic all-day comfort design with soft earcups",
		"Long-lasting rechargeable battery with Quick Charge support"
	]);
	const [newFeatureText, setNewFeatureText] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("PUBLISHED");
	if (!isOpen) return null;
	const numPrice = parseFloat(price) || 0;
	const numOrigPrice = parseFloat(originalPrice) || numPrice;
	const calcDiscount = numOrigPrice > numPrice ? Math.round((numOrigPrice - numPrice) / numOrigPrice * 100) : 0;
	const handleAddFeature = () => {
		if (newFeatureText.trim()) {
			setFeatures((prev) => [...prev, newFeatureText.trim()]);
			setNewFeatureText("");
		}
	};
	const handleRemoveFeature = (idx) => {
		setFeatures((prev) => prev.filter((_, i) => i !== idx));
	};
	const handleAddGalleryImage = () => {
		if (newGalleryUrl.trim()) {
			setGalleryImages((prev) => [...prev, newGalleryUrl.trim()]);
			setNewGalleryUrl("");
		}
	};
	const handleRemoveGalleryImage = (idx) => {
		setGalleryImages((prev) => prev.filter((_, i) => i !== idx));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!title.trim()) {
			setActiveTab("basic");
			return;
		}
		setSubmitting(true);
		try {
			const selectedCategory = CATEGORIES.find((c) => c.name === categoryName) ?? CATEGORIES[1];
			const selectedVendor = VENDORS.find((v) => v.name === vendorName) ?? VENDORS[0];
			const colorsArr = colorsText.split(",").map((c) => c.trim()).filter(Boolean);
			const sizesArr = sizesText.split(",").map((s) => s.trim()).filter(Boolean);
			const allImages = [primaryImage, ...galleryImages].filter(Boolean);
			await onSave({
				title: title.trim(),
				vendor: selectedVendor.name,
				vendorId: selectedVendor.id,
				verified: true,
				rating: 4.8,
				reviewCount: 1,
				price: numPrice,
				originalPrice: numOrigPrice,
				discount: calcDiscount,
				image: primaryImage,
				images: allImages,
				category: selectedCategory.name,
				categorySlug: selectedCategory.slug,
				freeShipping,
				badge: badge || void 0,
				stock: parseInt(stock) || 10,
				installment: installment.trim() || void 0,
				description: description.trim() || "No description provided.",
				features,
				colors: colorsArr,
				sizes: sizesArr,
				status: status.toLowerCase()
			});
			onClose();
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-3xl border border-[#E2E2EC] w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-4 bg-[#F9F9FC] border-b border-[#E2E2EC] flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-2xl bg-[#E8450A]/10 border border-[#E8450A]/20 flex items-center justify-center text-lg",
							children: "✨"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold text-[#111118]",
							children: "Add New Product"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#6B6B82]",
							children: "Create a new catalog item matching the storefront specifications"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "w-8 h-8 rounded-full bg-[#F4F4F8] hover:bg-[#E2E2EC] flex items-center justify-center text-[#6B6B82] transition-colors",
						children: "✕"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-6 border-b border-[#E2E2EC] bg-white flex items-center gap-2 overflow-x-auto scroll-container text-xs font-semibold text-[#6B6B82]",
					children: [
						{
							key: "basic",
							label: "1. Basic Info"
						},
						{
							key: "pricing",
							label: "2. Pricing & Stock"
						},
						{
							key: "media",
							label: "3. Images & Gallery"
						},
						{
							key: "variants",
							label: "4. Colors & Features"
						},
						{
							key: "publish",
							label: "5. Publishing"
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab(t.key),
						className: `py-3 px-3 border-b-2 transition-colors flex-shrink-0 ${activeTab === t.key ? "border-[#E8450A] text-[#E8450A] font-bold" : "border-transparent hover:text-[#111118]"}`,
						children: t.label
					}, t.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "flex-1 overflow-y-auto p-6 space-y-6",
					children: [
						activeTab === "basic" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
									children: ["Product Title ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#E11D48]",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									placeholder: "e.g. Sony WH-1000XM5 Wireless Headphones",
									value: title,
									onChange: (e) => setTitle(e.target.value),
									className: "mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A] transition-colors"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
										children: "Vendor / Seller"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: vendorName,
										onChange: (e) => setVendorName(e.target.value),
										className: "mt-1.5 w-full h-11 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]",
										children: VENDORS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: v.name,
											children: v.name
										}, v.id))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
										children: "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: categoryName,
										onChange: (e) => setCategoryName(e.target.value),
										className: "mt-1.5 w-full h-11 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]",
										children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: c.name,
											children: c.name
										}, c.slug))
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
									children: "Promotional Badge"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 flex flex-wrap gap-2",
									children: [
										{
											key: "",
											label: "None"
										},
										{
											key: "new",
											label: "🆕 New Arrival"
										},
										{
											key: "bestseller",
											label: "🔥 Best Seller"
										},
										{
											key: "flash",
											label: "⚡ Flash Sale"
										},
										{
											key: "sponsored",
											label: "⭐ Sponsored"
										}
									].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setBadge(b.key),
										className: `px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${badge === b.key ? "bg-[#E8450A] text-white border-[#E8450A]" : "bg-[#F9F9FC] border-[#E2E2EC] text-[#6B6B82] hover:border-[#111118]"}`,
										children: b.label
									}, b.key))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
									children: "Product Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									placeholder: "Enter rich detailed product description, specifications, and overview...",
									value: description,
									onChange: (e) => setDescription(e.target.value),
									className: "mt-1.5 w-full p-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A] transition-colors"
								})] })
							]
						}),
						activeTab === "pricing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
											children: ["Selling Price ($) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#E11D48]",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											step: "0.01",
											required: true,
											placeholder: "149.99",
											value: price,
											onChange: (e) => setPrice(e.target.value),
											className: "mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono font-bold text-[#111118] outline-none focus:border-[#E8450A]"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
											children: "Original Price ($)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											step: "0.01",
											placeholder: "199.99",
											value: originalPrice,
											onChange: (e) => setOriginalPrice(e.target.value),
											className: "mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono text-[#6B6B82] outline-none focus:border-[#E8450A]"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
											children: "Calculated Discount"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1.5 h-11 px-4 rounded-xl bg-[#FFF1F2] border border-[#FECACA] flex items-center font-bold text-sm text-[#E11D48]",
											children: calcDiscount > 0 ? `-${calcDiscount}% Off` : "No Discount"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
										children: "Stock Quantity"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										placeholder: "50",
										value: stock,
										onChange: (e) => setStock(e.target.value),
										className: "mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm font-mono text-[#111118] outline-none focus:border-[#E8450A]"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
										children: "Installment Terms"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "or $12.50/mo for 12 mos",
										value: installment,
										onChange: (e) => setInstallment(e.target.value),
										className: "mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-3 p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: freeShipping,
											onChange: (e) => setFreeShipping(e.target.checked),
											className: "w-5 h-5 accent-[#059669]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-[#065F46]",
											children: "Free Shipping Offered"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#047857]",
											children: "Buyers see a “Free Delivery” badge on product cards & page."
										})] })]
									})
								})
							]
						}),
						activeTab === "media" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
									children: "Primary Cover Image URL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 flex gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "url",
										placeholder: "https://images.unsplash.com/...",
										value: primaryImage,
										onChange: (e) => setPrimaryImage(e.target.value),
										className: "flex-1 h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-[#6B6B82] mb-2",
									children: "Or Pick a High-Res Unsplash Preset:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 sm:grid-cols-6 gap-2",
									children: PRESET_IMAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPrimaryImage(p.url),
										className: `relative aspect-square rounded-xl overflow-hidden border-2 transition-all group ${primaryImage === p.url ? "border-[#E8450A] ring-2 ring-[#E8450A]/30" : "border-[#E2E2EC]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.url,
											alt: p.label,
											className: "w-full h-full object-cover group-hover:scale-105 transition-transform"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] font-bold text-center py-0.5 truncate",
											children: p.label
										})]
									}, p.label))
								})] }),
								primaryImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-[#F9F9FC] border border-[#E2E2EC] flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-20 h-20 rounded-xl overflow-hidden bg-white border border-[#E2E2EC] flex-shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: primaryImage,
											alt: "Cover preview",
											className: "w-full h-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-[#059669]",
										children: "✓ Primary Cover Set"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#6B6B82] mt-0.5",
										children: "This image will appear on catalog grids and top thumbnail."
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-3 border-t border-[#E2E2EC]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
											children: "Gallery Images (Thumbnail Slider)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "url",
												placeholder: "Add additional image URL...",
												value: newGalleryUrl,
												onChange: (e) => setNewGalleryUrl(e.target.value),
												className: "flex-1 h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: handleAddGalleryImage,
												className: "px-4 h-10 rounded-xl bg-[#111118] text-white text-xs font-bold hover:bg-[#E8450A] transition-colors",
												children: "+ Add Image"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 flex flex-wrap gap-3",
											children: galleryImages.map((imgUrl, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative w-16 h-16 rounded-xl overflow-hidden border border-[#E2E2EC] group",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: imgUrl,
													alt: `Gallery ${idx}`,
													className: "w-full h-full object-cover"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleRemoveGalleryImage(idx),
													className: "absolute top-1 right-1 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center opacity-90 hover:opacity-100",
													children: "✕"
												})]
											}, idx))
										})
									]
								})
							]
						}),
						activeTab === "variants" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
									children: "Color Variants (Comma Separated)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Space Gray, Silver, Midnight Blue",
									value: colorsText,
									onChange: (e) => setColorsText(e.target.value),
									className: "mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
									children: "Size / Storage Specs (Comma Separated)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "128GB, 256GB, 512GB OR Small, Medium, Large",
									value: sizesText,
									onChange: (e) => setSizesText(e.target.value),
									className: "mt-1.5 w-full h-11 px-4 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-3 border-t border-[#E2E2EC]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
											children: "Key Features (Displayed on Product Page)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "e.g. Active Noise Cancellation with dual chips",
												value: newFeatureText,
												onChange: (e) => setNewFeatureText(e.target.value),
												onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), handleAddFeature()),
												className: "flex-1 h-10 px-3 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] text-sm text-[#111118] outline-none focus:border-[#E8450A]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: handleAddFeature,
												className: "px-4 h-10 rounded-xl bg-[#111118] text-white text-xs font-bold hover:bg-[#E8450A] transition-colors",
												children: "+ Add Feature"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 space-y-2",
											children: features.map((feat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between p-3 rounded-xl bg-[#F9F9FC] border border-[#E2E2EC] text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[#111118] font-medium",
													children: ["✓ ", feat]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleRemoveFeature(idx),
													className: "text-red-500 hover:underline font-semibold ml-2",
													children: "Remove"
												})]
											}, idx))
										})
									]
								})
							]
						}),
						activeTab === "publish" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold uppercase tracking-wide text-[#111118]",
								children: "Publishing Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setStatus("PUBLISHED"),
									className: `p-5 rounded-2xl border-2 text-left transition-all ${status === "PUBLISHED" ? "border-[#059669] bg-[#F0FDF4]" : "border-[#E2E2EC] bg-[#F9F9FC] hover:border-[#111118]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-sm text-[#065F46]",
											children: "🚀 Published"
										}), status === "PUBLISHED" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-[#059669] font-bold",
											children: "Active"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#047857]",
										children: "Product will immediately be live on the storefront and search results."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setStatus("DRAFT"),
									className: `p-5 rounded-2xl border-2 text-left transition-all ${status === "DRAFT" ? "border-[#6B6B82] bg-[#F4F4F8]" : "border-[#E2E2EC] bg-[#F9F9FC] hover:border-[#111118]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-sm text-[#111118]",
											children: "📝 Draft"
										}), status === "DRAFT" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-[#6B6B82] font-bold",
											children: "Saved Draft"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#6B6B82]",
										children: "Saved in admin catalog only. Will not appear on the storefront yet."
									})]
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 rounded-2xl bg-[#FFF7F5] border border-[#FECACA] space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-wider text-[#E8450A]",
									children: "Product Preview Summary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: primaryImage,
										alt: "",
										className: "w-14 h-14 rounded-xl object-cover bg-white border border-[#E2E2EC]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-[#111118]",
											children: title || "Untitled Product"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#6B6B82]",
											children: [
												vendorName,
												" · ",
												categoryName
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-mono font-bold text-[#E8450A] mt-0.5",
											children: [
												"$",
												numPrice.toFixed(2),
												" ",
												calcDiscount > 0 && `(-${calcDiscount}%)`
											]
										})
									] })]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-4 bg-[#F9F9FC] border-t border-[#E2E2EC] flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "px-5 py-2.5 rounded-xl border border-[#E2E2EC] text-sm font-semibold text-[#6B6B82] hover:bg-[#E2E2EC] transition-colors",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: activeTab !== "publish" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								const tabsArr = [
									"basic",
									"pricing",
									"media",
									"variants",
									"publish"
								];
								const nextIdx = tabsArr.indexOf(activeTab) + 1;
								if (nextIdx < tabsArr.length) setActiveTab(tabsArr[nextIdx]);
							},
							className: "px-5 py-2.5 rounded-xl bg-[#111118] text-white text-sm font-bold hover:bg-[#E8450A] transition-colors",
							children: "Next Step →"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleSubmit,
							disabled: submitting || !title.trim(),
							className: "px-6 py-2.5 rounded-xl bg-[#E8450A] text-white text-sm font-bold hover:bg-[#C93A07] transition-colors shadow-lg shadow-[#E8450A]/20 disabled:opacity-50",
							children: submitting ? "Creating Product..." : "✓ Create Product"
						})
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/admin/pages/ProductsAdmin.tsx
var STATUS_BADGE = {
	published: "bg-[#D1FAE5] text-[#065F46]",
	draft: "bg-[#F4F4F8] text-[#5B5B72]",
	scheduled: "bg-[#EEF2FF] text-[#4338CA]",
	archived: "bg-[#F4F4F8] text-[#9B9BB8]"
};
function formatSku(product) {
	return `SKU-${product.id.slice(0, 8).toUpperCase()}`;
}
function ProductsAdmin({ onNavigate: _ }) {
	const session = useSession();
	const { addProduct: addToCatalogStore } = useCatalog();
	const [search, setSearch] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("sales");
	const [page, setPage] = (0, import_react.useState)(1);
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [showAddModal, setShowAddModal] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!session.token) return;
		let cancelled = false;
		(async () => {
			setLoading(true);
			const response = await listAdminProducts(session.token, {
				q: search || void 0,
				status: statusFilter === "all" ? void 0 : statusFilter,
				limit: 100
			});
			if (cancelled) return;
			if (response.success) {
				setItems(response.data);
				setError(null);
			} else {
				setItems([]);
				setError(response.error.message);
			}
			setLoading(false);
		})();
		return () => {
			cancelled = true;
		};
	}, [
		session.token,
		search,
		statusFilter
	]);
	const filtered = (0, import_react.useMemo)(() => {
		return items.filter((product) => {
			const matchSearch = !search || product.title.toLowerCase().includes(search.toLowerCase()) || product.vendor.toLowerCase().includes(search.toLowerCase()) || formatSku(product).toLowerCase().includes(search.toLowerCase());
			const matchStatus = statusFilter === "all" || product.status === statusFilter;
			return matchSearch && matchStatus;
		});
	}, [
		items,
		search,
		statusFilter
	]);
	const sorted = (0, import_react.useMemo)(() => {
		return [...filtered].sort((a, b) => {
			if (sortBy === "sales") return b.reviewCount - a.reviewCount;
			if (sortBy === "price") return b.price - a.price;
			if (sortBy === "stock") return a.stock - b.stock;
			if (sortBy === "rating") return b.rating - a.rating;
			return 0;
		});
	}, [filtered, sortBy]);
	const toggleSelect = (id) => {
		setSelected((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	};
	const allSelected = sorted.length > 0 && sorted.every((p) => selected.has(p.id));
	const toggleAll = () => {
		if (allSelected) setSelected(/* @__PURE__ */ new Set());
		else setSelected(new Set(sorted.map((p) => p.id)));
	};
	const refresh = async () => {
		if (!session.token) return;
		const response = await listAdminProducts(session.token, {
			q: search || void 0,
			status: statusFilter === "all" ? void 0 : statusFilter,
			limit: 100
		});
		if (response.success) setItems(response.data);
	};
	const handleToggleStatus = async (product) => {
		if (!session.token) return;
		setBusyId(product.id);
		const nextStatus = product.status === "published" ? "DRAFT" : "PUBLISHED";
		const response = await updateAdminProduct(session.token, product.id, { status: nextStatus });
		if (response.success) await refresh();
		else setError(response.error.message);
		setBusyId(null);
	};
	const handleFeatureToggle = async (product) => {
		if (!session.token) return;
		setBusyId(product.id);
		const response = await updateAdminProduct(session.token, product.id, { featured: product.badge !== "bestseller" });
		if (response.success) await refresh();
		else setError(response.error.message);
		setBusyId(null);
	};
	const handleDelete = async (product) => {
		if (!session.token) return;
		setBusyId(product.id);
		const response = await deleteAdminProduct(session.token, product.id);
		if (response.success) await refresh();
		else setError(response.error.message);
		setBusyId(null);
	};
	const handleCreateProduct = async (productData) => {
		const fullProduct = {
			id: `prod_${Date.now()}`,
			title: productData.title ?? "Untitled Product",
			vendor: productData.vendor ?? "Marketplace",
			vendorId: productData.vendorId ?? "v1",
			verified: true,
			rating: 5,
			reviewCount: 0,
			price: productData.price ?? 0,
			originalPrice: productData.originalPrice ?? productData.price ?? 0,
			discount: productData.discount ?? 0,
			image: productData.image ?? "",
			images: productData.images ?? [productData.image ?? ""],
			category: productData.category ?? "Electronics",
			categorySlug: productData.categorySlug ?? "electronics",
			freeShipping: productData.freeShipping ?? false,
			badge: productData.badge,
			stock: productData.stock ?? 10,
			installment: productData.installment,
			description: productData.description,
			status: productData.status ?? "published"
		};
		if (session.token) try {
			await createAdminProduct(session.token, {
				title: fullProduct.title,
				vendorId: fullProduct.vendorId,
				vendor: fullProduct.vendor,
				category: fullProduct.category,
				price: fullProduct.price,
				originalPrice: fullProduct.originalPrice,
				discount: fullProduct.discount,
				stock: fullProduct.stock,
				description: fullProduct.description,
				image: fullProduct.image,
				images: fullProduct.images,
				freeShipping: fullProduct.freeShipping,
				badge: fullProduct.badge,
				installment: fullProduct.installment,
				status: fullProduct.status.toUpperCase()
			});
		} catch {}
		setItems((prev) => [fullProduct, ...prev]);
		addToCatalogStore({
			id: fullProduct.id,
			title: fullProduct.title,
			vendor: fullProduct.vendor,
			vendorId: fullProduct.vendorId,
			verified: true,
			rating: 5,
			reviewCount: 0,
			price: fullProduct.price,
			originalPrice: fullProduct.originalPrice,
			discount: fullProduct.discount,
			image: fullProduct.image,
			images: fullProduct.images,
			category: fullProduct.category,
			categorySlug: fullProduct.categorySlug,
			freeShipping: fullProduct.freeShipping,
			badge: fullProduct.badge,
			stock: fullProduct.stock,
			installment: fullProduct.installment,
			colors: productData.colors,
			sizes: productData.sizes,
			description: fullProduct.description,
			features: productData.features
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-sm text-[#6B6B82]",
					children: "Manage your marketplace catalog"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 rounded-xl border border-[#E2E2EC] px-4 py-2 text-sm font-semibold text-[#6B6B82] transition-colors hover:bg-[#F4F4F8]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-4 w-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
							})
						}), "Import"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowAddModal(true),
						className: "flex items-center gap-2 rounded-xl bg-[#E8450A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#C93A07] shadow-sm shadow-[#E8450A]/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-4 w-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2.5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M12 4v16m8-8H4"
							})
						}), "Add Product"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-[#E2E2EC] bg-white p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-w-[200px] flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B9BB8]",
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
									placeholder: "Search products, title, vendor...",
									value: search,
									onChange: (e) => setSearch(e.target.value),
									className: "h-9 w-full rounded-lg border border-[#E2E2EC] bg-[#F4F4F8] pl-9 pr-4 text-sm text-[#111118] outline-none transition-colors placeholder:text-[#9B9BB8] focus:border-[#E8450A]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 rounded-lg bg-[#F4F4F8] p-1",
								children: [
									"all",
									"published",
									"draft",
									"archived"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStatusFilter(s),
									className: `rounded-md px-3 py-1 text-xs font-semibold capitalize transition-all ${statusFilter === s ? "bg-white text-[#111118] shadow-sm" : "text-[#9B9BB8] hover:text-[#6B6B82]"}`,
									children: s
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: sortBy,
								onChange: (e) => setSortBy(e.target.value),
								className: "h-9 rounded-lg border border-[#E2E2EC] bg-[#F4F4F8] px-3 pr-8 text-sm text-[#111118] outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "sales",
										children: "Sort: Top Reviews"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "price",
										children: "Sort: Price"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "stock",
										children: "Sort: Low Stock"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rating",
										children: "Sort: Rating"
									})
								]
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]",
						children: error
					}),
					selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-3 border-t border-[#F4F4F8] pt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-semibold text-[#111118]",
								children: [selected.size, " selected"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: async () => {
									if (!session.token) return;
									for (const id of selected) await deleteAdminProduct(session.token, id);
									setSelected(/* @__PURE__ */ new Set());
									await refresh();
								},
								className: "rounded-lg bg-[#FEE2E2] px-3 py-1 text-xs font-semibold text-[#991B1B]",
								children: "Delete Selected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelected(/* @__PURE__ */ new Set()),
								className: "ml-auto text-xs text-[#9B9BB8] hover:text-[#6B6B82]",
								children: "Clear"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-[#E2E2EC] bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-[#F4F4F8] bg-[#F9F9FC]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "w-10 px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: allSelected,
										onChange: toggleAll,
										className: "rounded border-[#E2E2EC] accent-[#E8450A]"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
									children: "Price"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
									children: "Stock"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
									children: "Reviews"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9B9BB8]",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[#F4F4F8]",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 8,
								className: "px-5 py-12 text-center text-sm text-[#6B6B82]",
								children: "Loading products from backend..."
							}) }) : sorted.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: `transition-colors hover:bg-[#F9F9FC] ${selected.has(product.id) ? "bg-[#FFF7F5]" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: selected.has(product.id),
											onChange: () => toggleSelect(product.id),
											className: "rounded border-[#E2E2EC] accent-[#E8450A]"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#F4F4F8] text-lg",
												children: "📦"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate font-semibold text-[#111118]",
													children: product.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-0.5 flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-[11px] text-[#9B9BB8]",
														children: formatSku(product)
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[11px] text-[#9B9BB8]",
														children: ["· ", product.vendor]
													})]
												})]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-lg bg-[#F4F4F8] px-2 py-1 text-xs font-medium text-[#6B6B82]",
											children: product.category
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono font-bold text-[#111118]",
											children: ["$", product.price.toLocaleString()]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-sm font-mono font-semibold ${product.stock === 0 ? "text-[#E11D48]" : product.stock < 10 ? "text-[#D97706]" : "text-[#111118]"}`,
											children: product.stock === 0 ? "Out of Stock" : product.stock
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[#111118]",
											children: product.reviewCount.toLocaleString()
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATUS_BADGE[product.status] ?? STATUS_BADGE.draft}`,
											children: product.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: busyId === product.id,
													onClick: () => void handleToggleStatus(product),
													className: "flex h-7 w-7 items-center justify-center rounded-lg text-[#9B9BB8] transition-colors hover:bg-[#F4F4F8] hover:text-[#111118] disabled:cursor-not-allowed disabled:opacity-60",
													title: product.status === "published" ? "Move to draft" : "Publish",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														className: "h-3.5 w-3.5",
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
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: busyId === product.id,
													onClick: () => void handleFeatureToggle(product),
													className: "flex h-7 w-7 items-center justify-center rounded-lg text-[#9B9BB8] transition-colors hover:bg-[#F4F4F8] hover:text-[#111118] disabled:cursor-not-allowed disabled:opacity-60",
													title: "Toggle featured",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														className: "h-3.5 w-3.5",
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
													disabled: busyId === product.id,
													onClick: () => void handleDelete(product),
													className: "flex h-7 w-7 items-center justify-center rounded-lg text-[#9B9BB8] transition-colors hover:bg-[#FEE2E2] hover:text-[#E11D48] disabled:cursor-not-allowed disabled:opacity-60",
													title: "Delete product",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														className: "h-3.5 w-3.5",
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
									})
								]
							}, product.id))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-[#F4F4F8] px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-[#9B9BB8]",
						children: [
							"Showing ",
							sorted.length,
							" of ",
							items.length,
							" products"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						children: [
							1,
							2,
							3,
							"...",
							48
						].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => typeof p === "number" && setPage(p),
							className: `h-8 w-8 rounded-lg text-xs font-semibold transition-colors ${page === p ? "bg-[#E8450A] text-white" : "text-[#6B6B82] hover:bg-[#F4F4F8]"}`,
							children: p
						}, i))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddProductModal, {
				isOpen: showAddModal,
				onClose: () => setShowAddModal(false),
				onSave: handleCreateProduct
			})
		]
	});
}
//#endregion
export { ProductsAdmin as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdHNBZG1pbi1DZXhIWW5ZSy5qcyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9BZGRQcm9kdWN0TW9kYWwudHN4IiwiLi4vLi4vc3JjL2FkbWluL3BhZ2VzL1Byb2R1Y3RzQWRtaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICdAL2RhdGEvbWFya2V0cGxhY2UnXG5pbXBvcnQgdHlwZSB7IEFkbWluUHJvZHVjdCB9IGZyb20gJ0AvYXBpL2FkbWluJ1xuXG50eXBlIFByb3BzID0ge1xuICBpc09wZW46IGJvb2xlYW5cbiAgb25DbG9zZTogKCkgPT4gdm9pZFxuICBvblNhdmU6IChwcm9kdWN0RGF0YTogUGFydGlhbDxBZG1pblByb2R1Y3Q+ICYgUGFydGlhbDxQcm9kdWN0PikgPT4gUHJvbWlzZTx2b2lkPlxufVxuXG5jb25zdCBQUkVTRVRfSU1BR0VTID0gW1xuICB7IGxhYmVsOiAnSGVhZHBob25lcycsIHVybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA1NzQwNDIwOTI4LTVlNTYwYzA2ZDMwZT93PTgwMCZoPTgwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcgfSxcbiAgeyBsYWJlbDogJ1NtYXJ0cGhvbmUnLCB1cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMTcwNzE3MTYzNC01Zjg5N2ZmMDJhYTk/dz04MDAmaD04MDAmZml0PWNyb3AmYXV0bz1mb3JtYXQnIH0sXG4gIHsgbGFiZWw6ICdMYXB0b3AnLCB1cmw6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NjE4MTEzMzIwNi04MGNlOWI4OGE4NTM/dz04MDAmaD04MDAmZml0PWNyb3AmYXV0bz1mb3JtYXQnIH0sXG4gIHsgbGFiZWw6ICdTbmVha2VycycsIHVybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyMjkxMDI2LTdlZWMyNjRjMjdmZj93PTgwMCZoPTgwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcgfSxcbiAgeyBsYWJlbDogJ1NtYXJ0IFdhdGNoJywgdXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjMyNzUzMzU2ODQtMzc4OThiNmJhZjMwP3c9ODAwJmg9ODAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0JyB9LFxuICB7IGxhYmVsOiAnVGVhIFNldCcsIHVybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc4NzQ5NTU2NTY4LWJjMmM0MGU2OGI2MT93PTgwMCZoPTgwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcgfSxcbl1cblxuY29uc3QgQ0FURUdPUklFUyA9IFtcbiAgeyBuYW1lOiAnTW9iaWxlcycsIHNsdWc6ICdtb2JpbGVzJyB9LFxuICB7IG5hbWU6ICdFbGVjdHJvbmljcycsIHNsdWc6ICdlbGVjdHJvbmljcycgfSxcbiAgeyBuYW1lOiAnTGFwdG9wcycsIHNsdWc6ICdsYXB0b3BzJyB9LFxuICB7IG5hbWU6ICdGYXNoaW9uJywgc2x1ZzogJ2Zhc2hpb24nIH0sXG4gIHsgbmFtZTogJ0JlYXV0eScsIHNsdWc6ICdiZWF1dHknIH0sXG4gIHsgbmFtZTogJ0hvbWUgJiBMaXZpbmcnLCBzbHVnOiAnaG9tZScgfSxcbiAgeyBuYW1lOiAnR2FtaW5nJywgc2x1ZzogJ2dhbWluZycgfSxcbiAgeyBuYW1lOiAnQWNjZXNzb3JpZXMnLCBzbHVnOiAnYWNjZXNzb3JpZXMnIH0sXG5dXG5cbmNvbnN0IFZFTkRPUlMgPSBbXG4gIHsgaWQ6ICd2MScsIG5hbWU6ICdTb3VuZFZhdWx0JyB9LFxuICB7IGlkOiAndjInLCBuYW1lOiAnVGVjaEFybW9yJyB9LFxuICB7IGlkOiAndjMnLCBuYW1lOiAnU25lYWtlckhlYWQnIH0sXG4gIHsgaWQ6ICd2NCcsIG5hbWU6ICdHbG93VXAgQmVhdXR5JyB9LFxuICB7IGlkOiAndjUnLCBuYW1lOiAnSG9tZUNyYWZ0JyB9LFxuICB7IGlkOiAndjYnLCBuYW1lOiAnUGl4ZWxHZWFyJyB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRQcm9kdWN0TW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIG9uU2F2ZSB9OiBQcm9wcykge1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPCdiYXNpYycgfCAncHJpY2luZycgfCAnbWVkaWEnIHwgJ3ZhcmlhbnRzJyB8ICdwdWJsaXNoJz4oJ2Jhc2ljJylcblxuICAvLyBGb3JtIFN0YXRlXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt2ZW5kb3JOYW1lLCBzZXRWZW5kb3JOYW1lXSA9IHVzZVN0YXRlKCdTb3VuZFZhdWx0JylcbiAgY29uc3QgW2NhdGVnb3J5TmFtZSwgc2V0Q2F0ZWdvcnlOYW1lXSA9IHVzZVN0YXRlKCdFbGVjdHJvbmljcycpXG4gIGNvbnN0IFtiYWRnZSwgc2V0QmFkZ2VdID0gdXNlU3RhdGU8J2Jlc3RzZWxsZXInIHwgJ2ZsYXNoJyB8ICduZXcnIHwgJ3Nwb25zb3JlZCcgfCAnJz4oJ25ldycpXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgnMTQ5Ljk5JylcbiAgY29uc3QgW29yaWdpbmFsUHJpY2UsIHNldE9yaWdpbmFsUHJpY2VdID0gdXNlU3RhdGUoJzE5OS45OScpXG4gIGNvbnN0IFtzdG9jaywgc2V0U3RvY2tdID0gdXNlU3RhdGUoJzQ1JylcbiAgY29uc3QgW2luc3RhbGxtZW50LCBzZXRJbnN0YWxsbWVudF0gPSB1c2VTdGF0ZSgnJDEyLjUwL21vIGZvciAxMiBtb3MnKVxuICBjb25zdCBbZnJlZVNoaXBwaW5nLCBzZXRGcmVlU2hpcHBpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBbcHJpbWFyeUltYWdlLCBzZXRQcmltYXJ5SW1hZ2VdID0gdXNlU3RhdGUoUFJFU0VUX0lNQUdFU1swXS51cmwpXG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ2NDM1NzcwLWEzZTQyNmJmNDcyYj93PTgwMCZoPTgwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgzMzk0ODM4MzM2LWFjZDk3NzczNmY5MD93PTgwMCZoPTgwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCcsXG4gIF0pXG4gIGNvbnN0IFtuZXdHYWxsZXJ5VXJsLCBzZXROZXdHYWxsZXJ5VXJsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IFtjb2xvcnNUZXh0LCBzZXRDb2xvcnNUZXh0XSA9IHVzZVN0YXRlKCdTcGFjZSBHcmF5LCBTaWx2ZXIsIE1pZG5pZ2h0IEJsdWUnKVxuICBjb25zdCBbc2l6ZXNUZXh0LCBzZXRTaXplc1RleHRdID0gdXNlU3RhdGUoJ1N0YW5kYXJkLCBQcm8nKVxuICBjb25zdCBbZmVhdHVyZXMsIHNldEZlYXR1cmVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXG4gICAgJ1ByZW1pdW0gSGlnaC1GaWRlbGl0eSBBdWRpbyBvdXRwdXQgd2l0aCBEZWVwIEJhc3MnLFxuICAgICdFcmdvbm9taWMgYWxsLWRheSBjb21mb3J0IGRlc2lnbiB3aXRoIHNvZnQgZWFyY3VwcycsXG4gICAgJ0xvbmctbGFzdGluZyByZWNoYXJnZWFibGUgYmF0dGVyeSB3aXRoIFF1aWNrIENoYXJnZSBzdXBwb3J0JyxcbiAgXSlcbiAgY29uc3QgW25ld0ZlYXR1cmVUZXh0LCBzZXROZXdGZWF0dXJlVGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8J1BVQkxJU0hFRCcgfCAnRFJBRlQnPignUFVCTElTSEVEJylcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGxcblxuICAvLyBDYWxjdWxhdGUgZGlzY291bnQgJSBhdXRvbWF0aWNhbGx5XG4gIGNvbnN0IG51bVByaWNlID0gcGFyc2VGbG9hdChwcmljZSkgfHwgMFxuICBjb25zdCBudW1PcmlnUHJpY2UgPSBwYXJzZUZsb2F0KG9yaWdpbmFsUHJpY2UpIHx8IG51bVByaWNlXG4gIGNvbnN0IGNhbGNEaXNjb3VudCA9IG51bU9yaWdQcmljZSA+IG51bVByaWNlID8gTWF0aC5yb3VuZCgoKG51bU9yaWdQcmljZSAtIG51bVByaWNlKSAvIG51bU9yaWdQcmljZSkgKiAxMDApIDogMFxuXG4gIGNvbnN0IGhhbmRsZUFkZEZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKG5ld0ZlYXR1cmVUZXh0LnRyaW0oKSkge1xuICAgICAgc2V0RmVhdHVyZXMocHJldiA9PiBbLi4ucHJldiwgbmV3RmVhdHVyZVRleHQudHJpbSgpXSlcbiAgICAgIHNldE5ld0ZlYXR1cmVUZXh0KCcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZlYXR1cmUgPSAoaWR4OiBudW1iZXIpID0+IHtcbiAgICBzZXRGZWF0dXJlcyhwcmV2ID0+IHByZXYuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpZHgpKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkR2FsbGVyeUltYWdlID0gKCkgPT4ge1xuICAgIGlmIChuZXdHYWxsZXJ5VXJsLnRyaW0oKSkge1xuICAgICAgc2V0R2FsbGVyeUltYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdHYWxsZXJ5VXJsLnRyaW0oKV0pXG4gICAgICBzZXROZXdHYWxsZXJ5VXJsKCcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUdhbGxlcnlJbWFnZSA9IChpZHg6IG51bWJlcikgPT4ge1xuICAgIHNldEdhbGxlcnlJbWFnZXMocHJldiA9PiBwcmV2LmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaWR4KSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXRpdGxlLnRyaW0oKSkge1xuICAgICAgc2V0QWN0aXZlVGFiKCdiYXNpYycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRTdWJtaXR0aW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBDQVRFR09SSUVTLmZpbmQoYyA9PiBjLm5hbWUgPT09IGNhdGVnb3J5TmFtZSkgPz8gQ0FURUdPUklFU1sxXVxuICAgICAgY29uc3Qgc2VsZWN0ZWRWZW5kb3IgPSBWRU5ET1JTLmZpbmQodiA9PiB2Lm5hbWUgPT09IHZlbmRvck5hbWUpID8/IFZFTkRPUlNbMF1cblxuICAgICAgY29uc3QgY29sb3JzQXJyID0gY29sb3JzVGV4dC5zcGxpdCgnLCcpLm1hcChjID0+IGMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbilcbiAgICAgIGNvbnN0IHNpemVzQXJyID0gc2l6ZXNUZXh0LnNwbGl0KCcsJykubWFwKHMgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKVxuICAgICAgY29uc3QgYWxsSW1hZ2VzID0gW3ByaW1hcnlJbWFnZSwgLi4uZ2FsbGVyeUltYWdlc10uZmlsdGVyKEJvb2xlYW4pXG5cbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIHRpdGxlOiB0aXRsZS50cmltKCksXG4gICAgICAgIHZlbmRvcjogc2VsZWN0ZWRWZW5kb3IubmFtZSxcbiAgICAgICAgdmVuZG9ySWQ6IHNlbGVjdGVkVmVuZG9yLmlkLFxuICAgICAgICB2ZXJpZmllZDogdHJ1ZSxcbiAgICAgICAgcmF0aW5nOiA0LjgsXG4gICAgICAgIHJldmlld0NvdW50OiAxLFxuICAgICAgICBwcmljZTogbnVtUHJpY2UsXG4gICAgICAgIG9yaWdpbmFsUHJpY2U6IG51bU9yaWdQcmljZSxcbiAgICAgICAgZGlzY291bnQ6IGNhbGNEaXNjb3VudCxcbiAgICAgICAgaW1hZ2U6IHByaW1hcnlJbWFnZSxcbiAgICAgICAgaW1hZ2VzOiBhbGxJbWFnZXMsXG4gICAgICAgIGNhdGVnb3J5OiBzZWxlY3RlZENhdGVnb3J5Lm5hbWUsXG4gICAgICAgIGNhdGVnb3J5U2x1Zzogc2VsZWN0ZWRDYXRlZ29yeS5zbHVnLFxuICAgICAgICBmcmVlU2hpcHBpbmcsXG4gICAgICAgIGJhZGdlOiBiYWRnZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIHN0b2NrOiBwYXJzZUludChzdG9jaykgfHwgMTAsXG4gICAgICAgIGluc3RhbGxtZW50OiBpbnN0YWxsbWVudC50cmltKCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udHJpbSgpIHx8ICdObyBkZXNjcmlwdGlvbiBwcm92aWRlZC4nLFxuICAgICAgICBmZWF0dXJlcyxcbiAgICAgICAgY29sb3JzOiBjb2xvcnNBcnIsXG4gICAgICAgIHNpemVzOiBzaXplc0FycixcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMudG9Mb3dlckNhc2UoKSxcbiAgICAgIH1cblxuICAgICAgYXdhaXQgb25TYXZlKHBheWxvYWQpXG4gICAgICBvbkNsb3NlKClcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay82MCB6LTUwIGJhY2tkcm9wLWJsdXItc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHNtOnAtNiBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gdy1mdWxsIG1heC13LTN4bCBzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIG1heC1oLVs5MHZoXVwiPlxuXG4gICAgICAgIHsvKiBNb2RhbCBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGJnLVsjRjlGOUZDXSBib3JkZXItYiBib3JkZXItWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtMnhsIGJnLVsjRTg0NTBBXS8xMCBib3JkZXIgYm9yZGVyLVsjRTg0NTBBXS8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgIOKcqFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj5BZGQgTmV3IFByb2R1Y3Q8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+Q3JlYXRlIGEgbmV3IGNhdGFsb2cgaXRlbSBtYXRjaGluZyB0aGUgc3RvcmVmcm9udCBzcGVjaWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1bI0Y0RjRGOF0gaG92ZXI6YmctWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyM2QjZCODJdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDinJVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vZGFsIFRhYnMgTmF2aWdhdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IGJvcmRlci1iIGJvcmRlci1bI0UyRTJFQ10gYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgb3ZlcmZsb3cteC1hdXRvIHNjcm9sbC1jb250YWluZXIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdXCI+XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIHsga2V5OiAnYmFzaWMnLCBsYWJlbDogJzEuIEJhc2ljIEluZm8nIH0sXG4gICAgICAgICAgICB7IGtleTogJ3ByaWNpbmcnLCBsYWJlbDogJzIuIFByaWNpbmcgJiBTdG9jaycgfSxcbiAgICAgICAgICAgIHsga2V5OiAnbWVkaWEnLCBsYWJlbDogJzMuIEltYWdlcyAmIEdhbGxlcnknIH0sXG4gICAgICAgICAgICB7IGtleTogJ3ZhcmlhbnRzJywgbGFiZWw6ICc0LiBDb2xvcnMgJiBGZWF0dXJlcycgfSxcbiAgICAgICAgICAgIHsga2V5OiAncHVibGlzaCcsIGxhYmVsOiAnNS4gUHVibGlzaGluZycgfSxcbiAgICAgICAgICBdLm1hcCh0ID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXt0LmtleX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHQua2V5IGFzIHR5cGVvZiBhY3RpdmVUYWIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0zIHB4LTMgYm9yZGVyLWItMiB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4LXNocmluay0wICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSB0LmtleVxuICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLVsjRTg0NTBBXSB0ZXh0LVsjRTg0NTBBXSBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1bIzExMTExOF0nXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dC5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRm9ybSBCb2R5ICovfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtNiBzcGFjZS15LTZcIj5cblxuICAgICAgICAgIHsvKiDilIDilIAgVEFCIDE6IEJBU0lDIElORk8g4pSA4pSAICovfVxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdiYXNpYycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyMxMTExMThdXCI+XG4gICAgICAgICAgICAgICAgICBQcm9kdWN0IFRpdGxlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNFMTFENDhdXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBTb255IFdILTEwMDBYTTUgV2lyZWxlc3MgSGVhZHBob25lc1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xLjUgdy1mdWxsIGgtMTEgcHgtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjMTExMTE4XVwiPlZlbmRvciAvIFNlbGxlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2ZW5kb3JOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWZW5kb3JOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMS41IHctZnVsbCBoLTExIHB4LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtWRU5ET1JTLm1hcCh2ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17di5pZH0gdmFsdWU9e3YubmFtZX0+e3YubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyMxMTExMThdXCI+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2F0ZWdvcnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDYXRlZ29yeU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xLjUgdy1mdWxsIGgtMTEgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge0NBVEVHT1JJRVMubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjLnNsdWd9IHZhbHVlPXtjLm5hbWV9PntjLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjMTExMTE4XVwiPlByb21vdGlvbmFsIEJhZGdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEuNSBmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICcnLCBsYWJlbDogJ05vbmUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnbmV3JywgbGFiZWw6ICfwn4aVIE5ldyBBcnJpdmFsJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2Jlc3RzZWxsZXInLCBsYWJlbDogJ/CflKUgQmVzdCBTZWxsZXInIH0sXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnZmxhc2gnLCBsYWJlbDogJ+KaoSBGbGFzaCBTYWxlJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3Nwb25zb3JlZCcsIGxhYmVsOiAn4q2QIFNwb25zb3JlZCcgfSxcbiAgICAgICAgICAgICAgICAgIF0ubWFwKGIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtiLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRCYWRnZShiLmtleSBhcyB0eXBlb2YgYmFkZ2UpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHJvdW5kZWQteGwgdGV4dC14cyBmb250LXNlbWlib2xkIGJvcmRlciB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UgPT09IGIua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlIGJvcmRlci1bI0U4NDUwQV0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLVsjRjlGOUZDXSBib3JkZXItWyNFMkUyRUNdIHRleHQtWyM2QjZCODJdIGhvdmVyOmJvcmRlci1bIzExMTExOF0nXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Yi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyMxMTExMThdXCI+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciByaWNoIGRldGFpbGVkIHByb2R1Y3QgZGVzY3JpcHRpb24sIHNwZWNpZmljYXRpb25zLCBhbmQgb3ZlcnZpZXcuLi5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMS41IHctZnVsbCBwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIOKUgOKUgCBUQUIgMjogUFJJQ0lORyAmIElOVkVOVE9SWSDilIDilIAgKi99XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3ByaWNpbmcnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyMxMTExMThdXCI+XG4gICAgICAgICAgICAgICAgICAgIFNlbGxpbmcgUHJpY2UgKCQpIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNFMTFENDhdXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxNDkuOTlcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMS41IHctZnVsbCBoLTExIHB4LTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjMTExMTE4XVwiPk9yaWdpbmFsIFByaWNlICgkKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxOTkuOTlcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3JpZ2luYWxQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0T3JpZ2luYWxQcmljZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEuNSB3LWZ1bGwgaC0xMSBweC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gZm9udC1tb25vIHRleHQtWyM2QjZCODJdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjMTExMTE4XVwiPkNhbGN1bGF0ZWQgRGlzY291bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xLjUgaC0xMSBweC00IHJvdW5kZWQteGwgYmctWyNGRkYxRjJdIGJvcmRlciBib3JkZXItWyNGRUNBQ0FdIGZsZXggaXRlbXMtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtWyNFMTFENDhdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYWxjRGlzY291bnQgPiAwID8gYC0ke2NhbGNEaXNjb3VudH0lIE9mZmAgOiAnTm8gRGlzY291bnQnfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyMxMTExMThdXCI+U3RvY2sgUXVhbnRpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0b2NrfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdG9jayhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEuNSB3LWZ1bGwgaC0xMSBweC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gZm9udC1tb25vIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjMTExMTE4XVwiPkluc3RhbGxtZW50IFRlcm1zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwib3IgJDEyLjUwL21vIGZvciAxMiBtb3NcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5zdGFsbG1lbnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEluc3RhbGxtZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMS41IHctZnVsbCBoLTExIHB4LTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC00IHJvdW5kZWQteGwgYmctWyNGMEZERjRdIGJvcmRlciBib3JkZXItWyNCQkY3RDBdIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZnJlZVNoaXBwaW5nfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGcmVlU2hpcHBpbmcoZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgYWNjZW50LVsjMDU5NjY5XVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bIzA2NUY0Nl1cIj5GcmVlIFNoaXBwaW5nIE9mZmVyZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzA0Nzg1N11cIj5CdXllcnMgc2VlIGEgJmxkcXVvO0ZyZWUgRGVsaXZlcnkmcmRxdW87IGJhZGdlIG9uIHByb2R1Y3QgY2FyZHMgJiBwYWdlLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiDilIDilIAgVEFCIDM6IE1FRElBICYgR0FMTEVSWSDilIDilIAgKi99XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ21lZGlhJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzExMTExOF1cIj5QcmltYXJ5IENvdmVyIEltYWdlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xLjUgZmxleCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS8uLi5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpbWFyeUltYWdlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcmltYXJ5SW1hZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgaC0xMSBweC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFByZXNldHMgKi99XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIG1iLTJcIj5PciBQaWNrIGEgSGlnaC1SZXMgVW5zcGxhc2ggUHJlc2V0OjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgc206Z3JpZC1jb2xzLTYgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtQUkVTRVRfSU1BR0VTLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcmltYXJ5SW1hZ2UocC51cmwpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGFzcGVjdC1zcXVhcmUgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTIgdHJhbnNpdGlvbi1hbGwgZ3JvdXAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJbWFnZSA9PT0gcC51cmwgPyAnYm9yZGVyLVsjRTg0NTBBXSByaW5nLTIgcmluZy1bI0U4NDUwQV0vMzAnIDogJ2JvcmRlci1bI0UyRTJFQ10nXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cC51cmx9IGFsdD17cC5sYWJlbH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBpbnNldC14LTAgYmctYmxhY2svNjAgdGV4dC13aGl0ZSB0ZXh0LVs5cHhdIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBweS0wLjUgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIENvdmVyIFByZXZpZXcgKi99XG4gICAgICAgICAgICAgIHtwcmltYXJ5SW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtMnhsIGJnLVsjRjlGOUZDXSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJpbWFyeUltYWdlfSBhbHQ9XCJDb3ZlciBwcmV2aWV3XCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LVsjMDU5NjY5XVwiPuKckyBQcmltYXJ5IENvdmVyIFNldDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjNkI2QjgyXSBtdC0wLjVcIj5UaGlzIGltYWdlIHdpbGwgYXBwZWFyIG9uIGNhdGFsb2cgZ3JpZHMgYW5kIHRvcCB0aHVtYm5haWwuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIEFkZGl0aW9uYWwgR2FsbGVyeSBJbWFnZXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBib3JkZXItdCBib3JkZXItWyNFMkUyRUNdXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjMTExMTE4XVwiPkdhbGxlcnkgSW1hZ2VzIChUaHVtYm5haWwgU2xpZGVyKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYWRkaXRpb25hbCBpbWFnZSBVUkwuLi5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3R2FsbGVyeVVybH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3R2FsbGVyeVVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBoLTEwIHB4LTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gdGV4dC1zbSB0ZXh0LVsjMTExMTE4XSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjRTg0NTBBXVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkR2FsbGVyeUltYWdlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IGgtMTAgcm91bmRlZC14bCBiZy1bIzExMTExOF0gdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBJbWFnZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBmbGV4LXdyYXAgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIHtnYWxsZXJ5SW1hZ2VzLm1hcCgoaW1nVXJsLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xNiBoLTE2IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1VybH0gYWx0PXtgR2FsbGVyeSAke2lkeH1gfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVHYWxsZXJ5SW1hZ2UoaWR4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xIHJpZ2h0LTEgdy01IGgtNSByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCB0ZXh0LXdoaXRlIHRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3BhY2l0eS05MCBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg4pyVXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiDilIDilIAgVEFCIDQ6IFZBUklBTlRTICYgRkVBVFVSRVMg4pSA4pSAICovfVxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICd2YXJpYW50cycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyMxMTExMThdXCI+Q29sb3IgVmFyaWFudHMgKENvbW1hIFNlcGFyYXRlZCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGFjZSBHcmF5LCBTaWx2ZXIsIE1pZG5pZ2h0IEJsdWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbG9yc1RleHR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDb2xvcnNUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEuNSB3LWZ1bGwgaC0xMSBweC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjMTExMTE4XVwiPlNpemUgLyBTdG9yYWdlIFNwZWNzIChDb21tYSBTZXBhcmF0ZWQpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTI4R0IsIDI1NkdCLCA1MTJHQiBPUiBTbWFsbCwgTWVkaXVtLCBMYXJnZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2l6ZXNUZXh0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2l6ZXNUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEuNSB3LWZ1bGwgaC0xMSBweC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBLZXkgRmVhdHVyZXMgTGlzdCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIGJvcmRlci10IGJvcmRlci1bI0UyRTJFQ11cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyMxMTExMThdXCI+S2V5IEZlYXR1cmVzIChEaXNwbGF5ZWQgb24gUHJvZHVjdCBQYWdlKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBBY3RpdmUgTm9pc2UgQ2FuY2VsbGF0aW9uIHdpdGggZHVhbCBjaGlwc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdGZWF0dXJlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3RmVhdHVyZVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4gZS5rZXkgPT09ICdFbnRlcicgJiYgKGUucHJldmVudERlZmF1bHQoKSwgaGFuZGxlQWRkRmVhdHVyZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGgtMTAgcHgtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIGJnLVsjRjlGOUZDXSB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRGZWF0dXJlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IGgtMTAgcm91bmRlZC14bCBiZy1bIzExMTExOF0gdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0U4NDUwQV0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBGZWF0dXJlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0zIHJvdW5kZWQteGwgYmctWyNGOUY5RkNdIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMTExMTE4XSBmb250LW1lZGl1bVwiPuKckyB7ZmVhdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGZWF0dXJlKGlkeCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgaG92ZXI6dW5kZXJsaW5lIGZvbnQtc2VtaWJvbGQgbWwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiDilIDilIAgVEFCIDU6IFBVQkxJU0hJTkcg4pSA4pSAICovfVxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdwdWJsaXNoJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzExMTExOF1cIj5QdWJsaXNoaW5nIFN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXR1cygnUFVCTElTSEVEJyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNSByb3VuZGVkLTJ4bCBib3JkZXItMiB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPT09ICdQVUJMSVNIRUQnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItWyMwNTk2NjldIGJnLVsjRjBGREY0XSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1bI0UyRTJFQ10gYmctWyNGOUY5RkNdIGhvdmVyOmJvcmRlci1bIzExMTExOF0nXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gdGV4dC1bIzA2NUY0Nl1cIj7wn5qAIFB1Ymxpc2hlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09PSAnUFVCTElTSEVEJyAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyMwNTk2NjldIGZvbnQtYm9sZFwiPkFjdGl2ZTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyMwNDc4NTddXCI+UHJvZHVjdCB3aWxsIGltbWVkaWF0ZWx5IGJlIGxpdmUgb24gdGhlIHN0b3JlZnJvbnQgYW5kIHNlYXJjaCByZXN1bHRzLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMoJ0RSQUZUJyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNSByb3VuZGVkLTJ4bCBib3JkZXItMiB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPT09ICdEUkFGVCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1bIzZCNkI4Ml0gYmctWyNGNEY0RjhdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y5RjlGQ10gaG92ZXI6Ym9yZGVyLVsjMTExMTE4XSdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB0ZXh0LVsjMTExMTE4XVwiPvCfk50gRHJhZnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXR1cyA9PT0gJ0RSQUZUJyAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdIGZvbnQtYm9sZFwiPlNhdmVkIERyYWZ0PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzZCNkI4Ml1cIj5TYXZlZCBpbiBhZG1pbiBjYXRhbG9nIG9ubHkuIFdpbGwgbm90IGFwcGVhciBvbiB0aGUgc3RvcmVmcm9udCB5ZXQuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBTdW1tYXJ5IENhcmQgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLVsjRkZGN0Y1XSBib3JkZXIgYm9yZGVyLVsjRkVDQUNBXSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1bI0U4NDUwQV1cIj5Qcm9kdWN0IFByZXZpZXcgU3VtbWFyeTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHB0LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcmltYXJ5SW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLXhsIG9iamVjdC1jb3ZlciBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXVwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPnt0aXRsZSB8fCAnVW50aXRsZWQgUHJvZHVjdCd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e3ZlbmRvck5hbWV9IMK3IHtjYXRlZ29yeU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1bI0U4NDUwQV0gbXQtMC41XCI+JHtudW1QcmljZS50b0ZpeGVkKDIpfSB7Y2FsY0Rpc2NvdW50ID4gMCAmJiBgKC0ke2NhbGNEaXNjb3VudH0lKWB9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIHsvKiBNb2RhbCBGb290ZXIgQ29udHJvbHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGJnLVsjRjlGOUZDXSBib3JkZXItdCBib3JkZXItWyNFMkUyRUNdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRTJFMkVDXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICB7YWN0aXZlVGFiICE9PSAncHVibGlzaCcgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0YWJzQXJyOiB0eXBlb2YgYWN0aXZlVGFiW10gPSBbJ2Jhc2ljJywgJ3ByaWNpbmcnLCAnbWVkaWEnLCAndmFyaWFudHMnLCAncHVibGlzaCddXG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGFic0Fyci5pbmRleE9mKGFjdGl2ZVRhYikgKyAxXG4gICAgICAgICAgICAgICAgICBpZiAobmV4dElkeCA8IHRhYnNBcnIubGVuZ3RoKSBzZXRBY3RpdmVUYWIodGFic0FycltuZXh0SWR4XSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IHJvdW5kZWQteGwgYmctWyMxMTExMThdIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgaG92ZXI6YmctWyNFODQ1MEFdIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5leHQgU3RlcCDihpJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8ICF0aXRsZS50cmltKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0yLjUgcm91bmRlZC14bCBiZy1bI0U4NDUwQV0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBob3ZlcjpiZy1bI0M5M0EwN10gdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LWxnIHNoYWRvdy1bI0U4NDUwQV0vMjAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3VibWl0dGluZyA/ICdDcmVhdGluZyBQcm9kdWN0Li4uJyA6ICfinJMgQ3JlYXRlIFByb2R1Y3QnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBZG1pblNlY3Rpb24gfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnQC9zdGF0ZS9zZXNzaW9uLXN0b3JlJ1xuaW1wb3J0IHsgdXNlQ2F0YWxvZyB9IGZyb20gJ0Avc3RhdGUvY2F0YWxvZy1zdG9yZSdcbmltcG9ydCBBZGRQcm9kdWN0TW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9BZGRQcm9kdWN0TW9kYWwnXG5pbXBvcnQge1xuICBjcmVhdGVBZG1pblByb2R1Y3QsXG4gIGRlbGV0ZUFkbWluUHJvZHVjdCxcbiAgbGlzdEFkbWluUHJvZHVjdHMsXG4gIHVwZGF0ZUFkbWluUHJvZHVjdCxcbiAgdHlwZSBBZG1pblByb2R1Y3QsXG59IGZyb20gJ0AvYXBpL2FkbWluJ1xuaW1wb3J0IHR5cGUgeyBQcm9kdWN0IH0gZnJvbSAnQC9kYXRhL21hcmtldHBsYWNlJ1xuXG50eXBlIFByb3BzID0geyBvbk5hdmlnYXRlOiAoczogQWRtaW5TZWN0aW9uKSA9PiB2b2lkIH1cblxuY29uc3QgU1RBVFVTX0JBREdFOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBwdWJsaXNoZWQ6ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nLFxuICBkcmFmdDogJ2JnLVsjRjRGNEY4XSB0ZXh0LVsjNUI1QjcyXScsXG4gIHNjaGVkdWxlZDogJ2JnLVsjRUVGMkZGXSB0ZXh0LVsjNDMzOENBXScsXG4gIGFyY2hpdmVkOiAnYmctWyNGNEY0RjhdIHRleHQtWyM5QjlCQjhdJyxcbn1cblxuZnVuY3Rpb24gZm9ybWF0U2t1KHByb2R1Y3Q6IEFkbWluUHJvZHVjdCkge1xuICByZXR1cm4gYFNLVS0ke3Byb2R1Y3QuaWQuc2xpY2UoMCwgOCkudG9VcHBlckNhc2UoKX1gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzQWRtaW4oeyBvbk5hdmlnYXRlOiBfIH06IFByb3BzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcbiAgY29uc3QgeyBhZGRQcm9kdWN0OiBhZGRUb0NhdGFsb2dTdG9yZSB9ID0gdXNlQ2F0YWxvZygpXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxTZXQ8c3RyaW5nPj4obmV3IFNldCgpKVxuICBjb25zdCBbc3RhdHVzRmlsdGVyLCBzZXRTdGF0dXNGaWx0ZXJdID0gdXNlU3RhdGUoJ2FsbCcpXG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZSgnc2FsZXMnKVxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPEFkbWluUHJvZHVjdFtdPihbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbYnVzeUlkLCBzZXRCdXN5SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3Nob3dBZGRNb2RhbCwgc2V0U2hvd0FkZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXNzaW9uLnRva2VuKSByZXR1cm5cblxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaXN0QWRtaW5Qcm9kdWN0cyhzZXNzaW9uLnRva2VuISwgeyBxOiBzZWFyY2ggfHwgdW5kZWZpbmVkLCBzdGF0dXM6IHN0YXR1c0ZpbHRlciA9PT0gJ2FsbCcgPyB1bmRlZmluZWQgOiBzdGF0dXNGaWx0ZXIsIGxpbWl0OiAxMDAgfSlcblxuICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG5cbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIHNldEl0ZW1zKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHNldEVycm9yKG51bGwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJdGVtcyhbXSlcbiAgICAgICAgc2V0RXJyb3IocmVzcG9uc2UuZXJyb3IubWVzc2FnZSlcbiAgICAgIH1cblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9KSgpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgfSwgW3Nlc3Npb24udG9rZW4sIHNlYXJjaCwgc3RhdHVzRmlsdGVyXSlcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIocHJvZHVjdCA9PiB7XG4gICAgICBjb25zdCBtYXRjaFNlYXJjaCA9XG4gICAgICAgICFzZWFyY2ggfHxcbiAgICAgICAgcHJvZHVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICBwcm9kdWN0LnZlbmRvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICBmb3JtYXRTa3UocHJvZHVjdCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgIGNvbnN0IG1hdGNoU3RhdHVzID0gc3RhdHVzRmlsdGVyID09PSAnYWxsJyB8fCBwcm9kdWN0LnN0YXR1cyA9PT0gc3RhdHVzRmlsdGVyXG4gICAgICByZXR1cm4gbWF0Y2hTZWFyY2ggJiYgbWF0Y2hTdGF0dXNcbiAgICB9KVxuICB9LCBbaXRlbXMsIHNlYXJjaCwgc3RhdHVzRmlsdGVyXSlcblxuICBjb25zdCBzb3J0ZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gWy4uLmZpbHRlcmVkXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoc29ydEJ5ID09PSAnc2FsZXMnKSByZXR1cm4gYi5yZXZpZXdDb3VudCAtIGEucmV2aWV3Q291bnRcbiAgICAgIGlmIChzb3J0QnkgPT09ICdwcmljZScpIHJldHVybiBiLnByaWNlIC0gYS5wcmljZVxuICAgICAgaWYgKHNvcnRCeSA9PT0gJ3N0b2NrJykgcmV0dXJuIGEuc3RvY2sgLSBiLnN0b2NrXG4gICAgICBpZiAoc29ydEJ5ID09PSAncmF0aW5nJykgcmV0dXJuIGIucmF0aW5nIC0gYS5yYXRpbmdcbiAgICAgIHJldHVybiAwXG4gICAgfSlcbiAgfSwgW2ZpbHRlcmVkLCBzb3J0QnldKVxuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWQocHJldiA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gbmV3IFNldChwcmV2KVxuICAgICAgaWYgKG5leHQuaGFzKGlkKSkgbmV4dC5kZWxldGUoaWQpXG4gICAgICBlbHNlIG5leHQuYWRkKGlkKVxuICAgICAgcmV0dXJuIG5leHRcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWxsU2VsZWN0ZWQgPSBzb3J0ZWQubGVuZ3RoID4gMCAmJiBzb3J0ZWQuZXZlcnkocCA9PiBzZWxlY3RlZC5oYXMocC5pZCkpXG4gIGNvbnN0IHRvZ2dsZUFsbCA9ICgpID0+IHtcbiAgICBpZiAoYWxsU2VsZWN0ZWQpIHNldFNlbGVjdGVkKG5ldyBTZXQoKSlcbiAgICBlbHNlIHNldFNlbGVjdGVkKG5ldyBTZXQoc29ydGVkLm1hcChwID0+IHAuaWQpKSlcbiAgfVxuXG4gIGNvbnN0IHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZXNzaW9uLnRva2VuKSByZXR1cm5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpc3RBZG1pblByb2R1Y3RzKHNlc3Npb24udG9rZW4sIHsgcTogc2VhcmNoIHx8IHVuZGVmaW5lZCwgc3RhdHVzOiBzdGF0dXNGaWx0ZXIgPT09ICdhbGwnID8gdW5kZWZpbmVkIDogc3RhdHVzRmlsdGVyLCBsaW1pdDogMTAwIH0pXG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgIHNldEl0ZW1zKHJlc3BvbnNlLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlU3RhdHVzID0gYXN5bmMgKHByb2R1Y3Q6IEFkbWluUHJvZHVjdCkgPT4ge1xuICAgIGlmICghc2Vzc2lvbi50b2tlbikgcmV0dXJuXG4gICAgc2V0QnVzeUlkKHByb2R1Y3QuaWQpXG4gICAgY29uc3QgbmV4dFN0YXR1cyA9IHByb2R1Y3Quc3RhdHVzID09PSAncHVibGlzaGVkJyA/ICdEUkFGVCcgOiAnUFVCTElTSEVEJ1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXBkYXRlQWRtaW5Qcm9kdWN0KHNlc3Npb24udG9rZW4sIHByb2R1Y3QuaWQsIHsgc3RhdHVzOiBuZXh0U3RhdHVzIH0pXG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgIGF3YWl0IHJlZnJlc2goKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihyZXNwb25zZS5lcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgICBzZXRCdXN5SWQobnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZlYXR1cmVUb2dnbGUgPSBhc3luYyAocHJvZHVjdDogQWRtaW5Qcm9kdWN0KSA9PiB7XG4gICAgaWYgKCFzZXNzaW9uLnRva2VuKSByZXR1cm5cbiAgICBzZXRCdXN5SWQocHJvZHVjdC5pZClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZUFkbWluUHJvZHVjdChzZXNzaW9uLnRva2VuLCBwcm9kdWN0LmlkLCB7IGZlYXR1cmVkOiBwcm9kdWN0LmJhZGdlICE9PSAnYmVzdHNlbGxlcicgfSlcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgYXdhaXQgcmVmcmVzaCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICAgIHNldEJ1c3lJZChudWxsKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHByb2R1Y3Q6IEFkbWluUHJvZHVjdCkgPT4ge1xuICAgIGlmICghc2Vzc2lvbi50b2tlbikgcmV0dXJuXG4gICAgc2V0QnVzeUlkKHByb2R1Y3QuaWQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkZWxldGVBZG1pblByb2R1Y3Qoc2Vzc2lvbi50b2tlbiwgcHJvZHVjdC5pZClcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgYXdhaXQgcmVmcmVzaCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICAgIHNldEJ1c3lJZChudWxsKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0RGF0YTogUGFydGlhbDxBZG1pblByb2R1Y3Q+ICYgUGFydGlhbDxQcm9kdWN0PikgPT4ge1xuICAgIGNvbnN0IG5ld0lkID0gYHByb2RfJHtEYXRlLm5vdygpfWBcbiAgICBjb25zdCBmdWxsUHJvZHVjdDogQWRtaW5Qcm9kdWN0ID0ge1xuICAgICAgaWQ6IG5ld0lkLFxuICAgICAgdGl0bGU6IHByb2R1Y3REYXRhLnRpdGxlID8/ICdVbnRpdGxlZCBQcm9kdWN0JyxcbiAgICAgIHZlbmRvcjogcHJvZHVjdERhdGEudmVuZG9yID8/ICdNYXJrZXRwbGFjZScsXG4gICAgICB2ZW5kb3JJZDogcHJvZHVjdERhdGEudmVuZG9ySWQgPz8gJ3YxJyxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgICAgcmF0aW5nOiA1LjAsXG4gICAgICByZXZpZXdDb3VudDogMCxcbiAgICAgIHByaWNlOiBwcm9kdWN0RGF0YS5wcmljZSA/PyAwLFxuICAgICAgb3JpZ2luYWxQcmljZTogcHJvZHVjdERhdGEub3JpZ2luYWxQcmljZSA/PyBwcm9kdWN0RGF0YS5wcmljZSA/PyAwLFxuICAgICAgZGlzY291bnQ6IHByb2R1Y3REYXRhLmRpc2NvdW50ID8/IDAsXG4gICAgICBpbWFnZTogcHJvZHVjdERhdGEuaW1hZ2UgPz8gJycsXG4gICAgICBpbWFnZXM6IHByb2R1Y3REYXRhLmltYWdlcyA/PyBbcHJvZHVjdERhdGEuaW1hZ2UgPz8gJyddLFxuICAgICAgY2F0ZWdvcnk6IHByb2R1Y3REYXRhLmNhdGVnb3J5ID8/ICdFbGVjdHJvbmljcycsXG4gICAgICBjYXRlZ29yeVNsdWc6IHByb2R1Y3REYXRhLmNhdGVnb3J5U2x1ZyA/PyAnZWxlY3Ryb25pY3MnLFxuICAgICAgZnJlZVNoaXBwaW5nOiBwcm9kdWN0RGF0YS5mcmVlU2hpcHBpbmcgPz8gZmFsc2UsXG4gICAgICBiYWRnZTogcHJvZHVjdERhdGEuYmFkZ2UsXG4gICAgICBzdG9jazogcHJvZHVjdERhdGEuc3RvY2sgPz8gMTAsXG4gICAgICBpbnN0YWxsbWVudDogcHJvZHVjdERhdGEuaW5zdGFsbG1lbnQsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdERhdGEuZGVzY3JpcHRpb24sXG4gICAgICBzdGF0dXM6IHByb2R1Y3REYXRhLnN0YXR1cyA/PyAncHVibGlzaGVkJyxcbiAgICB9XG5cbiAgICBpZiAoc2Vzc2lvbi50b2tlbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY3JlYXRlQWRtaW5Qcm9kdWN0KHNlc3Npb24udG9rZW4sIHtcbiAgICAgICAgICB0aXRsZTogZnVsbFByb2R1Y3QudGl0bGUsXG4gICAgICAgICAgdmVuZG9ySWQ6IGZ1bGxQcm9kdWN0LnZlbmRvcklkLFxuICAgICAgICAgIHZlbmRvcjogZnVsbFByb2R1Y3QudmVuZG9yLFxuICAgICAgICAgIGNhdGVnb3J5OiBmdWxsUHJvZHVjdC5jYXRlZ29yeSxcbiAgICAgICAgICBwcmljZTogZnVsbFByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgb3JpZ2luYWxQcmljZTogZnVsbFByb2R1Y3Qub3JpZ2luYWxQcmljZSxcbiAgICAgICAgICBkaXNjb3VudDogZnVsbFByb2R1Y3QuZGlzY291bnQsXG4gICAgICAgICAgc3RvY2s6IGZ1bGxQcm9kdWN0LnN0b2NrLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBmdWxsUHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBpbWFnZTogZnVsbFByb2R1Y3QuaW1hZ2UsXG4gICAgICAgICAgaW1hZ2VzOiBmdWxsUHJvZHVjdC5pbWFnZXMsXG4gICAgICAgICAgZnJlZVNoaXBwaW5nOiBmdWxsUHJvZHVjdC5mcmVlU2hpcHBpbmcsXG4gICAgICAgICAgYmFkZ2U6IGZ1bGxQcm9kdWN0LmJhZGdlLFxuICAgICAgICAgIGluc3RhbGxtZW50OiBmdWxsUHJvZHVjdC5pbnN0YWxsbWVudCxcbiAgICAgICAgICBzdGF0dXM6IGZ1bGxQcm9kdWN0LnN0YXR1cy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEZhbGxiYWNrIGZvciBkZXYgbW9kZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBsb2NhbCB0YWJsZSBpdGVtc1xuICAgIHNldEl0ZW1zKHByZXYgPT4gW2Z1bGxQcm9kdWN0LCAuLi5wcmV2XSlcblxuICAgIC8vIFVwZGF0ZSBnbG9iYWwgc3RvcmVmcm9udCBjYXRhbG9nIHNvIG5ldyBwcm9kdWN0IGlzIHZpc2libGUgbGl2ZSBvbiBmcm9udGVuZCFcbiAgICBhZGRUb0NhdGFsb2dTdG9yZSh7XG4gICAgICBpZDogZnVsbFByb2R1Y3QuaWQsXG4gICAgICB0aXRsZTogZnVsbFByb2R1Y3QudGl0bGUsXG4gICAgICB2ZW5kb3I6IGZ1bGxQcm9kdWN0LnZlbmRvcixcbiAgICAgIHZlbmRvcklkOiBmdWxsUHJvZHVjdC52ZW5kb3JJZCxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgICAgcmF0aW5nOiA1LjAsXG4gICAgICByZXZpZXdDb3VudDogMCxcbiAgICAgIHByaWNlOiBmdWxsUHJvZHVjdC5wcmljZSxcbiAgICAgIG9yaWdpbmFsUHJpY2U6IGZ1bGxQcm9kdWN0Lm9yaWdpbmFsUHJpY2UsXG4gICAgICBkaXNjb3VudDogZnVsbFByb2R1Y3QuZGlzY291bnQsXG4gICAgICBpbWFnZTogZnVsbFByb2R1Y3QuaW1hZ2UsXG4gICAgICBpbWFnZXM6IGZ1bGxQcm9kdWN0LmltYWdlcyxcbiAgICAgIGNhdGVnb3J5OiBmdWxsUHJvZHVjdC5jYXRlZ29yeSxcbiAgICAgIGNhdGVnb3J5U2x1ZzogZnVsbFByb2R1Y3QuY2F0ZWdvcnlTbHVnLFxuICAgICAgZnJlZVNoaXBwaW5nOiBmdWxsUHJvZHVjdC5mcmVlU2hpcHBpbmcsXG4gICAgICBiYWRnZTogZnVsbFByb2R1Y3QuYmFkZ2UsXG4gICAgICBzdG9jazogZnVsbFByb2R1Y3Quc3RvY2ssXG4gICAgICBpbnN0YWxsbWVudDogZnVsbFByb2R1Y3QuaW5zdGFsbG1lbnQsXG4gICAgICBjb2xvcnM6IHByb2R1Y3REYXRhLmNvbG9ycyxcbiAgICAgIHNpemVzOiBwcm9kdWN0RGF0YS5zaXplcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBmdWxsUHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgIGZlYXR1cmVzOiBwcm9kdWN0RGF0YS5mZWF0dXJlcyxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSBwLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPlByb2R1Y3RzPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wLjUgdGV4dC1zbSB0ZXh0LVsjNkI2QjgyXVwiPk1hbmFnZSB5b3VyIG1hcmtldHBsYWNlIGNhdGFsb2c8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzZCNkI4Ml0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNCB3LTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNCAxNnYxYTMgMyAwIDAwMyAzaDEwYTMgMyAwIDAwMy0zdi0xbS00LThsLTQtNG0wIDBMOCA4bTQtNHYxMlwiIC8+PC9zdmc+XG4gICAgICAgICAgICBJbXBvcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXhsIGJnLVsjRTg0NTBBXSBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctWyNDOTNBMDddIHNoYWRvdy1zbSBzaGFkb3ctWyNFODQ1MEFdLzIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNCB3LTRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mi41fT48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiA0djE2bTgtOEg0XCIgLz48L3N2Zz5cbiAgICAgICAgICAgIEFkZCBQcm9kdWN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZSBwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi13LVsyMDBweF0gZmxleC0xXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyB0b3AtMS8yIGgtNCB3LTQgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LVsjOUI5QkI4XVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdHMsIHRpdGxlLCB2ZW5kb3IuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gYmctWyNGNEY0RjhdIHBsLTkgcHItNCB0ZXh0LXNtIHRleHQtWyMxMTExMThdIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBwbGFjZWhvbGRlcjp0ZXh0LVsjOUI5QkI4XSBmb2N1czpib3JkZXItWyNFODQ1MEFdXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHJvdW5kZWQtbGcgYmctWyNGNEY0RjhdIHAtMVwiPlxuICAgICAgICAgICAge1snYWxsJywgJ3B1Ymxpc2hlZCcsICdkcmFmdCcsICdhcmNoaXZlZCddLm1hcChzID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17c31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXNGaWx0ZXIocyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1tZCBweC0zIHB5LTEgdGV4dC14cyBmb250LXNlbWlib2xkIGNhcGl0YWxpemUgdHJhbnNpdGlvbi1hbGwgJHtzdGF0dXNGaWx0ZXIgPT09IHMgPyAnYmctd2hpdGUgdGV4dC1bIzExMTExOF0gc2hhZG93LXNtJyA6ICd0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjNkI2QjgyXSd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9e3NvcnRCeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNvcnRCeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy1bI0Y0RjRGOF0gcHgtMyBwci04IHRleHQtc20gdGV4dC1bIzExMTExOF0gb3V0bGluZS1ub25lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FsZXNcIj5Tb3J0OiBUb3AgUmV2aWV3czwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlXCI+U29ydDogUHJpY2U8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdG9ja1wiPlNvcnQ6IExvdyBTdG9jazwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdGluZ1wiPlNvcnQ6IFJhdGluZzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNGRUNBQ0FdIGJnLVsjRkVGMkYyXSBweC00IHB5LTMgdGV4dC1zbSB0ZXh0LVsjOTkxQjFCXVwiPlxuICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtzZWxlY3RlZC5zaXplID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJvcmRlci10IGJvcmRlci1bI0Y0RjRGOF0gcHQtM1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e3NlbGVjdGVkLnNpemV9IHNlbGVjdGVkPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZXNzaW9uLnRva2VuKSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVBZG1pblByb2R1Y3Qoc2Vzc2lvbi50b2tlbiwgaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG5ldyBTZXQoKSlcbiAgICAgICAgICAgICAgICBhd2FpdCByZWZyZXNoKClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1bI0ZFRTJFMl0gcHgtMyBweS0xIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOTkxQjFCXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlbGV0ZSBTZWxlY3RlZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKG5ldyBTZXQoKSl9IGNsYXNzTmFtZT1cIm1sLWF1dG8gdGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBob3Zlcjp0ZXh0LVsjNkI2QjgyXVwiPlxuICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XSBiZy1bI0Y5RjlGQ11cIj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidy0xMCBweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXthbGxTZWxlY3RlZH0gb25DaGFuZ2U9e3RvZ2dsZUFsbH0gY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXItWyNFMkUyRUNdIGFjY2VudC1bI0U4NDUwQV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyM5QjlCQjhdXCI+UHJvZHVjdDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyM5QjlCQjhdXCI+Q2F0ZWdvcnk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVsjOUI5QkI4XVwiPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzlCOUJCOF1cIj5TdG9jazwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyM5QjlCQjhdXCI+UmV2aWV3czwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtWyM5QjlCQjhdXCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bIzlCOUJCOF1cIj5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17OH0gY2xhc3NOYW1lPVwicHgtNSBweS0xMiB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtWyM2QjZCODJdXCI+XG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcgcHJvZHVjdHMgZnJvbSBiYWNrZW5kLi4uXG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkgOiBzb3J0ZWQubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT17YHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLVsjRjlGOUZDXSAke3NlbGVjdGVkLmhhcyhwcm9kdWN0LmlkKSA/ICdiZy1bI0ZGRjdGNV0nIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQuaGFzKHByb2R1Y3QuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVTZWxlY3QocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXItWyNFMkUyRUNdIGFjY2VudC1bI0U4NDUwQV1cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTEwIHctMTAgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBiZy1bI0Y0RjRGOF0gdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg8J+TplxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPntwcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMC41IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XVwiPntmb3JtYXRTa3UocHJvZHVjdCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XVwiPsK3IHtwcm9kdWN0LnZlbmRvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLVsjRjRGNEY4XSBweC0yIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LVsjNkI2QjgyXVwiPntwcm9kdWN0LmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1bIzExMTExOF1cIj4ke3Byb2R1Y3QucHJpY2UudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtbW9ubyBmb250LXNlbWlib2xkICR7cHJvZHVjdC5zdG9jayA9PT0gMCA/ICd0ZXh0LVsjRTExRDQ4XScgOiBwcm9kdWN0LnN0b2NrIDwgMTAgPyAndGV4dC1bI0Q5NzcwNl0nIDogJ3RleHQtWyMxMTExMThdJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5zdG9jayA9PT0gMCA/ICdPdXQgb2YgU3RvY2snIDogcHJvZHVjdC5zdG9ja31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWyMxMTExMThdXCI+e3Byb2R1Y3QucmV2aWV3Q291bnQudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHB4LTIgcHktMC41IHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgJHtTVEFUVVNfQkFER0VbcHJvZHVjdC5zdGF0dXNdID8/IFNUQVRVU19CQURHRS5kcmFmdH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeUlkID09PSBwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBoYW5kbGVUb2dnbGVTdGF0dXMocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtNyB3LTcgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgdGV4dC1bIzlCOUJCOF0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctWyNGNEY0RjhdIGhvdmVyOnRleHQtWyMxMTExMThdIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnN0YXR1cyA9PT0gJ3B1Ymxpc2hlZCcgPyAnTW92ZSB0byBkcmFmdCcgOiAnUHVibGlzaCd9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoLTMuNSB3LTMuNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTEgNUg2YTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmgxMWEyIDIgMCAwMDItMnYtNW0tMS40MTQtOS40MTRhMiAyIDAgMTEyLjgyOCAyLjgyOEwxMS44MjggMTVIOXYtMi44MjhsOC41ODYtOC41ODZ6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5SWQgPT09IHByb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIGhhbmRsZUZlYXR1cmVUb2dnbGUocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtNyB3LTcgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgdGV4dC1bIzlCOUJCOF0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctWyNGNEY0RjhdIGhvdmVyOnRleHQtWyMxMTExMThdIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVG9nZ2xlIGZlYXR1cmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtMy41IHctMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk04IDE2SDZhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnYybS02IDEyaDhhMiAyIDAgMDAyLTJ2LThhMiAyIDAgMDAtMi0yaC04YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyelwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeUlkID09PSBwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBoYW5kbGVEZWxldGUocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtNyB3LTcgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgdGV4dC1bIzlCOUJCOF0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctWyNGRUUyRTJdIGhvdmVyOnRleHQtWyNFMTFENDhdIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHByb2R1Y3RcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaC0zLjUgdy0zLjVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE5IDdsLS44NjcgMTIuMTQyQTIgMiAwIDAxMTYuMTM4IDIxSDcuODYyYTIgMiAwIDAxLTEuOTk1LTEuODU4TDUgN201IDR2Nm00LTZ2Nm0xLTEwVjRhMSAxIDAgMDAtMS0xaC00YTEgMSAwIDAwLTEgMXYzTTQgN2gxNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItWyNGNEY0RjhdIHB4LTUgcHktM1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzlCOUJCOF1cIj5TaG93aW5nIHtzb3J0ZWQubGVuZ3RofSBvZiB7aXRlbXMubGVuZ3RofSBwcm9kdWN0czwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICB7WzEsIDIsIDMsICcuLi4nLCA0OF0ubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdHlwZW9mIHAgPT09ICdudW1iZXInICYmIHNldFBhZ2UocCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC04IHctOCByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWNvbG9ycyAke3BhZ2UgPT09IHAgPyAnYmctWyNFODQ1MEFdIHRleHQtd2hpdGUnIDogJ3RleHQtWyM2QjZCODJdIGhvdmVyOmJnLVsjRjRGNEY4XSd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8QWRkUHJvZHVjdE1vZGFsXG4gICAgICAgIGlzT3Blbj17c2hvd0FkZE1vZGFsfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93QWRkTW9kYWwoZmFsc2UpfVxuICAgICAgICBvblNhdmU9e2hhbmRsZUNyZWF0ZVByb2R1Y3R9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBVUEsSUFBTSxnQkFBZ0I7Q0FDcEI7RUFBRSxPQUFPO0VBQWMsS0FBSztDQUFnRztDQUM1SDtFQUFFLE9BQU87RUFBYyxLQUFLO0NBQWdHO0NBQzVI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