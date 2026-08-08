export type CategoryRecord = {
    id: string;
    name: string;
    slug: string;
    image: string;
    count: number;
    status: 'active' | 'hidden';
    featured: boolean;
};
export type ProductRecord = {
    id: string;
    title: string;
    vendor: string;
    vendorId: string;
    category: string;
    categorySlug: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    stock: number;
    image: string;
    status: 'draft' | 'published' | 'scheduled' | 'archived';
    featured: boolean;
    freeShipping: boolean;
    updatedAt: string;
};
export type VendorRecord = {
    id: string;
    name: string;
    owner: string;
    email: string;
    status: 'active' | 'review' | 'suspended' | 'pending';
    verified: boolean;
    rating: number;
    products: number;
    sales: number;
    revenue: number;
    commission: number;
    pendingPayout: number;
    responseTime: string;
    followers: number;
    tagline: string;
};
export type OrderRecord = {
    id: string;
    customer: string;
    vendor: string;
    product: string;
    amount: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refund_pending';
    payment: 'Stripe' | 'PayPal' | 'COD';
    date: string;
    items: number;
};
export type DashboardAlert = {
    type: 'warning' | 'error' | 'info';
    message: string;
    time: string;
    action: string;
};
export type StorefrontSection = {
    id: string;
    type: string;
    label: string;
    visible: boolean;
    scheduled: boolean;
    order: number;
};
export declare const categories: CategoryRecord[];
export declare const products: ProductRecord[];
export declare const vendors: VendorRecord[];
export declare const orders: OrderRecord[];
export declare const dashboardSummary: {
    grossSales: number;
    netSales: number;
    orders: number;
    customers: number;
    vendors: number;
    products: number;
    conversionRate: number;
    averageOrderValue: number;
};
export declare const salesData: {
    date: string;
    revenue: number;
    orders: number;
}[];
export declare const categoryRevenue: {
    name: string;
    value: number;
}[];
export declare const alerts: DashboardAlert[];
export declare const storefrontSections: StorefrontSection[];
export declare const brands: {
    id: string;
    name: string;
    slug: string;
}[];
