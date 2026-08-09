interface Testimonial {
  id: string
  name: string
  company?: string
  text: string
  rating: number
}

const fallback: Testimonial[] = [
  {
    id: 'fallback-1',
    name: 'Priya S.',
    company: 'Bloom Beauty Co.',
    text: 'The organizer quality feels premium and the custom boxes made our brand launch look polished.',
    rating: 5,
  },
  {
    id: 'fallback-2',
    name: 'Meera K.',
    company: 'Makeup Artist',
    text: 'The travel cases and brush holders are exactly the clean, feminine style my clients expect.',
    rating: 5,
  },
  {
    id: 'fallback-3',
    name: 'Rahul M.',
    company: 'Cosmetix Pvt Ltd',
    text: 'Bulk quote, logo files, GST details and delivery were all handled without friction.',
    rating: 5,
  },
]

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const items = testimonials.length ? testimonials : fallback

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.22em] uppercase text-blush-600 font-semibold mb-3">
            Customer reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl">Loved by beauty buyers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {items.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[1.5rem] border border-border bg-white p-6 shadow-card hover:shadow-hover transition-shadow"
            >
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} star review`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} className="text-gold-500 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{testimonial.text}"</p>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              {testimonial.company && (
                <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
