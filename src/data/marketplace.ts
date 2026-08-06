export type Product = {
  id: string
  title: string
  vendor: string
  vendorId: string
  verified: boolean
  rating: number
  reviewCount: number
  price: number
  originalPrice: number
  discount: number
  image: string
  images?: string[]
  category: string
  categorySlug: string
  freeShipping: boolean
  badge?: 'bestseller' | 'flash' | 'new' | 'sponsored'
  stock: number
  installment?: string
  colors?: string[]
  sizes?: string[]
  description?: string
  features?: string[]
}

export type Vendor = {
  id: string
  name: string
  logo: string
  cover: string
  rating: number
  productCount: number
  positiveFeedback: number
  followers: number
  verified: boolean
  responseTime: string
  tagline: string
}

export type Category = {
  name: string
  slug: string
  image: string
  count: number
  color: string
}

export type Review = {
  id: string
  customer: string
  avatar: string
  product: string
  rating: number
  text: string
  date: string
  verified: boolean
  image?: string
}

export type Brand = {
  name: string
  slug: string
}

export const categories: Category[] = [
  { name: 'Mobiles', slug: 'mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=450&fit=crop&auto=format', count: 12840, color: '#EEF2FF' },
  { name: 'Electronics', slug: 'electronics', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=450&fit=crop&auto=format', count: 28490, color: '#F0FDF4' },
  { name: 'Laptops', slug: 'laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=450&fit=crop&auto=format', count: 4820, color: '#FFF7ED' },
  { name: 'Fashion', slug: 'fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=450&fit=crop&auto=format', count: 89640, color: '#FDF4FF' },
  { name: 'Beauty', slug: 'beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=450&fit=crop&auto=format', count: 31750, color: '#FFF1F2' },
  { name: 'Home & Living', slug: 'home', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=450&fit=crop&auto=format', count: 42380, color: '#F0F9FF' },
  { name: 'Gaming', slug: 'gaming', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=450&fit=crop&auto=format', count: 8640, color: '#F5F3FF' },
  { name: 'Accessories', slug: 'accessories', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=450&fit=crop&auto=format', count: 54230, color: '#FEFCE8' },
]

export const products: Product[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    vendor: 'SoundVault',
    vendorId: 'v1',
    verified: true,
    rating: 4.8,
    reviewCount: 3842,
    price: 279,
    originalPrice: 399,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1491927570842-0261e477d937?w=800&h=800&fit=crop&auto=format',
    ],
    category: 'Electronics',
    categorySlug: 'electronics',
    freeShipping: true,
    badge: 'bestseller',
    stock: 127,
    installment: '4 × $69.75',
    colors: ['Black', 'Silver', 'Midnight Blue'],
    description: 'Industry-leading noise cancellation with exceptional sound quality. The WH-1000XM5 features eight microphones and two processors for the best noise cancellation Sony has ever achieved. Up to 30-hour battery life, multipoint connection, and Speak-to-Chat technology.',
    features: ['30hr battery', 'Industry-leading ANC', 'Multipoint connection', 'Speak-to-Chat', 'Hi-Res Audio', 'Foldable design'],
  },
  {
    id: '2',
    title: 'Apple iPhone 15 Pro — 256GB Natural Titanium',
    vendor: 'iZone Official',
    vendorId: 'v2',
    verified: true,
    rating: 4.9,
    reviewCount: 7294,
    price: 999,
    originalPrice: 1099,
    discount: 9,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop&auto=format',
    ],
    category: 'Mobiles',
    categorySlug: 'mobiles',
    freeShipping: true,
    badge: 'bestseller',
    stock: 48,
    installment: '12 × $83.25',
    colors: ['Natural Titanium', 'Black Titanium', 'White Titanium', 'Blue Titanium'],
    sizes: ['128GB', '256GB', '512GB', '1TB'],
    description: 'iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    features: ['A17 Pro chip', 'Titanium design', 'Action Button', 'ProRes video', 'USB 3', '5G capable'],
  },
  {
    id: '3',
    title: 'MacBook Air M3 — 13-inch, 16GB RAM, 512GB SSD',
    vendor: 'TechHub Pro',
    vendorId: 'v3',
    verified: true,
    rating: 4.9,
    reviewCount: 2841,
    price: 1299,
    originalPrice: 1499,
    discount: 13,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop&auto=format',
    ],
    category: 'Laptops',
    categorySlug: 'laptops',
    freeShipping: true,
    badge: 'bestseller',
    stock: 32,
    installment: '12 × $108.25',
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Sky Blue'],
    description: 'MacBook Air with the M3 chip. Strikingly thin and impossibly fast. With up to 18 hours of battery life and all-day performance, MacBook Air is the ultimate everyday laptop.',
    features: ['Apple M3 chip', '18hr battery', 'Liquid Retina display', 'MagSafe charging', '1080p FaceTime HD', 'Two Thunderbolt ports'],
  },
  {
    id: '4',
    title: "Nike Air Max 270 — Men's Running Shoes",
    vendor: 'NikeWorld',
    vendorId: 'v4',
    verified: true,
    rating: 4.7,
    reviewCount: 5621,
    price: 89,
    originalPrice: 150,
    discount: 41,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&h=800&fit=crop&auto=format',
    ],
    category: 'Fashion',
    categorySlug: 'fashion',
    freeShipping: true,
    badge: 'flash',
    stock: 84,
    colors: ['Black/White', 'Navy/Red', 'All White', 'Triple Black'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    description: "Nike Air Max 270 delivers a bold look with Nike's first lifestyle Air unit in the heel. The large window showcases the Air unit for a striking look that is both comfortable and stylish.",
    features: ['Max Air 270 unit', 'Foam midsole', 'Mesh upper', 'Rubber outsole', 'Cushioned insole'],
  },
  {
    id: '5',
    title: 'The Ordinary Hyaluronic Acid 2% + B5 Hydrating Serum',
    vendor: 'BeautyVault',
    vendorId: 'v5',
    verified: true,
    rating: 4.6,
    reviewCount: 12843,
    price: 11,
    originalPrice: 19,
    discount: 42,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop&auto=format',
    ],
    category: 'Beauty',
    categorySlug: 'beauty',
    freeShipping: false,
    badge: 'flash',
    stock: 9,
    description: 'This formula combines low-, medium- and high-molecular weight Hyaluronic Acid with a Hyaluronic Acid Crosspolymer for multi-depth hydration. It also contains pro-vitamin B5 which recharges skin moisture.',
    features: ['Multi-depth hydration', 'Pro-Vitamin B5', 'Vegan formula', 'Cruelty-free', 'All skin types', '30ml / 1 fl oz'],
  },
  {
    id: '6',
    title: 'Samsung Galaxy S24 Ultra — 512GB Titanium Gray',
    vendor: 'SmartGadgets',
    vendorId: 'v6',
    verified: true,
    rating: 4.8,
    reviewCount: 4128,
    price: 1149,
    originalPrice: 1299,
    discount: 12,
    image: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&h=600&fit=crop&auto=format',
    category: 'Mobiles',
    categorySlug: 'mobiles',
    freeShipping: true,
    stock: 61,
    installment: '12 × $95.75',
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'],
    sizes: ['256GB', '512GB', '1TB'],
    description: 'The Samsung Galaxy S24 Ultra is the ultimate Galaxy. With a built-in S Pen, Galaxy AI, and a 200MP camera, it redefines what a smartphone can do.',
    features: ['200MP Camera', 'Built-in S Pen', 'Galaxy AI', 'Titanium frame', '5000mAh battery', '45W fast charging'],
  },
  {
    id: '7',
    title: 'Casio G-Shock GA-2100 Carbon Core Guard Watch',
    vendor: 'WatchWorld',
    vendorId: 'v7',
    verified: true,
    rating: 4.8,
    reviewCount: 2934,
    price: 99,
    originalPrice: 130,
    discount: 24,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format',
    category: 'Accessories',
    categorySlug: 'accessories',
    freeShipping: true,
    badge: 'new',
    stock: 156,
    colors: ['Black', 'Grey', 'White'],
    description: 'The GA-2100 features a Carbon Core Guard structure using carbon fiber reinforced resin for the ultimate toughness in a slim profile design.',
    features: ['Carbon Core Guard', 'Shock resistant', '200M water resistant', 'World time 31 zones', 'LED light', '10-year battery'],
  },
  {
    id: '8',
    title: 'Herschel Little America Backpack — 25L Heritage',
    vendor: 'BagShop',
    vendorId: 'v8',
    verified: false,
    rating: 4.5,
    reviewCount: 1832,
    price: 68,
    originalPrice: 90,
    discount: 24,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&auto=format',
    category: 'Accessories',
    categorySlug: 'accessories',
    freeShipping: false,
    stock: 43,
    colors: ['Black', 'Navy', 'Forest', 'Tan'],
    badge: 'new',
    description: 'The Little America is the definitive Herschel Supply pack. Designed for everyday carry with a 15-inch laptop sleeve and signature striped liner.',
    features: ['25L capacity', '15" laptop sleeve', 'Striped fleece lining', 'Magnetic buckle straps', 'Side water bottle pocket'],
  },
  {
    id: '9',
    title: 'Sony A7 III Full-Frame Mirrorless Camera Body',
    vendor: 'CameraHouse',
    vendorId: 'v9',
    verified: true,
    rating: 4.9,
    reviewCount: 1492,
    price: 1799,
    originalPrice: 2199,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764b49?w=600&h=600&fit=crop&auto=format',
    category: 'Electronics',
    categorySlug: 'electronics',
    freeShipping: true,
    badge: 'bestseller',
    stock: 22,
    installment: '12 × $149.92',
    description: 'The Sony a7 III features a 24.2MP back-illuminated Exmor R CMOS sensor that delivers outstanding image quality with wide dynamic range.',
    features: ['24.2MP BSI sensor', '693 phase detect AF points', '10fps burst', '4K video', '710 shot battery', 'Dual SD slots'],
  },
  {
    id: '10',
    title: 'Dyson Supersonic Hair Dryer — Professional Edition',
    vendor: 'HomeElite',
    vendorId: 'v10',
    verified: true,
    rating: 4.8,
    reviewCount: 8743,
    price: 329,
    originalPrice: 429,
    discount: 23,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop&auto=format',
    category: 'Beauty',
    categorySlug: 'beauty',
    freeShipping: true,
    badge: 'bestseller',
    stock: 37,
    colors: ['Prussian Blue', 'Vinca Blue', 'Bright Nickel'],
    installment: '4 × $82.25',
    description: 'The Dyson Supersonic hair dryer is engineered to protect hair from extreme heat damage. With a small, powerful motor and intelligent heat control.',
    features: ['Fast drying', 'Intelligent heat control', 'Magnetic attachments', 'Acoustically tuned', 'HEPA filter', '3 speed settings'],
  },
]

