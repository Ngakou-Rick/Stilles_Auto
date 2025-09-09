import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedAccessories = () => {
  const accessories = [
    {
      id: 1,
      name: 'Custom Steering Wheel',
      price: '$450',
      image: 'https://images.unsplash.com/photo-1627913434632-b4717be3485a',
    },
    {
      id: 2,
      name: 'Luxury Car Mats',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1557245526-45dc0f1a8745',
    },
    {
      id: 3,
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
          {accessories.map((accessory) => (
            <div key={accessory.id} className="bg-primary-dark rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="relative w-full h-64">
                <Image
                  src={accessory.image}
                  alt={accessory.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-primary-light flex-grow">{accessory.name}</h3>
                <p className="text-accent-gold text-xl font-bold mb-4">{accessory.price}</p>
                <div className="flex space-x-4 mt-auto">
                  <Link href={`/accessories/${accessory.id}`} className="bg-accent-silver hover:bg-opacity-80 text-primary-dark font-bold py-2 px-4 rounded w-full text-center transition-colors">
                    Info
                  </Link>
                  <button className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-2 px-4 rounded w-full transition-colors">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAccessories;
