import type { Category, Product } from '@/types'

// EDIT HERE: This is the single, static catalogue used throughout the website.
// Replace the names, codes, descriptions and image URLs below whenever your range changes.
const createdAt = new Date('2026-08-04T00:00:00.000Z')

export const brand = {
  name: 'MKAY MAKEOVER',
  shortName: 'MKAY',
  tagline: 'Thoughtfully made makeup boxes for beauty professionals and wholesale partners',
  email: 'mkayvanity@gmail.com',
  phone: '+91 98914 44433',
  phoneAlt: '+91 98917 77788',
  whatsapp: '+91 98914 44433',
  instagram: '@mkay.vanity',
  instagramUrl: 'https://instagram.com/mkay.vanity',
  city: 'New Delhi, India',
  founders: 'Amit Mehta & Vikas Mehta',
  established: 2017,
}

export const catalogCategories: Category[] = [
  {
    id: 'cat-vanity-boxes', name: 'Vanity Makeup Boxes', slug: 'vanity-makeup-boxes',
    description: 'Elegant storage boxes for makeup artists, salons and gifting.',
    image: '/product1.jpeg',
    parentId: null, isActive: true, sortOrder: 1,
  },
  {
    id: 'cat-travel-cases', name: 'Travel Makeup Cases', slug: 'travel-makeup-cases',
    description: 'Portable cases with thoughtful compartments and durable finishes.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    parentId: null, isActive: true, sortOrder: 2,
  },
  {
    id: 'cat-custom-boxes', name: 'Custom Makeup Boxes', slug: 'custom-makeup-boxes',
    description: 'Customisable makeup boxes for wholesale, gifting and brand orders. Designs are provided by you — share your requirement and we bring it to life.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    parentId: null, isActive: true, sortOrder: 3,
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

// TEMPLATE — copy this block for every new product.
// 1. Change the id (unique, lowercase, hyphenated) and code (your product code, e.g. MKAY-BLACK-2).
// 2. Change the slug to match the name (lowercase, hyphenated, no special characters).
// 3. Set categorySlug to one of: 'vanity-makeup-boxes' | 'travel-makeup-cases' | 'custom-makeup-boxes'.
// 4. Drop your image file straight into the public/ folder and reference it as '/your-file-name.jpeg'.
//    (You can list more than one image in the array if you have multiple angles.)
// 5. Ask Claude for the name, material, finish, dimensions, description and tags for the image — paste them in.
// 6. Set featured: true only for products you want on the homepage grid (max 8 total).
//
// product({
//   id: 'unique-id', code: 'MKAY-CODE', name: 'Product Name', slug: 'product-name', categorySlug: 'travel-makeup-cases',
//   material: '', finish: '', dimensions: '',
//   images: ['/your-file-name.jpeg'],
//   description: '',
//   tags: [], featured: false,
// }),

export const catalogProducts: Product[] = [
  product({
    id: 'mkay-black-1', code: 'MKAY-BLACK-1', name: 'Matte Black Diamond Trolley Case', slug: 'matte-black-diamond-trolley-case', categorySlug: 'travel-makeup-cases',
    material: 'Aluminium frame with diamond-textured panels', finish: 'Matte black', dimensions: 'Custom compartments',
    images: ['/Product_1.jpeg'],
    description: 'A rugged rolling trolley case built for makeup artists on the move. Fitted with a retractable telescopic handle, smooth 360° wheels and multiple pull-out trays that fan open for easy access to products and tools, then fold flat for compact storage and transport.',
    tags: ['trolley case', 'black', 'rolling case', 'artist kit'], featured: true,
  }),

  product({
    id: 'mkay-royal-aaa', code: 'MKAY-ROYAL-AAA', name: 'Royal Collection Rose Gold Vanity Case', slug: 'royal-collection-rose-gold-vanity-case', categorySlug: 'vanity-makeup-boxes',
    material: 'Hardshell ABS/PC with ridged corner guards', finish: 'Rose gold with tonal stitched handles', dimensions: 'Compact hardshell case',
    images: ['/Product_2.jpeg'],
    description: 'A statement piece from the Royal Collection, finished in a lustrous rose gold hardshell with ribbed detailing and reinforced corner guards. Twin top handles and a 3-digit combination lock add a secure, boutique-luggage feel, while the interior opens to a fully branded satin lining with a zip mesh pocket to keep smaller essentials in place.',
    tags: ['vanity case', 'rose gold', 'hardshell', 'lockable', 'royal collection'], featured: true,
  }),

  product({
  id: 'mkay-3535', code: 'MKAY-3535', name: 'Multi-Tray Aluminium Vanity Case', slug: 'multi-tray-aluminium-vanity-case', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with clear acrylic top and diamond-textured metallic panels', finish: 'Available in red, peach-gold and pink', dimensions: 'Two-tier case with fold-out trays',
  images: ['/Product_3.jpeg'],
  description: 'A professional-grade vanity case with a clear acrylic domed lid revealing a built-in mirror and a fan of red fold-out trays for easy access to products. The two-tier aluminium body features diamond-textured side panels, a 3-digit combination lock and sturdy corner guards, with twin folding top handles for carrying. Available in red, peach-gold and pink finishes.',
  tags: ['vanity case', 'aluminium', 'combination lock', 'fold-out trays', 'multi-tier'], featured: true,
}),

product({
  id: 'mkay-2525', code: 'MKAY-2525', name: 'Two-Tier Aluminium Beauty Case', slug: 'two-tier-aluminium-beauty-case', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with clear acrylic top and diamond-textured metallic panels', finish: 'Available in red, pink and peach', dimensions: 'Compact two-tier case with fold-out trays',
  images: ['/Product_4.jpeg'],
  description: 'A compact two-tier vanity case with a clear acrylic domed lid that lifts to reveal a pair of red fold-out trays for organising smaller items. The lower tier features diamond-textured side panels, a sturdy top carry handle and a 3-digit combination lock for secure closure. Available in red, pink and peach finishes.',
  tags: ['vanity case', 'aluminium', 'combination lock', 'fold-out trays', 'compact'], featured: true,
}),

product({
  id: 'mkay-1212', code: 'MKAY-1212', name: 'Diamond-Textured Vanity Case with Mirror', slug: 'diamond-textured-vanity-case-mirror', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with diamond-textured metallic panels', finish: 'Available in pink, rose gold and red', dimensions: 'Two-tier case with fold-out trays and mirror',
  images: ['/Product_5.jpeg'],
  description: 'A striking diamond-textured vanity case with a padded top handle and 3-digit combination lock. The lid opens to reveal a fitted mirror and a spacious red velvet-lined interior with fold-out side trays for organised storage, plus a fixed lower compartment for larger items. Available in pink, rose gold and red finishes.',
  tags: ['vanity case', 'aluminium', 'combination lock', 'mirror', 'fold-out trays', 'diamond texture'], featured: true,
}),

product({
  id: 'mkay-888', code: 'MKAY-888', name: 'Mirrored Jewellery & Makeup Case', slug: 'mirrored-jewellery-makeup-case', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with textured and diamond-embossed metallic panels', finish: 'Available in pink, peach, red and rose gold diamond texture', dimensions: 'Two-tier case with fitted mirror and pull-out drawer',
  images: ['/Product_6.jpeg'],
  description: 'A dressing-table-style case with a built-in mirror and cream-lined interior fitted with brush loops, two swing-out trays and a smooth pull-out drawer for jewellery and accessories. Compact and lockable with a sturdy top handle, it works equally well as a makeup organiser or jewellery box. Available in pink, peach, red and rose gold diamond-textured finishes.',
  tags: ['vanity case', 'jewellery box', 'mirror', 'pull-out drawer', 'aluminium'], featured: true,
}),

product({
  id: 'mkay-2626', code: 'MKAY-2626', name: 'Glitter Print Compact Vanity Box', slug: 'glitter-print-compact-vanity-box', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with printed glitter-finish panels', finish: 'Available in floral, heart-print, woven-texture and multicolour glitter patterns', dimensions: 'Compact single-tier box',
  images: ['/Product_7.jpeg'],
  description: 'A playful, compact vanity box with a red velvet-lined interior and a fitted storage tray for smaller items. The sturdy aluminium frame is wrapped in a vibrant glitter-print exterior, secured with metal clasps and topped with a folding carry handle. Available in a range of fun prints including florals, hearts, woven-texture gold and vibrant multicolour patterns.',
  tags: ['vanity box', 'glitter print', 'compact', 'aluminium', 'gift box'], featured: true,
}),

product({
  id: 'mkay-2121', code: 'MKAY-2121', name: 'Clear-Panel Glitter Vanity Case with Mirror', slug: 'clear-panel-glitter-vanity-case-mirror', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with clear acrylic side panels', finish: 'Sparkle glitter interior, available in rose gold, red and pink', dimensions: 'Two-tier case with fold-out side trays and mirror',
  images: ['/Product_8.jpeg'],
  description: 'A see-through statement case with clear acrylic side panels that show off the sparkling glitter-finished interior. The lid lifts to reveal a fitted mirror, while two fold-out side trays swing open on hinges for extra storage, all wrapped in a sturdy aluminium frame with a folding top handle. Available in rose gold, red and pink finishes.',
  tags: ['vanity case', 'clear panel', 'glitter', 'mirror', 'fold-out trays'], featured: true,
}),

product({
  id: 'mkay-royal-ccc', code: 'MKAY-ROYAL-CCC', name: 'Royal Collection Ribbed Hardshell Case', slug: 'royal-collection-ribbed-hardshell-case', categorySlug: 'travel-makeup-cases',
  material: 'Ribbed hardshell ABS/PC with metallic hardware and TSA-style combination lock', finish: 'Available in gold, red and cream', dimensions: 'Compact hardshell case with fitted interior organiser',
  images: ['/Product_9.jpeg'],
  description: 'A luxe piece from the Royal Collection, featuring a ribbed hardshell exterior with a contrast-tone top handle and polished metallic trims. The case opens to a fully branded interior with a zip-mesh divider to keep essentials organised and secure, closed with a built-in 3-digit combination lock. Available in gold, red and cream finishes.',
  tags: ['travel case', 'hardshell', 'royal collection', 'lockable', 'ribbed'], featured: true,
}),

product({
  id: 'mkay-1515a', code: 'MKAY-1515A', name: 'Multi-Level Cascading Vanity Case', slug: 'multi-level-cascading-vanity-case', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with clear acrylic panels and diamond-textured base', finish: 'Available in pink, rose gold and red', dimensions: 'Multi-tier case with cascading fold-out trays and mirror',
  images: ['/Product_10.jpeg'],
  description: 'A generously sized vanity case with a cascading set of fold-out trays that fan open in tiers for easy access to every layer, topped with a fitted mirror in the lid. Clear acrylic side panels and a diamond-textured lower body sit within a sturdy aluminium frame, secured with a combination lock and folding top handle. Available in pink, rose gold and red finishes.',
  tags: ['vanity case', 'multi-tier', 'cascading trays', 'mirror', 'aluminium'], featured: true,
}),

product({
  id: 'mkay-2424', code: 'MKAY-2424', name: 'Cascading Mirror Vanity Case with Clear Panels', slug: 'cascading-mirror-vanity-case-clear-panels', categorySlug: 'vanity-makeup-boxes',
  material: 'Aluminium frame with clear acrylic panels and diamond-textured lower body', finish: 'Sparkle glitter interior, available in pink, red and rose gold', dimensions: 'Multi-tier case with cascading trays and mirror',
  images: ['/Product_11.jpeg'],
  description: 'A dramatic multi-tier vanity case with three cascading glitter-lined trays that step down for easy access, topped by a fitted mirror in the lid. Clear acrylic front and side panels showcase the sparkling interior, framed by a diamond-textured lower body and a padded carry handle with combination lock. Available in pink, red and rose gold finishes.',
  tags: ['vanity case', 'multi-tier', 'cascading trays', 'clear panel', 'mirror', 'glitter'], featured: true,
}),

product({
  id: 'mkay-royal-bbb', code: 'MKAY-ROYAL-BBB', name: 'Royal Collection Vertical-Ridge Hardshell Case', slug: 'royal-collection-vertical-ridge-hardshell-case', categorySlug: 'travel-makeup-cases',
  material: 'Vertical-ridge hardshell ABS/PC with metallic hardware and TSA-style combination lock', finish: 'Available in gold, red and cream with tonal trims', dimensions: 'Compact hardshell case with fitted interior organiser',
  images: ['/Product_12.jpeg'],
  description: 'Another statement piece from the Royal Collection, finished in a vertical-ridge hardshell with a contrast-tone band across the front and a sturdy top handle with built-in combination lock. The interior opens to a fully branded organiser with a zip-mesh divider to keep essentials secure while travelling. Available in gold, red and cream finishes.',
  tags: ['travel case', 'hardshell', 'royal collection', 'lockable', 'vertical ridge'], featured: true,
}),

product({
  id: 'mkay-1414', code: 'MKAY-1414', name: 'Transparent Acrylic Vanity Case with Mirror', slug: 'transparent-acrylic-vanity-case-mirror', categorySlug: 'vanity-makeup-boxes',
  material: 'Fully transparent acrylic frame with diamond-textured base', finish: 'Glitter interior, available in pink and rose gold', dimensions: 'Two-tier case with fold-out side trays and mirror',
  images: ['/Product_13.jpeg'],
  description: 'A see-through statement case built almost entirely from clear acrylic, letting the sparkling glitter interior show through from every angle. The lid lifts to reveal a fitted mirror, with two glitter-lined trays folding out on either side for extra storage, all secured with dual metal clasps and a padded carry handle. Available in pink and rose gold finishes.',
  tags: ['vanity case', 'transparent acrylic', 'mirror', 'fold-out trays', 'glitter'], featured: true,
}),

product({
  id: 'mkay-abs-005', code: 'MKAY-ABS-005', name: 'Cute Bear-Face Hardshell Case', slug: 'cute-bear-face-hardshell-case', categorySlug: 'travel-makeup-cases',
  material: 'Moulded ABS hardshell with embossed bear-face design', finish: 'Available in blue, gold, purple, pink, cream and peach', dimensions: 'Compact hardshell case with zip-mesh interior organiser',
  images: ['/Product_14.jpeg'],
  description: 'A playful, compact case with an embossed teddy-bear face moulded into the hardshell front and a rounded top handle to match. The interior opens flat with a fully lined zip-mesh divider to keep essentials organised, closed securely with a built-in combination lock. Available in a fun range of pastel and metallic finishes including blue, gold, purple, pink, cream and peach.',
  tags: ['travel case', 'hardshell', 'bear design', 'lockable', 'cute'], featured: true,
}),

product({
  id: 'mkay-abs-001', code: 'MKAY-ABS-001', name: 'Corner-Rivet Hardshell Travel Case', slug: 'corner-rivet-hardshell-travel-case', categorySlug: 'travel-makeup-cases',
  material: 'Ribbed ABS hardshell with reinforced corner rivets and contrast trims', finish: 'Available in blue, gold, purple, pink, cream and peach', dimensions: 'Compact hardshell case with zip-mesh interior organiser',
  images: ['/Product_15.jpeg'],
  description: 'A mini-luggage style case with a ribbed hardshell body, riveted corner guards and a contrast-tone top handle for a sturdy, travel-ready look. The interior opens flat with a fully lined zip-mesh divider for organised packing, and the peach version adds a built-in combination lock for extra security. Available in blue, gold, purple, pink, cream and peach finishes.',
  tags: ['travel case', 'hardshell', 'riveted corners', 'lockable', 'ABS collection'], featured: true,
}),

product({
  id: 'mkay-abs-007', code: 'MKAY-ABS-007', name: 'Curved-Rib Rounded Hardshell Case', slug: 'curved-rib-rounded-hardshell-case', categorySlug: 'travel-makeup-cases',
  material: 'Curved-ribbed ABS hardshell with rounded corners and matching handle', finish: 'Available in blue, gold, purple, pink, cream and peach', dimensions: 'Compact hardshell case with zip-mesh interior organiser',
  images: ['/Product_16.jpeg'],
  description: 'A softly rounded hardshell case with a distinctive curved-rib texture flowing across the front and a tonal top handle for a smooth, modern silhouette. The interior opens flat with a fully lined zip-mesh divider for organised packing, and the peach version includes a built-in combination lock. Available in blue, gold, purple, pink, cream and peach finishes.',
  tags: ['travel case', 'hardshell', 'rounded corners', 'lockable', 'ABS collection'], featured: true,
}),

product({
  id: 'mkay-abs-ccc', code: 'MKAY-ABS-CCC', name: 'Vertical-Ribbed Hardshell Case with USB Port', slug: 'vertical-ribbed-hardshell-case-usb', categorySlug: 'travel-makeup-cases',
  material: 'Vertical-ribbed ABS hardshell with metallic hardware, combination lock and USB port', finish: 'Available in cream, wine, taupe, lilac, blush, brown and magenta', dimensions: 'Compact hardshell case with zip-mesh interior organiser',
  images: ['/Product_17.jpeg'],
  description: 'A sleek vertical-ribbed hardshell case with polished metallic trims, a built-in combination lock and a convenient USB charging port on the side. The interior opens flat with a fully lined zip-mesh divider to keep everything organised on the go. Available in a wide range of finishes including cream, wine, taupe, lilac, blush, brown and magenta.',
  tags: ['travel case', 'hardshell', 'USB port', 'lockable', 'ABS collection'], featured: true,
}),

product({
  id: 'mkay-abs-apple', code: 'MKAY-ABS-APPLE', name: 'Circular-Emblem Ribbed Hardshell Case', slug: 'circular-emblem-ribbed-hardshell-case', categorySlug: 'travel-makeup-cases',
  material: 'Vertical-ribbed ABS hardshell with circular emblem detail and metallic hardware', finish: 'Available in cream, wine, taupe, lilac, beige, pink and red', dimensions: 'Compact hardshell case with zip-mesh interior organiser',
  images: ['/Product_18.jpeg'],
  description: 'A refined ribbed hardshell case featuring a distinctive circular emblem pressed into the front panel and a rose-gold top handle for a polished finish. The interior opens flat with a fully lined zip-mesh divider, keeping essentials neatly organised while travelling. Available in cream, wine, taupe, lilac, beige, pink and red finishes.',
  tags: ['travel case', 'hardshell', 'circular emblem', 'ABS collection'], featured: true,
}),

product({
  id: 'mkay-abs-mango', code: 'MKAY-ABS-MANGO', name: 'Wave-Textured Two-Tone Hardshell Case', slug: 'wave-textured-two-tone-hardshell-case', categorySlug: 'travel-makeup-cases',
  material: 'ABS hardshell with wave-textured lower panel and ridged upper panel', finish: 'Two-tone finish, available in cream, wine, taupe, lilac, beige, pink and red', dimensions: 'Compact hardshell case with zip-mesh interior organiser',
  images: ['/Product_19.jpeg'],
  description: 'A distinctive two-tone hardshell case combining a vertically ridged upper half with a wave-textured lower panel, finished with a metallic top handle for a refined look. The interior opens flat with a fully lined zip-mesh divider to keep essentials organised while travelling. Available in cream, wine, taupe, lilac, beige, pink and red finishes.',
  tags: ['travel case', 'hardshell', 'two-tone', 'wave texture', 'ABS collection'], featured: true,
}),

product({
  id: 'mkay-abs-eee', code: 'MKAY-ABS-EEE', name: 'Two-Tier Panel Hardshell Case', slug: 'two-tier-panel-hardshell-case', categorySlug: 'travel-makeup-cases',
  material: 'ABS hardshell with two-tier horizontal ridge panels and combination lock', finish: 'Available in cream, wine, taupe, lilac, beige, pink and red', dimensions: 'Compact hardshell case with fully branded interior organiser',
  images: ['/Product_20.jpeg'],
  description: 'A structured hardshell case with a distinct two-tier ridged panel design and a built-in top combination lock for added security. The interior opens flat to a fully branded fabric lining with a zip-mesh divider, keeping essentials organised and in place. Available in cream, wine, taupe, lilac, beige, pink and red finishes.',
  tags: ['travel case', 'hardshell', 'two-tier panel', 'lockable', 'ABS collection'], featured: true,
}),

  // 👇 Add new products below this line, one per image, using the template above.
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