export const flashSaleProducts: Product[] = [
  { ...products[3], badge: 'flash' as const, stock: 7, price: 79, discount: 47 },
  { ...products[4], badge: 'flash' as const, stock: 9 },
  { ...products[0], badge: 'flash' as const, stock: 3, price: 199, discount: 50 },
  { ...products[6], badge: 'flash' as const, stock: 15, price: 69, discount: 47 },
]

export const vendors: Vendor[] = [
  {
    id: 'v1',
    name: 'SoundVault',
    logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=80&h=80&fit=crop&auto=format',
    cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    productCount: 284,
    positiveFeedback: 97,
    followers: 18400,
    verified: true,
    responseTime: '< 1 hour',
    tagline: 'Premium audio for every lifestyle',
  },
  {
    id: 'v2',
    name: 'iZone Official',
    logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop&auto=format',
    cover: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=300&fit=crop&auto=format',
    rating: 4.9,
    productCount: 142,
    positiveFeedback: 99,
    followers: 84200,
    verified: true,
    responseTime: '< 30 min',
    tagline: "Your authorised Apple destination",
  },
  {
    id: 'v3',
    name: 'TechHub Pro',
    logo: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=80&h=80&fit=crop&auto=format',
    cover: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=300&fit=crop&auto=format',
    rating: 4.7,
    productCount: 421,
    positiveFeedback: 96,
    followers: 37600,
    verified: true,
    responseTime: '< 2 hours',
    tagline: 'Laptops & computing, expertly sourced',
  },
  {
    id: 'v4',
    name: 'NikeWorld',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop&auto=format',
    cover: 'https://images.unsplash.com/photo-1500776532686-98b3ea8c1fc2?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    productCount: 892,
    positiveFeedback: 98,
    followers: 142800,
    verified: true,
    responseTime: '< 1 hour',
    tagline: 'Just Do It — official Nike retailer',
  },
]

