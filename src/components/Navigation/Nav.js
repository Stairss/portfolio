import "./Nav.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import useWindowDimensions from "./window";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "react-reveal/Fade";

const Nav = ({ open, setOpen }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const { width } = useWindowDimensions();

  return (
    <Fade top>
      <nav className="nav">
        <div className="nav__avatar">
          <h3>
            <Link onClick={toggleHome} to="/">
              DS
            </Link>
          </h3>
        </div>
        <ul className="nav__list">
          <li>
            <Link
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              exact="true"
              className="nav__underline"
              activeClass="active"
              to="home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              spy={true}
              duration={500}
              exact="true"
              offset={-80}
              className="nav__underline"
              activeClass="active"
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              spy={true}
              duration={500}
              exact="true"
              offset={-80}
              className="nav__underline"
              activeClass="active"
              to="skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              spy={true}
              duration={500}
              exact="true"
              className="nav__underline"
              activeClass="active"
              to="projects"
            >
              Projects
            </Link>
          </li>
        </ul>
        <div className="nav__link">
          {width > 800 ? (
            <Link
              className="nav__underline"
              to="/contact"
              onClick={() => setOpen(open + 1)}
            >
              Contact
            </Link>
          ) : (
            <MenuIcon onClick={() => setOpen(open + 1)} />
          )}
        </div>
      </nav>
    </Fade>
  );
};

export default Nav;
