import React from 'react';
import Navigation from '../components/Navigation';
import cardImg from '../assets/cardImg.png';
import FAQ from '../components/Faq';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop'

export default function Blog() {
  const items = [
    {
      key: 1,
      image: cardImg,
      title: "Beautiful Sunset",
      description: "A breathtaking view of the sunset over the mountains."
    },
    {
      key: 2,
      image: cardImg,
      title: "Ocean Waves",
      description: "Relaxing ocean waves crashing against the shore."
    },
    {
      key: 3,
      image: cardImg,
      title: "City Skyline",
      description: "A stunning skyline view of the city at night."
    }
  ];

  return (
    <div>
      <Navigation />
      <ScrollToTop />
      <h1>Chop Asap Blog</h1>
      <div className="row-narrow">
        {items.map((item) => (
          <div className="card" key={item.key}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p className='p-t-4'>{item.description}</p>
            <Link to="/blogpost" state={{ item }} className="btn-100">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
