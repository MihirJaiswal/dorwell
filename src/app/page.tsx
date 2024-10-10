import { BentoGridSecondDemo } from '@/components/home/Bento'
import Categories from '@/components/home/Categories'
import ContactSection from '@/components/home/Contactus'
import BannerComponent from '@/components/home/Hero'
import CraftsmanshipShowcase from '@/components/home/Process'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <BannerComponent/>
      <BentoGridSecondDemo/>
      <CraftsmanshipShowcase/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
