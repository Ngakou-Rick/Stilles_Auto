import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-primary-light">
      <h1 className="text-5xl font-bold font-serif mb-8 text-center">Contact Us</h1>
      <p className="text-xl text-center mb-12">
        We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.
      </p>
      <form className="max-w-xl mx-auto bg-primary-dark-soft p-8 rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-bold mb-2">Your Name</label>
          <input type="text" id="name" className="w-full p-2 rounded bg-primary-dark border border-accent-silver" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2">Your Email</label>
          <input type="email" id="email" className="w-full p-2 rounded bg-primary-dark border border-accent-silver" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
          <textarea id="message" rows={6} className="w-full p-2 rounded bg-primary-dark border border-accent-silver"></textarea>
        </div>
        <button type="submit" className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-3 px-8 rounded transition-colors text-xl w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
