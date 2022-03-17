import { Articles } from "../../data/Articles";
import Article from "../../components/Article.component";
import Head from "next/head";

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>Articles - St. Louis OCD Support Group</title>
      </Head>
      <div className="container mx-auto w-full md:px-4 lg:py-20 ">
        <h1 className="mt-10 mb-20 text-center font-title text-6xl text-blue-800 drop-shadow-md lg:text-7xl">
          Articles
        </h1>
        <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24 ">
          <div className="mx-auto grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
            {Articles.map(({ id, title, link, description }) => (
              <Article
                title={title}
                link={link}
                description={description}
                key={id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
