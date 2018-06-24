import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div className="Homepage">
          <div className="flex-wrapper">
            <h1>Anywhere But Here</h1>
            <h2>Luxurious escapes for less</h2>

            <button onClick = {<Link to = "/trips/create" />}>
              Plan Your Escape
            </button>
            <button>
              <Link to = "/trips/previous">Previous Searches</Link>
            </button>
          </div>
        </div>
      </Router>
    );
  }
}

export default Homepage;
