import React, { useState } from 'react';
import { 
  ShoppingBag, Package, FileCode, Smartphone, 
  Palette, Briefcase, TrendingUp, Cpu, 
  Layout, Shield, Globe, Video, 
  MessageCircle, Box, Zap,
  ArrowRight
} from 'lucide-react';
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
        <div className="max-w-4xl mb-24 reveal active">
            <div className="tag-pill mb-8">Capabilities</div>
            <h1 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Units.</span>
            </h1>
            <p className="text-2xl text-[#64748B] leading-relaxed max-w-2xl font-semibold opacity-90">
              We operate through high-fidelity engineering units designed for speed, security, and infinite scalability.
            </p>
        </div>

        <div className="space-y-32">
          {categories.map((cat, catIdx) => {
            const catServices = SERVICES.filter(s => s.category === cat);
            if (catServices.length === 0) return null;

            return (
              <div key={cat} id={cat.replace(/\s+/g, '-').toLowerCase()} className="reveal active" style={{ transitionDelay: `${catIdx * 100}ms` }}>
                <h2 className="text-xl font-black text-[#0A2540] mb-12 uppercase tracking-[0.4em] flex items-center">
                   <span className="w-12 h-[3.5px] gradient-primary mr-6 rounded-full"></span>
                   {cat}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {catServices.map((service, sIdx) => {
                    const Icon = iconMap[service.icon];
                    return (
                      <div 
                        key={service.id}
                        onClick={() => openService(service)}
                        className="soft-card p-12 cursor-pointer group flex flex-col h-full border border-slate-100"
                      >
                        <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-[#4FACFE] mb-10 group-hover:bg-[#0A2540] group-hover:text-white transition-all duration-500 shadow-sm">
                          <Icon size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-[#0A2540] mb-4 group-hover:text-[#4FACFE] transition-colors leading-tight">{service.title}</h3>
                        <p className="text-[#64748B] text-base leading-relaxed mb-10 flex-grow font-semibold opacity-80">{service.shortDesc}</p>
                        <div className="flex items-center text-[#4FACFE] font-black text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform">
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
        <div className="mt-40 bg-[#0A2540] rounded-[3rem] md:rounded-[4rem] p-12 md:p-32 text-center text-white shadow-[0_40px_100px_rgba(10,37,64,0.4)] reveal border-4 border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4FACFE]/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter">Bespoke Requirements?</h2>
            <p className="text-white/70 mb-16 max-w-2xl mx-auto text-xl font-semibold leading-relaxed">Our expertise extends beyond standard libraries. We engineer unique digital ecosystems for complex global challenges.</p>
            <div className="flex justify-center w-full">
              <a href="#/contact" className="btn-white group w-full sm:w-auto flex items-center justify-center">
                <span className="relative z-10">Connect with Architecture Team</span>
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform relative z-10" />
              </a>
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