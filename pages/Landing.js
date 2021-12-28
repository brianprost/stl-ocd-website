export default () => {
  return (
    <div className="bg-white-100">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-8xl md:text-6xl lg:text-7xl xl:text-8xl text-left text-gray-800 font-title leading-7 md:leading-10">
            Helping Hands for Those With
            <span className="text-blue-700"> OCD </span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg"></p>
        </div>
        <div className="flex justify-center items-center">
          <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-transparent transition duration-150 ease-in-out hover:border-blue-600 lg:text-xl lg:font-bold  hover:text-blue-600 rounded border border-blue-700 text-blue-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
            See Upcoming Events
          </button>
        </div>
      </div>
    </div>
  );
};
