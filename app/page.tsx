'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { useSkin } from '@/components/skin-provider'
import { PortalSelection } from './portal-selection'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight,
  Heart,
  HandHeart,
  Star,
  Shield,
  Sparkles,
  Phone,
  CheckCircle2,
  Users,
  Clock,
  Award,
} from 'lucide-react'

// ── Skin data ──────────────────────────────────────────────────────────────
const skinData: Record<string, any> = {
  ndis: {
    heroTitle: 'Your NDIS Journey,\nSupported Every Step',
    heroText: 'Personalised disability support services that put you in control — from daily living to community participation.',
    heroImage: '/assets/ndis-home-1.png',
    splitImage: '/assets/ndis-home-2.png',
    aboutImage: '/assets/ndis-about-1.png',
    cta: 'Explore NDIS Services',
    services: [
      { title: 'Daily Living Support', desc: 'Assistance with personal care, meals, and household tasks to help you live independently.', icon: Heart },
      { title: 'Community Participation', desc: 'Join social groups, activities, and events that build confidence and connection.', icon: HandHeart },
      { title: 'Life Skills Development', desc: 'Learn practical skills from cooking to budgeting, empowering you for the future.', icon: Star },
    ],
    stats: [
      { value: '500+', label: 'Participants Supported' },
      { value: '10+', label: 'Years Experience' },
      { value: '98%', label: 'Satisfaction Rate' },
      { value: '24/7', label: 'On-Call Support' },
    ],
    quote: 'Our NDIS support workers are passionate about helping participants live their best lives. We listen, we care, we deliver.',
    checks: ['NDIS Registered Provider', 'Personalised Support Plans', 'Experienced Care Workers', '24/7 On-Call Support'],
    accent: '#0b7a52',
    accentLight: '#f0fdf4',
    gradientCss: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    overlayColor: '#0d8a5d',
    marqueeBg: '#0d8a5d',
  },
  'aged-care': {
    heroTitle: 'Compassionate Aged Care,\nWhere You Belong',
    heroText: 'Exceptional aged care services that honour your dignity, choices, and independence — at home or in our intimate residential settings.',
    heroImage: '/assets/hero-aged-1.png',
    splitImage: '/assets/hero-aged-2.png',
    aboutImage: '/assets/hero-aged-care.png',
    cta: 'Explore Aged Care Services',
    services: [
      { title: 'In-Home Care', desc: 'Personal care, domestic assistance, and companionship in the comfort of your own home.', icon: Heart },
      { title: 'Respite Care', desc: 'Short-term relief for carers and a refreshing change of scene for loved ones.', icon: HandHeart },
      { title: 'Residential Care', desc: 'Intimate residential homes with personalised care and a warm community atmosphere.', icon: Star },
    ],
    stats: [
      { value: '300+', label: 'Clients in Our Care' },
      { value: '15+', label: 'Years Experience' },
      { value: '99%', label: 'Family Satisfaction' },
      { value: '24/7', label: 'Care Available' },
    ],
    quote: 'We treat every person in our care like family, because everyone deserves to feel valued, respected, and at home.',
    checks: ['Government Approved Provider', 'Culturally Sensitive Care', 'Qualified & Compassionate Staff', 'Regular Family Updates'],
    accent: '#9b1239',
    accentLight: '#fff1f2',
    gradientCss: 'linear-gradient(135deg, #be123c, #e11d6a)',
    overlayColor: '#be123c',
    marqueeBg: '#be123c',
  },
  'service-provider': {
    heroTitle: 'The Carters Care\nPlatform',
    heroText: 'A purpose-built digital platform for NDIS and aged care providers — manage participants, care plans, rosters, and compliance reporting all in one place.',
    heroImage: '/assets/hero-platform-1.png',
    splitImage: '/assets/hero-platform-2.png',
    aboutImage: '/assets/hero-partner.png',
    cta: 'Explore the Platform',
    services: [
      { title: 'Client Management', desc: 'Centralise all client records, NDIS plans, support goals, and progress notes in one secure hub.', icon: Heart },
      { title: 'Roster & Scheduling', desc: 'Build and manage staff rosters, match workers to participants, and handle shift changes in real-time.', icon: HandHeart },
      { title: 'Compliance & Reporting', desc: 'Auto-generate NDIS and aged care compliance reports, incident logs, and audit-ready documentation.', icon: Star },
    ],
    stats: [
      { value: '200+', label: 'Organisations Using' },
      { value: '50k+', label: 'Shifts Managed' },
      { value: '99.9%', label: 'Uptime' },
      { value: '5min', label: 'Average Setup' },
    ],
    quote: "The Carters Care Platform was built by care providers, for care providers — everything you need to run your organisation, nothing you don't.",
    checks: ['NDIS Practice Standards Ready', 'Cloud-Based & Secure', 'Real-Time Rostering', 'Automated Compliance Reports'],
    accent: '#1d4ed8',
    accentLight: '#eff6ff',
    gradientCss: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    overlayColor: '#2563eb',
    marqueeBg: '#2563eb',
  },
}

