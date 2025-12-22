"use client";

import * as React from "react";

interface AccordionContextType {
  openValue: string;
  setOpenValue: (value: string) => void;
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string;
  children: React.ReactNode;
}

export function Accordion({
  type = "single",
  collapsible = false,
  defaultValue = "",
  children,
}: AccordionProps) {
  const [openValue, setOpenValue] = React.useState<string>(defaultValue);

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue, collapsible }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({
  value,
  children,
  className = "",
}: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be inside Accordion");

  const { openValue } = context;
  const isOpen = openValue === value;

  return (
    <div className={className} data-state={isOpen ? "open" : "closed"}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...child.props, itemValue: value });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  itemValue?: string;
}

export function AccordionTrigger({
  children,
  className = "",
  itemValue = "",
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be inside Accordion");

  const { openValue, setOpenValue, collapsible } = context;
  const isOpen = openValue === itemValue;

  const handleClick = () => {
    if (isOpen && collapsible) {
      setOpenValue("");
    } else {
      setOpenValue(itemValue);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  itemValue?: string;
}

export function AccordionContent({
  children,
  className = "",
  itemValue = "",
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) return null;

  const { openValue } = context;
  const isOpen = openValue === itemValue;

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
