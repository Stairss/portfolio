import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Navigation/Nav";
import About from "./components/About/About";
import Skills from "./Skills/Skills";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";
import AOS from "aos";
const slideOutRightAnimation = keyframes`${slideInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${slideOutRightAnimation};
`;

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
    console.log("dziala");
  }, []);

  return (
    <div className={`app`}>
      {open ? <Menu open={open} setOpen={setOpen} /> : <></>}
      <Nav open={open} setOpen={setOpen} />
      <div className="app__content">
        <Home name="home" data-aos="fade" />
        <About name="about" data-aos="fade" />
        <Skills name="skills" data-aos="fade" />
        <Projects name="projects" />
      </div>
    </div>
  );
}

export default App;
