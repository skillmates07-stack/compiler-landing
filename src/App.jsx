import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import DemoSection from './components/sections/DemoSection';
import PricingSection from './components/sections/PricingSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
