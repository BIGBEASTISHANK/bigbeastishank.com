"use client";

import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="contact">
      {/* Title */}
      <motion.a
        className="mx-auto block text-center lg:text-8xl mb-3 md:text-7xl sm:text-6xl text-5xl text-stroke drop-shadow-3xl font-black"
        href="/#contact"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        Contact me
      </motion.a>

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
    <motion.form
      className="flex flex-col text-white"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
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
