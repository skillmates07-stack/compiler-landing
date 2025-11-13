import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaCode } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    // Hide header on scroll down, show on scroll up
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 80) {
        gsap.to(headerRef.current, { y: -100, duration: 0.3, ease: 'power2.inOut' });
      } else {
        gsap.to(headerRef.current, { y: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#1f1f1f]"
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#00a8ff] rounded-md flex items-center justify-center hover:bg-[#0088cc] transition-colors duration-200">
              <FaCode className="text-white text-sm" />
            </div>
            <span className="text-lg font-semibold text-white">
              CodeFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[14px] text-[#a0a0a0] hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-[#00a8ff] hover:bg-[#0088cc] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition-all duration-200">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-[#1f1f1f] pt-4">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[14px] text-[#a0a0a0] hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#00a8ff] hover:bg-[#0088cc] text-white px-5 py-2 rounded-lg text-[14px] font-medium w-full mt-2 transition-all duration-200">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
