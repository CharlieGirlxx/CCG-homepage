'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { useSkin } from '@/components/skin-provider'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart,
  Home,
  Users,
  Calendar,
  Brain,
  CookingPot,
  Car,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'

interface ServiceItem {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  desc: string
  detail: string
}

interface ServicesConfig {
  title: string
  subtitle: string
  heroImage: string
  splitImages: string[]
  services: ServiceItem[]
  accent: string
  accentLight: string
  gradientCss: string
}

const servicesData: Record<string, ServicesConfig> = {
  ndis: {
    title: 'NDIS Support\nServices',
    subtitle: 'Comprehensive support services tailored to your NDIS plan and personal goals.',
    heroImage: '/assets/ndis-services-1.png',
    splitImages: ['/assets/ndis-services-2.png', '/assets/ndis-home-3.png'],
    services: [
      { icon: Heart, title: 'Assist Personal Activities', desc: 'Dignified, respectful support with daily personal care — bathing, dressing, grooming, and mobility assistance tailored entirely to your routine.', detail: 'Our trained support workers provide personal care assistance in a way that centres your comfort, privacy, and preferences. We take time to understand your routines and follow your lead, ensuring every interaction feels natural and respectful.' },
      { icon: Home, title: 'Assist Life Stage Transitions', desc: 'Navigating a major life change? We provide coordinated support through transitions to independent living, new accommodation, or post-hospital recovery.', detail: 'Major transitions — whether moving into your own home, changing living arrangements, or returning from hospital — can feel overwhelming. Our dedicated transition coordinators work alongside you to plan every step, connecting you with the right services and ensuring nothing is left to chance.' },
      { icon: Users, title: 'Community Participation', desc: 'Connect, explore, and belong. We support you to join social groups, recreational activities, and community events that matter to you.', detail: 'Social connection and community engagement are essential for wellbeing. We help you identify activities that genuinely interest you — from sports clubs and arts programs to volunteer opportunities and local events — and we provide the support you need to participate confidently and independently.' },
      { icon: Calendar, title: 'Daily Tasks & Shared Living', desc: 'Practical assistance with household tasks, meal preparation, and home maintenance in individual or shared living arrangements.', detail: 'A safe, comfortable, and organised home environment supports your independence and quality of life. We assist with cooking, cleaning, shopping, and coordinating household responsibilities — working around your schedule and preferences to keep your home running smoothly.' },
      { icon: Brain, title: 'Developmental Life Skills', desc: 'Build confidence and capability with programs tailored to your goals — from cooking and budgeting to communication and personal organisation.', detail: 'Developing life skills is a journey, and we are here every step of the way. Our programs are customised to your individual goals and learning style, covering practical skills like meal planning and financial management through to social skills and self-advocacy, all in a supportive, encouraging environment.' },
      { icon: Heart, title: 'Respite Care', desc: 'Quality short-term care for participants — and a well-deserved break for families and primary carers — without any disruption to your care routine.', detail: 'Caring for someone you love is deeply rewarding, but everyone needs time to recharge. Our respite services provide seamless, high-quality care for participants while giving carers the confidence to rest, knowing their loved one is in safe hands. We maintain existing routines and preferences to ensure continuity and comfort.' },
    ],
    accent: '#ec4899',
    accentLight: '#fce7f3',
    gradientCss: 'linear-gradient(135deg, #ec4899, #f472b6)',
  },
  'aged-care': {
    title: 'Aged Care\nServices',
    subtitle: 'Exceptional care for seniors that respects dignity, independence, and personal choice.',
    heroImage: '/assets/hero-aged-1.png',
    splitImages: ['/assets/hero-aged-2.png', '/assets/hero-aged-3.png'],
    services: [
      { icon: Heart, title: 'Personal Care', desc: 'Gentle, dignified assistance with bathing, dressing, grooming, medication reminders, and mobility — always delivered at your pace and on your terms.', detail: 'Our experienced carers take time to understand your preferences, routines, and personal boundaries. Every aspect of personal care is delivered with warmth and professionalism, so you always feel comfortable, respected, and in control.' },
      { icon: Home, title: 'Domestic Assistance', desc: 'Reliable help with household tasks, laundry, meal preparation, and home maintenance — keeping your living space safe, clean, and comfortable.', detail: 'A well-maintained home contributes enormously to your health and peace of mind. We provide thorough domestic assistance — from vacuuming and laundry to tidying and light garden maintenance — so you can focus on what you enjoy most.' },
      { icon: CookingPot, title: 'Meal Preparation & Nutrition', desc: 'Fresh, nutritious, home-style meals prepared to your tastes, dietary requirements, and cultural preferences — every single day.', detail: 'Good nutrition is fundamental to good health. Our carers prepare wholesome meals using fresh ingredients, following any medical dietary requirements and honouring your cultural food preferences. Mealtimes should be something to look forward to, and we make sure they are.' },
      { icon: Car, title: 'Transport & Social Support', desc: 'Safe, friendly transport to medical appointments, shopping trips, and social outings — so you stay connected, independent, and engaged.', detail: 'Losing access to transport can mean losing access to life. We provide reliable, comfortable transport to wherever you need to go — from GP appointments and hospital visits to social events and shopping. Our carers accompany you, offer assistance, and ensure you get home safely.' },
      { icon: Heart, title: 'Respite Care', desc: 'Trusted short-term care for your loved one, giving family carers the time they need to rest and recharge with complete peace of mind.', detail: 'Family carers do extraordinary work, and they deserve proper rest. Our respite services provide high-quality temporary care in a comfortable, familiar environment, maintaining all existing routines and preferences so the transition is seamless for everyone.' },
      { icon: Sparkles, title: 'Residential Care', desc: 'Warm, intimate residential homes with personalised care plans, meaningful daily activities, and a genuine sense of community and belonging.', detail: 'Our residential care homes are designed to feel like home — because they are. Small, close-knit communities with attentive, compassionate staff, personalised care plans, and a full calendar of social and therapeutic activities. Residents and their families are always kept informed and involved.' },
    ],
    accent: '#16a34a',
    accentLight: '#dcfce7',
    gradientCss: 'linear-gradient(135deg, #16a34a, #22c55e)',
  },
  'service-provider': {
    title: 'Carters Care\nPlatform Features',
    subtitle: 'Everything a modern NDIS or aged care organisation needs — in one powerful, easy-to-use platform.',
    heroImage: '/assets/hero-platform-1.png',
    splitImages: ['/assets/hero-platform-2.png', '/assets/hero-partner.png'],
    services: [
      { icon: Users, title: 'Client Management', desc: 'Centralise all participant and client records, NDIS plans, support goals, progress notes, and documents in one secure, easy-to-navigate hub.', detail: 'Say goodbye to scattered spreadsheets and paper files. Our Client Management module gives every team member a single, unified view of each participant — their profile, NDIS funding details, support goals, case notes, and uploaded documents — all protected by enterprise-grade security and role-based access controls.' },
      { icon: Calendar, title: 'Roster & Scheduling', desc: 'Build smarter rosters faster. Match workers to participants based on skills, preferences, and availability — with real-time notifications and shift swap tools.', detail: 'Our intelligent rostering engine takes the complexity out of scheduling. It considers worker qualifications, participant preferences, travel times, and compliance requirements to suggest optimal rosters. Push shift notifications instantly, manage last-minute changes, and keep everyone informed in real time.' },
      { icon: Heart, title: 'Care Plan Builder', desc: 'Create, review, and update comprehensive, personalised care plans that align precisely with NDIS funding categories and aged care package requirements.', detail: 'Our guided Care Plan Builder makes it straightforward to create thorough, compliant care plans for every participant. Template libraries, NDIS support category mappings, and version history mean plans are always current, audit-ready, and genuinely centred on the individual.' },
      { icon: Brain, title: 'Compliance & Audit Tools', desc: 'Stay ahead of audits. Auto-generate NDIS Practice Standards reports, incident logs, medication records, and comprehensive audit-ready documentation instantly.', detail: 'Compliance doesn\'t have to be stressful. Our platform continuously tracks the data required by the NDIS Quality and Safeguards Commission, automatically generating reports, incident logs, and medication records. When an audit arrives, everything is already organised and ready to go.' },
      { icon: Home, title: 'Billing & Claims', desc: 'Eliminate billing errors and accelerate cash flow with automated NDIS claim generation, aged care invoicing, payment tracking, and reconciliation.', detail: 'Billing in NDIS and aged care is complex — we make it simple. Our integrated billing module auto-generates claims from completed shifts, validates against NDIS pricing limits, submits to the NDIS portal, and tracks payment status. Fewer errors, faster payments, and complete financial visibility.' },
      { icon: Sparkles, title: 'Worker App', desc: 'Empower your frontline team with a purpose-built mobile app — shift details, client notes, progress records, timesheets, and incident reporting, all on the go.', detail: 'Our companion mobile app is designed for the realities of frontline care work. Support workers can view upcoming shifts, access client care notes, record progress and incidents, submit timesheets, and communicate with coordinators — all from their phone, with offline capability for remote areas.' },
    ],
    accent: '#3b82f6',
    accentLight: '#eff6ff',
    gradientCss: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

interface FloatingShapeProps {
  size: number
  x: string
  y: string
  delay: number
  color: string
  blur?: number
  opacity?: number
}

function FloatingShape({ size, x, y, delay, color, blur = 80, opacity = 0.15 }: FloatingShapeProps) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 14 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left: x, top: y, background: color, filter: `blur(${blur}px)`, opacity }}
    />
  )
}

