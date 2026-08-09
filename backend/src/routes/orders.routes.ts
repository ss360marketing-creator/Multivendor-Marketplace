import type { FastifyInstance } from 'fastify'
import { prisma } from '../db/index.js'

export async function registerOrdersRoutes(app: FastifyInstance) {
  app.get('/orders', async () => {
    const orders = await prisma.order.findMany({
      orderBy: { placedAt: 'desc' },
      include: {
        customer: {
          select: {
            fullName: true,
            email: true,
          },
        },
        vendor: {
          select: {
            id: true,
            storeName: true,
            verified: true,
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
      data: orders.map(order => ({
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
      meta: { total: orders.length },
    }
  })

  app.get('/orders/:id', async request => {
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
        vendor: true,
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
        id: order.orderNumber,
        customer: order.customer.fullName,
        vendor: order.vendor?.storeName ?? 'Marketplace',
        product: order.items[0]?.product.title ?? 'Multiple items',
        amount: Number(order.totalAmount),
        status: order.status.toLowerCase(),
        payment: order.paymentMethod === 'CASH_ON_DELIVERY' ? 'COD' : order.paymentMethod,
        date: order.placedAt.toDateString(),
        items: order.items.length,
        customerDetails: order.customer,
        lineItems: order.items,
        payments: order.payments,
        shipments: order.shipments,
      },
    }
  })

  app.post('/orders', async (request, reply) => {
    const body = request.body as {
      customerName?: string
      customerEmail?: string
      customerPhone?: string
      shippingAddress?: {
        name?: string
        line1?: string
        city?: string
        phone?: string
      }
      paymentMethod?: string
      items?: Array<{
        productId?: string
        title?: string
        price?: number
        quantity?: number
        vendorId?: string
      }>
      totalAmount?: number
    }

    const customerEmail = body.customerEmail?.trim().toLowerCase() || `customer_${Date.now()}@marketplace.local`
    const customerName = body.customerName?.trim() || body.shippingAddress?.name || 'Valued Customer'
    const totalAmount = body.totalAmount ?? 0

    let user = await prisma.user.findFirst({ where: { email: customerEmail } })
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: customerEmail,
          fullName: customerName,
          role: 'CUSTOMER',
          phone: body.customerPhone || body.shippingAddress?.phone || null,
        },
      })
    }

    const firstVendor = await prisma.vendorProfile.findFirst({ select: { id: true } })
    const vendorId = body.items?.[0]?.vendorId || firstVendor?.id

    if (!vendorId) {
      return reply.code(400).send({
        success: false,
        error: { code: 'NO_VENDOR', message: 'No active vendor found in database.' },
      })
    }

    const orderNumber = `PKR-${Math.floor(100000 + Math.random() * 900000)}`

    const order = await prisma.order.create({
      data: {
        orderNumber,
        customerId: user.id,
        vendorId,
        status: 'PROCESSING',
        paymentStatus: 'PAID',
        currency: 'PKR',
        subtotal: totalAmount,
        totalAmount,
        paymentMethod: body.paymentMethod === 'cod' ? 'CASH_ON_DELIVERY' : 'CARD',
      },
    })

    return reply.send({
      success: true,
      data: {
        id: order.orderNumber,
        orderNumber: order.orderNumber,
        customer: user.fullName,
        amount: totalAmount,
        status: 'processing',
        payment: body.paymentMethod || 'COD',
        date: new Date().toDateString(),
      },
    })
  })
}
