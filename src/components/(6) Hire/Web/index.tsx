"use client";
import { JSX } from "react";
import Link from "next/link";
import HeadingBasic from "@/utility/HeadingBasic";
import { RxCheck, RxCross2 } from "react-icons/rx";
import { HTMLMotionProps, motion } from "framer-motion";
import { webHire, webPlanFeatures } from "@@/data/HireData";

export default function WebHireComponent(): JSX.Element {
  return (
    <div id="webHire" className="px-5 scroll-mt-24">
      {/* Title */}
      <HeadingBasic
        heading="Web Development"
        url="#webHire"
        description={
          <>
            <p>
              Looking for top-notch web development? As a freelance web
              developer, I specialize in crafting custom, high-performance
              websites tailored to your needs. Whether you're building from
              scratch or improving an existing site, I offer expert solutions
              with a focus on clean code, responsive design, and seamless user
              experiences.
            </p>
          </>
        }
      />

      {/* Hire me card */}
      <ul className="px-2 my-10">
        {webHire.map((mainPlanData, index) => (
          <motion.li
            key={index}
            {...({ id: mainPlanData.id } as HTMLMotionProps<"li">)}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + (index * 0.3) / 2 }}
            {...({ className: "scroll-mt-24" } as HTMLMotionProps<"li">)}
          >
            <div className="group mb-5 flex flex-col bg-[#0A0C0E] border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-5 rounded-3xl hover:scale-[1.03] transition-all hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50">
              {/* Plan Title */}
              <div className="flex">
                <Link href={`#${mainPlanData.id}`} className={"outline-none"}>
                  <h1 className="md:text-2xl text-xl font-semibold">
                    {mainPlanData.name}
                  </h1>
                </Link>
              </div>

              {/* Plan Description */}
              <p className="md:text-base text-sm mb-3 mx-1 text-[#AFB3C1]">
                {mainPlanData.description}
              </p>

              {/* Features */}
              {webPlanFeatures.map((planFeaturesData, index) => (
                <span className="flex" key={index}>
                  {Array.isArray(mainPlanData.hasFeatures) &&
                  mainPlanData.hasFeatures.includes(planFeaturesData) ? (
                    <RxCheck
                      style={{
                        color: "#00FF00",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    />
                  ) : (
                    <RxCross2
                      style={{
                        color: "#FF0000",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    />
                  )}
                  {planFeaturesData}
                </span>
              ))}

              <span className="my-2 md:text-base text-sm mx-1 text-[#AFB3C1]">
                Delivery in: {mainPlanData.deliveryIn} / No. of Revisions:{" "}
                {mainPlanData.numberOfRevision}
              </span>

              {/* Short Divider */}
              <div className="w-[45%] h-[.125rem] mt-2 mb-4 bg-[#1793D1] z-10" />

              {/* Plan Price */}
              <Link
                href={mainPlanData.purchaseMail}
                target="_blank"
                className="mr-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
              >
                <button
                  className={
                    "md:text-lg text-base py-1 px-3 border border-[#1793D1] rounded-full bg-[#0A0C0E] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#1793D1]/50 shadow-[#1793D1]/50 transition-all"
                  }
                >
                  Purchase: {mainPlanData.price}
                </button>
              </Link>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Divider */}
      <div className="w-full h-[.125rem] mb-8 bg-[#1793D1]" />

      {/* Custom Order */}
      <div id={"customorder"} />
      <HeadingBasic
        heading="Custom Order"
        url="#customorder"
        animationDelay={1.6}
        description={
          <>
            <p>
              Looking for something specific? I'm always open to custom orders.
              You can contact me through the contact form on the main page. We
              can come up with a plan that suits your needs.
            </p>
          </>
        }
      />
    </div>
  );
}
