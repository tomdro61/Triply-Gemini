import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions: FAQItem[] = [
    {
      question: "How does Triply save me money?",
      answer: "Triply aggregates real-time pricing from hundreds of travel providers, hotels, and parking facilities. By comparing all available options instantly, we highlight exclusive deals and lower rates that you might miss by booking directly."
    },
    {
      question: "Is cancellation really free?",
      answer: "Yes, for the vast majority of our bookings! Look for the 'Free Cancellation' tag on any hotel or parking option. You can usually cancel up to 24-48 hours before your check-in time for a full refund."
    },
    {
      question: "How do I modify my booking?",
      answer: "Simply log in to your 'Trips' dashboard. From there, you can easily change dates, upgrade rooms, or cancel your reservation. If you need help, our 24/7 support team is just a click away."
    },
    {
      question: "Does the AI Trip Planner cost extra?",
      answer: "No! Our AI Trip Planner is completely free for all users. It uses advanced Gemini technology to help you build itineraries, find hidden gems, and structure your travel plans in seconds."
    },
    {
      question: "What providers does Triply compare?",
      answer: "We partner with major hotel chains like Marriott, Hilton, and Hyatt, as well as trusted parking networks like The Parking Spot and airport official lots, plus hundreds of local boutique providers."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-brand-orange shadow-md' : 'border-gray-200'}`}
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-orange' : 'text-gray-900'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-orange flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};