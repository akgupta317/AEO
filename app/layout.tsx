import type { Metadata } from 'next'
import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SchemaOrg from '@/components/SchemaOrg'
import { PostHogProvider } from './providers'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'MakeCited — The $1 AEO Audit | AI Engine Visibility for Your Domain',
  description:
    'Find out if ChatGPT, Perplexity, Gemini, Claude & Google AI Overviews cite your domain. Full AEO audit delivered by email in ~10 minutes for just $1. Pay after you see results.',
  keywords:
    'AEO audit, AI engine optimization, ChatGPT visibility, Perplexity audit, AI citation audit, answer engine optimization, AI search visibility, domain audit AI',
  metadataBase: new URL('https://makecited.com'),
  alternates: {
    canonical: 'https://makecited.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://makecited.com',
    title: 'MakeCited — The $1 AEO Audit | AI Engine Visibility for Your Domain',
    description:
      'Find out if ChatGPT, Perplexity, Gemini, Claude & Google AI Overviews cite your domain. Full AEO audit delivered by email in ~10 minutes for just $1. Pay after you see results.',
    siteName: 'MakeCited',
    images: [
      {
        url: 'https://makecited.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MakeCited — The $1 AEO Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MakeCited — The $1 AEO Audit | AI Engine Visibility for Your Domain',
    description:
      'Find out if ChatGPT, Perplexity, Gemini, Claude & Google AI Overviews cite your domain. Full AEO audit delivered by email in ~10 minutes for just $1.',
    images: ['https://makecited.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <SchemaOrg />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V3L7EV99VE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V3L7EV99VE');
          `}
        </Script>
        <PostHogProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
