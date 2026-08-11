import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { brand } from '@/lib/catalog'

const points = [
  'Manufacturing makeup boxes and artist cases in India since 2017',
  'Wholesale support for salons, artists and beauty businesses',
  'Custom colours, branding, dimensions and compartments',
  'Pan-India delivery, direct from the manufacturer',
]

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-luxury">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-hover bg-white">
          <Image
            src="/Our_story.jpeg"
            alt="MKAY MAKEOVER manufacturing and makeup boxes"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-blush-600 font-semibold mb-3">
            India's First Manufacturer · Since {brand.established}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Makeup boxes that make every beauty setup feel considered.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            MKAY MAKEOVER has been manufacturing makeup boxes from {brand.city} since {brand.established}, built on a
            balance of practical organisation and soft, elevated styling. Founded by {brand.founders}, our collection
            is presented as a wholesale catalogue, making it easy for you to select a product or share a custom
            requirement — delivered pan-India, direct from the manufacturer.
          </p>

          <div className="mt-7 space-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm">
                <CheckCircle2 size={18} className="mt-0.5 text-blush-600 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-blush-700 transition-colors"
            >
              Explore catalogue
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-6 py-3 text-sm font-semibold hover:border-blush-300 hover:text-blush-700 transition-colors"
            >
              Wholesale enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}