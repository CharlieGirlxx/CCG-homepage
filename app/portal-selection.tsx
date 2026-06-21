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
    accentRgb: '13, 138, 93',
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
    accentRgb: '190, 18, 60',
    image: '/assets/hero-aged-1.png',
    icon: Shield,
    tag: 'Gov. Approved',
  },
  {
    id: 'service-provider',
    title: 'Provider Platform',
    description: 'Powerful tools for managing your care organisation',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    accent: '#2563eb',
    accentRgb: '37, 99, 235',
    image: '/assets/hero-platform-1.png',
    icon: Sparkles,
    tag: 'Cloud-Based',
  },
]

// Large organic SVG swirl decoration
function Swirl({ color, opacity, rotate, scale, x, y, delay }: {
  color: string; opacity: number; rotate: number; scale: number
  x: string; y: string; delay: number
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, opacity }}
      animate={{ rotate: [rotate, rotate + 360] }}
      transition={{ duration: 60 + delay * 8, repeat: Infinity, ease: 'linear' }}
    >
      <motion.div
        animate={{ scale: [scale, scale * 1.08, scale] }}
        transition={{ duration: 12 + delay * 3, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <svg
          width="700"
          height="700"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M350 350 C350 200, 500 150, 580 250 C660 350, 600 500, 480 540 C360 580, 200 500, 180 380 C160 260, 260 150, 370 160 C480 170, 570 260, 560 360 C550 460, 460 530, 360 520 C260 510, 190 430, 200 340 C210 250, 290 190, 370 200 C450 210, 510 280, 500 350 C490 420, 430 460, 360 450 C290 440, 250 390, 260 330 C270 270, 320 240, 370 250 C420 260, 450 300, 440 340 C430 380, 400 400, 370 395"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M350 350 C220 350, 170 200, 270 130 C370 60, 520 120, 560 240 C600 360, 520 510, 400 540 C280 570, 140 490, 130 370 C120 250, 210 130, 330 120 C450 110, 570 200, 570 320 C570 440, 480 550, 360 545 C240 540, 150 450, 160 330 C170 210, 270 130, 380 140 C490 150, 570 240, 560 350 C550 460, 460 540, 350 530"
            stroke={color}
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

// Thin animated ring
function Ring({ color, size, x, y, delay }: any) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none border"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        borderColor: color,
        borderWidth: 1,
        opacity: 0,
      }}
      animate={{ opacity: [0, 0.15, 0], scale: [0.6, 1.4] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeOut', delay }}
    />
  )
}

export function PortalSelection() {
  const { setSkin } = useSkin()

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #07101a 0%, #0c1a14 40%, #10071a 100%)' }}
    >
      {/* ── Swirl decorations ── */}
      <Swirl color="#14b87a" opacity={0.18} rotate={0}   scale={1}    x="-15%" y="-20%" delay={0} />
      <Swirl color="#e11d6a" opacity={0.15} rotate={120} scale={0.85} x="55%"  y="30%"  delay={2} />
      <Swirl color="#2563eb" opacity={0.14} rotate={240} scale={0.75} x="30%"  y="55%"  delay={4} />
      <Swirl color="#14b87a" opacity={0.08} rotate={60}  scale={0.55} x="75%"  y="-15%" delay={1} />

      {/* Pulsing rings */}
      <Ring color="#14b87a" size={600} x="5%"  y="5%"  delay={0} />
      <Ring color="#e11d6a" size={500} x="50%" y="40%" delay={2} />
      <Ring color="#06b6d4" size={400} x="70%" y="10%" delay={4} />

      {/* Subtle noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* Star-field dots */}
      {[...Array(28)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: i % 5 === 0 ? 2 : 1,
            height: i % 5 === 0 ? 2 : 1,
            left: `${4 + (i * 3.41) % 92}%`,
            top: `${3 + (i * 5.77) % 88}%`,
          }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 2.5 + (i % 5), repeat: Infinity, delay: i * 0.22 }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-14">

        {/* ── Logo + Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center mb-9">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-50"
                style={{ background: 'linear-gradient(135deg, #0d8a5d44, #2563eb44)' }}
              />
              <Image
                src="/assets/carters-logo.png"
                alt="Carters Care Group"
                width={190}
                height={72}
                className="relative drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-5 tracking-tight leading-[0.92]">
            Welcome to<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #14b87a 0%, #06b6d4 45%, #e11d6a 100%)' }}
            >
              Carters Care
            </span>
          </h1>
          <p className="text-white/45 text-lg max-w-md mx-auto leading-relaxed font-medium">
            Choose your portal to access expert, personalised care services
          </p>
        </motion.div>

        {/* ── Portal cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {portals.map((portal, i) => {
            const Icon = portal.icon
            return (
              <motion.button
                key={portal.id}
                initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.18 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                onClick={() => setSkin(portal.id as any)}
                className="group relative overflow-hidden rounded-[28px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden rounded-[24px] m-2" style={{ height: 260 }}>
                  <img
                    src={portal.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }}
                  />
                  {/* Swirl tint on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 70% 30%, rgba(${portal.accentRgb},0.25) 0%, transparent 70%)` }}
                  />

                  {/* Tag chip */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    {portal.tag}
                  </div>

                  {/* Icon badge */}
                  <div
                    className="absolute bottom-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: portal.gradient }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Card body */}
                <div className="px-6 pb-7 pt-4">
                  <h2 className="text-lg font-black text-white mb-1.5 tracking-tight">{portal.title}</h2>
                  <p className="text-white/45 text-sm leading-relaxed mb-5 font-medium">{portal.description}</p>

                  <div
                    className="inline-flex items-center gap-2 font-bold text-sm transition-all duration-300 group-hover:gap-3"
                    style={{ color: portal.accent }}
                  >
                    Enter Portal <ArrowRight size={15} />
                  </div>
                </div>

                {/* Bottom accent line that slides in on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"
                  style={{ background: portal.gradient }}
                />
              </motion.button>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-center mt-11 text-white/30 text-sm font-medium"
        >
          Not sure which portal is right for you?{' '}
          <button
            onClick={() => setSkin('ndis')}
            className="text-white/55 hover:text-white transition-colors underline underline-offset-4 font-semibold"
          >
            Contact our team
          </button>
        </motion.p>
      </div>
    </div>
  )
}
