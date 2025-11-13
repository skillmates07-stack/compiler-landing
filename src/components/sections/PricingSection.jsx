import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.15,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: 'Free',
      price: { monthly: '0', annual: '0' },
      description: 'Perfect for beginners learning basics',
      features: [
        '5 visualizations per day',
        'Python & JavaScript',
        'Basic AI hints',
        'Community support',
      ],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: { monthly: '19', annual: '190' },
      description: 'For serious learners and students',
      features: [
        'Unlimited visualizations',
        'All 5 languages',
        'Advanced AI hints',
        'Priority support',
        'Code export',
      ],
      cta: 'Get Pro',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: '49', annual: '490' },
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom branding',
        'API access',
        'Dedicated support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="pricing"
      style={{
        position: 'relative',
        background: '#000000',
        padding: '128px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Title */}
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.4)',
            maxWidth: '672px',
            margin: '0 auto 32px auto',
            lineHeight: 1.7,
          }}>
            Choose the plan that's right for you
          </p>

          {/* Billing Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <span style={{
              fontSize: '14px',
              color: isAnnual ? 'rgba(255, 255, 255, 0.4)' : '#ffffff',
              fontWeight: '500',
            }}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                position: 'relative',
                width: '48px',
                height: '24px',
                background: isAnnual ? '#ffffff' : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '2px',
                left: isAnnual ? '26px' : '2px',
                width: '20px',
                height: '20px',
                background: isAnnual ? '#000000' : '#ffffff',
                borderRadius: '10px',
                transition: 'all 0.3s',
              }}></div>
            </button>
            <span style={{
              fontSize: '14px',
              color: isAnnual ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
              fontWeight: '500',
            }}>
              Annual <span style={{ color: '#3b82f6' }}>(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              style={{
                position: 'relative',
                background: plan.highlighted ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                border: plan.highlighted ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '40px',
                transition: 'all 0.3s',
              }}
            >
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  color: '#000000',
                  padding: '4px 16px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}>
                  POPULAR
                </div>
              )}

              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '8px',
              }}>
                {plan.name}
              </h3>

              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '24px',
              }}>
                {plan.description}
              </p>

              <div style={{ marginBottom: '32px' }}>
                <span style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}>
                  ${isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                <span style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}>
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>

              <button style={{
                width: '100%',
                background: plan.highlighted ? '#ffffff' : 'transparent',
                color: plan.highlighted ? '#000000' : '#ffffff',
                border: plan.highlighted ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '32px',
                transition: 'all 0.2s',
              }}>
                {plan.cta}
              </button>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '12px',
                      paddingLeft: '24px',
                      position: 'relative',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#3b82f6',
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
