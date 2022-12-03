import Article from "../../components/Article.component";
import Head from "next/head";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useList } from "react-firebase-hooks/database";
import { ref, getDatabase } from "firebase/database";
import { firebaseApp } from "../../firebase";

const database = getDatabase(firebaseApp);

const ArticlesPage = () => {
  const [snapshots, loading, error] = useList(ref(database, "articles"));

  return (
    <>
      <Head>
        <title>Articles - St. Louis OCD Support Group</title>
      </Head>
      <div className="container mx-auto w-full md:px-4 lg:py-20 ">
        <h1 className="mt-10 mb-20 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
          Articles
        </h1>
        {error && <strong>Error: {error}</strong>}
        {loading && (
          <div className="flex h-screen flex-row items-center justify-center md:h-3/4">
            <LoadingSpinner />
          </div>
        )}
        <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24 ">
          <div className="mx-auto grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
            {snapshots.map((article) => (
              <Article
                title={article.val().title}
                link={article.val().link}
                description={article.val().description}
                key={article.val().id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
