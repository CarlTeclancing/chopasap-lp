import React from 'react'
import {  Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        
            <div className="container">
            <div className="footer">
                <div className="col-3">

                <h4>Company</h4>
                  
                    <a className='nav-ell' href="/about">About Us</a>
                    <a className='nav-ell' href="/blog">Blog</a>
                    <a className='nav-ell' href="/careeres">Carrers</a>
                    <a className='nav-ell' href="https://www.crestlancing.com/partners" target='blank'>Partners</a>

                
                </div>
                <div className="col-3">
                <h4>Support</h4>

                
                    <a href='/contact' className='nav-ell'>Contact Us</a>
                    <a href='/faqs' className='nav-ell'>Help Center</a>
                    <a href='/terms' className='nav-ell'>Terms of Service</a>
                    <a href='/privacy-policy' className='nav-ell'>Privacy Policy</a>
                
                </div>
                <div className="col-3">
                <h4>Get the App</h4>
                
                    <a href='#' className='nav-ell'>Download on the App Store</a>
                    <a href='#' className='nav-ell'>Get it on Google Play</a>
                
                </div>
                <div className="col-3">
                <h4>Follow Us</h4>
                
                    <a href='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>Facebook</a>
                    <a href='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>Twitter</a>
                    <a href='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>Instagram</a>
                    <a href='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>LinkedIn</a>
                
                </div>
            </div>
                <span className='copyright'> &#169;Crestlancing.com Chop Asap 2024</span>
            </div>
    </div>
  )
}