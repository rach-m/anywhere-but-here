import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
        <div className="Homepage">
        <ul>
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="http://localhost:3000/trips/create">New</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="http://localhost:3000/trips">Trips</a></li>
          <a href="https://www.facebook.com/groups/538776059826617/about/" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/generalassembly/" className="fa fa-instagram"></a>
        </ul>
        
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
