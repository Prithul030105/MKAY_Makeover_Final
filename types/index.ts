export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  parentId: string | null
  isActive: boolean
  sortOrder: number
  _count?: { products: number }
}

export interface ProductImage {
  id: string
  url: string
  alt: string | null
  sortOrder: number
  isMain: boolean
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDesc: string | null
  categoryId: string
  basePrice: number
  comparePrice: number | null
  moq: number
  tierPricing: { minQty: number; maxQty: number | null; price: number; label: string }[]
  sku: string | null
  material: string | null
  finish: string | null
  dimensions: string | null
  customizable: boolean
  isActive: boolean
  isFeatured: boolean
  isTrending: boolean
  isNewArrival: boolean
  isBestSeller: boolean
  isWholesale: boolean
  totalStock: number
  soldCount: number
  avgRating: number
  reviewCount: number
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  createdAt: Date
  category: Category
  images: ProductImage[]
  variants: []
}
