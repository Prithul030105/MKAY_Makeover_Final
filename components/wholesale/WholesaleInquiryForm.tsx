'use client'

import { useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import toast from 'react-hot-toast'
import { catalogProducts } from '@/lib/catalog'

export default function WholesaleInquiryForm({ defaultProduct = '' }: { defaultProduct?: string }) {
  const [loading, setLoading] = useState(false)
  const selectedProduct = useMemo(() => catalogProducts.find((product) => product.slug === defaultProduct || product.sku === defaultProduct || product.name === defaultProduct), [defaultProduct])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setLoading(true)
    try {
      const response = await fetch('/api/wholesale/inquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') || ''), email: String(data.get('email') || ''), phone: String(data.get('phone') || ''),
          companyName: String(data.get('companyName') || ''), productName: String(data.get('productName') || ''),
          productCode: String(data.get('productCode') || ''), quantity: String(data.get('quantity') || ''),
          requirement: String(data.get('requirement') || ''), message: String(data.get('message') || ''),
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || 'Unable to send your enquiry')
      toast.success('Your wholesale enquiry has been sent. We will be in touch shortly.')
      form.reset()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Unable to send your enquiry')
    } finally { setLoading(false) }
  }

  return <form id="inquiry" onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-border bg-white p-5 shadow-card md:p-7">
    <div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blush-600">Wholesale request form</p><h2 className="font-display text-3xl md:text-4xl">Tell us what you need.</h2><p className="mt-2 text-sm text-muted-foreground">Select a product from the menu, share its code or your requirement, and our team will receive your enquiry directly by email.</p></div>
    <div className="grid gap-4 md:grid-cols-2"><Field label="Your name" name="name" required /><Field label="Email address" name="email" type="email" required /><Field label="Phone / WhatsApp number" name="phone" type="tel" required /><Field label="Business / salon name" name="companyName" required /></div>
    <div className="grid gap-4 md:grid-cols-2">
      <label className="block"><span className="text-sm font-semibold">Product name</span><select name="productName" defaultValue={selectedProduct?.name || ''} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-blush-300 focus:outline-none" required><option value="">Select a product</option>{catalogProducts.map((product) => <option key={product.id} value={product.name}>{product.name}</option>)}</select></label>
      <label className="block"><span className="text-sm font-semibold">Product code</span><select name="productCode" defaultValue={selectedProduct?.sku || ''} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-blush-300 focus:outline-none"><option value="">Choose product code (optional)</option>{catalogProducts.map((product) => <option key={product.id} value={product.sku || ''}>{product.sku} · {product.name}</option>)}</select></label>
      <Field label="Estimated quantity" name="quantity" placeholder="For example, 50 boxes" />
      <label className="block"><span className="text-sm font-semibold">Request type</span><select name="requirement" className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-blush-300 focus:outline-none"><option>Wholesale product details</option><option>Custom colour / material</option><option>Logo / branding request</option><option>Custom size / compartments</option></select></label>
    </div>
    <label className="block"><span className="text-sm font-semibold">Description or message</span><textarea name="message" rows={4} placeholder="Tell us about colours, branding, dimensions, delivery location or any other requirement." className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-blush-300 focus:outline-none" /></label>
    <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-colors hover:bg-blush-700 disabled:opacity-60"><Send size={16} />{loading ? 'Sending enquiry...' : 'Send wholesale enquiry'}</button>
  </form>
}

function Field({ label, name, type = 'text', ...props }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return <label className="block"><span className="text-sm font-semibold">{label}</span><input name={name} type={type} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-blush-300 focus:outline-none" {...props} /></label>
}
