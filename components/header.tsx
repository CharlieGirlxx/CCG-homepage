'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSkin } from '@/components/skin-provider'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const skinConfig: Record<string, {
  label: string
  color: string
  bg: string
  accent: string
  gradient: string
}> = {
  ndis: {
    label: 'NDIS',
    color: '#a01650',
    bg: '#f8d7e6',
    accent: '#d61f69',
    gradient: 'linear-gradient(135deg, #d61f69, #e84384)',
  },
  'aged-care': {
    label: 'Aged Care',
    color: '#166534',
    bg: '#dcfce7',
    accent: '#16a34a',
    gradient: 'linear-gradient(135deg, #16a34a, #22c55e)',
  },
  'service-provider': {
    label: 'Service Provider',
    color: '#1e40af',
    bg: '#eff6ff',
    accent: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
  },
}

export function Header() {
  const { skin, setSkin } = useSkin()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const config = skin ? skinConfig[skin] : null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  const accentColor = config?.accent || '#9b188f'

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.80)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 1px 32px 0 rgba(0,0,0,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* Skin accent bar */}
      {config && (
        <div
          className="h-0.5 w-full"
          style={{ background: config.gradient }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo + NDIS Badge */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/assets/carters-logo.png"
                alt="Carters Care"
                width={200}
                height={85}
                className="transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* NDIS Badge */}
            <a
              href="https://www.ndiscommission.gov.au/provider-registration/carters-care-group-ccg-pty-ltd"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify Carters Care Group NDIS Provider Registration"
              className="hidden lg:block transition-transform hover:scale-105"
            >
              <Image
                src="/assets/ndis-registered-badge.png"
                alt="Registered NDIS Provider - Carters Care Group"
                width={120}
                height={72}
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-lg hover:bg-black/5"
                  style={{ color: active ? accentColor : '#444' }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                      style={{ background: accentColor }}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              )
            })}

            <a
              href="tel:1300002723"
              className="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{ background: config?.gradient || 'linear-gradient(135deg, #9b188f, #c41e5a)' }}
            >
              <Phone size={14} />
              1300 00 27 23
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/98 border-t border-gray-100"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-gray-50"
                    style={{ color: pathname === link.href ? accentColor : '#333' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 space-y-2">
                {config && (
                  <button
                    onClick={() => {
                      setSkin(null)
                      setMobileOpen(false)
                    }}
                    className="w-full px-4 py-3 rounded-xl text-sm font-bold border-2 transition-colors"
                    style={{ borderColor: config.accent, color: config.accent }}
                  >
                    Switch Portal
                  </button>
                )}
                <a
                  href="tel:1300002723"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold text-white"
                  style={{ background: config?.gradient || 'linear-gradient(135deg, #9b188f, #c41e5a)' }}
                >
                  <Phone size={14} />
                  1300 00 27 23
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
