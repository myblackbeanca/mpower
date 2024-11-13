import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is MINY access?",
    answer: "MINY access is our exclusive membership system that gives you special privileges and early access to new releases, merchandise, and virtual events."
  },
  {
    question: "How are the funds used?",
    answer: "Funds are primarily used for production costs, studio time, marketing, and creating exclusive content for our supporters. We maintain full transparency about fund allocation."
  },
  {
    question: "When will rewards be delivered?",
    answer: "Digital rewards are typically delivered immediately upon campaign completion. Physical items ship within 4-6 weeks, and experiences are scheduled within 12 months."
  },
  {
    question: "Can I upgrade my reward tier?",
    answer: "Yes! You can upgrade your reward tier at any time during the campaign. Simply select a new tier and pay the difference."
  },
  {
    question: "Are the rewards transferable?",
    answer: "Digital content and physical items are transferable. However, exclusive experiences and personalized items are non-transferable."
  },
  {
    question: "How do I access virtual events?",
    answer: "Virtual events are hosted through our secure platform. You'll receive access details via email before each event."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16" id="faq">
      <div className="flex items-center gap-2 mb-8">
        <HelpCircle className="text-purple-400" />
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="font-semibold">{faq.question}</span>
              <ChevronDown 
                className={`transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div 
              className={`px-6 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'py-4' : 'h-0 overflow-hidden'
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}