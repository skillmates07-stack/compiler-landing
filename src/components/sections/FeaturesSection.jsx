import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiEye, HiLightningBolt, HiCode } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Cards staggered entrance
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          });

          // Hover animation
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -8,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: HiEye,
      title: '2D Visualization',
      description: 'Watch your code come to life with real-time 2D animations of data structures, algorithms, and execution flow.',
      color: '#3b82f6',
    },
    {
      icon: HiLightningBolt,
      title: 'AI-Powered Hints',
      description: 'Get contextual help when you\'re stuck—smart hints guide you without giving away the full solution.',
      color: '#8b5cf6',
    },
    {
      icon: HiCode,
      title: 'Multi-Language Support',
      description: 'Code in Python, Java, C++, JavaScript, or C with full syntax highlighting and execution support.',
      color: '#10b981',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="relative bg-black py-32 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white mb-6 tracking-[-0.02em]">
            Built for learning
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/40 max-w-2xl mx-auto leading-relaxed">
            Everything you need to master programming through visual learning and intelligent guidance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group relative bg-white/5 hover:bg-white/[0.07] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: `${feature.color}15` }}
              ></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: `${feature.color}20`,
                  }}
                >
                  <feature.icon 
                    className="text-3xl transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: feature.color }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-[22px] font-semibold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="relative mt-6 flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors">
                <span className="text-[13px] font-medium">Learn more</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
