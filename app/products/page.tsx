import type { Metadata } from 'next'
import Link from 'next/link'
import ProductCard from '@/components/products/ProductCard'
import { catalogCategories, catalogProducts } from '@/lib/catalog'

export const metadata: Metadata = {
  title: 'Makeup Box Catalogue',
  description: 'Explore MKAY MAKEOVER makeup boxes, travel cases, professional kits and custom wholesale options.',
}

type ProductsPageProps = { searchParams?: Record<string, string | string[] | undefined> }
const getParam = (params: ProductsPageProps['searchParams'], key: string) => {
  const value = params?.[key]
  return Array.isArray(value) ? value[0] : value
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = getParam(searchParams, 'category')
  const query = getParam(searchParams, 'search')?.trim().toLowerCase()
  const products = catalogProducts.filter((product) => {
    if (category && product.category.slug !== category) return false
    if (!query) return true
    return `${product.name} ${product.sku} ${product.description} ${product.category.name} ${product.tags.join(' ')}`.toLowerCase().includes(query)
  })
  const categoryName = catalogCategories.find((item) => item.slug === category)?.name

  return (
    <div className="bg-background">
      <section className="bg-luxury py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blush-600">Product catalogue</p>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-display text-5xl leading-none md:text-7xl">Makeup boxes made to be seen.</h1>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">Browse our wholesale-ready collection. Choose a product, note its code, then send us a request for availability, customisation or a bulk quote.</p>
            </div>
            <Link href="/wholesale#inquiry" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-blush-700">Request wholesale details</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="mb-8 flex flex-wrap gap-2">
          <Link href="/products" className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${!category ? 'bg-foreground text-background' : 'border border-border bg-white hover:border-blush-300 hover:text-blush-700'}`}>All products</Link>
          {catalogCategories.map((item) => <Link key={item.slug} href={`/products?category=${item.slug}`} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${category === item.slug ? 'bg-foreground text-background' : 'border border-border bg-white hover:border-blush-300 hover:text-blush-700'}`}>{item.name}</Link>)}
        </div>

        <div className="mb-6 flex items-center justify-between gap-3"><p className="text-sm text-muted-foreground">{query ? `Results for “${getParam(searchParams, 'search')}”` : categoryName || 'All makeup box styles'} · {products.length} designs</p></div>
        {products.length ? <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 xl:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-[1.5rem] border border-border bg-white p-10 text-center"><h2 className="font-display text-3xl">No product found</h2><p className="mt-2 text-muted-foreground">Try another product name or code, or ask us for a custom makeup box.</p><Link href="/wholesale#inquiry" className="mt-5 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background">Request a custom box</Link></div>}
      </section>
    </div>
  )
}
