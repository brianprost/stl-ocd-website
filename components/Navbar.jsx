import React, { useEffect, useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/#home",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Information",
      link: "/#information",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="mb-1 w-full object-cover">
      <nav className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="container flex h-20 flex-wrap items-center justify-between">
            <div className="relative h-3/4 md:h-full">
              <Link href={links[0].link}>
                <a>
                  <img
                    src="./img/stl-ocd-nav-logo.webp"
                    alt="st-louis-ocd-logo"
                    className="h-full"
                    onClick={() => setIsOpen(false)}
                  />
                </a>
              </Link>
            </div>
            <div className="hidden w-full md:block md:w-auto">
              <div className="mt-4 flex flex-col font-[320] tracking-wider md:mt-0 md:flex-row md:space-x-8">
                {links.map(({ title, link }) => (
                  <Link href={link} key={title}>
                    <a className="box-content block py-2 pr-4 pl-3 text-gray-700 underline-offset-4 hover:bg-gray-50 hover:underline md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">
                      {title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-black bg-neutral-100 p-2 text-blue-700 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <AiOutlineMenu className="h-6 w-6" />
                ) : (
                  <AiOutlineClose className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {links.map(({ title, link }) => (
                  <Link href={link} key={`mobileMenu${title}`}>
                    <a
                      className="block rounded-3xl border border-blue-800 bg-neutral-100 px-3 py-6 text-center font-sans text-2xl text-blue-700 hover:bg-blue-100"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
};

export default Navbar;
