import Head from "next/head";
import Book from "../../components/Book.component";
import { ref, getDatabase } from "firebase/database";
import LoadingSpinner from "../../components/LoadingSpinner";
import firebaseApp from "../../firebase";
import { useList } from "react-firebase-hooks/database";

const database = getDatabase(firebaseApp);

const BooksPage = () => {
  const [snapshots, loading, error] = useList(ref(database, "books"));

  return (
    <>
      <Head>
        <title>Books - St. Louis OCD Support Group</title>
      </Head>
      <div className="container mx-auto w-full md:px-4 lg:pb-20">
        <h1 className="my-10 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
          Books
        </h1>
        {error && <strong>Error: {error}</strong>}
        {loading && (
          <div className="flex h-screen flex-row items-center justify-center md:h-3/4">
            <LoadingSpinner />
          </div>
        )}
        <div className="mx-auto grid px-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:space-y-0 lg:px-0 xl:grid-cols-4">
          {snapshots.map((book) => (
            <Book
              Author={book.val().Author}
              ISBN13={book.val().ISBN13}
              Title={book.val().Title}
              bookCover={book.val().bookCover}
              key={book.val().ISBN13}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
