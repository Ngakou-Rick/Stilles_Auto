import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What are the requirements to rent a car?',
      answer: 'To rent a car, you must be at least 25 years old, have a valid driver\'s license, and a major credit card in your name.',
    },
    {
      question: 'Do you offer international shipping for car purchases?',
      answer: 'Yes, we offer international shipping for all car purchases. Please contact us for a quote.',
    },
    {
      question: 'What is your cancellation policy for rentals?',
      answer: 'You can cancel your reservation up to 48 hours before the pickup time for a full refund. Cancellations made within 48 hours of the pickup time are non-refundable.',
    },
    {
      question: 'Can I return an accessory if I am not satisfied with it?',
      answer: 'Yes, we have a 30-day return policy for all accessories. The item must be in its original condition and packaging.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 text-primary-light">
      <h1 className="text-5xl font-bold font-serif mb-12 text-center">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold font-serif mb-2">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
