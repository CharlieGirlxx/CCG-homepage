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
    images: [
      '/assets/ndis-services-1.png',
      '/assets/ndis-services-2.png',
      '/assets/ndis-services-3.png',
    ],
    services: [
      {
        icon: Heart,
        title: 'Assist Personal Activities',
        desc: 'Support with daily personal tasks including bathing, dressing, grooming, and mobility. We respect your privacy and dignity at all times.',
        detail:
          'Our support workers are trained to assist with personal care tasks while maintaining your comfort and dignity. We follow your preferences and routines, ensuring you feel respected and supported.',
      },
      {
        icon: Home,
        title: 'Assist Life Stage Transition',
        desc: 'Moving into a new phase of life? We support transitions into independent living, new accommodation, or post-hospital care.',
        detail:
          'Life transitions can be challenging, but you don&apos;t have to face them alone. Our team helps you plan and execute smooth transitions with coordination and support.',
      },
      {
        icon: Users,
        title: 'Community Participation',
        desc: 'Join social groups, recreational activities, and community events. Build friendships, confidence, and a sense of belonging.',
        detail:
          'Being part of the community is essential for wellbeing. We help you explore and engage in activities that interest you, from social clubs to volunteer work.',
      },
      {
        icon: Calendar,
        title: 'Daily Tasks / Shared Living',
        desc: 'Assistance with household tasks, meal preparation, and maintaining your living space in shared or individual settings.',
        detail:
          'A comfortable home environment supports your wellbeing. We assist with daily household tasks and help coordinate household responsibilities.',
      },
      {
        icon: Brain,
        title: 'Developmental Life Skills',
        desc: 'Programs to develop practical skills including cooking, budgeting, communication, and personal management.',
        detail:
          'Building life skills empowers you to live more independently. Our programs are tailored to your goals and learning style.',
      },
      {
        icon: Heart,
        title: 'Respite Care',
        desc: 'Short-term relief for families and carers, providing quality care while giving primary caregivers a well-deserved break.',
        detail:
          'Carers need rest too. Our respite services provide temporary care while ensuring continuity of care for the person receiving support.',
      },
    ],
    accentBg: '#f0fdf4',
    gradient: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    accent: '#0d8a5d',
  },
  'aged-care': {
    title: 'Aged Care\nServices',
    subtitle: 'Exceptional care for seniors that respects dignity, independence, and personal choice.',
    images: [
      '/assets/hero-aged-2.png',
      '/assets/respite-care.jpg',
      '/assets/community-participation.jpg',
    ],
    services: [
      {
        icon: Heart,
        title: 'Personal Care',
        desc: 'Gentle, respectful assistance with bathing, dressing, grooming, medication reminders, and mobility support.',
        detail:
          'Our personal care services are delivered with the utmost respect for your dignity and preferences, ensuring you feel at ease.',
      },
      {
        icon: Home,
        title: 'Domestic Assistance',
        desc: 'Help with household tasks, meal preparation, laundry, and maintaining a safe, comfortable home environment.',
        detail:
          'A clean, safe, and comfortable home supports your health and wellbeing. We provide comprehensive domestic assistance services.',
      },
      {
        icon: CookingPot,
        title: 'Meal Preparation & Nutrition',
        desc: 'Nutritious, home-style meals prepared to your tastes and dietary requirements, ensuring you stay healthy and satisfied.',
        detail:
          'Good nutrition is vital for health. Our meal preparation services are tailored to your dietary needs, preferences, and cultural requirements.',
      },
      {
        icon: Car,
        title: 'Transport & Social Support',
        desc: 'Safe transport to appointments, shopping, and social outings. We help you stay connected to your community.',
        detail:
          'Staying connected to your community is important. We provide safe, reliable transport for medical appointments, shopping, and social activities.',
      },
      {
        icon: Heart,
        title: 'Respite Care',
        desc: 'Temporary care for seniors in a comfortable, welcoming environment, giving family carers time to rest and recharge.',
        detail:
          'Family carers deserve time to rest and recharge. Our respite care services provide temporary support in a safe, comfortable environment.',
      },
      {
        icon: Sparkles,
        title: 'Residential Care',
        desc: 'Intimate residential homes with personalised care plans, engaging activities, and a warm, family-like atmosphere.',
        detail:
          'Our residential care homes offer a warm, supportive environment where residents feel truly at home with personalised care and activities.',
      },
    ],
    accentBg: '#fff1f2',
    gradient: 'linear-gradient(135deg, #be123c, #e11d6a)',
    accent: '#be123c',
  },
  'service-provider': {
    title: 'Carters Care\nPlatform Features',
    subtitle: 'Everything a modern NDIS or aged care organisation needs — in one powerful, easy-to-use platform.',
    images: [
      '/assets/hero-platform-2.png',
      '/assets/hero-platform-3.png',
      '/assets/hero-partner.png',
    ],
    services: [
      {
        icon: Users,
        title: 'Client Management',
        desc: 'Centralise all participant and client records, NDIS plans, support goals, case notes, and documents in a single secure hub.',
        detail:
          'Our Client Management module brings everything together — participant profiles, NDIS plans, support goals, and progress notes in one secure hub.',
      },
      {
        icon: Calendar,
        title: 'Roster & Scheduling',
        desc: 'Build dynamic rosters, match the right workers to the right participants, manage availability, and push real-time shift notifications.',
        detail:
          'Our intelligent scheduling engine considers worker qualifications, participant preferences, and travel times to suggest optimal rosters.',
      },
      {
        icon: Heart,
        title: 'Care Plan Builder',
        desc: 'Create, review, and update personalised care plans that align with NDIS funding categories and aged care package requirements.',
        detail:
          'Our Care Plan Builder makes it easy to create comprehensive, personalised care plans that align with funding categories and requirements.',
      },
      {
        icon: Brain,
        title: 'Compliance & Audit Tools',
        desc: 'Auto-generate NDIS Practice Standards reports, incident logs, medication records, and audit-ready documentation at the click of a button.',
        detail:
          'Our platform automatically generates NDIS Practice Standards reports, incident logs, and comprehensive audit-ready documentation.',
      },
      {
        icon: Home,
        title: 'Billing & Claims',
        desc: 'Streamline NDIS claim submission and aged care billing with automated invoicing, payment tracking, and reconciliation tools.',
        detail:
          'Reduce billing errors and speed up cash flow with our integrated billing module with automated NDIS claim generation and tracking.',
      },
      {
        icon: Sparkles,
        title: 'Worker App',
        desc: 'A companion mobile app for support workers — view shifts, access client notes, record progress, and submit timesheets on the go.',
        detail:
          'Our companion mobile app puts everything support workers need in their pocket with offline capability for remote areas.',
      },
    ],
    accentBg: '#eff6ff',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    accent: '#2563eb',
  },
}

