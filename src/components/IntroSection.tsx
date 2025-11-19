import { Check } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="mb-6">
            <span className="sub-heading inline-flex items-center gap-2 bg-[#f3fee2] px-5 py-2.5 rounded-full text-sm font-bold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#79dc32] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#79dc32]"></span>
              </span>
              <span className="text-[#79dc32]">ONZE OPLOSSINGEN</span>
            </span>
          </h4>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-[#000000]">
            Maak je huis duurzamer
            <br />
            met oplossingen van Voltera
          </h2>
          <p className="text-base text-[#555555] leading-relaxed">
            Wij geloven we dat verduurzamen geen gedoe hoeft te zijn.
            Onze experts helpen je stap voor stap met slimme, rendabele oplossingen – van zonnepanelen en thuisbatterijen tot warmtepompen en airco's.
          </p>
        </div>
      </div>
    </section>
  );
}
