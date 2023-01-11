import React from "react";
import {
  chakra,
  Box,
  Heading,
  Flex,
  Text,
  useColorModeValue,
  useMediaQuery,
  useColorMode,
  Skeleton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Date from "../date";
import projectData from "../../Data/Projects/data";

export default function Projects() {
  const [isSmallerThen590] = useMediaQuery("(max-width: 590px)");

  const { colorMode } = useColorMode();

  const ucmv1 = useColorModeValue("white", "gray.800");
  const ucmv2 = useColorModeValue("gray.600", "gray.400");
  const ucmv3 = useColorModeValue("gray.700", "white");
  const ucmv4 = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      <Box
        bg={useColorModeValue("lightBG", "gray.600")}
        p={isSmallerThen590 ? 2 : 50}
        w="full"
        alignItems="center"
        justifyContent="center"
        id={"projects"}
      >
        <Heading
          pt="20px"
          fontSize={isSmallerThen590 ? "30px" : "45px"}
          textAlign="center"
          mb="30px"
        >
          Projects
        </Heading>
        {/* Card start */}
        {projectData.map((item) => (
          <Box
            key={item.name}
            mx="auto"
            px={isSmallerThen590 ? 2 : 8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg={ucmv1}
            maxW="5xl"
            mb={"20px"}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <chakra.span
                fontSize={isSmallerThen590 ? "14px" : "sm"}
                color={ucmv2}
              >
                <Date dateString={item.date} />
              </chakra.span>
              <ChakraLink
                px={isSmallerThen590 ? 1 : 3}
                py={1}
                bg="gray.600"
                color="gray.100"
                fontSize={isSmallerThen590 ? "12px" : "sm"}
                fontWeight="700"
                rounded="md"
                _hover={{ bg: "gray.500" }}
                href={item.sBtnLink}
                _focus={{ outline: "none" }}
                isExternal
              >
                {item.sBtnStr}
              </ChakraLink>
            </Flex>

            <Box mt={2}>
              <Text
                fontSize={isSmallerThen590 ? "20px" : "2xl"}
                textAlign={"justify"}
                color={ucmv3}
                fontWeight="700"
              >
                {item.name}
              </Text>
              <chakra.p
                mt={2}
                color={ucmv4}
                textAlign={"justify"}
                fontSize={isSmallerThen590 ? "12px" : ""}
              >
                {item.description}
              </chakra.p>
            </Box>

            <Flex justifyContent="space-between" alignItems="center" mt={4}>
              <ChakraLink
                bg="primary"
                fontSize={isSmallerThen590 ? "12px" : ""}
                p="5px"
                borderRadius={"5px"}
                color={"white"}
                _hover={{ bg: "secondary" }}
                _focus={{ outline: "none" }}
                href={item.sourcecode}
                isExternal
              >
                Source Code
              </ChakraLink>
            </Flex>
          </Box>
        ))}
        {/* Card End */}
      </Box>

      {/* Divider */}
      <Skeleton
        h={"2px"}
        endColor={colorMode === "dark" ? "light" : "dark"}
        startColor={colorMode === "dark" ? "light" : "dark"}
      />
    </>
  );
}
