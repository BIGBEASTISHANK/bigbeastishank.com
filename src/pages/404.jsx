import { Box, Button, Center, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Errorpage() {
    return (
        <>
            <Box className="error-page">
                <Center>
                    <Heading className="error-heading"
                    textAlign={'center'}
                        fontSize={{ lg: '6xl', md: '5xl', sm: '39px', base: '25px' }} fontWeight='700'
                        mb={{sm: '100px', base: '50px'}} mt={{sm: '100px', base: '50px'}}>
                        <a> 404 Page Not Found</a>
                    </Heading>
                </Center>

                <Center>

                    {/* For Mobile and above */}
                    <Button d={{base: 'none', sm: 'flex'}} size={'lg'} className="gb-btn" _hover={"none"}>
                        <Link href="/">Go Back</Link>
                    </Button>

                    {/* For small mobile */}
                    <Button d={{base: 'lex', sm: 'none'}} size={'md'} className="gb-btn" _hover={"none"}>
                        <Link href="/">Go Back</Link>
                    </Button>
                </Center>
            </Box>
        </>
    )
}
