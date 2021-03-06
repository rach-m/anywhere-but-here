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
  };

   myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

  windowonclick = function (event) {
    if (!event.target.matches('.fa fa-linkedin-square')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
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
    return <div className = 'background'>
      <div className="navBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/trips/create">New</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> <Link to="/trips">Trips</Link></li>
          <a href="https://www.facebook.com/groups/538776059826617/about/" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/generalassembly/" className="fa fa-instagram"></a>
        </ul>
        <h1>All Previous Searches</h1>
        <div className="Alltripspage">
          {this.state.trips.map(trip => {

            return <div className="singleTrip">
                <Link to={`/trips/${trip.trip_id}.json`}>
                  <p className="label">
                    Budget: <span>${trip.budget}</span>
                  </p>
                  <p className="label">
                    Departure Date: <span>
                      {moment(trip.departure_date).format(
                        "MMM DD, YYYY"
                      )}
                    </span>
                  </p>
                  <p className="label">
                    Duration: <span>{trip.duration} Days</span>
                  </p>
                  {this.state.cities.map(city => {
                    if (city.city_id === trip.city_id) {
                      return <p className="label">
                          Origin: <span>{city.city_name}</span>
                        </p>;
                    }
                  })}
                </Link>
              </div>;

          })}
        </div>
      </div>
      </div>
  }
}

export default Alltripspage;
