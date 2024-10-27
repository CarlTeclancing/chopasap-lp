import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function BlogPost() {
  const location = useLocation();
  const { item } = location.state || {}; // Destructure item from state

  if (!item) return <p>No blog post data found.</p>; // Handle missing data gracefully

  return (
    <div>
      <Navigation />
      <h1>{item.title}</h1>
      <img className='img-fluid' src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <Footer />
    </div>
  );
}
