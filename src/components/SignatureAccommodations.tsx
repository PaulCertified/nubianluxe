'use client'

import { MotionDiv } from './motion/MotionDiv'
import { Calendar, Package, Users, Palette, Droplets, Scissors, Sparkles, Coffee, UtensilsCrossed, Gift, Laptop, Ban, Car, Home, Armchair, Sofa, Tv, Clock, Camera, Users as UsersIcon } from 'lucide-react'

const amenities = [
  {
    icon: Calendar,
    title: '24 HOUR BOOKING TIME SLOTS AVAILABLE',
    category: 'left'
  },
  {
    icon: Package,
    title: 'BRAIDING HAIR INCLUDED',
    category: 'left'
  },
  {
    icon: Users,
    title: 'HUMAN HAIR PICKUP',
    category: 'left'
  },
  {
    icon: Palette,
    title: 'CUSTOM BRAIDING HAIR COLOR BLENDS',
    category: 'left'
  },
  {
    icon: Droplets,
    title: 'SHAMPOO & NANO STEAM CONDITIONING TREATMENTS INCLUDED',
    category: 'left'
  },
  {
    icon: Scissors,
    title: 'HAIR TRIMS INCLUDED',
    category: 'left'
  },
  {
    icon: Sparkles,
    title: 'USE OF LUXURY HAIR CARE PRODUCTS',
    category: 'left'
  },
  {
    icon: Coffee,
    title: 'COMPLIMENTARY SNACKS & BEVERAGES',
    category: 'left'
  },
  {
    icon: UtensilsCrossed,
    title: 'COMPLIMENTARY MEALS FOR EXTENDED APPOINTMENTS',
    category: 'left'
  },
  {
    icon: Gift,
    title: 'GIFT BAG FOR AT-HOME HAIR CARE',
    category: 'left'
  },
  {
    icon: Laptop,
    title: 'QUIET WORK ENVIRONMENT',
    category: 'right'
  },
  {
    icon: Ban,
    title: 'NO OVERBOOKING',
    category: 'right'
  },
  {
    icon: Car,
    title: 'HASSLE FREE PARKING',
    category: 'right'
  },
  {
    icon: Home,
    title: 'IN-HOME PROFESSIONAL SALON ENVIRONMENT',
    category: 'right'
  },
  {
    icon: Armchair,
    title: 'COMFORTABLE SALON CHAIR',
    category: 'right'
  },
  {
    icon: Sofa,
    title: 'COMFORTABLE SPACE FOR BREAKS',
    category: 'right'
  },
  {
    icon: Tv,
    title: 'ENTERTAINMENT AT YOUR FINGERTIPS',
    category: 'right'
  },
  {
    icon: Clock,
    title: 'SCHEDULED BREAKS FOR YOUR COMFORT',
    category: 'right'
  },
  {
    icon: Camera,
    title: 'PERSONALIZED FOLLOW-UP CARE',
    category: 'right'
  },
  {
    icon: UsersIcon,
    title: 'REFERRAL PROGRAM INCENTIVES',
    category: 'right'
  }
]

const AmenityItem = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <MotionDiv
    className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-2 bg-primary/20 rounded-full">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <p className="text-sm font-medium text-gray-800">{title}</p>
  </MotionDiv>
)

export default function SignatureAccommodations() {
  const leftAmenities = amenities.filter(a => a.category === 'left')
  const rightAmenities = amenities.filter(a => a.category === 'right')

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-[#FDF5E6] dark:from-white/90 dark:to-[#FDF5E6]/90" />
      
      <MotionDiv
        className="relative max-w-7xl mx-auto py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          SIGNATURE ACCOMMODATIONS
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience luxury and comfort with our premium amenities and thoughtful accommodations
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftAmenities.map((amenity, index) => (
              <AmenityItem key={index} {...amenity} />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {rightAmenities.map((amenity, index) => (
              <AmenityItem key={index} {...amenity} />
            ))}
          </div>
        </div>
      </MotionDiv>
    </section>
  )
} 