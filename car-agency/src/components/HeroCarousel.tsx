'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import '@/styles/carousel.css';

const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5',
      alt: 'Luxury black car',
      slogan: 'Experience Unmatched Luxury and Performance',
      text: 'Find the car of your dreams, available for rent or purchase.',
    },
    {
      src: 'https://images.unsplash.com/photo-1601929862217-f1bf94503333',
      alt: 'Modern sports car',
      slogan: 'Elegance in Motion, Power at Your Command',
      text: 'Discover our exclusive collection of high-end vehicles.',
    },
    {
      src: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b',
      alt: 'Red sports car',
      slogan: 'Dare to Drive the Extraordinary',
      text: 'Your journey to excellence begins here.',
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <Image
              className="embla__slide__img"
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              priority={index === 0}
            />
            <div className="embla__slide__content z-20 p-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-serif text-white">{slide.slogan}</h2>
              <p className="text-lg sm:text-xl font-sans text-gray-200">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
