import { getSortedPostsData } from "../../lib/posts";
import NextLink from "next/link";
import Date from "../../components/date";
import { Box, Heading, Text, Skeleton } from "@chakra-ui/react";
import Head from "next/head";

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog | BIG BEAST ISHANK</title>
      </Head>

      <Box className="blog">
        <Heading
          className="heading"
          fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
          fontWeight="700"
          textAlign={"center"}
          mb={{ lg: "20px", md: "15px" }}
        >
          <Text className="head">My Blog</Text>
        </Heading>

        <Box
          className="content"
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
          <Text>
            I write my blogs over here. You can see all the post by just
            clicking on title of the blogs. I hope you enjoy
          </Text>
        </Box>

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

        {allPostsData.map(({ id, date, title, description }) => (
          <li key={id}>
            {/********************************/}

            <Box mb={50} className="posts">
              <Heading
                fontSize={{ lg: "3xl", md: "2xl", sm: "24px", base: "16px" }}
                fontWeight="700"
                mb={{ lg: "10px", base: "5px" }}
                mt={"15px"}
              >
                <NextLink href={`/blog/${id}`}>
                  <Text className="title" cursor={"pointer"}>
                    {title}
                  </Text>
                </NextLink>
              </Heading>

              {/**********/}

              <Text
                className="description"
                fontSize={{
                  xl: "19px",
                  md: "15px",
                  sm: "14px",
                  base: "11px",
                }}
                fontWeight="700"
                mb={{ lg: "15px", base: "10px" }}
              >
                {description}
              </Text>

              <Text
                className="date"
                fontSize={{
                  xl: "16px",
                  md: "12px",
                  sm: "10px",
                  base: "7px",
                }}
              >
                <Date dateString={date} />
              </Text>

              {/**********/}
            </Box>
          </li>
        ))}
        {/********************************/}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
