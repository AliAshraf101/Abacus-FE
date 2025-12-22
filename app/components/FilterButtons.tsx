"use client";

import { useState } from "react";

const filterButtons = [
  { id: "ai-safety", label: "AI Safety", active: true },
  { id: "reliability", label: "Relaibility", active: false },
  { id: "implementation", label: "Implementation", active: false },
  { id: "compliance", label: "Compliance", active: false },
];

export default function FilterButtons() {
  const [activeFilter, setActiveFilter] = useState("ai-safety");

  return (
    <div className="relative">
      {/* Horizontal divider */}
      <div className="relative w-full h-px bg-black/20 mt-8 md:mt-0">
        {/* Decorative dots on divider */}
        <div className="absolute left-0 md:left-[-3px] top-[-4px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />
        <div className="absolute right-0 md:right-[-3px] top-[-4px] w-2 h-2 rounded-full bg-white border border-black/20 hidden md:block" />
      </div>

      {/* Filter Buttons Section */}
      <div className="relative py-4 md:py-[17px] md:px-[25px]">
        <div className="flex flex-wrap gap-2">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              className={`flex items-center gap-1.5 h-8 px-4 rounded-full text-xs leading-4 tracking-[-0.01em] transition-colors ${
                activeFilter === button.id
                  ? "bg-black text-white"
                  : "bg-transparent text-black border border-black/60 hover:bg-black/5"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal divider */}
      <div className="w-full h-px bg-black/20" />
    </div>
  );
}

