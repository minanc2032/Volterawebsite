import { DollarSign, Home, TrendingUp, AlertCircle } from 'lucide-react';

export default function Financieringsopties() {
  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <DollarSign className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Slim investeren in je woning</h1>
          <p className="text-2xl opacity-90 max-w-2xl mx-auto">
            Ontdek de mogelijkheden van subsidies en leningen voor duurzame energie, overzichtelijk en transparant.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-16">
          <div className="flex items-start">
            <AlertCircle className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-[#2a3f4f] mb-3">Belangrijk</h2>
              <p className="text-gray-700 leading-relaxed">
                Wij geven geen financieel advies, maar lichten de mogelijkheden toe. Voor specifiek advies over uw situatie raden we aan contact op te nemen met een financieel adviseur.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#aadd5f] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2a3f4f]">Warmtefonds</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Een renteloze lening speciaal voor de aanschaf en installatie van een warmtepomp. U betaalt vast maandbedrag gedurende maximaal 15 jaar.
            </p>
            <div className="bg-[#f0f4f8] rounded-lg p-6 mb-4">
              <h3 className="font-bold text-[#2a3f4f] mb-3">Kenmerken</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 0% rente, geen verborgen kosten</li>
                <li>• Maximaal €15.000 tot €30.000</li>
                <li>• Looptijd tot 15 jaar</li>
                <li>• Aanvraag via erkende installateur</li>
                <li>• Geen BKR-registratie</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Voorbeeld:</strong> Bij een lening van €12.000 over 12 jaar betaalt u €83 per maand.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#aadd5f] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2a3f4f]">Energiebespaarlening</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Een speciale lening met aantrekkelijke voorwaarden voor het verduurzamen van uw woning. Beschikbaar bij verschillende aanbieders.
            </p>
            <div className="bg-[#f0f4f8] rounded-lg p-6 mb-4">
              <h3 className="font-bold text-[#2a3f4f] mb-3">Kenmerken</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lage rente (vaak 2-4%)</li>
                <li>• Bedragen tot €25.000 of meer</li>
                <li>• Flexibele looptijd (5-15 jaar)</li>
                <li>• Via bank of duurzaamheidsfonds</li>
                <li>• Combineerbaar met subsidies</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Voorbeeld:</strong> Bij een lening van €15.000 over 10 jaar à 3% rente betaalt u €145 per maand.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#aadd5f] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2a3f4f]">Groene Hypotheek</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bij aankoop of verbouwing kunt u extra lenen voor verduurzaming via een groene hypotheek, vaak met rentekorting.
            </p>
            <div className="bg-[#f0f4f8] rounded-lg p-6 mb-4">
              <h3 className="font-bold text-[#2a3f4f] mb-3">Kenmerken</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rentekorting (0,1% tot 0,5%)</li>
                <li>• Hoog leenbedrag mogelijk</li>
                <li>• Langlopende financiering (30 jaar)</li>
                <li>• Verhoogt woningwaarde</li>
                <li>• Energielabel-eis (vaak min. A)</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Let op:</strong> Alleen beschikbaar bij (ver)koop of grote verbouwing.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#aadd5f] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2a3f4f]">Eigen Middelen</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Direct betalen uit spaargeld of beschikbaar vermogen. Geen rente, geen maandlasten, maar wel direct investering.
            </p>
            <div className="bg-[#f0f4f8] rounded-lg p-6 mb-4">
              <h3 className="font-bold text-[#2a3f4f] mb-3">Voordelen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Geen rente of administratiekosten</li>
                <li>• Geen maandelijkse verplichtingen</li>
                <li>• Snelste oplossing</li>
                <li>• Maximaal rendement</li>
                <li>• Besparing direct voelbaar</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Tip:</strong> Combineer eigen middelen met subsidies voor de beste prijs/kwaliteit.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-[#2a3f4f] mb-8 text-center">Vergelijk de mogelijkheden</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 text-[#2a3f4f]">Kenmerk</th>
                  <th className="text-left py-4 px-4 text-[#2a3f4f]">Warmtefonds</th>
                  <th className="text-left py-4 px-4 text-[#2a3f4f]">Energiebespaarlening</th>
                  <th className="text-left py-4 px-4 text-[#2a3f4f]">Groene Hypotheek</th>
                  <th className="text-left py-4 px-4 text-[#2a3f4f]">Eigen Middelen</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold">Rente</td>
                  <td className="py-4 px-4">0%</td>
                  <td className="py-4 px-4">2-4%</td>
                  <td className="py-4 px-4">3-4% (met korting)</td>
                  <td className="py-4 px-4">0%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold">Max. bedrag</td>
                  <td className="py-4 px-4">€15.000 - €30.000</td>
                  <td className="py-4 px-4">€25.000+</td>
                  <td className="py-4 px-4">Hoog</td>
                  <td className="py-4 px-4">Onbeperkt</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold">Looptijd</td>
                  <td className="py-4 px-4">Tot 15 jaar</td>
                  <td className="py-4 px-4">5-15 jaar</td>
                  <td className="py-4 px-4">Tot 30 jaar</td>
                  <td className="py-4 px-4">Direct</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold">Geschikt voor</td>
                  <td className="py-4 px-4">Warmtepomp</td>
                  <td className="py-4 px-4">Alle maatregelen</td>
                  <td className="py-4 px-4">(Ver)bouw</td>
                  <td className="py-4 px-4">Alles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Bekijk jouw opties in het bespaarplan</h2>
          <p className="text-xl mb-8 opacity-90">
            In uw persoonlijk bespaarplan rekenen we alle mogelijkheden voor u door
          </p>
          <a
            href="/bespaarplan"
            className="inline-block bg-[#aadd5f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99cc4f] transition-all duration-300"
          >
            Ontvang jouw financieringsoverzicht
          </a>
        </div>
      </div>
    </div>
  );
}
