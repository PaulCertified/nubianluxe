'use client'

import { MotionDiv } from './motion/MotionDiv'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-black pt-16 pb-8 border-t border-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Top Section with Logo and Info */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding Column */}
          <MotionDiv
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              NUBIAN LUXE
            </h2>
            <p className="text-gray-300 text-sm mb-6 text-center md:text-left">
              Honoring the craft of African American braiding as an art form and cultural tradition, providing exceptional service in a comfortable, luxurious environment.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </MotionDiv>

          {/* Contact Info Column */}
          <MotionDiv
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <div className="p-2 mr-3 bg-primary/10 rounded-full">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>346-459-0146 (TEXT)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="p-2 mr-3 bg-primary/10 rounded-full">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>THE WOODLANDS/SPRING, TX</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="p-2 mr-3 bg-primary/10 rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <span>SERVICE DAYS: 24/7</span>
              </div>
            </div>
          </MotionDiv>

          {/* Quick Links Column */}
          <MotionDiv
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link href="#accommodations" className="text-gray-300 hover:text-primary transition-colors">Accommodations</Link>
              <Link href="#booking" className="text-gray-300 hover:text-primary transition-colors">Book Now</Link>
              <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</Link>
              <Link href="#policy" className="text-gray-300 hover:text-primary transition-colors">Policies</Link>
              <Link href="#colors" className="text-gray-300 hover:text-primary transition-colors">Hair Colors</Link>
              <Link href="#about" className="text-gray-300 hover:text-primary transition-colors">About Me</Link>
              <Link href="#prices" className="text-gray-300 hover:text-primary transition-colors">Price List</Link>
              <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
            </div>
          </MotionDiv>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section with Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Nubian Luxe Braiding Lounge. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            ✨ LET'S HONOR OUR ROOTS AND REDEFINE THE BRAIDING EXPERIENCE TOGETHER
          </p>
        </div>
      </div>
    </footer>
  )
} 