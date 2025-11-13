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
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg"
    >
      <div className="max-w-[1400px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - Dark.design style */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-200">
              <FaCode className="text-black text-sm" />
            </div>
            <span className="text-base font-semibold text-white">
              CodeFlow
            </span>
          </div>

          {/* Desktop Navigation - Wide spacing like Dark.design */}
          <nav className="hidden md:flex items-center gap-10">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[14px] text-white/70 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side buttons - Dark.design style */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-[14px] text-white/70 hover:text-white px-4 py-2 transition-colors duration-200">
              Sign in
            </button>
            <button className="bg-white hover:bg-white/90 text-black px-5 py-2 rounded-lg text-[14px] font-medium transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[14px] text-white/70 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <button className="text-[14px] text-white/70 px-4 py-2 text-left">
                Sign in
              </button>
              <button className="bg-white text-black px-5 py-2 rounded-lg text-[14px] font-medium w-full">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
