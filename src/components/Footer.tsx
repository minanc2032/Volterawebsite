import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <Link to="/" className="block mb-4">
              <img
                src="/icons/Voltera_black.png"
                alt="Voltera"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-[#666666] mb-4 leading-relaxed">
              Duurzaam wonen zonder zorgen. Complete oplossingen voor zonnepanelen, thuisbatterijen en warmtepompen.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000] mb-4">Oplossingen</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/zonnepanelen" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Zonnepanelen
                </Link>
              </li>
              <li>
                <Link to="/thuisbatterijen" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Thuisbatterijen
                </Link>
              </li>
              <li>
                <Link to="/warmtepompen" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Warmtepompen
                </Link>
              </li>
              <li>
                <Link to="/bespaarplan" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Bespaarplan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000] mb-4">Informatie</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/over-voltera" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Over Voltera
                </Link>
              </li>
              <li>
                <Link to="/financieringsopties" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Financieringsopties
                </Link>
              </li>
              <li>
                <Link to="/subsidies" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Subsidies
                </Link>
              </li>
              <li>
                <Link to="/kenniscentrum" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Kenniscentrum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000] mb-4">Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Veelgestelde vragen
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Garantie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000] mb-4">Contact</h4>
            <a href="tel:+31850606755" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors block mb-2">
              085 - 060 67 55
            </a>
            <a href="mailto:info@voltera.nl" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors block mb-4">
              info@voltera.nl
            </a>
            <p className="text-xs text-[#666666]">
              Ma - Vr: 08:00 - 18:00<br />
              Za: 09:00 - 13:00
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666666]">
          <p>© 2025 Voltera · Alle rechten voorbehouden · KvK: 12345678 · BTW: NL123456789B01</p>
          <div className="flex gap-6">
            <Link to="/over-voltera" className="hover:text-[#aadd5f] transition-colors">
              Over ons
            </Link>
            <a href="#" className="hover:text-[#aadd5f] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#aadd5f] transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-[#aadd5f] transition-colors">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
