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
            I am a 17-year-old developer who loves open source. I am not an
            expert in any language; I am just good at every language(I Know). I
            just don&apos;t like sticking to one thing, like always doing web or AI.
            I always change steam after one project. I go from the web to the
            game to the AI to the app, and so on. My theory is very weak, but my
            practical knowledge is much better than yours.
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
