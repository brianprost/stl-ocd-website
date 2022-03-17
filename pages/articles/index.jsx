import { Articles } from "../../data/Articles";
import Link from "next/link";
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
        {/* <div className="mlg:grid-cols-3 mx-auto space-y-6 px-10 md:grid md:grid-cols-2 md:gap-10 md:space-y-0 md:px-0 lg:grid-cols-3">
          {Articles.map((article) => (
            <Article article={article} key={article.title} />
          ))}
        </div> */}

        <section>
          <div
            className="
          relative
          mx-auto
          w-full
          max-w-7xl
          items-center
          px-5
          py-12
          md:px-12
          lg:px-24
        "
          >
            <div className="mx-auto grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
              {Articles.map(({ title, link, description }) => (
                <Article
                  title={title}
                  link={link}
                  description={description}
                  key={title}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticlesPage;
