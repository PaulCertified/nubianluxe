'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MotionDiv } from './motion/MotionDiv'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ACCOMMODATIONS', href: '#accommodations' },
  { name: 'BOOK NOW', href: '#booking' },
  { name: 'POLICY', href: '#policy' },
  { name: 'ABOUT', href: '#about' },
  { name: 'HAIR COLORS', href: '#colors' },
  { name: 'PRICES', href: '#prices' },
  { name: 'CONTACT', href: '#contact' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll effect for navbar visibility and background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // At the very top, hide the navbar
      if (currentScrollY <= 10) {
        setScrolled(false)
        setVisible(false)
      } 
      // Once scrolling starts, show the navbar
      else {
        setScrolled(true)
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'} 
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="text-xl font-bold text-primary">
              NUBIAN LUXE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MotionDiv
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-16 transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-1 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-primary border-b border-gray-800 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </MotionDiv>
    </nav>
  )
}

export default Navigation 