
import React, { useState } from 'react';
// Added Link import from react-router-dom to fix missing reference errors
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Package, FileCode, Smartphone, 
  Palette, Briefcase, TrendingUp, Cpu, 
  Layout, Shield, Globe, Video, 
  MessageCircle, Box, Zap,
  ArrowRight, Layers, Terminal, Database, Code, Activity
} from 'lucide-react';
import { SERVICES } from '../constants';
import { Service, ServiceCategory } from '../types';
import ServiceLightbox from '../components/ServiceLightbox';

const iconMap: any = {
  ShoppingBag, Package, FileCode, Smartphone, 
  Palette, Briefcase, TrendingUp, Cpu, 
  Layout, Shield, Globe, Video, 
  MessageCircle, Box, Zap, Layers, Terminal, Database, Code, Activity
};

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = Object.values(ServiceCategory);

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
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 reveal">
            <div className="tag-pill mb-8">Service Catalog v4.0</div>
            <h1 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Architecture.</span>
            </h1>
            <p className="text-2xl text-[#64748B] leading-relaxed max-w-2xl font-semibold opacity-90">
              A comprehensive directory of specialized engineering units. From web ecosystems to AI-driven automation layers.
            </p>
        </div>

        <div className="space-y-40">
          {categories.map((cat, catIdx) => {
            const catServices = SERVICES.filter(s => s.category === cat);
            if (catServices.length === 0) return null;

            return (
              <div key={cat} id={cat.replace(/\s+/g, '-').toLowerCase()} className="reveal" style={{ transitionDelay: `${catIdx * 50}ms` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-slate-200 pb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] uppercase tracking-tighter flex items-center">
                    <span className="w-10 h-10 bg-[#0A2540] rounded-xl text-white flex items-center justify-center mr-6 text-sm">
                      {(catIdx + 1).toString().padStart(2, '0')}
                    </span>
                    {cat}
                  </h2>
                  <div className="mt-4 md:mt-0 text-[10px] font-black text-[#64748B] uppercase tracking-[0.3em]">
                    {catServices.length} Specialized Units Active
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {catServices.map((service) => {
                    const Icon = iconMap[service.icon] || Code;
                    return (
                      <div 
                        key={service.id}
                        onClick={() => openService(service)}
                        className="bg-white p-10 cursor-pointer group flex flex-col h-full border-2 border-slate-50 rounded-[3rem] transition-all duration-700 hover:border-[#0051FF]/20 hover:shadow-2xl hover:-translate-y-2"
                      >
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0A2540] mb-10 group-hover:bg-[#0A2540] group-hover:text-white transition-all duration-500 shadow-sm overflow-hidden relative border border-slate-100">
                          <Icon size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-[#0A2540] mb-4 tracking-tight group-hover:text-[#0051FF] transition-colors leading-tight">{service.title}</h3>
                        <p className="text-[#64748B] text-sm leading-relaxed mb-10 flex-grow font-bold opacity-80">{service.shortDesc}</p>
                        
                        <div className="flex items-center text-[#0051FF] font-black text-[10px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-3">
                          Initialize Protocol <ArrowRight size={14} className="ml-3" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Requirements CTA */}
        <div className="mt-48 bg-[#0A2540] rounded-[3rem] md:rounded-[6rem] p-12 md:p-24 lg:p-32 text-center text-white shadow-4xl reveal-scale border-4 border-white/5 relative overflow-hidden">
          <div className="scanline opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none tracking-tighter italic">Unique Requirements?</h2>
            <p className="text-white/60 mb-16 max-w-2xl mx-auto text-xl font-bold leading-relaxed">Our expertise extends beyond standard libraries. We engineer unique digital ecosystems for complex global challenges.</p>
            <Link to="/contact" className="btn-primary group px-14 py-7 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center transition-all shadow-2xl hover:scale-105 active:scale-95">
              Connect with Engineering Team
              <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

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

export default ServicesPage;
