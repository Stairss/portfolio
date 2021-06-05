import "./App.scss";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "./components/About/About";
import Skills from "./Skills/Skills";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import { NavHashLink } from "react-router-hash-link";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import { useState } from "react";

const slideOutRightAnimation = keyframes`${slideInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${slideOutRightAnimation};
`;

// const useStyles = makeStyles({
//   home: {
//     background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
//     backgroundSize: '400% 400%',
//     animation: 'gradient 15s ease infinite'
//   },
//   about: {
//     background: 'linear-gradient(-315deg, #000000,#001522, #001e31,#00385a, #00497a, #04619f)',
//     backgroundSize: '4000% 4000%',
//     animation: 'gradient 15s ease infinite'
//   },
//   skills: {
//   },
//   projects: {
//     color: 'red !important',
//   },
// });

function App() {
  // const classes = useStyles();
  // let location = useLocation();

  // const handleLocation = () => {
  //   if (location.pathname === "/") {
  //     return classes.home
  //   } else if (location.pathname === '/about') {
  //     return classes.about
  //   } else if (location.pathname === '/skills') {
  //     return classes.skills
  //   } else if (location.pathname === '/projects') {
  //     return classes.projects
  //   }
  // }

  // ${handleLocation()}
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className={`app`}>
      {open ? <Menu open={open} setOpen={setOpen} /> : <></>}
      <Nav open={open} setOpen={setOpen} />
      <div className="app__content">
        <Home name="home" />
        <About name="about" />
        <Skills name="skills" />
        <Projects name="projects" />
      </div>
    </div>
  );
}

export default App;