// ── Shared animation variants ─────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
})

// ── Animated circle decoration ────────────────────────────────────────────
function FloatingShape({ size, x, y, delay, color, blur = 80, opacity = 0.18 }: any) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 12, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 14 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left: x, top: y, background: color, filter: `blur(${blur}px)`, opacity }}
    />
  )
}

// ── Scrolling marquee strip ───────────────────────────────────────────────
function Marquee({ color, items }: { color: string; items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-4" style={{ background: color }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex gap-12 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-white/80 text-sm font-bold uppercase tracking-widest flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────
export default function Home() {
  const { skin } = useSkin()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  if (!skin) return <PortalSelection />

  const data = skinData[skin || 'ndis']
  const marqueeItems = ['NDIS Registered', 'Aged Care Approved', 'Person-Centred Care', 'Quality & Safety', 'Community First', 'Trusted Provider']

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Header />

        {/* ══════════════════════════════════════════
            HERO — full-bleed parallax photo + text
        ══════════════════════════════════════════ */}
        <section ref={heroRef} className="relative overflow-hidden" style={{ height: '100vh', minHeight: 600 }}>
          {/* Parallax photo */}
          <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
            <img src={data.heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          </motion.div>

          {/* Multi-layer overlay: dark gradient + accent tint */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="absolute inset-0 opacity-30" style={{ background: data.gradientCss, mixBlendMode: 'multiply' }} />

          {/* Floating decoration shapes */}
          <FloatingShape size={320} x="70%" y="10%" delay={0} color={data.overlayColor} blur={100} opacity={0.22} />
          <FloatingShape size={180} x="5%" y="60%" delay={3} color={data.overlayColor} blur={70} opacity={0.18} />
          <FloatingShape size={120} x="85%" y="65%" delay={6} color="#ffffff" blur={60} opacity={0.06} />

          {/* Diagonal bottom clip */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, white)' }} />

          {/* Content */}
          <motion.div className="relative h-full flex items-center" style={{ y: textY }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
              <motion.div
                initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                {/* Pill badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border border-white/25"
                  style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}
                >
                  <Sparkles size={12} className="text-white/70" />
                  <span className="text-xs font-bold text-white/85 uppercase tracking-widest">Welcome to Carters Care Group</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-7 leading-[0.95] tracking-tight whitespace-pre-line">
                  {data.heroTitle}
                </h1>
                <p className="text-xl text-white/75 mb-10 leading-relaxed max-w-xl">
                  {data.heroText}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ background: data.gradientCss, boxShadow: `0 12px 40px ${data.accent}55` }}
                  >
                    {data.cta} <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:bg-white/15"
                    style={{ border: '2px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}
                  >
                    Get In Touch
                  </Link>
                </div>

                {/* Trust checks */}
                <div className="flex flex-wrap gap-x-7 gap-y-2">
                  {data.checks.map((c: string) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-white/65">
                      <CheckCircle2 size={13} className="text-white/50 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-0.5 h-8 rounded-full"
              style={{ background: 'rgba(255,255,255,0.3)' }}
            />
          </motion.div>
        </section>

        {/* ══════════════════════════════════
            MARQUEE strip
        ══════════════════════════════════ */}
        <Marquee color={data.marqueeBg} items={marqueeItems} />

        {/* ══════════════════════════════════════════
            STATS BAR — large numbers side by side
        ══════════════════════════════════════════ */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((s: any, i: number) => (
                <motion.div key={s.label} {...stagger(i)} className="text-center">
                  <div className="text-5xl md:text-6xl font-black mb-1" style={{ color: data.accent }}>{s.value}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SERVICES — 3-col card grid with large images
        ══════════════════════════════════════════ */}
        <section className="py-28 relative overflow-hidden" style={{ background: data.accentLight }}>
          <FloatingShape size={500} x="-10%" y="10%" delay={1} color={data.overlayColor} blur={120} opacity={0.1} />
          <FloatingShape size={300} x="80%" y="60%" delay={4} color={data.overlayColor} blur={90} opacity={0.08} />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <motion.div {...fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full" style={{ background: data.gradientCss }} />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">What We Offer</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                  Our<br />Services
                </h2>
              </motion.div>
              <motion.div {...fadeUp}>
                <p className="text-gray-500 max-w-sm text-base leading-relaxed">
                  Tailored support designed around your needs, goals, and preferences.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.services.map((s: any, i: number) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.title}
                    {...stagger(i)}
                    whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    className="group bg-white rounded-3xl overflow-hidden cursor-default relative"
                    style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}
                  >
                    {/* Top color bar */}
                    <div className="h-1.5" style={{ background: data.gradientCss }} />
                    <div className="p-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 shadow-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ background: data.gradientCss }}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <div className="text-8xl font-black text-gray-50 absolute top-8 right-6 leading-none select-none">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
                      <Link
                        href="/services"
                        className="mt-6 flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3 relative z-10"
                        style={{ color: data.accent }}
                      >
                        Learn more <ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div {...fadeUp} className="text-center mt-14">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: data.gradientCss, boxShadow: `0 8px 32px ${data.accent}40` }}
              >
                View All Services <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SPLIT — full-bleed photo left, rich text right
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Photo side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden"
              style={{ minHeight: 400 }}
            >
              <img src={data.splitImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
              {/* Gradient on right edge to blend into white */}
              <div className="absolute inset-y-0 right-0 w-24 hidden lg:block" style={{ background: 'linear-gradient(to right, transparent, white)' }} />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-8 left-8 rounded-2xl px-6 py-4 shadow-2xl"
                style={{ background: data.gradientCss }}
              >
                <div className="flex items-center gap-3">
                  <Shield size={22} className="text-white" />
                  <div>
                    <div className="text-white font-bold text-sm">NDIS Registered</div>
                    <div className="text-white/70 text-xs">Approved Provider</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center px-10 lg:px-16 py-20"
            >
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 mb-6 shadow-sm bg-white">
                  <span className="w-2 h-2 rounded-full" style={{ background: data.gradientCss }} />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                  Care that puts<br />
                  <span style={{ color: data.accent }}>people first.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 text-base">
                  {`"${data.quote}"`}
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    { icon: Users, text: 'Experienced, qualified support workers' },
                    { icon: Clock, text: 'Flexible scheduling that works around you' },
                    { icon: Award, text: 'Industry-leading quality & safety standards' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: data.accentLight }}>
                        <Icon size={16} style={{ color: data.accent }} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{text}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-bold text-base transition-all duration-200 hover:gap-3"
                  style={{ color: data.accent }}
                >
                  Learn more about us <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PHOTO BENTO GRID
        ══════════════════════════════════════════ */}
        <section className="py-6 px-4 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-4" style={{ height: 400 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="col-span-2 rounded-3xl overflow-hidden relative"
              >
                <img src={data.aboutImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="flex-1 rounded-3xl overflow-hidden"
                >
                  <img src={data.heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex-1 rounded-3xl flex items-center justify-center text-white text-center p-6"
                  style={{ background: data.gradientCss }}
                >
                  <div>
                    <div className="text-4xl font-black mb-1">{data.stats[0].value}</div>
                    <div className="text-white/80 text-sm font-medium">{data.stats[0].label}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA — full-bleed gradient with shapes
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-28" style={{ background: data.gradientCss }}>
          <FloatingShape size={400} x="60%" y="-20%" delay={0} color="#ffffff" blur={100} opacity={0.1} />
          <FloatingShape size={250} x="-5%" y="50%" delay={3} color="#ffffff" blur={80} opacity={0.08} />

          {/* Large decorative text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="text-[22vw] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
              CARE
            </span>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div {...fadeUp}>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to get<br />started?
              </h2>
              <p className="text-white/70 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Contact our friendly team today for a free consultation or to learn more about our services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl font-bold bg-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ color: data.accent }}
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:1300002723"
                  className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:bg-white/15"
                  style={{ border: '2px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}
                >
                  <Phone size={18} /> 1300 00 27 23
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
