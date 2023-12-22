"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../Subs/SectionHeading";
import toast from "react-hot-toast";

export default function Contact() {
  // Variables

  // Navbar scroll animation not working
  //   const { ref } = useSectionInView("Contact");

  // Component
  return (
    <motion.section
      // ref={ref}
      id="contact"
      className="mb-10 sm:mb-12 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="mb-8">
        <SectionHeading>Contact me</SectionHeading>
      </div>

      {/* Direct contact */}
      <p className="text-gray-700 dark:text-gray-300 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ishank@bigbeastishank.com">
          ishank@bigbeastishank.com
        </a>{" "}
        or through this form.
      </p>

      {/* Form */}
      <Form />
    </motion.section>
  );
}

function Form() {
  // On submit
  const [state, handleSubmit] = useForm("mrgravyr");
  if (state.succeeded) {
    toast.success("Email sent successfully!", {
      style: {
        borderRadius: "10px",
        background: "#090E17",
        color: "#D3D4D5",
      },
    });
  }

  // Default
  return (
    <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
      {/* Name */}
      <input
        className="h-14 px-4 rounded-lg border border-black/20 transition-all"
        name="Name:"
        type="name"
        id="Name:"
        required
        maxLength={500}
        placeholder="Your full name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      {/* Email */}
      <input
        className="h-14 mt-3 px-4 rounded-lg border border-black/20 transition-all"
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
        className="h-52 my-3 rounded-lg border border-black/20 p-4 transition-all"
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
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 dark:bg-white/10 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:hover:bg-white/20 active:scale-105 disabled:scale-100"
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
    </form>
  );
}
