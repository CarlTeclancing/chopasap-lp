import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function errorElement() {
  return (
    <div>
        <Navigation />
            <h1>404 page not found</h1>
        <Footer />
    </div>
  )
}
