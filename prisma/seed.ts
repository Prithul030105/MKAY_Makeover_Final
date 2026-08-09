import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding GlamBox database...')

  // Categories
  const cats = await Promise.all([
    prisma.category.upsert({ where: { slug: 'lipstick-boxes' }, update: {}, create: { name: 'Lipstick Boxes', slug: 'lipstick-boxes', description: 'Premium lipstick packaging boxes' } }),
    prisma.category.upsert({ where: { slug: 'skincare' }, update: {}, create: { name: 'Skincare Packaging', slug: 'skincare', description: 'Custom skincare packaging solutions' } }),
    prisma.category.upsert({ where: { slug: 'perfume-boxes' }, update: {}, create: { name: 'Perfume Boxes', slug: 'perfume-boxes', description: 'Luxury perfume packaging' } }),
    prisma.category.upsert({ where: { slug: 'gift-sets' }, update: {}, create: { name: 'Gift Sets', slug: 'gift-sets', description: 'Cosmetic gift set packaging' } }),
    prisma.category.upsert({ where: { slug: 'eyelash-boxes' }, update: {}, create: { name: 'Eyelash Boxes', slug: 'eyelash-boxes', description: 'Custom eyelash packaging' } }),
    prisma.category.upsert({ where: { slug: 'eco-friendly' }, update: {}, create: { name: 'Eco-Friendly', slug: 'eco-friendly', description: 'Sustainable packaging solutions' } }),
  ])

  const products = [
    { name: 'Magnetic Closure Lipstick Box — Matte Black', slug: 'magnetic-lipstick-box-matte-black', categorySlug: 'lipstick-boxes', basePrice: 55, comparePrice: 75, moq: 100, material: 'Rigid Board', finish: 'Matte Lamination', isFeatured: true, isBestSeller: true },
    { name: 'Kraft Paper Skincare Box — Natural Series', slug: 'kraft-skincare-box-natural', categorySlug: 'skincare', basePrice: 38, comparePrice: 50, moq: 50, material: 'Kraft Paper', finish: 'Natural Uncoated', isFeatured: true, isNewArrival: true },
    { name: 'Gold Foil Perfume Box — Luxury Edition', slug: 'gold-foil-perfume-box-luxury', categorySlug: 'perfume-boxes', basePrice: 95, comparePrice: 120, moq: 50, material: 'Art Paper 300gsm', finish: 'Gold Foil + Emboss', isFeatured: true, isTrending: true },
    { name: 'Custom Eyelash Box — Window Cut Clear', slug: 'custom-eyelash-box-window', categorySlug: 'eyelash-boxes', basePrice: 30, comparePrice: 42, moq: 100, material: 'Cardboard 250gsm', finish: 'UV Gloss', isTrending: true },
    { name: 'Magnetic Gift Box — Rose Gold Foil', slug: 'magnetic-gift-box-rose-gold', categorySlug: 'gift-sets', basePrice: 75, comparePrice: 95, moq: 50, material: 'Rigid Board', finish: 'Rose Gold Foil', isFeatured: true },
    { name: 'Serum Box — Minimalist White Spot UV', slug: 'serum-box-minimalist-white', categorySlug: 'skincare', basePrice: 42, comparePrice: 58, moq: 50, material: 'Art Paper', finish: 'Spot UV', isNewArrival: true },
    { name: 'Biodegradable Skincare Box — Eco Series', slug: 'biodegradable-skincare-box', categorySlug: 'eco-friendly', basePrice: 35, comparePrice: 48, moq: 50, material: 'Recycled Kraft', finish: 'Soy Ink Print', isFeatured: true },
    { name: 'Luxury Blush Palette Box — Full CMYK', slug: 'luxury-blush-palette-box', categorySlug: 'gift-sets', basePrice: 60, comparePrice: 80, moq: 100, material: 'Rigid Board', finish: 'Full CMYK Print', isTrending: true },
  ]

  for (const p of products) {
    const cat = cats.find(c => c.slug === p.categorySlug)!
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        description: `Premium ${p.name} with ${p.finish} finish. Made from ${p.material}. Minimum order: ${p.moq} units. Custom printing available.`,
        shortDesc: `${p.material} · ${p.finish} · MOQ ${p.moq}`,
        categoryId: cat.id,
        basePrice: p.basePrice,
        comparePrice: p.comparePrice,
        moq: p.moq,
        material: p.material,
        finish: p.finish,
        customizable: true,
        isFeatured: p.isFeatured || false,
        isTrending: p.isTrending || false,
        isNewArrival: p.isNewArrival || false,
        isBestSeller: p.isBestSeller || false,
        totalStock: 10000,
        tags: ['cosmetic packaging', 'custom boxes', p.categorySlug],
      },
    })
  }

  // Testimonials
  await prisma.testimonial.createMany({
    skipDuplicates: true,
    data: [
      { name: 'Priya Sharma', company: 'Bloom Beauty Co.', text: 'GlamBox transformed our brand packaging. Quality is exceptional!', rating: 5, tag: 'Retail' },
      { name: 'Rahul Mehta', company: 'Cosmetix Pvt Ltd', text: 'Ordered 5000 boxes — on time, perfect quality, GST invoice seamless.', rating: 5, tag: 'Wholesale' },
      { name: 'Ananya Kapoor', company: 'Glow Naturals', text: 'Eco kraft boxes are perfect for our organic range. Will reorder!', rating: 5, tag: 'Eco Range' },
    ],
  })

  console.log('✅ Seeding complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())