'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Boxes, MessageCircle } from 'lucide-react'

const slides = [
  { eyebrow: 'MKAY MAKEOVER collection', heading: 'Makeup Boxes Made With A Little More Magic.', sub: 'Thoughtfully designed vanity boxes, travel cases and professional kits for makeup artists, salons and wholesale partners.', cta: 'Explore catalogue', ctaHref: '/products', secondary: 'Request wholesale details', secondaryHref: '/wholesale#inquiry', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85' },
  { eyebrow: 'Custom wholesale orders', heading: 'Your Beauty Box, Your Signature.', sub: 'Choose a product code or describe your idea. We can help with colour, branding, finishes and box details for your wholesale requirement.', cta: 'Start a request', ctaHref: '/wholesale#inquiry', secondary: 'View makeup boxes', secondaryHref: '/products', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1800&q=85' },
  { eyebrow: 'Made for professionals', heading: 'Designed To Keep Beauty Beautifully Organised.', sub: 'A modern collection of practical makeup boxes with refined finishes that look as good on the counter as they work in the kit.', cta: 'View designs', ctaHref: '/products', secondary: 'Talk to our team', secondaryHref: '/wholesale#inquiry', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1800&q=85' },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setCurrent((index) => (index + 1) % slides.length), 5200); return () => window.clearInterval(timer) }, [])
  const slide = slides[current]
  return <section className="relative min-h-[82vh] overflow-hidden bg-rose-50">
    <AnimatePresence mode="wait"><motion.div key={slide.image} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} /></AnimatePresence>
    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-white/18" /><div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-4 pb-20 pt-20 md:px-6 md:pt-28"><div className="max-w-2xl"><AnimatePresence mode="wait"><motion.div key={slide.heading} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.55 }}><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-2 text-xs font-semibold text-blush-700 shadow-card"><Boxes size={14} />{slide.eyebrow}</div><h1 className="font-display text-5xl leading-[0.95] tracking-normal text-foreground md:text-7xl">{slide.heading}</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/68 md:text-lg">{slide.sub}</p><div className="mt-8 flex flex-wrap items-center gap-3"><Link href={slide.ctaHref} className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-blush-700">{slide.cta}<ArrowRight size={16} /></Link><Link href={slide.secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-white bg-white/85 px-6 py-3 text-sm font-semibold transition-colors hover:border-blush-200 hover:text-blush-700"><MessageCircle size={16} />{slide.secondary}</Link></div></motion.div></AnimatePresence></div></div>
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">{slides.map((item, index) => <button key={item.heading} type="button" onClick={() => setCurrent(index)} className={`h-2 rounded-full transition-all ${index === current ? 'w-8 bg-foreground' : 'w-2 bg-foreground/25 hover:bg-foreground/50'}`} aria-label={`Show banner ${index + 1}`} />)}</div>
  </section>
}
