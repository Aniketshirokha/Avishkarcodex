import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Mail, MessageSquare, 
  ShoppingBag, Package, FileCode, Smartphone, 
  Palette, Briefcase, TrendingUp, Cpu, 
  Layout, Shield, Globe, Video, 
  MessageCircle, Box, Zap,
  Star, Lock,
  ChevronRight, ExternalLink
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, CASE_STUDIES, BRAND_COLORS } from '../constants';
import { Service } from '../types';
import SectionHeader from '../components/SectionHeader';
import ServiceLightbox from '../components/ServiceLightbox';
import { useMagnetic } from '../hooks/useMagnetic';
import { useTilt } from '../hooks/useTilt';

const iconMap: any = {
  ShoppingBag, Package, FileCode, Smartphone, 
  Palette, Briefcase, TrendingUp, Cpu, 
  Layout, Shield, Globe, Video, 
  MessageCircle, Box, Zap
};

const TrustBar = () => (
  <div className="marquee-container reveal active mb-24">
    <div className="marquee-content">
      <span className="marquee-item">Future Tech</span>
      <span className="marquee-item">Scalable Code</span>
      <span className="marquee-item">AI First</span>
      <span className="marquee-item">High Performance</span>
      <span className="marquee-item">Bespoke UI</span>
      <span className="marquee-item">E-commerce Mastery</span>
      <span className="marquee-item">Cloud Architecture</span>
      {/* Repeat for loop */}
      <span className="marquee-item">Future Tech</span>
      <span className="marquee-item">Scalable Code</span>
      <span className="marquee-item">AI First</span>
      <span className="marquee-item">High Performance</span>
      <span className="marquee-item">Bespoke UI</span>
      <span className="marquee-item">E-commerce Mastery</span>
      <span className="marquee-item">Cloud Architecture</span>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { ref: magRef1, style: magStyle1 } = useMagnetic(15);
  const { ref: magRef2, style: magStyle2 } = useMagnetic(8);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openService = (service: Service) => setSelectedService(service);
  const closeService = () => setSelectedService(null);

  const navigateService = (direction: 'next' | 'prev') => {
    if (!selectedService) return;
    const currentIndex = SERVICES.findIndex(s => s.id === selectedService.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= SERVICES.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = SERVICES.length - 1;
    setSelectedService(SERVICES[nextIndex]);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-100 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 lg:py-24 relative overflow-visible">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="lg:w-1/2 z-10 text-center lg:text-left reveal active">
            <div className="tag-pill mb-8 inline-flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Elite Engineering Protocol</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A2540] leading-[0.95] tracking-tighter mb-8 reveal active stagger-1">
              Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Technology</span> for Global Scale.
            </h1>
            
            <p className="text-xl text-[#374151] mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold reveal active stagger-2">
              The architecture collective delivering high-fidelity digital infrastructure, automation, and aesthetic precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 reveal active stagger-3">
              <div ref={magRef1} style={magStyle1} className="magnetic-wrap w-full sm:w-auto">
                <a 
                  href="#/contact" 
                  className="btn-primary w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-center flex items-center justify-center transition-all group tracking-[0.2em] uppercase text-xs"
                >
                  <span className="relative z-10 flex items-center">Initialize project <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                </a>
              </div>
              <div ref={magRef2} style={magStyle2} className="magnetic-wrap w-full sm:w-auto">
                <a 
                  href="#/services" 
                  className="btn-outline w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase text-center transition-all flex items-center justify-center"
                >
                  View Capabilities
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 relative h-[600px] w-full items-center justify-center perspective-1000 reveal active stagger-2">
            <div 
              className="relative w-full max-w-[500px] aspect-square transition-transform duration-300 ease-out preserve-3d"
              style={{ transform: `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)` }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
                <defs>
                  <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4FACFE', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0061FF', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#orbGrad)" opacity="0.15" stroke="#4FACFE" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="white" opacity="0.1" stroke="#4FACFE" strokeWidth="0.5" strokeDasharray="10,5" className="animate-spin" style={{ animationDuration: '30s' }} />
                
                <g className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '12s' }}>
                  <ellipse cx="100" cy="100" rx="90" ry="35" fill="none" stroke="#4FACFE" strokeWidth="0.8" opacity="0.4" />
                </g>
                <g className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '18s', animationDirection: 'reverse' }}>
                  <ellipse cx="100" cy="100" rx="35" ry="90" fill="none" stroke="#0061FF" strokeWidth="0.8" opacity="0.4" />
                </g>

                {[0, 90, 180, 270].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 100 + 85 * Math.cos(rad);
                  const y = 100 + 85 * Math.sin(rad);
                  return (
                    <circle key={i} cx={x} cy={y} r="4" fill="#0A2540">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
                    </circle>
                  );
                })}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-40 h-40 bg-white rounded-[4rem] border-8 border-[#F0F7FF] shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden group">
                    <div className="w-20 h-20 bg-[#0A2540] rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <Cpu className="text-white w-10 h-10" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looping Trust Bar */}
      <TrustBar />

      <div className="section-separator my-10"></div>

      {/* Services Section - Showing 4 items */}
      <section className="py-32" id="services">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Capability Units" 
            subtitle="Specialized engineering squads handling high-fidelity architecture and automation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service, idx) => {
              const Icon = iconMap[service.icon];
              const { tiltStyle, onMouseMove, onMouseLeave } = useTilt(6);
              return (
                <div 
                  key={service.id}
                  onClick={() => openService(service)}
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  style={tiltStyle}
                  className="reveal soft-card p-12 cursor-pointer group flex flex-col h-full active stagger-1"
                >
                  <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-[#0A2540] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                    <Icon size={32} className="group-hover:text-white text-[#4FACFE]" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#0A2540] mb-4 tracking-tight group-hover:text-[#4FACFE] transition-colors relative z-10">{service.title}</h3>
                  <p className="text-[#374151] text-base leading-relaxed mb-10 flex-grow font-bold relative z-10 opacity-80">{service.shortDesc}</p>
                  
                  <div className="flex items-center text-[#4FACFE] font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all relative z-10">
                    Deploy Workflow <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-20 text-center reveal active">
             <a href="#/services" className="btn-outline inline-flex items-center font-black text-xs tracking-widest uppercase group py-5 px-10 rounded-2xl transition-all">
                View All Specialized Modules
                <ChevronRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-white/40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <SectionHeader title="Technical Authority" subtitle="Real-world results delivered through elite technical architecture and clean delivery." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {CASE_STUDIES.slice(0, 3).map((study, i) => (
              <div key={i} className="reveal group flex flex-col h-full bg-white border-2 border-white rounded-[3rem] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 active stagger-1 overflow-hidden hover:border-blue-100">
                <div className="tag-pill mb-10 self-start">
                  {study.category}
                </div>
                <h4 className="text-3xl font-black text-[#0A2540] mb-8 leading-tight tracking-tight">{study.title}</h4>
                <div className="space-y-6 flex-grow">
                   <p className="text-sm text-[#374151] leading-relaxed line-clamp-3 font-bold opacity-80">{study.overview}</p>
                   <div className="flex flex-wrap gap-2">
                     {study.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-4 py-1.5 bg-blue-50 text-[10px] font-black text-[#0369A1] rounded-xl border border-blue-100 uppercase">{tech}</span>
                     ))}
                   </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <a href="#/case-studies" className="flex items-center font-black text-[10px] uppercase tracking-[0.3em] text-[#0A2540] hover:text-[#4FACFE] transition-colors">
                    Access Case Profile <ExternalLink size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeader title="Partner Intelligence" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="reveal soft-card p-12 border-2 border-white active bg-white" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-center space-x-6 mb-10">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-[1.5rem] object-cover border-2 border-blue-50 shadow-md" />
                  <div>
                    <div className="font-black text-[#0A2540] text-lg">{t.name}</div>
                    <div className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
                <p className="text-[#374151] text-lg leading-relaxed italic font-bold opacity-90">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative bg-[#0A2540] rounded-[4rem] p-16 md:p-32 text-center text-white shadow-[0_40px_100px_rgba(10,37,64,0.4)] overflow-hidden group border-4 border-[#F0F7FF]">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none reveal active">Ready for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#00C6FB]">Upgrade?</span></h2>
              <p className="text-2xl text-white/70 mb-16 max-w-2xl mx-auto font-bold reveal active stagger-1">
                Collaborate with our architecture leads to engineer your next global ecosystem.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 reveal active stagger-2">
                 <a 
                   href="#/contact" 
                   className="btn-primary w-full md:w-auto px-16 py-7 rounded-[2.5rem] font-black text-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-[0.2em]"
                 >
                   Launch Project <ArrowRight className="ml-3" />
                 </a>
                 <div className="flex items-center space-x-6">
                    <a href="https://wa.me/919106025254" className="bg-white/10 p-6 rounded-[2.5rem] hover:bg-white/20 transition-all border border-white/20 shadow-2xl">
                      <MessageSquare size={28} className="text-white" />
                    </a>
                    <a href="mailto:hello@aavishkarcodex.com" className="bg-white/10 p-6 rounded-[2.5rem] hover:bg-white/20 transition-all border border-white/20 shadow-2xl">
                      <Mail size={28} className="text-white" />
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceLightbox 
          service={selectedService} 
          onClose={closeService} 
          onNext={() => navigateService('next')}
          onPrev={() => navigateService('prev')}
        />
      )}
    </div>
  );
};

export default Home;