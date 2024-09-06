import Head from "next/head";

const UpcomingEventsPage = () => {
  const events = [
    {
      title: "St. Louis OCD Walk",
      description: "September 21, 2024, 1:30 PM",
      link: "https://support.iocdf.org/event/st-louis-ocd-walk/e593456",
    },
    {
      title: "OCD Mini-Conference",
      description: "October 19, 2024, 9:00 AM",
      link: "/resources/2024-STL-OCD-Mini-Conference-Flyer.pdf",
    },
  ];

  return (
    <>
      <Head>
        <title>Books - St. Louis OCD Support Group</title>
      </Head>
      <section
        className="container mx-auto w-full md:px-4 lg:pb-20 "
        id="information"
      >
        <h2 className="mb-10 mt-32 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
          Upcoming Events
        </h2>
        <div className="container flex flex-col">
          <div className="flex w-full items-center justify-evenly">
            <ul className="flex list-none flex-wrap justify-center">
              {events.map((homepageLink) => (
                <li
                  className="my-2 flex py-2 lg:m-4 lg:p-2"
                  key={homepageLink.title}
                >
                  <a
                    className="block max-w-sm transform rounded-lg border border-gray-100 bg-blue-700 p-6 shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-blue-900 hover:shadow-lg lg:px-8"
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
    </>
  );
};

export default UpcomingEventsPage;
