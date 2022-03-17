import React from "react";
import { RiArticleFill } from "react-icons/ri";

const Article = ({ title, link, description }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="group box-border h-full rounded-lg border border-blue-100 p-6 transition duration-200 ease-in-out hover:border-blue-800 hover:bg-blue-50 hover:bg-opacity-90">
        <div className="mx-auto mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-800">
          <RiArticleFill className="text-xl text-blue-800 group-hover:text-blue-50" />
        </div>
        <h1 className="mx-auto mb-8 text-center text-2xl font-[630] leading-none tracking-tighter text-neutral-600 group-hover:underline lg:text-3xl">
          {title}
        </h1>

        <p className="mx-auto text-neutral-600">{description}</p>
      </div>
    </a>
  );
};

export default Article;
