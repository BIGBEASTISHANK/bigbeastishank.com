"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BBILogo from "@@/public/img/BBILogo.png";
import { IoMdContact } from "react-icons/io";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Hero({ customTWClass = "" }) {
  return (
    <div className={`flex ${customTWClass}`} id="home">
      {/* Texts */}
      <motion.div
        className="m-auto text-center md:text-left"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.2,
          type: "spring",
          stiffness: 200,
        }}
      >
        {/* Top Image */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: 1,
            type: "spring",
            stiffness: 70,
          }}
          className="md:hidden"
        >
          <Image
            src={BBILogo}
            alt={"BBILogo"}
            className="BBILogo select-none mx-auto mb-5 border-2 border-blue-500 sm:h-[16rem] sm:w-[16rem] h-[13rem] w-[13rem] shadow-2xl"
          />
        </motion.div>

        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-[3.5rem] text-[3rem] xl:mb-7 sm:mb-6 mb-3 font-black drop-shadow-2xl text-stroke transition-all">
          HI👋
        </h1>

        <h2 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-semibold xl:mb-7 lg:mb-6 mb-0 transition-all">
          I&apos;m{" "}
          <strong className="text-blue-400 text-stroke">Ishank</strong>
        </h2>

        <h2 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-semibold xl:mb-8 lg:mb-7 mb-6 transition-all">
          <strong className="text-blue-400 text-stroke">Web</strong> &{" "}
          <strong className="text-blue-400 text-stroke">Game</strong>{" "}
          developer
        </h2>

        {/* Buttons */}
        <div className="select-none lg:gap-6 gap-3 flex sm:flex-row flex-col md:justify-normal justify-center items-center">
          {/* About */}
          <a href="/#about">
            <button className="group flex text-black border xl:text-3xl lg:text-2xl text-xl hover:scale-[1.1] lg:px-8 px-5  active:scale-[0.9] py-1 rounded-full outline-none bg-blue-600 transition-all">
              About Me{" "}
              <FaArrowAltCircleDown className="my-auto ml-3 group-hover:scale-[1.1] group-active:scale-[0.8] transition-all" />
            </button>
          </a>

          {/* Contact me */}
          <a href="/#contact" className="backdrop-blur-sm">
            <button className="group flex border xl:text-3xl lg:text-2xl text-xl hover:scale-[1.1] active:scale-[0.9] lg:px-6 px-3 py-1 rounded-full bg-gray-900/30 outline-none transition-all">
              Contact Me{" "}
              <IoMdContact className="my-auto ml-3 group-hover:scale-[1.1] group-active:scale-[0.8] transition-all text-white" />
            </button>
          </a>
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="m-auto md:flex hidden" />

      {/* Side Images */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.1,
          delay: 1,
          type: "spring",
          stiffness: 70,
        }}
        className="m-auto md:flex hidden"
      >
        <Image
          src={BBILogo}
          alt={"BBILogo"}
          className="BBILogo select-none border-2 border-blue-500 xl:h-[30.54rem] xl:w-[30.54rem] lg:h-[23.43rem] lg:w-[23.43rem] md:h-[16rem] md:w-[16rem] shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
