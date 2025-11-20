import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import ProductSections from '../components/ProductSections';
import ContactCTA from '../components/ContactCTA';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ProductSections />
      <ContactCTA />
      <Testimonials />
      <FAQ />
    </>
  );
}
