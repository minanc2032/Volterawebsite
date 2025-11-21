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
