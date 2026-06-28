const cards = [
  {
    num: '01',
    title: 'Cited or invisible?',
    body: 'Reveals your citation status across all 5 AI engines with a prompt-by-prompt breakdown.',
    inverted: false,
  },
  {
    num: '02',
    title: 'Why you\'re missing',
    body: 'Root cause in plain English: thin content, no schema, weak authority, or wrong sources.',
    inverted: false,
  },
  {
    num: '03',
    title: 'What to fix first',
    body: '3–5 prioritized actions ranked by impact — not a 50-point checklist you\'ll never finish.',
    inverted: true,
  },
  {
    num: '04',
    title: 'Proof it matters',
    body: 'AI-referred visitors convert at 3–5× organic. This is where your buyers already are.',
    inverted: false,
  },
]

export default function Deliverables() {
  return (
    <section
      id="what-you-get"
      style={{ borderBottom: '2px solid var(--ink)' }}
      className="section-pad"
      aria-labelledby="deliverables-heading"
    >
      <div className="wrap">
        <div style={{ marginBottom: 56, maxWidth: 640 }}>
          <h2
            id="deliverables-heading"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.8vw, 46px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 16,
            }}
          >
            What your $1 audit delivers
          </h2>
          <p style={{ fontFamily: 'var(--font-hanken-grotesk)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            A complete picture of your AI visibility — and a clear path to improving it.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}
          className="deliverables-grid"
        >
          {cards.map((card) => (
            <article
              key={card.num}
              className={card.inverted ? 'deliver-card deliver-card--inv' : 'deliver-card'}
              style={{
                background: card.inverted ? 'var(--ink)' : 'var(--surface)',
                border: '2px solid var(--ink)',
                borderRadius: 16,
                padding: 26,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: 12,
                fontWeight: 500,
                color: card.inverted ? 'var(--accent)' : 'var(--accent)',
                letterSpacing: '0.08em',
                marginBottom: 16,
              }}>
                {card.num}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 21,
                letterSpacing: '-0.01em',
                color: card.inverted ? 'var(--bg)' : 'var(--ink)',
                marginBottom: 12,
                lineHeight: 1.2,
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-hanken-grotesk)',
                fontSize: '0.95rem',
                lineHeight: 1.65,
                color: card.inverted ? 'rgba(250,248,243,0.75)' : 'var(--muted)',
              }}>
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .deliver-card {
          box-shadow: 5px 5px 0 var(--ink);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .deliver-card--inv {
          box-shadow: 5px 5px 0 var(--accent);
        }
        .deliver-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 var(--ink);
        }
        .deliver-card--inv:hover {
          box-shadow: 7px 7px 0 var(--accent);
        }
        @media (min-width: 860px) {
          .deliverables-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1100px) {
          .deliverables-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
