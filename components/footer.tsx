'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSkin } from '@/components/skin-provider'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const skinConfig: Record<string, { accent: string; bg: string }> = {
  ndis: { accent: '#0d8a5d', bg: '#f0fdf4' },
  'aged-care': { accent: '#be123c', bg: '#fff1f2' },
  'service-provider': { accent: '#2563eb', bg: '#eff6ff' },
}

export function Footer() {
  const { skin } = useSkin()
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
          <div className="md:col-span-2">
            <Image
              src="/assets/carters-logo.png"
              alt="Carters Care"
              width={140}
              height={50}
              className="invert mb-5 opacity-90"
            />
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
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-gray-500">
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-gray-500">
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
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Carters Care Group. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            ABN: Your ABN here · NDIS Provider Registration
          </p>
        </div>
      </div>
    </footer>
  )
}
