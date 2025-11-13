import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const iconsRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for entrance
      const masterTL = gsap.timeline({ delay: 0.3 });

      // Magnetic cursor effect
      const handleMouseMove = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Title word-by-word reveal
      const titleWords = titleRef.current.textContent.split(' ');
      titleRef.current.innerHTML = titleWords
        .map(word => `<span style="display:inline-block; opacity:0;">${word}&nbsp;</span>`)
        .join('');

      const title2Words = title2Ref.current.textContent.split(' ');
      title2Ref.current.innerHTML = title2Words
        .map(word => `<span style="display:inline-block; opacity:0;">${word}&nbsp;</span>`)
        .join('');

      // Subtitle character-by-character
      const subtitleText = subtitleRef.current.textContent;
      subtitleRef.current.innerHTML = subtitleText
        .split('')
        .map(char => `<span style="display:inline-block; opacity:0;">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      // Entrance animations
      masterTL
        .from(titleRef.current.querySelectorAll('span'), {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.5)',
        })
        .from(title2Ref.current.querySelectorAll('span'), {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.5)',
        }, '-=0.6')
        .from(subtitleRef.current.querySelectorAll('span'), {
          opacity: 0,
          y: 20,
          stagger: 0.005,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.4')
        .from(ctaRef.current.children, {
          opacity: 0,
          scale: 0.8,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
        }, '-=0.2')
        .from(statsRef.current.children, {
          opacity: 0,
          scale: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: 'back.out(2)',
        }, '-=0.3')
        .from(iconsRef.current, {
          opacity: 0,
          scale: 0,
          rotation: 360,
          stagger: {
            each: 0.05,
            from: 'center',
          },
          duration: 0.6,
          ease: 'back.out(1.7)',
        }, '-=0.3');

      // Button magnetic effect
      const buttons = ctaRef.current.querySelectorAll('button');
      buttons.forEach((btn) => {
        btn.addEventListener('mouseenter', function(e) {
          gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        btn.addEventListener('mouseleave', function() {
          gsap.to(this, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        });

        btn.addEventListener('mousemove', function(e) {
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(this, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // Icon hover animations
      iconsRef.current.forEach((icon) => {
        if (icon) {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 10,
              duration: 0.4,
              ease: 'back.out(2)',
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

          gsap.to([titleRef.current, title2Ref.current], {
            y: progress * 150,
            opacity: 1 - progress * 2,
          });

          gsap.to(subtitleRef.current, {
            y: progress * 100,
            opacity: 1 - progress * 2.5,
          });

          gsap.to(ctaRef.current, {
            y: progress * 80,
            opacity: 1 - progress * 3,
          });

          gsap.to([statsRef.current, ...iconsRef.current], {
            y: progress * 200,
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
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      />

      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          padding: '140px 32px 96px 32px',
          overflow: 'hidden',
        }}
      >
        {/* Gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}></div>

        {/* Noise texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            pointerEvents: 'none',
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' /%3E%3C/svg%3E")',
          }}
        ></div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {/* Title line 1 */}
          <h1
            ref={titleRef}
            style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '700',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '8px',
              perspective: '1000px',
            }}
          >
            Code online with
          </h1>

          {/* Title line 2 */}
          <h1
            ref={title2Ref}
            style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '700',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '32px',
              perspective: '1000px',
            }}
          >
            Visual Intelligence
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.4)',
              maxWidth: '680px',
              margin: '0 auto 48px auto',
              fontWeight: '400',
            }}
          >
            Master programming through 2D visualization, AI-powered hints, and interactive learning across 5+ languages
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '120px',
              flexWrap: 'wrap',
            }}
          >
            <button
              style={{
                position: 'relative',
                background: '#ffffff',
                color: '#000000',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 40px rgba(255, 255, 255, 0.1)',
              }}
            >
              Start Learning Free
            </button>

            <button
              style={{
                border: '1.5px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '64px',
              marginBottom: '56px',
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
                    fontSize: '36px',
                    fontWeight: '700',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginTop: '8px',
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
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                ref={(el) => (iconsRef.current[i] = el)}
                style={{
                  position: 'relative',
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <lang.Icon
                  style={{
                    fontSize: '26px',
                    color: lang.color,
                    opacity: 0.8,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
