import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo">
        Learn<span>.</span>
      </Link>
    </header>
  );
}
