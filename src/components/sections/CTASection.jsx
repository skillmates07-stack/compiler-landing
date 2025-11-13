import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        background: '#000000',
        padding: '128px 24px',
      }}
    >
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
      }}>
        <div 
          ref={contentRef}
          style={{
            textAlign: 'center',
            padding: '80px 48px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
            pointerEvents: 'none',
            filter: 'blur(80px)',
          }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              Ready to start learning?
            </h2>

            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}>
              Join thousands of developers mastering algorithms through visualization
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button style={{
                background: '#ffffff',
                color: '#000000',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                Get Started Free
              </button>

              <button style={{
                background: 'transparent',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                View Pricing
              </button>
            </div>

            <p style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.3)',
              marginTop: '24px',
            }}>
              No credit card required • Free forever plan available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
