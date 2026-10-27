import { Link } from "react-router-dom";

const POPULAR = [
  "serendipity",
  "ephemeral",
  "petrichor",
  "ubiquitous",
  "resilient",
];

export default function PopularSearches() {
  return (
    <div className="popular">
      <span className="popular-label">Popular:</span>
      {POPULAR.map(function (word) {
        return (
          <Link key={word} to={`/word/${word}`} className="chip">
            {word}
          </Link>
        );
      })}
    </div>
  );
}
