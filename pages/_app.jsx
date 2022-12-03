import Layout from "../components/Layout";
import "../styles/globals.css";
import "@fontsource/italiana";
import "@fontsource/work-sans/variable.css";

import firebaseApp from "../firebase";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
