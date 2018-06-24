import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div className="Homepage">
          <header>
            <nav>HERE IS A NAV!</nav>
          </header>
          <div className="flex-wrapper">
            <h1>Anywhere But Here</h1>
            <h2>Luxurious escapes for less</h2>

            <button>
              <Link to="/trips/create">Plan Your Escape</Link>
            </button>
            <button>
              <Link to="/trips/previous">Previous Searches</Link>
            </button>
          </div>
          <footer>this is a footer</footer>
        </div>
      </Router>
    );
  }
}

export default Homepage;
