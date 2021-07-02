import "./Home.scss";
import Fade from "react-reveal/Fade";
import cv from "../../assets/cv.png";
import Particles from "react-particles-js";
import { useState } from "react";
import { useWindowSize } from "./useWindowSize";
import { useEffect } from "react";

const Home = () => {
  const size = useWindowSize();
  const [value, setValue] = useState(50);
  useEffect(() => {
    if (size.width < 1000) {
      setValue(30);
    } else {
      setValue(60);
    }
  }, [size.width]);

  return (
    <section className="home">
      <Particles
        style={{ position: "absolute", left: "0", top: "0" }}
        params={{
          particles: {
            number: {
              value: value,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="home__container">
        <div className="home__content">
          <Fade top delay={400}>
            <h1 className="home__title">Dawid Spisak</h1>
          </Fade>
          <Fade right delay={400}>
            <h2 className="home__subtitle">Frontend developer</h2>
          </Fade>
          <Fade bottom delay={400}>
            <div className="home__wrapper">
              <span className="home__button">
                <a href={cv} download="dawid_spisak_resume"></a>
              </span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Home;
