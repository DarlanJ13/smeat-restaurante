import Navigation from './components/Navigation';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Experience from './sections/Experience';
import FeaturedDishes from './sections/FeaturedDishes';
import Gallery from './sections/Gallery';
import MenuSection from './sections/MenuSection';
import Contact from './sections/Contact';
import CallToAction from './sections/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-ivory">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <FeaturedDishes />
        <Gallery />
        <CallToAction />
        <MenuSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
