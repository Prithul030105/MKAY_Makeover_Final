import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { catalogCategories } from '@/lib/catalog'

export default function CategoryShowcase() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-blush-600 font-semibold mb-2">
              Explore by collection
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Find the makeup box that fits your work.</h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold hover:text-blush-600 transition-colors"
          >
            View all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          {catalogCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group min-w-[138px] md:min-w-[164px] snap-start text-center"
            >
              <div className="relative mx-auto h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-full bg-muted shadow-card ring-1 ring-border transition-all group-hover:-translate-y-1 group-hover:shadow-hover">
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="160px"
                  />
                )}
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-snug">{category.name}</h3>
              {/* <p className="text-xs text-muted-foreground mt-1">{category._count?.products ?? 0} designs</p> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
