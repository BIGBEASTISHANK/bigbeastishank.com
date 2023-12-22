"use client";

//Import
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitcher() {
  // Variables
  const themeSwitchLock = true;

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Components
  return (
    <button
      className="fixed bottom-5 right-5 bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border dark:border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-[0.9] transition-all dark:bg-gray-950/80 border-gray-600/40"
      onClick={() => {
        if (themeSwitchLock) {
          toast.error("Theme switch is locked!", {
            style: {
              borderRadius: "10px",
              background: "#090E17",
              color: "#D3D4D5",
            },
          });
        } else {
          toggleTheme();
        }
      }}
    >
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
