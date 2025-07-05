import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = ({
  darkTheme,
  setDarkTheme,
}: {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Haze Gray
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Menu />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link">
              <Link to="/contact">Contact</Link>
            </a>
          </li>
          <li
            className="theme-button"
            onClick={() => setDarkTheme((prev) => !prev)}
          >
            {darkTheme === true ? <Moon /> : <Sun />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
