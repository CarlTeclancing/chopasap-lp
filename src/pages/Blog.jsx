import React from 'react'
import Navigation from '../components/Navigation'
import cardImg from '../assets/cardImg.png'
import FAQ from '../components/Faq';
import Footer from '../components/Footer';

export default function Blog() {

    const items = [
        {
          image: cardImg,
          title: "Beautiful Sunset",
          description: "A breathtaking view of the sunset over the mountains."
        },
        {
          image: cardImg,
          title: "Ocean Waves",
          description: "Relaxing ocean waves crashing against the shore."
        },
        {
          image: cardImg,
          title: "City Skyline",
          description: "A stunning skyline view of the city at night."
        },
        {
            image: cardImg,
            title: "Beautiful Sunset",
            description: "A breathtaking view of the sunset over the mountains."
          },
          {
            image: cardImg,
            title: "Ocean Waves",
            description: "Relaxing ocean waves crashing against the shore."
          },
          {
            image: cardImg,
            title: "City Skyline",
            description: "A stunning skyline view of the city at night."
          }
      ];
      
      return (
        <div>
            <Navigation />
            <h1>Chop Asap Blog</h1>
            <div className="row-narrow">
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p className='p-t-4'>{item.description}</p>
                        <button className="btn">Read More</button>
                    </div>
                ))}
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}