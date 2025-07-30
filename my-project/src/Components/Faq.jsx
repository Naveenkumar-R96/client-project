import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqData = [
  {
    question: "Can I really get my photos in 24 hours?",
    answer:
      "We have a global team of gurus working 24 hours, 7 days a week to deliver your photos on time.",
  },
  {
    question: "What if I want to change something?",
    answer:
      "You can request revisions within 7 days of delivery. We offer fast and easy adjustments.",
  },
  {
    question: "How long do you store my images for?",
    answer:
      "Images are stored securely for 90 days. You can download them anytime during this period.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h3 className="text-center text-indigo-700 font-semibold text-lg italic mb-2">
        Have any question
      </h3>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`p-5 rounded-xl shadow transition-all duration-300 ${
                isOpen ? "border-2 border-indigo-600 bg-white" : "bg-gray-50"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h4 className="text-md md:text-lg font-semibold text-gray-900">
                  {faq.question}
                </h4>
                <div
                  className={`text-gray-400 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  isOpen ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
