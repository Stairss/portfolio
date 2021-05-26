import './App.scss';
import Home from './components/Home/Home';
import {
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Navigation/Nav';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import About from './components/About/About';

const useStyles = makeStyles({
  home: {
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite'
  },
  about: {
    background: 'linear-gradient(-315deg, #000000,#001522, #001e31,#00385a, #00497a, #04619f)',
    backgroundSize: '4000% 4000%',
    animation: 'gradient 15s ease infinite'
  },
  skills: {
    color: 'red !important',
  },
  projects: {
    color: 'red !important',
  },
});


function App() {
  const classes = useStyles();
  let location = useLocation();

  const handleLocation = () => {
    if (location.pathname === "/") {
      return classes.home
    } else if (location.pathname === '/about') {
      return classes.about
    } else if (location.pathname === '/skills') {
      return classes.skills
    } else if (location.pathname === '/projects') {
      return classes.projects
    }
  }


  return (
    <div className={`${handleLocation()} app`}>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">

        </Route>
        <Route path="/projects">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
