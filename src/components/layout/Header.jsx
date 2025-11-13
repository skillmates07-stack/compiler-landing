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
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#1f1f1f]"
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00a8ff] rounded-md flex items-center justify-center">
              <FaCode className="text-white text-sm" />
            </div>
            <span className="text-lg font-semibold text-white">
              CodeFlow
            </span>
          </div>

          {/* Desktop Nav */}
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

          {/* CTA */}
          <button className="hidden md:block bg-[#00a8ff] hover:bg-[#0088cc] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition-all duration-200">
            Get Started
          </button>

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
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-[#1f1f1f] pt-4">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[14px] text-[#a0a0a0] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#00a8ff] text-white px-5 py-2 rounded-lg text-[14px] font-medium w-full mt-2">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
