import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import type { Product } from '@/types'

interface ProductCarouselProps {
  eyebrow: string
  title: string
  subtitle?: string
  products: Product[]
  href?: string
  maxItems?: number
}

export default function ProductCarousel({
  eyebrow,
  title,
  subtitle,
  products,
  href = '/products',
  maxItems = 8,
}: ProductCarouselProps) {
  if (!products.length) return null

  const visibleProducts = products.slice(0, maxItems)

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-7">
          <p className="text-xs tracking-[0.22em] uppercase text-blush-600 font-semibold mb-3">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">{title}</h2>
          {subtitle && (
            <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {visibleProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-5 py-3 text-sm font-semibold hover:border-blush-300 hover:text-blush-600 hover:shadow-card transition-all"
          >
            View more
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}