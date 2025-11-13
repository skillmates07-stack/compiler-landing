import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import { HiLightningBolt, HiSparkles } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(ctaRef.current.children, {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3')
      .from(statsRef.current.children, {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.4,
      }, '-=0.2')
      .from(iconsRef.current, {
        opacity: 0,
        scale: 0.9,
        stagger: 0.05,
        duration: 0.4,
      }, '-=0.2');

      // Parallax scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to([titleRef.current, subtitleRef.current, ctaRef.current], {
            y: progress * 100,
            opacity: 1 - progress * 1.5,
          });
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const languages = [
    { Icon: FaPython, name: 'Python', color: '#3776ab' },
    { Icon: FaJava, name: 'Java', color: '#f89820' },
    { Icon: SiCplusplus, name: 'C++', color: '#00599c' },
    { Icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
    { Icon: SiC, name: 'C', color: '#a8b9cc' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-black px-8 pt-32 pb-24"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-60"></div>

      {/* Noise texture (subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' /%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Hero Title - Clean & Spacious */}
        <h1 
          ref={titleRef}
          className="text-[56px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-6"
        >
          Code online with
          <br />
          <span className="text-[#00a8ff]">Visual Intelligence</span>
        </h1>

        {/* Subtitle - Professional spacing */}
        <p 
          ref={subtitleRef}
          className="text-[16px] md:text-[18px] leading-[1.6] text-[#a0a0a0] max-w-2xl mx-auto mb-12 font-normal"
        >
          Master programming through 2D visualization, AI-powered hints, and interactive learning across 5+ languages
        </p>

        {/* CTAs - Minimal & Clean */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
          <button className="group relative bg-[#00a8ff] hover:bg-[#0088cc] text-white px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200">
            <span className="flex items-center gap-2">
              <HiLightningBolt className="text-lg" />
              Start Learning Free
            </span>
          </button>
          
          <button className="group border border-[#1f1f1f] hover:border-[#333] bg-transparent text-white px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200">
            <span className="flex items-center gap-2">
              <HiSparkles className="text-lg" />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Stats - Minimal & Spacious */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-12 mb-16">
          {[
            { value: '50K+', label: 'Active Learners' },
            { value: '1M+', label: 'Code Visualizations' },
            { value: '5+', label: 'Languages' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-[32px] font-bold text-[#00a8ff] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-[#666] uppercase tracking-[0.1em] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Language Icons - Clean & Minimal */}
        <div className="flex justify-center gap-4 flex-wrap">
          {languages.map((lang, i) => (
            <div
              key={lang.name}
              ref={el => iconsRef.current[i] = el}
              className="group relative w-12 h-12 bg-[#141414] hover:bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-[#1f1f1f] hover:border-[#333] transition-all duration-200 cursor-pointer"
            >
              <lang.Icon 
                className="text-[24px] transition-transform duration-200 group-hover:scale-110" 
                style={{ color: lang.color }}
              />
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-[#666] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {lang.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[9px] text-[#666] uppercase tracking-[0.15em]">Scroll</span>
        <div className="w-[18px] h-[26px] border border-[#333] rounded-full flex justify-center p-1">
          <div className="w-[2px] h-[6px] bg-[#666] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
