import { Link } from "react-router-dom";
import EpisodeGrid from "../EpisodeGrid/EpisodeGrid";

const EpisodeSection = () => {
  return (
    <section id="episode" className="w-full h-full px-5">
      <div className="w-full flex flex-col justify-center items-center gap-3 p-5">
        <h3 className="text-black font-bold text-4xl">Artigos</h3>
        <p className="text-medium text-xl text-center">Veja os últimos artigos postados</p>
      </div>

      <EpisodeGrid />

      <div className="w-full py-5 flex justify-center items-center">
        <Link
          to="/articles"
          className="bg-blue-600 hover:bg-blue-700 py-4 px-5 font-bold text-white rounded-md w-[200px] text-center"
        >
          Ver mais
        </Link>
      </div>
    </section>
  );
};

export default EpisodeSection;
