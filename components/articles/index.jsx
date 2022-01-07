import { Articles } from "../../data/Articles";
import Link from "next/link";

export default () => {
  return (
    <>
      <div className="flex flex-col align-items justify-center ">
        <ul className="flex flex-wrap list-none justify-center">
          {Articles.map((article) => (
            <li className="flex p-2 m-4">
              <Link href={article.link} >
                <a className="block p-6 max-w-sm bg-inherit rounded-lg border border-gray-100 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-300" target="_blank" rel="noopener noreferrer">
                  <h5 className="font-title text-center mb-6 text-2xl tracking-tight text-blue-800 lg:text-4xl">
                    {article.title}
                  </h5>
                  <p className="font-normal text-gray-800 px-8">
                    {article.description}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
};
