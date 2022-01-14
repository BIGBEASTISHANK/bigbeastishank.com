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
} from "@chakra-ui/react";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        id={"nav-item"}
        fontSize={{ xl: "18px", md: "15px" }}
        color={"white"}
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

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            className="contact-header"
            fontSize={"29px"}
            fontWeight={"1000"}
          >
            Contact Me
          </DrawerHeader>

          <Skeleton startColor="pink.500" endColor="orange.500" h={"4px"} />

          <DrawerBody bg={"dark"}>
            <FormControl isRequired>
              <form action="https://formspree.io/f/mrgravyr" method="POST">
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input id="name" type="name" name="Name" mb={"10px"} />

                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" type="email" name="E-Mail" mb={"10px"} />

                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea id="message" type="text" name="Message" mb={"10px"} />

                <Button colorScheme="blue" mt={"10px"} type="submit">
                  Submit
                </Button>
              </form>
            </FormControl>
          </DrawerBody>

          <Skeleton startColor="pink.500" endColor="orange.500" h={"4px"} />

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
