import React, { useState, useEffect } from 'react';
import './LandingImage.css';

const LandingImages = () => {
  const slides = [
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/10/can-web-cover-01.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/03/poker-development-cantechnologies5.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/03/hrm-cantechnologies-01.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/03/erp-cantechnologies-01-01.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/03/vms-cantechnologies1-01.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <div className='relative landing w-screen'>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${slide.url})`,
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.9s ease', // Add transition property
              }}
              className='h-full bg-cover bg-no-repeat bg-center absolute w-full'
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingImages;
