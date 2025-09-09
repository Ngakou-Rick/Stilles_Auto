import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedForRent = () => {
  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: '$350/day',
      image: 'https://images.unsplash.com/photo-1599912027667-755b68b4dd3b',
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      price: '$320/day',
      image: 'https://images.unsplash.com/photo-1638475408149-022148cf76fd',
    },
    {
      id: 3,
      name: 'Audi A8',
      price: '$330/day',
      image: 'https://images.unsplash.com/photo-1502014335594-c026800f24ee',
    },
  ];

  return (
    <div className="py-16 bg-primary-dark-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-primary-light">Featured Cars for Rent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-primary-dark rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="relative w-full h-64">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-primary-light flex-grow">{car.name}</h3>
                <p className="text-accent-gold text-xl font-bold mb-4">{car.price}</p>
                <div className="flex space-x-4 mt-auto">
                  <Link href={`/rent/${car.id}`} className="bg-accent-silver hover:bg-opacity-80 text-primary-dark font-bold py-2 px-4 rounded w-full text-center transition-colors">
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

export default FeaturedForRent;
