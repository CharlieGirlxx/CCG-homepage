'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSkin } from '@/components/skin-provider'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const skinConfig: Record<string, { accent: string; bg: string }> = {
  ndis: { accent: '#d61f69', bg: '#f8d7e6' },
  'aged-care': { accent: '#16a34a', bg: '#dcfce7' },
  'service-provider': { accent: '#3b82f6', bg: '#eff6ff' },
}

export function Footer() {
  const { skin, setSkin } = useSkin()
  const config = skin ? skinConfig[skin] : null

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0f0f14' }}>
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill={config?.bg || '#fff'}
          />
        </svg>
      </div>

      {/* Subtle gradient glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: config
            ? `radial-gradient(ellipse at 20% 50%, ${config.accent}40 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, ${config.accent}20 0%, transparent 60%)`
            : 'radial-gradient(ellipse at 50% 50%, #9b188f20 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <section className="md:col-span-2" aria-labelledby="brand-title">
            {/* Logo: Full Carters Care Group logo */}
            <div className="mb-5">
              <Image
                src="/assets/carters-logo.png"
                alt="Carters Care Group logo"
                width={140}
                height={53}
                className="h-10 w-auto"
                id="brand-title"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your family in disability and aged care services. We treat every client with the love and respect they deserve.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: 'NDIS Registered', color: '#0d8a5d' },
                { label: 'Aged Care Approved', color: '#be123c' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{ borderColor: badge.color + '60', color: badge.color }}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section aria-labelledby="contact-title">
            <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-gray-500" id="contact-title">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={14} className="text-gray-500 shrink-0" />
                <a href="tel:1300002723">1300 00 27 23</a>
              </div>
              <div className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail size={14} className="text-gray-500 shrink-0 mt-0.5" />
                <a href="mailto:hello@carters.care">hello@carters.care</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gray-500 shrink-0" />
                <span>PO Box 1118, Osborne Park, WA 6916</span>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section aria-labelledby="nav-title">
            <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-gray-500" id="nav-title">
              Navigate
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-white transition-colors" />
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Carters Care Group. All rights reserved.
            </p>
            {config && (
              <button
                onClick={() => {
                  setSkin(null)
                  localStorage.removeItem('carters-skin')
                }}
                className="text-xs font-semibold px-4 py-2 rounded-full border-2 transition-all duration-200 hover:opacity-80"
                style={{
                  borderColor: config.accent,
                  color: config.accent,
                  background: 'transparent',
                }}
              >
                Switch Portal
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
