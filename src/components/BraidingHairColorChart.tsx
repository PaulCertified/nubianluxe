'use client'

import { useState } from 'react'
import { MotionDiv } from './motion/MotionDiv'
import Image from 'next/image'
import { Palette } from 'lucide-react'

interface StandardCategory {
  id: 'standard'
  name: string
  description: string
  images: string[]
}

interface OtherCategory {
  id: string
  name: string
  description: string
  image: string
}

type ColorCategory = StandardCategory | OtherCategory

// Color chart categories
const colorCategories: ColorCategory[] = [
  {
    id: 'standard',
    name: 'EX BRAID PROFESSIONAL | BOX PROFESSIONAL',
    description: 'Our standard professional-grade braiding hair colors',
    images: [
      '/assets/1.png',
      '/assets/2.png',
      '/assets/3.png',
      '/assets/4.png'
    ]
  },
  {
    id: 'platinum',
    name: 'EX BRAID PLATINUM 2 TONE COLLECTION',
    description: 'Premium two-tone ombré effect braiding hair',
    image: '/assets/exbraids2platinum.png'
  },
  {
    id: 'rainbow',
    name: 'EX BRAID RAINBOW 3 TONE COLLECTION',
    description: 'Vibrant three-tone gradient braiding hair options',
    image: '/assets/exbraidrainbow.png'
  },
  {
    id: 'kinky',
    name: 'EX BRAID KINKY AFRO & BOUNCY TWIST',
    description: 'Textured styles for natural-looking braids and twists',
    image: '/assets/kinky.png'
  }
]

export default function BraidingHairColorChart() {
  const [selectedCategory, setSelectedCategory] = useState<string>(colorCategories[0].id)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const selectedCategoryData = colorCategories.find(cat => cat.id === selectedCategory)

  return (
    <section className="relative py-20 px-4">
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF5E6]/80 to-white" />
      
      <div className="relative max-w-7xl mx-auto">
        <MotionDiv
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full mr-3">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              BRAIDING HAIR COLOR CHART
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of braiding hair colors to find your perfect match
          </p>
        </MotionDiv>
        
        {/* Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full px-1 max-w-4xl mx-auto">
          {colorCategories.map(category => (
            <MotionDiv
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`w-full px-2 md:px-4 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            </MotionDiv>
          ))}
        </div>
        
        {/* Color Chart Display */}
        {selectedCategoryData && (
          <MotionDiv
            className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedCategoryData.name}</h3>
              <p className="text-gray-600">{selectedCategoryData.description}</p>
            </div>
            
            <div className="relative">
              {selectedCategoryData?.id === 'standard' && 'images' in selectedCategoryData ? (
                <div className="flex flex-col space-y-8">
                  {selectedCategoryData.images.map((image, index) => (
                    <div key={index} className="relative w-full flex justify-center items-center" style={{ minHeight: '1px' }}>
                      <Image
                        src={image}
                        alt={`${selectedCategoryData.name} Color Chart ${index + 1}`}
                        width={1200}
                        height={900}
                        style={{ width: '100%', height: 'auto', maxHeight: '700px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                        className="rounded-lg max-w-full"
                        priority
                        sizes="100vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative h-[500px] w-full">
                  <Image
                    src={'image' in selectedCategoryData! ? selectedCategoryData.image : ''}
                    alt={`${selectedCategoryData?.name} Color Chart`}
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              )}
            </div>
          </MotionDiv>
        )}
      </div>
    </section>
  )
} 