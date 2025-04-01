'use client'

import { useState, useEffect } from 'react'
import { MotionDiv, MotionH1, MotionP } from '@/components/motion/MotionDiv'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showText, setShowText] = useState(true)
  
  useEffect(() => {
    // Delay revealing the background image
    const imageTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)
    
    // Hide text after 4 seconds
    const textTimer = setTimeout(() => {
      setShowText(false)
    }, 3000)
    
    return () => {
      clearTimeout(imageTimer)
      clearTimeout(textTimer)
    }
  }, [])
  
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
      {/* Background Image with CSS-based fade in */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: "url('/hero-background.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
          }}
        />
      </div>
      
      {/* Dark Overlay - fades out */}
      <div 
        className={`absolute inset-0 bg-black z-10 transition-opacity duration-1500 ease-in-out ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ pointerEvents: isLoaded ? 'none' : 'auto' }}
      />
      
      {/* Content - fades out after 4 seconds */}
      <div 
        className={`relative z-20 transition-opacity duration-1500 ease-in-out ${showText ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: showText ? 'auto' : 'none' }}
      >
        {/* Neon Sign */}
        <div className="mb-8">
          <h1 className="neon-text text-6xl md:text-8xl font-bold mb-4">
            OPEN 24/7
          </h1>
          <p className="text-xl md:text-2xl text-white">
            THE FLEXIBILITY YOU NEED & THE ACCOMODATIONS YOU LOVE
          </p>
        </div>

        {/* Logo */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-[#D4AF37]">
            NUBIAN
          </h2>
          <h3 className="text-2xl md:text-3xl text-[#D4AF37]">
            LUXE BRAIDING LOUNGE
          </h3>
        </div>

        {/* Tagline */}
        <div className="space-y-4 text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white">
            HONORING THE CRAFT
          </h4>
          <p className="text-lg md:text-xl text-white">
            ELEVATING THE EXPERIENCE
          </p>
        </div>
      </div>
    </section>
  )
} 