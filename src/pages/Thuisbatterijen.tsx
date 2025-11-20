import { Battery, Zap, TrendingDown, CheckCircle } from 'lucide-react';

export default function Thuisbatterijen() {
  return (
    <div className="min-h-screen pt-24">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/WhatsApp Image 2025-11-11 at 13.48.32 copy.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#2a3f4f]/70"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">Haal meer uit je stroom</h1>
          <p className="text-2xl text-white/90 max-w-2xl">
            Met een slimme thuisbatterij benut je elke zonne-uur optimaal en houd je grip op je energierekening.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-8">Waarom nu relevant</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <TrendingDown className="w-12 h-12 text-[#aadd5f] mb-4" />
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Afbouw Saldering</h3>
              <p className="text-gray-700 leading-relaxed">
                Door de afbouw van de salderingsregeling wordt terugleveren minder voordelig. Met een batterij gebruikt u uw eigen stroom optimaal.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Zap className="w-12 h-12 text-[#aadd5f] mb-4" />
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Dynamische Prijzen</h3>
              <p className="text-gray-700 leading-relaxed">
                Laad uw batterij op wanneer stroom goedkoop is en gebruik deze tijdens dure uren. Bespaar tot €300 extra per jaar.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Battery className="w-12 h-12 text-[#aadd5f] mb-4" />
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Onbalansmarkt</h3>
              <p className="text-gray-700 leading-relaxed">
                Deel uw opgeslagen energie met het net tijdens piekmomenten en verdien bij met onbalansvergoedingen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-8">Technische Uitleg</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-6">Capaciteit</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Thuisbatterijen hebben doorgaans een capaciteit van 5 tot 15 kWh. Voor een gemiddeld huishouden is 10 kWh vaak voldoende om zonnestroom van overdag 's avonds en 's nachts te gebruiken.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">5-7 kWh:</span> Klein huishouden, beperkt verbruik</li>
                <li><span className="font-semibold">10 kWh:</span> Gemiddeld gezin, standaard verbruik</li>
                <li><span className="font-semibold">13-15 kWh:</span> Groot huishouden of elektrisch rijden</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-6">Levensduur & Rendement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moderne lithium-ion batterijen gaan 10 tot 15 jaar mee met minimaal onderhoud. De meeste systemen hebben een garantie van 10 jaar of 6.000 laadcycli.
              </p>
              <div className="bg-[#f0f4f8] rounded-lg p-6">
                <h4 className="font-bold text-[#2a3f4f] mb-3">Verwachte Opbrengst</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />70-85% zelfvoorziening mogelijk</li>
                  <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />Besparing €400-€700 per jaar</li>
                  <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />Terugverdientijd 8-12 jaar</li>
                  <li><CheckCircle className="w-5 h-5 text-[#aadd5f] inline mr-2" />Extra verdiensten via onbalansmarkt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#2a3f4f] mb-8">Voorbeeldcombinaties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#aadd5f]">
              <div className="bg-[#aadd5f] text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                POPULAIR
              </div>
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Zonnepanelen + 10 kWh Batterij</h3>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Opbrengst zonnepanelen: 3.500 kWh/jaar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Eigen verbruik: 2.800 kWh direct</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Batterij opslag: 600 kWh voor 's avonds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Totaal zelfvoorzienend: 97%</span>
                </li>
              </ul>
              <div className="bg-[#f0f4f8] rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Jaarlijkse besparing:</span>
                  <span className="font-bold text-[#aadd5f]">€1.250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Investering:</span>
                  <span className="font-bold text-[#2a3f4f]">€13.500</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Bestaande Panelen + Batterij</h3>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Bestaande panelen: 12 stuks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Toevoeging 10 kWh batterij</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Optimalisatie bestaande opbrengst</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Minder teruglevering aan net</span>
                </li>
              </ul>
              <div className="bg-[#f0f4f8] rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Extra besparing:</span>
                  <span className="font-bold text-[#aadd5f]">€550</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Investering:</span>
                  <span className="font-bold text-[#2a3f4f]">€7.500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ontdek wat een thuisbatterij voor u kan betekenen</h2>
          <p className="text-xl mb-8 opacity-90">
            Krijg inzicht in de mogelijkheden en besparing voor uw situatie.
          </p>
          <a
            href="/bespaarplan"
            className="inline-block bg-[#aadd5f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99cc4f] transition-all duration-300"
          >
            Vraag jouw batterijplan aan
          </a>
        </div>
      </div>
    </div>
  );
}
