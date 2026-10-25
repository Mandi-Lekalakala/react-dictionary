import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/searchbar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const term = query.trim();
    navigate(`/word/${encodeURIComponent(term)}`);
  }

  function handleChange(event) {
    setQuery(event.target.value);
    console.log(event);
  }

  return (
    <form role="search" className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search a word or phrase"
        aria-label="Search a word or phrase"
        value={query}
        onChange={handleChange}
      />
      <button type="button" className="search-mic" aria-label="Search by voice">
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="2" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
        </svg>
      </button>
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
