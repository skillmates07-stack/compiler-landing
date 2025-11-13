import { useEffect, useRef } from 'react';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const HeroSection = () => {
  const languages = [
    { Icon: FaPython, name: 'Python', color: 'text-yellow-400' },
    { Icon: FaJava, name: 'Java', color: 'text-red-500' },
    { Icon: SiCplusplus, name: 'C++', color: 'text-blue-400' },
    { Icon: FaJs, name: 'JavaScript', color: 'text-yellow-300' },
    { Icon: SiC, name: 'C', color: 'text-blue-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-in">
            Code online with{' '}
            <span className="gradient-text">Visual Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Master programming through <span className="text-[#3b82f6] font-semibold">2D visualization</span>, 
            <span className="text-purple-500 font-semibold"> AI-powered hints</span>, and 
            interactive learning across 5+ languages
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group relative bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <HiLightningBolt className="text-2xl" />
                Start Learning Free
              </span>
            </button>
            
            <button className="border-2 border-[#3b82f6] text-white hover:bg-[#3b82f6]/10 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
              <HiSparkles className="text-2xl" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-20">
            {[
              { value: '50K+', label: 'Active Learners' },
              { value: '1M+', label: 'Code Visualizations' },
              { value: '5+', label: 'Languages' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-[#3b82f6]">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                className="group relative w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-[#333] hover:border-[#3b82f6] transition-all cursor-pointer hover:shadow-glow"
              >
                <lang.Icon className={`text-4xl ${lang.color} group-hover:scale-125 transition-transform`} />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {lang.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
