import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Team from './Team/Team';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      {/* <Navbar/> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/our-team">
            <Team />
          </Route>
        </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;
