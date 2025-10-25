import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';

const vehiclesForSale = [
  { id: 1, imageUrl: '/cars/car5.jpg', name: 'Porsche 911 Carrera', price: 110000, year: 2023, mileage: 5000 },
  { id: 2, imageUrl: '/cars/car6.jpg', name: 'Mercedes-Benz S-Class', price: 120000, year: 2023, mileage: 3000 },
  { id: 3, imageUrl: '/cars/car7.jpg', name: 'BMW M4 Competition', price: 95000, year: 2022, mileage: 8000 },
  { id: 4, imageUrl: '/cars/car8.jpg', name: 'Audi R8 Spyder', price: 160000, year: 2023, mileage: 2000 },
  { id: 5, imageUrl: '/cars/car9.jpg', name: 'Ferrari F8 Tributo', price: 320000, year: 2022, mileage: 4000 },
  { id: 6, imageUrl: '/cars/car10.jpg', name: 'Lamborghini Huracan Evo', price: 280000, year: 2023, mileage: 1500 },
];

export default function Sale() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">Collection Premium</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-6">
            Véhicules à la <span className="text-amber-400">Vente</span>
          </h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection exclusive de véhicules d'exception, soigneusement choisis pour leur qualité et leur prestige.
          </p>
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehiclesForSale.map(vehicle => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
