import { useState } from 'react';
import { Home, Calendar, Zap, Battery, Wind, Mail, Phone, User, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

type FormData = {
  homeType: string;
  buildingYear: string;
  electricityUsage: string;
  gasUsage: string;
  hasSolarPanels: boolean;
  interestedInBattery: boolean;
  interestedInHeatPump: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export default function Bespaarplan() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    homeType: '',
    buildingYear: '',
    electricityUsage: '',
    gasUsage: '',
    hasSolarPanels: false,
    interestedInBattery: false,
    interestedInHeatPump: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 6;

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    const estimatedSavings = calculateSavings(formData);

    return (
      <div className="min-h-screen pt-24 bg-gradient-to-b from-[#f0f4f8] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
          <div className="text-center mb-12">
            <div className="bg-[#aadd5f] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#2a3f4f] mb-4">Jouw persoonlijk bespaarplan</h1>
            <p className="text-xl text-gray-700">
              Bedankt {formData.firstName}! Hier is een eerste indicatie van wat u kunt besparen.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#2a3f4f] mb-8">Jouw besparingspotentieel</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#f0f4f8] rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">Jaarlijkse besparing</p>
                <p className="text-4xl font-bold text-[#aadd5f]">€{estimatedSavings.annual}</p>
              </div>
              <div className="bg-[#f0f4f8] rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">Terugverdientijd</p>
                <p className="text-4xl font-bold text-[#2a3f4f]">{estimatedSavings.payback} jaar</p>
              </div>
              <div className="bg-[#f0f4f8] rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">Besparing 25 jaar</p>
                <p className="text-4xl font-bold text-[#aadd5f]">€{estimatedSavings.lifetime}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="text-2xl font-bold text-[#2a3f4f] mb-4">Aanbevolen oplossingen</h3>
              <div className="space-y-4">
                {estimatedSavings.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start bg-[#f0f4f8] rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-[#aadd5f] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#2a3f4f] mb-1">{rec.title}</h4>
                      <p className="text-gray-700 text-sm">{rec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <h3 className="font-bold text-[#2a3f4f] mb-2">Beschikbare subsidies</h3>
              <p className="text-gray-700 mb-3">
                Op basis van uw gekozen oplossingen komt u mogelijk in aanmerking voor subsidies tot €{estimatedSavings.subsidies}.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• ISDE subsidie warmtepomp</li>
                <li>• BTW-teruggave zonnepanelen mogelijk</li>
                <li>• Regionale financieringsmogelijkheden</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2a3f4f] to-[#3d5a6f] text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Volgende stap: persoonlijk adviesgesprek</h2>
            <p className="text-lg mb-6 opacity-90">
              Onze specialist neemt binnen 1 werkdag contact met u op om uw situatie door te spreken en een gedetailleerd plan op te stellen.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Gratis en vrijblijvend</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Binnen 1 werkdag contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#f0f4f8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2a3f4f] mb-4">Bereken direct jouw besparing</h1>
          <p className="text-xl text-gray-700">
            Ontdek in 2 minuten hoeveel jij kunt besparen met zonnepanelen, batterij en warmtepomp.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Stap {step} van {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#aadd5f] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 && (
            <div>
              <div className="flex items-center mb-6">
                <Home className="w-8 h-8 text-[#aadd5f] mr-3" />
                <h2 className="text-2xl font-bold text-[#2a3f4f]">Wat voor woning heeft u?</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'apartment', label: 'Appartement' },
                  { value: 'row_house', label: 'Rijwoning' },
                  { value: 'semi_detached', label: 'Twee-onder-één-kap' },
                  { value: 'detached', label: 'Vrijstaand' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('homeType', option.value)}
                    className={`p-6 rounded-xl border-2 transition-all text-center font-semibold ${
                      formData.homeType === option.value
                        ? 'border-[#aadd5f] bg-[#aadd5f]/10 text-[#2a3f4f]'
                        : 'border-gray-200 hover:border-[#aadd5f]/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-[#aadd5f] mr-3" />
                <h2 className="text-2xl font-bold text-[#2a3f4f]">Wat is het bouwjaar van uw woning?</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'before_1990', label: 'Voor 1990' },
                  { value: '1990_2010', label: '1990 - 2010' },
                  { value: '2010_2020', label: '2010 - 2020' },
                  { value: 'after_2020', label: 'Na 2020' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('buildingYear', option.value)}
                    className={`p-6 rounded-xl border-2 transition-all text-center font-semibold ${
                      formData.buildingYear === option.value
                        ? 'border-[#aadd5f] bg-[#aadd5f]/10 text-[#2a3f4f]'
                        : 'border-gray-200 hover:border-[#aadd5f]/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-[#aadd5f] mr-3" />
                <h2 className="text-2xl font-bold text-[#2a3f4f]">Wat is uw huidige energieverbruik?</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Stroomverbruik per jaar (kWh)
                  </label>
                  <input
                    type="number"
                    value={formData.electricityUsage}
                    onChange={(e) => updateFormData('electricityUsage', e.target.value)}
                    placeholder="Bijvoorbeeld: 3500"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">Gemiddeld huishouden: 2500-4000 kWh</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Gasverbruik per jaar (m³)
                  </label>
                  <input
                    type="number"
                    value={formData.gasUsage}
                    onChange={(e) => updateFormData('gasUsage', e.target.value)}
                    placeholder="Bijvoorbeeld: 1200"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">Gemiddeld huishouden: 800-1500 m³</p>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="flex items-center mb-6">
                <Battery className="w-8 h-8 text-[#aadd5f] mr-3" />
                <h2 className="text-2xl font-bold text-[#2a3f4f]">Heeft u al zonnepanelen?</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => updateFormData('hasSolarPanels', true)}
                  className={`p-8 rounded-xl border-2 transition-all text-center font-semibold ${
                    formData.hasSolarPanels
                      ? 'border-[#aadd5f] bg-[#aadd5f]/10 text-[#2a3f4f]'
                      : 'border-gray-200 hover:border-[#aadd5f]/50'
                  }`}
                >
                  Ja, ik heb al zonnepanelen
                </button>
                <button
                  onClick={() => updateFormData('hasSolarPanels', false)}
                  className={`p-8 rounded-xl border-2 transition-all text-center font-semibold ${
                    !formData.hasSolarPanels
                      ? 'border-[#aadd5f] bg-[#aadd5f]/10 text-[#2a3f4f]'
                      : 'border-gray-200 hover:border-[#aadd5f]/50'
                  }`}
                >
                  Nee, nog niet
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <div className="flex items-center mb-6">
                <Wind className="w-8 h-8 text-[#aadd5f] mr-3" />
                <h2 className="text-2xl font-bold text-[#2a3f4f]">Waar heeft u interesse in?</h2>
              </div>
              <p className="text-gray-600 mb-6">Selecteer alle opties die voor u interessant zijn</p>
              <div className="space-y-4">
                <label className="flex items-center p-6 rounded-xl border-2 border-gray-200 hover:border-[#aadd5f]/50 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={formData.interestedInBattery}
                    onChange={(e) => updateFormData('interestedInBattery', e.target.checked)}
                    className="w-6 h-6 text-[#aadd5f] mr-4"
                  />
                  <div>
                    <p className="font-bold text-[#2a3f4f]">Thuisbatterij</p>
                    <p className="text-sm text-gray-600">Optimaal gebruik van zonnestroom</p>
                  </div>
                </label>
                <label className="flex items-center p-6 rounded-xl border-2 border-gray-200 hover:border-[#aadd5f]/50 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={formData.interestedInHeatPump}
                    onChange={(e) => updateFormData('interestedInHeatPump', e.target.checked)}
                    className="w-6 h-6 text-[#aadd5f] mr-4"
                  />
                  <div>
                    <p className="font-bold text-[#2a3f4f]">Warmtepomp</p>
                    <p className="text-sm text-gray-600">Energie-efficiënte verwarming</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-[#aadd5f] mr-3" />
                <h2 className="text-2xl font-bold text-[#2a3f4f]">Uw contactgegevens</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Voornaam</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Achternaam</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Mail className="w-5 h-5 inline mr-2" />
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#aadd5f] focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Vorige
              </button>
            )}
            {step < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={
                  (step === 1 && !formData.homeType) ||
                  (step === 2 && !formData.buildingYear) ||
                  (step === 3 && (!formData.electricityUsage || !formData.gasUsage))
                }
                className="flex items-center ml-auto px-6 py-3 bg-[#aadd5f] text-white rounded-full font-semibold hover:bg-[#99cc4f] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Volgende
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                className="flex items-center ml-auto px-8 py-3 bg-[#aadd5f] text-white rounded-full font-semibold hover:bg-[#99cc4f] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Bereken mijn besparing
                <CheckCircle className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateSavings(data: FormData) {
  const electricityUsage = parseInt(data.electricityUsage) || 3500;
  const gasUsage = parseInt(data.gasUsage) || 1200;

  let annual = 0;
  let investment = 0;
  const recommendations = [];

  if (!data.hasSolarPanels) {
    annual += 1000;
    investment += 6500;
    recommendations.push({
      title: 'Zonnepanelen (10 stuks, 4.000 Wp)',
      description: 'Bespaar gemiddeld €1.000 per jaar op uw energierekening'
    });
  }

  if (data.interestedInBattery) {
    annual += 550;
    investment += 7500;
    recommendations.push({
      title: 'Thuisbatterij (10 kWh)',
      description: 'Maximaliseer uw zelfverbruik en profiteer van dynamische tarieven'
    });
  }

  if (data.interestedInHeatPump) {
    annual += 600;
    investment += 6000;
    recommendations.push({
      title: 'Hybride Warmtepomp',
      description: 'Bespaar 30-50% op uw gasverbruik en verminder CO2-uitstoot'
    });
  }

  const payback = investment > 0 ? Math.round(investment / annual) : 0;
  const lifetime = annual * 25 - investment;
  const subsidies = data.interestedInHeatPump ? 2100 : 0;

  return {
    annual: annual.toLocaleString('nl-NL'),
    payback,
    lifetime: lifetime.toLocaleString('nl-NL'),
    subsidies: subsidies.toLocaleString('nl-NL'),
    recommendations
  };
}
