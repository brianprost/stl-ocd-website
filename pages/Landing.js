export default () => {
  return (
    <section className="flex justify-center bg-white-100 pb-12 h-full">
      {/* <div className="grid px-8 py-4 mx-auto lg:pt-48 lg:pb-16"> */}
      <div className="flex justify-center items-center px-8 py-4 lg:pt-48 lg:pb-16 ">
          <div className="w-5/6 md:w-1/2 ">
            <h1 className="text-7xl py-16 md:pb-0 md:text-8xl lg:text-7xl xl:text-8xl tracking-wide text-center text-gray-900 font-title md:leading-2 ">
              Helping Hands for Those With
              <span className="text-blue-700"> OCD </span>
            </h1>
            <div className="flex items-center justify-center lg:justify-left">
              <button className="m-10 rounded-xl w-3/5 text-2xl shadow-lg text-white bg-blue-800 p-2 hover:bg-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-blue-800 font-bold  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                📆 Upcoming Events
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};
