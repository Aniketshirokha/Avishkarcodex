
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Shield, Zap, Globe, Users, Code2, ArrowUpRight, Cpu, Layers, Activity } from 'lucide-react';
import Logo from '../components/Logo';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-screen bg-transparent relative overflow-hidden">
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/20 rounded-full blur-[180px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[0%] left-[-5%] w-[40%] h-[40%] bg-sky-50/30 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-5xl mb-20 lg:mb-48 reveal">
          <div className="tag-pill mb-6 lg:mb-10 bg-blue-100 text-[#0051FF]">Unit Identity // Protocol 01</div>
          <h1 className="text-fluid-h1 text-[#0A2540] mb-8 lg:mb-12 tracking-tighter leading-[0.82]">
            Engineering <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Architectural</span> <br className="hidden md:block"/> Mastery.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#475569] leading-tight max-w-3xl font-bold opacity-80 tracking-tight">
            Aavishkar Codex is a high-fidelity technology collective. We bridge the gap between complex engineering challenges and elite user experiences with artisanal precision.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-24 lg:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="reveal order-2 lg:order-1">
               <div className="flex items-center space-x-4 mb-6 lg:mb-10">
                 <div className="h-[2px] w-12 bg-[#0051FF]"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0051FF]">Our Mission Strategy</span>
               </div>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0A2540] mb-8 lg:mb-12 leading-[0.9] tracking-tighter">Hand-Crafted <br className="hidden md:block"/>Digital Assets.</h2>
               <div className="space-y-6 lg:space-y-10">
                 <p className="text-[#475569] text-lg lg:text-xl leading-relaxed font-bold opacity-80">
                   We believe technology should be artisanal. In a world of automated templates, we prioritize hand-engineered code, rigorous architecture, and aesthetic clarity.
                 </p>
                 <p className="text-[#475569] text-lg lg:text-xl leading-relaxed font-bold opacity-80">
                   Headquartered in Ahmedabad, our agency serves as the technical heart for brands across the globe. Our squad is built of elite developers who live for high-load environments.
                 </p>
               </div>
               <div className="mt-10 lg:mt-16">
                 <a href="#/contact" className="btn-primary w-full sm:w-auto inline-flex px-12 py-5 lg:py-6 rounded-2xl lg:rounded-[2rem] font-black tracking-[0.3em] uppercase text-[10px] lg:text-xs items-center justify-center group">
                   Initialize Sync <ArrowUpRight className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
               </div>
            </div>

            <div className="hidden lg:flex reveal-scale relative items-center justify-center order-1 lg:order-2">
               <div className="absolute inset-0 bg-blue-50 rounded-full blur-[60px] lg:blur-[80px] -z-10 opacity-60"></div>
               <div className="glass-panel p-10 md:p-20 flex flex-col items-center justify-center border-white border-4 md:border-[12px] aspect-square bg-white/90 rounded-[3rem] lg:rounded-[5rem] shadow-xl w-full max-w-[320px] md:max-w-[550px] scan-wrapper">
                  <div className="scanline opacity-10"></div>
                  <div className="relative z-10 text-center animate-float-subtle">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-transparent flex items-center justify-center mb-6 md:mb-10 mx-auto transition-transform duration-700">
                       <Logo className="w-full h-full" />
                    </div>
                    <div className="text-3xl md:text-5xl lg:text-7xl font-black text-[#0A2540] mb-1 leading-none tracking-tighter uppercase italic">AAVISHKAR</div>
                    <div className="text-[#0051FF] font-black tracking-[0.4em] lg:tracking-[0.8em] uppercase text-[8px] lg:text-[10px]">Codex Infotech</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="mb-24 lg:mb-64">
          <div className="bg-[#0A2540] rounded-[2.5rem] md:rounded-[4rem] lg:rounded-[6rem] p-8 md:p-16 lg:p-32 text-white shadow-2xl relative border-4 md:border-[12px] border-white overflow-hidden">
            <div className="scanline opacity-10"></div>
            <div className="max-w-4xl mb-12 lg:mb-24 relative z-10 text-center lg:text-left">
              <div className="tag-pill mb-6 bg-white/10 text-[#4FACFE] border-white/5 mx-auto lg:mx-0">Operational Baseline</div>
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 lg:mb-10 tracking-tighter leading-none">Core Engineering <br className="hidden md:block"/> <span className="text-[#4FACFE]">Protocols.</span></h3>
              <p className="text-white/60 text-lg lg:text-2xl font-bold leading-relaxed">The architectural baseline for stability and performance at global scale.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {[
                { title: "Artisanal Code", desc: "No templates. Every logic flow is hand-engineered for sub-second performance.", icon: Code2 },
                { title: "Radical Clarity", desc: "Total transparency in our methodology, pricing, and project delivery.", icon: Shield },
                { title: "Edge Innovation", desc: "We deploy the latest AI frameworks and distributed edge computing.", icon: Zap },
                { title: "Unified Sync", desc: "Our team integrates as a seamless extension of your internal product units.", icon: Globe }
              ].map((val, i) => (
                <div key={i} className="flex flex-col space-y-4 md:space-y-8 group text-center sm:text-left">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center mx-auto sm:mx-0 group-hover:bg-[#4FACFE] transition-all border border-white/10">
                    <val.icon size={24} className="text-[#4FACFE] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-black tracking-tight mb-3 lg:mb-4 group-hover:text-[#4FACFE] transition-colors">{val.title}</h4>
                    <p className="text-white/40 text-sm lg:text-base leading-relaxed font-bold">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-20">
          <SectionHeader 
            title="Leadership Collective" 
            subtitle="The specialist leads guiding our engineering units toward world-class digital production." 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mt-12 lg:mt-24">
            {[
              { role: "Executive Board", name: "Strategic Direction", icon: Layers, tech: "Market Protocol" },
              { role: "Engineering Lead", name: "System Architecture", icon: Cpu, tech: "Distributed Ops" },
              { role: "Creative Studio", name: "Design Engineering", icon: Activity, tech: "High-Fidelity UI" },
              { role: "Client Ops", name: "Global Delivery", icon: Globe, tech: "Scale Deployment" }
            ].map((team, i) => {
              const Icon = team.icon;
              return (
                <div key={i} className="group cursor-pointer reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="aspect-[4/5] bg-white rounded-[2.5rem] lg:rounded-[3.5rem] mb-6 lg:mb-10 border-2 border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:border-[#0051FF] flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-slate-50 group-hover:bg-blue-50/40 transition-colors"></div>
                     <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 bg-[#0A2540] rounded-[1.2rem] md:rounded-[2rem] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#4FACFE]" />
                     </div>
                     <div className="absolute top-6 left-6 md:top-8 md:left-8">
                        <div className="px-3 md:px-4 py-1.5 bg-white/80 border border-slate-100 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#64748B]">
                           UNIT_{i + 1}
                        </div>
                     </div>
                  </div>
                  
                  <div className="px-2">
                    <div className="font-black text-[#0A2540] text-lg lg:text-2xl tracking-tight group-hover:text-[#0051FF] transition-colors">{team.name}</div>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                       <div className="text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-[#64748B]">{team.role}</div>
                       <div className="hidden sm:block w-1 h-1 bg-slate-200 rounded-full"></div>
                       <div className="text-[10px] lg:text-[11px] font-bold text-[#4FACFE] uppercase tracking-widest">{team.tech}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
