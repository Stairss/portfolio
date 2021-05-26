import './App.scss';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Navigation/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
