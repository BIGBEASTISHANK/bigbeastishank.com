"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit: (engine: any) => Promise<void> = useCallback(
    async (engine) => {
      await loadSlim(engine);
    },
    []
  );

  const particlesLoaded: (engine: any) => Promise<void> = useCallback(
    async (container) => {},
    []
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#050607",
            },
          },
          fpsLimit: 400,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: {
              value: [
                "#3AB1F5",
                "#515860",
                "#F6F9FC",
                "#0088CC",
                "#1793D1",
                "#FF3333",
                "#00FF00",
                "#FFFF00",
                "#9900FF",
                "#FF69B4",
              ],
            },
            links: {
              color: "#1793D1",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 2,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 25 },
            opacity: { value: 1 },
            shape: { type: "circle" },
            size: { value: { min: 6, max: 7 } }, 
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
