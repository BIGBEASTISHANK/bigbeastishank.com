"use client";
import { motion } from "framer-motion";
import SectionHeading from "../Subs/SectionHeading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Heading */}
      <SectionHeading>About Me</SectionHeading>

      {/* About me */}
      <p className="mb-3">
        <strong>Frontend Web </strong>&<strong> Game Developer</strong> with a
        passion to create immersive experiences. Skilled in{" "}
        <a
          className="font-bold hover:text-xl italic"
          href="https://unity.com"
          target="_blank"
        >
          Unity
        </a>{" "}
        and currently expanding knowledge with{" "}
        <a
          className="font-bold hover:text-xl italic"
          href="https://unrealengine.com/"
          target="_blank"
        >
          Unreal Engine
        </a>
        .
        <br />
        <br />
        I've built websites before, but it's been a while, so I might be a bit
        rusty. However, with a bit of practice and brushing up on my skills, I'm
        confident I can get back into the swing of things.
        <br />
        <br />I not only work on creating websites or games, but I also explore
        the complexity of networking and penetration testing. I find joy in
        securing computer systems. <strong>I use Arch BTW!</strong>
        <br />
        <br />
        <strong>
          This website is under construction and will be completed soon. View
          the source code for updates.
        </strong>
      </p>
    </motion.section>
  );
}