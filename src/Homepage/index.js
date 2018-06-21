import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>HERE IS A NAV!</nav>
          </header>
          <div class="flex-wrapper">
            <h1>Anywhere But Here</h1>
            <h2>Luxurious escapes for less</h2>

            <button>
              <Link to="/trip/create">Plan Your Escape</Link>
            </button>
            <button>
              <Link to="/trip/previous">Previous Searches</Link>
            </button>
          </div>
          <footer>this is a footer</footer>
        </div>
      </Router>
    );
  }
}

export default Homepage;