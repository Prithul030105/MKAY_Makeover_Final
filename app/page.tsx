import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import CategoryShowcase from '@/components/home/CategoryShowcase'
import ProductCarousel from '@/components/home/ProductCarousel'
import WholesaleCTA from '@/components/home/WholesaleCTA'
import BrandStory from '@/components/home/BrandStory'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import { bestSellers, featuredProducts, testimonials, trendingProducts } from '@/lib/catalog'

export const metadata: Metadata = { title: 'MKAY MAKEOVER — Wholesale Makeup Boxes', description: 'MKAY MAKEOVER creates refined makeup boxes for salons, makeup artists and wholesale partners.' }

export default function HomePage() {
  return <div className="overflow-x-hidden"><HeroSection /><CategoryShowcase /><ProductCarousel eyebrow="Signature designs" title="Makeup boxes that elevate every beauty ritual." subtitle="A curated showcase of refined vanity boxes, professional cases and customised packaging for wholesale enquiries." products={featuredProducts} href="/products" /><ProductCarousel eyebrow="Made for professionals" title="Practical, polished and ready to personalise." subtitle="Choose a design, note its product code and send us a wholesale request for the details you need." products={bestSellers.length ? bestSellers : trendingProducts} href="/products" /><WholesaleCTA /><BrandStory /><TestimonialsSection testimonials={testimonials} /></div>
}
