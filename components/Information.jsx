const InformationSection = () => {
  const homepageLinks = [
    {
      title: "Slides & Articles",
      description:
        "Slides/handouts from former meetings, and informative articles to download or print.",
      link: "/articles",
    },
    {
      title: "Books",
      description: "Recommended books about Obsessive Compulsive Disorder.",
      link: "/books",
    },
    {
      title: "Resources",
      description:
        "Links for Obsessive Compulsive Disorder information from other websites and partners.",
      link: "/resources",
    },
  ];

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
            {homepageLinks.map((homepageLink) => (
              <li
                className="my-2 flex py-2 lg:m-4 lg:p-2"
                key={homepageLink.title}
              >
                <a
                  className="block max-w-sm transform rounded-lg border border-gray-100 bg-inherit p-6 shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg lg:px-8 "
                  href={homepageLink.link}
                >
                  <h5 className="mb-6 text-center font-title text-2xl tracking-tight text-white lg:text-4xl">
                    {homepageLink.title}
                  </h5>
                  <p className="w-full text-center font-normal text-gray-100">
                    {homepageLink.description}
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
