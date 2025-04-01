'use client'

import { MotionDiv } from './motion/MotionDiv'
import { DollarSign, Star, Sparkles } from 'lucide-react'

// Service categories
const serviceCategories = [
  {
    title: 'BRAID EXTENSION SERVICES',
    color: 'bg-[#C8A088]',
    services: [
      {
        name: 'BOHO/GODDESS BRAIDS',
        price: '$300+',
        description: [
          'SIZE LARGE TO SMALL',
          'BRAID COUNT FROM 80 TO 150',
          'KNOTLESS BRAIDS WITH FLOWING HUMAN HAIR CURLS ADDED'
        ]
      },
      {
        name: 'BOX BRAIDS',
        price: '$100+',
        description: [
          'SIZE XX-LARGE TO XX-SMALL',
          'BRAID COUNT FROM 15 TO 250',
          'CLASSIC TOP KNOT BRAIDS'
        ]
      },
      {
        name: 'CORNROWS',
        price: '$150+',
        description: [
          'STRAIGHT BACKS TO MULTIPLE STYLES',
          'UP TO 50',
          'BRAIDS CLOSE TO SCALP, STRAIGHT OR CUSTOM DESIGNED STYLES'
        ]
      },
      {
        name: 'CROCHET BRAIDS',
        price: '$100+',
        description: [
          'PRE-LOOPED HAIR CROCHETED INTO CORNROW BASE'
        ]
      },
      {
        name: 'FULANI/TRIBAL BRAIDS',
        price: '$200+',
        description: [
          'PATTERNED CORNROWS WITH INDIVIDUAL BRAID COMBO'
        ]
      },
      {
        name: 'KNOTLESS BRAIDS',
        price: '$150+',
        description: [
          'SIZE XX-LARGE TO XX-SMALL',
          'BRAID COUNT FROM 15 TO 250',
          'LIGHTWEIGHT, TENSION-FREE BRAIDS WITH SEAMLESS FEED-IN TECHNIQUE'
        ]
      },
      {
        name: 'ILLUSION LOCS',
        price: '$200+',
        description: [
          'PALM ROLLED LOCS BASE, TWO-STRAND TWIST EXTENSIONS WRAPPED FOR A NATURAL LOC LOOK'
        ]
      },
      {
        name: 'MERMAID LOCS',
        price: '$300+',
        description: [
          'LONG, BOHO LOCS WITH FLOWING HUMAN HAIR CURLS ADDED'
        ]
      },
      {
        name: 'TWIST',
        price: '$100+',
        description: [
          'SIZE XX-LARGE TO XX-SMALL',
          'TWIST COUNT FROM 15 TO 250',
          'TWO-STRAND TWIST WITH STRAIGHT, CURLY OR KINKY HAIR'
        ]
      }
    ]
  },
  {
    title: 'NATURAL HAIR SERVICES',
    color: 'bg-[#F2B45D]',
    services: [
      {
        name: 'CORNROWS',
        price: '$75+',
        description: [
          'SCALP BRAIDS WITH NO ADDED HAIR'
        ]
      },
      {
        name: 'LOC MAINTENANCE',
        price: '$120+',
        description: [
          'RETVIST OR RETIE'
        ]
      },
      {
        name: 'COILS',
        price: '$125+',
        description: [
          'SIZE LARGE TO XX-SMALL',
          'COILS COUNT FROM 80 TO 250',
          'PALM ROLL ROOT AND DEFINED FINGER COILS'
        ]
      },
      {
        name: 'PLATS',
        price: '$75+',
        description: [
          'SIZE XX-LARGE TO XX-SMALL',
          'PLATS COUNT FROM 15 TO 250',
          'INDIVIDUAL BOX-STYLE BRAIDS USING ONLY YOUR NATURAL HAIR'
        ]
      },
      {
        name: 'TWIST',
        price: '$75+',
        description: [
          'SIZE XX-LARGE TO XX-SMALL',
          'TWIST COUNT FROM 15 TO 250',
          'INDIVIDUAL BOX-STYLE BRAIDS USING ONLY YOUR NATURAL HAIR'
        ]
      },
      {
        name: 'ILLUSION LOCS',
        price: '$150+',
        description: [
          'PALM ROLL BASE FAUX LOC LOOK USING ONLY NATURAL HAIR WITHOUT THE LOC COMMITMENT'
        ]
      }
    ]
  },
  {
    title: 'OTHER SERVICES',
    color: 'bg-[#C8A088]',
    services: [
      {
        name: 'BRAID PREP',
        price: '$75+',
        description: [
          'PROFESSIONAL SECTIONING OF YOUR HAIR, SAVING YOU TIME AND EFFORT FOR YOU TO BRAID YOUR OWN HAIR'
        ]
      },
      {
        name: 'HAIR COLOR',
        price: '$50+',
        description: [
          'BOOK AS AN ADD-ON OR STAND ALONE SERVICE. PROFESSIONAL COLOR SERVICE INCLUDES BOND TREATMENT, CONDITIONING, AND COLOR-SAFE TONING OF THE NATURAL HAIR'
        ]
      },
      {
        name: 'OLAPLEX CONDITIONING',
        price: '$45+',
        description: [
          'STRENGTHENS AND REPAIRS BONDS IN DAMAGED OR FRAGILE HAIR WITH DEEP MOISTURE INFUSION USING NANO STEAM TECHNOLOGY'
        ]
      },
      {
        name: 'DETANGLING',
        price: '$100+',
        description: [
          'GENTLE REMOVAL OF KNOTS, MATS, OR SHED HAIR WITH PATIENCE AND CARE'
        ]
      },
      {
        name: 'BRAID TAKE DOWN',
        price: '$100+',
        description: [
          'SAFE REMOVAL OF BRAIDS, THOROUGH DETANGLING, SHAMPOO, DEEP CONDITIONING, AND BLOW-DRY'
        ]
      },
      {
        name: 'WIG BRAID DOWN',
        price: '$75',
        description: [
          'FLAT, COMFORTABLE BRAID FOUNDATION TAILORED FOR WIG INSTALLS OR PROTECTIVE STYLING'
        ]
      }
    ]
  },
  {
    title: 'CHILDREN SERVICES',
    color: 'bg-[#C8A088]',
    services: [
      {
        name: 'EXTENSIONS',
        price: '$70+',
        description: [
          'BOHO, BOX, CORNROWS, CROCHET, ILLUSION LOCS, KNOTLESS & TWIST'
        ]
      },
      {
        name: 'NATURAL',
        price: '$50+',
        description: [
          'COILS, CORNROWS, CROCHET, DETANGLING, ILLUSION LOCS, PLATS, RETIE, RETWIST, TWIST'
        ]
      }
    ]
  }
]

