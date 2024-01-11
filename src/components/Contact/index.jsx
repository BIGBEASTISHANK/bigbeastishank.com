import React from "react";
import SectionBasics from "@/utils/SectionBasics";
import { ContactForm } from "@/utils/ContactForm";

export default function Contact({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="contact">
      {/* Heading */}
      <SectionBasics title="Contact me" url="/#contact" />

      <div className="flex justify-center my-auto">
        <div className="max-w-[60rem] w-full">
          <ContactForm defaultSubjectValue="Inquiry Regarding General Matters" />
        </div>
      </div>
    </div>
  );
}
