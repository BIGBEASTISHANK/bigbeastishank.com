// Exporting Html
import { Heading, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import {
  faHeadphones,
  faLaptop,
  faMobileAlt,
  faMouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Gears() {
  // Variable
  const gears = [
    {
      icon: faLaptop,
      name: "Asus X507UF",
      link: "/laptop"
    },
    {
      icon: faMouse,
      name: "Dell Wireless",
      link: "/keyboard&mouse"
    },
    {
      icon: faHeadphones,
      name: "Eksa E3000",
      link: "/headphone"
    },
    {
      icon: faMobileAlt,
      name: "Redmi Note 9 Pro Max",
      link: "/mobile"
    },
  ];

  // Returning Html
  return (
    <>
      {/* Gears Heading */}
      <Heading
        className="gear-head"
        fontSize={{ lg: "5xl", md: "4xl", sm: "32px", base: "22px" }}
        fontWeight="700"
        mb={{ lg: "20px", base: "15px" }}
        mt={"15px"}
      >
        Gears
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
          {gears.map((item) => (
            <ul key={item.name}>
              <li>
                <ListItem p={"5px"}>
                  <FontAwesomeIcon icon={item.icon} />{" "}
                  <Link
                    isExternal
                    href={item.link}
                    _focus={{ outline: "none" }}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              </li>
            </ul>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}
