import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-300 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <div className='h-6 w-6 flex items-center justify-center rounded-full bg-[#004B9C]'>
          <span className="text-xl text-white">{isOpen ? '-' : '+'}</span>
        </div>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: 'What is Sales Analytics SaaS?',
      answer: 'Sales Analytics SaaS (Software as a Service) is a cloud-based platform that empowers businesses to gain insights into their sales performance through data analysis.'
    },
    {
      question: 'How can Sales Analytics SaaS benefit my business?',
      answer: 'It provides data-driven insights, improves decision-making, and enhances sales strategies.'
    },
    {
      question: 'Is Sales Analytics SaaS suitable for businesses of all sizes?',
      answer: 'Yes, it is designed to scale with your business, making it suitable for small, medium, and large enterprises.'
    },
    {
      question: 'How easy is it to integrate Sales Analytics SaaS?',
      answer: 'Integration is straightforward, with support for various APIs and tools for seamless connectivity.'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 mx-auto p-24">
      <div className='flex flex-col gap-4 max-w-lg'>
        <p className='text-[#004B9C] text-center lg:text-left'>Frequently Asked Questions</p>
        <h2 className="text-3xl text-center lg:text-left max-w-[300px] font-bold mb-6">Discover the Future of Sales Management</h2>
      </div>
      <div className="space-y-4 w-full max-w-lg">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
