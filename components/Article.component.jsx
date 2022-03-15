import React from "react";

const Article = ({ article }) => {
  return (
    <div
      className="bg-neutral-200 font-black p-6 shadow-md rounded-md flex flex-col h-full justify-between my-4 md:my-auto group opacity-80 hover:opacity-100"
      key={article.title}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        href={article.link}
      >
        <h3 className="font-bold mb-6 text-2xl tracking-normal text-blue-800">
          {article.title}
        </h3>
      </a>
      <p className="mb-2">{article.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={article.link}>
        <button className="text-lg font-semibold tracking-wide text-white bg-black px-4 py-2 block mx-auto mt-4 rounded-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          Visit Article
        </button>
      </a>
    </div>
  );
};

export default Article;
