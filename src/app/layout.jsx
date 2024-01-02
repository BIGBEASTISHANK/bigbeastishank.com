import { Patrick_Hand } from "next/font/google";
import "@/styles/tailwindImport.css";
import "@/styles/global.scss";
import Navbar from "@/components/Navbar";

const inUseFont = Patrick_Hand({
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
      className="bg-gray-900 text-gray-100 scroll-smooth h-[1000rem]"
    >
      <body className={`${inUseFont.className} lg:mx-20 mx-10`}>
        {/* Navbar */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
