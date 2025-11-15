"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}



interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-serif text-center mb-12 text-navy">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((faq, index) => (
          <div key={index} className="border-b border-gray-400">
            <button
              className="w-full py-6 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-xl font-serif text-navy">{faq.question}</span>
              <span className="ml-4 text-navy">
                {openIndex === index ? (
                  <span className="text-2xl">−</span>
                ) : (
                  <span className="text-2xl">+</span>
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[1000px] opacity-100 mb-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-navy/80 leading-relaxed">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
