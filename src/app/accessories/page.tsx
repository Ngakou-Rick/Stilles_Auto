import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessoryCard from '@/components/AccessoryCard';

const accessories = [
  { id: 1, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Performance+Tires', name: 'Pneus Performance', price: 1200 },
  { id: 2, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Custom+Alloy+Wheels', name: 'Jantes Alliage Sur-Mesure', price: 2500 },
  { id: 3, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=LED+Headlight+Kit', name: 'Kit Phares LED', price: 350 },
  { id: 4, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Carbon+Fiber+Spoiler', name: 'Aileron Fibre de Carbone', price: 1800 },
  { id: 5, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Premium+Car+Cover', name: 'Housse Premium', price: 250 },
  { id: 6, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=All-Weather+Floor+Mats', name: 'Tapis Toutes Saisons', price: 150 },
];

export default function Accessories() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">Équipements</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-6">
            Accessoires <span className="text-amber-400">Premium</span>
          </h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Sublimez votre véhicule avec notre gamme d'accessoires haut de gamme, alliant performance et esthétique.
          </p>
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map(accessory => (
            <AccessoryCard key={accessory.id} {...accessory} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
