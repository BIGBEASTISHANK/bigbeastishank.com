import {
  Box,
  Wrap,
  Text,
  Heading,
  Divider,
  Skeleton,
  WrapItem,
  useColorMode,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3,
  faDiscord,
  faHtml5,
  faJs,
  faLinux,
<<<<<<< HEAD
  faOpera,
=======
>>>>>>> 1460628 (MY Stuffs changes)
  faPython,
  faSass,
  faSpotify,
  faUnity,
  faWindows,
<<<<<<< HEAD
} from "@fortawesome/free-brands-svg-icons";
import { faC, faCode } from "@fortawesome/free-solid-svg-icons";
=======
  faAndroid
} from "@fortawesome/free-brands-svg-icons";
import { faC, faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 1460628 (MY Stuffs changes)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MySkills() {
  const [isSmallerThen590] = useMediaQuery("(max-width: 590px)");
  const [isSmallerThen622] = useMediaQuery("(max-width: 622px)");

  const { colorMode } = useColorMode();

  // Language
  const language = [
    {
      name: "Html",
      icon: faHtml5,
    },
    {
      name: "CSS",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      icon: faJs,
    },
    {
      name: "Python",
      icon: faPython,
    },
    {
      name: "SASS",
      icon: faSass,
    },
    {
      name: "C#",
      icon: faC,
    },
  ];

  // Software
  const software = [
    {
<<<<<<< HEAD
      name: "VSC",
=======
      name: "VSCodium",
>>>>>>> 1460628 (MY Stuffs changes)
      icon: faCode,
    },
    {
      name: "Spotify",
      icon: faSpotify,
    },
    {
<<<<<<< HEAD
      name: "Opera",
      icon: faOpera,
=======
      name: "Brave",
      icon: faGlobe,
>>>>>>> 1460628 (MY Stuffs changes)
    },
    {
      name: "Unity",
      icon: faUnity,
    },
    {
      name: "Discord",
      icon: faDiscord,
    },
  ];

  // Platform
  const platform = [
    {
      name: "Linux",
      icon: faLinux,
    },
    {
<<<<<<< HEAD
      name: "Windows",
      icon: faWindows,
=======
      name: "Android",
      icon: faAndroid,
>>>>>>> 1460628 (MY Stuffs changes)
    },
  ];

  return (
    <>
      <Skeleton
        h={"2px"}
        endColor={colorMode === "dark" ? "light" : "dark"}
        startColor={colorMode === "dark" ? "light" : "dark"}
      />
      <Box w="full" bg={useColorModeValue("lightBG", "none")}>
        <Box maxW={"7xl"} mx={"auto"} id="skills">
          <Heading
            pt="20px"
            fontSize={isSmallerThen590 ? "30px" : "45px"}
            ml={isSmallerThen622 ? "19px" : "40px"}
          >
            My Stuffs
          </Heading>

          {/* Language Section */}
          <Text
            mt={"20px"}
            ml={isSmallerThen622 ? "19px" : "45px"}
            opacity={"0.7"}
            maxW={"200px"}
          >
            Languages
            <Skeleton
              h={"1px"}
              mt={"10px"}
              mb={"10px"}
              endColor={colorMode === "dark" ? "light" : "dark"}
              startColor={colorMode === "dark" ? "light" : "dark"}
            />
          </Text>

          {/* Skills icon */}
          <Wrap mt={"5px"} ml={isSmallerThen622 ? "19px" : "45px"}>
            {language.map((item) => (
              <WrapItem key={item.name}>
                <Box bg={"#22272E"} p={"10px"} m={"auto"} borderRadius="5px">
                  <FontAwesomeIcon
                    icon={item.icon}
                    fontSize={isSmallerThen590 ? "50px" : "75px"}
                    color={"white"}
                  />
                  <Divider mt="10px" />
                  <Text
                    textAlign="center"
                    color={"white"}
                    fontSize={isSmallerThen590 ? "11px" : ""}
                  >
                    {item.name}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>

          {/* Software Section */}
          <Text
            mt={"20px"}
            ml={isSmallerThen622 ? "19px" : "45px"}
            opacity={"0.7"}
            maxW={"200px"}
          >
            Softwares
            <Skeleton
              h={"1px"}
              mt={"10px"}
              mb={"10px"}
              endColor={colorMode === "dark" ? "light" : "dark"}
              startColor={colorMode === "dark" ? "light" : "dark"}
            />
          </Text>

          {/* Skills icon */}
          <Wrap mt={"5px"} ml={isSmallerThen622 ? "19px" : "45px"}>
            {software.map((item) => (
              <WrapItem key={item.name}>
                <Box bg={"#22272E"} p={"10px"} m={"auto"} borderRadius="5px">
                  <FontAwesomeIcon
                    icon={item.icon}
                    fontSize={isSmallerThen590 ? "50px" : "75px"}
                    color={"white"}
                  />
                  <Divider mt="10px" />
                  <Text
                    textAlign="center"
                    color={"white"}
                    fontSize={isSmallerThen590 ? "11px" : ""}
                  >
                    {item.name}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>

          {/* Platform */}
          <Text
            mt={"20px"}
            ml={isSmallerThen622 ? "19px" : "45px"}
            opacity={"0.7"}
            maxW={"200px"}
          >
            Platform
            <Skeleton
              h={"1px"}
              mt={"10px"}
              mb={"10px"}
              endColor={colorMode === "dark" ? "light" : "dark"}
              startColor={colorMode === "dark" ? "light" : "dark"}
            />
          </Text>

          {/* Skills icon */}
          <Wrap mt={"5px"} ml={isSmallerThen622 ? "19px" : "45px"}>
            {platform.map((item) => (
              <WrapItem key={item.name}>
                <Box bg={"#22272E"} p={"10px"} m={"auto"} borderRadius="5px">
                  <FontAwesomeIcon
                    icon={item.icon}
                    fontSize={isSmallerThen590 ? "50px" : "75px"}
                    color={"white"}
                  />
                  <Divider mt="10px" />
                  <Text
                    textAlign="center"
                    color={"white"}
                    fontSize={isSmallerThen590 ? "11px" : ""}
                  >
                    {item.name}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        {/* Divider */}
        <Skeleton
          h={"2px"}
          mt={"20px"}
          endColor={colorMode === "dark" ? "light" : "dark"}
          startColor={colorMode === "dark" ? "light" : "dark"}
        />
      </Box>
    </>
  );
}
