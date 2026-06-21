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

const servicesData: Record<string, any> = {
  ndis: {
    title: 'NDIS Support\nServices',
    subtitle: 'Comprehensive support services tailored to your NDIS plan and personal goals.',
    heroImage: '/assets/ndis-services-1.png',
    splitImages: ['/assets/ndis-services-2.png', '/assets/ndis-services-3.png'],
    services: [
      { icon: Heart, title: 'Assist Personal Activities', desc: 'Support with daily personal tasks including bathing, dressing, grooming, and mobility. We respect your privacy and dignity at all times.', detail: 'Our support workers are trained to assist with personal care tasks while maintaining your comfort and dignity. We follow your preferences and routines, ensuring you feel respected and supported.' },
      { icon: Home, title: 'Assist Life Stage Transition', desc: 'Moving into a new phase of life? We support transitions into independent living, new accommodation, or post-hospital care.', detail: 'Life transitions can be challenging, but you don\'t have to face them alone. Our team helps you plan and execute smooth transitions with coordination and support.' },
      { icon: Users, title: 'Community Participation', desc: 'Join social groups, recreational activities, and community events. Build friendships, confidence, and a sense of belonging.', detail: 'Being part of the community is essential for wellbeing. We help you explore and engage in activities that interest you, from social clubs to volunteer work.' },
      { icon: Calendar, title: 'Daily Tasks / Shared Living', desc: 'Assistance with household tasks, meal preparation, and maintaining your living space in shared or individual settings.', detail: 'A comfortable home environment supports your wellbeing. We assist with daily household tasks and help coordinate household responsibilities.' },
      { icon: Brain, title: 'Developmental Life Skills', desc: 'Programs to develop practical skills including cooking, budgeting, communication, and personal management.', detail: 'Building life skills empowers you to live more independently. Our programs are tailored to your goals and learning style.' },
      { icon: Heart, title: 'Respite Care', desc: 'Short-term relief for families and carers, providing quality care while giving primary caregivers a well-deserved break.', detail: 'Carers need rest too. Our respite services provide temporary care while ensuring continuity of care for the person receiving support.' },
    ],
    accent: '#0d8a5d',
    accentLight: '#f0fdf4',
    gradientCss: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
  },
  'aged-care': {
    title: 'Aged Care\nServices',
    subtitle: 'Exceptional care for seniors that respects dignity, independence, and personal choice.',
    heroImage: '/assets/hero-aged-1.png',
    splitImages: ['/assets/hero-aged-2.png', '/assets/hero-aged-3.png'],
    services: [
      { icon: Heart, title: 'Personal Care', desc: 'Gentle, respectful assistance with bathing, dressing, grooming, medication reminders, and mobility support.', detail: 'Our personal care services are delivered with the utmost respect for your dignity and preferences, ensuring you feel at ease.' },
      { icon: Home, title: 'Domestic Assistance', desc: 'Help with household tasks, meal preparation, laundry, and maintaining a safe, comfortable home environment.', detail: 'A clean, safe, and comfortable home supports your health and wellbeing. We provide comprehensive domestic assistance services.' },
      { icon: CookingPot, title: 'Meal Preparation & Nutrition', desc: 'Nutritious, home-style meals prepared to your tastes and dietary requirements, ensuring you stay healthy and satisfied.', detail: 'Good nutrition is vital for health. Our meal preparation services are tailored to your dietary needs, preferences, and cultural requirements.' },
      { icon: Car, title: 'Transport & Social Support', desc: 'Safe transport to appointments, shopping, and social outings. We help you stay connected to your community.', detail: 'Staying connected to your community is important. We provide safe, reliable transport for medical appointments, shopping, and social activities.' },
      { icon: Heart, title: 'Respite Care', desc: 'Temporary care for seniors in a comfortable, welcoming environment, giving family carers time to rest and recharge.', detail: 'Family carers deserve time to rest and recharge. Our respite care services provide temporary support in a safe, comfortable environment.' },
      { icon: Sparkles, title: 'Residential Care', desc: 'Intimate residential homes with personalised care plans, engaging activities, and a warm, family-like atmosphere.', detail: 'Our residential care homes offer a warm, supportive environment where residents feel truly at home with personalised care and activities.' },
    ],
    accent: '#be123c',
    accentLight: '#fff1f2',
    gradientCss: 'linear-gradient(135deg, #be123c, #e11d6a)',
  },
  'service-provider': {
    title: 'Carters Care\nPlatform Features',
    subtitle: 'Everything a modern NDIS or aged care organisation needs — in one powerful, easy-to-use platform.',
    heroImage: '/assets/hero-platform-1.png',
    splitImages: ['/assets/hero-platform-2.png', '/assets/hero-partner.png'],
    services: [
      { icon: Users, title: 'Client Management', desc: 'Centralise all participant and client records, NDIS plans, support goals, case notes, and documents in a single secure hub.', detail: 'Our Client Management module brings everything together — participant profiles, NDIS plans, support goals, and progress notes in one secure hub.' },
      { icon: Calendar, title: 'Roster & Scheduling', desc: 'Build dynamic rosters, match the right workers to the right participants, manage availability, and push real-time shift notifications.', detail: 'Our intelligent scheduling engine considers worker qualifications, participant preferences, and travel times to suggest optimal rosters.' },
      { icon: Heart, title: 'Care Plan Builder', desc: 'Create, review, and update personalised care plans that align with NDIS funding categories and aged care package requirements.', detail: 'Our Care Plan Builder makes it easy to create comprehensive, personalised care plans that align with funding categories and requirements.' },
      { icon: Brain, title: 'Compliance & Audit Tools', desc: 'Auto-generate NDIS Practice Standards reports, incident logs, medication records, and audit-ready documentation at the click of a button.', detail: 'Our platform automatically generates NDIS Practice Standards reports, incident logs, and comprehensive audit-ready documentation.' },
      { icon: Home, title: 'Billing & Claims', desc: 'Streamline NDIS claim submission and aged care billing with automated invoicing, payment tracking, and reconciliation tools.', detail: 'Reduce billing errors and speed up cash flow with our integrated billing module with automated NDIS claim generation and tracking.' },
      { icon: Sparkles, title: 'Worker App', desc: 'A companion mobile app for support workers — view shifts, access client notes, record progress, and submit timesheets on the go.', detail: 'Our companion mobile app puts everything support workers need in their pocket with offline capability for remote areas.' },
    ],
    accent: '#2563eb',
    accentLight: '#eff6ff',
    gradientCss: 'linear-gradient(135deg, #2563eb, #06b6d4)',
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

function FloatingShape({ size, x, y, delay, color, blur = 80, opacity = 0.15 }: any) {
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
                Everything<br />you need.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((s: any, i: number) => {
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
