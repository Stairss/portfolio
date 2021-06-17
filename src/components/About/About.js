import "./About.scss";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section className="about">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className="about__container">
        <div className="about__info">
          <h1>Welcome to my world</h1>
          <h2>
            “First, solve the problem. Then,
            <br /> write the code.”
          </h2>
          <h3>I'm PROGRAMMER...</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
