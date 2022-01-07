import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

function Navbar() {
  // make the navigation titles icons instead
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      {/* <nav className="flex bg-inherit border-gray-200 px-2 sm:px-4 py-2.5 rounded fixed left-0 right-0 bg-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex">
            <img
              className="w-auto h-20"
              src="./img/stl-ocd-nav-logo.webp"
              alt="logo"
            />
          </a>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  md:font-bold tracking-widest">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 hover:scale-125"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:scale-125"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#information"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:scale-125"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:scale-125"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        </nav> */}
      {/*  */}
      {/*  */}
      {/*  */}
      <nav className="bg-white fixed w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="container flex flex-wrap items-center justify-between h-20">
              <div className="h-full relative">
                <img
                  src="./img/stl-ocd-nav-logo.webp"
                  alt="st-louis-ocd-logo"
                  className="h-full"
                />
              </div>
              <div className="hidden w-full md:block md:w-auto">
                <div className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  md:font-bold tracking-widest">
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 hover:scale-125"
                  >
                    Home
                  </a>

                  <a
                    href="#about"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:scale-125"
                  >
                    About
                  </a>
                  <a
                    href="#information"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:scale-125"
                  >
                    Information
                  </a>
                  <a
                    href="#contact"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:scale-125"
                  >
                    Contact
                  </a>
                </div>
              </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-neutral-100 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-2 border-black"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
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
          leave="transition ease-in duration-125 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="bg-neutral-100 text-blue-700 hover:bg-blue-100 border border-blue-800 text-2xl block px-3 py-6 rounded-sm text-center font-sans"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="bg-neutral-100 text-blue-700 hover:bg-blue-100 border border-blue-800 text-2xl block px-3 py-6 rounded-sm text-center font-sans"
                >
                  About
                </a>
                <a
                  href="#information"
                  className="bg-neutral-100 text-blue-700 hover:bg-blue-100 border border-blue-800 text-2xl block px-3 py-6 rounded-sm text-center font-sans"
                >
                  Information
                </a>
                <a
                  href="#contact"
                  className="bg-neutral-100 text-blue-700 hover:bg-blue-100 border border-blue-800 text-2xl block px-3 py-6 rounded-sm text-center font-sans"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </section>
  );
}

export default Navbar;
