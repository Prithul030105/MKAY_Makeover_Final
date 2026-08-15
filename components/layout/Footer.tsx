import Link from 'next/link'
import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react'
import { brand, catalogCategories } from '@/lib/catalog'

export default function Footer() {
  const whatsappNumber = brand.whatsapp.replace(/\D/g, '')
  return <footer className="bg-foreground text-background">
    <div className="border-b border-background/10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4 md:px-6">
        <div className="rounded-2xl bg-blush-600/20 px-4 py-3 text-sm font-bold text-background">India's First Manufacturer</div>
        {['Manufacturing since 2017', 'Delhi based · Pan-India delivery', 'Bulk orders & customisation'].map((item) => <div key={item} className="rounded-2xl bg-background/8 px-4 py-3 text-sm font-medium text-background/75">{item}</div>)}
      </div>
    </div>
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.1fr_1.4fr]">
      <div>
        <Link href="/" className="mb-5 inline-flex items-center gap-2.5"><div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-blush-600 font-display font-bold text-white">M<span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background text-[9px] font-bold text-foreground">®</span></div><div><p className="font-display text-2xl font-bold">{brand.shortName}</p><p className="-mt-1 text-[10px] uppercase tracking-[0.22em] text-background/45">Makeover</p></div></Link>
        <p className="max-w-md text-sm leading-relaxed text-background/62">{brand.tagline}. Manufacturing from {brand.city} since {brand.established}, with pan-India delivery. Explore the catalogue and send us the product code for wholesale details or a custom request.</p>
        <div className="mt-6 space-y-3 text-sm">
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-background/70 transition-colors hover:text-background"><Phone size={15} className="text-blush-300" />Call: {brand.phone}</a>
          <a href={`tel:${brand.phoneAlt.replace(/\s/g, '')}`} className="flex items-center gap-2 text-background/70 transition-colors hover:text-background"><Phone size={15} className="text-blush-300" />Call: {brand.phoneAlt}</a>
          <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-background/70 transition-colors hover:text-background"><Mail size={15} className="text-blush-300" />Email: {brand.email}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-background/70 transition-colors hover:text-background"><MessageCircle size={15} className="text-blush-300" />WhatsApp: {brand.whatsapp}</a>
          <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-background/70 transition-colors hover:text-background"><Instagram size={15} className="text-blush-300" />Instagram: {brand.instagram}</a>
        </div>
        <p className="mt-6 text-xs text-background/45">Founded by {brand.founders}</p>
      </div>
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3">
        <FooterLinks title="Catalogue" links={catalogCategories.map((category) => ({ label: category.name, href: `/products?category=${category.slug}` }))} />
        <FooterLinks title="Wholesale" links={[{ label: 'Request wholesale details', href: '/wholesale#inquiry' }, { label: 'Custom makeup boxes', href: '/custom' }, { label: 'View all products', href: '/products' }]} />
        <FooterLinks title="Contact" links={[{ label: 'Call us', href: `tel:${brand.phone.replace(/\s/g, '')}` }, { label: 'Email us', href: `mailto:${brand.email}` }, { label: 'Chat on WhatsApp', href: `https://wa.me/${whatsappNumber}` }, { label: 'Follow on Instagram', href: brand.instagramUrl }]} />
      </div>
    </div>
    <div className="border-y border-background/10"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6"><div><h3 className="font-display text-2xl">Need help choosing a makeup box?</h3><p className="mt-1 text-sm text-background/55">Share a product name, product code or your own requirement with us.</p></div><Link href="/wholesale#inquiry" className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-blush-100">Send a wholesale request</Link></div></div>
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-background/42 md:flex-row md:items-center md:justify-between md:px-6"><p>© {new Date().getFullYear()} MKAY MAKEOVER. Manufacturing since {brand.established} · New Delhi, India.</p><p>Wholesale product showcase · No online checkout</p></div>
  </footer>
}

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-background/42">{title}</h4><ul className="space-y-2.5">{links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-background/62 transition-colors hover:text-background">{link.label}</Link></li>)}</ul></div>
}