import "./Home.scss";
import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Travelers from "./Travelers";
import Fade from "react-reveal/Fade";
import cv from "../../assets/cv.png";

const useStyles = makeStyles({
  button: {
    width: "75%",
    maxWidth: "270px",
    minWidth: "170px",
    padding: "0",
    marginTop: "1vw",
    "@media (max-width:800px)": {
      marginTop: "2vw",
      width: "50%",
    },
  },
  flex: {
    display: "grid",
    gridTemplateColumns: "75fr 25fr",
    gridTemplateRows: "1fr",
    height: "45px",
    width: "100%",
    "@media (max-width:600px)": {
      height: "40px",
    },
    "@media (max-width:400px)": {
      height: "35px",
    },
  },
  center: {
    display: "grid",
    placeItems: "center",
  },
  resume: {
    border: "solid 2px white",
    height: "100%",
    borderRight: "none",
  },
  arrow: {
    border: "solid 2px white",
    height: "100%",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <section className="home">
      <div className="home__container">
        <Travelers />
        <div className="home__content">
          <Fade top delay={400}>
            <h1 className="home__title">Dawid Spisak</h1>
          </Fade>
          <Fade right delay={400}>
            <h2 className="home__subtitle">Frontend developer</h2>
          </Fade>
          <Fade bottom delay={400}>
            <div className="home__wrapper">
              <Button
                className={`${classes.button} home__button`}
                download="dawid_spisak_resume"
                href={cv}
              >
                <div className={classes.flex}>
                  <div className="home__resume">
                    <span className={`${classes.center} ${classes.resume}`}>
                      Resume
                    </span>
                  </div>
                  <div className="home__arrow">
                    <span className={`${classes.center} ${classes.arrow}`}>
                      <ArrowForwardIcon style={{ color: "white" }} />
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </Fade>
        </div>
      </div>
      {/* <Background /> */}
    </section>
  );
};

export default Home;
