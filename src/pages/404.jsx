// Importing stuffs
import {
  Box,
  Button,
  Center,
  Heading,
  Container,
  Text,
  List,
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
            content="V3.0: 404 Error page, please check the link properly!"
          />

          <meta
            property="og:keywords"
            name="keywords"
            content="error page, 404, error"
          />

          <title>404 Page not Found</title>
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
            <Text
              className="error-heading"
              userSelect={"none"}
              color={"primary"}
            >
              {" "}
              404 Page Not Found
            </Text>
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
            <Container textAlign={"justify"}>
              We&apos;re sorry, but it seems like you&apos;ve stumbled upon a 404 error
              page. The page you were trying to access cannot be found on our
              server. Don&apos;t worry, this happens from time to time. You can try
              checking the URL for typos or mistakes and try again, use the
              search bar to find the information you&apos;re looking for, return to
              the homepage and navigate from there, or contact us if you
              continue to experience difficulties. We apologize for any
              inconvenience and thank you for visiting our website!
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
              overflow={"hidden"}
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
              overflow={"hidden"}
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
