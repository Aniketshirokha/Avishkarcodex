import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black text-[#0A2540] mb-12 tracking-tighter">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none text-[#374151] font-medium space-y-8">
          <section>
            <p className="text-sm font-black uppercase tracking-widest text-[#4FACFE] mb-2">Aavishkar Codex Infotech LLP</p>
            <p className="text-sm font-bold opacity-60">Last updated: May 22, 2024</p>
          </section>

          <section>
            <p className="leading-relaxed">
              These Terms & Conditions govern the use of our website and services. By engaging with us, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">1. Nature of Services</h2>
            <p>We provide custom IT, digital, and technology services, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Software development</li>
              <li>Web & app solutions</li>
              <li>Design, automation, and consulting</li>
              <li>Courses, training, and internship programs</li>
            </ul>
            <p className="mt-4">All services are customized based on client requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">2. No Fixed Pricing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not offer fixed prices upfront</li>
              <li>Pricing is decided after requirement analysis</li>
              <li>A proposal or draft is shared before final confirmation</li>
              <li>Prices may vary based on scope, timeline, and complexity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>50% advance payment is mandatory</strong> before starting any project</li>
              <li>Remaining payment milestones are defined in the proposal</li>
              <li>Advance payments are non-refundable once work has started</li>
              <li>Delays in payment may result in project pause</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">4. Project Workflow</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Requirement discussion</li>
              <li>Draft / proposal creation</li>
              <li>Price confirmation</li>
              <li>Advance payment</li>
              <li>Project execution</li>
              <li>Delivery & revisions (as agreed)</li>
            </ol>
            <p className="mt-4 font-bold">No obligation exists until proposal approval.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">5. Revisions & Scope Changes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Revisions are limited to the scope defined in the proposal</li>
              <li>Additional requirements may lead to revised timelines or costs</li>
              <li>Scope changes must be mutually agreed in writing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">6. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All intellectual property remains with Aavishkar Codex Infotech LLP until full payment is received</li>
              <li>After payment, ownership is transferred as per agreement</li>
              <li>We reserve the right to showcase completed work in our portfolio unless otherwise agreed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">7. Client Responsibilities</h2>
            <p>Clients agree to provide accurate requirements, share timely feedback, and respect agreed timelines and payment terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">8. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are not liable for business losses, revenue loss, or indirect damages</li>
              <li>Third-party service failures</li>
              <li>Delays caused by incomplete or incorrect client inputs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">9. Termination</h2>
            <p>Either party may terminate the engagement with written notice. Work completed up to termination will be billed accordingly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">10. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.</p>
          </section>

          <section className="bg-slate-50 p-8 rounded-[2rem] border-2 border-slate-100">
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">11. Contact</h2>
            <p className="font-bold">Email: info@aavishkarcodex.com</p>
            <p className="font-bold">Address: 202, I-The Address, Panchamrut Bunglows II, Sola, Ahmedabad, Gujarat 380060</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;