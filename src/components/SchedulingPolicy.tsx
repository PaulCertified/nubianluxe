'use client'

import { MotionDiv } from './motion/MotionDiv'
import { Clock, Coffee, Plus, DollarSign, Calendar, AlertTriangle, RefreshCw, CreditCard, Ruler } from 'lucide-react'
import Image from 'next/image'

interface PolicySectionProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

const PolicySection = ({ title, icon, children }: PolicySectionProps) => (
  <MotionDiv
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-primary/20 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="pl-12 text-gray-700 space-y-2">
      {children}
    </div>
  </MotionDiv>
)

export default function SchedulingPolicy() {
  return (
    <section className="relative">
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FDF5E6]/80" />
      
      <div className="relative px-4 py-20 max-w-7xl mx-auto">
        <MotionDiv
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SCHEDULING POLICY
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please review our scheduling policies to ensure a smooth and enjoyable experience
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {/* Left Column */}
          <div>
            <PolicySection 
              title="APPOINTMENTS" 
              icon={<Clock className="w-6 h-6 text-primary" />}
            >
              <p>24/7 APPOINTMENTS ARE AVAILABLE.</p>
            </PolicySection>

            <PolicySection 
              title="SNACKS, MEALS & BREAKS" 
              icon={<Coffee className="w-6 h-6 text-primary" />}
            >
              <p>SNACKS AND MEALS DAILY WITH ALL SERVICE TYPES. MEALS AND BREAKS ARE FOR SERVICES THAT ARE 6+ HOURS. DETAILS ARE AVAILABLE DURING YOUR BOOKING.</p>
            </PolicySection>

            <PolicySection 
              title="ADD-ONS" 
              icon={<Plus className="w-6 h-6 text-primary" />}
            >
              <p>PLEASE NOTE THERE ARE NO APPLICABLE ADD-ONS FOR YOUR DESIRED SERVICE.</p>
            </PolicySection>

            <PolicySection 
              title="DEPOSITS" 
              icon={<DollarSign className="w-6 h-6 text-primary" />}
            >
              <p>A $100 DEPOSIT IS DUE AT THE TIME OF BOOKING. THE DEPOSIT WILL BE SUBTRACTED FROM THE TOTAL SERVICE BALANCE.</p>
            </PolicySection>

            <PolicySection 
              title="BOOKING FEE" 
              icon={<Calendar className="w-6 h-6 text-primary" />}
            >
              <p>A NON-REFUNDABLE BOOKING FEE OF $25 FOR PREMIUM OR $50 FOR VIP IS REQUIRED TO SECURE YOUR APPOINTMENT AFTER BOOKING. YOU WILL RECEIVE AN EMAIL WITH PAYMENT INSTRUCTIONS. THIS BOOKING FEE MUST BE PAID WITHIN 2 HOURS OF BOOKING YOUR APPOINTMENT. IF NOT FULLY SECURED, THE BOOKING FEE WILL BE REQUIRED & THE FEE IS NOT APPLIED TO YOUR SERVICE. YOUR APPOINTMENT WILL BE AUTOMATICALLY CANCELLED. YOUR DEPOSIT WILL BE RETURNED MINUS A $25 ADMINISTRATIVE FEE. IF YOU WISH TO REBOOK, A NEW BOOKING AND BOOKING FEE WILL BE REQUIRED.</p>
              <p className="font-semibold">✨ TRADITIONAL APPOINTMENTS DO NOT REQUIRE A BOOKING FEE.</p>
            </PolicySection>

            <PolicySection 
              title="THE CLIENT IS RUNNING LATE" 
              icon={<AlertTriangle className="w-6 h-6 text-primary" />}
            >
              <p>IT IS UP TO THE CLIENT TO CONTACT THE STYLIST IF UNABLE TO BE PRESENT AT THE APPOINTMENT TIME. THE $100 DEPOSIT WILL CARRY UP TO 30 MINUTES BEFORE THE APPOINTMENT IS COMPLETELY CANCELLED. DEPOSIT IS USED AS A FEE FOR NO CALL/NO SHOW AND NON-REFUNDABLE.</p>
            </PolicySection>
          </div>

          {/* Right Column */}
          <div>
            <PolicySection 
              title="RESCHEDULING" 
              icon={<RefreshCw className="w-6 h-6 text-primary" />}
            >
              <p>ALL APPOINTMENTS SHOULD BE RESCHEDULED WITH A 48+ HOUR NOTICE. THE DEPOSIT & BOOKING FEE IS TRANSFERRABLE IF THE NEW APPOINTMENT IS DATED WITHIN 3 DAYS OF THE ORIGINAL APPOINTMENT DATE. ONE RESCHEDULE ALLOWED PER DEPOSIT.</p>
            </PolicySection>

            <PolicySection 
              title="REMAINING BALANCE PAYMENT" 
              icon={<CreditCard className="w-6 h-6 text-primary" />}
            >
              <p>TO ENSURE SATISFACTION, SCHEDULED CHECKPOINTS WILL BE INCLUDED THROUGHOUT THE INSTALLATION PROCESS. THESE CHECKPOINTS ALLOW THE CLIENT TO REVIEW THE PROGRESS AND PROVIDE APPROVAL FOR MOVING FORWARD. AS REQUESTED, ANY READJUSTMENTS WILL BE DISCUSSED AND AGREED UPON PRIOR TO THE START OF THE INSTALLATION.</p>
              <p>THE FINAL CHECKPOINT WILL OCCUR WHEN APPROXIMATELY 90% OF THE SERVICE IS COMPLETE. AT THIS POINT, THE SERVICE WILL HALT & YOU MUST PAY THE REMAINING BALANCE BEFORE PROCEEDING WITH COMPLETION.</p>
              <p>WE APPRECIATE YOUR UNDERSTANDING AND COOPERATION IN ADHERING TO THIS POLICY, WHICH HELPS MAINTAIN THE INTEGRITY AND FAIRNESS OF OUR INTENSIVE WORK. BALANCE MUST BE PAID BEFORE COMPLETE. VENMO OR APPLYPAY, NO CASH.</p>
            </PolicySection>

            <PolicySection 
              title="HAIR LENGTH CHART" 
              icon={<Ruler className="w-6 h-6 text-primary" />}
            >
              <p>ABOUT 2 INCHES OF NATURAL HAIR IS NEEDED FOR STYLES. A SMALL TO MEDIUM SHORT HAIR AND MUST NEED TO BE LONGER.</p>
              
              <div className="h-[350px] relative w-full">
                <Image
                  src="/hair-length-chart.svg"
                  alt="Hair Length Chart"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <p className="mt-4 text-sm text-gray-600 italic">
                * ADDITIONAL CHARGES MAY APPLY FOR HAIR LENGTH EXCEEDING HIP LENGTH. PLEASE INQUIRE FOR CUSTOM PRICING.
              </p>
            </PolicySection>
          </div>
        </div>
      </div>
    </section>
  )
} 