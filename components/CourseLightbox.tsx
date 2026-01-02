import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Clock, GraduationCap, Code2, Zap, ShoppingBag } from 'lucide-react';
import { Course } from '../types';

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
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4 md:p-12">
      <div 
        className="absolute inset-0 bg-[#0A2540]/70 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden animate-in slide-in-from-bottom-20 duration-500 ease-out">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 text-[#0A2540] hover:bg-blue-50 bg-white border-2 border-blue-100 rounded-2xl z-30 transition-all hover:rotate-90 shadow-lg"
        >
          <X size={28} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Main Info */}
          <div className="lg:col-span-7 p-10 md:p-16">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-5 bg-gradient-to-br from-[#4FACFE] to-[#0061FF] rounded-[1.8rem] text-white shadow-xl">
                <Icon size={36} />
              </div>
              <div>
                <div className="tag-pill mb-2 inline-block">
                  {course.category} Unit
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] tracking-tight leading-none">{course.title}</h2>
              </div>
            </div>

            <p className="text-[#374151] text-xl mb-12 leading-relaxed font-bold opacity-90">
              {course.longDesc}
            </p>

            <div className="space-y-12">
              <section>
                <h4 className="text-[12px] font-black text-[#0A2540] mb-8 uppercase tracking-[0.4em] flex items-center">
                   Curriculum Mastery
                   <div className="flex-grow h-[2px] bg-blue-100 ml-8 rounded-full"></div>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.learnables.map((item, i) => (
                    <li key={i} className="flex items-start text-base text-[#374151] font-bold bg-blue-50/50 p-6 rounded-[2rem] border-2 border-white shadow-sm">
                      <CheckCircle2 className="w-6 h-6 mr-4 shrink-0 text-[#4FACFE]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-[12px] font-black text-[#0A2540] mb-8 uppercase tracking-[0.4em] flex items-center">
                   Course Roadmap
                   <div className="flex-grow h-[2px] bg-blue-100 ml-8 rounded-full"></div>
                </h4>
                <div className="space-y-4">
                  {course.structure.map((item, i) => (
                    <div key={i} className="flex gap-8 p-8 bg-white border-2 border-blue-50 rounded-[2rem] shadow-sm hover:border-blue-200 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-black text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-black text-xl text-[#0A2540] mb-2">{item.phase}</div>
                        <div className="text-base text-[#374151] font-bold opacity-80 leading-relaxed">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar / Meta */}
          <div className="lg:col-span-5 bg-blue-50/80 p-10 md:p-16 flex flex-col justify-between border-l border-blue-100">
            <div className="space-y-12">
              <section>
                <h4 className="text-[12px] font-black text-[#0A2540] mb-8 uppercase tracking-[0.4em]">
                   Program Specifications
                </h4>
                <div className="grid grid-cols-1 gap-5">
                  <div className="p-6 bg-white rounded-[2rem] border-2 border-white shadow-md flex items-center gap-6">
                    <div className="p-3 bg-blue-50 rounded-2xl text-[#4FACFE]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-[#6B7280] uppercase tracking-widest mb-1">Duration</div>
                      <div className="font-black text-xl text-[#0A2540]">{course.duration}</div>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-[2rem] border-2 border-white shadow-md flex items-center gap-6">
                    <div className="p-3 bg-blue-50 rounded-2xl text-[#4FACFE]">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-[#6B7280] uppercase tracking-widest mb-1">Outcome</div>
                      <div className="font-black text-xl text-[#0A2540]">Agency Certificate</div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-[12px] font-black text-[#0A2540] mb-8 uppercase tracking-[0.4em]">
                   Stack & Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[...course.skills, ...course.tools].map((item, i) => (
                    <span key={i} className="px-5 py-3 bg-white rounded-2xl text-[11px] font-black text-[#0369A1] border-2 border-white shadow-sm uppercase tracking-widest">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-[12px] font-black text-[#0A2540] mb-8 uppercase tracking-[0.4em]">
                   Candidate Profile
                </h4>
                <p className="text-base text-[#374151] font-bold leading-relaxed italic bg-white p-8 rounded-[2rem] border-2 border-blue-100 shadow-sm">
                  "{course.eligibility}"
                </p>
              </section>
            </div>

            <div className="mt-20">
              <button 
                onClick={handleApplyClick}
                className="btn-primary w-full py-8 rounded-[2.5rem] font-black text-xl transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-4"
              >
                Enroll in Program <ArrowRight size={24} />
              </button>
              <p className="text-center text-[10px] font-black text-[#6B7280] uppercase tracking-[0.3em] mt-8">
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