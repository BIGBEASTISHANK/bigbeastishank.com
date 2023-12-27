// Import
import "@/style/globals.css";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/Sections/NavBar";
import ActiveSectionProvider from "@/components/Context/ActiveSection";
import Footer from "@/components/Sections/Footer";
import ThemeSwitcher from "@/components/Subs/ThemeSwitcher";
// import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata = {
  title: "Welcome to BIGBEASTISHANK's Portfolio website",
  description: "Created by BBI",
};

export default function RootLayout({ children }) {
  // Variable
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        {/* Initial 2 background color start */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fd] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
        {/* Initial 2 background color end */}

        <ActiveSectionProvider>
          <NavBar />
          {children}
          <Footer />
        </ActiveSectionProvider>

        {/* Fixed Display */}
        <ThemeSwitcher />
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
