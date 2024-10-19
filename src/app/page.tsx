import BentoGridSecondDemo  from '@/components/home/Bento'
import ContactSection from '@/components/home/Contact'
import BannerComponent from '@/components/home/Hero'
import { Process } from '@/components/home/Process'
import ServicesSection from '@/components/home/Service'
import Testimonials from '@/components/home/Testimonials'
import Sponsors from '@/components/home/Testimonials'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Navbar'
import { Contact } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <BannerComponent/>
      <BentoGridSecondDemo/>
      <Process/>
      <ServicesSection/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
