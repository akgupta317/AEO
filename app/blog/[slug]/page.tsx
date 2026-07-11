import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const url = `https://makecited.com/blog/${post.slug}`

  return {
    title: `${post.title} — MakeCited`,
    description: post.summary,
    authors: [{ name: 'MakeCited Team' }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.summary,
      siteName: 'MakeCited',
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const url = `https://makecited.com/blog/${post.slug}`

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'MakeCited', url: 'https://makecited.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MakeCited',
      url: 'https://makecited.com',
      logo: { '@type': 'ImageObject', url: 'https://makecited.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags,
    articleSection: post.tags[0],
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://makecited.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://makecited.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Nav />
      <main id="main-content">
        <div className="wrap" style={{ maxWidth: 780, paddingTop: 48, paddingBottom: 80 }}>
          <header style={{ paddingBottom: 32, borderBottom: '1px solid var(--line)', marginBottom: 32 }}>
            <div style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 13,
              color: 'var(--muted)',
              marginBottom: 20,
            }}>
              <a href="/" style={{ color: 'var(--muted)' }}>Home</a>
              {' → '}
              <a href="/blog" style={{ color: 'var(--muted)' }}>Blog</a>
              {' → '}
              <span>{post.title}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4.6vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              marginBottom: 18,
            }}>
              {post.title}
            </h1>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              fontSize: 13,
              color: 'var(--muted)',
              fontFamily: 'var(--font-jetbrains-mono)',
              alignItems: 'center',
            }}>
              <span>{post.dateDisplay}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(35,71,255,0.08)',
                    color: 'var(--accent)',
                    padding: '3px 10px',
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <article className="blog-article" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </main>
      <Footer />
    </>
  )
}
