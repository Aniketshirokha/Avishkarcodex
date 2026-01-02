import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Shield, Zap, Globe, Users, Code2, ArrowUpRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mb-32 reveal active">
          <div className="tag-pill mb-8">The Architects</div>
          <h1 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Digital</span> Mastery.
          </h1>
          <p className="text-2xl text-[#475569] leading-relaxed max-w-3xl font-semibold">
            Aavishkar Codex is a high-fidelity technology collective. We bridge the gap between complex engineering challenges and seamless user experiences with artisanal precision.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal active">
               <h2 className="text-4xl font-black text-[#0A2540] mb-10 leading-tight tracking-tight">Our Identity.</h2>
               <div className="space-y-8">
                 <p className="text-[#475569] text-xl leading-relaxed font-semibold">
                   We believe technology should be artisanal. In a world of automated solutions, we prioritize hand-crafted code, rigorous architecture, and aesthetic clarity in every module we ship.
                 </p>
                 <p className="text-[#475569] text-xl leading-relaxed font-semibold">
                   Headquartered in Ahmedabad, our agency serves as the technical heart for brands across the globe. Our squad is built of elite developers who live for the "impossible" brief.
                 </p>
               </div>
               <div className="mt-12">
                 <a href="#/contact" className="btn-primary px-10 py-5 rounded-2xl font-black tracking-widest uppercase text-sm">
                   Join the Collective
                 </a>
               </div>
            </div>
            <div className="reveal active stagger-1 relative">
               <div className="absolute inset-0 bg-blue-100 rounded-[4rem] blur-[80px] -z-10 opacity-60"></div>
               <div className="soft-card p-20 flex flex-col items-center justify-center border-2 border-white aspect-square bg-white shadow-2xl overflow-hidden group">
                  <div className="relative z-10 text-center animate-float">
                    <div className="text-6xl sm:text-7xl font-black text-[#0A2540] mb-2 leading-none tracking-tighter italic">AAVISHKAR</div>
                    <div className="text-[#4FACFE] font-black tracking-[0.8em] uppercase text-[10px] ml-4">Codex Infotech</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/30 to-blue-50/0 group-hover:translate-y-full transition-transform duration-[2000ms] pointer-events-none"></div>
               </div>
            </div>
          </div>
        </section>

        {/* Principles Grid */}
        <section className="mb-48 reveal active">
          <div className="bg-[#0A2540] rounded-[3rem] md:rounded-[4rem] p-12 md:p-24 text-white shadow-3xl">
            <div className="max-w-3xl mb-20">
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Core Engineering Protocols.</h3>
              <p className="text-white/60 text-xl font-semibold">The architectural baseline for every system we deploy, ensuring stability and performance at scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Artisanal Code", desc: "No templates. Every logic flow is hand-engineered for sub-second performance and readability.", icon: Code2 },
                { title: "Radical Clarity", desc: "Total transparency in our methodology, pricing models, and project delivery timelines.", icon: Shield },
                { title: "Edge Innovation", desc: "We deploy the latest AI frameworks and distributed edge computing protocols today.", icon: Zap },
                { title: "Unified Sync", desc: "Our team integrates as a seamless extension of your internal product and business units.", icon: Globe }
              ].map((val, i) => (
                <div key={i} className="flex flex-col space-y-6 group cursor-default">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#4FACFE] transition-colors duration-500 border border-white/10">
                    <val.icon size={28} className="text-[#4FACFE] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight">{val.title}</h4>
                  <p className="text-white/50 text-base leading-relaxed font-semibold">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="reveal active">
          <SectionHeader title="The Leadership Collective" subtitle="The specialist leads guiding our engineering units toward world-class digital production." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {[
              { role: "Executive Board", name: "Strategic Direction" },
              { role: "Engineering Lead", name: "System Architecture" },
              { role: "Creative Studio", name: "Design Engineering" },
              { role: "Client Ops", name: "Global Delivery" }
            ].map((team, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-white rounded-[2.5rem] mb-8 border border-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#4FACFE] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-slate-50 group-hover:bg-blue-50/30 transition-colors"></div>
                   <Users className="w-16 h-16 text-slate-200 group-hover:text-[#4FACFE] transition-colors relative z-10" />
                   <div className="absolute bottom-6 right-6 p-3 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300 shadow-md border border-slate-100 z-10">
                     <ArrowUpRight size={18} className="text-[#0A2540]" />
                   </div>
                </div>
                <div className="px-2">
                  <div className="font-black text-[#0A2540] text-xl tracking-tight mb-2">{team.name}</div>
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-[#64748B]">{team.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;