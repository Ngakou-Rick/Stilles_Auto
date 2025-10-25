import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">Restons Connectés</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-6">
            Contactez-<span className="text-amber-400">Nous</span>
          </h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.
          </p>
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-950 rounded-2xl p-8 lg:p-12 border border-white/5">
            <h2 className="text-3xl font-light text-white mb-8 tracking-wide">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Nom complet</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                  placeholder="jean@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Sujet</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required 
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                  placeholder="Demande d'information"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required 
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="group relative w-full py-4 overflow-hidden rounded-full"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-110"></span>
                <span className="relative z-10 text-black font-medium tracking-wider">Envoyer le message</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-2xl"></span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-zinc-950 rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Informations</h3>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                Notre équipe est disponible pour vous accompagner dans votre projet automobile. N'hésitez pas à nous contacter.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/40 font-light mb-1">Adresse</p>
                    <p className="text-white font-light">123 Luxury Lane, Suite 100<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/40 font-light mb-1">Téléphone</p>
                    <p className="text-white font-light">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/40 font-light mb-1">Email</p>
                    <p className="text-white font-light">contact@stillesauto.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 text-sm">🕐</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/40 font-light mb-1">Horaires</p>
                    <p className="text-white font-light">Lun - Ven: 9h - 18h<br/>Sam: 10h - 16h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-zinc-950 rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-light text-white mb-4 tracking-wide">Liens rapides</h3>
              <div className="space-y-3">
                {['FAQ', 'Financement', 'Garanties', 'Service après-vente'].map((link) => (
                  <a 
                    key={link}
                    href="#" 
                    className="block text-white/60 hover:text-amber-400 font-light transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