// Service Card Component
interface ServiceCardProps {
  name: string
  price: string
  description: string[]
}

const ServiceCard = ({ name, price, description }: ServiceCardProps) => (
  <MotionDiv
    className="group bg-black/60 backdrop-blur-sm rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-primary/20 hover:border-primary/40"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <div className="flex items-center">
        <span className="text-2xl font-bold text-primary mr-1">{price}</span>
        <Sparkles className="w-5 h-5 text-yellow-400" />
      </div>
    </div>

    <div className="space-y-2 text-gray-300 text-sm">
      {description.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </MotionDiv>
)

// Section Header Component
interface SectionHeaderProps {
  title: string
  color: string
}

const SectionHeader = ({ title, color }: SectionHeaderProps) => (
  <div className="relative flex items-center justify-center my-12">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-700"></div>
    </div>
    <div className={`relative z-10 px-8 py-2 ${color} text-white rounded-full font-bold text-lg shadow-lg`}>
      {title}
    </div>
  </div>
)

export default function PriceList() {
  return (
    <section className="relative py-20 px-4 bg-black">
      {/* Dark Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <MotionDiv
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/20 rounded-full mr-3">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              PRICE LIST
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ALL SERVICES (EXCEPT CONSULTATIONS) INCLUDE SHAMPOO, DEEP CONDITIONING BOND TREATMENT, BLOWDRY.
            <br/>ALL EXTENSION SERVICES INCLUDE SYNTHETIC BRAIDING HAIR.
            <br/>SEE BOOKING SITE FOR FULL DESCRIPTIONS
          </p>
        </MotionDiv>
        
        {/* Service Categories */}
        {serviceCategories.map((category, index) => (
          <div key={index}>
            <SectionHeader title={category.title} color={category.color} />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, sIndex) => (
                <ServiceCard 
                  key={sIndex} 
                  name={service.name} 
                  price={service.price} 
                  description={service.description} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 