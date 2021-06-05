import "./Menu.scss";
import CloseIcon from "@material-ui/icons/Close";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { useState } from "react";
const Menu = ({ open, setOpen }) => {
  return (
    <div className="menu">
      <div className="menu__close">
        <CloseIcon onClick={() => setOpen(!open)} />
      </div>
      <div className="menu__content">
        <h2>Contact me</h2>
        <h1>dawidspisak@gmail.com</h1>
      </div>
      <div className="menu__socials">
        <h3>Social</h3>
        <div className="menu__icons">
          <Facebook />
          <Instagram />
          <LinkedIn />
          <GitHub />
        </div>
      </div>
    </div>
  );
};

export default Menu;
