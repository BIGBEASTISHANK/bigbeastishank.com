// Importing Stuffs
import {
  Box,
  Center,
  Heading,
  Link,
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
          At this point I want to change my name from BIGBEASTISHANK to "Project
          Abandoneding Ishank", litrally I abandoned one more project.
          <br />
          <br />
          <Text fontWeight={"1000"} textDecoration={"underline"}>
            Date: 6th March 2023
          </Text>
        </Box>
      </Box>
    </>
  );
}
