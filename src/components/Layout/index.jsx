// Importing Stuffs
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  // Returning Html
  return (
    <>
      {/* Head Tag to put Title and meta tags */}
      <Head>
        {/* common meta data */}
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta property="og:locale" content="en_IN" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" name="type" content="website" />

        <meta property="og:author" name="author" content="BIG BEAST ISHANK" />

        <meta property="og:image" name="image" content="/favicon.ico" />

        {/* Each for different page */}
        <meta
          property="og:description"
          name="description"
          content="This me Ishank. This is my portfolio wesite, You can see my projects over here."
        />

        <meta
          property="og:keywords"
          name="keywords"
          content="Portfolio, Projects, HTML, CSS, Python, C#, JavaScript, Next js"
        />

        {/* Title */}
        <title>BIG BEAST ISHANK</title>
      </Head>
      <Box maxW="99%" mx="auto">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Body */}
        {children}

        {/* Footer */}
        <Footer />
      </Box>
    </>
  );
}
