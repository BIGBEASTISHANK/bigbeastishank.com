"use client";
import { motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";

export default function GPGFingerprint() {
  return (
    <div id="gpg" className="px-5 scroll-mt-28">
      <HeadingBasic
        heading="GNU Privacy Guard"
        url="/#gpg"
        animationDelay={1.2}
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        className="flex flex-col gap-2 border border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3"
      >
        {/* Fingerprint */}
        <p>
          Public Fingerprint:{" "}
          <span className="text-[#1793D1] font-mono">
            A523 1348 2964 6091 F9FE 8A5C B731 1E54 D05E B9D7
          </span>
        </p>

        {/* Key server */}
        <p>
          Key server:{" "}
          <span className="text-[#1793D1] font-mono">
            hkps://keys.openpgp.org
          </span>
        </p>
      </motion.div>
    </div>
  );
}
