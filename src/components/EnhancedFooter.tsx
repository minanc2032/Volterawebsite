import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { subscribeNewsletter } from '../lib/supabase';

export default function EnhancedFooter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await subscribeNewsletter(email);

    if (error) {
      setMessage('Er is een fout opgetreden. Probeer het opnieuw.');
    } else {
      setMessage('Bedankt voor je inschrijving!');
      setEmail('');
    }

    setLoading(false);
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/icons/Voltera white.png"
              alt="Voltera"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Slim verduurzamen begint bij Voltera. Zonnepanelen, thuisbatterijen en warmtepompen perfect afgestemd op jouw woning.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+31850474947"
                className="flex items-center gap-2 text-gray-400 hover:text-[#aadd5f] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +31 (0) 850 474 947
              </a>
              <a
                href="mailto:info@voltera.nl"
                className="flex items-center gap-2 text-gray-400 hover:text-[#aadd5f] transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@voltera.nl
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Nederland
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Producten</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/zonnepanelen" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Zonnepanelen
                </Link>
              </li>
              <li>
                <Link to="/thuisbatterijen" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Thuisbatterijen
                </Link>
              </li>
              <li>
                <Link to="/warmtepompen" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Warmtepompen
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-6">Informatie</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/over-voltera" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Over Voltera
                </Link>
              </li>
              <li>
                <Link to="/klantcases" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Klantcases
                </Link>
              </li>
              <li>
                <Link to="/kenniscentrum" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Kenniscentrum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Bespaarplan Calculator
                </Link>
              </li>
              <li>
                <Link to="/financiering" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Financieringsopties
                </Link>
              </li>
              <li>
                <Link to="/subsidies" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                  Subsidies & Regelgeving
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Volg ons</h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#aadd5f] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#aadd5f] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#aadd5f] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Nieuwsbrief</h4>
            <p className="text-gray-400 mb-4">
              Blijf op de hoogte van de laatste ontwikkelingen en tips voor energiebesparing.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Jouw e-mailadres"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#aadd5f]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#aadd5f] text-[#1a1a1a] px-6 py-3 rounded-lg font-semibold hover:bg-[#99cc4f] transition-colors disabled:opacity-50"
              >
                {loading ? 'Bezig...' : 'Inschrijven'}
              </button>
              {message && (
                <p className={`text-sm ${message.includes('fout') ? 'text-red-400' : 'text-green-400'}`}>
                  {message}
                </p>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Erkend installateur</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">5 jaar garantie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              <p>© 2025 Voltera. Alle rechten voorbehouden.</p>
              <p className="mt-1">KvK: [NUMMER] | BTW: NL[NUMMER]B01</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                Cookies
              </Link>
              <Link to="/algemene-voorwaarden" className="text-gray-400 hover:text-[#aadd5f] transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