export const reviews: Review[] = [
  {
    id: 'r1',
    customer: 'Sarah M.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    product: 'Sony WH-1000XM5',
    rating: 5,
    text: 'Absolutely incredible noise cancellation. I use these on my daily commute and they completely transform the experience. Sound quality is unmatched — everything just disappears.',
    date: 'Dec 14, 2024',
    verified: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format',
  },
  {
    id: 'r2',
    customer: 'James R.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    product: 'MacBook Air M3',
    rating: 5,
    text: "The M3 chip is a genuine leap forward. Everything is buttery smooth, battery lasts genuinely all day, and the display is gorgeous. Best laptop I've ever owned.",
    date: 'Jan 3, 2025',
    verified: true,
  },
  {
    id: 'r3',
    customer: 'Priya K.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
    product: 'The Ordinary Serum',
    rating: 5,
    text: 'My skin has completely transformed after 4 weeks. Getting compliments daily. Hydration lasts all day and the texture is so light it disappears instantly.',
    date: 'Nov 28, 2024',
    verified: true,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&auto=format',
  },
  {
    id: 'r4',
    customer: 'Omar A.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format',
    product: 'Nike Air Max 270',
    rating: 4,
    text: 'Super comfortable for long walks. The cushioning is excellent and they look premium in person. Arrived in 2 days with great packaging. Sizing is true to size.',
    date: 'Dec 22, 2024',
    verified: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format',
  },
]

export const brands: Brand[] = [
  { name: 'Apple', slug: 'apple' },
  { name: 'Samsung', slug: 'samsung' },
  { name: 'Nike', slug: 'nike' },
  { name: 'Adidas', slug: 'adidas' },
  { name: 'Sony', slug: 'sony' },
  { name: 'Xiaomi', slug: 'xiaomi' },
  { name: 'Dyson', slug: 'dyson' },
  { name: 'Casio', slug: 'casio' },
]
