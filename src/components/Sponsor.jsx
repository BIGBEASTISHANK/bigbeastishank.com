"use client";
// Imports
import Link from "next/link";
import { motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";
import {
  barPercentage,
  goalReached,
  sponsorAmount,
  sponsorGoalAmount,
} from "@/data/SponsorData";
import Image from "next/image";

export default function SponsorComponent() {
  return (
    <div id="sponsorme" className="px-5 scroll-mt-24">
      {/* Main Heading */}
      <HeadingBasic
        heading="Sponsor Me"
        url="#sponsorme"
        description={
          <>
            <p>
              Hello everyone, My name is Ishank. I&apos;m developing websites
              and video games. I&apos;m currently attempting to learn Unreal
              Engine, but I used to make games with Unity. I use NextJS to
              create websites. Every project I work on, no matter how big or
              small, is open source because I get really excited when I create
              something and other people use it. In addition, I will only create
              open-source games going forward, which means that my revenue
              stream will be extremely constrained.
            </p>

            <br className={"select-none"} />

            <p>
              I will also make multiplayer games in the future, and to keep
              servers running, I need money, which will come from sponsors. I
              will take some security measures for in-app purchases so it can be
              opensource and I don&apos;t have a heavy loss, but still, it
              won&apos;t make enough revenue as I can&apos;t add in-app
              purchases in offline or Single player games. I will be happy and
              motivated to work on amazing projects and develop my skills if you
              sponsor me.
            </p>
          </>
        }
      />

      {/* Payment img */}
      <ul className="justify-center items-center text-center mt-5 flex flex-wrap md:gap-9 gap-y-10">
        {/* Card */}
        {sponsorAmount.map((data, index) => (
          <motion.li
            key={index}
            initial={{ y: 50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 + (index * 0.3) / 2 }}
            className="select-none"
          >
            <div className="bg-[#1E2028] border border-[#444D7E]/20 flex flex-col overflow-auto rounded-2xl hover:scale-[1.1] transition-all hover:shadow-xl shadow-md hover:shadow-[#444D7E]/50 shadow-[#444D7E]/50">
              {/* Image */}
              <Image
                src={data.imageUrl}
                alt={data.amount}
                className="p-5 md:w-[320px] md:h-[413.5px] w-[373.3px] h-[482.5px]"
              />

              <div className="flex mb-5">
                {/* Open UPI */}
                <Link
                  href={data.upiLink}
                  target="_blank"
                  className="m-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
                >
                  <button className={"outline-none"}>
                    <p className="md:text-lg text-base text-white py-1 px-3 border border-[#444D7E] rounded-full bg-[#1E2028] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#444D7E]/50 shadow-[#444D7E]/50 transition-all">
                      Open UPI
                    </p>
                  </button>
                </Link>

                {/* Download qrcode */}
                <Link
                  download
                  href={data.imageUrl.src}
                  target="_blank"
                  className="m-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
                >
                  <button className={"outline-none"}>
                    <p className="md:text-lg text-base text-white py-1 px-3 border border-[#444D7E] rounded-full bg-[#1E2028] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#444D7E]/50 shadow-[#444D7E]/50 transition-all">
                      Download QR
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#444D7E]" />

      {/* Non UPI Transaction */}
      <HeadingBasic
        animationDelay={1.6}
        heading="Non UPI Trasaction"
        id={"nonUPITransaction"}
        url="#nonUPITransaction"
        description={
          <>
            <p className={"font-bold"}>
              Currently, you can only sponsor with UPI (in India). Non-UPI
              transactions like netbanking (for domestic and international
              currency) & crypto are coming soon. Thanks for waiting :)
            </p>
          </>
        }
      />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#444D7E]" />

      <motion.div
        className={"px-8 flex flex-col"}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2 }}
        id={"sponsorGoal"}
      >
        {/* Text */}
        <p className="text-white md:text-3xl text-2xl font-semibold mb-2 mx-auto">
          Monthly Goal: <span className={"text-[#7799E5]"}>{goalReached}</span>/
          <span className={"text-red-400"}>{sponsorGoalAmount}</span>₹{" "}
        </p>

        {/* Progress Bar */}
        <div
          className={
            "w-full border-4 border-[#444D7E] rounded-full shadow-[#444D7E]/50 shadow-md"
          }
        >
          <div className={`p-1 bg-white rounded-full ${barPercentage}`} />
        </div>
      </motion.div>
    </div>
  );
}
