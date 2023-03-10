// Importing Stuffs
import { Box, Heading, Text, Skeleton, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
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
            Welcome To My Blog & Portfolio Site
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
          <Text textAlign={"justify"}>
            Hello Guys👋, My name is Pranjal A.K.A Ishank S/O Mr. Manish Kumar.
            I am a 17-year-old developer who loves open source & very concerned
            about privacy.Previously, I was hopping from web development to AI
            to apps and every other field, but now I am stuck on game
            development, and I will pursue my career in game development only. I
            am not an expert in any language, I am just good at every language I
            Know. My theory is very weak, but my practical knowledge is much
            better than yours😏(JK).
          </Text>
        </Box>

        <Skeleton
          h={"2px"}
          endColor={colorMode === "dark" ? "light" : "dark"}
          startColor={colorMode === "dark" ? "light" : "dark"}
          mb={"1%"}
          mt={"1%"}
        />
      </Box>
    </>
  );
}
