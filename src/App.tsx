import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ProductSections from './components/ProductSections';
import ContactCTA from './components/ContactCTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <IntroSection />
      <ProductSections />
      <ContactCTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
