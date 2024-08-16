import { useEffect, useState } from "react";
import { articles, IArticle } from "../../utils/article-helper";
import ArticleGrid from "../../components/Article/ArticleGrid/ArticleGrid";

const Articles = () => {
    const [articlesData, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        setArticles(articles);
    }, [articlesData]);

    return (
        <main className="w-full max-w-[1250px] mx-auto h-full h-min-screen p-5 lg:mt-20">
            <div className="w-full flex flex-col justify-center items-center gap-3 p-5">
                <h3 className="text-black font-bold text-4xl">Artigos</h3>
                <p className="text-medium text-xl text-center">Aproveite toda nossa biblioteca de artigos</p>
            </div>

            <ArticleGrid articles={articlesData} />
        </main>
    )
}

export default Articles
