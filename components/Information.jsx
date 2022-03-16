import { HomepageLinks } from "../data/HomepageLinks";

const InformationSection = () => {
  return (
    <section
      className="bg-gradient-to-bl from-blue-900 to-blue-700 p-20 md:py-36 "
      id="information"
    >
      <h2 className="pb-10 text-center font-title text-5xl text-gray-100 lg:mb-10 lg:pr-20 lg:text-right lg:text-6xl">
        Information
      </h2>
      <div className="container flex flex-col">
        <div className="flex w-full items-center justify-evenly">
          <ul className="flex list-none flex-wrap justify-center">
            {HomepageLinks.map((HomepageLink) => (
              <li className="m-4 flex p-2" key={HomepageLink.title}>
                <a
                  className="block max-w-sm transform rounded-lg border border-gray-100 bg-inherit p-6 px-8 shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg "
                  href={HomepageLink.link}
                >
                  <h5 className="mb-6 text-center font-title text-2xl tracking-tight text-white lg:text-4xl">
                    {HomepageLink.title}
                  </h5>
                  <p className="w-full text-center font-normal text-gray-100 lg:text-left">
                    {HomepageLink.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
