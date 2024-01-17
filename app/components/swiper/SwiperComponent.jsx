'use client'
import React, { useState, useEffect } from 'react';
import './swiper-comp.css';

const SwiperComponent = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(autoplayInterval); // Limpia el intervalo al desmontar el componente
    };
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.link}
          alt={image.name}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            display: index === currentSlide ? 'block' : 'none', // Muestra solo la imagen activa
            transition: 'opacity 1s ease',
          }}
        />
      ))}
    </div>
  );
};

export default SwiperComponent;


