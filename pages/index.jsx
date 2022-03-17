import Landing from "../components/Landing";
import About from "../components/About";
import Resources from "../components/Information";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>St. Louis OCD Support Group</title>
      </Head>
      <Landing />
      <About />
      <Resources />
      <Contact />
    </>
  );
}
