'use client'

import { useState, useEffect } from 'react'
import { MotionDiv } from './motion/MotionDiv'
import { Calendar, ChevronRight, X } from 'lucide-react'

const bookingTiers = [
  {
    name: 'REGULAR BOOKING',
    schedule: 'WED-SAT, 8AM-8PM',
    notice: '7-DAY ADVANCE',
    fee: 'NO BOOKING FEE',
    color: 'bg-[#D4AF37]',
    hoverColor: 'hover:bg-[#B8960C]',
    calendlyUrl: 'https://calendly.com/ipaulgipson/regular-booking'
  },
  {
    name: 'PREMIUM BOOKING',
    schedule: 'TUE-SAT, 6AM-10PM',
    notice: '5-DAY ADVANCE',
    fee: '$25 BOOKING FEE',
    color: 'bg-[#B87C6C]',
    hoverColor: 'hover:bg-[#A66B5B]',
    calendlyUrl: 'https://calendly.com/ipaulgipson/regular-booking?utm_source=website&utm_medium=booking_tier&utm_campaign=premium'
  },
  {
    name: 'VIP BOOKING',
    schedule: '24/7',
    notice: '3-DAY ADVANCE',
    fee: '$50 BOOKING FEE',
    color: 'bg-[#4A4A4A]',
    hoverColor: 'hover:bg-[#333333]',
    calendlyUrl: 'https://calendly.com/ipaulgipson/regular-booking?utm_source=website&utm_medium=booking_tier&utm_campaign=vip'
  }
]

const bookingSteps = [
  'PICK YOUR STYLE',
  'PICK YOUR SIZE',
  'PICK YOUR BOOKING TIER',
  'SCHEDULE YOUR SERVICE'
]

const BookingTierCard = ({ tier }: { tier: typeof bookingTiers[0] }) => (
  <MotionDiv
    className={`relative group`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`rounded-2xl p-6 ${tier.color} ${tier.hoverColor} transition-colors duration-300`}>
      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
      <div className="space-y-1 text-white/90">
        <p>{tier.schedule}</p>
        <p>{tier.notice}</p>
        <p className="font-semibold">{tier.fee}</p>
      </div>
    </div>
  </MotionDiv>
)

export default function WaysToBook() {
  const [selectedTier, setSelectedTier] = useState<typeof bookingTiers[0] | null>(null)
  const [showCalendly, setShowCalendly] = useState(false)

  // Initialize Calendly when booking modal is shown
  useEffect(() => {
    if (showCalendly && selectedTier) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [showCalendly, selectedTier])

  const handleBookingTierClick = (tier: typeof bookingTiers[0]) => {
    setSelectedTier(tier)
    setShowCalendly(true)
  }

  return (
    <section className="relative py-20 px-4 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            WAYS TO BOOK
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-primary bg-black/50 flex items-center justify-center mb-8">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
          </div>
        </MotionDiv>

        {/* Booking Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {bookingTiers.map((tier, index) => (
            <BookingTierCard
              key={tier.name}
              tier={tier}
            />
          ))}
        </div>

        {/* Booking Steps */}
        <MotionDiv
          className="bg-[#2A2A2A] rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              REVIEW THE ENTIRE PRICE LIST BELOW
            </h3>
          </div>
          <div className="space-y-4">
            {bookingSteps.map((step, index) => (
              <MotionDiv
                key={step}
                className="flex items-center gap-3 text-white/90 hover:text-primary transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ChevronRight className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">{step}</span>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  )
} 