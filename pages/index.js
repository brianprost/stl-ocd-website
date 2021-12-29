import Head from "next/head";
import Landing from './Landing'
import Navbar from './Navbar'
import About from './About'
import Resources from "./Information";
import Contact from "./Contact";

export default function Home() {

  return (
    <div
      className="bg-white-100 pb-12 overflow-y-hidden"
      style={{ minHeight: 700 }}
    >
      <Navbar />
      <Landing />
      <About />
      <Resources />
      <Contact />
    </div>
  );
}
