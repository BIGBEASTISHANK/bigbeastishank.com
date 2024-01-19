import "@/styles/tailwindImport.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "../utility/ScrollProgressBar";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

// Meta data
export const metadata = {
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
  images: "/img/pfp.png",
  locale: "en_US",

  openGraph: {
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
    images: "/img/pfp.png",
    locale: "en_US",
  },
};
//////////////////////////////

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} md:max-w-[45rem] max-w-[35rem] transition-all mx-auto md:pt-[7.5rem] pt-[5.5rem] text-white bg-[#171717]`}
      >
        <ScrollProgressBar />
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <div className="w-full h-[.125rem] mt-12 bg-[#4e4e4e]" />
        <Footer />
      </body>

      {/* Google Analytics */}
      <GoogleAnalytics gaId={process.env.gtag} />
    </html>
  );
}
