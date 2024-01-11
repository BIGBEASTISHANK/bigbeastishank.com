"use client";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm({
  customTWClass = "",
  nameReadOnly = false,
  defaultNameValue = "",
  emailReadOnly = false,
  defaultEmailValue = "",
  customMessageClass="",
  messageReadOnly = false,
  defaultMessageValue = "",
  subjectReadOnly = false,
  defaultSubjectValue = "",
}) {
  // On submit
  const [state, handleSubmit] = useForm("mrgravyr");
  if (state.succeeded) {
    toast.success("Email sent successfully!");
  }

  // Default
  return (
    <motion.form
      onSubmit={handleSubmit}
      viewport={{ once: true }}
      className={`${customTWClass} flex flex-col text-white`}
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
    >
      {/* Name */}
      <div className="flex flex-col mt-3 p-4 rounded-lg border border-black/20 transition-all bg-gray-900/70 backdrop-blur-md w-full">
        <div className="flex my-auto">
          <label for="Name" className="w-[4.5rem] pr-2 select-none font-black">
            Name:
          </label>
          <input
            className="bg-transparent outline-none w-full"
            name="Name"
            type="text"
            id="Name"
            required
            maxLength={500}
            placeholder="Enter your full name"
            readOnly={nameReadOnly}
            defaultValue={defaultNameValue}
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Subject */}
      <div className="flex flex-col mt-3 p-4 rounded-lg border border-black/20 transition-all bg-gray-900/70 backdrop-blur-md w-full">
        <div className="flex my-auto">
          <label for="Subject" className="w-[4.5rem] pr-2 select-none font-black">
            Subject:
          </label>
          <input
            className="bg-transparent outline-none w-full"
            name="subject"
            type="text"
            id="Subject"
            required
            maxLength={500}
            placeholder="Tell the subjct"
            readOnly={subjectReadOnly}
            defaultValue={defaultSubjectValue}
          />
        </div>
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col mt-3 p-4 rounded-lg border border-black/20 transition-all bg-gray-900/70 backdrop-blur-md w-full">
        <div className="flex">
          <label for="Email" className="w-[4.5rem] pr-2 select-none font-black">
            Email:
          </label>
          <input
            className="bg-transparent outline-none w-full"
            name="Email"
            type="email"
            id="Email"
            required
            maxLength={500}
            placeholder="Enter your email"
            readOnly={emailReadOnly}
            defaultValue={defaultEmailValue}
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message */}
      <div className="flex flex-col my-3 p-4 rounded-lg border border-black/20 transition-all bg-gray-900/70 backdrop-blur-md w-full">
        <div className="flex">
          <label for="Message" className="w-[4.5rem] pr-2 select-none font-black">
            Message:
          </label>
          <textarea
            className={`bg-transparent outline-none w-full min-h-52 text-justify ${customMessageClass}`}
            name="Message"
            id="Message"
            placeholder="Type your message..."
            required
            maxLength={5000}
            readOnly={messageReadOnly}
            defaultValue={defaultMessageValue}
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* Submit btn */}
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-white/10 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-white/20 active:scale-105 disabled:scale-100"
        readOnly={state.submitting}
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
