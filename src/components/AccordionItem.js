import React from "react";
import "./AccordionItem.css";

export default function AccordionItem({ question, answer, onToggle, active }) {
  return (
    <div className="accordion">
      <p className={`accordion-question shadow-lg p-3  `} onClick={onToggle}>
        {question}
      </p>
      <p className={`accordion-answer  ${active ? "open shadow-lg" : "m-0"}`}>
        {answer}
      </p>
    </div>
  );
}
