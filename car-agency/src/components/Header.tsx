'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-dark text-primary-light p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold font-serif text-accent-gold">
          Prestige Wheels
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-accent-gold transition-colors">Home</Link>
          <Link href="/rent" className="hover:text-accent-gold transition-colors">Rent</Link>
          <Link href="/buy" className="hover:text-accent-gold transition-colors">Buy</Link>
          <Link href="/accessories" className="hover:text-accent-gold transition-colors">Accessories</Link>
          <Link href="/contact" className="hover:text-accent-gold transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="hover:text-accent-gold transition-colors">Login</Link>
          <Link href="/register" className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-2 px-4 rounded transition-colors">
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary-light focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-accent-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/rent" className="hover:text-accent-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Rent</Link>
            <Link href="/buy" className="hover:text-accent-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Buy</Link>
            <Link href="/accessories" className="hover:text-accent-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
            <Link href="/contact" className="hover:text-accent-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="/login" className="hover:text-accent-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link href="/register" className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-2 px-4 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
