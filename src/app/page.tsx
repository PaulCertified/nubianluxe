import Image from 'next/image'
import { MotionDiv, MotionH1, MotionP } from '@/components/motion/MotionDiv'
import Navigation from '@/components/Navigation'
import SignatureAccommodations from '@/components/SignatureAccommodations'
import WaysToBook from '@/components/WaysToBook'
import SchedulingPolicy from '@/components/SchedulingPolicy'
import BraidingHairColorChart from '@/components/BraidingHairColorChart'
import AboutMe from '@/components/AboutMe'
import PriceList from '@/components/PriceList'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Moved to top */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Signature Accommodations Section */}
      <section id="accommodations">
        <SignatureAccommodations />
      </section>

      {/* Ways to Book Section */}
      <section id="booking">
        <WaysToBook />
      </section>

      {/* Scheduling Policy Section */}
      <section id="policy">
        <SchedulingPolicy />
      </section>

      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Braiding Hair Color Chart Section */}
      <section id="colors">
        <BraidingHairColorChart />
      </section>

      {/* Price List Section */}
      <section id="prices">
        <PriceList />
      </section>

      {/* Contact/Footer */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}
