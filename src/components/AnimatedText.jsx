import React, { useState, useEffect } from "react";


const AnimatedText = () => {
  const texts = ["Have You Eaten?", "You Dong Chop?", "As-Tu Mangé?"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-container">
      <h1 key={currentTextIndex} className="animated-text">
        {texts[currentTextIndex]}
      </h1>
    </div>
  );
};

export default AnimatedText;
