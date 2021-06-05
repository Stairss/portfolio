import Paralax from "./Paralax";
import Project from "./Project";
import "./Projects.scss";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const Projects = () => {
  return (
    <section className="projects">
      <Paralax />
      <div className="projects__container">
        <div className="projects__header">
          <Bounce left>
            <h1>Projects</h1>
          </Bounce>
        </div>
        <div className="projects__content">
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              git="#"
              link=""
              name="Instagram Clone"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Projects;
