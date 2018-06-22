import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";


class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip_id: "",
      budget: "",
      departure_date: "",
      duration: "",
      city_id: "",
      created: false,
      cities:[],
      redirectToNewPage: false
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
      city_id: this.state.city_id
    };
    fetch(`/trips`, {
      method: "POST",
      body: JSON.stringify(newTrip),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    }).then(trip => {
      console.log("happened");
      this.setState({ created: true, redirectToNewPage: true });
    });

  }

  componentDidMount() {
    fetch("/cities.json")
      .then(response => response.json())
      .then(cities => {
        this.setState({
          cities: cities
        });
      });
  }

  render() {
    if (this.state.redirectToNewPage) {
   return <Redirect to="/trips/new" />;
      }
    return (

      <div className="CreateTrip">
        <h1>Trip</h1>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <label for="budget">Budget</label>
          <input type="number" name="budget" placeholder="$" value={this.state.budget} />

          <label for="departure_date">Departing</label>
          <input type="date" name="departure_date"/>

          <label for="duration">Duration</label>
          <input type="number" name="duration" placeholder="3 days" />

          <label for="name">Origin</label>
          <select name = 'city_id'>
          { this.state.cities.map((city, index) => {
            return <option key = {index} value = {city.city_id} name = 'city_id'>{city.city_name}</option>
          })}
          </select>
          {/* <input type="text" name="city_id" placeholder="BOS" /> */}

          <p>
            <input type="submit" value="submit" />
          </p>
        </form>
        </div>
    );
  }
}
export default CreateTripPage;
