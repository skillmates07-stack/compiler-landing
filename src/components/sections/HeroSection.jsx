import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const floatingIconsRef = useRef([]);
  const orbRef1 = useRef(null);
  const orbRef2 = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({ 
        defaults: { ease: 'power3.out' },
        delay: 0.3 
      });

      const titleWords = titleRef.current.querySelectorAll('span');
      const subtitleChars = subtitleRef.current.textContent.split('');
      subtitleRef.current.innerHTML = subtitleChars
        .map(char => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      masterTL.from(titleRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 100,
        duration: 1.2,
        ease: 'elastic.out(1, 0.6)',
      })
      .from(titleWords, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.05,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '-=0.9')
      .from(subtitleRef.current.querySelectorAll('span'), {
        opacity: 0,
        y: 20,
        rotateY: 90,
        stagger: 0.01,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(ctaRef.current.children, {
        opacity: 0,
        y: 50,
        scale: 0.5,
        rotation: -15,
        stagger: 0.15,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.3')
      .from(statsRef.current.children, {
        opacity: 0,
        scale: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(2)',
        onComplete: () => animateCounters(),
      }, '-=0.4')
      .from(floatingIconsRef.current, {
        opacity: 0,
        y: 200,
        rotation: 360,
        scale: 0,
        stagger: {
          each: 0.08,
          from: 'center',
        },
        duration: 1,
        ease: 'elastic.out(1, 0.4)',
      }, '-=0.6');

      floatingIconsRef.current.forEach((icon, i) => {
        const floatTL = gsap.timeline({ repeat: -1, yoyo: true });
        floatTL.to(icon, {
          y: -20 + (i * 3),
          x: Math.sin(i) * 10,
          rotation: 5 - (i * 2),
          duration: 2.5 + (i * 0.3),
          ease: 'sine.inOut',
        });

        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.3,
            rotation: 360,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)',
          });
        });

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });

      gsap.to(orbRef1.current, {
        x: -50,
        y: 50,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(orbRef2.current, {
        x: 50,
        y: -50,
        scale: 0.8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(gridRef.current, {
        backgroundPosition: '100px 100px',
        duration: 30,
        repeat: -1,
        ease: 'none',
      });

      const buttons = ctaRef.current.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        });
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          gsap.to(titleRef.current, {
            y: progress * 200,
            opacity: 1 - progress * 1.5,
            scale: 1 - progress * 0.3,
          });

          gsap.to(subtitleRef.current, {
            y: progress * 150,
            opacity: 1 - progress * 2,
          });

          gsap.to(ctaRef.current, {
            y: progress * 100,
            opacity: 1 - progress * 2.5,
          });

          gsap.to(floatingIconsRef.current, {
            y: progress * 300,
            opacity: 1 - progress * 2,
            stagger: 0.02,
          });
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const animateCounters = () => {
    const stats = statsRef.current.querySelectorAll('.stat-value');
    stats.forEach((stat) => {
      const target = parseInt(stat.textContent.replace(/\D/g, ''));
      const suffix = stat.textContent.replace(/[0-9]/g, '');
      
      gsap.from(stat, {
        textContent: 0,
        duration: 2,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        onUpdate: function() {
          stat.textContent = Math.ceil(this.targets()[0].textContent) + suffix;
        }
      });
    });
  };

  const languages = [
    { Icon: FaPython, name: 'Python', color: 'text-yellow-400', bgGlow: 'rgba(251, 191, 36, 0.2)' },
    { Icon: FaJava, name: 'Java', color: 'text-red-500', bgGlow: 'rgba(239, 68, 68, 0.2)' },
    { Icon: SiCplusplus, name: 'C++', color: 'text-blue-400', bgGlow: 'rgba(96, 165, 250, 0.2)' },
    { Icon: FaJs, name: 'JavaScript', color: 'text-yellow-300', bgGlow: 'rgba(253, 224, 71, 0.2)' },
    { Icon: SiC, name: 'C', color: 'text-blue-500', bgGlow: 'rgba(59, 130, 246, 0.2)' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]"></div>
      <div 
        ref={gridRef}
        className="absolute inset-0 bg-grid-pattern opacity-10"
      ></div>
      
      {/* Glowing orbs */}
      <div 
        ref={orbRef1}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none"
      ></div>
      <div 
        ref={orbRef2}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
      ></div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center">
          {/* LUXURY TYPOGRAPHY - Fixed letter-spacing & line-height */}
          <h1 
            ref={titleRef} 
            className="text-[52px] md:text-[68px] font-extrabold mb-5 leading-[1.05] tracking-[-0.03em]"
            style={{ 
              fontFeatureSettings: '"ss01" on, "ss02" on',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            <span className="inline-block text-white">Code</span>{' '}
            <span className="inline-block text-white">online</span>{' '}
            <span className="inline-block text-white">with</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-[#60a5fa] via-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">Visual</span>{' '}
            <span className="inline-block bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#c4b5fd] bg-clip-text text-transparent">Intelligence</span>
          </h1>

          {/* LUXURY SUBTITLE - Perfect spacing */}
          <p 
            ref={subtitleRef}
            className="text-[17px] md:text-[19px] text-gray-400 mb-9 max-w-3xl mx-auto leading-[1.6] font-normal tracking-[-0.01em]"
            style={{ 
              fontFeatureSettings: '"kern" on',
              textRendering: 'optimizeLegibility'
            }}
          >
            Master programming through 2D visualization, AI-powered hints, and interactive learning across 5+ languages
          </p>

          {/* LUXURY CTA BUTTONS - Carbon Design spacing */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14">
            <button className="group relative bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-6 py-3 rounded-full text-[15px] font-semibold transition-all overflow-hidden shadow-[0_4px_24px_rgba(59,130,246,0.25)] hover:shadow-[0_6px_32px_rgba(59,130,246,0.4)] hover:scale-[1.02]">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <HiLightningBolt className="text-[18px] group-hover:rotate-12 transition-transform" />
                Start Learning Free
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </button>
            
            <button className="group relative border border-[#3b82f6]/30 hover:border-[#3b82f6]/60 text-white hover:bg-[#3b82f6]/5 px-6 py-3 rounded-full text-[15px] font-semibold transition-all backdrop-blur-sm">
              <span className="flex items-center justify-center gap-2">
                <HiSparkles className="text-[18px] group-hover:rotate-180 transition-transform duration-500" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* LUXURY STATS - Refined spacing */}
          <div ref={statsRef} className="flex flex-wrap justify-center gap-10 mb-14">
            {[
              { value: '50K+', label: 'Active Learners' },
              { value: '1M+', label: 'Code Visualizations' },
              { value: '5+', label: 'Languages' },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="stat-value text-[36px] font-black bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 tracking-[-0.02em]">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-[10px] mt-1 font-medium uppercase tracking-[0.12em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* LUXURY ICONS - Premium spacing & shadows */}
          <div className="flex justify-center gap-4 flex-wrap">
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                ref={el => floatingIconsRef.current[i] = el}
                className="group relative w-14 h-14 bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-xl flex items-center justify-center border border-[#2a2a2a] hover:border-[#3b82f6]/50 transition-all cursor-pointer overflow-hidden backdrop-blur-sm"
                style={{
                  boxShadow: `0 4px 16px -4px ${lang.bgGlow}, inset 0 1px 0 rgba(255,255,255,0.03)`,
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  style={{ backgroundColor: lang.bgGlow }}
                ></div>
                
                <lang.Icon className={`text-[28px] ${lang.color} relative z-10 group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_2px_8px_currentColor]`} />
                
                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white bg-[#1a1a1a]/90 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-[#2a2a2a] group-hover:-translate-y-1 backdrop-blur-md">
                  {lang.name}
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1a1a1a] border-l border-t border-[#2a2a2a] rotate-45"></div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {[...Array(3)].map((_, pi) => (
                    <div
                      key={pi}
                      className="absolute w-0.5 h-0.5 bg-current rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `ping ${1 + pi * 0.3}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LUXURY SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[9px] text-gray-500 font-medium uppercase tracking-[0.15em]">Scroll</span>
        <div className="w-[18px] h-[28px] border border-[#3b82f6]/40 rounded-full flex justify-center p-1">
          <div className="w-0.5 h-1.5 bg-[#3b82f6] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
