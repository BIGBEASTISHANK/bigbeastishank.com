// Importing Stuffs
import {
  Box,
  Link,
  Heading,
  chakra,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function Updates() {
  // Variables
  const { colorMode } = useColorMode();

  // Returning Html
  return (
    <>
      {/* Hero Header */}
      <Box className="hero" id={"updates"}>
        <Heading
          fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
          fontWeight="700"
          textAlign={"center"}
          mb={{ lg: "20px", md: "15px" }}
        >
          <Text className="hero-heading" color={"primary"}>
            Updates & Status
          </Text>
        </Heading>

        {/* Small summery about me */}
        <Box
          className="hero-content"
          fontSize={{
            xl: "25px",
            lg: "20px",
            md: "18px",
            sm: "16px",
            base: "13px",
          }}
          fontWeight="700"
          textAlign={"center"}
        >
          I am working on a new website, that will be more easy to use and much more beautiful then this one. You can track progress on my <Link _focus={{outline: "none"}} color={"secondary"} href={"/sourcecode"} target={"_blank"}>GitHub</Link>.
          <br />
          <br />
          <Text fontWeight={"1000"} textDecoration={"underline"}>
            <Link
              _focus={{ outline: "none" }}
              href={"/github"}
              target={"_blank"}
            >
              -/BIGBEASTISHAK (19th Dec, 2023)
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
