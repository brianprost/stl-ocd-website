import Book from "../../components/Book.component";
import { Books } from "../../data/Books";

const BooksPage = () => {
  return (
    <div className="container mx-auto w-full md:px-4 lg:py-20">
      <h1 className="my-10 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
        Books
      </h1>
      <div className="mx-auto grid px-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:space-y-0 lg:px-0 xl:grid-cols-4">
        {Books.map((book) => (
          <Book book={book} key={book.Title} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
