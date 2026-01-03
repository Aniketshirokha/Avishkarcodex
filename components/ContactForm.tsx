import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Layout, Zap, MessageSquare, Mail, MapPin } from 'lucide-react';
import { SERVICES, COURSES } from '../constants';

const ContactForm: React.FC = () => {
  const [formMode, setFormMode] = useState<'service' | 'course'>('service');
  const [selectedItem, setSelectedItem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-2">
        {/* Mode Switcher */}
        <div className="max-w-xl mb-10 reveal active">
          <div className="bg-slate-100 p-2 rounded-[1.8rem] flex items-center shadow-inner border border-slate-200">
            <button 
              onClick={() => { setFormMode('service'); setSelectedItem(""); }}
              className={`flex-1 py-4 px-4 sm:px-6 rounded-[1.4rem] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em] flex items-center justify-center transition-all ${formMode === 'service' ? 'bg-white text-[#0051FF] shadow-lg scale-[1.02]' : 'text-[#64748B] hover:text-[#0A2540]'}`}
            >
              <Layout className="mr-2 sm:mr-3 w-4 h-4" /> Service Inquiry
            </button>
            <button 
              onClick={() => { setFormMode('course'); setSelectedItem(""); }}
              className={`flex-1 py-4 px-4 sm:px-6 rounded-[1.4rem] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em] flex items-center justify-center transition-all ${formMode === 'course' ? 'bg-white text-[#0051FF] shadow-lg scale-[1.02]' : 'text-[#64748B] hover:text-[#0A2540]'}`}
            >
              <Zap className="mr-2 sm:mr-3 w-4 h-4" /> Course Enrollment
            </button>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="reveal soft-card p-8 md:p-16 lg:p-20 bg-white shadow-2xl active border-slate-200 rounded-[2.5rem] md:rounded-[3rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              <div className="flex flex-col space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Full Name</label>
                <input required type="text" placeholder="Your Identity" className="bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm" />
              </div>
              <div className="flex flex-col space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Email Address</label>
                <input required type="email" placeholder="active@email.com" className="bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm" />
              </div>
              <div className="flex flex-col space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Phone Number</label>
                <input required type="tel" placeholder="+1 (000) 000-0000" className="bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm" />
              </div>
              <div className="flex flex-col space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">
                  {formMode === 'service' ? 'Service Unit' : 'Program Track'}
                </label>
                <select 
                  required
                  value={selectedItem} 
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-black text-[#0A2540] cursor-pointer shadow-sm"
                >
                  <option value="">Select Option...</option>
                  {formMode === 'service' 
                    ? SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)
                    : COURSES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)
                  }
                </select>
              </div>

              {formMode === 'service' && (
                <>
                  <div className="flex flex-col space-y-3 md:space-y-4">
                    <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Company Name</label>
                    <input required type="text" placeholder="Your Business Entity" className="bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm" />
                  </div>
                  <div className="flex flex-col space-y-3 md:space-y-4">
                    <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Company Size</label>
                    <select required className="bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-black text-[#0A2540] cursor-pointer shadow-sm">
                      <option value="">Select Scale...</option>
                      <option value="1-10">1-10 Employees</option>
                      <option value="11-50">11-50 Employees</option>
                      <option value="51-200">51-200 Employees</option>
                      <option value="200+">200+ Employees</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col space-y-3 md:space-y-4">
                    <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">Project Budget</label>
                    <select required className="bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl outline-none focus:border-[#0A2540] transition-all font-black text-[#0A2540] cursor-pointer shadow-sm">
                      <option value="">Select Budget Range...</option>
                      <option value="<5k">Under $5,000</option>
                      <option value="5k-20k">$5,000 - $20,000</option>
                      <option value="20k-50k">$20,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </>
              )}

              <div className="md:col-span-2 flex flex-col space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-[11px] font-black text-[#0A2540] uppercase tracking-[0.4em] ml-1">
                  {formMode === 'service' ? 'Engineering Brief' : 'Educational Goals'}
                </label>
                <textarea required rows={5} placeholder={formMode === 'service' ? "Describe your technical goals, constraints, and specific mission requirements..." : "Tell us about your background and what you hope to achieve..."} className="bg-slate-50 border-2 border-slate-100 p-5 md:p-6 rounded-3xl outline-none focus:border-[#0A2540] transition-all font-bold text-[#0A2540] shadow-sm resize-none"></textarea>
              </div>

              <div className="md:col-span-2 pt-6">
                <button type="submit" className="btn-primary btn-pill w-full py-6 md:py-8 font-black text-lg md:text-xl lg:text-2xl uppercase tracking-[0.25em] flex items-center justify-center group shadow-4xl hover:shadow-[#0051FF]/40">
                  {formMode === 'service' ? 'Transmit Brief' : 'Submit Application'} <ArrowRight className="ml-4 md:ml-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="reveal soft-card p-12 md:p-24 text-center bg-[#0A2540] text-white active shadow-4xl border-none rounded-[3rem]">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-white/10 rounded-full mb-10 md:mb-12 shadow-2xl border border-white/20 animate-float-subtle">
              <CheckCircle2 size={48} className="text-[#4FACFE] md:w-14 md:h-14" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter">Sync Verified.</h2>
            <p className="text-white/60 max-w-md mx-auto font-bold text-base md:text-xl leading-relaxed">
              Your packet has been successfully verified. An {formMode === 'service' ? 'architecture lead' : 'academic advisor'} will contact you shortly.
            </p>
            <button onClick={() => setSubmitted(false)} className="mt-10 md:mt-16 text-[10px] md:text-sm font-black underline uppercase tracking-[0.3em] text-[#4FACFE] hover:text-white transition-colors">Start New Synchronization</button>
          </div>
        )}
      </div>

      <div className="space-y-10 lg:space-y-16">
        <div className="reveal active stagger-1">
          <h3 className="font-black text-[#0A2540] mb-6 md:mb-10 uppercase text-[11px] md:text-[12px] tracking-[0.4em] flex items-center">
            <span className="w-10 md:w-12 h-[2px] bg-[#4FACFE] mr-3 md:mr-4"></span>
            Direct Channels
          </h3>
          <div className="space-y-6 md:space-y-8">
            <a href="https://wa.me/919106025254" className="flex items-center space-x-5 md:space-x-6 p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] hover:shadow-2xl transition-all border border-slate-100 group shadow-md">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#4FACFE] group-hover:bg-[#0A2540] group-hover:text-white transition-all shadow-sm">
                <MessageSquare size={22} />
              </div>
              <div>
                <div className="text-[9px] md:text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-1">Instant Relay</div>
                <div className="font-black text-[#0A2540] text-base md:text-lg">+91 91060 25254</div>
              </div>
            </a>
            <a href="mailto:hello@aavishkarcodex.com" className="flex items-center space-x-5 md:space-x-6 p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] hover:shadow-2xl transition-all border border-slate-100 group shadow-md">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#4FACFE] group-hover:bg-[#0A2540] group-hover:text-white transition-all shadow-sm">
                <Mail size={22} />
              </div>
              <div>
                <div className="text-[9px] md:text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-1">Protocol Mail</div>
                <div className="font-black text-[#0A2540] text-sm md:text-lg break-all">hello@aavishkarcodex.com</div>
              </div>
            </a>
          </div>
        </div>

        <div className="reveal active stagger-2">
          <h3 className="font-black text-[#0A2540] mb-6 md:mb-10 uppercase text-[11px] md:text-[12px] tracking-[0.4em] flex items-center">
            <span className="w-10 md:w-12 h-[2px] bg-[#4FACFE] mr-3 md:mr-4"></span>
            Location Sync
          </h3>
          <div className="soft-card p-8 md:p-12 flex items-start space-x-5 md:space-x-6 bg-white border-slate-100 shadow-xl rounded-[2rem] md:rounded-[2.5rem]">
             <div className="p-3 md:p-4 bg-slate-50 rounded-2xl text-[#0A2540]">
                <MapPin size={24} />
             </div>
             <div>
               <p className="text-[#0A2540] font-black text-xl md:text-2xl tracking-tight leading-tight">
                 Ahmedabad, India
               </p>
               <p className="text-[#64748B] text-[9px] md:text-xs mt-3 font-bold uppercase tracking-[0.2em]">Regional HQ</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;