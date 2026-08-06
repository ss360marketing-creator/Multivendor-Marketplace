export type AdminSection =
  | 'dashboard'
  | 'storefront-builder'
  | 'homepage-cms'
  | 'products'
  | 'vendors'
  | 'vendors-applications'
  | 'orders'
  | 'customers'
  | 'inventory'
  | 'marketing'
  | 'analytics'
  | 'finance'
  | 'theme-customizer'
  | 'settings'
  | 'roles'
  | 'audit-logs'
  | 'seo'

export const salesData = [
  { date: 'Jan 1', revenue: 42000, orders: 284 },
  { date: 'Jan 8', revenue: 58000, orders: 341 },
  { date: 'Jan 15', revenue: 51000, orders: 298 },
  { date: 'Jan 22', revenue: 67000, orders: 412 },
  { date: 'Jan 29', revenue: 74000, orders: 438 },
  { date: 'Feb 5', revenue: 63000, orders: 389 },
  { date: 'Feb 12', revenue: 82000, orders: 502 },
  { date: 'Feb 19', revenue: 91000, orders: 561 },
  { date: 'Feb 26', revenue: 88000, orders: 537 },
  { date: 'Mar 5', revenue: 104000, orders: 612 },
  { date: 'Mar 12', revenue: 97000, orders: 579 },
  { date: 'Mar 19', revenue: 118000, orders: 694 },
]

export const categoryRevenue = [
  { name: 'Mobiles', value: 284000 },
  { name: 'Electronics', value: 198000 },
  { name: 'Fashion', value: 142000 },
  { name: 'Beauty', value: 98000 },
  { name: 'Laptops', value: 87000 },
  { name: 'Accessories', value: 64000 },
]

export const adminOrders = [
  { id: '#NX-29481', customer: 'Sarah Mitchell', vendor: 'SoundVault', product: 'Sony WH-1000XM5', amount: 279, status: 'delivered', payment: 'Stripe', date: 'Jul 24, 2025', items: 1 },
  { id: '#NX-29480', customer: 'Omar Abdullah', vendor: 'iZone Official', product: 'iPhone 15 Pro 256GB', amount: 999, status: 'shipped', payment: 'Stripe', date: 'Jul 24, 2025', items: 1 },
  { id: '#NX-29479', customer: 'Priya Kapoor', vendor: 'BeautyVault', product: 'The Ordinary Serum × 3', amount: 33, status: 'processing', payment: 'PayPal', date: 'Jul 23, 2025', items: 3 },
  { id: '#NX-29478', customer: 'James Larson', vendor: 'TechHub Pro', product: 'MacBook Air M3', amount: 1299, status: 'processing', payment: 'Stripe', date: 'Jul 23, 2025', items: 1 },
  { id: '#NX-29477', customer: 'Ana Rodriguez', vendor: 'NikeWorld', product: 'Air Max 270 + Backpack', amount: 157, status: 'pending', payment: 'COD', date: 'Jul 22, 2025', items: 2 },
  { id: '#NX-29476', customer: 'Kevin Park', vendor: 'WatchWorld', product: 'G-Shock GA-2100', amount: 99, status: 'cancelled', payment: 'Stripe', date: 'Jul 22, 2025', items: 1 },
  { id: '#NX-29475', customer: 'Lisa Thompson', vendor: 'HomeElite', product: 'Dyson Supersonic', amount: 329, status: 'refund_pending', payment: 'Stripe', date: 'Jul 21, 2025', items: 1 },
  { id: '#NX-29474', customer: 'Marco Bianchi', vendor: 'CameraHouse', product: 'Sony A7 III Body', amount: 1799, status: 'delivered', payment: 'Stripe', date: 'Jul 21, 2025', items: 1 },
]

export const adminVendors = [
  { id: 'v1', name: 'SoundVault', owner: 'David Chen', email: 'david@soundvault.com', status: 'active', verified: true, rating: 4.8, products: 284, sales: 1842, revenue: 412000, commission: 8, pendingPayout: 24800, joined: 'Mar 2023' },
  { id: 'v2', name: 'iZone Official', owner: 'Aisha Malik', email: 'aisha@izone.pk', status: 'active', verified: true, rating: 4.9, products: 142, sales: 3241, revenue: 2140000, commission: 5, pendingPayout: 89400, joined: 'Jan 2022' },
  { id: 'v3', name: 'TechHub Pro', owner: 'Raj Sharma', email: 'raj@techhubpro.co', status: 'active', verified: true, rating: 4.7, products: 421, sales: 2108, revenue: 1820000, commission: 6, pendingPayout: 41200, joined: 'Jun 2022' },
  { id: 'v4', name: 'NikeWorld', owner: 'Jessica Kim', email: 'jessica@nikeworld.us', status: 'active', verified: true, rating: 4.8, products: 892, sales: 5621, revenue: 498000, commission: 10, pendingPayout: 38400, joined: 'Nov 2021' },
  { id: 'v5', name: 'BeautyVault', owner: 'Sophie Martin', email: 'sophie@beautyvault.fr', status: 'review', verified: false, rating: 4.6, products: 198, sales: 8421, revenue: 92000, commission: 12, pendingPayout: 8200, joined: 'Sep 2024' },
  { id: 'v6', name: 'SmartGadgets', owner: 'Ali Hassan', email: 'ali@smartgadgets.ae', status: 'suspended', verified: true, rating: 3.9, products: 64, sales: 289, revenue: 142000, commission: 8, pendingPayout: 0, joined: 'Feb 2023' },
  { id: 'v7', name: 'BagShop', owner: 'Tom Fischer', email: 'tom@bagshop.de', status: 'pending', verified: false, rating: 0, products: 0, sales: 0, revenue: 0, commission: 10, pendingPayout: 0, joined: 'Jul 2025' },
]

