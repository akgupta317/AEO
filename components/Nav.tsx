'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { label: 'What you get', href: '#what-you-get' },
  { label: 'Compare', href: '#compare' },
  { label: 'Why $1', href: '#why-1' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
          </ul>

          {/* Desktop CTA */}
          <a href="#why-1" className="btn-primary hidden md:inline-flex" aria-label="Run my $1 audit">
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
              <li style={{ paddingTop: 12 }}>
                <a href="#why-1" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setOpen(false)}>
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
