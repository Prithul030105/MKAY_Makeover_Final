'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/types'

const fallbackImage = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80'

export default function ProductCard({ product, className = '' }: { product: Product; className?: string }) {
  const [hovered, setHovered] = useState(false)
  const mainImage = product.images?.[0]?.url ?? fallbackImage
  const alternateImage = product.images?.[1]?.url ?? mainImage

  return (
    <article className={`group overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${className}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image src={hovered ? alternateImage : mainImage} alt={product.name} fill className="object-contain p-3 transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 24vw" />
          <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-blush-700 shadow-card">{product.sku}</div>
          <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-card transition-all duration-300 group-hover:bg-foreground group-hover:text-background"><ArrowUpRight size={16} /></div>
        </div>
        <div className="p-4">
          <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{product.category?.name}</p>
          <h3 className="min-h-[2.5rem] text-sm font-semibold leading-snug transition-colors group-hover:text-blush-700">{product.name}</h3>
          <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{product.description}</p>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground"><span>{product.material}</span><span className="font-semibold text-blush-700">View details</span></div>
        </div>
      </Link>
    </article>
  )
}