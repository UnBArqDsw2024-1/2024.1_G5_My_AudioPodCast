import { IPodcast, podcasts } from "../../../utils/podcast-helper";
import PodcastCard from "../PodcastCard/PodcastCard";

const PodcastGrid = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto">
      <div className="w-full flex flex-wrap justify-center lg:justify-between items-center gap-10">
        {podcasts.map((podcast: IPodcast, index: number) => (
          
          <PodcastCard key={index} {...podcast} />
        ))}
      </div>
    </div>
  );
};

export default PodcastGrid;
