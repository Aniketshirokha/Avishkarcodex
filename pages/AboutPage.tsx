import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Shield, Zap, Globe, Users, Code2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 reveal active">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-none">
            The <span className="text-transparent bg-clip-text gradient-primary">Architects.</span>
          </h1>
          <p className="text-xl text-[#6B7280] leading-relaxed max-w-2xl font-medium">
            Founded on technical precision and aesthetic clarity, we engineer the digital infrastructure of modern industry.
          </p>
        </div>

        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 reveal active">
               <h2 className="text-4xl font-bold text-[#0A2540] mb-8 leading-tight tracking-tight">Built for Excellence.</h2>
               <p className="text-[#6B7280] text-lg leading-relaxed mb-8 font-medium">
                 We are a collective of developers, designers, and strategists driven by the challenge of creating perfect digital products. Headquartered in Ahmedabad, we redefine the digital agency model by prioritizing architectural integrity over temporary vanity metrics.
               </p>
               <p className="text-[#6B7280] text-lg leading-relaxed font-medium">
                 Over the years, we've helped dozens of global brands transition from traditional workflows to automated, high-converting digital ecosystems. Our identity is rooted in technical precision and aesthetic clarity.
               </p>
            </div>
            <div className="order-1 lg:order-2 reveal active">
               <div className="soft-card p-16 flex items-center justify-center border border-white/50 aspect-square gradient-primary">
                  <div className="text-center animate-float">
                    <div className="text-6xl font-black text-white mb-2 leading-none tracking-tighter italic">AAVISHKAR</div>
                    <div className="text-white/60 font-black tracking-[0.5em] uppercase text-xs">Codex Infotech</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-40 reveal active">
          <div className="soft-card p-12 md:p-24 border border-white/50">
            <SectionHeader title="Core Engineering Principles" align="left" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {[
                { title: "Artisanal Code", desc: "Every module is hand-crafted for performance and maintainability.", icon: Code2 },
                { title: "Radical Transparency", desc: "Honest protocols are the baseline of our client interactions.", icon: Shield },
                { title: "Edge Innovation", desc: "Constant experimentation with AI and edge computing.", icon: Zap },
                { title: "Collaborative Sync", desc: "We act as an integrated extension of your internal units.", icon: Globe }
              ].map((val, i) => (
                <div key={i} className="flex flex-col space-y-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg"><val.icon size={24} className="text-white" /></div>
                  <h4 className="text-xl font-bold text-[#0A2540] tracking-tight">{val.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed font-medium opacity-80">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal active">
          <SectionHeader title="Leadership Units" subtitle="A diverse collective of technologists working toward unified digital perfection." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { role: "Executive Board", name: "Founding Partner" },
              { role: "Engineering Lead", name: "System Architecture" },
              { role: "Creative Studio", name: "Design Direction" },
              { role: "Global Ops", name: "Project Delivery" }
            ].map((team, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square bg-[#EAF6FF] rounded-[2rem] mb-6 border border-white shadow-sm transition-all group-hover:scale-105 group-hover:shadow-xl group-hover:gradient-primary"></div>
                <div className="font-bold text-[#0A2540] text-lg tracking-tight leading-none mb-2">{team.name}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">{team.role}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;