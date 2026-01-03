import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Layout, Zap, MessageSquare, Mail, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';

const ContactForm: React.FC = () => {
  const [formMode, setFormMode] = useState<'service' | 'course'>('service');
  const [selectedItem, setSelectedItem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Handling initial selection from URL params (e.g., hash router compatible)
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const serviceFromUrl = params.get('service');
    const courseFromUrl = params.get('course');
    
    if (courseFromUrl) {
      setFormMode('course');
      setSelectedItem(courseFromUrl);
    } else if (serviceFromUrl) {
      setFormMode('service');
      setSelectedItem(serviceFromUrl);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const companySizeOptions = [
    "Solo / Freelancer",
    "Small (2-10)",
    "Medium (11-50)",
    "Large (51-200)",
    "Enterprise (200+)"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-2">
        {/* Mode Switcher */}
        <div className="max-w-xl mb-12 reveal active">
          <div className="bg-slate-100 p-2 rounded-[2rem] flex items-center shadow-inner border border-slate-200">
            <button 
              type="button"
              onClick={() => { setFormMode('service'); setSelectedItem(""); }}
              className={`flex-1 py-5 px-4 sm:px-6 rounded-[1.6rem] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.25em] flex items-center justify-center transition-all ${formMode === 'service' ? 'bg-white text-[#0051FF] shadow-lg scale-[1.02]' : 'text-[#64748B] hover:text-[#0A2540]'}`}
            >
              <Layout className="mr-3 w-4 h-4" /> Service Inquiry
            </button>
            <button 
              type="button"
              onClick={() => { setFormMode('course'); setSelectedItem(""); }}
              className={`flex-1 py-5 px-4 sm:px-6 rounded-[1.6rem] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.25em] flex items-center justify-center transition-all ${formMode === 'course' ? 'bg-white text-[#0051FF] shadow-lg scale-[1.02]' : 'text-[#64748B] hover:text-[#0A2540]'}`}
            >
              <Zap className="mr-3 w-4 h-4" /> Course Enrollment
            </button>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="reveal soft-card p-8 md:p-14 lg:p-20 bg-white shadow-2xl active border border-slate-100 rounded-[3rem] md:rounded-[4rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              
              {/* Common Fields */}
              <div className="flex flex-col space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Full Name</label>
                <input required type="text" placeholder="Your Identity" className="bg-slate-50/50 border-2 border-slate-100/50 p-5 md:p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] shadow-sm" />
              </div>

              <div className="flex flex-col space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Email Address</label>
                <input required type="email" placeholder="active@email.com" className="bg-slate-50/50 border-2 border-slate-100/50 p-5 md:p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] shadow-sm" />
              </div>
              
              <div className={`flex flex-col space-y-4 ${formMode === 'course' ? 'md:col-span-2' : ''}`}>
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Phone Number</label>
                <input required type="tel" placeholder="+91 00000 00000" className="bg-slate-50/50 border-2 border-slate-100/50 p-5 md:p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] shadow-sm" />
              </div>

              {formMode === 'service' && (
                <>
                  <div className="flex flex-col space-y-4">
                    <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Company Name</label>
                    <input required type="text" placeholder="Your Business Entity" className="bg-slate-50/50 border-2 border-slate-100/50 p-5 md:p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] shadow-sm" />
                  </div>

                  <div className="flex flex-col space-y-4">
                    <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Company Size</label>
                    <div className="relative">
                      <select required className="w-full bg-slate-50/50 border-2 border-slate-100/50 p-5 md:p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-black text-[#0A2540] cursor-pointer shadow-sm appearance-none">
                        <option value="">Select Size...</option>
                        {companySizeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Service Unit</label>
                    <div className="relative">
                      <select 
                        required
                        value={selectedItem} 
                        onChange={(e) => setSelectedItem(e.target.value)}
                        className="w-full bg-slate-50/50 border-2 border-slate-100/50 p-5 md:p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-black text-[#0A2540] cursor-pointer shadow-sm appearance-none"
                      >
                        <option value="">Select Option...</option>
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Project Budget</label>
                    <div className="relative">
                      <select required className="w-full bg-slate-50/50 border-2 border-slate-100/50 p-5 md:p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-black text-[#0A2540] cursor-pointer shadow-sm appearance-none">
                        <option value="">Select Range...</option>
                        {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Message Field */}
              <div className="md:col-span-2 flex flex-col space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">
                  {formMode === 'service' ? 'Engineering Brief' : 'Educational Goals'}
                </label>
                <textarea required rows={5} placeholder={formMode === 'service' ? "Describe your technical goals, constraints, and mission requirements..." : "Tell us about your background and what you hope to achieve..."} className="bg-slate-50/50 border-2 border-slate-100/50 p-6 md:p-8 rounded-3xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] shadow-sm resize-none"></textarea>
              </div>

              <div className="md:col-span-2 pt-8">
                <button type="submit" className="btn-primary btn-pill w-full py-7 md:py-9 font-black text-lg md:text-xl lg:text-2xl uppercase tracking-[0.3em] flex items-center justify-center group shadow-4xl hover:shadow-[#0051FF]/30 transition-all border-4 border-white/20">
                  Initialize Transmission <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="reveal soft-card p-12 md:p-24 bg-white shadow-2xl active border border-slate-100 rounded-[3rem] text-center">
            <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 border-4 border-white shadow-lg">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-4xl font-black text-[#0A2540] mb-6 tracking-tighter uppercase italic">Transmission Received.</h3>
            <p className="text-[#64748B] text-xl font-bold opacity-80 leading-relaxed mb-12 max-w-lg mx-auto">Our engineering leads will synchronize with your request shortly via the provided channels.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="text-[#0051FF] font-black uppercase tracking-[0.3em] text-[11px] hover:underline decoration-2 underline-offset-8">Send Another Transmission</button>
          </div>
        )}
      </div>

      <div className="space-y-12">
        <div>
          <h4 className="text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] mb-12 flex items-center">
             Connect Channels
             <div className="flex-grow h-[2px] bg-slate-100 ml-8 rounded-full"></div>
          </h4>
          <div className="space-y-10">
            <div className="flex items-start space-x-8 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0051FF] border-2 border-slate-50 shadow-sm group-hover:shadow-md group-hover:bg-slate-50 transition-all">
                <Mail size={22} />
              </div>
              <div>
                <div className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em] mb-1.5">Email Terminal</div>
                <div className="text-lg font-bold text-[#0A2540] group-hover:text-[#0051FF] transition-colors">info@aavishkarcodex.com</div>
              </div>
            </div>
            <div className="flex items-start space-x-8 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0051FF] border-2 border-slate-50 shadow-sm group-hover:shadow-md group-hover:bg-slate-50 transition-all">
                <MessageSquare size={22} />
              </div>
              <div>
                <div className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em] mb-1.5">Phone Protocol</div>
                <div className="text-lg font-bold text-[#0A2540] group-hover:text-[#0051FF] transition-colors">+91 98980 02406</div>
              </div>
            </div>
            <div className="flex items-start space-x-8 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0051FF] border-2 border-slate-50 shadow-sm group-hover:shadow-md group-hover:bg-slate-50 transition-all">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em] mb-1.5">HQ Coordinates</div>
                <div className="text-sm font-bold text-[#0A2540] leading-snug group-hover:text-[#0051FF] transition-colors">202, I-The Address, Panchamrut Bunglows II, Sola, Ahmedabad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Status Card */}
        <div className="p-8 bg-[#0A2540] rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl">
           <div className="scanline opacity-10"></div>
           <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4FACFE]">Systems Nominal</span>
              </div>
              <p className="text-white/60 text-xs font-bold leading-relaxed">Our average synchronization latency is currently 2-4 business hours.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;