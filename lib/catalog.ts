import type { Category, Product } from '@/types'

// EDIT HERE: This is the single, static catalogue used throughout the website.
// Replace the names, codes, descriptions and image URLs below whenever your range changes.
const createdAt = new Date('2026-08-04T00:00:00.000Z')

export const brand = {
  name: 'MKAY MAKEOVER',
  shortName: 'MKAY',
  tagline: 'Thoughtfully made makeup boxes for beauty professionals and wholesale partners',
  email: 'hello@mkaymakeover.in',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  city: 'India',
}

export const catalogCategories: Category[] = [
  {
    id: 'cat-vanity-boxes', name: 'Vanity Makeup Boxes', slug: 'vanity-makeup-boxes',
    description: 'Elegant storage boxes for makeup artists, salons and gifting.',
    image: '/product1.jpeg',
    parentId: null, isActive: true, sortOrder: 1, _count: { products: 2 },
  },
  {
    id: 'cat-travel-cases', name: 'Travel Makeup Cases', slug: 'travel-makeup-cases',
    description: 'Portable cases with thoughtful compartments and durable finishes.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    parentId: null, isActive: true, sortOrder: 2, _count: { products: 2 },
  },
  {
    id: 'cat-artist-kits', name: 'Professional Artist Kits', slug: 'professional-artist-kits',
    description: 'Hard-wearing kits created for professional makeup setups.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80',
    parentId: null, isActive: true, sortOrder: 3, _count: { products: 2 },
  },
  {
    id: 'cat-custom-boxes', name: 'Custom Makeup Boxes', slug: 'custom-makeup-boxes',
    description: 'Customisable makeup boxes for wholesale, gifting and brand orders.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    parentId: null, isActive: true, sortOrder: 4, _count: { products: 2 },
  },
]

const categoryBySlug = Object.fromEntries(catalogCategories.map((category) => [category.slug, category]))

function product(input: {
  id: string
  code: string
  name: string
  slug: string
  categorySlug: string
  material: string
  finish: string
  dimensions: string
  images: string[]
  description: string
  tags: string[]
  featured?: boolean
  trending?: boolean
  bestSeller?: boolean
}) : Product {
  const category = categoryBySlug[input.categorySlug]
  return {
    id: input.id, name: input.name, slug: input.slug, description: input.description,
    shortDesc: `${input.material} · ${input.finish}`,
    categoryId: category.id, category, basePrice: 0, comparePrice: null, moq: 1,
    tierPricing: [], sku: input.code, material: input.material, finish: input.finish,
    dimensions: input.dimensions, customizable: true, isActive: true,
    isFeatured: input.featured ?? false, isTrending: input.trending ?? false,
    isNewArrival: true, isBestSeller: input.bestSeller ?? false, isWholesale: true,
    totalStock: 0, soldCount: 0, avgRating: 5, reviewCount: 0, tags: input.tags,
    metaTitle: `${input.name} | MKAY MAKEOVER`, metaDescription: input.description, createdAt,
    images: input.images.map((url, index) => ({
      id: `${input.id}-image-${index + 1}`, url, alt: input.name, sortOrder: index, isMain: index === 0,
    })),
    variants: [],
  }
}

