import React from "react";

const Book = ({ Author, ISBN13, Title, bookCover }) => {
  return (
    <div className="my-4 flex h-full flex-col rounded-md bg-blue-100 bg-opacity-20 px-4 pt-2 text-center shadow-sm md:my-auto animatecss animatecss-zoomIn">
      <img
        className="h-80 origin-center rounded-md object-cover"
        src={bookCover}
        alt={`book cover for ${Title}`}
      />
      <div className="flex flex-col">
        <h3 className="my-6 select-all text-2xl font-[650] leading-tight tracking-tighter">
          {Title}
        </h3>
        <div className="grid grid-cols-1 grid-rows-2 content-end space-y-2">
          <h4 className="row-span-1 font-bold">
            Author{Author.length > 1 ? "s" : ""}: <br />
            {Author.map((author, index) => (
              <span className="select-all font-normal" key={`author${index}`}>
                {author}
                {index === Author.length - 1 ? "" : ", "}
              </span>
            ))}
          </h4>
          <p className="row-span-1 select-none font-bold">
            ISBN-13:
            <br />
            <span className="select-all font-normal">{ISBN13}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
