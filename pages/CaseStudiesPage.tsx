
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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16 reveal active">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-none">
            Proof of <span className="text-transparent bg-clip-text gradient-primary">Delivery.</span>
          </h1>
          <p className="text-xl text-[#374151] leading-relaxed max-w-2xl font-bold">
            Our portfolio showcases deep technical excellence across e-commerce, AI automation, and bespoke infrastructure.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#0A2540] font-black uppercase tracking-widest text-xs pb-2 border-b-4 border-[#4FACFE] hover:text-[#4FACFE] transition-colors"
            >
              <span>Full Project Portfolio</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 reveal active">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === f 
                  ? 'text-white gradient-primary shadow-2xl scale-105' 
                  : 'bg-white border-2 border-blue-100 text-[#0A2540] hover:border-[#4FACFE] shadow-md'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredStudies.map((study, idx) => {
            const Icon = categoryIcons[study.category] || Layout;
            return (
              <div key={study.id} className="reveal soft-card group flex flex-col h-full overflow-hidden border-2 border-white shadow-xl hover:shadow-2xl transition-all" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="p-10 md:p-16 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-[#4FACFE] group-hover:gradient-primary group-hover:text-white transition-all duration-500 shadow-md border border-blue-200">
                      <Icon size={32} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0A2540] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">
                      {study.industry}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-black text-[#0A2540] mb-6 group-hover:text-[#4FACFE] transition-colors leading-tight tracking-tight">
                    {study.title}
                  </h2>
                  
                  <p className="text-[#4B5563] text-base leading-relaxed mb-10 flex-grow font-semibold opacity-90">
                    {study.overview}
                  </p>

                  <div className="space-y-8 mb-12">
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A2540] mb-4">Core Tech Stack</h4>
                       <div className="flex flex-wrap gap-2">
                         {study.techStack.map((tech, i) => (
                           <span key={i} className="px-4 py-2 bg-white text-[9px] font-black text-[#4FACFE] rounded-xl border-2 border-blue-50 uppercase tracking-widest shadow-sm">
                             {tech}
                           </span>
                         ))}
                       </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t-2 border-blue-50">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B7280] mb-1">Impact Result</span>
                       <span className="text-sm font-black text-[#0A2540]">{study.outcomes[0]}</span>
                    </div>
                    {study.liveUrl && (
                      <a 
                        href={study.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-blue-50 rounded-2xl text-[#4FACFE] border-2 border-blue-100 hover:gradient-primary hover:text-white transition-all shadow-md"
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
