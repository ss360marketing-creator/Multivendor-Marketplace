import { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { prisma } from '../db/index.js'
import { requirePermissions } from '../auth/guards.js'

type CategoryBody = {
  name?: string
  slug?: string
  description?: string
  imageUrl?: string
  icon?: string
  parentId?: string | null
  status?: string
  sortOrder?: number
  featured?: boolean
}

type ProductImageInput = {
  url: string
  altText?: string
  sortOrder?: number
  isPrimary?: boolean
}

type ProductVariantInput = {
  name: string
  sku: string
  price?: number
  stockQty?: number
  attributes?: Record<string, unknown>
  isDefault?: boolean
}

type ProductBody = {
  vendorId?: string
  categoryId?: string
  brandId?: string | null
  title?: string
  slug?: string
  sku?: string
  description?: string
  status?: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED' | 'ARCHIVED'
  price?: number
  salePrice?: number | null
  costPrice?: number | null
  discountPct?: number
  stockQuantity?: number
  lowStockLimit?: number
  rating?: number
  reviewCount?: number
  freeShipping?: boolean
  featured?: boolean
  publishedAt?: string | null
  images?: ProductImageInput[]
  variants?: ProductVariantInput[]
}

type VendorBody = {
  email?: string
  fullName?: string
  storeName?: string
  slug?: string
  password?: string
  logoUrl?: string | null
  coverUrl?: string | null
  status?: 'REVIEW' | 'ACTIVE' | 'SUSPENDED' | 'BANNED'
  verified?: boolean
  rating?: number
  positiveScore?: number
  responseTime?: string | null
  tagline?: string | null
  commissionRate?: number
}

type OrderItemBody = {
  productId: string
  quantity: number
  unitPrice?: number
}

type OrderBody = {
  orderNumber?: string
  customerId?: string
  vendorId?: string | null
  status?: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'REFUND_PENDING' | 'REFUNDED'
  paymentStatus?: 'PENDING' | 'AUTHORIZED' | 'PAID' | 'FAILED' | 'REFUNDED' | 'PARTIALLY_REFUNDED'
  paymentMethod?: 'CARD' | 'BANK_TRANSFER' | 'CASH_ON_DELIVERY' | 'WALLET' | 'INSTALLMENT'
  subtotal?: number
  shippingFee?: number
  discountAmount?: number
  taxAmount?: number
  totalAmount?: number
  currency?: string
  notes?: string | null
  trackingNumber?: string | null
  items?: OrderItemBody[]
}

function toNullableString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function normalizeStatus(value: string) {
  return value.toLowerCase()
}

function mapCategory(category: {
  id: string
  name: string
  slug: string
  description: string | null
  imageUrl: string | null
  icon: string | null
  parentId: string | null
  status: string
  sortOrder: number
  featured: boolean
  _count?: { children: number; products: number }
}) {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    image: category.imageUrl,
    icon: category.icon,
    parentId: category.parentId,
    status: category.status,
    sortOrder: category.sortOrder,
    featured: category.featured,
    count: category._count?.products ?? 0,
    childCount: category._count?.children ?? 0,
  }
}

function mapProduct(product: {
  id: string
  title: string
  vendorId: string
  vendor: { storeName: string; verified: boolean }
  category: { name: string; slug: string }
  rating: { toString: () => string }
  reviewCount: number
  price: { toString: () => string }
  salePrice: { toString: () => string } | null
  discountPct: number
  stockQuantity: number
  freeShipping: boolean
  featured: boolean
  status: string
  description: string
  images: Array<{ url: string }>
}) {
  return {
    id: product.id,
    title: product.title,
    vendor: product.vendor.storeName,
    vendorId: product.vendorId,
    verified: product.vendor.verified,
    rating: Number(product.rating.toString()),
    reviewCount: product.reviewCount,
    price: Number(product.salePrice?.toString() ?? product.price.toString()),
    originalPrice: Number(product.price.toString()),
    discount: product.discountPct,
    image: product.images[0]?.url ?? '',
    images: product.images.map(image => image.url),
    category: product.category.name,
    categorySlug: product.category.slug,
    freeShipping: product.freeShipping,
    stock: product.stockQuantity,
    badge: product.featured ? 'bestseller' : undefined,
    installment: undefined,
    description: product.description,
    status: product.status.toLowerCase(),
  }
}

