import React, { Component } from "react";
import "./style.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Summarypage extends Component {
  render() {
    return <div className="wrapper">
        <h1>Summary</h1>
        <div className="information">
          <p>destination: MHT</p>
          <p> departure_date: 2018-06-29</p>
          <p> return_date: 2018-07-04</p>
          <p> price: 211.40</p>
        </div>
      </div>;
  }
}
export default Summarypage;
