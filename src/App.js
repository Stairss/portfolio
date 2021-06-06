import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Navigation/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Modal from "./components/Modal/Modal";
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";
import "transition-style";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    setOpen(0);
  }, []);

  return (
    <div className={`app`}>
      {open >= 1 ? <Modal open={open} setOpen={setOpen} /> : <></>}
      <Nav open={open} setOpen={setOpen} />
      <div className="app__content">
        <Home name="home" />
        <About name="about" />
        <Skills name="skills" />
        <Projects name="projects" />
        <Footer />
      </div>
    </div>
  );
};

export default App;
