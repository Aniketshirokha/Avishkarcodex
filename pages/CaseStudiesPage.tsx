import React, { useState, useMemo } from 'react';
import { ExternalLink, Globe, Smartphone, Layout, Cpu, ShoppingBag, Box, Search, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

const categoryIcons: any = { Web: Globe, Shopify: ShoppingBag, App: Smartphone, 'UI UX': Layout, Marketing: Search, Automation: Cpu, '3D': Box };

const CaseStudiesPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Shopify', 'Automation', 'Marketing', '3D', 'Web', 'App'];

  const filteredStudies = useMemo(() => {
    if (filter === 'All') return CASE_STUDIES;
    return CASE_STUDIES.filter(s => s.category === filter);
  }, [filter]);

  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 reveal">
          <div className="tag-pill mb-8">Brief Catalog</div>
          <h1 className="text-fluid-h2 text-[#0A2540] mb-8 leading-none tracking-tighter">
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0051FF] to-[#4FACFE]">Execution.</span>
          </h1>
          <p className="text-2xl text-[#64748B] font-bold opacity-80 leading-relaxed max-w-2xl">
            A repository of architectural deployments that redefine industry standards for performance and user experience.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-20 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                filter === f ? 'btn-primary scale-105' : 'bg-white border-2 border-slate-100 text-[#64748B] hover:border-[#0051FF] hover:text-[#0051FF]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredStudies.map((study, idx) => {
            const Icon = categoryIcons[study.category] || Layout;
            return (
              <div key={study.id} className="glass-panel group flex flex-col h-full rounded-[3.5rem] border-2 border-white hover:shadow-4xl transition-all duration-700 reveal overflow-hidden" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="p-12 md:p-16 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white group-hover:bg-[#0051FF] transition-all duration-500 shadow-xl">
                      <Icon size={32} />
                    </div>
                    <div className="tag-pill bg-slate-50">{study.industry}</div>
                  </div>
                  
                  <h2 className="text-4xl font-black text-[#0A2540] mb-6 group-hover:text-[#0051FF] transition-colors tracking-tight leading-tight">{study.title}</h2>
                  <p className="text-[#64748B] text-lg leading-relaxed mb-10 flex-grow font-bold opacity-80">{study.overview}</p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {study.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-[10px] font-black text-[#0A2540] rounded-xl border border-slate-100 uppercase tracking-widest">{tech}</span>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] mb-1">Status</span>
                       <span className="text-sm font-black text-[#0051FF]">Unit Deployed</span>
                    </div>
                    <a 
                      href={study.liveUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                    >
                      <ArrowRight size={24} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;