export default function Services() {
  const { skin } = useSkin()
  const data = servicesData[skin || 'ndis']
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ background: data.accentBg }}>
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[65vh] flex items-center">
          {/* Static hero image */}
          <img
            src={data.images[0]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)',
            }}
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
                  What We Offer
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                {data.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pt-8 pb-24 relative overflow-hidden" style={{ background: data.accentBg }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {data.services.map((s: any, i: number) => {
                const Icon = s.icon
                const isOpen = expanded === s.title

                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    }}
                    onClick={() => setExpanded(isOpen ? null : s.title)}
                    className="bg-white rounded-3xl p-8 border border-white group relative overflow-hidden cursor-pointer"
                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                  >
                    {/* Number watermark */}
                    <div className="absolute top-6 right-7 text-6xl font-black text-gray-100 leading-none select-none transition-colors duration-300 group-hover:text-gray-50">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Bottom gradient accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                      style={{ background: data.gradient }}
                    />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
                      style={{ background: data.gradient }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                      {s.desc}
                    </p>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed relative z-10">
                        {s.detail}
                      </div>
                    </motion.div>
                    <div
                      className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider relative z-10 transition-colors"
                      style={{ color: data.accent }}
                    >
                      <span>{isOpen ? 'Show less' : 'Learn more'}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Wave into CTA */}
        <div className="overflow-hidden" style={{ background: data.accent }}>
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
              fill={data.accentBg}
            />
          </svg>
        </div>

        {/* CTA */}
        <section
          className="py-16 relative overflow-hidden"
          style={{ background: data.gradient }}
        >
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-20 bg-white"
          />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Have questions about our services?
              </h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Our friendly team is ready to help you find the right support for your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ color: data.accent }}
              >
                Get In Touch
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
