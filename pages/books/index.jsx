import Book from "../../components/Book.component";
import { Books } from "../../data/Books";

const BooksPage = () => {
  return (
    <div className="antialiased container w-full md:px-4 mx-auto py-20">
      <h1 className="text-6xl lg:text-7xl text-center font-title text-blue-800 my-10 drop-shadow-md">
        Books
      </h1>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
        {Books.map((book) => (
          <Book book={book} key={book.Title}/>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
