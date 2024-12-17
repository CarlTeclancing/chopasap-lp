import React from 'react'
import Navigation from '../components/Navigation'
import FAQ from '../components/Faq'
import Footer from '../components/Footer';
import ScrollToTop from '../ScrollToTop'

export default function Faqs() {
  return (
    <div>
        <Navigation />
        <ScrollToTop />
        <h1>Frequently Asked Questions</h1>
        <FAQ />
        <Footer />
    </div>
  )
}
