'use client'

import { MotionDiv } from './motion/MotionDiv'
import { Calendar, MapPin, Phone, Scissors } from 'lucide-react'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <section className="relative bg-black py-20 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <MotionDiv
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            ABOUT ME
          </h2>
        </MotionDiv>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <MotionDiv
            className="space-y-6 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">WELCOME TO NUBIAN LUXE BRAIDING LOUNGE</h3>
              <p className="leading-relaxed">
                AT NLBL, I'VE CREATED A HOME-BASED, PROFESSIONAL, AND COMFORTABLE SPACE WHERE THE ARTISTRY OF 
                BRAIDING MEETS OLD-SCHOOL HAIR CARE VALUES AND MODERN LUXURY ACCOMMODATIONS. MY GOAL IS TO 
                PROVIDE EXCEPTIONAL SERVICE, EXPERT HAIR CARE, AND AN UPLIFTING ENVIRONMENT WHERE BOTH CLIENTS 
                AND STYLISTS CAN TAKE PRIDE IN THE EXPERIENCE.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="leading-relaxed">
                BRAIDING, TO ME, IS MORE THAN JUST A STYLE—IT'S AN ART FORM AND A CULTURAL TRADITION THAT HONORS 
                OUR AFRICAN AMERICAN ROOTS. AS A COMPTON, CALIFORNIA NATIVE WITH DEEP LOUISIANA AND TEXAS TIES, I 
                CELEBRATE THE RICH HERITAGE OF AFRICAN AMERICAN BRAIDING AS A WAY TO EMBRACE ARTISTRY, PROTECT 
                OUR HAIR, AND SIMPLIFY DAILY SELF-CARE.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="leading-relaxed">
                AS A LICENSED COSMETOLOGIST, I AM QUALIFIED TO OFFER SHAMPOO AND CONDITIONING TREATMENTS, 
                SCISSOR AND CLIPPER CUTS, HAIR COLOR, AND SCALP TREATMENTS—ALL DESIGNED TO ENHANCE YOUR HAIR 
                CARE EXPERIENCE. WHILE ALL HAIR TYPES AND LENGTHS ARE WELCOME, I SPECIALIZE IN WORKING WITH 
                TENDER-HEADED CLIENTS AND THOSE WITH LONG, THICK HAIR, ENSURING A GENTLE AND STRESS-FREE 
                SERVICE.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="leading-relaxed">
                MORE THAN ANYTHING, I AM COMMITTED TO FOSTERING A POSITIVE, SAFE, AND DRAMA-FREE SPACE WHERE 
                CLIENTS FEEL AT EASE, CARED FOR, AND UPLIFTED. I UNDERSTAND THE POWER OF MY POSITION—LITERALLY 
                STANDING OVER YOUR HEAD—AND I TAKE THAT RESPONSIBILITY SERIOUSLY. YOUR TIME IN MY CHAIR IS MORE 
                THAN JUST AN APPOINTMENT; IT'S A SPACE FOR RESTORATION, RELAXATION, AND EMPOWERMENT.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="leading-relaxed">
                AS A WIFE, MOTHER OF FOUR ADULT CHILDREN, AND GRANDMOTHER OF TWO, I UNDERSTAND THE IMPORTANCE OF SELF-CARE AND THE NEED TO POUR INTO 
                OURSELVES. DESPITE TODAY'S POLITICAL AND SOCIAL CLIMATE, I BELIEVE IN FOCUSING ON WHAT WE CAN CONTROL—OUR MENTAL, PHYSICAL, AND SPIRITUAL 
                GROWTH. WE ARE NOT DEFEATED, AND AT NLBL, I HOPE TO PROVIDE A SPACE WHERE YOU FEEL REJUVENATED, EMPOWERED, AND READY TO TAKE ON THE WORLD.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="leading-relaxed">
                AT NLBL, YOU'LL EXPERIENCE A SPACE DESIGNED FOR RELAXATION, PRODUCTIVITY, AND COMFORT—WHETHER YOU NEED A MOMENT TO UNWIND OR CONTINUE 
                WORKING WHILE BEING SERVICED. WITH 24/7 BOOKING OPTIONS, I STRIVE TO ACCOMMODATE YOUR SCHEDULE AND LIFESTYLE, ENSURING FLEXIBILITY WITHOUT 
                COMPROMISING THE QUALITY OF CARE.
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-xl font-bold text-primary">
                ✨ LET'S HONOR OUR ROOTS AND REDEFINE THE BRAIDING EXPERIENCE TOGETHER.
              </p>
            </div>
          </MotionDiv>
          
          {/* Portrait and Contact Info */}
          <div>
            <MotionDiv
              className="mb-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative max-w-md mx-auto">
                {/* Ornate Gold Frame */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* Portrait Image */}
                  <div className="absolute inset-[12%] z-10 overflow-hidden rounded-sm">
                    <Image
                      src="/stylist-portrait.jpg"
                      alt="Taliah Mason, Owner & Stylist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Gold Frame */}
                  <Image
                    src="/assets/gold-frame.png"
                    alt="Gold ornate frame"
                    fill
                    className="object-contain z-20"
                    priority
                  />
                  
                  {/* Name and Title */}
                  <div className="absolute bottom-[15%] right-[15%] bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/40 z-30">
                    <h3 className="text-xl font-bold text-primary">TALIAH MASON</h3>
                    <p className="text-white text-sm">OWNER & STYLIST</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
            
            {/* Contact Me */}
            <MotionDiv
              className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">CONTACT ME</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">SERVICE DAYS</p>
                    <p className="text-white font-medium">24/7</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LOCATION</p>
                    <p className="text-white font-medium">THE WOODLANDS/SPRING, TX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">PHONE</p>
                    <p className="text-white font-medium">346-459-0146 TEXT</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
} 