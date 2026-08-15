import type { MetadataRoute } from 'next'
import { catalogProducts } from '@/lib/catalog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mkaymakeover.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const productPages: MetadataRoute.Sitemap = catalogProducts.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: product.createdAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...productPages]
}
