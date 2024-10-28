import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa'; // Importing the gear icon

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  const faqs = [
    { question: 'What is Chop ASAP?', 
      answer: 'Chop ASAP is a technology product of a company Crestlancing Ltd that provides a platform for vendors and consumers. This allows food vendors to deliver meals seamlessly while providing consumers with an easy platform to order meals from their favourite restaurants in their city.' },
    { question: 
      'What is Chop ASAP wallet?', 
      answer: 'Chop ASAP wallet is a digital wallet that allows users to store funds for easy payment of meals.' },
    { question: 
      'What is Chop Points?', 
      answer: 'Chop Points are loyalty rewards that users can earn when they make purchases on the Chop ASAP platform.' },
    { question: 
      'What is Service fee?', 
      answer: 'A service fee is a small charge applied for the use of the platform’s services to facilitate transactions between vendors and customers.' },
    { question: 
      'Why do we charge Service fee?', 
      answer: 'The service fee helps cover operational costs, ensuring the smooth running of the platform.' },
    { question: 
      'Why do we charge surge fee?', 
      answer: 'A surge fee is charged during peak hours to compensate vendors and delivery drivers for the high demand.' },
    { question: 
      'How do I create an account on Chop ASAP?', 
      answer: 'You can create an account by signing up on the app with your email or phone number.' }
  ];

  return (
        
            <div className="faq-container">
        
            <h1 className="faq-header">FAQs.</h1>
            <div className="faq-content">
                <div className="faq-questions">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeQuestion === index ? 'active' : ''}`}>
                    <div className="faq-question" onClick={() => toggleQuestion(index)}>
                        {faq.question} <FaCog className="icon" />
                    </div>
                    {activeQuestion === index && (
                        <div className="faq-answer">
                        {faq.answer}
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
       

    </div>
  );
};

export default FAQ;
