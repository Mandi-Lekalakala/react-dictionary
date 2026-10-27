import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        Learn<span>.</span>
      </Link>
      <nav className="nav-links">
        <NavLink to="/word-of-the-day">Word Of The Day</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <button className="navbar-theme" aria-label="Switch to dark mode">
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
