import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f0f4f8]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/WhatsApp Image 2025-11-11 at 13.45.14 copy.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#2a3f4f]/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
            DUURZAAM
            <br />
            <span className="text-[#aadd5f] underline">WONEN</span>
            <br />
            ZONDER ZORGEN
          </h1>

          <Link to="/bespaarplan" className="bg-[#aadd5f] text-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#99cc4f] transition-all duration-300 inline-flex items-center gap-2 mb-10 mx-auto">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
              <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/>
              <rect x="11" y="17" width="2" height="2" rx="1"/>
            </svg>
            Gratis advies aanvragen
          </Link>

          <div className="flex items-center gap-4 justify-center">
            <a href="https://nl.trustpilot.com/review/voltera.nl" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/WhatsApp Image 2025-11-12 at 22.19.18 (1).jpeg"
                alt="Trustpilot"
                className="h-12 w-auto object-contain"
              />
            </a>
            <a href="https://www.google.com/search?newwindow=1&sca_esv=e133efb347e6c9df&sxsrf=AE3TifO3Z3KGGnrziznzD9LWEGB5dAPD4Q:1761329188962&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwoctDgESwxCWhhNGCBnZmBLgXR5hxWoP643bP7ikIDRGCDt75xB7hIwXjA1T0vFYrdyQD7JbJcEvjHuFVQyzLTvgMeK&q=Voltera+Reviews&sa=X&ved=2ahUKEwio44_Ftr2QAxXrKRAIHXFBPJwQ0bkNegQIHhAD&biw=1920&bih=911&dpr=1" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/WhatsApp Image 2025-11-11 at 13.52.13 copy.jpeg"
                alt="Google Reviews"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
