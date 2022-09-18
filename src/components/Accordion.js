import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const FAQS = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    id: 2,
    question: "Dignissimos sequi architecto?",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
  },
  {
    id: 3,
    question: "Voluptas praesentium facere?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
];

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="container my-5">
      <div className="mx-5">
        {FAQS.map((faq, index) => (
          <AccordionItem
            question={faq.question}
            answer={faq.answer}
            key={index}
            onToggle={() => {
              handleToggle(index);
            }}
            active={clicked === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