export const catalogProducts: Product[] = [
  product({
    id: 'mk-001', code: 'MK-001', name: 'Signature Blush Vanity Box', slug: 'signature-blush-vanity-box', categorySlug: 'vanity-makeup-boxes',
    material: 'Vegan leather wrapped board', finish: 'Blush pink with gold hardware', dimensions: '28 × 20 × 18 cm',
    images: ['/product1.jpeg'],
    description: 'A refined vanity box with organised sections for palettes, lip colours, brushes and everyday beauty essentials.',
    tags: ['vanity box', 'blush', 'makeup storage'], featured: true, bestSeller: true,
  }),
  product({
    id: 'mk-002', code: 'MK-002', name: 'Pearl White Mirror Makeup Box', slug: 'pearl-white-mirror-makeup-box', categorySlug: 'vanity-makeup-boxes',
    material: 'Structured board with mirror', finish: 'Pearl white and champagne gold', dimensions: '30 × 22 × 19 cm',
    images: ['/product2.jpeg'],
    description: 'A polished display-style makeup box with an integrated mirror and roomy compartments for premium makeup collections.',
    tags: ['mirror box', 'white', 'gift box'], featured: true,
  }),
  product({
    id: 'mk-003', code: 'MK-003', name: 'Soft Rose Travel Case', slug: 'soft-rose-travel-case', categorySlug: 'travel-makeup-cases',
    material: 'Water-resistant fabric', finish: 'Soft rose with washable lining', dimensions: '23 × 18 × 10 cm',
    images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80'],
    description: 'A compact travel companion with adjustable dividers, designed to keep skincare, brushes and makeup neatly in place.',
    tags: ['travel case', 'makeup bag', 'rose'], trending: true,
  }),
  product({
    id: 'mk-004', code: 'MK-004', name: 'Classic Black Artist Case', slug: 'classic-black-artist-case', categorySlug: 'travel-makeup-cases',
    material: 'Textured PU with aluminium frame', finish: 'Matte black', dimensions: '32 × 24 × 20 cm',
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80'],
    description: 'A structured, easy-to-carry makeup case with a professional silhouette for compact artist kits and travel work.',
    tags: ['artist case', 'black', 'travel'], bestSeller: true,
  }),
  product({
    id: 'mk-005', code: 'MK-005', name: 'Studio Pro Makeup Trolley', slug: 'studio-pro-makeup-trolley', categorySlug: 'professional-artist-kits',
    material: 'Reinforced ABS shell', finish: 'Champagne metal details', dimensions: 'Custom compartments',
    images: ['/product3.jpeg'],
    description: 'A spacious professional trolley with modular storage to help artists carry a complete working kit with confidence.',
    tags: ['trolley', 'professional', 'artist kit'], featured: true,
  }),
  product({
    id: 'mk-006', code: 'MK-006', name: 'Brush & Essentials Organizer', slug: 'brush-essentials-organizer', categorySlug: 'professional-artist-kits',
    material: 'Fabric-lined hard case', finish: 'Neutral beige', dimensions: '25 × 16 × 12 cm',
    images: ['https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80'],
    description: 'A tidy organiser for brushes, pencils and small beauty tools, made to elevate kits, counters and gift sets.',
    tags: ['brush organizer', 'essentials', 'beige'], trending: true,
  }),
  product({
    id: 'mk-007', code: 'MK-007', name: 'Custom Logo Beauty Box', slug: 'custom-logo-beauty-box', categorySlug: 'custom-makeup-boxes',
    material: 'Rigid board or art paper', finish: 'Custom logo, foil, embossing or UV', dimensions: 'Made to requirement',
    images: ['/product4.jpeg'],
    description: 'A tailored makeup box for salons, gifting and brand requirements, with room for custom branding, colours and inserts.',
    tags: ['custom logo', 'wholesale', 'beauty box'], featured: true, bestSeller: true,
  }),
  product({
    id: 'mk-008', code: 'MK-008', name: 'Kraft Gift Makeup Box', slug: 'kraft-gift-makeup-box', categorySlug: 'custom-makeup-boxes',
    material: 'Recycled kraft board', finish: 'Natural matte with custom print', dimensions: 'Made to requirement',
    images: ['https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'],
    description: 'A warm, minimal presentation box for makeup gifting and curated beauty sets, available with bespoke branding options.',
    tags: ['kraft', 'gift box', 'custom'], trending: true,
  }),
]

export const bestSellers = catalogProducts.filter((product) => product.isBestSeller)
export const featuredProducts = catalogProducts.filter((product) => product.isFeatured)
export const trendingProducts = catalogProducts.filter((product) => product.isTrending)
export const wholesaleProducts = catalogProducts

export const testimonials = [
  { id: 't-1', name: 'Nisha A.', company: 'Makeup Artist', text: 'The finishing is beautiful and the compartments make my kit feel genuinely organised.', rating: 5 },
  { id: 't-2', name: 'Riya P.', company: 'Beauty Studio', text: 'Our custom makeup boxes arrived exactly as discussed. They look lovely in our client kits.', rating: 5 },
  { id: 't-3', name: 'Aarav K.', company: 'Wholesale Partner', text: 'Clear communication, thoughtful samples and a premium result for our bulk requirement.', rating: 5 },
]

export function getProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug) ?? null
}

export function getCategoryBySlug(slug: string) {
  return catalogCategories.find((category) => category.slug === slug) ?? null
}