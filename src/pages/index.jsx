// Importing Stuffs
import { Box, Skeleton, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Skills from "../components/home/skills";

export default function Index() {
  // Returning Html
  return (
    <>
      <Head>
        <meta
          property="og:keywords"
          name="keywords"
          content="home, landing page, header, hero, ishank, pranjal"
        />
        <title>Home | BIG BEAST ISHANK</title>
      </Head>

      {/* Hero Header */}
      <Box className="hero">
        <Heading
          fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
          fontWeight="700"
          mb={{ lg: "20px", md: "15px" }}
        >
          <Text className="hero-heading">I am Ishank</Text>
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
            Hello Goiz👋, My name is Ishank. I am a 16-year-old developer who
            loves open source. I am not an expert in any language; I am just
            good at every language(I Know). I just don`t like sticking to one thing,
            like always doing web or AI. I always change steam after one
            project. I go from the web to the game to the AI to the
            app, and so on. My theory is very weak, but my practical
            knowledge is much better than yours.
          </Text>
        </Box>

        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          ml={"-30px"}
          mr={"-30px"}
          w={"810"}
          h={"2px"}
          mb={4}
          mt={4}
        />
      </Box>

      {/* Skills Section */}
      <Skills />
    </>
  );
}
