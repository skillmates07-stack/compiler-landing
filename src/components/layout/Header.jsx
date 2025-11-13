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
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Minimal like Fey */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center hover:bg-white/15 transition-colors duration-200">
              <FaCode className="text-white/80 text-sm" />
            </div>
            <span className="text-base font-medium text-white/90">
              CodeFlow
            </span>
          </div>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden md:flex items-center gap-6">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button - Minimal */}
          <button className="hidden md:block bg-white/10 hover:bg-white/15 text-white/90 px-4 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200 border border-white/10">
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white/80 text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-3 pb-3 flex flex-col gap-2 border-t border-white/5 pt-3">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-white/10 hover:bg-white/15 text-white/90 px-4 py-1.5 rounded-md text-[13px] font-medium w-full mt-2 transition-all duration-200 border border-white/10">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
