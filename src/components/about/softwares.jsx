// Importing stuffs
import { Heading, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import {
  faLinux,
  faOpera,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Softwares() {
  // Variable
  const softwares = [
    {
      icon: faCode,
      name: "VS Code",
      link: "https://code.visualstudio.com/",
    },
    {
      icon: faLinux,
      name: "Arch Linux",
      link: "https://archlinux.org/",
    },
    {
      icon: faOpera,
      name: "Opera",
      link: "https://www.opera.com/",
    },
    {
      icon: faSpotify,
      name: "Spotify",
      link: "/spotify",
    },
  ];

  // Returning Html
  return (
    <>
      {/* Software Heading */}
      <Heading
        className="software-head"
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
            <ul key={item.name}>
              <ListItem p={"5px"}>
                <FontAwesomeIcon icon={item.icon} />{" "}
                <Link isExternal href={item.link} _focus={{ outline: "none" }}>
                  {item.name}
                </Link>
              </ListItem>
            </ul>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}
