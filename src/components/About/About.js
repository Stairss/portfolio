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
          <div className="about__typewriter">
            <h3>I'm a</h3>
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "Developer...",
                    "Programmer...",
                    "Software Engineer...",
                    "Designer...",
                    "Geek...",
                    "man with passion...",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
