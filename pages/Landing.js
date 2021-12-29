import Image from 'next/image'
import heroPic from '../public/img/stl-ocd-group-therapy-hero.svg'

export default () => {
  return (
    <section className="bg-white-100">
      <div className="container flex px-8 py-4 mx-auto md:flex lg:flex lg:pt-48 lg:pb-16 xl:flex 2xl:flex">
        <div className="flex flex-col justify-evenly w-full lg:flex-row">
          <div className="max-w-lg md:w-full">
            <h1 className="text-8xl md:text-8xl lg:text-7xl xl:text-8xl tracking-wide text-center lg:text-left md:text-center text-gray-900 font-title md:leading-2">
              Helping Hands for Those With
              <span className="text-blue-700"> OCD </span>
            </h1>
            <div className="flex items-center justify-center lg:justify-left">
              <button className="mt-10 rounded-xl w-3/5 text-2xl shadow-lg text-white bg-blue-800 p-2 hover:bg-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-blue-800 font-bold m-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              📆 Upcoming Events
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline md:flex items-center justify-center w-full h-96">
          <Image src={heroPic} alt="" className="object-cover w-full h-full max-w-2xl rounded-md" />
        </div>
      </div>
    </section>
  );
};
