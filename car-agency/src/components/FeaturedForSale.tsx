import React from 'react';
import Image from 'next/image';

const FeaturedForSale = () => {
  const cars = [
    {
      name: 'Ferrari 458 Italia',
      price: '$245,000',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
    },
    {
      name: 'Lamborghini Huracan',
      price: '$215,000',
      image: 'https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f',
    },
    {
      name: 'Porsche 911 GT3',
      price: '$185,000',
      image: 'https://images.unsplash.com/photo-1617814086906-d847a8bc6fca',
    },
  ];

  return (
    <div className="py-16 bg-primary-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-primary-light">Featured Cars for Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-primary-dark-soft rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-primary-light">{car.name}</h3>
                <p className="text-accent-gold text-xl font-bold mb-4">{car.price}</p>
                <button className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-2 px-4 rounded w-full transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedForSale;
