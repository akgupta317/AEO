import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sample AEO Report | MakeCited',
  description:
    'See exactly what a MakeCited $1 AEO audit looks like — citation status across 5 AI engines, sentiment, competitor analysis, and prioritized fixes.',
  alternates: {
    canonical: 'https://makecited.com/sample-report',
  },
  robots: { index: false, follow: true },
}

const engines = [
  { name: 'ChatGPT', status: 'invisible', note: 'Not mentioned in 4 of 5 test prompts' },
  { name: 'Perplexity', status: 'cited', note: 'Cited once, ranked 3rd of 4 sources' },
  { name: 'Gemini', status: 'invisible', note: 'Not mentioned in any test prompt' },
  { name: 'Claude', status: 'cited', note: 'Cited twice, described accurately' },
  { name: 'Google AI Overview', status: 'invisible', note: 'Overview cites two competitors instead' },
]

const competitors = [
  { name: 'Competitor A', mentions: 5, note: 'Cited in every engine — strong G2 presence' },
  { name: 'Competitor B', mentions: 4, note: 'Frequent Reddit and roundup-article mentions' },
  { name: 'Competitor C', mentions: 3, note: 'Cited mainly for pricing comparisons' },
]

const fixes = [
  {
    n: '01',
    title: 'Unblock Google-Extended in robots.txt',
    body: 'Google-Extended is currently disallowed, which removes eligibility for Gemini and AI Overview citations site-wide.',
    impact: 'High',
  },
  {
    n: '02',
    title: 'Add FAQPage schema to the pricing page',
    body: 'Pricing is presented in table form but has no structured data, so AI engines default to third-party pricing summaries instead.',
    impact: 'High',
  },
  {
    n: '03',
    title: 'Rewrite the product overview\'s opening paragraph',
    body: 'The first paragraph is marketing copy with no concrete claim. Lead with a specific, self-contained answer AI can extract directly.',
    impact: 'Medium',
  },
]

function StatusPill({ status }: { status: 'cited' | 'invisible' }) {
  const isCited = status === 'cited'
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-jetbrains-mono)',
      fontSize: 12.5,
      fontWeight: 600,
      color: isCited ? 'var(--green)' : 'var(--alarm)',
      background: isCited ? 'rgba(75,174,90,0.12)' : 'rgba(229,64,42,0.1)',
      padding: '5px 12px',
      borderRadius: 999,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: isCited ? 'var(--green)' : 'var(--alarm)' }} aria-hidden="true" />
      {isCited ? 'Cited' : 'Invisible'}
    </span>
  )
}

export default function SampleReportPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section style={{ paddingTop: 72, paddingBottom: 40, borderBottom: '2px solid var(--ink)' }} className="dot-bg" aria-labelledby="sample-report-heading">
          <div className="wrap">
            <p style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 16,
            }}>
              Resources
            </p>
            <h1
              id="sample-report-heading"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(30px, 4.4vw, 48px)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: 'var(--ink)',
                marginBottom: 14,
              }}
            >
              Sample AEO report
            </h1>
            <p style={{
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '1.05rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
              maxWidth: 620,
              marginBottom: 20,
            }}>
              This is what lands in your inbox ~10 minutes after you submit a domain. The data below
              is illustrative — built from a fictional brand, <strong style={{ color: 'var(--ink)' }}>exampledomain.com</strong> —
              so you can see the shape of the report before you pay $1 for your own.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              border: '1.5px solid var(--ink)',
              borderRadius: 999,
              padding: '6px 14px',
              background: 'var(--surface)',
            }}>
              Sample data — not a real audit
            </div>
          </div>
        </section>

        {/* Engine status */}
        <section className="section-pad" style={{ borderBottom: '2px solid var(--ink)' }} aria-labelledby="engine-status-heading">
          <div className="wrap">
            <h2 id="engine-status-heading" style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.8vw, 30px)',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 28,
            }}>
              Cited or invisible?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {engines.map((engine) => (
                <div
                  key={engine.name}
                  className="card"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 220 }}>
                    <span style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: 'var(--ink)',
                    }}>
                      {engine.name}
                    </span>
                    <StatusPill status={engine.status as 'cited' | 'invisible'} />
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-hanken-grotesk)',
                    fontSize: '0.92rem',
                    color: 'var(--muted)',
                    margin: 0,
                  }}>
                    {engine.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitors */}
        <section className="section-pad" style={{ borderBottom: '2px solid var(--ink)' }} aria-labelledby="competitors-heading">
          <div className="wrap">
            <h2 id="competitors-heading" style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.8vw, 30px)',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 8,
            }}>
              Who&apos;s winning instead
            </h2>
            <p style={{ fontFamily: 'var(--font-hanken-grotesk)', color: 'var(--muted)', marginBottom: 28, maxWidth: 560 }}>
              Top competitors cited in answers where exampledomain.com was absent, out of 5 test prompts per engine.
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-hanken-grotesk)', fontSize: '0.95rem', minWidth: 480 }}>
                <thead>
                  <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Competitor</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Mentions / 5</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Why they win</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c, i) => (
                    <tr key={c.name} style={{ background: i % 2 === 1 ? 'rgba(0,0,0,0.02)' : 'transparent' }}>
                      <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>{c.name}</td>
                      <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', color: 'var(--accent)', fontFamily: 'var(--font-jetbrains-mono)' }}>{c.mentions}</td>
                      <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', color: 'var(--muted)' }}>{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Prioritized fixes */}
        <section className="section-pad" style={{ borderBottom: '2px solid var(--ink)' }} aria-labelledby="fixes-heading">
          <div className="wrap">
            <h2 id="fixes-heading" style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.8vw, 30px)',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 28,
            }}>
              What to fix first
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {fixes.map((fix) => (
                <div key={fix.n} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: 12, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.08em' }}>
                      {fix.n}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: 11,
                      fontWeight: 600,
                      color: fix.impact === 'High' ? 'var(--alarm)' : 'var(--muted)',
                      background: fix.impact === 'High' ? 'rgba(229,64,42,0.1)' : 'rgba(0,0,0,0.05)',
                      padding: '3px 9px',
                      borderRadius: 6,
                      textTransform: 'uppercase',
                    }}>
                      {fix.impact} impact
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: 10, lineHeight: 1.3 }}>
                    {fix.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-hanken-grotesk)', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--muted)' }}>
                    {fix.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
