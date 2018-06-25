import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
        <div className="Homepage">
        <a href="https://www.facebook.com/groups/538776059826617/about/" class="fa fa-facebook"></a>
        <a href="https://www.instagram.com/generalassembly/" class="fa fa-instagram"></a>
          <div className="flex-wrapper">
            <h1>Anywhere But Here</h1>
            <h2>Luxurious escapes for less</h2>

            <Link to="/trips/create">
              <button type = 'button'>Plan Your Escape</button>
            </Link>
            <Link to="/trips/previous">
              <button type = 'button'>Previous Searches</button>
            </Link>
          </div>
        </div>
    )
  }
}

export default Homepage;
