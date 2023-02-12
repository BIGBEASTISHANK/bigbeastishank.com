// Importing Stuffs
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function About() {
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
            Tools & Languages I use
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
            The programming languages I know are: HTML, CSS, JavaScript, Python, Sass, C#.
          </Text>
          <Text textAlign={"center"}>
            The Softwares I use in my daily projects are: VS Codium, Unity, Brave, Spotify, Discord.
          </Text>
        </Box>
      </Box>
    </>
  );
}
