'use client';

import React, { useState } from 'react';
import { Review } from './ReviewList';

interface ReviewFormProps {
  onSubmit: (review: Omit<Review, 'id'>) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, rating, comment });
    setName('');
    setRating(5);
    setComment('');
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Laissez votre avis</h3>
      <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-zinc-950 rounded-2xl border border-white/5">
        <div>
          <label htmlFor="name" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Votre nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Note</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value, 10))}
            required
            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400/50 transition-all duration-300"
          >
            <option value={5}>5 étoiles - Excellent</option>
            <option value={4}>4 étoiles - Très bien</option>
            <option value={3}>3 étoiles - Bien</option>
            <option value={2}>2 étoiles - Moyen</option>
            <option value={1}>1 étoile - Décevant</option>
          </select>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Votre avis</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={5}
            required
            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300 resize-none"
            placeholder="Partagez votre expérience..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="group relative w-full py-4 overflow-hidden rounded-full"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-110"></span>
          <span className="relative z-10 text-black font-medium tracking-wider">Publier l'avis</span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-2xl"></span>
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
