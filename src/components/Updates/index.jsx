// Importing Stuffs
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function Updates() {
  // Variables
  const { colorMode } = useColorMode();
  
  // Returning Html
  return (
    <>
      {/* Hero Header */}
      <Box className="hero">
        <Heading
          fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
          fontWeight="700"
          textAlign={"center"}
          mb={{ lg: "20px", md: "15px" }}
        >
          <Text className="hero-heading" color={"primary"}>
            Updates
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
        >
          <Text textAlign={"center"}>
            I am currently working a new game, trying to figure out new stuffs.
          </Text>
        </Box>
      </Box>
    </>
  );
}
