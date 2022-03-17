const Landing = () => {
  const latestFlyerLink = "resources/2020-First-Quarter-Flyer-1.pdf";

  return (
    <section className="bg-white-100 flex justify-center pb-12" id="home">
      <div className="flex items-center justify-center sm:px-8 pt-20 lg:pt-28 lg:pb-16 ">
        <div className="w-5/6 md:w-1/2 ">
          <h1 className="md:leading-2 py-16 text-center font-title text-7xl tracking-wide text-gray-900 md:pb-0 md:text-8xl lg:text-7xl xl:text-8xl ">
            Helping Hands for Those With
            <span className="text-blue-700"> OCD </span>
          </h1>
          <a href={latestFlyerLink}>
            <div className="lg:justify-left flex items-center justify-center">
              <div className="m-10 w-full lg:w-3/5 transform rounded-xl bg-blue-800 p-2 text-center text-2xl font-normal text-white  shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-4">
                📆 Upcoming Events
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
