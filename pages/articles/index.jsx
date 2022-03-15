import { Articles } from "../../data/Articles";
import Link from "next/link";
import Article from "../../components/Article.component";

const ArticlesPage = () => {
  return (
    <>
      <div className="container w-full md:px-4 mx-auto py-20 ">
        <h1 className="text-6xl lg:text-7xl text-center font-title text-blue-800 mt-10 mb-20 drop-shadow-md">
          Articles
        </h1>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
          {Articles.map((article) => (
            <Article article={article} key={article.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
