import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.2,
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(contentRef.current, {
            y: progress * 60,
            opacity: 1 - progress * 1.5,
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        padding: '140px 32px 80px 32px',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient backdrop */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02), transparent 70%)',
        pointerEvents: 'none',
      }}></div>

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {/* Main title */}
        <h1
          style={{
            fontSize: 'clamp(48px, 7vw, 84px)',
            fontWeight: '600',
            lineHeight: 1.05,
            letterSpacing: '-0.045em',
            color: '#ffffff',
            marginBottom: '24px',
          }}
        >
          Code with
          <br />
          Visual Intelligence
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(18px, 2vw, 21px)',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.5)',
            maxWidth: '600px',
            margin: '0 auto 48px auto',
            fontWeight: '400',
          }}
        >
          Master programming through interactive 2D visualizations and AI-powered guidance
        </p>

        {/* Refined buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '80px',
            flexWrap: 'wrap',
          }}
        >
          <button
            style={{
              background: '#ffffff',
              color: '#000000',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.1)';
            }}
          >
            Get Started
          </button>

          <button
            style={{
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(255, 255, 255, 0.03)',
              color: 'rgba(255, 255, 255, 0.9)',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.08)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.03)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Watch Demo
          </button>
        </div>

        {/* Clean stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '64px',
          }}
        >
          {[
            { value: '50K+', label: 'Developers' },
            { value: '1M+', label: 'Visualizations' },
            { value: '5', label: 'Languages' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.4)',
                  fontWeight: '500',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
