import type { Metadata } from 'next'
import WholesaleInquiryForm from '@/components/wholesale/WholesaleInquiryForm'

export const metadata: Metadata = {
  title: 'Custom Makeup Box Requests',
  description:
    'Request a custom MKAY MAKEOVER makeup box with your product idea, colour, material and branding details.',
}

export default function CustomOrdersPage() {
  return (
    <div className="bg-background">
      <section className="bg-luxury py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-blush-600 font-semibold mb-3">
            Custom makeup boxes
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">
            Build makeup boxes around your brand.
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Share your product idea, preferred colours, dimensions, materials and quantity. Our team will receive your request directly and help you shape the right makeup box.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <WholesaleInquiryForm />
      </section>
    </div>
  )
}
