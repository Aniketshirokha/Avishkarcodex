import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, ExternalLink, Globe, Layout, 
  Smartphone, Cpu, Palette, ShoppingBag, 
  Box, Search, CheckCircle2 
} from 'lucide-react';
import { CASE_STUDIES, BRAND_COLORS } from '../constants';
import SectionHeader from '../components/SectionHeader';

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
  const [filter, setFilter] = useState<string>('All');
  const filters = ['All', 'Shopify', 'Automation', 'Marketing', '3D', 'Web', 'App'];

  const filteredStudies = useMemo(() => {
    if (filter === 'All') return CASE_STUDIES;
    return CASE_STUDIES.filter(s => s.category === filter);
  }, [filter]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 reveal active">
          <div className="tag-pill mb-8">Performance Catalog</div>
          <h1 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Protocol.</span>
          </h1>
          <p className="text-2xl text-[#64748B] leading-relaxed max-w-3xl font-semibold opacity-90">
            A deep-dive into the architectural solutions we've deployed for leading global enterprises.
          </p>
          
          <div className="mt-12">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-[#0A2540] font-black uppercase tracking-[0.2em] text-[11px] pb-3 border-b-4 border-[#4FACFE] hover:border-[#0A2540] transition-colors"
            >
              <span>ACCESS FULL REPOSITORY</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-20 reveal active stagger-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-10 py-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest transition-all ${
                filter === f 
                  ? 'btn-primary scale-105' 
                  : 'bg-white border-2 border-slate-200 text-[#64748B] hover:border-[#0A2540] hover:text-[#0A2540]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal active stagger-2">
          {filteredStudies.map((study, idx) => {
            const Icon = categoryIcons[study.category] || Layout;
            return (
              <div key={study.id} className="soft-card group flex flex-col h-full overflow-hidden">
                <div className="p-10 md:p-16 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-[#4FACFE] group-hover:bg-[#0A2540] group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon size={32} />
                    </div>
                    <div className="tag-pill bg-white">
                      {study.industry}
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-black text-[#0A2540] mb-6 group-hover:text-[#4FACFE] transition-colors leading-tight tracking-tight">
                    {study.title}
                  </h2>
                  
                  <p className="text-[#64748B] text-lg leading-relaxed mb-10 flex-grow font-semibold opacity-80">
                    {study.overview}
                  </p>

                  <div className="space-y-10 mb-12">
                    <div>
                       <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0A2540] mb-6 flex items-center">
                          Tech Stack
                          <span className="flex-grow h-[1px] bg-slate-100 ml-6"></span>
                       </h4>
                       <div className="flex flex-wrap gap-3">
                         {study.techStack.map((tech, i) => (
                           <span key={i} className="px-4 py-2 bg-slate-50 text-[10px] font-black text-[#0A2540] rounded-xl border border-slate-200 uppercase tracking-widest">
                             {tech}
                           </span>
                         ))}
                       </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] mb-1">Result</span>
                       <span className="text-sm font-black text-[#0A2540]">{study.outcomes[0]}</span>
                    </div>
                    {study.liveUrl && (
                      <a 
                        href={study.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary w-14 h-14 rounded-2xl"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
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