import { BsFillCalendarWeekFill } from "react-icons/bs";

const Landing = () => {
  return (
    <section className="bg-white-100 flex justify-center pb-12" id="home">
      <div className="flex items-center justify-center pt-20 sm:px-8 lg:pt-28 lg:pb-16 ">
        <div className="w-5/6 animatecss animatecss-fadeIn lg:w-1/2">
          <h1 className="md:leading-2 py-16 text-center font-title text-7xl tracking-wide text-gray-900 md:text-8xl lg:pb-0 ">
            Helping Hands for Those With
            <span className="text-blue-700"> OCD </span>
          </h1>
          <a href="/upcoming-events">
            <div className="flex items-center justify-center">
              <div className="m-10 flex w-full transform items-center justify-center gap-3 rounded-xl bg-blue-800 py-3 text-center text-md md:text-xl font-light text-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-4 lg:w-3/5">
                <BsFillCalendarWeekFill className="" />
                View Upcoming Events
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
