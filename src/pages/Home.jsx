import PopularSearches from "../components/PopularSearches";
import QuizPromo from "../components/QuizPromo";
import SearchBar from "../components/SearchBar";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Every word, explained!</h1>
        <p className="hero-sub">
          Definitions, pronounciation, synonyms and more.
        </p>
        <SearchBar />
        <PopularSearches />
      </section>

      <div className="home-grid">
        <aside className="home-side">
          <QuizPromo />
        </aside>
      </div>
    </>
  );
}
