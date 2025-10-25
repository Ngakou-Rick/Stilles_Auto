import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ReviewsSection from '@/components/ReviewsSection';
import Link from 'next/link';

// Sample data - in a real application, this would be fetched from a database
const vehiclesForRent = [
  { id: 1, imageUrl: '/cars/car11.jpg', name: 'Rolls-Royce Cullinan', pricePerDay: 1500, type: 'SUV', description: 'Vivez le summum du luxe et du confort avec le Rolls-Royce Cullinan. Parfait pour faire une déclaration. Intérieur en cuir premium, système audio Bespoke et une présence imposante sur la route.', reviews: [{id: 1, name: 'Jane Smith', rating: 5, comment: 'An unforgettable experience. The height of luxury!'}] },
  { id: 2, imageUrl: '/cars/car12.jpg', name: 'Range Rover Sport', pricePerDay: 800, type: 'SUV', description: 'Alliez style et capacité avec le Range Rover Sport, un SUV polyvalent pour toutes les occasions. Technologie Terrain Response, intérieur raffiné et performances dynamiques.', reviews: [] },
  { id: 3, imageUrl: '/cars/car13.jpg', name: 'Cadillac Escalade', pricePerDay: 750, type: 'SUV', description: 'Spacieux et audacieux, le Cadillac Escalade est le choix idéal pour les voyages en famille ou les sorties de groupe. 7 places, écran OLED incurvé et confort américain.', reviews: [] },
  { id: 4, imageUrl: '/cars/car14.jpg', name: 'McLaren 720S', pricePerDay: 2000, type: 'Supercar', description: 'Pour les amateurs de sensations fortes, la McLaren 720S offre une vitesse époustouflante et une maniabilité de précision. V8 biturbo de 720 ch et aérodynamique active.', reviews: [] },
  { id: 5, imageUrl: '/cars/car15.jpg', name: 'Porsche Taycan', pricePerDay: 900, type: 'Electric', description: 'Découvrez le futur de la performance avec la Porsche Taycan entièrement électrique, alliant vitesse et durabilité. Jusqu\'à 761 ch, charge rapide et design iconique.', reviews: [] },
  { id: 6, imageUrl: '/cars/car16.jpg', name: 'Tesla Model S Plaid', pricePerDay: 600, type: 'Electric', description: 'Vivez une accélération fulgurante et une technologie de pointe avec la Tesla Model S Plaid. 0-100 km/h en 2.1s, Autopilot avancé et autonomie exceptionnelle.', reviews: [] },
];

const RentalVehicleDetailPage = ({ params }: { params: { id: string } }) => {
  const vehicle = vehiclesForRent.find(v => v.id === parseInt(params.id, 10));

  if (!vehicle) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Véhicule introuvable</h1>
          <Link href="/rent" className="text-amber-400 hover:text-amber-300 transition-colors">
            Retour à la flotte
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/40 hover:text-white/60 transition-colors">Accueil</Link>
          <span className="text-white/20">/</span>
          <Link href="/rent" className="text-white/40 hover:text-white/60 transition-colors">Location</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60">{vehicle.name}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden group">
              <Image 
                src={vehicle.imageUrl} 
                alt={vehicle.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Type Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-white text-sm font-light tracking-wider uppercase">{vehicle.type}</span>
              </div>
            </div>
            {/* Thumbnail placeholders */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-24 rounded-lg overflow-hidden border border-white/10 hover:border-amber-400/50 transition-colors cursor-pointer">
                  <Image src={vehicle.imageUrl} alt={`${vehicle.name} ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">Disponible Immédiatement</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extralight text-white tracking-tight mb-6">
              {vehicle.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-light text-amber-400">${vehicle.pricePerDay.toLocaleString()}</span>
              <span className="text-white/60 text-xl font-light">/jour</span>
            </div>

            {/* Rental Options */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-zinc-950 rounded-2xl border border-white/5">
              <div className="text-center">
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">1 Jour</p>
                <p className="text-xl font-light text-white">${vehicle.pricePerDay}</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">3 Jours</p>
                <p className="text-xl font-light text-amber-400">${Math.round(vehicle.pricePerDay * 2.7)}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">7 Jours</p>
                <p className="text-xl font-light text-amber-400">${Math.round(vehicle.pricePerDay * 6)}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-light text-white mb-4 tracking-wide">À propos</h2>
              <p className="text-white/70 font-light leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Included Features */}
            <div className="mb-8 p-6 bg-zinc-950/50 rounded-2xl border border-white/5">
              <h3 className="text-lg font-light text-white mb-4">Inclus dans la location</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Assurance complète', 'Kilométrage illimité', 'GPS intégré', 'Assistance 24/7'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    <span className="text-white/70 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-auto">
              <button className="group relative flex-1 py-4 overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-110"></span>
                <span className="relative z-10 text-black font-medium tracking-wider">Réserver maintenant</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-2xl"></span>
              </button>
              <button className="flex-1 py-4 rounded-full border-2 border-white/20 text-white font-light tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Demander un devis
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-zinc-950/50 rounded-2xl border border-white/5">
              <p className="text-white/60 text-sm font-light mb-2">Questions sur la location ?</p>
              <p className="text-white font-light">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-extralight text-white mb-12 text-center">
            Avantages <span className="text-amber-400">Location</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🚗', title: 'Livraison', desc: 'À votre domicile ou hôtel' },
              { icon: '⏰', title: 'Flexibilité', desc: 'Location courte ou longue durée' },
              { icon: '✨', title: 'Entretien', desc: 'Véhicules impeccables' },
              { icon: '💳', title: 'Paiement', desc: 'Options flexibles' },
              { icon: '🔒', title: 'Sécurité', desc: 'Assurance tous risques' },
              { icon: '🎯', title: 'Service', desc: 'Conciergerie premium' }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-zinc-950 rounded-2xl border border-white/5 hover:border-amber-400/30 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-light text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 font-light text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection initialReviews={vehicle.reviews || []} />
      </main>
      <Footer />
    </div>
  );
};

export default RentalVehicleDetailPage;
