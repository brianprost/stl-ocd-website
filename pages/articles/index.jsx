import { Articles } from "../../data/Articles";
import Link from "next/link";

export default () => {
  return (
    <>
      <div class="container w-full md:px-4 mx-auto py-20">
        <h1 className="text-6xl lg:text-7xl text-center font-title text-blue-800 my-10 drop-shadow-md">
          Articles
        </h1>
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
          {Articles.map((article) => (
            <div class="bg-neutral-200 p-6 shadow-md rounded-md flex flex-col h-full justify-between my-4 md:my-auto">
              <Link href={article.link}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <h3 class="font-bold text-center mb-6 text-2xl tracking-normal text-blue-800">
                    {article.title}
                  </h3>
                </a>
              </Link>
              <p class="mb-2">{article.description}</p>
              <Link href={article.link}>
                <a target="_blank" rel="noopener noreferrer">
                  <button class="text-lg font-semibold tracking-wide text-white bg-black px-4 py-2 block mx-auto mt-4 rounded-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                    Visit Article
                  </button>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
