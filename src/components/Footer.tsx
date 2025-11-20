export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/icons/voltera black .jpeg"
                alt="Voltera"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-[#666666] mb-2">
              Producten en duurzaamheid
            </p>
            <p className="text-sm text-[#666666] mb-2">
              Payment en opbrengst
            </p>
            <p className="text-sm text-[#666666]">
              Klanten informatie
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000] mb-4">Producten</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Zonnepanelen
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Thuisbatterij
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Warmtepomp
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Airco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000] mb-4">Klantenservice</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Veelgestelde vragen
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Garantie
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors">
                  Kenniscentrum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href="tel:+31850474947" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors block mb-4">
              +31 (0) 850 474 947
            </a>
            <a href="mailto:info@voltera.nl" className="text-sm text-[#666666] hover:text-[#aadd5f] transition-colors block">
              info@voltera.nl
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#666666]">
          <p>© 2025 Voltera · Alle rechten voorbehouden</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#aadd5f] transition-colors">
              Over Voltera
            </a>
            <a href="#" className="hover:text-[#aadd5f] transition-colors">
              Team
            </a>
            <a href="#" className="hover:text-[#aadd5f] transition-colors">
              Partners
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
