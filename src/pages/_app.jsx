import theme from "../Theme";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/provider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
