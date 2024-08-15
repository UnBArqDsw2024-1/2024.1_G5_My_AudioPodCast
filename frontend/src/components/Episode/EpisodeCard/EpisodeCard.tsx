import { IEpisode } from "../../../utils/episode-helper";
import { FaPlay } from "react-icons/fa";

const EpisodeCard = (episode: IEpisode) => {
  return (
    <div className="w-[300px] h-full lg:w-full md:min-h-[300px] border border-gray-300 border-solid rounded-md flex flex-col lg:flex-row justify-start items-center gap-5 shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        alt={episode.img.alt}
        src={episode.img.src}
        className="w-full lg:w-[300px] h-full min-h-[300px] object-cover"
      />
      <div className="flex flex-col justify-start items-start gap-5 p-5">
        <h3 className="text-black font-semibold text-xl">
          {episode.title}
        </h3>

        <div className="flex flex-col justify-start items-start gap-1">
          <h6 className="text-black">
            Author: <span className=" font-semibold">{episode.author}</span>
          </h6>

          <p className="text-black text-sm font-medium text-start">
            Publicado em: {episode.create_at}
          </p>
        </div>

        <p className="text-black text-sm font-medium text-start line-clamp-3">
          {episode.description}
        </p>

        <button className="border-blue-600 border hover:bg-blue-600 p-2 font-bold text-blue-600 hover:text-white rounded-md flex justify-center items-center gap-2">
          <FaPlay />
          Ouvir agora
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;
