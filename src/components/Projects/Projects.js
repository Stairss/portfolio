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
              icon="https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon--socialmedia-iconset--uiconstock-0.png"
              git="https://github.com/Stairss/amazon-clone-with-ecommerce"
              link="https://clone-ba7cf.web.app/"
              name="Amazon Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              git="https://github.com/Stairss/twitter-clone"
              link="https://twitter-clone-5ab4b.web.app"
              name="Twitter Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://image.flaticon.com/icons/png/512/1/1560.png"
              git="https://github.com/Stairss/todo-app"
              link="https://todo-app-cfe6d.web.app"
              name="Todo App"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
              git="https://github.com/Stairss/discord-clone"
              link="https://discord-clone-b219e.web.app"
              name="Discord Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png"
              git="https://github.com/Stairss/linkedin-clone"
              link="https://linkedin-clone-f7c63.web.app/"
              name="LinkedIn Clone"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://cdn2.iconfinder.com/data/icons/gears-wheels-blades/512/wheel_cover-512.png"
              git="https://github.com/Stairss/hubcap-configurator"
              link="http://magmeagencyssd.e-kei.pl/config_2021/stage/project/"
              name="Hubcap Configurator"
            />
          </Fade>
          <Fade bottom>
            <Project
              icon="https://pics.freeicons.io/uploads/icons/png/21201021021574330934-512.png"
              git="#"
              link=""
              name="Portfolio"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Projects;
