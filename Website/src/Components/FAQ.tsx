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
        <h3 className="text-lg font-semibold w-[90%]">{question}</h3>
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
      question: 'What is Spotalent?',
      answer: 'Spotalent is a comprehensive talent management platform that connects job seekers, companies, and educational institutions. It leverages blockchain technology for secure work experience verification and advanced AI for candidate filtering.'
    },
    {
      question: 'How can Spotalent help my business?',
      answer: 'Spotalent provides access to a pre-filtered pool of talented candidates, analytics on hiring trends, and verification of work experience through blockchain, helping businesses save time and resources.'
    },
    {
      question: 'Is Spotalent suitable for companies of all sizes?',
      answer: 'Yes, Spotalent offers flexible plans to suit startups, growing companies, and large enterprises, with scalable features based on your recruitment needs.'
    },
    {
      question: 'How easy is it to integrate Spotalent with my existing systems?',
      answer: 'Spotalent’s API can seamlessly integrate with popular ATS (Applicant Tracking Systems) and HR tools, making it easy to adopt without disrupting your current workflow.'
    },
    {
      question: 'What security measures does Spotalent use for candidate verification?',
      answer: 'We use blockchain technology to ensure that work experiences are authentic and tamper-proof, giving employers confidence in their hiring decisions.'
    },
    {
      question: 'How does Spotalent support job seekers?',
      answer: 'Job seekers on Spotalent can showcase verified work experience, connect with top companies, and receive personalized job recommendations based on their skills and career goals.'
    }
  ];

  return (
    <div className="flex flex-col max-lg:items-center lg:flex-row justify-center gap-8 mx-auto px-6 md:p-24 mt-6">
      <div className='flex flex-col gap-4 md:max-w-lg'>
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
