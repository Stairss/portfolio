import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Navigation/Nav";
import About from "./components/About/About";
import Skills from "./Skills/Skills";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import { useState } from "react";

const slideOutRightAnimation = keyframes`${slideInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${slideOutRightAnimation};
`;

function App() {
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
