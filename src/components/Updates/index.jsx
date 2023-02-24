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
          If you are exhausted from changing the weights in your home workout
          equipment and getting demotivated but still have to workout and want
          to win a street fight, the only 3 things you need are a heavy weight
          barbell, a boxing bag, and a skipping rope.
          <br />
          <br />
          <Text fontWeight={"1000"} textDecoration={"underline"}>
            <Link
            _focus={{ outline: "none" }}
              href={
                "https://twitter.com/opishank/status/1629056868256735233?s=20"
              }
              target={"_blank"}
            >
              -/BIGBEASTISHAK/Twitter@opishank
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
