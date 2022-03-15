const Landing = () => {
  return (
    <section
      className="bg-white-100 flex h-full justify-center pb-12"
      id="home"
    >
      <div className="flex items-center justify-center px-8 pt-20 lg:pt-48 lg:pb-16 ">
        <div className="w-5/6 md:w-1/2 ">
          <h1 className="md:leading-2 py-16 text-center font-title text-7xl tracking-wide text-gray-900 md:pb-0 md:text-8xl lg:text-7xl xl:text-8xl ">
            Helping Hands for Those With
            <span className="text-blue-700"> OCD </span>
          </h1>
          <div className="lg:justify-left flex items-center justify-center">
            <button className="m-10 w-3/5 transform rounded-xl bg-blue-800 p-2 text-2xl font-bold text-white  shadow-lg transition duration-500 ease-in-out hover:-translate-y-1  hover:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-4">
              📆 Upcoming Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
