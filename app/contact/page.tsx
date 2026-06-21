'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { useSkin } from '@/components/skin-provider'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle } from 'lucide-react'

const contactData: Record<string, any> = {
  ndis: {
    heroImage: '/assets/ndis-contact-1.png',
    accent: '#0d8a5d',
    accentLight: '#f0fdf4',
    gradientCss: 'linear-gradient(135deg, #0d8a5d, #14b87a)',
  },
  'aged-care': {
    heroImage: '/assets/hero-aged-1.png',
    accent: '#be123c',
    accentLight: '#fff1f2',
    gradientCss: 'linear-gradient(135deg, #be123c, #e11d6a)',
  },
  'service-provider': {
    heroImage: '/assets/contact-welcome.png',
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

function FloatingShape({ size, x, y, delay, color, blur = 80, opacity = 0.18 }: any) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 14 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left: x, top: y, background: color, filter: `blur(${blur}px)`, opacity }}
    />
  )
}

export default function Contact() {
  const { skin } = useSkin()
  const data = contactData[skin || 'ndis']

  const contactItems = [
    { icon: Phone, label: 'Phone', value: '1300 00 27 23', sub: 'Mon – Fri, 8am – 6pm', href: 'tel:1300002723' },
    { icon: Mail, label: 'Email', value: 'hello@carters.care', sub: 'We reply within 24 hours', href: 'mailto:hello@carters.care' },
    { icon: MapPin, label: 'Address', value: 'PO Box 1118', sub: 'Osborne Park, WA 6916', href: '#' },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Header />

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
          <img src={data.heroImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(130deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)' }} />
          <div className="absolute inset-0 opacity-25" style={{ background: data.gradientCss, mixBlendMode: 'multiply' }} />

          <FloatingShape size={260} x="65%" y="8%" delay={0} color={data.accent} blur={90} opacity={0.2} />
          <FloatingShape size={150} x="5%" y="60%" delay={4} color={data.accent} blur={60} opacity={0.15} />

          {/* Diagonal bottom */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
              <path d="M0,80 L1440,30 L1440,80 Z" fill="white" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-36 w-full flex items-end" style={{ minHeight: '70vh' }}>
            <motion.div
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl pb-16"
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border border-white/25"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}
              >
                <MessageCircle size={12} className="text-white/70" />
                <span className="text-xs font-bold text-white/85 uppercase tracking-widest">Get In Touch</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                {"Let's\nTalk."}
              </h1>
              <p className="text-xl text-white/75 max-w-lg leading-relaxed">
                Have questions? Our friendly team is here to help. Get in touch with us today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ CONTACT CARDS ══ */}
        <section className="py-20 bg-white relative overflow-hidden">
          <FloatingShape size={300} x="80%" y="0%" delay={2} color={data.accent} blur={100} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8">
              {contactItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-3xl p-8 border border-gray-100 relative overflow-hidden cursor-pointer"
                    style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
                  >
                    <div className="h-1 absolute top-0 left-0 right-0 rounded-t-3xl" style={{ background: data.gradientCss }} />
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ background: data.gradientCss }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.label}</h3>
                    <p className="text-gray-800 font-semibold mb-1">{item.value}</p>
                    <p className="text-gray-400 text-sm">{item.sub}</p>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ FORM + SIDE INFO ══ */}
        <section className="py-20 relative overflow-hidden" style={{ background: data.accentLight }}>
          <FloatingShape size={350} x="-5%" y="30%" delay={1} color={data.accent} blur={100} opacity={0.1} />
          <FloatingShape size={250} x="85%" y="55%" delay={5} color={data.accent} blur={80} opacity={0.08} />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left — form */}
              <motion.div {...fadeUp}>
                <div
                  className="bg-white rounded-3xl p-10 md:p-12 relative overflow-hidden"
                  style={{ boxShadow: '0 16px 60px rgba(0,0,0,0.1)' }}
                >
                  <div className="h-1 absolute top-0 left-0 right-0 rounded-t-3xl" style={{ background: data.gradientCss }} />

                  <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Send us a message</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {"Fill out the form and we'll get back to you as soon as possible."}
                  </p>

                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                        { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                      ].map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-sm font-bold text-gray-800 mb-2">{field.label}</label>
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all text-gray-900 bg-gray-50"
                            style={{ ['--tw-ring-color' as any]: `${data.accent}40` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all text-gray-900 bg-gray-50"
                        style={{ ['--tw-ring-color' as any]: `${data.accent}40` }}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Your message..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all text-gray-900 bg-gray-50 resize-none"
                        style={{ ['--tw-ring-color' as any]: `${data.accent}40` }}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ background: data.gradientCss, boxShadow: `0 12px 40px ${data.accent}45` }}
                    >
                      Send Message <ArrowRight size={18} />
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Right — info + image */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-8"
              >
                <div className="rounded-3xl overflow-hidden" style={{ height: 280 }}>
                  <img src={data.heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white rounded-3xl p-8" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}>
                  <h3 className="text-xl font-black text-gray-900 mb-5 tracking-tight">Office Hours</h3>
                  <div className="space-y-4">
                    {[
                      { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
                      { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
                      { day: 'Sunday', time: 'On-call only' },
                    ].map(({ day, time }) => (
                      <div key={day} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: data.accentLight }}>
                            <Clock size={14} style={{ color: data.accent }} />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{day}</span>
                        </div>
                        <span className="text-gray-900 font-bold text-sm">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-3xl p-8 text-white relative overflow-hidden"
                  style={{ background: data.gradientCss }}
                >
                  <FloatingShape size={150} x="70%" y="0%" delay={0} color="#ffffff" blur={50} opacity={0.1} />
                  <Phone size={28} className="mb-4 relative z-10" />
                  <div className="text-2xl font-black mb-1 relative z-10">1300 00 27 23</div>
                  <div className="text-white/70 text-sm relative z-10">Call us anytime during business hours</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
