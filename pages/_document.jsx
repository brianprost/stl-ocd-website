import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta
            name="description"
            content="The digital home for the St. Louis OCD Support Group."
          />
          <meta name="author" content="Brian Prost" />
          <meta property="og:title" content="St. Louis OCD Support Group" />
          <meta property="og:image" content="/img/stl-ocd-main-logo.webp" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://stlocd.org/" />
          <meta
            property="og:description"
            content="The digital home for the St. Louis OCD Support Group."
          />

          {/* FAVICONS */}
          {/* TODO: fix favicon  */}
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
