import Head from "next/head";
import Landing from "../components/Landing";
import About from "../components/About";
import Resources from "../components/Information";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Resources />
      <Contact />
    </>
  );
}
