// Importing Stuffs
import {
  Text,
  Skeleton,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Contact() {
  // Variable
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contact_bg = useColorModeValue("lightMBg", "dark");

  // Return Html
  return (
    <>
      {/* Name in navbar */}
      <Text
        id={"nav-item"}
        fontSize={{ xl: "18px", md: "15px" }}
        color={"light"}
        ml={{ md: "2.5px", base: "0px" }}
        mr={"2.5px"}
        pl={"10px"}
        pr={"10px"}
        _hover={{ bg: "#D51B90", borderRadius: "25px" }}
        onClick={onOpen}
        cursor={"pointer"}
      >
        Contact
      </Text>

      {/* Contact slide thinggy */}
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* Contact Header */}
          <DrawerHeader
            className="contact-header"
            fontSize={"29px"}
            fontWeight={"1000"}
            color={"light"}
          >
            Contact Me
          </DrawerHeader>

          {/* Sperate line */}
          <Skeleton startColor="pink.500" endColor="orange.500" h={"4px"} />

          {/* Place to fill details */}
          <DrawerBody bg={contact_bg}>
            <FormControl isRequired>
              <form action="https://formspree.io/f/mrgravyr" method="POST">
                {/* Name */}
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input
                  id="name"
                  type="name"
                  name="Name"
                  mb={"10px"}
                  outline={"2px solid"}
                />

                {/* Email */}
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="E-Mail"
                  mb={"10px"}
                  outline={"2px solid"}
                />

                {/* Messages */}
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  type="text"
                  name="Message"
                  mb={"10px"}
                  outline={"2px solid"}
                />

                {/* Submit Button */}
                <Button colorScheme="blue" mt={"10px"} type="submit">
                  Submit
                </Button>
              </form>
            </FormControl>
          </DrawerBody>

          {/* Footer Line */}
          <Skeleton startColor="pink.500" endColor="orange.500" h={"4px"} />

          {/* Close buton */}
          <DrawerFooter bg={"lightMBg"}>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              bg={"black"}
              color={"light"}
              _hover={{ bg: "light", color: "dark" }}
              outline={"2px solid"}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
