import '../styles/index.scss'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../Theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <>

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}