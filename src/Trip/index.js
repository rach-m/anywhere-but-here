import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import CreateTripPage from '../CreateTripPage'

class TripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrip: []
    };
  }

  componentDidMount() {
    fetch("/trips/create").then(newTrip => {
      this.setState({
        newTrip: newTrip
      });
    });
    console.log(this.state.newTrip)
    fetch(
      `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wuSjsq5981Vet1MPJkhu3FB4HxAABw1U&origin=${
        this.state.city_code
      }&departure_date=${this.state.departure_date}&duration=${
        this.state.duration
      }&max_price=${this.state.budget}`
    )
      .then(response => response.json())
      .then(trips => {
        this.setState({
          trips
        });
        //   console.log(trips);
        //   let randomTrip = Math.floor(Math.random() * trips.results.length)
        //   console.log(trips.origin);
        //   console.log(trips.results[randomTrip]);
        //   console.log(trips.results[randomTrip].destination);
        //   console.log(trips.results[randomTrip].departure_date);
        //   console.log(trips.results[randomTrip].return_date);
        //   console.log(`$${trips.results[randomTrip].price}`);
      });
  }
  render() {
    return <div className="Trip">

        <div className="Trip-details">
          <p>{this.trip_id}</p>
          <p>Style: {this.state.budget}</p>
          <p>City: {this.state.departure_date}</p>
          <p>Architect: {this.state.duration}</p>
          <p>Year Built: {this.state.airport_id}</p>
        </div>
      </div>;
  }
}
export default TripPage;

