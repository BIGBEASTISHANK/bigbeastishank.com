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
          Currently I am working on a new game that might be completed in a week
          or so, and I am also learning C++ for the switch I am going to make
          from Unity to Unreal. Unity uses C#, while Unreal uses C++, and C++
          will help me more to get a job; almost all the game development
          companies find C++ coders instead of C#.
          <br />
          <br />
          <Text fontWeight={"1000"} textDecoration={"underline"}>
            Date: 5th March 2023
          </Text>
        </Box>
      </Box>
    </>
  );
}
