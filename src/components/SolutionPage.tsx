import { Link } from 'react-router-dom';
import { CheckCircle2, Wallet, Leaf, Zap, Battery, ThermometerSun, TrendingUp, PiggyBank, Shield, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { SEO } from './SEO';

type SolutionType = 'solar' | 'battery' | 'heatpump';

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  seoTitle: string;
  seoDescription: string;
}

const heroContent: Record<SolutionType, HeroContent> = {
  solar: {
    title: 'Zonnepanelen',
    subtitle: 'Wek je eigen energie op',
    description:
      'Met onze high-end glas-glas panelen haal je het maximale rendement uit de zon. Klaar voor de toekomst, met of zonder salderingsregeling.',
    image: '/images/WhatsApp Image 2025-11-11 at 13.48.32 copy.jpeg',
    cta: 'Ontvang jouw zonneplan',
    seoTitle: 'Zonnepanelen - Voltera',
    seoDescription:
      'Met hoogwaardige N-Type TopCon glas-glas zonnepanelen haal je het maximale rendement uit de zon. Bespaar tot €1.170 per jaar.',
  },
  battery: {
    title: 'Thuisbatterijen',
    subtitle: 'Baas over eigen stroom',
    description:
      'Sla goedkope stroom op en gebruik het wanneer de prijzen hoog zijn. De slimste investering nu de salderingsregeling wordt afgebouwd.',
    image: '/images/WhatsApp Image 2025-11-11 at 13.52.13 (2).jpeg',
    cta: 'Vraag jouw batterijplan aan',
    seoTitle: 'Thuisbatterijen - Voltera',
    seoDescription:
      'Sla je eigen zonne-energie op en gebruik het wanneer jij wilt. Handel op de onbalansmarkt en verhoog je eigen verbruik tot 80%.',
  },
  heatpump: {
    title: 'Warmtepompen',
    subtitle: 'Duurzaam verwarmen',
    description:
      'Bespaar direct tot 70% op je gasverbruik. Of je nu kiest voor hybride of volledig elektrisch, wij hebben de stille krachtpatser die past.',
    image: '/images/WhatsApp Image 2025-11-11 at 13.52.13 (3).jpeg',
    cta: 'Ontvang jouw warmtepompadvies',
    seoTitle: 'Warmtepompen - Voltera',
    seoDescription:
      'Bespaar tot 70% op je gasverbruik met een hybride of all-electric warmtepomp. Tot €4.500 ISDE subsidie beschikbaar.',
  },
};

