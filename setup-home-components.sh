#!/bin/bash

cat > components/home/HeroSection.tsx << 'HEROEOF'
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    tag: 'New Collection 2026',
    title: 'Premium Cosmetic\nPackaging That\nSells Itself',
    sub: 'Custom lipstick boxes, skincare packaging & luxury cosmetic boxes for brands that demand perfection.',
    cta: 'Shop Retail',
    ctaHref: '/products',
    secondary: 'Get Wholesale Quote',
    secondaryHref: '/wholesale',
    gradient: 'from-rose-100 via-pink-50 to-amber-50',
    accent: '#e05470',
    emoji: '💄',
  },
  {
    id: 2,
    tag: 'Wholesale Bulk Orders',
    title: 'MOQ 50 Units.\nUnlimited\nPossibilities.',
    sub: 'White label & private label cosmetic packaging. GST invoicing. Pan-India delivery. Export quality.',
    cta: 'View Wholesale',
    ctaHref: '/wholesale',
    secondary: 'Request Custom Quote',
    secondaryHref: '/custom',
    gradient: 'from-amber-50 via-orange-50 to-rose-50',
    accent: '#d97706',
    emoji: '📦',
  },
  {
    id: 3,
    tag: 'Eco-Friendly Range',
    title: 'Sustainable\nPackaging.\nPremium Feel.',
    sub: 'Kraft paper, recycled materials & biodegradable cosmetic boxes. Good for your brand, great for the planet.',
    cta: 'Explore Eco Range',
    ctaHref: '/products?category=eco-friendly',
    secondary: 'Learn More',
    secondaryHref: '/about',
    gradient: 'from-emerald-50 via-teal-50 to-cyan-50',
    accent: '#059669',
    emoji: '🌿',
  },
]

const stats = [
  { value: '500+', label: 'Packaging Designs' },
  { value: '2000+', label: 'Happy Brands' },
  { value: 'MOQ 50', label: 'Minimum Order' },
  { value: '4.9★', label: 'Customer Rating' },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length)
  const next = () => setCurrent(p => (p + 1) % slides.length)
  const slide = slides[current]

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className={`bg-gradient-to-br ${slide.gradient} min-h-[85vh] flex items-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                  style={{ background: `${slide.accent}15`, color: slide.accent }}>
                  ✦ {slide.tag}
                </span>
                <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
                  {slide.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
                  {slide.sub}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href={slide.ctaHref}
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ background: slide.accent }}>
                    {slide.cta}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href={slide.secondaryHref}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold border-2 border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-white/50 transition-all duration-300">
                    {slide.secondary}
                  </Link>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-4 mt-10">
                  {['GST Invoice', 'Pan-India', 'Custom Print'].map(b => (
                    <span key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{b}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                className="hidden lg:flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                    style={{ background: slide.accent }} />
                  <div className="absolute inset-8 rounded-full opacity-10 blur-xl"
                    style={{ background: slide.accent }} />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-[10rem]">{slide.emoji}</span>
                  </div>

                  {/* Floating cards */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-luxury px-4 py-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  >
                    <p className="text-xs text-muted-foreground">MOQ</p>
                    <p className="text-lg font-bold text-foreground">50 Units</p>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-luxury px-4 py-3"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <p className="text-xs text-muted-foreground">Custom</p>
                    <p className="text-lg font-bold" style={{ color: slide.accent }}>Branding ✓</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-luxury flex items-center justify-center hover:bg-white transition-all z-10">
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-luxury flex items-center justify-center hover:bg-white transition-all z-10">
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-blush-500' : 'w-2 h-2 bg-blush-300 hover:bg-blush-400'}`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="bg-white dark:bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map(s => (
              <div key={s.label} className="py-5 text-center px-4">
                <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
HEROEOF

cat > components/home/CategoryShowcase.tsx << 'CATEOF'
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const categories = [
  { name: 'Lipstick Boxes', href: '/products?category=lipstick-boxes', emoji: '💄', color: 'bg-rose-50 border-rose-100 hover:border-rose-300', text: 'text-rose-700', count: '80+ styles' },
  { name: 'Skincare Packaging', href: '/products?category=skincare', emoji: '🧴', color: 'bg-teal-50 border-teal-100 hover:border-teal-300', text: 'text-teal-700', count: '60+ styles' },
  { name: 'Perfume Boxes', href: '/products?category=perfume-boxes', emoji: '🌸', color: 'bg-violet-50 border-violet-100 hover:border-violet-300', text: 'text-violet-700', count: '45+ styles' },
  { name: 'Gift Sets', href: '/products?category=gift-sets', emoji: '🎁', color: 'bg-amber-50 border-amber-100 hover:border-amber-300', text: 'text-amber-700', count: '50+ styles' },
  { name: 'Eyelash Boxes', href: '/products?category=eyelash-boxes', emoji: '👁️', color: 'bg-pink-50 border-pink-100 hover:border-pink-300', text: 'text-pink-700', count: '30+ styles' },
  { name: 'Eco-Friendly', href: '/products?category=eco-friendly', emoji: '🌿', color: 'bg-emerald-50 border-emerald-100 hover:border-emerald-300', text: 'text-emerald-700', count: '40+ styles' },
  { name: 'Magnetic Boxes', href: '/products?material=magnetic', emoji: '✨', color: 'bg-indigo-50 border-indigo-100 hover:border-indigo-300', text: 'text-indigo-700', count: '25+ styles' },
  { name: 'Wholesale', href: '/wholesale', emoji: '📦', color: 'bg-orange-50 border-orange-100 hover:border-orange-300', text: 'text-orange-700', count: 'MOQ 50+' },
]

export default function CategoryShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Browse By Category</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Shop Our Collections</h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.name}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}>
              <Link href={cat.href}
                className={`group flex flex-col items-center justify-center p-4 rounded-2xl border-2 ${cat.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-card text-center aspect-square`}>
                <span className="text-3xl mb-2">{cat.emoji}</span>
                <p className={`text-xs font-semibold ${cat.text} leading-tight mb-1`}>{cat.name}</p>
                <p className="text-[10px] text-muted-foreground">{cat.count}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
