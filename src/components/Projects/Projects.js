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
              icon="https://i.pinimg.com/originals/a1/21/5b/a1215bccdeb94a4985541a9178afb1f8.png"
              git="https://github.com/Stairss/portfolio.git"
              link=""
              name="Portfolio"
            />
          </Fade>
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
              icon="https://i1.wp.com/www.tidyalloys.com/wp-content/uploads/tidyalloys.com_prestige_icon.png?fit=514%2C514&ssl=1"
              git="https://github.com/Stairss/hubcap-configurator"
              link="http://magmeagencyssd.e-kei.pl/config_2021/stage/project/"
              name="Hubcap Configurator"
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
              icon="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
              git="https://github.com/Stairss/discord-clone"
              link="https://stairss.github.io/discord-clone/"
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
              icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png"
              git="https://github.com/Stairss/todo-app"
              link="https://todo-app-cfe6d.web.app"
              name="Todo App"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Projects;
