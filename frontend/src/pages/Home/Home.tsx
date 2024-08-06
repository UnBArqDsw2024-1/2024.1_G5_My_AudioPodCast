import ArticleSection from "../../components/Article/ArticleSection/ArticleSection"
import Hero from "../../components/Hero/Hero"
import PodcastSection from "../../components/Podcast/PodcastSection/PodcastSection"

const Home = () => {
  return (
    <main className="w-screen h-full">
      <Hero />
      <PodcastSection />
      <ArticleSection />
    </main>
  )
}

export default Home