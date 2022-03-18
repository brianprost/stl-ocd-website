import Head from "next/head";
import Book from "../../components/Book.component";
import { Books } from "../../data/Books";

const BooksPage = () => {
  return (
    <>
      <Head>
        <title>Books - St. Louis OCD Support Group</title>
      </Head>
      <div className="container mx-auto w-full md:px-4 lg:pb-20">
        <h1 className="my-10 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
          Books
        </h1>
        <div className="mx-auto grid px-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:space-y-0 lg:px-0 xl:grid-cols-4">
          {Books.map(({ Author, ISBN13, Title, bookCover }) => (
            <Book
              Author={Author}
              ISBN13={ISBN13}
              Title={Title}
              bookCover={bookCover}
              key={ISBN13}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
