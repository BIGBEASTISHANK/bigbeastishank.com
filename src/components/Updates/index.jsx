// Importing Stuffs
import {
  Box,
  Link,
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
          I dont know why but Unity is acting bit werid on Linux and I recently discoverd that my pc can run Unreal Engine. So I am learning unreal engine, I will be making the video of how I learned it and publish my first game from that.
          <br />
          <br />
          <Text fontWeight={"1000"} textDecoration={"underline"}>
            <Link
              _focus={{ outline: "none" }}
              href={"/github"}
              target={"_blank"}
            >
              -/BIGBEASTISHAK (31th Oct, 2023)
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
