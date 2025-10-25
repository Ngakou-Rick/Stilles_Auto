import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

