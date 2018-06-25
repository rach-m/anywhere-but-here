import React, { Component } from "react";
import Summarypage from "../Summarypage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./style.css";
import moment from "moment";

class Alltripspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      cities: [],

      redirectToNewPage: false
    };
  }

  componentDidMount() {
    fetch("/trips")
      .then(response => response.json())
      .then(trips => {
        this.setState({
          trips: trips
        });
        fetch("/cities.json")
          .then(response => response.json())
          .then(cities => {
            this.setState({
              cities: cities
            });
          });
      });
  }

  render() {
    return (
      <div className="background">
        <h1>All Previous Searches</h1>
        <div className="Alltripspage">
          {this.state.trips.map(trip => {
            return (
              <div className="singleTrip">
                <Link to={`/trips/${trip.trip_id}.json`}>
                  <p className="label">
                    Budget: <span>${trip.budget}</span>
                  </p>
                  <p className="label">
                    Departure Date:{" "}
                    <span>
                      {moment(trip.departure_date).format("MMM DD, YYYY")}
                    </span>
                  </p>
                  <p className="label">
                    Duration: <span>{trip.duration} Days</span>
                  </p>
                  {this.state.cities.map(city => {
                    if (city.city_id === trip.city_id) {
                      return (
                        <p className="label">
                          Origin: <span>{city.city_name}</span>
                        </p>
                      );
                    }
                  })}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Alltripspage;
