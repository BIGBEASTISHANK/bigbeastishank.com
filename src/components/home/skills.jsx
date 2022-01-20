// Importing Stuffs
import {
  Flex,
  Box,
  Skeleton,
  Heading,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function Skills() {
  // Variable
  //
  // Skills part for python
  const [python_skill_bar, setPython_skill_bar] = React.useState("");
  const [python_skill_bar_percent, setPython_skill_bar_percent] =
    React.useState("0%");

  // Skills part for html
  const [html_skill_bar, setHtml_skill_bar] = React.useState("");
  const [html_skill_bar_percent, setHtml_skill_bar_percent] =
    React.useState("0%");

  // Skills part for css
  const [css_skill_bar, setCss_skill_bar] = React.useState("");
  const [css_skill_bar_percent, setCss_skill_bar_percent] =
    React.useState("0%");

  // Skills part for js
  const [js_skill_bar, setJs_skill_bar] = React.useState("");
  const [js_skill_bar_percent, setJs_skill_bar_percent] = React.useState("0%");

  // Skills part for c#
  const [cs_skill_bar, setCs_skill_bar] = React.useState("");
  const [cs_skill_bar_percent, setCs_skill_bar_percent] = React.useState("0%");

  function show_skills() {
    // Skills part for python
    setPython_skill_bar("python_skill_bar");
    setPython_skill_bar_percent("92%");

    // Skills part for html
    setHtml_skill_bar("html_skill_bar");
    setHtml_skill_bar_percent("98%");

    // Skills part for css
    setCss_skill_bar("css_skill_bar");
    setCss_skill_bar_percent("95%");

    // Skills part for js
    setJs_skill_bar("js_skill_bar");
    setJs_skill_bar_percent("52%");

    // Skills part for c#
    setCs_skill_bar("cs_skill_bar");
    setCs_skill_bar_percent("11%");
  }

  const lang_name = [
    {
      name: "Python",
      class: "python",
      percent: python_skill_bar_percent,
      skillBar: python_skill_bar,
    },
    {
      name: "HTML",
      class: "html",
      percent: html_skill_bar_percent,
      skillBar: html_skill_bar,
    },
    {
      name: "CSS",
      class: "css",
      percent: css_skill_bar_percent,
      skillBar: css_skill_bar,
    },
    {
      name: "JavaScript",
      class: "js",
      percent: js_skill_bar_percent,
      skillBar: js_skill_bar,
    },
    {
      name: "C#",
      class: "cs",
      percent: cs_skill_bar_percent,
      skillBar: cs_skill_bar,
    },
  ];

  // Returning Html
  return (
    <>
      {/* Skills Section Header */}
      <Box className="skills">
        <Center>
          <Heading
            fontSize={{ lg: "5xl", md: "4xl", sm: "32px", base: "22px" }}
            fontWeight="700"
            mb={{ lg: "20px", base: "15px" }}
            mt={"15px"}
          >
            <Text className="skills-heading">Skills</Text>
          </Heading>
        </Center>

        {/* CLick to show skill button */}
        <Center>
          {/* For Mobile and above */}
          <Button
            className="skills-btn"
            d={{ base: "none", sm: "flex" }}
            size={"md"}
            _hover={"none"}
            fontSize={{ xl: "18px", md: "15px", base: "13px" }}
            onClick={show_skills}
          >
            Click To Show Skills
          </Button>

          {/* For small mobile */}
          <Button
            className="skills-btn"
            d={{ base: "flex", sm: "none" }}
            size={"sm"}
            _hover={"none"}
            fontSize={{ xl: "18px", md: "15px", base: "13px" }}
            onClick={show_skills}
          >
            Click To Show Skills
          </Button>
        </Center>

        {/* My Language Bar */}
        <Box className={"skills_lang"} mt={7}>
          {lang_name.map((item) => (
            <li key={item.class}>
              <Box className={item.class}>
                <Box
                  fontSize={{
                    xl: "25px",
                    lg: "20px",
                    md: "18px",
                    sm: "16px",
                    base: "13px",
                  }}
                  fontWeight="700"
                  mt={5}
                >
                  <Flex>
                    <Text mr={4}>
                      <Text className="language-name">{item.name}</Text>
                    </Text>
                    <Text>{item.percent}</Text>
                  </Flex>
                </Box>

                <Flex>
                  <Skeleton
                    className={"default_lang_bar" + " " + item.skillBar}
                    h={"20px"}
                    mt={1}
                  />
                </Flex>
              </Box>
            </li>
          ))}
        </Box>
      </Box>
    </>
  );
}
