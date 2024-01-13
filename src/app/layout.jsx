import "@/styles/tailwindImport.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Who is BIGBEASTISHANK?",
  description: "Know about him here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} md:max-w-[45rem] max-w-[35rem] transition-all mx-auto md:pt-[8rem] pt-[5rem] text-white bg-[#171717] backdrop-blur-sm`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <div className="w-full h-[.125rem] mt-12 bg-neutral-700" />
        <Footer />
      </body>
    </html>
  );
}
