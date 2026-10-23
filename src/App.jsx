import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Quiz from "./pages/Quiz";
import WordOfTheDay from "./pages/WordOfTheDay";
import WordResult from "./pages/WordResult";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word/:term" element={<WordResult />} />
        <Route path="/word-of-the-day" element={<WordOfTheDay />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
