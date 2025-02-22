"use client";
import { JSX } from "react";
import { hireData, planFeatures } from "@@/data/HireData";
import { HTMLMotionProps, motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";
import Link from "next/link";
import { RxCheck, RxCross2 } from "react-icons/rx";

export default function HireComponent(): JSX.Element {
  return (
    <div id="hire" className="px-5 scroll-mt-24">
      {/* Title */}
      <HeadingBasic
        heading="Hire Me"
        url="#hire"
        description={
          <>
            <p>
              Have work to do? I'm always open to new opportunities. Hire me to
              do your work for you. I'm a freelancer with a passion for creating
              innovative solutions that make a difference.
            </p>
          </>
        }
      />

      {/* Hire me card */}
      <ul className="px-2 my-10">
        {hireData.map((mainPlanData, index) => (
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
              <h1 className="md:text-2xl text-xl font-semibold">
                {mainPlanData.name}
              </h1>

              {/* Plan Description */}
              <p className="md:text-base text-sm mb-3 mx-1 text-[#AFB3C1]">
                {mainPlanData.description}
              </p>

              {/* Features */}
              {planFeatures.map((planFeaturesData, index) => (
                <>
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
                </>
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
