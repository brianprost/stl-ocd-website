import Navbar from "../../components/Navbar";
import { Books } from "../../data/Books";

export default () => {
  return (
    <div class="antialiased container w-full md:px-4 mx-auto py-20">
        <h1 className="text-6xl lg:text-7xl text-center font-title text-blue-800 my-10 drop-shadow-md">
          Books
        </h1>
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
          {Books.map((book) => (
            <div class="bg-neutral-200 px-6 py-10 shadow-md rounded-md flex flex-col h-full justify-between my-4 md:my-auto">
                  <h3 class="font-bold text-center mb-6 text-3xl tracking-normal text-black select-all">
                    {book.Title}
                  </h3>
              <p class="mb-2">Author(s): {book.Authors}</p>
              <p class="mb-2 select-none">ISBN-13: <span className="select-all">{book.ISBN13}</span></p>
            </div>
          ))}
        </div>
      </div>
  );
};
