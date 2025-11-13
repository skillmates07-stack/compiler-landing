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
      // Simple fade-in on load
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Parallax on scroll
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
    { Icon: FaPython, name: 'Python', color: '#3776ab' },
    { Icon: FaJava, name: 'Java', color: '#f89820' },
    { Icon: SiCplusplus, name: 'C++', color: '#00599c' },
    { Icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
    { Icon: SiC, name: 'C', color: '#a8b9cc' },
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
        padding: '120px 24px 80px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
      }}></div>

      {/* Noise texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          pointerEvents: 'none',
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' /%3E%3C/svg%3E")',
        }}
      ></div>

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(40px, 5.5vw, 70px)',
            fontWeight: '700',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '4px',
          }}
        >
          Code online with
        </h1>

        <h1
          style={{
            fontSize: 'clamp(40px, 5.5vw, 70px)',
            fontWeight: '700',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '24px',
          }}
        >
          Visual Intelligence
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.4)',
            maxWidth: '650px',
            margin: '0 auto 36px auto',
            fontWeight: '400',
          }}
        >
          Master programming through 2D visualization, AI-powered hints, and interactive learning across 5+ languages
        </p>

        {/* CTA Buttons */}
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
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Start Learning Free
          </button>

          <button
            style={{
              border: '1.5px solid rgba(255, 255, 255, 0.12)',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              color: 'rgba(255, 255, 255, 0.85)',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.02)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(40px, 8vw, 72px)',
            marginBottom: '48px',
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
                  fontSize: 'clamp(28px, 4vw, 34px)',
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
                  color: 'rgba(255, 255, 255, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginTop: '6px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Language Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.name}
              style={{
                width: '52px',
                height: '52px',
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <lang.Icon
                style={{
                  fontSize: '24px',
                  color: lang.color,
                  opacity: 0.75,
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
