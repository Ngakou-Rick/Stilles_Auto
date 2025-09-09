import React from 'react';
import Image from 'next/image';

const AccessoryDetailsPage = ({ params }: { params: { id: string } }) => {
  // In a real application, you would fetch this data based on the params.id
  const accessory = {
    id: params.id,
    name: 'Custom Steering Wheel',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1627913434632-b4717be3485a',
    description: 'Upgrade your driving experience with this premium custom steering wheel. Made from the finest materials, it provides a comfortable grip and a stylish look.',
    details: {
      material: 'Carbon Fiber and Alcantara',
      compatibility: 'Universal fit for most vehicles',
    },
    reviews: [
      {
        author: 'Chris P.',
        rating: 5,
        comment: 'This steering wheel feels amazing! It completely changed the look and feel of my car\'s interior.',
      },
      {
        author: 'Amanda G.',
        rating: 4,
        comment: 'Great quality, but the installation was a bit tricky. I had to get a professional to help me.',
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 text-primary-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src={accessory.image}
            alt={accessory.name}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold font-serif mb-4">{accessory.name}</h1>
          <p className="text-3xl text-accent-gold font-bold mb-6">{accessory.price}</p>
          <p className="text-lg mb-6">{accessory.description}</p>
          <div className="grid grid-cols-1 gap-4 mb-6 text-lg">
            <p><strong>Material:</strong> {accessory.details.material}</p>
            <p><strong>Compatibility:</strong> {accessory.details.compatibility}</p>
          </div>
          <button className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-3 px-8 rounded w-full transition-colors text-xl">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold font-serif mb-8">Reviews</h2>
        <div className="space-y-6">
          {accessory.reviews.map((review, index) => (
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

export default AccessoryDetailsPage;