CATEOF

cat > components/home/VideoSection.tsx << 'VIDEOEOF'
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section className="py-20 bg-luxury" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-widest uppercase text-blush-500 mb-3">Behind The Brand</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafted for Brands<br />That Mean Business
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From concept to shelf, our cosmetic packaging solutions are designed to elevate your brand. Premium materials, custom printing, and fast turnaround — everything a growing beauty brand needs.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Custom Printing', desc: 'CMYK, Pantone, Foil, Emboss' },
                { label: 'Fast Turnaround', desc: '7-14 days production' },
                { label: 'Quality Assured', desc: 'ISO certified materials' },
                { label: 'GST Invoicing', desc: 'B2B compliant billing' },
              ].map(item => (
                <div key={item.label} className="p-4 bg-white rounded-2xl shadow-card">
                  <p className="font-semibold text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video Thumbnail */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-hover cursor-pointer group"
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setPlaying(true)}
          >
            <div className="aspect-video bg-gradient-to-br from-blush-100 to-rose-200 flex items-center justify-center">
              <span className="text-8xl">💄</span>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform">
                <Play size={24} className="text-blush-600 ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
              Watch Our Process 2:34
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {playing && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setPlaying(false)}>
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
              Add your YouTube/Vimeo embed URL here
            </div>
            <button onClick={() => setPlaying(false)} className="absolute top-3 right-3 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20">
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
VIDEOEOF

cat > components/home/WholesaleCTA.tsx << 'WEOF'
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, ArrowRight, Check } from 'lucide-react'

const perks = [
  'MOQ starting at just 50 units',
  'Custom logo & brand printing',
  'Tiered bulk pricing — more you buy, more you save',
  'GST invoice & B2B compliant billing',
  'Pan-India & international shipping',
  'Dedicated account manager',
]

