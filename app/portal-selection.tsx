'use client'

import { useSkin } from '@/components/skin-provider'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react'

const portals = [
  {
    id: 'ndis',
    title: 'NDIS Services',
    description: 'Personalised disability support services that put you in control',
    gradient: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    accent: '#0d8a5d',
    accentLight: '#f0fdf4',
    image: '/assets/ndis-home-1.png',
    icon: Heart,
    tag: 'NDIS Registered',
  },
  {
    id: 'aged-care',
    title: 'Aged Care Services',
    description: 'Compassionate care that honours dignity and independence',
    gradient: 'linear-gradient(135deg, #be123c, #e11d6a)',
    accent: '#be123c',
    accentLight: '#fff1f2',
    image: '/assets/hero-aged-1.png',
    icon: Shield,
    tag: 'Gov. Approved',
  },
  {
    id: 'service-provider',
    title: 'Provider Platform',
    description: 'Powerful platform for managing your care organisation',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    accent: '#2563eb',
    accentLight: '#eff6ff',
    image: '/assets/hero-platform-1.png',
    icon: Sparkles,
    tag: 'Cloud-Based',
  },
]

function FloatingShape({ size, x, y, delay, color, blur = 80, opacity = 0.15 }: any) {
  return (
    <motion.div
      animate={{ y: [0, -24, 0], x: [0, 14, 0] }}
      transition={{ duration: 14 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left: x, top: y, background: color, filter: `blur(${blur}px)`, opacity }}
    />
  )
}

export function PortalSelection() {
  const { setSkin } = useSkin()

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #0a0f1e 0%, #111827 50%, #0d1a0f 100%)' }}>
      {/* Ambient background shapes */}
      <FloatingShape size={500} x="5%" y="-10%" delay={0} color="#0d8a5d" blur={130} opacity={0.12} />
      <FloatingShape size={400} x="70%" y="55%" delay={3} color="#be123c" blur={120} opacity={0.1} />
      <FloatingShape size={350} x="55%" y="-5%" delay={6} color="#2563eb" blur={110} opacity={0.1} />
      <FloatingShape size={200} x="20%" y="70%" delay={2} color="#14b87a" blur={80} opacity={0.08} />

      {/* Star field dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
          className="absolute rounded-full bg-white"
          style={{
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            left: `${5 + (i * 4.7) % 90}%`,
            top: `${3 + (i * 6.3) % 85}%`,
          }}
        />
      ))}

      {/* Large decorative word behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="text-[30vw] font-black text-white/[0.025] leading-none tracking-tighter whitespace-nowrap">CARE</span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-60" style={{ background: 'linear-gradient(135deg, #0d8a5d, #2563eb)' }} />
              <Image
                src="/assets/carters-logo.png"
                alt="Carters Care"
                width={180}
                height={68}
                className="relative"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-tight">
            Welcome to<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #14b87a, #06b6d4, #e11d6a)' }}>
              Carters Care
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto leading-relaxed">
            Select your portal to get started with expert care services
          </p>
        </motion.div>

        {/* Portal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portals.map((portal, i) => {
            const Icon = portal.icon
            return (
              <motion.button
                key={portal.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                onClick={() => setSkin(portal.id as any)}
                className="group relative overflow-hidden rounded-3xl text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                style={{ boxShadow: `0 20px 60px rgba(0,0,0,0.4)` }}
              >
                {/* Photo background */}
                <div className="relative overflow-hidden" style={{ height: 280 }}>
                  <img
                    src={portal.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  {/* Gradient overlay bottom */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />

                  {/* Tag */}
                  <div
                    className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold text-white border border-white/20"
                    style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
                  >
                    {portal.tag}
                  </div>

                  {/* Icon */}
                  <div
                    className="absolute bottom-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: portal.gradient }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white p-6">
                  {/* Color bar */}
                  <div className="h-0.5 w-full rounded-full mb-4 opacity-30" style={{ background: portal.gradient }} />

                  <h2 className="text-xl font-black text-gray-900 mb-2 tracking-tight">{portal.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{portal.description}</p>

                  <div
                    className="inline-flex items-center gap-2 font-bold text-sm transition-all duration-300 group-hover:gap-3"
                    style={{ color: portal.accent }}
                  >
                    Enter Portal <ArrowRight size={16} />
                  </div>
                </div>

                {/* Bottom gradient line that fills on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: portal.gradient }}
                />
              </motion.button>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>
            Have questions?{' '}
            <button
              onClick={() => setSkin('ndis')}
              className="font-semibold text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Contact us
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
