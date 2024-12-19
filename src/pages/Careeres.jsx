import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FAQ from '../components/Faq'
import cardImg from '../assets/cardImg.png'
import CardComponent from '../components/CardComponent'
import ScrollToTop from '../ScrollToTop'

export default function Careeres() {
  return (
    <div>
        <Navigation />
        <ScrollToTop />
        <h1>Join Chop ASAP</h1>
        <div className="row-narrow">

        <div className="card">
          <img src={cardImg} alt="" />
          <h4>Become a Chop ASAP Brand Ambassado</h4>
          <p className='p-t-4'>Are you an influential, high-flying student with a passion for comfort, ease, and strategic problem-solving? You’re the ...</p>
          <button className="btn-100">Read More</button>
        </div>

        <div className="card">
          <img src={cardImg} alt="" />
          <h4>Do Deveries with chop ASAP</h4>
          <p className='p-t-4'>Are you an influential, high-flying student with a passion for comfort, ease, and strategic problem-solving? You’re the ...</p>
          <button className="btn-100">Read More</button>
        </div>

        <div className="card">
          <img src={cardImg} alt="" />
          <h4>Add Your Resturant to Chop ASAP</h4>
          <p className='p-t-4'>Are you an influential, high-flying student with a passion for comfort, ease, and strategic problem-solving? You’re the ...</p>
          <button className="btn-100">Read More</button>
        </div>
      </div>
      //passing props to the card component 
      <CardComponent 
        image={cardImg} 
        title="hello test " 
        content="test content"
       />
      <FAQ />


        <Footer />
    </div>
  )
}
