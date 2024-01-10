"use client";

import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import SectionBasics from "@/utils/SectionBasics";

export default function Contact({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="contact">
      {/* Heading */}
      <SectionBasics title="Contact me" url="/#contact" />

      <div className="flex justify-center my-auto">
        <div className="max-w-[60rem] w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

function Form() {
  // On submit
  const [state, handleSubmit] = useForm("mrgravyr");
  if (state.succeeded) {
    toast.success("Email sent successfully!");
  } else {
    toast.error("Email didn't sent, Internal error");
  }

  // Default
  return (
    <motion.form
      onSubmit={handleSubmit}
      viewport={{ once: true }}
      className="flex flex-col text-white"
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
    >
      {/* Name */}
      <input
        className="h-14 px-4 rounded-lg border border-black/20 transition-all bg-gray-900/70 backdrop-blur-md"
        name="Name:"
        type="name"
        id="Name:"
        required
        maxLength={500}
        placeholder="Your full name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      {/* Subject */}
      <select
        className="h-14 mt-3 px-4 rounded-lg border border-black/20 transition-all bg-gray-900/70 backdrop-blur-md"
        name="Subject"
        id="Subject"
        required
      >
        <option value={"For general contact purpose"}>
          For general contact purpose
        </option>
        {/*  */}
        <option value={"Others"}>Others</option>
      </select>
      <ValidationError prefix="Subject" field="subject" errors={state.errors} />

      {/* Email */}
      <input
        className="h-14 mt-3 px-4 rounded-lg border border-black/20 transition-all bg-gray-900/70 backdrop-blur-md"
        name="Email"
        type="email"
        id="Email"
        required
        maxLength={500}
        placeholder="Your email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* Message */}
      <textarea
        className="h-52 my-3 rounded-lg border border-black/20 p-4 transition-all bg-gray-900/70 backdrop-blur-md"
        name="Message"
        id="Message"
        placeholder="Your message"
        required
        maxLength={5000}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {/* Submit btn */}
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-white/10 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-white/20 active:scale-105 disabled:scale-100"
        disabled={state.submitting}
      >
        {state.submitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        )}
      </button>
    </motion.form>
  );
}
