import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ReviewsSection from '@/components/ReviewsSection';
import Link from 'next/link';

// Sample data - in a real application, this would be fetched from a database
const vehiclesForSale = [
  { id: 1, imageUrl: '/cars/car5.jpg', name: 'Porsche 911 Carrera', price: 110000, year: 2023, mileage: 5000, description: 'Une véritable icône, la Porsche 911 Carrera offre une expérience de conduite exaltante avec un design intemporel. Moteur 6 cylindres à plat, transmission PDK à 8 rapports, et un châssis parfaitement équilibré pour des performances exceptionnelles.', reviews: [{id: 1, name: 'John Doe', rating: 5, comment: 'Absolutely phenomenal car. A dream to drive!'}] },
  { id: 2, imageUrl: '/cars/car6.jpg', name: 'Mercedes-Benz S-Class', price: 120000, year: 2023, mileage: 3000, description: 'Le summum du luxe, la Classe S offre un confort inégalé et une technologie de pointe. Intérieur somptueux, systèmes d\'assistance à la conduite avancés, et une douceur de roulement incomparable.', reviews: [] },
  { id: 3, imageUrl: '/cars/car7.jpg', name: 'BMW M4 Competition', price: 95000, year: 2022, mileage: 8000, description: 'Vivez des performances palpitantes et une ingénierie de précision avec la BMW M4 Competition. Moteur 6 cylindres en ligne biturbo de 510 ch, châssis sport et design agressif.', reviews: [] },
  { id: 4, imageUrl: '/cars/car8.jpg', name: 'Audi R8 Spyder', price: 160000, year: 2023, mileage: 2000, description: 'L\'Audi R8 Spyder combine des performances à couper le souffle avec une expérience de conduite à ciel ouvert. Moteur V10 atmosphérique, transmission Quattro intégrale et design sculptural.', reviews: [] },
  { id: 5, imageUrl: '/cars/car9.jpg', name: 'Ferrari F8 Tributo', price: 320000, year: 2022, mileage: 4000, description: 'Une célébration de l\'excellence, la F8 Tributo est l\'incarnation d\'une supercar Ferrari moderne. V8 biturbo de 720 ch, aérodynamique optimisée et héritage de course légendaire.', reviews: [] },
  { id: 6, imageUrl: '/cars/car10.jpg', name: 'Lamborghini Huracan Evo', price: 280000, year: 2023, mileage: 1500, description: 'Libérez la puissance brute et le design distinctif de la Lamborghini Huracan Evo. V10 atmosphérique, système de vectorisation du couple et lignes angulaires emblématiques.', reviews: [] },
];

const VehicleDetailPage = ({ params }: { params: { id: string } }) => {
  const vehicle = vehiclesForSale.find(v => v.id === parseInt(params.id, 10));

  if (!vehicle) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Véhicule introuvable</h1>
          <Link href="/sale" className="text-amber-400 hover:text-amber-300 transition-colors">
            Retour à la collection
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
          <Link href="/sale" className="text-white/40 hover:text-white/60 transition-colors">Vente</Link>
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
              <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">Disponible</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extralight text-white tracking-tight mb-6">
              {vehicle.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-light text-amber-400">${vehicle.price.toLocaleString()}</span>
              <span className="text-white/40 text-sm">Prix TTC</span>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-zinc-950 rounded-2xl border border-white/5">
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Année</p>
                <p className="text-2xl font-light text-white">{vehicle.year}</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Kilométrage</p>
                <p className="text-2xl font-light text-white">{vehicle.mileage.toLocaleString()} km</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Transmission</p>
                <p className="text-2xl font-light text-white">Automatique</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Carburant</p>
                <p className="text-2xl font-light text-white">Essence</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-light text-white mb-4 tracking-wide">Description</h2>
              <p className="text-white/70 font-light leading-relaxed">{vehicle.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-auto">
              <button className="group relative flex-1 py-4 overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-110"></span>
                <span className="relative z-10 text-black font-medium tracking-wider">Ajouter au panier</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-2xl"></span>
              </button>
              <button className="flex-1 py-4 rounded-full border-2 border-white/20 text-white font-light tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Essai routier
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-zinc-950/50 rounded-2xl border border-white/5">
              <p className="text-white/60 text-sm font-light mb-2">Une question ? Contactez-nous</p>
              <p className="text-white font-light">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-extralight text-white mb-12 text-center">
            Caractéristiques <span className="text-amber-400">Premium</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Performance', desc: 'Accélération exceptionnelle' },
              { icon: '🛡️', title: 'Sécurité', desc: 'Systèmes avancés' },
              { icon: '💎', title: 'Luxe', desc: 'Finitions haut de gamme' },
              { icon: '🔧', title: 'Garantie', desc: '2 ans constructeur' },
              { icon: '📱', title: 'Connectivité', desc: 'Technologie embarquée' },
              { icon: '🌟', title: 'Entretien', desc: 'Service premium inclus' }
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

export default VehicleDetailPage;
