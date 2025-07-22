"use client";
import { motion } from "motion/react";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";

export default function IntroCodeComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-3xl pl-5 sm:pr-30 pr-10 py-5 font-mono md:text-sm text-xs overflow-auto backdrop-blur-3xl"
      style={{
        backgroundColor: `${CP.surface.low.hex}D1`,
        border: `1px solid ${CP.surface.low.hex}`,
      }}
    >
      <div className="flex">
        {/* Line numbers */}
        <div
          className="pr-4 select-none flex flex-col gap-1"
          style={{ color: CP.text.tertiary.hex }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i + 1} className="leading-relaxed">
              {i + 1}.
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex flex-col gap-1">
          <div className="leading-relaxed">
            {/* 1 - Class */}
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              class
            </span>{" "}
            <span className="font-bold" style={{ color: CP.warning.hex }}>
              person
            </span>{" "}
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#123;
            </span>
          </div>

          {/* 2 - Public */}
          <div className="leading-relaxed ml-4">
            <span className="font-bold" style={{ color: CP.error.hex }}>
              public
            </span>
            <span style={{ color: CP.text.secondary.hex }}>:</span>
          </div>

          {/* 3 - Name */}
          <div className="leading-relaxed ml-8">
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              string
            </span>{" "}
            <span
              className="font-semibold"
              style={{ color: CP.text.primary.hex }}
            >
              name
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#123;
            </span>
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Ishank"
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#125;
            </span>
            <span style={{ color: CP.text.secondary.hex }}>;</span>
          </div>

          {/* 4 - Age */}
          <div className="leading-relaxed ml-8">
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              int
            </span>{" "}
            <span
              className="font-semibold"
              style={{ color: CP.text.primary.hex }}
            >
              age
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#123;
            </span>
            <span className="font-bold" style={{ color: CP.warning.hex }}>
              {new Date().getFullYear() - 2006}
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#125;
            </span>
            <span style={{ color: CP.text.secondary.hex }}>;</span>
          </div>

          {/* 5 - Professions */}
          <div className="leading-relaxed ml-8">
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              string
            </span>{" "}
            <span
              className="font-semibold"
              style={{ color: CP.text.primary.hex }}
            >
              professions
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              []
            </span>{" "}
            <span className="font-bold" style={{ color: CP.error.hex }}>
              =
            </span>{" "}
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              [
            </span>
          </div>

          {/* 6 - Game Developer */}
          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Game developer"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          {/* 7 - Fullstack Web Developer */}
          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Fullstack Web developer"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          {/* 8 - Network Administrator */}
          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Network Administrator"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>
          {/* 9 - Server Administrator */}
          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Server Administrator"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          {/* 10 - Pentester */}
          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Pentester"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          {/* 11 - Closing */}
          <div className="leading-relaxed ml-8">
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              ];
            </span>
          </div>

          {/* 12 - Closing */}
          <div className="leading-relaxed">
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#125;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
