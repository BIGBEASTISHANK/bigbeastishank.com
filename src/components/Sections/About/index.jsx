"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import pfp from "@@/public/img/pfp.png";
import { CgWebsite } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";

export default function About({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="about">
      {/* Title */}
      <motion.a
        className="mx-auto flex text-center md:mb-[3rem] mb-[1.5rem] lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-stroke drop-shadow-3xl font-black"
        href="/#about"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        About me
      </motion.a>

      {/* Main Context */}
      <div className="my-auto md:flex justify-center items-center">
        {/* My Picture */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.2,
            type: "spring",
            stiffness: 150,
          }}
          viewport={{ once: true }}
        >
          <Image
            src={pfp}
            alt={"pfp"}
            className="pfp select-none border-2 border-blue-500 xl:min-h-[22rem] xl:min-w-[22rem] lg:min-h-[20rem] lg:min-w-[20rem]  sm:min-h-[16rem] sm:min-w-[16rem] min-h-[13rem] min-w-[13rem] xl:max-h-[22rem] xl:max-w-[22rem] lg:max-h-[20rem] lg:max-w-[20rem]  sm:max-h-[16rem] sm:max-w-[16rem] max-h-[13rem] max-w-[13rem] shadow-2xl mx-auto"
          />
        </motion.div>

        {/* Text */}
        <div className="my-auto md:ml-10 lg:ml-14 xl:ml-16 md:mt-auto mt-5 md:max-w-[50%]">
          <motion.h2
            className="xl:text-6xl sm:text-5xl text-4xl font-semibold mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            I&apos;m <span className="text-blue-400 text-stroke">Ishank</span>
          </motion.h2>

          {/* Para */}
          <motion.div
            className="text-justify xl:text-lg text-base xl:mb-8 lg:mb-7 mb-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="mb-2">
              Frontend Web & Game Developer with a passion to create immersive
              experiences. Skilled in Unity and currently expanding knowledge
              with Unreal Engine.
            </p>
            <p>
              I not only work on creating websites & games, but I also explore
              the complexity of networking and penetration testing. I find joy
              in securing computer systems & networks. I use Arch BTW!
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="select-none lg:gap-6 gap-3 flex sm:flex-row flex-col md:justify-normal justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {/* About */}
            <a href="/#games">
              <button className="group flex text-black border xl:text-3xl lg:text-2xl text-xl hover:scale-[1.1] lg:px-12 px-8  active:scale-[0.9] py-1 rounded-full outline-none bg-blue-600 transition-all drop-shadow-xl">
                Games{" "}
                <IoGameController className="my-auto ml-3 group-hover:scale-[1.1] group-active:scale-[0.8] transition-all" />
              </button>
            </a>

            {/* Websites */}
            <a href="/#websites" className="backdrop-blur-sm">
              <button className="group flex border xl:text-3xl lg:text-2xl text-xl hover:scale-[1.1] active:scale-[0.9] lg:px-10 px-6 py-1 rounded-full bg-gray-900/30 outline-none transition-all drop-shadow-xl">
                Websites{" "}
                <CgWebsite className="my-auto ml-3 group-hover:scale-[1.1] group-active:scale-[0.8] transition-all text-white" />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
