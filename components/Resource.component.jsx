import React from "react";

const Resource = ({ title, link, description }) => {
  return (
    <div
      className="group my-4 flex h-full flex-col justify-between rounded-md bg-neutral-200 p-6 opacity-80 shadow-md animatecss animatecss-zoomIn hover:opacity-100 md:my-auto"
      key={title}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        href={link}
      >
        <h3 className="mb-6 text-center font-sans text-3xl font-bold tracking-tighter text-blue-800">
          {title}
        </h3>
      </a>
      <p className="mb-2">{description}</p>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <button className="mx-auto mt-4 block rounded-md bg-black px-4 py-2 text-lg font-semibold tracking-wide text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg">
          {/* TODO: Visit x, where x is the type of resource */}
          Visit {"Resource"}
        </button>
      </a>
    </div>
  );
};

export default Resource;
