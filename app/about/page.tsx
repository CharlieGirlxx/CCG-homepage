'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { useSkin } from '@/components/skin-provider'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Users, Award, Shield, Star, CheckCircle2 } from 'lucide-react'

const aboutData: Record<string, any> = {
  ndis: {
    title: 'About Carters Care\nNDIS Services',
    subtitle: 'Empowering participants to live their best lives with dignity, choice, and genuine support.',
    heroImage: '/assets/ndis-about-1.png',
    image2: '/assets/ndis-home-2.png',
    image3: '/assets/ndis-about-3.png',
    accent: '#0d8a5d',
    accentLight: '#f0fdf4',
    gradientCss: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    values: [
      { icon: Heart, title: 'Dignity', desc: 'Every person deserves unconditional respect and recognition of their worth.' },
      { icon: Users, title: 'Choice', desc: 'Control should remain in the hands of those we serve, always.' },
      { icon: Star, title: 'Excellence', desc: 'We strive for the highest quality, professional service at every touchpoint.' },
      { icon: Award, title: 'Accountability', desc: 'We take full responsibility for every commitment we make.' },
      { icon: Shield, title: 'Safety', desc: 'Your safety and wellbeing underpins everything we do, every day.' },
      { icon: CheckCircle2, title: 'Compassion', desc: 'We care deeply about the people we support and their families.' },
    ],
  },
  'aged-care': {
    title: 'About Carters Care\nAged Care',
    subtitle: 'Compassionate care that respects dignity, independence, and personal choice at every stage of life.',
    heroImage: '/assets/hero-aged-care.png',
    image2: '/assets/hero-aged-2.png',
    image3: '/assets/hero-aged-3.png',
    accent: '#be123c',
    accentLight: '#fff1f2',
    gradientCss: 'linear-gradient(135deg, #be123c, #e11d6a)',
    values: [
      { icon: Heart, title: 'Dignity', desc: 'Honouring the life experiences and wisdom of every person in our care.' },
      { icon: Users, title: 'Family', desc: 'We treat every person like family, creating warmth and genuine connection.' },
      { icon: Star, title: 'Quality', desc: 'Premium care standards that meet and exceed government requirements.' },
      { icon: Award, title: 'Trust', desc: 'Building lasting trust with residents, families, and the community.' },
      { icon: Shield, title: 'Safety', desc: 'Comprehensive safety protocols to ensure every resident stays well.' },
      { icon: CheckCircle2, title: 'Respect', desc: 'Cultural sensitivity and respect for individual backgrounds and beliefs.' },
    ],
  },
  'service-provider': {
    title: 'About The\nCarters Platform',
    subtitle: 'Built by care professionals who understand the real challenges of running an NDIS or aged care organisation.',
    heroImage: '/assets/hero-partner.png',
    image2: '/assets/hero-platform-2.png',
    image3: '/assets/hero-platform-3.png',
    accent: '#2563eb',
    accentLight: '#eff6ff',
    gradientCss: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    values: [
      { icon: Heart, title: 'Built for Care', desc: 'Designed from the ground up for NDIS and aged care professionals.' },
      { icon: Users, title: 'Collaborative', desc: 'Co-created with hundreds of providers to solve real problems.' },
      { icon: Star, title: 'Innovative', desc: 'Continuously improving with the latest technology and compliance updates.' },
      { icon: Award, title: 'Reliable', desc: '99.9% uptime SLA — because your operations never sleep.' },
      { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security with Australian data sovereignty.' },
      { icon: CheckCircle2, title: 'Compliant', desc: 'NDIS Practice Standards ready, out of the box.' },
    ],
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

export default function About() {
  const { skin } = useSkin()
  const data = aboutData[skin || 'ndis']

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Header />

        {/* ══ HERO — angled photo + bold text ══ */}
        <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
          {/* Full bleed photo */}
          <img src={data.heroImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(125deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)' }} />
          <div className="absolute inset-0 opacity-25" style={{ background: data.gradientCss, mixBlendMode: 'multiply' }} />

          <FloatingShape size={280} x="65%" y="5%" delay={0} color={data.accent} blur={90} opacity={0.2} />
          <FloatingShape size={160} x="8%" y="55%" delay={4} color={data.accent} blur={60} opacity={0.15} />

          {/* Diagonal cut to white */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
              <path d="M0,100 L1440,40 L1440,100 Z" fill="white" />
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
                <span className="w-2 h-2 rounded-full" style={{ background: data.gradientCss }} />
                <span className="text-xs font-bold text-white/85 uppercase tracking-widest">About Us</span>
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

        {/* ══ MISSION — large text pull-quote ══ */}
        <section className="py-28 bg-white overflow-hidden relative">
          <FloatingShape size={400} x="80%" y="-5%" delay={2} color={data.accent} blur={120} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full" style={{ background: data.gradientCss }} />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                  Empowering lives<br />
                  <span style={{ color: data.accent }}>through genuine care.</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  To provide exceptional, person-centred care services that empower individuals to live with dignity, choice, and independence. We believe every person deserves support that respects their values, preferences, and life goals.
                </p>
                <p className="text-gray-500 text-base leading-relaxed">
                  With years of experience in disability support and aged care, our team is dedicated to delivering personalised, high-quality services. We&apos;re registered with the NDIS and approved as an aged care provider, ensuring we meet the highest standards of care and compliance.
                </p>
              </motion.div>

              {/* Stacked images */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
                style={{ height: 520 }}
              >
                <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl">
                  <img src={data.image2} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img src={data.image3} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </motion.div>
                {/* Floating accent badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute top-8 left-4 rounded-2xl px-5 py-3 shadow-xl"
                  style={{ background: data.gradientCss }}
                >
                  <div className="text-white font-black text-2xl leading-none">10+</div>
                  <div className="text-white/75 text-xs font-semibold mt-0.5">Years of Care</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ VALUES — 6-col card grid ══ */}
        <section className="py-28 relative overflow-hidden" style={{ background: data.accentLight }}>
          <FloatingShape size={350} x="-8%" y="20%" delay={1} color={data.accent} blur={100} opacity={0.1} />
          <FloatingShape size={250} x="85%" y="55%" delay={5} color={data.accent} blur={80} opacity={0.08} />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full" style={{ background: data.gradientCss }} />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Our Values</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                What we stand for
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.values.map((v: any, i: number) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white rounded-3xl p-8 shadow-sm border border-white group cursor-default relative overflow-hidden"
                  >
                    <div className="h-1 absolute top-0 left-0 right-0 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: data.gradientCss }} />
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: data.gradientCss }}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ FULL-WIDTH PHOTO BREAK ══ */}
        <section className="relative overflow-hidden" style={{ height: 420 }}>
          <img src={data.heroImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <motion.div {...fadeUp} className="max-w-xl">
                <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                  Every person deserves care that feels like home.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="relative overflow-hidden py-28" style={{ background: data.gradientCss }}>
          <FloatingShape size={350} x="65%" y="-15%" delay={0} color="#ffffff" blur={90} opacity={0.1} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <span className="text-[18vw] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">CARE</span>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div {...fadeUp}>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                Ready to learn<br />more?
              </h2>
              <p className="text-white/70 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                {"Let's talk about how we can support you or your loved ones."}
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
