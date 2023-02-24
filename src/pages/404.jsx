// Importing stuffs
import {
  Box,
  Button,
  Center,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

export default function Errorpage() {
  // Returning Html
  return (
    <>
      <Box className="error-page">
        <Head>
          <meta
            property="og:description"
            name="description"
            content="V1.0: 404 Error page, please check the link properly!"
          />

          <meta
            property="og:keywords"
            name="keywords"
            content="error page, 404, error"
          />

          <title>V1:404 Page not Found</title>
        </Head>

        <Center>
          {/* 404 Heading */}
          <Heading
            fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
            fontWeight="700"
            mb={{ sm: "50px", base: "25px" }}
            mt={{ sm: "100px", base: "25px" }}
            textAlign={"center"}
          >
            <Text className="error-heading"> 404 Page Not Found</Text>
          </Heading>
        </Center>

        <Center>
          {/* 404 page explanation */}
          <Box
            className="error-para"
            fontSize={{
              xl: "25px",
              lg: "20px",
              md: "18px",
              sm: "16px",
              base: "13px",
            }}
            fontWeight="700"
            mb={{ sm: "80px", base: "40px" }}
          >
            <Container textAlign={"center"}>
              Hmm, so you are here, This page is removed by owner or I guess you
              miss typed the <b>URL</b>. Please check the url again or click
              below to go back.
            </Container>
          </Box>
        </Center>

        {/* Go Back button */}
        <Center>
          {/* For Mobile and above */}
          <NextLink href="/">
            <Button
              d={{ base: "none", sm: "flex" }}
              size={"lg"}
              className="gb-btn"
              _hover={"none"}
              mb={7}
            >
              Go Back To Home
            </Button>
          </NextLink>

          {/* For small mobile */}
          <NextLink href="/">
            <Button
              d={{ base: "flex", sm: "none" }}
              size={"md"}
              className="gb-btn"
              _hover={"none"}
              mb={7}
            >
              Go Back To Home
            </Button>
          </NextLink>
        </Center>
      </Box>
    </>
  );
}
