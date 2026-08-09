import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MKAY MAKEOVER — Wholesale Makeup Boxes',
    template: '%s | MKAY MAKEOVER',
  },
  description:
    'MKAY MAKEOVER creates elevated makeup boxes, travel cases and professional artist kits for wholesale enquiries and custom requirements.',
  keywords: [
    'makeup boxes', 'wholesale makeup boxes', 'makeup artist cases',
    'vanity boxes', 'custom makeup boxes', 'beauty boxes',
  ],
  authors: [{ name: 'MKAY MAKEOVER' }],
  creator: 'MKAY MAKEOVER',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mkaymakeover.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'MKAY MAKEOVER',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff1f2' },
    { media: '(prefers-color-scheme: dark)', color: '#1a0a0d' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: 'hsl(var(--card))',
                  color: 'hsl(var(--foreground))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-inter)',
                },
              }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
