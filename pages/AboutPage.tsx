import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Shield, Zap, Globe, Users, Code2, ArrowUpRight, Cpu, Layers, Activity } from 'lucide-react';
import Logo from '../components/Logo';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-screen bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-5xl mb-20 lg:mb-48 reveal">
          <div className="tag-pill mb-6 lg:mb-10 bg-blue-100 text-[#0051FF]">About Us</div>
          <h1 className="text-fluid-h1 text-[#0A2540] mb-8 lg:mb-12 tracking-tighter leading-[0.82]">
            We Build <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Great Websites</span> <br className="hidden md:block"/> and Software.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#475569] leading-tight max-w-3xl font-bold opacity-80 tracking-tight">
            Aavishkar Codex is a team of expert developers and designers based in Ahmedabad. We help businesses grow by building high-quality digital products.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-24 lg:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
               <div className="flex items-center space-x-4 mb-6">
                 <div className="h-[2px] w-12 bg-[#0051FF]"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#0051FF]">Our Mission</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mb-8 leading-[1] tracking-tighter">Your Trusted <br className="hidden md:block"/>Technology Partner.</h2>
               <div className="space-y-6 lg:space-y-8">
                 <p className="text-[#475569] text-lg lg:text-xl leading-relaxed font-bold opacity-80">
                   We believe in quality over quantity. Instead of using basic templates, we write clean code from scratch to ensure your website is fast and secure.
                 </p>
                 <p className="text-[#475569] text-lg lg:text-xl leading-relaxed font-bold opacity-80">
                   From our office in Ahmedabad, we work with clients globally to deliver modern tech solutions that actually work for their business.
                 </p>
               </div>
               <div className="mt-10">
                 <a href="#/contact" className="btn-primary w-full sm:w-auto inline-flex px-12 py-5 rounded-2xl font-black tracking-widest uppercase text-[11px] items-center justify-center group">
                   Let's Talk Business <ArrowUpRight className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
               </div>
            </div>

            <div className="hidden lg:flex reveal-scale relative items-center justify-center order-1 lg:order-2">
               <div className="glass-panel p-16 flex flex-col items-center justify-center border-white border-8 aspect-square bg-white/90 rounded-[4rem] shadow-xl w-full max-w-[500px]">
                  <div className="relative z-10 text-center animate-float-subtle">
                    <div className="w-48 h-48 bg-transparent flex items-center justify-center mb-8 mx-auto">
                       <Logo className="w-full h-full" />
                    </div>
                    <div className="text-4xl font-black text-[#0A2540] mb-1 tracking-tighter uppercase italic">AAVISHKAR</div>
                    <div className="text-[#0051FF] font-black tracking-widest uppercase text-[10px]">Codex Infotech Ahmedabad</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="mb-24 lg:mb-40">
          <div className="bg-[#0A2540] rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 text-white shadow-2xl relative border-8 border-white overflow-hidden">
            <div className="max-w-4xl mb-12 relative z-10 text-center lg:text-left">
              <div className="tag-pill mb-6 bg-white/10 text-[#4FACFE] border-white/5 mx-auto lg:mx-0">Why Clients Love Us</div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight">We Care About <br className="hidden md:block"/> <span className="text-[#4FACFE]">Your Success.</span></h3>
              <p className="text-white/60 text-lg font-bold leading-relaxed">Our focus is on delivering real value through technology.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Clean Code", desc: "We write simple, efficient code to make your site fast and easy to maintain.", icon: Code2 },
                { title: "Honest Pricing", desc: "No hidden costs. We provide clear pricing based on your project requirements.", icon: Shield },
                { title: "Modern Tech", desc: "We use the latest tools like React, AI, and Cloud to keep you ahead.", icon: Zap },
                { title: "Team Support", icon: Globe, desc: "We work closely with you as a dedicated tech extension of your team." }
              ].map((val, i) => (
                <div key={i} className="flex flex-col space-y-4 group text-center sm:text-left">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto sm:mx-0 group-hover:bg-[#4FACFE] transition-all">
                    <val.icon size={24} className="text-[#4FACFE] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 group-hover:text-[#4FACFE] transition-colors">{val.title}</h4>
                    <p className="text-white/40 text-sm font-bold leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;