import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaCode, FaRocket } from 'react-icons/fa';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline for orchestrated entrance
      const tl = gsap.timeline();

      // Title appears with letter-by-letter reveal
      tl.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power4.out',
      })
        .from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
        .from(ctaRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }, '-=0.3')
        .from(iconRefs.current, {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.5');

      // Floating animation loop
      gsap.to(iconRefs.current, {
        y: -10,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold text-white mb-6">
          Code online with <span className="text-blue-500">One Compiler</span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Visualize data structures in 2D. Get AI-powered hints. Learn 5+ languages interactively.
        </p>
        
        <div ref={ctaRef}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Start Learning Free
          </button>
        </div>

        {/* Floating language icons */}
        <div className="flex justify-center gap-8 mt-16">
          {['Python', 'Java', 'C++', 'JavaScript', 'C'].map((lang, i) => (
            <div
              key={lang}
              ref={el => iconRefs.current[i] = el}
              className="w-16 h-16 bg-[#252525] rounded-lg flex items-center justify-center border border-[#333] hover:border-blue-500 transition-colors cursor-pointer"
            >
              <FaCode className="text-3xl text-blue-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
