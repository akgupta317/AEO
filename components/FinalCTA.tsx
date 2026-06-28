export default function FinalCTA() {
  return (
    <section
      style={{ borderBottom: '2px solid var(--ink)' }}
      className="section-pad"
      aria-labelledby="final-cta-heading"
    >
      <div className="wrap">
        <div style={{
          background: 'var(--ink)',
          border: '2px solid var(--ink)',
          borderRadius: 20,
          boxShadow: '6px 6px 0 var(--accent)',
          padding: 'clamp(40px, 6vw, 80px) clamp(28px, 6vw, 72px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dot pattern overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(250,248,243,0.08) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              id="final-cta-heading"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 52px)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: 'var(--bg)',
                marginBottom: 20,
              }}
            >
              Find out what AI says about you for a dollar.
            </h2>

            <p style={{
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'rgba(250,248,243,0.65)',
              marginBottom: 40,
              maxWidth: 520,
              margin: '0 auto 40px',
            }}>
              Before you spend $499/mo to monitor a problem you haven&apos;t diagnosed — diagnose it for $1.
            </p>

            <a
              href="#"
              className="btn-primary"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: '2px solid var(--bg)',
                boxShadow: '4px 4px 0 rgba(250,248,243,0.3)',
                fontSize: '1.05rem',
                padding: '15px 32px',
              }}
              aria-label="Run my $1 AEO audit"
            >
              Run my $1 audit →
            </a>

            <p style={{
              marginTop: 20,
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '0.875rem',
              color: 'rgba(250,248,243,0.4)',
            }}>
              Report by email in ~10 min · Pay $1 after you see it · No subscription
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
