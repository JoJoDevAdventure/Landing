import React from 'react'
import CustomPopup from './components/CustomPopup'
import './index.css'
import Contact from './sections/Contact'
import Faq from './sections/Faq'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <CustomPopup />
      <Header/>
      <Hero/>
      <Features/>
      {/* <Pricing/> */}
      <Faq/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App