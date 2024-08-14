import { Link } from "react-router-dom";
import EpisodeGrid from "../EpisodeGrid/EpisodeGrid";

const EpisodeSection = () => {
  return (
    <section id="episodes" className="w-full h-full max-w-screen-xl mx-auto">
      <div className="w-full flex flex-col justify-start items-start gap-3 p-5">
        <h3 className="text-black font-bold text-4xl">Todos Episódios</h3>
        <p className="text-medium text-xl text-center">Veja os últimos episódios postados</p>
      </div>
      <EpisodeGrid />
      <div className="w-full py-8 flex justify-center items-center">
        <Link
          to="#episodes"
          className="bg-blue-600 hover:bg-blue-800 py-4 px-5 font-bold text-white rounded-md w-[200px] text-center"
        >
          Ver mais episodios
        </Link>
      </div>
    </section>
  );
};

export default EpisodeSection;
