const steps = [
  {
    number: '1',
    title: 'Drop your domain & email',
    body: 'No script, no signup marathon. Just your URL and an inbox.',
  },
  {
    number: '2',
    title: 'We interrogate 5 AI engines',
    body: '40+ category prompts, run multiple times to beat the randomness.',
  },
  {
    number: '3',
    title: 'Get it by email in ~10 min',
    body: 'Cited vs invisible, sentiment, competitors, fixes — in your inbox. Review it, then pay just $1.',
  },
]

export default function HowItWorks() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        color: 'var(--bg)',
        borderTop: '2px solid var(--ink)',
        borderBottom: '2px solid var(--ink)',
      }}
      aria-labelledby="how-it-works-heading"
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '84px 28px' }}>
        <div style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 16,
        }}>
          // how it works
        </div>

        <h2
          id="how-it-works-heading"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            margin: '0 0 36px',
          }}
        >
          Three steps. Ten minutes.
        </h2>

        <ol
          className="steps-grid"
          style={{
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            margin: 0,
            padding: 0,
          }}
        >
          {steps.map((step) => (
            <li key={step.number}>
              <div
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 56,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {step.number}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 22,
                margin: '12px 0 8px',
                color: 'var(--bg)',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-hanken-grotesk)',
                fontSize: 15.5,
                lineHeight: 1.5,
                color: 'color-mix(in srgb, var(--bg) 70%, transparent)',
                margin: 0,
              }}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
