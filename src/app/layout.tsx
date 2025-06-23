import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/(1) Layout/Navbar";
import Footer from "@/components/(1) Layout/Footer";
import ScrollProgressBar from "@/utility/ScrollProgressBar";
import ParticlesBackground from "@/utility/ParticlesBackground";
import { NextFont } from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | BIGBEASTISHANK",
  description:
    "An open-source game and web developer who also occasionally creates exclusive games. I used to produce games on Unity, but I'm also learning about the Unreal Engine. I create my website using NextJS. Currently diving into AI/ML fundamentals and practicing data structures and algorithms with Rust. I not only work on creating websites & games, but I also explore the complexity of networking, servers & pentesting. I find joy in securing computer systems & networks. I use Arch BTW!",
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
      "An open-source game and web developer who also occasionally creates exclusive games. I used to produce games on Unity, but I'm also learning about the Unreal Engine. I create my website using NextJS. Currently diving into AI/ML fundamentals and practicing data structures and algorithms with Rust. I not only work on creating websites & games, but I also explore the complexity of networking, servers & pentesting. I find joy in securing computer systems & networks. I use Arch BTW!",
    images: "/img/metadata/home.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
