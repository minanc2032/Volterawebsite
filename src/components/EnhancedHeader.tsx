import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
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
    setMobileProductsOpen(false);
    setMobileInfoOpen(false);
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

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isActiveDropdown = (paths: string[]) => {
    return paths.some(path => location.pathname === path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center z-10">
            <img
              src={isScrolled ? '/icons/Voltera_black.png' : '/icons/Voltera white.png'}
              alt="Voltera"
              className="h-12 w-36 object-contain transition-opacity duration-200"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`transition-all duration-200 text-[15px] font-medium flex items-center gap-1 hover:opacity-80 ${
                  isScrolled
                    ? `text-gray-900 ${isActiveDropdown(productLinks.map(l => l.to)) ? 'text-[#aadd5f]' : ''}`
                    : `text-white ${isActiveDropdown(productLinks.map(l => l.to)) ? 'text-[#aadd5f]' : ''}`
                }`}
              >
                Producten
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-gray-100 animate-fadeIn">
                  {productLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActivePath(link.to)
                          ? 'text-[#aadd5f] bg-gray-50'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#aadd5f]'
                      }`}
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
                className={`transition-all duration-200 text-[15px] font-medium flex items-center gap-1 hover:opacity-80 ${
                  isScrolled
                    ? `text-gray-900 ${isActiveDropdown(infoLinks.map(l => l.to)) ? 'text-[#aadd5f]' : ''}`
                    : `text-white ${isActiveDropdown(infoLinks.map(l => l.to)) ? 'text-[#aadd5f]' : ''}`
                }`}
              >
                Informatie
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'info' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'info' && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-gray-100 animate-fadeIn">
                  {infoLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActivePath(link.to)
                          ? 'text-[#aadd5f] bg-gray-50'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#aadd5f]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/calculator"
              className={`transition-all duration-200 text-[15px] font-medium hover:opacity-80 ${
                isScrolled
                  ? `text-gray-900 ${isActivePath('/calculator') ? 'text-[#aadd5f]' : ''}`
                  : `text-white ${isActivePath('/calculator') ? 'text-[#aadd5f]' : ''}`
              }`}
            >
              Bespaarplan
            </Link>

            <Link
              to="/financiering"
              className={`transition-all duration-200 text-[15px] font-medium hover:opacity-80 ${
                isScrolled
                  ? `text-gray-900 ${isActivePath('/financiering') ? 'text-[#aadd5f]' : ''}`
                  : `text-white ${isActivePath('/financiering') ? 'text-[#aadd5f]' : ''}`
              }`}
            >
              Financiering
            </Link>

            <Link
              to="/subsidies"
              className={`transition-all duration-200 text-[15px] font-medium hover:opacity-80 ${
                isScrolled
                  ? `text-gray-900 ${isActivePath('/subsidies') ? 'text-[#aadd5f]' : ''}`
                  : `text-white ${isActivePath('/subsidies') ? 'text-[#aadd5f]' : ''}`
              }`}
            >
              Subsidies
            </Link>

            <Link
              to="/contact"
              className={`transition-all duration-200 text-[15px] font-medium hover:opacity-80 ${
                isScrolled
                  ? `text-gray-900 ${isActivePath('/contact') ? 'text-[#aadd5f]' : ''}`
                  : `text-white ${isActivePath('/contact') ? 'text-[#aadd5f]' : ''}`
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#aadd5f] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-[#99cc4f] transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Gratis advies aanvragen
            </Link>
          </div>

          <button
            className={`lg:hidden transition-colors duration-200 z-10 p-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="space-y-1">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between text-gray-900 font-semibold text-sm py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Producten
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 space-y-1 animate-fadeIn">
                  {productLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block py-2.5 px-3 rounded-lg transition-colors text-sm ${
                        isActivePath(link.to)
                          ? 'text-[#aadd5f] bg-gray-50 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#aadd5f]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
                className="w-full flex items-center justify-between text-gray-900 font-semibold text-sm py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Informatie
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileInfoOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileInfoOpen && (
                <div className="pl-4 space-y-1 animate-fadeIn">
                  {infoLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block py-2.5 px-3 rounded-lg transition-colors text-sm ${
                        isActivePath(link.to)
                          ? 'text-[#aadd5f] bg-gray-50 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#aadd5f]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/calculator"
              className={`block py-3 px-2 rounded-lg transition-colors text-sm ${
                isActivePath('/calculator')
                  ? 'text-[#aadd5f] bg-gray-50 font-semibold'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-[#aadd5f] font-medium'
              }`}
            >
              Bespaarplan
            </Link>
            <Link
              to="/financiering"
              className={`block py-3 px-2 rounded-lg transition-colors text-sm ${
                isActivePath('/financiering')
                  ? 'text-[#aadd5f] bg-gray-50 font-semibold'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-[#aadd5f] font-medium'
              }`}
            >
              Financiering
            </Link>
            <Link
              to="/subsidies"
              className={`block py-3 px-2 rounded-lg transition-colors text-sm ${
                isActivePath('/subsidies')
                  ? 'text-[#aadd5f] bg-gray-50 font-semibold'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-[#aadd5f] font-medium'
              }`}
            >
              Subsidies
            </Link>
            <Link
              to="/contact"
              className={`block py-3 px-2 rounded-lg transition-colors text-sm ${
                isActivePath('/contact')
                  ? 'text-[#aadd5f] bg-gray-50 font-semibold'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-[#aadd5f] font-medium'
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 pb-2">
              <Link
                to="/contact"
                className="block bg-[#aadd5f] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#99cc4f] transition-colors shadow-md"
              >
                Gratis advies aanvragen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
