// Importing Stuffs
import {
  Box,
  Center,
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
          New Devlog Out!!!
          <br />
          <Center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oyjLm1sqIwc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Center>
          <chakra.br userSelect={"none"} />
          <chakra.br userSelect={"none"} />
          <Text fontWeight={"1000"} textDecoration={"underline"}>
            Date: 15th March 2023
          </Text>
        </Box>
      </Box>
    </>
  );
}
