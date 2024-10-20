import CategorySection from '@/components/product/Category'
import HeroSection from '@/components/product/Hero'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Header/> 
        <CategorySection/>
        <Footer/>
    </div>
  )
}

export default page
