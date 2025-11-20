import { Sun, TrendingUp, Euro, CheckCircle } from 'lucide-react';

export default function Zonnepanelen() {
  return (
    <div className="min-h-screen pt-24">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/WhatsApp Image 2025-11-11 at 13.46.29.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#2a3f4f]/70"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">Maximaal rendement, minimale zorgen</h1>
          <p className="text-2xl text-white/90 max-w-2xl">
            Onze gecertificeerde installateurs zorgen voor topkwaliteit zonnepanelen met jarenlange garantie.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-8">Waarom zonnepanelen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Sun className="w-12 h-12 text-[#aadd5f] mb-4" />
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Duurzame Energie</h3>
              <p className="text-gray-700 leading-relaxed">
                Wek uw eigen schone stroom op en verminder uw CO2-uitstoot met gemiddeld 1.500 kg per jaar.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <TrendingUp className="w-12 h-12 text-[#aadd5f] mb-4" />
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Bespaar Direct</h3>
              <p className="text-gray-700 leading-relaxed">
                Een gemiddeld huishouden bespaart tot 1.100 kWh per jaar, goed voor €430 tot €550 aan energiekosten.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Euro className="w-12 h-12 text-[#aadd5f] mb-4" />
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Snel Terugverdiend</h3>
              <p className="text-gray-700 leading-relaxed">
                Met een gemiddelde terugverdientijd van 7 tot 9 jaar profiteert u nog jarenlang van gratis energie.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-lg mb-20">
          <h2 className="text-3xl font-bold text-[#2a3f4f] mb-4">Invloed Afbouw Saldering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De salderingsregeling wordt stapsgewijs afgebouwd tot 2031. Dit betekent dat u minder voordeel krijgt voor de stroom die u teruglevert aan het net.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Daarom is het slim om nu te investeren én te combineren met een thuisbatterij, zodat u uw opgewekte stroom optimaal zelf kunt gebruiken.
          </p>
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-[#2a3f4f] mb-3">Saldering per jaar:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">2025:</span> 31,4% teruggavepercentage</li>
              <li><span className="font-semibold">2026:</span> 22,6% teruggavepercentage</li>
              <li><span className="font-semibold">2027:</span> 13,8% teruggavepercentage</li>
              <li><span className="font-semibold">2028-2030:</span> Verdere afbouw</li>
              <li><span className="font-semibold">2031:</span> Saldering volledig afgeschaft</li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-8">Realistische Voorbeeldberekening</h2>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2a3f4f] mb-6">Gezin van 4 personen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tussenwoning, 120m²</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Jaarlijks verbruik: 3.500 kWh</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">10 zonnepanelen (4.000 Wp)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Investering: €6.500</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#f0f4f8] rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#2a3f4f] mb-4">Resultaat</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                    <span className="text-gray-700">Jaarlijkse opbrengst</span>
                    <span className="font-bold text-[#2a3f4f]">3.400 kWh</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                    <span className="text-gray-700">Jaarlijkse besparing</span>
                    <span className="font-bold text-[#aadd5f]">€1.020</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                    <span className="text-gray-700">Terugverdientijd</span>
                    <span className="font-bold text-[#2a3f4f]">6,4 jaar</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-700 font-semibold">Besparing na 25 jaar</span>
                    <span className="font-bold text-[#aadd5f] text-xl">€18.500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ontdek wat zonnepanelen voor u kunnen betekenen</h2>
          <p className="text-xl mb-8 opacity-90">
            Ontvang een persoonlijk advies op maat van uw woning en energieverbruik.
          </p>
          <a
            href="/bespaarplan"
            className="inline-block bg-[#aadd5f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99cc4f] transition-all duration-300"
          >
            Ontvang jouw zonneplan
          </a>
        </div>
      </div>
    </div>
  );
}
