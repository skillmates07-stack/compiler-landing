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
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: '2D Visualization',
      description: 'Watch your code come to life with real-time 2D animations of data structures, algorithms, and execution flow.',
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Hints',
      description: 'Get contextual help when you\'re stuck—smart hints guide you without giving away the full solution.',
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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
      style={{
        position: 'relative',
        background: '#000000',
        padding: '128px 24px',
      }}
    >
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
      }}>
        {/* Section Title - CENTERED WITH INLINE STYLES */}
        <div 
          ref={titleRef} 
          style={{
            textAlign: 'center',
            marginBottom: '80px',
            width: '100%',
          }}
        >
          <h2 style={{
            fontSize: '56px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
          }}>
            Built for learning
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.4)',
            maxWidth: '672px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Everything you need to master programming through visual learning and intelligent guidance
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          width: '100%',
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(8px)',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              {/* Icon - CENTERED */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '32px',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}>
                  {feature.icon}
                </div>
              </div>

              {/* Content - CENTERED */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.6',
                }}>
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
