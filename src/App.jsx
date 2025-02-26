import { useState } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer';

import './App.css';
import './media.css';
import './admin.css'
import Hero from './components/Hero';

function App() {
  

  return (
    <div>
      <Navigation />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
