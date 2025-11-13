import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Floating particles animation
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: `random(-30, 30)`,
            x: `random(-20, 20)`,
            duration: `random(3, 5)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.1,
          });
        }
      });

      // Parallax scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(contentRef.current, {
            y: progress * 100,
            opacity: 1 - progress * 1.8,
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
        padding: '120px 24px 80px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Animated background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15), transparent 50%), radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.15), transparent 50%)',
        animation: 'gradientShift 15s ease infinite',
      }}></div>

      {/* Animated grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.05) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
      }}></div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          style={{
            position: 'absolute',
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
            filter: 'blur(1px)',
          }}
        />
      ))}

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {/* Badge with pulse */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          padding: '10px 20px',
          borderRadius: '24px',
          marginBottom: '32px',
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            background: '#3b82f6',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite',
            boxShadow: '0 0 10px #3b82f6',
          }}></div>
          <span style={{
            fontSize: '14px',
            color: '#ffffff',
            fontWeight: '600',
            letterSpacing: '0.02em',
          }}>
            Visualize. Learn. Master.
          </span>
        </div>

        {/* Large impactful title */}
        <h1
          style={{
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: '800',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '28px',
          }}
        >
          <span style={{
            display: 'block',
            background: 'linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.8))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            The smartest way
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginTop: '8px',
          }}>
            to learn coding
          </span>
        </h1>

        {/* Compelling subtitle */}
        <p
          style={{
            fontSize: 'clamp(17px, 2.2vw, 22px)',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '720px',
            margin: '0 auto 48px auto',
            fontWeight: '400',
          }}
        >
          Watch your code come alive with 2D visualizations. Get AI-powered hints. Master algorithms across 5 languages—without the confusion.
        </p>

        {/* Bold CTA buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '96px',
            flexWrap: 'wrap',
          }}
        >
          <button
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: '#ffffff',
              padding: '16px 36px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 25px 70px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 20px 60px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
            }}
          >
            Start Learning — Free Forever
          </button>

          <button
            style={{
              border: '2px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              padding: '16px 36px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Watch Demo →
          </button>
        </div>

        {/* Social proof stats */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '48px',
        }}>
          {[
            { value: '50K+', label: 'Developers Learning' },
            { value: '1M+', label: 'Code Visualizations' },
            { value: '98%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(32px, 4vw, 42px)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #ffffff, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(0.95);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
