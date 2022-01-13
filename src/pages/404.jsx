import { Box, Button, Center, Heading, Container } from "@chakra-ui/react";
import Link from "next/link";
import Head from 'next/head';

export default function Errorpage() {
    return (
        <>
            <Box className="error-page">
                <Head>
                    <title>404 Page not Found</title>
                </Head>

                <Center>
                    <Heading className="error-heading"
                        fontSize={{ lg: '6xl', md: '5xl', sm: '39px', base: '25px' }} fontWeight='700'
                        mb={{ sm: '50px', base: '25px' }} mt={{ sm: '100px', base: '25px' }}
                        textAlign={'center'}>
                        <a> 404 Page Not Found</a>
                    </Heading>
                </Center>

                <Center>
                    <Box className="error-para"
                        fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
                        mb={{ sm: '80px', base: '40px' }}>
                        <Container textAlign={'center'}>
                            Hmm, so you are here, This page is removed by owner or I guess you miss typed the <b>URL</b>. Please check the url again or click below to go back.
                        </Container>
                    </Box>
                </Center>

                <Center>

                    {/* For Mobile and above */}
                    <Button d={{ base: 'none', sm: 'flex' }} size={'lg'} className="gb-btn" _hover={"none"}>
                        <Link href="/">Home</Link>
                    </Button>

                    {/* For small mobile */}
                    <Button d={{ base: 'flex', sm: 'none' }} size={'md'} className="gb-btn" _hover={"none"}>
                        <Link href="/">Home</Link>
                    </Button>
                </Center>
            </Box>
        </>
    )
}
