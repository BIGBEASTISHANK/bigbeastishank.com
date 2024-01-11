"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { hireMeForWebsite } from "@/lib/data";
import SectionBasics from "@/utils/SectionBasics";
import { RxCheck, RxCross2 } from "react-icons/rx";
import { HorizontalSeprator } from "@/utils/Separator";
import { Dialog } from "@headlessui/react";
import { ContactForm } from "@/utils/ContactForm";

// Variables
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 200, scale: 0.5 },
  animate: (index) => ({
    y: 0,
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.2,
      type: "spring",
      delay: (0.3 * index) / 2,
    },
  }),
};

let contactSubjectRef = "";

export default function ForWebsite() {
  // Variables
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Main content
  return (
    <div className="projectW:px-12 sm:px-[6rem] px-12">
      {/* Title */}
      <SectionBasics
        title="Website For You"
        desc="I will create a website for you; you can check out the plans and their features below."
      />

      {/* Card */}
      <div className="my-auto projectW:flex projectW:flex-wrap gap-[2rem] justify-center items-center">
        {hireMeForWebsite.map((data, index) => (
          // Card
          <motion.div
            key={index}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
            className="2xl:w-[25.6rem] projectW:w-[20.8rem]"
          >
            <div className="bg-gray-800/70 backdrop-blur-xl p-5 rounded-2xl transition-all 2xl:max-w-[26.85rem] projectW:max-w-[22.05rem] projectW:mb-0 mb-8 drop-shadow-3xl hover:drop-shadow-blueGlow hover:bg-gray-900/85 hover:scale-[1.05] group/card overflow-auto">
              {/* Title */}
              <h2 className="mt-3 mb-2 xl:text-6xl projectW:text-4xl sm:text-6xl text-4xl font-bold text-center text-stroke">
                {data.planName}
              </h2>

              {/* Price */}
              <h2 className="mt-3 mb-2 xl:text-3xl projectW:text-2xl sm:text-3xl text-2xl font-semibold">
                Price:{" "}
                <span className="text-blue-600 text-stroke-min font-bold">
                  {data.planPrice}
                </span>
                ₹
              </h2>

              {/* Divider */}
              <HorizontalSeprator customTWClass="mb-3" />

              {/* Feature Option */}
              <div className="min-h-[7rem] projectW:text-xl sm:text-2xl text-xl group-hover/card:font-medium">
                {data.features.map((featuresData, index) => (
                  <div className="flex" key={index}>
                    {featuresData.available ? (
                      <RxCheck className="my-auto mr-2" color="green" />
                    ) : (
                      <RxCross2 className="my-auto mr-2" color="red" />
                    )}
                    {featuresData.name}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <HorizontalSeprator customTWClass="my-3" />

              {/* Note */}
              <h2 className="mt-3 mb-2 projectW:text-xl sm:text-2xl text-xl group-hover/card:font-medium text-justify">
                <span className="text-blue-600 text-stroke-min font-bold xl:text-2xl projectW:text-lg sm:text-2xl text-lg text-stroke-min">
                  Note:
                </span>{" "}
                {data.note}
              </h2>

              <HorizontalSeprator customTWClass="mt-3" />

              {/* Button */}
              <button
                className="backdrop-blur-sm w-[11.1rem] select-none flex bg-gray-950/30 mt-4 text-white border text-xl px-4 py-1 rounded-full outline-none bg-blue-600 text-center hover:font-medium hover:scale-[1.05] active:scale-[.9] transition-all"
                onClick={() => {
                  setIsFormOpen(true);
                  contactSubjectRef = data.contactSubject;
                }}
              >
                Send request{" "}
                <FaPaperPlane className="my-auto ml-[12px] group-hover:scale-[1.1] group-active:scale-[0.8] transition-all" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        className={"relative z-50"}
      >
        {/* Background */}
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-xl"
          aria-hidden="true"
        />

        {/* Panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-[60rem] rounded">
            {/* Title */}
            <SectionBasics title="Send Requst" />

            {/* Form */}
            <ContactForm
              subjectReadOnly={true}
              defaultSubjectValue={contactSubjectRef}
              messageReadOnly={true}
              customMessageClass={"resize-none"}
              defaultMessageValue={
                "I trust this message finds you well. I am reaching out to you with an exciting opportunity that aligns with your expertise in web development. We are in the early stages of planning a significant project and believe that your skills could be instrumental in bringing our vision to life. Without delving into exhaustive details at this moment, we are eager to gauge your interest and availability for this project. The website we envision will be a dynamic platform, requiring creativity, technical prowess, and an understanding of user experience. If you are open to exploring this opportunity further, kindly respond to this email, expressing your interest. Following that, we will share more comprehensive details about the project, including scope, timelines, and compensation. We understand the importance of your time, and we appreciate your consideration of this invitation. We look forward to the possibility of collaborating with someone of your caliber."
              }
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
