import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black text-[#0A2540] mb-12 tracking-tighter">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-[#374151] font-medium space-y-8">
          <section>
            <p className="text-sm font-black uppercase tracking-widest text-[#4FACFE] mb-2">Aavishkar Codex Infotech LLP</p>
            <p className="text-sm font-bold opacity-60">Last updated: May 22, 2024</p>
          </section>

          <section>
            <p className="leading-relaxed">
              Aavishkar Codex Infotech LLP (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you share with us through our website and services. This Privacy Policy explains how we collect, use, store, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Business details and project requirements</li>
              <li>Information shared via contact forms, emails, or meetings</li>
              <li>Technical data such as IP address, browser type, and device information</li>
              <li>Any documents or content voluntarily shared for project discussion</li>
            </ul>
            <p className="mt-4">We do not collect sensitive personal data unless explicitly required and agreed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand your project requirements</li>
              <li>Communicate regarding proposals, drafts, and services</li>
              <li>Prepare project estimates and documentation</li>
              <li>Improve our services and user experience</li>
              <li>Respond to inquiries and support requests</li>
              <li>Maintain internal records</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">3. Requirement-Based Pricing Model</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not offer fixed pricing directly on the website.</li>
              <li>Pricing is decided only after understanding client requirements</li>
              <li>A first draft / proposal is prepared before final pricing</li>
              <li>Cost is mentioned clearly in the proposal document</li>
              <li>No work begins without mutual confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">4. Data Sharing & Confidentiality</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Client data is shared internally only with authorized team members</li>
              <li>Confidential project information is handled securely</li>
              <li>We do not disclose project data without client consent unless legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">5. Cookies & Tracking</h2>
            <p>Our website may use cookies to improve performance, analyze traffic, and enhance user experience. You can disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">6. Data Security</h2>
            <p>We take reasonable technical and organizational measures to protect your data. However, no online platform is 100% secure, and users acknowledge this risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">7. External Links</h2>
            <p>Our website may contain links to third-party platforms. We are not responsible for their privacy practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">8. Changes to This Policy</h2>
            <p>This policy may be updated periodically. Continued use of the website implies acceptance of the updated policy.</p>
          </section>

          <section className="bg-slate-50 p-8 rounded-[2rem] border-2 border-slate-100">
            <h2 className="text-2xl font-black text-[#0A2540] mb-4">9. Contact</h2>
            <p className="font-bold">Email: info@aavishkarcodex.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;