import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Home, Zap, Battery, Thermometer, Check, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { RadioGroup, RadioGroupItem } from '../components/ui/RadioGroup';
import { Slider } from '../components/ui/Slider';
import { Checkbox } from '../components/ui/Checkbox';
import { SEO } from '../components/SEO';
import { createCalculatorSubmission } from '../lib/supabase';

export default function CalculatorPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    houseType: 'tussen',
    roofType: 'schuin',
    usage: 3500,
    products: ['solar'] as string[],
    name: '',
    email: '',
    phone: '',
  });

  const calculateResults = () => {
    const baseUsage = formData.usage;
    const hasSolar = formData.products.includes('solar');
    const hasBattery = formData.products.includes('battery');
    const hasHeatPump = formData.products.includes('heatpump');

    let savings = 0;
    if (hasSolar) savings += baseUsage * 0.25 * 0.35;
    if (hasBattery) savings += 300;
    if (hasHeatPump) savings += 800;

    const paybackYears = ((hasSolar ? 8000 : 0) + (hasBattery ? 6000 : 0) + (hasHeatPump ? 12000 : 0)) / savings;
    const co2Reduction = baseUsage * 0.4;

    return {
      savings: Math.round(savings),
      payback: paybackYears.toFixed(1),
      co2: Math.round(co2Reduction),
    };
  };

  const nextStep = async () => {
    if (step === 4) {
      setLoading(true);

      await createCalculatorSubmission({
        house_type: formData.houseType,
        roof_type: formData.roofType,
        annual_usage: formData.usage,
        interested_in_solar: formData.products.includes('solar'),
        interested_in_battery: formData.products.includes('battery'),
        interested_in_heatpump: formData.products.includes('heatpump'),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      setTimeout(() => {
        setLoading(false);
        setStep(5);
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const results = calculateResults();

  return (
    <>
      <SEO
        title="Bereken jouw besparing - Voltera"
        description="Ontdek in 2 minuten hoeveel je kunt besparen met zonnepanelen, een thuisbatterij of warmtepomp"
      />

      <div className="min-h-screen bg-gray-50 py-12 md:py-20 pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <div className="flex justify-between mb-4 text-sm font-medium text-gray-600">
              <span>Woning</span>
              <span>Verbruik</span>
              <span>Wensen</span>
              <span>Contact</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#aadd5f] transition-all duration-500 ease-out"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          {step < 5 ? (
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-[#aadd5f] p-6 text-white">
                <h1 className="text-2xl font-bold">Jouw Bespaarplan</h1>
                <p className="opacity-90">Stap {step} van 4</p>
              </div>
              <div className="p-8">
                {step === 1 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Wat voor type woning heb je?
                      </h2>
                      <p className="text-gray-600">Dit helpt ons de dakgrootte in te schatten.</p>
                      <RadioGroup
                        defaultValue={formData.houseType}
                        onValueChange={(v) => setFormData({ ...formData, houseType: v })}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        {[
                          { value: 'tussen', label: 'Tussenwoning', icon: Home },
                          { value: 'hoek', label: 'Hoek/2-onder-1', icon: Home },
                          { value: 'vrij', label: 'Vrijstaand', icon: Home },
                        ].map((type) => (
                          <div key={type.value}>
                            <RadioGroupItem
                              value={type.value}
                              id={type.value}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={type.value}
                              className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 peer-data-[state=checked]:border-[#aadd5f] peer-data-[state=checked]:bg-[#aadd5f]/5 cursor-pointer transition-all"
                            >
                              <type.icon className="w-8 h-8 mb-3 text-gray-400 peer-data-[state=checked]:text-[#aadd5f]" />
                              <span className="font-bold text-gray-900">{type.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold text-gray-900">Wat voor type dak heb je?</h2>
                      <RadioGroup
                        defaultValue={formData.roofType}
                        onValueChange={(v) => setFormData({ ...formData, roofType: v })}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {[
                          { value: 'schuin', label: 'Schuin dak' },
                          { value: 'plat', label: 'Plat dak' },
                        ].map((type) => (
                          <div key={type.value}>
                            <RadioGroupItem
                              value={type.value}
                              id={`roof-${type.value}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`roof-${type.value}`}
                              className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 peer-data-[state=checked]:border-[#aadd5f] peer-data-[state=checked]:bg-[#aadd5f]/5 cursor-pointer transition-all font-medium"
                            >
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Wat is je huidige stroomverbruik?
                      </h2>
                      <p className="text-gray-600">Een schatting is voldoende.</p>

                      <div className="pt-8 pb-8 px-4">
                        <Slider
                          defaultValue={[formData.usage]}
                          max={10000}
                          step={100}
                          onValueChange={(v) => setFormData({ ...formData, usage: v[0] })}
                        />
                      </div>

                      <div className="text-center">
                        <span className="text-4xl font-bold text-[#aadd5f]">{formData.usage}</span>
                        <span className="text-xl text-gray-600 ml-2">kWh per jaar</span>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Waar heb je interesse in?
                      </h2>
                      <p className="text-gray-600">Selecteer één of meerdere opties.</p>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          {
                            id: 'solar',
                            icon: Zap,
                            title: 'Zonnepanelen',
                            desc: 'Zelf stroom opwekken',
                          },
                          {
                            id: 'battery',
                            icon: Battery,
                            title: 'Thuisbatterij',
                            desc: 'Stroom opslaan voor later',
                          },
                          {
                            id: 'heatpump',
                            icon: Thermometer,
                            title: 'Warmtepomp',
                            desc: 'Duurzaam verwarmen',
                          },
                        ].map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start space-x-4 border-2 border-gray-200 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <Checkbox
                              id={item.id}
                              checked={formData.products.includes(item.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData({
                                    ...formData,
                                    products: [...formData.products, item.id],
                                  });
                                } else {
                                  setFormData({
                                    ...formData,
                                    products: formData.products.filter((p) => p !== item.id),
                                  });
                                }
                              }}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <item.icon className="w-5 h-5 text-[#aadd5f]" />
                                <Label
                                  htmlFor={item.id}
                                  className="text-lg font-medium cursor-pointer"
                                >
                                  {item.title}
                                </Label>
                              </div>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Waar mogen we het plan naartoe sturen?
                      </h2>
                      <p className="text-gray-600">
                        Je ontvangt direct een indicatie per e-mail.
                      </p>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Naam</Label>
                          <Input
                            id="name"
                            placeholder="Jouw naam"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">E-mailadres</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="naam@voorbeeld.nl"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="phone">Telefoonnummer</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="06 12345678"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-8 border-t mt-8">
                  {step > 1 ? (
                    <Button variant="outline" onClick={prevStep} disabled={loading}>
                      <ArrowLeft className="w-4 h-4 mr-2" /> Vorige
                    </Button>
                  ) : (
                    <div />
                  )}

                  <Button onClick={nextStep} disabled={loading} className="min-w-[160px]">
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : step === 4 ? (
                      'Verstuur aanvraag'
                    ) : (
                      <>
                        Volgende <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="border-none shadow-xl animate-in zoom-in-95">
              <div className="bg-green-600 p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Bedankt voor je aanvraag!</h1>
                <p className="text-green-100">
                  We hebben een indicatief bespaarplan voor je opgesteld.
                </p>
              </div>
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl text-center space-y-2">
                    <p className="text-gray-600 text-sm uppercase tracking-wider">
                      Geschatte besparing
                    </p>
                    <p className="text-3xl font-bold text-green-600">€ {results.savings}</p>
                    <p className="text-sm text-gray-600">per jaar</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl text-center space-y-2">
                    <p className="text-gray-600 text-sm uppercase tracking-wider">
                      Terugverdientijd
                    </p>
                    <p className="text-3xl font-bold text-[#aadd5f]">{results.payback} jaar</p>
                    <p className="text-sm text-gray-600">o.b.v. huidige prijzen</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl text-center space-y-2">
                    <p className="text-gray-600 text-sm uppercase tracking-wider">CO2 Reductie</p>
                    <p className="text-3xl font-bold text-blue-600">{results.co2} kg</p>
                    <p className="text-sm text-gray-600">per jaar</p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Wat gebeurt er nu?</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Eén van onze adviseurs gaat aan de slag met jouw gegevens om dit plan te
                    finetunen. We nemen binnen 1 werkdag contact met je op om de details te
                    bespreken en een afspraak in te plannen voor een schouw.
                  </p>
                </div>
                <div className="text-center pt-4 flex gap-4 justify-center">
                  <Link to="/">
                    <Button variant="outline">Terug naar home</Button>
                  </Link>
                  <Link to="/contact">
                    <Button>Maak direct een afspraak</Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
