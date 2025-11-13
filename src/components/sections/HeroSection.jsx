import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const floatingIconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for orchestrated entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title reveal with split text effect
      tl.from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power4.out',
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
      }, '-=0.6')
      .from(ctaRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
      }, '-=0.4')
      .from(statsRef.current.children, {
        opacity: 0,
        scale: 0.5,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, '-=0.3')
      .from(floatingIconsRef.current, {
        opacity: 0,
        y: 100,
        rotation: 180,
        stagger: 0.08,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.6');

      // Continuous floating animation
      floatingIconsRef.current.forEach((icon, i) => {
        gsap.to(icon, {
          y: -15,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });

        // Rotate on hover
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { rotation: 360, duration: 0.6, ease: 'power2.out' });
        });
      });

      // Background grid animation
      gsap.to('.bg-grid-pattern', {
        backgroundPosition: '50px 50px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const languages = [
    { Icon: FaPython, name: 'Python', color: 'text-yellow-400' },
    { Icon: FaJava, name: 'Java', color: 'text-red-500' },
    { Icon: SiCplusplus, name: 'C++', color: 'text-blue-400' },
    { Icon: FaJs, name: 'JavaScript', color: 'text-yellow-300' },
    { Icon: SiC, name: 'C', color: 'text-blue-500' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/50 to-dark-bg"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Code online with{' '}
            <span className="gradient-text">Visual Intelligence</span>
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Master programming through <span className="text-primary-500 font-semibold">2D visualization</span>, 
            <span className="text-purple-500 font-semibold"> AI-powered hints</span>, and 
            interactive learning across 5+ languages
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group relative bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-glow overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <HiLightningBolt className="text-2xl" />
                Start Learning Free
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="border-2 border-primary-500 text-white hover:bg-primary-500/10 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
              <HiSparkles className="text-2xl" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap justify-center gap-8 mb-20">
            {[
              { value: '50K+', label: 'Active Learners' },
              { value: '1M+', label: 'Code Visualizations' },
              { value: '5+', label: 'Languages' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-primary-500">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Floating language icons */}
          <div className="flex justify-center gap-6 flex-wrap">
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                ref={el => floatingIconsRef.current[i] = el}
                className="group relative w-20 h-20 bg-dark-card rounded-2xl flex items-center justify-center border border-dark-border hover:border-primary-500 transition-all cursor-pointer hover:shadow-glow"
              >
                <lang.Icon className={`text-4xl ${lang.color} group-hover:scale-125 transition-transform`} />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {lang.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
