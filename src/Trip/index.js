import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Trip extends Component {
  render() {
    return <div className="Trip">
        <div className="Trip-details">
          <p>{this.trip_id}</p>
          <p>Style: {this.props.budget}</p>
          <p>City: {this.props.departure_date}</p>
          <p>Architect: {this.props.duration}</p>
          <p>Year Built: {this.props.airport_id}</p>
        </div>
      </div>;

export default Trip;
