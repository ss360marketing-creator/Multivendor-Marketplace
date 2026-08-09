import 'dotenv/config'
import { hashPassword } from '../src/auth/password.js'
import { prisma } from '../src/db/prisma.js'
import {
  alerts,
  brands,
  categories,
  orders as seedOrders,
  products as seedProducts,
  vendors as seedVendors,
} from '../src/data/marketplace.js'

const roleDefinitions = [
  {
    name: 'Customer',
    slug: 'customer',
    description: 'Shop, manage orders, wishlist items, and profile settings.',
    isSystem: true,
  },
  {
    name: 'Vendor',
    slug: 'vendor',
    description: 'Manage vendor storefronts, catalog, inventory, and orders.',
    isSystem: true,
  },
  {
    name: 'Admin',
    slug: 'admin',
    description: 'Operate the marketplace and moderate platform content.',
    isSystem: true,
  },
  {
    name: 'Super Admin',
    slug: 'super-admin',
    description: 'Full system access across all marketplace modules.',
    isSystem: true,
  },
]

const permissionDefinitions = [
  { name: 'View storefront', slug: 'storefront.view', resource: 'storefront', action: 'view' },
  { name: 'Manage catalog', slug: 'catalog.manage', resource: 'catalog', action: 'manage' },
  { name: 'Manage products', slug: 'products.manage', resource: 'products', action: 'manage' },
  { name: 'Manage vendors', slug: 'vendors.manage', resource: 'vendors', action: 'manage' },
  { name: 'Manage orders', slug: 'orders.manage', resource: 'orders', action: 'manage' },
  { name: 'Manage customers', slug: 'customers.manage', resource: 'customers', action: 'manage' },
  { name: 'Manage marketing', slug: 'marketing.manage', resource: 'marketing', action: 'manage' },
  { name: 'Manage analytics', slug: 'analytics.manage', resource: 'analytics', action: 'manage' },
  { name: 'Manage finance', slug: 'finance.manage', resource: 'finance', action: 'manage' },
  { name: 'Manage settings', slug: 'settings.manage', resource: 'settings', action: 'manage' },
  { name: 'Access admin panel', slug: 'admin.access', resource: 'admin', action: 'access' },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function main() {
    await prisma.auditLog.deleteMany()
    await prisma.session.deleteMany()
    await prisma.userRoleAssignment.deleteMany()
    await prisma.rolePermission.deleteMany()
    await prisma.permission.deleteMany()
    await prisma.role.deleteMany()
    await prisma.payment.deleteMany()
    await prisma.shipment.deleteMany()
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.inventoryMovement.deleteMany()
    await prisma.wishlistItem.deleteMany()
    await prisma.review.deleteMany()
    await prisma.productVariant.deleteMany()
    await prisma.productImage.deleteMany()
    await prisma.product.deleteMany()
    await prisma.vendorProfile.deleteMany()
    await prisma.customerProfile.deleteMany()
    await prisma.address.deleteMany()
    await prisma.brand.deleteMany()
    await prisma.category.deleteMany()
    await prisma.user.deleteMany()

    const roles = await Promise.all(
      roleDefinitions.map(role =>
        prisma.role.create({
          data: role,
        }),
      ),
    )

    const permissions = await Promise.all(
      permissionDefinitions.map(permission =>
        prisma.permission.create({
          data: permission,
        }),
      ),
    )

    const roleBySlug = new Map(roles.map(role => [role.slug, role]))

    const rolePermissionPairs: Array<{ roleSlug: string; permissionSlug: string }> = [
      { roleSlug: 'super-admin', permissionSlug: 'admin.access' },
      { roleSlug: 'super-admin', permissionSlug: 'catalog.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'products.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'vendors.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'orders.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'customers.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'marketing.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'analytics.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'finance.manage' },
      { roleSlug: 'super-admin', permissionSlug: 'settings.manage' },
      { roleSlug: 'admin', permissionSlug: 'admin.access' },
      { roleSlug: 'admin', permissionSlug: 'catalog.manage' },
      { roleSlug: 'admin', permissionSlug: 'products.manage' },
      { roleSlug: 'admin', permissionSlug: 'vendors.manage' },
      { roleSlug: 'admin', permissionSlug: 'orders.manage' },
      { roleSlug: 'admin', permissionSlug: 'customers.manage' },
      { roleSlug: 'admin', permissionSlug: 'marketing.manage' },
      { roleSlug: 'vendor', permissionSlug: 'storefront.view' },
      { roleSlug: 'customer', permissionSlug: 'storefront.view' },
    ]

    for (const pair of rolePermissionPairs) {
      const role = roleBySlug.get(pair.roleSlug)
      const permission = permissions.find(entry => entry.slug === pair.permissionSlug)

      if (role && permission) {
        await prisma.rolePermission.create({
          data: {
            roleId: role.id,
            permissionId: permission.id,
          },
        })
      }
    }

    const adminPasswordHash = await hashPassword('admin')
    const customerPasswordHash = await hashPassword('admin')

    const adminUser = await prisma.user.create({
      data: {
        email: 'admin@salmanmarketplace.com',
        fullName: 'Salman Super Admin',
        role: 'SUPER_ADMIN',
        status: 'ACTIVE',
        passwordHash: adminPasswordHash,
      },
    })

    await prisma.user.create({
      data: {
        email: 'admin@marketplace.local',
        fullName: 'Marketplace Local Admin',
        role: 'SUPER_ADMIN',
        status: 'ACTIVE',
        passwordHash: adminPasswordHash,
      },
    })

    const customerUser = await prisma.user.create({
      data: {
        email: 'sarah@example.com',
        fullName: 'Sarah Mitchell',
        role: 'CUSTOMER',
        status: 'ACTIVE',
        passwordHash: customerPasswordHash,
      },
    })

    const vendorUsers = await Promise.all(
      seedVendors.map(vendor =>
        prisma.user.create({
          data: {
            email: vendor.email,
            fullName: vendor.owner,
            role: 'VENDOR',
            status: 'ACTIVE',
            passwordHash: adminPasswordHash,
          },
        }),
      ),
    )

    const vendorProfiles = await Promise.all(
      seedVendors.map((vendor, index) =>
        prisma.vendorProfile.create({
          data: {
            userId: vendorUsers[index].id,
            storeName: vendor.name,
            slug: slugify(vendor.name),
            logoUrl: vendor.logo,
            coverUrl: vendor.cover,
            status: vendor.verified ? 'ACTIVE' : 'REVIEW',
            verified: vendor.verified,
            rating: vendor.rating,
            positiveScore: vendor.positiveFeedback,
            responseTime: vendor.responseTime,
            tagline: vendor.tagline,
            commissionRate: 8,
          },
        }),
      ),
    )

    const categoryRecords = await Promise.all(
      categories.map(category =>
        prisma.category.create({
          data: {
            name: category.name,
            slug: category.slug,
            imageUrl: category.image,
            status: 'ACTIVE',
            featured: true,
            sortOrder: category.name === 'Mobiles' ? 1 : 10,
          },
        }),
      ),
    )

    const brandRecords = await Promise.all(
      brands.map(brand =>
        prisma.brand.create({
          data: {
            name: brand.name,
            slug: brand.slug,
          },
        }),
      ),
    )

    const productRecords = await Promise.all(
      seedProducts.map((product, index) =>
        prisma.product.create({
          data: {
            vendorId: vendorProfiles[index % vendorProfiles.length].id,
            categoryId:
              categoryRecords.find(category => category.slug === product.categorySlug)?.id ??
              categoryRecords[0].id,
            brandId: brandRecords[index % brandRecords.length]?.id,
            title: product.title,
            slug: `${product.id}-${slugify(product.title)}`,
            sku: `${product.vendorId}-${product.id}`,
            description: product.description ?? product.title,
            status: 'PUBLISHED',
            price: product.price,
            salePrice: product.price,
            costPrice: Math.max(product.price * 0.65, 1),
            discountPct: product.discount,
            stockQuantity: product.stock,
            lowStockLimit: 5,
            rating: product.rating,
            reviewCount: product.reviewCount,
            freeShipping: product.freeShipping,
            featured: product.badge === 'bestseller',
            publishedAt: new Date(),
            images: {
              create: [
                ...(product.images?.slice(0, 4).map((url, imageIndex) => ({
                  url,
                  altText: product.title,
                  sortOrder: imageIndex,
                  isPrimary: imageIndex === 0,
                })) ?? []),
              ],
            },
            variants: {
              create: [
                ...(product.sizes?.slice(0, 3).map((size, variantIndex) => ({
                  name: size,
                  sku: `${product.id}-${variantIndex}-${slugify(size)}`,
                  price: product.price,
                  stockQty: Math.max(product.stock - variantIndex * 2, 0),
                  attributes: { size },
                  isDefault: variantIndex === 0,
                })) ?? []),
              ],
            },
          },
        }),
      ),
    )

    for (let index = 0; index < seedOrders.length; index += 1) {
      const order = seedOrders[index]
      const product = productRecords[index % productRecords.length]

      await prisma.order.create({
        data: {
          orderNumber: order.id,
          customerId: customerUser.id,
          vendorId: vendorProfiles[index % vendorProfiles.length].id,
          status: order.status === 'refund_pending' ? 'REFUND_PENDING' : order.status.toUpperCase() as never,
          paymentStatus: order.status === 'delivered' ? 'PAID' : 'PENDING',
          paymentMethod:
            order.payment === 'COD'
              ? 'CASH_ON_DELIVERY'
              : order.payment === 'PayPal'
                ? 'WALLET'
                : 'CARD',
          subtotal: order.amount,
          shippingFee: 0,
          discountAmount: 0,
          taxAmount: 0,
          totalAmount: order.amount,
          currency: 'USD',
          placedAt: new Date(),
          items: {
            create: {
              productId: product.id,
              quantity: order.items,
              unitPrice: order.amount / Math.max(order.items, 1),
              lineTotal: order.amount,
            },
          },
          payments: {
            create: {
              method: order.payment === 'COD' ? 'CASH_ON_DELIVERY' : 'CARD',
              status: order.status === 'delivered' ? 'PAID' : 'PENDING',
              provider: order.payment,
              amount: order.amount,
              currency: 'USD',
            },
          },
        },
      })
    }

    await prisma.customerProfile.create({
      data: {
        userId: customerUser.id,
        loyaltyPoints: 420,
        lifetimeValue: 624.55,
      },
    })

    await prisma.userRoleAssignment.createMany({
      data: [
        {
          userId: adminUser.id,
          roleId: roleBySlug.get('super-admin')!.id,
          assignedBy: adminUser.id,
        },
        {
          userId: customerUser.id,
          roleId: roleBySlug.get('customer')!.id,
          assignedBy: adminUser.id,
        },
        ...vendorUsers.map(vendorUser => ({
          userId: vendorUser.id,
          roleId: roleBySlug.get('vendor')!.id,
          assignedBy: adminUser.id,
        })),
      ],
      skipDuplicates: true,
    })

    await prisma.session.create({
      data: {
        userId: adminUser.id,
        tokenHash: 'seeded-admin-session',
        ipAddress: '127.0.0.1',
        userAgent: 'Prisma Seed',
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      },
    })

  console.log('Seed completed successfully.')
  console.log({
    alerts: alerts.length,
  })
}

main()
  .catch(async error => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
