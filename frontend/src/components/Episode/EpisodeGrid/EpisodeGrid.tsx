import { episodes, IEpisode } from "../../../utils/episode-helper";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const EpisodeGrid = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto">
      <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-10">
        {episodes.map((article: IEpisode, index: number) => (
          <EpisodeCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeGrid;
