import React from 'react';
import Image from 'next/image';

const FeaturedAccessories = () => {
  const accessories = [
    {
      name: 'Custom Steering Wheel',
      price: '$450',
      image: 'https://images.unsplash.com/photo-1627913434632-b4717be3485a',
    },
    {
      name: 'Luxury Car Mats',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1557245526-45dc0f1a8745',
    },
    {
      name: 'Alloy Wheels',
      price: '$1,200',
      image: 'https://images.unsplash.com/photo-1610477283234-ca97a18156c2',
    },
  ];

  return (
    <div className="py-16 bg-primary-dark-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-primary-light">Popular Accessories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessories.map((accessory, index) => (
            <div key={index} className="bg-primary-dark rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src={accessory.image}
                alt={accessory.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-primary-light">{accessory.name}</h3>
                <p className="text-accent-gold text-xl font-bold mb-4">{accessory.price}</p>
                <button className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-2 px-4 rounded w-full transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAccessories;
