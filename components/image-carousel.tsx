'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageCarouselProps {
  images: string[]
  interval?: number
  className?: string
  overlay?: React.ReactNode
}

export function ImageCarousel({ 
  images, 
  interval = 7000, 
  className = '', 
  overlay 
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden bg-gray-900 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={images[current]}
            alt={`Carousel image ${current + 1}`}
            className="w-full h-full object-cover"
            decoding="async"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
      
      {overlay && (
        <div className="absolute inset-0 pointer-events-none">
          {overlay}
        </div>
      )}
    </div>
  )
}
