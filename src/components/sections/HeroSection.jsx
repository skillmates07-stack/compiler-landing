import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(ctaRef.current.children, {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3')
      .from(statsRef.current.children, {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.2')
      .from(iconsRef.current, {
        opacity: 0,
        scale: 0.9,
        stagger: 0.05,
        duration: 0.4,
        ease: 'back.out(1.2)',
      }, '-=0.2');

      iconsRef.current.forEach((icon) => {
        if (icon) {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
          });
          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
          });
        }
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to([titleRef.current, subtitleRef.current, ctaRef.current], {
            y: progress * 100,
            opacity: 1 - progress * 1.5,
          });
          gsap.to([statsRef.current, ...iconsRef.current], {
            y: progress * 150,
            opacity: 1 - progress * 2,
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
        padding: '128px 24px',
      }}
    >
      {/* Subtle gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, #000000, #050505, #000000)',
        opacity: 0.8,
      }}></div>

      {/* Noise texture */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          pointerEvents: 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' /%3E%3C/svg%3E")',
        }}
      ></div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        width: '100%',
      }}>
        {/* Hero Title - CENTERED */}
        <h1 
          ref={titleRef}
          style={{
            fontSize: '80px',
            fontWeight: '600',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '32px',
          }}
        >
          Code online with
          <br />
          <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Visual Intelligence</span>
        </h1>

        {/* Subtitle - CENTERED */}
        <p 
          ref={subtitleRef}
          style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.4)',
            maxWidth: '672px',
            margin: '0 auto 56px auto',
            fontWeight: 'normal',
          }}
        >
          Master programming through 2D visualization, AI-powered hints, and interactive learning across 5+ languages
        </p>

        {/* CTA Buttons - CENTERED */}
        <div 
          ref={ctaRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '96px',
            flexWrap: 'wrap',
          }}
        >
          <button style={{
            position: 'relative',
            background: '#ffffff',
            color: '#000000',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'all 0.2s',
            border: 'none',
            cursor: 'pointer',
          }}>
            Start Learning Free
          </button>
          
          <button style={{
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'transparent',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}>
            Watch Demo
          </button>
        </div>

        {/* Stats - CENTERED */}
        <div 
          ref={statsRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '80px',
            marginBottom: '96px',
          }}
        >
          {[
            { value: '50K+', label: 'Active Learners' },
            { value: '1M+', label: 'Code Visualizations' },
            { value: '5+', label: 'Languages' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.8)',
                letterSpacing: '-0.01em',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginTop: '8px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Language Icons - CENTERED */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          {languages.map((lang, i) => (
            <div
              key={lang.name}
              ref={el => iconsRef.current[i] = el}
              style={{
                position: 'relative',
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
            >
              <lang.Icon 
                style={{ 
                  fontSize: '22px',
                  color: lang.color,
                  opacity: 0.7,
                }} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.2,
      }}>
        <span style={{
          fontSize: '9px',
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}>Scroll</span>
        <div style={{
          width: '18px',
          height: '26px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          padding: '4px',
        }}>
          <div style={{
            width: '2px',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '2px',
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
