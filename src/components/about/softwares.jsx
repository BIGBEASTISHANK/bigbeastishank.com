// Importing stuffs
import { Heading, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";

export default function Softwares() {
  // Variable
  const softwares = [
    {
      name: "VS Code",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Arch Linux",
      link: "https://archlinux.org/",
    },
    {
      name: "Opera",
      link: "https://www.opera.com/",
    },
    {
      name: "Spotify",
      link: "https://spotify.com/",
    },
  ];

  // Returning Html
  return (
    <>
      {/* Software Heading */}
      <Heading
        className="software-heading"
        fontSize={{ lg: "5xl", md: "4xl", sm: "32px", base: "22px" }}
        fontWeight="700"
        mb={{ lg: "20px", base: "15px" }}
        mt={"30px"}
      >
        Software
      </Heading>

      <Box className="software-item">
        <UnorderedList
          fontSize={{
            xl: "25px",
            lg: "20px",
            md: "18px",
            sm: "16px",
            base: "13px",
          }}
          fontWeight="700"
          ml={"50px"}
          mr={"50px"}
        >
          {softwares.map((item) => (
            <li key={item.name}>
              <ListItem p={'5px'}>
                <Link isExternal href={item.link} _focus={{ outline: "none" }}>
                  {item.name}
                </Link>
              </ListItem>
            </li>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}
