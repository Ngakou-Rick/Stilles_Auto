'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/cars/car1.jpg',
    title: 'L\'Excellence',
    subtitle: 'Automobile',
    description: 'Découvrez notre collection de véhicules d\'exception',
  },
  {
    image: '/cars/car2.jpg',
    title: 'Performance',
    subtitle: 'Inégalée',
    description: 'Vivez l\'expérience de la conduite ultime',
  },
  {
    image: '/cars/car3.jpg',
    title: 'Luxe',
    subtitle: 'Raffiné',
    description: 'Où l\'élégance rencontre la puissance',
  },
  {
    image: '/cars/car4.jpg',
    title: 'Innovation',
    subtitle: 'Audacieuse',
    description: 'Redéfinissez vos attentes',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Title */}
            <div className="overflow-hidden mb-4">
              <h1 
                className={`text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white transition-all duration-700 ${
                  isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {slides[currentSlide].title}
              </h1>
            </div>
            
            <div className="overflow-hidden mb-8">
              <h2 
                className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-widest text-amber-400 transition-all duration-700 delay-100 ${
                  isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            <div className="overflow-hidden mb-12">
              <p 
                className={`text-lg md:text-xl lg:text-2xl font-light text-white/80 tracking-wide transition-all duration-700 delay-200 ${
                  isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-300 ${
                isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <Link 
                href="/sale"
                className="group relative px-10 py-4 overflow-hidden rounded-full"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-110"></span>
                <span className="relative z-10 text-black font-medium tracking-wider text-lg">Explorer la Collection</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-2xl"></span>
              </Link>
              
              <Link 
                href="/contact"
                className="group relative px-10 py-4 rounded-full border-2 border-white/30 backdrop-blur-sm hover:border-white/60 transition-all duration-300"
              >
                <span className="text-white font-light tracking-wider text-lg">Nous Contacter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
          >
            <div className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-16 bg-gradient-to-r from-amber-400 to-amber-300' 
                : 'w-8 bg-white/30 group-hover:bg-white/50'
            }`}></div>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
