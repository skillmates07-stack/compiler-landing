import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEye, FaBrain, FaCode } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: FaEye, title: '2D Visualization', desc: 'See arrays, trees, graphs animate in real-time' },
    { icon: FaBrain, title: 'AI Smart Hints', desc: 'Get logic help without full solutions' },
    { icon: FaCode, title: 'Multi-Language', desc: 'Python, Java, C++, JavaScript, C' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Why Choose Us
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] hover:border-blue-500 transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] group"
            >
              <feature.icon className="text-6xl text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
