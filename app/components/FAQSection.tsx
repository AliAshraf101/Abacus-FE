"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqItems = [
  {
    id: "item-1",
    question: "How do you prevent AI hallucinations?",
    answer:
      "Our Chain of Validation™ technology uses a three-layer verification system to ensure every response is accurate and grounded in fact. Each response is validated against trusted sources, preventing speculative or incorrect information from being generated.",
  },
  {
    id: "item-2",
    question: "What security measures protect our data?",
    answer: "",
  },
  {
    id: "item-3",
    question: "How do you ensure regulatory compliance?",
    answer: "",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("item-1");

  const toggleItem = (itemId: string) => {
    if (openItem === itemId) {
      setOpenItem("");
    } else {
      setOpenItem(itemId);
    }
  };

  return (
    <div className="bg-white relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1440px] relative">
          <div className="absolute top-0 bottom-0 w-px bg-black/20 hidden xl:block" style={{ left: '100px' }} />
          <div className="absolute top-0 bottom-0 w-px bg-black/20 hidden xl:block" style={{ right: '101px' }} />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[132px] py-8 md:py-0">
        {/* Header Section */}
        <div className="relative pt-8 md:pt-[88px] pb-8 md:pb-0">
          {/* Decorative dots - top left and right */}
          <div className="absolute left-0 md:left-[-3px] top-[146px] md:top-[146px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />
          <div className="absolute right-0 md:right-[-3px] top-[146px] md:top-[146px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />

          <div className="flex flex-col gap-4 md:gap-4 md:px-8">
            {/* Label */}
            <div className="flex px-1">
              <span
                className="text-black text-sm leading-[14px] tracking-[1.68px] uppercase"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Common Questions
              </span>
            </div>

            {/* Title */}
            <h1 className="text-black text-3xl md:text-[48px] font-medium leading-tight md:leading-[56px] tracking-[-0.04em]">
              Frequently Asked Questions
            </h1>
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="relative w-full h-px bg-black/20 mt-8 md:mt-0">
          {/* Decorative dots on divider */}
          <div className="absolute left-0 md:left-[-3px] top-[-4px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />
          <div className="absolute right-0 md:right-[-3px] top-[-4px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />
        </div>

        {/* FAQ Accordion Section */}
        <div className="relative py-8 md:py-12 md:px-12">
          {/* Decorative dots - bottom left and right */}
          <div className="absolute left-0 md:left-[-3px] bottom-[-4px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />
          <div className="absolute right-0 md:right-[-3px] bottom-[-4px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />

          <div>
            {faqItems.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div key={item.id} className="border-none">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex items-start gap-4 py-6 px-0 md:px-6 hover:no-underline w-full text-left"
                    type="button"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-black" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-black" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg md:text-xl font-medium leading-6 tracking-[-0.02em] text-black">
                        {item.question}
                      </h3>
                    </div>
                  </button>
                  {item.answer && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                      } pl-10 md:pl-[72px] pr-0 md:pr-6 pb-6`}
                    >
                      <p className="text-sm leading-5 tracking-[-0.01em] text-black/60">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom horizontal divider */}
        <div className="w-full h-px bg-black/20" />
      </div>
    </div>
  );
}
