import { JSX } from "react";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/(1) Layout/Navbar";
import Footer from "@/components/(1) Layout/Footer";
import ScrollProgressBar from "@/utility/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"] });

// Meta data
export const metadata: Metadata = {
  title: "Home | BIGBEASTISHANK",
  description:
    "A Web & Game Developer with a passion to create immersive experiences. Skilled in Unity and currently expanding knowledge with Unreal Engine. I not only work on creating websites & games, but I also explore the complexity of networking and penetration testing. I find joy in securing computer systems & networks. I use Arch BTW!",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Web Development",
    "Game development",
    "C++",
    "Unreal Engine",
    "Unity",
  ],

  openGraph: {
    title: "Home | BIGBEASTISHANK",
    description:
      "A Web & Game Developer with a passion to create immersive experiences. Skilled in Unity and currently expanding knowledge with Unreal Engine. I not only work on creating websites & games, but I also explore the complexity of networking and penetration testing. I find joy in securing computer systems & networks. I use Arch BTW!",
    images: "/img/metadata/home.png",
  },
};
//////////////////////////////

export default function RootLayout({ children }): JSX.Element {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <script
          src="https://cdn.counter.dev/script.js"
          data-id="297190ea-2088-4f36-9e54-cadbfc8c65b7"
          data-utcoffset="6"
        ></script>
      </head>
      <body
        className={`${inter.className} md:max-w-[45rem] max-w-[35rem] transition-all mx-auto md:pt-[7.5rem] pt-[5.5rem] text-[#F6F9FC] bg-[#050607]`}
      >
        <ScrollProgressBar />
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <div className="w-full h-[.125rem] mt-12 bg-[#1793D1]" />

        <Footer />
      </body>
    </html>
  );
}
