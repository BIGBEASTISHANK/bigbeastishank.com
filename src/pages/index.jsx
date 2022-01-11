import { Flex, Box, Skeleton, Heading, Text, Center, Button, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React from 'react'

export default function Index() {

  const [python_skill_bar, setPython_skill_bar] = React.useState('')
  const [html_skill_bar, setHtml_skill_bar] = React.useState('')
  const [css_skill_bar, setCss_skill_bar] = React.useState('')
  const [js_skill_bar, setJs_skill_bar] = React.useState('')
  const [cs_skill_bar, setCs_skill_bar] = React.useState('')

  function show_skills() {
    setPython_skill_bar('python_skill_bar');
    setHtml_skill_bar('html_skill_bar');
    setCss_skill_bar('css_skill_bar');
    setJs_skill_bar('js_skill_bar');
    setCs_skill_bar('cs_skill_bar');
  }

  return (
    <>
      {/* Html section */}
      <Head>
        <title>HOME | BIG BEAST ISHANK</title>
      </Head>

      {/* Hero section */}
      <Box className="hero">
        <Heading className='hero-heading'
          fontSize={{ lg: '6xl', md: '5xl', sm: '39px', base: '25px' }} fontWeight='700'
          mb={{ lg: '20px', md: '15px' }}>

          <a>I am Ishank</a>

        </Heading>

        <Box className="hero-content"
          fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700">
          <Text>
            Hello 👋. My name is Ishank as you know. I am a self-taught freelance developer. My prefered language is Python, JavaScript, CSS, SCSS, C#, HTML. To know more about me see about page.
          </Text>
        </Box>

        <Skeleton

          ml={'-30px'} mr={'-30px'} w={'810'} h={'2px'} mb={4} mt={4} />
      </Box>

      {/* Skills Section */}
      <Box className="skills">
        <Center>
          <Heading className='skills-heading'
            fontSize={{ lg: '5xl', md: '4xl', sm: '32px', base: '22px' }} fontWeight='700'
            mb={{ lg: '20px', base: '15px' }} mt={'15px'}>

            <a>Skills</a>

          </Heading>
        </Center>

        <Center>
          {/* For Mobile and above */}
          <Button className="skills-btn"
            d={{ base: 'none', sm: 'flex' }}
            size={'md'}
            _hover={"none"}
            fontSize={{ xl: '18px', md: '15px', base: '13px' }}
            onClick={show_skills}>

            Click To Show Skills

          </Button>

          {/* For small mobile */}
          <Button className="skills-btn"
            d={{ base: 'flex', sm: 'none' }}
            size={'sm'}
            _hover={"none"}
            fontSize={{ xl: '18px', md: '15px', base: '13px' }}
            onClick={show_skills}>

            Click To Show Skills

          </Button>
        </Center>

        <Box className={"skills_lang"} mt={7}>

          {/* Python bar */}
          <Box className={'python'}>
            <Box
              fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
              alignContent={"center"}
              alignItems={'center'}>
              <Flex>
                <Text mr={4}><a>Python</a></Text>
                <Text>92%</Text>
              </Flex>
            </Box>

            <Flex>
              <Skeleton className={'default_lang_bar' + ' ' + python_skill_bar} h={'20px'} mt={1} />
            </Flex>
          </Box>

          {/* HTML skill bar */}
          <Box className={'html'}>
            <Box
              fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
              mt={4}
              alignContent={"center"}
              alignItems={'center'}>
              <Flex>
                <Text mr={4}><a>HTML</a></Text>
                <Text>98%</Text>
              </Flex>
            </Box>

            <Flex>
              <Skeleton className={'default_lang_bar' + ' ' + html_skill_bar} h={'20px'} />
            </Flex>
          </Box>

          {/* CSS skill bar */}
          <Box className={'css'}>
            <Box
              fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
              mt={4}
              alignContent={"center"}
              alignItems={'center'}>
              <Flex>
                <Text mr={4}><a>CSS</a></Text>
                <Text>95%</Text>
              </Flex>
            </Box>

            <Flex>
              <Skeleton className={'default_lang_bar' + ' ' + css_skill_bar} h={'20px'} mt={1} />
            </Flex>
          </Box>

          {/* JavaScript Skill bar */}
          <Box className={'javascript'}>
            <Box
              fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
              mt={4}
              alignContent={"center"}
              alignItems={'center'}>
              <Flex>
                <Text mr={4}><a>JavaScript</a></Text>
                <Text>52%</Text>
              </Flex>
            </Box>

            <Flex>
              <Skeleton className={'default_lang_bar' + ' ' + js_skill_bar} h={'20px'} mt={1} />
            </Flex>
          </Box>

          {/* C# Skill bar */}
          <Box className={'cs'}>
            <Box
              fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
              mt={4}
              alignContent={"center"}
              alignItems={'center'}>
              <Flex>
                <Text mr={4}><a>C#</a></Text>
                <Text>11%</Text>
              </Flex>
            </Box>

            <Flex>
              <Skeleton className={'default_lang_bar' + ' ' + cs_skill_bar} h={'20px'} mt={1} />
            </Flex>
          </Box>

        </Box>
      </Box>
    </>
  )
}