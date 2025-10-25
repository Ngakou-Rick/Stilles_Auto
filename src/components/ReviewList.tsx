'use client';

import React from 'react';
import StarRating from './StarRating';

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-400/10 flex items-center justify-center">
          <span className="text-3xl">💬</span>
        </div>
        <p className="text-white/60 font-light">Aucun avis pour le moment. Soyez le premier à laisser un avis !</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map(review => (
        <div key={review.id} className="p-6 bg-zinc-950 rounded-2xl border border-white/5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-light text-white mb-2">{review.name}</h4>
              <StarRating rating={review.rating} />
            </div>
            <span className="text-xs text-white/40 font-light">Il y a 2 jours</span>
          </div>
          <p className="text-white/70 font-light leading-relaxed">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
