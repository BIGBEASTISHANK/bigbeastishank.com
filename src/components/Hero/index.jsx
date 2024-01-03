"use client";
import Image from "next/image";
import logo from "@@/public/img/logo.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="md:flex xl:pt-10 lg:pt-5 sm:pt-10 mt-16" id="home">
      {/* Top Image */}
      {/* Images */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
      >
        <Image
          src={logo}
          alt={"logo"}
          className="rounded-full border-2 border-blue-500 sm:h-[16.32rem] sm:w-[16.32rem] h-[15rem] w-[15rem] md:hidden mx-auto mb-10"
        />
      </motion.div>

      {/* Texts */}
      <motion.div
        className="my-auto mx-auto text-center md:text-left"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        <h1 className="xl:text-8xl lg:text-7xl sm:text-6xl text-4xl text-[3.55rem] xl:mb-7 lg:mb-6 mb-6 font-black drop-shadow-2xl hero_text_stroke">
          HI👋
        </h1>

        <h2 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-semibold xl:mb-7 lg:mb-6 mb-0">
          I&apos;m{" "}
          <strong className="text-blue-400 hero_text_stroke">Ishank</strong>
        </h2>

        <h2 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-semibold xl:mb-8 lg:mb-7 mb-6">
          <strong className="text-blue-400 hero_text_stroke">Web</strong> &{" "}
          <strong className="text-blue-400 hero_text_stroke">Game</strong>{" "}
          developer
        </h2>

        {/* Buttons */}
        <div className="select-none lg:gap-10 gap-5 flex sm:flex-row flex-col md:justify-normal justify-center items-center">
          {/* Games */}
          <a href="/#games">
            <button className="text-black border xl:text-5xl lg:text-4xl text-3xl hover:scale-[1.1] active:scale-[.9] transition-all sm:px-8 px-12 py-1 rounded-full outline-none bg-blue-500">
              Games
            </button>
          </a>

          {/* Websites */}
          <a href="/#websites">
            <button className="border xl:text-5xl lg:text-4xl text-3xl hover:scale-[1.1] active:scale-[.9] transition-all sm:px-6 px-10 py-1 rounded-full bg-gray-900/80 outline-none">
              Websites
            </button>
          </a>
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="m-auto md:flex hidden" />

      {/* Side Images */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 70,
        }}
      >
        <Image
          src={logo}
          alt={"logo"}
          className="rounded-full border-2 border-blue-500 xl:h-[30.54rem] xl:w-[30.54rem] lg:h-[23.43rem] lg:w-[23.43rem] md:h-[16.32rem] md:w-[16.32rem] md:flex hidden shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
