import backgroundImage from "../public/img/st-louis-ocd-resources.jpeg";
import { homepageLinks } from "./data";

export default () => {
  return (
    <section className="bg-blue-900 p-20">
      <h2 className="text-center lg:text-right font-title text-6xl text-gray-100 pb-10">Information</h2>
      <div className="flex items-center lg:justify-evenly">
        <ul className="flex flex-wrap list-none justify-center">
        {homepageLinks.map((homepageLink) => (
          <li className="flex p-2 m-4">
            <a
              href={homepageLink.link}
              class="block p-6 max-w-sm bg-inherit rounded-lg border border-gray-100 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-500"
            >
              <h5 class="font-title font-light text-center mb-6 text-2xl font-bold tracking-tight text-white lg:text-4xl">
                {homepageLink.title}
              </h5>
              <p class="font-normal text-gray-100 px-8">
                {homepageLink.description}
              </p>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
};
