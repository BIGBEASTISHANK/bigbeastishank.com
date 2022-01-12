import { Box, Center, Container, Heading, Skeleton, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Box className="about">
                <Head>
                    <title>About | BIG BEAST ISHANK</title>
                </Head>

                <Center>
                    <Heading className='about-heading'
                        fontSize={{ lg: '6xl', md: '5xl', sm: '39px', base: '25px' }} fontWeight='700'
                        mb={{ lg: '20px', md: '15px' }}>

                        <a>About Me</a>

                    </Heading>
                </Center>

                <Box className="about-content"
                    fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700">
                    <Container textAlign={"center"}>
                        Hmm... so you are here because you want to know about me right? So lets talk about me. I am Ishank, my school name is Pranjal. In year <b>2018</b>
                        one of my friend said that he know hacking. At that time I was not having any talent in my life. When he told about hacking, I got very excited about that
                        I also want to try it. So one day their was <b>Olympiads</b> of ICT in my school. I participated and got <b>Gold</b> medal. So my father purchased
                        me a laptop from that laptop I start knowing about <b>HTML</b> and its fundamentals. Sooner I started doing Front-End Web Development. Then I came
                        across many programming languages, I started learning them. Then I made my first Github page. In late <b>2019</b> I started woking on
                        projects and uploading it to github. Then in mid <b>2020</b> I became a Fullstack Web Developer, Game Developer, AI Developer and Free-Lancer.
                        And I am an advance Linux user too!
                    </Container>
                </Box>

                <Skeleton
                    startColor='pink.500' endColor='orange.500'
                    ml={'-30px'} mr={'-30px'} w={'810'} h={'2px'} mb={4} mt={4} />

                {/* Gears */}
                <Heading className='about-heading'
                    fontSize={{ lg: '5xl', md: '4xl', sm: '32px', base: '22px' }} fontWeight='700'
                    mb={{ lg: '20px', base: '15px' }} mt={'15px'}>

                    <a>Gears</a>

                </Heading>

                <Box className="gears-item">
                    <UnorderedList fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
                        ml={'50px'} mr={"50px"}>
                        <ListItem>💻 <Link isExternal href="https://www.flipkart.com/asus-x507uf-core-i5-8th-gen-8-gb-1-tb-hdd-windows-10-2-gb-graphics-ej092t-laptop/p/itmf9rzqg8zjhteh">Asus X507UF</Link></ListItem>
                        <ListItem>🖱️ <Link isExternal href="https://www.flipkart.com/dell-km117-wireless-laptop-keyboard/p/itmepb26nxnyhzgz?pid=ACCEPB2FWAVBFTEX&lid=LSTACCEPB2FWAVBFTEXSXZHRL&marketplace=FLIPKART&q=dell+wireless+keyboard+mouse+combo&store=6bo%2Fai3%2F3oe&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&fm=SEARCH&iid=38f7af76-59ff-48cf-8c4f-c9693645a08a.ACCEPB2FWAVBFTEX.SEARCH&ppt=hp&ppn=homepage&ssid=m401ky4jls0000001641984140036&qH=7a947f46312927da">Dell Wireless</Link> ⌨️</ListItem>
                        <ListItem>🎧 <Link isExternal href="https://www.flipkart.com/eksa-e3000-wired-gaming-headset/p/itm6dbec17aa4a64?pid=ACCFXC6GTWUFHTFY&lid=LSTACCFXC6GTWUFHTFYTRXQL9&marketplace=FLIPKART&q=eksa+e3000&store=0pm%2Ffcn&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=af785406-f9a4-4270-8d51-72edc0b26414.ACCFXC6GTWUFHTFY.SEARCH&ppt=sp&ppn=sp&ssid=g41qdad12o0000001641984327501&qH=78f70853c345723a">Eksa E300</Link></ListItem>
                        <ListItem>📱 <Link isExternal href="https://www.flipkart.com/redmi-note-9-pro-max-champagne-gold-64-gb/p/itm437741df5f74c?pid=MOBFV99GD4BZRXFD&lid=LSTMOBFV99GD4BZRXFDKZ2WEI&marketplace=FLIPKART&q=redmi+note+9+pro+max&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=fe6cc2e2-f7ed-48a5-90d4-5e7e8c8319eb.MOBFV99GD4BZRXFD.SEARCH&ppt=sp&ppn=sp&ssid=n7x393h2dc0000001641984517856&qH=a0508e13f08961a6">Redmi Note 9 Pro Max</Link></ListItem>
                    </UnorderedList>
                </Box>

                {/* Software */}
                <Heading className='about-heading'
                    fontSize={{ lg: '5xl', md: '4xl', sm: '32px', base: '22px' }} fontWeight='700'
                    mb={{ lg: '20px', base: '15px' }} mt={'30px'}>

                    <a>Software</a>

                </Heading>

                <Box className="gears-item">
                    <UnorderedList fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
                        ml={'50px'} mr={"50px"}>
                        <ListItem>📝 <Link isExternal href="https://code.visualstudio.com/">VS Codes</Link></ListItem>
                        <ListItem>🅰️ <Link isExternal href="https://archlinux.org">Arch Linux</Link></ListItem>
                        <ListItem>🌐 <Link isExternal href="https://www.opera.com/">Opera</Link></ListItem>
                        <ListItem>🎵 <Link isExternal href="https://spotify.com">Spotify</Link></ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </>
    )
}
