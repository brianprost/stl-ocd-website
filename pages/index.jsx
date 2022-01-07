import Head from "next/head";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Resources from "../components/Information";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <>
    <div className="h-screen flex flex-col ">
      <Landing />
      <About />
      <Resources />
      <Contact />
    </div>
    </>
  );
}
