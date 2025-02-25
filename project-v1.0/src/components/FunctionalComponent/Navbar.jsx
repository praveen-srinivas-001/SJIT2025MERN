import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  var [dropdown, showDropdown] = useState(false);
  // var [dropdown1, showDropdown1] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>

        <Link to="/about" className="link">
          <li>About</li>
        </Link>

        <Link to="/gallery" className="link">
          <li>Gallery</li>
        </Link>

        <div
          onMouseEnter={() => showDropdown(!dropdown)}
          onMouseLeave={() => showDropdown(!dropdown)}
        >
          <li className="link">Hooks</li>
          {dropdown && (
            <ol className="dropdown-list">
              <Link to="/use-state" className="link">
                <li className="dropdown-link">UseState </li>
              </Link>
              <Link to="/use-effect" className="link">
                <li className="dropdown-link">UseEffect</li>
              </Link>
              <Link to="/use-effect-api" className="link">
                <li className="dropdown-link">UseEffectAPI</li>
              </Link>
              <Link to="/use-ref" className="link">
                <li className="dropdown-link">UseRef</li>
              </Link>
              <Link to="/use-callback" className="link">
                <li className="dropdown-link">UseCallback</li>
              </Link>
              <Link to="/use-memo" className="link">
                <li className="dropdown-link">UseMemo</li>
              </Link>
              <Link to="/use-memoize" className="link">
                <li className="dropdown-link">UseMemoize</li>
              </Link>
              <Link to="/memo" className="link">
                <li className="dropdown-link">Custom Hook</li>
              </Link>
            </ol>
          )}
        </div>

        <Link to="/studentresult" className="link">
          <li>Student Result</li>
        </Link>

        <Link to="/contact" className="link">
          <li>Contact</li>
        </Link>

        <Link to="/signup" className="link">
          <li>Signup</li>
        </Link>
      </nav>import PropTypes from 'prop-types';

    </header>
  );
};

export default Navbar;
ddd