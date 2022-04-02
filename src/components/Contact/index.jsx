import {
  Box,
  FormControl,
  FormLabel,
  chakra,
  Input,
  Textarea,
  Heading,
  useMediaQuery,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  const [isSmallerThen590] = useMediaQuery("(max-width: 590px)");

  return (
    <>
    <Box bg={useColorModeValue("lightBG", "dark")}>
      <Box p={5} pt={10} maxW="7xl" mx={"auto"} id={"contact"}>
        <Heading
          pt="20px"
          fontSize={isSmallerThen590 ? "30px" : "45px"}
          textAlign="center"
          mb="30px"
          >
          Contact Me
        </Heading>
        <FormControl isRequired>
          <form action="https://formspree.io/f/mrgravyr" method="POST">
            {/* Name */}
            <chakra.label
              htmlFor="name"
              fontSize={isSmallerThen590 ? "15px" : "25px"}
            >
              Full Name
            </chakra.label>
            <Input
              fontSize={isSmallerThen590 ? "15px" : "20px"}
              id="name"
              type="name"
              name="Name"
              mb={"30px"}
              outline={"2px solid"}
            />

            {/* Email */}
            <chakra.label
              htmlFor="email"
              fontSize={isSmallerThen590 ? "15px" : "25px"}
            >
              Email Address
            </chakra.label>
            <Input
              fontSize={isSmallerThen590 ? "15px" : "20px"}
              id="email"
              type="email"
              name="E-Mail"
              mb={"30px"}
              outline={"2px solid"}
            />

            {/* Messages */}
            <chakra.label
              htmlFor="message"
              fontSize={isSmallerThen590 ? "15px" : "25px"}
            >
              Message
            </chakra.label>
            <Textarea
              id="message"
              type="text"
              name="Message"
              mb={"30px"}
              outline={"2px solid"}
            />

            {/* Submit Button */}
            <Button
              colorScheme="blue"
              mt={"10px"}
              type="submit"
              _focus={{ outline: "none" }}
            >
              Submit
            </Button>
          </form>
        </FormControl>
      </Box>
          </Box>
    </>
  );
}
