import { Phone, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#f3fee2] rounded-3xl p-12 sm:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex items-center justify-center">
              <MessageCircle
                className="w-16 h-16 text-[#3d4f5c] stroke-[1.5]"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-6 leading-tight">
              Ontdekken welke besparing <br />
              wij jou kunnen opleveren?
            </h2>
            <p className="text-base text-[#555555] mb-10 leading-relaxed">
              Plan een vrijblijvend adviesgesprek en ontdek binnen 1 werkdag<br />
              wat jij kunt besparen met onze oplossingen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+31850479497"
                className="bg-white text-[#000000] px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-gray-50 transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
              >
                📞 Bel direct: +31 (0)85 047 94 97
              </a>
              <button className="bg-[#aadd5f] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#99cc4f] transition-all duration-200 inline-flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
                  <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/>
                  <rect x="11" y="17" width="2" height="2" rx="1"/>
                </svg>
                Gratis advies aanvragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
