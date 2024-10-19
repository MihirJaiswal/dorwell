import BentoGridDemo from '@/components/home/Bento'
import ContactSection from '@/components/home/Contact'
import BannerComponent from '@/components/home/Hero'
import { Process } from '@/components/home/Process'
import ServicesSection from '@/components/home/Service'
import Testimonials from '@/components/home/Testimonials'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Navbar'

export default function page() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <BannerComponent/>
      <BentoGridDemo/>
      <Process/>
      <ServicesSection/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
