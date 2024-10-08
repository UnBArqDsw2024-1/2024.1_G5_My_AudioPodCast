import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import Show from "./pages/Show/Show";
import Podcasts from "./pages/Podcasts/Podcasts";
import PodcastDetail from "./components/Podcast/PodcastDetail/PodcastDetail";
import SingleArticle from "./pages/Articles/SingleArticle/SingleArticle";
import Articles from "./pages/Articles/Articles";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/show/:showName" element={<Show />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;