import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <div>
          <li>Hooks</li>
          <ol>
            <li>
              <Link to="/use-effect">UseEffect</Link>
            </li>
            <li>
              <Link to="/use-state">UseState</Link>
            </li>
            <li>
              <Link to="/use-effect-api">UseEffectAPI</Link>
            </li>
            <li>
              <Link to="/use-ref">UseRef</Link>
            </li>
            <li>
              <Link to="/use-memo">UseMemo</Link>
            </li>
          </ol>
        </div>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
