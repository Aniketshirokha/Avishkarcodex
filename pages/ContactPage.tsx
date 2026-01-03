import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16 reveal active">
          <div className="tag-pill mb-8">Direct Link</div>
          <h1 className="text-6xl md:text-8xl font-black text-[#0A2540] mb-8 tracking-tighter leading-[0.9]">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#0061FF]">Sync.</span>
          </h1>
          <p className="text-2xl text-[#64748B] leading-relaxed max-w-2xl font-semibold opacity-90">
            Transmit your project requirements or enrollment details to our engineering leads.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;