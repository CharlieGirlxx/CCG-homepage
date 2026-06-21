'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { useSkin } from '@/components/skin-provider'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const aboutData: Record<string, any> = {
  ndis: {
    title: 'About Carters Care\nNDIS Services',
    subtitle: 'Empowering participants to live their best lives with dignity and choice.',
    accentBg: '#f0fdf4',
    gradient: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    accent: '#0d8a5d',
  },
  'aged-care': {
    title: 'About Carters Care\nAged Care',
    subtitle: 'Compassionate care that respects dignity, independence, and personal choice.',
    accentBg: '#fff1f2',
    gradient: 'linear-gradient(135deg, #be123c, #e11d6a)',
    accent: '#be123c',
  },
  'service-provider': {
    title: 'About The Platform',
    subtitle: 'Built by care professionals, for care professionals.',
    accentBg: '#eff6ff',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    accent: '#2563eb',
  },
}

export default function About() {
  const { skin } = useSkin()
  const data = aboutData[skin || 'ndis']

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ background: data.accentBg }}>
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-5 shadow-sm"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: data.gradient }}
                />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.05] tracking-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional, person-centred care services that empower individuals to live with dignity, choice, and independence. We believe every person deserves support that respects their values, preferences, and life goals.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                <ul className="space-y-3">
                  {[
                    'Dignity: Every person deserves respect and recognition',
                    'Choice: Control should be in the hands of those we serve',
                    'Compassion: We care deeply about the people we support',
                    'Excellence: We strive for high-quality, professional service',
                    'Accountability: We take responsibility for our commitments',
                  ].map((value, i) => (
                    <motion.li
                      key={value}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: data.accent }}
                      />
                      {value}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  With years of experience in disability support and aged care, our team is dedicated to delivering personalised, high-quality services. We&apos;re registered with the NDIS and approved as an aged care provider, ensuring we meet the highest standards of care and compliance.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 relative overflow-hidden"
          style={{ background: data.gradient }}
        >
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: 'white' }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Ready to learn more?
              </h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Let&apos;s talk about how we can support you or your loved ones.
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