export default function WholesaleCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section className="py-20 bg-gradient-to-br from-blush-600 via-rose-600 to-pink-700 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Building2 size={13} /> For Businesses & Brands
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Scale Your Brand with<br />Wholesale Packaging
            </h2>
            <p className="text-white/80 text-lg mb-8">
              From indie beauty brands to large cosmetic manufacturers — we supply premium packaging at wholesale prices.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {perks.map(p => (
                <li key={p} className="flex items-start gap-2.5 text-white/90 text-sm">
                  <Check size={15} className="mt-0.5 flex-shrink-0 text-white" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/wholesale" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-blush-600 font-semibold text-sm rounded-full hover:bg-blush-50 transition-colors hover:scale-105 transform duration-200">
                Get Wholesale Pricing <ArrowRight size={15} />
              </Link>
              <Link href="/custom" className="inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-white/40 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors">
                Request Custom Quote
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Inquiry</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                {[
                  { label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
                  { label: 'Company Name', type: 'text', placeholder: 'Beauty Brand Pvt Ltd' },
                  { label: 'Email', type: 'email', placeholder: 'jane@brand.com' },
                  { label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
                ].map(f => (
                  <div key={f.label}>
                    <label className="text-white/80 text-xs font-medium block mb-1.5">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="text-white/80 text-xs font-medium block mb-1.5">Products Needed</label>
                  <textarea placeholder="Describe the packaging you need, quantities, customization requirements..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-white text-blush-600 font-semibold text-sm rounded-xl hover:bg-blush-50 transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
WEOF

cat > components/home/BrandStory.tsx << 'BSEOF'
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-blush-100 to-rose-200 rounded-3xl flex items-center justify-center text-6xl shadow-card">💄</div>
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl flex items-center justify-center text-6xl shadow-card">🧴</div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-gradient-to-br from-violet-100 to-purple-200 rounded-3xl flex items-center justify-center text-6xl shadow-card">🌸</div>
                <div className="aspect-[3/4] bg-gradient-to-br from-emerald-100 to-teal-200 rounded-3xl flex items-center justify-center text-6xl shadow-card">🎁</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blush-600 text-white rounded-2xl p-5 shadow-hover">
              <p className="text-3xl font-bold font-display">7+</p>
              <p className="text-xs text-white/80 mt-0.5">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="text-xs tracking-widest uppercase text-blush-500 mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Packaging That Tells<br />Your Brand Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              GlamBox was founded with one mission: to make premium cosmetic packaging accessible to every beauty brand — from indie startups to established names.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine cutting-edge printing technology with sustainable materials to create packaging that does not just protect your product — it sells it.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: '500+', l: 'Designs' },
                { v: '2000+', l: 'Clients' },
                { v: '50+', l: 'Materials' },
              ].map(s => (
                <div key={s.l} className="text-center p-4 bg-blush-50 rounded-2xl">
                  <p className="font-display text-2xl font-bold text-blush-600">{s.v}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2.5 text-sm font-semibold text-blush-600 hover:text-blush-700 group">
              Learn about us <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
BSEOF

cat > components/home/TrendingSection.tsx << 'TRENDEOF'
'use client'
import type { Product } from '@/types/index'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const mockTrending = [
  { id: '1', name: 'Magnetic Closure Lipstick Box', price: '₹45', moq: 100, emoji: '💄', tag: 'Bestseller' },
  { id: '2', name: 'Kraft Paper Skincare Box', price: '₹32', moq: 50, emoji: '🧴', tag: 'Eco-Pick' },
  { id: '3', name: 'Luxury Perfume Box (Gold Foil)', price: '₹89', moq: 50, emoji: '🌸', tag: 'Premium' },
  { id: '4', name: 'Custom Eyelash Box', price: '₹28', moq: 100, emoji: '👁️', tag: 'Trending' },
  { id: '5', name: 'Gift Set Box with Ribbon', price: '₹65', moq: 50, emoji: '🎁', tag: 'New' },
  { id: '6', name: 'Acrylic Makeup Organizer', price: '₹120', moq: 25, emoji: '✨', tag: 'Hot' },
]

export default function TrendingSection({ products }: { products: Product[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">What is Hot</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Trending Now</h2>
          </div>
          <Link href="/products?filter=trending" className="hidden md:flex items-center gap-2 text-sm font-semibold text-blush-600 hover:text-blush-700 group">
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {mockTrending.map((item, i) => (
            <motion.div key={item.id}
              className="flex-shrink-0 w-52 bg-white dark:bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}>
              <div className="aspect-square bg-gradient-to-br from-blush-50 to-rose-100 flex items-center justify-center text-5xl relative">
                {item.emoji}
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 bg-blush-500 text-white rounded-full">{item.tag}</span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground line-clamp-2 mb-1">{item.name}</p>
                <p className="text-blush-600 font-bold text-sm">{item.price}/unit</p>
                <p className="text-xs text-muted-foreground mt-1">MOQ: {item.moq} units</p>
                <button className="mt-3 w-full py-2 bg-blush-50 text-blush-600 text-xs font-semibold rounded-xl hover:bg-blush-100 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
TRENDEOF

cat > components/home/TestimonialsSection.tsx << 'TESTEOF'
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const reviews = [
  { name: 'Priya Sharma', company: 'Bloom Beauty Co.', text: 'GlamBox transformed our brand packaging. The quality is exceptional and their team was incredibly helpful with customization. Our customers love the unboxing experience!', rating: 5, tag: 'Retail Client' },
  { name: 'Rahul Mehta', company: 'Cosmetix Pvt Ltd', text: 'We ordered 5000 lipstick boxes for our launch. The MOQ was flexible, quality was top-notch, and delivery was on time. GST invoicing made our accounting seamless.', rating: 5, tag: 'Wholesale Client' },
  { name: 'Ananya Kapoor', company: 'Glow Naturals', text: 'Their eco-friendly kraft boxes are perfect for our organic skincare line. Sustainable, beautiful, and affordable. Will definitely reorder!', rating: 5, tag: 'Eco Range' },
  { name: 'Meera Joshi', company: 'LuxeCosmetics', text: 'The custom gold foil printing on our perfume boxes exceeded our expectations. GlamBox is our go-to packaging partner for all product launches.', rating: 5, tag: 'Custom Order' },
  { name: 'Vikram Singh', company: 'StyleMart', text: 'Bulk ordering process was smooth. Account manager was responsive, samples were sent quickly, and the final product matched exactly what we wanted.', rating: 5, tag: 'Wholesale Client' },
]

export default function TestimonialsSection({ testimonials }: { testimonials: any[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section className="py-20 bg-luxury" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Client Love</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
        </motion.div>
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {reviews.map((r, i) => (
            <motion.div key={r.name}
              className="flex-shrink-0 w-80 bg-white dark:bg-card rounded-2xl p-6 shadow-card border border-border"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{r.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.company}</p>
                </div>
                <span className="text-[10px] bg-blush-50 text-blush-600 font-semibold px-2.5 py-1 rounded-full">{r.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
TESTEOF

cat > components/home/FeaturedProducts.tsx << 'FEATEOF'
'use client'
import type { Product } from '@/types/index'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react'
import Link from 'next/link'

const mockFeatured = [
  { id: '1', name: 'Premium Lipstick Box — Matte Black', price: 55, compare: 75, moq: 100, emoji: '💄', material: 'Rigid Board', finish: 'Matte Lamination', badge: 'Bestseller' },
  { id: '2', name: 'Kraft Skincare Box — Eco Series', price: 38, compare: 50, moq: 50, emoji: '🧴', material: 'Kraft Paper', finish: 'Natural', badge: 'Eco-Pick' },
  { id: '3', name: 'Gold Foil Perfume Box — Luxury', price: 95, compare: 120, moq: 50, emoji: '🌸', material: 'Art Paper', finish: 'Gold Foil + Emboss', badge: 'Premium' },
  { id: '4', name: 'Custom Eyelash Box — Window Cut', price: 30, compare: 42, moq: 100, emoji: '👁️', material: 'Cardboard', finish: 'UV Gloss', badge: 'Trending' },
  { id: '5', name: 'Magnetic Gift Box — Rose Gold', price: 75, compare: 95, moq: 50, emoji: '🎁', material: 'Rigid Board', finish: 'Rose Gold Foil', badge: 'Gift' },
  { id: '6', name: 'Acrylic Organizer — 12 Slot', price: 140, compare: 180, moq: 25, emoji: '✨', material: 'Premium Acrylic', finish: 'Clear', badge: 'New' },
  { id: '7', name: 'Serum Box — Minimalist White', price: 42, compare: 58, moq: 50, emoji: '🌿', material: 'Art Paper', finish: 'Spot UV', badge: 'Clean' },
  { id: '8', name: 'Blush Palette Box — Custom Print', price: 60, compare: 80, moq: 100, emoji: '🎨', material: 'Rigid Board', finish: 'Full CMYK Print', badge: 'Custom' },
]

export default function FeaturedProducts({ products }: { products: Product[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Handpicked For You</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center gap-2 text-sm font-semibold text-blush-600 hover:text-blush-700 group">
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockFeatured.map((item, i) => (
            <motion.div key={item.id}
              className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}>
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-blush-50 to-rose-100 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 bg-blush-500 text-white rounded-full">
                  {item.badge}
                </span>
                {item.compare > item.price && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 bg-emerald-500 text-white rounded-full">
                    -{Math.round((1 - item.price / item.compare) * 100)}%
                  </span>
                )}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-2">
                  <button className="flex-1 py-2 bg-white/90 backdrop-blur-sm text-blush-600 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-white transition-colors">
                    <ShoppingBag size={12} /> Add to Cart
                  </button>
                  <button className="w-9 h-9 bg-white/90 backdrop-blur-sm text-blush-600 rounded-xl flex items-center justify-center hover:bg-white transition-colors">
                    <Heart size={14} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{item.material} · {item.finish}</p>
                <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-blush-600 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base font-bold text-foreground">₹{item.price}</span>
                  <span className="text-xs text-muted-foreground line-through">₹{item.compare}</span>
                </div>
                <p className="text-xs text-muted-foreground">MOQ: {item.moq} units</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
FEATEOF

cat > components/home/InstagramFeed.tsx << 'IGSEOF'
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const posts = [
  { emoji: '💄', bg: 'from-rose-100 to-pink-200' },
  { emoji: '🧴', bg: 'from-teal-100 to-emerald-200' },
  { emoji: '🎁', bg: 'from-amber-100 to-orange-200' },
  { emoji: '🌸', bg: 'from-violet-100 to-purple-200' },
  { emoji: '✨', bg: 'from-indigo-100 to-blue-200' },
  { emoji: '🌿', bg: 'from-green-100 to-teal-200' },
]

export default function InstagramFeed() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Follow Our Work</p>
          <h2 className="font-display text-3xl font-bold text-foreground">@glamboxpackaging</h2>
          <p className="text-sm text-muted-foreground mt-2">Tag us to be featured on our page</p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {posts.map((p, i) => (
            <motion.div key={i}
              className={`aspect-square bg-gradient-to-br ${p.bg} rounded-2xl flex items-center justify-center text-4xl cursor-pointer hover:scale-105 transition-transform duration-300`}
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}>
              {p.emoji}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
IGSEOF

cat > components/home/NewsletterBanner.tsx << 'NEWSEOF'
'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ArrowRight } from 'lucide-react'

export default function NewsletterBanner() {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    toast.success('Welcome! Check your inbox for 10% off.')
    setEmail('')
  }
  return (
    <section className="py-20 bg-gradient-to-br from-blush-50 via-rose-50 to-amber-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="w-14 h-14 bg-blush-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">🎁</div>
        <p className="text-xs tracking-widest uppercase text-blush-500 mb-3">Newsletter</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Subscribe for exclusive packaging deals, new product launches, and wholesale pricing updates.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 rounded-l-full border border-border bg-white text-sm focus:outline-none focus:border-blush-400 transition-colors"
            required />
          <button type="submit"
            className="px-6 py-3.5 rounded-r-full bg-blush-600 text-white text-sm font-semibold hover:bg-blush-700 transition-colors flex items-center gap-2">
            Subscribe <ArrowRight size={14} />
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
NEWSEOF

echo "All home components created!"
