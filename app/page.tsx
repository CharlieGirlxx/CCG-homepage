'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { ImageCarousel } from '@/components/image-carousel'
import { useSkin } from '@/components/skin-provider'
import { PortalSelection } from './portal-selection'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Heart,
  HandHeart,
  Star,
  Shield,
  Sparkles,
  Phone,
  CheckCircle2,
} from 'lucide-react'

const skinData: Record<string, any> = {
  ndis: {
    heroTitle: 'Your NDIS Journey,\nSupported Every Step',
    heroText:
      'Personalised disability support services that put you in control — from daily living to community participation.',
    heroImages: [
      '/assets/ndis-home-1.png',
      '/assets/ndis-home-2.png',
      '/assets/ndis-home-3.png',
    ],
    cta: 'Explore NDIS Services',
    services: [
      {
        title: 'Daily Living Support',
        desc: 'Assistance with personal care, meals, and household tasks to help you live independently.',
        icon: Heart,
      },
      {
        title: 'Community Participation',
        desc: 'Join social groups, activities, and events that build confidence and connection.',
        icon: HandHeart,
      },
      {
        title: 'Life Skills Development',
        desc: 'Learn practical skills from cooking to budgeting, empowering you for the future.',
        icon: Star,
      },
    ],
    quote:
      'Our NDIS support workers are passionate about helping participants live their best lives. We listen, we care, we deliver.',
    checks: [
      'NDIS Registered Provider',
      'Personalised Support Plans',
      'Experienced Care Workers',
      '24/7 On-Call Support',
    ],
    accent: '#0b7a52',
    accentBg: '#f0fdf4',
    gradient: 'from-emerald-500 to-teal-500',
    gradientCss: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    sectionBg: '#f0fdf4',
    statColor: '#0d8a5d',
  },
  'aged-care': {
    heroTitle: 'Compassionate Aged Care,\nWhere You Belong',
    heroText:
      'Exceptional aged care services that honour your dignity, choices, and independence — at home or in our intimate residential settings.',
    heroImages: [
      '/assets/hero-aged-1.png',
      '/assets/hero-aged-2.png',
      '/assets/hero-aged-3.png',
    ],
    cta: 'Explore Aged Care Services',
    services: [
      {
        title: 'In-Home Care',
        desc: 'Personal care, domestic assistance, and companionship in the comfort of your own home.',
        icon: Heart,
      },
      {
        title: 'Respite Care',
        desc: 'Short-term relief for carers and a refreshing change of scene for loved ones.',
        icon: HandHeart,
      },
      {
        title: 'Residential Care',
        desc: 'Intimate residential homes with personalised care and a warm community atmosphere.',
        icon: Star,
      },
    ],
    quote:
      'We treat every person in our care like family, because everyone deserves to feel valued, respected, and at home.',
    checks: [
      'Government Approved Provider',
      'Culturally Sensitive Care',
      'Qualified & Compassionate Staff',
      'Regular Family Updates',
    ],
    accent: '#9b1239',
    accentBg: '#fff1f2',
    gradient: 'from-rose-500 to-pink-500',
    gradientCss: 'linear-gradient(135deg, #be123c, #e11d6a)',
    sectionBg: '#fff1f2',
    statColor: '#be123c',
  },
  'service-provider': {
    heroTitle: 'The Carters Care\nPlatform',
    heroText:
      'A purpose-built digital platform for NDIS and aged care providers — manage participants, care plans, rosters, and compliance reporting all in one place.',
    heroImages: [
      '/assets/hero-platform-1.png',
      '/assets/hero-platform-2.png',
      '/assets/hero-platform-3.png',
    ],
    cta: 'Explore the Platform',
    services: [
      {
        title: 'Client Management',
        desc: 'Centralise all client records, NDIS plans, support goals, and progress notes in one secure, easy-to-use hub.',
        icon: Heart,
      },
      {
        title: 'Roster & Scheduling',
        desc: 'Build and manage staff rosters, match workers to participants, and handle shift changes with real-time notifications.',
        icon: HandHeart,
      },
      {
        title: 'Compliance & Reporting',
        desc: 'Auto-generate NDIS and aged care compliance reports, incident logs, and audit-ready documentation.',
        icon: Star,
      },
    ],
    quote:
      'The Carters Care Platform was built by care providers, for care providers — everything you need to run your organisation, nothing you don\'t.',
    checks: [
      'NDIS Practice Standards Ready',
      'Cloud-Based & Secure',
      'Real-Time Rostering',
      'Automated Compliance Reports',
    ],
    accent: '#1d4ed8',
    accentBg: '#eff6ff',
    gradient: 'from-blue-500 to-cyan-500',
    gradientCss: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    sectionBg: '#eff6ff',
    statColor: '#2563eb',
  },
}

