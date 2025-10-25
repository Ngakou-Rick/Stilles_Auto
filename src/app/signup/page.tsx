import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-transparent blur-3xl"></div>
              <div className="relative">
                <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">Rejoignez-nous</span>
                <h1 className="text-6xl font-extralight text-white tracking-tight mt-4 mb-6">
                  Devenez<br/>
                  <span className="text-amber-400">Membre VIP</span>
                </h1>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                  Créez votre compte et bénéficiez d'avantages exclusifs, de tarifs préférentiels et d'un service personnalisé.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: '🎁', text: 'Offres exclusives membres' },
                    { icon: '⭐', text: 'Programme de fidélité' },
                    { icon: '🔔', text: 'Alertes personnalisées' },
                    { icon: '🚀', text: 'Accès prioritaire' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <span className="text-white/70 font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full">
            <div className="bg-zinc-950 rounded-2xl p-8 lg:p-12 border border-white/5">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-white tracking-wide mb-2">Inscription</h2>
                <p className="text-white/60 font-light text-sm">Créez votre compte en quelques instants</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Nom complet</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    autoComplete="name" 
                    required 
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Email</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Téléphone</label>
                  <input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    autoComplete="tel" 
                    required 
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-light text-white/70 mb-2 tracking-wide">Mot de passe</label>
                  <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    autoComplete="new-password" 
                    required 
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
                    placeholder="••••••••"
                  />
                  <p className="mt-2 text-xs text-white/40 font-light">Minimum 8 caractères</p>
                </div>

                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    required 
                    className="w-4 h-4 mt-1 rounded border-white/20 bg-black/50 text-amber-400 focus:ring-amber-400/50" 
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-white/60 font-light">
                    J'accepte les{' '}
                    <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                      conditions d'utilisation
                    </Link>
                    {' '}et la{' '}
                    <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="group relative w-full py-4 overflow-hidden rounded-full"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-110"></span>
                  <span className="relative z-10 text-black font-medium tracking-wider">Créer mon compte</span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-300 via-white to-amber-300 blur-2xl"></span>
                </button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-zinc-950 text-white/40 font-light">Ou s'inscrire avec</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                    <span className="text-white font-light text-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                    <span className="text-white font-light text-sm">Apple</span>
                  </button>
                </div>
              </div>

              <p className="text-center text-sm text-white/60 font-light mt-8">
                Déjà membre ?{' '}
                <Link href="/signin" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
