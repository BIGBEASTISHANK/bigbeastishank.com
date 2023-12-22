"use client";
// Import
import { createContext, useContext, useState } from "react";

// Variables
export const ActiveSectionContext = createContext(null);

export default function ActiveSectionProvider({ children }) {
  // Variables
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  // Component
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionProvider"
    );
  }

  return context;
}