function mapVendor(vendor: {
  id: string
  storeName: string
  slug: string
  logoUrl: string | null
  coverUrl: string | null
  status: string
  verified: boolean
  rating: { toString: () => string }
  positiveScore: number
  responseTime: string | null
  tagline: string | null
  commissionRate: { toString: () => string }
  user: { fullName: string; email: string; avatarUrl: string | null }
  _count: { products: number }
}) {
  return {
    id: vendor.id,
    name: vendor.storeName,
    slug: vendor.slug,
    email: vendor.user.email,
    owner: vendor.user.fullName,
    logo: vendor.logoUrl ?? vendor.user.avatarUrl ?? '',
    cover: vendor.coverUrl ?? vendor.user.avatarUrl ?? '',
    status: vendor.status.toLowerCase(),
    verified: vendor.verified,
    rating: Number(vendor.rating.toString()),
    productCount: vendor._count.products,
    positiveFeedback: vendor.positiveScore,
    followers: 0,
    responseTime: vendor.responseTime ?? '',
    tagline: vendor.tagline ?? '',
    commissionRate: Number(vendor.commissionRate.toString()),
  }
}

function mapOrder(order: {
  id: string
  orderNumber: string
  customer: { fullName: string; email: string; phone: string | null }
  vendor: { storeName: string } | null
  status: string
  paymentMethod: string
  totalAmount: { toString: () => string }
  placedAt: Date
  items: Array<{ product: { title: string; slug: string } }>
  paymentStatus?: string
  trackingNumber?: string | null
}) {
  return {
    id: order.orderNumber,
    customer: order.customer.fullName,
    vendor: order.vendor?.storeName ?? 'Marketplace',
    product: order.items[0]?.product.title ?? 'Multiple items',
    amount: Number(order.totalAmount.toString()),
    status: normalizeStatus(order.status),
    payment: order.paymentMethod === 'CASH_ON_DELIVERY' ? 'COD' : order.paymentMethod,
    date: order.placedAt.toDateString(),
    items: order.items.length,
    customerDetails: order.customer,
    trackingNumber: order.trackingNumber ?? null,
    paymentStatus: order.paymentStatus ?? null,
  }
}

