import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaCode } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(headerRef.current, { y: -100, duration: 0.3 });
      } else {
        gsap.to(headerRef.current, { y: 0, duration: 0.3 });
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#333]"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaCode className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-white">
              Code<span className="text-[#3b82f6]">Flow</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3b82f6] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-full font-semibold transition-all">
            Get Started
          </button>

          <button 
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            {['Features', 'Demo', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-full font-semibold w-full mt-2">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
