import React, { Component } from "react";
import Homepage from '../Homepage';
import "./style.css";
import CreateTripPage from "../CreateTripPage";
import TripPage from "../Trip";
import { BrowserRouter as Router, Route } from "react-router-dom";




class App extends Component {

  render() {
    return <div>
        <Router>
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/trips/create" exact component={CreateTripPage} />
            <Route path="/trips/new" exact component={TripPage} />
          </div>
        </Router>

      </div>
  }
}

export default App;
