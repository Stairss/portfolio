import "./About.scss";
// import Submarine from './Submarine'
// import Octocat from './Octocat'
import { Wave, Random } from "react-animated-text";
import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <section className="about">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <div className="about__info">
        <Fade left>
          <h1>
            <Wave text="I'm Dawid Spisak" effect="stretch" effectChange={2.0} />
          </h1>
        </Fade>
        {/* <Zoom> */}
        <Fade right>
          <p>
            Enthusiastic Web Developer, Freelancer eager to contribute to team
            success through hard work, attention to detail and excellent
            organizational skills. Clear understanding of Javascript, React,
            Redux and MERN. Motivated to learn, grow and excel in the Dev
            industry.
          </p>
          {/* </Zoom> */}
        </Fade>
      </div>
      <div className="about__animations">
        {/* <Octocat /> */}
        {/* <Submarine /> */}
      </div>
    </section>
  );
};

export default About;
