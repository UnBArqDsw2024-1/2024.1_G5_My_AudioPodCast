import { RiFilePaper2Line } from "react-icons/ri";
import { IEpisode } from "../../../utils/episode-helper";

const EpisodeCard = (episode: IEpisode) => {
  return (
    <div className="w-[300px] lg:w-full h-full md:min-h-[300px] border border-gray-300 border-solid rounded-md flex flex-col lg:flex-row justify-start items-center gap-5 shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        className="w-full lg:w-[300px] h-full min-h-[300px] object-cover"
        src={episode.img.src}
        alt={episode.img.alt}
      />

      <div className="flex flex-col justify-start items-start gap-5 p-5">
        <h3 className="text-black font-semibold text-xl">{episode.title}</h3>
        <div className="flex flex-col justify-start items-start gap-1">
          <h6 className="text-black font-semibold">{episode.author}</h6>
          <p className="text-black text-sm font-medium text-start">
            Publicado em: {episode.create_at}
          </p>
        </div>
        <p className="text-black text-sm font-medium text-start line-clamp-3">
          {episode.description}
        </p>
        <button className="border-blue-600 border hover:bg-blue-600 p-2 font-bold text-blue-600 hover:text-white rounded-md flex justify-center items-center gap-2">
          <RiFilePaper2Line />
          Continuar lendo
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;