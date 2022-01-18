// Importing Stuffs
import {
  Flex,
  Box,
  Skeleton,
  Heading,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import Skills from "../components/home/skills";

export default function Index() {
  // Returning Html
  return (
    <>
      <Head>
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
            Hello👋My name is Ishank. I am a self-taught freelance developer. My
            prefered language is Python, JavaScript, CSS, SCSS, C#, HTML. To
            know more about me see about page.
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
