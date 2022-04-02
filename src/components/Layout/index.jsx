import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Box>
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
}
