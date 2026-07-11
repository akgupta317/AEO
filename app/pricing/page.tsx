import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing — $1 AEO Audit | MakeCited',
  description:
    'MakeCited pricing is simple: $1, one time, no subscription. Get a full AI-visibility audit across ChatGPT, Perplexity, Gemini and Claude, delivered by email in ~10 minutes.',
  alternates: {
    canonical: 'https://makecited.com/pricing',
  },
  openGraph: {
    type: 'website',
    url: 'https://makecited.com/pricing',
    title: 'Pricing — $1 AEO Audit | MakeCited',
    description:
      'Simple pricing: $1, one time, no subscription. Full AI-visibility audit delivered by email in ~10 minutes.',
    siteName: 'MakeCited',
  },
}

const pricingFaqs = [
  {
    q: 'Why $1 and not free?',
    a: 'A nominal charge filters out throwaway submissions and covers the cost of running your audit across five AI engines. It also means you’re never in a funnel — you get real output, not a lead-gen teaser.',
  },
  {
    q: 'Is there a subscription or hidden fee?',
    a: 'No. $1 is the complete price, charged once after you see results. We don’t store your card, there are no overage fees, and there’s nothing to cancel.',
  },
  {
    q: 'When do I actually pay?',
    a: 'Submit your domain and email, and your report arrives by email in about 10 minutes. You review the full report first, then pay the $1. No upfront payment required.',
  },
  {
    q: 'What if I want ongoing monitoring?',
    a: 'The $1 audit is a one-time baseline. Ongoing monitoring is available separately and is always opt-in — never automatically charged.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Page hero */}
        <section className="dot-bg" style={{ paddingTop: 72, paddingBottom: 56 }} aria-labelledby="pricing-page-heading">
          <div className="wrap" style={{ maxWidth: 720, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 16,
            }}>
              Pricing
            </p>
            <h1
              id="pricing-page-heading"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(34px, 5vw, 58px)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: 'var(--ink)',
                marginBottom: 20,
              }}
            >
              Simple pricing.<br />Just <span style={{ color: 'var(--accent)' }}>$1</span>.
            </h1>
            <p style={{
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--muted)',
              maxWidth: 560,
              margin: '0 auto',
            }}>
              No tiers. No seats. No &quot;contact sales.&quot; One audit, every AI engine that matters,
              for one dollar — and you only pay once you&apos;ve seen the report.
            </p>
          </div>
        </section>

        <Pricing />

        {/* Pricing FAQ */}
        <section style={{ borderBottom: '2px solid var(--ink)' }} className="section-pad" aria-labelledby="pricing-faq-heading">
          <div className="wrap">
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <h2
                id="pricing-faq-heading"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: 32,
                }}
              >
                About the $1
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {pricingFaqs.map((faq, i) => (
                  <details
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '2px solid var(--ink)',
                      borderRadius: 14,
                      boxShadow: '4px 4px 0 var(--ink)',
                      overflow: 'hidden',
                    }}
                  >
                    <summary
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 16,
                        padding: '20px 22px',
                        cursor: 'pointer',
                        listStyle: 'none',
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: 'var(--ink)',
                        lineHeight: 1.4,
                      }}>
                        {faq.q}
                      </span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        className="chevron"
                        style={{ flexShrink: 0, color: 'var(--accent)' }}
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 10l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </summary>
                    <div style={{ padding: '0 22px 20px', borderTop: '1px solid var(--line)' }}>
                      <p style={{
                        fontFamily: 'var(--font-hanken-grotesk)',
                        fontSize: '0.97rem',
                        lineHeight: 1.7,
                        color: 'var(--muted)',
                        paddingTop: 16,
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
