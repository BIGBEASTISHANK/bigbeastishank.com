// Importing Stuffs
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  // Returning Htmlo
  return (
    <>
      <Box
        alignItems={"center"}
        m={"auto"}
        mt={"20px"}
        mb={"20px"}
        maxW={"810px"}
      >
        {/* Head Tag to put Title and meta tags */}
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="This is BIG BEAST ISHANK website. Here you can know about his qualification and how much he knows in coding."
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Title */}
          <title>BIG BEAST ISHANK</title>
        </Head>

        {/* Navbar Component */}
        <Navbar />

        {/* Main Body */}
        <Box
          className={"main-content"}
          ml={"30px"}
          mt={{ md: "0", sm: "20px" }}
          mr={"30px"}
        >
          {/* Body Of every page */}
          {children}
        </Box>

        {/* Footer */}
        <Box
          className={"footer"}
          ml={"30px"}
          mt={{ md: "0", sm: "20px" }}
          mr={"30px"}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}
