import React, { Component } from "react";
import "./style.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      trip_id: "",
      budget: "",
      departure_date: "",
      duration: "",
      name: ""
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newTrip = {
      budget: this.state.budget,
      departure_date: this.state.departure_date,
      duration: this.state.duration,
      city_name: this.state.city_name
    };
        fetch(`https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wuSjsq5981Vet1MPJkhu3FB4HxAABw1U&origin=${this.state.city_name}&departure_date=${this.state.departure_date}&duration=${this.state.duration}&max_price=${this.state.budget}`)
          .then(response => response.json())
          .then(trips => {
            this.setState({ trips });
            // console.log(trips);
            // let randomTrip = Math.floor(Math.random() * trips.results.length);
            // console.log(trips.origin);
            // console.log(trips.results[randomTrip]);
            // console.log(trips.results[randomTrip].destination);
            // console.log(trips.results[randomTrip].departure_date);
            // console.log(trips.results[randomTrip].return_date);
            // console.log(`$${trips.results[randomTrip].price}`);
          });
  }

  // componentDidMount() {
  //   fetch(`https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wuSjsq5981Vet1MPJkhu3FB4HxAABw1U&origin=${this.state.city_name}&departure_date=${this.state.departure_date}&duration=${this.state.duration}&max_price=${this.state.budget}`)
  //     .then(response => response.json())
  //     .then(trips => {
  //       this.setState({ trips });
  //       // console.log(trips);
  //       // let randomTrip = Math.floor(Math.random() * trips.results.length);
  //       // console.log(trips.origin);
  //       // console.log(trips.results[randomTrip]);
  //       // console.log(trips.results[randomTrip].destination);
  //       // console.log(trips.results[randomTrip].departure_date);
  //       // console.log(trips.results[randomTrip].return_date);
  //       // console.log(`$${trips.results[randomTrip].price}`);
  //     });
  // }

  render() {
    return (
<<<<<<< HEAD
    <div className='CreateTrip'>
    <h1>Trip</h1>
    <form>
        
=======
      <div className="CreateTrip">
        <h1>Trip</h1>
        <form>
>>>>>>> master
          <label for="budget">Budget</label>
          <input type="number" name="budget" placeholder="$" />

          <label for="departure_date">Departing</label>
          <input type="date" name="departure_date" placeholder="" />

          <label for="duration">Duration</label>
          <input type="number" name="duration" placeholder="3" />

          <label for="origin">Origin</label>
          <input type="text" name="name" placeholder="JFK" />

          <p>
            <input type="submit" value="submit" />
          </p>
        </form>
      </div>
    );
  }
}
export default CreateTripPage;
