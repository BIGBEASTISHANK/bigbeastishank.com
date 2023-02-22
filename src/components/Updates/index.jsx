// Importing Stuffs
import { Box, Center, Heading, Text, useColorMode } from "@chakra-ui/react";
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
            Updates & Status
          </Text>
        </Heading>

        {/* Small summery about me */}
        <Center>
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
            userSelect={"none"}
            textAlign={"center"}
          >
            <blockquote
              className="twitter-tweet"
              data-dnt="true"
              data-theme="dark"
            >
              <p lang="en" dir="ltr">
                We will get Tate back{" "}
                <a href="https://twitter.com/hashtag/FreeTopG?src=hash&amp;ref_src=twsrc%5Etfw">
                  #FreeTopG
                </a>{" "}
                <a href="https://twitter.com/hashtag/FreeTheTates?src=hash&amp;ref_src=twsrc%5Etfw">
                  #FreeTheTates
                </a>{" "}
                <a href="https://t.co/MALAjDCTEM">https://t.co/MALAjDCTEM</a>
              </p>
              &mdash; BIGEBEASTISHANK (@opishank){" "}
              <a href="https://twitter.com/opishank/status/1628340495758897152?ref_src=twsrc%5Etfw">
                February 22, 2023
              </a>
            </blockquote>{" "}
          </Box>
        </Center>
      </Box>
    </>
  );
}
