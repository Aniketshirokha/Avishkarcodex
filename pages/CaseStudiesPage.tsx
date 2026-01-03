import React from 'react';
import { Globe, Smartphone, Layout, Cpu, ShoppingBag, Box, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

const categoryIcons: any = { 
  Web: Globe, 
  Shopify: ShoppingBag, 
  App: Smartphone, 
  'UI UX': Layout, 
  Marketing: Search, 
  Automation: Cpu, 
  '3D': Box 
};

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-16 md:mb-24 reveal active">
          <div className="tag-pill mb-6 md:mb-8">Brief Catalog</div>
          <h1 className="text-4xl md:text-fluid-h2 text-[#0A2540] mb-6 md:mb-8 leading-tight md:leading-none tracking-tighter">
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Execution.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#64748B] font-bold opacity-80 leading-relaxed max-w-2xl">
            A repository of architectural deployments that redefine industry standards for performance and user experience.
          </p>
        </div>

        {/* Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {CASE_STUDIES.map((study, idx) => {
            const Icon = categoryIcons[study.category] || Layout;
            const hasLiveUrl = study.liveUrl && study.liveUrl !== "#";
            
            return (
              <div 
                key={study.id} 
                className="glass-panel group flex flex-col h-full rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-slate-50 hover:border-[#0051FF]/20 hover:shadow-4xl transition-all duration-700 reveal active overflow-hidden" 
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="p-8 md:p-12 lg:p-16 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white group-hover:bg-[#0051FF] transition-all duration-500 shadow-xl">
                      <Icon size={28} />
                    </div>
                    <div className="tag-pill bg-slate-50 text-[9px] md:text-[10px] font-black uppercase tracking-widest">{study.industry}</div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A2540] mb-4 md:mb-6 group-hover:text-[#0051FF] transition-colors tracking-tight leading-tight">
                    {study.title}
                  </h2>
                  <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-8 md:mb-10 flex-grow font-bold opacity-80">
                    {study.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                    {study.techStack.map((tech, i) => (
                      <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-50 text-[8px] md:text-[10px] font-black text-[#0A2540] rounded-xl border border-slate-100 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-8 md:pt-10 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] mb-1">Status</span>
                       <span className="text-xs md:text-sm font-black text-[#0051FF]">Unit Deployed</span>
                    </div>
                    
                    {hasLiveUrl ? (
                      <a 
                        href={study.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
                        aria-label={`View Live Website for ${study.title}`}
                      >
                        <ExternalLink size={24} />
                      </a>
                    ) : (
                      <div className="flex items-center text-[#64748B] text-[10px] font-black uppercase tracking-widest opacity-40">
                         Internal System <Box size={14} className="ml-2" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-24 md:mt-40 bg-[#0A2540] rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 text-white shadow-4xl text-center relative overflow-hidden reveal active">
          <div className="scanline opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-10 tracking-tighter italic">Ready to execute?</h2>
            <p className="text-white/50 mb-10 md:mb-16 max-w-2xl mx-auto text-lg md:text-xl font-bold leading-relaxed">Let's synchronize your vision with our engineering protocols.</p>
            <a href="#/contact" className="btn-primary btn-pill inline-flex px-10 md:px-14 py-5 md:py-7 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest items-center justify-center transition-all shadow-2xl hover:scale-105 active:scale-95">
              Initialize Project Sync <ArrowRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;