// Importing stuffs
import "../styles/index.scss";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Theme";

// Importing for google analytics
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

export default function MyApp({ Component, pageProps }) {
  // Google analytics
  //
  // Variable
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  //
  /////////////////

  // Returning all pages
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Over Google analytics */}

      {/* Using Chakra-UI and its custome theme */}
      <ChakraProvider theme={theme}>
        {/* Adding all page layout */}
        <Layout>
          {/* Returning all page body */}
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}