export async function registerAdminCrudRoutes(app: FastifyInstance) {
  app.get(
    '/admin/categories',
    { preHandler: requirePermissions(['catalog.manage']) },
    async request => {
      const query = request.query as { q?: string; limit?: string }
      const categories = await prisma.category.findMany({
        where: query.q
          ? {
              OR: [
                { name: { contains: query.q, mode: 'insensitive' } },
                { slug: { contains: query.q, mode: 'insensitive' } },
              ],
            }
          : undefined,
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        take: Number(query.limit ?? 50),
        include: {
          _count: {
            select: {
              children: true,
              products: true,
            },
          },
        },
      })

      return {
        success: true,
        data: categories.map(mapCategory),
        meta: { total: categories.length },
      }
    },
  )

  app.get(
    '/admin/categories/:id',
    { preHandler: requirePermissions(['catalog.manage']) },
    async request => {
      const { id } = request.params as { id: string }
      const category = await prisma.category.findUnique({
        where: { id },
        include: {
          _count: {
            select: {
              children: true,
              products: true,
            },
          },
        },
      })

      if (!category) {
        return {
          success: false,
          error: {
            code: 'CATEGORY_NOT_FOUND',
            message: 'Category not found.',
          },
        }
      }

      return { success: true, data: mapCategory(category) }
    },
  )

  app.post(
    '/admin/categories',
    { preHandler: requirePermissions(['catalog.manage']) },
    async (request, reply) => {
      const body = request.body as CategoryBody
      const name = body.name?.trim()
      const slug = body.slug?.trim().toLowerCase()

      if (!name || !slug) {
        return reply.code(400).send({
          success: false,
          error: {
            code: 'INVALID_PAYLOAD',
            message: 'Category name and slug are required.',
          },
        })
      }

      const category = await prisma.category.create({
        data: {
          name,
          slug,
          description: toNullableString(body.description),
          imageUrl: toNullableString(body.imageUrl),
          icon: toNullableString(body.icon),
          parentId: body.parentId ?? null,
          status: body.status?.trim().toUpperCase() ?? 'ACTIVE',
          sortOrder: body.sortOrder ?? 0,
          featured: body.featured ?? false,
        },
        include: {
          _count: {
            select: {
              children: true,
              products: true,
            },
          },
        },
      })

      return reply.code(201).send({
        success: true,
        data: mapCategory(category),
      })
    },
  )

  app.patch(
    '/admin/categories/:id',
    { preHandler: requirePermissions(['catalog.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }
      const body = request.body as CategoryBody

      try {
        const category = await prisma.category.update({
          where: { id },
          data: {
            ...(body.name ? { name: body.name.trim() } : {}),
            ...(body.slug ? { slug: body.slug.trim().toLowerCase() } : {}),
            ...(body.description !== undefined ? { description: toNullableString(body.description) } : {}),
            ...(body.imageUrl !== undefined ? { imageUrl: toNullableString(body.imageUrl) } : {}),
            ...(body.icon !== undefined ? { icon: toNullableString(body.icon) } : {}),
            ...(body.parentId !== undefined ? { parentId: body.parentId } : {}),
            ...(body.status ? { status: body.status.trim().toUpperCase() } : {}),
            ...(body.sortOrder !== undefined ? { sortOrder: body.sortOrder } : {}),
            ...(body.featured !== undefined ? { featured: body.featured } : {}),
          },
          include: {
            _count: {
              select: {
                children: true,
                products: true,
              },
            },
          },
        })

        return {
          success: true,
          data: mapCategory(category),
        }
      } catch {
        return reply.code(404).send({
          success: false,
          error: {
            code: 'CATEGORY_NOT_FOUND',
            message: 'Category not found.',
          },
        })
      }
    },
  )

  app.delete(
    '/admin/categories/:id',
    { preHandler: requirePermissions(['catalog.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }

      try {
        await prisma.category.delete({ where: { id } })
      } catch {
        return reply.code(400).send({
          success: false,
          error: {
            code: 'CATEGORY_DELETE_FAILED',
            message: 'Category cannot be deleted while it has children or products.',
          },
        })
      }

      return {
        success: true,
        data: {
          deleted: true,
        },
      }
    },
  )

  app.get(
    '/admin/products',
    { preHandler: requirePermissions(['products.manage']) },
    async request => {
      const query = request.query as {
        q?: string
        status?: string
        vendorId?: string
        categoryId?: string
        limit?: string
      }

      const products = await prisma.product.findMany({
        where: {
          ...(query.status ? { status: query.status.toUpperCase() as never } : {}),
          ...(query.vendorId ? { vendorId: query.vendorId } : {}),
          ...(query.categoryId ? { categoryId: query.categoryId } : {}),
          ...(query.q
            ? {
                OR: [
                  { title: { contains: query.q, mode: 'insensitive' } },
                  { sku: { contains: query.q, mode: 'insensitive' } },
                  { vendor: { storeName: { contains: query.q, mode: 'insensitive' } } },
                ],
              }
            : {}),
        },
        orderBy: [{ updatedAt: 'desc' }],
        take: Number(query.limit ?? 50),
        include: {
          vendor: {
            select: {
              storeName: true,
              verified: true,
            },
          },
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
          images: {
            orderBy: [{ isPrimary: 'desc' }, { sortOrder: 'asc' }],
          },
        },
      })

      return {
        success: true,
        data: products.map(mapProduct),
        meta: { total: products.length },
      }
    },
  )

  app.get(
    '/admin/products/:id',
    { preHandler: requirePermissions(['products.manage']) },
    async request => {
      const { id } = request.params as { id: string }
      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          vendor: {
            select: {
              storeName: true,
              verified: true,
            },
          },
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
          images: {
            orderBy: [{ isPrimary: 'desc' }, { sortOrder: 'asc' }],
          },
          variants: true,
        },
      })

      if (!product) {
        return {
          success: false,
          error: {
            code: 'PRODUCT_NOT_FOUND',
            message: 'Product not found.',
          },
        }
      }

      return {
        success: true,
        data: {
          ...mapProduct(product),
          variants: product.variants,
        },
      }
    },
  )

  app.post(
    '/admin/products',
    { preHandler: requirePermissions(['products.manage']) },
    async (request, reply) => {
      const body = request.body as ProductBody
      const vendorId = body.vendorId?.trim()
      const categoryId = body.categoryId?.trim()
      const title = body.title?.trim()
      const slug = body.slug?.trim().toLowerCase()
      const sku = body.sku?.trim()
      const description = body.description?.trim()

      if (!vendorId || !categoryId || !title || !slug || !sku || !description) {
        return reply.code(400).send({
          success: false,
          error: {
            code: 'INVALID_PAYLOAD',
            message: 'Vendor, category, title, slug, sku, and description are required.',
          },
        })
      }

      const product = await prisma.$transaction(async tx => {
        const created = await tx.product.create({
          data: {
            vendorId,
            categoryId,
            brandId: body.brandId ?? null,
            title,
            slug,
            sku,
            description,
            status: body.status ?? 'DRAFT',
            price: body.price ?? 0,
            salePrice: body.salePrice ?? null,
            costPrice: body.costPrice ?? null,
            discountPct: body.discountPct ?? 0,
            stockQuantity: body.stockQuantity ?? 0,
            lowStockLimit: body.lowStockLimit ?? 5,
            rating: body.rating ?? 0,
            reviewCount: body.reviewCount ?? 0,
            freeShipping: body.freeShipping ?? false,
            featured: body.featured ?? false,
            publishedAt: body.publishedAt ? new Date(body.publishedAt) : null,
          },
        })

        if (body.images?.length) {
          await tx.productImage.createMany({
            data: body.images.map(image => ({
              productId: created.id,
              url: image.url,
              altText: image.altText ?? null,
              sortOrder: image.sortOrder ?? 0,
              isPrimary: image.isPrimary ?? false,
            })),
          })
        }

        if (body.variants?.length) {
              await tx.productVariant.createMany({
                data: body.variants.map(variant => ({
                  productId: created.id,
                  name: variant.name,
                  sku: variant.sku,
                  price: variant.price ?? null,
                  stockQty: variant.stockQty ?? 0,
                  attributes: (variant.attributes ?? {}) as Prisma.InputJsonValue,
                  isDefault: variant.isDefault ?? false,
                })),
              })
        }

        return tx.product.findUniqueOrThrow({
          where: { id: created.id },
          include: {
            vendor: {
              select: {
                storeName: true,
                verified: true,
              },
            },
            category: {
              select: {
                name: true,
                slug: true,
              },
            },
            images: {
              orderBy: [{ isPrimary: 'desc' }, { sortOrder: 'asc' }],
            },
            variants: true,
          },
        })
      })

      return reply.code(201).send({
        success: true,
        data: {
          ...mapProduct(product),
          variants: product.variants,
        },
      })
    },
  )

  app.patch(
    '/admin/products/:id',
    { preHandler: requirePermissions(['products.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }
      const body = request.body as ProductBody

      try {
        const product = await prisma.$transaction(async tx => {
          await tx.product.update({
            where: { id },
            data: {
              ...(body.vendorId ? { vendorId: body.vendorId } : {}),
              ...(body.categoryId ? { categoryId: body.categoryId } : {}),
              ...(body.brandId !== undefined ? { brandId: body.brandId } : {}),
              ...(body.title ? { title: body.title.trim() } : {}),
              ...(body.slug ? { slug: body.slug.trim().toLowerCase() } : {}),
              ...(body.sku ? { sku: body.sku.trim() } : {}),
              ...(body.description ? { description: body.description.trim() } : {}),
              ...(body.status ? { status: body.status } : {}),
              ...(body.price !== undefined ? { price: body.price } : {}),
              ...(body.salePrice !== undefined ? { salePrice: body.salePrice } : {}),
              ...(body.costPrice !== undefined ? { costPrice: body.costPrice } : {}),
              ...(body.discountPct !== undefined ? { discountPct: body.discountPct } : {}),
              ...(body.stockQuantity !== undefined ? { stockQuantity: body.stockQuantity } : {}),
              ...(body.lowStockLimit !== undefined ? { lowStockLimit: body.lowStockLimit } : {}),
              ...(body.rating !== undefined ? { rating: body.rating } : {}),
              ...(body.reviewCount !== undefined ? { reviewCount: body.reviewCount } : {}),
              ...(body.freeShipping !== undefined ? { freeShipping: body.freeShipping } : {}),
              ...(body.featured !== undefined ? { featured: body.featured } : {}),
              ...(body.publishedAt !== undefined
                ? { publishedAt: body.publishedAt ? new Date(body.publishedAt) : null }
                : {}),
            },
          })

          if (body.images) {
            await tx.productImage.deleteMany({ where: { productId: id } })
            if (body.images.length) {
              await tx.productImage.createMany({
                data: body.images.map(image => ({
                  productId: id,
                  url: image.url,
                  altText: image.altText ?? null,
                  sortOrder: image.sortOrder ?? 0,
                  isPrimary: image.isPrimary ?? false,
                })),
              })
            }
          }

          if (body.variants) {
            await tx.productVariant.deleteMany({ where: { productId: id } })
            if (body.variants.length) {
              await tx.productVariant.createMany({
                data: body.variants.map(variant => ({
                  productId: id,
                  name: variant.name,
                  sku: variant.sku,
                  price: variant.price ?? null,
                  stockQty: variant.stockQty ?? 0,
                  attributes: (variant.attributes ?? {}) as Prisma.InputJsonValue,
                  isDefault: variant.isDefault ?? false,
                })),
              })
            }
          }

          return tx.product.findUniqueOrThrow({
            where: { id },
            include: {
              vendor: {
                select: {
                  storeName: true,
                  verified: true,
                },
              },
              category: {
                select: {
                  name: true,
                  slug: true,
                },
              },
              images: {
                orderBy: [{ isPrimary: 'desc' }, { sortOrder: 'asc' }],
              },
              variants: true,
            },
          })
        })

        return {
          success: true,
          data: {
            ...mapProduct(product),
            variants: product.variants,
          },
        }
      } catch {
        return reply.code(404).send({
          success: false,
          error: {
            code: 'PRODUCT_NOT_FOUND',
            message: 'Product not found.',
          },
        })
      }
    },
  )

  app.delete(
    '/admin/products/:id',
    { preHandler: requirePermissions(['products.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }

      try {
        await prisma.product.delete({ where: { id } })
      } catch {
        return reply.code(404).send({
          success: false,
          error: {
            code: 'PRODUCT_NOT_FOUND',
            message: 'Product not found.',
          },
        })
      }

      return {
        success: true,
        data: {
          deleted: true,
        },
      }
    },
  )

  app.get(
    '/admin/vendors',
    { preHandler: requirePermissions(['vendors.manage']) },
    async request => {
      const query = request.query as { q?: string; status?: string; limit?: string }
      const vendors = await prisma.vendorProfile.findMany({
        where: {
          ...(query.status ? { status: query.status.toUpperCase() as never } : {}),
          ...(query.q
            ? {
                OR: [
                  { storeName: { contains: query.q, mode: 'insensitive' } },
                  { slug: { contains: query.q, mode: 'insensitive' } },
                  { user: { fullName: { contains: query.q, mode: 'insensitive' } } },
                ],
              }
            : {}),
        },
        orderBy: [{ verified: 'desc' }, { rating: 'desc' }],
        take: Number(query.limit ?? 50),
        include: {
          user: {
            select: {
              fullName: true,
              email: true,
              avatarUrl: true,
            },
          },
          _count: {
            select: {
              products: true,
            },
          },
        },
      })

      return {
        success: true,
        data: vendors.map(mapVendor),
        meta: { total: vendors.length },
      }
    },
  )

  app.get(
    '/admin/vendors/:id',
    { preHandler: requirePermissions(['vendors.manage']) },
    async request => {
      const { id } = request.params as { id: string }
      const vendor = await prisma.vendorProfile.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              fullName: true,
              email: true,
              avatarUrl: true,
            },
          },
          _count: {
            select: {
              products: true,
            },
          },
        },
      })

      if (!vendor) {
        return {
          success: false,
          error: {
            code: 'VENDOR_NOT_FOUND',
            message: 'Vendor not found.',
          },
        }
      }

      return {
        success: true,
        data: mapVendor(vendor),
      }
    },
  )

  app.post(
    '/admin/vendors',
    { preHandler: requirePermissions(['vendors.manage']) },
    async (request, reply) => {
      const body = request.body as VendorBody
      const email = body.email?.trim().toLowerCase()
      const fullName = body.fullName?.trim()
      const storeName = body.storeName?.trim()
      const slug = body.slug?.trim().toLowerCase()
      const password = body.password?.trim() ?? 'ChangeMe123!'

      if (!email || !fullName || !storeName) {
        return reply.code(400).send({
          success: false,
          error: {
            code: 'INVALID_PAYLOAD',
            message: 'Email, full name, and store name are required.',
          },
        })
      }

      const existing = await prisma.user.findUnique({ where: { email } })
      if (existing) {
        return reply.code(409).send({
          success: false,
          error: {
            code: 'EMAIL_EXISTS',
            message: 'An account with this email already exists.',
          },
        })
      }

      const vendorRole = await prisma.role.findUnique({ where: { slug: 'vendor' } })
      if (!vendorRole) {
        return reply.code(500).send({
          success: false,
          error: {
            code: 'ROLE_MISSING',
            message: 'Vendor role is missing from the database.',
          },
        })
      }

      const { hashPassword } = await import('../auth/password.js')
      const passwordHash = await hashPassword(password)

      const vendor = await prisma.$transaction(async tx => {
        const user = await tx.user.create({
          data: {
            email,
            fullName,
            passwordHash,
            role: 'VENDOR',
            status: 'ACTIVE',
          },
        })

        await tx.userRoleAssignment.create({
          data: {
            userId: user.id,
            roleId: vendorRole.id,
            assignedBy: null,
          },
        })

        const profile = await tx.vendorProfile.create({
          data: {
            userId: user.id,
            storeName,
            slug: slug ?? `${storeName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${user.id.slice(0, 6)}`,
            logoUrl: body.logoUrl ?? null,
            coverUrl: body.coverUrl ?? null,
            status: body.status ?? 'REVIEW',
            verified: body.verified ?? false,
            rating: body.rating ?? 0,
            positiveScore: body.positiveScore ?? 0,
            responseTime: body.responseTime ?? null,
            tagline: body.tagline ?? null,
            commissionRate: body.commissionRate ?? 0,
          },
        })

        return tx.vendorProfile.findUniqueOrThrow({
          where: { id: profile.id },
          include: {
            user: {
              select: {
                fullName: true,
                email: true,
                avatarUrl: true,
              },
            },
            _count: {
              select: {
                products: true,
              },
            },
          },
        })
      })

      return reply.code(201).send({
        success: true,
        data: mapVendor(vendor),
      })
    },
  )

  app.patch(
    '/admin/vendors/:id',
    { preHandler: requirePermissions(['vendors.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }
      const body = request.body as VendorBody

      try {
        const vendor = await prisma.$transaction(async tx => {
          const current = await tx.vendorProfile.findUnique({
            where: { id },
            select: { userId: true },
          })

          if (!current) {
            return null
          }

          if (body.fullName || body.email) {
            await tx.user.update({
              where: { id: current.userId },
              data: {
                ...(body.fullName ? { fullName: body.fullName.trim() } : {}),
                ...(body.email ? { email: body.email.trim().toLowerCase() } : {}),
              },
            })
          }

          await tx.vendorProfile.update({
            where: { id },
            data: {
              ...(body.storeName ? { storeName: body.storeName.trim() } : {}),
              ...(body.slug ? { slug: body.slug.trim().toLowerCase() } : {}),
              ...(body.logoUrl !== undefined ? { logoUrl: body.logoUrl } : {}),
              ...(body.coverUrl !== undefined ? { coverUrl: body.coverUrl } : {}),
              ...(body.status ? { status: body.status } : {}),
              ...(body.verified !== undefined ? { verified: body.verified } : {}),
              ...(body.rating !== undefined ? { rating: body.rating } : {}),
              ...(body.positiveScore !== undefined ? { positiveScore: body.positiveScore } : {}),
              ...(body.responseTime !== undefined ? { responseTime: body.responseTime } : {}),
              ...(body.tagline !== undefined ? { tagline: body.tagline } : {}),
              ...(body.commissionRate !== undefined ? { commissionRate: body.commissionRate } : {}),
            },
          })

          return tx.vendorProfile.findUniqueOrThrow({
            where: { id },
            include: {
              user: {
                select: {
                  fullName: true,
                  email: true,
                  avatarUrl: true,
                },
              },
              _count: {
                select: {
                  products: true,
                },
              },
            },
          })
        })

        if (!vendor) {
          return reply.code(404).send({
            success: false,
            error: {
              code: 'VENDOR_NOT_FOUND',
              message: 'Vendor not found.',
            },
          })
        }

        return {
          success: true,
          data: mapVendor(vendor),
        }
      } catch {
        return reply.code(404).send({
          success: false,
          error: {
            code: 'VENDOR_NOT_FOUND',
            message: 'Vendor not found.',
          },
        })
      }
    },
  )

  app.delete(
    '/admin/vendors/:id',
    { preHandler: requirePermissions(['vendors.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }

      try {
        await prisma.vendorProfile.update({
          where: { id },
          data: {
            status: 'SUSPENDED',
            verified: false,
          },
        })
      } catch {
        return reply.code(404).send({
          success: false,
          error: {
            code: 'VENDOR_NOT_FOUND',
            message: 'Vendor not found.',
          },
        })
      }

      return {
        success: true,
        data: {
          suspended: true,
        },
      }
    },
  )

  app.get(
    '/admin/orders',
    { preHandler: requirePermissions(['orders.manage']) },
    async request => {
      const query = request.query as { q?: string; status?: string; paymentStatus?: string; limit?: string }
      const orders = await prisma.order.findMany({
        where: {
          ...(query.status ? { status: query.status.toUpperCase() as never } : {}),
          ...(query.paymentStatus ? { paymentStatus: query.paymentStatus.toUpperCase() as never } : {}),
          ...(query.q
            ? {
                OR: [
                  { orderNumber: { contains: query.q, mode: 'insensitive' } },
                  { customer: { fullName: { contains: query.q, mode: 'insensitive' } } },
                  { vendor: { storeName: { contains: query.q, mode: 'insensitive' } } },
                ],
              }
            : {}),
        },
        orderBy: { placedAt: 'desc' },
        take: Number(query.limit ?? 50),
        include: {
          customer: {
            select: {
              fullName: true,
              email: true,
              phone: true,
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
                  slug: true,
                },
              },
            },
          },
        },
      })

      return {
        success: true,
        data: orders.map(mapOrder),
        meta: { total: orders.length },
      }
    },
  )

  app.get(
    '/admin/orders/:id',
    { preHandler: requirePermissions(['orders.manage']) },
    async request => {
      const { id } = request.params as { id: string }
      const order = await prisma.order.findUnique({
        where: { orderNumber: id },
        include: {
          customer: {
            select: {
              fullName: true,
              email: true,
              phone: true,
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
                  slug: true,
                },
              },
            },
          },
          payments: true,
          shipments: true,
        },
      })

      if (!order) {
        return {
          success: false,
          error: {
            code: 'ORDER_NOT_FOUND',
            message: 'Order not found.',
          },
        }
      }

      return {
        success: true,
        data: {
          ...mapOrder(order),
          lineItems: order.items,
          payments: order.payments,
          shipments: order.shipments,
        },
      }
    },
  )

  app.post(
    '/admin/orders',
    { preHandler: requirePermissions(['orders.manage']) },
    async (request, reply) => {
      const body = request.body as OrderBody
      const customerId = body.customerId?.trim()
      const orderNumber = body.orderNumber?.trim() ?? `#NX-${Math.floor(Math.random() * 90000 + 10000)}`
      const items = body.items ?? []

      if (!customerId || !items.length) {
        return reply.code(400).send({
          success: false,
          error: {
            code: 'INVALID_PAYLOAD',
            message: 'Customer and at least one order item are required.',
          },
        })
      }

      const computedItems = await Promise.all(
        items.map(async item => {
          const product = await prisma.product.findUnique({
            where: { id: item.productId },
            select: {
              price: true,
              salePrice: true,
            },
          })

          if (!product) {
            throw new Error(`Product not found: ${item.productId}`)
          }

          const unitPrice = item.unitPrice ?? Number(product.salePrice ?? product.price)
          return {
            productId: item.productId,
            quantity: item.quantity,
            unitPrice,
            lineTotal: unitPrice * item.quantity,
          }
        }),
      )

      const subtotal = computedItems.reduce((sum, item) => sum + item.lineTotal, 0)
      const totalAmount = body.totalAmount ?? subtotal + (body.shippingFee ?? 0) + (body.taxAmount ?? 0) - (body.discountAmount ?? 0)

      const order = await prisma.$transaction(async tx => {
        const created = await tx.order.create({
          data: {
            orderNumber,
            customerId,
            vendorId: body.vendorId ?? null,
            status: body.status ?? 'PENDING',
            paymentStatus: body.paymentStatus ?? 'PENDING',
            paymentMethod: body.paymentMethod ?? 'CARD',
            subtotal,
            shippingFee: body.shippingFee ?? 0,
            discountAmount: body.discountAmount ?? 0,
            taxAmount: body.taxAmount ?? 0,
            totalAmount,
            currency: body.currency ?? 'USD',
            notes: body.notes ?? null,
            trackingNumber: body.trackingNumber ?? null,
            items: {
              create: computedItems,
            },
          },
        })

        return tx.order.findUniqueOrThrow({
          where: { id: created.id },
          include: {
            customer: {
              select: {
                fullName: true,
                email: true,
                phone: true,
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
                    slug: true,
                  },
                },
              },
            },
          },
        })
      })

      return reply.code(201).send({
        success: true,
        data: mapOrder(order),
      })
    },
  )

  app.patch(
    '/admin/orders/:id',
    { preHandler: requirePermissions(['orders.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }
      const body = request.body as OrderBody

      try {
        const order = await prisma.order.update({
          where: { orderNumber: id },
          data: {
            ...(body.status ? { status: body.status } : {}),
            ...(body.paymentStatus ? { paymentStatus: body.paymentStatus } : {}),
            ...(body.paymentMethod ? { paymentMethod: body.paymentMethod } : {}),
            ...(body.shippingFee !== undefined ? { shippingFee: body.shippingFee } : {}),
            ...(body.discountAmount !== undefined ? { discountAmount: body.discountAmount } : {}),
            ...(body.taxAmount !== undefined ? { taxAmount: body.taxAmount } : {}),
            ...(body.totalAmount !== undefined ? { totalAmount: body.totalAmount } : {}),
            ...(body.currency ? { currency: body.currency } : {}),
            ...(body.notes !== undefined ? { notes: body.notes } : {}),
            ...(body.trackingNumber !== undefined ? { trackingNumber: body.trackingNumber } : {}),
          },
          include: {
            customer: {
              select: {
                fullName: true,
                email: true,
                phone: true,
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
                    slug: true,
                  },
                },
              },
            },
          },
        })

        return {
          success: true,
          data: mapOrder(order),
        }
      } catch {
        return reply.code(404).send({
          success: false,
          error: {
            code: 'ORDER_NOT_FOUND',
            message: 'Order not found.',
          },
        })
      }
    },
  )

  app.delete(
    '/admin/orders/:id',
    { preHandler: requirePermissions(['orders.manage']) },
    async (request, reply) => {
      const { id } = request.params as { id: string }

      try {
        await prisma.order.update({
          where: { orderNumber: id },
          data: { status: 'CANCELLED' },
        })
      } catch {
        return reply.code(404).send({
          success: false,
          error: {
            code: 'ORDER_NOT_FOUND',
            message: 'Order not found.',
          },
        })
      }

      return {
        success: true,
        data: {
          cancelled: true,
        },
      }
    },
  )
}
