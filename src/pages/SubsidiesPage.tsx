import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { CheckCircle2, Info, Leaf, Calculator } from 'lucide-react';

export default function SubsidiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-green-50/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 text-green-700 font-bold bg-green-100 px-3 py-1 rounded-full text-sm mb-6">
            <Leaf className="w-4 h-4" /> Regelingen 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-950">Subsidies & Regelgeving</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            De overheid helpt mee. Ontdek op welke subsidies en financiële voordelen jij recht hebt bij het verduurzamen van je woning.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">ISDE Subsidie</h2>
              <p className="text-lg text-gray-600">
                De Investeringssubsidie duurzame energie en energiebesparing (ISDE) is de belangrijkste pot voor warmtepompen en isolatie.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5" /> Belangrijke voorwaarden
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Installatie door erkend bedrijf (zoals Voltera)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Aanvragen binnen 24 maanden na installatie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Apparaat moet op de meldcodelijst staan
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 w-full">
              <Card className="shadow-lg border-none">
                <CardHeader className="bg-gray-50 pb-4">
                  <CardTitle>Indicatieve Bedragen 2025</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px] pl-6">Apparaat</TableHead>
                        <TableHead>Vermogen</TableHead>
                        <TableHead className="text-right pr-6">Subsidie</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium pl-6">Hybride Warmtepomp</TableCell>
                        <TableCell>4 - 6 kW</TableCell>
                        <TableCell className="text-right font-bold text-green-600 pr-6">€ 2.400 - € 2.700</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">All-Electric Warmtepomp</TableCell>
                        <TableCell>6 - 8 kW</TableCell>
                        <TableCell className="text-right font-bold text-green-600 pr-6">€ 3.000 - € 3.750</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">Warmtepompboiler</TableCell>
                        <TableCell>Alle types</TableCell>
                        <TableCell className="text-right font-bold text-green-600 pr-6">~ € 725</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="bg-white border-none shadow-xl">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-[#aadd5f]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#aadd5f] mb-2">
                    0%
                  </div>
                  <h3 className="text-2xl font-bold">BTW Tarief</h3>
                  <p className="text-gray-600">
                    Op de aanschaf en installatie van zonnepanelen betaal je als particulier helemaal geen BTW meer.
                  </p>
                  <div className="w-full pt-4 border-t mt-4">
                    <p className="text-sm font-medium text-green-600">Direct voordeel: 21% korting</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold">BTW-vrij Zonnepanelen</h2>
              <p className="text-lg text-gray-600">
                Sinds 2023 is het BTW-tarief voor zonnepanelen naar 0% gegaan. Dit geldt voor zowel de panelen als de installatiekosten en aanpassingen in de meterkast.
              </p>
              <p className="text-gray-600">
                Je hoeft hier niets voor te doen; wij factureren automatisch met 0% BTW. Dat scheelt een hoop administratief gedoe achteraf.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-[#aadd5f] text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-2xl" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold">Benieuwd wat dit voor jou betekent?</h2>
              <p className="text-xl opacity-90">
                In onze calculator nemen we de subsidies direct mee in de berekening. Zo zie je meteen wat je netto investeert.
              </p>
              <Link to="/bespaarplan">
                <Button size="lg" className="h-14 px-8 bg-white text-[#aadd5f] font-bold text-lg shadow-lg hover:bg-gray-50">
                  <Calculator className="w-5 h-5 mr-2" />
                  Ontvang subsidieoverzicht bij jouw plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
