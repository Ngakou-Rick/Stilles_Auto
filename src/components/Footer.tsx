import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group mb-6">
              <Image 
                src="/logo/Stilles_logo.jpg" 
                alt="Stilles Auto" 
                width={160} 
                height={70}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm font-light text-white/60 leading-relaxed tracking-wide">
              Votre partenaire de confiance pour des véhicules d'exception. L'excellence automobile à votre service.
            </p>
            <div className="flex gap-4 mt-6">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-400/50 hover:bg-amber-400/5 transition-all duration-300 group"
                >
                  <span className="text-xs text-white/60 group-hover:text-amber-400 transition-colors">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium tracking-widest text-amber-400 mb-6 uppercase">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/rent', label: 'Location' },
                { href: '/sale', label: 'Vente' },
                { href: '/accessories', label: 'Accessoires' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-light text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium tracking-widest text-amber-400 mb-6 uppercase">Services</h3>
            <ul className="space-y-3">
              {['Vente de véhicules', 'Location premium', 'Accessoires', 'Financement', 'Maintenance'].map((service) => (
                <li key={service}>
                  <span className="text-sm font-light text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-widest text-amber-400 mb-6 uppercase">Contact</h3>
            <div className="space-y-4 text-sm font-light text-white/70">
              <p className="leading-relaxed">
                123 Luxury Lane, Suite 100<br/>
                Beverly Hills, CA 90210
              </p>
              <a href="mailto:contact@stillesauto.com" className="block hover:text-white transition-colors">
                contact@stillesauto.com
              </a>
              <a href="tel:+11234567890" className="block hover:text-white transition-colors">
                +1 (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-white/40 tracking-wide">
            © {new Date().getFullYear()} Stilles Auto. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs font-light text-white/40">
            <Link href="#" className="hover:text-white/70 transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
    </footer>
  );
};

export default Footer;
