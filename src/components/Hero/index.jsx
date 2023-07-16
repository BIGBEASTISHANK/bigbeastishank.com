// Importing Stuffs
import {
  Box,
  Heading,
  Text,
  Skeleton,
  useColorMode,
  chakra,
} from "@chakra-ui/react";
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
            Hey there, fellow adventurers! 👋 My name is Pranjal, but you can
            call me Ishank S/O Manish Kumar. At just 17 years old, I&apos;m a
            passionate developer who&apos;s all about open source and a staunch
            defender of privacy. I&apos;ve journeyed through the vast realms of
            web development, AI development, and app development, exploring
            every field that piqued my curiosity. But now, I&apos;ve discovered
            my true calling: game development. It&apos;s here that I&apos;ve
            found my creative sanctuary, and I&apos;m determined to forge a
            thrilling career in this captivating realm.
            <chakra.br />
            <chakra.br />
            While I won&apos;t claim to be an expert in any specific programming
            language, I&apos;ve become quite the versatile polyglot. From Python
            to C++, HTML to JavaScript, I&apos;ve dabbled in many tongues of
            code. My practical prowess shines brighter than theoretical
            knowledge, which I&apos;m constantly honing to push the boundaries
            of what&apos;s possible in game development. Oh, and let&apos;s not
            forget, I&apos;m always up for a friendly challenge – although
            I&apos;ll admit, your practical skills might give mine a run for
            their money! 😏 (Just kidding, of course!)
            <chakra.br />
            <chakra.br />
            But enough about me – let&apos;s embark on this thrilling adventure
            together. Join me as I weave immersive worlds, conjure captivating
            gameplay, and bring dreams to life with lines of code. Together,
            we&apos;ll shape unforgettable experiences that transport players
            into realms filled with wonder, excitement, and endless
            possibilities. Welcome to my realm of game development, where
            passion meets pixels and imagination knows no bounds.
            <chakra.br />
            <chakra.br />
            And yaa the above lines are AI generated, I don&apos;t speak like
            that lol. Btw check my blogs below and my projects in above
            navigation bar.
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
