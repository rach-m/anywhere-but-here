import React, { Component } from "react";
import "./style.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Summarypage extends Component {
  render() {
    return <div className="wrapper">
        <h1>Summary</h1>
        <div className="information-box">
          <div className="information">
            <img className="destination"src= "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1508524504/paris-ROOFTOP1017.jpg?itok=arOAqg7r" />
            <p>destination: MHT</p>
            <p> departure_date: 2018-06-29</p>
            <p> return_date: 2018-07-04</p>
            <p> price: 211.40</p>
          </div>
        </div>
      </div>;
  }
}
export default Summarypage;
