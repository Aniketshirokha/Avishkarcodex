import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Layout, Zap, MessageSquare, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formMode, setFormMode] = useState<'service' | 'course'>('service');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const courseFromUrl = params.get('course');
    if (courseFromUrl) setFormMode('course');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const budgetOptions = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "Above ₹10,00,000"
  ];

  const companySizeOptions = [
    "Startup (1-10)",
    "Small Business (11-50)",
    "Medium (51-200)",
    "Enterprise (200+)"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-2">
        {/* Mode Switcher */}
        <div className="max-w-xl mb-12 reveal active">
          <div className="bg-slate-100 p-2 rounded-[1.5rem] flex items-center shadow-inner border border-slate-200">
            <button 
              type="button"
              onClick={() => setFormMode('service')}
              className={`flex-1 py-4 px-4 rounded-[1.2rem] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center transition-all ${formMode === 'service' ? 'bg-white text-[#0051FF] shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <Layout className="mr-2 w-4 h-4" /> Service Inquiry
            </button>
            <button 
              type="button"
              onClick={() => setFormMode('course')}
              className={`flex-1 py-4 px-4 rounded-[1.2rem] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center transition-all ${formMode === 'course' ? 'bg-white text-[#0051FF] shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <Zap className="mr-2 w-4 h-4" /> Course Enrollment
            </button>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="reveal soft-card p-8 md:p-12 bg-white shadow-2xl active border border-slate-100 rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="flex flex-col space-y-3">
                <label className="text-[11px] font-extrabold text-[#0A2540] uppercase tracking-widest ml-1">Full Name</label>
                <input required type="text" placeholder="Your Name" className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540]" />
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-[11px] font-extrabold text-[#0A2540] uppercase tracking-widest ml-1">Email Address</label>
                <input required type="email" placeholder="example@gmail.com" className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540]" />
              </div>
              
              <div className="flex flex-col space-y-3">
                <label className="text-[11px] font-extrabold text-[#0A2540] uppercase tracking-widest ml-1">Phone Number</label>
                <input required type="tel" placeholder="+91 00000 00000" className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540]" />
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-[11px] font-extrabold text-[#0A2540] uppercase tracking-widest ml-1">Company Name</label>
                <input required={formMode === 'service'} type="text" placeholder="Your Business Name" className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540]" />
              </div>

              {formMode === 'service' && (
                <>
                  <div className="flex flex-col space-y-3">
                    <label className="text-[11px] font-extrabold text-[#0A2540] uppercase tracking-widest ml-1">Company Size</label>
                    <div className="relative">
                      <select required className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] cursor-pointer appearance-none">
                        <option value="">Select Size...</option>
                        {companySizeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <label className="text-[11px] font-extrabold text-[#0A2540] uppercase tracking-widest ml-1">Project Budget</label>
                    <div className="relative">
                      <select required className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] cursor-pointer appearance-none">
                        <option value="">Select Range...</option>
                        {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="md:col-span-2 flex flex-col space-y-3">
                <label className="text-[11px] font-extrabold text-[#0A2540] uppercase tracking-widest ml-1">
                  {formMode === 'service' ? 'Project Details' : 'Course Requirements'}
                </label>
                <textarea required rows={4} placeholder="Briefly describe what you need..." className="bg-slate-50 border-2 border-slate-100 p-6 rounded-2xl outline-none focus:border-[#0051FF]/30 focus:bg-white transition-all font-bold text-[#0A2540] resize-none"></textarea>
              </div>

              <div className="md:col-span-2 pt-6">
                <button type="submit" className="btn-primary w-full py-6 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center group shadow-xl">
                  Send Message <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="reveal soft-card p-12 bg-white shadow-2xl active border border-slate-100 rounded-[2.5rem] text-center">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-3xl font-black text-[#0A2540] mb-4">Message Received!</h3>
            <p className="text-slate-500 text-lg font-bold mb-10">We will call or email you within 24 hours.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="text-[#0051FF] font-bold uppercase tracking-widest text-[11px] hover:underline">Send Another Message</button>
          </div>
        )}
      </div>

      <div className="space-y-12">
        <div>
          <h4 className="text-[11px] font-black text-[#0A2540] uppercase tracking-widest mb-10 flex items-center">
             Contact Info
             <div className="flex-grow h-[1px] bg-slate-200 ml-6"></div>
          </h4>
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0051FF] border border-slate-100 shadow-sm group-hover:bg-blue-50">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                <div className="text-md font-bold text-[#0A2540]">info@aavishkarcodex.com</div>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0051FF] border border-slate-100 shadow-sm group-hover:bg-blue-50">
                <MessageSquare size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</div>
                <div className="text-md font-bold text-[#0A2540]">+91 98980 02406</div>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0051FF] border border-slate-100 shadow-sm group-hover:bg-blue-50">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Office Location</div>
                <div className="text-sm font-bold text-[#0A2540] leading-snug">Sola, Ahmedabad, Gujarat 380060</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-[#0A2540] rounded-[2rem] text-white relative overflow-hidden shadow-xl">
           <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Available Now</span>
              </div>
              <p className="text-white/70 text-sm font-bold">Our team is active and usually replies in a few hours.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;