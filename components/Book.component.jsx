import React from "react";

const Book = ({ book }) => {
  return (
    <div className="my-4 flex h-full flex-col justify-between rounded-md bg-neutral-200 px-6 py-10 shadow-md md:my-auto">
      <h3 className="mb-6 select-all text-center text-3xl font-bold tracking-normal text-black">
        {book.Title}
      </h3>
      <p className="mb-2">
        Author(s): <span className="select-all">{book.Authors}</span>
      </p>
      <p className="mb-2 select-none">
        ISBN-13: <span className="select-all">{book.ISBN13}</span>
      </p>
    </div>
  );
};

export default Book;
