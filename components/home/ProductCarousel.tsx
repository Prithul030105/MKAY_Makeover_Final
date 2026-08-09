'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import type { Product } from '@/types'

interface ProductCarouselProps {
  eyebrow: string
  title: string
  subtitle?: string
  products: Product[]
  href?: string
}

export default function ProductCarousel({
  eyebrow,
  title,
  subtitle,
  products,
  href = '/products',
}: ProductCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const distance = Math.min(scroller.clientWidth * 0.85, 720)
    scroller.scrollBy({
      left: direction === 'right' ? distance : -distance,
      behavior: 'smooth',
    })
  }

  if (!products.length) return null

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div className="max-w-2xl">
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

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="h-10 w-10 rounded-full border border-border bg-white shadow-card inline-flex items-center justify-center hover:border-blush-300 hover:text-blush-600 transition-colors"
              aria-label="Scroll products left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="h-10 w-10 rounded-full border border-border bg-white shadow-card inline-flex items-center justify-center hover:border-blush-300 hover:text-blush-600 transition-colors"
              aria-label="Scroll products right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[72%] xs:min-w-[62%] sm:min-w-[42%] md:min-w-[30%] lg:min-w-[23%] xl:min-w-[21%] snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
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
