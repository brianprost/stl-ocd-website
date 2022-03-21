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

          <meta
            name="theme-color"
            content="rgb(59 130 246)"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="rgb(30 58 138)"
            media="(prefers-color-scheme: dark)"
          />

          {/* FAVICONS */}
          {/* TODO: fix favicon  */}
          {/* For old IEs */}
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />

          {/* For new browsers - multisize ico  */}
          <link
            rel="icon"
            type="image/x-icon"
            sizes="16x16 32x32"
            href="/img/favicon/favicon.ico"
          />

          {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/img/favicon/favicon-152-precomposed.png"
          />

          {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/img/favicon/favicon-144-precomposed.png"
          />

          {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/img/favicon/favicon-120-precomposed.png"
          />

          {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/img/favicon/favicon-114-precomposed.png"
          />

          {/* For iPhone 6+ */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/favicon/favicon-180-precomposed.png"
          />

          {/* For first- and second-generation iPad: */}
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/img/favicon/favicon-72-precomposed.png"
          />

          {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/img/favicon/favicon-57.png"
          />

          {/* For Old Chrome */}
          <link rel="icon" sizes="32x32" href="/img/favicon/favicon-32.png" />

          {/* For IE10 Metro */}
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="favicon-144.png" />
          <meta name="theme-color" content="#ffffff" />

          {/* Chrome for Android */}
          <link rel="manifest" href="/img/favicon/manifest.json" />
          <link
            rel="icon"
            sizes="192x192"
            href="/img/favicon/favicon-192.png"
          ></link>
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
