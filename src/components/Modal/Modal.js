import "./Modal.scss";
import CloseIcon from "@material-ui/icons/Close";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import "transition-style";

const Menu = ({ open, setOpen }) => {
  return (
    <div
      className="menu"
      transition-style={
        open % 2 == 1 ? "in:circle:center" : "out:circle:center"
      }
    >
      <div className="menu__close">
        <CloseIcon onClick={() => setOpen(open + 1)} />
      </div>
      <div className="menu__content">
        <h2>Contact me</h2>

        <a href="mailto:dawidspisak@gmail.com" className="basic-6">
          <h1>dawidspisak@gmail.com</h1>
        </a>
      </div>
      <div className="menu__socials">
        <h3 className="continuous-5">Social</h3>
        <div className="menu__icons">
          <a
            href="https://www.facebook.com/profile.php?id=100011721724719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/dawidspisak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/dawid-spisak-a62751198/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/Stairss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
