// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import AnimeDetails from "./components/AnimeDetails/AnimeDetails";
import PopularAnime from "./components/Anime/PopularAnime/PopularAnime";
import LatestMangaTitles from "./components/Manga/LatestMangaTitles/LatestMangaTitles";
import MangaDetails from "./components/Manga/MangaDetails/MangaDetails";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import ChapterPage from "./components/Manga/ChapterPage/ChapterPage";

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    passedSearchTerm();
  })

  function passedSearchTerm(searchTerm) {
    let response = searchTerm
    setData(response)
  };

  return (
    <div class="background-color">
      <Navbar />
      <SearchBar submittedSearchTerm={passedSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              <PopularAnime data={data} />
              <LatestMangaTitles data={data} />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/searchpage" element={<SearchPage data={data} />}/>
        <Route path="/animedetails/:title/" element={<AnimeDetails data={data} />}/>
        <Route path="/videopage/:title-episode-1/" element={<VideoPage data={data} />} />
        <Route path="/mangadetails/:title" element={<MangaDetails data={data} />} />
        <Route path="/chapterpage/:title-chapter-1/" element={<ChapterPage data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
