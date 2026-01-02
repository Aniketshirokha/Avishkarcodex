import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceLightboxProps {
  service: Service;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ServiceLightbox: React.FC<ServiceLightboxProps> = ({ service, onClose, onNext, onPrev }) => {
  useEffect(() => {
    // Pause smooth scrolling when modal opens
    if ((window as any).lenis) (window as any).lenis.stop();
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Resume smooth scrolling when modal closes
      if ((window as any).lenis) (window as any).lenis.start();
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleContactClick = () => {
    window.location.href = `#/contact?service=${encodeURIComponent(service.title)}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4 md:p-8 lg:p-12">
      <div 
        className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] overflow-hidden animate-in zoom-in-95 fade-in slide-in-from-bottom-12 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 text-[#0A2540] hover:bg-blue-100 bg-blue-50 rounded-2xl z-30 transition-all hover:rotate-90 shadow-md border border-blue-100"
        >
          <X size={28} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full overflow-hidden">
          {/* Content Area - Scrollable with Lenis prevention */}
          <div 
            data-lenis-prevent
            className="p-10 md:p-16 lg:p-20 overflow-y-auto bg-white scroll-smooth"
          >
            <div className="inline-block px-5 py-2.5 bg-blue-100 border border-blue-200 text-[#0A2540] text-[10px] font-black uppercase tracking-[0.4em] rounded-xl mb-10 shadow-sm">
              {service.category} UNIT
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A2540] mb-8 tracking-tighter leading-none">{service.title}</h2>
            <p className="text-[#374151] text-lg mb-12 leading-relaxed font-bold opacity-90">{service.longDesc}</p>

            <div className="space-y-12 mb-16">
              <div>
                <h4 className="text-[11px] font-black text-[#0A2540] mb-8 uppercase tracking-[0.5em] flex items-center">
                   System Deliverables
                   <div className="flex-grow h-[2px] bg-blue-100 ml-8 rounded-full"></div>
                </h4>
                <ul className="grid grid-cols-1 gap-4">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-base text-[#374151] font-bold bg-blue-50/50 p-6 rounded-[2rem] border-2 border-white shadow-sm hover:border-blue-200 transition-all group">
                      <CheckCircle2 className="w-6 h-6 mr-5 shrink-0 text-[#4FACFE]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-black text-[#0A2540] mb-8 uppercase tracking-[0.5em] flex items-center">
                   Operational Outcomes
                   <div className="flex-grow h-[2px] bg-blue-100 ml-8 rounded-full"></div>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {service.outcomes.map((outcome, i) => (
                    <span key={i} className="px-6 py-3.5 bg-white border-2 border-blue-100 text-[#0061FF] text-xs font-black uppercase tracking-widest rounded-2xl shadow-sm">
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={handleContactClick}
              className="w-full bg-[#0A2540] text-white py-8 rounded-[2.5rem] font-black text-xl flex items-center justify-center space-x-3 transition-all hover:scale-[1.02] shadow-4xl uppercase tracking-[0.2em]"
            >
              <span>Initialize Workflow</span>
              <ArrowRight className="w-7 h-7" />
            </button>
          </div>

          {/* Visual Sidebar */}
          <div className="hidden lg:flex bg-blue-50 p-24 flex-col justify-center items-center text-center relative overflow-hidden border-l border-blue-100">
             <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-200/50 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-sky-200/50 rounded-full blur-[100px]"></div>
             
             <div className="relative z-10">
                <div className="w-48 h-48 bg-white rounded-[4rem] shadow-4xl flex items-center justify-center mb-16 mx-auto animate-float border-8 border-white">
                   <CheckCircle2 size={80} className="text-[#4FACFE]" />
                </div>
                <h3 className="text-4xl font-black text-[#0A2540] mb-8 tracking-tighter">Mission Precision.</h3>
                <p className="text-[#374151] text-lg font-bold leading-relaxed max-w-sm mx-auto opacity-70">Engineered for sub-second response times and elite architectural integrity.</p>
                
                <div className="mt-20 flex space-x-8 justify-center">
                  <button onClick={onPrev} className="p-7 bg-white text-[#0A2540] rounded-[2.5rem] shadow-xl hover:bg-blue-50 transition-all active:scale-95 border-2 border-white">
                    <ChevronLeft size={36} />
                  </button>
                  <button onClick={onNext} className="p-7 bg-white text-[#0A2540] rounded-[2.5rem] shadow-xl hover:bg-blue-50 transition-all active:scale-95 border-2 border-white">
                    <ChevronRight size={36} />
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLightbox;