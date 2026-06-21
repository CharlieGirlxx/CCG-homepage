'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { useSkin } from '@/components/skin-provider'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react'

const contactData: Record<string, any> = {
  ndis: {
    accentBg: '#f0fdf4',
    gradient: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
    accent: '#0d8a5d',
  },
  'aged-care': {
    accentBg: '#fff1f2',
    gradient: 'linear-gradient(135deg, #be123c, #e11d6a)',
    accent: '#be123c',
  },
  'service-provider': {
    accentBg: '#eff6ff',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    accent: '#2563eb',
  },
}

export default function Contact() {
  const { skin } = useSkin()
  const data = contactData[skin || 'ndis']

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ background: data.accentBg }}>
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-16 right-16 w-40 h-40 rounded-full blur-3xl opacity-30"
            style={{ background: data.gradient }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.05] tracking-tight">
                Let&apos;s Talk
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Have questions? Our friendly team is here to help. Get in touch with us today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '1300 00 27 23',
                  href: 'tel:1300002723',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@carters.care',
                  href: 'mailto:hello@carters.care',
                },
                {
                  icon: MapPin,
                  label: 'Address',
                  value: 'PO Box 1118, Osborne Park, WA 6916',
                  href: '#',
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ background: data.gradient }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {item.value}
                    </p>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: data.accentBg }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: data.gradient,
                    boxShadow: `0 8px 32px ${data.accent}40`,
                  }}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
