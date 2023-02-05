// Importing stuffs
import Document, { Html, Head, Main, NextScript } from "next/document";

// Something something I don't know what
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (

      // Rendring basic html format, if not then I don't know💀
      <Html lang="en">
        <Head />

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
