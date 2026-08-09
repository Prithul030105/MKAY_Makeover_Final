import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import type { Product } from '@/types'

export default function ProductDetailActions({ product }: { product: Product }) {
  return (
    <Link href={`/wholesale?product=${product.slug}#inquiry`} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-colors hover:bg-blush-700">
      <MessageCircle size={18} />Request wholesale details for {product.sku}
    </Link>
  )
}
