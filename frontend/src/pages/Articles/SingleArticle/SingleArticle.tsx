import { useParams } from "react-router-dom"
import { articles } from "../../../utils/article-helper"

const SingleArticle = () => {
    const { id } = useParams<{ id: string }>();
    const article = articles.find((article) => article.id === Number(id));

    if (!article) {
        return <div>Artigo não encontrado</div>;
    }

    return (
        <section className="w-full h-full min-h-screen max-w-4xl mx-auto p-5 lg:mt-20">
            <img
                src={article.img.src}
                alt={article.img.alt}
                className="w-full h-auto mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <h2 className="text-xl font-medium mb-4">por {article.author}</h2>
            <p className="text-base">{article.description}</p>
        </section>
    )
}

export default SingleArticle
