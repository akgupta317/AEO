const columns = [
  { label: 'MakeCited', sub: '', highlight: true },
  { label: 'Profound', sub: '$499/mo', highlight: false },
  { label: 'Peec AI', sub: '€89/mo', highlight: false },
  { label: 'Otterly', sub: '$29/mo', highlight: false },
]

const rows: { feature: string; values: string[] }[] = [
  { feature: 'Cost to get your first answer', values: ['$1 once', '$499/mo', '€89/mo', '$29/mo'] },
  { feature: 'Tells you what to fix (not just data)', values: ['✓ Yes', 'Data only', 'Partial', 'Data only'] },
  { feature: 'Sentiment, not just mention count', values: ['✓ Yes', 'Partial', '✗ No', '✗ No'] },
  { feature: 'ChatGPT + Perplexity + Gemini + Claude', values: ['✓ Yes', '✓ Yes', '✓ Yes', 'Partial'] },
  { feature: 'No subscription to start', values: ['✓ Yes', '✗ No', '✗ No', '✗ No'] },
  { feature: 'Built for non-experts', values: ['✓ Yes', '✗ No', 'Partial', '✓ Yes'] },
]

function Cell({ value, col }: { value: string; col: number }) {
  const isCheck = value.startsWith('✓')
  const isCross = value.startsWith('✗')
  const isPartial = value === 'Partial'

  let color = col === 0 ? 'var(--accent)' : 'var(--muted)'
  if (isCheck) color = '#4BAE5A'
  if (isCross) color = 'var(--alarm)'
  if (isPartial) color = '#F2B705'

  return (
    <span style={{
      fontFamily: 'var(--font-hanken-grotesk)',
      fontSize: '0.93rem',
      fontWeight: isCheck || isCross || col === 0 ? 600 : 500,
      color,
    }}>
      {value}
    </span>
  )
}

export default function Compare() {
  return (
    <section
      id="compare"
      style={{ borderBottom: '2px solid var(--ink)' }}
      className="section-pad"
      aria-labelledby="compare-heading"
    >
      <div className="wrap">
        <div style={{ marginBottom: 48, maxWidth: 680 }}>
          <h2
            id="compare-heading"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.4vw, 40px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 0,
            }}
          >
            A $1 audit vs. a $499/mo dashboard you have to figure out
          </h2>
        </div>

        <div style={{ overflowX: 'auto', margin: '0 -4px', padding: '0 4px' }}>
          <table
            style={{
              width: '100%',
              minWidth: 640,
              borderCollapse: 'collapse',
              border: '2px solid var(--ink)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '6px 6px 0 var(--ink)',
              background: 'var(--surface)',
            }}
            aria-label="Comparison: MakeCited vs competitors"
          >
            <thead>
              <tr style={{ background: 'var(--ink)' }}>
                <th
                  style={{
                    padding: '14px 20px',
                    textAlign: 'left',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: 11,
                    fontWeight: 500,
                    color: 'rgba(250,248,243,0.5)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRight: '1px solid rgba(250,248,243,0.1)',
                  }}
                  scope="col"
                >
                  Feature
                </th>
                {columns.map((col) => (
                  <th
                    key={col.label}
                    scope="col"
                    style={{
                      padding: '14px 16px',
                      textAlign: 'center',
                      background: col.highlight ? 'rgba(35,71,255,0.3)' : 'transparent',
                      borderRight: '1px solid rgba(250,248,243,0.1)',
                    }}
                  >
                    <span style={{
                      display: 'block',
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: 15,
                      color: col.highlight ? '#fff' : 'rgba(250,248,243,0.75)',
                    }}>
                      {col.label}
                    </span>
                    {col.sub && (
                      <span style={{
                        display: 'block',
                        fontFamily: 'var(--font-jetbrains-mono)',
                        fontSize: 11,
                        color: 'rgba(250,248,243,0.45)',
                        marginTop: 2,
                      }}>
                        {col.sub}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.feature}
                  style={{
                    borderTop: '1px solid var(--line)',
                    background: ri % 2 === 1 ? 'rgba(250,248,243,0.5)' : 'var(--surface)',
                  }}
                >
                  <td style={{
                    padding: '14px 20px',
                    fontFamily: 'var(--font-hanken-grotesk)',
                    fontSize: '0.93rem',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    borderRight: '1px solid var(--line)',
                  }}>
                    {row.feature}
                  </td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: '14px 16px',
                        textAlign: 'center',
                        background: ci === 0 ? 'rgba(35,71,255,0.07)' : 'transparent',
                        borderRight: ci < row.values.length - 1 ? '1px solid var(--line)' : 'none',
                      }}
                    >
                      <Cell value={val} col={ci} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
