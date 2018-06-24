import React, { Component } from "react";
import Summarypage from "../Summarypage";
import "./style.css";

class Alltripspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    fetch("/trips.json")
      .then(response => response.json())
      .then(trips => {
        this.setState({
          trips: trips
        });
      });
  }

  render() {
    return (
      <div className="Alltripspage">
        {this.state.trips.map(trip => {
          return (
            <Summarypage
              id={trip.destination}
              image={trip.departure_date}
              return_date={trip.return_date}
              price={trip.price}
            />
          );
        })}
      </div>
    );
  }
}

export default Alltripspage;
