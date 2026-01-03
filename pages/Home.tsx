
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Cpu, Shield, Zap, Activity, Layers, 
  Terminal, Globe, ShoppingBag, Smartphone, Layout,
  ChevronRight, ExternalLink, Box, Database, Lightbulb, Rocket, TrendingUp, Code, Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CASE_STUDIES, TESTIMONIALS } from '../constants';
import { Service } from '../types';
import SectionHeader from '../components/SectionHeader';
import ServiceLightbox from '../components/ServiceLightbox';
import ContactForm from '../components/ContactForm';
import { useMagnetic } from '../hooks/useMagnetic';
import { useTilt } from '../hooks/useTilt';

const iconMap: any = { ShoppingBag, Smartphone, Layout, Cpu, Shield, Zap, Activity, Layers };

const AbstractOrb = ({ tiltStyle, parallax }: { tiltStyle: any, parallax: { x: number, y: number } }) => {
  return (
    <div 
      style={{
        ...tiltStyle,
        transform: `${(tiltStyle as any).transform || ''} translate3d(${parallax.x * 0.2}px, ${parallax.y * 0.2}px, 0)`
      }}
      className="relative w-full aspect-square max-w-[550px] mx-auto animate-float-subtle flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[#0051FF]/10 rounded-full blur-[120px] scale-90 animate-pulse"></div>
      <div className="absolute w-[95%] h-[95%] border-[1.5px] border-dashed border-[#0051FF]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute w-[85%] h-[85%] border-[1.5px] border-blue-200/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

      <div className="relative w-64 h-64 lg:w-80 lg:h-80 group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0051FF] to-[#4FACFE] rounded-full opacity-20 blur-2xl"></div>
        <div className="relative h-full w-full bg-white/80 backdrop-blur-3xl rounded-full border-[10px] border-white shadow-[0_40px_80px_rgba(0,81,255,0.15)] overflow-hidden flex items-center justify-center">
          <div className="scanline opacity-20"></div>
          <div className="relative w-48 h-48 bg-[#0A2540] rounded-full flex items-center justify-center shadow-inner overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0051FF]/40 to-transparent"></div>
             <div className="relative z-10 text-[#4FACFE] animate-pulse">
                <Cpu size={80} />
             </div>
             <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_4s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4FACFE] rounded-full shadow-[0_0_15px_#4FACFE]"></div>
             </div>
          </div>
        </div>
      </div>

      <div style={{ transform: `translate3d(${parallax.x * -0.6}px, ${parallax.y * -0.6}px, 0)` }} className="absolute top-10 -left-6 z-20 transition-transform duration-300">
         <div className="glass-panel px-6 py-4 rounded-2xl shadow-xl border-white border-2 flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2540]">Engine v4.0 Active</span>
         </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { ref: magRef, style: magStyle } = useMagnetic(12);
  const { tiltStyle, onMouseMove, onMouseLeave } = useTilt(8); 
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      setParallax({
        x: (e.clientX - window.innerWidth / 2) / 60,
        y: (e.clientY - window.innerHeight / 2) / 60,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 lg:py-40 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-[55%] text-center lg:text-left z-10 reveal">
            <div className="inline-flex items-center space-x-3 mb-6 lg:mb-10 glass-panel px-6 py-2.5 rounded-full border-white border-2 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0051FF]"></span>
              </span>
              <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[#0A2540]">Core Module // Sync Enabled</span>
            </div>
            
            <h1 className="text-fluid-h1 text-[#0A2540] mb-8 lg:mb-10 leading-[0.82] tracking-tighter">
              Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Digital</span> <br className="hidden lg:block"/> Mastery.
            </h1>
            
            <p className="text-lg lg:text-2xl text-[#475569] mb-10 lg:mb-14 max-w-2xl mx-auto lg:mx-0 font-bold opacity-80 leading-relaxed">
              Engineering high-fidelity software architecture, elite UI ecosystems, and automation layers for global visionaries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <div ref={magRef} style={magStyle} className="magnetic-wrap w-full sm:w-auto">
                <Link to="/contact" className="btn-primary w-full sm:px-14 py-6 lg:py-7 rounded-2xl lg:rounded-[2.5rem] font-black text-[11px] lg:text-xs uppercase tracking-[0.3em] flex items-center justify-center">
                  Initiate Sync <ArrowRight className="ml-4 shrink-0" size={18} />
                </Link>
              </div>
              <Link to="/services" className="btn-outline w-full sm:px-14 py-6 lg:py-7 rounded-2xl lg:rounded-[2.5rem] font-black text-[11px] lg:text-xs uppercase tracking-[0.3em] flex items-center justify-center border-2 border-slate-200 hover:border-[#0051FF] transition-all">
                Unit Catalog
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:w-[45%] relative perspective-1000">
            <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
              <AbstractOrb tiltStyle={tiltStyle} parallax={parallax} />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Units */}
      <section className="py-20 lg:py-40 bg-white/30">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Operational Units" 
            subtitle="Specialized squads engineered for enterprise complexity and elite visual fidelity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {SERVICES.slice(0, 4).map((service, i) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="glass-panel p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[4.5rem] border-2 border-white hover:border-[#0051FF]/30 hover:shadow-2xl transition-all duration-700 group cursor-pointer reveal scan-wrapper"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white mb-6 lg:mb-10 group-hover:bg-[#0051FF] group-hover:rotate-[12deg] transition-all duration-500 shadow-xl">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0A2540] mb-3 lg:mb-5 tracking-tight group-hover:text-[#0051FF] transition-colors">{service.title}</h3>
                  <p className="text-[#64748B] text-sm lg:text-base leading-relaxed mb-8 lg:mb-12 font-bold opacity-80">{service.shortDesc}</p>
                  <div className="flex items-center text-[#0051FF] font-black text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] group-hover:translate-x-2 transition-transform">
                    Initialize Protocol <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 lg:py-40 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Who We Work With" 
            subtitle="Providing architectural support for industries that demand high performance and scalability."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SaaS", icon: Globe, desc: "Distributed infrastructure and elite frontend ecosystems." },
              { title: "Corporate Companies", icon: Building2, desc: "Secure, reliable, and standardized business software." },
              { title: "E-commerce", icon: ShoppingBag, desc: "High-conversion luxury stores and inventory systems." },
              { title: "AI Growth", icon: Zap, desc: "Automating workflows with custom-trained LLM agents." }
            ].map((industry, i) => (
              <div key={i} className="soft-card p-10 bg-white border border-slate-100 rounded-[3rem] reveal hover:shadow-2xl transition-all text-center group">
                <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-[#4FACFE] mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  <industry.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#0A2540] mb-4 tracking-tight">{industry.title}</h3>
                <p className="text-[#64748B] font-bold opacity-80 text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Feature */}
      <section className="py-20 lg:py-40 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="reveal">
                 <div className="tag-pill mb-6 lg:mb-10 bg-blue-100 text-[#0051FF]">Performance Dashboard</div>
                 <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0A2540] mb-8 lg:mb-12 leading-[0.9] tracking-tighter">
                   Scaling <br/> <span className="text-[#0051FF]">Complexity.</span>
                 </h2>
                 <div className="space-y-4 lg:space-y-6">
                    {[
                      { icon: Database, label: "Core Sync", val: "Optimal" },
                      { icon: Globe, label: "Edge Latency", val: "< 140ms" },
                      { icon: Shield, label: "Vault Security", val: "Verified" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-6 lg:space-x-8 p-6 lg:p-8 glass-panel rounded-3xl lg:rounded-[3.5rem] border-white border-2 hover:translate-x-2 transition-transform">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0051FF]">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <div className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[#64748B] mb-1">{item.label}</div>
                          <div className="text-xl lg:text-2xl font-black text-[#0A2540] tracking-tight">{item.val}</div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="reveal-scale">
                 <div className="bg-[#0A2540] rounded-[3rem] lg:rounded-[6rem] p-1 shadow-2xl relative group overflow-hidden">
                    <div className="bg-slate-900 rounded-[2.8rem] lg:rounded-[5.8rem] p-8 md:p-14 lg:p-28 overflow-hidden relative">
                       <div className="scanline opacity-20"></div>
                       <Terminal className="text-[#4FACFE] w-10 h-10 lg:w-16 lg:h-16 mb-8 lg:mb-12 animate-pulse" />
                       <div className="font-mono text-xs md:text-sm lg:text-lg space-y-4 lg:space-y-6 text-emerald-400">
                          <div className="opacity-40 tracking-tighter">>> SYNCING GLOBAL_NODES... [OK]</div>
                          <div className="opacity-70 tracking-tighter">>> AUTHENTICATING ENCRYPTION_V4... [OK]</div>
                          <div className="text-white font-bold tracking-tighter">>> DEPLOYING HIGH_FIDELITY_LAYER...</div>
                          <div className="text-[#4FACFE] animate-pulse tracking-tighter">>> SYSTEM_READY: MISSION_START_STABLE</div>
                       </div>
                       <div className="absolute -bottom-20 -right-20 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] bg-[#0051FF] rounded-full blur-[100px] lg:blur-[140px] opacity-20 transition-opacity"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* How We Deliver Solutions */}
      <section className="py-20 lg:py-40 bg-[#0A2540] text-white relative overflow-hidden">
        <div className="scanline opacity-10"></div>
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="How We Deliver Solutions" 
            subtitle="A rigorous four-phase protocol for guaranteed project stability and growth."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mt-20">
            {[
              { step: "01", title: "Ideation", icon: Lightbulb, desc: "We deconstruct your mission and synchronize technical goals." },
              { step: "02", title: "Design the Solution", icon: Layout, desc: "Engineering high-fidelity visual prototypes and user flow systems." },
              { step: "03", title: "Develop & Engineering", icon: Code, desc: "Hand-engineered artisanal code deployment with sub-second response." },
              { step: "04", title: "Launch & Grow", icon: Rocket, desc: "Operational deployment followed by aggressive scaling and optimization." }
            ].map((delivery, i) => (
              <div key={i} className="relative group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#4FACFE] mb-8 group-hover:bg-[#0051FF] group-hover:text-white transition-all shadow-xl">
                    <delivery.icon size={28} />
                  </div>
                  <div className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40 mb-3">{delivery.step} Protocol</div>
                  <h3 className="text-2xl font-black mb-5 tracking-tight group-hover:text-[#4FACFE] transition-colors">{delivery.title}</h3>
                  <p className="text-white/50 font-bold text-sm leading-relaxed">{delivery.desc}</p>
                </div>
                {i < 3 && <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent -ml-6 z-0"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-40 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Success Signals" 
            subtitle="Verified reports from global enterprise units and startups we've successfully scaled."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="soft-card p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem] reveal flex flex-col justify-between group hover:shadow-2xl transition-all">
                <div>
                   <div className="flex space-x-1 mb-8">
                     {[1,2,3,4,5].map(s => <Zap key={s} size={14} className="text-[#4FACFE]" fill="currentColor" />)}
                   </div>
                   <p className="text-[#374151] text-lg font-bold leading-relaxed opacity-90 italic">"{t.content}"</p>
                </div>
                <div className="flex items-center space-x-5 mt-10">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover shadow-lg border-2 border-white" />
                  <div>
                    <div className="font-black text-[#0A2540] text-lg">{t.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#4FACFE]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Integrated Above Footer */}
      <section id="contact-sync" className="py-20 lg:py-40 bg-[#F8FAFC] border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16 reveal">
            <div className="tag-pill mb-8">Direct Link</div>
            <h2 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
              Start the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Project.</span>
            </h2>
            <p className="text-2xl text-[#64748B] leading-relaxed max-w-2xl font-semibold opacity-90">
              Our engineering leads are ready to synchronize with your technical vision.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {selectedService && (
        <ServiceLightbox 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
          onNext={() => {}}
          onPrev={() => {}}
        />
      )}
    </div>
  );
};

export default Home;
