import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: '2D Visualization',
      description: 'Watch your code come to life with real-time 2D animations of data structures, algorithms, and execution flow.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Hints',
      description: 'Get contextual help when you\'re stuck—smart hints guide you without giving away the full solution.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Multi-Language Support',
      description: 'Code in Python, Java, C++, JavaScript, or C with full syntax highlighting and execution support.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="relative bg-black py-32 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title - CENTERED */}
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
              className="group relative bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Icon - CENTERED */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:border-white/20">
                  {feature.icon}
                </div>
              </div>

              {/* Content - CENTERED */}
              <div className="text-center">
                <h3 className="text-[20px] font-semibold text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
