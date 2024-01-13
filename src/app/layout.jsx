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
    <html lang="en" className="scroll-smooth text-white bg-[#171717]">
      <body
  className={`${inter.className} md:max-w-[45rem] max-w-[35rem] transition-all m-auto pt-32`}
>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <div className="w-full h-[.125rem] mt-12 bg-neutral-700" />
        <Footer/>
      </body>
    </html>
  );
}
