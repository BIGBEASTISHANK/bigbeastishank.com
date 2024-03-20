"use client";
// Imports
import Link from "next/link";
import { motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";
import {
  goalReached,
  sponsorAmount,
  barPercentage,
  sponsorGoalAmount,
} from "@@/data/SponsorData";
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
              Hey there, I&apos;m Ishank, a developer who loves making websites
              and video games. Right now, I&apos;m exploring Unreal Engine after
              working with Unity. I use NextJS for websites, and I always share
              my projects for free because I love helping others.
            </p>

            <br className={"select-none"} />

            <p>
              I&apos;m excited about creating more awesome stuff, and
              sponsorship would really help me out. Whether it&apos;s financial
              support or working together on projects, your help would let me
              focus on making cool things and getting better at what I do. Your
              support means a lot to me as I keep growing in this creative
              journey.
            </p>

            <br className={"select-none"} />

            <p>
              If you sponsor me, you can join my{" "}
              <a
                href="/discord"
                target="_blank"
                className="text-[#7799E5] hover:underline outline-none"
              >
                <strong>Discord server</strong>
              </a>{" "}
              and share screenshots in the sponsor channel. It&apos;s a great
              way for us to chat and for me to show appreciation to all my
              sponsors. Thanks for considering teaming up with me!
            </p>
          </>
        }
      />

      {/* Short Divider */}
      <div className="w-[50%] h-[.125rem] my-7 bg-[#444D7E] z-10" />

      {/* UPI Transaction */}
      <HeadingBasic
        animationDelay={0.9}
        heading="UPI Trasaction"
        id={"upiTransaction"}
        url="#upiTransaction"
      />

      {/* Payment img */}
      <ul className="justify-center items-center text-center mt-5 flex flex-wrap md:gap-9 gap-y-10">
        {/* Card */}
        {sponsorAmount.map((data, index) => (
          <motion.li
            key={index}
            initial={{ y: 50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + (index * 0.3) / 2 }}
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
                {/*

                Currently This button is not working due to some upi encoding. (Not my problem it's UPI Problem)
                
                */}
                {/* Open UPI */}
                {/* <Link
                  href={data.upiLink}
                  target="_blank"
                  className="m-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
                >
                  <button className={"outline-none"}>
                    <p className="md:text-lg text-base text-white py-1 px-3 border border-[#444D7E] rounded-full bg-[#1E2028] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#444D7E]/50 shadow-[#444D7E]/50 transition-all">
                      Open UPI
                    </p>
                  </button>
                </Link> */}

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
        animationDelay={2.1}
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
        transition={{ delay: 2.7 }}
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
          <div className={`p-1 bg-white rounded-full w-[${barPercentage}%]`} />
        </div>
      </motion.div>
    </div>
  );
}
