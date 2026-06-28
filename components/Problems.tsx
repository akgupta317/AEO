'use client'

import { useState } from 'react'

const problems = [
  {
    q: '"I can see what\'s happening — I just don\'t know what to change."',
    a: 'Most tools stop at a chart. MakeCited ends with 3–5 prioritized, plain-language fixes ranked by impact.',
  },
  {
    q: 'Pricing that\'s a mystery until the invoice lands',
    a: '$1, one time, no card saved, no surprise overage fees.',
  },
  {
    q: 'They count mentions — not whether the mention helps you',
    a: 'MakeCited scores sentiment to show if AI calls you trusted and efficient — or expensive and unreliable.',
  },
  {
    q: 'AI answers are probabilistic, so the data looks broken',
    a: 'MakeCited runs every prompt multiple times and reports the pattern, not one snapshot.',
  },
  {
    q: 'Dashboards built for analysts, not founders',
    a: 'Designed for founders to understand in 60 seconds, not data teams who live in dashboards.',
  },
  {
    q: 'One tool only checks ChatGPT',
    a: 'MakeCited checks 5 engines. Only ~11% domain overlap between ChatGPT and Perplexity — being visible on one means nothing if invisible on others.',
  },
  {
    q: 'Enterprise tools assume an enterprise team',
    a: 'Designed for SMBs doing a one-time audit before committing to ongoing monitoring.',
  },
]

export default function Problems() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      style={{ borderBottom: '2px solid var(--ink)' }}
      className="section-pad"
      aria-labelledby="problems-heading"
    >
      <div className="wrap">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <h2
              id="problems-heading"
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
              Built to fix what others get wrong
            </h2>
            <p style={{ fontFamily: 'var(--font-hanken-grotesk)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              Every design decision exists because another tool made the wrong one.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} role="list">
            {problems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--surface)',
                  border: '2px solid var(--ink)',
                  borderRadius: 14,
                  boxShadow: '4px 4px 0 var(--ink)',
                  overflow: 'hidden',
                }}
                role="listitem"
              >
                <button
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '20px 22px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`problem-${i}`}
                  id={`problem-btn-${i}`}
                >
                  <span style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'var(--ink)',
                    lineHeight: 1.4,
                  }}>
                    {item.q}
                  </span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    style={{
                      flexShrink: 0,
                      color: 'var(--accent)',
                      transform: openIdx === i ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 10l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {openIdx === i && (
                  <div
                    id={`problem-${i}`}
                    role="region"
                    aria-labelledby={`problem-btn-${i}`}
                    style={{ padding: '0 22px 20px', borderTop: '1px solid var(--line)' }}
                  >
                    <p style={{
                      fontFamily: 'var(--font-hanken-grotesk)',
                      fontSize: '0.97rem',
                      lineHeight: 1.7,
                      color: 'var(--muted)',
                      paddingTop: 16,
                    }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
