import React, { useState } from 'react';
import { 
  ShoppingBag, Package, FileCode, Smartphone, 
  Palette, Briefcase, TrendingUp, Cpu, 
  Layout, Shield, Globe, Video, 
  MessageCircle, Box, Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Service, ServiceCategory } from '../types';
import SectionHeader from '../components/SectionHeader';
import ServiceLightbox from '../components/ServiceLightbox';

const iconMap: any = {
  ShoppingBag, Package, FileCode, Smartphone, 
  Palette, Briefcase, TrendingUp, Cpu, 
  Layout, Shield, Globe, Video, 
  MessageCircle, Box, Zap
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
            <div className="tag-pill mb-8">Capabilities</div>
            <h1 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0051FF]">Units.</span>
            </h1>
            <p className="text-2xl text-[#64748B] leading-relaxed max-w-2xl font-semibold opacity-90">
              We operate through high-fidelity engineering units designed for speed, security, and infinite scalability.
            </p>
        </div>

        <div className="space-y-40">
          {categories.map((cat, catIdx) => {
            const catServices = SERVICES.filter(s => s.category === cat);
            if (catServices.length === 0) return null;

            return (
              <div key={cat} id={cat.replace(/\s+/g, '-').toLowerCase()} className="reveal" style={{ transitionDelay: `${catIdx * 50}ms` }}>
                <h2 className="text-xl font-black text-[#0A2540] mb-12 uppercase tracking-[0.4em] flex items-center">
                   <span className="w-12 h-[4px] gradient-primary mr-6 rounded-full shadow-sm"></span>
                   {cat}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {catServices.map((service) => {
                    const Icon = iconMap[service.icon];
                    return (
                      <div 
                        key={service.id}
                        onClick={() => openService(service)}
                        className="futuristic-glass p-12 cursor-pointer group flex flex-col h-full border border-slate-100 rounded-[3rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                      >
                        <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white mb-10 group-hover:bg-[#0051FF] transition-all duration-500 shadow-xl overflow-hidden relative">
                          <Icon size={30} />
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <h3 className="text-2xl font-black text-[#0A2540] mb-4 group-hover:text-[#0051FF] transition-colors leading-tight">{service.title}</h3>
                        <p className="text-[#64748B] text-base leading-relaxed mb-10 flex-grow font-semibold opacity-80">{service.shortDesc}</p>
                        <div className="flex items-center text-[#0051FF] font-black text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-3 transition-transform">
                          Initialize Unit <ArrowRight size={14} className="ml-3" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Infrastructure Banner */}
        <div className="mt-48 bg-[#0A2540] rounded-[3rem] md:rounded-[4.5rem] p-12 md:p-24 lg:p-32 text-center text-white shadow-4xl reveal-scale border-4 border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4FACFE]/15 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none tracking-tighter">Bespoke Requirements?</h2>
            <p className="text-white/60 mb-16 max-w-2xl mx-auto text-xl font-bold leading-relaxed">Our expertise extends beyond standard libraries. We engineer unique digital ecosystems for complex global challenges.</p>
            <div className="flex justify-center w-full">
              <Link to="/contact" className="btn-white group w-full sm:w-auto px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center justify-center transition-all">
                Connect with Architecture Team
                <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
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