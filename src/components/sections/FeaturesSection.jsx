import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      style={{
        position: 'relative',
        padding: '120px 32px',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '16px',
              letterSpacing: '-0.03em',
            }}
          >
            Built for learning
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'rgba(255, 255, 255, 0.5)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Everything you need to master programming through visual learning and intelligent guidance
          </p>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '40px 32px',
              transition: 'all 0.3s',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              👁️
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              2D Visualization
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              Watch your code come to life with real-time 2D animations of data structures, algorithms, and execution flow.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '40px 32px',
              transition: 'all 0.3s',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              ⚡
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              AI-Powered Hints
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              Get contextual help when you're stuck—smart hints guide you without giving away the full solution.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '40px 32px',
              transition: 'all 0.3s',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              💻
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              Multi-Language Support
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              Code in Python, Java, C++, JavaScript, or C with full syntax highlighting and execution support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
