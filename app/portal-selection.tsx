'use client'

import { useSkin } from '@/components/skin-provider'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const portals = [
  {
    id: 'ndis',
    title: 'NDIS Services',
    description: 'Personalised disability support services that put you in control',
    gradient: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    accent: '#0d8a5d',
    bg: '#f0fdf4',
  },
  {
    id: 'aged-care',
    title: 'Aged Care Services',
    description: 'Compassionate care that honours dignity and independence',
    gradient: 'linear-gradient(135deg, #be123c, #e11d6a)',
    accent: '#be123c',
    bg: '#fff1f2',
  },
  {
    id: 'service-provider',
    title: 'Service Provider Platform',
    description: 'Powerful platform for managing your care organisation',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    accent: '#2563eb',
    bg: '#eff6ff',
  },
]

export function PortalSelection() {
  const { setSkin } = useSkin()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/assets/carters-logo.png"
              alt="Carters Care"
              width={160}
              height={60}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Welcome to Carters Care
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select a portal to get started with expert care services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {portals.map((portal, i) => (
            <motion.button
              key={portal.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSkin(portal.id as any)}
              className="group relative overflow-hidden rounded-3xl p-8 text-left transition-all duration-300 hover:scale-105"
              style={{ background: portal.bg }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `${portal.gradient}15` }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ background: portal.gradient }}
                >
                  <Sparkles size={24} className="text-white" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-950 transition-colors">
                  {portal.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {portal.description}
                </p>

                <div className="flex items-center gap-2 font-bold transition-all duration-300 group-hover:gap-3"
                  style={{ color: portal.accent }}>
                  Enter Portal
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Bottom gradient line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: portal.gradient }}
              />
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-400 text-sm"
        >
          <p>
            Have questions?{' '}
            <button
              onClick={() => setSkin('ndis')}
              className="font-semibold text-white hover:underline transition-all"
            >
              Contact us
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
