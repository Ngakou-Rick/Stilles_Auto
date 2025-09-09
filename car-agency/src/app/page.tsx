import HeroCarousel from '@/components/HeroCarousel';
import FeaturedForRent from '@/components/FeaturedForRent';
import FeaturedForSale from '@/components/FeaturedForSale';
import FeaturedAccessories from '@/components/FeaturedAccessories';

export default function Home() {
  return (
    <section>
      <HeroCarousel />
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mt-8 mb-4">Find Your Next Ride</h1>
        <p className="text-lg">
          Browse our extensive collection of luxury cars for rent or sale.
        </p>
      </div>
      <FeaturedForRent />
      <FeaturedForSale />
      <FeaturedAccessories />
    </section>
  );
}
