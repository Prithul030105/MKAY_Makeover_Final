'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, MessageCircle, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const productLinks = [
  { label: 'Vanity Makeup Boxes', href: '/products?category=vanity-makeup-boxes' },
  { label: 'Travel Makeup Cases', href: '/products?category=travel-makeup-cases' },
  { label: 'Professional Artist Kits', href: '/products?category=professional-artist-kits' },
  { label: 'Custom Makeup Boxes', href: '/products?category=custom-makeup-boxes' },
]

const navLinks = [
  { label: 'Products', href: '/products', children: productLinks },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Custom Orders', href: '/custom' },
  { label: 'Our Story', href: '/#about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 10)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const submitSearch = (event: FormEvent) => {
    event.preventDefault()
    const search = query.trim()
    if (!search) return
    setSearchOpen(false)
    router.push(`/products?search=${encodeURIComponent(search)}`)
  }

  return (
    <>
      <div className="bg-foreground px-4 py-2 text-center text-xs tracking-wide text-background">
        Made for makeup professionals, salons and wholesale partners ·{' '}
        <Link href="/wholesale#inquiry" className="font-semibold underline underline-offset-2">Request a catalogue quote</Link>
      </div>

      <header className={cn('sticky top-0 z-50 w-full border-b transition-all duration-300', scrolled ? 'border-border bg-white/92 shadow-card backdrop-blur-xl' : 'border-border/60 bg-white')}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex h-16 items-center justify-between gap-3 md:h-[72px]">
            <Link href="/" className="flex flex-shrink-0 items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <img src="/logo.jpeg" alt="MKAY Makeover" className="h-10 w-10 object-contain" />
              <div>
                <span className="font-display text-xl font-bold tracking-normal md:text-2xl">MKAY</span>
                <span className="-mt-1 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Makeover</span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" onMouseEnter={() => link.children && setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                  <Link href={link.href} className={cn('flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:bg-blush-50 hover:text-blush-700', pathname === link.href && 'bg-blush-50 text-blush-700')}>
                    {link.label}{link.children && <ChevronDown size={14} className={cn(productsOpen && 'rotate-180')} />}
                  </Link>
                  <AnimatePresence>
                    {link.children && productsOpen && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-[1.5rem] border border-border bg-white p-3 shadow-hover">
                        <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Product catalogue</p>
                        {link.children.map((item) => <Link key={item.href} href={item.href} onClick={() => setProductsOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-blush-50 hover:text-blush-700">{item.label}</Link>)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              <button type="button" onClick={() => setSearchOpen(true)} className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted" aria-label="Search products"><Search size={18} /></button>
              <Link href="/wholesale#inquiry" className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-blush-700 md:inline-flex"><MessageCircle size={15} />Request quote</Link>
              <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }} className="overflow-hidden border-t border-border bg-white lg:hidden">
              <div className="space-y-1 px-4 py-4">
                {navLinks.map((link) => <div key={link.label}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-muted">{link.label}</Link>
                  {link.children && <div className="grid gap-1 pb-2 pl-4">{link.children.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{item.label}</Link>)}</div>}
                </div>)}
                <Link href="/wholesale#inquiry" onClick={() => setMobileOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-blush-600 px-4 py-3 text-sm font-semibold text-white"><MessageCircle size={15} />Request wholesale quote</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {searchOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-start justify-center bg-foreground/35 p-4 pt-28 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <motion.form initial={{ y: 16 }} animate={{ y: 0 }} exit={{ y: 16 }} onSubmit={submitSearch} onClick={(event) => event.stopPropagation()} className="flex w-full max-w-2xl items-center gap-2 rounded-[1.5rem] border border-border bg-white p-3 shadow-hover">
            <Search size={20} className="ml-2 text-muted-foreground" />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by product name or code..." className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm focus:outline-none" />
            <button type="submit" className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background">Search</button>
          </motion.form>
        </motion.div>}
      </AnimatePresence>
    </>
  )
}