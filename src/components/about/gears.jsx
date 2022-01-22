// Exporting Html
import { Heading, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";

export default function Gears() {
  // Variable
  const gears = [
    {
      name: "Asus X507UF",
      link: "https://www.flipkart.com/asus-x507uf-core-i5-8th-gen-8-gb-1-tb-hdd-windows-10-2-gb-graphics-ej092t-laptop/p/itmf9rzqg8zjhteh",
    },
    {
      name: "Dell Wireless",
      link: "https://www.flipkart.com/dell-km117-wireless-laptop-keyboard/p/itmepb26nxnyhzgz?pid=ACCEPB2FWAVBFTEX&lid=LSTACCEPB2FWAVBFTEXSXZHRL&marketplace=FLIPKART&q=dell+wireless+keyboard+mouse+combo&store=6bo%2Fai3%2F3oe&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&fm=SEARCH&iid=38f7af76-59ff-48cf-8c4f-c9693645a08a.ACCEPB2FWAVBFTEX.SEARCH&ppt=hp&ppn=homepage&ssid=m401ky4jls0000001641984140036&qH=7a947f46312927da",
    },
    {
      name: "Eksa E3000",
      link: "https://www.flipkart.com/eksa-e3000-wired-gaming-headset/p/itm6dbec17aa4a64?pid=ACCFXC6GTWUFHTFY&lid=LSTACCFXC6GTWUFHTFYTRXQL9&marketplace=FLIPKART&q=eksa+e3000&store=0pm%2Ffcn&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=af785406-f9a4-4270-8d51-72edc0b26414.ACCFXC6GTWUFHTFY.SEARCH&ppt=sp&ppn=sp&ssid=g41qdad12o0000001641984327501&qH=78f70853c345723a",
    },
    {
      name: "Redmi Note 9 Pro Max",
      link: "https://www.flipkart.com/redmi-note-9-pro-max-champagne-gold-64-gb/p/itm437741df5f74c?pid=MOBFV99GD4BZRXFD&lid=LSTMOBFV99GD4BZRXFDKZ2WEI&marketplace=FLIPKART&q=redmi+note+9+pro+max&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=fe6cc2e2-f7ed-48a5-90d4-5e7e8c8319eb.MOBFV99GD4BZRXFD.SEARCH&ppt=sp&ppn=sp&ssid=n7x393h2dc0000001641984517856&qH=a0508e13f08961a6",
    },
  ];

  // Returning Html
  return (
    <>
      {/* Gears Heading */}
      <Heading
        className="gears-heading"
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
