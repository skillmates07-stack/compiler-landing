import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

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
        ease: 'power2.out',
      }, '-=0.2')
      .from(iconsRef.current, {
        opacity: 0,
        scale: 0.9,
        stagger: 0.05,
        duration: 0.4,
        ease: 'back.out(1.2)',
      }, '-=0.2');

      iconsRef.current.forEach((icon) => {
        if (icon) {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
          });
          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
          });
        }
      });

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
          gsap.to([statsRef.current, ...iconsRef.current], {
            y: progress * 150,
            opacity: 1 - progress * 2,
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
      className="relative flex items-center justify-center bg-black px-6 py-32 min-h-screen"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black opacity-80"></div>

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' /%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* Hero Title - Wider, better vertical spacing */}
        <h1 
          ref={titleRef}
          className="text-[56px] md:text-[80px] font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-10"
        >
          Code online with
          <br />
          <span className="text-white/60">Visual Intelligence</span>
        </h1>

        {/* Subtitle - Better spacing */}
        <p 
          ref={subtitleRef}
          className="text-[16px] md:text-[18px] leading-[1.7] text-white/40 max-w-2xl mx-auto mb-16 font-normal"
        >
          Master programming through 2D visualization, AI-powered hints, and interactive learning across 5+ languages
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-24">
          <button className="group relative bg-white hover:bg-white/90 text-black px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200">
            Start Learning Free
          </button>
          
          <button className="group border border-white/10 hover:border-white/20 bg-transparent text-white/70 hover:text-white px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200">
            Watch Demo
          </button>
        </div>

        {/* Stats - Better spacing */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-20 mb-24">
          {[
            { value: '50K+', label: 'Active Learners' },
            { value: '1M+', label: 'Code Visualizations' },
            { value: '5+', label: 'Languages' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-[32px] font-semibold text-white/80 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-white/30 uppercase tracking-[0.12em] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Language Icons - Remove extra space, icons at bottom */}
        <div className="flex justify-center gap-4 flex-wrap">
          {languages.map((lang, i) => (
            <div
              key={lang.name}
              ref={el => iconsRef.current[i] = el}
              className="group relative w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center border border-white/5 hover:border-white/10 transition-all duration-200 cursor-pointer"
            >
              <lang.Icon 
                className="text-[22px] transition-transform duration-200" 
                style={{ color: lang.color, opacity: 0.7 }}
              />
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {lang.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - Close to content, minimal gap */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 hover:opacity-40 transition-opacity cursor-pointer">
        <span className="text-[9px] text-white uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[18px] h-[26px] border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-[2px] h-[5px] bg-white/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
