import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./Navbar";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Italiana&family=Work+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
