const faqs = [
  {
    q: 'What do I get for $1?',
    a: "A full audit across 5 AI engines — ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. You get cited/invisible status, sentiment analysis, top competitors who are mentioned instead of you, root-cause explanation, and 3–5 prioritized fixes. Delivered by email in ~10 minutes. You only pay after you've seen the report.",
  },
  {
    q: 'Is there a subscription or hidden fee?',
    a: "No. $1 is the complete price, charged once after you see results. We don't store your card, there are no overage fees, and there's nothing to cancel.",
  },
  {
    q: 'What do I need to start?',
    a: 'Just your domain and email address. No install, no tracking script, no account to create.',
  },
  {
    q: 'How long does it take, and when do I pay?',
    a: 'Submit your domain and email, and your report arrives within approximately 10 minutes. You review the full report first, then pay the $1. No upfront payment required.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You receive a clear baseline and a prioritized fix list you can act on immediately. Ongoing monitoring is optional and never automatically charged.',
  },
  {
    q: 'Which AI engines do you check?',
    a: 'ChatGPT (OpenAI), Perplexity AI, Google Gemini, Anthropic Claude, and Google AI Overviews. These are the five primary engines where buyers discover products today.',
  },
]

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{ borderBottom: '2px solid var(--ink)' }}
      className="section-pad"
      aria-labelledby="faq-heading"
    >
      <div className="wrap">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <h2
              id="faq-heading"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(26px, 3.4vw, 40px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginBottom: 14,
              }}
            >
              Straight answers
            </h2>
            <p style={{ fontFamily: 'var(--font-hanken-grotesk)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              No vague promises. No enterprise speak.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
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
                  id={`faq-q-${i}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '20px 22px',
                    cursor: 'pointer',
                    listStyle: 'none',
                  }}
                  aria-label={faq.q}
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
  )
}
