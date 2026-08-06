import { storefrontSections } from '../data/marketplace.js';
import { prisma } from '../db/index.js';
import { requirePermissions } from '../auth/guards.js';
export async function registerAdminRoutes(app) {
    app.get('/admin/dashboard/summary', { preHandler: requirePermissions(['admin.access']) }, async () => {
        const [grossOrders, customersCount, vendorsCount, productsCount, topProducts, topVendors, recentOrders, categories, lowStockProducts, pendingVendors] = await prisma.$transaction([
            prisma.order.findMany({
                select: {
                    totalAmount: true,
                    status: true,
                },
            }),
            prisma.user.count({
                where: {
                    role: 'CUSTOMER',
                },
            }),
            prisma.vendorProfile.count(),
            prisma.product.count(),
            prisma.product.findMany({
                orderBy: [{ reviewCount: 'desc' }, { stockQuantity: 'asc' }],
                take: 4,
                include: {
                    vendor: {
                        select: {
                            storeName: true,
                            verified: true,
                            rating: true,
                        },
                    },
                    category: {
                        select: {
                            name: true,
                            slug: true,
                        },
                    },
                },
            }),
            prisma.vendorProfile.findMany({
                orderBy: [{ verified: 'desc' }, { rating: 'desc' }],
                take: 3,
            }),
            prisma.order.findMany({
                orderBy: { placedAt: 'desc' },
                take: 4,
                include: {
                    customer: {
                        select: {
                            fullName: true,
                        },
                    },
                    vendor: {
                        select: {
                            storeName: true,
                        },
                    },
                    items: {
                        include: {
                            product: {
                                select: {
                                    title: true,
                                },
                            },
                        },
                    },
                },
            }),
            prisma.category.findMany({
                select: {
                    name: true,
                    slug: true,
                    _count: {
                        select: {
                            products: true,
                        },
                    },
                },
            }),
            prisma.product.findMany({
                where: {
                    stockQuantity: {
                        lte: 5,
                    },
                },
                take: 6,
                orderBy: { stockQuantity: 'asc' },
                select: {
                    id: true,
                    title: true,
                    stockQuantity: true,
                    vendorId: true,
                },
            }),
            prisma.vendorProfile.findMany({
                where: {
                    status: 'REVIEW',
                },
                take: 6,
                select: {
                    id: true,
                    storeName: true,
                    verified: true,
                    rating: true,
                },
            }),
        ]);
        const grossSales = grossOrders.reduce((sum, order) => sum + Number(order.totalAmount), 0);
        const completedOrders = grossOrders.filter(order => order.status === 'DELIVERED').length;
        const conversionRate = productsCount > 0 ? Number(((completedOrders / productsCount) * 100).toFixed(1)) : 0;
        const averageOrderValue = grossOrders.length > 0 ? Number((grossSales / grossOrders.length).toFixed(2)) : 0;
        return {
            success: true,
            data: {
                summary: {
                    grossSales,
                    netSales: grossSales,
                    orders: grossOrders.length,
                    customers: customersCount,
                    vendors: vendorsCount,
                    products: productsCount,
                    conversionRate,
                    averageOrderValue,
                },
                alerts: [
                    {
                        type: 'warning',
                        message: `${lowStockProducts.length} products below minimum stock threshold`,
                        time: '2 min ago',
                        action: 'View Low Stock',
                    },
                    {
                        type: 'info',
                        message: `${pendingVendors.length} vendor applications pending review`,
                        time: '1 hr ago',
                        action: 'Review Now',
                    },
                ],
                sales: [
                    { date: 'Jan 1', revenue: 42000, orders: 284 },
                    { date: 'Jan 8', revenue: 58000, orders: 341 },
                    { date: 'Jan 15', revenue: 51000, orders: 298 },
                    { date: 'Jan 22', revenue: 67000, orders: 412 },
                    { date: 'Jan 29', revenue: 74000, orders: 438 },
                ],
                categoryRevenue: categories.map(category => ({
                    name: category.name,
                    value: category._count.products * 1000,
                })),
                topProducts: topProducts.map(product => ({
                    id: product.id,
                    name: product.title,
                    vendor: product.vendor.storeName,
                    category: product.category.name,
                    price: Number(product.salePrice ?? product.price),
                    stock: product.stockQuantity,
                    status: product.status.toLowerCase(),
                    sales: product.reviewCount,
                    rating: Number(product.rating),
                })),
                topVendors: topVendors.map(vendor => ({
                    id: vendor.id,
                    name: vendor.storeName,
                    rating: Number(vendor.rating),
                    verified: vendor.verified,
                })),
                lowStockProducts: lowStockProducts.map(product => ({
                    id: product.id,
                    title: product.title,
                    stock: product.stockQuantity,
                    vendorId: product.vendorId,
                })),
                pendingVendors: pendingVendors.map(vendor => ({
                    id: vendor.id,
                    name: vendor.storeName,
                    verified: vendor.verified,
                    rating: Number(vendor.rating),
                })),
                recentOrders: recentOrders.map(order => ({
                    id: order.orderNumber,
                    customer: order.customer.fullName,
                    vendor: order.vendor?.storeName ?? 'Marketplace',
                    product: order.items[0]?.product.title ?? 'Multiple items',
                    amount: Number(order.totalAmount),
                    status: order.status.toLowerCase(),
                    payment: order.paymentMethod === 'CASH_ON_DELIVERY' ? 'COD' : order.paymentMethod,
                    date: order.placedAt.toDateString(),
                    items: order.items.length,
                })),
            },
        };
    });
    app.get('/admin/storefront/sections', { preHandler: requirePermissions(['admin.access']) }, async () => {
        return {
            success: true,
            data: storefrontSections,
            meta: { total: storefrontSections.length },
        };
    });
    app.post('/admin/products', { preHandler: requirePermissions(['admin.access']) }, async (request) => {
        const body = request.body;
        const firstCategory = await prisma.category.findFirst();
        const firstVendor = await prisma.vendorProfile.findFirst();
        const categoryId = body.categoryId ?? firstCategory?.id ?? '';
        const vendorId = body.vendorId ?? firstVendor?.id ?? '';
        const slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);
        const sku = 'SKU-' + Math.random().toString(36).substring(2, 9).toUpperCase();
        const product = await prisma.product.create({
            data: {
                title: body.title,
                slug,
                sku,
                description: body.description ?? '',
                status: body.status?.toUpperCase() ?? 'PUBLISHED',
                price: body.price,
                salePrice: body.price,
                discountPct: body.discount ?? 0,
                stockQuantity: body.stock ?? 10,
                freeShipping: body.freeShipping ?? false,
                featured: body.badge === 'bestseller' || body.badge === 'flash',
                vendorId,
                categoryId,
            },
            include: {
                category: true,
                vendor: true,
                images: true,
            },
        });
        return {
            success: true,
            data: {
                id: product.id,
                title: product.title,
                vendor: product.vendor.storeName,
                vendorId: product.vendorId,
                verified: product.vendor.verified,
                rating: Number(product.rating),
                reviewCount: product.reviewCount,
                price: Number(product.salePrice ?? product.price),
                originalPrice: Number(product.price),
                discount: product.discountPct,
                image: body.image ?? product.images[0]?.url ?? '',
                images: body.images ?? product.images.map(img => img.url),
                category: product.category.name,
                categorySlug: product.category.slug,
                freeShipping: product.freeShipping,
                stock: product.stockQuantity,
                installment: body.installment,
                description: product.description,
                status: product.status.toLowerCase(),
            },
        };
    });
}
//# sourceMappingURL=admin.routes.js.map