import Categories from '@/components/home/Categories'
import BannerComponent from '@/components/home/Hero'
import Header from '@/components/shared/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <BannerComponent/>
      <Categories/>
    </div>
  )
}
