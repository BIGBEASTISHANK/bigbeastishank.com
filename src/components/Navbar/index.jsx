import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Skeleton, Textarea, FormControl, FormLabel, Input, Flex, Spacer, Text, useColorMode, useColorModeValue, IconButton, Box, Drawer, DrawerFooter, DrawerOverlay, DrawerHeader, DrawerContent, DrawerBody, useDisclosure, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode();
    const icon_color = useColorModeValue('dark', 'white');
    const icon_bg = useColorModeValue('white', 'dark');

    return (
        <>
            {/* Navbar box */}
            <Box className="navbar">
                <Flex
                    alignItems={'center'}
                    textAlign={'center'}>

                    <Text p={{ xl: '20px', md: '15px' }}
                        color={'white'}
                        as='b'
                        fontSize={{ xl: '25px', md: '20px' }}
                        d={{ md: 'flex', base: 'none' }}
                        w={{ xl: '310px', lg: '214px', md: '318px' }}
                    >
                        <Link href='/'>BIG BEAST ISHANK</Link>
                    </Text>

                    <Spacer d={{ md: 'flex', base: 'none' }} />

                    <Flex
                        className='nav-item'
                        mt={{ xl: '25px', md: '20px', sm: '15px' }} mb={{ xl: '25px', md: '20px', sm: '15px' }}>
                        <Text
                            id={'nav-item'}
                            fontSize={{ xl: '18px', md: '15px' }}
                            color={'white'}
                            ml={{ md: '2.5px', base: '0px' }} mr={'2.5px'}
                            pl={'10px'} pr={'10px'}
                            _hover={{ bg: '#D51B90', borderRadius: '25px' }}>
                            <Link href="/">Home</Link>
                        </Text>

                        <Text
                            id={'nav-item'}
                            fontSize={{ xl: '18px', md: '15px' }}
                            color={'white'}
                            ml={{ md: '2.5px', base: '0px' }} mr={'2.5px'}
                            pl={'10px'} pr={'10px'}
                            _hover={{ bg: '#D51B90', borderRadius: '25px' }}>
                            <Link href="/about">About</Link>
                        </Text>
                        <Text
                            id={'nav-item'}
                            fontSize={{ xl: '18px', md: '15px' }}
                            color={'white'}
                            ml={{ md: '2.5px', base: '0px' }} mr={'2.5px'}
                            pl={'10px'} pr={'10px'}
                            _hover={{ bg: '#D51B90', borderRadius: '25px' }}>
                            <Link href="/blog">Blogs</Link>
                        </Text>

                        <Text
                            id={'nav-item'}
                            fontSize={{ xl: '18px', md: '15px' }}
                            color={'white'}
                            ml={{ md: '2.5px', base: '0px' }} mr={'2.5px'}
                            pl={'10px'} pr={'10px'}
                            _hover={{ bg: '#D51B90', borderRadius: '25px' }} onClick={onOpen}
                            cursor={'pointer'}>
                            Contact
                        </Text>
                    </Flex>

                    <Spacer d={{ md: 'none', base: 'flex' }} />

                    {/* For Pc and Tabs */}
                    <IconButton d={{ md: 'flex', base: 'none' }} m={'16px'} outline={'none'} icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />} bg={icon_bg} color={icon_color} border={'none'} isRound={'true'} _hover={{ bg: icon_color, color: icon_bg }} onClick={toggleColorMode} />

                    {/* For Mobiles */}
                    <IconButton size={'sm'} d={{ md: 'none', sm: 'flex', base: 'none' }} m={'16px'} outline={'none'} icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />} bg={icon_bg} color={icon_color} border={'none'} isRound={'true'} _hover={{ bg: icon_color, color: icon_bg }} onClick={toggleColorMode} />

                    {/* For small mobiles */}
                    <IconButton size={'xs'} d={{ sm: 'none', base: 'flex' }} m={'16px'} outline={'none'} icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />} bg={icon_bg} color={icon_color} border={'none'} isRound={'true'} _hover={{ bg: icon_color, color: icon_bg }} onClick={toggleColorMode} />

                </Flex>
            </Box>

            {/* Element div */}

            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader className='contact-header'
                        fontSize={'29px'} fontWeight={'1000'}>
                        Contact Me
                    </DrawerHeader>

                    <Skeleton startColor='pink.500' endColor='orange.500' h={'4px'} />

                    <DrawerBody bg={'dark'}>

                        <FormControl isRequired>

                            <form action="https://formspree.io/f/mrgravyr" method="POST">

                                <FormLabel htmlFor='name'>Full Name</FormLabel>
                                <Input id='name' type='name' name='Name' mb={'10px'} />

                                <FormLabel htmlFor='email'>Email Address</FormLabel>
                                <Input id='email' type='email' name="E-Mail" mb={'10px'} />

                                <FormLabel htmlFor='message'>Message</FormLabel>
                                <Textarea id='message' type='text' name="Message" mb={'10px'} />

                                <Button colorScheme='blue' mt={'10px'} type="submit">Submit</Button>

                            </form>

                        </FormControl>

                    </DrawerBody>

                    <Skeleton startColor='pink.500' endColor='orange.500' h={'4px'} />

                    <DrawerFooter>

                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
