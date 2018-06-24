import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: "",
      departure_date: "",
      duration: "",
      city_id: "",
      created: false,
      cities: [],
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
    })
      .then(trip => trip.json())
      .then(json => {
        console.log(json.trip_id);
        this.setState({
          created: true,
          redirectToNewPage: true,
          trip_id: json.trip_id
        });
      });
  }

  componentDidMount() {
    fetch("/cities.json")
      .then(response => response.json())
      .then(cities => {
        this.setState({
          cities: cities
        })
      })
  }

  render() {
    if (this.state.redirectToNewPage) {
      let id = this.state.trip_id;
      return <Redirect to={`/trips/${id}.json`} />;
    }
    return (
      <div className="CreateTrip">
        <div className="formBox">
          <h1>New Trip</h1>
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <p>
              <label for="budget">Budget:</label>
              <input
                type="number"
                name="budget"
                placeholder="$"
                value={this.state.budget}
              />
            </p>
            <p>
              <label for="departure_date">Departing:</label>
              <input type="date" name="departure_date" />
            </p>
            <p>
              <label for="duration">Duration:</label>
              <input type="number" name="duration" placeholder="3 days" />
            </p>
            <p>
              <label for="name">Origin:</label>
            </p>
            <select name="city_id">
              {this.state.cities.map((city, index) => {
                return (
                  <option key={index} value={city.city_id} name="city_id">
                    {city.city_name}
                  </option>
                );
              })}
            </select>
            {/* <input type="text" name="city_id" placeholder="BOS" /> */}

            <p>
              <input type="submit" value="submit" />
            </p>
          </form>
        </div>
        {/* <footer>HI THERE</footer> */}
      </div>
    );
  }
}
export default CreateTripPage;
