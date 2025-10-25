'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AccessoryCardProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ id, imageUrl, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-zinc-950 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <Image 
            src={imageUrl} 
            alt={name} 
            fill 
            className={`object-contain transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            <Link 
              href={`/accessories/${id}`}
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-light tracking-wide hover:bg-white/20 transition-all duration-300"
            >
              Détails
            </Link>
            <button className="px-6 py-3 bg-amber-400 rounded-full text-black text-sm font-medium tracking-wide hover:bg-amber-300 transition-all duration-300">
              Ajouter
            </button>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
          <span className="text-amber-400 font-light text-lg tracking-wide">${price.toLocaleString()}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-light text-white tracking-wide mb-3 group-hover:text-amber-400 transition-colors duration-300">
          {name}
        </h3>
        
        <div className="flex items-center justify-center gap-2 text-sm">
          <div className="w-1 h-1 rounded-full bg-amber-400"></div>
          <span className="text-white/60 font-light">En stock</span>
        </div>

        {/* Bottom Accent */}
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default AccessoryCard;
