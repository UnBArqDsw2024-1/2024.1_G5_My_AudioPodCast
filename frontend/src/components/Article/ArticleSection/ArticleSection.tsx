import { useEffect, useState } from "react";
import ArticleGrid from "../ArticleGrid/ArticleGrid";
import { articles, IArticle } from "../../../utils/article-helper";
import { Link } from "react-router-dom";

const ArticleSection = () => {
  const [articlesData, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    setArticles(articles);
  }, [articlesData])

  return (
    <section id="article" className="w-full h-full px-5">
      <div className="w-full flex flex-col justify-center items-center gap-3 p-5">
        <h3 className="text-black font-bold text-4xl">Artigos</h3>
        <p className="text-medium text-xl text-center">Veja os últimos artigos postados</p>
      </div>

      <ArticleGrid articles={articlesData.slice(0, 6)} />

      <div className="w-full py-5 flex justify-center items-center">
        <Link to="/articles"
          className="bg-blue-600 hover:bg-blue-700 py-4 px-5 font-bold text-white rounded-md w-[200px] text-center"
        >
          Ver mais
        </Link>
      </div>
    </section>
  );
};

export default ArticleSection;
