import { Link } from "../../../../node_modules/react-router-dom/dist/index";
import PodcastGrid from "../PodcastGrid/PodcastGrid";

const PodcastSection = () => {
  return (
    <section id="podcast" className="w-full h-full px-5">
      <div className="w-full flex flex-col justify-center items-center gap-3 p-5">
        <h3 className="text-black font-bold text-4xl">Podcasts</h3>
        <p className="text-medium text-xl text-center">Ouça por aqui os podcast mais recentes</p>
      </div>

      <PodcastGrid />

      <div className="w-full py-5 flex justify-center items-center">
        <Link
          to="/podcast"
          className="bg-blue-600 hover:bg-blue-700 py-4 px-5 font-bold text-white rounded-md w-[200px] text-center"
        >
          Ver mais
        </Link>
      </div>
    </section>
  );
};

export default PodcastSection;
