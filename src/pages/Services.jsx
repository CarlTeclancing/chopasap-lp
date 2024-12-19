import React from 'react'
import Navigation from '../components/Navigation'
import FAQ from '../components/Faq'
import cardImg from '../assets/cardImg.png'
import Footer from '../components/Footer';
import heroImg from '../assets/heroImage.png'
import ScrollToTop from '../ScrollToTop'

export default function Services() {
  return (

    <div>
      <Navigation />
      <ScrollToTop />
      <div className="container">
          <h1>Our Services</h1>
          <div className='narrow'>
                    <p className='para-1'>Order meals and have them delivered to you within minutes from a wide
    variety of restaurants ranging from African to Continental
    cuisines to satisfy your cravings.</p>
    
          </div>
          <img src={heroImg} className='img' alt="" />
      </div>
      <div className="row-narrow">

        <div className="card">
          <img src={cardImg} alt="" />
          <h4>Become a Chop ASAP Brand Ambassado</h4>
          <p className='p-t-4'>Are you an influential, high-flying student with a passion for comfort, ease, and strategic problem-solving? You’re the ...</p>
          <button className="btn-100">Read More</button>
        </div>

        <div className="card">
          <img src={cardImg} alt="" />
          <h4>Become a Chop ASAP Brand Ambassado</h4>
          <p className='p-t-4'>Are you an influential, high-flying student with a passion for comfort, ease, and strategic problem-solving? You’re the ...</p>
          <button className="btn-100">Read More</button>
        </div>

        <div className="card">
          <img src={cardImg} alt="" />
          <h4>Become a Chop ASAP Brand Ambassado</h4>
          <p className='p-t-4'>Are you an influential, high-flying student with a passion for comfort, ease, and strategic problem-solving? You’re the ...</p>
          <button className="btn-100">Read More</button>
        </div>
      </div>

      <FAQ />
      <Footer />

    </div>
    
    
  )
}
