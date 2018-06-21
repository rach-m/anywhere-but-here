import React, { Component } from "react";
import "./style.css";
import Homepage from "../Homepage";
import CreateTripPage from "../CreateTripPage";
import Summarypage from "../Summarypage";
import { BrowserRouter as Router, Route } from "react-router-dom";




class App extends Component {
  render() {
    return <div>
        <Router>
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/trips/create" exact component={CreateTripPage} />
            <Route path="/trips/summary" exact component={Summarypage} />
          </div>
        </Router>
      </div>;
  }
}

export default App;
