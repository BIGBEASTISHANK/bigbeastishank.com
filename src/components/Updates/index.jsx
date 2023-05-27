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
          Please update your Android devices. Currently, all Androids are
          vulnerable to an attack called &quot;BrutePrint&quot;, It is a &quot;Man in the
          Middle&quot;, It makes your finger print unlock useless, although it takes
          around 2 to 14 hours depending on the number of finger prints you put
          on your phone. Android doesn&apos;t protect your biometric data properly.
          The hardware required to perform this attack is worth 2300 INR (15
          dollars). It was tested on the following devices: Xiaomi MI 11 Ultra,
          Vivo X60 Pro, OnePlus 7 Pro, Oppo Reno Ace, Samsung Galaxy S10+, and
          OnePlus 5T
          <br />
          <br />
          <Text fontWeight={"1000"} textDecoration={"underline"}>
            <Link
              _focus={{ outline: "none" }}
              href={"/github"}
              target={"_blank"}
            >
              -/BIGBEASTISHAK (28th May, 2023)
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
