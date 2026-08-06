import type { FastifyInstance } from 'fastify'
import { prisma } from '../db/index.js'

export async function registerCatalogRoutes(app: FastifyInstance) {
  app.get('/catalog/categories', async () => {
    const categories = await prisma.category.findMany({
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      select: {
        id: true,
        name: true,
        slug: true,
        imageUrl: true,
        icon: true,
        status: true,
        featured: true,
        parentId: true,
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
      data: categories.map(category => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        image: category.imageUrl,
        icon: category.icon,
        status: category.status,
        featured: category.featured,
        parentId: category.parentId,
        count: category._count.products,
        childCount: category._count.children,
      })),
      meta: { total: categories.length },
    }
  })

  app.get('/catalog/categories/:slug', async request => {
    const { slug } = request.params as { slug: string }
    const category = await prisma.category.findUnique({
      where: { slug },
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

    return {
      success: true,
      data: {
        id: category.id,
        name: category.name,
        slug: category.slug,
        image: category.imageUrl,
        icon: category.icon,
        status: category.status,
        featured: category.featured,
        parentId: category.parentId,
        count: category._count.products,
        childCount: category._count.children,
      },
    }
  })

  app.get('/catalog/products', async request => {
    const query = request.query as {
      category?: string
      q?: string
      limit?: string
      vendorId?: string
    }

    const limit = Number(query.limit ?? 20)
    const products = await prisma.product.findMany({
      take: Number.isFinite(limit) ? limit : 20,
      where: {
        ...(query.vendorId ? { vendorId: query.vendorId } : {}),
        ...(query.category
          ? {
              category: {
                slug: query.category,
              },
            }
          : {}),
        ...(query.q
          ? {
              OR: [
                { title: { contains: query.q, mode: 'insensitive' } },
                {
                  vendor: {
                    storeName: { contains: query.q, mode: 'insensitive' },
                  },
                },
                {
                  category: {
                    name: { contains: query.q, mode: 'insensitive' },
                  },
                },
              ],
            }
          : {}),
      },

      orderBy: [{ featured: 'desc' }, { updatedAt: 'desc' }],
      include: {
        category: true,
        vendor: {
          include: {
            user: {
              select: {
                fullName: true,
                avatarUrl: true,
                email: true,
              },
            },
          },
        },
        images: {
          orderBy: [{ isPrimary: 'desc' }, { sortOrder: 'asc' }],
        },
      },
    })

    return {
      success: true,
      data: products.map(product => ({
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
        image: product.images[0]?.url ?? '',
        images: product.images.map(image => image.url),
        category: product.category.name,
        categorySlug: product.category.slug,
        freeShipping: product.freeShipping,
        stock: product.stockQuantity,
        badge: product.featured ? 'bestseller' : undefined,
        installment: undefined,
        description: product.description,
      })),
      meta: { total: products.length },
    }
  })

  app.get('/catalog/products/:id', async request => {
    const { id } = request.params as { id: string }
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        vendor: {
          include: {
            user: {
              select: {
                fullName: true,
                avatarUrl: true,
                email: true,
              },
            },
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
        image: product.images[0]?.url ?? '',
        images: product.images.map(image => image.url),
        category: product.category.name,
        categorySlug: product.category.slug,
        freeShipping: product.freeShipping,
        stock: product.stockQuantity,
        installment: undefined,
        description: product.description,
        features: [],
        colors: [],
        sizes: product.variants.map(variant => variant.name),
      },
    }
  })

  app.get('/catalog/vendors', async () => {
    const vendors = await prisma.vendorProfile.findMany({
      orderBy: [{ verified: 'desc' }, { rating: 'desc' }],
      include: {
        user: {
          select: {
            fullName: true,
            avatarUrl: true,
            email: true,
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
      data: vendors.map(vendor => ({
        id: vendor.id,
        name: vendor.storeName,
        logo: vendor.logoUrl ?? vendor.user.avatarUrl ?? '',
        cover: vendor.coverUrl ?? vendor.user.avatarUrl ?? '',
        rating: Number(vendor.rating),
        productCount: vendor._count.products,
        positiveFeedback: vendor.positiveScore,
        followers: 0,
        verified: vendor.verified,
        responseTime: vendor.responseTime ?? '',
        tagline: vendor.tagline ?? '',
      })),
      meta: { total: vendors.length },
    }
  })

  app.get('/catalog/vendors/:id', async request => {
    const { id } = request.params as { id: string }
    const vendor = await prisma.vendorProfile.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            fullName: true,
            avatarUrl: true,
            email: true,
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
      data: {
        id: vendor.id,
        name: vendor.storeName,
        logo: vendor.logoUrl ?? vendor.user.avatarUrl ?? '',
        cover: vendor.coverUrl ?? vendor.user.avatarUrl ?? '',
        rating: Number(vendor.rating),
        productCount: vendor._count.products,
        positiveFeedback: vendor.positiveScore,
        followers: 0,
        verified: vendor.verified,
        responseTime: vendor.responseTime ?? '',
        tagline: vendor.tagline ?? '',
      },
    }
  })
}
