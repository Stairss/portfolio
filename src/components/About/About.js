import "./About.scss";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section className="about">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="about__container">
        <Fade bottom>
          <div className="about__info">
            <Flash>
              <h1>Welcome to my world</h1>
            </Flash>
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
                      "Man with passion...",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
