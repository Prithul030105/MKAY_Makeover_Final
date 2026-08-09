import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import ProductDetailActions from '@/components/products/ProductDetailActions'
import ProductCarousel from '@/components/home/ProductCarousel'
import { catalogProducts, getProductBySlug } from '@/lib/catalog'

type ProductPageProps = { params: { slug: string } }

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Product not found' }
  return { title: product.metaTitle || product.name, description: product.metaDescription || product.description }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()
  const related = catalogProducts.filter((item) => item.slug !== product.slug && item.category.slug === product.category.slug).concat(catalogProducts.filter((item) => item.slug !== product.slug && item.category.slug !== product.category.slug)).slice(0, 6)

  return <div className="bg-background">
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blush-700"><ArrowLeft size={16} />Back to catalogue</Link>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="grid gap-4 sm:grid-cols-2">{product.images.slice(0, 4).map((image) => <div key={image.id} className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted shadow-card"><Image src={image.url} alt={image.alt || product.name} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 30vw" /></div>)}</div>
        <div className="h-fit lg:sticky lg:top-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blush-600">{product.category.name}</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-2 font-mono text-xs tracking-[0.16em] text-muted-foreground">PRODUCT CODE · {product.sku}</p>
          <p className="mt-5 leading-relaxed text-muted-foreground">{product.description}</p>
          <div className="my-7 grid gap-3 sm:grid-cols-3">{[`Product code: ${product.sku}`, product.material || 'Custom material', product.finish || 'Custom finish'].map((item) => <div key={item} className="rounded-2xl border border-border bg-white p-4 text-sm font-semibold">{item}</div>)}</div>
          <ProductDetailActions product={product} />
          <div className="mt-8 rounded-[1.5rem] border border-border bg-white p-5"><h2 className="font-semibold">Product details</h2><dl className="mt-4 space-y-3 text-sm"><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Dimensions</dt><dd className="text-right font-medium">{product.dimensions}</dd></div><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Material</dt><dd className="text-right font-medium">{product.material}</dd></div><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Finish</dt><dd className="text-right font-medium">{product.finish}</dd></div></dl></div>
          <div className="mt-6 space-y-3">{['Wholesale enquiries welcome', 'Custom branding and colour options available', 'Share the product code to receive complete details'].map((item) => <p key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 size={17} className="text-blush-600" />{item}</p>)}</div>
        </div>
      </div>
    </section>
    <ProductCarousel eyebrow="Explore more" title="More MKAY MAKEOVER designs" subtitle="Discover more makeup boxes made for beautiful beauty routines and wholesale requirements." products={related} href="/products" />
  </div>
}
