import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DemoSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Video container animation
      gsap.from(videoRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Feature items stagger
      featuresRef.current.forEach((feature, i) => {
        if (feature) {
          gsap.from(feature, {
            opacity: 0,
            x: i % 2 === 0 ? -30 : 30,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'Real-time Execution',
      description: 'Watch your code execute step-by-step with live variable tracking',
    },
    {
      title: 'Visual Debugger',
      description: 'Identify errors instantly with highlighted problematic lines',
    },
    {
      title: 'Interactive Hints',
      description: 'Get contextual AI suggestions without spoiling the solution',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="demo"
      style={{
        position: 'relative',
        background: '#000000',
        padding: '128px 24px',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section Title */}
        <div 
          ref={titleRef}
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <h2 style={{
            fontSize: '56px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            See it in action
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.4)',
            maxWidth: '672px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Experience how CodeFlow transforms complex algorithms into visual, easy-to-understand animations
          </p>
        </div>

        {/* Video/Demo Container */}
        <div 
          ref={videoRef}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            margin: '0 auto 96px auto',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            aspectRatio: '16/9',
          }}
        >
          {/* Placeholder for demo video/interactive element */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          }}>
            <div style={{
              textAlign: 'center',
              padding: '40px',
            }}>
              <svg 
                width="80" 
                height="80" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.6)" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24"
                style={{
                  margin: '0 auto 24px auto',
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <p style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '16px',
              }}>
                Interactive Demo
              </p>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => featuresRef.current[i] = el}
              style={{
                textAlign: 'center',
                padding: '32px 24px',
              }}
            >
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: 1.6,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
