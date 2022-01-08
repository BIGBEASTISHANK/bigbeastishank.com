// Importing stuffs
import Navbar from '../Navbar'
import Footer from '../Footer'
import Head from 'next/head'

// Exporting web code
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="This is BIG BEAST ISHANK website. Here you can know about his qualification and how much he knows in coding." />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BIG BEAST ISHANK</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}