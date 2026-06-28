const features = [
  'Cited / invisible status on 5 AI engines',
  'Prompt-by-prompt breakdown',
  'Sentiment analysis (trusted vs. unreliable)',
  'Top competitors stealing your citations',
  'Root-cause explanation in plain English',
  '3–5 prioritized fixes ranked by impact',
  'Delivered by email in ~10 minutes',
]

export default function Pricing() {
  return (
    <section
      id="why-1"
      style={{
        background: 'var(--accent)',
        borderTop: '2px solid var(--ink)',
        borderBottom: '2px solid var(--ink)',
        paddingTop: 96,
        paddingBottom: 96,
      }}
      aria-labelledby="pricing-heading"
    >
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 56,
          alignItems: 'center',
        }}
          className="pricing-grid"
        >
          {/* Left: copy */}
          <div>
            <p style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 11.5,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.6)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}>
              Pricing
            </p>
            <h2
              id="pricing-heading"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(30px, 4.2vw, 52px)',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: '#fff',
                marginBottom: 24,
              }}
            >
              One audit.<br />One dollar.
            </h2>
            <p style={{
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: 32,
              maxWidth: 480,
            }}>
              Your complete audit — every engine, every competitor, every fix — emailed within
              10 minutes. You only pay the $1 once it&apos;s in your inbox and you&apos;ve seen the results.
              We don&apos;t save your card, there are no overage fees, and there&apos;s no plan quietly waiting
              to upgrade you.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }} role="list">
              {features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.2)"/>
                    <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-hanken-grotesk)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: price card */}
          <div style={{
            background: 'var(--surface)',
            border: '2px solid var(--ink)',
            borderRadius: 20,
            boxShadow: '6px 6px 0 var(--ink)',
            padding: '40px 36px',
            textAlign: 'center',
            minWidth: 240,
          }}>
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(56px, 6vw, 80px)',
                lineHeight: 1,
                color: 'var(--accent)',
                letterSpacing: '-0.03em',
                marginBottom: 8,
              }}
              aria-label="Price: one dollar"
            >
              $1
            </div>
            <p style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 12,
              color: 'var(--muted)',
              letterSpacing: '0.05em',
              marginBottom: 28,
            }}>
              one-time · no subscription
            </p>
            <a
              href="#"
              className="btn-inverted"
              style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
              aria-label="Run my $1 AEO audit"
            >
              Run my $1 audit →
            </a>
            <p style={{
              marginTop: 16,
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '0.8rem',
              color: 'var(--muted)',
              lineHeight: 1.5,
            }}>
              Report by email in ~10 min<br />Pay $1 after you see it
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
