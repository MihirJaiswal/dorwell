import Gallery from '@/components/gallery/Gallery'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Gallery/>
      <Footer/>
    </div>
  )
}
