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
            Welcome to my personal portfolio and blog website! My name is
            Ishank, but you can call me BIGBEASTISHANK. I am a 17-year-old
            developer with a passion for creating innovative and impactful
            technology solutions. On this site, you&apos;ll find a showcase of
            my work, including my latest projects and contributions to the tech
            community. My blog will give you a glimpse into my thoughts and
            experiences as a young developer, covering everything from the
            latest developments in the tech world to tips and tricks for
            aspiring developers. Thank you for visiting and I hope you enjoy
            exploring my website!
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
