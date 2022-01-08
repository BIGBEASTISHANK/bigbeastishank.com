// Importing stuffs
import Head from "next/head";
import Link from "next/link";

// Exporting web code
export default function Error() {
    return (
        <>
            <Head>
                <title>Page Not Found!</title>
            </Head>
            <div className="errorpage">
                <h1><strong>Oops!</strong> Page Not Found</h1>

                <p>
                    This page might be removed or dosen't exist. Please check the url properly or just leave the site you bad evil 😈 fellow!
                </p>

                <Link href='/'><input type='submit' value='Go To Home' /></Link>
            </div>
        </>
    )
}