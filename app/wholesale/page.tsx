import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import WholesaleInquiryForm from '@/components/wholesale/WholesaleInquiryForm'

export const metadata: Metadata = { title: 'Wholesale Makeup Box Enquiries', description: 'Choose a MKAY MAKEOVER product by name or code and send a direct wholesale enquiry.' }
type WholesalePageProps = { searchParams?: Record<string, string | string[] | undefined> }
const getParam = (params: WholesalePageProps['searchParams'], key: string) => { const value = params?.[key]; return Array.isArray(value) ? value[0] : value }

export default function WholesalePage({ searchParams }: WholesalePageProps) {
  const defaultProduct = getParam(searchParams, 'product') || ''
  return <div className="bg-background">
    <section className="bg-luxury py-14 md:py-20"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[1fr_0.85fr]"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blush-600">Wholesale support</p><h1 className="font-display text-5xl leading-none md:text-7xl">Let’s find the right makeup box for you.</h1><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">Whether you already know the product code or have an idea in mind, send us your requirement. We will receive it directly by email and respond with the details that matter to you.</p><div className="mt-7 grid gap-3 sm:grid-cols-3">{['Product code selection', 'Custom options', 'Direct team response'].map((item) => <div key={item} className="rounded-2xl border border-border bg-white p-4 text-sm font-semibold shadow-card">{item}</div>)}</div></div><div className="rounded-[2rem] bg-foreground p-6 text-background md:p-8"><p className="text-sm text-background/60">A simple wholesale process</p><h2 className="mt-2 font-display text-4xl">Select. Share. Create.</h2><div className="mt-6 space-y-3">{['Choose a product name or product code', 'Tell us the quantity or custom requirement', 'Receive a personal response from our team'].map((item) => <p key={item} className="flex items-center gap-2 text-sm text-background/75"><CheckCircle2 size={17} className="text-blush-200" />{item}</p>)}</div></div></div></section>
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16"><div className="mb-8 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blush-600">Choose your design</p><h2 className="font-display text-4xl md:text-5xl">A catalogue made for easy enquiries.</h2><p className="mt-3 leading-relaxed text-muted-foreground">You can select the product name and code directly from the form, or use the description field for a fully custom makeup box.</p></div><WholesaleInquiryForm defaultProduct={defaultProduct} /></section>
  </div>
}
