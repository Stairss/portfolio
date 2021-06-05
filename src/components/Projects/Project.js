import { makeStyles } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Project.scss";
import { useState } from "react";
import "./Project.scss";
import styled from "styled-components";
import { keyframes } from "styled-components";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "2.5rem",
  },
}));

const scale = keyframes`
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.1);
    }
`;

const Scale = styled.div`
  &:hover {
    opacity: 0.4;
    animation: ${scale} 0.4s ease-in-out;
  }
`;

const Project = ({ icon, git, link, name }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(true);
  const classes = useStyles();

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
        <h2 className="project__header">{name}</h2>
        <div className="project__icons">
          <a href={link} target="_blank" rel="noreferrer">
            <LinkIcon className={classes.icon} />
          </a>
          <a href={git} target="_blank" rel="noreferrer">
            <GitHubIcon className={classes.icon} />
          </a>
        </div>
      </div>
      <div className="project__image">
        <img
          src={icon}
          alt="img"
          className="project__img"
          style={
            isActive
              ? {
                  transform: "scale(1.1)",
                  opacity: ".4",
                  filter: "blur(2px)",
                }
              : { transform: "scale(1)" }
          }
        />
      </div>
    </div>
  );
};

export default Project;
