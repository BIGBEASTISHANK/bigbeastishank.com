// Importing stuffs
import '../styles/index.scss'
import Layout from '../components/Layout'

// Exporting code
export default function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
