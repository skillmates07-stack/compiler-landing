import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import DemoSection from './components/sections/DemoSection';
import PricingSection from './components/sections/PricingSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={
          <div style={{ background: '#000000' }}>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <DemoSection />
            <PricingSection />
            <CTASection />
            <Footer />
          </div>
        } />
        
        {/* Auth Pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