function SolarContent() {
  return (
    <div className="space-y-20">
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Hoe werken onze zonnepanelen?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Zonnepanelen zetten zonlicht om in elektriciteit. Maar niet elk paneel is hetzelfde. Wij
              werken uitsluitend met <strong>N-Type TopCon glas-glas panelen</strong>.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1">
                  <Zap className="w-5 h-5 text-[#aadd5f]" />
                </div>
                <div>
                  <strong className="block text-gray-900">Hoger Rendement</strong>
                  <span className="text-gray-600">
                    N-Type cellen presteren beter bij weinig licht en warme dagen.
                  </span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">
                  <Shield className="w-5 h-5 text-[#aadd5f]" />
                </div>
                <div>
                  <strong className="block text-gray-900">Langere Levensduur</strong>
                  <span className="text-gray-600">
                    Glas-glas beschermt de cellen beter tegen vocht en hagel dan traditionele
                    folie-panelen.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Rekenvoorbeeld Rendement</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Aantal panelen</span>
                <span className="font-bold text-gray-900">10 Stuks (440 Wp)</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Jaaropbrengst</span>
                <span className="font-bold text-gray-900">~ 3.900 kWh</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Besparing per jaar</span>
                <span className="font-bold text-green-600">€ 1.170,-</span>
              </div>
              <div className="pt-2">
                <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm">
                  <TrendingUp className="w-8 h-8 text-[#aadd5f]" />
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">
                      Terugverdientijd
                    </p>
                    <p className="font-bold text-lg text-gray-900">Gemiddeld 4 - 6 jaar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Salderingsregeling & De Toekomst</h2>
            <p className="text-blue-800 text-lg">
              De salderingsregeling wordt de komende jaren langzaam afgebouwd. Is investeren nog
              zinvol?
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg text-left">
              <p className="text-gray-900 leading-relaxed mb-4">
                <strong>Absoluut.</strong> Zonnepanelen blijven ook zonder saldering de goedkoopste
                manier om aan stroom te komen. De stroom van je dak kost omgerekend zo'n €0,06 per
                kWh, terwijl je bij het energiebedrijf al snel €0,30 betaalt.
              </p>
              <p className="text-gray-900 leading-relaxed">
                Bovendien ben je met onze systemen "Batterij-Ready". Zodra salderen stopt, prik je
                eenvoudig een thuisbatterij in om je eigen stroom op te slaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Merken waar we mee werken</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We kiezen alleen voor A-merken met bewezen kwaliteit en uitstekende garanties.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-800">JA Solar</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                N-Type TopCon technologie met hoog rendement. Marktleider in kwaliteit en innovatie.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-800">Longi</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium glas-glas panelen met 25 jaar productgarantie. Excellent in Nederlandse weersomstandigheden.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-800">SolarEdge</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Slimme omvormers met panel-niveau monitoring. Maximale opbrengst per paneel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BatteryContent() {
  return (
    <div className="space-y-20">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Waarom nu een thuisbatterij?</h2>
          <p className="text-gray-600 text-lg">
            De energiemarkt verandert. Met een dynamisch energiecontract en een slimme batterij
            verdien je geld.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg p-8 space-y-4 bg-white">
            <div className="w-12 h-12 bg-[#aadd5f]/10 rounded-xl flex items-center justify-center text-[#aadd5f]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Handelen op de Onbalansmarkt</h3>
            <p className="text-gray-600">
              Onze software laadt de batterij als stroom goedkoop (of zelfs gratis) is, en
              verkoopt terug als de prijzen hoog zijn. Volledig automatisch.
            </p>
          </Card>
          <Card className="border-none shadow-lg p-8 space-y-4 bg-white">
            <div className="w-12 h-12 bg-[#aadd5f]/10 rounded-xl flex items-center justify-center text-[#aadd5f]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Verhoog eigen gebruik</h3>
            <p className="text-gray-600">
              Gebruik je zonnestroom ook 's avonds. Ga van 30% direct eigen verbruik naar wel
              70-80%. Minder afhankelijk van het net.
            </p>
          </Card>
          <Card className="border-none shadow-lg p-8 space-y-4 bg-white">
            <div className="w-12 h-12 bg-[#aadd5f]/10 rounded-xl flex items-center justify-center text-[#aadd5f]">
              <Battery className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Noodstroom (Backup)</h3>
            <p className="text-gray-600">
              Valt de stroom uit? Dan neemt jouw batterij het over. Essentiële apparaten zoals je
              koelkast en wifi blijven gewoon werken.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Saldering wordt afgebouwd</h2>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Tot 2027 kun je nog volledig salderen. Daarna neemt het percentage jaarlijks af. Maar ook zonder saldering blijft zonne-energie de slimste keuze.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Afbouwschema Salderingsregeling</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">2025 - 2026</span>
                  <span className="font-bold text-green-600">100% saldering</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">2027</span>
                  <span className="font-bold text-gray-900">90% saldering</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">2028</span>
                  <span className="font-bold text-gray-900">70% saldering</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">2029</span>
                  <span className="font-bold text-gray-900">50% saldering</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">2030</span>
                  <span className="font-bold text-gray-900">30% saldering</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">2031 en verder</span>
                  <span className="font-bold text-red-600">0% saldering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/WhatsApp Image 2025-11-11 at 13.52.13 (2).jpeg"
                alt="Battery Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Technische Specificaties</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <Battery className="w-8 h-8 text-[#aadd5f]" />
                  <div>
                    <p className="font-bold text-gray-900">Modulaire Capaciteit</p>
                    <p className="text-sm text-gray-600">
                      Start met 5kWh, uitbreidbaar tot 30kWh.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <RefreshCw className="w-8 h-8 text-[#aadd5f]" />
                  <div>
                    <p className="font-bold text-gray-900">Lange Levensduur</p>
                    <p className="text-sm text-gray-600">
                      Lithium-Iron-Phosphate (LFP) technologie. {'>'}6000 laadcycli.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <Zap className="w-8 h-8 text-[#aadd5f]" />
                  <div>
                    <p className="font-bold text-gray-900">Hoog Vermogen</p>
                    <p className="text-sm text-gray-600">
                      Laad en ontlaad tot 5kW continu. Genoeg voor de wasmachine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Echt resultaat van onze klanten</h2>
              <p className="text-xl text-gray-600">
                Zo maken onze klanten optimaal gebruik van hun zonne-energie met een thuisbatterij.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Familie Van den Berg - Utrecht</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Installatie</p>
                      <p className="text-gray-900 font-semibold">16 zonnepanelen + 10 kWh batterij</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Woningtype</p>
                      <p className="text-gray-900 font-semibold">Tussenwoning, 4 personen</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <span className="text-gray-700">Direct eigen verbruik zonder batterij</span>
                      <span className="font-bold text-orange-600">32%</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <span className="text-gray-700">Direct eigen verbruik met batterij</span>
                      <span className="font-bold text-green-600">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">Extra besparing per jaar</span>
                      <span className="font-bold text-2xl text-[#aadd5f]">€ 520,-</span>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mt-4">
                    "We laden de batterij 's nachts op tegen de goedkope tarieven en gebruiken overdag onze eigen opgeslagen energie. De batterij heeft zichzelf al terugverdiend!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeatPumpContent() {
  return (
    <div className="space-y-20">
      <section className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Welke warmtepomp past bij jou?
          </h2>
          <p className="text-gray-600 text-lg">
            Elk huis is anders. Wij kijken naar isolatie, afgiftesysteem en jouw wensen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Hybride Warmtepomp</h3>
            <p className="text-gray-600 mb-6">
              Werkt samen met je huidige CV-ketel. De warmtepomp doet 80% van het werk, de CV
              springt bij op extreem koude dagen.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Geschikt voor matig geïsoleerde huizen</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Bespaar direct 60-70% gas</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Goedkopere aanschaf</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#aadd5f] text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
              Gasloos
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#aadd5f]">All-Electric Warmtepomp</h3>
            <p className="text-gray-600 mb-6">
              Vervangt je CV-ketel volledig. Zorgt voor verwarming én warm tapwater. Je
              gasaansluiting kan de deur uit.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Voor goed geïsoleerde woningen</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">100% van het gas af</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Hoogste comfort (ook koelen)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-green-700 font-bold bg-green-100 px-3 py-1 rounded-full text-sm">
                <Leaf className="w-4 h-4" /> ISDE Subsidie 2025
              </div>
              <h2 className="text-3xl font-bold text-green-900">
                Krijg tot 30% terug van de overheid
              </h2>
              <p className="text-green-800 text-lg leading-relaxed">
                De overheid stimuleert verduurzaming. Voor warmtepompen zijn de subsidies in 2025
                zeer aantrekkelijk. Wij regelen de aanvraag voor je.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-medium text-green-900">Hybride Warmtepomp</span>
                  <span className="font-bold text-green-700">€ 2.400 - € 3.000 subsidie</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-medium text-green-900">All-Electric Warmtepomp</span>
                  <span className="font-bold text-green-700">€ 3.000 - € 4.500 subsidie</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
              <PiggyBank className="w-16 h-16 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold text-green-900">Rekenvoorbeeld</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Investering Hybride:</span>{' '}
                  <span className="text-gray-900">€ 6.000</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold">
                  <span>- Subsidie:</span> <span>€ 2.700</span>
                </div>
                <div className="h-px bg-gray-200 my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-gray-900">Netto Kosten:</span>{' '}
                  <span className="text-gray-900">€ 3.300</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">*Indicatieve prijzen incl. installatie.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Klantcase: Van gas naar elektrisch</h2>
              <p className="text-xl text-gray-600">
                Ontdek hoe onze klanten besparen met een warmtepomp.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <ThermometerSun className="w-8 h-8 text-green-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Familie Jansen - Houten</h3>
                  <p className="text-gray-600 mb-6">Tussenwoning uit 1985, redelijk geïsoleerd (spouwmuur + HR++ glas)</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">Installatie</p>
                      <p className="text-gray-900 font-bold">Hybride warmtepomp</p>
                      <p className="text-sm text-gray-600 mt-1">Bestaande CV-ketel behouden als backup</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">ISDE Subsidie ontvangen</p>
                      <p className="text-green-600 font-bold text-xl">€ 2.700,-</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Resultaten na 1 jaar</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                        <span className="text-gray-700">Gasverbruik voor warmtepomp</span>
                        <span className="font-bold text-gray-900">1.800 m³ / jaar</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                        <span className="text-gray-700">Gasverbruik na warmtepomp</span>
                        <span className="font-bold text-green-600">540 m³ / jaar</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">Besparing op gasrekening</span>
                        <span className="font-bold text-2xl text-green-600">€ 1.450,- / jaar</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                    <p className="text-gray-800 italic">
                      "De warmtepomp draait het hele seizoen stil en efficiënt. Alleen op de koudste dagen springt de CV-ketel bij. We zijn blij dat we de stap hebben gezet – onze gasrekening is met 70% gedaald!"
                    </p>
                    <p className="text-gray-600 text-sm mt-2">— Mark Jansen, geïnstalleerd maart 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SolutionPage({ type }: { type: SolutionType }) {
  const hero = heroContent[type];

  return (
    <>
      <SEO title={hero.seoTitle} description={hero.seoDescription} />

      <div className="min-h-screen bg-white">
        <section className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-[#aadd5f] font-bold uppercase tracking-wider text-sm">
                  <span className="w-8 h-0.5 bg-[#aadd5f]" />
                  Voltera Oplossingen
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                  {hero.title}
                </h1>
                <p className="text-2xl font-medium text-[#aadd5f]">{hero.subtitle}</p>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">{hero.description}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/calculator">
                    <Button className="h-14 px-8 rounded-full text-lg shadow-xl">
                      {hero.cta}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img src={hero.image} alt={hero.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <div className="py-20">
          {type === 'solar' && <SolarContent />}
          {type === 'battery' && <BatteryContent />}
          {type === 'heatpump' && <HeatPumpContent />}
        </div>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Klaar voor de volgende stap?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#aadd5f]">
                  <CheckCircle2 />
                </div>
                <span className="font-bold text-gray-900">Vrijblijvend Advies</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#aadd5f]">
                  <Wallet />
                </div>
                <span className="font-bold text-gray-900">Direct Inzicht</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#aadd5f]">
                  <Leaf />
                </div>
                <span className="font-bold text-gray-900">Duurzaam Resultaat</span>
              </div>
            </div>
            <Link to="/calculator">
              <Button className="h-14 px-12 rounded-full text-lg shadow-xl">
                Start Bespaarplan
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
