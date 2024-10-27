import React from 'react'
import  logo  from '../assets/logo.svg'
import {  Link } from 'react-router-dom';
import Relay from '../pages/Services';
import chopasapLogo from '../assets/chopasapLogo.png';



export default function Navigation() {
  
  return (
    <div className='nav-container'>
      <div className='navigation'>
          <img src={logo} alt="logo" className='logo'/>
          <div className="nav-el">
              
                  <Link to="/home">Home</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/faqs">FAQs</Link>
                  <Link to="/blog">Blog</Link> 
              
          </div>
          
            <Link className="btn-border" to="/contact">Contact</Link>
          
      </div>    
          <div className='mobile-nav'>
            <img src={chopasapLogo} alt="logo-mobile" className='logo-mobile'/>
            <i class="bi bi-list"></i>
          </div>
      
    </div>

  )
}
