// Importing Stuffs
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import NextLink from "next/link";
import { Box, Button, Heading, Text, Skeleton, Link, useMediaQuery } from "@chakra-ui/react";

export default function Post({ postData }) {
  // Variable
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  // Returning Html
  return (
    <>
      <Box className="blogpost">
        <Head>
          <meta
            property="og:description"
            name="description"
            content={postData.description}
          />

          <meta
            property="og:keywords"
            name="keywords"
            content="blog, content, gaming, coding, programming, ishank, pranjal, sucessfull, fail, pass, website, article, blog"
          />

          <title>{postData.title} | BIG BEAST ISHANK</title>
        </Head>

        {/* Post Title */}
        <Heading
          className="title"
          fontSize={"32px"}
          fontWeight="700"
          mb={"35px"}
          mt={"25px"}
          textAlign={isLargerThan480 ? 'justify' : 'left'}
        >
          {postData.title}
        </Heading>

        {/* Post Description */}
        <Text
          className="description"
          fontSize={"20px"}
          fontWeight="700"
          mb={"35px"}
          textAlign={"justify"}
        >
          {postData.description}
        </Text>

        {/* Post Author name */}
        <Text
          className="head-footer"
          fontSize={"19px"}
          mb={{ lg: "15px", base: "10px" }}
          textAlign={"justify"}
        >
          <Link
            href={postData.authlink}
            isExternal
            _focus={{ outline: "none" }}
          >
            {postData.author}
          </Link>{" "}
          / <Date dateString={postData.date} /> / {postData.readtime} read
        </Text>

        {/* Line to divide content */}
        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          ml={"-30px"}
          mr={"-30px"}
          w={"810"}
          h={"2px"}
          mb={6}
          mt={6}
        />

        {/* Main post data */}
        <Box className="content" mb={5}>
          <Box
            textAlign={isLargerThan480 ? 'justify' : 'left'}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </Box>

        {/* Go Back Button */}
        {/* For Mobile and above */}
        <NextLink href="/blog">
          <Button
            d={{ base: "none", sm: "flex" }}
            size={"lg"}
            className="gb-btn"
            _hover={"none"}
            mt={16}
            borderRadius="full"
          >
            Go Back
          </Button>
        </NextLink>

        {/* For small mobile */}
        <NextLink href="/blog">
          <Button
            d={{ base: "flex", sm: "none" }}
            size={"md"}
            className="gb-btn"
            _hover={"none"}
            mt={16}
            borderRadius="full"
          >
            Go Back
          </Button>
        </NextLink>
      </Box>
    </>
  );
}

// Function to get path of posts
export async function getStaticPaths() {
  // Getting posts path
  const paths = getAllPostIds();

  // Returning posts path
  return {
    paths,

    // If post not avaliable send to 404 page
    fallback: false,
  };
}

// Function to get post data
export async function getStaticProps({ params }) {
  // Getting post data
  const postData = await getPostData(params.id);

  // Returning post data
  return {
    props: {
      postData,
    },
  };
}
