'use client'

import { useState } from 'react'

const deliverables = [
  {
    title: 'Cited or invisible?',
    desc: 'A yes/no baseline across ChatGPT, Perplexity, Gemini & Claude.',
  },
  {
    title: 'What they\'re actually saying.',
    desc: 'Sentiment — positive, neutral or negative — not just a mention count.',
  },
  {
    title: 'Who\'s winning instead.',
    desc: 'The top 3 competitors cited in answers where you\'re absent.',
  },
  {
    title: 'Why you\'re missing.',
    desc: 'Root cause: no schema, weak authority, thin content, or wrong sources.',
  },
  {
    title: 'What to fix first.',
    desc: '3–5 prioritized, plain-language actions — not a 50-point checklist.',
  },
  {
    title: 'Traffic attribution.',
    desc: 'How much traffic AI already sends you — and how it converts (3–5× organic).',
  },
]

function DeliversCard() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '2px solid var(--ink)',
      borderRadius: 18,
      boxShadow: '8px 8px 0 var(--ink)',
      overflow: 'hidden',
    }}>
      {/* Window bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '14px 18px',
        borderBottom: '2px solid var(--ink)',
        background: 'color-mix(in srgb, var(--accent) 6%, var(--surface))',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--alarm)', border: '1.5px solid var(--ink)' }} aria-hidden="true" />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#F2B705', border: '1.5px solid var(--ink)' }} aria-hidden="true" />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#4BAE5A', border: '1.5px solid var(--ink)' }} aria-hidden="true" />
        <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: 12, color: 'var(--muted)', marginLeft: 8 }}>
          makecited · live audit
        </span>
      </div>

      {/* Body — value offering */}
      <div style={{ padding: 24 }}>
        <div style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: 11,
          letterSpacing: '0.05em',
          color: 'var(--accent)',
          marginBottom: 14,
        }}>
          // what your $1 audit delivers
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0 }}>
          {deliverables.map((item) => (
            <li key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{
                flex: 'none',
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'color-mix(in srgb, var(--accent) 14%, transparent)',
                color: 'var(--accent)',
                fontSize: 10,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 1,
              }} aria-hidden="true">✓</span>
              <span style={{ fontFamily: 'var(--font-hanken-grotesk)', fontSize: 13, lineHeight: 1.35 }}>
                <strong style={{ color: 'var(--ink)' }}>{item.title}</strong>{' '}
                <span style={{ color: 'var(--muted)' }}>{item.desc}</span>
              </span>
            </li>
          ))}
        </ul>

        <div style={{
          marginTop: 15,
          paddingTop: 14,
          borderTop: '1.5px dashed var(--line)',
          fontFamily: 'var(--font-hanken-grotesk)',
          fontSize: 13.5,
          lineHeight: 1.4,
          color: 'var(--muted)',
        }}>
          Delivered to your inbox in <strong style={{ color: 'var(--ink)' }}>~10 min</strong>. Pay{' '}
          <strong style={{ color: 'var(--accent)' }}>$1</strong> only after you&apos;ve seen it.
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [domain, setDomain] = useState('')
  const [email, setEmail] = useState('')

  return (
    <section
      className="dot-bg"
      style={{ paddingTop: 84, paddingBottom: 72 }}
      aria-labelledby="hero-heading"
    >
      <div className="wrap">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 56, alignItems: 'center' }}>
          {/* Left: copy + form */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1.5px solid var(--accent)',
              borderRadius: 999,
              padding: '6px 12px',
              background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', animation: 'blink 1.4s infinite' }} aria-hidden="true" />
              The $1 AEO Audit
            </div>

            <h1
              id="hero-heading"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(40px, 5.6vw, 72px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                margin: '22px 0 0',
                color: 'var(--ink)',
              }}
            >
              When buyers ask AI,<br />are you <span style={{ color: 'var(--accent)' }}>the answer</span><br />— or <span style={{ color: 'var(--alarm)' }}>invisible</span>?
            </h1>

            <p style={{
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: 19,
              lineHeight: 1.5,
              color: 'var(--muted)',
              maxWidth: 520,
              margin: '24px 0 0',
            }}>
              ChatGPT, Perplexity, Gemini and Claude now recommend products <em>before</em> anyone
              visits your site. Drop your domain and email — we&apos;ll send a full report of where
              you&apos;re cited, where you&apos;re invisible, and the 3–5 fixes that change it within 10
              minutes. Pay just <strong style={{ color: 'var(--ink)' }}>$1</strong> once you&apos;ve seen it.
            </p>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 30, maxWidth: 560 }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {/* Domain */}
                <div style={{
                  flex: 1,
                  minWidth: 210,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--surface)',
                  border: '2px solid var(--ink)',
                  borderRadius: 12,
                  boxShadow: '4px 4px 0 var(--ink)',
                  overflow: 'hidden',
                }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains-mono)', color: 'var(--muted)', paddingLeft: 16, fontSize: 15 }}>https://</span>
                  <label htmlFor="hero-domain" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Your domain</label>
                  <input
                    id="hero-domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="yourdomain.com"
                    style={{
                      flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
                      fontFamily: 'var(--font-jetbrains-mono)', fontSize: 15.5, color: 'var(--ink)',
                      padding: '15px 14px 15px 4px',
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{
                  flex: 1,
                  minWidth: 210,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--surface)',
                  border: '2px solid var(--ink)',
                  borderRadius: 12,
                  boxShadow: '4px 4px 0 var(--ink)',
                  overflow: 'hidden',
                }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains-mono)', color: 'var(--muted)', paddingLeft: 16, fontSize: 15 }} aria-hidden="true">✉</span>
                  <label htmlFor="hero-email" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Your email</label>
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    style={{
                      flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
                      fontFamily: 'var(--font-jetbrains-mono)', fontSize: 15.5, color: 'var(--ink)',
                      padding: '15px 14px 15px 8px',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 16.5,
                  color: '#fff',
                  background: 'var(--accent)',
                  border: '2px solid var(--ink)',
                  borderRadius: 12,
                  boxShadow: '4px 4px 0 var(--ink)',
                  padding: '17px 24px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start',
                }}
                aria-label="Run my $1 AEO audit"
              >
                Run my $1 audit →
              </button>
            </form>

            <div style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 12.5,
              color: 'var(--muted)',
              marginTop: 14,
              letterSpacing: '0.02em',
            }}>
              Report by email in ~10 min&nbsp; ·&nbsp; Pay $1 after you see it&nbsp; ·&nbsp; No subscription
            </div>
          </div>

          {/* Right: value-offering card */}
          <div>
            <DeliversCard />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  )
}
