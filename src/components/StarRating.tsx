import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`text-xl ${i <= rating ? 'text-amber-400' : 'text-white/10'}`}>
        ★
      </span>
    );
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

export default StarRating;
