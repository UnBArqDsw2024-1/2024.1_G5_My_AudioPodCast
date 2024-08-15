import { useParams } from "react-router-dom";
import { podcasts } from "../../../utils/podcast-helper";

const PodcastDetail = () => {
    const { id } = useParams<{ id: string }>();
    const podcast = podcasts.find((p) => p.title === id);

    if (!podcast) {
        return <div>Podcast não encontrado</div>;
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <img
                src={podcast.img.src}
                alt={podcast.img.alt}
                className="w-full h-auto mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{podcast.title}</h1>
            <h2 className="text-xl font-medium mb-4">por {podcast.author}</h2>
            <p className="text-base">{podcast.description}</p>
        </div>
    );
};

export default PodcastDetail;
