import "@/styles/global.scss";
import Script from "next/script";
import "@/styles/tailwindImport.css";
import { Toaster } from "react-hot-toast";
import { Comic_Neue } from "next/font/google";
import Navbar from "@/components/Sections/Navbar";
import Footer from "@/components/Sections/Footer";
import ScrollProgressBar from "@/components/Others/ScrollProgressBar";
import InitialBackground from "@/components/Others/InitialBackground";

const inUseFont = Comic_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BIGBEASTISAHNK portfolio",
  description:
    "Frontend Web & Game Developer with a passion to create immersive experiences. Skilled in Unity and currently expanding knowledge with Unreal Engine. I not only work on creating websites & games, but I also explore the complexity of networking and penetration testing. I find joy in securing computer systems & networks. I use Arch BTW!",
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
    title: "BIGBEASTISAHNK portfolio",
    description:
      "Frontend Web & Game Developer with a passion to create immersive experiences. Skilled in Unity and currently expanding knowledge with Unreal Engine. I not only work on creating websites & games, but I also explore the complexity of networking and penetration testing. I find joy in securing computer systems & networks. I use Arch BTW!",
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
        {/* Top Margin */}
        <div className="min-h-[8rem]" />
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        {children}

        {/* Footer */}
        <Footer />

        <Toaster position="top-right" reverseOrder={false} />
      </body>

      {/* Currently Google analytics is not working for me (https://github.com/vercel/next.js/discussions/59962)! */}
      {/* <GoogleAnalytics gaId={process.env.gtag} /> */}

      {/* Currently using this insted of {GoogleAnalytics} */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.gtag}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.gtag}');
        `}
      </Script>
    </html>
  );
}
