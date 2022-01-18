// Importing stuffs
import { Heading, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";

export default function Softwares() {
  // Returning Html
  return (
    <>
      {/* Software Heading */}
      <Heading
        className="about-heading"
        fontSize={{ lg: "5xl", md: "4xl", sm: "32px", base: "22px" }}
        fontWeight="700"
        mb={{ lg: "20px", base: "15px" }}
        mt={"30px"}
      >
        <a>Software</a>
      </Heading>

      <Box className="gears-item">
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
          {/* Visual Studio Code [VSC] */}
          <ListItem>
            📝{" "}
            <Link isExternal href="https://code.visualstudio.com/">
              VS Codes
            </Link>
          </ListItem>

          {/* Operating Software */}
          <ListItem>
            🅰️{" "}
            <Link isExternal href="https://archlinux.org">
              Arch Linux
            </Link>
          </ListItem>

          {/* Web Browser */}
          <ListItem>
            🌐{" "}
            <Link isExternal href="https://www.opera.com/">
              Opera
            </Link>
          </ListItem>

          {/* Music App */}
          <ListItem>
            🎵{" "}
            <Link isExternal href="https://spotify.com">
              Spotify
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}
