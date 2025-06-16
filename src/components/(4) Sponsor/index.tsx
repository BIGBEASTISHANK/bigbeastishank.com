"use client";
// Imports
import {
  goalReached,
  barPercentage,
  sponsorGoalAmount,
} from "@@/data/SponsorData";
import HeadingBasic from "@/utility/HeadingBasic";
import { motion, HTMLMotionProps } from "framer-motion";
import { currencyFormatter } from "@/utility/CurrencyFormatter";
import { FullDivider, ShortDivider } from "@/utility/Dividers";

export default function SponsorComponent() {
  return (
    <div id="sponsorme" className="px-5 scroll-mt-28">
      {/* Main Heading */}
      <HeadingBasic
        heading="Sponsor Me"
        url="#sponsorme"
        description={
          <>
            <p className="text-justify">
              Hey there, I'm Ishank, a developer who loves making websites and
              video games. Right now, I'm exploring Unreal Engine after working
              with Unity. I use NextJS for websites, and I always share my
              projects for free because I love helping others but sometimes I
              make proprietary games, that's mostly for the safety of the
              players and some in-app purchases.
            </p>

            <br className={"select-none"} />

            <p>
              I'm excited about creating more awesome stuff, and sponsorship
              would really help me out. Whether it's financial support or
              working together on projects, your help would let me focus on
              making cool things and getting better at what I do. Your support
              means a lot to me as I keep growing in this creative journey.
            </p>

            <br className={"select-none"} />

            <p>
              If you sponsor me, you can join my{" "}
              <a
                href="/discord"
                target="_blank"
                className="text-[#0088CC] hover:underline outline-none"
              >
                <strong>Discord server</strong>
              </a>{" "}
              and share screenshots in the sponsor channel. It's a great way for
              us to chat and for me to show appreciation to all my sponsors.
              Thanks for considering teaming up with me!
            </p>
          </>
        }
      />

      {/* Short Divider */}
      <ShortDivider />

      {/* Note */}
      {/* <HeadingBasic
        animationDelay={0.9}
        heading="Important Notice"
        id={"importantNotice"}
        url="#importantNotice"
        description={
          <>
            <p className={"font-bold"}>
              Currently, this page is down due to some banking issue. Thanks for coming here :)
            </p>
          </>
        }
      /> */}

      {/* Transactions details */}
      <div>
        {/* UPI Transaction */}
        <HeadingBasic
          animationDelay={0.9}
          heading="UPI IDs"
          id={"upiids"}
          url="#upiids"
          description={
            <ul className="sm:text-xl text-lg px-[1.3rem]">
              <li>mobile.bigbeastishank@sbi</li>
              <li>mobile.bigbeastishank-1@okaxis</li>
              <li>mobile.bigbeastishank-1@okicici</li>
            </ul>
          }
        />

        {/* Divider */}
        <FullDivider />

        {/* Non UPI Transaction */}
        <HeadingBasic
          animationDelay={1.5}
          heading="Direct Bank Transaction"
          id={"banktransaction"}
          url="#banktransaction"
          description={
            <p className="text-xl px-[1.3rem]">
              <strong>Name:&nbsp;</strong> PRANJAL
              <br />
              <strong>Account No:&nbsp;</strong> 243701500554
              <br />
              <strong>IFSC:&nbsp;</strong> ICIC0002437
              <br />
              <strong>Account type:&nbsp;</strong> Savings
            </p>
          }
        />
      </div>

      {/* Divider */}
      <FullDivider />

      {/* Monthly goal */}
      <motion.div
        {...({ className: "px-8 flex flex-col" } as HTMLMotionProps<"div">)}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.5, type: "spring" }}
        {...({ id: "sponsorGoal" } as HTMLMotionProps<"div">)}
      >
        {/* Text */}
        <p className="text-[#F6F9FC] md:text-3xl text-2xl font-semibold mb-2 mx-auto">
          Monthly Goal:{" "}
          <span className={"text-[#0088CC]"}>
            {currencyFormatter.format(goalReached)}
          </span>
          &nbsp;/&nbsp;
          <span className={"text-[#FF3333]"}>
            {currencyFormatter.format(sponsorGoalAmount)}
          </span>
        </p>

        {/* Progress Bar */}
        <div
          className={
            "w-full border-4 border-[#3AB1F5] rounded-full shadow-[#3AB1F5]/50 shadow-md"
          }
        >
          <div
            className={`p-1 bg-[#FF3333] rounded-full`}
            style={{ width: `${barPercentage}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
