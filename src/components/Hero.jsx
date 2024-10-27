import React from 'react'
import playstoreLogo from '../assets/playstorelogo.png'
import appleLogo from '../assets/appleLogo.png'
import heroImage from '../assets/heroImage.png'
import imgNotification from '../assets/imgNotification.png'
import textHightlite from '../assets/textHightlite.png'
import heroimg2 from '../assets/heroimg2.png'
import FAQ from './Faq'


export default function Hero() {
  return (
    <div className='container pt-14'>
        <h1>Have You Eaten?</h1>
        <div className="btn-container">
            <button className='btn'>
                <img src={playstoreLogo} alt="" />
                Download on Google Play
            </button>

            <button className='btn'>
                <img src={appleLogo} alt="" />
                Download on App Store
            </button>
        </div>
        <div className="container">
            <div>
                <span className='active'>Customer</span>
                <span className=''>Vendors</span>
            </div>
            <h2>Download ChopAsap Now</h2>
            <div className='narrow'>
                <p className='para-1'>Order meals and have them delivered to you within minutes from a wide
variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</p>
</div>
<img src={heroImage} alt="hero image" className='img-hero' />
            
        </div>
        <div className="flex-row">
            <div className="row">
                <img src={imgNotification} className='img-full' alt="" />
            </div>
            <div className="row">
                <img src={textHightlite} className='img-full' alt="" />
            </div>
        </div>

        <div className="flex-row">
            <div className="row">
                
                <h2 className='stroked-text'>Do</h2>
                <h2 className='stroked-text'>You</h2>
                <h2 className='stroked-text'>Own A</h2>
                <h2 className='stroked-text'>Restaurant ?</h2>
                <div className="btn-container">
                    <button className='btn'>
                        <img src={playstoreLogo} alt="" />
                        Download on Google Play
                    </button>

                    <button className='btn'>
                        <img src={appleLogo} alt="" />
                        Download on App Store
                    </button>
                </div>
            </div>
            <div className="row">
                <img src={heroimg2} className='img-full' alt="" />
            </div>
        </div>
    <FAQ />
    </div>
  )
}
