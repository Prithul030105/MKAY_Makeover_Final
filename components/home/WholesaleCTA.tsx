import Link from 'next/link'
import { ArrowRight, FileText, Layers3, Upload } from 'lucide-react'

const features = [
  { icon: Layers3, label: 'Choose by product name or code' },
  { icon: FileText, label: 'Share your wholesale requirement' },
  { icon: Upload, label: 'Custom branding and finish options' },
]

export default function WholesaleCTA() {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="rounded-[2rem] bg-foreground text-background p-6 md:p-10 lg:p-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center overflow-hidden">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-blush-200 font-semibold mb-3">
              Wholesale enquiries
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Send us your makeup box requirement.
            </h2>
            <p className="text-background/65 mt-4 max-w-2xl leading-relaxed">
              Select a product from our catalogue or share a description. Your enquiry is sent directly to our team so we can help with the right details.
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid gap-3">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-background/10 p-4">
                  <Icon size={18} className="text-blush-200" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
            <Link
              href="/wholesale"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-blush-100 transition-colors"
            >
              Send wholesale request
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
