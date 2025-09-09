import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-primary-light">
      <h1 className="text-5xl font-bold font-serif mb-8 text-center">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg">
        <p>
          We are committed to protecting your privacy. This privacy policy explains how we collect, use, and disclose your personal information.
        </p>
        <h2 className="text-2xl font-bold font-serif mt-8">1. Information We Collect</h2>
        <p>
          We may collect personal information from you, such as your name, email address, and phone number, when you use our website or services.
        </p>
        <h2 className="text-2xl font-bold font-serif mt-8">2. How We Use Your Information</h2>
        <p>
          We may use your personal information to provide you with our services, to communicate with you, and to improve our website and services.
        </p>
        {/* More privacy policy details would be added here */}
      </div>
    </div>
  );
};

export default PrivacyPage;
