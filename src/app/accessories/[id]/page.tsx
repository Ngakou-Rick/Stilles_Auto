import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ReviewsSection from '@/components/ReviewsSection';
import Link from 'next/link';

// Sample data - in a real application, this would be fetched from a database
const accessories = [
  { id: 1, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Performance+Tires', name: 'Pneus Performance', price: 1200, description: 'Pneus haute performance pour une adhérence et une maniabilité supérieures dans toutes les conditions. Composé de gomme avancé, sculptures optimisées et résistance à l\'aquaplaning.', category: 'Performance', reviews: [{id: 1, name: 'Mike P.', rating: 5, comment: 'Great tires, totally changed the handling of my car!'}] },
  { id: 2, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Custom+Alloy+Wheels', name: 'Jantes Alliage Sur-Mesure', price: 2500, description: 'Jantes en alliage légères et élégantes pour donner à votre véhicule un look distinctif. Finition premium, résistance à la corrosion et design exclusif.', category: 'Esthétique', reviews: [] },
  { id: 3, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=LED+Headlight+Kit', name: 'Kit Phares LED', price: 350, description: 'Améliorez votre visibilité et donnez à votre voiture un look moderne avec ce kit de phares LED haute intensité. Installation plug-and-play, durée de vie prolongée.', category: 'Éclairage', reviews: [] },
  { id: 4, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Carbon+Fiber+Spoiler', name: 'Aileron Fibre de Carbone', price: 1800, description: 'Améliorez l\'aérodynamisme et ajoutez une touche sportive avec cet aileron en fibre de carbone véritable. Léger, résistant et design agressif.', category: 'Aérodynamique', reviews: [] },
  { id: 5, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Premium+Car+Cover', name: 'Housse Premium', price: 250, description: 'Protégez votre véhicule des éléments avec cette housse durable toutes saisons. Tissu respirant, protection UV et ajustement parfait.', category: 'Protection', reviews: [] },
  { id: 6, imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=All-Weather+Floor+Mats', name: 'Tapis Toutes Saisons', price: 150, description: 'Gardez l\'intérieur de votre véhicule propre avec ces tapis sur mesure toutes saisons. Matériau résistant, bords surélevés et nettoyage facile.', category: 'Intérieur', reviews: [] },
];

const AccessoryDetailPage = ({ params }: { params: { id: string } }) => {
  const accessory = accessories.find(a => a.id === parseInt(params.id, 10));

  if (!accessory) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Accessoire introuvable</h1>
          <Link href="/accessories" className="text-amber-400 hover:text-amber-300 transition-colors">
            Retour aux accessoires
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
          <Link href="/accessories" className="text-white/40 hover:text-white/60 transition-colors">Accessoires</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60">{accessory.name}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-zinc-900 group">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image 
                  src={accessory.imageUrl} 
                  alt={accessory.name} 
                  fill 
                  className="object-contain transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              {/* Category Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-white text-sm font-light tracking-wider">{accessory.category}</span>
              </div>
            </div>
            {/* Thumbnail placeholders */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-24 rounded-lg overflow-hidden bg-zinc-900 border border-white/10 hover:border-amber-400/50 transition-colors cursor-pointer">
                  <Image src={accessory.imageUrl} alt={`${accessory.name} ${i}`} fill className="object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Accessory Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">En Stock</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extralight text-white tracking-tight mb-6">
              {accessory.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-light text-amber-400">${accessory.price.toLocaleString()}</span>
              <span className="text-white/40 text-sm">Prix TTC</span>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-zinc-950 rounded-2xl border border-white/5">
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Catégorie</p>
                <p className="text-xl font-light text-white">{accessory.category}</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Livraison</p>
                <p className="text-xl font-light text-white">2-3 jours</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Garantie</p>
                <p className="text-xl font-light text-white">1 an</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-2 tracking-wider uppercase">Installation</p>
                <p className="text-xl font-light text-white">Disponible</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-light text-white mb-4 tracking-wide">Description</h2>
              <p className="text-white/70 font-light leading-relaxed">{accessory.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8 p-6 bg-zinc-950/50 rounded-2xl border border-white/5">
              <h3 className="text-lg font-light text-white mb-4">Caractéristiques</h3>
              <div className="space-y-3 text-sm">
                {['Qualité premium', 'Installation professionnelle', 'Garantie constructeur', 'Compatible tous modèles'].map((item) => (
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
                <span className="relative z-10 text-black font-medium tracking-wider">Ajouter au panier</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-2xl"></span>
              </button>
              <button className="flex-1 py-4 rounded-full border-2 border-white/20 text-white font-light tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Demander un devis
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-zinc-950/50 rounded-2xl border border-white/5">
              <p className="text-white/60 text-sm font-light mb-2">Besoin de conseils ?</p>
              <p className="text-white font-light">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-extralight text-white mb-12 text-center">
            Pourquoi <span className="text-amber-400">Choisir</span> Nos Accessoires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '✓', title: 'Qualité Certifiée', desc: 'Produits testés et approuvés' },
              { icon: '🚚', title: 'Livraison Rapide', desc: 'Expédition sous 24h' },
              { icon: '🔧', title: 'Installation Pro', desc: 'Service d\'installation disponible' },
              { icon: '💯', title: 'Satisfaction', desc: 'Garantie satisfait ou remboursé' },
              { icon: '🎯', title: 'Compatibilité', desc: 'Adapté à votre véhicule' },
              { icon: '💬', title: 'Support', desc: 'Assistance technique' }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-zinc-950 rounded-2xl border border-white/5 hover:border-amber-400/30 transition-colors">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-light text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 font-light text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection initialReviews={accessory.reviews || []} />
      </main>
      <Footer />
    </div>
  );
};

export default AccessoryDetailPage;
