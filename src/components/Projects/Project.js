import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Project.scss";
import { useState } from "react";
import "./Project.scss";
// import ReactHoverObserver from "react-hover-observer";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "2.5rem",
  },
}));

const Project = ({ src }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(true);
  const classes = useStyles();
  console.log(isActive);

  return (
    <div
      className="project"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className="project__content"
        style={
          isActive
            ? { visibility: "visible", opacity: "1 !important" }
            : { visibility: "hidden" }
        }
      >
        <h2 className="project__header">Instagram Clone</h2>
        <div className="project__icons">
          <LinkIcon className={classes.icon} />
          <GitHubIcon className={classes.icon} />
        </div>
      </div>
      <div className="project__image">
        <img
          src={src}
          alt="img"
          className="project__img"
          style={
            isActive
              ? { transform: "scale(1.1)", opacity: ".4" }
              : { transform: "scale(1)" }
          }
        />
      </div>
    </div>
  );
};

export default Project;
