import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-white shadow-[0_0_20px_rgba(51,51,51,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img
              src={isScrolled ? "/icons/Voltera_black.png" : "/icons/Voltera white.png"}
              alt="Voltera"
              className="h-12 w-36 object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button
                className={`transition-colors duration-400 text-[15px] font-medium flex items-center gap-1 ${
                  isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#aadd5f]'
                }`}
              >
                Producten
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a
              href="#"
              className={`transition-colors duration-400 text-[15px] font-medium ${
                isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#bcf26d]'
              }`}
            >
              Financiering & Subsidies
            </a>
            <a
              href="#"
              className={`transition-colors duration-400 text-[15px] font-medium ${
                isScrolled ? 'text-[#000000] hover:text-[#57c30f]' : 'text-white hover:text-[#bcf26d]'
              }`}
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="bg-[#aadd5f] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-[#99cc4f] transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
                <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/>
                <rect x="11" y="17" width="2" height="2" rx="1"/>
              </svg>
              Gratis advies aanvragen
            </a>
          </div>

          <button
            className={`lg:hidden transition-colors duration-400 ${
              isScrolled ? 'text-[#000000]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#3d4f5c] border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <a href="#" className="block text-[#ffffff] hover:text-[#aadd5f]">
              Producten
            </a>
            <a href="#" className="block text-[#ffffff] hover:text-[#aadd5f]">
              Financiering & Subsidies
            </a>
            <a href="#" className="block text-[#ffffff] hover:text-[#aadd5f]">
              Contact
            </a>
            <a href="#" className="block bg-[#aadd5f] text-[#1a1a1a] px-4 py-2 rounded-full font-semibold text-center">
              Gratis advies aanvragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
