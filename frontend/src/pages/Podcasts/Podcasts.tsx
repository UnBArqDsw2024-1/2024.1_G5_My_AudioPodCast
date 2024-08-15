import PodcastGrid from "../../components/Podcast/PodcastGrid/PodcastGrid";

const Podcasts = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-10">Todos os Podcasts</h1>
      <PodcastGrid />
    </div>
  );
};

export default Podcasts;
