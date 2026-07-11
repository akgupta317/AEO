import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — News, Updates & Research | MakeCited',
  description:
    'AEO research, product updates, and practical guides on getting cited by ChatGPT, Perplexity, Gemini, and Claude.',
  alternates: {
    canonical: 'https://makecited.com/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://makecited.com/blog',
    title: 'Blog — News, Updates & Research | MakeCited',
    description:
      'AEO research, product updates, and practical guides on getting cited by ChatGPT, Perplexity, Gemini, and Claude.',
    siteName: 'MakeCited',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main id="main-content">
        <section style={{ paddingTop: 72, paddingBottom: 40, borderBottom: '2px solid var(--ink)' }} aria-labelledby="blog-heading">
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
              id="blog-heading"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4.6vw, 52px)',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: 'var(--ink)',
                marginBottom: 14,
              }}
            >
              Blog
            </h1>
            <p style={{
              fontFamily: 'var(--font-hanken-grotesk)',
              fontSize: '1.05rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
              maxWidth: 560,
            }}>
              News, updates, research — how to get your brand cited by AI engines.
            </p>
          </div>
        </section>

        <section className="section-pad" aria-label="Blog posts">
          <div className="wrap">
            {posts.length === 0 ? (
              <p style={{ fontFamily: 'var(--font-hanken-grotesk)', color: 'var(--muted)' }}>
                No posts yet — check back soon.
              </p>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: 24,
                }}
              >
                {posts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card blog-card"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.15s, box-shadow 0.15s',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            fontSize: 11.5,
                            fontWeight: 600,
                            color: 'var(--accent)',
                            background: 'rgba(35,71,255,0.08)',
                            padding: '4px 10px',
                            borderRadius: 999,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      color: 'var(--ink)',
                      marginBottom: 10,
                    }}>
                      {post.title}
                    </h2>

                    <p style={{
                      fontFamily: 'var(--font-hanken-grotesk)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: 'var(--muted)',
                      marginBottom: 20,
                      flex: 1,
                    }}>
                      {post.summary}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: 12.5,
                      color: 'var(--muted)',
                      paddingTop: 16,
                      borderTop: '1px solid var(--line)',
                    }}>
                      <span>{post.dateDisplay}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .blog-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 var(--ink);
        }
      `}</style>
    </>
  )
}
