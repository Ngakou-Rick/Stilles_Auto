import React from 'react';
import Image from 'next/image';

const BuyDetailsPage = ({ params }: { params: { id: string } }) => {
  // In a real application, you would fetch this data based on the params.id
  const car = {
    id: params.id,
    name: 'Ferrari 458 Italia',
    price: '$245,000',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
    description: 'The Ferrari 458 Italia is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari. The 458 is powered by a 4.5 L naturally aspirated V8 engine, and it was the first Ferrari road car to feature direct fuel injection.',
    details: {
      year: 2015,
      make: 'Ferrari',
      model: '458 Italia',
      type: 'Coupe',
      transmission: 'Automatic',
      fuel: 'Gasoline',
    },
    reviews: [
      {
        author: 'Michael B.',
        rating: 5,
        comment: 'An absolute masterpiece of engineering. The sound, the speed, the handling... simply breathtaking.',
      },
      {
        author: 'Sarah L.',
        rating: 5,
        comment: 'I have driven many sports cars, but this one is in a league of its own. A true work of art.',
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 text-primary-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src={car.image}
            alt={car.name}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold font-serif mb-4">{car.name}</h1>
          <p className="text-3xl text-accent-gold font-bold mb-6">{car.price}</p>
          <p className="text-lg mb-6">{car.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6 text-lg">
            <p><strong>Year:</strong> {car.details.year}</p>
            <p><strong>Make:</strong> {car.details.make}</p>
            <p><strong>Model:</strong> {car.details.model}</p>
            <p><strong>Type:</strong> {car.details.type}</p>
            <p><strong>Transmission:</strong> {car.details.transmission}</p>
            <p><strong>Fuel:</strong> {car.details.fuel}</p>
          </div>
          <button className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-3 px-8 rounded w-full transition-colors text-xl">
            Purchase Now
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold font-serif mb-8">Reviews</h2>
        <div className="space-y-6">
          {car.reviews.map((review, index) => (
            <div key={index} className="bg-primary-dark-soft p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <p className="font-bold text-xl mr-4">{review.author}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-accent-gold' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold font-serif mb-8">Leave a Review</h2>
        <form className="bg-primary-dark-soft p-8 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">Your Name</label>
            <input type="text" id="name" className="w-full p-2 rounded bg-primary-dark border border-accent-silver" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">Rating</label>
            {/* Simple star rating - can be made interactive with state */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-gray-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-lg font-bold mb-2">Comment</label>
            <textarea id="comment" rows={4} className="w-full p-2 rounded bg-primary-dark border border-accent-silver"></textarea>
          </div>
          <button type="submit" className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-3 px-8 rounded transition-colors text-xl">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyDetailsPage;
