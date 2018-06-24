import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Summarypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_code: '',
      departure_date: '',
      duration: '',
      budget: '',
      trip_id: '',
    };
  }

  componentDidMount() {
    fetch(`/trips/${this.props.id}.json`).then(json => json.json().then(data =>{
    // console.log(data);
    fetch(
      `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wuSjsq5981Vet1MPJkhu3FB4HxAABw1U&origin=${
        data.city_code
      }&departure_date=${data.departure_date}&duration=${
        data.duration
      }&max_price=${data.budget}`
    )})

        //   console.log(trips);
        //   let randomTrip = Math.floor(Math.random() * trips.results.length)
        //   console.log(trips.origin);
        //   console.log(trips.results[randomTrip]);
        //   console.log(trips.results[randomTrip].destination);
        //   console.log(trips.results[randomTrip].departure_date);
        //   console.log(trips.results[randomTrip].return_date);
        //   console.log(`$${trips.results[randomTrip].price}`);
     ).then(response =>this.setState({
       city_code: this.state.city_code,
      departure_date: this.state.departure_date,
      budget: this.state.budget
     }))
    console.log(this.state.budget) };
  render() {
    return <div className="Summarypage">
        <div className="info-box">
          <div className="info">
            <h2>Your Trip:</h2>
            <img className="destination" src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1508524504/paris-ROOFTOP1017.jpg?itok=arOAqg7r" />
            <p> Destination: {this.state.destination}</p>
            <p> Departure_date: 2018-06-29</p>
            <p> Return_date: 2018-07-04</p>
            <p> Price: 211.40</p>
            <div className="buttons">
              <button>
                <Link to="/trips/edit">Edit</Link>
              </button>
              <button>
                <Link to="/trip/delete">Delete</Link>
              </button>
            </div>
          </div>
        </div>
      </div>;
}
}

export default Summarypage
