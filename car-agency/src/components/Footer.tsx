import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-light p-8 mt-8 border-t border-accent-gold border-opacity-20">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Prestige Wheels. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/about" className="hover:text-accent-gold transition-colors">About Us</Link>
          <Link href="/faq" className="hover:text-accent-gold transition-colors">FAQ</Link>
          <Link href="/terms" className="hover:text-accent-gold transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-accent-gold transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
