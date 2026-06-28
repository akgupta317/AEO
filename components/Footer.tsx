export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        borderTop: '2px solid var(--ink)',
      }}
      role="contentinfo"
    >
      <div className="wrap" style={{ padding: '28px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          {/* Logo mark + brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 24,
              height: 24,
              border: '1.5px solid rgba(250,248,243,0.25)',
              borderRadius: 7,
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 12 }}>M</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--bg)',
              letterSpacing: '-0.01em',
            }}>
              makecited.com
            </span>
            <span style={{ color: 'rgba(250,248,243,0.25)', fontSize: 14 }} aria-hidden="true">·</span>
            <span style={{
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '0.875rem',
              color: 'rgba(250,248,243,0.45)',
            }}>
              the $1 AEO audit
            </span>
          </div>

          <p style={{
            fontFamily: 'var(--font-hanken-grotesk)',
            fontSize: '0.875rem',
            color: 'rgba(250,248,243,0.35)',
          }}>
            &copy; 2026 makecited.com
          </p>
        </div>
      </div>
    </footer>
  )
}
