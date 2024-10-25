import React from 'react'
import  logo  from '../assets/logo.svg'
import {  Link } from 'react-router-dom';
import Relay from '../pages/Services';


export default function Navigation() {
  return (
    <div className='navigation'>
        <img src={logo} alt="logo" className='logo'/>
        <div className="nav-el">
            
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/faqs">FAQs</Link>
                <Link to="/blog">Blog</Link> 
            
        </div>
        <button className="btn-border">Contact </button>
    </div>
  )
}
