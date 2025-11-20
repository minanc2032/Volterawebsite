import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const productLinks = [
    { to: '/zonnepanelen', label: 'Zonnepanelen' },
    { to: '/thuisbatterijen', label: 'Thuisbatterijen' },
    { to: '/warmtepompen', label: 'Warmtepompen' }
  ];

  const infoLinks = [
    { to: '/over-voltera', label: 'Over Voltera' },
    { to: '/klantcases', label: 'Klantcases' },
    { to: '/kenniscentrum', label: 'Kenniscentrum' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-white shadow-[0_0_20px_rgba(51,51,51,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={isScrolled ? '/icons/Voltera_black.png' : '/icons/Voltera white.png'}
              alt="Voltera"
              className="h-12 w-36 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`transition-colors duration-400 text-[15px] font-medium flex items-center gap-1 ${
                  isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#aadd5f]'
                }`}
              >
                Producten
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-gray-100">
                  {productLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#57c30f] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('info')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`transition-colors duration-400 text-[15px] font-medium flex items-center gap-1 ${
                  isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#aadd5f]'
                }`}
              >
                Informatie
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'info' && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-gray-100">
                  {infoLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#57c30f] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/calculator"
              className={`transition-colors duration-400 text-[15px] font-medium ${
                isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#bcf26d]'
              }`}
            >
              Bespaarplan
            </Link>

            <Link
              to="/financiering"
              className={`transition-colors duration-400 text-[15px] font-medium ${
                isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#bcf26d]'
              }`}
            >
              Financiering
            </Link>

            <Link
              to="/subsidies"
              className={`transition-colors duration-400 text-[15px] font-medium ${
                isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#bcf26d]'
              }`}
            >
              Subsidies
            </Link>

            <Link
              to="/contact"
              className={`transition-colors duration-400 text-[15px] font-medium ${
                isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#bcf26d]'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#aadd5f] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-[#99cc4f] transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Gratis advies aanvragen
            </Link>
          </div>

          <button
            className={`lg:hidden transition-colors duration-400 ${
              isScrolled ? 'text-[#000000]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#3d4f5c] border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <div className="space-y-2">
              <div className="text-white font-semibold text-sm">Producten</div>
              {productLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-[#ffffff] hover:text-[#aadd5f] pl-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold text-sm">Informatie</div>
              {infoLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-[#ffffff] hover:text-[#aadd5f] pl-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link to="/calculator" className="block text-[#ffffff] hover:text-[#aadd5f]">
              Bespaarplan
            </Link>
            <Link to="/financiering" className="block text-[#ffffff] hover:text-[#aadd5f]">
              Financiering
            </Link>
            <Link to="/subsidies" className="block text-[#ffffff] hover:text-[#aadd5f]">
              Subsidies
            </Link>
            <Link to="/contact" className="block text-[#ffffff] hover:text-[#aadd5f]">
              Contact
            </Link>
            <Link
              to="/contact"
              className="block bg-[#aadd5f] text-[#1a1a1a] px-4 py-2 rounded-full font-semibold text-center"
            >
              Gratis advies aanvragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
