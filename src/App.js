import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Homepage/Home';
import Pages from './Pages/Homepage/Pages';
import Details from './Pages/Details/Details';
import EachProject from './Pages/Details/EachProject';
import Projects from './Pages/Details/Projects';
import One from './Pages/det/One';
import Two from './Pages/det/Two';
import Three from './Pages/det/Three';
import Four from './Pages/det/Four';
import Five from './Pages/det/Five';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pages">
            {/* <Home></Home> */}
            <Pages></Pages>



          </Route>
          <Route path="/projects/:id">
            <Projects></Projects>
          </Route>
          <Route path="/project/:projectId">
            <Details></Details>

          </Route>
          <Route path="/one">
            <One></One>
          </Route>
          <Route path="/two">
            <Two></Two>

          </Route>
          <Route path="/three">
            <Three></Three>

          </Route>
          <Route path="/four">
            <Four></Four>

          </Route>
          <Route path="/five">
            <Five></Five>

          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