export const adminProducts = [
  { id: '1', name: 'Sony WH-1000XM5', sku: 'SNY-WH5-BLK', vendor: 'SoundVault', category: 'Electronics', price: 279, stock: 127, status: 'published', sales: 1842, rating: 4.8 },
  { id: '2', name: 'iPhone 15 Pro 256GB', sku: 'APL-IP15P-256', vendor: 'iZone Official', category: 'Mobiles', price: 999, stock: 48, status: 'published', sales: 3241, rating: 4.9 },
  { id: '3', name: 'MacBook Air M3 512GB', sku: 'APL-MBA-M3-512', vendor: 'TechHub Pro', category: 'Laptops', price: 1299, stock: 32, status: 'published', sales: 2108, rating: 4.9 },
  { id: '4', name: 'Nike Air Max 270', sku: 'NK-AM270-BLK-10', vendor: 'NikeWorld', category: 'Fashion', price: 89, stock: 84, status: 'published', sales: 5621, rating: 4.7 },
  { id: '5', name: 'The Ordinary HA 2% + B5', sku: 'TOD-HA2B5-30', vendor: 'BeautyVault', category: 'Beauty', price: 11, stock: 9, status: 'published', sales: 12843, rating: 4.6 },
  { id: '6', name: 'Samsung Galaxy S24 Ultra', sku: 'SAM-S24U-512', vendor: 'SmartGadgets', category: 'Mobiles', price: 1149, stock: 0, status: 'draft', sales: 0, rating: 0 },
  { id: '7', name: 'Casio G-Shock GA-2100', sku: 'CSO-GA2100-BLK', vendor: 'WatchWorld', category: 'Accessories', price: 99, stock: 156, status: 'published', sales: 2934, rating: 4.8 },
  { id: '8', name: 'Dyson Supersonic', sku: 'DYS-SS-PRB', vendor: 'HomeElite', category: 'Beauty', price: 329, stock: 37, status: 'published', sales: 8743, rating: 4.8 },
]

export const alerts = [
  { type: 'warning', message: '5 products below minimum stock threshold', time: '2 min ago', action: 'View Low Stock' },
  { type: 'error', message: '2 payment failures in the last hour', time: '18 min ago', action: 'View Failures' },
  { type: 'info', message: '3 new vendor applications pending review', time: '1 hr ago', action: 'Review Now' },
  { type: 'warning', message: '1 open dispute requiring attention', time: '2 hrs ago', action: 'View Dispute' },
  { type: 'info', message: '4 refund requests awaiting approval', time: '3 hrs ago', action: 'Process Refunds' },
]

export const storefrontSections = [
  { id: 's1', type: 'Hero Banner', label: 'Summer 2025 Campaign', visible: true, scheduled: false, order: 1 },
  { id: 's2', type: 'Trust Bar', label: 'Trust indicators strip', visible: true, scheduled: false, order: 2 },
  { id: 's3', type: 'Category Grid', label: 'Shop by Category — 8 categories', visible: true, scheduled: false, order: 3 },
  { id: 's4', type: 'Product Carousel', label: 'Trending Now', visible: true, scheduled: false, order: 4 },
  { id: 's5', type: 'Flash Sale', label: 'Flash Sale — ends Jul 30', visible: true, scheduled: true, order: 5 },
  { id: 's6', type: 'Before & After', label: 'Beauty transformation', visible: true, scheduled: false, order: 6 },
  { id: 's7', type: 'Vendor Carousel', label: 'Top Stores', visible: true, scheduled: false, order: 7 },
  { id: 's8', type: 'Product Carousel', label: 'Best Sellers', visible: true, scheduled: false, order: 8 },
  { id: 's9', type: 'Brand Logos', label: 'Official Brands', visible: true, scheduled: false, order: 9 },
  { id: 's10', type: 'Product Carousel', label: 'Recommended For You', visible: false, scheduled: false, order: 10 },
  { id: 's11', type: 'UGC Reviews', label: 'Real People. Real Products.', visible: true, scheduled: false, order: 11 },
  { id: 's12', type: 'Product Grid', label: 'Just Dropped', visible: true, scheduled: false, order: 12 },
]

export const couponData = [
  { code: 'SUMMER25', type: 'Percentage', value: 25, used: 1284, limit: 5000, status: 'active', expires: 'Jul 31, 2025' },
  { code: 'FIRST10', type: 'Fixed Amount', value: 10, used: 8421, limit: null, status: 'active', expires: 'Dec 31, 2025' },
  { code: 'FREESHIP', type: 'Free Shipping', value: 0, used: 3241, limit: 10000, status: 'active', expires: 'Aug 15, 2025' },
  { code: 'FLASH50', type: 'Percentage', value: 50, used: 892, limit: 1000, status: 'expired', expires: 'Jul 20, 2025' },
  { code: 'VIP20', type: 'Percentage', value: 20, used: 124, limit: 500, status: 'scheduled', expires: 'Aug 1, 2025' },
]
