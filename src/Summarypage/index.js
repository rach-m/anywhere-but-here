import React, { Component } from "react";
import "./style.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Summarypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      city_code: '',
      departure_date: '',
      duration: '',
      budget: ''
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`/trips/${id}.json`).then(newTrip => {
      this.setState({
        id: newTrip.id,
        city_code: newTrip.city_code,
        departure_date: newTrip.departure_date,
        duration: newTrip.duration,
        budget: newTrip.budget
      });
    });
    console.log(this.state.duration);
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

    return (
      <div className="Summarypage">
        <header>
          <nav>HERE IS A NAV!</nav>
        </header>
        <h1>Summary</h1>
        <div className="information-box">
          <div className="information">
            <img
              className="destination"
              src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1508524504/paris-ROOFTOP1017.jpg?itok=arOAqg7r"
            />
            <p>destination: {this.state.destination}</p>
            <p> departure_date: 2018-06-29</p>
            <p> return_date: 2018-07-04</p>
            <p> price: 211.40</p>
          </div>

        </div>
        <footer>this is a footer</footer>
      </div>
    );
  }
}
export default Summarypage;