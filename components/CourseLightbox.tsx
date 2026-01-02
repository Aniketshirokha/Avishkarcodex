
import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Clock, GraduationCap, Code2, Zap, ShoppingBag } from 'lucide-react';
import { Course } from '../types';
import { BRAND_COLORS } from '../constants';

interface CourseLightboxProps {
  course: Course;
  onClose: () => void;
}

const iconMap: any = {
  Code2, Zap, ShoppingBag
};

const CourseLightbox: React.FC<CourseLightboxProps> = ({ course, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleApplyClick = () => {
    window.location.href = `#/contact?course=${encodeURIComponent(course.title)}`;
    onClose();
  };

  const Icon = iconMap[course.icon] || GraduationCap;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 md:p-12">
      <div 
        className="absolute inset-0 bg-[#0A2540]/20 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-4xl overflow-hidden animate-in slide-in-from-bottom-20 duration-500 ease-out">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 text-slate-400 hover:text-[#0A2540] bg-[#EAF6FF] rounded-2xl z-20 transition-all hover:rotate-90"
        >
          <X size={28} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Main Info */}
          <div className="lg:col-span-7 p-10 md:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#EAF6FF] rounded-2xl text-[#4FACFE]">
                <Icon size={32} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4FACFE]">
                  {course.category} Unit
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">{course.title}</h2>
              </div>
            </div>

            <p className="text-[#6B7280] text-lg mb-12 leading-relaxed font-medium">
              {course.longDesc}
            </p>

            <div className="space-y-12">
              <section>
                <h4 className="text-[11px] font-black text-[#0A2540] mb-6 uppercase tracking-[0.3em] flex items-center">
                   Curriculum Mastery
                   <div className="flex-grow h-[1px] bg-[#EAF6FF] ml-6"></div>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.learnables.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-[#6B7280] font-bold bg-[#EAF6FF]/30 p-4 rounded-[1.5rem] border border-white">
                      <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-[#4FACFE]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-[11px] font-black text-[#0A2540] mb-6 uppercase tracking-[0.3em] flex items-center">
                   Course Roadmap
                   <div className="flex-grow h-[1px] bg-[#EAF6FF] ml-6"></div>
                </h4>
                <div className="space-y-4">
                  {course.structure.map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white border border-[#EAF6FF] rounded-[1.5rem] shadow-sm">
                      <div className="flex-shrink-0 w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-black text-xs">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-black text-[#0A2540] mb-1">{item.phase}</div>
                        <div className="text-sm text-[#6B7280] font-medium">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar / Meta */}
          <div className="lg:col-span-5 bg-[#EAF6FF] p-10 md:p-16 flex flex-col justify-between">
            <div className="space-y-12">
              <section>
                <h4 className="text-[11px] font-black text-[#0A2540] mb-6 uppercase tracking-[0.3em] flex items-center">
                   Program Specifications
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-white shadow-sm flex items-center gap-4">
                    <Clock className="text-[#4FACFE]" size={20} />
                    <div>
                      <div className="text-[10px] font-black text-[#9CA3AF] uppercase">Duration</div>
                      <div className="font-bold text-[#0A2540]">{course.duration}</div>
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-white shadow-sm flex items-center gap-4">
                    <GraduationCap className="text-[#4FACFE]" size={20} />
                    <div>
                      <div className="text-[10px] font-black text-[#9CA3AF] uppercase">Outcome</div>
                      <div className="font-bold text-[#0A2540]">Agency Certificate</div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-[11px] font-black text-[#0A2540] mb-6 uppercase tracking-[0.3em] flex items-center">
                   Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[...course.skills, ...course.tools].map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white rounded-xl text-[10px] font-black text-[#4FACFE] border border-white shadow-sm uppercase">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-[11px] font-black text-[#0A2540] mb-6 uppercase tracking-[0.3em] flex items-center">
                   Candidate Profile
                </h4>
                <p className="text-sm text-[#6B7280] font-medium leading-relaxed italic bg-white/50 p-6 rounded-2xl border border-white">
                  "{course.eligibility}"
                </p>
              </section>
            </div>

            <div className="mt-16">
              <button 
                onClick={handleApplyClick}
                className="w-full text-white py-6 rounded-[2rem] font-black text-xl gradient-primary shadow-2xl hover:scale-[1.02] transition-all uppercase tracking-widest flex items-center justify-center"
              >
                Enroll in Program <ArrowRight className="ml-3" />
              </button>
              <p className="text-center text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mt-6">
                Limited cohorts per quarter for focused delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLightbox;
