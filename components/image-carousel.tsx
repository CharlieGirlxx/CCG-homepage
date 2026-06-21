'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
    if (images.length === 0) return
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    
    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) {
    return (
      <div className={`relative overflow-hidden bg-gray-900 ${className}`}>
        {overlay && <div className="absolute inset-0 pointer-events-none z-20">{overlay}</div>}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-gray-900 ${className}`}>
      {/* Current image */}
      <img
        src={images[current]}
        alt={`Carousel image ${current + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      
      {overlay && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {overlay}
        </div>
      )}
    </div>
  )
}
