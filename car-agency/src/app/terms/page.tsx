import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-primary-light">
      <h1 className="text-5xl font-bold font-serif mb-8 text-center">Terms of Service</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg">
        <p>
          Please read these terms of service carefully before using our website.
        </p>
        <h2 className="text-2xl font-bold font-serif mt-8">1. Introduction</h2>
        <p>
          By using our website, you agree to be bound by these terms of service. If you do not agree to these terms, you may not use our website.
        </p>
        <h2 className="text-2xl font-bold font-serif mt-8">2. Use of our Website</h2>
        <p>
          You may use our website for lawful purposes only. You may not use our website to post or transmit any material that is unlawful, defamatory, obscene, or otherwise objectionable.
        </p>
        {/* More terms would be added here */}
      </div>
    </div>
  );
};

export default TermsPage;
