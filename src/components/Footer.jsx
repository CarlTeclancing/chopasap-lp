import React from 'react'
import {  Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        
            <div className="container">
            <div className="footer">
                <div className="col-3">

                <h4>Company</h4>
                  
                    <Link className='nav-ell' to="/contact">About Us</Link>
                    <Link className='nav-ell' to="/blog">Blog</Link>
                    <Link className='nav-ell' to="/careeres">Carrers</Link>
                    <Link className='nav-ell' to="https://www.crestlancing.com/partners" target='blank'>Partners</Link>

                
                </div>
                <div className="col-3">
                <h4>Support</h4>

                
                    <Link to='/contact' className='nav-ell'>Contact Us</Link>
                    <Link to='/faqs' className='nav-ell'>Help Center</Link>
                    <Link to='/terms' className='nav-ell'>Terms of Service</Link>
                    <Link to='/privacy-policy' className='nav-ell'>Privacy Policy</Link>
                
                </div>
                <div className="col-3">
                <h4>Get the App</h4>
                
                    <Link to='#' className='nav-ell'>Download on the App Store</Link>
                    <Link to='#' className='nav-ell'>Get it on Google Play</Link>
                
                </div>
                <div className="col-3">
                <h4>Follow Us</h4>
                
                    <Link to='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>Facebook</Link>
                    <Link to='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>Twitter</Link>
                    <Link to='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>Instagram</Link>
                    <Link to='https://www.instagram.com/chop_asap?igsh=MnhzZTZpaDRodjgz' target='blank' className='nav-ell'>LinkedIn</Link>
                
                </div>
            </div>
                <span className='copyright'> &#169;Crestlancing.com Chop Asap 2024</span>
            </div>
    </div>
  )
}