import "@/styles/global.scss";
import Script from "next/script";
import "@/styles/tailwindImport.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Comic_Neue } from "next/font/google";
import ScrollProgressBar from "@/utils/ScrollProgressBar";
import InitialBackground from "@/utils/InitialBackground";

const inUseFont = Comic_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ishank's work showcase | BIGBEASTISHANK",
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
    title: "Ishank's work showcase | BIGBEASTISHANK",
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
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <div className="mt-[8rem] min-h-[65.4vh]">{children}</div>

        {/* Footer */}
        <Footer />

        {/* Toster setting */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: "25px",
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(16px)",
              color: "#D3D4D5",
            },
          }}
        />
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
