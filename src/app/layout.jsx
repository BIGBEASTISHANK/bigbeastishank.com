import "@/styles/global.scss";
import "@/styles/tailwindImport.css";
import Navbar from "@/components/Sections/Navbar";
import { Comic_Neue } from "next/font/google";
import ScrollProgressBar from "@/components/Others/ScrollProgressBar"; 
import InitialBackground from "@/components/Others/InitialBackground";

const inUseFont = Comic_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BIGBEASTISAHNK portfolio",
  description:
    "On this website, you will find blogs and projects made by Ishank.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inUseFont.className} bg-gray-900 text-gray-100 !scroll-smooth`}
    >
      {/* Body */}
      <body>
        {/* ScrollProgressBar */}
        <ScrollProgressBar customTWClass="fixed top-0 left-0 right-0 h-[0.25rem] bg-blue-500 origin-[0%]" />
        {/* Initial background */}
        <InitialBackground />
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
