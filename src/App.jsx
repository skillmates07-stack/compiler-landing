import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import DemoSection from './components/sections/DemoSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
    </div>
  );
}

export default App;
