import { articles, IArticle } from "../../../utils/article-helper"
import ArticleCard from "../ArticleCard/ArticleCard"

const ArticleGrid = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto">
        <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-10">
            {articles.map((article: IArticle, index:number) => (
                <ArticleCard key={index} {...article} />
            ))}
        </div>
    </div>
  )
}

export default ArticleGrid