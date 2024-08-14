import ArticleSection from "../../components/Article/ArticleSection/ArticleSection";
import Hero from "../../components/Hero/Hero";
import PodcastSection from "../../components/Podcast/PodcastSection/PodcastSection";
import TutorialSection from "../../components/Tutorial/TutorialSection/TutorialSection";

const Home = () => {
  return (
    <main className="w-full h-full">
      <Hero />
      <PodcastSection />
      <ArticleSection />
      <TutorialSection/>
    </main>
  );
};

export default Home;
