'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const links = [
  { label: 'What you get', href: '/#what-you-get' },
  { label: 'Compare', href: '/#compare' },
]

const resourceItems = [
  { label: 'Blog', subtitle: 'News, updates, research', href: '/blog' },
  { label: 'AEO Report', subtitle: 'View sample AEO report', href: '/sample-report' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const resourcesRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setResourcesOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,248,243,0.96)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'border-color 0.2s, backdrop-filter 0.2s',
      }}
    >
      <div className="wrap">
        <nav
          aria-label="Main navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 68,
          }}
        >
          {/* Logo */}
          <a
            href="/"
            aria-label="MakeCited home"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <Image
              src="/makecited-logo-full.svg"
              alt="MakeCited"
              width={160}
              height={36}
              priority
              style={{ height: 36, width: 'auto' }}
            />
          </a>

          {/* Desktop nav */}
          <ul
            className="hidden md:flex"
            style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: 36 }}
            role="list"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-hanken-grotesk)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Resources dropdown */}
            <li ref={resourcesRef} style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                aria-controls="resources-menu"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-hanken-grotesk)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: resourcesOpen ? 'var(--ink)' : 'var(--muted)',
                  transition: 'color 0.15s',
                }}
              >
                Resources
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{ transform: resourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}
                  aria-hidden="true"
                >
                  <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {resourcesOpen && (
                <div
                  id="resources-menu"
                  role="menu"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 14px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--surface)',
                    border: '2px solid var(--ink)',
                    borderRadius: 14,
                    boxShadow: '5px 5px 0 var(--ink)',
                    padding: 10,
                    minWidth: 240,
                  }}
                >
                  {resourceItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        display: 'block',
                        padding: '10px 12px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <div style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: 'var(--ink)',
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-hanken-grotesk)',
                        fontSize: '0.8rem',
                        color: 'var(--muted)',
                        marginTop: 2,
                      }}>
                        {item.subtitle}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a
                href="/pricing"
                style={{
                  fontFamily: 'var(--font-hanken-grotesk)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                Pricing
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <a href="/#why-1" className="btn-primary hidden md:inline-flex" aria-label="Run my $1 audit">
            Run my $1 audit →
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 5 }}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--ink)',
                  borderRadius: 2,
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform: open
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            style={{ borderTop: '1px solid var(--line)', paddingBottom: 20 }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 16 }} role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{ display: 'block', padding: '10px 4px', fontFamily: 'var(--font-hanken-grotesk)', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Mobile resources */}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  aria-expanded={mobileResourcesOpen}
                  aria-controls="mobile-resources-menu"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-hanken-grotesk)',
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: 'var(--muted)',
                  }}
                >
                  Resources
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{ transform: mobileResourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}
                    aria-hidden="true"
                  >
                    <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileResourcesOpen && (
                  <ul id="mobile-resources-menu" style={{ listStyle: 'none', paddingLeft: 12 }} role="list">
                    {resourceItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          style={{ display: 'block', padding: '8px 4px' }}
                        >
                          <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--ink)' }}>
                            {item.label}
                          </div>
                          <div style={{ fontFamily: 'var(--font-hanken-grotesk)', fontSize: '0.8rem', color: 'var(--muted)', marginTop: 2 }}>
                            {item.subtitle}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '10px 4px', fontFamily: 'var(--font-hanken-grotesk)', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' }}
                >
                  Pricing
                </a>
              </li>

              <li style={{ paddingTop: 12 }}>
                <a href="/#why-1" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setOpen(false)}>
                  Run my $1 audit →
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
