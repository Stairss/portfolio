import ShootingStars from "./ShootingStars";
import Skill from "./Skill";
import "./Skills.scss";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
const Skills = () => {
  return (
    <section className="skills">
      <div className="night">
        <ShootingStars />
      </div>
      <div className="skills__header">
        <Bounce right>
          <h2>Skills:</h2>
        </Bounce>
      </div>

      <div className="skills__content">
        <Fade bottom>
          <Skill lang="HTML5" color="#c0392b" delay={0} skill={100} />
          <Skill lang="CSS/SASS" color="#1199ff" delay={0.7} skill={95} />
          <Skill lang="ReactJS" color="#9b59b6" delay={1.4} skill={80} />
          <Skill lang="JavaScript" color="#ffa500" delay={2.1} skill={75} />
          <Skill lang="Git" color="#27ae60" delay={2.8} skill={60} />
          <Skill lang="Redux" color="#2FADAB" delay={3.5} skill={50} />
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
