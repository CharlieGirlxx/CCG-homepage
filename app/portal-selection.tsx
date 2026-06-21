'use client'

import { useSkin } from '@/components/skin-provider'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Shield, LayoutDashboard } from 'lucide-react'

const portals = [
  {
    id: 'aged-care',
    title: 'Aged Care',
    tag: 'SENIORS & FAMILIES',
    description: 'Compassionate aged care that respects your dignity, choices, and independence.',
    icon: Shield,
    accent: '#e11d6a',
    iconBg: 'linear-gradient(135deg, #f43f8e, #e11d6a)',
  },
  {
    id: 'ndis',
    title: 'NDIS',
    tag: 'PARTICIPANTS & FAMILIES',
    description: 'Personalised disability support tailored to your NDIS plan and goals.',
    icon: Heart,
    accent: '#0d9488',
    iconBg: 'linear-gradient(135deg, #14b87a, #0d9488)',
  },
  {
    id: 'service-provider',
    title: 'Platform',
    tag: 'FOR SERVICE PROVIDERS',
    description: 'Access our purpose-built platform for managing participants, care plans, scheduling, and compliance reporting in one place.',
    icon: LayoutDashboard,
    accent: '#2563eb',
    iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  },
]

// Soft transparent blob for the white background
function Blob({ color, size, x, y, blur, opacity }: {
  color: string; size: number; x: string; y: string; blur: number; opacity: number
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

// Slow-rotating transparent swirl
function Swirl({ color, opacity, size, x, y, rotate, delay }: {
  color: string; opacity: number; size: number; x: string; y: string; rotate: number; delay: number
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, opacity, transform: 'translate(-50%, -50%)' }}
      animate={{ rotate: [rotate, rotate + 360] }}
      transition={{ duration: 80 + delay * 12, repeat: Infinity, ease: 'linear' }}
    >
      <svg width={size} height={size} viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M350 350 C350 200, 500 150, 580 250 C660 350, 600 500, 480 540 C360 580, 200 500, 180 380 C160 260, 260 150, 370 160 C480 170, 570 260, 560 360 C550 460, 460 530, 360 520 C260 510, 190 430, 200 340 C210 250, 290 190, 370 200 C450 210, 510 280, 500 350 C490 420, 430 460, 360 450 C290 440, 250 390, 260 330 C270 270, 320 240, 370 250 C420 260, 450 300, 440 340 C430 380, 400 400, 370 395"
          stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"
        />
        <path
          d="M350 350 C220 350, 170 200, 270 130 C370 60, 520 120, 560 240 C600 360, 520 510, 400 540 C280 570, 140 490, 130 370 C120 250, 210 130, 330 120 C450 110, 570 200, 570 320 C570 440, 480 550, 360 545 C240 540, 150 450, 160 330 C170 210, 270 130, 380 140"
          stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"
        />
      </svg>
    </motion.div>
  )
}

export function PortalSelection() {
  const { setSkin } = useSkin()

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-white px-6 py-16">

      {/* ── Background blobs ── */}
      <Blob color="#f43f8e" size={700} x="2%"   y="10%"  blur={140} opacity={0.10} />
      <Blob color="#a855f7" size={500} x="0%"   y="5%"   blur={100} opacity={0.07} />
      <Blob color="#14b87a" size={500} x="100%" y="8%"   blur={120} opacity={0.08} />
      <Blob color="#f59e0b" size={600} x="100%" y="95%"  blur={130} opacity={0.08} />
      <Blob color="#2563eb" size={400} x="50%"  y="100%" blur={110} opacity={0.07} />
      <Blob color="#e11d6a" size={300} x="95%"  y="50%"  blur={90}  opacity={0.06} />

      {/* ── Transparent swirls ── */}
      <Swirl color="#e11d6a" opacity={0.07} size={560} x="3%"   y="15%"  rotate={0}   delay={0} />
      <Swirl color="#14b87a" opacity={0.06} size={460} x="97%"  y="10%"  rotate={120} delay={2} />
      <Swirl color="#2563eb" opacity={0.05} size={380} x="92%"  y="88%"  rotate={240} delay={4} />
      <Swirl color="#a855f7" opacity={0.05} size={320} x="8%"   y="90%"  rotate={60}  delay={1} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-10"
        >
          <Image
            src="/assets/carters-logo.png"
            alt="Carters Care Group"
            width={200}
            height={76}
            priority
            className="drop-shadow-sm"
          />
          <div className="mt-5 h-px w-40 bg-gray-200 rounded-full" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            How can we{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #e11d6a 0%, #a855f7 50%, #f59e0b 100%)' }}
            >
              help you
            </span>{' '}
            today?
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-gray-400 text-base mb-14 max-w-sm mx-auto leading-relaxed"
        >
          Choose your portal to access services and information tailored to your needs.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portals.map((portal, i) => {
            const Icon = portal.icon
            return (
              <motion.button
                key={portal.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0,0,0,0.10)', transition: { duration: 0.25 } }}
                onClick={() => setSkin(portal.id as any)}
                className="group relative text-left bg-white rounded-3xl p-7 border border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
              >
                {/* Subtle coloured tint on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${portal.accent}0d 0%, transparent 65%)` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300"
                  style={{ background: portal.iconBg }}
                >
                  <Icon size={26} className="text-white" strokeWidth={1.8} />
                </div>

                {/* Title + tag */}
                <h2 className="text-xl font-black text-gray-900 mb-1 tracking-tight">{portal.title}</h2>
                <p
                  className="text-xs font-extrabold uppercase tracking-widest mb-3"
                  style={{ color: portal.accent }}
                >
                  {portal.tag}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{portal.description}</p>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: portal.accent }}
                >
                  Enter Portal <ArrowRight size={15} />
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Footer tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-gray-400 text-sm flex items-center justify-center gap-2"
        >
          Your family in disability and aged care services
          <Heart size={13} fill="currentColor" className="text-rose-400" />
        </motion.p>
      </div>
    </div>
  )
}
