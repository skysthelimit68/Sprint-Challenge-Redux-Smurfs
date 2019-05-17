import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm"
import SmurfSlider from "./SmurfSlider"
 


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
          <Link to="/">
            <h1>Smurf Village</h1>
          </Link>
          <nav>
            <NavLink to="/">
              Smurf Village
            </NavLink>
            <NavLink to="/smurf-form">
              Add Smurf
            </NavLink>
          </nav>
        </header>
        <SmurfSlider />
          <Link to="/addSmurf">Add Smurf</Link>
          <Route exact path="/" component={Smurfs} />
          <Route path="/addSmurf" component={SmurfForm} />
          <Route path="/updateSmurf/:id" component={SmurfForm} />

        </div>
      </Router>
    );
  }
}

export default App;
