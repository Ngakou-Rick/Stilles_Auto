'use client';

import React, { useState } from 'react';
import ReviewList, { Review } from './ReviewList';
import ReviewForm from './ReviewForm';

interface ReviewsSectionProps {
  initialReviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ initialReviews }) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const handleAddReview = (review: Omit<Review, 'id'>) => {
    const newReview = {
      ...review,
      id: reviews.length + 1, // simple id generation
    };
    setReviews([newReview, ...reviews]);
  };

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <div className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extralight text-white mb-4 tracking-tight">
          Avis <span className="text-amber-400">Clients</span>
        </h2>
        {reviews.length > 0 && (
          <div className="flex items-center justify-center gap-4">
            <div className="text-5xl font-light text-amber-400">{averageRating}</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`text-xl ${star <= Math.round(parseFloat(averageRating)) ? 'text-amber-400' : 'text-white/10'}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/60 font-light">{reviews.length} avis</p>
            </div>
          </div>
        )}
        <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>

      {/* Reviews List */}
      <ReviewList reviews={reviews} />
      
      {/* Review Form */}
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default ReviewsSection;
