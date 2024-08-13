import { BsSoundwave } from "react-icons/bs";
import { IPodcast } from "../../../utils/podcast-helper";

const PodcastCard = (podcast: IPodcast) => {
  return (
    <div className="w-[320px] h-[600px] border border-gray-300 border-solid rounded-md flex flex-col justify-start items-center gap-5 shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        className="w-full h-1/2 object-cover"
        src={podcast.img.src}
        alt={podcast.img.alt}
      />

      <div className="flex flex-col justify-start items-start gap-5 p-5">
        <h3 className="text-black font-semibold text-xl">{podcast.title}</h3>
        <h6 className="text-black font-semibold">{podcast.author}</h6>
        <p className="text-black text-sm font-medium text-start line-clamp-3">{podcast.description}</p>
        <button className="border-blue-600 border hover:bg-blue-600 p-2 font-bold text-blue-600 hover:text-white rounded-md flex justify-center items-center gap-2">
          <BsSoundwave />
          Ouça agora
        </button>
        <iframe
          src={podcast.audioSrc}
          width="100%"
          height="80" // Ajusta a altura do iframe conforme necessário
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PodcastCard;
