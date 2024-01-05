import "@/styles/global.scss";
import "@/styles/tailwindImport.css";
import Navbar from "@/components/Sections/Navbar";
import { Comic_Neue } from "next/font/google";
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
      className={`${inUseFont.className} bg-gray-900 text-gray-100 !scroll-smooth h-[1000rem]`}
    >
      {/* Body */}
      <body>
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
