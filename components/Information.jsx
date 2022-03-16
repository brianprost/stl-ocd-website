import backgroundImage from "../public/img/st-louis-ocd-resources.jpeg";
import { HomepageLinks } from "../data/HomepageLinks";
import Link from "next/link";
import Router from "next/router";

const InformationSection = () => {
  return (
    <section
      className="bg-gradient-to-bl from-blue-900 to-blue-700 p-20 md:py-36 "
      id="information"
    >
        <h2 className="text-center text-5xl lg:text-right lg:pr-20 lg:mb-10 font-title lg:text-6xl text-gray-100 pb-10">
          Information
        </h2>
      <div className="container flex flex-col">
        <div className="flex items-center justify-evenly w-full">
          <ul className="flex flex-wrap list-none justify-center">
            {HomepageLinks.map((HomepageLink) => (
              <li className="flex p-2 m-4" key={HomepageLink.title}>
                {/* <Link href={HomepageLink.link}> */}
                  <a
                    className="block p-6 max-w-sm bg-inherit rounded-lg border border-gray-100 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-500 px-8 "
                    href={HomepageLink.link}
                  >
                    <h5 className="font-title text-center mb-6 text-2xl tracking-tight text-white lg:text-4xl">
                      {HomepageLink.title}
                    </h5>
                    <p className="font-normal text-gray-100 text-center lg:text-left w-full">
                      {HomepageLink.description}
                    </p>
                  </a>
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
