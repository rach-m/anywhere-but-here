import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
        <div className="Homepage">
          <div className="flex-wrapper">
            <h1>Anywhere But Here</h1>
            <h2>Luxurious escapes for less</h2>

            <Link to="/trips/create">
              <button type = 'button'>Plan Your Escape</button>
            </Link>
            <Link to="/trips">
              <button type = 'button'>Previous Searches</button>
            </Link>
          </div>
        </div>
    )
  }
}

export default Homepage;
