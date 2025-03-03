import React from "react";
import "./page.scss";
import FaqComponent from "@/components/FaqComponent/FaqComponent";
import { faqData } from "@/constants"; 

const Faqs = () => {
  return (
    <div className="faqsContainer">
      <h1>Frequently Asked Questions</h1>

      <section className="content">
        {faqData.map((faq, index) => (
          <FaqComponent key={index} {...faq} />
        ))}
      </section>
    </div>
  );
};

export default Faqs;