const inView = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
}

export default function Home() {
  const { skin } = useSkin()

  if (!skin) {
    return <PortalSelection />
  }

  const data = skinData[skin || 'ndis']

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ background: data.sectionBg }}>
        <Header />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center flex-1">
          <ImageCarousel
            images={data.heroImages}
            interval={7000}
            className="absolute inset-0 w-full h-full"
            overlay={
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.2) 100%)',
                }}
              />
            }
          />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-16 right-16 w-40 h-40 rounded-full blur-3xl opacity-30"
            style={{ background: data.gradientCss }}
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-24 left-16 w-32 h-32 rounded-full blur-3xl opacity-20"
            style={{ background: data.gradientCss }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-8"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <Sparkles size={13} className="text-white/80" />
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest">
                  Welcome to Carters Care Group
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line">
                {data.heroTitle}
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
                {data.heroText}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: data.gradientCss,
                    boxShadow: `0 8px 32px ${data.accent}50`,
                  }}
                >
                  {data.cta}
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white transition-all duration-300 hover:bg-white/15"
                  style={{
                    border: '2px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Get In Touch
                </Link>
              </div>

              {/* Check items */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
                {data.checks.map((c: string) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <CheckCircle2 size={14} className="text-white/60 shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wave transition to trust bar */}
        <div
          className="relative overflow-hidden"
          style={{ background: data.sectionBg }}
        >
          <div className="absolute top-0 left-0 right-0" style={{ transform: 'translateY(-99%)' }}>
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full block"
              preserveAspectRatio="none"
            >
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={data.sectionBg} />
            </svg>
          </div>
        </div>

        {/* ── Trust bar ── */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {[
                { icon: Shield, label: 'NDIS Registered' },
                { icon: Heart, label: 'Aged Care Approved' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-gray-500">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: data.sectionBg }}
                  >
                    <Icon size={15} style={{ color: data.accent }} />
                  </div>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Preview ── */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: data.sectionBg }}
        >
          {/* Ambient blobs */}
          <div
            className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${data.accent}30 0%, transparent 70%)`,
              transform: 'translate(-30%, -30%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${data.accent}20 0%, transparent 70%)`,
              transform: 'translate(30%, 30%)',
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <motion.div
                {...inView}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-5 shadow-sm"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: data.gradientCss }}
                />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                  What We Offer
                </span>
              </motion.div>
              <motion.h2
                {...inView}
                className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
              >
                Our Services
              </motion.h2>
              <motion.p
                {...inView}
                className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed"
              >
                Tailored support designed around your needs, goals, and preferences.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {data.services.map((s: any, i: number) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className="bg-white rounded-3xl p-8 border border-gray-100 group relative overflow-hidden cursor-default"
                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                  >
                    {/* Bottom gradient line that reveals on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: data.gradientCss }}
                    />
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ background: data.gradientCss }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div {...inView} className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-bold transition-all duration-200 hover:gap-3"
                style={{ color: data.accent }}
              >
                View All Services <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Wave into quote section */}
        <div className="overflow-hidden bg-white">
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,0 L0,0 Z"
              fill={data.sectionBg}
            />
          </svg>
        </div>

        {/* ── Quote / Why Us ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <img
              src="/assets/gradient-bg.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)',
            }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div {...inView}>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                style={{ background: data.gradientCss }}
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-2xl md:text-4xl font-bold text-gray-900 leading-relaxed mb-10 tracking-tight">
                {`"${data.quote}"`}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: data.gradientCss,
                  boxShadow: `0 8px 32px ${data.accent}40`,
                }}
              >
                Get In Touch
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Wave into CTA */}
        <div className="overflow-hidden" style={{ background: data.accent }}>
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,36 C360,72 1080,0 1440,36 L1440,0 L0,0 Z"
              fill="#fff"
            />
          </svg>
        </div>

        {/* ── CTA Banner ── */}
        <section
          className="py-16 relative overflow-hidden"
          style={{ background: data.gradientCss }}
        >
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: 'white' }}
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-10 w-48 h-48 rounded-full blur-3xl opacity-15"
            style={{ background: 'white' }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div {...inView}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Ready to get started?
              </h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Contact our friendly team today for a free consultation or to learn more about our services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ color: data.accent }}
                >
                  Contact Us
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="tel:1300002723"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:bg-white/15"
                  style={{ border: '2px solid rgba(255,255,255,0.35)' }}
                >
                  <Phone size={17} />
                  1300 00 27 23
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wave footer transition */}
        <div className="overflow-hidden" style={{ background: '#0f0f14' }}>
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z"
              fill={data.gradientCss.includes('emerald') ? '#f0fdf4' : data.sectionBg}
            />
          </svg>
        </div>

        <Footer />
      </div>
    </PageTransition>
  )
}
