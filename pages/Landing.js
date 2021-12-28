import Image from 'next/image'
import heroPic from '../public/img/stl-ocd-group-therapy-hero.svg'

export default () => {
  return (
    <section className="bg-white-100">
      <div className="container flex px-8 py-4 mx-auto md:flex lg:flex lg:py-48 xl:flex 2xl:flex">
        <div className="flex flex-col justify-evenly w-full lg:flex-row">
          <div className="max-w-lg md:w-full">
            <h1 className="text-8xl md:text-8xl lg:text-7xl xl:text-8xl tracking-wide text-center lg:text-left md:text-center text-gray-900 font-title md:leading-2">
              Helping Hands for Those With
              <span className="text-blue-700"> OCD </span>
            </h1>
            <button className="w-1/2 flex justify-center py-2 px-4 rounded-md shadow-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-blue-800 font-bold m-8">
              Upcoming Events
            </button>
          </div>
        </div>
        <div className="md:flex items-center justify-center w-full h-96">
          <Image src={heroPic} alt="" className="object-cover w-full h-full max-w-2xl rounded-md" />
        </div>
      </div>
    </section>
  );
};
