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
}
