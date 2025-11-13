import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
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
            y: progress * 80,
            opacity: 1 - progress * 1.5,
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const languages = [
    { Icon: FaPython, name: 'Python', color: '#ffffff' },
    { Icon: FaJava, name: 'Java', color: '#ffffff' },
    { Icon: SiCplusplus, name: 'C++', color: '#ffffff' },
    { Icon: FaJs, name: 'JavaScript', color: '#ffffff' },
    { Icon: SiC, name: 'C', color: '#ffffff' },
  ];

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
        padding: '100px 40px 60px 40px',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid pattern (Dark.design style) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.3,
        pointerEvents: 'none',
      }}></div>

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1300px',
          margin: '0 auto',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {/* Title - Wider */}
        <h1
          style={{
            fontSize: 'clamp(44px, 6vw, 76px)',
            fontWeight: '700',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '2px',
          }}
        >
          Code online with
        </h1>

        <h1
          style={{
            fontSize: 'clamp(44px, 6vw, 76px)',
            fontWeight: '700',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'rgba(255, 255, 255, 0.4)',
            marginBottom: '20px',
          }}
        >
          Visual Intelligence
        </h1>

        {/* Subtitle - Compact */}
        <p
          style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            lineHeight: 1.5,
            color: 'rgba(255, 255, 255, 0.35)',
            maxWidth: '700px',
            margin: '0 auto 32px auto',
            fontWeight: '400',
          }}
        >
          Master programming through 2D visualization, AI-powered hints, and interactive learning across 5+ languages
        </p>

        {/* CTA Buttons - Dark.design style */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '64px',
            flexWrap: 'wrap',
          }}
        >
          <button
            style={{
              background: '#ffffff',
              color: '#000000',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Start Learning Free
          </button>

          <button
            style={{
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'transparent',
              color: 'rgba(255, 255, 255, 0.9)',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            Watch Demo
          </button>
        </div>

        {/* Stats - Wider spread */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(48px, 10vw, 96px)',
            marginBottom: '40px',
          }}
        >
          {[
            { value: '50K+', label: 'Active Learners' },
            { value: '1M+', label: 'Code Visualizations' },
            { value: '5+', label: 'Languages' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 36px)',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '10px',
                  color: 'rgba(255, 255, 255, 0.25)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '6px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Language Icons - Monochrome white */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.name}
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <lang.Icon
                style={{
                  fontSize: '22px',
                  color: lang.color,
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
