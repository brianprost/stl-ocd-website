import Layout from "../components/Layout";
import "../styles/globals.css";
import "@fontsource/italiana";
import "@fontsource/work-sans/variable.css";

import firebase from "firebase/app";
// import firebaseApp from "../firebase";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
