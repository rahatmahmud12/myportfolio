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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            {/* <Home></Home> */}
            <Pages></Pages>

          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
