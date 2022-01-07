import Link from "next/link";

export default () => {
  return (
    <>
      <section className="bg-white-100" id="contact">
        <div className="flex px-8 mx-auto py-48">
          <div className="flex flex-row justify-evenly w-full lg:flex-row">
            <div className="max-w-lg md:w-full">
              <h1 className="text-8xl md:text-8xl lg:text-7xl xl:text-8xl tracking-wide text-center text-gray-900 font-title md:leading-2 pb-20">
                <span className="text-blue-800">Contact</span> Us
              </h1>
              <h2 className="text-2xl tracking-tight font-black text-center text-gray-700">
                St. Louis OCD Support Group
              </h2>
              <h2 className="text-2xl tracking-wide font-black text-center text-gray-700">
                stlocd@swbell.net
              </h2>
              <h2 className="text-2xl tracking-wider font-black text-center text-gray-700">
                314-291-7566
              </h2>
              <div className="flex items-center justify-center">
                <button className="mt-40 rounded-xl w-3/5 text-2xl shadow-lg text-white bg-gray-900 p-2 hover:bg-blue-800  focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-blue-800 font-bold m-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">Join Our Newsletter</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
