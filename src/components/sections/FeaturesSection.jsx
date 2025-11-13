import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Subtitle reveal animation
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Cards stagger animation with scale
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1,
            delay: 0.4 + i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          });

          // Icon float animation on hover
          const icon = card.querySelector('.feature-icon');
          if (icon) {
            card.addEventListener('mouseenter', () => {
              gsap.to(icon, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out',
              });
            });
            card.addEventListener('mouseleave', () => {
              gsap.to(icon, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
              });
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: '2D Visualization',
      description: 'Watch your code come to life with real-time 2D animations of data structures, algorithms, and execution flow.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },

    {
      title: 'AI-Powered Hints',
      description: "Get contextual help when you're stuck—smart hints guide you without giving away the full solution.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: 'Multi-Language Support',
      description: 'Code in Python, Java, C++, JavaScript, or C with full syntax highlighting and execution support.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      style={{
        position: 'relative',
        padding: '120px clamp(24px, 5vw, 80px)',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(60px, 10vw, 96px)',
          }}
        >
          <h2
            ref={titleRef}
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
            }}
          >
            Built for learning
          </h2>
          <p
            ref={subtitleRef}
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'rgba(255, 255, 255, 0.5)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Everything you need to master programming through visual learning and intelligent guidance
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
          }}
        >
          {features.map((feature, i) => (
            <article
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: 'clamp(32px, 5vw, 48px) clamp(28px, 4vw, 40px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                willChange: 'transform',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  y: -8,
                  duration: 0.4,
                  ease: 'power2.out',
                });
                gsap.to(e.currentTarget, {
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
                  duration: 0.4,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  y: 0,
                  duration: 0.4,
                  ease: 'power2.out',
                });
                gsap.to(e.currentTarget, {
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
                  duration: 0.4,
                });
              }}
            >
              {/* Icon Container */}
              <div
                className="feature-icon"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '14px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: '400',
                }}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

