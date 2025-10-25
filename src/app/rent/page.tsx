import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RentalVehicleCard from '@/components/RentalVehicleCard';

const vehiclesForRent = [
  { id: 1, imageUrl: '/cars/car11.jpg', name: 'Rolls-Royce Cullinan', pricePerDay: 1500, type: 'SUV' },
  { id: 2, imageUrl: '/cars/car12.jpg', name: 'Range Rover Sport', pricePerDay: 800, type: 'SUV' },
  { id: 3, imageUrl: '/cars/car13.jpg', name: 'Cadillac Escalade', pricePerDay: 750, type: 'SUV' },
  { id: 4, imageUrl: '/cars/car14.jpg', name: 'McLaren 720S', pricePerDay: 2000, type: 'Supercar' },
  { id: 5, imageUrl: '/cars/car15.jpg', name: 'Porsche Taycan', pricePerDay: 900, type: 'Electric' },
  { id: 6, imageUrl: '/cars/car16.jpg', name: 'Tesla Model S Plaid', pricePerDay: 600, type: 'Electric' },
];

export default function Rent() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">Flotte Premium</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-6">
            Location de <span className="text-amber-400">Prestige</span>
          </h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Vivez une expérience de conduite exceptionnelle avec notre flotte de véhicules haut de gamme disponibles à la location.
          </p>
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehiclesForRent.map(vehicle => (
            <RentalVehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
