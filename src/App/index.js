import React, { Component } from "react";
import "./style.css";
import Homepage from "../Homepage";
import CreateTripPage from "../CreateTripPage";
import Summarypage from "../Summarypage";
import EditPage from "../EditPage";
import Alltripspage from "../Alltripspage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavigationBar = ({ visible }) => (
  <div id="navbar" className={visible ? "slideIn" : "slideOut"}>
    Hello
  </div>
);



class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { visible: false };
  }

  handleClick() {
    this.setState(prev => ({ visible: !prev.visible }));
  }
  render() {
    return <div>
        <div id="App">
          <button type="button" onClick={this.handleClick}>
            {this.state.visible ? "Hide navbar" : "Show navbar"}
          </button>
          <hr />
          <NavigationBar visible={this.state.visible} />
        </div>
        <Router>
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/trips/create" exact component={CreateTripPage} />
            <Route path="/trips/:id.json" exact component={Summarypage} />
            <Route path="/trips/:id/edit" exact component={EditPage} />
            <Route path="/trips.json" exact component={Alltripspage} />
          </div>
        </Router>
      </div>;
  }
}

export default App;
