import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/(1) Layout/Navbar";
import Footer from "@/components/(1) Layout/Footer";
import ScrollProgressBar from "@/utility/ScrollProgressBar";
import ParticlesBackground from "@/components/(1) Layout/ParticlesBackground";
import { FullDivider } from "@/utility/Dividers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | BIGBEASTISHANK",
  description:
    "A Web & Game Developer with a passion to create immersive experiences. Skilled in Unity and currently expanding knowledge with Unreal Engine. I not only work on creating websites & games, but I also explore the complexity of networking and penetration testing. I find joy in securing computer systems & networks. I use Arch BTW!",
  metadataBase: new URL(
    `https://${process.env.VERCEL_URL || "https://yourdomain.com"}`
  ),
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

export default function RootLayout({ children }) {
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
        className={`${inter.className} transition-all md:pt-[7.5rem] pt-[5.5rem] text-[#F6F9FC] bg-[#050607] relative`}
      >
        {/* Background */}
        <ParticlesBackground />

        <ScrollProgressBar />
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