export default function Services() {
  const { skin } = useSkin()
  const data = servicesData[skin || 'ndis']
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Header />

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
          <img src={data.heroImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(130deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)' }} />
          <div className="absolute inset-0 opacity-25" style={{ background: data.gradientCss, mixBlendMode: 'multiply' }} />

          <FloatingShape size={280} x="68%" y="8%" delay={0} color={data.accent} blur={90} opacity={0.2} />
          <FloatingShape size={160} x="5%" y="60%" delay={4} color={data.accent} blur={60} opacity={0.15} />

          {/* Diagonal cut */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
              <path d="M0,90 L1440,35 L1440,90 Z" fill="white" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-36 w-full flex items-end" style={{ minHeight: '80vh' }}>
            <motion.div
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl pb-16"
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border border-white/25"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}
              >
                <Sparkles size={12} className="text-white/70" />
                <span className="text-xs font-bold text-white/85 uppercase tracking-widest">What We Offer</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-xl text-white/75 max-w-xl leading-relaxed">
                {data.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ SERVICES GRID ══ */}
        <section className="py-28 relative overflow-hidden bg-white">
          <FloatingShape size={400} x="-8%" y="10%" delay={1} color={data.accent} blur={120} opacity={0.07} />
          <FloatingShape size={280} x="85%" y="50%" delay={5} color={data.accent} blur={90} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <motion.div {...fadeUp} className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 mb-5 shadow-sm bg-white">
                <span className="w-2 h-2 rounded-full" style={{ background: data.gradientCss }} />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                Support built<br />around you.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((s, i: number) => {
                const Icon = s.icon
                const isOpen = expanded === s.title
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: isOpen ? 0 : -6, transition: { duration: 0.3 } }}
                    onClick={() => setExpanded(isOpen ? null : s.title)}
                    className="group bg-white rounded-3xl border border-gray-100 relative overflow-hidden cursor-pointer transition-shadow duration-300"
                    style={{ boxShadow: isOpen ? `0 20px 60px ${data.accent}25` : '0 4px 24px rgba(0,0,0,0.06)' }}
                  >
                    {/* Top accent line */}
                    <div className="h-1 w-full" style={{ background: data.gradientCss }} />

                    <div className="p-8">
                      {/* Number watermark */}
                      <div className="absolute top-8 right-7 text-7xl font-black text-gray-50 leading-none select-none">
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
                        style={{ background: data.gradientCss }}
                      >
                        <Icon size={26} className="text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>

                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-gray-100 text-sm text-gray-600 leading-relaxed relative z-10">
                          {s.detail}
                        </div>
                      </motion.div>

                      <div
                        className="mt-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider relative z-10 transition-colors"
                        style={{ color: data.accent }}
                      >
                        {isOpen ? 'Show less' : 'Learn more'}
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown size={14} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ PHOTO SPLIT ══ */}
        <section className="relative overflow-hidden" style={{ background: data.accentLight }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center px-10 lg:px-16 py-24"
            >
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full" style={{ background: data.gradientCss }} />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Our Approach</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                  Support that<br />
                  <span style={{ color: data.accent }}>truly fits you.</span>
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  We take the time to understand your unique needs, goals, and preferences. Every support plan is built around you — not the other way around.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ background: data.gradientCss, boxShadow: `0 8px 32px ${data.accent}40` }}
                >
                  Get Started <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* Photo grid side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-2 gap-3 p-6"
              style={{ minHeight: 480 }}
            >
              <div className="rounded-3xl overflow-hidden">
                <img src={data.splitImages[0]} alt="" aria-hidden="true" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex-1 rounded-3xl overflow-hidden">
                  <img src={data.splitImages[1]} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-3xl p-6 flex items-center justify-center text-center"
                  style={{ background: data.gradientCss }}
                >
                  <div>
                    <div className="text-4xl font-black text-white mb-1">6</div>
                    <div className="text-white/80 text-sm font-semibold">Support Services</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="relative overflow-hidden py-28" style={{ background: data.gradientCss }}>
          <FloatingShape size={400} x="65%" y="-20%" delay={0} color="#ffffff" blur={100} opacity={0.1} />
          <FloatingShape size={220} x="-5%" y="55%" delay={3} color="#ffffff" blur={80} opacity={0.08} />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <span className="text-[18vw] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">SUPPORT</span>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div {...fadeUp}>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Have questions<br />about our services?
              </h2>
              <p className="text-white/70 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Our friendly team is ready to help you find the right support for your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-bold bg-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ color: data.accent }}
              >
                Get In Touch <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
