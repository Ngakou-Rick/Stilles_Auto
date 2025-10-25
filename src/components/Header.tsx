'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl' : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src="/logo/Stilles_logo.jpg" 
                alt="Stilles Auto" 
                width={140} 
                height={60}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/rent', label: 'Location' },
              { href: '/sale', label: 'Vente' },
              { href: '/accessories', label: 'Accessoires' },
              { href: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="relative px-5 py-2 text-sm font-light tracking-wider text-white/90 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-full transition-all duration-500"></span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/signin" 
              className="px-6 py-2.5 text-sm font-light tracking-wide text-white/90 hover:text-white transition-all duration-300 relative group"
            >
              <span className="relative z-10">Connexion</span>
              <span className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/40 transition-all duration-300"></span>
            </Link>
            <Link 
              href="/signup" 
              className="relative px-6 py-2.5 text-sm font-medium tracking-wide text-black overflow-hidden group rounded-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-110"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Inscription</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-xl"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none group"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-2xl transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {[
            { href: '/', label: 'Accueil' },
            { href: '/rent', label: 'Location' },
            { href: '/sale', label: 'Vente' },
            { href: '/accessories', label: 'Accessoires' },
            { href: '/contact', label: 'Contact' }
          ].map((link, index) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-light text-white/80 hover:text-white transition-all duration-300 relative group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
          <div className="flex flex-col space-y-4 mt-12 w-full max-w-xs">
            <Link 
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-white border border-white/20 rounded-full hover:border-white/40 transition-all duration-300"
            >
              Connexion
            </Link>
            <Link 
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-black bg-gradient-to-r from-amber-400 to-amber-300 rounded-full hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
            >
              Inscription
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
