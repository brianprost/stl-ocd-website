import React from "react";

const Article = ({ article }) => {
  return (
    <div
      className="group my-4 flex h-full flex-col justify-between rounded-md bg-neutral-200 p-6 font-black opacity-80 shadow-md hover:opacity-100 md:my-auto"
      key={article.title}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        href={article.link}
      >
        <h3 className="mb-6 text-2xl font-bold tracking-normal text-blue-800">
          {article.title}
        </h3>
      </a>
      <p className="mb-2">{article.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={article.link}>
        <button className="mx-auto mt-4 block rounded-md bg-black px-4 py-2 text-lg font-semibold tracking-wide text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          Visit Article
        </button>
      </a>
    </div>
  );
};

export default Article;
