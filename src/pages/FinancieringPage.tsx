import { Link } from 'react-router-dom';
import { CheckCircle2, Info, Landmark, PiggyBank, Wallet, Building2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/Alert';
import { SEO } from '../components/SEO';

export default function FinancieringPage() {
  return (
    <>
      <SEO
        title="Financieringsopties - Voltera"
        description="Ontdek de verschillende financieringsmogelijkheden voor verduurzaming van je woning. Van Warmtefonds tot groene hypotheek."
      />

      <div className="min-h-screen bg-white pt-20">
        <section className="py-20 bg-blue-50/50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950">
              Financieringsopties
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Investeren in verduurzaming loont, maar vraagt vaak om een investering vooraf. Hieronder
              lichten we de meest voorkomende financieringsvormen toe.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Alert variant="warning" className="mb-12">
              <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <AlertTitle className="font-bold mb-1">Belangrijke informatie</AlertTitle>
                <AlertDescription>
                  Voltera is een technisch installatiebedrijf. Wij geven{' '}
                  <strong>geen financieel advies</strong>. Onderstaande informatie is puur ter
                  oriëntatie. Raadpleeg altijd een financieel adviseur of kredietverstrekker voor
                  jouw specifieke situatie.
                </AlertDescription>
              </div>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">Nationaal Warmtefonds</h3>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Het Nationaal Warmtefonds biedt de <strong>Energiebespaarlening</strong> aan. Dit
                      is een lening met een aantrekkelijke rente, speciaal voor verduurzaming van
                      woningen.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-900">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Boetevrij aflossen mogelijk</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Rente vaak lager dan persoonlijke lening</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>
                          Voor huishoudens met verzamelinkomen tot €60.000 zelfs 0% rente (check
                          voorwaarden)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
                    <PiggyBank className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-950 mb-4">Eigen Middelen</h3>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Het betalen vanuit eigen spaargeld is vaak de voordeligste optie, omdat je geen
                      rente betaalt over een lening.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-900">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Geen maandelijkse lasten</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Direct eigenaar van de installatie</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Hoger rendement dan op de spaarrekening</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-950 mb-4">Hypotheek Verhoging</h3>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Je kunt je bestaande hypotheek verhogen of een bouwdepot gebruiken voor
                      verduurzaming. Veel banken bieden rentekorting bij een goed energielabel.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-900">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Rente is fiscaal aftrekbaar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Extra leenruimte voor energiebesparende maatregelen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Looptijd vaak 30 jaar (lage maandlasten)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-700 mb-4">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-950 mb-4">Gemeentelijke Leningen</h3>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Sommige gemeentes bieden via het SVn (Stimuleringsfonds Volkshuisvesting) lokale
                      duurzaamheidsleningen aan tegen gunstige voorwaarden.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-900">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Verschilt per gemeente</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Vaak gunstige rentetarieven</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Check de mogelijkheden in jouw woonplaats</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Benieuwd naar het totaalplaatje?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              In ons bespaarplan zie je niet alleen wat je gaat besparen, maar krijg je ook een
              indicatie van de investering.
            </p>
            <Link to="/calculator">
              <Button className="h-14 px-10 rounded-full text-lg shadow-xl group">
                Bekijk jouw opties in ons bespaarplan
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
